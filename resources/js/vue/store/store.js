import Vue from 'vue'
import Vuex from 'vuex'
import $ from "jquery";
import axios from 'axios';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        closeListener: false,
        productsLoaded: false,
        products: [],
        filteredProducts: [],
        typeFilters: [],
        modelFilters: [],
        brandFilters: [],
        singleProduct: {},
        user: {},
        usersFIO: '',
        cartStep: 0,
        cart: {}
    },
    getters: {
        filteredProducts: state => state.filteredProducts,
        allProducts: state => state.products,
        user: state => state.user
    },
    actions: {
       CHECK_CART_STATE(context) {
           context.commit('checkCartState');
       },
       CHANGE_PROGRESS_STEP(context) {
           context.commit('changeProgressStep');
       },
       SET_CUSTOMER_FIO(context, obj) {
           context.commit('setCustomerFio', obj);
       },
       GET_USERS_INFO(context) {
           context.commit('getUserInfo');
       },
       ADD_PRODUCT_TO_CART(context, {id, amount}) {
           context.commit('addProductToCart', {id, amount})
       },
       GET_PRODUCT_BY_ID(context, id) {
           context.commit('getProductById', id);
       },
       SWITCH_PRODUCTS_LOADER(context) {
           context.commit('setProductsLoaded');
       },
       FILTER_PRODUCTS(context, data) {
           context.commit('filterProductByQuery', data);
       },
       COLLECT_FILTERS(context, data) {
           context.commit('getProductTypeFilters');
           context.commit('getProductModelFilters');
           context.commit('getProductBrandFilters');
       },
       fixCartStatus({ dispatch, commit }, { data }) {
           let amount = data.totalQuantity;
           let price = data.totalPrice;

           $('[data-cartamountval]').text(amount);
           $('[data-cartpriceval]').text(price);
       }
    },
    mutations: {
        checkCartState(state) {
            axios.get('/checkCartState')
                .then(response => {
                    state.cart = response.data;
                    console.warn('checkCartState', state.cart)
                })


            return state.cart
        },
        changeProgressStep(state) {
            let line = document.querySelector('.cart_wrap-crumb').querySelector('.active-item');

            if(state.cartStep === 0) {
                line.style.width = '37%';
            }

            if(state.cartStep === 1) {
                line.style.width = '65%';
            }

            state.cartStep++;
        },
        setCustomerFio(state, {firstname, lastname, tel, save}) {
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': window.token
                }
            });

            $.ajax({
                method: "get",
                url: '/setCustomerFio',
                data: {
                    firstname, lastname, tel, save
                },
                success: function (data) {
                    state.usersInfo = data
                },
                error: function (error) {
                    console.warn(error);
                }
            });
        },
        getUserInfo(state) {
            axios.get('/getUserInfo')
                .then(response => {
                    state.user = response.data;
                })

            return state.user
        },
        getProductById(state, id) {
            let product = state.products.filter((el) => el.id === id)
                          state.singleProduct = product[0];

            //XXX
            let amount = document.querySelector('.cart_wrap-item_inner-table_row-col_btns-btn-items_quantity');
                amount.innerText = 1;
                amount.setAttribute('data-modal-val', 1);

        },
        setProductsLoaded(state, data) {
            state.productsLoaded = true;
        },
        filterProductByQuery(state, data) {
            let newProducts = state.products.filter(item => {
                let param = item.params

                for (let key in data) {
                    if (param[key] === undefined || param[key] != data[key])
                        return false;
                }

                return true;
            });

            state.filteredProducts = newProducts;
        },
        getProductModelFilters(state) {
            state.modelFilters = [...new Set(state.products.map(item => item.params.art))];
        },
        getProductBrandFilters(state) {
            state.brandFilters = [...new Set(state.products.map(item => item.params.brand))];
        },
        getProductTypeFilters(state) {
            state.typeFilters = [...new Set(state.products.map(item => item.params.type))];
        },
        addProductToCart(state, {id, amount}) {
            let that = this;
            let url = `/products/addToCartAjaxGet/${id}`;

            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': window.token
                }
            });

            $.ajax({
                method: "get",
                url: `${url}`,
                data: {
                    id,
                    amount
                },
                success: function (data) {
                    that.dispatch('fixCartStatus', { data })
                },
                error: function (error) {
                    console.warn(error);
                }
            });
        },
        setCloseListener(state, payload) {
            state.closeListener = payload;
        },
        getFilteredProducts(state, payload) {
            let products = state.products;
            state.filteredProducts = [];

            products.forEach((prod) => {
                if(prod.name.indexOf(payload) >= 0) {
                    state.filteredProducts.push(prod);
                }
            });

            state.closeListener = true;
        },
        getAllProducts (state) {
            let that = this;

            if(state.products.length === 0) {
                axios.get('/catalogСartridge')
                    .then(response => {
                        response.data.forEach((el) => {
                            let params = JSON.parse(el.params);
                            let cape = JSON.parse(el.cape);
                            let newCape = {};

                            cape.map((obj) => {
                                Object.keys(obj).forEach(function(key) {
                                    let str = obj[key];
                                    newCape[key] = str.trim();
                                });
                            })

                            el.price = Math.ceil(el.price);
                            el.cape = newCape;
                            el.params = params;

                        });

                        state.products = response.data;
                        state.filteredProducts = state.products;
                    })

                    .then(() => {
                        that.dispatch('COLLECT_FILTERS');
                        that.dispatch('SWITCH_PRODUCTS_LOADER');
                    })

                    .catch(err => {
                        console.log(err);
                    });
            }

            return state.products;
        }
    }
})

export default store
