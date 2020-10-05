let getters = {
        user: state => state.user,
        searchProducts: state => state.searchProducts,
        filteredProducts: state => state.filteredProducts,
        allProducts: state => state.products,
        deliveryType: state => state.deliveryType,
        urikValidation: state => state.urikValidation,
        orders: state => state.orders,
        pickUpPoint: state => state.pickUpPoint,
        orderPaid: state => state.orderPaid,
        paymentProvider: state => state.paymentProvider,
        aboutData: state => state.aboutData,
        lastTwoYearsInfo: state => state.lastTwoYearsInfo,
        gridCatalog: state => state.gridCatalog,
        catalogPerPage: state => state.catalogPerPage,
        cart: state => state.cart,
        informationPosts: state => state.informationPosts,
        customerIndex: state => state.customerIndex,
        customerAdress: state => state.customerAdress,
        stockDeliveryPickup: state => state.stockDeliveryPickup,
        selfDelivery: state => state.selfDelivery,
        lastDeliveryAdress: state => state.lastDeliveryAdress,
        showAditionalForms: state => state.showAditionalForms,
        readyToGo: state => state.readyToGo
}

export default getters;
