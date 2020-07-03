(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./auth/auth.module": "./src/app/auth/auth.module.ts",
	"./home/home.module": "./src/app/home/home.module.ts"
};

function webpackAsyncContext(req) {
	return Promise.resolve().then(function() {
		if(!__webpack_require__.o(map, req)) {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}

		var id = map[req];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <div class=\"main\">\n        <div class=\"main-content\">\n            <div class=\"img-content\">\n                <img class=\"img-responsive\" src=\"./../../assets/Nav/leftmenu.jpg\" alt=\"login-banner\">\n            </div>\n                <div class=\"login-container\">\n                    <p class=\"login-title\"><span class=\"fw-600\">Login</span> or <span class=\"fw-600\">Signup</span></p>\n                    <!-- <div class=\"input-group\">\n                        <input type=\"text\" placeholder=\"mobile number\">\n                    </div> -->\n                    <form action=\"\" [formGroup]=\"objLoginForm\" (submit)=\"doLogin()\">\n                        <!-- <div class=\"mob-inp\" style=\"position: relative\">\n                            <div class=\"form-group \">\n                              <input autocomplete=\"new-password\" id=\"\" type=\"tel\" class=\"form-control mobileNumberInput\"\n                                 formControlName=\"username\" placeholder=\"Username\" maxlength=\"10\"><span\n                                class=\"placeholderAlternative mobileNumber\">+91<span\n                                  style=\"padding: 0px 10px; position: relative; bottom: 1px;\">|</span>\n                                </span></div>\n    \n                            </div> -->\n                            <div class=\"mob-inp\">\n                                <div class=\"form-group \">\n                                  <input id=\"\" type=\"tel\" class=\"form-control\"\n                                     formControlName=\"strName\" placeholder=\"Username\" maxlength=\"10\"></div>\n        \n                                </div>\n                            <div class=\"mob-inp\">\n                                    <div class=\"form-group \">\n                                      <input id=\"\" type=\"tel\" class=\"form-control\"\n                                         formControlName=\"strPassword\" placeholder=\"Password\" maxlength=\"8\"></div>\n            \n                                    </div>\n                        <button type=\"submit\" class=\"submit-btn btn btn-lg btn-block cust-btn\">CONTINUE</button>\n                    </form>\n                </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/cart-page/cart-page.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/cart-page/cart-page.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<app-secure-header></app-secure-header>\n<!-- <header style=\"margin-top: 50px\">\n    <div class=\"header-container\">\n        <div class=\"logo-brand\">\n            <img class=\"brand-icon\" src=\"./../../../assets/banner/logo.png\" alt=\"logo\" srcset=\"\">\n        </div>\n        <div class=\"nav-container\">\n            <li>\n                <a href=\"#\">abcc</a>\n                <a href=\"#\">nav 2</a>\n                <a href=\"#\">nav 3</a>\n            </li>\n        </div>\n        <div class=\"secure-brand\">\n            <img class=\"secure-icon\" src=\"./../../../assets/banner/protect.png\" alt=\"secure\" srcset=\"\">\n            <h6>100% secure</h6>\n        </div>\n    </div>\n</header> -->\n<div class=\"container\">\n\n    <main>\n        <div class=\"wrapper\">\n            <div class=\"wrapper-container\">\n                    <section class=\"first-section col-md-8\">\n                        <!-- <div class=\"item-offers box-border\">\n                            <h2>lorem ipsum</h2>\n                            <p>svg</p>\n                            <div class=\"avl-offer\">Available offers</div>\n                            <div class=\"\"></div>\n                            <li class=\"offer-list\">10% Cashback upto Rs 200 on transaction with PayZapp. TCA</li>\n                            <li class=\"offer-list\" *ngIf=\"show\">10% Cashback upto Rs 200 on transaction with PayZapp. TCA</li>\n                            <li class=\"offer-list\" *ngIf=\"show\">10% Cashback upto Rs 200 on transaction with PayZapp. TCA</li>\n                            <div class=\"more-hide\" (click)=\"show = !show\">Show <span *ngIf=\"show\">Less</span><span *ngIf=\"!show\">More</span></div>\n                        </div>\n    \n                        <div class=\"dlvry-dtls box-border\">\n                            <div class=\"dlvry-icon\">icon</div>\n                            <div class=\"dlvry-text\">Yay <span class=\"fw-600\">Free Delivery</span> on this order</div>\n                        </div> -->\n    \n                        <div class=\"my-shop\">\n                            \n                            <div class=\"my-bag fw-600\">My Shopping Bag ({{objCartResponse.arrList.length}} Items)</div>\n                            <div class=\"my-total fw-600\">Total &nbsp;&nbsp;<i class=\"fa fa-inr\" aria-hidden=\"true\"></i> {{total()}}</div>\n                        </div>\n    \n                        <div class=\"item-base box-border\" *ngFor=\"let item of objCartResponse.arrList;let i=index\" >\n                            <div class=\"\">\n                                <div class=\"col-xs-12 pd-15 pb-0\">\n                                    <div class=\"col-xs-3 pd-0\">\n\n                                        <div >\n                                            <img class=\"wt-100\" src=\"{{item.strImageUrl}}\" alt=\"\" srcset=\"\">\n                                        </div>\n                                    </div>\n                                    <div class=\"col-xs-6\">\n                                        <div >\n                                            <div class=\"item-base-right-dtls\">\n                                                <div class=\"item-base-brand\">{{item.strName}}</div>\n                                                <p class=\"item-base-linkItem\">{{item.strDescription}}</p>\n                                                \n                                                \n                                                    <div class=\"col-sm-12 pd-0 \">\n                                                            <select class=\"drop-down-class\">\n                                                                    <option *ngFor=\"let size of item.arrSizeStock\" [value]=\"item\">Size: {{size.strName}}</option>\n                                                                </select>\n                                                    </div>\n                                                    <div class=\"col-sm-12 pd-0 pt-10\">\n                                                        <select class=\"drop-down-class\">\n                                                                <option *ngFor=\"let color of item.arrColorStock\" [value]=\"item\">Color: {{color.strName}}</option>\n                                                            </select>\n                                                        </div>\n                                                    <div class=\"col-sm-12 pd-0 pt-10\">\n                                                        <span (click)=\"minus(i)\"><i class=\"fa fa-minus\" aria-hidden=\"true\"></i></span>\n                                                        <span class=\"count\">{{count[i]}}</span>\n                                                        <span (click)=plus(i)><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></span>\n\n                                                    </div>\n                                            </div>\n                                        </div>\n\n                                    </div >\n                                    <div class=\"col-xs-3 price\">\n                                        <p><i class=\"fa fa-inr\" aria-hidden=\"true\"></i> {{item.dblSellingPrice*count[i]}}</p>\n                                        <p>\n                                            <span class=\"strike\"><s> <i class=\"fa fa-inr\" aria-hidden=\"true\"></i> {{item.dblMRP*count[i]}}</s></span>\n                                            <span class=\"discount\">{{(100-(item.dblSellingPrice/item.dblMRP*100)).toFixed(2)}}% OFF</span>\n                                        \n                                        </p>\n                                    </div>\n                                </div>\n                                <div class=\"item-base-container-action\">\n                                    <div class=\"item-remove\"><button class=\"removee inline-action\">remove</button></div>\n                                    <div class=\"item-wishlist\"><button class=\"wishyy inline-action\">move to wishlist</button></div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"col-xs-12 add-more-item \" (click)=\"goToWishList()\">\n                            <p><span class=\"bookmark\"><i class=\"fa fa-bookmark-o\"></i></span>Add More From Wishlist\n                            <span class=\"arrow-right\"><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></span></p>\n                        </div>\n    \n                       \n                    </section>\n    \n                    <section class=\"second-section col-md-4\">\n                        <div class=\"second-container\">\n                            <div class=\"price-base\">\n                                  <div class=\"priceBlock-base\">PRICE DETAILS</div>\n                                  <div class=\"priceBreakUp-base-orderSummary\" id=\"priceBlock\">\n                                    <div class=\"priceDetail-base-row col-xs-12\">\n                                        <p><span class=\"left-side\">Bag Total</span>\n                                            <span class=\"right-side\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i> {{bagTotal()}}</span></p>\n                                        \n                                    </div>\n                                    <div class=\"priceDetail-base-row col-xs-12\">\n                                        <p><span class=\"left-side\">Bag discount</span>\n                                            <span class=\"right-side green\"> - <i class=\"fa fa-inr green\" aria-hidden=\"true\"></i> {{bagDiscount()}}</span></p>\n                                    </div>\n                                    <div class=\"priceDetail-base-row col-xs-12\">\n                                        <p><span class=\"left-side\">Coupon Discount</span>\n                                            <span class=\"right-side pink\">Apply Coupon</span></p></div>\n                                    <div class=\"priceDetail-base-row col-xs-12\">\n                                        <p><span class=\"left-side\">Order Total</span>\n                                            <span class=\"right-side\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i> {{total()}}</span></p></div>\n                                    <div class=\"priceDetail-base-row col-xs-12\">\n                                        <p><span class=\"left-side\">Delivery Charges</span>\n                                            <span class=\"right-side\"><s><i class=\"fa fa-inr\" aria-hidden=\"true\"></i>99</s>\n                                            <span class=\"green\">FREE</span></span>\n                                        </p>\n                                    </div>\n                                    <div class=\"priceDetail-base-total\"><span>Total</span>\n                                        <span class=\"right-side\"><i class=\"fa fa-inr\" aria-hidden=\"true\"></i> {{total()}}</span></div>\n                                  </div>\n                                </div>\n        \n        \n                            <div class=\"total-action mt-20\">\n                                <div class=\"total-action-btn base-button\"><div type=\"submit\">PLACE HOLDER</div></div>\n                            </div>\n                        </div>\n                    </section>\n            </div>\n        </div>\n    </main>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home-page/home-page.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home-page/home-page.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"arrBanners.length\" >\n\n  \n\n<div class=\"container-fluid home-main pd-0 mt-90\" >\n  <img src=\"./../assets/banner/banner-top.jpg\" style=\"width: 100%;\">\n</div>\n<div class=\"container-fluid pd-0 home-main-Banner\">\n  <div id=\"myCarousel\" class=\"carousel slide position-relative\"  data-ride=\"carousel\" >\n    <!-- Indicators -->\n    <ol class=\"carousel-indicators position-absolute\">\n      <li *ngFor=\"let banner of arrBanners;let i = index\" data-target=\"#myCarousel\" [attr.data-slide-to]=\"i\" [ngClass]=\"i === 0 ? 'active' : ''\"></li>\n    </ol>\n\n    <!-- Wrapper for slides -->\n    <div class=\"carousel-inner\">\n      <div *ngFor=\"let banner of arrBanners; let i = index\" [ngClass]=\"i=== 0 ? 'item active': 'item'\">        \n        <img (click)=\"getProductList(banner)\" src={{banner.strImageUrl}} alt={{banner.strImageUrl}} style=\"width:100%;cursor: pointer;\">\n      </div>\n    </div>\n   \n\n  </div>\n</div>\n\n\n<!-- adds % -->\n<div class=\"container-fluid pd-0 mt-50\">\n\n  <img src=\"./../assets/banner/under banner.jpg\" style=\"width: 100%;\">\n\n</div>\n<div class=\"container\">\n  <div class=\"col-md-4 col-sm-4 col-xs-4\">\n    <img src=\"./../assets/banner/3*3-1.gif\" style=\"width: 100%;\">\n  </div>\n  <div class=\"col-md-4 col-sm-4 col-xs-4\">\n    <img src=\"./../assets/banner/3*3-2.gif\" style=\"width: 100%;\">\n  </div>\n  <div class=\"col-md-4 col-sm-4 col-xs-4\">\n    <img src=\"./../assets/banner/3*3-3.gif\" style=\"width: 100%;\">\n  </div>\n  <div class=\"col-md-4 col-sm-4 col-xs-4\">\n    <img src=\"./../assets/banner/3*3-1.gif\" style=\"width: 100%;\">\n  </div>\n  <div class=\"col-md-4 col-sm-4 col-xs-4\">\n    <img src=\"./../assets/banner/3*3-2.gif\" style=\"width: 100%;\">\n  </div>\n  <div class=\"col-md-4 col-sm-4 col-xs-4\">\n    <img src=\"./../assets/banner/3*3-3.gif\" style=\"width: 100%;\">\n  </div>\n</div>\n\n<!-- top categories -->\n<ng-container *ngIf=\"objAllCategories?.cln_category.length\">\n<div class=\"container-fluid head\" style=\"padding:0px !important\">\n  <img src=\"./../assets/banner/top-catogories.jpg\" style=\"width: 100%;\">\n</div>\n<div class=\"container-fluid visble-md visible-lg\">\n  <div class=\"row\"  >\n    <ng-container *ngFor=\"let category of objAllCategories.cln_category;let i =index\">\n      <div class=\"col-md-2\" [ngClass]=\"{'col-md-offset-1': i % 5 ===0 }\" >\n        <img (click)=\"getProductListCategory(category)\" src=\"{{category.strImgUrl_0}}\" style=\"width: 100%;cursor: pointer;\">\n      </div>\n    </ng-container>\n  </div>\n</div>\n<!-- mobile or tab -->\n<div class=\"container-fluid visble-md visible-sm visible-xs pd-0-mob\">\n  <div class=\"row\">\n    <div class=\"col-sm-4 col-xs-6 \" *ngFor=\"let category of objAllCategories.cln_category;\">\n      <img (click)=\"getProductListCategory(category)\" src=\"{{category.strImgUrl_0}}\" style=\"width: 100%;\">\n    </div>\n  </div>\n</div>\n</ng-container>\n\n\n<!-- TOp brands section -->\n<ng-container *ngIf=\"objAllCategories?.cln_brand.length\">\n  <div class=\"container-fluid head\" style=\"padding:0px !important\">\n    <img  src=\"../../../assets/banner/top-brands-head.jpg\" style=\"width: 100%;\">\n  </div>\n<div class=\"container-fluid visble-md visible-lg\">\n  <div class=\"row \">\n    <ng-container *ngFor=\"let brand of objAllCategories.cln_brand;let i =index\">\n      <div class=\"col-md-2\" [ngClass]=\"{'col-md-offset-1': i % 5 ===0 }\" >\n        <img (click)=\"getProductListBrand(brand)\" src=\"{{brand.strImgUrl_0}}\" style=\"width: 100%;height: 200px;cursor: pointer;\">\n      </div>\n    </ng-container>\n  </div>\n</div>\n<div class=\"container-fluid visble-sm visible-xs pd-0-mob\">\n  <div class=\"row \">\n    <div class=\"col-sm-4 col-xs-6 \" *ngFor=\"let brand of objAllCategories.cln_brand\">\n      <img (click)=\"getProductListBrand(brand)\" src=\"{{brand.strImgUrl_0}}\" style=\"width: 100%;\">\n    </div>\n  </div>\n</div>\n</ng-container>\n\n\n<!-- carousel -2 -->\n<!-- <div class=\"container-fluid pd-0 home-main-Banner\">\n  <div id=\"myCarousel\" class=\"carousel slide position-relative\" data-ride=\"carousel\">\n    <ol class=\"carousel-indicators position-absolute\">\n      <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n\n    </ol>\n\n    <div class=\"carousel-inner\">\n      <div class=\"item active\">\n        \n        <img src=\"../../../assets/banner/md-banner1.jpg\" alt=\"Los Angeles\" style=\"width:100%;\">\n      </div>\n\n      <div class=\"item\">\n        \n        <img src=\"../../../assets/banner/md-banner2.jpg\" alt=\"Chicago\" style=\"width:100%;\">\n      </div>\n\n      <div class=\"item\">\n        \n        <img src=\"../../../assets/banner/md-banner3.jpg\" alt=\"New york\" style=\"width:100%;\">\n      </div>\n     \n    </div>\n\n \n  </div>\n</div> -->\n\n<!-- head3 -->\n\n<!-- <div class=\"container-fluid\" style=\"padding:0px !important\">\n\n  <img src=\"../../../assets/banner/head-3.jpg\" style=\"width: 100%;\">\n\n</div> -->\n\n<!-- play @home -->\n<ng-container *ngIf=\"objAllCategories?.cln_shop.length\">\n  <div class=\"container head\" style=\"padding:0px !important\">\n    <h3 class=\"main-head\">#SHOP</h3>\n    <!-- <img src=\"../../../assets/banner/play@home.jpg\" style=\"width: 100%;\"> -->\n  </div>\n<div class=\"container-fluid visble-md visible-lg \">\n  <div class=\"row \">\n    <ng-container *ngFor=\"let shop of objAllCategories.cln_shop;let i =index\">\n      <div class=\"col-md-2 mb-15\" [ngClass]=\"{'col-md-offset-1': i % 5 ===0 }\" >\n        <img (click)=\"getProductListShop(shop)\"  src=\"{{shop.strImgUrl_0}}\" style=\"width: 100%;height:200px;cursor: pointer;\">\n      </div>\n    </ng-container>\n  </div>\n</div>\n<div class=\"container-fluid visble-sm visible-xs pd-0-mob\">\n  <div class=\"row \">\n    <div class=\"col-sm-4 col-xs-6 mb-15\" *ngFor=\"let shop of objAllCategories.cln_shop\">\n      <img (click)=\"getProductListShop(shop)\" src=\"{{shop.strImgUrl_0}}\" style=\"width: 100%;\">\n    </div>\n  </div>\n</div>\n</ng-container>\n<ng-container *ngIf=\"arrDeals.length\">\n  <div class=\"container head\" style=\"padding:0px !important\">\n    <!-- <img src=\"../../../assets/banner/play@home.jpg\" style=\"width: 100%;\"> -->\n    <h3 class=\"main-head\">#DEALS</h3>\n  </div>\n<div class=\"container visble-md visible-lg\">\n  <div class=\"row \">\n    <ng-container *ngFor=\"let deals of arrDeals;let i =index\">\n      <div class=\"col-md-3 mb-15\"  >\n        <img (click)=\"getProductListDeals(deals)\"  src=\"{{deals.strImageUrl}}\" style=\"width: 100%;cursor: pointer;\">\n      </div>\n    </ng-container>\n  </div>\n</div>\n<div class=\"container-fluid visble-sm visible-xs pd-0-mob\">\n  <div class=\"row \">\n    <div class=\"col-sm-4 col-xs-6 mb-15\" *ngFor=\"let deals of arrDeals\">\n      <img (click)=\"getProductListDeals(deals)\" src=\"{{deals.strImageUrl}}\" style=\"width: 100%;\">\n    </div>\n  </div>\n</div>\n</ng-container>\n\n\n<!-- <ng-container *ngIf=\"objAllCategories?.cln_location\">\n  <div class=\"container-fluid head\" style=\"padding:0px !important\">\n    <img src=\"../../../assets/banner/play@home.jpg\" style=\"width: 100%;\">\n  </div>\n<div class=\"container-fluid visble-md visible-lg\">\n  <div class=\"row \">\n    <ng-container *ngFor=\"let shop of objAllCategories.cln_location;let i =index\">\n      <div class=\"col-md-2 mb-15\" [ngClass]=\"{'col-md-offset-1': i % 5 ===0 }\" >\n        <img (click)=\"getProductListShop(shop)\"  src=\"{{shop.strImgUrl_0}}\" style=\"width: 100%;height:200px;cursor: pointer;\">\n      </div>\n    </ng-container>\n  </div>\n</div>\n<div class=\"container-fluid visble-sm visible-xs\">\n  <div class=\"row \">\n    <div class=\"col-sm-4 col-xs-6 mb-15\" *ngFor=\"let shop of objAllCategories.cln_location\">\n      <img (click)=\"getProductListShop(shop)\" src=\"{{shop.strImgUrl_0}}\" style=\"width: 100%;\">\n    </div>\n  </div>\n</div>\n</ng-container> -->\n</ng-container>\n\n\n\n\n<!-- <div class=\"container-fluid\" style=\"padding:0px !important\">\n  <div class=\"container\">\n\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n         <img src=\"../../../assets/banner/play@home1.jpg\" style=\"width: 100%;\">\n  \n      </div>\n      <div class=\"col-md-4\">\n        <img src=\"../../../assets/banner/play@home2.jpg\" style=\"width: 100%;\">\n  \n      </div>\n      <div class=\"col-md-4\">\n        <img src=\"../../../assets/banner/play@home3.jpg\" style=\"width: 100%;\">\n  \n      </div>\n      <div class=\"col-md-4\">\n        <img src=\"../../../assets/banner/play@home1.jpg\" style=\"width: 100%;\">\n  \n      </div>\n      <div class=\"col-md-4\">\n        <img src=\"../../../assets/banner/play@home2.jpg\" style=\"width: 100%;\">\n  \n      </div>\n      <div class=\"col-md-4\">\n        <img src=\"../../../assets/banner/play@home3.jpg\" style=\"width: 100%;\">\n  \n      </div>\n    </div>\n  </div>\n</div> -->\n\n<!-- banner -->\n<!-- <div class=\"container-fluid\" style=\"padding:0px !important\">\n\n  <img src=\"../../../assets/banner/middle-banner.jpg\" style=\"width: 100%;\">\n\n</div> -->\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/product-details/product-details.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/product-details/product-details.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"margina\">\n    <!-- <div> -->\n      <div class=\"application-base\">\n        <div>\n            <!-- <div class=\"spinner-grow\" role=\"status\">\n                <span class=\"sr-only\">Loading...</span>\n              </div> -->\n              <div style=\"display: flex;justify-content: center\">\n                  <mat-spinner *ngIf=\"!product\" class=\"text-center\"></mat-spinner>\n              </div>\n          <!-- <div class=\"spinner-border text-primary align-content-center\"></div> -->\n          <main *ngIf=\"!!product\" class=\"pdp-pdp-container\">\n            <div class=\"breadcrumbs-container\">\n              <a href=\"/\" class=\"breadcrumbs-link\">Home</a><span class=\"breadcrumbs-separator\">/</span>\n              <a href=\"\" class=\"breadcrumbs-link\">Clothing</a><span class=\"breadcrumbs-separator\">/</span>\n              <a href=\"\" class=\"breadcrumbs-link\">{{product.strGenderCategory}}\n                Clothing</a><span class=\"breadcrumbs-separator\">/</span>\n              <a href=\"\" class=\"breadcrumbs-link\">{{product.strBrandId}}</a><span class=\"breadcrumbs-separator\">/</span>\n              <a href=\"\" class=\"breadcrumbs-bold-link breadcrumbs-link\">{{product.strCategoryId}}</a><span\n                class=\"breadcrumbs-bold-separator breadcrumbs-separator\">&gt;</span><a href=\"\"\n                class=\"breadcrumbs-bold-link breadcrumbs-link\">\n                {{product.strName}}\n              </a></div>\n            <div class=\"pdp-details common-clearfix\">\n              <div class=\"image-grid-container common-clearfix\">\n              \n                <div class=\"image-grid-col50\" *ngFor=\"let item of product.objImageUrls | keyvalue; let i= index\">\n                  <div class=\"image-grid-imageContainer\">\n                    <div class=\"image-grid-image\">\n                      <img class=\"img-responsive\" src=\"{{item.value}}\" alt=\"\">\n                    </div>\n                    <div *ngIf=\"i == 1\" class=\"image-grid-similarColorsCta \"><span\n                        class=\"image-grid-similarColorsIcon sprites-similarProductsIcon\"></span><span\n                        class=\"image-grid-iconText\">VIEW SIMILAR</span></div>\n                    \n                  </div>\n                </div>\n        \n              </div>\n              <div class=\"pdp-description-container\">\n                <div class=\"pdp-price-info\">\n                  <h1 class=\"pdp-title\">{{product.strName}}</h1>\n                  <h1 class=\"pdp-name\">{{product.strDescription}}</h1>\n                  <p class=\"pdp-discount-container\"><span class=\"pdp-price\" tabindex=\"0\"><strong>Rs. {{product.dblSellingPrice}}</strong></span>\n                    <div class=\"pdp-mrp-verbiage\" tabindex=\"0\">\n                      <div><b>Price Details</b></div>\n                      <div>Maximum Retail Price\n                        <span class=\"pdp-mrp-verbiage-amt\">\n                          Rs. {{product.dblMRP}}\n                          </span></div>\n                      <div>(Incl. of all taxes)</div>\n                      <hr>\n                      <div>\n                        Discount\n                        <span class=\"pdp-mrp-verbiage-amt\">62% OFF</span></div>\n                      <div><b>Selling Price</b><span class=\"pdp-mrp-verbiage-amt\">Rs. {{product.dblSellingPrice}}</span></div>\n                      <div style=\"margin: 0px;\">(Incl. of all taxes)</div>\n                    </div><span class=\"pdp-mrp\"><s>\n                        Rs. {{product.dblMRP}}\n                        </s></span><span class=\"pdp-discount\">({{ getPercent() | percent }} OFF)</span>\n                  <p class=\"pdp-selling-price\"><span class=\"pdp-vatInfo\">inclusive of all taxes</span></p>\n                </div>\n                <div *ngIf=\"!!product.arrColorStock.length\" class=\"size-buttons-size-container\">\n                    <div class=\"size-buttons-size-header\">\n                      <h4 class=\"size-buttons-select-size\">SELECT COLOR</h4>\n                    </div>\n                    <div class=\"size-buttons-size-buttons\">\n                        <div class=\"size-buttons-tipAndBtnContainer\" *ngFor=\"let size of product.arrColorStock\">\n                          <div class=\"size-buttons-buttonContainer\"><button [ngStyle]=\"{'background-color': size.strName}\"\n                              class=\"size-buttons-size-button size-buttons-size-button-default\">\n\n                            </button>\n                          </div>\n                        </div>\n                      </div>\n                </div>\n                <div class=\"size-buttons-size-container\" id=\"sizeButtonsContainer\">\n                  <div class=\"size-buttons-size-header\">\n                    <h4 class=\"size-buttons-select-size\">SELECT SIZE\n                    </h4><span class=\"size-buttons-size-chart\"><button class=\"size-buttons-show-size-chart\">Size\n                        Chart</button><span class=\"size-buttons-arrow\"></span></span>\n                  </div>\n                  <div class=\"size-buttons-size-buttons\">\n                    <div class=\"size-buttons-tipAndBtnContainer\" *ngFor=\"let size of product.arrSizeStock\">\n                      <div class=\"size-buttons-buttonContainer\"><button\n                          class=\"size-buttons-size-button size-buttons-size-button-default\"><span\n                            class=\"size-buttons-size-strike-hide\"></span>\n                          <p class=\"size-buttons-unified-size\">{{size.strName}}\n                          </p>\n                        </button>\n                        <span class=\"size-buttons-inventory-left-hidden size-buttons-inventory-left\">Hide</span>\n                      </div>\n                      <div class=\"size-buttons-sizeTip\">\n                        <div class=\"size-buttons-sizeTipMeta\">\n                          <div class=\"size-buttons-bodymeasure\"><span class=\"size-buttons-measurementType\">\n                              Garment Measurement :\n                              </span><span class=\"size-buttons-measurementName\">Chest - 37.0in</span>\n                          </div>\n                          <div class=\"size-buttons-sizeChartInfo\">\n                            <div>The model (height 6') is wearing a size {{size.strName}}</div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    \n                  </div>\n                  <div class=\"size-buttons-recoContainer size-buttons-hide\">\n                    <div class=\"size-buttons-recText\">\n                      <div class=\"\"></div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"\">\n                  <div class=\"pdp-action-container pdp-fixed\">\n                    <div class=\"pdp-add-to-bag pdp-button pdp-flex pdp-center\">\n                      <span class=\"pdp-whiteBag sprites-whiteBag pdp-flex pdp-center\"></span>\n                      ADD TO BAG\n                    </div>\n                    <div class=\" pdp-add-to-wishlist pdp-button pdp-add-to-wishlist pdp-button pdp-flex pdp-center\"><span class=\"pdp-darkWishlistIcon sprites-darkWishlist pdp-flex pdp-center \"></span><span\n                        class=\"\">WISHLIST</span></div>\n                  </div>\n                </div>\n                <div>\n                  <div class=\"pincode-checkServiceAbilityhalfCard\">\n                    <div class=\"pincode-deliveryContainer\">\n                      <h4>Delivery Options<span\n                          class=\"pincode-deliveryOptionsIcon sprites-deliveryOptionsIcon\"></span></h4>\n                      <form autocomplete=\"off\"><input type=\"text\" placeholder=\"Enter pincode\" class=\"pincode-code\"\n                          value=\"\" name=\"pincode\"><input type=\"submit\" class=\"pincode-check pn-check pincode-button\" value=\"Check\">\n                      </form>\n                      <p class=\"pincode-enterPincode\">Please enter PIN code to check delivery time &amp; Pay on Delivery\n                        Availability</p>\n                    </div>\n                  </div>\n                </div>\n                <div>\n                  <div class=\"meta-container\">\n                    <div class=\"meta-info\">\n                      <div class=\"meta-desc\">100% Original Products</div>\n                    </div>\n                    <div class=\"meta-info\">\n                      <div class=\"meta-desc\">Free Delivery on order above Rs. 799\n                      </div>\n                    </div>\n                    <div class=\"meta-info\">\n                      <div class=\"meta-desc\">Pay on delivery might be available</div>\n                    </div>\n                    <div class=\"meta-info\">\n                      <div class=\"meta-desc\">Easy 30 days returns and exchanges</div>\n                    </div>\n                    <div class=\"meta-info\">\n                      <div class=\"meta-desc\">Try &amp; Buy might be available</div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"pdp-offers-container\">\n                  <h4>\n                    BEST OFFERS\n                    <span\n                      class=\"pdp-offers-similarColorsIcon sprites-bestOfferIcon\"></span></h4>\n                  <div>\n                    <div class=\"pdp-offers-offerBlock\">\n                      <div class=\"pdp-offers-offer\">\n                        <div>\n                          <div class=\"pdp-offers-offerTitle\"><b>\n                              Best Price:\n                              <span class=\"pdp-offers-price\">\n                                Rs. {{product.dblRetailerPrice}}\n                                </span></b></div>\n                          <ul class=\"pdp-offers-offerDesc\">\n                            <li>\n                              <div class=\"pdp-offers-bullet\"></div>\n                              <div class=\"pdp-offers-labelMarkup\">\n                                Applicable on:\n                                \n                                \n                                <span class=\"\">Orders above Rs. 499 (only on first purchase)</span>\n                              </div>\n                            </li>\n                            <li>\n                              <div class=\"pdp-offers-bullet\"></div>\n                              <div class=\"pdp-offers-labelMarkup\">\n                                Coupon code:\n                                \n                                \n                                <span class=\"pdp-offers-boldText\">WELCOME100</span></div>\n                            </li>\n                            <li>\n                              <div class=\"pdp-offers-bullet\"></div>\n                              <div class=\"pdp-offers-labelMarkup\">\n                                Expires in:\n                                \n                                \n                                <span class=\"\">1 day 1 hours</span></div>\n                            </li>\n                            <li>\n                              <div class=\"pdp-offers-bullet\"></div>\n                              <div class=\"pdp-offers-labelMarkup\">\n                                Max Discount:\n                                \n                                \n                                <span class=\"\">Rs.100 off (check cart for final savings)</span></div>\n                            </li>\n                          </ul>\n                        </div>\n                        \n                      </div>\n                    </div>\n                    <div class=\"pdp-offers-extraOffer\">\n                      <div class=\"pdp-offers-offer\">\n                        <div>\n                          <div class=\"pdp-offers-offerColumn\">\n                            <div class=\"pdp-offers-offerColumnText\">\n                              <div class=\"pdp-offers-offerTitle\"><b>EMI option available</b></div><span\n                                class=\"pdp-offers-offerDesc\">EMI starting from Rs.23/month</span>\n                            </div>\n                            <div class=\"pdp-offers-viewMoreLink\"><span><span class=\"pdp-offers-showOfferLink\">\n                                  View Plan\n                                  <span class=\"pdp-offers-arrow\"></span></span></span></div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"pdp-productDescriptors\"><input type=\"checkbox\" class=\"pdp-inputProductDetails\"\n                    id=\"productDetails\" value=\"productDescriptors\">\n                  <div class=\"pdp-productDescriptorsContainer\">\n                    <div>\n                      <h4 class=\"pdp-product-description-title\">\n                        Product Details\n                        <span\n                          class=\"pdp-productDetailsIcon sprites-productDetailsIcon\"></span></h4>\n                      <p class=\"pdp-product-description-content\">Sea Green solid T-shirt, has a round neck, and long\n                        sleeves</p>\n                    </div>\n                    <div class=\"pdp-sizeFitDesc\">\n                      <h4 class=\"pdp-sizeFitDescTitle pdp-product-description-title\">Size &amp; Fit</h4>\n                      <p class=\"pdp-sizeFitDescContent pdp-product-description-content\">The model (height 6') is wearing a\n                        size M</p>\n                    </div>\n                    <div class=\"pdp-sizeFitDesc\">\n                      <h4 class=\"pdp-sizeFitDescTitle pdp-product-description-title\">Material &amp; Care</h4>\n                      <p class=\"pdp-sizeFitDescContent pdp-product-description-content\">Material: 100% cotton<br>Machine\n                        Wash</p>\n                    </div>\n                    <div class=\"index-sizeFitDesc\">\n                      <h4 class=\"index-sizeFitDescTitle index-product-description-title\" style=\"padding-bottom: 12px;\">\n                        Specifications</h4>\n                      <div class=\"index-tableContainer\">\n                        <div class=\"index-row\" *ngFor=\"let spec of product.specifications\">\n                          <div class=\"index-rowKey\">{{spec.strKey}}</div>\n                          <div class=\"index-rowValue\">{{spec.strValue}}</div>\n                        </div>\n                        \n                        <div class=\"index-row\">\n                          <div class=\"index-rowKey\">Pattern</div>\n                          <div class=\"index-rowValue\">Solid</div>\n                        </div>\n                      </div>\n                      <div class=\"index-showMoreText\">See More</div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"supplier-desktopCodeSupplier\">\n                  <div class=\"supplier-supplier\"><span>\n                      Product Code:\n                      <span class=\"supplier-styleId\">{{product.productCode}}</span></span></div>\n                  <div class=\"supplier-supplier\"><span>\n                      Sold by:\n                      <span class=\"supplier-productSellerName\">\n                        {{product.soldBy['name']}}\n                        </span>\n                      <span class=\"supplier-partner-name\">\n                      </span></span></div>\n                  <div class=\"supplier-viewmore-link\"> View Supplier Information</div>\n                </div>\n              </div>\n  \n            </div>\n          </main>\n        </div>\n      </div>\n    <!-- </div> -->\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/product-list/product-list.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/product-list/product-list.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container-fluid product-list  mt-50\" id=\"scrollTop\" #scroll  >\n  <div class=\"row\" id=\"rowTop\" class=\"pd-0\">\n      <div class=\"col-md-2 filter-section pd-0 visible-md visible-lg\" id=\"leftdiv\"   #filterSec >\n          <form [formGroup]=\"objSearchForm\" class=\"filterSec\" id=\"filterSec\" >\n          <!-- <form [formGroup]=\"objSearchForm\" class=\"filterSec\" id=\"filterSec\" [class.sticky] = \"sticky\"> -->\n\n          <span class=\"header-title\">FILTERS</span>\n          <span class=\"header-title clear\" (click)=\"clearAllFilter()\" >CLEAR ALL</span>\n\n          <div class=\"filter-border-box\">\n              <mat-radio-group formControlName=\"strCategory\" aria-label=\"Select an option\">\n                  <div class=\"pt-8\">\n                      <mat-radio-button value=\"1\">Men</mat-radio-button><br>\n                      <mat-radio-button value=\"2\">Women</mat-radio-button><br>\n                      <mat-radio-button value=\"3\">Boy</mat-radio-button><br>\n                      <mat-radio-button value=\"4\">girl</mat-radio-button><br>\n                  </div>\n              </mat-radio-group>\n          </div>\n          <!-- BRANDS -->\n          <div id=\"filterSecond\" class=\" filter-border-box filter-border-second\">\n              <span *ngIf=\"!blnShowSearchInput\" class=\"filter-sub-head\"> BRANDS\n                  <i   class=\"fa fa-search search-outer\" (click)=\"showSearchForBrand()\" aria-hidden=\"true\"></i>\n              </span>\n                  <div class=\"example-container search-box\" [style.display]=\"blnShowSearchInput ? 'block' : 'none'\"  >\n                      <mat-form-field appearance=\"fill\">\n                        <mat-label>Search for Brands</mat-label>\n                        <input #brandSearch matInput type = \"text\" name = \"text\" formControlName=\"strBranchSearch\" (input)=\"filterBrands($event)\">\n                        <span matSuffix> <i class=\"fa fa-times inside-searchbox\" (click)=\"closeBrandSearchBox()\" aria-hidden=\"true\"></i></span>\n                      </mat-form-field>\n                      <br>\n                    </div><br>\n                    <!-- <p class=\"pt-8\" *ngIf=\" blnShowSearchInput&& !blnFilterBrandEmpty\" >No Item Found</p> -->\n\n                    <div class=\"pt-8\" formArrayName=\"arrBrands\" \n                    *ngFor=\"let brand of arrBrands.controls;let i=index\" [style.display]=\"arrBrands['controls'][i]['controls'].blnShow.value ? 'block' : 'none'\" >\n                    <span [formGroupName]=\"i\" >\n                        <mat-checkbox   formControlName=\"{{i}}\" (change)=\"selectBrandCheckBox($event,arrBrands['controls'][i]['controls'].strFormControlName.value,arrBrands['controls'][i]['controls'].strLabel.value,i)\">{{arrBrands['controls'][i]['controls'].strLabel.value}} {{arrBrands['controls'][i]['controls'].strStock.value}}</mat-checkbox><br>\n                    </span>\n\n                    \n                  </div>\n                  <p *ngIf=\"!arrBrands.controls.length\" >No Data Fount</p>\n          </div>\n\n\n           <!-- SHOPS -->\n           <div id=\"filterSecond\" class=\" filter-border-box filter-border-second\">\n            <span  class=\"filter-sub-head\"> SHOPS\n            </span>\n               \n                  <div class=\"pt-8\" formArrayName=\"arrShop\" \n                  *ngFor=\"let brand of arrShopControl.controls;let i=index\" >\n                  <span [formGroupName]=\"i\">\n                      <mat-checkbox formControlName=\"{{i}}\" (change)=\"selectCheckBox($event,i,arrShopControl['controls'][i]['controls'].strName.value,'arrShop')\">{{arrShopControl['controls'][i]['controls'].strName.value}} </mat-checkbox><br>\n                  </span>\n                 \n                </div>\n        </div>\n\n            <!-- SHOPS -->\n            <div id=\"filterSecond\" class=\" filter-border-box filter-border-second\">\n              <span  class=\"filter-sub-head\"> LOCATION\n              </span>\n                 \n                    <div class=\"pt-8\" formArrayName=\"arrLocation\" \n                    *ngFor=\"let brand of arrLocationControl.controls;let i=index\" >\n                    <span [formGroupName]=\"i\">\n                        <mat-checkbox formControlName=\"{{i}}\" (change)=\"selectCheckBox($event,i,arrLocationControl.controls[i]['controls'].strName.value,'arrLocation')\">{{arrLocationControl.controls[i]['controls'].strName.value}} </mat-checkbox><br>\n                    </span>\n                   \n                  </div>\n          </div>\n\n          <!-- SHOPS -->\n          <div id=\"filterSecond\" class=\" filter-border-box filter-border-second\">\n          <span  class=\"filter-sub-head\"> CATEGORY\n          </span>\n              \n                <div class=\"pt-8\" formArrayName=\"arrCategory\" \n                *ngFor=\"let brand of arrCategoryControl.controls;let i=index\" >\n                <span [formGroupName]=\"i\">\n                    <mat-checkbox formControlName=\"{{i}}\" (change)=\"selectCheckBox($event,i,arrCategoryControl.controls[i]['controls'].strName.value,'arrCategory')\">{{arrCategoryControl.controls[i]['controls'].strName.value}} </mat-checkbox><br>\n                </span>\n                \n              </div>\n                </div>\n\n          <!-- PRICE -->\n          <div id=\"filterSecond\" class=\" filter-border-box filter-border-second\">\n            <span class=\"filter-sub-head\">\n              PRICE\n            </span>\n            <div class=\"pt-8\" formGroupName=\"arrPriceRange\" >\n              <ng-container *ngFor=\"let item of arrPriceFilterArray;let i =index\" >\n                <mat-checkbox formControlName=\"{{i}}\" (change)=\"selectCheckBox($event,i,item,'arrPriceRange')\">{{item}}</mat-checkbox><br>\n              </ng-container>\n               </div>\n          </div>\n\n          <div class=\"end-filter\"></div>\n      </form>\n      </div>\n\n\n      <div class=\"col-md-10 pd-0\" #productSec id=\"productSec\">\n            <div class=\"col-md-8 pt-8 visible-sm visible-xs\" ></div>\n            <div class=\"col-md-4 pd-10 visible-md visible-lg sort-sec\" >\n              <mat-accordion>\n                <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\"\n                (mouseenter)=\"step=0\"\n                (mouseleave)=\"step=1\">\n                  <mat-expansion-panel-header  >\n                    <mat-panel-title>\n                       Sort by : <span class=\"sort-content\">{{strSortBy}}</span>\n                    </mat-panel-title>\n                  </mat-expansion-panel-header>\n                    <mat-list role=\"list\">\n                      <mat-list-item (click)=\"sortBy('Whats New')\" role=\"listitem\">What's New </mat-list-item>\n                      <mat-list-item (click)=\"sortBy('Popularity')\" role=\"listitem\">Popularity</mat-list-item>\n                      <mat-list-item (click)=\"sortBy('Price Low to High')\" role=\"listitem\">Price Low to High</mat-list-item>\n                      <mat-list-item (click)=\"sortBy('Price High to Low')\" role=\"listitem\">Price High to Low</mat-list-item>\n                      <mat-list-item (click)=\"sortBy('Discount')\" role=\"listitem\">Discount</mat-list-item>\n                    </mat-list>\n                </mat-expansion-panel>\n              </mat-accordion>\n\n              \n            </div>\n              <div class=\"col-md-12 pt-25 product-col pd-0 visible-md visible-lg\" >\n\n                \n                <mat-chip-list  aria-label=\"Fruit selection\">\n                  <mat-chip *ngFor=\"let item of arrFilteredItems\" \n                  \n                  [selectable]=\"selectable\"\n                  [removable]=\"removable\"\n                  (removed)=\"removeFilterItem(item)\">\n                    {{item.strValue}}\n                    <mat-icon matChipRemove *ngIf=\"removable\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></mat-icon>\n                  </mat-chip>\n                </mat-chip-list>\n              </div>\n            <div class=\"col-md-12 all-products\" id=\"products\" *ngIf=\"arrPaginatedData.length\" >\n            \n              <div class=\"col-md-3 col-sm-6 col-xs-6 one-product\" *ngFor=\"let item of arrPaginatedData;let i =index\" \n              routerLinkActive=\"router-link-active\" >\n                \n                  <div id=\"{{item._id}}\" class=\"carousel slide\" data-ride=\"carousel\" data-type=\"multi\" data-interval=\"false\"  >\n                      <!-- Indicators -->\n                      <ol class=\"carousel-indicators overlay\" >\n                        <li  *ngFor=\"let image of item.objImageUrls | keyvalue;let i = index\" [attr.data-target]=\"'#'+item._id\" [attr.data-slide-to]=\"i\" [ngClass]=\"i == 0 ? 'active' : ''\"></li>\n                        <span class=\"view-similar\" (click)=\"openSimilarProduct(item)\">\n                          <i class=\"fa fa-clone\" aria-hidden=\"true\">\n                           </i> <p >VIEW SIMILAR</p>\n                        </span>\n                  \n                        <br> <button (click)=\"wishListAdd()\" class=\"btn-wish-list\">WISHLIST</button>\n                        <p class=\"product-sub-head\">Sizes: XS,S,M,L,XL,XXL</p>\n\n                      </ol>\n                  \n                      <!-- Wrapper for slides -->\n                      <div class=\"carousel-inner\" [routerLink]=\"['/product', item._id]\">\n                        <div *ngFor=\"let item of item.objImageUrls | keyvalue;let k = index\" [ngClass]=\"k == 0 ? 'item active' : 'item'\" class=\"item \" >\n                          <img  src=\"{{item.value}}\" alt=\"{{item.value}}\" class=\"product-list-img\" >\n                         \n                        </div>\n\n                  \n                  \n                      </div>\n                \n                   \n                    </div>\n                    <h4 class=\"product-head\">{{item.strName}}</h4>\n                    <p class=\"product-sub-head\">{{item.strCategoryId}}</p>\n                    <p><b>Rs. {{item.dblSellingPrice}}</b>\n                    <span  *ngIf=\"item.dblMRP\"  class=\"product-strike\">\n                        Rs. {{item.dblMRP}}\n                    </span>\n                    <span class=\"discountPercentage\">\n                      <!-- {{item.discount_perc}} --> 25%\n                    </span>\n                  </p>\n                </div>\n              <div class=\"col-xs-12 pagination\">\n              <mat-paginator [length]=\"arrProducts.length\"\n              [pageSize]=\"size\"\n              [pageIndex]=\"page\"\n              [pageSizeOptions]=\"[50]\"\n              (page)=\"getData($event)\">\n              </mat-paginator>\n            </div>\n            </div>\n            <div class=\"col-md-12 all-products\" id=\"products\" *ngIf=\"!arrPaginatedData.length\">\n                <p class=\"pl-15\">No Item Found</p>\n            </div>\n\n      </div>\n  </div>\n</div>\n\n\n\n\n<div class=\"filter-sort-mobile visible-sm visible-xs\">\n  <div class=\"col-md-12 \">\n    <div class=\"col-xs-6 sort-main\" (click)=\"goToSort()\">\n      <span class=\"btn-bottom sort\" > <p><i class=\"fa fa-arrows-v\" aria-hidden=\"true\"></i> SORT</p></span>\n    </div>\n    <div class=\"col-xs-6\">\n      <span class=\"btn-bottom\" (click)=\"goToFilter()\"> \n        <p><i class=\"fa fa-filter\" aria-hidden=\"true\"></i> FILTER </p></span>\n      \n    </div>\n</div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/similar-product/similar-product.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/similar-product/similar-product.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("    <div class=\"product-list\">\n\n        <div class=\"col-md-12 all-productsc similar-head\"   >\n            <p class=\"head-main\" *ngIf=\"arrProducts.length\">\n\n                <span class=\"head\"  >SIMILAR PRODUCTS</span>\n                <i class=\"fa fa-window-close close-btn\" aria-hidden=\"true\" (click)=\"goBack()\" ></i>\n            </p>\n            <div class=\"col-md-3 col-sm-6 col-xs-6 one-product\" *ngFor=\"let item of arrProducts;let i =index\" \n              (click)=\"goTOProductDetails(item._id)\">\n                <div>\n                  <img class=\"image\" src=\"{{item.strImageUrl}}\" class=\"product-list-img\">\n                </div>\n                <div class=\"description\">\n\n                    <h4 class=\"product-head\">{{item.strName}}</h4>\n                    <p class=\"product-sub-head\">{{item.strCategoryId}}</p>\n                    <p><b>Rs. {{item.dblSellingPrice}}</b>\n                    <span  *ngIf=\"item.dblMRP\"  class=\"product-strike\">\n                        Rs. {{item.dblMRP}}\n                    </span>\n                    <span class=\"discountPercentage\">\n                      <!-- {{item.discount_perc}} --> 25%\n                    </span>\n                </p>\n                </div>\n               \n              </div>\n         \n          </div>\n    </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/wish-list/wish-list.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/wish-list/wish-list.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container-fluid mt-50\" >\n    <div class=\"container product-list\">\n\n        <div class=\"col-md-12 all-productsc\" id=\"products\"  >\n            <h4 *ngIf=\"arrProducts.length\" >My Wishlist {{arrProducts.length}} items</h4>\n            <div class=\"col-md-3 col-sm-6 col-xs-6 one-product\" *ngFor=\"let item of arrProducts;let i =index\" \n            routerLinkActive=\"router-link-active\" >\n                <div>\n                  <img class=\"image\" src=\"{{item.strImageUrl}}\" class=\"product-list-img\">\n                </div>\n                <i class=\"fa fa-window-close close-btn\" aria-hidden=\"true\"></i>\n                <div class=\"description\">\n\n                    <h4 class=\"product-head\">{{item.strName}}</h4>\n                    <p class=\"product-sub-head\">{{item.strCategoryId}}</p>\n                    <p><b>Rs. {{item.dblSellingPrice}}</b>\n                    <span  *ngIf=\"item.dblMRP\"  class=\"product-strike\">\n                        Rs. {{item.dblMRP}}\n                    </span>\n                    <span class=\"discountPercentage\">\n                      <!-- {{item.discount_perc}} --> 25%\n                    </span>\n                </p>\n                </div>\n                <div >\n                    <p class=\"btn-move\">MOVE TO BAG</p>\n                </div>\n              </div>\n         \n          </div>\n    </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/UI-component/filter-mobile-screen/filter-mobile-screen.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/UI-component/filter-mobile-screen/filter-mobile-screen.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"filter-sec\">\n    <div class=\"row head\">\n        <div class=\"col-xs-6 \">\n            <p><i class=\"fa fa-window-close close-btn\" aria-hidden=\"true\" (click)=\"close()\"></i> FILTERS</p>\n        </div>\n        <div class=\"col-xs-6  clear-all\" (click)=\"fun_clearSelectedItems()\">\n            <p>CLEAR ALL</p>\n        </div>\n    </div>\n    <div class=\"col-xs-3 left-side\">\n        <p (click)=\"fun_filterBy(i)\" *ngFor=\"let item of arrFilterByLeftData;let i=index\"\n        [ngStyle]=\"{'font-weight':selectedItem===i?'550':''}\">{{item}}</p>\n\n    </div>\n    <div class=\"col-xs-9 right-side\">\n       <p *ngFor=\"let item of arrFilterByRightData\" (click)=\"fun_thisItemSelected(item.strName)\"> \n        <i class=\"fa fa-check\" aria-hidden=\"true\"\n        [ngStyle]=\"{'color':selectedItemId.includes(item.strName)?'#ff3e6c':''}\" [ngClass]=\"{'bold':selectedItemId.includes(item.strName)}\"></i>{{item.strName}}</p>\n       \n\n    </div>\n    \n        <div class=\"col-xs-12 filter-sort-mobile\">\n          <div class=\"col-xs-6 sort-main\" (click)=\"close()\">\n            <span class=\"btn-bottom sort\" > <p><i class=\"fa fa-times\" aria-hidden=\"true\"></i> CLOSE</p></span>\n          </div>\n          <div class=\"col-xs-6\">\n            <span class=\"btn-bottom\" (click)=\"close()\"> \n              <p><i class=\"fa fa-filter\" aria-hidden=\"true\"></i>APPLY FILTER </p></span>\n            \n          </div>\n      </div>\n      \n</div>\n\n<!-- [ngStyle]=\"{'color':selectedItemId.includes(item.id)?'#ff3e6c':''}\" [ngClass]=\"{'bold':selectedItemId.includes(item.id)}\" -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/UI-component/product-items/product-items.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/UI-component/product-items/product-items.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-3 col-sm-6 col-xs-6 one-product\" *ngFor=\"let item of arrPaginatedData;let i =index\" \nrouterLinkActive=\"router-link-active\" >\n    <!-- <div>\n      <img src=\"{{item.strImageUrl}}\" class=\"product-list-img\">\n    </div> -->\n    <div id=\"{{item._id}}\" class=\"carousel slide\" data-ride=\"carousel\" data-type=\"multi\" data-interval=\"false\"  >\n        <!-- Indicators -->\n        <ol class=\"carousel-indicators overlay\" >\n          <li  *ngFor=\"let image of item.objImageUrls | keyvalue;let i = index\" [attr.data-target]=\"'#'+item._id\" [attr.data-slide-to]=\"i\" [ngClass]=\"i == 0 ? 'active' : ''\"></li>\n         <br> <button class=\"btn-wish-list\">WISHLIST</button>\n          <p class=\"product-sub-head\">Sizes: XS,S,M,L,XL,XXL</p>\n\n        </ol>\n    \n        <!-- Wrapper for slides -->\n        <div class=\"carousel-inner\" (click)=\"eventFromUIComponent(item._id)\">\n          <div *ngFor=\"let item of item.objImageUrls | keyvalue;let k = index\" [ngClass]=\"k == 0 ? 'item active' : 'item'\" class=\"item \" >\n            <img  src=\"{{item.value}}\" alt=\"{{item.value}}\" class=\"product-list-img\" >\n           \n          </div>\n\n    \n    \n        </div>\n  \n     \n      </div>\n      <h4 class=\"product-head\">{{item.strName}}</h4>\n      <p class=\"product-sub-head\">{{item.strCategoryId}}</p>\n      <p><b>Rs. {{item.dblSellingPrice}}</b>\n      <span  *ngIf=\"item.dblMRP\"  class=\"product-strike\">\n          Rs. {{item.dblMRP}}\n      </span>\n      <span class=\"discountPercentage\">\n        <!-- {{item.discount_perc}} --> 25%\n      </span>\n    </p>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/UI-component/sort-mobile-screen/sort-mobile-screen.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/UI-component/sort-mobile-screen/sort-mobile-screen.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h5>SORT BY</h5>\n<mat-list role=\"list\">\n    <mat-list-item (click)=\"sortBy('Whats New')\" role=\"listitem\"> \n        <i class=\"fa fa-users\" aria-hidden=\"true\"></i> \n        What's New </mat-list-item>\n    <mat-list-item (click)=\"sortBy('Popularity')\" role=\"listitem\">\n        <i class=\"fa fa-star-half-o\" aria-hidden=\"true\"></i>\n        Popularity</mat-list-item>\n    <mat-list-item (click)=\"sortBy('Discount')\" role=\"listitem\">\n        <i class=\"fa fa-percent\" aria-hidden=\"true\"></i>\n        Discount\n        </mat-list-item>\n    <mat-list-item (click)=\"sortBy('Price High to Low')\" role=\"listitem\">\n        <i class=\"fa fa-inr\" aria-hidden=\"true\"></i>\n        <i class=\"fa fa-long-arrow-down\" aria-hidden=\"true\"></i>\n        Price High to Low</mat-list-item>\n    <mat-list-item (click)=\"sortBy('Price Low to High')\" role=\"listitem\">\n        <i class=\"fa fa-inr\" aria-hidden=\"true\"></i>\n        <i class=\"fa fa-long-arrow-up\" aria-hidden=\"true\"></i>\n        Price Low to High</mat-list-item>\n  </mat-list>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/footer/footer.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/footer/footer.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid pd-0 visible-md\">\n    <div class=\"icon-bar\">\n        <a href=\"#\" class=\"facebook\"><i class=\"fa fa-facebook\"></i></a> \n        <a href=\"#\" class=\"twitter\"><i class=\"fa fa-twitter\"></i></a> \n        <a href=\"#\" class=\"google\"><i class=\"fa fa-google\"></i></a> \n        <a href=\"#\" class=\"linkedin\"><i class=\"fa fa-linkedin\"></i></a>\n        <a href=\"#\" class=\"youtube\"><i class=\"fa fa-youtube\"></i></a> \n      </div>\n</div>\n\n\n<div class=\"container-fluid\" style=\"background-color: #f5f5f6; padding-bottom: 30px\">\n  <div class=\"container\">\n\n    <div class=\"row foot-main\">\n      <div class=\"col-md-2 \">\n        <h4>ONLINE SHOPPING</h4>\n        <p>Men</p>\n        <p>Women</p>\n        <p>Kids</p>\n        <p>Essentials</p>\n        <p>Gift Cards</p>\n      </div>\n      <div class=\"col-md-2\">\n        <h4> USEFUL LINKS </h4>\n        <p>Contact Us</p>\n        <p>FAQ</p>\n        <p>T&C</p>\n        <p>Terms Of Use</p>\n        <p>Blog</p>\n        <p>Careers</p>\n        <p>Privacy policy</p>\n        <p>Site Map</p>\n\n        \n\n      </div>\n      <div class=\"col-md-5\">\n        <h4> EXPERIENCE AXEF APP ON MOBILE </h4>\n        <div class=\"col-md-6 pl-0\">\n          <img class=\"wt-100 ht-55\"  src=\"https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png\">\n        </div>\n        <div class=\"col-md-6 pl-0\" style=\"margin-bottom: 20px;\">\n          <img class=\"wt-100 ht-55\" src=\"https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png\">\n\n        </div>\n        <div class=\"col-md-12\" style=\"padding-left: 0;\">\n\n          <h4> KEEP IN TOUCH </h4>\n          <i class=\"fa fa-instagram\" aria-hidden=\"true\"></i>\n          <i class=\"fa fa-facebook-square\" aria-hidden=\"true\"></i>\n          <i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i>\n          <i class=\"fa fa-youtube\" aria-hidden=\"true\"></i>\n        </div>\n\n      </div>\n      <div class=\"col-md-3\" >\n        <div class=\"row\" style=\"    margin-top: 40px;\">\n\n          <div class=\"col-xs-5\" >\n            <img class=\"wt-100 \" style=\"height: 63px;\" src=\"https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png\">\n          </div>\n          <div class=\"col-xs-7\" style=\"padding: 0;\">\n            <h4 style=\"font-size: 18; line-height: 1.8;    margin: 10px 0;\">100% ORIGINAL <span style=\"font-size: 13;\"> guarantee for all products at axef.in </span></h4>\n          </div>\n        </div>\n        <div class=\"row\" style=\"    margin-top: 40px;\">\n\n          <div class=\"col-xs-5\" >\n            <img class=\"wt-100 \" style=\"height: 63px;\" src=\" https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png\">\n          </div>\n          <div class=\"col-xs-7\" style=\"padding: 0;\">\n            <h4 style=\"font-size: 18;   line-height: 1.8;  margin: 10px 0;\">Return within 30days  <span style=\"font-size: 13;\"> of receiving your order </span></h4>\n          </div>\n        </div>\n  <div class=\"row\" style=\"    margin-top: 40px;\">\n\n    <div class=\"col-xs-5\" >\n      <img class=\"wt-100 \" style=\"height: 63px;\" src=\"https://constant.myntassets.com/web/assets/img/cafa8f3c-100e-47f1-8b1c-1d2424de71041574602902399-truck.png\">\n    </div>\n    <div class=\"col-xs-7\" style=\"padding: 0;\">\n      <h4 style=\"font-size: 18;  line-height: 1.8;   margin: 10px 0;\">Get free delivery   <span style=\"font-size: 13;\"> for every order above Rs. 799 </span></h4>\n    </div>\n  </div>\n      </div>\n\n\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/header/header.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/header/header.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<nav class=\"navbar visible-md visible-lg\" >\n\t<div class=\"container-fluid\" style=\"\n    border-bottom: 1px solid beige;\">\n\t\t<div class=\"navbar-header\">\n\t\t\t<button type=\"button\"  class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#ghdNavCollapse\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand pd-0 cursor-pointer\" [routerLink]=\"['']\">\n        <img  class=\"pd-0 pt-8\"\n        width=\"140\"\n        src=\"../../../../assets/banner/logo.png\">\n      \n    </a>\n\t\t</div>\n\n\t\t<div class=\"collapse navbar-collapse navbar-toggleable-xs\"  id=\"ghdNavCollapse\">\n\t\t\t<ul class=\"nav navbar-nav\">\n        <li class=\"dropdown nav-item men\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">MEN</a>\n          <ul id=\"products-menu\" class=\"dropdown-menu clearfix\" role=\"menu\">\n            <div class=\"row\">\n              <div class=\"col-md-2 col-md-offset-1\">\n                <li><a class=\"category-name\" href=\"\">Topwear</a></li>\n                <li><a href=\"\">T-Shirts</a></li>\n                <li><a href=\"\">Casual Shirts</a></li>\n                <li><a href=\"\">Formal Shirts</a></li>\n                <li><a href=\"\">T-Shirts</a></li>\n                <li><a href=\"\">Casual Shirts</a></li>\n                <li><a href=\"\">Formal Shirts</a></li>\n                <li><a href=\"\">T-Shirts</a></li>\n                <li><a href=\"\">Casual Shirts</a></li>\n                <li><a href=\"\">Formal Shirts</a></li>\n                <div class=\"line\"></div>\n                <li><a class=\"category-name\" href=\"\">Bottomwear</a></li>\n                <li><a href=\"\">T-Shirts</a></li>\n                <li><a href=\"\">Casual Shirts</a></li>\n                <li><a href=\"\">Formal Shirts</a></li>\n                <li><a href=\"\">T-Shirts</a></li>\n                <li><a href=\"\">Casual Shirts</a></li>\n              </div>\n              <div class=\"col-md-2\">\n                <li><a class=\"category-name\" href=\"\">Innerwear & Sleepwear</a></li>\n                <li><a href=\"\">T-Shirts</a></li>\n                <li><a href=\"\">Casual Shirts</a></li>\n                <li><a href=\"\">Formal Shirts</a></li>\n                <li><a href=\"\">T-Shirts</a></li>\n                <li><a href=\"\">Casual Shirts</a></li>\n                <li><a href=\"\">Formal Shirts</a></li>\n                <div class=\"line\"></div>\n                <li><a class=\"category-name\" href=\"\">Footwear</a></li>\n                <li><a href=\"\">T-Shirts</a></li>\n                <li><a href=\"\">Casual Shirts</a></li>\n                <li><a href=\"\">Formal Shirts</a></li>\n              </div>\n              <div class=\"col-md-2\">\n                <li><a class=\"category-name\" href=\"\">Topwear</a></li>\n                <li><a href=\"\">T-Shirts</a></li>\n                <li><a href=\"\">Casual Shirts</a></li>\n                <li><a href=\"\">Formal Shirts</a></li>\n                <li><a href=\"\">T-Shirts</a></li>\n                <li><a href=\"\">Casual Shirts</a></li>\n                <li><a href=\"\">Formal Shirts</a></li>\n                <li><a href=\"\">T-Shirts</a></li>\n                <li><a href=\"\">Casual Shirts</a></li>\n                <li><a href=\"\">Formal Shirts</a></li>\n                <div class=\"line\"></div>\n                <li><a class=\"category-name\" href=\"\">Bottomwear</a></li>\n                <li><a href=\"\">T-Shirts</a></li>\n                <li><a href=\"\">Casual Shirts</a></li>\n                <li><a href=\"\">Formal Shirts</a></li>\n                <li><a href=\"\">T-Shirts</a></li>\n                <li><a href=\"\">Casual Shirts</a></li>\n              </div>\n              <div class=\"col-md-2\">\n                <li><a class=\"category-name\" href=\"\">Innerwear & Sleepwear</a></li>\n                <li><a href=\"\">T-Shirts</a></li>\n                <li><a href=\"\">Casual Shirts</a></li>\n                <li><a href=\"\">Formal Shirts</a></li>\n                <li><a href=\"\">T-Shirts</a></li>\n                <li><a href=\"\">Casual Shirts</a></li>\n                <li><a href=\"\">Formal Shirts</a></li>\n                <div class=\"line\"></div>\n                <li><a class=\"category-name\" href=\"\">Footwear</a></li>\n                <li><a href=\"\">T-Shirts</a></li>\n                <li><a href=\"\">Casual Shirts</a></li>\n                <li><a href=\"\">Formal Shirts</a></li>\n              </div>\n              <div class=\"col-md-2\">\n                <li><a class=\"category-name\" href=\"\">Innerwear & Sleepwear</a></li>\n                <li><a href=\"\">T-Shirts</a></li>\n                <li><a href=\"\">Casual Shirts</a></li>\n                <li><a href=\"\">Formal Shirts</a></li>\n                <li><a href=\"\">T-Shirts</a></li>\n                <li><a href=\"\">Casual Shirts</a></li>\n                <li><a href=\"\">Formal Shirts</a></li>\n                <div class=\"line\"></div>\n                <li><a class=\"category-name\" href=\"\">Footwear</a></li>\n                <li><a href=\"\">T-Shirts</a></li>\n                <li><a href=\"\">Casual Shirts</a></li>\n                <li><a href=\"\">Formal Shirts</a></li>\n              </div>\n            </div>\n             \n          </ul>\n      </li>\n\t\t\t\n\t\t\t\t\n        <li class=\"dropdown nav-item women\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">WOMEN</a>\n          <ul id=\"products-menu\" class=\"dropdown-menu clearfix\" role=\"menu\">\n            <div class=\"row\">\n              <div class=\"col-md-2 col-md-offset-1\">\n                <li><a class=\"category-name\" href=\"\">Topwear</a></li>\n                <li><a href=\"\">T-Shirts</a></li>\n                <li><a href=\"\">Casual Shirts</a></li>\n                <li><a href=\"\">Formal Shirts</a></li>\n                <li><a href=\"\">T-Shirts</a></li>\n                <li><a href=\"\">Casual Shirts</a></li>\n                <li><a href=\"\">Formal Shirts</a></li>\n                <li><a href=\"\">T-Shirts</a></li>\n                <li><a href=\"\">Casual Shirts</a></li>\n                <li><a href=\"\">Formal Shirts</a></li>\n                <div class=\"line\"></div>\n                <li><a class=\"category-name\" href=\"\">Bottomwear</a></li>\n                <li><a href=\"\">T-Shirts</a></li>\n                <li><a href=\"\">Casual Shirts</a></li>\n                <li><a href=\"\">Formal Shirts</a></li>\n                <li><a href=\"\">T-Shirts</a></li>\n                <li><a href=\"\">Casual Shirts</a></li>\n              </div>\n              <div class=\"col-md-2\">\n                <li><a class=\"category-name\" href=\"\">Innerwear & Sleepwear</a></li>\n                <li><a href=\"\">T-Shirts</a></li>\n                <li><a href=\"\">Casual Shirts</a></li>\n                \n                <div class=\"line\"></div>\n                <li><a class=\"category-name\" href=\"\">Footwear</a></li>\n                <li><a href=\"\">T-Shirts</a></li>\n                <li><a href=\"\">Casual Shirts</a></li>\n                <li><a href=\"\">Formal Shirts</a></li>\n                <li><a href=\"\">Formal Shirts</a></li>\n                <li><a href=\"\">T-Shirts</a></li>\n                <li><a href=\"\">Casual Shirts</a></li>\n                <li><a href=\"\">Formal Shirts</a></li>\n              </div>\n              <div class=\"col-md-2\">\n                <li><a class=\"category-name\" href=\"\">Topwear</a></li>\n                <li><a href=\"\">T-Shirts</a></li>\n                <li><a href=\"\">Casual Shirts</a></li>\n                <li><a href=\"\">Formal Shirts</a></li>\n                <li><a href=\"\">T-Shirts</a></li>\n              \n                <div class=\"line\"></div>\n                <li><a class=\"category-name\" href=\"\">Bottomwear</a></li>\n                <li><a href=\"\">T-Shirts</a></li>\n                <li><a href=\"\">Casual Shirts</a></li>\n                <li><a href=\"\">Formal Shirts</a></li>\n                <li><a href=\"\">T-Shirts</a></li>\n                <li><a href=\"\">Casual Shirts</a></li>\n                <li><a href=\"\">Casual Shirts</a></li>\n                <li><a href=\"\">Formal Shirts</a></li>\n                <li><a href=\"\">T-Shirts</a></li>\n                <li><a href=\"\">Casual Shirts</a></li>\n                <li><a href=\"\">Formal Shirts</a></li>\n              </div>\n              <div class=\"col-md-2\">\n                <li><a class=\"category-name\" href=\"\">Innerwear & Sleepwear</a></li>\n                <li><a href=\"\">T-Shirts</a></li>\n                <li><a href=\"\">Casual Shirts</a></li>\n                <li><a href=\"\">Formal Shirts</a></li>\n                <li><a href=\"\">T-Shirts</a></li>\n              \n                <div class=\"line\"></div>\n                <li><a class=\"category-name\" href=\"\">Footwear</a></li>\n                <li><a href=\"\">T-Shirts</a></li>\n                <li><a href=\"\">Casual Shirts</a></li>\n                <li><a href=\"\">Formal Shirts</a></li>\n                <li><a href=\"\">Casual Shirts</a></li>\n                <li><a href=\"\">Formal Shirts</a></li>\n              </div>\n              <div class=\"col-md-2\">\n                <li><a class=\"category-name\" href=\"\">Innerwear & Sleepwear</a></li>\n                <li><a href=\"\">T-Shirts</a></li>\n                <li><a href=\"\">Casual Shirts</a></li>\n                <li><a href=\"\">Formal Shirts</a></li>\n                <li><a href=\"\">T-Shirts</a></li>\n                <div class=\"line\"></div>\n                <li><a class=\"category-name\" href=\"\">Footwear</a></li>\n                <li><a href=\"\">T-Shirts</a></li>\n                <li><a href=\"\">Casual Shirts</a></li>\n                <li><a href=\"\">Formal Shirts</a></li>\n\n                <li><a href=\"\">Casual Shirts</a></li>\n                <li><a href=\"\">Formal Shirts</a></li>\n              </div>\n            </div>\n             \n          </ul>\n      </li>\n        <li class=\"nav-item kid\" (click)=\"toggleNavbar()\">\n\t\t\t\t\t<a href=\"#\">KID</a>\n        </li>\n       \n        <li  class=\"nav-item essential\" (click)=\"toggleNavbar()\">\n\t\t\t\t\t<a href=\"#\"> Essentials</a>\n\t\t\t\t</li>\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t</ul>\n\t\t\t<form class=\"navbar-form navbar-left\" role=\"search\">\n        <div class=\"input-group nav-search\">\n          <span class=\"input-group-addon\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></span>\n          <input  id=\"searchbox\" type=\"text\" class=\"form-control nav-search-box\" name=\"password\" \n          placeholder=\"Search for products, brands and more\">\n        </div>\n\t\t\t\n\t\t\t</form>\n\t\t\t<ul class=\"nav navbar-nav navbar-right\">\n        <li class=\"nav-item cursor-pointer\" (click)=\"goToProfile()\" style=\"padding: 13px 0 ;\">\n          <i class=\"fa fa-user-o\" aria-hidden=\"true\"></i>\n\t\t\t\t\t<a >Profile</a>\n\t\t\t\t</li>\n        <li class=\"nav-item cursor-pointer\" (click)=\"wishList()\" style=\"padding: 13px 0 ;\">\n          <i class=\"fa fa-bookmark-o\" aria-hidden=\"true\"></i>\n\t\t\t\t\t<a >Wishlist</a>\n        </li>\n        <li class=\"nav-item cursor-pointer\" (click)=\"toggleNavbar()\" style=\"padding: 13px 0 ;\">\n          <i class=\"fa fa-shopping-bag\" aria-hidden=\"true\"></i>\t\t\t\t\n        \t<a >Bag</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</nav>\n\n<div class=\"container-fluid mobile-navbar mt-10\">\n  \n  <div id=\"mySidenav\" class=\"sidenav nav-mob visible-sm visible-xs bg-clr-white\">\n      <div class=\"logoutTopBanner\">\n        <div class=\"LazyLoad  is-visible\" style=\"height: 125px; width: 100%; background: rgb(255, 242, 223);\">\n          <picture class=\"img-responsive\" style=\"width: 100%;\">\n            <source\n              type=\"image/Nav\">\n              <img\n              src=\"../../../../assets/Nav/leftmenu-01.png\"\n              class=\"img-responsive preLoad loaded\" alt=\"\" title=\"\" style=\"width: 100%;\"></picture>\n        </div>\n        <div class=\"logoutButtonContainer\" (click)=\"goToLogin()\"><a class=\"logoutButton\" >SIGN UP. LOGIN</a></div>\n      </div>\n    <a  class=\"closebtn\" (click)=\"closeNav()\">&times;</a>\n    <div class=\"nav-ul nav-pad\">\n      <div class=\"navi\">\n        <div class=\"naviWrapper\">\n          <div class=\"ripple-container \">\n            <div class=\"clearfix naviLevel level-1\" (click)=\"menShow()\"><span\n                class=\"pull-left\">Men</span><svg class=\"pull-right\" fill=\"#a9abb3\" height=\"16\"\n                style=\"transform: rotate(-90deg);\" [ngStyle]=\"{'transform':!blnMenShow?'rotate(-90deg)':''}\" viewBox=\"0 0 24 24\" width=\"16\">\n                <g fill=\"none\" fill-rule=\"evenodd\">\n                  <path d=\"M0 0h24v24H0z\" opacity=\"0.05\"></path>\n                  <path\n                    d=\"M12.55 15.768a.786.786 0 00.041-.048l6.183-6.36a.815.815 0 000-1.128.761.761 0 00-1.095 0l-5.68 5.844-5.678-5.844a.761.761 0 00-1.095 0 .816.816 0 000 1.127l6.182 6.361A.761.761 0 0012 16a.76.76 0 00.55-.232\"\n                    fill=\"#a9abb3\"></path>\n                </g>\n              </svg></div>\n            <div class=\"ripple\"></div>\n          </div>\n          <ng-container *ngIf=\"blnMenShow\" >\n            <div class=\"navi\">\n              <div class=\"naviWrapper\">\n                <div class=\"ripple-container \">\n                  <div class=\"clearfix naviLevel level-2\"><span class=\"pull-left\">Indian</span><svg width=\"16\"\n                      height=\"16\" viewBox=\"0 0 24 24\" fill=\"#a9abb3\" class=\"pull-right\" style=\"transform: rotate(-90deg);\">\n                      <g fill=\"none\" fill-rule=\"evenodd\">\n                        <path d=\"M0 0h24v24H0z\" opacity=\"0.05\"></path>\n                        <path fill=\"#a9abb3\"\n                          d=\"M12.55 15.768a.786.786 0 00.041-.048l6.183-6.36a.815.815 0 000-1.128.761.761 0 00-1.095 0l-5.68 5.844-5.678-5.844a.761.761 0 00-1.095 0 .816.816 0 000 1.127l6.182 6.361A.761.761 0 0012 16a.76.76 0 00.55-.232\">\n                        </path>\n                      </g>\n                    </svg></div>\n                  <div class=\"ripple\"></div>\n                </div>\n              </div>\n            </div>\n            <div class=\"navi\">\n              <div class=\"naviWrapper\">\n                <div class=\"ripple-container \">\n                  <div class=\"clearfix naviLevel level-2\"><span class=\"pull-left\">Topwear</span><svg width=\"16\"\n                      height=\"16\" viewBox=\"0 0 24 24\" fill=\"#a9abb3\" class=\"pull-right\" style=\"transform: rotate(-90deg);\">\n                      <g fill=\"none\" fill-rule=\"evenodd\">\n                        <path d=\"M0 0h24v24H0z\" opacity=\"0.05\"></path>\n                        <path fill=\"#a9abb3\"\n                          d=\"M12.55 15.768a.786.786 0 00.041-.048l6.183-6.36a.815.815 0 000-1.128.761.761 0 00-1.095 0l-5.68 5.844-5.678-5.844a.761.761 0 00-1.095 0 .816.816 0 000 1.127l6.182 6.361A.761.761 0 0012 16a.76.76 0 00.55-.232\">\n                        </path>\n                      </g>\n                    </svg></div>\n                  <div class=\"ripple\"></div>\n                </div>\n              </div>\n            </div>\n\n          </ng-container>\n        </div>\n      </div>\n      <div class=\"navi\">\n        <div class=\"naviWrapper\">\n          <div class=\"ripple-container \">\n            <div class=\"clearfix naviLevel level-1\"><span\n                class=\"pull-left\">Women</span><svg class=\"pull-right\" fill=\"#a9abb3\" height=\"16\"\n                style=\"transform: rotate(-90deg);\" viewBox=\"0 0 24 24\" width=\"16\">\n                <g fill=\"none\" fill-rule=\"evenodd\">\n                  <path d=\"M0 0h24v24H0z\" opacity=\"0.05\"></path>\n                  <path\n                    d=\"M12.55 15.768a.786.786 0 00.041-.048l6.183-6.36a.815.815 0 000-1.128.761.761 0 00-1.095 0l-5.68 5.844-5.678-5.844a.761.761 0 00-1.095 0 .816.816 0 000 1.127l6.182 6.361A.761.761 0 0012 16a.76.76 0 00.55-.232\"\n                    fill=\"#a9abb3\"></path>\n                </g>\n              </svg></div>\n            <div class=\"ripple\"></div>\n          </div>\n        </div>\n      </div>\n      <div class=\"navi\">\n        <div class=\"naviWrapper\">\n          <div class=\"ripple-container \">\n            <div class=\"clearfix naviLevel level-1\"><span\n                class=\"pull-left\">Kids</span><svg class=\"pull-right\" fill=\"#a9abb3\" height=\"16\"\n                style=\"transform: rotate(-90deg);\" viewBox=\"0 0 24 24\" width=\"16\">\n                <g fill=\"none\" fill-rule=\"evenodd\">\n                  <path d=\"M0 0h24v24H0z\" opacity=\"0.05\"></path>\n                  <path\n                    d=\"M12.55 15.768a.786.786 0 00.041-.048l6.183-6.36a.815.815 0 000-1.128.761.761 0 00-1.095 0l-5.68 5.844-5.678-5.844a.761.761 0 00-1.095 0 .816.816 0 000 1.127l6.182 6.361A.761.761 0 0012 16a.76.76 0 00.55-.232\"\n                    fill=\"#a9abb3\"></path>\n                </g>\n              </svg></div>\n            <div class=\"ripple\"></div>\n          </div>\n        </div>\n      </div>\n      <div class=\"navi\">\n        <div class=\"naviWrapper\">\n          <div class=\"ripple-container \">\n            <div class=\"clearfix naviLevel level-1\"><span\n                class=\"pull-left\">Home &amp; Living</span><svg class=\"pull-right\" fill=\"#a9abb3\"\n                height=\"16\" style=\"transform: rotate(-90deg);\" viewBox=\"0 0 24 24\" width=\"16\">\n                <g fill=\"none\" fill-rule=\"evenodd\">\n                  <path d=\"M0 0h24v24H0z\" opacity=\"0.05\"></path>\n                  <path\n                    d=\"M12.55 15.768a.786.786 0 00.041-.048l6.183-6.36a.815.815 0 000-1.128.761.761 0 00-1.095 0l-5.68 5.844-5.678-5.844a.761.761 0 00-1.095 0 .816.816 0 000 1.127l6.182 6.361A.761.761 0 0012 16a.76.76 0 00.55-.232\"\n                    fill=\"#a9abb3\"></path>\n                </g>\n              </svg></div>\n            <div class=\"ripple\"></div>\n          </div>\n        </div>\n      </div>\n      <div class=\"navi\">\n        <div class=\"naviWrapper\">\n          <div class=\"ripple-container \">\n            <div class=\"clearfix naviLevel level-1\"><span\n                class=\"pull-left\">Essentials</span>\n                <svg class=\"pull-right\" fill=\"#a9abb3\"\n                height=\"16\" style=\"transform: rotate(-90deg);\" viewBox=\"0 0 24 24\" width=\"16\">\n                <g fill=\"none\" fill-rule=\"evenodd\">\n                  <path d=\"M0 0h24v24H0z\" opacity=\"0.05\"></path>\n                  <path\n                    d=\"M12.55 15.768a.786.786 0 00.041-.048l6.183-6.36a.815.815 0 000-1.128.761.761 0 00-1.095 0l-5.68 5.844-5.678-5.844a.761.761 0 00-1.095 0 .816.816 0 000 1.127l6.182 6.361A.761.761 0 0012 16a.76.76 0 00.55-.232\"\n                    fill=\"#a9abb3\"></path>\n                </g>\n              </svg></div>\n            <div class=\"ripple\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"user-specific-links\">\n      <div class=\"navi\">\n        <div class=\"naviWrapper\"><a href=\"#\" class=\"naviLevel bdr-btm-none\">Online Insider</a></div>\n      </div>\n      <div class=\"navi\">\n        <div class=\"naviWrapper\"><a href=\"#\" class=\"naviLevel bdr-btm-none\">Gift Cards</a></div>\n      </div>\n      <div class=\"navi\">\n        <div class=\"naviWrapper\"><a href=\"#\" class=\"naviLevel bdr-btm-none\">Contact Us</a></div>\n      </div>\n      <div class=\"navi\">\n        <div class=\"naviWrapper\"><a href=\"#\" class=\"naviLevel bdr-btm-none\">FAQs</a></div>\n      </div>\n    </div>\n\n    <div class=\"card-container\">\n      <div class=\"image-container\"><img\n          src=\"../../../../assets/Nav/mobile-icon.png\"\n          width=\"48\" height=\"72\"></div>\n      <div class=\"text-container\">\n        <p class=\"card-heading\">Enjoy app-like experience</p>\n        <p class=\"card-text\">Get our tiny 0.4MB web-app; it's smaller than a selfie<span class=\"add\">\n            <div class=\"ripple-container \"><button class=\"btn primary flex center card-button bg-clr-rose\" id=\"\">ADD TO\n                HOMESCREEN</button>\n              <div class=\"ripple\"></div>\n            </div>\n          </span></p>\n      </div>\n    </div>\n\n  </div>\n  <span class=\"icon-collapse\" style=\"font-size:30px;cursor:pointer\" > <span (click)=\"openNav()\">&#9776; </span>\n    <a class=\"navbar-brand pd-0\" [routerLink]=\"['']\" style=\"    z-index: 0;\" >\n      <img   class=\"pd-0 pt-8\"\n      width=\"140\"\n      src=\"../../../../assets/banner/logo.png\">\n    \n  </a>\n</span>\n  <span class=\"fr\">\n\n    <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n  <i class=\"fa fa-bookmark-o\" (click)=\"wishList()\" aria-hidden=\"true\"></i>\n    <i class=\"fa fa-shopping-bag\" (click)=\"cart()\" aria-hidden=\"true\"></i>\t\n  </span>\n    \n  \n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/secure-header/secure-header.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/secure-header/secure-header.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<nav class=\"navbar visible-md visible-lg\" >\n        <div class=\"container-fluid\" style=\"height: 87px;\n        border-bottom: 1px solid beige;\">\n            <div class=\"navbar-header\">\n                <!-- <button type=\"button\"  class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#ghdNavCollapse\" aria-expanded=\"false\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button> -->\n          <a class=\"navbar-brand pd-0 cursor-pointer\" [routerLink]=\"['']\">\n            <img  class=\"pd-0 pt-8\"\n            width=\"140\"\n            src=\"../../../../assets/banner/logo.png\">\n          \n        </a>\n\n        <!-- <div class=\"nav-container\">\n            <li>\n                <a href=\"#\">abcc</a>\n                <a href=\"#\">nav 2</a>\n                <a href=\"#\">nav 3</a>\n            </li>\n        </div>\n        <div class=\"secure-brand\">\n            <img class=\"secure-icon\" src=\"./../../../assets/banner/protect.png\" alt=\"secure\" srcset=\"\">\n            <h6>100% secure</h6>\n        </div> -->\n            </div>\n            \n    \n        </div>\n    </nav>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
    },
    {
        path: '',
        loadChildren: './home/home.module#HomeModule'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'online-site';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_layout_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/layout/header/header.component */ "./src/app/shared/layout/header/header.component.ts");
/* harmony import */ var _shared_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/layout/footer/footer.component */ "./src/app/shared/layout/footer/footer.component.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _shared_layout_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
            _shared_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_9__["AuthModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _home_home_module__WEBPACK_IMPORTED_MODULE_7__["HomeModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");




const routes = [
    {
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }
];
let AuthRoutingModule = class AuthRoutingModule {
};
AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AuthRoutingModule);



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






let AuthModule = class AuthModule {
};
AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
        ]
    })
], AuthModule);



/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\n  width: 100%;\n  height: 95vh;\n  min-height: 540px;\n  background-color: #FEEBEE;\n  display: flex;\n  justify-content: center;\n}\n\n.main {\n  background-color: #fff;\n  margin: 28px auto;\n  max-width: 400px;\n}\n\n.img-content {\n  width: 100%;\n  height: auto;\n}\n\n.login-container {\n  padding: 36px 36px 0;\n}\n\n.fw-600 {\n  font-weight: 600;\n  font-size: 2rem;\n}\n\n.input-group {\n  width: 100%;\n  margin: 20px auto;\n}\n\n.input-group input {\n  width: 100%;\n  height: 35px;\n}\n\n.cust-btn {\n  cursor: pointer;\n  background-color: #ff3f6c;\n  color: #fff;\n  border-radius: 0%;\n}\n\n.mob-inp .form-group {\n  margin-bottom: 24px;\n}\n\n.mob-inp .form-group .bar {\n  display: none;\n}\n\n.mob-inp .form-group .errorContainer {\n  margin-top: 4px;\n  font-size: 10px;\n  color: #ff5722;\n}\n\n.mob-inp .form-group .form-control {\n  border: 1px solid #d4d5d9;\n  font-size: 14px;\n  padding: 11px 12px;\n  line-height: 16px;\n  height: auto;\n  color: #282c3f;\n  border-radius: 0;\n}\n\n.mob-inp .form-group .mobileNumberInput {\n  padding-left: 62px;\n}\n\n.mob-inp .form-group .form-control-feedback {\n  right: 10px;\n}\n\n.mob-inp .form-group input:focus {\n  transition: 0.4s;\n  border: 1px solid #282c3f;\n  outline: none;\n}\n\n.mob-inp .form-group input:focus ~ .bar {\n  display: none;\n}\n\n.mob-inp .form-group input {\n  caret-color: #ff3f6c;\n}\n\n.mob-inp .form-group input:focus ~ .placeholderAlternative {\n  transition: 0.2s;\n  top: -9px;\n  background-color: #fff;\n  padding: 0 2px;\n  color: #282c3f;\n}\n\n.mob-inp .form-group input:focus ~ .placeholderAlternative .mobileNumber {\n  color: red;\n  outline: none;\n}\n\n.mob-inp .form-group input:focus ~ .placeholderAlternative.mobileNumber {\n  transition: 0.2s;\n  top: 10px;\n  background-color: #fff;\n  padding: 0 2px;\n  color: #282c3f;\n  outline: none;\n}\n\n.mob-inp .form-group input:focus ~ .placeholderAlternative.mobileNumber .mobileNumberPlacholder,\n.mob-inp .form-group input:valid ~ .placeholderAlternative.mobileNumber .mobileNumberPlacholder {\n  display: none;\n  outline: none;\n}\n\n.mob-inp .form-group input:focus ~ .placeholderAlternative.mobileNumber span {\n  padding-right: 8px !important;\n}\n\n.mob-inp .form-group input:focus ~ .topPlaceholderAlternative,\n.mob-inp .form-group input:valid ~ .topPlaceholderAlternative {\n  color: #282c3f;\n  outline: none;\n}\n\n.mob-inp .form-group .topPlaceholderAlternative {\n  color: #94969f;\n  top: -9px;\n  left: 12px;\n  font-size: 14px;\n  padding: 0 2px;\n  position: absolute;\n  background-color: #fff;\n}\n\n.mob-inp .form-group .placeholderAlternative {\n  color: #94969f;\n  top: 10px;\n  left: 12px;\n  font-size: 14px;\n  position: absolute;\n  pointer-events: none;\n}\n\n.form-control:focus {\n  outline: 0;\n  box-shadow: none;\n}\n\n@media (min-width: 100px) and (max-width: 400px) {\n  .main {\n    max-width: 300px;\n    margin: 0;\n  }\n\n  .wrapper {\n    min-height: unset;\n  }\n}\n\n@media (min-width: 991px) {\n  .main {\n    margin-top: 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYmR1cmFobWFudC9Eb3dubG9hZHMvbmFzZWVtbmFtYXRoLWUtY29tbWVyY2UtYmY1MzkxMDc1ZmQyL3NyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQ0FKOztBREVBO0VBQ0ksc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0VKOztBREFBO0VBQ0ksb0JBQUE7QUNHSjs7QUREQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQ0lKOztBREZBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FDS0o7O0FESEE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ01KOztBREpBO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDT0o7O0FESEE7RUFDSSxtQkFBQTtBQ01KOztBREhBO0VBQ0ksYUFBQTtBQ01KOztBREhBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDTUo7O0FESEE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ01KOztBREhBO0VBQ0ksa0JBQUE7QUNNSjs7QURIQTtFQUNJLFdBQUE7QUNNSjs7QURIQTtFQUVJLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0FDTUo7O0FESEE7RUFDSSxhQUFBO0FDTUo7O0FESEE7RUFDSSxvQkFBQTtBQ01KOztBREhBO0VBRUksZ0JBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ01KOztBREhBO0VBQ0ksVUFBQTtFQUNBLGFBQUE7QUNNSjs7QURGQTtFQUVJLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FDS0o7O0FEREE7O0VBRUksYUFBQTtFQUNBLGFBQUE7QUNJSjs7QURBQTtFQUNJLDZCQUFBO0FDR0o7O0FEQ0E7O0VBRUksY0FBQTtFQUNBLGFBQUE7QUNFSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURDQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtBQ0VKOztBRENBO0VBQ0k7SUFDSSxnQkFBQTtJQUNBLFNBQUE7RUNFTjs7RURBRTtJQUNJLGlCQUFBO0VDR047QUFDRjs7QUREQTtFQUNJO0lBQ0ksZ0JBQUE7RUNHTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLndyYXBwZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogOTV2aDtcbiAgICBtaW4taGVpZ2h0OiA1NDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkVFQkVFO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubWFpbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBtYXJnaW46IDI4cHggYXV0bztcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xufVxuLmltZy1jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG4ubG9naW4tY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAzNnB4IDM2cHggMDtcbn1cbi5mdy02MDAge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAycmVtO1xufVxuLmlucHV0LWdyb3VwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDIwcHggYXV0bztcbn1cbi5pbnB1dC1ncm91cCBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzNXB4O1xufVxuLmN1c3QtYnRuIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmM2Y2YztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAwJTtcblxufVxuXG4ubW9iLWlucCAuZm9ybS1ncm91cCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjRweFxufVxuXG4ubW9iLWlucCAuZm9ybS1ncm91cCAuYmFyIHtcbiAgICBkaXNwbGF5OiBub25lXG59XG5cbi5tb2ItaW5wIC5mb3JtLWdyb3VwIC5lcnJvckNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogNHB4O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBjb2xvcjogI2ZmNTcyMlxufVxuXG4ubW9iLWlucCAuZm9ybS1ncm91cCAuZm9ybS1jb250cm9sIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDRkNWQ5O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiAxMXB4IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGNvbG9yOiAjMjgyYzNmO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5tb2ItaW5wIC5mb3JtLWdyb3VwIC5tb2JpbGVOdW1iZXJJbnB1dCB7XG4gICAgcGFkZGluZy1sZWZ0OiA2MnB4XG59XG5cbi5tb2ItaW5wIC5mb3JtLWdyb3VwIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2sge1xuICAgIHJpZ2h0OiAxMHB4XG59XG5cbi5tb2ItaW5wIC5mb3JtLWdyb3VwIGlucHV0OmZvY3VzIHtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcbiAgICB0cmFuc2l0aW9uOiAuNHM7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzI4MmMzZjtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4ubW9iLWlucCAuZm9ybS1ncm91cCBpbnB1dDpmb2N1c34uYmFyIHtcbiAgICBkaXNwbGF5OiBub25lXG59XG5cbi5tb2ItaW5wIC5mb3JtLWdyb3VwIGlucHV0IHtcbiAgICBjYXJldC1jb2xvcjogI2ZmM2Y2Y1xufVxuXG4ubW9iLWlucCAuZm9ybS1ncm91cCBpbnB1dDpmb2N1c34ucGxhY2Vob2xkZXJBbHRlcm5hdGl2ZSB7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuMnM7XG4gICAgdHJhbnNpdGlvbjogLjJzO1xuICAgIHRvcDogLTlweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDAgMnB4O1xuICAgIGNvbG9yOiAjMjgyYzNmXG59XG5cbi5tb2ItaW5wIC5mb3JtLWdyb3VwIGlucHV0OmZvY3Vzfi5wbGFjZWhvbGRlckFsdGVybmF0aXZlIC5tb2JpbGVOdW1iZXIge1xuICAgIGNvbG9yOiByZWQ7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBcbn1cblxuLm1vYi1pbnAgLmZvcm0tZ3JvdXAgaW5wdXQ6Zm9jdXN+LnBsYWNlaG9sZGVyQWx0ZXJuYXRpdmUubW9iaWxlTnVtYmVyIHtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC4ycztcbiAgICB0cmFuc2l0aW9uOiAuMnM7XG4gICAgdG9wOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMCAycHg7XG4gICAgY29sb3I6ICMyODJjM2Y7XG4gICAgb3V0bGluZTogbm9uZTtcblxufVxuXG4ubW9iLWlucCAuZm9ybS1ncm91cCBpbnB1dDpmb2N1c34ucGxhY2Vob2xkZXJBbHRlcm5hdGl2ZS5tb2JpbGVOdW1iZXIgLm1vYmlsZU51bWJlclBsYWNob2xkZXIsIFxuLm1vYi1pbnAgLmZvcm0tZ3JvdXAgaW5wdXQ6dmFsaWR+LnBsYWNlaG9sZGVyQWx0ZXJuYXRpdmUubW9iaWxlTnVtYmVyIC5tb2JpbGVOdW1iZXJQbGFjaG9sZGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG5cbn1cblxuLm1vYi1pbnAgLmZvcm0tZ3JvdXAgaW5wdXQ6Zm9jdXN+LnBsYWNlaG9sZGVyQWx0ZXJuYXRpdmUubW9iaWxlTnVtYmVyIHNwYW4ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDhweCAhaW1wb3J0YW50O1xuXG59XG5cbi5tb2ItaW5wIC5mb3JtLWdyb3VwIGlucHV0OmZvY3Vzfi50b3BQbGFjZWhvbGRlckFsdGVybmF0aXZlLFxuLm1vYi1pbnAgLmZvcm0tZ3JvdXAgaW5wdXQ6dmFsaWR+LnRvcFBsYWNlaG9sZGVyQWx0ZXJuYXRpdmUge1xuICAgIGNvbG9yOiAjMjgyYzNmO1xuICAgIG91dGxpbmU6IG5vbmU7XG5cbn1cblxuLm1vYi1pbnAgLmZvcm0tZ3JvdXAgLnRvcFBsYWNlaG9sZGVyQWx0ZXJuYXRpdmUge1xuICAgIGNvbG9yOiAjOTQ5NjlmO1xuICAgIHRvcDogLTlweDtcbiAgICBsZWZ0OiAxMnB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiAwIDJweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZlxufVxuXG4ubW9iLWlucCAuZm9ybS1ncm91cCAucGxhY2Vob2xkZXJBbHRlcm5hdGl2ZSB7XG4gICAgY29sb3I6ICM5NDk2OWY7XG4gICAgdG9wOiAxMHB4O1xuICAgIGxlZnQ6IDEycHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZVxufVxuLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gICAgb3V0bGluZTogMDtcbiAgICBib3gtc2hhZG93OiBub25lO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aCA6MTAwcHgpIGFuZCAobWF4LXdpZHRoIDo0MDBweCkge1xuICAgIC5tYWluIHtcbiAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICAud3JhcHBlcntcbiAgICAgICAgbWluLWhlaWdodDogdW5zZXQ7XG4gICAgfVxufVxuQG1lZGlhIChtaW4td2lkdGggOjk5MXB4KSB7XG4gICAgLm1haW4ge1xuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIH1cbn0iLCIud3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDk1dmg7XG4gIG1pbi1oZWlnaHQ6IDU0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkVFQkVFO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1haW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDI4cHggYXV0bztcbiAgbWF4LXdpZHRoOiA0MDBweDtcbn1cblxuLmltZy1jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmxvZ2luLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDM2cHggMzZweCAwO1xufVxuXG4uZnctNjAwIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG4uaW5wdXQtZ3JvdXAge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG59XG5cbi5pbnB1dC1ncm91cCBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM1cHg7XG59XG5cbi5jdXN0LWJ0biB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmM2Y2YztcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDAlO1xufVxuXG4ubW9iLWlucCAuZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG5cbi5tb2ItaW5wIC5mb3JtLWdyb3VwIC5iYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubW9iLWlucCAuZm9ybS1ncm91cCAuZXJyb3JDb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICNmZjU3MjI7XG59XG5cbi5tb2ItaW5wIC5mb3JtLWdyb3VwIC5mb3JtLWNvbnRyb2wge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDRkNWQ5O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDExcHggMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGhlaWdodDogYXV0bztcbiAgY29sb3I6ICMyODJjM2Y7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5tb2ItaW5wIC5mb3JtLWdyb3VwIC5tb2JpbGVOdW1iZXJJbnB1dCB7XG4gIHBhZGRpbmctbGVmdDogNjJweDtcbn1cblxuLm1vYi1pbnAgLmZvcm0tZ3JvdXAgLmZvcm0tY29udHJvbC1mZWVkYmFjayB7XG4gIHJpZ2h0OiAxMHB4O1xufVxuXG4ubW9iLWlucCAuZm9ybS1ncm91cCBpbnB1dDpmb2N1cyB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcbiAgdHJhbnNpdGlvbjogMC40cztcbiAgYm9yZGVyOiAxcHggc29saWQgIzI4MmMzZjtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLm1vYi1pbnAgLmZvcm0tZ3JvdXAgaW5wdXQ6Zm9jdXMgfiAuYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLm1vYi1pbnAgLmZvcm0tZ3JvdXAgaW5wdXQge1xuICBjYXJldC1jb2xvcjogI2ZmM2Y2Yztcbn1cblxuLm1vYi1pbnAgLmZvcm0tZ3JvdXAgaW5wdXQ6Zm9jdXMgfiAucGxhY2Vob2xkZXJBbHRlcm5hdGl2ZSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycztcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgdG9wOiAtOXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAwIDJweDtcbiAgY29sb3I6ICMyODJjM2Y7XG59XG5cbi5tb2ItaW5wIC5mb3JtLWdyb3VwIGlucHV0OmZvY3VzIH4gLnBsYWNlaG9sZGVyQWx0ZXJuYXRpdmUgLm1vYmlsZU51bWJlciB7XG4gIGNvbG9yOiByZWQ7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5tb2ItaW5wIC5mb3JtLWdyb3VwIGlucHV0OmZvY3VzIH4gLnBsYWNlaG9sZGVyQWx0ZXJuYXRpdmUubW9iaWxlTnVtYmVyIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICB0b3A6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDAgMnB4O1xuICBjb2xvcjogIzI4MmMzZjtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLm1vYi1pbnAgLmZvcm0tZ3JvdXAgaW5wdXQ6Zm9jdXMgfiAucGxhY2Vob2xkZXJBbHRlcm5hdGl2ZS5tb2JpbGVOdW1iZXIgLm1vYmlsZU51bWJlclBsYWNob2xkZXIsXG4ubW9iLWlucCAuZm9ybS1ncm91cCBpbnB1dDp2YWxpZCB+IC5wbGFjZWhvbGRlckFsdGVybmF0aXZlLm1vYmlsZU51bWJlciAubW9iaWxlTnVtYmVyUGxhY2hvbGRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5tb2ItaW5wIC5mb3JtLWdyb3VwIGlucHV0OmZvY3VzIH4gLnBsYWNlaG9sZGVyQWx0ZXJuYXRpdmUubW9iaWxlTnVtYmVyIHNwYW4ge1xuICBwYWRkaW5nLXJpZ2h0OiA4cHggIWltcG9ydGFudDtcbn1cblxuLm1vYi1pbnAgLmZvcm0tZ3JvdXAgaW5wdXQ6Zm9jdXMgfiAudG9wUGxhY2Vob2xkZXJBbHRlcm5hdGl2ZSxcbi5tb2ItaW5wIC5mb3JtLWdyb3VwIGlucHV0OnZhbGlkIH4gLnRvcFBsYWNlaG9sZGVyQWx0ZXJuYXRpdmUge1xuICBjb2xvcjogIzI4MmMzZjtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLm1vYi1pbnAgLmZvcm0tZ3JvdXAgLnRvcFBsYWNlaG9sZGVyQWx0ZXJuYXRpdmUge1xuICBjb2xvcjogIzk0OTY5ZjtcbiAgdG9wOiAtOXB4O1xuICBsZWZ0OiAxMnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDAgMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5tb2ItaW5wIC5mb3JtLWdyb3VwIC5wbGFjZWhvbGRlckFsdGVybmF0aXZlIHtcbiAgY29sb3I6ICM5NDk2OWY7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogMTJweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEwMHB4KSBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgLm1haW4ge1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgLndyYXBwZXIge1xuICAgIG1pbi1oZWlnaHQ6IHVuc2V0O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkxcHgpIHtcbiAgLm1haW4ge1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");







let LoginComponent = class LoginComponent {
    constructor(formBuilder, loginService, _jwt, userService, objRouter, _snackBar) {
        this.formBuilder = formBuilder;
        this.loginService = loginService;
        this._jwt = _jwt;
        this.userService = userService;
        this.objRouter = objRouter;
        this._snackBar = _snackBar;
    }
    ngOnInit() {
        this.objLoginForm = this.formBuilder.group({
            strName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)
                ])
            ],
            strPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)
                ])]
        });
    }
    doLogin() {
        this.objData = this.objLoginForm.value;
        this.loginService.postLogin(this.objData).subscribe(res => {
            console.log({ res });
            if (res.hasOwnProperty(['strToken'])) {
                this.objRouter.navigate(['']);
                this._jwt.saveToken(res.strToken);
                this.userService.initialiseUser();
                this._snackBar.open('Login', 'success', {
                    duration: 2000,
                    horizontalPosition: 'right',
                });
            }
        }, err => {
            if (err.originalError.error) {
                console.log('error', err.originalError.error);
            }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__["JwtService"] },
    { type: src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/home/cart-page/cart-page.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/home/cart-page/cart-page.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("header {\n  width: 100px;\n}\n\n.header-container {\n  margin: auto;\n  width: 1140px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.wrapper {\n  font-family: Whitney, Helvetica, Arial, sans-serif !important;\n}\n\n.avl-offer {\n  font-weight: bold;\n}\n\n.brand-icon {\n  width: 150px;\n}\n\n.secure-icon {\n  width: 50px;\n}\n\n.wrapper-container {\n  margin: auto;\n  padding: 0 10px 16px;\n  min-height: 320px;\n  color: #282c3f;\n}\n\n.first-section {\n  margin-top: 35px;\n  display: inline-block;\n  padding-right: 20px;\n  padding-left: 80px;\n  border-right: 1px solid #eaeaec;\n  padding-top: 32px;\n}\n\n.box-border {\n  background: #fff;\n  border: 1px solid #eaeaec;\n  border-radius: 4px;\n}\n\n.item-offers {\n  margin-bottom: 10px;\n  padding: 16px 18px 12px;\n  font-size: 13px;\n  position: relative;\n}\n\n.more-hide {\n  color: #ff3f6c;\n  font-weight: 700;\n}\n\n.dlvry-dtls {\n  padding: 8px;\n  margin-bottom: 12px;\n}\n\n.dlvry-icon {\n  display: inline-block;\n}\n\n.dlvry-text {\n  display: inline-block;\n}\n\n.my-shop {\n  display: flex;\n  justify-content: space-between;\n  color: #282c3f;\n  padding: 8px 12px 18px;\n}\n\n.fw-500 {\n  font-weight: 500;\n}\n\n.fw-600 {\n  font-weight: 600;\n}\n\n.d-inline {\n  display: inline;\n}\n\n.item-base-container {\n  background: #fff;\n  font-size: 14px;\n  border: 1px solid #eaeaec;\n  border-radius: 4px;\n  position: relative;\n  padding: 12px 12px 0;\n}\n\n.item-base-container-left {\n  position: absolute;\n}\n\n.item-base-container-right {\n  padding-left: 12px;\n  position: relative;\n  min-height: 148px;\n  margin-left: 111px;\n  margin-bottom: 12px;\n}\n\n.item-base-sizeAndQty {\n  padding: 12px 0;\n  display: inline-block;\n  margin-right: 8px;\n}\n\n.size {\n  display: inline-block;\n  color: #282c3f;\n  font-weight: 600;\n  cursor: pointer;\n  border-radius: 2px;\n  line-height: 16px;\n}\n\n.qty {\n  display: inline-block;\n  padding: 2px 8px;\n  background: #f5f5f6;\n  color: #282c3f;\n  font-weight: 600;\n  cursor: pointer;\n  border-radius: 2px;\n  line-height: 16px;\n}\n\n.item-base-container-action {\n  border-top: 1px solid #eaeaec;\n}\n\n.item-remove {\n  display: inline-block;\n  width: 111px;\n  text-align: center;\n  border-right: 1px solid #eaeaec;\n  margin: 12px 0;\n}\n\n.removee {\n  font-size: 13px !important;\n  letter-spacing: 0.5px;\n  padding: 0;\n  outline: none;\n}\n\n.item-base {\n  margin-bottom: 10px;\n}\n\n.item-wishlist {\n  display: inline-block;\n  width: 49%;\n  text-align: center;\n  margin: 12px 0;\n}\n\n.wishyy {\n  font-size: 13px !important;\n  letter-spacing: 0.5px;\n  padding: 0;\n  outline: none;\n}\n\n.inline-action {\n  text-transform: uppercase;\n  font-weight: 600;\n  color: #696b79;\n  padding: 0;\n  height: 20px;\n  font-size: 12px;\n  text-decoration: none;\n  border: none;\n  background: none;\n  cursor: pointer;\n}\n\n.second-section {\n  vertical-align: top;\n  display: inline-block;\n  width: 29%;\n  margin-top: 50px;\n  padding: 24px 0 0 16px;\n}\n\n.base-button {\n  color: #fff;\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px;\n  background: #ff3f6c;\n  cursor: pointer;\n  text-align: center;\n  border: none;\n  border-radius: 2px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n\n.item-base-brand {\n  font-weight: 550;\n}\n\n.item-base-linkItem {\n  color: gray;\n}\n\n.drop-down-class {\n  border: 0;\n  padding: 5px 10px;\n  border-radius: 7px;\n}\n\n.fa-plus, .fa-minus {\n  padding: 5px;\n  background-color: gainsboro;\n  border-radius: 5px;\n  cursor: pointer;\n  color: darkcyan;\n}\n\n.count {\n  padding: 5px 26px;\n  margin: 0 6px;\n  background-color: gainsboro;\n  border-radius: 5px;\n}\n\n.price {\n  padding: 0;\n  text-align: right;\n}\n\n.price .strike {\n  color: #7c797f;\n}\n\n.price .discount {\n  padding-left: 10px;\n  color: #f47e96;\n}\n\n.add-more-item {\n  border: 1px solid gainsboro;\n  padding: 7px;\n  padding-top: 13px;\n  border-radius: 5px;\n  font-weight: 550;\n  margin-bottom: 20px;\n  cursor: pointer;\n}\n\n.add-more-item .bookmark {\n  padding-right: 15px;\n  padding-left: 10px;\n}\n\n.add-more-item .arrow-right {\n  float: right;\n  padding-right: 20px;\n  display: flex;\n  font-size: 2rem;\n}\n\n.priceBlock-base {\n  font-size: 12px;\n  font-weight: 600;\n  margin: 24px 0 16px;\n  color: #535766;\n}\n\n.left-side {\n  float: left;\n}\n\n.right-side {\n  float: right;\n}\n\n.priceDetail-base-row {\n  font-size: 13px;\n  color: gray;\n  padding: 10px 0;\n  border-bottom: 1px solid #e9eaeb;\n}\n\n.green {\n  color: #03a685;\n}\n\n.pink {\n  font-size: 14px;\n  color: #ff3f6c;\n  cursor: pointer;\n}\n\n@media only screen and (max-width: 991px) {\n  section.second-section.col-md-4 {\n    width: unset;\n    margin: 0;\n  }\n\n  section.first-section.col-md-8 {\n    padding: 0;\n    border: unset;\n    display: unset;\n  }\n\n  .wrapper-container {\n    padding: 0;\n  }\n\n  .my-shop {\n    padding: 5px 0;\n  }\n}\n\n@media only screen and (max-width: 450px) {\n  .discount {\n    display: block;\n  }\n\n  .count {\n    padding: 5px 10px;\n    font-size: 1.2rem;\n  }\n\n  p.item-base-linkItem {\n    font-size: 9px;\n    margin: 0;\n  }\n\n  select.drop-down-class {\n    font-size: 9px;\n  }\n\n  .pt-10 {\n    padding-top: 5px !important;\n  }\n\n  .fa-minus, .fa-plus {\n    font-size: 1rem;\n  }\n\n  p {\n    margin: 0;\n    font-size: 12px;\n  }\n\n  .col-xs-12.pd-15.pb-0 {\n    padding: 7px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYmR1cmFobWFudC9Eb3dubG9hZHMvbmFzZWVtbmFtYXRoLWUtY29tbWVyY2UtYmY1MzkxMDc1ZmQyL3NyYy9hcHAvaG9tZS9jYXJ0LXBhZ2UvY2FydC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2NhcnQtcGFnZS9jYXJ0LXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxZQUFBO0FDREo7O0FER0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQ0FKOztBREVBO0VBQ0ksNkRBQUE7QUNDSjs7QURDQTtFQUNJLGlCQUFBO0FDRUo7O0FEQ0E7RUFFSSxZQUFBO0FDQ0o7O0FEQ0E7RUFDSSxXQUFBO0FDRUo7O0FEQ0E7RUFFSSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURDQTtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7RUFFQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUNHSjs7QURBQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQ0dKOztBRERBO0VBQ0kscUJBQUE7QUNJSjs7QURGQTtFQUNJLHFCQUFBO0FDS0o7O0FESEE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUNNSjs7QURKQTtFQUNJLGdCQUFBO0FDT0o7O0FETEE7RUFDSSxnQkFBQTtBQ1FKOztBRExBO0VBQ0ksZUFBQTtBQ1FKOztBRE5BO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNT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QTtFQzJCTjs7RUR6QkU7SUFDSSxjQUFBO0VDNEJOOztFRDFCRTtJQUNJLDJCQUFBO0VDNkJOOztFRDNCRTtJQUNJLGVBQUE7RUM4Qk47O0VENUJFO0lBQ0ksU0FBQTtJQUNBLGVBQUE7RUMrQk47O0VEN0JFO0lBQ0ksWUFBQTtFQ2dDTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9jYXJ0LXBhZ2UvY2FydC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmhlYWRlciB7XG4gICAgd2lkdGg6IDEwMHB4O1xufVxuLmhlYWRlci1jb250YWluZXJ7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiAxMTQwcHg7IFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLndyYXBwZXIge1xuICAgIGZvbnQtZmFtaWx5OiBXaGl0bmV5LEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmIWltcG9ydGFudDtcbn1cbi5hdmwtb2ZmZXIge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYnJhbmQtaWNvbiB7XG4gICAgLy8gaGVpZ2h0OiAxMHB4O1xuICAgIHdpZHRoOiAxNTBweDtcbn1cbi5zZWN1cmUtaWNvbiB7XG4gICAgd2lkdGg6IDUwcHg7XG59XG5cbi53cmFwcGVyLWNvbnRhaW5lciB7XG4gICAgLy8gbWF4LXdpZHRoOiA5ODBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZzogMCAxMHB4IDE2cHg7XG4gICAgbWluLWhlaWdodDogMzIwcHg7XG4gICAgY29sb3I6ICMyODJjM2Y7XG59XG4uZmlyc3Qtc2VjdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogMzVweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgLy8gd2lkdGg6IDcwJTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogODBweDtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWFlYWVjO1xuICAgIHBhZGRpbmctdG9wOiAzMnB4O1xufVxuXG4uYm94LWJvcmRlciB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWFlYWVjO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5pdGVtLW9mZmVycyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBwYWRkaW5nOiAxNnB4IDE4cHggMTJweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1vcmUtaGlkZSB7XG4gICAgY29sb3I6ICNmZjNmNmM7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmRsdnJ5LWR0bHMge1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuLmRsdnJ5LWljb24ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5kbHZyeS10ZXh0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4ubXktc2hvcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgY29sb3I6ICMyODJjM2Y7XG4gICAgcGFkZGluZzogOHB4IDEycHggMThweDtcbn1cbi5mdy01MDAge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uZnctNjAwIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uZC1pbmxpbmUge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbn1cbi5pdGVtLWJhc2UtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWFlYWVjO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMTJweCAxMnB4IDA7XG59XG4uaXRlbS1iYXNlLWNvbnRhaW5lci1sZWZ0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uaXRlbS1iYXNlLWNvbnRhaW5lci1yaWdodCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtaW4taGVpZ2h0OiAxNDhweDtcbiAgICBtYXJnaW4tbGVmdDogMTExcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuLml0ZW0tYmFzZS1zaXplQW5kUXR5IHtcbiAgICBwYWRkaW5nOiAxMnB4IDA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xufVxuLnNpemUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjb2xvcjogIzI4MmMzZjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG59XG4ucXR5IHtcblxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiAycHggOHB4O1xuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjY7XG4gICAgY29sb3I6ICMyODJjM2Y7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xufVxuXG4uaXRlbS1iYXNlLWNvbnRhaW5lci1hY3Rpb24ge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWFlYWVjO1xufVxuLml0ZW0tcmVtb3ZlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDExMXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWFlYWVjO1xuICAgIG1hcmdpbjogMTJweCAwO1xufVxuLnJlbW92ZWUge1xuICAgIGZvbnQtc2l6ZTogMTNweCFpbXBvcnRhbnQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC41cHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBvdXRsaW5lOm5vbmU7XG59XG4uaXRlbS1iYXNlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLml0ZW0td2lzaGxpc3Qge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNDklO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDEycHggMDtcbn1cbi53aXNoeXkge1xuICAgIGZvbnQtc2l6ZTogMTNweCFpbXBvcnRhbnQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC41cHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBvdXRsaW5lOm5vbmU7XG59XG4uaW5saW5lLWFjdGlvbiB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjNjk2Yjc5O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5cbi5zZWNvbmQtc2VjdGlvbiB7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDI5JTtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIHBhZGRpbmc6IDI0cHggMCAwIDE2cHg7XG59XG5cblxuXG4uYmFzZS1idXR0b24ge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmM2Y2YztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG4uaXRlbS1iYXNlLWJyYW5ke1xuICAgIGZvbnQtd2VpZ2h0OiA1NTA7XG59XG4uaXRlbS1iYXNlLWxpbmtJdGVte1xuICAgIGNvbG9yOmdyYXlcbn1cbi5kcm9wLWRvd24tY2xhc3N7XG4gICAgYm9yZGVyOiAwO1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDsgXG59XG4uZmEtcGx1cywgLmZhLW1pbnVze1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogZGFya2N5YW47XG59XG4uY291bnR7XG4gICAgcGFkZGluZzogNXB4IDI2cHg7XG4gICAgbWFyZ2luOiAwIDZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLnByaWNle1xuICAgIHBhZGRpbmc6IDA7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgLnN0cmlrZXtcbiAgICAgICAgY29sb3I6ICM3Yzc5N2Y7XG4gICAgfVxuICAgIC5kaXNjb3VudHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGNvbG9yOiAjZjQ3ZTk2O1xuICAgIH1cbn1cblxuLmFkZC1tb3JlLWl0ZW17XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ2FpbnNib3JvO1xuICAgIHBhZGRpbmc6IDdweDtcbiAgICBwYWRkaW5nLXRvcDogMTNweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDU1MDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAuYm9va21hcmt7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICB9XG4gICAgLmFycm93LXJpZ2h0e1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB9XG59XG5cbi5wcmljZUJsb2NrLWJhc2V7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luOiAyNHB4IDAgMTZweDtcbiAgICBjb2xvcjogIzUzNTc2Njtcbn1cbi5sZWZ0LXNpZGV7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIFxufVxuLnJpZ2h0LXNpZGV7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ucHJpY2VEZXRhaWwtYmFzZS1yb3d7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiBncmF5O1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZWFlYjtcbn1cbi5ncmVlbntcbiAgIGNvbG9yOiAjMDNhNjg1O1xufVxuLnBpbmt7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjZmYzZjZjO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KSB7XG4gICAgc2VjdGlvbi5zZWNvbmQtc2VjdGlvbi5jb2wtbWQtNCB7XG4gICAgICAgIHdpZHRoOiB1bnNldDtcbiAgICAgICAgbWFyZ2luOiAwO1xuXG4gICAgfVxuICAgIHNlY3Rpb24uZmlyc3Qtc2VjdGlvbi5jb2wtbWQtOCB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGJvcmRlcjogdW5zZXQ7XG4gICAgICAgIGRpc3BsYXk6IHVuc2V0O1xuICAgIH1cbiAgICAud3JhcHBlci1jb250YWluZXIge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgIH1cbiAgICAubXktc2hvcCB7XG4gICAgICAgIHBhZGRpbmc6IDVweCAwO1xuICAgIH1cbn0gXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDUwcHgpIHtcbiAgICAuZGlzY291bnR7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuY291bnR7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICB9XG4gICAgcC5pdGVtLWJhc2UtbGlua0l0ZW0ge1xuICAgICAgICBmb250LXNpemU6IDlweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICBzZWxlY3QuZHJvcC1kb3duLWNsYXNzIHtcbiAgICAgICAgZm9udC1zaXplOiA5cHg7XG4gICAgfVxuICAgIC5wdC0xMHtcbiAgICAgICAgcGFkZGluZy10b3A6IDVweCFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5mYS1taW51cywgLmZhLXBsdXN7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB9XG4gICAgcCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1zaXplOjEycHhcbiAgICB9XG4gICAgLmNvbC14cy0xMi5wZC0xNS5wYi0wIHtcbiAgICAgICAgcGFkZGluZzogN3B4O1xuICAgIH1cbn0gIiwiaGVhZGVyIHtcbiAgd2lkdGg6IDEwMHB4O1xufVxuXG4uaGVhZGVyLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDExNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ud3JhcHBlciB7XG4gIGZvbnQtZmFtaWx5OiBXaGl0bmV5LCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG59XG5cbi5hdmwtb2ZmZXIge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJyYW5kLWljb24ge1xuICB3aWR0aDogMTUwcHg7XG59XG5cbi5zZWN1cmUtaWNvbiB7XG4gIHdpZHRoOiA1MHB4O1xufVxuXG4ud3JhcHBlci1jb250YWluZXIge1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDAgMTBweCAxNnB4O1xuICBtaW4taGVpZ2h0OiAzMjBweDtcbiAgY29sb3I6ICMyODJjM2Y7XG59XG5cbi5maXJzdC1zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMzVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDgwcHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlYWVhZWM7XG4gIHBhZGRpbmctdG9wOiAzMnB4O1xufVxuXG4uYm94LWJvcmRlciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWM7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLml0ZW0tb2ZmZXJzIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZzogMTZweCAxOHB4IDEycHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubW9yZS1oaWRlIHtcbiAgY29sb3I6ICNmZjNmNmM7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5kbHZyeS1kdGxzIHtcbiAgcGFkZGluZzogOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4uZGx2cnktaWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmRsdnJ5LXRleHQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5teS1zaG9wIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBjb2xvcjogIzI4MmMzZjtcbiAgcGFkZGluZzogOHB4IDEycHggMThweDtcbn1cblxuLmZ3LTUwMCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5mdy02MDAge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uZC1pbmxpbmUge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi5pdGVtLWJhc2UtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWFlYWVjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMTJweCAxMnB4IDA7XG59XG5cbi5pdGVtLWJhc2UtY29udGFpbmVyLWxlZnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5pdGVtLWJhc2UtY29udGFpbmVyLXJpZ2h0IHtcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDE0OHB4O1xuICBtYXJnaW4tbGVmdDogMTExcHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbi5pdGVtLWJhc2Utc2l6ZUFuZFF0eSB7XG4gIHBhZGRpbmc6IDEycHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLnNpemUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiAjMjgyYzNmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG59XG5cbi5xdHkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDJweCA4cHg7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjY7XG4gIGNvbG9yOiAjMjgyYzNmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG59XG5cbi5pdGVtLWJhc2UtY29udGFpbmVyLWFjdGlvbiB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWFlYWVjO1xufVxuXG4uaXRlbS1yZW1vdmUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMTFweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWFlYWVjO1xuICBtYXJnaW46IDEycHggMDtcbn1cblxuLnJlbW92ZWUge1xuICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBwYWRkaW5nOiAwO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uaXRlbS1iYXNlIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLml0ZW0td2lzaGxpc3Qge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA0OSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxMnB4IDA7XG59XG5cbi53aXNoeXkge1xuICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBwYWRkaW5nOiAwO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uaW5saW5lLWFjdGlvbiB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjNjk2Yjc5O1xuICBwYWRkaW5nOiAwO1xuICBoZWlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNlY29uZC1zZWN0aW9uIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMjklO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBwYWRkaW5nOiAyNHB4IDAgMCAxNnB4O1xufVxuXG4uYmFzZS1idXR0b24ge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmYzZjZjO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbi5pdGVtLWJhc2UtYnJhbmQge1xuICBmb250LXdlaWdodDogNTUwO1xufVxuXG4uaXRlbS1iYXNlLWxpbmtJdGVtIHtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi5kcm9wLWRvd24tY2xhc3Mge1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG5cbi5mYS1wbHVzLCAuZmEtbWludXMge1xuICBwYWRkaW5nOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGdhaW5zYm9ybztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiBkYXJrY3lhbjtcbn1cblxuLmNvdW50IHtcbiAgcGFkZGluZzogNXB4IDI2cHg7XG4gIG1hcmdpbjogMCA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGdhaW5zYm9ybztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ucHJpY2Uge1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5wcmljZSAuc3RyaWtlIHtcbiAgY29sb3I6ICM3Yzc5N2Y7XG59XG4ucHJpY2UgLmRpc2NvdW50IHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBjb2xvcjogI2Y0N2U5Njtcbn1cblxuLmFkZC1tb3JlLWl0ZW0ge1xuICBib3JkZXI6IDFweCBzb2xpZCBnYWluc2Jvcm87XG4gIHBhZGRpbmc6IDdweDtcbiAgcGFkZGluZy10b3A6IDEzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC13ZWlnaHQ6IDU1MDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmFkZC1tb3JlLWl0ZW0gLmJvb2ttYXJrIHtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLmFkZC1tb3JlLWl0ZW0gLmFycm93LXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi5wcmljZUJsb2NrLWJhc2Uge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogMjRweCAwIDE2cHg7XG4gIGNvbG9yOiAjNTM1NzY2O1xufVxuXG4ubGVmdC1zaWRlIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5yaWdodC1zaWRlIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ucHJpY2VEZXRhaWwtYmFzZS1yb3cge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiBncmF5O1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllYWViO1xufVxuXG4uZ3JlZW4ge1xuICBjb2xvcjogIzAzYTY4NTtcbn1cblxuLnBpbmsge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjZmYzZjZjO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgc2VjdGlvbi5zZWNvbmQtc2VjdGlvbi5jb2wtbWQtNCB7XG4gICAgd2lkdGg6IHVuc2V0O1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIHNlY3Rpb24uZmlyc3Qtc2VjdGlvbi5jb2wtbWQtOCB7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IHVuc2V0O1xuICAgIGRpc3BsYXk6IHVuc2V0O1xuICB9XG5cbiAgLndyYXBwZXItY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgLm15LXNob3Age1xuICAgIHBhZGRpbmc6IDVweCAwO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIC5kaXNjb3VudCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuY291bnQge1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG5cbiAgcC5pdGVtLWJhc2UtbGlua0l0ZW0ge1xuICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIHNlbGVjdC5kcm9wLWRvd24tY2xhc3Mge1xuICAgIGZvbnQtc2l6ZTogOXB4O1xuICB9XG5cbiAgLnB0LTEwIHtcbiAgICBwYWRkaW5nLXRvcDogNXB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZmEtbWludXMsIC5mYS1wbHVzIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cblxuICBwIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG5cbiAgLmNvbC14cy0xMi5wZC0xNS5wYi0wIHtcbiAgICBwYWRkaW5nOiA3cHg7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/cart-page/cart-page.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/home/cart-page/cart-page.component.ts ***!
  \*******************************************************/
/*! exports provided: CartPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageComponent", function() { return CartPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_constants_product_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/constants/product-constants */ "./src/app/shared/constants/product-constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_services_master_facade_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/master-facade.service */ "./src/app/shared/services/master-facade.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");







let CartPageComponent = class CartPageComponent {
    constructor(objRouter, objMasterFacadeService) {
        this.objRouter = objRouter;
        this.objMasterFacadeService = objMasterFacadeService;
        this.show = false;
        this.objCartResponse = src_app_shared_constants_product_constants__WEBPACK_IMPORTED_MODULE_2__["CART_RESPONSE"];
        this.count = [1, 1, 1];
        this.objDestroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
    }
    ngOnInit() {
        this.objMasterFacadeService.getCart().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.objDestroyed$)).subscribe((val) => {
            console.log({ val });
        });
    }
    plus(i) {
        this.count[i]++;
    }
    minus(i) {
        if (this.count[i] !== 1)
            this.count[i]--;
    }
    total() {
        let total = 0;
        this.objCartResponse.arrList.forEach((item, index) => {
            total = total + (+item.dblSellingPrice * this.count[index]);
        });
        return total.toFixed(2);
    }
    bagTotal() {
        let total = 0;
        this.objCartResponse.arrList.forEach((item, index) => {
            total = total + (+item.dblMRP * this.count[index]);
        });
        return total.toFixed(2);
    }
    bagDiscount() {
        let totalSellingPrice = 0;
        let totalMRP = 0;
        this.objCartResponse.arrList.forEach((item, index) => {
            totalMRP = totalMRP + (+item.dblMRP * this.count[index]);
            totalSellingPrice = totalSellingPrice + (+item.dblSellingPrice * this.count[index]);
        });
        return (totalMRP - totalSellingPrice).toFixed(2);
    }
    goToWishList() {
        this.objRouter.navigate(['wish-list']);
    }
};
CartPageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _shared_services_master_facade_service__WEBPACK_IMPORTED_MODULE_4__["MasterFacadeService"] }
];
CartPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cart-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/cart-page/cart-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cart-page.component.scss */ "./src/app/home/cart-page/cart-page.component.scss")).default]
    })
], CartPageComponent);



/***/ }),

/***/ "./src/app/home/home-page/home-page.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/home/home-page/home-page.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/home/home-page/home-page.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/home/home-page/home-page.component.ts ***!
  \*******************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_banner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/banner.service */ "./src/app/shared/services/banner.service.ts");
/* harmony import */ var src_app_shared_services_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/category.service */ "./src/app/shared/services/category.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_services_master_facade_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/master-facade.service */ "./src/app/shared/services/master-facade.service.ts");








let HomePageComponent = class HomePageComponent {
    constructor(objRouter, objBannerService, objCategoryService, objChRef, objMasterFacadeService) {
        this.objRouter = objRouter;
        this.objBannerService = objBannerService;
        this.objCategoryService = objCategoryService;
        this.objChRef = objChRef;
        this.objMasterFacadeService = objMasterFacadeService;
        this.arrBanners = [];
        this.objAllCategories = null;
        this.arrDeals = [];
        this.objDestroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    ngOnInit() {
        $('#myCarousel').carousel({
            interval: 3000,
            cycle: true
        });
        this.objBannerService.getAllBanners().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.objDestroyed$)).subscribe(res => {
            if (res) {
                this.arrBanners = res.arrBanner;
                this.arrProducts = res.arrDealProducts;
                this.objMasterFacadeService.getProducts({ arrProductName: res.arrDealProducts }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.objDestroyed$)).subscribe((deals) => {
                    this.arrDeals = deals.arrList;
                    this.objChRef.detectChanges();
                });
                this.objChRef.detectChanges();
            }
        });
        this.objCategoryService.getAllCategories().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.objDestroyed$)).subscribe(objCategory => {
            if (objCategory) {
                this.objAllCategories = objCategory;
                this.objChRef.detectChanges();
            }
        });
        // $('.carousel[data-type="multi"] .item').each(function() {
        //   var next = $(this).next();
        //   if (!next.length) {
        //     next = $(this).siblings(':first');
        //   }
        //   next.children(':first-child').clone().appendTo($(this));
        //   for (var i = 0; i < 2; i++) {
        //     next = next.next();
        //     if (!next.length) {
        //       next = $(this).siblings(':first');
        //     }
        //     next.children(':first-child').clone().appendTo($(this));
        //   }
        // });
        return window.scroll(0, 0);
    }
    ngOnDestroy() {
        this.objDestroyed$.next();
        this.objDestroyed$.complete();
    }
    productList() {
        this.objRouter.navigate(['product-list']);
    }
    getProductList(bannerDetails) {
        this.objRouter.navigate(['product-list'], { queryParams: bannerDetails.objFilters });
    }
    getProductListBrand(objBrand) {
        const objTemp = {
            arrBrand: [objBrand.strName]
        };
        this.objRouter.navigate(['product-list'], { queryParams: objTemp });
    }
    getProductListCategory(objCategory) {
        const objTemp = {
            arrCategory: [objCategory.strName]
        };
        this.objRouter.navigate(['product-list'], { queryParams: objTemp });
    }
    getProductListShop(objShop) {
        const objTemp = {
            arrShop: [objShop.strName]
        };
        this.objRouter.navigate(['product-list'], { queryParams: objTemp });
    }
    getProductListDeals(objDeals) {
        const objTemp = {
            arrProductName: [objDeals.strName]
        };
        this.objRouter.navigate(['product-list'], { queryParams: objTemp });
    }
};
HomePageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_shared_services_banner_service__WEBPACK_IMPORTED_MODULE_3__["BannerService"] },
    { type: src_app_shared_services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _shared_services_master_facade_service__WEBPACK_IMPORTED_MODULE_7__["MasterFacadeService"] }
];
HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home-page/home-page.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-page.component.scss */ "./src/app/home/home-page/home-page.component.scss")).default]
    })
], HomePageComponent);



/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home/home-page/home-page.component.ts");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/home/product-list/product-list.component.ts");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-details/product-details.component */ "./src/app/home/product-details/product-details.component.ts");
/* harmony import */ var _wish_list_wish_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wish-list/wish-list.component */ "./src/app/home/wish-list/wish-list.component.ts");
/* harmony import */ var _cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cart-page/cart-page.component */ "./src/app/home/cart-page/cart-page.component.ts");








const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"]
    },
    {
        path: 'product-list',
        component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_4__["ProductListComponent"]
    },
    {
        path: 'product/:id',
        component: _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_5__["ProductDetailsComponent"]
    },
    {
        path: 'product-details',
        component: _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_5__["ProductDetailsComponent"]
    },
    {
        path: 'wish-list',
        component: _wish_list_wish_list_component__WEBPACK_IMPORTED_MODULE_6__["WishListComponent"]
    },
    {
        path: 'checkout/cart',
        component: _cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_7__["CartPageComponent"]
    }
];
let HomeRoutingModule = class HomeRoutingModule {
};
HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomeRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home/home-page/home-page.component.ts");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/home/product-list/product-list.component.ts");
/* harmony import */ var _shared_material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/material/material.module */ "./src/app/shared/material/material.module.ts");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm2015/overlay.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product-details/product-details.component */ "./src/app/home/product-details/product-details.component.ts");
/* harmony import */ var _shared_UI_component_ui_component_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/UI-component/ui-component.module */ "./src/app/shared/UI-component/ui-component.module.ts");
/* harmony import */ var _wish_list_wish_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./wish-list/wish-list.component */ "./src/app/home/wish-list/wish-list.component.ts");
/* harmony import */ var _similar_product_similar_product_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./similar-product/similar-product.component */ "./src/app/home/similar-product/similar-product.component.ts");
/* harmony import */ var _cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cart-page/cart-page.component */ "./src/app/home/cart-page/cart-page.component.ts");
/* harmony import */ var _shared_layout_secure_header_secure_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/layout/secure-header/secure-header.component */ "./src/app/shared/layout/secure-header/secure-header.component.ts");















let HomeModule = class HomeModule {
};
HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"], _shared_layout_secure_header_secure_header_component__WEBPACK_IMPORTED_MODULE_14__["SecureHeaderComponent"], _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_5__["ProductListComponent"], _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_9__["ProductDetailsComponent"], _wish_list_wish_list_component__WEBPACK_IMPORTED_MODULE_11__["WishListComponent"], _similar_product_similar_product_component__WEBPACK_IMPORTED_MODULE_12__["SimilarProductComponent"], _cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_13__["CartPageComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"],
            _shared_material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["OverlayModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _shared_UI_component_ui_component_module__WEBPACK_IMPORTED_MODULE_10__["UiComponentModule"]
        ],
        entryComponents: [_similar_product_similar_product_component__WEBPACK_IMPORTED_MODULE_12__["SimilarProductComponent"]],
        providers: []
    })
], HomeModule);



/***/ }),

/***/ "./src/app/home/product-details/product-details.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/home/product-details/product-details.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".margina {\n  margin-top: 30px;\n}\n\n.pdp-pdp-container {\n  max-width: 1600px;\n  min-width: 1128px;\n  margin: 0 auto;\n  position: relative;\n  min-height: 700px;\n  padding-bottom: 15px;\n  padding-left: 28px;\n  padding-right: 28px;\n  background-color: #fff;\n}\n\n.pdp-mobileImageZoom,\n.pdp-pdp-zoom-container {\n  z-index: 15;\n}\n\n.pdp-heartButtonIcon {\n  vertical-align: text-bottom;\n  position: relative;\n  top: -1px;\n  right: 6px;\n}\n\n.pdp-details {\n  position: relative;\n}\n\n.pdp-description-container {\n  margin-top: 10px;\n}\n\n.pdp-title {\n  color: #282c3f;\n  padding: 0 20px 0 0;\n  font-size: 24px;\n  font-weight: 500;\n  line-height: 1;\n}\n\n.pdp-name,\n.pdp-title {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.pdp-name {\n  color: #535665;\n  padding: 5px 20px 14px 0;\n  font-size: 20px;\n  opacity: 0.8;\n  font-weight: 400;\n}\n\n.pdp-PPCouponInfo {\n  width: 199px;\n  height: 16px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #3e4152;\n}\n\n.pdp-selling-price {\n  position: relative;\n}\n\n.pdp-discount-container {\n  color: #696e79;\n  font-size: 14px;\n  margin-top: 14px;\n  margin-bottom: 5px;\n  display: inline-block;\n}\n\n.pdp-discount {\n  font-size: 20px;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n  color: #ff905a;\n}\n\n.pdp-selling-price {\n  font-size: 16px;\n  margin: 0 0 10px;\n}\n\n.pdp-similar {\n  background: url('mobile-icon.png');\n}\n\n.pdp-price {\n  font-size: 24px;\n  font-weight: 500;\n  line-height: 1;\n  cursor: pointer;\n}\n\n.pdp-mrp,\n.pdp-price {\n  color: #282c3f;\n  margin-right: 12px;\n}\n\n.pdp-mrp {\n  height: 22px;\n  opacity: 0.8;\n  font-size: 20px;\n  line-height: 1.2;\n}\n\n.pdp-mrp-verbiage {\n  min-width: 270px;\n  position: absolute;\n  border: 1px solid #e3e3e3;\n  z-index: 1;\n  background: #fff;\n  padding: 8px;\n  box-shadow: 0 0 12px #d3d3d3;\n  transition: 0.2s;\n  opacity: 0;\n  transform: scale(0.001);\n  color: #282c3f;\n  font-size: 14px;\n}\n\n.pdp-mrp-verbiage div:first-child,\n.pdp-mrp-verbiage div:nth-child(5),\n.pdp-mrp-verbiage div:nth-child(7) {\n  margin: 8px 0;\n}\n\n.pdp-mrp-verbiage .pdp-mrp-verbiage-amt {\n  float: right;\n  font-weight: 500;\n  margin-left: 20px;\n}\n\n.pdp-mrp-verbiage hr {\n  border: 1px solid #e3e3e3;\n}\n\n.pdp-mrp-verbiage:before {\n  position: absolute;\n  top: 1%;\n  left: 20%;\n  margin: -0.25em;\n  width: 0.5em;\n  height: 0.5em;\n  box-shadow: 10px 10px 12px #d3d3d3;\n  transform: rotate(-135deg);\n  background: linear-gradient(-45deg, #fff 50%, transparent 0);\n  content: \"\";\n}\n\n.pdp-mrp-verbiage:active,\n.pdp-mrp-verbiage:focus,\n.pdp-price:active,\n.pdp-price:focus {\n  outline: none;\n}\n\n.pdp-mrp-verbiage:active,\n.pdp-mrp-verbiage:focus,\n.pdp-price:active + .pdp-mrp-verbiage,\n.pdp-price:focus + .pdp-mrp-verbiage {\n  transform: scale(1);\n  opacity: 1;\n}\n\n.pdp-offer {\n  text-transform: capitalize;\n  outline: 0;\n  background-color: transparent;\n  border: 0;\n  padding-left: 0;\n  color: #526cd0;\n  font-weight: 500;\n  margin-top: 10px;\n  margin-left: 0;\n  margin-bottom: 0;\n  font-size: 13px;\n  border-top: 1px dotted #d5d6d9;\n  width: 98%;\n  text-align: left;\n  padding-top: 22px;\n}\n\n.pdp-bogo-container {\n  margin: 10px 20px 10px 0;\n}\n\n.pdp-coupon-info {\n  padding: 1px 15px;\n  position: relative;\n  border: 1px solid #d4d5d9;\n}\n\n.pdp-coupon-section-title {\n  min-width: 100px;\n  font-size: 11px;\n  color: #535766;\n  display: inline-block;\n}\n\n.pdp-coupon-label {\n  background-color: #fff;\n  border: 1px dashed #535766;\n  font-size: 13px;\n  padding: 0 5px;\n  color: #20bd99;\n}\n\n.pdp-coupon-description {\n  font-weight: 500;\n  font-size: 12px;\n  color: #535766;\n}\n\n.pdp-couponAtBestPrice {\n  color: #535766;\n  font-size: 13px;\n}\n\n.pdp-coupon-emi-info {\n  border-top: 1px solid #d4d5d9;\n  padding-top: 10px;\n}\n\n.pdp-offer-badge {\n  background-color: #f16565;\n  color: #fff;\n  font-weight: 500;\n  padding: 2px 7px;\n  font-size: 12px;\n  border-radius: 2px;\n  margin-right: 5px;\n}\n\n.pdp-bogo-link {\n  text-decoration: none;\n  color: #94989f;\n}\n\n.pdp-bogo {\n  padding-bottom: 2px;\n  font-size: 14px;\n  line-height: 20px;\n  border-bottom: 1px solid transparent;\n}\n\n.pdp-bogo em {\n  font-style: normal;\n}\n\n.pdp-bogo:hover {\n  border-bottom: 1px solid #d5d6d9;\n}\n\n.pdp-price-info {\n  padding: 0 0 10px;\n}\n\n.pdp-global-product {\n  margin: 0 0 0 20px;\n  border-bottom: 1px dotted #d5d6d9;\n}\n\n.pdp-globalHeader {\n  margin-bottom: 0;\n}\n\n.pdp-globalDesc {\n  position: relative;\n}\n\n.pdp-globalSubText {\n  margin-top: 8px;\n  font-size: 15px;\n  color: #94969f;\n}\n\n.pdp-globalPoint {\n  margin: 0 0 10px;\n  color: #3e4152;\n}\n\n.pdp-gp-1 {\n  margin-bottom: 16px;\n}\n\n.pdp-globalReadMore {\n  position: absolute;\n  right: 0;\n  top: 82px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  color: #526cd0;\n}\n\n.pdp-close-button {\n  position: absolute;\n  font-size: 20px;\n  padding: 4px;\n  top: 0;\n  right: 5px;\n  color: #3e4152;\n  outline: 0;\n  background-color: transparent;\n  border: 0;\n}\n\n.pdp-chevron-right {\n  background-size: 542px 40px;\n  background-position: -194px 5px;\n  margin-left: 5px;\n  height: 14px;\n  width: 5px;\n}\n\n.pdp-button {\n  border-radius: 3px;\n  outline: 0;\n  margin-top: 10px;\n  padding: 10px 30px;\n  font-size: 16px;\n  min-height: 22px;\n}\n\n.pdp-action-container {\n  display: flex;\n  width: 100%;\n  position: relative;\n  z-index: 1;\n  margin-top: 15px;\n}\n\n.pdp-goToCart {\n  text-decoration: none;\n  color: #fff;\n  flex: 2;\n}\n\n.pdp-goToCart .pdp-add-to-bag {\n  width: 100% !important;\n}\n\n.pdp-goToCart span {\n  vertical-align: sub;\n}\n\n.pdp-whiteWishlistIcon {\n  transform: scale(0.5);\n  margin: -2px 8px;\n}\n\n.pdp-darkWishlistIcon {\n  transform: scale(1.1);\n  margin: -2px 8px;\n}\n\n.pdp-whiteRightArrow {\n  margin: -4px 10px;\n}\n\n.pdp-fixed {\n  position: fixed;\n  bottom: 0;\n}\n\n.pdp-add-to-bag {\n  border-radius: 0;\n  padding: 12px 15px;\n  min-width: 108px;\n  font-weight: 500;\n  cursor: pointer;\n  background-color: #ff3e6c;\n  border: 1px solid #ff3e6c;\n  color: #fff;\n  flex: 3;\n  text-align: center;\n  width: 100%;\n  margin-right: 3%;\n}\n\n.pdp-add-to-bag:hover {\n  background-color: #ff527b;\n}\n\n.pdp-add-to-bag-with-prior {\n  padding: 12px 0;\n}\n\n.pdp-add-to-bag-full {\n  width: 100%;\n  box-sizing: border-box;\n}\n\n.pdp-add-to-bag-full-with-prior {\n  padding: 12px 0;\n}\n\n.pdp-add-to-wishlist {\n  border-radius: 0;\n  padding: 12px 15px;\n  font-weight: 500;\n  cursor: pointer;\n  flex: 2;\n  border: 1px solid #d4d5d9;\n  background-color: #fff;\n  letter-spacing: 0.4px;\n  color: #282c3f;\n}\n\n.pdp-whiteBag {\n  margin-right: 12px;\n  transform: scale(0.9);\n}\n\n.pdp-add-to-wishlist:hover {\n  border: 1px solid #535766;\n}\n\n.pdp-add-to-wishlist-disabled {\n  color: #fff;\n  border: 1px solid #7e818c;\n  background-color: #535766;\n}\n\n.pdp-add-to-wishlist-disabled:hover {\n  background-color: #535766;\n  cursor: default;\n}\n\n.pdp-add-to-wishlist-full {\n  width: 100% !important;\n  box-sizing: border-box;\n}\n\n.pdp-size-chart-description {\n  color: #282c3f;\n  font-size: 13px;\n  line-height: 1.5;\n}\n\n.pdp-style-note {\n  color: #696e79;\n  font-size: 14px;\n  line-height: 1.4;\n}\n\n.pdp-product-description-title {\n  color: #282c3f;\n  font-size: 16px;\n  margin: 0;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n\n.pdp-product-description-content {\n  color: #282c3f;\n  line-height: 1.4;\n  font-size: 16px;\n  margin-top: 12px;\n  width: 84%;\n}\n\n.pdp-product-description-content b {\n  font-weight: 500;\n  display: inline-block;\n  margin-top: 16px;\n}\n\n.pdp-product-description-content b:first-child {\n  margin-top: 0;\n}\n\n.pdp-product-description-content p {\n  margin: 0;\n}\n\n.pdp-returnable-content {\n  font-size: 14px;\n  margin-top: 14px 0 0 0;\n  padding: 0 20px 0 0;\n  color: #282c3f;\n}\n\n.pdp-pin-code-label {\n  color: #118beb;\n  font-size: 13px;\n  outline: 0;\n  background-color: transparent;\n  border: 0;\n  padding-left: 0;\n}\n\n.pdp-offercheck {\n  float: left;\n  position: relative;\n  top: -2px;\n  margin: 0 10px 0 20px;\n}\n\n.pdp-offerCheckText:before {\n  content: \"Tap for best price\";\n  text-transform: none;\n}\n\n.pdp-error-message {\n  text-align: center;\n  font-weight: 500;\n  font-size: 15px;\n  margin: 200px 10px;\n  color: #f16565;\n}\n\n.pdp-post-sale-price {\n  font-size: 12px;\n  margin-top: -17px;\n  text-align: right;\n  color: #696e79;\n}\n\n.pdp-future-price {\n  color: #282c3f;\n}\n\n.pdp-preorder-scarcity {\n  display: inline-block;\n  color: rgba(255, 63, 108, 0.65);\n  border: 1px solid rgba(255, 63, 108, 0.65);\n  border-radius: 10px;\n  margin-left: 0;\n  margin-right: 5px;\n  padding: 2px 9px;\n  font-size: 9px;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n\n.pdp-preorder-disclaimer,\n.pdp-preorder-launch-date {\n  color: #282c3f;\n  font-size: 14px;\n}\n\n.pdp-preorder-disclaimer-text {\n  color: #7e818c;\n  font-size: 14px;\n  padding: 8px 0 0;\n}\n\n.pdp-preorder-date {\n  color: #ff5722;\n  font-weight: 500;\n}\n\n.pdp-sizeChartInfo {\n  margin-top: 14px;\n}\n\n.pdp-sizeFitDesc {\n  font-weight: 400;\n  border: none;\n  margin-top: 12px;\n}\n\n.pdp-sizeFitDescTitle {\n  text-transform: capitalize;\n  font-weight: 500;\n  font-size: 16px;\n  border: none;\n  padding-bottom: 5px;\n}\n\n.pdp-sizeFitDescContent {\n  margin: 0;\n  width: 90%;\n}\n\n.pdp-inputProductDetails {\n  display: none;\n}\n\n.pdp-inputProductDetailsLabel {\n  display: block;\n  padding: 12px 20px;\n  height: 20px;\n  color: #696b79;\n  font-size: 15px;\n  font-weight: 500;\n}\n\n.pdp-expandProductDetails {\n  position: absolute;\n  right: 20px;\n  font-size: 15px;\n  font-weight: 500 !important;\n}\n\n.pdp-expandProductDetails:before {\n  content: \"+\";\n  font-size: 18px;\n}\n\ninput.pdp-inputProductDetails[type=checkbox]:checked ~ label {\n  display: none;\n}\n\n.pdp-productDescriptorsContainer {\n  margin-top: 30px;\n}\n\n.pdp-productDescriptorsContainer ul {\n  padding: 0;\n  margin: 0 0 10px;\n}\n\n.pdp-productDescriptors {\n  padding-bottom: 20px;\n  border-bottom: 1px solid #d4d5d9;\n}\n\n.pdp-vatInfo {\n  color: #03a685;\n  font-weight: 500;\n  font-size: 14px;\n  display: block;\n  margin: 5px 10px 0 0;\n}\n\n@media (min-width: 425px) {\n  .pdp-image-container {\n    max-width: 360px;\n    float: left;\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 1;\n  }\n\n  .pdp-price-info {\n    margin-right: 0;\n  }\n\n  .pdp-offerCheckText:before {\n    content: \"Check for offer\";\n    text-transform: none;\n  }\n\n  .pdp-selected-image {\n    width: 360px;\n    height: 480px;\n  }\n\n  .pdp-description-container {\n    margin-top: 0;\n  }\n\n  .pdp-offer {\n    position: absolute;\n    display: inline-block;\n    right: 0;\n    border-top: 0;\n    width: auto;\n    top: 0;\n    padding: 0 0 0 20px;\n    margin-top: 23px;\n  }\n\n  .pdp-inputProductDetailsLabel {\n    display: none;\n  }\n\n  .pdp-fixed {\n    position: relative;\n  }\n\n  .pdp-action-container {\n    padding: 0;\n    z-index: 0;\n    width: 84%;\n  }\n}\n\n@media (max-width: 424px) {\n  .pdp-action-container {\n    font-size: 0;\n    box-sizing: border-box;\n    display: block;\n  }\n\n  .pdp-action-container .pdp-goToCart,\n.pdp-action-container button {\n    height: 44px;\n    float: left;\n  }\n\n  .pdp-add-to-wishlist {\n    display: inline-block;\n    width: 30%;\n    padding: 14px 15px;\n  }\n\n  .pdp-add-to-bag {\n    display: inline-block;\n    width: 70%;\n  }\n\n  .pdp-add-to-bag .pdp-whiteBag {\n    vertical-align: middle;\n    margin: 0 8px 0 0;\n  }\n\n  .pdp-add-to-bag span {\n    vertical-align: sub;\n  }\n\n  .pdp-add-to-bag.pdp-add-to-bag-full {\n    width: 100%;\n  }\n}\n\n@media (min-width: 320px) {\n  .pdp-add-to-bag {\n    min-width: 88px;\n  }\n}\n\n@media (min-width: 360px) {\n  .pdp-add-to-bag {\n    min-width: 108px;\n  }\n}\n\n@media (min-width: 980px) {\n  .pdp-pdp-container {\n    min-height: 910px;\n  }\n\n  .pdp-bogo-container {\n    margin: 10px 0 16px;\n  }\n\n  .pdp-image-container {\n    max-width: 540px;\n  }\n\n  .pdp-selected-image {\n    width: 540px;\n    height: 720px;\n  }\n\n  .pdp-description-container {\n    min-height: 820px;\n    width: 42%;\n    float: left;\n    padding: 0 0 0 30px;\n    box-sizing: border-box;\n  }\n\n  .pdp-add-to-bag,\n.pdp-add-to-wishlist {\n    margin-top: 0;\n    border-radius: 4px;\n  }\n\n  .pdp-add-to-wishlist {\n    width: 34%;\n    text-align: center;\n    padding: 10px 0;\n  }\n\n  .pdp-add-to-wishlist-full {\n    width: 100% !important;\n    box-sizing: border-box;\n  }\n\n  .pdp-add-to-bag {\n    text-align: center;\n    padding: 15px 0;\n  }\n\n  .pdp-add-to-bag-with-prior {\n    text-align: center;\n    padding: 12px 0;\n  }\n\n  .pdp-add-to-bag-full,\n.pdp-add-to-bag-full-with-proir {\n    width: 100%;\n    box-sizing: border-box;\n  }\n\n  .pdp-post-sale-price {\n    text-align: left;\n    margin-top: 20px;\n  }\n}\n\n.pdp-emiPlansContainer {\n  display: block;\n  background: rgba(0, 0, 0, 0.8);\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 10;\n}\n\n.pdp-emiPlansContainer .pdp-emiInner {\n  position: relative;\n  top: 50%;\n  margin-top: -220px;\n  left: 50%;\n  margin-left: -330px;\n  box-sizing: border-box;\n  width: 660px;\n  height: 440px;\n  background-color: #fff;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n\n@media (max-width: 480px) {\n  .pdp-emiPlansContainer .pdp-emiInner {\n    top: 0;\n    left: 0;\n    margin: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n  }\n}\n\n.pdp-emiModalclose {\n  cursor: pointer;\n  opacity: 0.7;\n  transform: scale(1);\n  position: absolute;\n  right: 30px;\n  top: 24px;\n}\n\n.pdp-discountTimer {\n  font-size: 14px;\n  margin-top: 11px;\n  letter-spacing: 1px;\n  border-bottom-right-radius: 3px;\n  border-top-right-radius: 3px;\n  background-color: #fff0f4;\n  display: inline-block;\n  vertical-align: top;\n  position: relative;\n  float: right;\n  padding: 6px;\n}\n\n.pdp-discountTimer .pdp-timerTitle {\n  margin-right: 5px;\n  color: #282c3f;\n  letter-spacing: -0.5px;\n}\n\n.pdp-discountTimer .pdp-discountTime {\n  font-weight: 800;\n  letter-spacing: -0.5px;\n  color: #ff3f6c;\n  font-family: helvetica, Whitney;\n}\n\n.pdp-discountTimer .pdp-discountTime b {\n  font-weight: 800;\n}\n\n.pdp-discountTimer .pdp-discountTimerSep {\n  margin: 0 5px;\n}\n\n.pdp-discountTimer:before {\n  content: \"\";\n  position: absolute;\n  right: 100%;\n  top: 0;\n  width: 0;\n  height: 0;\n  border-top: 15px solid transparent;\n  border-right: 15px solid #fff0f4;\n  border-bottom: 15px solid transparent;\n}\n\n.pdp-loyaltyContainer {\n  display: inline-block;\n  background: #fff5e4;\n  margin-top: 5px;\n  font-size: 15px;\n  border-radius: 21px;\n  padding: 4px 8px;\n  margin-bottom: 8px;\n}\n\n.pdp-loyaltycoin {\n  height: 15px !important;\n  width: 15px !important;\n  margin-right: 2px;\n}\n\n.pdp-flex {\n  display: inline-flex;\n}\n\n.pdp-flex.pdp-center {\n  justify-content: center;\n  align-items: center;\n}\n\n.pdp-flex.pdp-column {\n  flex-direction: column;\n}\n\n.pdp-flex.pdp-align-start {\n  align-items: flex-start;\n}\n\n.pdp-eorsText,\n.pdp-text-10 {\n  font-size: 10px;\n}\n\n.pdp-eorsText {\n  color: #a9a9a9;\n}\n\n.pdp-wishlistNow {\n  font-size: 14px;\n  line-height: 1.3;\n}\n\n.pdp-disableSprite {\n  display: none;\n}\n\n.pdp-outOfStockText {\n  font-size: 11px;\n  color: #a9a9a9;\n}\n\n.pdp-pdpButtonWishlistNow {\n  vertical-align: top;\n  display: inline-block;\n  width: 45% !important;\n}\n\n.pdp-productDetailsIcon {\n  vertical-align: middle;\n  margin-left: 5px;\n}\n\n.pdp-out-of-stock {\n  border: 1px solid #bfc0c6;\n  cursor: auto;\n}\n\n.pdp-out-of-stock,\n.pdp-out-of-stock:hover {\n  background-color: #bfc0c6;\n}\n\n.pdp-priority-out-of-stock {\n  vertical-align: top;\n  width: 40%;\n  display: inline-block;\n  background-color: #bfc0c6;\n  border: 1px solid #bfc0c6;\n  cursor: auto;\n}\n\n.pdp-priority-out-of-stock:hover {\n  background-color: #bfc0c6;\n}\n\n.pdp-bb1 {\n  border-bottom: 1px solid #d4d5d9;\n}\n\n.pdp-onPageLoader {\n  min-height: 150px;\n  padding: 50px;\n  text-align: center;\n}\n\n.pdp-sc-addToBag-disabled {\n  opacity: 0.5;\n  pointer-events: none;\n}\n\n.index-productDescriptionTableContainer {\n  position: relative;\n}\n\n.index-product-description-title {\n  color: #282c3f;\n  font-size: 16px;\n  margin: 0;\n  font-weight: 500;\n  padding-bottom: 8px;\n  border-bottom: 1px solid #d4d5d9;\n  text-transform: uppercase;\n}\n\n.index-product-description-content {\n  color: #282c3f;\n  line-height: 1.4;\n  font-size: 16px;\n  margin-top: 12px;\n  width: 84%;\n}\n\n.index-product-description-content b {\n  font-weight: 500;\n  display: inline-block;\n  margin-top: 16px;\n}\n\n.index-product-description-content b:first-child {\n  margin-top: 0;\n}\n\n.index-product-description-content p {\n  margin: 0;\n}\n\n.index-sizeFitDesc {\n  font-weight: 400;\n  border: none;\n  margin-top: 12px;\n}\n\n.index-sizeFitDescTitle {\n  text-transform: capitalize;\n  font-weight: 500;\n  font-size: 16px;\n  border: none;\n  padding-bottom: 5px;\n}\n\n.index-sizeFitDescContent {\n  margin: 0;\n  width: 90%;\n}\n\n.index-tableContainer {\n  display: flex;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  flex-direction: row;\n}\n\n.index-tableContainer .index-row {\n  position: relative;\n  border-bottom: 1px solid #eaeaec;\n  margin: 0 0 12px;\n  padding-bottom: 10px;\n  flex-basis: 40%;\n}\n\n.index-tableContainer .index-row:nth-child(odd) {\n  margin-right: 10%;\n}\n\n.index-tableContainer .index-row .index-rowKey {\n  position: relative;\n  color: #7e818c;\n  font-size: 12px;\n  line-height: 1;\n  margin-bottom: 5px;\n}\n\n.index-tableContainer .index-row .index-rowValue {\n  position: relative;\n  color: #282c3f;\n  font-size: 16px;\n  line-height: 1.2;\n}\n\n.index-showMoreText {\n  font-size: 14px;\n  font-weight: 500;\n  color: #ff3f6c;\n  margin-top: 4px;\n  cursor: pointer;\n}\n\n.colors-container {\n  margin-bottom: 10px;\n}\n\n.colors-heading {\n  color: #282c3f;\n  font-size: 16px;\n  text-transform: uppercase;\n  margin: 0 0 15px;\n  letter-spacing: 0.4px;\n}\n\n.colors-heading strong {\n  font-weight: 500;\n}\n\n.colors-heading .colors-shadeTitle {\n  font-size: 14px;\n  text-transform: none;\n}\n\n.colors-image {\n  width: 55px;\n  height: auto;\n  margin-right: 10px;\n  margin-bottom: 12px;\n}\n\n.colors-shadeList {\n  padding: 0;\n  margin: 0;\n  font-size: 0;\n}\n\n.colors-shadeList > li {\n  padding: 0;\n  display: inline-block;\n  margin: 0 10px 10px 0;\n}\n\n.colors-shadeList a {\n  display: inline-block;\n  font-size: 0;\n}\n\n.colors-shadeListMobile {\n  display: flex;\n  flex-wrap: nowrap;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n\n.colors-shadeListMobile > li {\n  flex: 0 0 auto;\n  margin: 0 0 12px 18px;\n}\n\n.colors-shadeListMobile > li:first-child {\n  margin-left: 20px;\n}\n\n.colors-shadeListMobile > li:last-child {\n  padding-right: 20px;\n}\n\n.colors-shade {\n  display: inline-block;\n  cursor: pointer;\n  max-width: 66px;\n  box-sizing: border-box;\n}\n\n.colors-shade .colors-imageContainer {\n  height: 40px;\n  position: relative;\n  overflow: hidden;\n  background-color: #d5d6d9;\n}\n\n.colors-shade .colors-imageContainer.colors-moreImageContainer {\n  background-color: #fff;\n}\n\n.colors-shade .colors-imageContainer .colors-grid {\n  width: 30px;\n  height: 18px;\n  display: inline-block;\n  float: left;\n  background-color: #d5d6d9;\n}\n\n.colors-shade .colors-imageContainer .colors-grid:nth-child(odd) {\n  margin-right: 3px;\n}\n\n.colors-shade .colors-imageContainer .colors-grid:first-child,\n.colors-shade .colors-imageContainer .colors-grid:nth-child(2) {\n  margin-bottom: 3px;\n}\n\n.colors-shade .colors-imageContainer .colors-grid img {\n  width: 100%;\n  height: 100%;\n}\n\n.colors-shade img {\n  display: block;\n  width: 100%;\n  height: 40px;\n  -o-object-fit: cover;\n  object-fit: cover;\n}\n\n.colors-shade .colors-shadeName {\n  font-size: 10px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 100%;\n  display: inline-block;\n  text-align: center;\n  color: #535766;\n  margin-top: 6px;\n}\n\n.colors-selected {\n  cursor: default;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-left: -8px;\n  margin-top: -7px;\n  z-index: 1;\n}\n\n.size-buttons-select-size {\n  display: inline-block;\n  font-size: 16px;\n  margin: 0;\n  font-weight: 500;\n}\n\n.size-buttons-size-container {\n  margin: 10px 0 24px;\n}\n\n.size-buttons-size-header {\n  margin: 0 0 10px;\n  position: relative;\n  line-height: 1;\n}\n\n.size-buttons-size-chart {\n  margin-left: 30px;\n}\n\n.size-buttons-arrow {\n  display: inline-block;\n  width: 6px;\n  height: 6px;\n  margin-left: 4px;\n  border: solid #ff3e6c;\n  border-width: 2px 2px 0 0;\n  transform: rotate(45deg);\n  margin-bottom: 2px;\n}\n\n.size-buttons-show-size-chart {\n  outline: 0;\n  background-color: transparent;\n  border: 0;\n  letter-spacing: 0.5px;\n  text-align: right;\n  padding: 0 0 5px;\n  color: #ff3e6c;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: uppercase;\n  margin-top: 0;\n}\n\n.size-buttons-arrowRightBold {\n  position: relative;\n  top: 4px;\n  color: #ff3e6c;\n  transform: scale(0.8);\n}\n\n.size-buttons-sizeTip {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 1px;\n  min-width: 400px;\n  visibility: hidden;\n  transition: visibility 0.1s ease-out;\n  transition-delay: 0.1s;\n}\n\n.size-buttons-sizeTip .size-buttons-sizeTipMeta {\n  position: absolute;\n  min-width: 400px;\n  left: 0;\n  bottom: 10px;\n  text-align: left;\n  border: 1px solid #e9e9eb;\n  background-color: #fff;\n  padding: 18px;\n  z-index: 29;\n  border-radius: 4px;\n  font-weight: 400;\n  box-shadow: 0 2px 16px 0 rgba(40, 44, 63, 0.1);\n}\n\n.size-buttons-sizeTip .size-buttons-sizeTipMeta p {\n  margin: 0;\n}\n\n.size-buttons-tipAndBtnContainer {\n  margin: 10px 10px 10px 0;\n}\n\n.size-buttons-tipAndBtnContainer:hover .size-buttons-sizeTip {\n  visibility: visible;\n}\n\n.size-buttons-size-buttons {\n  box-sizing: border-box;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  margin: 0;\n  font-size: 13px;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n  position: relative;\n}\n\n.size-buttons-size-buttons-error {\n  padding-bottom: 10px;\n  display: flex;\n  -webkit-animation: size-buttons-shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n  animation: size-buttons-shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n  transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  perspective: 1000px;\n}\n\n@-webkit-keyframes size-buttons-shake {\n  10%, 90% {\n    transform: translate3d(-1px, 0, 0);\n  }\n  20%, 80% {\n    transform: translate3d(2px, 0, 0);\n  }\n  30%, 50%, 70% {\n    transform: translate3d(-4px, 0, 0);\n  }\n  40%, 60% {\n    transform: translate3d(4px, 0, 0);\n  }\n}\n\n.size-buttons-size-error-message {\n  color: #f16565;\n  margin-top: 15px;\n  display: block;\n}\n\n.size-buttons-size-button-default {\n  background-color: #fff;\n  border: 1px solid #bfc0c6;\n  border-radius: 50px;\n  padding: 0;\n  min-width: 50px;\n  height: 50px;\n  text-align: center;\n  cursor: pointer;\n  color: #282c3f;\n  flex: 0 0 auto;\n  position: relative;\n}\n\n.size-buttons-size-button {\n  position: relative;\n}\n\n.size-buttons-size-button-selected {\n  border: 1px solid #ff3f6c;\n  background-color: #fff;\n  color: #ff3f6c !important;\n}\n\n.size-buttons-size-button-disabled {\n  color: #d5d6d9;\n  border: 1px solid #d5d6d9;\n  cursor: default;\n  font-weight: 500;\n  outline: none;\n  overflow: hidden;\n}\n\n.size-buttons-size-strike-hide {\n  width: 0;\n  height: 0;\n}\n\n.size-buttons-size-strike-show {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 100%;\n  height: 1px;\n  background-color: #d5d6d9;\n  transform: rotate(-45deg);\n}\n\n.size-buttons-big-size {\n  min-height: 48px;\n  min-width: 60px;\n  border-radius: 50px;\n  height: auto;\n  width: auto;\n  padding: 0 10px;\n  font-weight: 500;\n}\n\n.size-buttons-out-of-stock {\n  color: #f16565;\n}\n\n.size-buttons-size-button:hover {\n  border: 1px solid #ff3f6c;\n}\n\n.size-buttons-size-button:focus {\n  outline: 0;\n}\n\n.size-buttons-unified-size {\n  margin: 0;\n  font-size: 14px;\n  padding: 0 8px;\n  font-weight: 500;\n}\n\n.size-buttons-unified-size + .size-buttons-inventory-left {\n  left: 7%;\n  bottom: -3px;\n}\n\n.size-buttons-sku-price {\n  font-size: 12px;\n  text-transform: capitalize;\n  font-weight: 400;\n  margin-top: 4px;\n}\n\n.size-buttons-bodymeasure {\n  color: #535665;\n}\n\n.size-buttons-sizeChartInfo {\n  color: #535665;\n  margin-top: 5px;\n  font-size: 12px;\n}\n\n.size-buttons-sizeFitDesc {\n  font-weight: 400;\n  border: none;\n}\n\n.size-buttons-measurementType {\n  font-size: 14px;\n  color: #282c3f;\n}\n\n.size-buttons-measurementName {\n  font-size: 14px;\n  margin-left: 6px;\n  font-weight: 500;\n  color: #535665;\n}\n\n.size-buttons-inventory-left {\n  font-size: 12px;\n  font-weight: 400;\n  position: absolute;\n  width: 100%;\n  left: 0;\n  width: 90%;\n  left: 7%;\n  background-color: #ff905a;\n  color: #fff;\n  border-radius: 2px;\n  text-align: center;\n}\n\n.size-buttons-inventory-left-hidden {\n  visibility: hidden;\n}\n\n.size-buttons-sizeButtonAsLink {\n  flex: 0 0 auto;\n}\n\n@media (min-width: 600px) {\n  .size-buttons-size-buttons {\n    margin-bottom: 10px;\n  }\n}\n\n@media (min-width: 980px) {\n  .size-buttons-size-chart {\n    top: 0;\n    right: 0;\n  }\n}\n\n.size-buttons-recoContainer {\n  position: relative;\n  clear: both;\n}\n\n.size-buttons-recoContainerMobile {\n  overflow: hidden;\n}\n\n.size-buttons-recText {\n  font-size: 14px;\n  position: relative;\n  margin: 8px;\n}\n\n.size-buttons-moreProfilesWeb {\n  display: inline-block;\n  float: right;\n  position: relative;\n  right: 10px;\n  top: -28px;\n}\n\n.size-buttons-moreProfilesMobile {\n  right: 20px;\n  max-height: 0;\n  transition: max-height 0.6s cubic-bezier(0, 1, 0.5, 1);\n}\n\n.size-buttons-moreProfilesMobile .size-buttons-profileListHeader {\n  position: absolute;\n  right: 12px;\n  top: 14px;\n}\n\n.size-buttons-profileListHeader {\n  cursor: pointer;\n  padding: 10px 0;\n  font-weight: 500;\n  font-size: 14px;\n  color: #ff3f6c;\n}\n\n.size-buttons-sharpCorner {\n  border-color: #fde3f3 transparent;\n  border-style: solid;\n  border-width: 10px 10px 0;\n  width: 0;\n  position: absolute;\n  left: 22px;\n  bottom: -8px;\n}\n\n.size-buttons-profilesListWeb {\n  margin: 0;\n  width: 70px;\n  background-color: #fff;\n  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.13);\n  position: absolute;\n  right: 0;\n  top: 24px;\n  padding: 8px 12px 4px;\n  z-index: 2;\n  display: none;\n}\n\n.size-buttons-profilesListMobile {\n  white-space: nowrap;\n  overflow: auto;\n  transform: translateX(110%);\n  transition: transform 0.6s cubic-bezier(0, 1, 0.5, 1);\n}\n\n.size-buttons-profilesListMobile li {\n  display: inline-block;\n  border-radius: 50px;\n  border: 0.5px solid #696b79;\n  padding: 12px 18px;\n  width: 65px;\n  text-align: center;\n  font-weight: 500;\n  font-size: 15px;\n  margin-right: 10px;\n}\n\n.size-buttons-pNameHeader {\n  color: #ff3f6c;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: inline-block;\n  vertical-align: text-top;\n  max-width: 80px;\n  margin-left: 4px;\n}\n\n.size-buttons-moreProfilesMobile.size-buttons-showProfiles {\n  max-height: 50px;\n}\n\n.size-buttons-moreProfilesMobile.size-buttons-showProfiles .size-buttons-profilesListMobile {\n  transform: translateX(0);\n}\n\n.size-buttons-moreProfilesWeb:hover .size-buttons-profilesListWeb {\n  display: inline-block;\n}\n\n.size-buttons-profileItem {\n  margin-bottom: 6px;\n  cursor: pointer;\n  color: #7e818c;\n  font-size: 13px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.size-buttons-profileItem.size-buttons-selected {\n  border: 1px solid #ff3f6c;\n  background-color: #fff;\n  color: #ff3f6c !important;\n}\n\n.size-buttons-personalisedReco {\n  width: 70%;\n  display: inline-block;\n  margin-top: 2px;\n}\n\n.size-buttons-similarWrapper {\n  margin: 0;\n}\n\n.size-buttons-moreProfileSC {\n  position: absolute;\n  top: 12px;\n  right: 16px;\n}\n\n.size-buttons-profileName {\n  font-weight: 500;\n}\n\n.size-buttons-viewSimilar {\n  color: #ff3e6c;\n  font-weight: 500;\n  cursor: pointer;\n}\n\n.size-buttons-tagInfoText {\n  position: absolute;\n  background: #fff;\n  top: -78px;\n  left: 0;\n  width: 330px;\n  padding: 8px 10px;\n  display: none;\n  border-radius: 6px;\n  box-shadow: 0 2px 16px 0 rgba(40, 44, 63, 0.1);\n  text-align: left;\n  border: 1px solid #e9e9eb;\n  color: #535665;\n}\n\n.size-buttons-tagInfoIcon {\n  display: inline-block;\n  border: 1px solid #7e808c;\n  font-size: 12px;\n  font-weight: 500;\n  color: #fff;\n  background: #7e808c;\n  border-radius: 50%;\n  width: 16px;\n  height: 16px;\n  text-align: center;\n  cursor: pointer;\n  margin-left: 10px;\n}\n\n.size-buttons-tagInfoIcon:hover + .size-buttons-tagInfoText {\n  display: block;\n}\n\n.size-buttons-hide {\n  display: none;\n}\n\n.size-buttons-shakeText {\n  -webkit-animation: size-buttons-shake 0.6s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n  animation: size-buttons-shake 0.6s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n  transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  perspective: 1000px;\n}\n\n.size-buttons-login {\n  color: #ff3e6c;\n  margin-left: 7px;\n  font-weight: 500;\n  cursor: pointer;\n}\n\n.size-buttons-buttonContainer {\n  position: relative;\n}\n\n.size-buttons-reco-icon {\n  display: inline-block;\n  margin: 0 10px 0 4px;\n  vertical-align: top;\n}\n\n.size-buttons-sc-reco-txt {\n  padding: 14px;\n  background: linear-gradient(90deg, #fde3f3, #fef9e5);\n  color: #282c3f;\n}\n\n.breadcrumbs-bold-link,\n.breadcrumbs-bold-separator {\n  font-weight: 500;\n}\n\n.index-crossLinkContainer {\n  display: inline-block;\n  margin: 35px 0 50px;\n  width: 100%;\n  text-align: center;\n}\n\n.index-links {\n  display: inline-block;\n  color: #ff3e6c;\n  font-size: 14px;\n  font-weight: 500;\n  margin-right: 16px;\n  text-transform: uppercase;\n}\n\n.index-links > div {\n  border-radius: 24px;\n  background-color: #fff;\n  border: 1px solid #bfc0c6;\n  padding: 16px 20px;\n}\n\n.index-links > div:hover {\n  border: 1px solid #ff3e6c;\n}\n\n.index-arrow {\n  display: inline-block;\n  width: 6px;\n  height: 6px;\n  margin-left: 10px;\n  border: solid #ff3e6c;\n  border-width: 2px 2px 0 0;\n  transform: rotate(45deg);\n  margin-bottom: 1px;\n}\n\n.meta-container {\n  margin: 20px 0 0;\n}\n\n.meta-info {\n  color: #282c3f;\n  font-size: 16px;\n  margin: 0;\n  padding: 0;\n  position: relative;\n}\n\n.meta-info .meta-title {\n  color: #94989f;\n}\n\n.meta-info .meta-desc {\n  margin: 5px 0;\n  display: inline-block;\n  width: 90%;\n  vertical-align: top;\n}\n\n.meta-info .meta-desc a {\n  color: #94989f;\n  font-size: 12px;\n}\n\n.meta-dot {\n  width: 4px;\n  height: 4px;\n  display: inline-block;\n  border-radius: 4px;\n  background-color: #282c3f;\n  margin-right: 5px;\n  vertical-align: middle;\n  margin-bottom: -3px;\n}\n\na.meta-link {\n  color: #ff3e6c;\n  font-weight: 500;\n}\n\n@media (max-width: 600px) {\n  .meta-taxInfo {\n    display: none;\n  }\n}\n\n.supplier-productSellerName {\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.supplier-productSellerName,\n.supplier-styleId {\n  color: #282c3f;\n  font-weight: 500;\n  position: relative;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\n.supplier-met-values {\n  padding-top: 4px;\n}\n\n.supplier-product-code {\n  font-size: 12px;\n  margin-bottom: 6px;\n  padding: 4px;\n}\n\n.supplier-product-code-separator {\n  font-size: 12px;\n  padding: 0 5px;\n}\n\n.supplier-supplier {\n  color: #282c3f;\n  font-size: 16px;\n  padding: 4px 0;\n  margin-bottom: 6px;\n}\n\n.supplier-partner-name {\n  color: #282c3f;\n}\n\n.supplier-viewmore-link {\n  color: #282c3f;\n  font-size: 14px;\n  padding: 4px 0;\n  margin-bottom: 6px;\n  font-weight: 500;\n  cursor: pointer;\n}\n\n.supplier-manufacturer {\n  color: #282c3f;\n  font-size: 13px;\n  padding: 4px 0;\n  margin-bottom: 6px;\n}\n\n.supplier-mobileCodeSupplier {\n  padding: 20px;\n  font-size: 13px;\n  display: none;\n}\n\n.supplier-mobileCodeSupplier p:first-child {\n  color: #3e4152;\n}\n\n.supplier-mobileCodeSupplier p {\n  color: #7e818c;\n  margin: 5px 0;\n}\n\n.supplier-contactSellerContainer {\n  display: inline-block;\n}\n\n.supplier-supplierContactTootip {\n  position: absolute;\n  top: 25px;\n  left: 50%;\n  margin: 0 auto;\n  text-align: center;\n  min-width: 300px;\n  max-width: 490px;\n  width: auto;\n  transform: translateX(-50%);\n  display: block;\n  border-radius: 2px;\n  padding: 12px 0;\n  font-size: 12px;\n  background: #fff;\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);\n  z-index: 2;\n  box-sizing: border-box;\n  cursor: default;\n}\n\n.supplier-supplierContactTootip h4 {\n  font-size: 14px;\n  margin: 0 0 12px;\n  padding: 0 20px 15px;\n  color: #696e79;\n  font-weight: 400;\n  line-height: 20px;\n  text-align: left;\n  border-bottom: 1px solid #eaeaec;\n  word-wrap: break-word;\n}\n\n.supplier-supplierContactTootip .supplier-button {\n  float: left;\n  width: 49%;\n  font-size: 12px;\n  padding: 2px;\n  text-transform: uppercase;\n  font-weight: 500;\n  color: #94969f;\n  cursor: pointer;\n}\n\n.supplier-supplierContactTootip span.supplier-button {\n  border-right: 1px solid #eaeaec;\n}\n\n.supplier-supplierContactTootip a.supplier-button {\n  color: #ff3e6c;\n}\n\n.supplier-triangle-with-shadow {\n  width: 60px;\n  height: 10px;\n  position: absolute;\n  top: -10px;\n  left: 50%;\n  margin-left: -30px;\n  transform: rotate(180deg);\n  overflow: hidden;\n  box-shadow: 0 -16px 10px -17px rgba(0, 0, 0, 0.2);\n}\n\n.supplier-triangle-with-shadow:after {\n  content: \"\";\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  background: #fff;\n  transform: rotate(45deg);\n  top: -5px;\n  left: 25px;\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);\n}\n\n.supplier-halfCardBackdrop {\n  background: rgba(41, 48, 63, 0.58);\n  position: fixed;\n  top: 0;\n  left: -4%;\n  width: 104%;\n  height: 100%;\n  z-index: 10;\n}\n\n.supplier-contactSellerHalfCard {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  z-index: 10;\n  box-sizing: border-box;\n  background: #fff;\n  text-align: center;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n\n.supplier-contactSellerHalfCard h4 {\n  margin: 0;\n  padding: 22px;\n  border-bottom: 1px solid #eaeaec;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 24px;\n  color: #696e79;\n  text-align: left;\n  word-wrap: break-word;\n}\n\n.supplier-contactSellerHalfCard .supplier-button {\n  float: left;\n  width: 49%;\n  font-size: 14px;\n  padding: 2px;\n  text-transform: uppercase;\n  font-weight: 500;\n  margin: 17px 0;\n  color: #94969f;\n}\n\n.supplier-contactSellerHalfCard span.supplier-button {\n  border-right: 1px solid #eaeaec;\n}\n\n.supplier-contactSellerHalfCard a.supplier-button {\n  color: #20bd99;\n}\n\n.supplier-desktopCodeSupplier {\n  margin-top: 15px;\n}\n\n.supplier-desktopCodeSupplier .supplier-productSellerName {\n  display: inline-block;\n}\n\n@media (max-width: 600px) {\n  .supplier-desktopCodeSupplier {\n    display: none;\n  }\n\n  .supplier-mobileCodeSupplier {\n    display: block;\n  }\n}\n\n@media (min-width: 980px) {\n  .supplier-supplier:after {\n    display: inline;\n  }\n}\n\n.pdp-offers-container {\n  margin: 40px 0 0;\n  padding: 0 0 20px;\n  border-bottom: 1px solid #d4d5d9;\n}\n\n.pdp-offers-container .pdp-offers-offerBlock:last-child .pdp-offers-offer:last-child {\n  margin-bottom: 0;\n}\n\n.pdp-offers-container > h4 {\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1;\n  color: #282c3f;\n  margin-bottom: 16px;\n  text-transform: uppercase;\n  margin-top: 0;\n}\n\n.pdp-offers-extraOffer .pdp-offers-offerDesc {\n  font-size: 14px;\n  padding-top: 1px;\n  margin: 0;\n}\n\n.pdp-offers-extraOffer .pdp-offers-viewMoreLink {\n  display: none;\n}\n\n.pdp-offers-extraOffer .pdp-offers-offer {\n  margin-bottom: 0;\n  padding: 10px 12px;\n  cursor: pointer;\n  margin-right: 88px;\n  border: 1px solid #fff;\n}\n\n.pdp-offers-extraOffer .pdp-offers-offer:hover {\n  border: 1px solid #d4d5d9;\n  border-radius: 4px;\n}\n\n.pdp-offers-extraOffer .pdp-offers-offer:hover .pdp-offers-viewMoreLink {\n  display: inline-block;\n}\n\n.pdp-offers-moreOffersButton {\n  color: #526cd0;\n  font-size: 13px;\n  font-weight: 500;\n  margin-top: 5px;\n  display: block;\n  cursor: pointer;\n}\n\n.pdp-offers-offerHeading {\n  font-size: 15px;\n  color: #282c3f;\n  margin-bottom: 5px;\n}\n\n.pdp-offers-offerHeading b {\n  font-weight: 400;\n}\n\n.pdp-offers-offer {\n  margin-bottom: 12px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.pdp-offers-offer > div {\n  width: 100%;\n}\n\n.pdp-offers-offerTitle {\n  font-size: 16px;\n  color: #282c3f;\n  margin-bottom: 1px;\n}\n\n.pdp-offers-offerTitle b {\n  color: #282c3f;\n  display: inline-block;\n}\n\n.pdp-offers-offerDesc {\n  font-size: 16px;\n  color: #282c3f;\n  padding: 0;\n  margin: 8px 0 0;\n  list-style: none;\n  width: 100%;\n}\n\n.pdp-offers-offerDesc b {\n  font-weight: 400;\n}\n\n.pdp-offers-offerDesc li {\n  margin-bottom: 6px;\n}\n\n.pdp-offers-offerDesc li .pdp-offers-labelMarkup {\n  display: inline-block;\n  vertical-align: top;\n  width: 90%;\n}\n\n.pdp-offers-offerImage {\n  width: 36px;\n  height: 36px;\n  border-radius: 4px;\n  background-color: #d8d8d8;\n  display: inline-block;\n  flex: 0 0 36px;\n}\n\n.pdp-offers-offerImage img {\n  max-width: 100%;\n  height: 100%;\n}\n\n.pdp-offers-offerImage + .pdp-offers-offerColumnText {\n  margin-left: 15px;\n}\n\n.pdp-offers-offerColumnText {\n  display: inline-block;\n  flex: 1;\n  vertical-align: top;\n}\n\n.pdp-offers-viewMoreLink {\n  display: inline-block;\n  float: right;\n  letter-spacing: 0.3px;\n  color: #282c3f;\n  line-height: 1;\n  vertical-align: top;\n  text-transform: uppercase;\n  margin-left: auto;\n}\n\ndiv.pdp-offers-bullet {\n  width: 4px;\n  height: 4px;\n  border-radius: 4px;\n  background-color: #282c3f;\n  margin-right: 10px;\n  margin-bottom: 2px;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.pdp-offers-price {\n  color: #ff905a;\n  font-weight: 500;\n}\n\n.pdp-offers-offerController .pdp-offers-moreOffersButton {\n  margin-top: 0;\n}\n\n.pdp-offers-showOfferLink {\n  color: #282c3f;\n  font-weight: 500;\n  font-size: 12px;\n  cursor: pointer;\n}\n\n.pdp-offers-arrow {\n  display: inline-block;\n  width: 7px;\n  height: 7px;\n  margin-left: 4px;\n  border: solid #282c3f;\n  border-width: 2px 2px 0 0;\n  transform: rotate(45deg);\n  margin-bottom: 1px;\n}\n\n.pdp-offers-arrowRightBold {\n  position: relative;\n  top: 4px;\n  transform: scale(0.8);\n}\n\n.pdp-offers-offerColumn {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  flex-wrap: nowrap;\n}\n\n.pdp-offers-boldText {\n  font-weight: 500;\n}\n\n.pdp-offers-tapForBest {\n  font-size: 14px;\n}\n\n.pdp-offers-couponNotFound {\n  color: #282c3f;\n  font-weight: 400;\n  margin-bottom: 0;\n  display: inline-block;\n  font-size: 15px;\n}\n\n.pdp-offers-onlyOfferTitle {\n  color: #282c3f;\n  font-weight: 400;\n  display: block;\n  font-size: 15px;\n}\n\n@media (min-width: 600px) {\n  .pdp-offers-container {\n    margin-right: 0;\n  }\n}\n\n.pdp-offers-coinicon {\n  height: 15px !important;\n  width: 15px !important;\n  margin-right: 2px;\n  vertical-align: middle;\n}\n\n.pdp-offers-similarColorsIcon {\n  vertical-align: middle;\n  margin-left: 5px;\n}\n\n.pdp-offers-mfuIcon {\n  vertical-align: middle;\n  height: 17px;\n  width: 17px;\n  margin-right: 2px;\n}\n\n.pdp-offers-mfuTitleContainer {\n  margin-left: -5px;\n}\n\n.admissionSlot-slot {\n  font-size: 14px;\n  color: #3e4152;\n  border: 1px solid #7e818c;\n  border-radius: 40px;\n  width: 192px;\n  padding: 15px 0;\n  margin: 15px auto 7px;\n  cursor: pointer;\n}\n\n.admissionSlot-disabled {\n  border-color: #d4d5d9;\n  padding: 8px 0 9px;\n  cursor: default;\n}\n\n.admissionSlot-selected {\n  border: 1.2px solid #14cda8;\n  font-weight: 600;\n  color: #3e4152;\n}\n\n.admissionSlot-disabled span {\n  color: #ff5722;\n  font-size: 10px;\n  text-transform: uppercase;\n  display: block;\n  width: 100%;\n  padding-bottom: 2px;\n}\n\n@media (max-width: 480px) {\n  .admissionSlot-slot {\n    font-size: 12px;\n    width: 145px;\n    margin: 10px auto 0;\n    height: 44px;\n  }\n\n  .admissionSlot-disabled {\n    padding: 8px 0 9px;\n  }\n\n  .admissionSlot-selected {\n    padding: 15px 0;\n  }\n\n  .admissionSlot-disabled span {\n    font-size: 10px;\n    padding-bottom: 2px;\n  }\n}\n\n.index-overallRatingContainer {\n  width: auto;\n  border-bottom: 1px solid #d4d5d9;\n}\n\n.index-overallRating {\n  margin-bottom: 12px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: 29px;\n  padding: 8px;\n  border: 1px solid #eaeaec;\n  border-radius: 2px;\n  cursor: pointer;\n  font-size: 16px;\n  font-weight: 500;\n  color: #282c3f;\n}\n\n.index-overallRating .index-starIcon {\n  margin: 0 -8px 0 -2px;\n  transform: scale(0.6);\n}\n\n.index-overallRating .index-separator {\n  margin-left: 8px;\n  margin-top: -2px;\n  color: #d4d5d9;\n  width: 1px;\n}\n\n.index-overallRating .index-ratingsCount {\n  margin-left: 8px;\n  font-weight: 400;\n  color: #535766;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.index-overallRating:hover {\n  border: 1px solid #535766;\n}\n\n.index-productRatingsIcon {\n  vertical-align: middle;\n  margin-left: 5px;\n}\n\n.skeleton-skeletonLoader {\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 99.99%;\n  height: 99.99%;\n  background: #eaeaec linear-gradient(left, #eaeaec, #dad9d9 35%, #eaeaec 70%, #eaeaec) no-repeat;\n  background-size: 800px 100%;\n  -webkit-animation: skeleton-loading-skeleton 1.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite forwards;\n  animation: skeleton-loading-skeleton 1.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite forwards;\n}\n\n@-webkit-keyframes skeleton-loading-skeleton {\n  0% {\n    background-position: -468px 0;\n  }\n  to {\n    background-position: 468px 0;\n  }\n}\n\n@keyframes skeleton-loading-skeleton {\n  0% {\n    background-position: -468px 0;\n  }\n  to {\n    background-position: 468px 0;\n  }\n}\n\n.image-thumb-wrapper-imageThumbWrapper .image-thumb-wrapper-headline {\n  color: #282c3f;\n  line-height: 1.4;\n  font-size: 16px;\n  margin-top: 20px;\n  font-weight: 600;\n  margin-bottom: 5px;\n}\n\n.image-thumb-wrapper-container {\n  display: flex;\n  margin: 0 -5px;\n}\n\n.image-thumb-wrapper-container .image-thumb-wrapper-thumb {\n  cursor: pointer;\n  width: 75px;\n  height: 75px;\n  margin: 5px;\n  position: relative;\n  overflow: hidden;\n}\n\n.image-thumb-wrapper-container .image-thumb-wrapper-thumb .image-thumb-wrapper-image {\n  position: absolute;\n  z-index: 2;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n  object-fit: cover;\n  background-size: cover;\n}\n\n.image-thumb-wrapper-container .image-thumb-wrapper-thumbLast:after {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  content: \"\";\n  opacity: 0.8;\n  background-color: #282c3f;\n  z-index: 3;\n}\n\n.image-thumb-wrapper-container .image-thumb-wrapper-imageCount {\n  color: #fff;\n  font-size: 16px;\n  font-weight: 600;\n  position: absolute;\n  top: 4px;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  margin: auto;\n  width: 100%;\n  height: 21px;\n  z-index: 4;\n  text-align: center;\n}\n\n.index-ratingBarContainer {\n  margin-left: 46px;\n  height: 18px;\n}\n\n.index-ratingBarContainer .index-flexRow {\n  display: flex;\n  flex-direction: row;\n}\n\n.index-ratingBarContainer .index-rating {\n  display: flex;\n  font-size: 14px;\n  color: #a9abb3;\n}\n\n.index-ratingBarContainer .index-rating .index-ratingLevel {\n  width: 7px;\n}\n\n.index-ratingBarContainer progress {\n  border: none;\n  margin-top: 6px;\n  width: 120px;\n  height: 4px;\n  background: #f5f5f6;\n}\n\n.index-ratingBarContainer progress::-webkit-progress-bar {\n  background: #f5f5f6;\n}\n\n.index-ratingBarContainer progress[data-rating=\"4\"]::-webkit-progress-value,\n.index-ratingBarContainer progress[data-rating=\"5\"]::-webkit-progress-value {\n  background: #14958f;\n}\n\n.index-ratingBarContainer progress[data-rating=\"3\"]::-webkit-progress-value {\n  background: #72bfbc;\n}\n\n.index-ratingBarContainer progress[data-rating=\"2\"]::-webkit-progress-value {\n  background: #fcb301;\n}\n\n.index-ratingBarContainer progress[data-rating=\"1\"]::-webkit-progress-value {\n  background: #f16565;\n}\n\n.index-ratingBarContainer progress[data-rating=\"4\"]::-moz-progress-bar,\n.index-ratingBarContainer progress[data-rating=\"5\"]::-moz-progress-bar {\n  background: #14958f;\n}\n\n.index-ratingBarContainer progress[data-rating=\"3\"]::-moz-progress-bar {\n  background: #72bfbc;\n}\n\n.index-ratingBarContainer progress[data-rating=\"2\"]::-moz-progress-bar {\n  background: #fcb301;\n}\n\n.index-ratingBarContainer progress[data-rating=\"1\"]::-moz-progress-bar {\n  background: #f16565;\n}\n\n.index-ratingBarContainer progress[data-rating=\"4\"],\n.index-ratingBarContainer progress[data-rating=\"5\"] {\n  color: #14958f;\n}\n\n.index-ratingBarContainer progress[data-rating=\"3\"] {\n  color: #72bfbc;\n}\n\n.index-ratingBarContainer progress[data-rating=\"2\"] {\n  color: #fcb301;\n}\n\n.index-ratingBarContainer progress[data-rating=\"1\"] {\n  color: #f16565;\n}\n\n.index-ratingBarContainer .index-count {\n  font-size: 12px;\n  color: #282c3f;\n  margin-left: 9px;\n}\n\n.index-grayStarIcon {\n  margin: 2px 3px;\n  transform: scale(0.8);\n}\n\n.breadcrumbs-container {\n  display: block;\n  padding: 29px 0 22px;\n  font-size: 14px;\n}\n\n.breadcrumbs-link {\n  color: #282c3f;\n  text-transform: capitalize;\n  display: inline-block;\n  text-decoration: none;\n  padding-bottom: 1px;\n  border-bottom: 1px solid transparent;\n}\n\n.breadcrumbs-link:hover {\n  border-bottom: 1px solid #d5d6d9;\n}\n\n.breadcrumbs-boldLink {\n  font-weight: 500;\n}\n\n.breadcrumbs-boldLink:hover {\n  border-bottom: none;\n}\n\n.breadcrumbs-separator {\n  color: #282c3f;\n  margin: 0 5px;\n  padding-top: 5px;\n}\n\n.dropdown-filter-dropdownFilterContainer {\n  position: relative;\n  font-size: 14px;\n  padding-right: 18px;\n}\n\n.dropdown-filter-dropdownFilterContainer .dropdown-filter-active {\n  color: #ff3f6c;\n  cursor: pointer;\n}\n\n.dropdown-filter-dropdownFilterContainer .dropdown-filter-active span > .dropdown-filter-starIcon {\n  background-position: -288px -95px;\n}\n\n.dropdown-filter-dropdownFilterContainer .dropdown-filter-dropdown {\n  opacity: 0;\n  position: absolute;\n  border-radius: 2px;\n  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);\n  background-color: #fff;\n  top: 100%;\n  width: 148px;\n  padding: 13px 15px;\n  box-sizing: border-box;\n  right: 0;\n  transition: top 0.3s, opacity 0.1s;\n}\n\n.dropdown-filter-dropdownFilterContainer .dropdown-filter-dropdown.dropdown-filter-open {\n  z-index: 1;\n  transition: top 0.3s, opacity 0.1s;\n  opacity: 1;\n  top: 140%;\n  color: #ff3f6c;\n  cursor: pointer;\n}\n\n.dropdown-filter-dropdownFilterContainer .dropdown-filter-heading {\n  color: #a9abb3;\n  font-size: 12px;\n  font-weight: 300;\n  margin-bottom: -5px;\n}\n\n.dropdown-filter-dropdownFilterContainer .dropdown-filter-item {\n  font-weight: 600;\n  color: #535766;\n  margin-top: 12px;\n  cursor: pointer;\n}\n\n.dropdown-filter-dropdownFilterContainer .dropdown-filter-item.dropdown-filter-active {\n  color: #ff3f6c;\n}\n\n.dropdown-filter-dropdownFilterContainer .dropdown-filter-divider {\n  margin: 15px 0;\n  height: 1px;\n  background-color: #eaeaec;\n}\n\n.dropdown-filter-dropdownFilterContainer .dropdown-filter-arrowIcon {\n  transform: rotate(90deg);\n  position: absolute;\n  right: 6px;\n  top: 6px;\n}\n\n.dropdown-filter-dropdownFilterContainer .dropdown-filter-arrowIcon.dropdown-filter-active {\n  transform: rotate(-90deg);\n  top: 3px;\n}\n\n.dropdown-filter-arrowIcon {\n  transform: scale(1.3);\n}\n\n.dropdown-filter-starIcon {\n  transform: scale(2);\n  margin: 0 3px 3px 2px;\n}\n\n.product-details-container {\n  width: 380px;\n  margin-bottom: 50px;\n}\n\n.product-details-container .product-details-brand {\n  color: #282c3f;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0 20px 0 0;\n  font-size: 24px;\n  font-weight: 500;\n  line-height: 1;\n}\n\n.product-details-container .product-details-name {\n  color: #535665;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 5px 20px 14px 0;\n  font-size: 20px;\n  opacity: 0.8;\n  font-weight: 400;\n}\n\n.product-details-container .product-details-discountContainer {\n  color: #696e79;\n  font-size: 14px;\n  margin-bottom: 5px;\n  display: inline-block;\n}\n\n.product-details-container .product-details-discount {\n  font-size: 20px;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n  color: #ff905a;\n}\n\n.product-details-container .product-details-selling-price {\n  font-size: 16px;\n  margin: 0 0 10px;\n}\n\n.product-details-container .product-details-price {\n  font-size: 24px;\n  font-weight: 500;\n  line-height: 1;\n  color: #282c3f;\n  margin-right: 12px;\n  cursor: pointer;\n}\n\n.product-details-container .product-details-mrp {\n  height: 22px;\n  opacity: 0.8;\n  font-size: 20px;\n  line-height: 1.2;\n  color: #282c3f;\n  margin-right: 12px;\n}\n\n.product-details-container .product-details-imageWrapper {\n  width: 378px;\n  height: 504px;\n  border: 1px solid #eaeaec;\n  margin-bottom: 15px;\n  position: relative;\n}\n\n.product-details-container .product-details-imageWrapper .product-details-image {\n  width: 100%;\n  height: 100%;\n  background-position: 50%;\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: absolute;\n  z-index: 2;\n}\n\n.image-grid-container {\n  float: left;\n  width: 58%;\n}\n\n.image-grid-sep {\n  clear: both;\n}\n\n.image-grid-imageContainer {\n  height: 0;\n  padding-top: 133.3333333333%;\n  overflow: hidden;\n  position: relative;\n  border: 1px solid #f5f5f6;\n}\n\n.image-grid-imageContainer:hover {\n  cursor: crosshair;\n}\n\n.image-grid-xceleratorTag {\n  position: absolute;\n  top: 20px;\n  left: 0;\n  background: #000;\n  z-index: 2;\n  color: red;\n}\n\n.image-grid-image {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 2;\n  width: 100%;\n  height: 100%;\n  background-repeat: no-repeat;\n  background-position: 0 0;\n  background-origin: border-box;\n  background-size: cover;\n  transition: transform 0.4s;\n  will-change: transform;\n}\n\n.image-grid-image:hover {\n  transform: scale(1.04);\n}\n\n.image-grid-videoContainer .image-grid-image {\n  width: 100.5%;\n  height: 100.5%;\n}\n\n.image-grid-videoContainer .image-grid-image:hover {\n  transform: scale(1);\n}\n\n.image-grid-col50 {\n  width: 49.5%;\n  float: left;\n  margin-bottom: 1%;\n  position: relative;\n}\n\n.image-grid-col100 {\n  width: 100%;\n  position: relative;\n}\n\n.image-grid-col50:nth-child(2n) {\n  margin-left: 1%;\n}\n\n.image-grid-singleImageContainer .image-grid-col50 {\n  margin: 0 auto;\n  float: none;\n}\n\n.image-grid-similarColorsCta {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  position: absolute;\n  z-index: 4;\n  color: #000;\n  right: 20px;\n  bottom: 20px;\n  border: 1px solid #dadade;\n  line-height: 33px;\n  text-align: center;\n  overflow: hidden;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  will-change: contents;\n  background: #fff;\n}\n\n.image-grid-iconText {\n  font-weight: 500;\n  color: #ff517b;\n  vertical-align: middle;\n  visibility: hidden;\n  margin-left: 10px;\n  font-size: 14px;\n}\n\n.image-grid-similarColorsCta:hover {\n  border-radius: 42px;\n  width: 140px;\n  text-align: left;\n  padding-left: 13px;\n}\n\n.image-grid-similarColorsCta:hover .image-grid-iconText {\n  visibility: visible;\n  display: inline-block;\n  margin-top: 4px;\n}\n\n.image-grid-similarColorsIcon {\n  vertical-align: middle;\n}\n\n.image-grid-skeletonLoader {\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 99.99%;\n  height: 99.99%;\n  background: #eaeaec linear-gradient(left, #eaeaec, #dad9d9 35%, #eaeaec 70%, #eaeaec) no-repeat;\n  background-size: 800px 100%;\n  -webkit-animation: image-grid-loading-skeleton 1.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite forwards;\n  animation: image-grid-loading-skeleton 1.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite forwards;\n}\n\n.desktop-image-zoom-hide-container {\n  display: none;\n}\n\n.desktop-image-zoom-container {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  overflow-y: hidden;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 10;\n}\n\n.desktop-image-zoom-content {\n  max-width: 980px;\n  position: relative;\n  margin: 0 auto;\n  height: 100%;\n  box-shadow: 0 0 5px #d5d6d9;\n}\n\n.desktop-image-zoom-previous-icon {\n  transform: rotate(180deg);\n}\n\n.desktop-image-zoom-image-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  overflow-y: scroll;\n  cursor: all-scroll;\n  cursor: zoom-in;\n}\n\n.desktop-image-zoom-image-container::-webkit-scrollbar {\n  width: 0;\n}\n\n.desktop-image-zoom-primary-image {\n  width: 980px;\n  height: 1306px;\n}\n\n.desktop-image-zoom-thumbnail-container {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  width: 30px;\n}\n\n.desktop-image-zoom-thumbnail {\n  border: 1px solid #d5d6d9;\n  width: 30px;\n  height: 40px;\n}\n\n.desktop-image-zoom-thumbnail-button {\n  outline: 0;\n  margin-bottom: 5px;\n  border: 0;\n  padding: 0;\n  background-color: transparent;\n}\n\n.desktop-image-zoom-selected-thumbnail {\n  border: 1px solid #ff517b;\n}\n\n.desktop-image-zoom-footer {\n  background-color: #fff;\n  position: absolute;\n  min-height: 58px;\n  bottom: 0;\n  width: 100%;\n  text-align: center;\n}\n\n.desktop-image-zoom-pricing {\n  display: inline-block;\n  margin-right: 10px;\n  padding-top: 15px;\n}\n\n.desktop-image-zoom-size {\n  display: inline-block;\n}\n\n.desktop-image-zoom-selling-price {\n  font-weight: 500;\n}\n\n.desktop-image-zoom-discount {\n  display: inline-block;\n  margin: 0 15px;\n}\n\n.desktop-image-zoom-discount-text {\n  color: #f16565;\n  margin-left: 10px;\n}\n\n.desktop-image-zoom-button {\n  border-radius: 5px;\n  outline: 0;\n  margin-top: 10px;\n  padding: 10px 30px;\n  font-size: 11px;\n}\n\n.desktop-image-zoom-add-to-bag {\n  margin-left: 20px;\n  padding: 10px 40px;\n  font-size: 13px;\n  text-transform: uppercase;\n  font-weight: 500;\n  background-color: #20bd99;\n  border: 1px solid #20bd99;\n  color: #fff;\n  margin-right: 20px;\n}\n\n.desktop-image-zoom-icon {\n  outline: 0;\n  background-color: #fff;\n  padding: 10px 15px;\n  font-size: 20px;\n  color: #3e4152;\n  font-weight: 500;\n  border-radius: 4px;\n  border: 1px solid #d5d6d9;\n}\n\n.desktop-image-zoom-icon:hover {\n  background-color: #f5f5f6;\n}\n\n.desktop-image-zoom-close {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  padding: 10px 10px 7px;\n}\n\n.desktop-image-zoom-next {\n  padding: 10px 17px 8px;\n  position: absolute;\n  top: 45%;\n  right: 10px;\n}\n\n.desktop-image-zoom-previous {\n  padding: 10px 17px 8px 16px;\n  position: absolute;\n  top: 45%;\n  left: 10px;\n}\n\n.product-list-list {\n  display: flex;\n  flex-wrap: wrap;\n  margin-left: -40px;\n  margin-top: -40px;\n  padding: 0;\n}\n\n.product-list-gist {\n  padding-bottom: 14px;\n  flex: 1 0 190px;\n  box-sizing: border-box;\n  margin-left: 40px;\n  margin-top: 40px;\n  max-width: calc(16.66667% - 40px);\n  outline: 1px solid #e9e9eb;\n}\n\n.product-list-gist:hover {\n  box-shadow: 0 2px 16px 4px rgba(40, 44, 63, 0.07);\n}\n\n@media (max-width: 1400px) {\n  .product-list-gist {\n    max-width: calc(20% - 40px);\n  }\n}\n\n@media (min-width: 1599px) {\n  .product-list-gist {\n    max-width: calc(14.2857% - 40px);\n  }\n}\n\n.product-list-link {\n  text-decoration: none;\n  outline: 0;\n}\n\n.product-item-container {\n  margin: 0;\n}\n\n.product-item-image {\n  max-width: 100%;\n  height: auto;\n  background-color: #f5f5f6;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.product-item-brand {\n  font-size: 16px;\n  font-weight: 500;\n  color: #282c3f;\n  text-align: left;\n  margin: 0;\n}\n\n.product-item-title {\n  margin: 4px 0 8px;\n  color: #535766;\n  font-size: 14px;\n  text-decoration: none;\n}\n\n.product-item-pricing,\n.product-item-title {\n  width: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.product-item-pricing {\n  font-size: 16px;\n}\n\n.product-item-imageCtn {\n  height: 0;\n  padding-top: 133.3333333333%;\n  overflow: hidden;\n  position: relative;\n  background-color: #eaeaec;\n  border-bottom: 1px solid #e9e9eb;\n}\n\n.product-item-selling-price {\n  color: #282c3f;\n  padding: 0 3px 0 0;\n  font-weight: 500;\n  font-size: 16px;\n}\n\n.product-item-metaContainer {\n  padding-top: 10px;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.product-item-mrp {\n  text-decoration: line-through;\n  color: #282c3f;\n  padding: 0 3px;\n  opacity: 0.7;\n  font-size: 12px;\n}\n\n.product-item-discount {\n  color: #ff905a;\n  padding: 0 3px;\n  font-size: 12px;\n  font-weight: 500;\n}\n\n.product-item-discount b,\n.product-item-discount em {\n  font-style: normal;\n  font-weight: 400;\n}\n\n.product-item-discount .product-item-gift,\n.product-item-discount div,\n.product-item-discount p {\n  display: inline;\n}\n\n@media (max-width: 600px) {\n  .product-item-container {\n    border: 1px solid #d4d5d9;\n    margin: 0;\n    width: 180px;\n  }\n\n  .product-item-title {\n    width: 160px;\n    margin: 0 10px 10px;\n  }\n}\n\n.product-item-ratingsContainer {\n  position: absolute;\n  width: 32px;\n  height: 16px;\n  padding-left: 4px;\n  margin: -24px 0 0 6px;\n  border: 1px solid #eaeaec;\n  border-radius: 2px;\n  background: #fff;\n  font-size: 10px;\n  font-weight: 500;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.product-item-ratingsContainer .product-item-starIcon {\n  margin-left: -4px;\n  transform: scale(0.4);\n}\n\n.similar-container {\n  margin-bottom: 0;\n  padding-top: 30px;\n  clear: both;\n  padding-left: 2px;\n  padding-right: 2px;\n}\n\n.similar-heading {\n  font-size: 16px;\n  font-weight: 500;\n  text-transform: uppercase;\n  padding: 0;\n  color: #282c3f;\n  margin: 0 0 24px;\n}\n\n.similar-subtitle {\n  padding-left: 20px;\n  font-size: 13px;\n  margin-bottom: 40px;\n  color: #94989f;\n  position: absolute;\n  margin-top: 30px;\n}\n\n.similar-container:before {\n  clear: both;\n}\n\n@media (min-width: 600px) {\n  .similar-container {\n    overflow: auto;\n  }\n}\n\n@media (min-width: 980px) {\n  .similar-heading,\n.similar-subtitle {\n    padding-left: 0;\n  }\n}\n\n.crosssell-container {\n  margin-bottom: 0;\n  padding-top: 30px;\n  clear: both;\n  padding-left: 2px;\n  padding-right: 2px;\n}\n\n.crosssell-heading {\n  font-size: 16px;\n  font-weight: 500;\n  text-transform: uppercase;\n  padding: 0;\n  color: #282c3f;\n  margin: 0 0 24px;\n}\n\n.crosssell-subtitle {\n  padding-left: 20px;\n  font-size: 13px;\n  margin-bottom: 40px;\n  color: #94989f;\n  position: absolute;\n  margin-top: 30px;\n}\n\n.crosssell-container:before {\n  clear: both;\n}\n\n@media (min-width: 600px) {\n  .crosssell-container {\n    overflow: auto;\n  }\n}\n\n@media (min-width: 980px) {\n  .crosssell-heading,\n.crosssell-subtitle {\n    padding-left: 0;\n  }\n}\n\n.pincode-deliveryContainer {\n  margin-top: 30px;\n}\n\n.pincode-deliveryContainer > h4 {\n  color: #282c3f;\n  font-size: 16px;\n  margin: 0;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n\n.pincode-deliveryContainer > form {\n  margin: 16px 0 0;\n  padding: 0;\n  position: relative;\n}\n\n.pincode-button {\n  outline: 0;\n  margin-top: 10px;\n  font-size: 14px;\n  font-weight: 500;\n  background-color: #fff;\n  border: 0;\n  color: #ff3e6c;\n  text-transform: capitalize;\n}\n\n.pincode-check {\n  position: relative;\n  left: -60px;\n  background-color: transparent;\n}\n\n.pincode-heading {\n  font-size: 14px;\n  margin-bottom: 15px;\n  color: #696b79;\n  font-weight: 500;\n}\n\n.pincode-enterPincode {\n  font-size: 13px;\n  color: #282c3f;\n  margin: 8px 0 0;\n}\n\n.pincode-check-another-pincode {\n  position: relative;\n  left: -60px;\n  background-color: transparent;\n}\n\n.pincode-serviceabilityForm {\n  padding-bottom: 10px;\n}\n\n.pincode-code {\n  border-radius: 5px;\n  border: 1px solid #d4d5d9;\n  box-shadow: 0;\n  padding: 10px;\n  font-size: 16px;\n  min-width: 160px;\n  outline: 0;\n  width: 250px;\n}\n\n.pincode-code:focus {\n  outline: none;\n}\n\n.pincode-code::-moz-focus-inner {\n  border: 0;\n}\n\n.pincode-code:disabled {\n  background-color: #f4f4f5;\n  border: 1px solid #d4d5d9;\n}\n\n.pincode-checkServiceAbilityhalfCard {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.2);\n  width: 100%;\n  height: 100%;\n  z-index: 10;\n}\n\n.pincode-picodeCheckContainer {\n  position: fixed;\n  padding: 0 20px 20px;\n  bottom: 0;\n  left: 0;\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n  background-color: #fff;\n}\n\n.pincode-tick {\n  margin: 0 5px 0 0;\n}\n\n.pincode-serviceability-list {\n  margin: 16px 0 0;\n  padding: 0;\n  line-height: 20px;\n}\n\n.pincode-serviceability-list li {\n  list-style-type: none;\n  font-size: 13px;\n  color: #696e79;\n  margin-bottom: 10px;\n}\n\n.pincode-serviceability-list li h4 {\n  font-weight: 500;\n  margin: 0;\n  color: #282c3f;\n  font-size: 16px;\n  padding: 0;\n  line-height: 1.25;\n}\n\n.pincode-serviceability-list li p {\n  font-weight: 400;\n  margin: 0;\n  line-height: 1.43;\n  color: #7e808c;\n  font-size: 14px;\n}\n\n.pincode-tickcontainer {\n  height: 16px;\n  width: 16px;\n  border-radius: 16px;\n  background-color: #23c5a0;\n  position: absolute;\n  display: inline-block;\n  left: 78px;\n  top: 2px;\n  margin: 10px 0;\n  vertical-align: top;\n}\n\n.pincode-tick {\n  position: absolute;\n  top: 3px;\n  left: 6px;\n  height: 8px;\n  width: 4px;\n  border: solid #fff;\n  border-width: 0 1px 1px 0;\n  transform: rotate(45deg);\n  box-sizing: border-box;\n}\n\n.pincode-tickSmallContainer {\n  height: 8px;\n  width: 8px;\n  border-radius: 8px;\n  background-color: #7e808c;\n  display: inline-block;\n  vertical-align: top;\n  position: relative;\n  margin: 6px 10px 0 0;\n}\n\n.pincode-tickSmall {\n  top: 2px;\n  left: 3px;\n  height: 4px;\n  width: 2px;\n}\n\n.pincode-serviceabilityContainer {\n  display: inline-block;\n  vertical-align: top;\n  width: 90%;\n}\n\n.pincode-serviceabilityTitle {\n  color: #535766;\n  display: inline-block;\n  overflow-wrap: break-word;\n  vertical-align: middle;\n}\n\n.pincode-serviceabilityItem {\n  max-width: 500px;\n}\n\n.pincode-serviceabilityIcon {\n  width: 40px;\n  height: 40px;\n  margin-right: 20px;\n  vertical-align: middle;\n}\n\n.pincode-serviceabilityViewMore {\n  vertical-align: middle;\n  cursor: pointer;\n  font-weight: 500;\n  color: #ff3e6c;\n  float: right;\n  margin: 10px 16px 0 0;\n  font-size: 13px;\n}\n\n.pincode-rightArrow {\n  width: 16px;\n  transform: rotate(270deg);\n  vertical-align: text-top;\n}\n\n.pincode-error {\n  color: #ff5722;\n  font-size: 15px;\n}\n\n@media only screen and (min-width: 425px) {\n  .pincode-checkServiceAbilityhalfCard {\n    position: static;\n    background-color: #fff;\n    height: auto;\n  }\n\n  .pincode-picodeCheckContainer {\n    position: static;\n    margin: 0;\n    padding: 0;\n  }\n}\n\n@media (max-width: 424px) and (min-width: 320px) {\n  .pincode-checkServiceAbilityhalfCard {\n    position: static;\n    background-color: #fff;\n    height: auto;\n  }\n\n  .pincode-picodeCheckContainer {\n    position: static;\n    margin: 0;\n    padding: 0;\n  }\n}\n\n.pincode-deliveryOptionsIcon {\n  vertical-align: middle;\n  margin-left: 5px;\n}\n\n@media (min-width: 425px) and (max-width: 768px) {\n  .margina {\n    margin-top: 0px;\n  }\n\n  .image-grid-container {\n    width: 100%;\n    margin-bottom: 18px;\n  }\n\n  .pdp-pdp-container {\n    min-width: 426px;\n  }\n\n  .pdp-fixed {\n    position: relative;\n  }\n\n  .pdp-description-container {\n    margin-top: 20px;\n    width: 100%;\n  }\n\n  .pdp-add-to-bag {\n    flex: 2;\n  }\n\n  .breadcrumbs-container {\n    padding-bottom: 0px;\n    padding-top: 10px;\n  }\n}\n\n@media (min-width: 375px) and (max-width: 425px) {\n  .margina {\n    margin-top: 0px;\n  }\n\n  .image-grid-container {\n    width: 100%;\n    margin-bottom: 18px;\n  }\n\n  .pdp-pdp-container {\n    min-width: 360px;\n  }\n\n  .pdp-description-container {\n    margin-top: 20px;\n    width: 100%;\n  }\n\n  .pdp-fixed {\n    position: inherit;\n  }\n\n  .pdp-add-to-wishlist {\n    width: 70%;\n  }\n\n  .breadcrumbs-container {\n    padding-bottom: 0px;\n    padding-top: 10px;\n  }\n}\n\n@media (min-width: 320px) and (max-width: 374px) {\n  .margina {\n    margin-top: 0px;\n  }\n\n  .pdp-add-to-bag {\n    min-width: 88px;\n  }\n\n  .image-grid-container {\n    width: 100%;\n    margin-bottom: 18px;\n  }\n\n  .pdp-pdp-container {\n    min-width: 280px;\n  }\n\n  .pdp-description-container {\n    margin-top: 20px;\n    width: 100%;\n  }\n\n  .pn-check {\n    left: 190px;\n    top: -43px;\n  }\n\n  .pdp-fixed {\n    position: inherit;\n  }\n\n  .pdp-add-to-wishlist {\n    width: 50%;\n  }\n\n  .breadcrumbs-container {\n    padding-bottom: 0px;\n    padding-top: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYmR1cmFobWFudC9Eb3dubG9hZHMvbmFzZWVtbmFtYXRoLWUtY29tbWVyY2UtYmY1MzkxMDc1ZmQyL3NyYy9hcHAvaG9tZS9wcm9kdWN0LWRldGFpbHMvcHJvZHVjdC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL3Byb2R1Y3QtZGV0YWlscy9wcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTs7RUFFRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBOztFQUVFLGFBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQ0FBQTtBQ0NGOztBRENBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNFRjs7QURDQTs7RUFFRSxjQUFBO0VBQ0Esa0JBQUE7QUNFRjs7QURDQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDRUY7O0FEQ0E7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBRUEsNEJBQUE7RUFFQSxnQkFBQTtFQUNBLFVBQUE7RUFFQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDRUY7O0FEQ0E7OztFQUdFLGFBQUE7QUNFRjs7QURDQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDRUY7O0FEQ0E7RUFDRSx5QkFBQTtBQ0VGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUVBLGtDQUFBO0VBRUEsMEJBQUE7RUFDQSw0REFBQTtFQUNBLFdBQUE7QUNFRjs7QURDQTs7OztFQUlFLGFBQUE7QUNFRjs7QURDQTs7OztFQUtFLG1CQUFBO0VBQ0EsVUFBQTtBQ0VGOztBRENBO0VBQ0UsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNFRjs7QURDQTtFQUNFLHdCQUFBO0FDRUY7O0FEQ0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNFRjs7QURDQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQ0VGOztBRENBO0VBQ0Usc0JBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0VGOztBRENBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0VGOztBRENBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNFRjs7QURDQTtFQUNFLDZCQUFBO0VBQ0EsaUJBQUE7QUNFRjs7QURDQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0VGOztBRENBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FDRUY7O0FEQ0E7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9DQUFBO0FDRUY7O0FEQ0E7RUFDRSxrQkFBQTtBQ0VGOztBRENBO0VBQ0UsZ0NBQUE7QUNFRjs7QURDQTtFQUNFLGlCQUFBO0FDRUY7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLGlDQUFBO0FDRUY7O0FEQ0E7RUFDRSxnQkFBQTtBQ0VGOztBRENBO0VBQ0Usa0JBQUE7QUNFRjs7QURDQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0VGOztBRENBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FDRUY7O0FEQ0E7RUFDRSxtQkFBQTtBQ0VGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDRUY7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0VBQ0EsU0FBQTtBQ0VGOztBRENBO0VBQ0UsMkJBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNFRjs7QURDQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNFRjs7QURDQTtFQUdFLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNFRjs7QURDQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUdBLE9BQUE7QUNFRjs7QURDQTtFQUNFLHNCQUFBO0FDRUY7O0FEQ0E7RUFDRSxtQkFBQTtBQ0VGOztBRENBO0VBRUUscUJBQUE7RUFDQSxnQkFBQTtBQ0VGOztBRENBO0VBRUUscUJBQUE7RUFDQSxnQkFBQTtBQ0VGOztBRENBO0VBQ0UsaUJBQUE7QUNFRjs7QURDQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0FDRUY7O0FEQ0E7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUdBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0VGOztBRENBO0VBQ0UseUJBQUE7QUNFRjs7QURDQTtFQUNFLGVBQUE7QUNFRjs7QURDQTtFQUNFLFdBQUE7RUFFQSxzQkFBQTtBQ0VGOztBRENBO0VBQ0UsZUFBQTtBQ0VGOztBRENBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUdBLE9BQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FDRUY7O0FEQ0E7RUFDRSxrQkFBQTtFQUVBLHFCQUFBO0FDRUY7O0FEQ0E7RUFDRSx5QkFBQTtBQ0VGOztBRENBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUNFRjs7QURDQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQ0VGOztBRENBO0VBQ0Usc0JBQUE7RUFFQSxzQkFBQTtBQ0VGOztBRENBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0VGOztBRENBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0VGOztBRENBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQ0VGOztBRENBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQ0VGOztBRENBO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FDRUY7O0FEQ0E7RUFDRSxhQUFBO0FDRUY7O0FEQ0E7RUFDRSxTQUFBO0FDRUY7O0FEQ0E7RUFDRSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNFRjs7QURDQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUNFRjs7QURDQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxxQkFBQTtBQ0VGOztBRENBO0VBQ0UsNkJBQUE7RUFDQSxvQkFBQTtBQ0VGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNFRjs7QURDQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0VGOztBRENBO0VBQ0UsY0FBQTtBQ0VGOztBRENBO0VBQ0UscUJBQUE7RUFDQSwrQkFBQTtFQUNBLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FDRUY7O0FEQ0E7O0VBRUUsY0FBQTtFQUNBLGVBQUE7QUNFRjs7QURDQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNFRjs7QURDQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ0VGOztBRENBO0VBQ0UsZ0JBQUE7QUNFRjs7QURDQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDRUY7O0FEQ0E7RUFDRSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0VGOztBRENBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUNFRjs7QURDQTtFQUNFLGFBQUE7QUNFRjs7QURDQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFB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a0RBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUMvQ0Y7O0FEa0RBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFHQSxjQUFBO0FDL0NGOztBRGtEQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FDL0NGOztBRGtEQTtFQUNFLGlCQUFBO0FDL0NGOztBRGtEQTtFQUNFLHFCQUFBO0VBR0EsT0FBQTtFQUNBLG1CQUFBO0FDL0NGOztBRGtEQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUMvQ0Y7O0FEa0RBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUMvQ0Y7O0FEa0RBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDL0NGOztBRGtEQTtFQUNFLGFBQUE7QUMvQ0Y7O0FEa0RBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUMvQ0Y7O0FEa0RBO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUVBLHdCQUFBO0VBQ0Esa0JBQUE7QUMvQ0Y7O0FEa0RBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBRUEscUJBQUE7QUMvQ0Y7O0FEa0RBO0VBR0UsYUFBQTtFQUlBLG1CQUFBO0VBR0EsMkJBQUE7RUFHQSx1QkFBQTtFQUVBLGlCQUFBO0FDL0NGOztBRGtEQTtFQUNFLGdCQUFBO0FDL0NGOztBRGtEQTtFQUNFLGVBQUE7QUMvQ0Y7O0FEa0RBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUMvQ0Y7O0FEa0RBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7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c3JjL2FwcC9ob21lL3Byb2R1Y3QtZGV0YWlscy9wcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFyZ2luYSB7XG4gIG1hcmdpbi10b3A6MzBweFxufVxuXG4ucGRwLXBkcC1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDE2MDBweDtcbiAgbWluLXdpZHRoOiAxMTI4cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDcwMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAyOHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmXG59XG5cbi5wZHAtbW9iaWxlSW1hZ2Vab29tLFxuLnBkcC1wZHAtem9vbS1jb250YWluZXIge1xuICB6LWluZGV4OiAxNVxufVxuXG4ucGRwLWhlYXJ0QnV0dG9uSWNvbiB7XG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0xcHg7XG4gIHJpZ2h0OiA2cHhcbn1cblxuLnBkcC1kZXRhaWxzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlXG59XG5cbi5wZHAtZGVzY3JpcHRpb24tY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTBweFxufVxuXG4ucGRwLXRpdGxlIHtcbiAgY29sb3I6ICMyODJjM2Y7XG4gIHBhZGRpbmc6IDAgMjBweCAwIDA7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDFcbn1cblxuLnBkcC1uYW1lLFxuLnBkcC10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDBcbn1cblxuLnBkcC1uYW1lIHtcbiAgY29sb3I6ICM1MzU2NjU7XG4gIHBhZGRpbmc6IDVweCAyMHB4IDE0cHggMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBvcGFjaXR5OiAuODtcbiAgZm9udC13ZWlnaHQ6IDQwMFxufVxuXG4ucGRwLVBQQ291cG9uSW5mbyB7XG4gIHdpZHRoOiAxOTlweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjM2U0MTUyXG59XG5cbi5wZHAtc2VsbGluZy1wcmljZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZVxufVxuXG4ucGRwLWRpc2NvdW50LWNvbnRhaW5lciB7XG4gIGNvbG9yOiAjNjk2ZTc5O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrXG59XG5cbi5wZHAtZGlzY291bnQge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAuNXB4O1xuICBjb2xvcjogI2ZmOTA1YVxufVxuXG4ucGRwLXNlbGxpbmctcHJpY2Uge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbjogMCAwIDEwcHhcbn1cblxuLnBkcC1zaW1pbGFye1xuICBiYWNrZ3JvdW5kOiB1cmwoLi8uLi8uLi8uLi9hc3NldHMvTmF2L21vYmlsZS1pY29uLnBuZylcbn1cbi5wZHAtcHJpY2Uge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjdXJzb3I6IHBvaW50ZXJcbn1cblxuLnBkcC1tcnAsXG4ucGRwLXByaWNlIHtcbiAgY29sb3I6ICMyODJjM2Y7XG4gIG1hcmdpbi1yaWdodDogMTJweFxufVxuXG4ucGRwLW1ycCB7XG4gIGhlaWdodDogMjJweDtcbiAgb3BhY2l0eTogLjg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDEuMlxufVxuXG4ucGRwLW1ycC12ZXJiaWFnZSB7XG4gIG1pbi13aWR0aDogMjcwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UzZTNlMztcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogOHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAxMnB4ICNkM2QzZDM7XG4gIGJveC1zaGFkb3c6IDAgMCAxMnB4ICNkM2QzZDM7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjJzO1xuICB0cmFuc2l0aW9uOiAuMnM7XG4gIG9wYWNpdHk6IDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSguMDAxKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSguMDAxKTtcbiAgY29sb3I6ICMyODJjM2Y7XG4gIGZvbnQtc2l6ZTogMTRweFxufVxuXG4ucGRwLW1ycC12ZXJiaWFnZSBkaXY6Zmlyc3QtY2hpbGQsXG4ucGRwLW1ycC12ZXJiaWFnZSBkaXY6bnRoLWNoaWxkKDUpLFxuLnBkcC1tcnAtdmVyYmlhZ2UgZGl2Om50aC1jaGlsZCg3KSB7XG4gIG1hcmdpbjogOHB4IDBcbn1cblxuLnBkcC1tcnAtdmVyYmlhZ2UgLnBkcC1tcnAtdmVyYmlhZ2UtYW10IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tbGVmdDogMjBweFxufVxuXG4ucGRwLW1ycC12ZXJiaWFnZSBociB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlM2UzZTNcbn1cblxuLnBkcC1tcnAtdmVyYmlhZ2U6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDElO1xuICBsZWZ0OiAyMCU7XG4gIG1hcmdpbjogLS4yNWVtO1xuICB3aWR0aDogLjVlbTtcbiAgaGVpZ2h0OiAuNWVtO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDEwcHggMTBweCAxMnB4ICNkM2QzZDM7XG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAxMnB4ICNkM2QzZDM7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjZmZmIDUwJSwgdHJhbnNwYXJlbnQgMCk7XG4gIGNvbnRlbnQ6IFwiXCJcbn1cblxuLnBkcC1tcnAtdmVyYmlhZ2U6YWN0aXZlLFxuLnBkcC1tcnAtdmVyYmlhZ2U6Zm9jdXMsXG4ucGRwLXByaWNlOmFjdGl2ZSxcbi5wZHAtcHJpY2U6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lXG59XG5cbi5wZHAtbXJwLXZlcmJpYWdlOmFjdGl2ZSxcbi5wZHAtbXJwLXZlcmJpYWdlOmZvY3VzLFxuLnBkcC1wcmljZTphY3RpdmUrLnBkcC1tcnAtdmVyYmlhZ2UsXG4ucGRwLXByaWNlOmZvY3VzKy5wZHAtbXJwLXZlcmJpYWdlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICBvcGFjaXR5OiAxXG59XG5cbi5wZHAtb2ZmZXIge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgb3V0bGluZTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBjb2xvcjogIzUyNmNkMDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgYm9yZGVyLXRvcDogMXB4IGRvdHRlZCAjZDVkNmQ5O1xuICB3aWR0aDogOTglO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLXRvcDogMjJweFxufVxuXG4ucGRwLWJvZ28tY29udGFpbmVyIHtcbiAgbWFyZ2luOiAxMHB4IDIwcHggMTBweCAwXG59XG5cbi5wZHAtY291cG9uLWluZm8ge1xuICBwYWRkaW5nOiAxcHggMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDRkNWQ5XG59XG5cbi5wZHAtY291cG9uLXNlY3Rpb24tdGl0bGUge1xuICBtaW4td2lkdGg6IDEwMHB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiAjNTM1NzY2O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcbn1cblxuLnBkcC1jb3Vwb24tbGFiZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBkYXNoZWQgIzUzNTc2NjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nOiAwIDVweDtcbiAgY29sb3I6ICMyMGJkOTlcbn1cblxuLnBkcC1jb3Vwb24tZGVzY3JpcHRpb24ge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNTM1NzY2XG59XG5cbi5wZHAtY291cG9uQXRCZXN0UHJpY2Uge1xuICBjb2xvcjogIzUzNTc2NjtcbiAgZm9udC1zaXplOiAxM3B4XG59XG5cbi5wZHAtY291cG9uLWVtaS1pbmZvIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkNGQ1ZDk7XG4gIHBhZGRpbmctdG9wOiAxMHB4XG59XG5cbi5wZHAtb2ZmZXItYmFkZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjE2NTY1O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZzogMnB4IDdweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIG1hcmdpbi1yaWdodDogNXB4XG59XG5cbi5wZHAtYm9nby1saW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzk0OTg5ZlxufVxuXG4ucGRwLWJvZ28ge1xuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnRcbn1cblxuLnBkcC1ib2dvIGVtIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsXG59XG5cbi5wZHAtYm9nbzpob3ZlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDVkNmQ5XG59XG5cbi5wZHAtcHJpY2UtaW5mbyB7XG4gIHBhZGRpbmc6IDAgMCAxMHB4XG59XG5cbi5wZHAtZ2xvYmFsLXByb2R1Y3Qge1xuICBtYXJnaW46IDAgMCAwIDIwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgI2Q1ZDZkOVxufVxuXG4ucGRwLWdsb2JhbEhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDBcbn1cblxuLnBkcC1nbG9iYWxEZXNjIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlXG59XG5cbi5wZHAtZ2xvYmFsU3ViVGV4dCB7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogIzk0OTY5ZlxufVxuXG4ucGRwLWdsb2JhbFBvaW50IHtcbiAgbWFyZ2luOiAwIDAgMTBweDtcbiAgY29sb3I6ICMzZTQxNTJcbn1cblxuLnBkcC1ncC0xIHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweFxufVxuXG4ucGRwLWdsb2JhbFJlYWRNb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiA4MnB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICM1MjZjZDBcbn1cblxuLnBkcC1jbG9zZS1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogNHB4O1xuICB0b3A6IDA7XG4gIHJpZ2h0OiA1cHg7XG4gIGNvbG9yOiAjM2U0MTUyO1xuICBvdXRsaW5lOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwXG59XG5cbi5wZHAtY2hldnJvbi1yaWdodCB7XG4gIGJhY2tncm91bmQtc2l6ZTogNTQycHggNDBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE5NHB4IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgaGVpZ2h0OiAxNHB4O1xuICB3aWR0aDogNXB4XG59XG5cbi5wZHAtYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBvdXRsaW5lOiAwO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWluLWhlaWdodDogMjJweFxufVxuXG4ucGRwLWFjdGlvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIG1hcmdpbi10b3A6IDE1cHhcbn1cblxuLnBkcC1nb1RvQ2FydCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIC13ZWJraXQtYm94LWZsZXg6IDI7XG4gIC1tcy1mbGV4OiAyO1xuICBmbGV4OiAyXG59XG5cbi5wZHAtZ29Ub0NhcnQgLnBkcC1hZGQtdG8tYmFnIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudFxufVxuXG4ucGRwLWdvVG9DYXJ0IHNwYW4ge1xuICB2ZXJ0aWNhbC1hbGlnbjogc3ViXG59XG5cbi5wZHAtd2hpdGVXaXNobGlzdEljb24ge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLjUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKC41KTtcbiAgbWFyZ2luOiAtMnB4IDhweFxufVxuXG4ucGRwLWRhcmtXaXNobGlzdEljb24ge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICBtYXJnaW46IC0ycHggOHB4XG59XG5cbi5wZHAtd2hpdGVSaWdodEFycm93IHtcbiAgbWFyZ2luOiAtNHB4IDEwcHhcbn1cblxuLnBkcC1maXhlZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwXG59XG5cbi5wZHAtYWRkLXRvLWJhZyB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHBhZGRpbmc6IDEycHggMTVweDtcbiAgbWluLXdpZHRoOiAxMDhweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzZTZjO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmYzZTZjO1xuICBjb2xvcjogI2ZmZjtcbiAgLXdlYmtpdC1ib3gtZmxleDogMztcbiAgLW1zLWZsZXg6IDM7XG4gIGZsZXg6IDM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1yaWdodDogMyVcbn1cblxuLnBkcC1hZGQtdG8tYmFnOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTI3YlxufVxuXG4ucGRwLWFkZC10by1iYWctd2l0aC1wcmlvciB7XG4gIHBhZGRpbmc6IDEycHggMFxufVxuXG4ucGRwLWFkZC10by1iYWctZnVsbCB7XG4gIHdpZHRoOiAxMDAlO1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3hcbn1cblxuLnBkcC1hZGQtdG8tYmFnLWZ1bGwtd2l0aC1wcmlvciB7XG4gIHBhZGRpbmc6IDEycHggMFxufVxuXG4ucGRwLWFkZC10by13aXNobGlzdCB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHBhZGRpbmc6IDEycHggMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LWJveC1mbGV4OiAyO1xuICAtbXMtZmxleDogMjtcbiAgZmxleDogMjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZDVkOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgbGV0dGVyLXNwYWNpbmc6IC40cHg7XG4gIGNvbG9yOiAjMjgyYzNmXG59XG5cbi5wZHAtd2hpdGVCYWcge1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSguOSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoLjkpXG59XG5cbi5wZHAtYWRkLXRvLXdpc2hsaXN0OmhvdmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzUzNTc2NlxufVxuXG4ucGRwLWFkZC10by13aXNobGlzdC1kaXNhYmxlZCB7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjN2U4MThjO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTM1NzY2XG59XG5cbi5wZHAtYWRkLXRvLXdpc2hsaXN0LWRpc2FibGVkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUzNTc2NjtcbiAgY3Vyc29yOiBkZWZhdWx0XG59XG5cbi5wZHAtYWRkLXRvLXdpc2hsaXN0LWZ1bGwge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3hcbn1cblxuLnBkcC1zaXplLWNoYXJ0LWRlc2NyaXB0aW9uIHtcbiAgY29sb3I6ICMyODJjM2Y7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDEuNVxufVxuXG4ucGRwLXN0eWxlLW5vdGUge1xuICBjb2xvcjogIzY5NmU3OTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS40XG59XG5cbi5wZHAtcHJvZHVjdC1kZXNjcmlwdGlvbi10aXRsZSB7XG4gIGNvbG9yOiAjMjgyYzNmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZVxufVxuXG4ucGRwLXByb2R1Y3QtZGVzY3JpcHRpb24tY29udGVudCB7XG4gIGNvbG9yOiAjMjgyYzNmO1xuICBsaW5lLWhlaWdodDogMS40O1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIHdpZHRoOiA4NCVcbn1cblxuLnBkcC1wcm9kdWN0LWRlc2NyaXB0aW9uLWNvbnRlbnQgYiB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogMTZweFxufVxuXG4ucGRwLXByb2R1Y3QtZGVzY3JpcHRpb24tY29udGVudCBiOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXRvcDogMFxufVxuXG4ucGRwLXByb2R1Y3QtZGVzY3JpcHRpb24tY29udGVudCBwIHtcbiAgbWFyZ2luOiAwXG59XG5cbi5wZHAtcmV0dXJuYWJsZS1jb250ZW50IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tdG9wOiAxNHB4IDAgMCAwO1xuICBwYWRkaW5nOiAwIDIwcHggMCAwO1xuICBjb2xvcjogIzI4MmMzZlxufVxuXG4ucGRwLXBpbi1jb2RlLWxhYmVsIHtcbiAgY29sb3I6ICMxMThiZWI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgb3V0bGluZTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZy1sZWZ0OiAwXG59XG5cbi5wZHAtb2ZmZXJjaGVjayB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTJweDtcbiAgbWFyZ2luOiAwIDEwcHggMCAyMHB4XG59XG5cbi5wZHAtb2ZmZXJDaGVja1RleHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJUYXAgZm9yIGJlc3QgcHJpY2VcIjtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmVcbn1cblxuLnBkcC1lcnJvci1tZXNzYWdlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbjogMjAwcHggMTBweDtcbiAgY29sb3I6ICNmMTY1NjVcbn1cblxuLnBkcC1wb3N0LXNhbGUtcHJpY2Uge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi10b3A6IC0xN3B4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6ICM2OTZlNzlcbn1cblxuLnBkcC1mdXR1cmUtcHJpY2Uge1xuICBjb2xvcjogIzI4MmMzZlxufVxuXG4ucGRwLXByZW9yZGVyLXNjYXJjaXR5IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjogcmdiYSgyNTUsIDYzLCAxMDgsIC42NSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCA2MywgMTA4LCAuNjUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIHBhZGRpbmc6IDJweCA5cHg7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlXG59XG5cbi5wZHAtcHJlb3JkZXItZGlzY2xhaW1lcixcbi5wZHAtcHJlb3JkZXItbGF1bmNoLWRhdGUge1xuICBjb2xvcjogIzI4MmMzZjtcbiAgZm9udC1zaXplOiAxNHB4XG59XG5cbi5wZHAtcHJlb3JkZXItZGlzY2xhaW1lci10ZXh0IHtcbiAgY29sb3I6ICM3ZTgxOGM7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogOHB4IDAgMFxufVxuXG4ucGRwLXByZW9yZGVyLWRhdGUge1xuICBjb2xvcjogI2ZmNTcyMjtcbiAgZm9udC13ZWlnaHQ6IDUwMFxufVxuXG4ucGRwLXNpemVDaGFydEluZm8ge1xuICBtYXJnaW4tdG9wOiAxNHB4XG59XG5cbi5wZHAtc2l6ZUZpdERlc2Mge1xuICBmb250LXdlaWdodDogNDAwO1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbi10b3A6IDEycHhcbn1cblxuLnBkcC1zaXplRml0RGVzY1RpdGxlIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4XG59XG5cbi5wZHAtc2l6ZUZpdERlc2NDb250ZW50IHtcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogOTAlXG59XG5cbi5wZHAtaW5wdXRQcm9kdWN0RGV0YWlscyB7XG4gIGRpc3BsYXk6IG5vbmVcbn1cblxuLnBkcC1pbnB1dFByb2R1Y3REZXRhaWxzTGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGNvbG9yOiAjNjk2Yjc5O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDBcbn1cblxuLnBkcC1leHBhbmRQcm9kdWN0RGV0YWlscyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50XG59XG5cbi5wZHAtZXhwYW5kUHJvZHVjdERldGFpbHM6YmVmb3JlIHtcbiAgY29udGVudDogXCIrXCI7XG4gIGZvbnQtc2l6ZTogMThweFxufVxuXG5pbnB1dC5wZHAtaW5wdXRQcm9kdWN0RGV0YWlsc1t0eXBlPWNoZWNrYm94XTpjaGVja2VkfmxhYmVsIHtcbiAgZGlzcGxheTogbm9uZVxufVxuXG4ucGRwLXByb2R1Y3REZXNjcmlwdG9yc0NvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDMwcHhcbn1cblxuLnBkcC1wcm9kdWN0RGVzY3JpcHRvcnNDb250YWluZXIgdWwge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDAgMCAxMHB4XG59XG5cbi5wZHAtcHJvZHVjdERlc2NyaXB0b3JzIHtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDRkNWQ5XG59XG5cbi5wZHAtdmF0SW5mbyB7XG4gIGNvbG9yOiAjMDNhNjg1O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDVweCAxMHB4IDAgMFxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDo0MjVweCkge1xuICAucGRwLWltYWdlLWNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiAzNjBweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogMVxuICB9XG5cbiAgLnBkcC1wcmljZS1pbmZvIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDBcbiAgfVxuXG4gIC5wZHAtb2ZmZXJDaGVja1RleHQ6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIkNoZWNrIGZvciBvZmZlclwiO1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lXG4gIH1cblxuICAucGRwLXNlbGVjdGVkLWltYWdlIHtcbiAgICB3aWR0aDogMzYwcHg7XG4gICAgaGVpZ2h0OiA0ODBweFxuICB9XG5cbiAgLnBkcC1kZXNjcmlwdGlvbi1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDBcbiAgfVxuXG4gIC5wZHAtb2ZmZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm9yZGVyLXRvcDogMDtcbiAgICB3aWR0aDogYXV0bztcbiAgICB0b3A6IDA7XG4gICAgcGFkZGluZzogMCAwIDAgMjBweDtcbiAgICBtYXJnaW4tdG9wOiAyM3B4XG4gIH1cblxuICAucGRwLWlucHV0UHJvZHVjdERldGFpbHNMYWJlbCB7XG4gICAgZGlzcGxheTogbm9uZVxuICB9XG5cbiAgLnBkcC1maXhlZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlXG4gIH1cblxuICAucGRwLWFjdGlvbi1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgei1pbmRleDogMDtcbiAgICB3aWR0aDogODQlXG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6NDI0cHgpIHtcbiAgLnBkcC1hY3Rpb24tY29udGFpbmVyIHtcbiAgICBmb250LXNpemU6IDA7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZGlzcGxheTogYmxvY2tcbiAgfVxuXG4gIC5wZHAtYWN0aW9uLWNvbnRhaW5lciAucGRwLWdvVG9DYXJ0LFxuICAucGRwLWFjdGlvbi1jb250YWluZXIgYnV0dG9uIHtcbiAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgZmxvYXQ6IGxlZnRcbiAgfVxuXG4gIC5wZHAtYWRkLXRvLXdpc2hsaXN0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBwYWRkaW5nOiAxNHB4IDE1cHhcbiAgfVxuXG4gIC5wZHAtYWRkLXRvLWJhZyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA3MCVcbiAgfVxuXG4gIC5wZHAtYWRkLXRvLWJhZyAucGRwLXdoaXRlQmFnIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIG1hcmdpbjogMCA4cHggMCAwXG4gIH1cblxuICAucGRwLWFkZC10by1iYWcgc3BhbiB7XG4gICAgdmVydGljYWwtYWxpZ246IHN1YlxuICB9XG5cbiAgLnBkcC1hZGQtdG8tYmFnLnBkcC1hZGQtdG8tYmFnLWZ1bGwge1xuICAgIHdpZHRoOiAxMDAlXG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6MzIwcHgpIHtcbiAgLnBkcC1hZGQtdG8tYmFnIHtcbiAgICBtaW4td2lkdGg6IDg4cHhcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDozNjBweCkge1xuICAucGRwLWFkZC10by1iYWcge1xuICAgIG1pbi13aWR0aDogMTA4cHhcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDo5ODBweCkge1xuICAucGRwLXBkcC1jb250YWluZXIge1xuICAgIG1pbi1oZWlnaHQ6IDkxMHB4XG4gIH1cblxuICAucGRwLWJvZ28tY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDEwcHggMCAxNnB4XG4gIH1cblxuICAucGRwLWltYWdlLWNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA1NDBweFxuICB9XG5cbiAgLnBkcC1zZWxlY3RlZC1pbWFnZSB7XG4gICAgd2lkdGg6IDU0MHB4O1xuICAgIGhlaWdodDogNzIwcHhcbiAgfVxuXG4gIC5wZHAtZGVzY3JpcHRpb24tY29udGFpbmVyIHtcbiAgICBtaW4taGVpZ2h0OiA4MjBweDtcbiAgICB3aWR0aDogNDIlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmc6IDAgMCAwIDMwcHg7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3hcbiAgfVxuXG4gIC5wZHAtYWRkLXRvLWJhZyxcbiAgLnBkcC1hZGQtdG8td2lzaGxpc3Qge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4XG4gIH1cblxuICAucGRwLWFkZC10by13aXNobGlzdCB7XG4gICAgd2lkdGg6IDM0JTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweCAwXG4gIH1cblxuICAucGRwLWFkZC10by13aXNobGlzdC1mdWxsIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94XG4gIH1cblxuICAucGRwLWFkZC10by1iYWcge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxNXB4IDBcbiAgfVxuXG4gIC5wZHAtYWRkLXRvLWJhZy13aXRoLXByaW9yIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTJweCAwXG4gIH1cblxuICAucGRwLWFkZC10by1iYWctZnVsbCxcbiAgLnBkcC1hZGQtdG8tYmFnLWZ1bGwtd2l0aC1wcm9pciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3hcbiAgfVxuXG4gIC5wZHAtcG9zdC1zYWxlLXByaWNlIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbi10b3A6IDIwcHhcbiAgfVxufVxuXG4ucGRwLWVtaVBsYW5zQ29udGFpbmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjgpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMTBcbn1cblxuLnBkcC1lbWlQbGFuc0NvbnRhaW5lciAucGRwLWVtaUlubmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDUwJTtcbiAgbWFyZ2luLXRvcDogLTIyMHB4O1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtMzMwcHg7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDY2MHB4O1xuICBoZWlnaHQ6IDQ0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgLjIpO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIC4yKTtcbiAgb3ZlcmZsb3c6IGhpZGRlblxufVxuXG5AbWVkaWEgKG1heC13aWR0aDo0ODBweCkge1xuICAucGRwLWVtaVBsYW5zQ29udGFpbmVyIC5wZHAtZW1pSW5uZXIge1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGF1dG9cbiAgfVxufVxuXG4ucGRwLWVtaU1vZGFsY2xvc2Uge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IC43O1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDMwcHg7XG4gIHRvcDogMjRweFxufVxuXG4ucGRwLWRpc2NvdW50VGltZXIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IDExcHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYwZjQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmc6IDZweFxufVxuXG4ucGRwLWRpc2NvdW50VGltZXIgLnBkcC10aW1lclRpdGxlIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGNvbG9yOiAjMjgyYzNmO1xuICBsZXR0ZXItc3BhY2luZzogLS41cHhcbn1cblxuLnBkcC1kaXNjb3VudFRpbWVyIC5wZHAtZGlzY291bnRUaW1lIHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0uNXB4O1xuICBjb2xvcjogI2ZmM2Y2YztcbiAgZm9udC1mYW1pbHk6IGhlbHZldGljYSwgV2hpdG5leVxufVxuXG4ucGRwLWRpc2NvdW50VGltZXIgLnBkcC1kaXNjb3VudFRpbWUgYiB7XG4gIGZvbnQtd2VpZ2h0OiA4MDBcbn1cblxuLnBkcC1kaXNjb3VudFRpbWVyIC5wZHAtZGlzY291bnRUaW1lclNlcCB7XG4gIG1hcmdpbjogMCA1cHhcbn1cblxuLnBkcC1kaXNjb3VudFRpbWVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLXRvcDogMTVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiAxNXB4IHNvbGlkICNmZmYwZjQ7XG4gIGJvcmRlci1ib3R0b206IDE1cHggc29saWQgdHJhbnNwYXJlbnRcbn1cblxuLnBkcC1sb3lhbHR5Q29udGFpbmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kOiAjZmZmNWU0O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMjFweDtcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4XG59XG5cbi5wZHAtbG95YWx0eWNvaW4ge1xuICBoZWlnaHQ6IDE1cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDE1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAycHhcbn1cblxuLnBkcC1mbGV4IHtcbiAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtYm94O1xuICBkaXNwbGF5OiAtbXMtaW5saW5lLWZsZXhib3g7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4XG59XG5cbi5wZHAtZmxleC5wZHAtY2VudGVyIHtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyXG59XG5cbi5wZHAtZmxleC5wZHAtY29sdW1uIHtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXG59XG5cbi5wZHAtZmxleC5wZHAtYWxpZ24tc3RhcnQge1xuICAtd2Via2l0LWJveC1hbGlnbjogc3RhcnQ7XG4gIC1tcy1mbGV4LWFsaWduOiBzdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnRcbn1cblxuLnBkcC1lb3JzVGV4dCxcbi5wZHAtdGV4dC0xMCB7XG4gIGZvbnQtc2l6ZTogMTBweFxufVxuXG4ucGRwLWVvcnNUZXh0IHtcbiAgY29sb3I6ICNhOWE5YTlcbn1cblxuLnBkcC13aXNobGlzdE5vdyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuM1xufVxuXG4ucGRwLWRpc2FibGVTcHJpdGUge1xuICBkaXNwbGF5OiBub25lXG59XG5cbi5wZHAtb3V0T2ZTdG9ja1RleHQge1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiAjYTlhOWE5XG59XG5cbi5wZHAtcGRwQnV0dG9uV2lzaGxpc3ROb3cge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA0NSUgIWltcG9ydGFudFxufVxuXG4ucGRwLXByb2R1Y3REZXRhaWxzSWNvbiB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbi1sZWZ0OiA1cHhcbn1cblxuLnBkcC1vdXQtb2Ytc3RvY2sge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmZjMGM2O1xuICBjdXJzb3I6IGF1dG9cbn1cblxuLnBkcC1vdXQtb2Ytc3RvY2ssXG4ucGRwLW91dC1vZi1zdG9jazpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZmMwYzZcbn1cblxuLnBkcC1wcmlvcml0eS1vdXQtb2Ytc3RvY2sge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB3aWR0aDogNDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZmMwYzY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiZmMwYzY7XG4gIGN1cnNvcjogYXV0b1xufVxuXG4ucGRwLXByaW9yaXR5LW91dC1vZi1zdG9jazpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZmMwYzZcbn1cblxuLnBkcC1iYjEge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q0ZDVkOVxufVxuXG4ucGRwLW9uUGFnZUxvYWRlciB7XG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICBwYWRkaW5nOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXJcbn1cblxuLnBkcC1zYy1hZGRUb0JhZy1kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IC41O1xuICBwb2ludGVyLWV2ZW50czogbm9uZVxufVxuXG4uaW5kZXgtcHJvZHVjdERlc2NyaXB0aW9uVGFibGVDb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmVcbn1cblxuLmluZGV4LXByb2R1Y3QtZGVzY3JpcHRpb24tdGl0bGUge1xuICBjb2xvcjogIzI4MmMzZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDRkNWQ5O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlXG59XG5cbi5pbmRleC1wcm9kdWN0LWRlc2NyaXB0aW9uLWNvbnRlbnQge1xuICBjb2xvcjogIzI4MmMzZjtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICB3aWR0aDogODQlXG59XG5cbi5pbmRleC1wcm9kdWN0LWRlc2NyaXB0aW9uLWNvbnRlbnQgYiB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogMTZweFxufVxuXG4uaW5kZXgtcHJvZHVjdC1kZXNjcmlwdGlvbi1jb250ZW50IGI6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiAwXG59XG5cbi5pbmRleC1wcm9kdWN0LWRlc2NyaXB0aW9uLWNvbnRlbnQgcCB7XG4gIG1hcmdpbjogMFxufVxuXG4uaW5kZXgtc2l6ZUZpdERlc2Mge1xuICBmb250LXdlaWdodDogNDAwO1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbi10b3A6IDEycHhcbn1cblxuLmluZGV4LXNpemVGaXREZXNjVGl0bGUge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmctYm90dG9tOiA1cHhcbn1cblxuLmluZGV4LXNpemVGaXREZXNjQ29udGVudCB7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDkwJVxufVxuXG4uaW5kZXgtdGFibGVDb250YWluZXIge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LXBhY2s6IHN0YXJ0O1xuICAtbXMtZmxleC1wYWNrOiBzdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAtbXMtZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LWRpcmVjdGlvbjogcm93XG59XG5cbi5pbmRleC10YWJsZUNvbnRhaW5lciAuaW5kZXgtcm93IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VhZWFlYztcbiAgbWFyZ2luOiAwIDAgMTJweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA0MCU7XG4gIGZsZXgtYmFzaXM6IDQwJVxufVxuXG4uaW5kZXgtdGFibGVDb250YWluZXIgLmluZGV4LXJvdzpudGgtY2hpbGQob2RkKSB7XG4gIG1hcmdpbi1yaWdodDogMTAlXG59XG5cbi5pbmRleC10YWJsZUNvbnRhaW5lciAuaW5kZXgtcm93IC5pbmRleC1yb3dLZXkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiAjN2U4MThjO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBtYXJnaW4tYm90dG9tOiA1cHhcbn1cblxuLmluZGV4LXRhYmxlQ29udGFpbmVyIC5pbmRleC1yb3cgLmluZGV4LXJvd1ZhbHVlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogIzI4MmMzZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMS4yXG59XG5cbi5pbmRleC1zaG93TW9yZVRleHQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjZmYzZjZjO1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlclxufVxuXG4uY29sb3JzLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHhcbn1cblxuLmNvbG9ycy1oZWFkaW5nIHtcbiAgY29sb3I6ICMyODJjM2Y7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luOiAwIDAgMTVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC40cHhcbn1cblxuLmNvbG9ycy1oZWFkaW5nIHN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiA1MDBcbn1cblxuLmNvbG9ycy1oZWFkaW5nIC5jb2xvcnMtc2hhZGVUaXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmVcbn1cblxuLmNvbG9ycy1pbWFnZSB7XG4gIHdpZHRoOiA1NXB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweFxufVxuXG4uY29sb3JzLXNoYWRlTGlzdCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAwXG59XG5cbi5jb2xvcnMtc2hhZGVMaXN0PmxpIHtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgMTBweCAxMHB4IDBcbn1cblxuLmNvbG9ycy1zaGFkZUxpc3QgYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAwXG59XG5cbi5jb2xvcnMtc2hhZGVMaXN0TW9iaWxlIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtZmxleC13cmFwOiBub3dyYXA7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogLW1zLWF1dG9oaWRpbmctc2Nyb2xsYmFyXG59XG5cbi5jb2xvcnMtc2hhZGVMaXN0TW9iaWxlPmxpIHtcbiAgLXdlYmtpdC1ib3gtZmxleDogMDtcbiAgLW1zLWZsZXg6IDAgMCBhdXRvO1xuICBmbGV4OiAwIDAgYXV0bztcbiAgbWFyZ2luOiAwIDAgMTJweCAxOHB4XG59XG5cbi5jb2xvcnMtc2hhZGVMaXN0TW9iaWxlPmxpOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHhcbn1cblxuLmNvbG9ycy1zaGFkZUxpc3RNb2JpbGU+bGk6bGFzdC1jaGlsZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHhcbn1cblxuLmNvbG9ycy1zaGFkZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXgtd2lkdGg6IDY2cHg7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveFxufVxuXG4uY29sb3JzLXNoYWRlIC5jb2xvcnMtaW1hZ2VDb250YWluZXIge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q1ZDZkOVxufVxuXG4uY29sb3JzLXNoYWRlIC5jb2xvcnMtaW1hZ2VDb250YWluZXIuY29sb3JzLW1vcmVJbWFnZUNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZcbn1cblxuLmNvbG9ycy1zaGFkZSAuY29sb3JzLWltYWdlQ29udGFpbmVyIC5jb2xvcnMtZ3JpZCB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNWQ2ZDlcbn1cblxuLmNvbG9ycy1zaGFkZSAuY29sb3JzLWltYWdlQ29udGFpbmVyIC5jb2xvcnMtZ3JpZDpudGgtY2hpbGQob2RkKSB7XG4gIG1hcmdpbi1yaWdodDogM3B4XG59XG5cbi5jb2xvcnMtc2hhZGUgLmNvbG9ycy1pbWFnZUNvbnRhaW5lciAuY29sb3JzLWdyaWQ6Zmlyc3QtY2hpbGQsXG4uY29sb3JzLXNoYWRlIC5jb2xvcnMtaW1hZ2VDb250YWluZXIgLmNvbG9ycy1ncmlkOm50aC1jaGlsZCgyKSB7XG4gIG1hcmdpbi1ib3R0b206IDNweFxufVxuXG4uY29sb3JzLXNoYWRlIC5jb2xvcnMtaW1hZ2VDb250YWluZXIgLmNvbG9ycy1ncmlkIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCVcbn1cblxuLmNvbG9ycy1zaGFkZSBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDBweDtcbiAgLW8tb2JqZWN0LWZpdDogY292ZXI7XG4gIG9iamVjdC1maXQ6IGNvdmVyXG59XG5cbi5jb2xvcnMtc2hhZGUgLmNvbG9ycy1zaGFkZU5hbWUge1xuICBmb250LXNpemU6IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNTM1NzY2O1xuICBtYXJnaW4tdG9wOiA2cHhcbn1cblxuLmNvbG9ycy1zZWxlY3RlZCB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLThweDtcbiAgbWFyZ2luLXRvcDogLTdweDtcbiAgei1pbmRleDogMVxufVxuXG4uc2l6ZS1idXR0b25zLXNlbGVjdC1zaXplIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IDUwMFxufVxuXG4uc2l6ZS1idXR0b25zLXNpemUtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAxMHB4IDAgMjRweFxufVxuXG4uc2l6ZS1idXR0b25zLXNpemUtaGVhZGVyIHtcbiAgbWFyZ2luOiAwIDAgMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsaW5lLWhlaWdodDogMVxufVxuXG4uc2l6ZS1idXR0b25zLXNpemUtY2hhcnQge1xuICBtYXJnaW4tbGVmdDogMzBweFxufVxuXG4uc2l6ZS1idXR0b25zLWFycm93IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNnB4O1xuICBoZWlnaHQ6IDZweDtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgYm9yZGVyOiBzb2xpZCAjZmYzZTZjO1xuICBib3JkZXItd2lkdGg6IDJweCAycHggMCAwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICBtYXJnaW4tYm90dG9tOiAycHhcbn1cblxuLnNpemUtYnV0dG9ucy1zaG93LXNpemUtY2hhcnQge1xuICBvdXRsaW5lOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xuICBsZXR0ZXItc3BhY2luZzogLjVweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmc6IDAgMCA1cHg7XG4gIGNvbG9yOiAjZmYzZTZjO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi10b3A6IDBcbn1cblxuLnNpemUtYnV0dG9ucy1hcnJvd1JpZ2h0Qm9sZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA0cHg7XG4gIGNvbG9yOiAjZmYzZTZjO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLjgpO1xuICB0cmFuc2Zvcm06IHNjYWxlKC44KVxufVxuXG4uc2l6ZS1idXR0b25zLXNpemVUaXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxcHg7XG4gIG1pbi13aWR0aDogNDAwcHg7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB2aXNpYmlsaXR5IC4xcyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAuMXMgZWFzZS1vdXQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogLjFzO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAuMXNcbn1cblxuLnNpemUtYnV0dG9ucy1zaXplVGlwIC5zaXplLWJ1dHRvbnMtc2l6ZVRpcE1ldGEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1pbi13aWR0aDogNDAwcHg7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMTBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U5ZTllYjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMThweDtcbiAgei1pbmRleDogMjk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCAxNnB4IDAgcmdiYSg0MCwgNDQsIDYzLCAuMSk7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDE2cHggMCByZ2JhKDQwLCA0NCwgNjMsIC4xKVxufVxuXG4uc2l6ZS1idXR0b25zLXNpemVUaXAgLnNpemUtYnV0dG9ucy1zaXplVGlwTWV0YSBwIHtcbiAgbWFyZ2luOiAwXG59XG5cbi5zaXplLWJ1dHRvbnMtdGlwQW5kQnRuQ29udGFpbmVyIHtcbiAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCAwXG59XG5cbi5zaXplLWJ1dHRvbnMtdGlwQW5kQnRuQ29udGFpbmVyOmhvdmVyIC5zaXplLWJ1dHRvbnMtc2l6ZVRpcCB7XG4gIHZpc2liaWxpdHk6IHZpc2libGVcbn1cblxuLnNpemUtYnV0dG9ucy1zaXplLWJ1dHRvbnMge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IC1tcy1hdXRvaGlkaW5nLXNjcm9sbGJhcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlXG59XG5cbi5zaXplLWJ1dHRvbnMtc2l6ZS1idXR0b25zLWVycm9yIHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNpemUtYnV0dG9ucy1zaGFrZSAuODJzIGN1YmljLWJlemllciguMzYsIC4wNywgLjE5LCAuOTcpIGJvdGg7XG4gIGFuaW1hdGlvbjogc2l6ZS1idXR0b25zLXNoYWtlIC44MnMgY3ViaWMtYmV6aWVyKC4zNiwgLjA3LCAuMTksIC45NykgYm90aDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTAwMHB4O1xuICBwZXJzcGVjdGl2ZTogMTAwMHB4XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzaXplLWJ1dHRvbnMtc2hha2Uge1xuXG4gIDEwJSxcbiAgOTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTFweCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMXB4LCAwLCAwKVxuICB9XG5cbiAgMjAlLFxuICA4MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgycHgsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMnB4LCAwLCAwKVxuICB9XG5cbiAgMzAlLFxuICA1MCUsXG4gIDcwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC00cHgsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTRweCwgMCwgMClcbiAgfVxuXG4gIDQwJSxcbiAgNjAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNHB4LCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDRweCwgMCwgMClcbiAgfVxufVxuXG4uc2l6ZS1idXR0b25zLXNpemUtZXJyb3ItbWVzc2FnZSB7XG4gIGNvbG9yOiAjZjE2NTY1O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBkaXNwbGF5OiBibG9ja1xufVxuXG4uc2l6ZS1idXR0b25zLXNpemUtYnV0dG9uLWRlZmF1bHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmZjMGM2O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBwYWRkaW5nOiAwO1xuICBtaW4td2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjMjgyYzNmO1xuICAtd2Via2l0LWJveC1mbGV4OiAwO1xuICAtbXMtZmxleDogMCAwIGF1dG87XG4gIGZsZXg6IDAgMCBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmVcbn1cblxuLnNpemUtYnV0dG9ucy1zaXplLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZVxufVxuXG4uc2l6ZS1idXR0b25zLXNpemUtYnV0dG9uLXNlbGVjdGVkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmM2Y2YztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICNmZjNmNmMgIWltcG9ydGFudFxufVxuXG4uc2l6ZS1idXR0b25zLXNpemUtYnV0dG9uLWRpc2FibGVkIHtcbiAgY29sb3I6ICNkNWQ2ZDk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNWQ2ZDk7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgb3ZlcmZsb3c6IGhpZGRlblxufVxuXG4uc2l6ZS1idXR0b25zLXNpemUtc3RyaWtlLWhpZGUge1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwXG59XG5cbi5zaXplLWJ1dHRvbnMtc2l6ZS1zdHJpa2Utc2hvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q1ZDZkOTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpXG59XG5cbi5zaXplLWJ1dHRvbnMtYmlnLXNpemUge1xuICBtaW4taGVpZ2h0OiA0OHB4O1xuICBtaW4td2lkdGg6IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IGF1dG87XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMFxufVxuXG4uc2l6ZS1idXR0b25zLW91dC1vZi1zdG9jayB7XG4gIGNvbG9yOiAjZjE2NTY1XG59XG5cbi5zaXplLWJ1dHRvbnMtc2l6ZS1idXR0b246aG92ZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmYzZjZjXG59XG5cbi5zaXplLWJ1dHRvbnMtc2l6ZS1idXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiAwXG59XG5cbi5zaXplLWJ1dHRvbnMtdW5pZmllZC1zaXplIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDAgOHB4O1xuICBmb250LXdlaWdodDogNTAwXG59XG5cbi5zaXplLWJ1dHRvbnMtdW5pZmllZC1zaXplKy5zaXplLWJ1dHRvbnMtaW52ZW50b3J5LWxlZnQge1xuICBsZWZ0OiA3JTtcbiAgYm90dG9tOiAtM3B4XG59XG5cbi5zaXplLWJ1dHRvbnMtc2t1LXByaWNlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLXRvcDogNHB4XG59XG5cbi5zaXplLWJ1dHRvbnMtYm9keW1lYXN1cmUge1xuICBjb2xvcjogIzUzNTY2NVxufVxuXG4uc2l6ZS1idXR0b25zLXNpemVDaGFydEluZm8ge1xuICBjb2xvcjogIzUzNTY2NTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBmb250LXNpemU6IDEycHhcbn1cblxuLnNpemUtYnV0dG9ucy1zaXplRml0RGVzYyB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJvcmRlcjogbm9uZVxufVxuXG4uc2l6ZS1idXR0b25zLW1lYXN1cmVtZW50VHlwZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMyODJjM2Zcbn1cblxuLnNpemUtYnV0dG9ucy1tZWFzdXJlbWVudE5hbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjNTM1NjY1XG59XG5cbi5zaXplLWJ1dHRvbnMtaW52ZW50b3J5LWxlZnQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiA5MCU7XG4gIGxlZnQ6IDclO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5MDVhO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXJcbn1cblxuLnNpemUtYnV0dG9ucy1pbnZlbnRvcnktbGVmdC1oaWRkZW4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW5cbn1cblxuLnNpemUtYnV0dG9ucy1zaXplQnV0dG9uQXNMaW5rIHtcbiAgLXdlYmtpdC1ib3gtZmxleDogMDtcbiAgLW1zLWZsZXg6IDAgMCBhdXRvO1xuICBmbGV4OiAwIDAgYXV0b1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDo2MDBweCkge1xuICAuc2l6ZS1idXR0b25zLXNpemUtYnV0dG9ucyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweFxuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOjk4MHB4KSB7XG4gIC5zaXplLWJ1dHRvbnMtc2l6ZS1jaGFydCB7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwXG4gIH1cbn1cblxuLnNpemUtYnV0dG9ucy1yZWNvQ29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjbGVhcjogYm90aFxufVxuXG4uc2l6ZS1idXR0b25zLXJlY29Db250YWluZXJNb2JpbGUge1xuICBvdmVyZmxvdzogaGlkZGVuXG59XG5cbi5zaXplLWJ1dHRvbnMtcmVjVGV4dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDhweFxufVxuXG4uc2l6ZS1idXR0b25zLW1vcmVQcm9maWxlc1dlYiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IC0yOHB4XG59XG5cbi5zaXplLWJ1dHRvbnMtbW9yZVByb2ZpbGVzTW9iaWxlIHtcbiAgcmlnaHQ6IDIwcHg7XG4gIG1heC1oZWlnaHQ6IDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogbWF4LWhlaWdodCAuNnMgY3ViaWMtYmV6aWVyKDAsIDEsIC41LCAxKTtcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAuNnMgY3ViaWMtYmV6aWVyKDAsIDEsIC41LCAxKVxufVxuXG4uc2l6ZS1idXR0b25zLW1vcmVQcm9maWxlc01vYmlsZSAuc2l6ZS1idXR0b25zLXByb2ZpbGVMaXN0SGVhZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTJweDtcbiAgdG9wOiAxNHB4XG59XG5cbi5zaXplLWJ1dHRvbnMtcHJvZmlsZUxpc3RIZWFkZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogI2ZmM2Y2Y1xufVxuXG4uc2l6ZS1idXR0b25zLXNoYXJwQ29ybmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjZmRlM2YzIHRyYW5zcGFyZW50O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDEwcHggMTBweCAwO1xuICB3aWR0aDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAyMnB4O1xuICBib3R0b206IC04cHhcbn1cblxuLnNpemUtYnV0dG9ucy1wcm9maWxlc0xpc3RXZWIge1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiA3MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA0cHggMCByZ2JhKDAsIDAsIDAsIC4xMyk7XG4gIGJveC1zaGFkb3c6IDAgMCA0cHggMCByZ2JhKDAsIDAsIDAsIC4xMyk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMjRweDtcbiAgcGFkZGluZzogOHB4IDEycHggNHB4O1xuICB6LWluZGV4OiAyO1xuICBkaXNwbGF5OiBub25lXG59XG5cbi5zaXplLWJ1dHRvbnMtcHJvZmlsZXNMaXN0TW9iaWxlIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDExMCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTEwJSk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gLjZzIGN1YmljLWJlemllcigwLCAxLCAuNSwgMSk7XG4gIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC42cyBjdWJpYy1iZXppZXIoMCwgMSwgLjUsIDEpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjZzIGN1YmljLWJlemllcigwLCAxLCAuNSwgMSk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNnMgY3ViaWMtYmV6aWVyKDAsIDEsIC41LCAxKSwgLXdlYmtpdC10cmFuc2Zvcm0gLjZzIGN1YmljLWJlemllcigwLCAxLCAuNSwgMSlcbn1cblxuLnNpemUtYnV0dG9ucy1wcm9maWxlc0xpc3RNb2JpbGUgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogLjVweCBzb2xpZCAjNjk2Yjc5O1xuICBwYWRkaW5nOiAxMnB4IDE4cHg7XG4gIHdpZHRoOiA2NXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4XG59XG5cbi5zaXplLWJ1dHRvbnMtcE5hbWVIZWFkZXIge1xuICBjb2xvcjogI2ZmM2Y2YztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xuICBtYXgtd2lkdGg6IDgwcHg7XG4gIG1hcmdpbi1sZWZ0OiA0cHhcbn1cblxuLnNpemUtYnV0dG9ucy1tb3JlUHJvZmlsZXNNb2JpbGUuc2l6ZS1idXR0b25zLXNob3dQcm9maWxlcyB7XG4gIG1heC1oZWlnaHQ6IDUwcHhcbn1cblxuLnNpemUtYnV0dG9ucy1tb3JlUHJvZmlsZXNNb2JpbGUuc2l6ZS1idXR0b25zLXNob3dQcm9maWxlcyAuc2l6ZS1idXR0b25zLXByb2ZpbGVzTGlzdE1vYmlsZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMClcbn1cblxuLnNpemUtYnV0dG9ucy1tb3JlUHJvZmlsZXNXZWI6aG92ZXIgLnNpemUtYnV0dG9ucy1wcm9maWxlc0xpc3RXZWIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcbn1cblxuLnNpemUtYnV0dG9ucy1wcm9maWxlSXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogIzdlODE4YztcbiAgZm9udC1zaXplOiAxM3B4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpc1xufVxuXG4uc2l6ZS1idXR0b25zLXByb2ZpbGVJdGVtLnNpemUtYnV0dG9ucy1zZWxlY3RlZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZjNmNmM7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjZmYzZjZjICFpbXBvcnRhbnRcbn1cblxuLnNpemUtYnV0dG9ucy1wZXJzb25hbGlzZWRSZWNvIHtcbiAgd2lkdGg6IDcwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiAycHhcbn1cblxuLnNpemUtYnV0dG9ucy1zaW1pbGFyV3JhcHBlciB7XG4gIG1hcmdpbjogMFxufVxuXG4uc2l6ZS1idXR0b25zLW1vcmVQcm9maWxlU0Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTJweDtcbiAgcmlnaHQ6IDE2cHhcbn1cblxuLnNpemUtYnV0dG9ucy1wcm9maWxlTmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDBcbn1cblxuLnNpemUtYnV0dG9ucy12aWV3U2ltaWxhciB7XG4gIGNvbG9yOiAjZmYzZTZjO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjdXJzb3I6IHBvaW50ZXJcbn1cblxuLnNpemUtYnV0dG9ucy10YWdJbmZvVGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgdG9wOiAtNzhweDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDMzMHB4O1xuICBwYWRkaW5nOiA4cHggMTBweDtcbiAgZGlzcGxheTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDE2cHggMCByZ2JhKDQwLCA0NCwgNjMsIC4xKTtcbiAgYm94LXNoYWRvdzogMCAycHggMTZweCAwIHJnYmEoNDAsIDQ0LCA2MywgLjEpO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTllOWViO1xuICBjb2xvcjogIzUzNTY2NVxufVxuXG4uc2l6ZS1idXR0b25zLXRhZ0luZm9JY29uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IDFweCBzb2xpZCAjN2U4MDhjO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjN2U4MDhjO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tbGVmdDogMTBweFxufVxuXG4uc2l6ZS1idXR0b25zLXRhZ0luZm9JY29uOmhvdmVyKy5zaXplLWJ1dHRvbnMtdGFnSW5mb1RleHQge1xuICBkaXNwbGF5OiBibG9ja1xufVxuXG4uc2l6ZS1idXR0b25zLWhpZGUge1xuICBkaXNwbGF5OiBub25lXG59XG5cbi5zaXplLWJ1dHRvbnMtc2hha2VUZXh0IHtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNpemUtYnV0dG9ucy1zaGFrZSAuNnMgY3ViaWMtYmV6aWVyKC4zNiwgLjA3LCAuMTksIC45NykgYm90aDtcbiAgYW5pbWF0aW9uOiBzaXplLWJ1dHRvbnMtc2hha2UgLjZzIGN1YmljLWJlemllciguMzYsIC4wNywgLjE5LCAuOTcpIGJvdGg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEwMDBweDtcbiAgcGVyc3BlY3RpdmU6IDEwMDBweFxufVxuXG4uc2l6ZS1idXR0b25zLWxvZ2luIHtcbiAgY29sb3I6ICNmZjNlNmM7XG4gIG1hcmdpbi1sZWZ0OiA3cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGN1cnNvcjogcG9pbnRlclxufVxuXG4uc2l6ZS1idXR0b25zLWJ1dHRvbkNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZVxufVxuXG4uc2l6ZS1idXR0b25zLXJlY28taWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIDEwcHggMCA0cHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3Bcbn1cblxuLnNpemUtYnV0dG9ucy1zYy1yZWNvLXR4dCB7XG4gIHBhZGRpbmc6IDE0cHg7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBmcm9tKCNmZGUzZjMpLCB0bygjZmVmOWU1KSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2ZkZTNmMywgI2ZlZjllNSk7XG4gIGNvbG9yOiAjMjgyYzNmXG59XG5cbi8vIEBrZXlmcmFtZXMgc2l6ZS1idXR0b25zLXNoYWtlIHtcblxuLy8gICAxMCUsXG4vLyAgIDkwJSB7XG4vLyAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xcHgsIDAsIDApO1xuLy8gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTFweCwgMCwgMClcbi8vICAgfVxuXG4vLyAgIDIwJSxcbi8vICAgODAlIHtcbi8vICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMnB4LCAwLCAwKTtcbi8vICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDJweCwgMCwgMClcbi8vICAgfVxuXG4vLyAgIDMwJSxcbi8vICAgNTAlLFxuLy8gICA3MCUge1xuLy8gICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMnB4LCAwLCAwKTtcbi8vICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0ycHgsIDAsIDApXG4vLyAgIH1cblxuLy8gICA0MCUsXG4vLyAgIDYwJSB7XG4vLyAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDJweCwgMCwgMCk7XG4vLyAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgycHgsIDAsIDApXG4vLyAgIH1cbi8vIH1cblxuLmJyZWFkY3J1bWJzLWJvbGQtbGluayxcbi5icmVhZGNydW1icy1ib2xkLXNlcGFyYXRvciB7XG4gIGZvbnQtd2VpZ2h0OiA1MDBcbn1cblxuLmluZGV4LWNyb3NzTGlua0NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAzNXB4IDAgNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlclxufVxuXG4uaW5kZXgtbGlua3Mge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiAjZmYzZTZjO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZVxufVxuXG4uaW5kZXgtbGlua3M+ZGl2IHtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2JmYzBjNjtcbiAgcGFkZGluZzogMTZweCAyMHB4XG59XG5cbi5pbmRleC1saW5rcz5kaXY6aG92ZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmYzZTZjXG59XG5cbi5pbmRleC1hcnJvdyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDZweDtcbiAgaGVpZ2h0OiA2cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBib3JkZXI6IHNvbGlkICNmZjNlNmM7XG4gIGJvcmRlci13aWR0aDogMnB4IDJweCAwIDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIG1hcmdpbi1ib3R0b206IDFweFxufVxuXG4ubWV0YS1jb250YWluZXIge1xuICBtYXJnaW46IDIwcHggMCAwXG59XG5cbi5tZXRhLWluZm8ge1xuICBjb2xvcjogIzI4MmMzZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZVxufVxuXG4ubWV0YS1pbmZvIC5tZXRhLXRpdGxlIHtcbiAgY29sb3I6ICM5NDk4OWZcbn1cblxuLm1ldGEtaW5mbyAubWV0YS1kZXNjIHtcbiAgbWFyZ2luOiA1cHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogOTAlO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wXG59XG5cbi5tZXRhLWluZm8gLm1ldGEtZGVzYyBhIHtcbiAgY29sb3I6ICM5NDk4OWY7XG4gIGZvbnQtc2l6ZTogMTJweFxufVxuXG4ubWV0YS1kb3Qge1xuICB3aWR0aDogNHB4O1xuICBoZWlnaHQ6IDRweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyODJjM2Y7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW4tYm90dG9tOiAtM3B4XG59XG5cbmEubWV0YS1saW5rIHtcbiAgY29sb3I6ICNmZjNlNmM7XG4gIGZvbnQtd2VpZ2h0OiA1MDBcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6NjAwcHgpIHtcbiAgLm1ldGEtdGF4SW5mbyB7XG4gICAgZGlzcGxheTogbm9uZVxuICB9XG59XG5cbi5zdXBwbGllci1wcm9kdWN0U2VsbGVyTmFtZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZVxufVxuXG4uc3VwcGxpZXItcHJvZHVjdFNlbGxlck5hbWUsXG4uc3VwcGxpZXItc3R5bGVJZCB7XG4gIGNvbG9yOiAjMjgyYzNmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKVxufVxuXG4uc3VwcGxpZXItbWV0LXZhbHVlcyB7XG4gIHBhZGRpbmctdG9wOiA0cHhcbn1cblxuLnN1cHBsaWVyLXByb2R1Y3QtY29kZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICBwYWRkaW5nOiA0cHhcbn1cblxuLnN1cHBsaWVyLXByb2R1Y3QtY29kZS1zZXBhcmF0b3Ige1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDAgNXB4XG59XG5cbi5zdXBwbGllci1zdXBwbGllciB7XG4gIGNvbG9yOiAjMjgyYzNmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDRweCAwO1xuICBtYXJnaW4tYm90dG9tOiA2cHhcbn1cblxuLnN1cHBsaWVyLXBhcnRuZXItbmFtZSB7XG4gIGNvbG9yOiAjMjgyYzNmXG59XG5cbi5zdXBwbGllci12aWV3bW9yZS1saW5rIHtcbiAgY29sb3I6ICMyODJjM2Y7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogNHB4IDA7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY3Vyc29yOiBwb2ludGVyXG59XG5cbi5zdXBwbGllci1tYW51ZmFjdHVyZXIge1xuICBjb2xvcjogIzI4MmMzZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nOiA0cHggMDtcbiAgbWFyZ2luLWJvdHRvbTogNnB4XG59XG5cbi5zdXBwbGllci1tb2JpbGVDb2RlU3VwcGxpZXIge1xuICBwYWRkaW5nOiAyMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGRpc3BsYXk6IG5vbmVcbn1cblxuLnN1cHBsaWVyLW1vYmlsZUNvZGVTdXBwbGllciBwOmZpcnN0LWNoaWxkIHtcbiAgY29sb3I6ICMzZTQxNTJcbn1cblxuLnN1cHBsaWVyLW1vYmlsZUNvZGVTdXBwbGllciBwIHtcbiAgY29sb3I6ICM3ZTgxOGM7XG4gIG1hcmdpbjogNXB4IDBcbn1cblxuLnN1cHBsaWVyLWNvbnRhY3RTZWxsZXJDb250YWluZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcbn1cblxuLnN1cHBsaWVyLXN1cHBsaWVyQ29udGFjdFRvb3RpcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyNXB4O1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1pbi13aWR0aDogMzAwcHg7XG4gIG1heC13aWR0aDogNDkwcHg7XG4gIHdpZHRoOiBhdXRvO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBwYWRkaW5nOiAxMnB4IDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgM3B4IHJnYmEoMCwgMCwgMCwgLjIpO1xuICBib3gtc2hhZG93OiAwIDAgM3B4IHJnYmEoMCwgMCwgMCwgLjIpO1xuICB6LWluZGV4OiAyO1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGN1cnNvcjogZGVmYXVsdFxufVxuXG4uc3VwcGxpZXItc3VwcGxpZXJDb250YWN0VG9vdGlwIGg0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDAgMCAxMnB4O1xuICBwYWRkaW5nOiAwIDIwcHggMTVweDtcbiAgY29sb3I6ICM2OTZlNzk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VhZWFlYztcbiAgd29yZC13cmFwOiBicmVhay13b3JkXG59XG5cbi5zdXBwbGllci1zdXBwbGllckNvbnRhY3RUb290aXAgLnN1cHBsaWVyLWJ1dHRvbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNDklO1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICM5NDk2OWY7XG4gIGN1cnNvcjogcG9pbnRlclxufVxuXG4uc3VwcGxpZXItc3VwcGxpZXJDb250YWN0VG9vdGlwIHNwYW4uc3VwcGxpZXItYnV0dG9uIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VhZWFlY1xufVxuXG4uc3VwcGxpZXItc3VwcGxpZXJDb250YWN0VG9vdGlwIGEuc3VwcGxpZXItYnV0dG9uIHtcbiAgY29sb3I6ICNmZjNlNmNcbn1cblxuLnN1cHBsaWVyLXRyaWFuZ2xlLXdpdGgtc2hhZG93IHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xMHB4O1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtMzBweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgLTE2cHggMTBweCAtMTdweCByZ2JhKDAsIDAsIDAsIC4yKTtcbiAgYm94LXNoYWRvdzogMCAtMTZweCAxMHB4IC0xN3B4IHJnYmEoMCwgMCwgMCwgLjIpXG59XG5cbi5zdXBwbGllci10cmlhbmdsZS13aXRoLXNoYWRvdzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgdG9wOiAtNXB4O1xuICBsZWZ0OiAyNXB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAzcHggcmdiYSgwLCAwLCAwLCAuMik7XG4gIGJveC1zaGFkb3c6IDAgMCAzcHggcmdiYSgwLCAwLCAwLCAuMilcbn1cblxuLnN1cHBsaWVyLWhhbGZDYXJkQmFja2Ryb3Age1xuICBiYWNrZ3JvdW5kOiByZ2JhKDQxLCA0OCwgNjMsIC41OCk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAtNCU7XG4gIHdpZHRoOiAxMDQlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDEwXG59XG5cbi5zdXBwbGllci1jb250YWN0U2VsbGVySGFsZkNhcmQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDEwO1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4XG59XG5cbi5zdXBwbGllci1jb250YWN0U2VsbGVySGFsZkNhcmQgaDQge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDIycHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWFlYWVjO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBjb2xvcjogIzY5NmU3OTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkXG59XG5cbi5zdXBwbGllci1jb250YWN0U2VsbGVySGFsZkNhcmQgLnN1cHBsaWVyLWJ1dHRvbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNDklO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAxN3B4IDA7XG4gIGNvbG9yOiAjOTQ5NjlmXG59XG5cbi5zdXBwbGllci1jb250YWN0U2VsbGVySGFsZkNhcmQgc3Bhbi5zdXBwbGllci1idXR0b24ge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWFlYWVjXG59XG5cbi5zdXBwbGllci1jb250YWN0U2VsbGVySGFsZkNhcmQgYS5zdXBwbGllci1idXR0b24ge1xuICBjb2xvcjogIzIwYmQ5OVxufVxuXG4uc3VwcGxpZXItZGVza3RvcENvZGVTdXBwbGllciB7XG4gIG1hcmdpbi10b3A6IDE1cHhcbn1cblxuLnN1cHBsaWVyLWRlc2t0b3BDb2RlU3VwcGxpZXIgLnN1cHBsaWVyLXByb2R1Y3RTZWxsZXJOYW1lIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrXG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOjYwMHB4KSB7XG4gIC5zdXBwbGllci1kZXNrdG9wQ29kZVN1cHBsaWVyIHtcbiAgICBkaXNwbGF5OiBub25lXG4gIH1cblxuICAuc3VwcGxpZXItbW9iaWxlQ29kZVN1cHBsaWVyIHtcbiAgICBkaXNwbGF5OiBibG9ja1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOjk4MHB4KSB7XG4gIC5zdXBwbGllci1zdXBwbGllcjphZnRlciB7XG4gICAgZGlzcGxheTogaW5saW5lXG4gIH1cbn1cblxuLnBkcC1vZmZlcnMtY29udGFpbmVyIHtcbiAgbWFyZ2luOiA0MHB4IDAgMDtcbiAgcGFkZGluZzogMCAwIDIwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDRkNWQ5XG59XG5cbi5wZHAtb2ZmZXJzLWNvbnRhaW5lciAucGRwLW9mZmVycy1vZmZlckJsb2NrOmxhc3QtY2hpbGQgLnBkcC1vZmZlcnMtb2ZmZXI6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDBcbn1cblxuLnBkcC1vZmZlcnMtY29udGFpbmVyPmg0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMTtcbiAgY29sb3I6ICMyODJjM2Y7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi10b3A6IDBcbn1cblxuLnBkcC1vZmZlcnMtZXh0cmFPZmZlciAucGRwLW9mZmVycy1vZmZlckRlc2Mge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmctdG9wOiAxcHg7XG4gIG1hcmdpbjogMFxufVxuXG4ucGRwLW9mZmVycy1leHRyYU9mZmVyIC5wZHAtb2ZmZXJzLXZpZXdNb3JlTGluayB7XG4gIGRpc3BsYXk6IG5vbmVcbn1cblxuLnBkcC1vZmZlcnMtZXh0cmFPZmZlciAucGRwLW9mZmVycy1vZmZlciB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmc6IDEwcHggMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tcmlnaHQ6IDg4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmZcbn1cblxuLnBkcC1vZmZlcnMtZXh0cmFPZmZlciAucGRwLW9mZmVycy1vZmZlcjpob3ZlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNGQ1ZDk7XG4gIGJvcmRlci1yYWRpdXM6IDRweFxufVxuXG4ucGRwLW9mZmVycy1leHRyYU9mZmVyIC5wZHAtb2ZmZXJzLW9mZmVyOmhvdmVyIC5wZHAtb2ZmZXJzLXZpZXdNb3JlTGluayB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9ja1xufVxuXG4ucGRwLW9mZmVycy1tb3JlT2ZmZXJzQnV0dG9uIHtcbiAgY29sb3I6ICM1MjZjZDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyXG59XG5cbi5wZHAtb2ZmZXJzLW9mZmVySGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICMyODJjM2Y7XG4gIG1hcmdpbi1ib3R0b206IDVweFxufVxuXG4ucGRwLW9mZmVycy1vZmZlckhlYWRpbmcgYiB7XG4gIGZvbnQtd2VpZ2h0OiA0MDBcbn1cblxuLnBkcC1vZmZlcnMtb2ZmZXIge1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC1tcy1mbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcbiAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyXG59XG5cbi5wZHAtb2ZmZXJzLW9mZmVyPmRpdiB7XG4gIHdpZHRoOiAxMDAlXG59XG5cbi5wZHAtb2ZmZXJzLW9mZmVyVGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMjgyYzNmO1xuICBtYXJnaW4tYm90dG9tOiAxcHhcbn1cblxuLnBkcC1vZmZlcnMtb2ZmZXJUaXRsZSBiIHtcbiAgY29sb3I6ICMyODJjM2Y7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9ja1xufVxuXG4ucGRwLW9mZmVycy1vZmZlckRlc2Mge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMjgyYzNmO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDhweCAwIDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHdpZHRoOiAxMDAlXG59XG5cbi5wZHAtb2ZmZXJzLW9mZmVyRGVzYyBiIHtcbiAgZm9udC13ZWlnaHQ6IDQwMFxufVxuXG4ucGRwLW9mZmVycy1vZmZlckRlc2MgbGkge1xuICBtYXJnaW4tYm90dG9tOiA2cHhcbn1cblxuLnBkcC1vZmZlcnMtb2ZmZXJEZXNjIGxpIC5wZHAtb2ZmZXJzLWxhYmVsTWFya3VwIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB3aWR0aDogOTAlXG59XG5cbi5wZHAtb2ZmZXJzLW9mZmVySW1hZ2Uge1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkOGQ4ZDg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLXdlYmtpdC1ib3gtZmxleDogMDtcbiAgLW1zLWZsZXg6IDAgMCAzNnB4O1xuICBmbGV4OiAwIDAgMzZweFxufVxuXG4ucGRwLW9mZmVycy1vZmZlckltYWdlIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlXG59XG5cbi5wZHAtb2ZmZXJzLW9mZmVySW1hZ2UrLnBkcC1vZmZlcnMtb2ZmZXJDb2x1bW5UZXh0IHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHhcbn1cblxuLnBkcC1vZmZlcnMtb2ZmZXJDb2x1bW5UZXh0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAtbXMtZmxleDogMTtcbiAgZmxleDogMTtcbiAgdmVydGljYWwtYWxpZ246IHRvcFxufVxuXG4ucGRwLW9mZmVycy12aWV3TW9yZUxpbmsge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZsb2F0OiByaWdodDtcbiAgbGV0dGVyLXNwYWNpbmc6IC4zcHg7XG4gIGNvbG9yOiAjMjgyYzNmO1xuICBsaW5lLWhlaWdodDogMTtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG9cbn1cblxuZGl2LnBkcC1vZmZlcnMtYnVsbGV0IHtcbiAgd2lkdGg6IDRweDtcbiAgaGVpZ2h0OiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MmMzZjtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZVxufVxuXG4ucGRwLW9mZmVycy1wcmljZSB7XG4gIGNvbG9yOiAjZmY5MDVhO1xuICBmb250LXdlaWdodDogNTAwXG59XG5cbi5wZHAtb2ZmZXJzLW9mZmVyQ29udHJvbGxlciAucGRwLW9mZmVycy1tb3JlT2ZmZXJzQnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMFxufVxuXG4ucGRwLW9mZmVycy1zaG93T2ZmZXJMaW5rIHtcbiAgY29sb3I6ICMyODJjM2Y7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyXG59XG5cbi5wZHAtb2ZmZXJzLWFycm93IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogN3B4O1xuICBoZWlnaHQ6IDdweDtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgYm9yZGVyOiBzb2xpZCAjMjgyYzNmO1xuICBib3JkZXItd2lkdGg6IDJweCAycHggMCAwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICBtYXJnaW4tYm90dG9tOiAxcHhcbn1cblxuLnBkcC1vZmZlcnMtYXJyb3dSaWdodEJvbGQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNHB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLjgpO1xuICB0cmFuc2Zvcm06IHNjYWxlKC44KVxufVxuXG4ucGRwLW9mZmVycy1vZmZlckNvbHVtbiB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIC13ZWJraXQtYm94LXBhY2s6IHN0YXJ0O1xuICAtbXMtZmxleC1wYWNrOiBzdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAtd2Via2l0LWJveC1hbGlnbjogc3RhcnQ7XG4gIC1tcy1mbGV4LWFsaWduOiBzdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIC1tcy1mbGV4LXdyYXA6IG5vd3JhcDtcbiAgZmxleC13cmFwOiBub3dyYXBcbn1cblxuLnBkcC1vZmZlcnMtYm9sZFRleHQge1xuICBmb250LXdlaWdodDogNTAwXG59XG5cbi5wZHAtb2ZmZXJzLXRhcEZvckJlc3Qge1xuICBmb250LXNpemU6IDE0cHhcbn1cblxuLnBkcC1vZmZlcnMtY291cG9uTm90Rm91bmQge1xuICBjb2xvcjogIzI4MmMzZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE1cHhcbn1cblxuLnBkcC1vZmZlcnMtb25seU9mZmVyVGl0bGUge1xuICBjb2xvcjogIzI4MmMzZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTVweFxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDo2MDBweCkge1xuICAucGRwLW9mZmVycy1jb250YWluZXIge1xuICAgIG1hcmdpbi1yaWdodDogMFxuICB9XG59XG5cbi5wZHAtb2ZmZXJzLWNvaW5pY29uIHtcbiAgaGVpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXG59XG5cbi5wZHAtb2ZmZXJzLXNpbWlsYXJDb2xvcnNJY29uIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luLWxlZnQ6IDVweFxufVxuXG4ucGRwLW9mZmVycy1tZnVJY29uIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgaGVpZ2h0OiAxN3B4O1xuICB3aWR0aDogMTdweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHhcbn1cblxuLnBkcC1vZmZlcnMtbWZ1VGl0bGVDb250YWluZXIge1xuICBtYXJnaW4tbGVmdDogLTVweFxufVxuXG5cbi5hZG1pc3Npb25TbG90LXNsb3Qge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjM2U0MTUyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjN2U4MThjO1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICB3aWR0aDogMTkycHg7XG4gIHBhZGRpbmc6IDE1cHggMDtcbiAgbWFyZ2luOiAxNXB4IGF1dG8gN3B4O1xuICBjdXJzb3I6IHBvaW50ZXJcbn1cblxuLmFkbWlzc2lvblNsb3QtZGlzYWJsZWQge1xuICBib3JkZXItY29sb3I6ICNkNGQ1ZDk7XG4gIHBhZGRpbmc6IDhweCAwIDlweDtcbiAgY3Vyc29yOiBkZWZhdWx0XG59XG5cbi5hZG1pc3Npb25TbG90LXNlbGVjdGVkIHtcbiAgYm9yZGVyOiAxLjJweCBzb2xpZCAjMTRjZGE4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzNlNDE1MlxufVxuXG4uYWRtaXNzaW9uU2xvdC1kaXNhYmxlZCBzcGFuIHtcbiAgY29sb3I6ICNmZjU3MjI7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWJvdHRvbTogMnB4XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOjQ4MHB4KSB7XG4gIC5hZG1pc3Npb25TbG90LXNsb3Qge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB3aWR0aDogMTQ1cHg7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG8gMDtcbiAgICBoZWlnaHQ6IDQ0cHhcbiAgfVxuXG4gIC5hZG1pc3Npb25TbG90LWRpc2FibGVkIHtcbiAgICBwYWRkaW5nOiA4cHggMCA5cHhcbiAgfVxuXG4gIC5hZG1pc3Npb25TbG90LXNlbGVjdGVkIHtcbiAgICBwYWRkaW5nOiAxNXB4IDBcbiAgfVxuXG4gIC5hZG1pc3Npb25TbG90LWRpc2FibGVkIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4XG4gIH1cbn1cblxuXG4uaW5kZXgtb3ZlcmFsbFJhdGluZ0NvbnRhaW5lciB7XG4gIHdpZHRoOiBhdXRvO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q0ZDVkOVxufVxuXG4uaW5kZXgtb3ZlcmFsbFJhdGluZyB7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogLXdlYmtpdC1maXQtY29udGVudDtcbiAgd2lkdGg6IC1tb3otZml0LWNvbnRlbnQ7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgaGVpZ2h0OiAyOXB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWM7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMjgyYzNmXG59XG5cbi5pbmRleC1vdmVyYWxsUmF0aW5nIC5pbmRleC1zdGFySWNvbiB7XG4gIG1hcmdpbjogMCAtOHB4IDAgLTJweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC42KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSguNilcbn1cblxuLmluZGV4LW92ZXJhbGxSYXRpbmcgLmluZGV4LXNlcGFyYXRvciB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIG1hcmdpbi10b3A6IC0ycHg7XG4gIGNvbG9yOiAjZDRkNWQ5O1xuICB3aWR0aDogMXB4XG59XG5cbi5pbmRleC1vdmVyYWxsUmF0aW5nIC5pbmRleC1yYXRpbmdzQ291bnQge1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzUzNTc2NjtcbiAgd2lkdGg6IC13ZWJraXQtZml0LWNvbnRlbnQ7XG4gIHdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xuICB3aWR0aDogZml0LWNvbnRlbnRcbn1cblxuLmluZGV4LW92ZXJhbGxSYXRpbmc6aG92ZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNTM1NzY2XG59XG5cbi5pbmRleC1wcm9kdWN0UmF0aW5nc0ljb24ge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW4tbGVmdDogNXB4XG59XG5cbi5za2VsZXRvbi1za2VsZXRvbkxvYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogOTkuOTklO1xuICBoZWlnaHQ6IDk5Ljk5JTtcbiAgYmFja2dyb3VuZDogI2VhZWFlYyAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgwLCAjZWFlYWVjKSwgY29sb3Itc3RvcCgzNSUsICNkYWQ5ZDkpLCBjb2xvci1zdG9wKDcwJSwgI2VhZWFlYyksIHRvKCNlYWVhZWMpKSBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQ6ICNlYWVhZWMgbGluZWFyLWdyYWRpZW50KGxlZnQsICNlYWVhZWMsICNkYWQ5ZDkgMzUlLCAjZWFlYWVjIDcwJSwgI2VhZWFlYykgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDgwMHB4IDEwMCU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBza2VsZXRvbi1sb2FkaW5nLXNrZWxldG9uIDEuN3MgY3ViaWMtYmV6aWVyKC4yNSwgLjQ2LCAuNDUsIC45NCkgaW5maW5pdGUgZm9yd2FyZHM7XG4gIGFuaW1hdGlvbjogc2tlbGV0b24tbG9hZGluZy1za2VsZXRvbiAxLjdzIGN1YmljLWJlemllciguMjUsIC40NiwgLjQ1LCAuOTQpIGluZmluaXRlIGZvcndhcmRzXG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBza2VsZXRvbi1sb2FkaW5nLXNrZWxldG9uIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00NjhweCAwXG4gIH1cblxuICB0byB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNDY4cHggMFxuICB9XG59XG5cbkBrZXlmcmFtZXMgc2tlbGV0b24tbG9hZGluZy1za2VsZXRvbiB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDY4cHggMFxuICB9XG5cbiAgdG8ge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDQ2OHB4IDBcbiAgfVxufVxuXG4uaW1hZ2UtdGh1bWItd3JhcHBlci1pbWFnZVRodW1iV3JhcHBlciAuaW1hZ2UtdGh1bWItd3JhcHBlci1oZWFkbGluZSB7XG4gIGNvbG9yOiAjMjgyYzNmO1xuICBsaW5lLWhlaWdodDogMS40O1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1ib3R0b206IDVweFxufVxuXG4uaW1hZ2UtdGh1bWItd3JhcHBlci1jb250YWluZXIge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMCAtNXB4XG59XG5cbi5pbWFnZS10aHVtYi13cmFwcGVyLWNvbnRhaW5lciAuaW1hZ2UtdGh1bWItd3JhcHBlci10aHVtYiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDc1cHg7XG4gIGhlaWdodDogNzVweDtcbiAgbWFyZ2luOiA1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlblxufVxuXG4uaW1hZ2UtdGh1bWItd3JhcHBlci1jb250YWluZXIgLmltYWdlLXRodW1iLXdyYXBwZXItdGh1bWIgLmltYWdlLXRodW1iLXdyYXBwZXItaW1hZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlclxufVxuXG4uaW1hZ2UtdGh1bWItd3JhcHBlci1jb250YWluZXIgLmltYWdlLXRodW1iLXdyYXBwZXItdGh1bWJMYXN0OmFmdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgY29udGVudDogXCJcIjtcbiAgb3BhY2l0eTogLjg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyODJjM2Y7XG4gIHotaW5kZXg6IDNcbn1cblxuLmltYWdlLXRodW1iLXdyYXBwZXItY29udGFpbmVyIC5pbWFnZS10aHVtYi13cmFwcGVyLWltYWdlQ291bnQge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNHB4O1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIxcHg7XG4gIHotaW5kZXg6IDQ7XG4gIHRleHQtYWxpZ246IGNlbnRlclxufVxuXG4uaW5kZXgtcmF0aW5nQmFyQ29udGFpbmVyIHtcbiAgbWFyZ2luLWxlZnQ6IDQ2cHg7XG4gIGhlaWdodDogMThweFxufVxuXG4uaW5kZXgtcmF0aW5nQmFyQ29udGFpbmVyIC5pbmRleC1mbGV4Um93IHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC1kaXJlY3Rpb246IHJvd1xufVxuXG4uaW5kZXgtcmF0aW5nQmFyQ29udGFpbmVyIC5pbmRleC1yYXRpbmcge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNhOWFiYjNcbn1cblxuLmluZGV4LXJhdGluZ0JhckNvbnRhaW5lciAuaW5kZXgtcmF0aW5nIC5pbmRleC1yYXRpbmdMZXZlbCB7XG4gIHdpZHRoOiA3cHhcbn1cblxuLmluZGV4LXJhdGluZ0JhckNvbnRhaW5lciBwcm9ncmVzcyB7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogNHB4O1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY2XG59XG5cbi5pbmRleC1yYXRpbmdCYXJDb250YWluZXIgcHJvZ3Jlc3M6Oi13ZWJraXQtcHJvZ3Jlc3MtYmFyIHtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNlxufVxuXG4uaW5kZXgtcmF0aW5nQmFyQ29udGFpbmVyIHByb2dyZXNzW2RhdGEtcmF0aW5nPVwiNFwiXTo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZSxcbi5pbmRleC1yYXRpbmdCYXJDb250YWluZXIgcHJvZ3Jlc3NbZGF0YS1yYXRpbmc9XCI1XCJdOjotd2Via2l0LXByb2dyZXNzLXZhbHVlIHtcbiAgYmFja2dyb3VuZDogIzE0OTU4ZlxufVxuXG4uaW5kZXgtcmF0aW5nQmFyQ29udGFpbmVyIHByb2dyZXNzW2RhdGEtcmF0aW5nPVwiM1wiXTo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZSB7XG4gIGJhY2tncm91bmQ6ICM3MmJmYmNcbn1cblxuLmluZGV4LXJhdGluZ0JhckNvbnRhaW5lciBwcm9ncmVzc1tkYXRhLXJhdGluZz1cIjJcIl06Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUge1xuICBiYWNrZ3JvdW5kOiAjZmNiMzAxXG59XG5cbi5pbmRleC1yYXRpbmdCYXJDb250YWluZXIgcHJvZ3Jlc3NbZGF0YS1yYXRpbmc9XCIxXCJdOjotd2Via2l0LXByb2dyZXNzLXZhbHVlIHtcbiAgYmFja2dyb3VuZDogI2YxNjU2NVxufVxuXG4uaW5kZXgtcmF0aW5nQmFyQ29udGFpbmVyIHByb2dyZXNzW2RhdGEtcmF0aW5nPVwiNFwiXTo6LW1vei1wcm9ncmVzcy1iYXIsXG4uaW5kZXgtcmF0aW5nQmFyQ29udGFpbmVyIHByb2dyZXNzW2RhdGEtcmF0aW5nPVwiNVwiXTo6LW1vei1wcm9ncmVzcy1iYXIge1xuICBiYWNrZ3JvdW5kOiAjMTQ5NThmXG59XG5cbi5pbmRleC1yYXRpbmdCYXJDb250YWluZXIgcHJvZ3Jlc3NbZGF0YS1yYXRpbmc9XCIzXCJdOjotbW96LXByb2dyZXNzLWJhciB7XG4gIGJhY2tncm91bmQ6ICM3MmJmYmNcbn1cblxuLmluZGV4LXJhdGluZ0JhckNvbnRhaW5lciBwcm9ncmVzc1tkYXRhLXJhdGluZz1cIjJcIl06Oi1tb3otcHJvZ3Jlc3MtYmFyIHtcbiAgYmFja2dyb3VuZDogI2ZjYjMwMVxufVxuXG4uaW5kZXgtcmF0aW5nQmFyQ29udGFpbmVyIHByb2dyZXNzW2RhdGEtcmF0aW5nPVwiMVwiXTo6LW1vei1wcm9ncmVzcy1iYXIge1xuICBiYWNrZ3JvdW5kOiAjZjE2NTY1XG59XG5cbi5pbmRleC1yYXRpbmdCYXJDb250YWluZXIgcHJvZ3Jlc3NbZGF0YS1yYXRpbmc9XCI0XCJdLFxuLmluZGV4LXJhdGluZ0JhckNvbnRhaW5lciBwcm9ncmVzc1tkYXRhLXJhdGluZz1cIjVcIl0ge1xuICBjb2xvcjogIzE0OTU4ZlxufVxuXG4uaW5kZXgtcmF0aW5nQmFyQ29udGFpbmVyIHByb2dyZXNzW2RhdGEtcmF0aW5nPVwiM1wiXSB7XG4gIGNvbG9yOiAjNzJiZmJjXG59XG5cbi5pbmRleC1yYXRpbmdCYXJDb250YWluZXIgcHJvZ3Jlc3NbZGF0YS1yYXRpbmc9XCIyXCJdIHtcbiAgY29sb3I6ICNmY2IzMDFcbn1cblxuLmluZGV4LXJhdGluZ0JhckNvbnRhaW5lciBwcm9ncmVzc1tkYXRhLXJhdGluZz1cIjFcIl0ge1xuICBjb2xvcjogI2YxNjU2NVxufVxuXG4uaW5kZXgtcmF0aW5nQmFyQ29udGFpbmVyIC5pbmRleC1jb3VudCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICMyODJjM2Y7XG4gIG1hcmdpbi1sZWZ0OiA5cHhcbn1cblxuLmluZGV4LWdyYXlTdGFySWNvbiB7XG4gIG1hcmdpbjogMnB4IDNweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC44KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSguOClcbn1cblxuLmJyZWFkY3J1bWJzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAyOXB4IDAgMjJweDtcbiAgZm9udC1zaXplOiAxNHB4XG59XG5cbi5icmVhZGNydW1icy1saW5rIHtcbiAgY29sb3I6ICMyODJjM2Y7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcGFkZGluZy1ib3R0b206IDFweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50XG59XG5cbi5icmVhZGNydW1icy1saW5rOmhvdmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkNWQ2ZDlcbn1cblxuLmJyZWFkY3J1bWJzLWJvbGRMaW5rIHtcbiAgZm9udC13ZWlnaHQ6IDUwMFxufVxuXG4uYnJlYWRjcnVtYnMtYm9sZExpbms6aG92ZXIge1xuICBib3JkZXItYm90dG9tOiBub25lXG59XG5cbi5icmVhZGNydW1icy1zZXBhcmF0b3Ige1xuICBjb2xvcjogIzI4MmMzZjtcbiAgbWFyZ2luOiAwIDVweDtcbiAgcGFkZGluZy10b3A6IDVweFxufVxuXG4uZHJvcGRvd24tZmlsdGVyLWRyb3Bkb3duRmlsdGVyQ29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE4cHhcbn1cblxuLmRyb3Bkb3duLWZpbHRlci1kcm9wZG93bkZpbHRlckNvbnRhaW5lciAuZHJvcGRvd24tZmlsdGVyLWFjdGl2ZSB7XG4gIGNvbG9yOiAjZmYzZjZjO1xuICBjdXJzb3I6IHBvaW50ZXJcbn1cblxuLmRyb3Bkb3duLWZpbHRlci1kcm9wZG93bkZpbHRlckNvbnRhaW5lciAuZHJvcGRvd24tZmlsdGVyLWFjdGl2ZSBzcGFuPi5kcm9wZG93bi1maWx0ZXItc3Rhckljb24ge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjg4cHggLTk1cHhcbn1cblxuLmRyb3Bkb3duLWZpbHRlci1kcm9wZG93bkZpbHRlckNvbnRhaW5lciAuZHJvcGRvd24tZmlsdGVyLWRyb3Bkb3duIHtcbiAgb3BhY2l0eTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDZweCAwIHJnYmEoMCwgMCwgMCwgLjIpO1xuICBib3gtc2hhZG93OiAwIDAgNnB4IDAgcmdiYSgwLCAwLCAwLCAuMik7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHRvcDogMTAwJTtcbiAgd2lkdGg6IDE0OHB4O1xuICBwYWRkaW5nOiAxM3B4IDE1cHg7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcmlnaHQ6IDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdG9wIC4zcywgb3BhY2l0eSAuMXM7XG4gIHRyYW5zaXRpb246IHRvcCAuM3MsIG9wYWNpdHkgLjFzXG59XG5cbi5kcm9wZG93bi1maWx0ZXItZHJvcGRvd25GaWx0ZXJDb250YWluZXIgLmRyb3Bkb3duLWZpbHRlci1kcm9wZG93bi5kcm9wZG93bi1maWx0ZXItb3BlbiB7XG4gIHotaW5kZXg6IDE7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdG9wIC4zcywgb3BhY2l0eSAuMXM7XG4gIHRyYW5zaXRpb246IHRvcCAuM3MsIG9wYWNpdHkgLjFzO1xuICBvcGFjaXR5OiAxO1xuICB0b3A6IDE0MCU7XG4gIGNvbG9yOiAjZmYzZjZjO1xuICBjdXJzb3I6IHBvaW50ZXJcbn1cblxuLmRyb3Bkb3duLWZpbHRlci1kcm9wZG93bkZpbHRlckNvbnRhaW5lciAuZHJvcGRvd24tZmlsdGVyLWhlYWRpbmcge1xuICBjb2xvcjogI2E5YWJiMztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBtYXJnaW4tYm90dG9tOiAtNXB4XG59XG5cbi5kcm9wZG93bi1maWx0ZXItZHJvcGRvd25GaWx0ZXJDb250YWluZXIgLmRyb3Bkb3duLWZpbHRlci1pdGVtIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM1MzU3NjY7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIGN1cnNvcjogcG9pbnRlclxufVxuXG4uZHJvcGRvd24tZmlsdGVyLWRyb3Bkb3duRmlsdGVyQ29udGFpbmVyIC5kcm9wZG93bi1maWx0ZXItaXRlbS5kcm9wZG93bi1maWx0ZXItYWN0aXZlIHtcbiAgY29sb3I6ICNmZjNmNmNcbn1cblxuLmRyb3Bkb3duLWZpbHRlci1kcm9wZG93bkZpbHRlckNvbnRhaW5lciAuZHJvcGRvd24tZmlsdGVyLWRpdmlkZXIge1xuICBtYXJnaW46IDE1cHggMDtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYWVhZWNcbn1cblxuLmRyb3Bkb3duLWZpbHRlci1kcm9wZG93bkZpbHRlckNvbnRhaW5lciAuZHJvcGRvd24tZmlsdGVyLWFycm93SWNvbiB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDZweDtcbiAgdG9wOiA2cHhcbn1cblxuLmRyb3Bkb3duLWZpbHRlci1kcm9wZG93bkZpbHRlckNvbnRhaW5lciAuZHJvcGRvd24tZmlsdGVyLWFycm93SWNvbi5kcm9wZG93bi1maWx0ZXItYWN0aXZlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICB0b3A6IDNweFxufVxuXG4uZHJvcGRvd24tZmlsdGVyLWFycm93SWNvbiB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMylcbn1cblxuLmRyb3Bkb3duLWZpbHRlci1zdGFySWNvbiB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgyKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcbiAgbWFyZ2luOiAwIDNweCAzcHggMnB4XG59XG5cbi5wcm9kdWN0LWRldGFpbHMtY29udGFpbmVyIHtcbiAgd2lkdGg6IDM4MHB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4XG59XG5cbi5wcm9kdWN0LWRldGFpbHMtY29udGFpbmVyIC5wcm9kdWN0LWRldGFpbHMtYnJhbmQge1xuICBjb2xvcjogIzI4MmMzZjtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgcGFkZGluZzogMCAyMHB4IDAgMDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMVxufVxuXG4ucHJvZHVjdC1kZXRhaWxzLWNvbnRhaW5lciAucHJvZHVjdC1kZXRhaWxzLW5hbWUge1xuICBjb2xvcjogIzUzNTY2NTtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgcGFkZGluZzogNXB4IDIwcHggMTRweCAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIG9wYWNpdHk6IC44O1xuICBmb250LXdlaWdodDogNDAwXG59XG5cbi5wcm9kdWN0LWRldGFpbHMtY29udGFpbmVyIC5wcm9kdWN0LWRldGFpbHMtZGlzY291bnRDb250YWluZXIge1xuICBjb2xvcjogIzY5NmU3OTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9ja1xufVxuXG4ucHJvZHVjdC1kZXRhaWxzLWNvbnRhaW5lciAucHJvZHVjdC1kZXRhaWxzLWRpc2NvdW50IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogLjVweDtcbiAgY29sb3I6ICNmZjkwNWFcbn1cblxuLnByb2R1Y3QtZGV0YWlscy1jb250YWluZXIgLnByb2R1Y3QtZGV0YWlscy1zZWxsaW5nLXByaWNlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IDAgMCAxMHB4XG59XG5cbi5wcm9kdWN0LWRldGFpbHMtY29udGFpbmVyIC5wcm9kdWN0LWRldGFpbHMtcHJpY2Uge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjb2xvcjogIzI4MmMzZjtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXJcbn1cblxuLnByb2R1Y3QtZGV0YWlscy1jb250YWluZXIgLnByb2R1Y3QtZGV0YWlscy1tcnAge1xuICBoZWlnaHQ6IDIycHg7XG4gIG9wYWNpdHk6IC44O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGNvbG9yOiAjMjgyYzNmO1xuICBtYXJnaW4tcmlnaHQ6IDEycHhcbn1cblxuLnByb2R1Y3QtZGV0YWlscy1jb250YWluZXIgLnByb2R1Y3QtZGV0YWlscy1pbWFnZVdyYXBwZXIge1xuICB3aWR0aDogMzc4cHg7XG4gIGhlaWdodDogNTA0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWM7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZVxufVxuXG4ucHJvZHVjdC1kZXRhaWxzLWNvbnRhaW5lciAucHJvZHVjdC1kZXRhaWxzLWltYWdlV3JhcHBlciAucHJvZHVjdC1kZXRhaWxzLWltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDJcbn1cblxuLmltYWdlLWdyaWQtY29udGFpbmVyIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA1OCVcbn1cblxuLmltYWdlLWdyaWQtc2VwIHtcbiAgY2xlYXI6IGJvdGhcbn1cblxuLmltYWdlLWdyaWQtaW1hZ2VDb250YWluZXIge1xuICBoZWlnaHQ6IDA7XG4gIHBhZGRpbmctdG9wOiAxMzMuMzMzMzMzMzMzMzMzMzElO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmNWY1ZjZcbn1cblxuLmltYWdlLWdyaWQtaW1hZ2VDb250YWluZXI6aG92ZXIge1xuICBjdXJzb3I6IGNyb3NzaGFpcjtcbn1cblxuLmltYWdlLWdyaWQteGNlbGVyYXRvclRhZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMHB4O1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICB6LWluZGV4OiAyO1xuICBjb2xvcjogcmVkXG59XG5cbi5pbWFnZS1ncmlkLWltYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcbiAgYmFja2dyb3VuZC1vcmlnaW46IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gLjRzO1xuICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuNHM7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNHM7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNHMsIC13ZWJraXQtdHJhbnNmb3JtIC40cztcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybVxufVxuXG4uaW1hZ2UtZ3JpZC1pbWFnZTpob3ZlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA0KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA0KVxufVxuXG4uaW1hZ2UtZ3JpZC12aWRlb0NvbnRhaW5lciAuaW1hZ2UtZ3JpZC1pbWFnZSB7XG4gIHdpZHRoOiAxMDAuNSU7XG4gIGhlaWdodDogMTAwLjUlXG59XG5cbi5pbWFnZS1ncmlkLXZpZGVvQ29udGFpbmVyIC5pbWFnZS1ncmlkLWltYWdlOmhvdmVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpXG59XG5cbi5pbWFnZS1ncmlkLWNvbDUwIHtcbiAgd2lkdGg6IDQ5LjUlO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWJvdHRvbTogMSU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZVxufVxuXG4uaW1hZ2UtZ3JpZC1jb2wxMDAge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlXG59XG5cbi5pbWFnZS1ncmlkLWNvbDUwOm50aC1jaGlsZCgybikge1xuICBtYXJnaW4tbGVmdDogMSVcbn1cblxuLmltYWdlLWdyaWQtc2luZ2xlSW1hZ2VDb250YWluZXIgLmltYWdlLWdyaWQtY29sNTAge1xuICBtYXJnaW46IDAgYXV0bztcbiAgZmxvYXQ6IG5vbmVcbn1cblxuLmltYWdlLWdyaWQtc2ltaWxhckNvbG9yc0N0YSB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA0O1xuICBjb2xvcjogIzAwMDtcbiAgcmlnaHQ6IDIwcHg7XG4gIGJvdHRvbTogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RhZGFkZTtcbiAgbGluZS1oZWlnaHQ6IDMzcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xuICB3aWxsLWNoYW5nZTogY29udGVudHM7XG4gIGJhY2tncm91bmQ6ICNmZmZcbn1cblxuLmltYWdlLWdyaWQtaWNvblRleHQge1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogI2ZmNTE3YjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAxNHB4XG59XG5cbi5pbWFnZS1ncmlkLXNpbWlsYXJDb2xvcnNDdGE6aG92ZXIge1xuICBib3JkZXItcmFkaXVzOiA0MnB4O1xuICB3aWR0aDogMTQwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogMTNweFxufVxuXG4uaW1hZ2UtZ3JpZC1zaW1pbGFyQ29sb3JzQ3RhOmhvdmVyIC5pbWFnZS1ncmlkLWljb25UZXh0IHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiA0cHhcbn1cblxuLmltYWdlLWdyaWQtc2ltaWxhckNvbG9yc0ljb24ge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXG59XG5cbi5pbWFnZS1ncmlkLXNrZWxldG9uTG9hZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiA5OS45OSU7XG4gIGhlaWdodDogOTkuOTklO1xuICBiYWNrZ3JvdW5kOiAjZWFlYWVjIC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBjb2xvci1zdG9wKDAsICNlYWVhZWMpLCBjb2xvci1zdG9wKDM1JSwgI2RhZDlkOSksIGNvbG9yLXN0b3AoNzAlLCAjZWFlYWVjKSwgdG8oI2VhZWFlYykpIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZDogI2VhZWFlYyBsaW5lYXItZ3JhZGllbnQobGVmdCwgI2VhZWFlYywgI2RhZDlkOSAzNSUsICNlYWVhZWMgNzAlLCAjZWFlYWVjKSBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogODAwcHggMTAwJTtcbiAgLXdlYmtpdC1hbmltYXRpb246IGltYWdlLWdyaWQtbG9hZGluZy1za2VsZXRvbiAxLjdzIGN1YmljLWJlemllciguMjUsIC40NiwgLjQ1LCAuOTQpIGluZmluaXRlIGZvcndhcmRzO1xuICBhbmltYXRpb246IGltYWdlLWdyaWQtbG9hZGluZy1za2VsZXRvbiAxLjdzIGN1YmljLWJlemllciguMjUsIC40NiwgLjQ1LCAuOTQpIGluZmluaXRlIGZvcndhcmRzXG59XG5cbi5kZXNrdG9wLWltYWdlLXpvb20taGlkZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBub25lXG59XG5cbi5kZXNrdG9wLWltYWdlLXpvb20tY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuOCk7XG4gIHotaW5kZXg6IDEwXG59XG5cbi5kZXNrdG9wLWltYWdlLXpvb20tY29udGVudCB7XG4gIG1heC13aWR0aDogOTgwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGhlaWdodDogMTAwJTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgNXB4ICNkNWQ2ZDk7XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggI2Q1ZDZkOVxufVxuXG4uZGVza3RvcC1pbWFnZS16b29tLXByZXZpb3VzLWljb24ge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZylcbn1cblxuLmRlc2t0b3AtaW1hZ2Utem9vbS1pbWFnZS1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBjdXJzb3I6IGFsbC1zY3JvbGw7XG4gIGN1cnNvcjogem9vbS1pbjtcbn1cblxuLmRlc2t0b3AtaW1hZ2Utem9vbS1pbWFnZS1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDBcbn1cblxuLmRlc2t0b3AtaW1hZ2Utem9vbS1wcmltYXJ5LWltYWdlIHtcbiAgd2lkdGg6IDk4MHB4O1xuICBoZWlnaHQ6IDEzMDZweFxufVxuXG4uZGVza3RvcC1pbWFnZS16b29tLXRodW1ibmFpbC1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogMTBweDtcbiAgd2lkdGg6IDMwcHhcbn1cblxuLmRlc2t0b3AtaW1hZ2Utem9vbS10aHVtYm5haWwge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDVkNmQ5O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiA0MHB4XG59XG5cbi5kZXNrdG9wLWltYWdlLXpvb20tdGh1bWJuYWlsLWJ1dHRvbiB7XG4gIG91dGxpbmU6IDA7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudFxufVxuXG4uZGVza3RvcC1pbWFnZS16b29tLXNlbGVjdGVkLXRodW1ibmFpbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZjUxN2Jcbn1cblxuLmRlc2t0b3AtaW1hZ2Utem9vbS1mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1pbi1oZWlnaHQ6IDU4cHg7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlclxufVxuXG4uZGVza3RvcC1pbWFnZS16b29tLXByaWNpbmcge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgcGFkZGluZy10b3A6IDE1cHhcbn1cblxuLmRlc2t0b3AtaW1hZ2Utem9vbS1zaXplIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrXG59XG5cbi5kZXNrdG9wLWltYWdlLXpvb20tc2VsbGluZy1wcmljZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDBcbn1cblxuLmRlc2t0b3AtaW1hZ2Utem9vbS1kaXNjb3VudCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIDE1cHhcbn1cblxuLmRlc2t0b3AtaW1hZ2Utem9vbS1kaXNjb3VudC10ZXh0IHtcbiAgY29sb3I6ICNmMTY1NjU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4XG59XG5cbi5kZXNrdG9wLWltYWdlLXpvb20tYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBvdXRsaW5lOiAwO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gIGZvbnQtc2l6ZTogMTFweFxufVxuXG4uZGVza3RvcC1pbWFnZS16b29tLWFkZC10by1iYWcge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgcGFkZGluZzogMTBweCA0MHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMGJkOTk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyMGJkOTk7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHhcbn1cblxuLmRlc2t0b3AtaW1hZ2Utem9vbS1pY29uIHtcbiAgb3V0bGluZTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjM2U0MTUyO1xuICBmb250LXdlaWdodDogNTAwO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNWQ2ZDlcbn1cblxuLmRlc2t0b3AtaW1hZ2Utem9vbS1pY29uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNlxufVxuXG4uZGVza3RvcC1pbWFnZS16b29tLWNsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4IDEwcHggN3B4XG59XG5cbi5kZXNrdG9wLWltYWdlLXpvb20tbmV4dCB7XG4gIHBhZGRpbmc6IDEwcHggMTdweCA4cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0NSU7XG4gIHJpZ2h0OiAxMHB4XG59XG5cbi5kZXNrdG9wLWltYWdlLXpvb20tcHJldmlvdXMge1xuICBwYWRkaW5nOiAxMHB4IDE3cHggOHB4IDE2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0NSU7XG4gIGxlZnQ6IDEwcHhcbn1cblxuLnByb2R1Y3QtbGlzdC1saXN0IHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi1sZWZ0OiAtNDBweDtcbiAgbWFyZ2luLXRvcDogLTQwcHg7XG4gIHBhZGRpbmc6IDBcbn1cblxuLnByb2R1Y3QtbGlzdC1naXN0IHtcbiAgcGFkZGluZy1ib3R0b206IDE0cHg7XG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gIC1tcy1mbGV4OiAxIDAgMTkwcHg7XG4gIGZsZXg6IDEgMCAxOTBweDtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW4tbGVmdDogNDBweDtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgbWF4LXdpZHRoOiBjYWxjKDE2LjY2NjY3JSAtIDQwcHgpO1xuICBvdXRsaW5lOiAxcHggc29saWQgI2U5ZTllYlxufVxuXG4ucHJvZHVjdC1saXN0LWdpc3Q6aG92ZXIge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDE2cHggNHB4IHJnYmEoNDAsIDQ0LCA2MywgLjA3KTtcbiAgYm94LXNoYWRvdzogMCAycHggMTZweCA0cHggcmdiYSg0MCwgNDQsIDYzLCAuMDcpXG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOjE0MDBweCkge1xuICAucHJvZHVjdC1saXN0LWdpc3Qge1xuICAgIG1heC13aWR0aDogY2FsYygyMCUgLSA0MHB4KVxuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOjE1OTlweCkge1xuICAucHJvZHVjdC1saXN0LWdpc3Qge1xuICAgIG1heC13aWR0aDogY2FsYygxNC4yODU3JSAtIDQwcHgpXG4gIH1cbn1cblxuLnByb2R1Y3QtbGlzdC1saW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBvdXRsaW5lOiAwXG59XG5cbi5wcm9kdWN0LWl0ZW0tY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwXG59XG5cbi5wcm9kdWN0LWl0ZW0taW1hZ2Uge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwXG59XG5cbi5wcm9kdWN0LWl0ZW0tYnJhbmQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMjgyYzNmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW46IDBcbn1cblxuLnByb2R1Y3QtaXRlbS10aXRsZSB7XG4gIG1hcmdpbjogNHB4IDAgOHB4O1xuICBjb2xvcjogIzUzNTc2NjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmVcbn1cblxuLnByb2R1Y3QtaXRlbS1wcmljaW5nLFxuLnByb2R1Y3QtaXRlbS10aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpc1xufVxuXG4ucHJvZHVjdC1pdGVtLXByaWNpbmcge1xuICBmb250LXNpemU6IDE2cHhcbn1cblxuLnByb2R1Y3QtaXRlbS1pbWFnZUN0biB7XG4gIGhlaWdodDogMDtcbiAgcGFkZGluZy10b3A6IDEzMy4zMzMzMzMzMzMzMzMzMSU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhZWFlYztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWU5ZWJcbn1cblxuLnByb2R1Y3QtaXRlbS1zZWxsaW5nLXByaWNlIHtcbiAgY29sb3I6ICMyODJjM2Y7XG4gIHBhZGRpbmc6IDAgM3B4IDAgMDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNnB4XG59XG5cbi5wcm9kdWN0LWl0ZW0tbWV0YUNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHhcbn1cblxuLnByb2R1Y3QtaXRlbS1tcnAge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgY29sb3I6ICMyODJjM2Y7XG4gIHBhZGRpbmc6IDAgM3B4O1xuICBvcGFjaXR5OiAuNztcbiAgZm9udC1zaXplOiAxMnB4XG59XG5cbi5wcm9kdWN0LWl0ZW0tZGlzY291bnQge1xuICBjb2xvcjogI2ZmOTA1YTtcbiAgcGFkZGluZzogMCAzcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMFxufVxuXG4ucHJvZHVjdC1pdGVtLWRpc2NvdW50IGIsXG4ucHJvZHVjdC1pdGVtLWRpc2NvdW50IGVtIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwXG59XG5cbi5wcm9kdWN0LWl0ZW0tZGlzY291bnQgLnByb2R1Y3QtaXRlbS1naWZ0LFxuLnByb2R1Y3QtaXRlbS1kaXNjb3VudCBkaXYsXG4ucHJvZHVjdC1pdGVtLWRpc2NvdW50IHAge1xuICBkaXNwbGF5OiBpbmxpbmVcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6NjAwcHgpIHtcbiAgLnByb2R1Y3QtaXRlbS1jb250YWluZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNGQ1ZDk7XG4gICAgbWFyZ2luOiAwO1xuICAgIHdpZHRoOiAxODBweFxuICB9XG5cbiAgLnByb2R1Y3QtaXRlbS10aXRsZSB7XG4gICAgd2lkdGg6IDE2MHB4O1xuICAgIG1hcmdpbjogMCAxMHB4IDEwcHhcbiAgfVxufVxuXG4ucHJvZHVjdC1pdGVtLXJhdGluZ3NDb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIHBhZGRpbmctbGVmdDogNHB4O1xuICBtYXJnaW46IC0yNHB4IDAgMCA2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWM7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXJcbn1cblxuLnByb2R1Y3QtaXRlbS1yYXRpbmdzQ29udGFpbmVyIC5wcm9kdWN0LWl0ZW0tc3Rhckljb24ge1xuICBtYXJnaW4tbGVmdDogLTRweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC40KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSguNClcbn1cblxuLnNpbWlsYXItY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIGNsZWFyOiBib3RoO1xuICBwYWRkaW5nLWxlZnQ6IDJweDtcbiAgcGFkZGluZy1yaWdodDogMnB4XG59XG5cbi5zaW1pbGFyLWhlYWRpbmcge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmc6IDA7XG4gIGNvbG9yOiAjMjgyYzNmO1xuICBtYXJnaW46IDAgMCAyNHB4XG59XG5cbi5zaW1pbGFyLXN1YnRpdGxlIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIGNvbG9yOiAjOTQ5ODlmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IDMwcHhcbn1cblxuLnNpbWlsYXItY29udGFpbmVyOmJlZm9yZSB7XG4gIGNsZWFyOiBib3RoXG59XG5cbkBtZWRpYSAobWluLXdpZHRoOjYwMHB4KSB7XG4gIC5zaW1pbGFyLWNvbnRhaW5lciB7XG4gICAgb3ZlcmZsb3c6IGF1dG9cbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDo5ODBweCkge1xuXG4gIC5zaW1pbGFyLWhlYWRpbmcsXG4gIC5zaW1pbGFyLXN1YnRpdGxlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBcbiAgfVxufVxuXG4uY3Jvc3NzZWxsLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBjbGVhcjogYm90aDtcbiAgcGFkZGluZy1sZWZ0OiAycHg7XG4gIHBhZGRpbmctcmlnaHQ6IDJweFxufVxuXG4uY3Jvc3NzZWxsLWhlYWRpbmcge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmc6IDA7XG4gIGNvbG9yOiAjMjgyYzNmO1xuICBtYXJnaW46IDAgMCAyNHB4XG59XG5cbi5jcm9zc3NlbGwtc3VidGl0bGUge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgY29sb3I6ICM5NDk4OWY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogMzBweFxufVxuXG4uY3Jvc3NzZWxsLWNvbnRhaW5lcjpiZWZvcmUge1xuICBjbGVhcjogYm90aFxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDo2MDBweCkge1xuICAuY3Jvc3NzZWxsLWNvbnRhaW5lciB7XG4gICAgb3ZlcmZsb3c6IGF1dG9cbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDo5ODBweCkge1xuXG4gIC5jcm9zc3NlbGwtaGVhZGluZyxcbiAgLmNyb3Nzc2VsbC1zdWJ0aXRsZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAwXG4gIH1cbn1cblxuLnBpbmNvZGUtZGVsaXZlcnlDb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAzMHB4XG59XG5cbi5waW5jb2RlLWRlbGl2ZXJ5Q29udGFpbmVyPmg0IHtcbiAgY29sb3I6ICMyODJjM2Y7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlXG59XG5cbi5waW5jb2RlLWRlbGl2ZXJ5Q29udGFpbmVyPmZvcm0ge1xuICBtYXJnaW46IDE2cHggMCAwO1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmVcbn1cblxuLnBpbmNvZGUtYnV0dG9uIHtcbiAgb3V0bGluZTogMDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDA7XG4gIGNvbG9yOiAjZmYzZTZjO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZVxufVxuXG4ucGluY29kZS1jaGVjayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogLTYwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50XG59XG5cbi5waW5jb2RlLWhlYWRpbmcge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGNvbG9yOiAjNjk2Yjc5O1xuICBmb250LXdlaWdodDogNTAwXG59XG5cbi5waW5jb2RlLWVudGVyUGluY29kZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICMyODJjM2Y7XG4gIG1hcmdpbjogOHB4IDAgMFxufVxuXG4ucGluY29kZS1jaGVjay1hbm90aGVyLXBpbmNvZGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IC02MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudFxufVxuXG4ucGluY29kZS1zZXJ2aWNlYWJpbGl0eUZvcm0ge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweFxufVxuXG4ucGluY29kZS1jb2RlIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDRkNWQ5O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDA7XG4gIGJveC1zaGFkb3c6IDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWluLXdpZHRoOiAxNjBweDtcbiAgb3V0bGluZTogMDtcbiAgd2lkdGg6IDI1MHB4XG59XG5cbi5waW5jb2RlLWNvZGU6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lXG59XG5cbi5waW5jb2RlLWNvZGU6Oi1tb3otZm9jdXMtaW5uZXIge1xuICBib3JkZXI6IDBcbn1cblxuLnBpbmNvZGUtY29kZTpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNGQ1ZDlcbn1cblxuLnBpbmNvZGUtY2hlY2tTZXJ2aWNlQWJpbGl0eWhhbGZDYXJkIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjIpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAxMFxufVxuXG4ucGluY29kZS1waWNvZGVDaGVja0NvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcGFkZGluZzogMCAyMHB4IDIwcHg7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmXG59XG5cbi5waW5jb2RlLXRpY2sge1xuICBtYXJnaW46IDAgNXB4IDAgMFxufVxuXG4ucGluY29kZS1zZXJ2aWNlYWJpbGl0eS1saXN0IHtcbiAgbWFyZ2luOiAxNnB4IDAgMDtcbiAgcGFkZGluZzogMDtcbiAgbGluZS1oZWlnaHQ6IDIwcHhcbn1cblxuLnBpbmNvZGUtc2VydmljZWFiaWxpdHktbGlzdCBsaSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzY5NmU3OTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweFxufVxuXG4ucGluY29kZS1zZXJ2aWNlYWJpbGl0eS1saXN0IGxpIGg0IHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzI4MmMzZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiAwO1xuICBsaW5lLWhlaWdodDogMS4yNVxufVxuXG4ucGluY29kZS1zZXJ2aWNlYWJpbGl0eS1saXN0IGxpIHAge1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW46IDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjQzO1xuICBjb2xvcjogIzdlODA4YztcbiAgZm9udC1zaXplOiAxNHB4XG59XG5cbi5waW5jb2RlLXRpY2tjb250YWluZXIge1xuICBoZWlnaHQ6IDE2cHg7XG4gIHdpZHRoOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjNjNWEwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGVmdDogNzhweDtcbiAgdG9wOiAycHg7XG4gIG1hcmdpbjogMTBweCAwO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wXG59XG5cbi5waW5jb2RlLXRpY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogM3B4O1xuICBsZWZ0OiA2cHg7XG4gIGhlaWdodDogOHB4O1xuICB3aWR0aDogNHB4O1xuICBib3JkZXI6IHNvbGlkICNmZmY7XG4gIGJvcmRlci13aWR0aDogMCAxcHggMXB4IDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveFxufVxuXG4ucGluY29kZS10aWNrU21hbGxDb250YWluZXIge1xuICBoZWlnaHQ6IDhweDtcbiAgd2lkdGg6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2U4MDhjO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiA2cHggMTBweCAwIDBcbn1cblxuLnBpbmNvZGUtdGlja1NtYWxsIHtcbiAgdG9wOiAycHg7XG4gIGxlZnQ6IDNweDtcbiAgaGVpZ2h0OiA0cHg7XG4gIHdpZHRoOiAycHhcbn1cblxuLnBpbmNvZGUtc2VydmljZWFiaWxpdHlDb250YWluZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHdpZHRoOiA5MCVcbn1cblxuLnBpbmNvZGUtc2VydmljZWFiaWxpdHlUaXRsZSB7XG4gIGNvbG9yOiAjNTM1NzY2O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGVcbn1cblxuLnBpbmNvZGUtc2VydmljZWFiaWxpdHlJdGVtIHtcbiAgbWF4LXdpZHRoOiA1MDBweFxufVxuXG4ucGluY29kZS1zZXJ2aWNlYWJpbGl0eUljb24ge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGVcbn1cblxuLnBpbmNvZGUtc2VydmljZWFiaWxpdHlWaWV3TW9yZSB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICNmZjNlNmM7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luOiAxMHB4IDE2cHggMCAwO1xuICBmb250LXNpemU6IDEzcHhcbn1cblxuLnBpbmNvZGUtcmlnaHRBcnJvdyB7XG4gIHdpZHRoOiAxNnB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcFxufVxuXG4ucGluY29kZS1lcnJvciB7XG4gIGNvbG9yOiAjZmY1NzIyO1xuICBmb250LXNpemU6IDE1cHhcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjQyNXB4KSB7XG4gIC5waW5jb2RlLWNoZWNrU2VydmljZUFiaWxpdHloYWxmQ2FyZCB7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGhlaWdodDogYXV0b1xuICB9XG5cbiAgLnBpbmNvZGUtcGljb2RlQ2hlY2tDb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDBcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDo0MjRweCkgYW5kIChtaW4td2lkdGg6MzIwcHgpIHtcbiAgLnBpbmNvZGUtY2hlY2tTZXJ2aWNlQWJpbGl0eWhhbGZDYXJkIHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgaGVpZ2h0OiBhdXRvXG4gIH1cblxuICAucGluY29kZS1waWNvZGVDaGVja0NvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMFxuICB9XG59XG4ucGluY29kZS1kZWxpdmVyeU9wdGlvbnNJY29uIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luLWxlZnQ6IDVweFxufVxuXG5cbkBtZWRpYSAobWluLXdpZHRoOiA0MjVweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5tYXJnaW5hIHtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gIH1cbiAgLmltYWdlLWdyaWQtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICB9XG4gIC5wZHAtcGRwLWNvbnRhaW5lciB7XG4gICAgbWluLXdpZHRoOiA0MjZweDtcbiAgfVxuICAucGRwLWZpeGVkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcbiAgfVxuICAucGRwLWRlc2NyaXB0aW9uLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAucGRwLWFkZC10by1iYWcge1xuICAgIGZsZXg6IDI7XG4gIH1cbiAgLmJyZWFkY3J1bWJzLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcblxuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAzNzVweCkgYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gIC5tYXJnaW5hIHtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gIH1cbiAgLmltYWdlLWdyaWQtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICB9XG4gIC5wZHAtcGRwLWNvbnRhaW5lciB7XG4gICAgbWluLXdpZHRoOiAzNjBweDtcbiAgfVxuICAucGRwLWRlc2NyaXB0aW9uLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAvLyAucGRwLWFjdGlvbi1jb250YWluZXIgeyBcbiAgLy8gICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgLy8gfVxuICAucGRwLWZpeGVkIHtcbiAgICBwb3NpdGlvbjogaW5oZXJpdDtcbiAgfVxuICAvLyAucGRwLWFkZC10by1iYWcge1xuICAvLyAgIG1pbi13aWR0aDogODBweDtcbiAgLy8gfVxuICAucGRwLWFkZC10by13aXNobGlzdCB7XG4gICAgd2lkdGg6IDcwJTtcbiAgfVxuICAuYnJlYWRjcnVtYnMtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuXG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogMzc0cHgpIHtcbiAgLm1hcmdpbmEge1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgfVxuICAucGRwLWFkZC10by1iYWcge1xuICAgIG1pbi13aWR0aDogODhweFxuICB9XG4gIC5pbWFnZS1ncmlkLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgfVxuICAucGRwLXBkcC1jb250YWluZXIge1xuICAgIG1pbi13aWR0aDogMjgwcHg7XG4gIH1cbiAgLnBkcC1kZXNjcmlwdGlvbi1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnBuLWNoZWNrIHtcbiAgICBsZWZ0OiAxOTBweDtcbiAgICB0b3A6IC00M3B4O1xuICB9XG4gIC8vIC5wZHAtYWN0aW9uLWNvbnRhaW5lciB7IFxuICAvLyAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAvLyB9XG4gIC5wZHAtZml4ZWQge1xuICAgIHBvc2l0aW9uOiBpbmhlcml0O1xuICB9XG4gIC8vIC5wZHAtYWRkLXRvLWJhZyB7XG4gIC8vICAgbWluLXdpZHRoOiA4MHB4O1xuICAvLyB9XG4gIC5wZHAtYWRkLXRvLXdpc2hsaXN0IHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gIC5icmVhZGNydW1icy1jb250YWluZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG5cbiAgfVxufVxuXG4iLCIubWFyZ2luYSB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5wZHAtcGRwLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTYwMHB4O1xuICBtaW4td2lkdGg6IDExMjhweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogNzAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDI4cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDI4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5wZHAtbW9iaWxlSW1hZ2Vab29tLFxuLnBkcC1wZHAtem9vbS1jb250YWluZXIge1xuICB6LWluZGV4OiAxNTtcbn1cblxuLnBkcC1oZWFydEJ1dHRvbkljb24ge1xuICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMXB4O1xuICByaWdodDogNnB4O1xufVxuXG4ucGRwLWRldGFpbHMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wZHAtZGVzY3JpcHRpb24tY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnBkcC10aXRsZSB7XG4gIGNvbG9yOiAjMjgyYzNmO1xuICBwYWRkaW5nOiAwIDIwcHggMCAwO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG4ucGRwLW5hbWUsXG4ucGRwLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLnBkcC1uYW1lIHtcbiAgY29sb3I6ICM1MzU2NjU7XG4gIHBhZGRpbmc6IDVweCAyMHB4IDE0cHggMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBvcGFjaXR5OiAwLjg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5wZHAtUFBDb3Vwb25JbmZvIHtcbiAgd2lkdGg6IDE5OXB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMzZTQxNTI7XG59XG5cbi5wZHAtc2VsbGluZy1wcmljZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnBkcC1kaXNjb3VudC1jb250YWluZXIge1xuICBjb2xvcjogIzY5NmU3OTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tdG9wOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnBkcC1kaXNjb3VudCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBjb2xvcjogI2ZmOTA1YTtcbn1cblxuLnBkcC1zZWxsaW5nLXByaWNlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IDAgMCAxMHB4O1xufVxuXG4ucGRwLXNpbWlsYXIge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi8uLi8uLi8uLi9hc3NldHMvTmF2L21vYmlsZS1pY29uLnBuZyk7XG59XG5cbi5wZHAtcHJpY2Uge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wZHAtbXJwLFxuLnBkcC1wcmljZSB7XG4gIGNvbG9yOiAjMjgyYzNmO1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG59XG5cbi5wZHAtbXJwIHtcbiAgaGVpZ2h0OiAyMnB4O1xuICBvcGFjaXR5OiAwLjg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cblxuLnBkcC1tcnAtdmVyYmlhZ2Uge1xuICBtaW4td2lkdGg6IDI3MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlM2UzZTM7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDhweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMTJweCAjZDNkM2QzO1xuICBib3gtc2hhZG93OiAwIDAgMTJweCAjZDNkM2QzO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnM7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIG9wYWNpdHk6IDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjAwMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC4wMDEpO1xuICBjb2xvcjogIzI4MmMzZjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ucGRwLW1ycC12ZXJiaWFnZSBkaXY6Zmlyc3QtY2hpbGQsXG4ucGRwLW1ycC12ZXJiaWFnZSBkaXY6bnRoLWNoaWxkKDUpLFxuLnBkcC1tcnAtdmVyYmlhZ2UgZGl2Om50aC1jaGlsZCg3KSB7XG4gIG1hcmdpbjogOHB4IDA7XG59XG5cbi5wZHAtbXJwLXZlcmJpYWdlIC5wZHAtbXJwLXZlcmJpYWdlLWFtdCB7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5wZHAtbXJwLXZlcmJpYWdlIGhyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UzZTNlMztcbn1cblxuLnBkcC1tcnAtdmVyYmlhZ2U6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDElO1xuICBsZWZ0OiAyMCU7XG4gIG1hcmdpbjogLTAuMjVlbTtcbiAgd2lkdGg6IDAuNWVtO1xuICBoZWlnaHQ6IDAuNWVtO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDEwcHggMTBweCAxMnB4ICNkM2QzZDM7XG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAxMnB4ICNkM2QzZDM7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjZmZmIDUwJSwgdHJhbnNwYXJlbnQgMCk7XG4gIGNvbnRlbnQ6IFwiXCI7XG59XG5cbi5wZHAtbXJwLXZlcmJpYWdlOmFjdGl2ZSxcbi5wZHAtbXJwLXZlcmJpYWdlOmZvY3VzLFxuLnBkcC1wcmljZTphY3RpdmUsXG4ucGRwLXByaWNlOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLnBkcC1tcnAtdmVyYmlhZ2U6YWN0aXZlLFxuLnBkcC1tcnAtdmVyYmlhZ2U6Zm9jdXMsXG4ucGRwLXByaWNlOmFjdGl2ZSArIC5wZHAtbXJwLXZlcmJpYWdlLFxuLnBkcC1wcmljZTpmb2N1cyArIC5wZHAtbXJwLXZlcmJpYWdlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICBvcGFjaXR5OiAxO1xufVxuXG4ucGRwLW9mZmVyIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIG91dGxpbmU6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgY29sb3I6ICM1MjZjZDA7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGJvcmRlci10b3A6IDFweCBkb3R0ZWQgI2Q1ZDZkOTtcbiAgd2lkdGg6IDk4JTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy10b3A6IDIycHg7XG59XG5cbi5wZHAtYm9nby1jb250YWluZXIge1xuICBtYXJnaW46IDEwcHggMjBweCAxMHB4IDA7XG59XG5cbi5wZHAtY291cG9uLWluZm8ge1xuICBwYWRkaW5nOiAxcHggMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDRkNWQ5O1xufVxuXG4ucGRwLWNvdXBvbi1zZWN0aW9uLXRpdGxlIHtcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogIzUzNTc2NjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ucGRwLWNvdXBvbi1sYWJlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjNTM1NzY2O1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBjb2xvcjogIzIwYmQ5OTtcbn1cblxuLnBkcC1jb3Vwb24tZGVzY3JpcHRpb24ge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNTM1NzY2O1xufVxuXG4ucGRwLWNvdXBvbkF0QmVzdFByaWNlIHtcbiAgY29sb3I6ICM1MzU3NjY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnBkcC1jb3Vwb24tZW1pLWluZm8ge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2Q0ZDVkOTtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5wZHAtb2ZmZXItYmFkZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjE2NTY1O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZzogMnB4IDdweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4ucGRwLWJvZ28tbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICM5NDk4OWY7XG59XG5cbi5wZHAtYm9nbyB7XG4gIHBhZGRpbmctYm90dG9tOiAycHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLnBkcC1ib2dvIGVtIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4ucGRwLWJvZ286aG92ZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q1ZDZkOTtcbn1cblxuLnBkcC1wcmljZS1pbmZvIHtcbiAgcGFkZGluZzogMCAwIDEwcHg7XG59XG5cbi5wZHAtZ2xvYmFsLXByb2R1Y3Qge1xuICBtYXJnaW46IDAgMCAwIDIwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgI2Q1ZDZkOTtcbn1cblxuLnBkcC1nbG9iYWxIZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4ucGRwLWdsb2JhbERlc2Mge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wZHAtZ2xvYmFsU3ViVGV4dCB7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogIzk0OTY5Zjtcbn1cblxuLnBkcC1nbG9iYWxQb2ludCB7XG4gIG1hcmdpbjogMCAwIDEwcHg7XG4gIGNvbG9yOiAjM2U0MTUyO1xufVxuXG4ucGRwLWdwLTEge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4ucGRwLWdsb2JhbFJlYWRNb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiA4MnB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICM1MjZjZDA7XG59XG5cbi5wZHAtY2xvc2UtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDRweDtcbiAgdG9wOiAwO1xuICByaWdodDogNXB4O1xuICBjb2xvcjogIzNlNDE1MjtcbiAgb3V0bGluZTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMDtcbn1cblxuLnBkcC1jaGV2cm9uLXJpZ2h0IHtcbiAgYmFja2dyb3VuZC1zaXplOiA1NDJweCA0MHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTk0cHggNXB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBoZWlnaHQ6IDE0cHg7XG4gIHdpZHRoOiA1cHg7XG59XG5cbi5wZHAtYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBvdXRsaW5lOiAwO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWluLWhlaWdodDogMjJweDtcbn1cblxuLnBkcC1hY3Rpb24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4ucGRwLWdvVG9DYXJ0IHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgLXdlYmtpdC1ib3gtZmxleDogMjtcbiAgLW1zLWZsZXg6IDI7XG4gIGZsZXg6IDI7XG59XG5cbi5wZHAtZ29Ub0NhcnQgLnBkcC1hZGQtdG8tYmFnIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLnBkcC1nb1RvQ2FydCBzcGFuIHtcbiAgdmVydGljYWwtYWxpZ246IHN1Yjtcbn1cblxuLnBkcC13aGl0ZVdpc2hsaXN0SWNvbiB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XG4gIG1hcmdpbjogLTJweCA4cHg7XG59XG5cbi5wZHAtZGFya1dpc2hsaXN0SWNvbiB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIG1hcmdpbjogLTJweCA4cHg7XG59XG5cbi5wZHAtd2hpdGVSaWdodEFycm93IHtcbiAgbWFyZ2luOiAtNHB4IDEwcHg7XG59XG5cbi5wZHAtZml4ZWQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbn1cblxuLnBkcC1hZGQtdG8tYmFnIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgcGFkZGluZzogMTJweCAxNXB4O1xuICBtaW4td2lkdGg6IDEwOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjNlNmM7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZjNlNmM7XG4gIGNvbG9yOiAjZmZmO1xuICAtd2Via2l0LWJveC1mbGV4OiAzO1xuICAtbXMtZmxleDogMztcbiAgZmxleDogMztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXJpZ2h0OiAzJTtcbn1cblxuLnBkcC1hZGQtdG8tYmFnOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTI3Yjtcbn1cblxuLnBkcC1hZGQtdG8tYmFnLXdpdGgtcHJpb3Ige1xuICBwYWRkaW5nOiAxMnB4IDA7XG59XG5cbi5wZHAtYWRkLXRvLWJhZy1mdWxsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLnBkcC1hZGQtdG8tYmFnLWZ1bGwtd2l0aC1wcmlvciB7XG4gIHBhZGRpbmc6IDEycHggMDtcbn1cblxuLnBkcC1hZGQtdG8td2lzaGxpc3Qge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBwYWRkaW5nOiAxMnB4IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC1ib3gtZmxleDogMjtcbiAgLW1zLWZsZXg6IDI7XG4gIGZsZXg6IDI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNGQ1ZDk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbiAgY29sb3I6ICMyODJjM2Y7XG59XG5cbi5wZHAtd2hpdGVCYWcge1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG59XG5cbi5wZHAtYWRkLXRvLXdpc2hsaXN0OmhvdmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzUzNTc2Njtcbn1cblxuLnBkcC1hZGQtdG8td2lzaGxpc3QtZGlzYWJsZWQge1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzdlODE4YztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUzNTc2Njtcbn1cblxuLnBkcC1hZGQtdG8td2lzaGxpc3QtZGlzYWJsZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTM1NzY2O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5wZHAtYWRkLXRvLXdpc2hsaXN0LWZ1bGwge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5wZHAtc2l6ZS1jaGFydC1kZXNjcmlwdGlvbiB7XG4gIGNvbG9yOiAjMjgyYzNmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbi5wZHAtc3R5bGUtbm90ZSB7XG4gIGNvbG9yOiAjNjk2ZTc5O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG59XG5cbi5wZHAtcHJvZHVjdC1kZXNjcmlwdGlvbi10aXRsZSB7XG4gIGNvbG9yOiAjMjgyYzNmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnBkcC1wcm9kdWN0LWRlc2NyaXB0aW9uLWNvbnRlbnQge1xuICBjb2xvcjogIzI4MmMzZjtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICB3aWR0aDogODQlO1xufVxuXG4ucGRwLXByb2R1Y3QtZGVzY3JpcHRpb24tY29udGVudCBiIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuXG4ucGRwLXByb2R1Y3QtZGVzY3JpcHRpb24tY29udGVudCBiOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLnBkcC1wcm9kdWN0LWRlc2NyaXB0aW9uLWNvbnRlbnQgcCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLnBkcC1yZXR1cm5hYmxlLWNvbnRlbnQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IDE0cHggMCAwIDA7XG4gIHBhZGRpbmc6IDAgMjBweCAwIDA7XG4gIGNvbG9yOiAjMjgyYzNmO1xufVxuXG4ucGRwLXBpbi1jb2RlLWxhYmVsIHtcbiAgY29sb3I6ICMxMThiZWI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgb3V0bGluZTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4ucGRwLW9mZmVyY2hlY2sge1xuICBmbG9hdDogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0ycHg7XG4gIG1hcmdpbjogMCAxMHB4IDAgMjBweDtcbn1cblxuLnBkcC1vZmZlckNoZWNrVGV4dDpiZWZvcmUge1xuICBjb250ZW50OiBcIlRhcCBmb3IgYmVzdCBwcmljZVwiO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLnBkcC1lcnJvci1tZXNzYWdlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbjogMjAwcHggMTBweDtcbiAgY29sb3I6ICNmMTY1NjU7XG59XG5cbi5wZHAtcG9zdC1zYWxlLXByaWNlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tdG9wOiAtMTdweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGNvbG9yOiAjNjk2ZTc5O1xufVxuXG4ucGRwLWZ1dHVyZS1wcmljZSB7XG4gIGNvbG9yOiAjMjgyYzNmO1xufVxuXG4ucGRwLXByZW9yZGVyLXNjYXJjaXR5IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjogcmdiYSgyNTUsIDYzLCAxMDgsIDAuNjUpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgNjMsIDEwOCwgMC42NSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgcGFkZGluZzogMnB4IDlweDtcbiAgZm9udC1zaXplOiA5cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5wZHAtcHJlb3JkZXItZGlzY2xhaW1lcixcbi5wZHAtcHJlb3JkZXItbGF1bmNoLWRhdGUge1xuICBjb2xvcjogIzI4MmMzZjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ucGRwLXByZW9yZGVyLWRpc2NsYWltZXItdGV4dCB7XG4gIGNvbG9yOiAjN2U4MThjO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDhweCAwIDA7XG59XG5cbi5wZHAtcHJlb3JkZXItZGF0ZSB7XG4gIGNvbG9yOiAjZmY1NzIyO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ucGRwLXNpemVDaGFydEluZm8ge1xuICBtYXJnaW4tdG9wOiAxNHB4O1xufVxuXG4ucGRwLXNpemVGaXREZXNjIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuXG4ucGRwLXNpemVGaXREZXNjVGl0bGUge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbi5wZHAtc2l6ZUZpdERlc2NDb250ZW50IHtcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogOTAlO1xufVxuXG4ucGRwLWlucHV0UHJvZHVjdERldGFpbHMge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ucGRwLWlucHV0UHJvZHVjdERldGFpbHNMYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgY29sb3I6ICM2OTZiNzk7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnBkcC1leHBhbmRQcm9kdWN0RGV0YWlscyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xufVxuXG4ucGRwLWV4cGFuZFByb2R1Y3REZXRhaWxzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiK1wiO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbmlucHV0LnBkcC1pbnB1dFByb2R1Y3REZXRhaWxzW3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgfiBsYWJlbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5wZHAtcHJvZHVjdERlc2NyaXB0b3JzQ29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLnBkcC1wcm9kdWN0RGVzY3JpcHRvcnNDb250YWluZXIgdWwge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDAgMCAxMHB4O1xufVxuXG4ucGRwLXByb2R1Y3REZXNjcmlwdG9ycyB7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q0ZDVkOTtcbn1cblxuLnBkcC12YXRJbmZvIHtcbiAgY29sb3I6ICMwM2E2ODU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogNXB4IDEwcHggMCAwO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNDI1cHgpIHtcbiAgLnBkcC1pbWFnZS1jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMzYwcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cblxuICAucGRwLXByaWNlLWluZm8ge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxuXG4gIC5wZHAtb2ZmZXJDaGVja1RleHQ6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIkNoZWNrIGZvciBvZmZlclwiO1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICB9XG5cbiAgLnBkcC1zZWxlY3RlZC1pbWFnZSB7XG4gICAgd2lkdGg6IDM2MHB4O1xuICAgIGhlaWdodDogNDgwcHg7XG4gIH1cblxuICAucGRwLWRlc2NyaXB0aW9uLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxuXG4gIC5wZHAtb2ZmZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm9yZGVyLXRvcDogMDtcbiAgICB3aWR0aDogYXV0bztcbiAgICB0b3A6IDA7XG4gICAgcGFkZGluZzogMCAwIDAgMjBweDtcbiAgICBtYXJnaW4tdG9wOiAyM3B4O1xuICB9XG5cbiAgLnBkcC1pbnB1dFByb2R1Y3REZXRhaWxzTGFiZWwge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAucGRwLWZpeGVkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAucGRwLWFjdGlvbi1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgei1pbmRleDogMDtcbiAgICB3aWR0aDogODQlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDI0cHgpIHtcbiAgLnBkcC1hY3Rpb24tY29udGFpbmVyIHtcbiAgICBmb250LXNpemU6IDA7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAucGRwLWFjdGlvbi1jb250YWluZXIgLnBkcC1nb1RvQ2FydCxcbi5wZHAtYWN0aW9uLWNvbnRhaW5lciBidXR0b24ge1xuICAgIGhlaWdodDogNDRweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuXG4gIC5wZHAtYWRkLXRvLXdpc2hsaXN0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBwYWRkaW5nOiAxNHB4IDE1cHg7XG4gIH1cblxuICAucGRwLWFkZC10by1iYWcge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNzAlO1xuICB9XG5cbiAgLnBkcC1hZGQtdG8tYmFnIC5wZHAtd2hpdGVCYWcge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbWFyZ2luOiAwIDhweCAwIDA7XG4gIH1cblxuICAucGRwLWFkZC10by1iYWcgc3BhbiB7XG4gICAgdmVydGljYWwtYWxpZ246IHN1YjtcbiAgfVxuXG4gIC5wZHAtYWRkLXRvLWJhZy5wZHAtYWRkLXRvLWJhZy1mdWxsIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSB7XG4gIC5wZHAtYWRkLXRvLWJhZyB7XG4gICAgbWluLXdpZHRoOiA4OHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzYwcHgpIHtcbiAgLnBkcC1hZGQtdG8tYmFnIHtcbiAgICBtaW4td2lkdGg6IDEwOHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTgwcHgpIHtcbiAgLnBkcC1wZHAtY29udGFpbmVyIHtcbiAgICBtaW4taGVpZ2h0OiA5MTBweDtcbiAgfVxuXG4gIC5wZHAtYm9nby1jb250YWluZXIge1xuICAgIG1hcmdpbjogMTBweCAwIDE2cHg7XG4gIH1cblxuICAucGRwLWltYWdlLWNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA1NDBweDtcbiAgfVxuXG4gIC5wZHAtc2VsZWN0ZWQtaW1hZ2Uge1xuICAgIHdpZHRoOiA1NDBweDtcbiAgICBoZWlnaHQ6IDcyMHB4O1xuICB9XG5cbiAgLnBkcC1kZXNjcmlwdGlvbi1jb250YWluZXIge1xuICAgIG1pbi1oZWlnaHQ6IDgyMHB4O1xuICAgIHdpZHRoOiA0MiU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZzogMCAwIDAgMzBweDtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuXG4gIC5wZHAtYWRkLXRvLWJhZyxcbi5wZHAtYWRkLXRvLXdpc2hsaXN0IHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuXG4gIC5wZHAtYWRkLXRvLXdpc2hsaXN0IHtcbiAgICB3aWR0aDogMzQlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gIH1cblxuICAucGRwLWFkZC10by13aXNobGlzdC1mdWxsIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG5cbiAgLnBkcC1hZGQtdG8tYmFnIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTVweCAwO1xuICB9XG5cbiAgLnBkcC1hZGQtdG8tYmFnLXdpdGgtcHJpb3Ige1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMnB4IDA7XG4gIH1cblxuICAucGRwLWFkZC10by1iYWctZnVsbCxcbi5wZHAtYWRkLXRvLWJhZy1mdWxsLXdpdGgtcHJvaXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG5cbiAgLnBkcC1wb3N0LXNhbGUtcHJpY2Uge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxufVxuLnBkcC1lbWlQbGFuc0NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAxMDtcbn1cblxuLnBkcC1lbWlQbGFuc0NvbnRhaW5lciAucGRwLWVtaUlubmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDUwJTtcbiAgbWFyZ2luLXRvcDogLTIyMHB4O1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtMzMwcHg7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDY2MHB4O1xuICBoZWlnaHQ6IDQ0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLnBkcC1lbWlQbGFuc0NvbnRhaW5lciAucGRwLWVtaUlubmVyIHtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG59XG4ucGRwLWVtaU1vZGFsY2xvc2Uge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDAuNztcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAzMHB4O1xuICB0b3A6IDI0cHg7XG59XG5cbi5wZHAtZGlzY291bnRUaW1lciB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXRvcDogMTFweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjBmNDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZzogNnB4O1xufVxuXG4ucGRwLWRpc2NvdW50VGltZXIgLnBkcC10aW1lclRpdGxlIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGNvbG9yOiAjMjgyYzNmO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xufVxuXG4ucGRwLWRpc2NvdW50VGltZXIgLnBkcC1kaXNjb3VudFRpbWUge1xuICBmb250LXdlaWdodDogODAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xuICBjb2xvcjogI2ZmM2Y2YztcbiAgZm9udC1mYW1pbHk6IGhlbHZldGljYSwgV2hpdG5leTtcbn1cblxuLnBkcC1kaXNjb3VudFRpbWVyIC5wZHAtZGlzY291bnRUaW1lIGIge1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4ucGRwLWRpc2NvdW50VGltZXIgLnBkcC1kaXNjb3VudFRpbWVyU2VwIHtcbiAgbWFyZ2luOiAwIDVweDtcbn1cblxuLnBkcC1kaXNjb3VudFRpbWVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLXRvcDogMTVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiAxNXB4IHNvbGlkICNmZmYwZjQ7XG4gIGJvcmRlci1ib3R0b206IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbi5wZHAtbG95YWx0eUNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZDogI2ZmZjVlNDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIxcHg7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLnBkcC1sb3lhbHR5Y29pbiB7XG4gIGhlaWdodDogMTVweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTVweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbn1cblxuLnBkcC1mbGV4IHtcbiAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtYm94O1xuICBkaXNwbGF5OiAtbXMtaW5saW5lLWZsZXhib3g7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuXG4ucGRwLWZsZXgucGRwLWNlbnRlciB7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnBkcC1mbGV4LnBkcC1jb2x1bW4ge1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5wZHAtZmxleC5wZHAtYWxpZ24tc3RhcnQge1xuICAtd2Via2l0LWJveC1hbGlnbjogc3RhcnQ7XG4gIC1tcy1mbGV4LWFsaWduOiBzdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5wZHAtZW9yc1RleHQsXG4ucGRwLXRleHQtMTAge1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5wZHAtZW9yc1RleHQge1xuICBjb2xvcjogI2E5YTlhOTtcbn1cblxuLnBkcC13aXNobGlzdE5vdyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbn1cblxuLnBkcC1kaXNhYmxlU3ByaXRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnBkcC1vdXRPZlN0b2NrVGV4dCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6ICNhOWE5YTk7XG59XG5cbi5wZHAtcGRwQnV0dG9uV2lzaGxpc3ROb3cge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA0NSUgIWltcG9ydGFudDtcbn1cblxuLnBkcC1wcm9kdWN0RGV0YWlsc0ljb24ge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4ucGRwLW91dC1vZi1zdG9jayB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiZmMwYzY7XG4gIGN1cnNvcjogYXV0bztcbn1cblxuLnBkcC1vdXQtb2Ytc3RvY2ssXG4ucGRwLW91dC1vZi1zdG9jazpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZmMwYzY7XG59XG5cbi5wZHAtcHJpb3JpdHktb3V0LW9mLXN0b2NrIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgd2lkdGg6IDQwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmZjMGM2O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmZjMGM2O1xuICBjdXJzb3I6IGF1dG87XG59XG5cbi5wZHAtcHJpb3JpdHktb3V0LW9mLXN0b2NrOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JmYzBjNjtcbn1cblxuLnBkcC1iYjEge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q0ZDVkOTtcbn1cblxuLnBkcC1vblBhZ2VMb2FkZXIge1xuICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgcGFkZGluZzogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucGRwLXNjLWFkZFRvQmFnLWRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC41O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmluZGV4LXByb2R1Y3REZXNjcmlwdGlvblRhYmxlQ29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaW5kZXgtcHJvZHVjdC1kZXNjcmlwdGlvbi10aXRsZSB7XG4gIGNvbG9yOiAjMjgyYzNmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkNGQ1ZDk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5pbmRleC1wcm9kdWN0LWRlc2NyaXB0aW9uLWNvbnRlbnQge1xuICBjb2xvcjogIzI4MmMzZjtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICB3aWR0aDogODQlO1xufVxuXG4uaW5kZXgtcHJvZHVjdC1kZXNjcmlwdGlvbi1jb250ZW50IGIge1xuICBmb250LXdlaWdodDogNTAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5pbmRleC1wcm9kdWN0LWRlc2NyaXB0aW9uLWNvbnRlbnQgYjpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5pbmRleC1wcm9kdWN0LWRlc2NyaXB0aW9uLWNvbnRlbnQgcCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmluZGV4LXNpemVGaXREZXNjIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuXG4uaW5kZXgtc2l6ZUZpdERlc2NUaXRsZSB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuLmluZGV4LXNpemVGaXREZXNjQ29udGVudCB7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDkwJTtcbn1cblxuLmluZGV4LXRhYmxlQ29udGFpbmVyIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1wYWNrOiBzdGFydDtcbiAgLW1zLWZsZXgtcGFjazogc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLmluZGV4LXRhYmxlQ29udGFpbmVyIC5pbmRleC1yb3cge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWFlYWVjO1xuICBtYXJnaW46IDAgMCAxMnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDQwJTtcbiAgZmxleC1iYXNpczogNDAlO1xufVxuXG4uaW5kZXgtdGFibGVDb250YWluZXIgLmluZGV4LXJvdzpudGgtY2hpbGQob2RkKSB7XG4gIG1hcmdpbi1yaWdodDogMTAlO1xufVxuXG4uaW5kZXgtdGFibGVDb250YWluZXIgLmluZGV4LXJvdyAuaW5kZXgtcm93S2V5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogIzdlODE4YztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uaW5kZXgtdGFibGVDb250YWluZXIgLmluZGV4LXJvdyAuaW5kZXgtcm93VmFsdWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiAjMjgyYzNmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG5cbi5pbmRleC1zaG93TW9yZVRleHQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjZmYzZjZjO1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvbG9ycy1jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uY29sb3JzLWhlYWRpbmcge1xuICBjb2xvcjogIzI4MmMzZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW46IDAgMCAxNXB4O1xuICBsZXR0ZXItc3BhY2luZzogMC40cHg7XG59XG5cbi5jb2xvcnMtaGVhZGluZyBzdHJvbmcge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uY29sb3JzLWhlYWRpbmcgLmNvbG9ycy1zaGFkZVRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLmNvbG9ycy1pbWFnZSB7XG4gIHdpZHRoOiA1NXB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuLmNvbG9ycy1zaGFkZUxpc3Qge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMDtcbn1cblxuLmNvbG9ycy1zaGFkZUxpc3QgPiBsaSB7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIDEwcHggMTBweCAwO1xufVxuXG4uY29sb3JzLXNoYWRlTGlzdCBhIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDA7XG59XG5cbi5jb2xvcnMtc2hhZGVMaXN0TW9iaWxlIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtZmxleC13cmFwOiBub3dyYXA7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogLW1zLWF1dG9oaWRpbmctc2Nyb2xsYmFyO1xufVxuXG4uY29sb3JzLXNoYWRlTGlzdE1vYmlsZSA+IGxpIHtcbiAgLXdlYmtpdC1ib3gtZmxleDogMDtcbiAgLW1zLWZsZXg6IDAgMCBhdXRvO1xuICBmbGV4OiAwIDAgYXV0bztcbiAgbWFyZ2luOiAwIDAgMTJweCAxOHB4O1xufVxuXG4uY29sb3JzLXNoYWRlTGlzdE1vYmlsZSA+IGxpOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5jb2xvcnMtc2hhZGVMaXN0TW9iaWxlID4gbGk6bGFzdC1jaGlsZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbi5jb2xvcnMtc2hhZGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWF4LXdpZHRoOiA2NnB4O1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5jb2xvcnMtc2hhZGUgLmNvbG9ycy1pbWFnZUNvbnRhaW5lciB7XG4gIGhlaWdodDogNDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDVkNmQ5O1xufVxuXG4uY29sb3JzLXNoYWRlIC5jb2xvcnMtaW1hZ2VDb250YWluZXIuY29sb3JzLW1vcmVJbWFnZUNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5jb2xvcnMtc2hhZGUgLmNvbG9ycy1pbWFnZUNvbnRhaW5lciAuY29sb3JzLWdyaWQge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZsb2F0OiBsZWZ0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDVkNmQ5O1xufVxuXG4uY29sb3JzLXNoYWRlIC5jb2xvcnMtaW1hZ2VDb250YWluZXIgLmNvbG9ycy1ncmlkOm50aC1jaGlsZChvZGQpIHtcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XG59XG5cbi5jb2xvcnMtc2hhZGUgLmNvbG9ycy1pbWFnZUNvbnRhaW5lciAuY29sb3JzLWdyaWQ6Zmlyc3QtY2hpbGQsXG4uY29sb3JzLXNoYWRlIC5jb2xvcnMtaW1hZ2VDb250YWluZXIgLmNvbG9ycy1ncmlkOm50aC1jaGlsZCgyKSB7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbn1cblxuLmNvbG9ycy1zaGFkZSAuY29sb3JzLWltYWdlQ29udGFpbmVyIC5jb2xvcnMtZ3JpZCBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29sb3JzLXNoYWRlIGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICAtby1vYmplY3QtZml0OiBjb3ZlcjtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5jb2xvcnMtc2hhZGUgLmNvbG9ycy1zaGFkZU5hbWUge1xuICBmb250LXNpemU6IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNTM1NzY2O1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG5cbi5jb2xvcnMtc2VsZWN0ZWQge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC04cHg7XG4gIG1hcmdpbi10b3A6IC03cHg7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5zaXplLWJ1dHRvbnMtc2VsZWN0LXNpemUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uc2l6ZS1idXR0b25zLXNpemUtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAxMHB4IDAgMjRweDtcbn1cblxuLnNpemUtYnV0dG9ucy1zaXplLWhlYWRlciB7XG4gIG1hcmdpbjogMCAwIDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbi5zaXplLWJ1dHRvbnMtc2l6ZS1jaGFydCB7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuXG4uc2l6ZS1idXR0b25zLWFycm93IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNnB4O1xuICBoZWlnaHQ6IDZweDtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgYm9yZGVyOiBzb2xpZCAjZmYzZTZjO1xuICBib3JkZXItd2lkdGg6IDJweCAycHggMCAwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG5cbi5zaXplLWJ1dHRvbnMtc2hvdy1zaXplLWNoYXJ0IHtcbiAgb3V0bGluZTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZzogMCAwIDVweDtcbiAgY29sb3I6ICNmZjNlNmM7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLnNpemUtYnV0dG9ucy1hcnJvd1JpZ2h0Qm9sZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA0cHg7XG4gIGNvbG9yOiAjZmYzZTZjO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xufVxuXG4uc2l6ZS1idXR0b25zLXNpemVUaXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxcHg7XG4gIG1pbi13aWR0aDogNDAwcHg7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDAuMXMgZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMC4xcyBlYXNlLW91dDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwLjFzO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjFzO1xufVxuXG4uc2l6ZS1idXR0b25zLXNpemVUaXAgLnNpemUtYnV0dG9ucy1zaXplVGlwTWV0YSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWluLXdpZHRoOiA0MDBweDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTllOWViO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxOHB4O1xuICB6LWluZGV4OiAyOTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDE2cHggMCByZ2JhKDQwLCA0NCwgNjMsIDAuMSk7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDE2cHggMCByZ2JhKDQwLCA0NCwgNjMsIDAuMSk7XG59XG5cbi5zaXplLWJ1dHRvbnMtc2l6ZVRpcCAuc2l6ZS1idXR0b25zLXNpemVUaXBNZXRhIHAge1xuICBtYXJnaW46IDA7XG59XG5cbi5zaXplLWJ1dHRvbnMtdGlwQW5kQnRuQ29udGFpbmVyIHtcbiAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCAwO1xufVxuXG4uc2l6ZS1idXR0b25zLXRpcEFuZEJ0bkNvbnRhaW5lcjpob3ZlciAuc2l6ZS1idXR0b25zLXNpemVUaXAge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uc2l6ZS1idXR0b25zLXNpemUtYnV0dG9ucyB7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogLW1zLWF1dG9oaWRpbmctc2Nyb2xsYmFyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zaXplLWJ1dHRvbnMtc2l6ZS1idXR0b25zLWVycm9yIHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNpemUtYnV0dG9ucy1zaGFrZSAwLjgycyBjdWJpYy1iZXppZXIoMC4zNiwgMC4wNywgMC4xOSwgMC45NykgYm90aDtcbiAgYW5pbWF0aW9uOiBzaXplLWJ1dHRvbnMtc2hha2UgMC44MnMgY3ViaWMtYmV6aWVyKDAuMzYsIDAuMDcsIDAuMTksIDAuOTcpIGJvdGg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEwMDBweDtcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNpemUtYnV0dG9ucy1zaGFrZSB7XG4gIDEwJSwgOTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTFweCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMXB4LCAwLCAwKTtcbiAgfVxuICAyMCUsIDgwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDJweCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgycHgsIDAsIDApO1xuICB9XG4gIDMwJSwgNTAlLCA3MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNHB4LCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC00cHgsIDAsIDApO1xuICB9XG4gIDQwJSwgNjAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNHB4LCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDRweCwgMCwgMCk7XG4gIH1cbn1cbi5zaXplLWJ1dHRvbnMtc2l6ZS1lcnJvci1tZXNzYWdlIHtcbiAgY29sb3I6ICNmMTY1NjU7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc2l6ZS1idXR0b25zLXNpemUtYnV0dG9uLWRlZmF1bHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmZjMGM2O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBwYWRkaW5nOiAwO1xuICBtaW4td2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjMjgyYzNmO1xuICAtd2Via2l0LWJveC1mbGV4OiAwO1xuICAtbXMtZmxleDogMCAwIGF1dG87XG4gIGZsZXg6IDAgMCBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zaXplLWJ1dHRvbnMtc2l6ZS1idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zaXplLWJ1dHRvbnMtc2l6ZS1idXR0b24tc2VsZWN0ZWQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmYzZjZjO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogI2ZmM2Y2YyAhaW1wb3J0YW50O1xufVxuXG4uc2l6ZS1idXR0b25zLXNpemUtYnV0dG9uLWRpc2FibGVkIHtcbiAgY29sb3I6ICNkNWQ2ZDk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNWQ2ZDk7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnNpemUtYnV0dG9ucy1zaXplLXN0cmlrZS1oaWRlIHtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbn1cblxuLnNpemUtYnV0dG9ucy1zaXplLXN0cmlrZS1zaG93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDVkNmQ5O1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG59XG5cbi5zaXplLWJ1dHRvbnMtYmlnLXNpemUge1xuICBtaW4taGVpZ2h0OiA0OHB4O1xuICBtaW4td2lkdGg6IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IGF1dG87XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnNpemUtYnV0dG9ucy1vdXQtb2Ytc3RvY2sge1xuICBjb2xvcjogI2YxNjU2NTtcbn1cblxuLnNpemUtYnV0dG9ucy1zaXplLWJ1dHRvbjpob3ZlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZjNmNmM7XG59XG5cbi5zaXplLWJ1dHRvbnMtc2l6ZS1idXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xufVxuXG4uc2l6ZS1idXR0b25zLXVuaWZpZWQtc2l6ZSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAwIDhweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnNpemUtYnV0dG9ucy11bmlmaWVkLXNpemUgKyAuc2l6ZS1idXR0b25zLWludmVudG9yeS1sZWZ0IHtcbiAgbGVmdDogNyU7XG4gIGJvdHRvbTogLTNweDtcbn1cblxuLnNpemUtYnV0dG9ucy1za3UtcHJpY2Uge1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG5cbi5zaXplLWJ1dHRvbnMtYm9keW1lYXN1cmUge1xuICBjb2xvcjogIzUzNTY2NTtcbn1cblxuLnNpemUtYnV0dG9ucy1zaXplQ2hhcnRJbmZvIHtcbiAgY29sb3I6ICM1MzU2NjU7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uc2l6ZS1idXR0b25zLXNpemVGaXREZXNjIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uc2l6ZS1idXR0b25zLW1lYXN1cmVtZW50VHlwZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMyODJjM2Y7XG59XG5cbi5zaXplLWJ1dHRvbnMtbWVhc3VyZW1lbnROYW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tbGVmdDogNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzUzNTY2NTtcbn1cblxuLnNpemUtYnV0dG9ucy1pbnZlbnRvcnktbGVmdCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDkwJTtcbiAgbGVmdDogNyU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjkwNWE7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNpemUtYnV0dG9ucy1pbnZlbnRvcnktbGVmdC1oaWRkZW4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5zaXplLWJ1dHRvbnMtc2l6ZUJ1dHRvbkFzTGluayB7XG4gIC13ZWJraXQtYm94LWZsZXg6IDA7XG4gIC1tcy1mbGV4OiAwIDAgYXV0bztcbiAgZmxleDogMCAwIGF1dG87XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkge1xuICAuc2l6ZS1idXR0b25zLXNpemUtYnV0dG9ucyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk4MHB4KSB7XG4gIC5zaXplLWJ1dHRvbnMtc2l6ZS1jaGFydCB7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICB9XG59XG4uc2l6ZS1idXR0b25zLXJlY29Db250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4uc2l6ZS1idXR0b25zLXJlY29Db250YWluZXJNb2JpbGUge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2l6ZS1idXR0b25zLXJlY1RleHQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiA4cHg7XG59XG5cbi5zaXplLWJ1dHRvbnMtbW9yZVByb2ZpbGVzV2ViIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmbG9hdDogcmlnaHQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogLTI4cHg7XG59XG5cbi5zaXplLWJ1dHRvbnMtbW9yZVByb2ZpbGVzTW9iaWxlIHtcbiAgcmlnaHQ6IDIwcHg7XG4gIG1heC1oZWlnaHQ6IDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjZzIGN1YmljLWJlemllcigwLCAxLCAwLjUsIDEpO1xuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuNnMgY3ViaWMtYmV6aWVyKDAsIDEsIDAuNSwgMSk7XG59XG5cbi5zaXplLWJ1dHRvbnMtbW9yZVByb2ZpbGVzTW9iaWxlIC5zaXplLWJ1dHRvbnMtcHJvZmlsZUxpc3RIZWFkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMnB4O1xuICB0b3A6IDE0cHg7XG59XG5cbi5zaXplLWJ1dHRvbnMtcHJvZmlsZUxpc3RIZWFkZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogI2ZmM2Y2Yztcbn1cblxuLnNpemUtYnV0dG9ucy1zaGFycENvcm5lciB7XG4gIGJvcmRlci1jb2xvcjogI2ZkZTNmMyB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxMHB4IDEwcHggMDtcbiAgd2lkdGg6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMjJweDtcbiAgYm90dG9tOiAtOHB4O1xufVxuXG4uc2l6ZS1idXR0b25zLXByb2ZpbGVzTGlzdFdlYiB7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDcwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDRweCAwIHJnYmEoMCwgMCwgMCwgMC4xMyk7XG4gIGJveC1zaGFkb3c6IDAgMCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMTMpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDI0cHg7XG4gIHBhZGRpbmc6IDhweCAxMnB4IDRweDtcbiAgei1pbmRleDogMjtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNpemUtYnV0dG9ucy1wcm9maWxlc0xpc3RNb2JpbGUge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogYXV0bztcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTEwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMTAlKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjZzIGN1YmljLWJlemllcigwLCAxLCAwLjUsIDEpO1xuICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjZzIGN1YmljLWJlemllcigwLCAxLCAwLjUsIDEpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBjdWJpYy1iZXppZXIoMCwgMSwgMC41LCAxKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgY3ViaWMtYmV6aWVyKDAsIDEsIDAuNSwgMSksIC13ZWJraXQtdHJhbnNmb3JtIDAuNnMgY3ViaWMtYmV6aWVyKDAsIDEsIDAuNSwgMSk7XG59XG5cbi5zaXplLWJ1dHRvbnMtcHJvZmlsZXNMaXN0TW9iaWxlIGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICM2OTZiNzk7XG4gIHBhZGRpbmc6IDEycHggMThweDtcbiAgd2lkdGg6IDY1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5zaXplLWJ1dHRvbnMtcE5hbWVIZWFkZXIge1xuICBjb2xvcjogI2ZmM2Y2YztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xuICBtYXgtd2lkdGg6IDgwcHg7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG5cbi5zaXplLWJ1dHRvbnMtbW9yZVByb2ZpbGVzTW9iaWxlLnNpemUtYnV0dG9ucy1zaG93UHJvZmlsZXMge1xuICBtYXgtaGVpZ2h0OiA1MHB4O1xufVxuXG4uc2l6ZS1idXR0b25zLW1vcmVQcm9maWxlc01vYmlsZS5zaXplLWJ1dHRvbnMtc2hvd1Byb2ZpbGVzIC5zaXplLWJ1dHRvbnMtcHJvZmlsZXNMaXN0TW9iaWxlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbn1cblxuLnNpemUtYnV0dG9ucy1tb3JlUHJvZmlsZXNXZWI6aG92ZXIgLnNpemUtYnV0dG9ucy1wcm9maWxlc0xpc3RXZWIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5zaXplLWJ1dHRvbnMtcHJvZmlsZUl0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICM3ZTgxOGM7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5zaXplLWJ1dHRvbnMtcHJvZmlsZUl0ZW0uc2l6ZS1idXR0b25zLXNlbGVjdGVkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmM2Y2YztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICNmZjNmNmMgIWltcG9ydGFudDtcbn1cblxuLnNpemUtYnV0dG9ucy1wZXJzb25hbGlzZWRSZWNvIHtcbiAgd2lkdGg6IDcwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG5cbi5zaXplLWJ1dHRvbnMtc2ltaWxhcldyYXBwZXIge1xuICBtYXJnaW46IDA7XG59XG5cbi5zaXplLWJ1dHRvbnMtbW9yZVByb2ZpbGVTQyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMnB4O1xuICByaWdodDogMTZweDtcbn1cblxuLnNpemUtYnV0dG9ucy1wcm9maWxlTmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5zaXplLWJ1dHRvbnMtdmlld1NpbWlsYXIge1xuICBjb2xvcjogI2ZmM2U2YztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2l6ZS1idXR0b25zLXRhZ0luZm9UZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB0b3A6IC03OHB4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMzMwcHg7XG4gIHBhZGRpbmc6IDhweCAxMHB4O1xuICBkaXNwbGF5OiBub25lO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggMTZweCAwIHJnYmEoNDAsIDQ0LCA2MywgMC4xKTtcbiAgYm94LXNoYWRvdzogMCAycHggMTZweCAwIHJnYmEoNDAsIDQ0LCA2MywgMC4xKTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U5ZTllYjtcbiAgY29sb3I6ICM1MzU2NjU7XG59XG5cbi5zaXplLWJ1dHRvbnMtdGFnSW5mb0ljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3ZTgwOGM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICM3ZTgwOGM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uc2l6ZS1idXR0b25zLXRhZ0luZm9JY29uOmhvdmVyICsgLnNpemUtYnV0dG9ucy10YWdJbmZvVGV4dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc2l6ZS1idXR0b25zLWhpZGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2l6ZS1idXR0b25zLXNoYWtlVGV4dCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzaXplLWJ1dHRvbnMtc2hha2UgMC42cyBjdWJpYy1iZXppZXIoMC4zNiwgMC4wNywgMC4xOSwgMC45NykgYm90aDtcbiAgYW5pbWF0aW9uOiBzaXplLWJ1dHRvbnMtc2hha2UgMC42cyBjdWJpYy1iZXppZXIoMC4zNiwgMC4wNywgMC4xOSwgMC45NykgYm90aDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTAwMHB4O1xuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xufVxuXG4uc2l6ZS1idXR0b25zLWxvZ2luIHtcbiAgY29sb3I6ICNmZjNlNmM7XG4gIG1hcmdpbi1sZWZ0OiA3cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNpemUtYnV0dG9ucy1idXR0b25Db250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zaXplLWJ1dHRvbnMtcmVjby1pY29uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgMTBweCAwIDRweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLnNpemUtYnV0dG9ucy1zYy1yZWNvLXR4dCB7XG4gIHBhZGRpbmc6IDE0cHg7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBmcm9tKCNmZGUzZjMpLCB0bygjZmVmOWU1KSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2ZkZTNmMywgI2ZlZjllNSk7XG4gIGNvbG9yOiAjMjgyYzNmO1xufVxuXG4uYnJlYWRjcnVtYnMtYm9sZC1saW5rLFxuLmJyZWFkY3J1bWJzLWJvbGQtc2VwYXJhdG9yIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmluZGV4LWNyb3NzTGlua0NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAzNXB4IDAgNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmluZGV4LWxpbmtzIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjogI2ZmM2U2YztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5pbmRleC1saW5rcyA+IGRpdiB7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiZmMwYzY7XG4gIHBhZGRpbmc6IDE2cHggMjBweDtcbn1cblxuLmluZGV4LWxpbmtzID4gZGl2OmhvdmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmM2U2Yztcbn1cblxuLmluZGV4LWFycm93IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNnB4O1xuICBoZWlnaHQ6IDZweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGJvcmRlcjogc29saWQgI2ZmM2U2YztcbiAgYm9yZGVyLXdpZHRoOiAycHggMnB4IDAgMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xufVxuXG4ubWV0YS1jb250YWluZXIge1xuICBtYXJnaW46IDIwcHggMCAwO1xufVxuXG4ubWV0YS1pbmZvIHtcbiAgY29sb3I6ICMyODJjM2Y7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5tZXRhLWluZm8gLm1ldGEtdGl0bGUge1xuICBjb2xvcjogIzk0OTg5Zjtcbn1cblxuLm1ldGEtaW5mbyAubWV0YS1kZXNjIHtcbiAgbWFyZ2luOiA1cHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogOTAlO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4ubWV0YS1pbmZvIC5tZXRhLWRlc2MgYSB7XG4gIGNvbG9yOiAjOTQ5ODlmO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5tZXRhLWRvdCB7XG4gIHdpZHRoOiA0cHg7XG4gIGhlaWdodDogNHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MmMzZjtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbi1ib3R0b206IC0zcHg7XG59XG5cbmEubWV0YS1saW5rIHtcbiAgY29sb3I6ICNmZjNlNmM7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAubWV0YS10YXhJbmZvIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4uc3VwcGxpZXItcHJvZHVjdFNlbGxlck5hbWUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5zdXBwbGllci1wcm9kdWN0U2VsbGVyTmFtZSxcbi5zdXBwbGllci1zdHlsZUlkIHtcbiAgY29sb3I6ICMyODJjM2Y7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xufVxuXG4uc3VwcGxpZXItbWV0LXZhbHVlcyB7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG59XG5cbi5zdXBwbGllci1wcm9kdWN0LWNvZGUge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbiAgcGFkZGluZzogNHB4O1xufVxuXG4uc3VwcGxpZXItcHJvZHVjdC1jb2RlLXNlcGFyYXRvciB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogMCA1cHg7XG59XG5cbi5zdXBwbGllci1zdXBwbGllciB7XG4gIGNvbG9yOiAjMjgyYzNmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDRweCAwO1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG5cbi5zdXBwbGllci1wYXJ0bmVyLW5hbWUge1xuICBjb2xvcjogIzI4MmMzZjtcbn1cblxuLnN1cHBsaWVyLXZpZXdtb3JlLWxpbmsge1xuICBjb2xvcjogIzI4MmMzZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiA0cHggMDtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zdXBwbGllci1tYW51ZmFjdHVyZXIge1xuICBjb2xvcjogIzI4MmMzZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nOiA0cHggMDtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuXG4uc3VwcGxpZXItbW9iaWxlQ29kZVN1cHBsaWVyIHtcbiAgcGFkZGluZzogMjBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc3VwcGxpZXItbW9iaWxlQ29kZVN1cHBsaWVyIHA6Zmlyc3QtY2hpbGQge1xuICBjb2xvcjogIzNlNDE1Mjtcbn1cblxuLnN1cHBsaWVyLW1vYmlsZUNvZGVTdXBwbGllciBwIHtcbiAgY29sb3I6ICM3ZTgxOGM7XG4gIG1hcmdpbjogNXB4IDA7XG59XG5cbi5zdXBwbGllci1jb250YWN0U2VsbGVyQ29udGFpbmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uc3VwcGxpZXItc3VwcGxpZXJDb250YWN0VG9vdGlwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI1cHg7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWluLXdpZHRoOiAzMDBweDtcbiAgbWF4LXdpZHRoOiA0OTBweDtcbiAgd2lkdGg6IGF1dG87XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHBhZGRpbmc6IDEycHggMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3gtc2hhZG93OiAwIDAgM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgei1pbmRleDogMjtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5zdXBwbGllci1zdXBwbGllckNvbnRhY3RUb290aXAgaDQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogMCAwIDEycHg7XG4gIHBhZGRpbmc6IDAgMjBweCAxNXB4O1xuICBjb2xvcjogIzY5NmU3OTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWFlYWVjO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi5zdXBwbGllci1zdXBwbGllckNvbnRhY3RUb290aXAgLnN1cHBsaWVyLWJ1dHRvbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNDklO1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICM5NDk2OWY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnN1cHBsaWVyLXN1cHBsaWVyQ29udGFjdFRvb3RpcCBzcGFuLnN1cHBsaWVyLWJ1dHRvbiB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlYWVhZWM7XG59XG5cbi5zdXBwbGllci1zdXBwbGllckNvbnRhY3RUb290aXAgYS5zdXBwbGllci1idXR0b24ge1xuICBjb2xvcjogI2ZmM2U2Yztcbn1cblxuLnN1cHBsaWVyLXRyaWFuZ2xlLXdpdGgtc2hhZG93IHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xMHB4O1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtMzBweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgLTE2cHggMTBweCAtMTdweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJveC1zaGFkb3c6IDAgLTE2cHggMTBweCAtMTdweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5zdXBwbGllci10cmlhbmdsZS13aXRoLXNoYWRvdzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgdG9wOiAtNXB4O1xuICBsZWZ0OiAyNXB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3gtc2hhZG93OiAwIDAgM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLnN1cHBsaWVyLWhhbGZDYXJkQmFja2Ryb3Age1xuICBiYWNrZ3JvdW5kOiByZ2JhKDQxLCA0OCwgNjMsIDAuNTgpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogLTQlO1xuICB3aWR0aDogMTA0JTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAxMDtcbn1cblxuLnN1cHBsaWVyLWNvbnRhY3RTZWxsZXJIYWxmQ2FyZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTA7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XG59XG5cbi5zdXBwbGllci1jb250YWN0U2VsbGVySGFsZkNhcmQgaDQge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDIycHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWFlYWVjO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBjb2xvcjogIzY5NmU3OTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG4uc3VwcGxpZXItY29udGFjdFNlbGxlckhhbGZDYXJkIC5zdXBwbGllci1idXR0b24ge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDQ5JTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbjogMTdweCAwO1xuICBjb2xvcjogIzk0OTY5Zjtcbn1cblxuLnN1cHBsaWVyLWNvbnRhY3RTZWxsZXJIYWxmQ2FyZCBzcGFuLnN1cHBsaWVyLWJ1dHRvbiB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlYWVhZWM7XG59XG5cbi5zdXBwbGllci1jb250YWN0U2VsbGVySGFsZkNhcmQgYS5zdXBwbGllci1idXR0b24ge1xuICBjb2xvcjogIzIwYmQ5OTtcbn1cblxuLnN1cHBsaWVyLWRlc2t0b3BDb2RlU3VwcGxpZXIge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uc3VwcGxpZXItZGVza3RvcENvZGVTdXBwbGllciAuc3VwcGxpZXItcHJvZHVjdFNlbGxlck5hbWUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuc3VwcGxpZXItZGVza3RvcENvZGVTdXBwbGllciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5zdXBwbGllci1tb2JpbGVDb2RlU3VwcGxpZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTgwcHgpIHtcbiAgLnN1cHBsaWVyLXN1cHBsaWVyOmFmdGVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gIH1cbn1cbi5wZHAtb2ZmZXJzLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogNDBweCAwIDA7XG4gIHBhZGRpbmc6IDAgMCAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q0ZDVkOTtcbn1cblxuLnBkcC1vZmZlcnMtY29udGFpbmVyIC5wZHAtb2ZmZXJzLW9mZmVyQmxvY2s6bGFzdC1jaGlsZCAucGRwLW9mZmVycy1vZmZlcjpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLnBkcC1vZmZlcnMtY29udGFpbmVyID4gaDQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjb2xvcjogIzI4MmMzZjtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLnBkcC1vZmZlcnMtZXh0cmFPZmZlciAucGRwLW9mZmVycy1vZmZlckRlc2Mge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmctdG9wOiAxcHg7XG4gIG1hcmdpbjogMDtcbn1cblxuLnBkcC1vZmZlcnMtZXh0cmFPZmZlciAucGRwLW9mZmVycy12aWV3TW9yZUxpbmsge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ucGRwLW9mZmVycy1leHRyYU9mZmVyIC5wZHAtb2ZmZXJzLW9mZmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgcGFkZGluZzogMTBweCAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1yaWdodDogODhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbn1cblxuLnBkcC1vZmZlcnMtZXh0cmFPZmZlciAucGRwLW9mZmVycy1vZmZlcjpob3ZlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNGQ1ZDk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLnBkcC1vZmZlcnMtZXh0cmFPZmZlciAucGRwLW9mZmVycy1vZmZlcjpob3ZlciAucGRwLW9mZmVycy12aWV3TW9yZUxpbmsge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5wZHAtb2ZmZXJzLW1vcmVPZmZlcnNCdXR0b24ge1xuICBjb2xvcjogIzUyNmNkMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wZHAtb2ZmZXJzLW9mZmVySGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICMyODJjM2Y7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLnBkcC1vZmZlcnMtb2ZmZXJIZWFkaW5nIGIge1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4ucGRwLW9mZmVycy1vZmZlciB7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xuICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wZHAtb2ZmZXJzLW9mZmVyID4gZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wZHAtb2ZmZXJzLW9mZmVyVGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMjgyYzNmO1xuICBtYXJnaW4tYm90dG9tOiAxcHg7XG59XG5cbi5wZHAtb2ZmZXJzLW9mZmVyVGl0bGUgYiB7XG4gIGNvbG9yOiAjMjgyYzNmO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5wZHAtb2ZmZXJzLW9mZmVyRGVzYyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMyODJjM2Y7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogOHB4IDAgMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wZHAtb2ZmZXJzLW9mZmVyRGVzYyBiIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLnBkcC1vZmZlcnMtb2ZmZXJEZXNjIGxpIHtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuXG4ucGRwLW9mZmVycy1vZmZlckRlc2MgbGkgLnBkcC1vZmZlcnMtbGFiZWxNYXJrdXAge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHdpZHRoOiA5MCU7XG59XG5cbi5wZHAtb2ZmZXJzLW9mZmVySW1hZ2Uge1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkOGQ4ZDg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLXdlYmtpdC1ib3gtZmxleDogMDtcbiAgLW1zLWZsZXg6IDAgMCAzNnB4O1xuICBmbGV4OiAwIDAgMzZweDtcbn1cblxuLnBkcC1vZmZlcnMtb2ZmZXJJbWFnZSBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnBkcC1vZmZlcnMtb2ZmZXJJbWFnZSArIC5wZHAtb2ZmZXJzLW9mZmVyQ29sdW1uVGV4dCB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4ucGRwLW9mZmVycy1vZmZlckNvbHVtblRleHQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gIC1tcy1mbGV4OiAxO1xuICBmbGV4OiAxO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4ucGRwLW9mZmVycy12aWV3TW9yZUxpbmsge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZsb2F0OiByaWdodDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICBjb2xvcjogIzI4MmMzZjtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG5kaXYucGRwLW9mZmVycy1idWxsZXQge1xuICB3aWR0aDogNHB4O1xuICBoZWlnaHQ6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyYzNmO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ucGRwLW9mZmVycy1wcmljZSB7XG4gIGNvbG9yOiAjZmY5MDVhO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ucGRwLW9mZmVycy1vZmZlckNvbnRyb2xsZXIgLnBkcC1vZmZlcnMtbW9yZU9mZmVyc0J1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5wZHAtb2ZmZXJzLXNob3dPZmZlckxpbmsge1xuICBjb2xvcjogIzI4MmMzZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wZHAtb2ZmZXJzLWFycm93IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogN3B4O1xuICBoZWlnaHQ6IDdweDtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgYm9yZGVyOiBzb2xpZCAjMjgyYzNmO1xuICBib3JkZXItd2lkdGg6IDJweCAycHggMCAwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICBtYXJnaW4tYm90dG9tOiAxcHg7XG59XG5cbi5wZHAtb2ZmZXJzLWFycm93UmlnaHRCb2xkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDRweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbn1cblxuLnBkcC1vZmZlcnMtb2ZmZXJDb2x1bW4ge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAtd2Via2l0LWJveC1wYWNrOiBzdGFydDtcbiAgLW1zLWZsZXgtcGFjazogc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IHN0YXJ0O1xuICAtbXMtZmxleC1hbGlnbjogc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAtbXMtZmxleC13cmFwOiBub3dyYXA7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xufVxuXG4ucGRwLW9mZmVycy1ib2xkVGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5wZHAtb2ZmZXJzLXRhcEZvckJlc3Qge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5wZHAtb2ZmZXJzLWNvdXBvbk5vdEZvdW5kIHtcbiAgY29sb3I6ICMyODJjM2Y7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4ucGRwLW9mZmVycy1vbmx5T2ZmZXJUaXRsZSB7XG4gIGNvbG9yOiAjMjgyYzNmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgLnBkcC1vZmZlcnMtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cbn1cbi5wZHAtb2ZmZXJzLWNvaW5pY29uIHtcbiAgaGVpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ucGRwLW9mZmVycy1zaW1pbGFyQ29sb3JzSWNvbiB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5wZHAtb2ZmZXJzLW1mdUljb24ge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBoZWlnaHQ6IDE3cHg7XG4gIHdpZHRoOiAxN3B4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbn1cblxuLnBkcC1vZmZlcnMtbWZ1VGl0bGVDb250YWluZXIge1xuICBtYXJnaW4tbGVmdDogLTVweDtcbn1cblxuLmFkbWlzc2lvblNsb3Qtc2xvdCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMzZTQxNTI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3ZTgxOGM7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIHdpZHRoOiAxOTJweDtcbiAgcGFkZGluZzogMTVweCAwO1xuICBtYXJnaW46IDE1cHggYXV0byA3cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFkbWlzc2lvblNsb3QtZGlzYWJsZWQge1xuICBib3JkZXItY29sb3I6ICNkNGQ1ZDk7XG4gIHBhZGRpbmc6IDhweCAwIDlweDtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4uYWRtaXNzaW9uU2xvdC1zZWxlY3RlZCB7XG4gIGJvcmRlcjogMS4ycHggc29saWQgIzE0Y2RhODtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMzZTQxNTI7XG59XG5cbi5hZG1pc3Npb25TbG90LWRpc2FibGVkIHNwYW4ge1xuICBjb2xvcjogI2ZmNTcyMjtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctYm90dG9tOiAycHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuYWRtaXNzaW9uU2xvdC1zbG90IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgd2lkdGg6IDE0NXB4O1xuICAgIG1hcmdpbjogMTBweCBhdXRvIDA7XG4gICAgaGVpZ2h0OiA0NHB4O1xuICB9XG5cbiAgLmFkbWlzc2lvblNsb3QtZGlzYWJsZWQge1xuICAgIHBhZGRpbmc6IDhweCAwIDlweDtcbiAgfVxuXG4gIC5hZG1pc3Npb25TbG90LXNlbGVjdGVkIHtcbiAgICBwYWRkaW5nOiAxNXB4IDA7XG4gIH1cblxuICAuYWRtaXNzaW9uU2xvdC1kaXNhYmxlZCBzcGFuIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDJweDtcbiAgfVxufVxuLmluZGV4LW92ZXJhbGxSYXRpbmdDb250YWluZXIge1xuICB3aWR0aDogYXV0bztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkNGQ1ZDk7XG59XG5cbi5pbmRleC1vdmVyYWxsUmF0aW5nIHtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAtd2Via2l0LWZpdC1jb250ZW50O1xuICB3aWR0aDogLW1vei1maXQtY29udGVudDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBoZWlnaHQ6IDI5cHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VhZWFlYztcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMyODJjM2Y7XG59XG5cbi5pbmRleC1vdmVyYWxsUmF0aW5nIC5pbmRleC1zdGFySWNvbiB7XG4gIG1hcmdpbjogMCAtOHB4IDAgLTJweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNik7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC42KTtcbn1cblxuLmluZGV4LW92ZXJhbGxSYXRpbmcgLmluZGV4LXNlcGFyYXRvciB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIG1hcmdpbi10b3A6IC0ycHg7XG4gIGNvbG9yOiAjZDRkNWQ5O1xuICB3aWR0aDogMXB4O1xufVxuXG4uaW5kZXgtb3ZlcmFsbFJhdGluZyAuaW5kZXgtcmF0aW5nc0NvdW50IHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICM1MzU3NjY7XG4gIHdpZHRoOiAtd2Via2l0LWZpdC1jb250ZW50O1xuICB3aWR0aDogLW1vei1maXQtY29udGVudDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuXG4uaW5kZXgtb3ZlcmFsbFJhdGluZzpob3ZlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1MzU3NjY7XG59XG5cbi5pbmRleC1wcm9kdWN0UmF0aW5nc0ljb24ge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4uc2tlbGV0b24tc2tlbGV0b25Mb2FkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDk5Ljk5JTtcbiAgaGVpZ2h0OiA5OS45OSU7XG4gIGJhY2tncm91bmQ6ICNlYWVhZWMgLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGNvbG9yLXN0b3AoMCwgI2VhZWFlYyksIGNvbG9yLXN0b3AoMzUlLCAjZGFkOWQ5KSwgY29sb3Itc3RvcCg3MCUsICNlYWVhZWMpLCB0bygjZWFlYWVjKSkgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kOiAjZWFlYWVjIGxpbmVhci1ncmFkaWVudChsZWZ0LCAjZWFlYWVjLCAjZGFkOWQ5IDM1JSwgI2VhZWFlYyA3MCUsICNlYWVhZWMpIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiA4MDBweCAxMDAlO1xuICAtd2Via2l0LWFuaW1hdGlvbjogc2tlbGV0b24tbG9hZGluZy1za2VsZXRvbiAxLjdzIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KSBpbmZpbml0ZSBmb3J3YXJkcztcbiAgYW5pbWF0aW9uOiBza2VsZXRvbi1sb2FkaW5nLXNrZWxldG9uIDEuN3MgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpIGluZmluaXRlIGZvcndhcmRzO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2tlbGV0b24tbG9hZGluZy1za2VsZXRvbiB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDY4cHggMDtcbiAgfVxuICB0byB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNDY4cHggMDtcbiAgfVxufVxuQGtleWZyYW1lcyBza2VsZXRvbi1sb2FkaW5nLXNrZWxldG9uIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00NjhweCAwO1xuICB9XG4gIHRvIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0NjhweCAwO1xuICB9XG59XG4uaW1hZ2UtdGh1bWItd3JhcHBlci1pbWFnZVRodW1iV3JhcHBlciAuaW1hZ2UtdGh1bWItd3JhcHBlci1oZWFkbGluZSB7XG4gIGNvbG9yOiAjMjgyYzNmO1xuICBsaW5lLWhlaWdodDogMS40O1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmltYWdlLXRodW1iLXdyYXBwZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDAgLTVweDtcbn1cblxuLmltYWdlLXRodW1iLXdyYXBwZXItY29udGFpbmVyIC5pbWFnZS10aHVtYi13cmFwcGVyLXRodW1iIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogNzVweDtcbiAgaGVpZ2h0OiA3NXB4O1xuICBtYXJnaW46IDVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaW1hZ2UtdGh1bWItd3JhcHBlci1jb250YWluZXIgLmltYWdlLXRodW1iLXdyYXBwZXItdGh1bWIgLmltYWdlLXRodW1iLXdyYXBwZXItaW1hZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmltYWdlLXRodW1iLXdyYXBwZXItY29udGFpbmVyIC5pbWFnZS10aHVtYi13cmFwcGVyLXRodW1iTGFzdDphZnRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIG9wYWNpdHk6IDAuODtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MmMzZjtcbiAgei1pbmRleDogMztcbn1cblxuLmltYWdlLXRodW1iLXdyYXBwZXItY29udGFpbmVyIC5pbWFnZS10aHVtYi13cmFwcGVyLWltYWdlQ291bnQge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNHB4O1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIxcHg7XG4gIHotaW5kZXg6IDQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmluZGV4LXJhdGluZ0JhckNvbnRhaW5lciB7XG4gIG1hcmdpbi1sZWZ0OiA0NnB4O1xuICBoZWlnaHQ6IDE4cHg7XG59XG5cbi5pbmRleC1yYXRpbmdCYXJDb250YWluZXIgLmluZGV4LWZsZXhSb3cge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uaW5kZXgtcmF0aW5nQmFyQ29udGFpbmVyIC5pbmRleC1yYXRpbmcge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNhOWFiYjM7XG59XG5cbi5pbmRleC1yYXRpbmdCYXJDb250YWluZXIgLmluZGV4LXJhdGluZyAuaW5kZXgtcmF0aW5nTGV2ZWwge1xuICB3aWR0aDogN3B4O1xufVxuXG4uaW5kZXgtcmF0aW5nQmFyQ29udGFpbmVyIHByb2dyZXNzIHtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW4tdG9wOiA2cHg7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiA0cHg7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjY7XG59XG5cbi5pbmRleC1yYXRpbmdCYXJDb250YWluZXIgcHJvZ3Jlc3M6Oi13ZWJraXQtcHJvZ3Jlc3MtYmFyIHtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNjtcbn1cblxuLmluZGV4LXJhdGluZ0JhckNvbnRhaW5lciBwcm9ncmVzc1tkYXRhLXJhdGluZz1cIjRcIl06Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUsXG4uaW5kZXgtcmF0aW5nQmFyQ29udGFpbmVyIHByb2dyZXNzW2RhdGEtcmF0aW5nPVwiNVwiXTo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZSB7XG4gIGJhY2tncm91bmQ6ICMxNDk1OGY7XG59XG5cbi5pbmRleC1yYXRpbmdCYXJDb250YWluZXIgcHJvZ3Jlc3NbZGF0YS1yYXRpbmc9XCIzXCJdOjotd2Via2l0LXByb2dyZXNzLXZhbHVlIHtcbiAgYmFja2dyb3VuZDogIzcyYmZiYztcbn1cblxuLmluZGV4LXJhdGluZ0JhckNvbnRhaW5lciBwcm9ncmVzc1tkYXRhLXJhdGluZz1cIjJcIl06Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUge1xuICBiYWNrZ3JvdW5kOiAjZmNiMzAxO1xufVxuXG4uaW5kZXgtcmF0aW5nQmFyQ29udGFpbmVyIHByb2dyZXNzW2RhdGEtcmF0aW5nPVwiMVwiXTo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZSB7XG4gIGJhY2tncm91bmQ6ICNmMTY1NjU7XG59XG5cbi5pbmRleC1yYXRpbmdCYXJDb250YWluZXIgcHJvZ3Jlc3NbZGF0YS1yYXRpbmc9XCI0XCJdOjotbW96LXByb2dyZXNzLWJhcixcbi5pbmRleC1yYXRpbmdCYXJDb250YWluZXIgcHJvZ3Jlc3NbZGF0YS1yYXRpbmc9XCI1XCJdOjotbW96LXByb2dyZXNzLWJhciB7XG4gIGJhY2tncm91bmQ6ICMxNDk1OGY7XG59XG5cbi5pbmRleC1yYXRpbmdCYXJDb250YWluZXIgcHJvZ3Jlc3NbZGF0YS1yYXRpbmc9XCIzXCJdOjotbW96LXByb2dyZXNzLWJhciB7XG4gIGJhY2tncm91bmQ6ICM3MmJmYmM7XG59XG5cbi5pbmRleC1yYXRpbmdCYXJDb250YWluZXIgcHJvZ3Jlc3NbZGF0YS1yYXRpbmc9XCIyXCJdOjotbW96LXByb2dyZXNzLWJhciB7XG4gIGJhY2tncm91bmQ6ICNmY2IzMDE7XG59XG5cbi5pbmRleC1yYXRpbmdCYXJDb250YWluZXIgcHJvZ3Jlc3NbZGF0YS1yYXRpbmc9XCIxXCJdOjotbW96LXByb2dyZXNzLWJhciB7XG4gIGJhY2tncm91bmQ6ICNmMTY1NjU7XG59XG5cbi5pbmRleC1yYXRpbmdCYXJDb250YWluZXIgcHJvZ3Jlc3NbZGF0YS1yYXRpbmc9XCI0XCJdLFxuLmluZGV4LXJhdGluZ0JhckNvbnRhaW5lciBwcm9ncmVzc1tkYXRhLXJhdGluZz1cIjVcIl0ge1xuICBjb2xvcjogIzE0OTU4Zjtcbn1cblxuLmluZGV4LXJhdGluZ0JhckNvbnRhaW5lciBwcm9ncmVzc1tkYXRhLXJhdGluZz1cIjNcIl0ge1xuICBjb2xvcjogIzcyYmZiYztcbn1cblxuLmluZGV4LXJhdGluZ0JhckNvbnRhaW5lciBwcm9ncmVzc1tkYXRhLXJhdGluZz1cIjJcIl0ge1xuICBjb2xvcjogI2ZjYjMwMTtcbn1cblxuLmluZGV4LXJhdGluZ0JhckNvbnRhaW5lciBwcm9ncmVzc1tkYXRhLXJhdGluZz1cIjFcIl0ge1xuICBjb2xvcjogI2YxNjU2NTtcbn1cblxuLmluZGV4LXJhdGluZ0JhckNvbnRhaW5lciAuaW5kZXgtY291bnQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjMjgyYzNmO1xuICBtYXJnaW4tbGVmdDogOXB4O1xufVxuXG4uaW5kZXgtZ3JheVN0YXJJY29uIHtcbiAgbWFyZ2luOiAycHggM3B4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xufVxuXG4uYnJlYWRjcnVtYnMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDI5cHggMCAyMnB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5icmVhZGNydW1icy1saW5rIHtcbiAgY29sb3I6ICMyODJjM2Y7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcGFkZGluZy1ib3R0b206IDFweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4uYnJlYWRjcnVtYnMtbGluazpob3ZlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDVkNmQ5O1xufVxuXG4uYnJlYWRjcnVtYnMtYm9sZExpbmsge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uYnJlYWRjcnVtYnMtYm9sZExpbms6aG92ZXIge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4uYnJlYWRjcnVtYnMtc2VwYXJhdG9yIHtcbiAgY29sb3I6ICMyODJjM2Y7XG4gIG1hcmdpbjogMCA1cHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbi5kcm9wZG93bi1maWx0ZXItZHJvcGRvd25GaWx0ZXJDb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZy1yaWdodDogMThweDtcbn1cblxuLmRyb3Bkb3duLWZpbHRlci1kcm9wZG93bkZpbHRlckNvbnRhaW5lciAuZHJvcGRvd24tZmlsdGVyLWFjdGl2ZSB7XG4gIGNvbG9yOiAjZmYzZjZjO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kcm9wZG93bi1maWx0ZXItZHJvcGRvd25GaWx0ZXJDb250YWluZXIgLmRyb3Bkb3duLWZpbHRlci1hY3RpdmUgc3BhbiA+IC5kcm9wZG93bi1maWx0ZXItc3Rhckljb24ge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjg4cHggLTk1cHg7XG59XG5cbi5kcm9wZG93bi1maWx0ZXItZHJvcGRvd25GaWx0ZXJDb250YWluZXIgLmRyb3Bkb3duLWZpbHRlci1kcm9wZG93biB7XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJveC1zaGFkb3c6IDAgMCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHRvcDogMTAwJTtcbiAgd2lkdGg6IDE0OHB4O1xuICBwYWRkaW5nOiAxM3B4IDE1cHg7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcmlnaHQ6IDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdG9wIDAuM3MsIG9wYWNpdHkgMC4xcztcbiAgdHJhbnNpdGlvbjogdG9wIDAuM3MsIG9wYWNpdHkgMC4xcztcbn1cblxuLmRyb3Bkb3duLWZpbHRlci1kcm9wZG93bkZpbHRlckNvbnRhaW5lciAuZHJvcGRvd24tZmlsdGVyLWRyb3Bkb3duLmRyb3Bkb3duLWZpbHRlci1vcGVuIHtcbiAgei1pbmRleDogMTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB0b3AgMC4zcywgb3BhY2l0eSAwLjFzO1xuICB0cmFuc2l0aW9uOiB0b3AgMC4zcywgb3BhY2l0eSAwLjFzO1xuICBvcGFjaXR5OiAxO1xuICB0b3A6IDE0MCU7XG4gIGNvbG9yOiAjZmYzZjZjO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kcm9wZG93bi1maWx0ZXItZHJvcGRvd25GaWx0ZXJDb250YWluZXIgLmRyb3Bkb3duLWZpbHRlci1oZWFkaW5nIHtcbiAgY29sb3I6ICNhOWFiYjM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbWFyZ2luLWJvdHRvbTogLTVweDtcbn1cblxuLmRyb3Bkb3duLWZpbHRlci1kcm9wZG93bkZpbHRlckNvbnRhaW5lciAuZHJvcGRvd24tZmlsdGVyLWl0ZW0ge1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzUzNTc2NjtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZHJvcGRvd24tZmlsdGVyLWRyb3Bkb3duRmlsdGVyQ29udGFpbmVyIC5kcm9wZG93bi1maWx0ZXItaXRlbS5kcm9wZG93bi1maWx0ZXItYWN0aXZlIHtcbiAgY29sb3I6ICNmZjNmNmM7XG59XG5cbi5kcm9wZG93bi1maWx0ZXItZHJvcGRvd25GaWx0ZXJDb250YWluZXIgLmRyb3Bkb3duLWZpbHRlci1kaXZpZGVyIHtcbiAgbWFyZ2luOiAxNXB4IDA7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlYWVjO1xufVxuXG4uZHJvcGRvd24tZmlsdGVyLWRyb3Bkb3duRmlsdGVyQ29udGFpbmVyIC5kcm9wZG93bi1maWx0ZXItYXJyb3dJY29uIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNnB4O1xuICB0b3A6IDZweDtcbn1cblxuLmRyb3Bkb3duLWZpbHRlci1kcm9wZG93bkZpbHRlckNvbnRhaW5lciAuZHJvcGRvd24tZmlsdGVyLWFycm93SWNvbi5kcm9wZG93bi1maWx0ZXItYWN0aXZlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICB0b3A6IDNweDtcbn1cblxuLmRyb3Bkb3duLWZpbHRlci1hcnJvd0ljb24ge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4zKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xufVxuXG4uZHJvcGRvd24tZmlsdGVyLXN0YXJJY29uIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDIpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xuICBtYXJnaW46IDAgM3B4IDNweCAycHg7XG59XG5cbi5wcm9kdWN0LWRldGFpbHMtY29udGFpbmVyIHtcbiAgd2lkdGg6IDM4MHB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4ucHJvZHVjdC1kZXRhaWxzLWNvbnRhaW5lciAucHJvZHVjdC1kZXRhaWxzLWJyYW5kIHtcbiAgY29sb3I6ICMyODJjM2Y7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmc6IDAgMjBweCAwIDA7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbi5wcm9kdWN0LWRldGFpbHMtY29udGFpbmVyIC5wcm9kdWN0LWRldGFpbHMtbmFtZSB7XG4gIGNvbG9yOiAjNTM1NjY1O1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwYWRkaW5nOiA1cHggMjBweCAxNHB4IDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgb3BhY2l0eTogMC44O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4ucHJvZHVjdC1kZXRhaWxzLWNvbnRhaW5lciAucHJvZHVjdC1kZXRhaWxzLWRpc2NvdW50Q29udGFpbmVyIHtcbiAgY29sb3I6ICM2OTZlNzk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5wcm9kdWN0LWRldGFpbHMtY29udGFpbmVyIC5wcm9kdWN0LWRldGFpbHMtZGlzY291bnQge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgY29sb3I6ICNmZjkwNWE7XG59XG5cbi5wcm9kdWN0LWRldGFpbHMtY29udGFpbmVyIC5wcm9kdWN0LWRldGFpbHMtc2VsbGluZy1wcmljZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luOiAwIDAgMTBweDtcbn1cblxuLnByb2R1Y3QtZGV0YWlscy1jb250YWluZXIgLnByb2R1Y3QtZGV0YWlscy1wcmljZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGNvbG9yOiAjMjgyYzNmO1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnByb2R1Y3QtZGV0YWlscy1jb250YWluZXIgLnByb2R1Y3QtZGV0YWlscy1tcnAge1xuICBoZWlnaHQ6IDIycHg7XG4gIG9wYWNpdHk6IDAuODtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBjb2xvcjogIzI4MmMzZjtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuXG4ucHJvZHVjdC1kZXRhaWxzLWNvbnRhaW5lciAucHJvZHVjdC1kZXRhaWxzLWltYWdlV3JhcHBlciB7XG4gIHdpZHRoOiAzNzhweDtcbiAgaGVpZ2h0OiA1MDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VhZWFlYztcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucHJvZHVjdC1kZXRhaWxzLWNvbnRhaW5lciAucHJvZHVjdC1kZXRhaWxzLWltYWdlV3JhcHBlciAucHJvZHVjdC1kZXRhaWxzLWltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5pbWFnZS1ncmlkLWNvbnRhaW5lciB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNTglO1xufVxuXG4uaW1hZ2UtZ3JpZC1zZXAge1xuICBjbGVhcjogYm90aDtcbn1cblxuLmltYWdlLWdyaWQtaW1hZ2VDb250YWluZXIge1xuICBoZWlnaHQ6IDA7XG4gIHBhZGRpbmctdG9wOiAxMzMuMzMzMzMzMzMzMyU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y1ZjVmNjtcbn1cblxuLmltYWdlLWdyaWQtaW1hZ2VDb250YWluZXI6aG92ZXIge1xuICBjdXJzb3I6IGNyb3NzaGFpcjtcbn1cblxuLmltYWdlLWdyaWQteGNlbGVyYXRvclRhZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMHB4O1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICB6LWluZGV4OiAyO1xuICBjb2xvcjogcmVkO1xufVxuXG4uaW1hZ2UtZ3JpZC1pbWFnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XG4gIGJhY2tncm91bmQtb3JpZ2luOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuNHM7XG4gIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuNHM7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cywgLXdlYmtpdC10cmFuc2Zvcm0gMC40cztcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbn1cblxuLmltYWdlLWdyaWQtaW1hZ2U6aG92ZXIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wNCk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNCk7XG59XG5cbi5pbWFnZS1ncmlkLXZpZGVvQ29udGFpbmVyIC5pbWFnZS1ncmlkLWltYWdlIHtcbiAgd2lkdGg6IDEwMC41JTtcbiAgaGVpZ2h0OiAxMDAuNSU7XG59XG5cbi5pbWFnZS1ncmlkLXZpZGVvQ29udGFpbmVyIC5pbWFnZS1ncmlkLWltYWdlOmhvdmVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4uaW1hZ2UtZ3JpZC1jb2w1MCB7XG4gIHdpZHRoOiA0OS41JTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IDElO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pbWFnZS1ncmlkLWNvbDEwMCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pbWFnZS1ncmlkLWNvbDUwOm50aC1jaGlsZCgybikge1xuICBtYXJnaW4tbGVmdDogMSU7XG59XG5cbi5pbWFnZS1ncmlkLXNpbmdsZUltYWdlQ29udGFpbmVyIC5pbWFnZS1ncmlkLWNvbDUwIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGZsb2F0OiBub25lO1xufVxuXG4uaW1hZ2UtZ3JpZC1zaW1pbGFyQ29sb3JzQ3RhIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDQ7XG4gIGNvbG9yOiAjMDAwO1xuICByaWdodDogMjBweDtcbiAgYm90dG9tOiAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGFkYWRlO1xuICBsaW5lLWhlaWdodDogMzNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgd2lsbC1jaGFuZ2U6IGNvbnRlbnRzO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uaW1hZ2UtZ3JpZC1pY29uVGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjZmY1MTdiO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5pbWFnZS1ncmlkLXNpbWlsYXJDb2xvcnNDdGE6aG92ZXIge1xuICBib3JkZXItcmFkaXVzOiA0MnB4O1xuICB3aWR0aDogMTQwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogMTNweDtcbn1cblxuLmltYWdlLWdyaWQtc2ltaWxhckNvbG9yc0N0YTpob3ZlciAuaW1hZ2UtZ3JpZC1pY29uVGV4dCB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuXG4uaW1hZ2UtZ3JpZC1zaW1pbGFyQ29sb3JzSWNvbiB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5pbWFnZS1ncmlkLXNrZWxldG9uTG9hZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiA5OS45OSU7XG4gIGhlaWdodDogOTkuOTklO1xuICBiYWNrZ3JvdW5kOiAjZWFlYWVjIC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBjb2xvci1zdG9wKDAsICNlYWVhZWMpLCBjb2xvci1zdG9wKDM1JSwgI2RhZDlkOSksIGNvbG9yLXN0b3AoNzAlLCAjZWFlYWVjKSwgdG8oI2VhZWFlYykpIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZDogI2VhZWFlYyBsaW5lYXItZ3JhZGllbnQobGVmdCwgI2VhZWFlYywgI2RhZDlkOSAzNSUsICNlYWVhZWMgNzAlLCAjZWFlYWVjKSBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogODAwcHggMTAwJTtcbiAgLXdlYmtpdC1hbmltYXRpb246IGltYWdlLWdyaWQtbG9hZGluZy1za2VsZXRvbiAxLjdzIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KSBpbmZpbml0ZSBmb3J3YXJkcztcbiAgYW5pbWF0aW9uOiBpbWFnZS1ncmlkLWxvYWRpbmctc2tlbGV0b24gMS43cyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCkgaW5maW5pdGUgZm9yd2FyZHM7XG59XG5cbi5kZXNrdG9wLWltYWdlLXpvb20taGlkZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZGVza3RvcC1pbWFnZS16b29tLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgei1pbmRleDogMTA7XG59XG5cbi5kZXNrdG9wLWltYWdlLXpvb20tY29udGVudCB7XG4gIG1heC13aWR0aDogOTgwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGhlaWdodDogMTAwJTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgNXB4ICNkNWQ2ZDk7XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggI2Q1ZDZkOTtcbn1cblxuLmRlc2t0b3AtaW1hZ2Utem9vbS1wcmV2aW91cy1pY29uIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuXG4uZGVza3RvcC1pbWFnZS16b29tLWltYWdlLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIGN1cnNvcjogYWxsLXNjcm9sbDtcbiAgY3Vyc29yOiB6b29tLWluO1xufVxuXG4uZGVza3RvcC1pbWFnZS16b29tLWltYWdlLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMDtcbn1cblxuLmRlc2t0b3AtaW1hZ2Utem9vbS1wcmltYXJ5LWltYWdlIHtcbiAgd2lkdGg6IDk4MHB4O1xuICBoZWlnaHQ6IDEzMDZweDtcbn1cblxuLmRlc2t0b3AtaW1hZ2Utem9vbS10aHVtYm5haWwtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIGxlZnQ6IDEwcHg7XG4gIHdpZHRoOiAzMHB4O1xufVxuXG4uZGVza3RvcC1pbWFnZS16b29tLXRodW1ibmFpbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNWQ2ZDk7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5kZXNrdG9wLWltYWdlLXpvb20tdGh1bWJuYWlsLWJ1dHRvbiB7XG4gIG91dGxpbmU6IDA7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmRlc2t0b3AtaW1hZ2Utem9vbS1zZWxlY3RlZC10aHVtYm5haWwge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmY1MTdiO1xufVxuXG4uZGVza3RvcC1pbWFnZS16b29tLWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWluLWhlaWdodDogNThweDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGVza3RvcC1pbWFnZS16b29tLXByaWNpbmcge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG59XG5cbi5kZXNrdG9wLWltYWdlLXpvb20tc2l6ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmRlc2t0b3AtaW1hZ2Utem9vbS1zZWxsaW5nLXByaWNlIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmRlc2t0b3AtaW1hZ2Utem9vbS1kaXNjb3VudCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIDE1cHg7XG59XG5cbi5kZXNrdG9wLWltYWdlLXpvb20tZGlzY291bnQtdGV4dCB7XG4gIGNvbG9yOiAjZjE2NTY1O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmRlc2t0b3AtaW1hZ2Utem9vbS1idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG91dGxpbmU6IDA7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4uZGVza3RvcC1pbWFnZS16b29tLWFkZC10by1iYWcge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgcGFkZGluZzogMTBweCA0MHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMGJkOTk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyMGJkOTk7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5kZXNrdG9wLWltYWdlLXpvb20taWNvbiB7XG4gIG91dGxpbmU6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzNlNDE1MjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDVkNmQ5O1xufVxuXG4uZGVza3RvcC1pbWFnZS16b29tLWljb246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY2O1xufVxuXG4uZGVza3RvcC1pbWFnZS16b29tLWNsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4IDEwcHggN3B4O1xufVxuXG4uZGVza3RvcC1pbWFnZS16b29tLW5leHQge1xuICBwYWRkaW5nOiAxMHB4IDE3cHggOHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDUlO1xuICByaWdodDogMTBweDtcbn1cblxuLmRlc2t0b3AtaW1hZ2Utem9vbS1wcmV2aW91cyB7XG4gIHBhZGRpbmc6IDEwcHggMTdweCA4cHggMTZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQ1JTtcbiAgbGVmdDogMTBweDtcbn1cblxuLnByb2R1Y3QtbGlzdC1saXN0IHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi1sZWZ0OiAtNDBweDtcbiAgbWFyZ2luLXRvcDogLTQwcHg7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5wcm9kdWN0LWxpc3QtZ2lzdCB7XG4gIHBhZGRpbmctYm90dG9tOiAxNHB4O1xuICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAtbXMtZmxleDogMSAwIDE5MHB4O1xuICBmbGV4OiAxIDAgMTkwcHg7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIG1heC13aWR0aDogY2FsYygxNi42NjY2NyUgLSA0MHB4KTtcbiAgb3V0bGluZTogMXB4IHNvbGlkICNlOWU5ZWI7XG59XG5cbi5wcm9kdWN0LWxpc3QtZ2lzdDpob3ZlciB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggMTZweCA0cHggcmdiYSg0MCwgNDQsIDYzLCAwLjA3KTtcbiAgYm94LXNoYWRvdzogMCAycHggMTZweCA0cHggcmdiYSg0MCwgNDQsIDYzLCAwLjA3KTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDE0MDBweCkge1xuICAucHJvZHVjdC1saXN0LWdpc3Qge1xuICAgIG1heC13aWR0aDogY2FsYygyMCUgLSA0MHB4KTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDE1OTlweCkge1xuICAucHJvZHVjdC1saXN0LWdpc3Qge1xuICAgIG1heC13aWR0aDogY2FsYygxNC4yODU3JSAtIDQwcHgpO1xuICB9XG59XG4ucHJvZHVjdC1saXN0LWxpbmsge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG91dGxpbmU6IDA7XG59XG5cbi5wcm9kdWN0LWl0ZW0tY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4ucHJvZHVjdC1pdGVtLWltYWdlIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjY7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cblxuLnByb2R1Y3QtaXRlbS1icmFuZCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMyODJjM2Y7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbjogMDtcbn1cblxuLnByb2R1Y3QtaXRlbS10aXRsZSB7XG4gIG1hcmdpbjogNHB4IDAgOHB4O1xuICBjb2xvcjogIzUzNTc2NjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5wcm9kdWN0LWl0ZW0tcHJpY2luZyxcbi5wcm9kdWN0LWl0ZW0tdGl0bGUge1xuICB3aWR0aDogMTAwJTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5wcm9kdWN0LWl0ZW0tcHJpY2luZyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnByb2R1Y3QtaXRlbS1pbWFnZUN0biB7XG4gIGhlaWdodDogMDtcbiAgcGFkZGluZy10b3A6IDEzMy4zMzMzMzMzMzMzJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlYWVjO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZTllYjtcbn1cblxuLnByb2R1Y3QtaXRlbS1zZWxsaW5nLXByaWNlIHtcbiAgY29sb3I6ICMyODJjM2Y7XG4gIHBhZGRpbmc6IDAgM3B4IDAgMDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4ucHJvZHVjdC1pdGVtLW1ldGFDb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4ucHJvZHVjdC1pdGVtLW1ycCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICBjb2xvcjogIzI4MmMzZjtcbiAgcGFkZGluZzogMCAzcHg7XG4gIG9wYWNpdHk6IDAuNztcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ucHJvZHVjdC1pdGVtLWRpc2NvdW50IHtcbiAgY29sb3I6ICNmZjkwNWE7XG4gIHBhZGRpbmc6IDAgM3B4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5wcm9kdWN0LWl0ZW0tZGlzY291bnQgYixcbi5wcm9kdWN0LWl0ZW0tZGlzY291bnQgZW0ge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5wcm9kdWN0LWl0ZW0tZGlzY291bnQgLnByb2R1Y3QtaXRlbS1naWZ0LFxuLnByb2R1Y3QtaXRlbS1kaXNjb3VudCBkaXYsXG4ucHJvZHVjdC1pdGVtLWRpc2NvdW50IHAge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAucHJvZHVjdC1pdGVtLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZDVkOTtcbiAgICBtYXJnaW46IDA7XG4gICAgd2lkdGg6IDE4MHB4O1xuICB9XG5cbiAgLnByb2R1Y3QtaXRlbS10aXRsZSB7XG4gICAgd2lkdGg6IDE2MHB4O1xuICAgIG1hcmdpbjogMCAxMHB4IDEwcHg7XG4gIH1cbn1cbi5wcm9kdWN0LWl0ZW0tcmF0aW5nc0NvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMTZweDtcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gIG1hcmdpbjogLTI0cHggMCAwIDZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VhZWFlYztcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnByb2R1Y3QtaXRlbS1yYXRpbmdzQ29udGFpbmVyIC5wcm9kdWN0LWl0ZW0tc3Rhckljb24ge1xuICBtYXJnaW4tbGVmdDogLTRweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNCk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC40KTtcbn1cblxuLnNpbWlsYXItY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIGNsZWFyOiBib3RoO1xuICBwYWRkaW5nLWxlZnQ6IDJweDtcbiAgcGFkZGluZy1yaWdodDogMnB4O1xufVxuXG4uc2ltaWxhci1oZWFkaW5nIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nOiAwO1xuICBjb2xvcjogIzI4MmMzZjtcbiAgbWFyZ2luOiAwIDAgMjRweDtcbn1cblxuLnNpbWlsYXItc3VidGl0bGUge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgY29sb3I6ICM5NDk4OWY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLnNpbWlsYXItY29udGFpbmVyOmJlZm9yZSB7XG4gIGNsZWFyOiBib3RoO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgLnNpbWlsYXItY29udGFpbmVyIHtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk4MHB4KSB7XG4gIC5zaW1pbGFyLWhlYWRpbmcsXG4uc2ltaWxhci1zdWJ0aXRsZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG59XG4uY3Jvc3NzZWxsLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBjbGVhcjogYm90aDtcbiAgcGFkZGluZy1sZWZ0OiAycHg7XG4gIHBhZGRpbmctcmlnaHQ6IDJweDtcbn1cblxuLmNyb3Nzc2VsbC1oZWFkaW5nIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nOiAwO1xuICBjb2xvcjogIzI4MmMzZjtcbiAgbWFyZ2luOiAwIDAgMjRweDtcbn1cblxuLmNyb3Nzc2VsbC1zdWJ0aXRsZSB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICBjb2xvcjogIzk0OTg5ZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uY3Jvc3NzZWxsLWNvbnRhaW5lcjpiZWZvcmUge1xuICBjbGVhcjogYm90aDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5jcm9zc3NlbGwtY29udGFpbmVyIHtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk4MHB4KSB7XG4gIC5jcm9zc3NlbGwtaGVhZGluZyxcbi5jcm9zc3NlbGwtc3VidGl0bGUge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgfVxufVxuLnBpbmNvZGUtZGVsaXZlcnlDb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4ucGluY29kZS1kZWxpdmVyeUNvbnRhaW5lciA+IGg0IHtcbiAgY29sb3I6ICMyODJjM2Y7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ucGluY29kZS1kZWxpdmVyeUNvbnRhaW5lciA+IGZvcm0ge1xuICBtYXJnaW46IDE2cHggMCAwO1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5waW5jb2RlLWJ1dHRvbiB7XG4gIG91dGxpbmU6IDA7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAwO1xuICBjb2xvcjogI2ZmM2U2YztcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5waW5jb2RlLWNoZWNrIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAtNjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5waW5jb2RlLWhlYWRpbmcge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGNvbG9yOiAjNjk2Yjc5O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ucGluY29kZS1lbnRlclBpbmNvZGUge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjMjgyYzNmO1xuICBtYXJnaW46IDhweCAwIDA7XG59XG5cbi5waW5jb2RlLWNoZWNrLWFub3RoZXItcGluY29kZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogLTYwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ucGluY29kZS1zZXJ2aWNlYWJpbGl0eUZvcm0ge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLnBpbmNvZGUtY29kZSB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZDVkOTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwO1xuICBib3gtc2hhZG93OiAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1pbi13aWR0aDogMTYwcHg7XG4gIG91dGxpbmU6IDA7XG4gIHdpZHRoOiAyNTBweDtcbn1cblxuLnBpbmNvZGUtY29kZTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5waW5jb2RlLWNvZGU6Oi1tb3otZm9jdXMtaW5uZXIge1xuICBib3JkZXI6IDA7XG59XG5cbi5waW5jb2RlLWNvZGU6ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY1O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDRkNWQ5O1xufVxuXG4ucGluY29kZS1jaGVja1NlcnZpY2VBYmlsaXR5aGFsZkNhcmQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAxMDtcbn1cblxuLnBpbmNvZGUtcGljb2RlQ2hlY2tDb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHBhZGRpbmc6IDAgMjBweCAyMHB4O1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLnBpbmNvZGUtdGljayB7XG4gIG1hcmdpbjogMCA1cHggMCAwO1xufVxuXG4ucGluY29kZS1zZXJ2aWNlYWJpbGl0eS1saXN0IHtcbiAgbWFyZ2luOiAxNnB4IDAgMDtcbiAgcGFkZGluZzogMDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5waW5jb2RlLXNlcnZpY2VhYmlsaXR5LWxpc3QgbGkge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICM2OTZlNzk7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5waW5jb2RlLXNlcnZpY2VhYmlsaXR5LWxpc3QgbGkgaDQge1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjMjgyYzNmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xufVxuXG4ucGluY29kZS1zZXJ2aWNlYWJpbGl0eS1saXN0IGxpIHAge1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW46IDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjQzO1xuICBjb2xvcjogIzdlODA4YztcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ucGluY29kZS10aWNrY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzYzVhMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGxlZnQ6IDc4cHg7XG4gIHRvcDogMnB4O1xuICBtYXJnaW46IDEwcHggMDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLnBpbmNvZGUtdGljayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzcHg7XG4gIGxlZnQ6IDZweDtcbiAgaGVpZ2h0OiA4cHg7XG4gIHdpZHRoOiA0cHg7XG4gIGJvcmRlcjogc29saWQgI2ZmZjtcbiAgYm9yZGVyLXdpZHRoOiAwIDFweCAxcHggMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4ucGluY29kZS10aWNrU21hbGxDb250YWluZXIge1xuICBoZWlnaHQ6IDhweDtcbiAgd2lkdGg6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2U4MDhjO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiA2cHggMTBweCAwIDA7XG59XG5cbi5waW5jb2RlLXRpY2tTbWFsbCB7XG4gIHRvcDogMnB4O1xuICBsZWZ0OiAzcHg7XG4gIGhlaWdodDogNHB4O1xuICB3aWR0aDogMnB4O1xufVxuXG4ucGluY29kZS1zZXJ2aWNlYWJpbGl0eUNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgd2lkdGg6IDkwJTtcbn1cblxuLnBpbmNvZGUtc2VydmljZWFiaWxpdHlUaXRsZSB7XG4gIGNvbG9yOiAjNTM1NzY2O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5waW5jb2RlLXNlcnZpY2VhYmlsaXR5SXRlbSB7XG4gIG1heC13aWR0aDogNTAwcHg7XG59XG5cbi5waW5jb2RlLXNlcnZpY2VhYmlsaXR5SWNvbiB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLnBpbmNvZGUtc2VydmljZWFiaWxpdHlWaWV3TW9yZSB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICNmZjNlNmM7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luOiAxMHB4IDE2cHggMCAwO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5waW5jb2RlLXJpZ2h0QXJyb3cge1xuICB3aWR0aDogMTZweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xuICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7XG59XG5cbi5waW5jb2RlLWVycm9yIHtcbiAgY29sb3I6ICNmZjU3MjI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MjVweCkge1xuICAucGluY29kZS1jaGVja1NlcnZpY2VBYmlsaXR5aGFsZkNhcmQge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICAucGluY29kZS1waWNvZGVDaGVja0NvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyNHB4KSBhbmQgKG1pbi13aWR0aDogMzIwcHgpIHtcbiAgLnBpbmNvZGUtY2hlY2tTZXJ2aWNlQWJpbGl0eWhhbGZDYXJkIHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG5cbiAgLnBpbmNvZGUtcGljb2RlQ2hlY2tDb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbn1cbi5waW5jb2RlLWRlbGl2ZXJ5T3B0aW9uc0ljb24ge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNDI1cHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubWFyZ2luYSB7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICB9XG5cbiAgLmltYWdlLWdyaWQtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICB9XG5cbiAgLnBkcC1wZHAtY29udGFpbmVyIHtcbiAgICBtaW4td2lkdGg6IDQyNnB4O1xuICB9XG5cbiAgLnBkcC1maXhlZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLnBkcC1kZXNjcmlwdGlvbi1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAucGRwLWFkZC10by1iYWcge1xuICAgIGZsZXg6IDI7XG4gIH1cblxuICAuYnJlYWRjcnVtYnMtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzc1cHgpIGFuZCAobWF4LXdpZHRoOiA0MjVweCkge1xuICAubWFyZ2luYSB7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICB9XG5cbiAgLmltYWdlLWdyaWQtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICB9XG5cbiAgLnBkcC1wZHAtY29udGFpbmVyIHtcbiAgICBtaW4td2lkdGg6IDM2MHB4O1xuICB9XG5cbiAgLnBkcC1kZXNjcmlwdGlvbi1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAucGRwLWZpeGVkIHtcbiAgICBwb3NpdGlvbjogaW5oZXJpdDtcbiAgfVxuXG4gIC5wZHAtYWRkLXRvLXdpc2hsaXN0IHtcbiAgICB3aWR0aDogNzAlO1xuICB9XG5cbiAgLmJyZWFkY3J1bWJzLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogMzc0cHgpIHtcbiAgLm1hcmdpbmEge1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgfVxuXG4gIC5wZHAtYWRkLXRvLWJhZyB7XG4gICAgbWluLXdpZHRoOiA4OHB4O1xuICB9XG5cbiAgLmltYWdlLWdyaWQtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICB9XG5cbiAgLnBkcC1wZHAtY29udGFpbmVyIHtcbiAgICBtaW4td2lkdGg6IDI4MHB4O1xuICB9XG5cbiAgLnBkcC1kZXNjcmlwdGlvbi1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAucG4tY2hlY2sge1xuICAgIGxlZnQ6IDE5MHB4O1xuICAgIHRvcDogLTQzcHg7XG4gIH1cblxuICAucGRwLWZpeGVkIHtcbiAgICBwb3NpdGlvbjogaW5oZXJpdDtcbiAgfVxuXG4gIC5wZHAtYWRkLXRvLXdpc2hsaXN0IHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG5cbiAgLmJyZWFkY3J1bWJzLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/product-details/product-details.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/home/product-details/product-details.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_product_details_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/product-details.service */ "./src/app/shared/services/product-details.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let ProductDetailsComponent = class ProductDetailsComponent {
    // product = PRODUCT
    constructor(objRoute, objProductDtlsService, objChRef) {
        this.objRoute = objRoute;
        this.objProductDtlsService = objProductDtlsService;
        this.objChRef = objChRef;
        this.$objDestroyed = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    ngOnInit() {
        this.productId = this.objRoute.snapshot.params['id'];
        this.objProductDtlsService.getProductDtls(this.productId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.$objDestroyed)).subscribe(response => {
            this.product = response;
            this.objChRef.detectChanges();
        });
        // this.pros = this.product.images[0]
    }
    getPercent() {
        return 1 - (this.product.dblSellingPrice / this.product.dblMRP);
    }
};
ProductDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_shared_services_product_details_service__WEBPACK_IMPORTED_MODULE_3__["ProductDetailsService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
ProductDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/product-details/product-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-details.component.scss */ "./src/app/home/product-details/product-details.component.scss")).default]
    })
], ProductDetailsComponent);



/***/ }),

/***/ "./src/app/home/product-list/product-list.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/home/product-list/product-list.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".view-similar {\n  position: absolute;\n  right: 6px;\n  width: 40px;\n  bottom: 88px;\n  height: 40px;\n  background-color: antiquewhite;\n  border-radius: 50%;\n  opacity: 0.6;\n  transition: width 0.5s;\n}\n.view-similar p {\n  color: #f54a6c;\n  margin-left: 10pxx;\n  margin-top: 13px;\n  margin-left: 11px;\n  font-weight: 550;\n  display: none;\n}\n.fa-clone {\n  margin-top: 10px;\n  color: #ff3e6c;\n}\n.view-similar:hover {\n  cursor: pointer;\n  width: 140px;\n  opacity: 0.9;\n  background-color: white;\n  border-radius: 10px;\n}\n.view-similar:hover .fa-clone {\n  position: absolute;\n  left: 6px;\n}\n.view-similar:hover p {\n  display: block;\n}\n.filter-sort-mobile {\n  padding: 0;\n  position: fixed;\n  bottom: 0;\n  height: 70px;\n  width: 100%;\n  z-index: 100;\n  background-color: white;\n  border-top: 1px solid gainsboro;\n}\n.filter-sort-mobile .btn-bottom {\n  text-align: center;\n  padding: 20px;\n  font-weight: 550;\n}\n.filter-sort-mobile .sort-main {\n  border-right: 1px solid gainsboro;\n}\n.filter-sort-mobile .fa {\n  padding-right: 20px;\n  color: #ff3e6c;\n}\n@media only screen and (max-width: 981px) {\n  .pagination {\n    margin-bottom: 70px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYmR1cmFobWFudC9Eb3dubG9hZHMvbmFzZWVtbmFtYXRoLWUtY29tbWVyY2UtYmY1MzkxMDc1ZmQyL3NyYy9hcHAvaG9tZS9wcm9kdWN0LWxpc3QvcHJvZHVjdC1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDQ0o7QURBSTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNFUjtBRENBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FDRUo7QURDQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNFSjtBRERJO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0FDR1I7QURESTtFQUNJLGNBQUE7QUNHUjtBRENBO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSwrQkFBQTtBQ0VKO0FEQUk7RUFDRyxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0VQO0FERUk7RUFDSSxpQ0FBQTtBQ0FSO0FERUk7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUNBUjtBREdBO0VBQ0k7SUFDSSw4QkFBQTtFQ0FOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlldy1zaW1pbGFye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNnB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGJvdHRvbTogODhweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBvcGFjaXR5OiAwLjY7XG4gICAgdHJhbnNpdGlvbjogd2lkdGggLjVzO1xuICAgIHB7XG4gICAgICAgIGNvbG9yOiAjZjU0YTZjO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEzcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMXB4O1xuICAgICAgICBmb250LXdlaWdodDogNTUwO1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cbi5mYS1jbG9uZXtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGNvbG9yOiAjZmYzZTZjO1xufVxuXG4udmlldy1zaW1pbGFyOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogMTQwcHg7XG4gICAgb3BhY2l0eTogLjk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAuZmEtY2xvbmV7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogNnB4O1xuICAgIH1cbiAgICBwe1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG59XG5cbi5maWx0ZXItc29ydC1tb2JpbGV7XG4gICAgcGFkZGluZzogMDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIGhlaWdodDogNzBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdhaW5zYm9ybztcblxuICAgIC5idG4tYm90dG9te1xuICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICBmb250LXdlaWdodDogNTUwO1xuICAgICAgIFxuICAgIH1cbiAgIFxuICAgIC5zb3J0LW1haW57XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGdhaW5zYm9ybztcbiAgICB9XG4gICAgLmZhe1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgICAgICBjb2xvcjogI2ZmM2U2YztcbiAgICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTgxcHgpIHtcbiAgICAucGFnaW5hdGlvbntcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNzBweCFpbXBvcnRhbnQ7XG4gICAgfVxuICB9ICBcblxuIiwiLnZpZXctc2ltaWxhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDZweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGJvdHRvbTogODhweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3BhY2l0eTogMC42O1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjVzO1xufVxuLnZpZXctc2ltaWxhciBwIHtcbiAgY29sb3I6ICNmNTRhNmM7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4eDtcbiAgbWFyZ2luLXRvcDogMTNweDtcbiAgbWFyZ2luLWxlZnQ6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA1NTA7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5mYS1jbG9uZSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGNvbG9yOiAjZmYzZTZjO1xufVxuXG4udmlldy1zaW1pbGFyOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMTQwcHg7XG4gIG9wYWNpdHk6IDAuOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4udmlldy1zaW1pbGFyOmhvdmVyIC5mYS1jbG9uZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNnB4O1xufVxuLnZpZXctc2ltaWxhcjpob3ZlciBwIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5maWx0ZXItc29ydC1tb2JpbGUge1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiA3MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdhaW5zYm9ybztcbn1cbi5maWx0ZXItc29ydC1tb2JpbGUgLmJ0bi1ib3R0b20ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1NTA7XG59XG4uZmlsdGVyLXNvcnQtbW9iaWxlIC5zb3J0LW1haW4ge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBnYWluc2Jvcm87XG59XG4uZmlsdGVyLXNvcnQtbW9iaWxlIC5mYSB7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIGNvbG9yOiAjZmYzZTZjO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk4MXB4KSB7XG4gIC5wYWdpbmF0aW9uIHtcbiAgICBtYXJnaW4tYm90dG9tOiA3MHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/product-list/product-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/home/product-list/product-list.component.ts ***!
  \*************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_constants_product_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/constants/product-constants */ "./src/app/shared/constants/product-constants.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_services_master_facade_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/master-facade.service */ "./src/app/shared/services/master-facade.service.ts");
/* harmony import */ var _similar_product_similar_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../similar-product/similar-product.component */ "./src/app/home/similar-product/similar-product.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _shared_UI_component_sort_mobile_screen_sort_mobile_screen_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/UI-component/sort-mobile-screen/sort-mobile-screen.component */ "./src/app/shared/UI-component/sort-mobile-screen/sort-mobile-screen.component.ts");
/* harmony import */ var _shared_UI_component_filter_mobile_screen_filter_mobile_screen_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/UI-component/filter-mobile-screen/filter-mobile-screen.component */ "./src/app/shared/UI-component/filter-mobile-screen/filter-mobile-screen.component.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");













let ProductListComponent = class ProductListComponent {
    constructor(objFormBuilder, objRouter, objRoute, objMasterFacadeService, objChRef, dialog, _snackBar) {
        this.objFormBuilder = objFormBuilder;
        this.objRouter = objRouter;
        this.objRoute = objRoute;
        this.objMasterFacadeService = objMasterFacadeService;
        this.objChRef = objChRef;
        this.dialog = dialog;
        this._snackBar = _snackBar;
        this.sticky = false;
        this.step = 1;
        this.removable = true;
        this.objDestroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        // arrProducts = PRODUCT_LIST.arrProducts;
        this.arrProducts = [];
        this.blnShowSearchInput = false;
        this.blnShowDiscountSearch = false;
        this.arrBrandCheckBox = [];
        this.arrShop = [];
        this.arrLocation = [];
        this.arrCategory = [];
        this.blnFilterBrandEmpty = true;
        this.arrBrandTickedCheckBox = [];
        this.arrColorTickedCheckBox = [];
        this.page = 0;
        this.size = 50;
        this.arrPaginatedData = [];
        this.arrFilteredItems = [];
        this.arrFilterReqObj = {
            arrBrand: [],
            arrCategory: [],
            arrShop: [],
            arrLocation: []
        };
        this.arrPriceFilterArray = _shared_constants_product_constants__WEBPACK_IMPORTED_MODULE_2__["PRODUCT_LIST"].arrPrice;
        this.initialFilterValue = null;
        this.strSortBy = 'Recommended';
        this.objSearchForm = this.objFormBuilder.group({
            strCategory: [''],
            strBranchSearch: [''],
            arrBrands: this.objFormBuilder.array([]),
            arrPriceRange: this.objFormBuilder.group({
                0: [false],
                1: [false],
                2: [false],
                3: [false],
            }),
            arrShop: this.objFormBuilder.array([]),
            arrLocation: this.objFormBuilder.array([]),
            arrCategory: this.objFormBuilder.array([]),
        });
        this.initialSearchFormValue = null;
        this.selectable = true;
        /**
         * For Filter Mobile/Tab
         */
        this.arrSelectedFilterData = {
            arrBrand: [],
            arrShop: [],
            arrLocation: [],
            arrCategory: [],
            arrPrice: []
        };
        /**
         * For Filter Mobile/Tab
         */
        this.allFilterData = {
            Brand: [],
            Shop: [],
            Location: [],
            Category: [],
            Price: []
        };
    }
    handleScroll() {
        const windowScroll = window.pageYOffset;
        if (windowScroll >= this.menuPosition) {
            this.sticky = true;
        }
        else {
            this.sticky = false;
        }
    }
    ngOnInit() {
        this.objRouter.queryParams.pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.objDestroyed$))).subscribe((filterData) => {
            if (filterData)
                this.objMasterFacadeService.getProducts(filterData).pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.objDestroyed$))).subscribe((productList) => {
                    if (productList) {
                        this.arrSelectedFilterData.arrBrand = productList.arrBrand ? productList.arrBrand : null;
                        this.arrSelectedFilterData.arrShop = productList.cln_shop ? productList.cln_shop : null;
                        this.arrSelectedFilterData.arrCategory = productList.arrCategory ? productList.arrCategory : null;
                        this.arrSelectedFilterData.arrLocation = productList.cln_location ? productList.cln_location : null;
                        this.arrSelectedFilterData.arrPrice = productList.cln_price ? productList.cln_price : null;
                        this.arrProducts = productList.arrList;
                        this.getData({ pageIndex: this.page, pageSize: this.size });
                        this.objChRef.detectChanges();
                    }
                });
        });
        this.objMasterFacadeService.getAllCategory().pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.objDestroyed$))).subscribe((allFilterData) => {
            if (allFilterData) {
                console.log("allFilterData", allFilterData);
                this.allFilterData.Brand = allFilterData.cln_brand ? allFilterData.cln_brand : null;
                this.allFilterData.Shop = allFilterData.cln_shop ? allFilterData.cln_shop : null;
                this.allFilterData.Category = allFilterData.cln_category ? allFilterData.cln_category : null;
                this.allFilterData.Location = allFilterData.cln_location ? allFilterData.cln_location : null;
                this.allFilterData.Price = allFilterData.arrPrice ? allFilterData.arrPrice : null;
                allFilterData.cln_shop.forEach((shop) => {
                    this.arrShop.push({ strName: shop.strName });
                });
                this.createShopForm(this.arrShop);
                allFilterData.cln_location.forEach((location) => {
                    this.arrLocation.push({ strName: location.strName });
                });
                this.createLocationForm(this.arrLocation);
                allFilterData.cln_brand.forEach((brand) => {
                    this.arrBrandCheckBox.push({ strName: brand.strName, blnShow: true });
                });
                this.createBrandItemsForm(this.arrBrandCheckBox);
                allFilterData.cln_category.forEach((category) => {
                    this.arrCategory.push({ strName: category.strName });
                });
                this.createCategoryForm(this.arrCategory);
                this.menuPosition = 1500;
                this.initialSearchFormValue = this.objSearchForm.value;
                // console.log("this.initialSearchFormValue,",this.initialSearchFormValue);
                this.objChRef.detectChanges();
            }
        });
        window.scrollTo(0, 0);
        this.initialFilterValue = this.objSearchForm.value;
    }
    ngAfterViewInit() {
        // console.log("menuPosition",this.menuPosition);
        // console.log("productSec",this.productSec);
        const controlBlurs = this.formControl.map((formControl) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(formControl.nativeElement, 'blur');
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(this.objSearchForm.valueChanges, ...controlBlurs)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.objDestroyed$)).subscribe(() => {
            // this.addOrRemoveFilteredItem();
            // window.scrollTo({top:0,behavior: "smooth"});
        });
    }
    ngOnDestroy() {
        this.objDestroyed$.next();
        this.objDestroyed$.complete();
    }
    eventFromUIComponent(objEvent) {
        this.objRoute.navigate(['product']);
    }
    getData(obj) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        let index = 0, startingIndex = obj.pageIndex * obj.pageSize, endingIndex = startingIndex + obj.pageSize;
        this.arrPaginatedData = this.arrProducts.filter(() => {
            index++;
            return (index > startingIndex && index <= endingIndex) ? true : false;
        });
    }
    /**
     * BRAND
     */
    get arrBrands() {
        return this.objSearchForm.get('arrBrands');
    }
    /**
     * Breand Search Icon Click Fn
     */
    showSearchForBrand() {
        this.blnShowSearchInput = true;
        setInterval(() => {
            this.brandSearchElement.nativeElement.focus();
        }, 1000);
    }
    /**
     * Brand Search Close Icon Click Fn
     */
    closeBrandSearchBox() {
        this.objSearchForm.get('strBranchSearch').reset('');
        this.arrBrandCheckBox.forEach((brand, index) => {
            let groupControl = this.arrBrands.controls[index];
            groupControl.get('blnShow').setValue(true);
        });
        this.blnShowSearchInput = false;
        // this.createBrandItemsForm(this.arrBrandCheckBox)
    }
    filterBrands({ target }) {
        this.blnFilterBrandEmpty = false;
        this.arrBrandCheckBox.forEach((brand, index) => {
            let groupControl = this.arrBrands.controls[index];
            if (brand.strName.toUpperCase().includes(target.value.toUpperCase())) {
                this.blnFilterBrandEmpty = true;
                groupControl.get('blnShow').setValue(true);
            }
            else {
                groupControl.get('blnShow').setValue(false);
            }
        });
        // this.createBrandItemsForm(a);
    }
    createBrandItemsForm(Brands) {
        this.clearBrandFormArray();
        Brands.forEach((brand, index) => {
            const objTemp = {};
            let blnTicked = false;
            this.arrBrandTickedCheckBox.forEach((obj) => {
                blnTicked = obj['fromControlName'] === brand.strFormControl ? obj['strValue'] : false;
            });
            objTemp[index] = blnTicked;
            objTemp["strFormControlName"] = index;
            objTemp["strLabel"] = brand.strName;
            objTemp["strStock"] = brand.chrStatus;
            objTemp["blnShow"] = brand.blnShow;
            this.arrBrands.push(this.objFormBuilder.group(objTemp));
        });
        this.arrBrands.controls.forEach((group, index) => {
            const eachGroup = group;
            this.arrBrandTickedCheckBox.forEach(obj => {
                if (obj.fromControlName === group.value.strFormControlName) {
                    eachGroup.get(index.toString()).setValue(obj['strValue']);
                    eachGroup.get(index.toString()).updateValueAndValidity();
                }
            });
        });
    }
    selectBrandCheckBox(objEvent, fromControl, strValue, index) {
        let blnAlreadyUsedCheckBox = false;
        const objTemp = {};
        objTemp['strValue'] = objEvent.checked;
        objTemp['fromControlName'] = fromControl;
        this.arrBrandTickedCheckBox.forEach((value) => {
            if (value['fromControlName'] === objTemp['fromControlName']) {
                value['strValue'] = objEvent.checked;
                blnAlreadyUsedCheckBox = true;
            }
        });
        if (!blnAlreadyUsedCheckBox) {
            this.arrBrandTickedCheckBox.push(objTemp);
        }
        if (objEvent.checked) {
            this.arrFilteredItems.push({ strValue: strValue, strFormControl: index, strParent: 'arrBrands' });
            window.scrollTo({ top: 0, behavior: "smooth" });
            this.arrFilterReqObj.arrBrand.push(strValue);
            this.filterApiCall();
        }
        else {
            let intIndex;
            this.arrFilteredItems.forEach((filterItem, index) => {
                if (filterItem.strValue === strValue) {
                    intIndex = index;
                }
            });
            this.arrFilteredItems.splice(intIndex, 1);
            const index = this.arrFilterReqObj.arrBrand.indexOf(strValue);
            if (index > -1)
                this.arrFilterReqObj.arrBrand.splice(index, 1);
            this.filterApiCall();
        }
    }
    clearBrandFormArray() {
        while (this.arrBrands.length !== 0)
            this.arrBrands.removeAt(0);
    }
    createBrandGroup(brands) {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"](brands);
    }
    /**
     * SHOPS
     */
    get arrShopControl() {
        return this.objSearchForm.get('arrShop');
    }
    createShopForm(Shops) {
        this.clearShopFormArray();
        Shops.forEach((shop, index) => {
            const objTemp = {};
            let blnTicked = false;
            // this.arrShop.forEach((obj)=>{
            //   blnTicked = obj['fromControlName'] === shop.strFormControl ? obj['strValue'] :false;
            // })
            objTemp[index] = blnTicked;
            objTemp["strFormControlName"] = index;
            objTemp["strName"] = shop.strName;
            this.arrShopControl.push(this.objFormBuilder.group(objTemp));
        });
        this.arrShopControl.controls.forEach((group, index) => {
            const eachGroup = group;
            this.arrShop.forEach(obj => {
                if (obj.fromControlName === group.value.strFormControlName) {
                    eachGroup.get(index.toString()).setValue(obj['strValue']);
                    eachGroup.get(index.toString()).updateValueAndValidity();
                }
            });
        });
    }
    clearShopFormArray() {
        while (this.arrShopControl.length !== 0)
            this.arrShopControl.removeAt(0);
    }
    createShopGroup(brands) {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"](brands);
    }
    /**
     * SHOPS
     */
    get arrCategoryControl() {
        return this.objSearchForm.get('arrCategory');
    }
    createCategoryForm(category) {
        this.clearCategoryFormArray();
        category.forEach((category, index) => {
            const objTemp = {};
            let blnTicked = false;
            // this.arrCategory.forEach((obj)=>{
            //   blnTicked = obj['fromControlName'] === Category.strFormControl ? obj['strValue'] :false;
            // })
            objTemp[index] = blnTicked;
            objTemp["strFormControlName"] = index;
            objTemp["strName"] = category.strName;
            this.arrCategoryControl.push(this.objFormBuilder.group(objTemp));
        });
        this.arrCategoryControl.controls.forEach((group, index) => {
            const eachGroup = group;
            this.arrCategory.forEach(obj => {
                if (obj.fromControlName === group.value.strFormControlName) {
                    eachGroup.get(index.toString()).setValue(obj['strValue']);
                    eachGroup.get(index.toString()).updateValueAndValidity();
                }
            });
        });
    }
    clearCategoryFormArray() {
        while (this.arrCategoryControl.length !== 0)
            this.arrCategoryControl.removeAt(0);
    }
    createCategoryGroup(brands) {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"](brands);
    }
    /**
     * Location
     */
    get arrLocationControl() {
        return this.objSearchForm.get('arrLocation');
    }
    createLocationForm(Locations) {
        this.clearLocationFormArray();
        Locations.forEach((location, index) => {
            const objTemp = {};
            let blnTicked = false;
            this.arrLocation.forEach((obj) => {
                blnTicked = obj['fromControlName'] === location.strFormControl ? obj['strValue'] : false;
            });
            objTemp[index] = blnTicked;
            objTemp["strFormControlName"] = index;
            objTemp["strName"] = location.strName;
            this.arrLocationControl.push(this.objFormBuilder.group(objTemp));
        });
        this.arrLocationControl.controls.forEach((group, index) => {
            const eachGroup = group;
            this.arrLocation.forEach(obj => {
                if (obj.fromControlName === group.value.strFormControlName) {
                    eachGroup.get(index.toString()).setValue(obj['strValue']);
                    eachGroup.get(index.toString()).updateValueAndValidity();
                }
            });
        });
    }
    clearLocationFormArray() {
        while (this.arrLocationControl.length !== 0)
            this.arrLocationControl.removeAt(0);
    }
    createLocationGroup(brands) {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"](brands);
    }
    selectCheckBox(objEvent, index, strValue, strParent) {
        if (objEvent.checked) {
            this.arrFilteredItems.push({ strValue: strValue, strFormControl: index, strParent: strParent });
            switch (strParent) {
                case 'arrShop':
                    this.arrFilterReqObj.arrShop.push(strValue);
                    break;
                case 'arrLocation':
                    this.arrFilterReqObj.arrLocation.push(strValue);
                    break;
                case 'arrCategory':
                    this.arrFilterReqObj.arrCategory.push(strValue);
                    break;
                default:
                    break;
            }
            this.filterApiCall();
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
        else {
            let intIndex;
            this.arrFilteredItems.forEach((filterItem, index) => {
                if (filterItem.strValue === strValue) {
                    intIndex = index;
                }
            });
            this.arrFilteredItems.splice(intIndex, 1);
            switch (strParent) {
                case 'arrShop':
                    const index = this.arrFilterReqObj.arrShop.indexOf(strValue);
                    if (index > -1)
                        this.arrFilterReqObj.arrShop.splice(index, 1);
                    break;
                case 'arrLocation':
                    const index1 = this.arrFilterReqObj.arrLocation.indexOf(strValue);
                    if (index1 > -1)
                        this.arrFilterReqObj.arrLocation.splice(index1, 1);
                    break;
                case 'arrCategory':
                    const index2 = this.arrFilterReqObj.arrCategory.indexOf(strValue);
                    if (index2 > -1)
                        this.arrFilterReqObj.arrCategory.splice(index2, 1);
                    break;
                default:
                    break;
            }
            this.filterApiCall();
        }
    }
    filterApiCall() {
        this.objMasterFacadeService.getProducts(this.arrFilterReqObj).pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.objDestroyed$))).subscribe((productList) => {
            if (productList) {
                this.arrProducts = productList.arrList;
                this.getData({ pageIndex: this.page, pageSize: this.size });
                this.objChRef.detectChanges();
            }
        });
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    removeFilterItem(item) {
        switch (item.strParent) {
            case 'arrBrands':
                const formGroup = this.arrBrands.controls[item.strFormControl];
                formGroup.controls[item.strFormControl].setValue(false);
                const index3 = this.arrFilterReqObj.arrBrand.indexOf(item.strValue);
                if (index3 > -1)
                    this.arrFilterReqObj.arrBrand.splice(index3, 1);
                break;
            case 'arrPriceRange':
                const priceFormGroup = this.objSearchForm.controls.arrPriceRange;
                priceFormGroup.controls[item.strFormControl].setValue(false);
                break;
            case 'arrShop':
                const formGroup1 = this.arrShopControl.controls[item.strFormControl];
                formGroup1.controls[item.strFormControl].setValue(false);
                const index = this.arrFilterReqObj.arrShop.indexOf(item.strValue);
                if (index > -1)
                    this.arrFilterReqObj.arrShop.splice(index, 1);
                break;
            case 'arrLocation':
                const formGroup2 = this.arrLocationControl.controls[item.strFormControl];
                formGroup2.controls[item.strFormControl].setValue(false);
                const index1 = this.arrFilterReqObj.arrLocation.indexOf(item.strValue);
                if (index1 > -1)
                    this.arrFilterReqObj.arrLocation.splice(index1, 1);
                break;
            case 'arrCategory':
                const formGroup3 = this.arrCategoryControl.controls[item.strFormControl];
                formGroup3.controls[item.strFormControl].setValue(false);
                const index2 = this.arrFilterReqObj.arrCategory.indexOf(item.strValue);
                if (index2 > -1)
                    this.arrFilterReqObj.arrCategory.splice(index2, 1);
                break;
            default:
                break;
        }
        this.arrFilteredItems = this.arrFilteredItems.filter(({ strValue }) => strValue !== item.strValue);
        this.filterApiCall();
    }
    /**
     * CLEAR FILTER
     * Clear all filter
     */
    clearAllFilter() {
        this.objSearchForm.reset(this.initialSearchFormValue);
        this.arrFilteredItems = [];
        this.strSortBy = 'Recommented';
    }
    /**
     * SORT BY
     */
    sortBy(strSortBy) {
        this.step = 1;
        this.strSortBy = strSortBy;
    }
    setStep(index) {
        this.step = index;
    }
    openSimilarProduct(productId) {
        let dialogRef = this.dialog.open(_similar_product_similar_product_component__WEBPACK_IMPORTED_MODULE_8__["SimilarProductComponent"], {
            width: '90vw',
            height: '80vh',
            data: { intProductId: productId._id }
        });
        dialogRef.afterClosed().subscribe(result => {
            // this.animal = result;
        });
    }
    goToSort() {
        let dialogRef = this.dialog.open(_shared_UI_component_sort_mobile_screen_sort_mobile_screen_component__WEBPACK_IMPORTED_MODULE_10__["SortMobileScreenComponent"], {
            width: '100vw',
            closeOnNavigation: true
        });
        dialogRef.afterClosed().subscribe(result => {
            // this.animal = result;
        });
    }
    goToFilter() {
        let dialogRef = this.dialog.open(_shared_UI_component_filter_mobile_screen_filter_mobile_screen_component__WEBPACK_IMPORTED_MODULE_11__["FilterMobileScreenComponent"], {
            width: '100vw',
            data: {
                arrSelectedFilterData: this.arrSelectedFilterData,
                arrFilterData: this.allFilterData
            },
            panelClass: ['full-screen-modal']
            // disableClose:true
        });
        dialogRef.afterClosed().subscribe(result => {
            // this.animal = result;
            console.log("result", result);
        });
    }
    wishListAdd() {
        this._snackBar.open('Added to WISHLIST', 'success', {
            duration: 2000,
            horizontalPosition: 'right',
        });
    }
};
ProductListComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _shared_services_master_facade_service__WEBPACK_IMPORTED_MODULE_7__["MasterFacadeService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBar"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] })
], ProductListComponent.prototype, "formControl", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('filterSec', { static: true })
], ProductListComponent.prototype, "menuElement", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll')
], ProductListComponent.prototype, "handleScroll", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('brandSearch', { static: false })
], ProductListComponent.prototype, "brandSearchElement", void 0);
ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/product-list/product-list.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-list.component.scss */ "./src/app/home/product-list/product-list.component.scss")).default]
    })
], ProductListComponent);



/***/ }),

/***/ "./src/app/home/similar-product/similar-product.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/home/similar-product/similar-product.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".similar-head {\n  padding: 24px 24px 0;\n}\n.similar-head .head-main {\n  margin-top: 30px;\n}\n.similar-head .head-main .head {\n  margin: 12px 20px;\n  font-size: 16px;\n  font-weight: 600;\n  color: #282c3f;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  text-align: center;\n  font-weight: 550;\n}\n.similar-head .head-main .close-btn {\n  float: right;\n  margin-right: 20px;\n  font-size: 18px;\n  margin-top: 7px;\n  cursor: pointer;\n}\n@media only screen and (max-width: 767px) {\n  .similar-head {\n    padding: 0 !important;\n    margin: 0;\n  }\n\n  .head {\n    margin: 0 !important;\n  }\n\n  .close-btn {\n    margin-top: 1px;\n    margin-right: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYmR1cmFobWFudC9Eb3dubG9hZHMvbmFzZWVtbmFtYXRoLWUtY29tbWVyY2UtYmY1MzkxMDc1ZmQyL3NyYy9hcHAvaG9tZS9zaW1pbGFyLXByb2R1Y3Qvc2ltaWxhci1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL3NpbWlsYXItcHJvZHVjdC9zaW1pbGFyLXByb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtBQ0NKO0FEQUk7RUFDSSxnQkFBQTtBQ0VSO0FEQVE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0VaO0FEQVE7RUFDSSxZQUFBO0VBQ0osa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNFUjtBREdBO0VBQ0U7SUFDRSxxQkFBQTtJQUNBLFNBQUE7RUNBRjs7RURFQTtJQUNJLG9CQUFBO0VDQ0o7O0VEQ0E7SUFDRSxlQUFBO0lBQ0Esa0JBQUE7RUNFRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9zaW1pbGFyLXByb2R1Y3Qvc2ltaWxhci1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpbWlsYXItaGVhZHtcbiAgICBwYWRkaW5nOiAyNHB4IDI0cHggMDtcbiAgICAuaGVhZC1tYWlue1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuXG4gICAgICAgIC5oZWFke1xuICAgICAgICAgICAgbWFyZ2luOiAxMnB4IDIwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgY29sb3I6ICMyODJjM2Y7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLjVweDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTUwO1xuICAgICAgICB9XG4gICAgICAgIC5jbG9zZS1idG57XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA3cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2N3B4KSB7XG4gIC5zaW1pbGFyLWhlYWR7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICAuaGVhZHtcbiAgICAgIG1hcmdpbjogMCFpbXBvcnRhbnQ7XG4gIH1cbiAgLmNsb3NlLWJ0bntcbiAgICBtYXJnaW4tdG9wOiAxcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuXG4gIH1cbiAgfSAgXG4iLCIuc2ltaWxhci1oZWFkIHtcbiAgcGFkZGluZzogMjRweCAyNHB4IDA7XG59XG4uc2ltaWxhci1oZWFkIC5oZWFkLW1haW4ge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuLnNpbWlsYXItaGVhZCAuaGVhZC1tYWluIC5oZWFkIHtcbiAgbWFyZ2luOiAxMnB4IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMyODJjM2Y7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNTUwO1xufVxuLnNpbWlsYXItaGVhZCAuaGVhZC1tYWluIC5jbG9zZS1idG4ge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tdG9wOiA3cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuc2ltaWxhci1oZWFkIHtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgLmhlYWQge1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmNsb3NlLWJ0biB7XG4gICAgbWFyZ2luLXRvcDogMXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/similar-product/similar-product.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/home/similar-product/similar-product.component.ts ***!
  \*******************************************************************/
/*! exports provided: SimilarProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimilarProductComponent", function() { return SimilarProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _shared_services_master_facade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/master-facade.service */ "./src/app/shared/services/master-facade.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let SimilarProductComponent = class SimilarProductComponent {
    constructor(dialogRef, data, objMasterFacadeService, objChRef, objRouter) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.objMasterFacadeService = objMasterFacadeService;
        this.objChRef = objChRef;
        this.objRouter = objRouter;
        this.objDestroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.arrProducts = [];
    }
    ngOnInit() {
        const filterData = {
            arrBrand: [],
            arrCategory: [],
            arrShop: [],
            arrLocation: [],
            intLimit: 10
        };
        this.objMasterFacadeService.getProducts(filterData).pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.objDestroyed$))).subscribe((productList) => {
            if (productList) {
                this.arrProducts = productList.arrList;
                this.objChRef.detectChanges();
            }
        });
    }
    goBack() {
        this.dialogRef.close();
    }
    goTOProductDetails(intProductId) {
        this.dialogRef.close();
        this.objRouter.navigate(['product', intProductId]);
    }
};
SimilarProductComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _shared_services_master_facade_service__WEBPACK_IMPORTED_MODULE_3__["MasterFacadeService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
SimilarProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-similar-product',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./similar-product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/similar-product/similar-product.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./similar-product.component.scss */ "./src/app/home/similar-product/similar-product.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], SimilarProductComponent);



/***/ }),

/***/ "./src/app/home/wish-list/wish-list.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/home/wish-list/wish-list.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".product-list div#products {\n  min-height: unset !important;\n  border: unset !important;\n}\n\nimg.product-list-img {\n  border: 1px solid #e9e9eb;\n  border-bottom: 0;\n}\n\n.description {\n  border: 1px solid #e9e9eb;\n  border-bottom: 0;\n  padding: 5px;\n}\n\n.btn-move {\n  cursor: pointer;\n  padding: 10px;\n  text-align: center;\n  color: #ff3e6c;\n  font-weight: 600;\n  border: 1px solid #e9e9eb;\n}\n\n.image {\n  position: relative;\n}\n\n.close-btn {\n  position: absolute;\n  top: 30px;\n  right: 30px;\n  z-index: 100;\n  cursor: pointer;\n}\n\n.fa-window-close:hover {\n  color: #ff3e6c !important;\n}\n\n@media only screen and (max-width: 767px) {\n  .close-btn {\n    top: 10px;\n    right: 10px;\n  }\n\n  .mt-50 {\n    margin: 0 !important;\n  }\n\n  .product-list {\n    padding: 0 !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYmR1cmFobWFudC9Eb3dubG9hZHMvbmFzZWVtbmFtYXRoLWUtY29tbWVyY2UtYmY1MzkxMDc1ZmQyL3NyYy9hcHAvaG9tZS93aXNoLWxpc3Qvd2lzaC1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL3dpc2gtbGlzdC93aXNoLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtFQUNBLHdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0FDRUo7O0FEQUE7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0dKOztBREFBO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUVBLHlCQUFBO0FDRUo7O0FEQUE7RUFDSSxrQkFBQTtBQ0dKOztBRERBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDSUo7O0FEREE7RUFDSSx5QkFBQTtBQ0lKOztBREZBO0VBQ0k7SUFDSSxTQUFBO0lBQ0EsV0FBQTtFQ0tOOztFREhFO0lBQ0ksb0JBQUE7RUNNTjs7RURKRTtJQUNJLHFCQUFBO0VDT047QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvd2lzaC1saXN0L3dpc2gtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LWxpc3QgZGl2I3Byb2R1Y3Rze1xuICAgIG1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOnVuc2V0ICFpbXBvcnRhbnRcbn1cbmltZy5wcm9kdWN0LWxpc3QtaW1nIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTllOWViO1xuICAgIGJvcmRlci1ib3R0b206IDA7XG59XG4uZGVzY3JpcHRpb257XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U5ZTllYjtcbiAgICBib3JkZXItYm90dG9tOiAwO1xuICAgIHBhZGRpbmc6IDVweDtcblxufVxuLmJ0bi1tb3ZlIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNmZjNlNmM7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOWU5ZWI7XG59XG4uaW1hZ2V7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNsb3NlLWJ0bntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzMHB4O1xuICAgIHJpZ2h0OiAzMHB4O1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5mYS13aW5kb3ctY2xvc2U6aG92ZXJ7XG4gICAgY29sb3I6ICNmZjNlNmMgIWltcG9ydGFudDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCkge1xuICAgIC5jbG9zZS1idG57XG4gICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgfVxuICAgIC5tdC01MHtcbiAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5wcm9kdWN0LWxpc3R7XG4gICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICB9XG4gIH0gICIsIi5wcm9kdWN0LWxpc3QgZGl2I3Byb2R1Y3RzIHtcbiAgbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgYm9yZGVyOiB1bnNldCAhaW1wb3J0YW50O1xufVxuXG5pbWcucHJvZHVjdC1saXN0LWltZyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOWU5ZWI7XG4gIGJvcmRlci1ib3R0b206IDA7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOWU5ZWI7XG4gIGJvcmRlci1ib3R0b206IDA7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmJ0bi1tb3ZlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmYzZTZjO1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTllOWViO1xufVxuXG4uaW1hZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jbG9zZS1idG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzBweDtcbiAgcmlnaHQ6IDMwcHg7XG4gIHotaW5kZXg6IDEwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZmEtd2luZG93LWNsb3NlOmhvdmVyIHtcbiAgY29sb3I6ICNmZjNlNmMgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY2xvc2UtYnRuIHtcbiAgICB0b3A6IDEwcHg7XG4gICAgcmlnaHQ6IDEwcHg7XG4gIH1cblxuICAubXQtNTAge1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnByb2R1Y3QtbGlzdCB7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/home/wish-list/wish-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/home/wish-list/wish-list.component.ts ***!
  \*******************************************************/
/*! exports provided: WishListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishListComponent", function() { return WishListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_master_facade_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/master-facade.service */ "./src/app/shared/services/master-facade.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let WishListComponent = class WishListComponent {
    constructor(objMasterFacadeService, objChRef) {
        this.objMasterFacadeService = objMasterFacadeService;
        this.objChRef = objChRef;
        this.objDestroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.arrProducts = [];
    }
    ngOnInit() {
        const filterData = {
            arrBrand: [],
            arrCategory: [],
            arrShop: [],
            arrLocation: []
        };
        this.objMasterFacadeService.getProducts(filterData).pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.objDestroyed$))).subscribe((productList) => {
            if (productList) {
                this.arrProducts = productList.arrList;
                this.objChRef.detectChanges();
            }
        });
    }
};
WishListComponent.ctorParameters = () => [
    { type: _shared_services_master_facade_service__WEBPACK_IMPORTED_MODULE_2__["MasterFacadeService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
WishListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wish-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./wish-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/wish-list/wish-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./wish-list.component.scss */ "./src/app/home/wish-list/wish-list.component.scss")).default]
    })
], WishListComponent);



/***/ }),

/***/ "./src/app/shared/UI-component/filter-mobile-screen/filter-mobile-screen.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/shared/UI-component/filter-mobile-screen/filter-mobile-screen.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".head {\n  padding: 20px 10px 12px 10px;\n}\n.head p {\n  font-weight: 550;\n}\n.clear-all p {\n  color: #ff3e6c;\n  float: right;\n}\n.close-btn {\n  padding-right: 10px;\n}\n.close-btn :hover {\n  color: #ff3e6c;\n  cursor: pointer;\n}\n.left-side {\n  padding: 0;\n  padding-top: 10px;\n  min-height: 85vh !important;\n  background-color: gainsboro !important;\n  text-align: center;\n}\n.fa-check {\n  padding-right: 5px;\n}\n.filter-sort-mobile {\n  padding: 0;\n  position: fixed;\n  bottom: 0;\n  height: 70px;\n  left: 0;\n  z-index: 100;\n  background-color: white;\n  border-top: 1px solid gainsboro;\n}\n.filter-sort-mobile .btn-bottom {\n  text-align: center;\n  padding: 20px;\n  font-weight: 550;\n}\n.filter-sort-mobile .sort-main {\n  border-right: 1px solid gainsboro;\n}\n.filter-sort-mobile .fa {\n  padding-right: 20px;\n  color: #ff3e6c;\n}\n.right-side {\n  padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYmR1cmFobWFudC9Eb3dubG9hZHMvbmFzZWVtbmFtYXRoLWUtY29tbWVyY2UtYmY1MzkxMDc1ZmQyL3NyYy9hcHAvc2hhcmVkL1VJLWNvbXBvbmVudC9maWx0ZXItbW9iaWxlLXNjcmVlbi9maWx0ZXItbW9iaWxlLXNjcmVlbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL1VJLWNvbXBvbmVudC9maWx0ZXItbW9iaWxlLXNjcmVlbi9maWx0ZXItbW9iaWxlLXNjcmVlbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0FDQ0o7QURBSTtFQUNJLGdCQUFBO0FDRVI7QURFSTtFQUNJLGNBQUE7RUFDQSxZQUFBO0FDQ1I7QURFQTtFQUNJLG1CQUFBO0FDQ0o7QURBSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDRVI7QURDQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUVBLDJCQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEQ0E7RUFDSSxrQkFBQTtBQ0VKO0FEQ0E7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLCtCQUFBO0FDRUo7QURBSTtFQUNHLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDRVA7QURFSTtFQUNJLGlDQUFBO0FDQVI7QURFSTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQ0FSO0FER0E7RUFDSSxpQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL1VJLWNvbXBvbmVudC9maWx0ZXItbW9iaWxlLXNjcmVlbi9maWx0ZXItbW9iaWxlLXNjcmVlbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFke1xuICAgIHBhZGRpbmc6IDIwcHggMTBweCAxMnB4IDEwcHg7XG4gICAgcHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDU1MDtcbiAgICB9XG59XG4uY2xlYXItYWxse1xuICAgIHB7XG4gICAgICAgIGNvbG9yOiNmZjNlNmM7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICB9XG59XG4uY2xvc2UtYnRuIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIDpob3ZlcntcbiAgICAgICAgY29sb3I6I2ZmM2U2YztcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbn1cbi5sZWZ0LXNpZGV7XG4gICAgcGFkZGluZzogMDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcblxuICAgIG1pbi1oZWlnaHQ6IDg1dmggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm8gIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZmEtY2hlY2t7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG4uZmlsdGVyLXNvcnQtbW9iaWxle1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgbGVmdDowO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgZ2FpbnNib3JvO1xuXG4gICAgLmJ0bi1ib3R0b217XG4gICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbiAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgIGZvbnQtd2VpZ2h0OiA1NTA7XG4gICAgICAgXG4gICAgfVxuICAgXG4gICAgLnNvcnQtbWFpbntcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZ2FpbnNib3JvO1xuICAgIH1cbiAgICAuZmF7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgICAgIGNvbG9yOiAjZmYzZTZjO1xuICAgIH1cbn1cbi5yaWdodC1zaWRle1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xufSIsIi5oZWFkIHtcbiAgcGFkZGluZzogMjBweCAxMHB4IDEycHggMTBweDtcbn1cbi5oZWFkIHAge1xuICBmb250LXdlaWdodDogNTUwO1xufVxuXG4uY2xlYXItYWxsIHAge1xuICBjb2xvcjogI2ZmM2U2YztcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uY2xvc2UtYnRuIHtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cbi5jbG9zZS1idG4gOmhvdmVyIHtcbiAgY29sb3I6ICNmZjNlNmM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxlZnQtc2lkZSB7XG4gIHBhZGRpbmc6IDA7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBtaW4taGVpZ2h0OiA4NXZoICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IGdhaW5zYm9ybyAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mYS1jaGVjayB7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLmZpbHRlci1zb3J0LW1vYmlsZSB7XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDcwcHg7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBnYWluc2Jvcm87XG59XG4uZmlsdGVyLXNvcnQtbW9iaWxlIC5idG4tYm90dG9tIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4O1xuICBmb250LXdlaWdodDogNTUwO1xufVxuLmZpbHRlci1zb3J0LW1vYmlsZSAuc29ydC1tYWluIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZ2FpbnNib3JvO1xufVxuLmZpbHRlci1zb3J0LW1vYmlsZSAuZmEge1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBjb2xvcjogI2ZmM2U2Yztcbn1cblxuLnJpZ2h0LXNpZGUge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared/UI-component/filter-mobile-screen/filter-mobile-screen.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/shared/UI-component/filter-mobile-screen/filter-mobile-screen.component.ts ***!
  \********************************************************************************************/
/*! exports provided: FilterMobileScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterMobileScreenComponent", function() { return FilterMobileScreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");



let FilterMobileScreenComponent = class FilterMobileScreenComponent {
    constructor(dialogRef, objData, objChRef) {
        this.dialogRef = dialogRef;
        this.objData = objData;
        this.objChRef = objChRef;
        this.selectedItem = 0;
        this.selectedItemId = [];
    }
    ngOnInit() {
        // console.log("this.dialogRef",this.objData);
        this.filterBy = this.objData.arrFilterData;
        this.arrFilterByLeftData = Object.keys(this.objData.arrFilterData);
        // this.selectedItemId=this.objData.arrSelectedFilterData;
        this.fun_filterBy(0);
    }
    // fun_dismissModal(letFilter) {
    //   if (letFilter) {
    //     this.viewCtrl.dismiss();
    //   } else {
    //     this.viewCtrl.dismiss();
    //   }}
    fun_filterBy(value) {
        this.selectedItem = value;
        this.arrFilterByRightData = this.filterBy[this.arrFilterByLeftData[value]];
        this.objChRef.detectChanges();
    }
    fun_thisItemSelected(itemID) {
        if (this.selectedItemId.includes(itemID)) {
            let index = this.selectedItemId.indexOf(itemID);
            this.selectedItemId.splice(index, 1);
        }
        else {
            this.selectedItemId.push(itemID);
        }
    }
    fun_clearSelectedItems() {
        this.selectedItemId = [];
        this.objChRef.detectChanges();
    }
    close() {
        this.dialogRef.close({
            data: 'hai'
        });
    }
};
FilterMobileScreenComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
FilterMobileScreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-filter-mobile-screen',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./filter-mobile-screen.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/UI-component/filter-mobile-screen/filter-mobile-screen.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./filter-mobile-screen.component.scss */ "./src/app/shared/UI-component/filter-mobile-screen/filter-mobile-screen.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], FilterMobileScreenComponent);



/***/ }),

/***/ "./src/app/shared/UI-component/product-items/product-items.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/shared/UI-component/product-items/product-items.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9VSS1jb21wb25lbnQvcHJvZHVjdC1pdGVtcy9wcm9kdWN0LWl0ZW1zLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/shared/UI-component/product-items/product-items.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shared/UI-component/product-items/product-items.component.ts ***!
  \******************************************************************************/
/*! exports provided: ProductItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductItemsComponent", function() { return ProductItemsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductItemsComponent = class ProductItemsComponent {
    constructor() {
        this.objUIComponentEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    eventFromUIComponent(id) {
        this.objUIComponentEvent.emit({
            id: id
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProductItemsComponent.prototype, "arrPaginatedData", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ProductItemsComponent.prototype, "objUIComponentEvent", void 0);
ProductItemsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-items',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-items.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/UI-component/product-items/product-items.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-items.component.scss */ "./src/app/shared/UI-component/product-items/product-items.component.scss")).default]
    })
], ProductItemsComponent);



/***/ }),

/***/ "./src/app/shared/UI-component/sort-mobile-screen/sort-mobile-screen.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/shared/UI-component/sort-mobile-screen/sort-mobile-screen.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h5 {\n  font-weight: 550;\n}\n\n.fa {\n  padding-right: 20px;\n}\n\n.fa-inr {\n  padding-right: 2px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYmR1cmFobWFudC9Eb3dubG9hZHMvbmFzZWVtbmFtYXRoLWUtY29tbWVyY2UtYmY1MzkxMDc1ZmQyL3NyYy9hcHAvc2hhcmVkL1VJLWNvbXBvbmVudC9zb3J0LW1vYmlsZS1zY3JlZW4vc29ydC1tb2JpbGUtc2NyZWVuLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvVUktY29tcG9uZW50L3NvcnQtbW9iaWxlLXNjcmVlbi9zb3J0LW1vYmlsZS1zY3JlZW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKOztBRENBO0VBQ0ksbUJBQUE7QUNFSjs7QURBQTtFQUNJLDZCQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvVUktY29tcG9uZW50L3NvcnQtbW9iaWxlLXNjcmVlbi9zb3J0LW1vYmlsZS1zY3JlZW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoNXtcbiAgICBmb250LXdlaWdodDogNTUwO1xufVxuLmZhe1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG4uZmEtaW5ye1xuICAgIHBhZGRpbmctcmlnaHQ6IDJweCFpbXBvcnRhbnQ7XG59IiwiaDUge1xuICBmb250LXdlaWdodDogNTUwO1xufVxuXG4uZmEge1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuXG4uZmEtaW5yIHtcbiAgcGFkZGluZy1yaWdodDogMnB4ICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/shared/UI-component/sort-mobile-screen/sort-mobile-screen.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/shared/UI-component/sort-mobile-screen/sort-mobile-screen.component.ts ***!
  \****************************************************************************************/
/*! exports provided: SortMobileScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortMobileScreenComponent", function() { return SortMobileScreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");



let SortMobileScreenComponent = class SortMobileScreenComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ngOnInit() {
    }
    sortBy(strSort) {
        this.dialogRef.close();
    }
};
SortMobileScreenComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
];
SortMobileScreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sort-mobile-screen',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sort-mobile-screen.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/UI-component/sort-mobile-screen/sort-mobile-screen.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sort-mobile-screen.component.scss */ "./src/app/shared/UI-component/sort-mobile-screen/sort-mobile-screen.component.scss")).default]
    })
], SortMobileScreenComponent);



/***/ }),

/***/ "./src/app/shared/UI-component/ui-component.module.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/UI-component/ui-component.module.ts ***!
  \************************************************************/
/*! exports provided: UiComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiComponentModule", function() { return UiComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _product_items_product_items_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-items/product-items.component */ "./src/app/shared/UI-component/product-items/product-items.component.ts");
/* harmony import */ var _sort_mobile_screen_sort_mobile_screen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sort-mobile-screen/sort-mobile-screen.component */ "./src/app/shared/UI-component/sort-mobile-screen/sort-mobile-screen.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../material/material.module */ "./src/app/shared/material/material.module.ts");
/* harmony import */ var _filter_mobile_screen_filter_mobile_screen_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filter-mobile-screen/filter-mobile-screen.component */ "./src/app/shared/UI-component/filter-mobile-screen/filter-mobile-screen.component.ts");







let UiComponentModule = class UiComponentModule {
};
UiComponentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_product_items_product_items_component__WEBPACK_IMPORTED_MODULE_3__["ProductItemsComponent"], _sort_mobile_screen_sort_mobile_screen_component__WEBPACK_IMPORTED_MODULE_4__["SortMobileScreenComponent"], _filter_mobile_screen_filter_mobile_screen_component__WEBPACK_IMPORTED_MODULE_6__["FilterMobileScreenComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
        ],
        exports: [_product_items_product_items_component__WEBPACK_IMPORTED_MODULE_3__["ProductItemsComponent"], _sort_mobile_screen_sort_mobile_screen_component__WEBPACK_IMPORTED_MODULE_4__["SortMobileScreenComponent"]],
        entryComponents: [_sort_mobile_screen_sort_mobile_screen_component__WEBPACK_IMPORTED_MODULE_4__["SortMobileScreenComponent"], _filter_mobile_screen_filter_mobile_screen_component__WEBPACK_IMPORTED_MODULE_6__["FilterMobileScreenComponent"]]
    })
], UiComponentModule);



/***/ }),

/***/ "./src/app/shared/constants/common.constants.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/constants/common.constants.ts ***!
  \******************************************************/
/*! exports provided: COMMON_CONSTANTS, HOME_MODULE, CATOGORY_COLLECTION, PRODUCT_LIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMON_CONSTANTS", function() { return COMMON_CONSTANTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOME_MODULE", function() { return HOME_MODULE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CATOGORY_COLLECTION", function() { return CATOGORY_COLLECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_LIST", function() { return PRODUCT_LIST; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const COMMON_CONSTANTS = {};
const HOME_MODULE = {
    MODULE_NAME: 'mdl_home',
    MODULE_PATH: 'common/get_module_settings'
};
const CATOGORY_COLLECTION = {
    CLN_NAME: "cln_category",
    CLN_PATH: 'master/get_master'
};
const PRODUCT_LIST = {
    CLN_PATH: 'product/get_product'
};


/***/ }),

/***/ "./src/app/shared/constants/index.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/constants/index.ts ***!
  \*******************************************/
/*! exports provided: COMMON_CONSTANTS, HOME_MODULE, CATOGORY_COLLECTION, PRODUCT_LIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common.constants */ "./src/app/shared/constants/common.constants.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COMMON_CONSTANTS", function() { return _common_constants__WEBPACK_IMPORTED_MODULE_1__["COMMON_CONSTANTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HOME_MODULE", function() { return _common_constants__WEBPACK_IMPORTED_MODULE_1__["HOME_MODULE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CATOGORY_COLLECTION", function() { return _common_constants__WEBPACK_IMPORTED_MODULE_1__["CATOGORY_COLLECTION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_LIST", function() { return _common_constants__WEBPACK_IMPORTED_MODULE_1__["PRODUCT_LIST"]; });



// export * from './product-constants'


/***/ }),

/***/ "./src/app/shared/constants/product-constants.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/constants/product-constants.ts ***!
  \*******************************************************/
/*! exports provided: PRODUCT_LIST, PRODUCT, CART_RESPONSE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_LIST", function() { return PRODUCT_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCT", function() { return PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CART_RESPONSE", function() { return CART_RESPONSE; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const PRODUCT_LIST = {
    arrBrandItems: [
        {
            strFormControl: 'strAnouk',
            strLabel: 'Anouk',
            strStock: '(1256)'
        },
        {
            strFormControl: 'strW',
            strLabel: 'W',
            strStock: '(1556)'
        },
        {
            strFormControl: 'strHeroNow',
            strLabel: 'HERE&NOW',
            strStock: '(12356)'
        },
        {
            strFormControl: 'strBiba',
            strLabel: 'Biba',
            strStock: '(5556)'
        },
        {
            strFormControl: 'strAnouk1',
            strLabel: 'Anouk1',
            strStock: '(1256)'
        },
        {
            strFormControl: 'strW2',
            strLabel: 'W2',
            strStock: '(1556)'
        },
        {
            strFormControl: 'strHeroNow3',
            strLabel: 'HERE&NOW3',
            strStock: '(12356)'
        },
        {
            strFormControl: 'strBiba2',
            strLabel: 'Biba2',
            strStock: '(5556)'
        },
    ],
    arrColorItems: [
        {
            strFormControl: 'strColor1',
            strLabel: 'Blue',
            strStock: '(1256)',
            colorCode: 'rgb(0, 116, 217)'
        },
        {
            strFormControl: 'strColor2',
            strLabel: 'Black',
            strStock: '(1556)',
            colorCode: 'rgb(54, 69, 79)'
        },
        {
            strFormControl: 'strColor3',
            strLabel: 'Navy Blue',
            strStock: '(12356)',
            colorCode: 'rgb(60, 68, 119)'
        },
        {
            strFormControl: 'strColor4',
            strLabel: 'Green',
            strStock: '(5556)',
            colorCode: 'rgb(94, 177, 96)'
        },
        {
            strFormControl: 'strColor5',
            strLabel: 'Pink',
            strStock: '(1256)',
            colorCode: 'rgb(241, 169, 196)'
        },
        {
            strFormControl: 'strColor6',
            strLabel: 'White',
            strStock: '(1556)',
            colorCode: 'rgb(255, 255, 255)'
        },
        {
            strFormControl: 'strColor7',
            strLabel: 'Off White',
            strStock: '(12356)',
            colorCode: 'rgb(242, 242, 242)'
        },
        {
            strFormControl: 'strColor8',
            strLabel: 'Red',
            strStock: '(5556)',
            colorCode: 'rgb(211, 75, 86)'
        },
        {
            strFormControl: 'strColor9',
            strLabel: 'Yellow',
            strStock: '(5556)',
            colorCode: 'rgb(234, 220, 50)'
        },
    ],
    arrPrice: ['Rs. 224 to Rs. 3393', 'Rs. 3394 to Rs. 6393', 'Rs. 6394 to Rs. 9393', 'Rs. 9394 to Rs. 13393'],
    arrShop: [
        {
            intPk: 1,
            strName: 'Shop1'
        },
        {
            intPk: 2,
            strName: 'Shop2'
        },
        {
            intPk: 3,
            strName: 'Shop3'
        },
        {
            intPk: 4,
            strName: 'Shop4'
        },
        {
            intPk: 5,
            strName: 'Shop5'
        }
    ],
    arrLocation: [
        {
            intPk: 1,
            strName: 'Calicut'
        },
        {
            intPk: 2,
            strName: 'Cochin'
        },
        {
            intPk: 3,
            strName: 'Malappuram'
        },
        {
            intPk: 4,
            strName: 'Thrissur'
        },
        {
            intPk: 5,
            strName: 'Palakkad'
        }
    ]
};
const PRODUCT = {
    images: [
        './../assets/product/p2/1.jpg',
        './../assets/product/p2/2.jpg',
        './../assets/product/p2/3.jpg',
        './../assets/product/p2/4.jpg',
        './../assets/product/p2/5.jpg',
    ],
    intPk: 2,
    productCode: '1452666',
    category: 'T-shirts',
    head: 'Indo Era',
    discription: 'Printed A-Line Kurta',
    price: '1799',
    availSize: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    strike: '2999',
    discount_perc: '50% OFF',
    material: '100% cotton',
    soldBy: {
        intPk: '45ds4f',
        code: 'asdfg',
        name: 'qwerty'
    },
    specifications: [
        { 'strKey': 'fabric', 'strValue': 'cotton' },
        { 'strKey': 'fit', 'strValue': 'regular fit' },
        { 'strKey': 'length', 'strValue': 'regular' },
        { 'strKey': 'mainTrend', 'strValue': 'new basics' },
        { 'strKey': 'multipackSet', 'strValue': 'single' },
        { 'strKey': 'neck', 'strValue': 'round neck' },
        { 'strKey': 'occasion', 'strValue': 'casual' },
        { 'strKey': 'pattern', 'strValue': 'solid' },
        { 'strKey': 'patternType', 'strValue': 'striped' },
        { 'strKey': 'sleeveLength', 'strValue': 'long sleeves' },
        { 'strKey': 'sleeveStyling', 'strValue': 'regular sleeves' },
        { 'strKey': 'washCare', 'strValue': 'machine wash' }
    ]
};
const CART_RESPONSE = {
    arrList: [{
            strImageUrl: "https://carrymark.s3.ap-south-1.amazonaws.com/0mdlmaster1593173059097.jpg",
            objImageUrls: [{
                    strImgUrl_0: "https://carrymark.s3.ap-south-1.amazonaws.com/0mdlmaster1593173059097.jpg"
                }],
            strName: "Wrogn",
            strDescription: "lorem ipsum sdvjsdvkj absdvsdvkjsdbv skdj ssdbvsdvsdvdsvsdcvsdc",
            strSize: "M",
            strColor: "Black",
            dblSellingPrice: "799",
            dblQty: "1",
            _id: "5edfcd7c05b290219a141f4d",
            dblTotalStock: "800",
            letShowqtyRange: false,
            dblMRP: "999",
            arrColorStock: [{
                    dblStock: "180",
                    strName: "Black",
                    strProductId: "5edfcd7c05b290219a141f4d",
                    _id: "5edfcd7e05b290219a141f52"
                },
                {
                    dblStock: "180",
                    strName: "Blue",
                    strProductId: "5edfcd7c05b290219a141f4d",
                    _id: "5edfcd7e05b290219a141f52"
                }
            ],
            arrSizeStock: [{
                    dblStock: "50",
                    strName: "S",
                    strProductId: "5edfcd7c05b290219a141f4d",
                    _id: "5edfcd7e05b290219a141f4e",
                }, {
                    dblStock: "50",
                    strName: "M",
                    strProductId: "5edfcd7c05b290219a141f4d",
                    _id: "5edfcd7e05b290219a141f4f",
                },
                {
                    dblStock: "50",
                    strName: "L",
                    strProductId: "5edfcd7c05b290219a141f4d",
                    _id: "5edfcd7e05b290219a141f50",
                }
            ]
        },
        {
            strImageUrl: "https://carrymark.s3.ap-south-1.amazonaws.com/0mdlmaster1593172013020.jpg",
            objImageUrls: [{
                    strImgUrl_0: "https://masteraxef.s3.ap-south-1.amazonaws.com/0mdlmaster1591725141289.jpg"
                }],
            strName: "Roadster",
            strDescription: "sjdhvcsajv sdkvh sdvhsidvh isdbvasdvhdvhb sdvb asdjhvsdv asdviewhvf i swnv",
            strSize: "L",
            strColor: "",
            dblSellingPrice: "599",
            dblQty: "1",
            _id: "5ee3d35fdedae0054440df55",
            arrSizeStock: [{
                    dblStock: "50",
                    strName: "M",
                    strProductId: "5edfcd7c05b290219a141f4d",
                    _id: "5edfcd7e05b290219a141f4f",
                },
                {
                    dblStock: "50",
                    strName: "L",
                    strProductId: "5edfcd7c05b290219a141f4d",
                    _id: "5edfcd7e05b290219a141f50",
                }
            ],
            arrColorStock: [{
                    dblStock: "180",
                    strName: "Black",
                    strProductId: "5edfcd7c05b290219a141f4d",
                    _id: "5edfcd7e05b290219a141f52"
                },
                {
                    dblStock: "180",
                    strName: "Blue",
                    strProductId: "5edfcd7c05b290219a141f4d",
                    _id: "5edfcd7e05b290219a141f52"
                }
            ],
            dblTotalStock: "200",
            letShowqtyRange: false,
            dblMRP: "799"
        },
        {
            strImageUrl: "https://carrymark.s3.ap-south-1.amazonaws.com/0mdlmaster1593174075477.jpg",
            strName: "Sangiqr",
            objImageUrls: [{
                    strImgUrl_0: "https://masteraxef.s3.ap-south-1.amazonaws.com/0mdlmaster1591725141289.jpg"
                }],
            strDescription: "asqwe dsdnbv sdvsdvh uiwebfv dhbvskdvbsvsdsd sdvsd",
            strSize: "M",
            strColor: "Blue",
            dblSellingPrice: "1199",
            dblQty: "1",
            _id: "5ee3d40ddedae0054440df5b",
            arrColorStock: [{
                    dblStock: "180",
                    strName: "Black",
                    strProductId: "5edfcd7c05b290219a141f4d",
                    _id: "5edfcd7e05b290219a141f52"
                },
                {
                    dblStock: "180",
                    strName: "Blue",
                    strProductId: "5edfcd7c05b290219a141f4d",
                    _id: "5edfcd7e05b290219a141f52"
                }
            ],
            arrSizeStock: [{
                    dblStock: "50",
                    strName: "S",
                    strProductId: "5edfcd7c05b290219a141f4d",
                    _id: "5edfcd7e05b290219a141f4e",
                },
                {
                    dblStock: "50",
                    strName: "M",
                    strProductId: "5edfcd7c05b290219a141f4d",
                    _id: "5edfcd7e05b290219a141f50",
                }
            ],
            dblTotalStock: "1200",
            letShowqtyRange: false,
            dblMRP: "1499"
        }
    ]
};


/***/ }),

/***/ "./src/app/shared/errors/app-error.handler.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/errors/app-error.handler.ts ***!
  \****************************************************/
/*! exports provided: AppErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppErrorHandler", function() { return AppErrorHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class AppErrorHandler {
    handleError() {
        console.log("Damn!, it seems our internal server error");
    }
}


/***/ }),

/***/ "./src/app/shared/errors/app-error.ts":
/*!********************************************!*\
  !*** ./src/app/shared/errors/app-error.ts ***!
  \********************************************/
/*! exports provided: AppError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppError", function() { return AppError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class AppError {
    constructor(originalError) {
        this.originalError = originalError;
    }
}


/***/ }),

/***/ "./src/app/shared/errors/bad-request-error.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/errors/bad-request-error.ts ***!
  \****************************************************/
/*! exports provided: BadRequestError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadRequestError", function() { return BadRequestError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-error */ "./src/app/shared/errors/app-error.ts");


class BadRequestError extends _app_error__WEBPACK_IMPORTED_MODULE_1__["AppError"] {
}


/***/ }),

/***/ "./src/app/shared/errors/index.ts":
/*!****************************************!*\
  !*** ./src/app/shared/errors/index.ts ***!
  \****************************************/
/*! exports provided: AppError, AppErrorHandler, BadRequestError, NotFoundError, ServerError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-error */ "./src/app/shared/errors/app-error.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppError", function() { return _app_error__WEBPACK_IMPORTED_MODULE_1__["AppError"]; });

/* harmony import */ var _app_error_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-error.handler */ "./src/app/shared/errors/app-error.handler.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppErrorHandler", function() { return _app_error_handler__WEBPACK_IMPORTED_MODULE_2__["AppErrorHandler"]; });

/* harmony import */ var _bad_request_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bad-request-error */ "./src/app/shared/errors/bad-request-error.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BadRequestError", function() { return _bad_request_error__WEBPACK_IMPORTED_MODULE_3__["BadRequestError"]; });

/* harmony import */ var _not_found_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./not-found-error */ "./src/app/shared/errors/not-found-error.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotFoundError", function() { return _not_found_error__WEBPACK_IMPORTED_MODULE_4__["NotFoundError"]; });

/* harmony import */ var _server_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./server-error */ "./src/app/shared/errors/server-error.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServerError", function() { return _server_error__WEBPACK_IMPORTED_MODULE_5__["ServerError"]; });









/***/ }),

/***/ "./src/app/shared/errors/not-found-error.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/errors/not-found-error.ts ***!
  \**************************************************/
/*! exports provided: NotFoundError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundError", function() { return NotFoundError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-error */ "./src/app/shared/errors/app-error.ts");


class NotFoundError extends _app_error__WEBPACK_IMPORTED_MODULE_1__["AppError"] {
}


/***/ }),

/***/ "./src/app/shared/errors/server-error.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/errors/server-error.ts ***!
  \***********************************************/
/*! exports provided: ServerError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerError", function() { return ServerError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-error */ "./src/app/shared/errors/app-error.ts");


class ServerError extends _app_error__WEBPACK_IMPORTED_MODULE_1__["AppError"] {
}


/***/ }),

/***/ "./src/app/shared/layout/footer/footer.component.scss":
/*!************************************************************!*\
  !*** ./src/app/shared/layout/footer/footer.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".icon-bar {\n  position: fixed;\n  top: 50%;\n  right: 0;\n  transform: translateY(-50%);\n}\n\n.icon-bar a {\n  display: block;\n  text-align: center;\n  padding: 16px;\n  transition: all 0.3s ease;\n  color: white;\n  font-size: 20px;\n}\n\n.icon-bar a:hover {\n  background-color: #000;\n}\n\n.facebook {\n  background: #3B5998;\n  color: white;\n}\n\n.twitter {\n  background: #55ACEE;\n  color: white;\n}\n\n.google {\n  background: #dd4b39;\n  color: white;\n}\n\n.linkedin {\n  background: #007bb5;\n  color: white;\n}\n\n.youtube {\n  background: #bb0000;\n  color: white;\n}\n\n.content {\n  margin-left: 75px;\n  font-size: 30px;\n}\n\n.foot-main h4 {\n  font-size: 12px;\n  font-weight: 550;\n  text-decoration: none;\n  color: #282c3f;\n  margin: 20px 0;\n}\n\n.foot-main p {\n  color: #696b79;\n  display: block;\n  font-size: 15px;\n  text-decoration: none;\n  padding-bottom: 5px;\n  cursor: pointer;\n  line-height: normal;\n}\n\n.fa {\n  font-size: 2.5rem;\n  padding-right: 28px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYmR1cmFobWFudC9Eb3dubG9hZHMvbmFzZWVtbmFtYXRoLWUtY29tbWVyY2UtYmY1MzkxMDc1ZmQyL3NyYy9hcHAvc2hhcmVkL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFHQSwyQkFBQTtBQ0NKOztBREVFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNDSjs7QURFRTtFQUNFLHNCQUFBO0FDQ0o7O0FERUU7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFRTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVFO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUU7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFRTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVFO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FDQ0o7O0FER0k7RUFFRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDRE47O0FER0k7RUFDRSxjQUFBO0VBQ0YsY0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDREo7O0FES0U7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbi1iYXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDUwJTtcbiAgICByaWdodDogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgfVxuICBcbiAgLmljb24tYmFyIGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuICBcbiAgLmljb24tYmFyIGE6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIH1cbiAgXG4gIC5mYWNlYm9vayB7XG4gICAgYmFja2dyb3VuZDogIzNCNTk5ODtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgXG4gIC50d2l0dGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjNTVBQ0VFO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICBcbiAgLmdvb2dsZSB7XG4gICAgYmFja2dyb3VuZDogI2RkNGIzOTtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgXG4gIC5saW5rZWRpbiB7XG4gICAgYmFja2dyb3VuZDogIzAwN2JiNTtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgXG4gIC55b3V0dWJlIHtcbiAgICBiYWNrZ3JvdW5kOiAjYmIwMDAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICBcbiAgLmNvbnRlbnQge1xuICAgIG1hcmdpbi1sZWZ0OiA3NXB4O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxuXG4gIC5mb290LW1haW57XG4gICAgaDR7XG5cbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1NTA7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBjb2xvcjogIzI4MmMzZjtcbiAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgIH1cbiAgICBwe1xuICAgICAgY29sb3I6ICM2OTZiNzk7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgIH1cbiAgfVxuXG4gIC5mYXtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyOHB4O1xuICB9IiwiLmljb24tYmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwJTtcbiAgcmlnaHQ6IDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbi5pY29uLWJhciBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTZweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5pY29uLWJhciBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbn1cblxuLmZhY2Vib29rIHtcbiAgYmFja2dyb3VuZDogIzNCNTk5ODtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udHdpdHRlciB7XG4gIGJhY2tncm91bmQ6ICM1NUFDRUU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmdvb2dsZSB7XG4gIGJhY2tncm91bmQ6ICNkZDRiMzk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmxpbmtlZGluIHtcbiAgYmFja2dyb3VuZDogIzAwN2JiNTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ueW91dHViZSB7XG4gIGJhY2tncm91bmQ6ICNiYjAwMDA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbnRlbnQge1xuICBtYXJnaW4tbGVmdDogNzVweDtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4uZm9vdC1tYWluIGg0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTUwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMjgyYzNmO1xuICBtYXJnaW46IDIwcHggMDtcbn1cbi5mb290LW1haW4gcCB7XG4gIGNvbG9yOiAjNjk2Yjc5O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxNXB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmZhIHtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDI4cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/shared/layout/footer/footer.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/layout/footer/footer.component.ts ***!
  \**********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/layout/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/shared/layout/header/header.component.scss":
/*!************************************************************!*\
  !*** ./src/app/shared/layout/header/header.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/shared/layout/header/header.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/layout/header/header.component.ts ***!
  \**********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let HeaderComponent = class HeaderComponent {
    constructor(objRouter) {
        this.objRouter = objRouter;
        this.blnMenShow = false;
    }
    ngOnInit() {
    }
    openNav() {
        document.getElementById('mySidenav').style.width = '75%';
    }
    closeNav() {
        document.getElementById('mySidenav').style.width = '0';
    }
    toggleNavbar() {
        this.objRouter.navigate(['checkout/cart']);
    }
    goToProfile() {
        this.objRouter.navigate(['auth']);
    }
    wishList() {
        this.objRouter.navigate(['wish-list']);
    }
    cart() {
        this.objRouter.navigate(['checkout/cart']);
    }
    menShow() {
        this.blnMenShow = this.blnMenShow ? false : true;
    }
    goToLogin() {
        this.objRouter.navigate(['auth']);
        document.getElementById('mySidenav').style.width = '0';
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/layout/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/shared/layout/secure-header/secure-header.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/shared/layout/secure-header/secure-header.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".secure-icon {\n  width: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYmR1cmFobWFudC9Eb3dubG9hZHMvbmFzZWVtbmFtYXRoLWUtY29tbWVyY2UtYmY1MzkxMDc1ZmQyL3NyYy9hcHAvc2hhcmVkL2xheW91dC9zZWN1cmUtaGVhZGVyL3NlY3VyZS1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9sYXlvdXQvc2VjdXJlLWhlYWRlci9zZWN1cmUtaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2xheW91dC9zZWN1cmUtaGVhZGVyL3NlY3VyZS1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdXJlLWljb24ge1xuICAgIHdpZHRoOiA1MHB4O1xufVxuIiwiLnNlY3VyZS1pY29uIHtcbiAgd2lkdGg6IDUwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/shared/layout/secure-header/secure-header.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/layout/secure-header/secure-header.component.ts ***!
  \************************************************************************/
/*! exports provided: SecureHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecureHeaderComponent", function() { return SecureHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SecureHeaderComponent = class SecureHeaderComponent {
    constructor() { }
    ngOnInit() {
    }
    openNav() {
        document.getElementById('mySidenav').style.width = '75%';
    }
    closeNav() {
        document.getElementById('mySidenav').style.width = '0';
    }
};
SecureHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-secure-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./secure-header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/secure-header/secure-header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./secure-header.component.scss */ "./src/app/shared/layout/secure-header/secure-header.component.scss")).default]
    })
], SecureHeaderComponent);



/***/ }),

/***/ "./src/app/shared/material/material.module.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/material/material.module.ts ***!
  \****************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm2015/tree.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm2015/tree.js");













































let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_33__["MatRadioModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["A11yModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_8__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__["CdkTableModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_10__["CdkTreeModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_12__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_13__["MatBottomSheetModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__["MatChipsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_26__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_27__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatNativeDateModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_30__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__["MatProgressSpinnerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_34__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_35__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_36__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_37__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_38__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_39__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_40__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_41__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_42__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_43__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_44__["MatTreeModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["PortalModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ScrollingModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_30__["MatPaginatorModule"]
        ],
        exports: [
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_33__["MatRadioModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["A11yModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_8__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__["CdkTableModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_10__["CdkTreeModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_12__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_13__["MatBottomSheetModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__["MatChipsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_26__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_27__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatNativeDateModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_30__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__["MatProgressSpinnerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_34__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_35__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_36__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_37__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_38__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_39__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_40__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_41__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_42__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_43__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_44__["MatTreeModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["PortalModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ScrollingModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_30__["MatPaginatorModule"]
        ]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/shared/model/user.model.ts":
/*!********************************************!*\
  !*** ./src/app/shared/model/user.model.ts ***!
  \********************************************/
/*! exports provided: LoginModel, User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModel", function() { return LoginModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class LoginModel {
}
class User {
}


/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.service */ "./src/app/shared/services/base.service.ts");



let AuthService = class AuthService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    postLogin(objData) {
        return this.apiService.post('user/login_user', objData);
    }
};
AuthService.ctorParameters = () => [
    { type: _base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/shared/services/banner.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/banner.service.ts ***!
  \***************************************************/
/*! exports provided: BannerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerService", function() { return BannerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.service */ "./src/app/shared/services/base.service.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./src/app/shared/constants/index.ts");




let BannerService = class BannerService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    getAllBanners() {
        return this.apiService.post(_constants__WEBPACK_IMPORTED_MODULE_3__["HOME_MODULE"].MODULE_PATH, { strModule: _constants__WEBPACK_IMPORTED_MODULE_3__["HOME_MODULE"].MODULE_NAME });
    }
};
BannerService.ctorParameters = () => [
    { type: _base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] }
];
BannerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BannerService);



/***/ }),

/***/ "./src/app/shared/services/base.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/base.service.ts ***!
  \*************************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../errors */ "./src/app/shared/errors/index.ts");
/* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./jwt.service */ "./src/app/shared/services/jwt.service.ts");







let BaseService = class BaseService {
    constructor(objHttp, _jwt) {
        this.objHttp = objHttp;
        this._jwt = _jwt;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
    }
    /**
     * For GET method
     * @param path
     * @param objJson
     */
    get(path = '', objJson = null) {
        // const headerOptions = new HttpHeaders();
        return this.objHttp.post(`${this.baseUrl}/${path}`, objJson, { headers: this.setHeaders() });
    }
    /**
     * For POST method
     * @param path
     * @param objJson
     */
    post(path = '', objJson = null) {
        // const headerOptions = new HttpHeaders();
        return this.objHttp.post(`${this.baseUrl}/${path}`, objJson, { headers: this.setHeaders() });
    }
    /**
     * Search objJson
     */
    setUrlParams(objJson = null) {
        return;
    }
    //  /**
    //  *  set url search params
    //  * @param params
    //  */
    // private setUrlParams(params: object): URLSearchParams {
    //   const urlParams: URLSearchParams = new URLSearchParams();
    //   if (params) {
    //     for (const item in params) {
    //       if (params.hasOwnProperty(item)) {
    //         urlParams.set(item, params[item]);
    //       }
    //     }
    //   }
    //   return urlParams;
    // }
    /**
     * set http request headers
     */
    setHeaders() {
        const headersConfig = {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Headers": "*"
        };
        if (this._jwt.getToken()) {
            headersConfig["Authorization"] = `${this._jwt.getToken()}`;
        }
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](headersConfig);
    }
    /**
     * Handler errors globally
     * @param error
     */
    handleErrors(error) {
        if (error.status === 500) {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(new _errors__WEBPACK_IMPORTED_MODULE_5__["ServerError"](error.json()));
        }
        if (error.status === 400) {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(new _errors__WEBPACK_IMPORTED_MODULE_5__["BadRequestError"](error.json()));
        }
        if (error.status === 404) {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(new _errors__WEBPACK_IMPORTED_MODULE_5__["NotFoundError"]());
        }
        // if (error.status === 403) {
        //   // return Observable.throw(new UnAuthError(error.json()));
        // }
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(new _errors__WEBPACK_IMPORTED_MODULE_5__["AppError"]());
    }
};
BaseService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _jwt_service__WEBPACK_IMPORTED_MODULE_6__["JwtService"] }
];
BaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BaseService);



/***/ }),

/***/ "./src/app/shared/services/cart-service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/cart-service.ts ***!
  \*************************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.service */ "./src/app/shared/services/base.service.ts");



let CartService = class CartService {
    constructor(objApiService) {
        this.objApiService = objApiService;
    }
    getCart() {
        return this.objApiService.post('cart/get_cart');
    }
};
CartService.ctorParameters = () => [
    { type: _base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] }
];
CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CartService);



/***/ }),

/***/ "./src/app/shared/services/category.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/category.service.ts ***!
  \*****************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.service */ "./src/app/shared/services/base.service.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../constants */ "./src/app/shared/constants/index.ts");




let CategoryService = class CategoryService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    /**
     * Get All Category
     * SHOP,
     * BRAND,
     * CATEGORY
     *
     */
    getAllCategories() {
        return this.apiService.post(_constants__WEBPACK_IMPORTED_MODULE_3__["CATOGORY_COLLECTION"].CLN_PATH, {
            "arrCollection": [{ "strCollection": "cln_shop" },
                { "strCollection": "cln_brand" },
                { "strCollection": "cln_category" },
                { "strCollection": "cln_location" }]
        });
    }
};
CategoryService.ctorParameters = () => [
    { type: _base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] }
];
CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CategoryService);



/***/ }),

/***/ "./src/app/shared/services/index.ts":
/*!******************************************!*\
  !*** ./src/app/shared/services/index.ts ***!
  \******************************************/
/*! exports provided: MasterFacadeService, AuthService, JwtService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _master_facade_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./master-facade.service */ "./src/app/shared/services/master-facade.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MasterFacadeService", function() { return _master_facade_service__WEBPACK_IMPORTED_MODULE_1__["MasterFacadeService"]; });

/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]; });

/* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jwt.service */ "./src/app/shared/services/jwt.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtService", function() { return _jwt_service__WEBPACK_IMPORTED_MODULE_3__["JwtService"]; });







/***/ }),

/***/ "./src/app/shared/services/jwt.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/services/jwt.service.ts ***!
  \************************************************/
/*! exports provided: JwtService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtService", function() { return JwtService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let JwtService = class JwtService {
    constructor() { }
    /**
     * Save the access_token
     * @param acess_token
     * @param refresh_token
     */
    saveToken(acess_token, refresh_token = '') {
        window.localStorage.setItem('strToken', acess_token);
        window.localStorage.setItem('strRefreshToken', refresh_token);
        // window.localStorage['strRefreshToken'] = refresh_token;
    }
    /**
     * Remove the acess token
     */
    purgeToken() {
        window.localStorage.removeItem('strToken');
        window.localStorage.removeItem('strRefreshToken');
    }
    /**
     * Get access token
     */
    getToken() {
        return window.localStorage.getItem('strToken');
    }
};
JwtService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], JwtService);



/***/ }),

/***/ "./src/app/shared/services/master-facade.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/master-facade.service.ts ***!
  \**********************************************************/
/*! exports provided: MasterFacadeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterFacadeService", function() { return MasterFacadeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _product_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-list.service */ "./src/app/shared/services/product-list.service.ts");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category.service */ "./src/app/shared/services/category.service.ts");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart-service */ "./src/app/shared/services/cart-service.ts");





let MasterFacadeService = class MasterFacadeService {
    constructor(injector) {
        this.injector = injector;
    }
    get productListService() {
        if (!this._productListService) {
            this._productListService = this.injector.get(_product_list_service__WEBPACK_IMPORTED_MODULE_2__["ProductListService"]);
        }
        return this._productListService;
    }
    get categiryService() {
        if (!this._categoryService) {
            this._categoryService = this.injector.get(_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"]);
        }
        return this._categoryService;
    }
    get cartService() {
        if (!this._cartService) {
            this._cartService = this.injector.get(_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]);
        }
        return this._cartService;
    }
    /**
     * PRODUCT LIST
     */
    getProducts(objPayload = null) {
        const objTemp = JSON.parse(JSON.stringify(objPayload));
        if (objTemp.arrCategory && typeof objTemp.arrCategory === 'string') {
            objTemp.arrCategory = [objTemp.arrCategory];
        }
        if (objTemp.arrShop && typeof objTemp.arrShop === 'string') {
            objTemp.arrShop = [objTemp.arrShop];
        }
        if (objTemp.arrBrand && typeof objTemp.arrBrand === 'string') {
            objTemp.arrBrand = [objTemp.arrBrand];
        }
        if (objTemp.arrProductName && typeof objTemp.arrProductName === 'string') {
            objTemp.arrProductName = [objTemp.arrProductName];
        }
        return this.productListService.getProducts(objTemp);
    }
    /**
     * CATEGORY
     */
    getAllCategory() {
        return this.categiryService.getAllCategories();
    }
    getCart() {
        return this.cartService.getCart();
    }
};
MasterFacadeService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
MasterFacadeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MasterFacadeService);



/***/ }),

/***/ "./src/app/shared/services/product-details.service.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/services/product-details.service.ts ***!
  \************************************************************/
/*! exports provided: ProductDetailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsService", function() { return ProductDetailsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.service */ "./src/app/shared/services/base.service.ts");



let ProductDetailsService = class ProductDetailsService {
    constructor(objApiService) {
        this.objApiService = objApiService;
    }
    getProductDtls(id) {
        return this.objApiService.post('product/get_product_details', { "strProductId": id });
    }
};
ProductDetailsService.ctorParameters = () => [
    { type: _base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] }
];
ProductDetailsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductDetailsService);



/***/ }),

/***/ "./src/app/shared/services/product-list.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/product-list.service.ts ***!
  \*********************************************************/
/*! exports provided: ProductListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListService", function() { return ProductListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.service */ "./src/app/shared/services/base.service.ts");
/* harmony import */ var _constants_common_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/common.constants */ "./src/app/shared/constants/common.constants.ts");




let ProductListService = class ProductListService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    getProducts(objFilter = null) {
        return this.apiService.post(_constants_common_constants__WEBPACK_IMPORTED_MODULE_3__["PRODUCT_LIST"].CLN_PATH, objFilter);
    }
};
ProductListService.ctorParameters = () => [
    { type: _base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] }
];
ProductListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductListService);



/***/ }),

/***/ "./src/app/shared/services/user.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _model_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/user.model */ "./src/app/shared/model/user.model.ts");
/* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jwt.service */ "./src/app/shared/services/jwt.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ "./src/app/shared/services/auth.service.ts");






let UserService = class UserService {
    constructor(_jwt, authService) {
        this._jwt = _jwt;
        this.authService = authService;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new _model_user_model__WEBPACK_IMPORTED_MODULE_3__["User"]());
        this.currentUser = this.currentUserSubject
            .asObservable();
        // .distinctUntilChanged();
        this.isAuthenticatedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this.isAuthenticated = this.isAuthenticatedSubject.asObservable();
    }
    initialiseUser() {
        if (this._jwt.getToken) {
            console.log("access token", this._jwt.getToken);
        }
    }
};
UserService.ctorParameters = () => [
    { type: _jwt_service__WEBPACK_IMPORTED_MODULE_4__["JwtService"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    baseUrl: 'http://15.206.134.157:4000'
    // baseUrl: 'http://100.26.226.196:3000'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_5__);






if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/abdurahmant/Downloads/naseemnamath-e-commerce-bf5391075fd2/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map