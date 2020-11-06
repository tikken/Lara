<?php

namespace App\Http\Controllers;

use App\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;
use App;

class AdminOrdersController extends Controller
{
    public function index()
    {
        $orders = Order::paginate(8);

        return view('admin.orders.display', ['orders' => $orders]);
    }

    public function viewOrderDetails($id)
    {
        $order = Order::find($id);
        $order['order_info'] = json_decode($order['order_info']);
        $user = DB::table('users')->where('id', $order['user_id'])->get();

        return view('admin.orders.details', ['order' => $order, 'order_user' => $user]);
    }

    public function repeatOrder(Request $request, $id)
    {
        $user_id = Auth::id();
        $order = DB::table('orders')->where('id', $id)->get();
        $order_items = DB::table('order_items')->where('order_id', $id)->get();
        $date = date('Y-m-d H:i:s');

        $newOrderArray = array(
            'status'=> 'on_hold',
            'date'=>$date,
            'del date' => '',
            'price' => $order[0]->price,
            'user_id' => $user_id
        );

        $created_order = DB::table('orders')->insert($newOrderArray);
        $order_id = DB::getPdo()->lastInsertId();

        foreach($order_items as $cart_item) {
            $item_id = $cart_item->id;
            $item_quantity = $cart_item->quantity;

            $prevCart = $request->session()->get('cart');
            $cart = new Cart($prevCart);

            for ($x = 1; $x <= $item_quantity; $x++) {

                $prevCart = $request->session()->get('cart');
                $cart = new Cart($prevCart);
                $product = Product::find($item_id);
                $cart->addItem($item_id, $product, 1);
                $request->session()->put('cart', $cart);
            }
        }

        return redirect()->route('cartItems');
    }

    public function changeOrderStatus(Request $request)
    {
        $status = $request->status;
        $id = $request->id;

        $order = Order::find($id);
        DB::table('orders')->where('id', $order->id)->update(['status' => $status]);

        return response()->json(['status' => $status, 'id' => $id,]);
    }

    public function createOrder(Request $request)
    {
        $cart = Session::get('cart');
        $user_id = Auth::id();
        $environment = App::environment();

        if($cart) {
            $date = date('Y-m-d H:i:s');
            $orderInfo = new CustomerDataController;
            $orderInfoData = $orderInfo->getSessionInfo();

            $newOrderArray = array(
                'status' => 'on_hold',
                'date' => $date,
                'del date' => '',
                'price' => $cart->totalPrice,
                'user_id' => $user_id,
                'payment_status' => 'not_paid',
                'order_info' => json_encode($orderInfoData->original),
                'created_at' => \Carbon\Carbon::now()
            );

            DB::table('orders')->insert($newOrderArray);

            $order_id = DB::getPdo()->lastInsertId();

            foreach ($cart->items as $cart_item) {
                $item_id = $cart_item['data']['id'];
                $item_name = $cart_item['data']['name'];
                $item_price = $cart_item['data']['price'];
                $item_quantity = $cart_item['quantity'];

                $newItemsInCurrentOrder = array(
                    'item_id' => $item_id,
                    'order_id' => $order_id,
                    'item_name' => $item_name,
                    'item_price' => $item_price,
                    'quantity' => $item_quantity
                );

                DB::table('order_items')->insert($newItemsInCurrentOrder);
            }

            Session::forget('cart');
            Session::flush();

            if($environment != 'local') {
                $mailer = new SendEmailController();
                $mailer::sendOrderWasCreated($order_id);
            }
        }

        return response()->json($newOrderArray);
    }
}
