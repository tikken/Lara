// require('./bootstrap');
// window.Vue = require('vue');
import './components/Menu';
import './components/Swiper';
import './components/Search';
import './components/Form';

import SimpleMap from './components/Map'
import ContactsFormController from './controllers/ContactsFormController'
import LoginFormController from './controllers/LoginFormController'
import SearchController from './controllers/SearchController'
import DeliveryController from './controllers/DeliveryController'
import DeliveryFormController from './controllers/DeliveryFormController'
import CartController from './controllers/CartController'
import Checkbox from './components/Checkbox'
import DeliveryAuthController from './controllers/DeliveryAuthController'
import CatalogFiltersController from './controllers/CatalogFiltersController'
import InformationController from './controllers/InformationController'
import ProductDetailsController from './controllers/ProductDetailsController'

$(document).ready(function() {
    new LoginFormController();
    new ContactsFormController();
    new SearchController();
    new Checkbox();
    new CartController();
    new DeliveryAuthController();
    new CatalogFiltersController();
    new InformationController();
    new DeliveryFormController();
    new ProductDetailsController();
    new SimpleMap();
});
