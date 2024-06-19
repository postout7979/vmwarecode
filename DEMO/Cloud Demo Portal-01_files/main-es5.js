(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<clr-main-container>\n    <app-header></app-header>\n    <router-outlet></router-outlet>\n</clr-main-container>\n<clr-modal [(clrModalOpen)]=\"cmbuService.showAssetImagePopup\" [clrModalSize]=\"'xl'\">\n    <div class=\"modal-body\"> <img src=\"{{cmbuService.assetImageSrc}}\" alt=\"\"></div>\n</clr-modal>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/add-to-playlist/add-to-playlist.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/add-to-playlist/add-to-playlist.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<clr-modal [(clrModalOpen)]=\"addToPlaylistPopup\" class=\"addToPlaylistPopup\" (clrModalOpenChange)=\"changeModalStatus()\">\n    <h3 class=\"modal-title\">Add to Playlist</h3>\n    <div class=\"modal-body\">\n        <label class=\"clr-control-label\">Create new playlist</label>\n        <div>\n            <form (submit)=\"onSubmit()\">\n                <input [(ngModel)]=\"playListName\" name=\"playListName\" type=\"text\" placeholder=\"Enter value here\"\n                    class=\"clr-input\"><textarea [(ngModel)]=\"playListDescription\" name=\"playListDescription\"\n                    class=\"clr-textarea\" placeholder=\"Type description of playlist…\" appSpaceCutter required></textarea>\n                <p *ngIf=\"isError\" class=\"clr-error\">{{errorMsg}}</p>\n                <button class=\"btn btn-primary\" type=\"submit\">Create</button>\n            </form>\n        </div>\n\n        <div class=\"listOfExistingPlaylists\" *ngIf=\"isPlaylistToDisplay\">\n            <label class=\"clr-control-label\">Or Add Demo to Existing Playlists:</label>\n            <div class=\"listOfPlaylists\">\n                <div *ngFor=\"let userPlaylist of userPlaylists\">\n                    <p>{{ userPlaylist.name }}</p>\n                    <button class=\"btn btn-primary\" type=\"button\" (click)=\"addToPlayList(userPlaylist.slug)\"\n                        [disabled]=\"userPlaylist.assets.indexOf(assetToBeAdded) !== -1\">\n                        {{ (userPlaylist.assets.indexOf(assetToBeAdded) !== -1) ? 'Added' : 'Add' }} </button>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</clr-modal>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/admin-playlist/admin-playlist.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/admin-playlist/admin-playlist.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template [(clrIfActive)]=\"cmbuService.playlistTabActive\">\n    <clr-tab-content>\n        <!-- Filter Section -->\n        <app-filter-textbox (keywordEvent)=\"filterUsecasesByKeyword($event)\"></app-filter-textbox>\n        <p *ngIf=\"playlists.length==0 && (keyword != '')\" class=\"filter-msg\">No result found.</p>\n        <!-- Playlist Item  -->\n        <app-playlist-item [playlists]='playlists' [playlistType]='playlistType'></app-playlist-item>\n\n        <!-- Pagination -->\n        <div [ngClass]=\"playlists.length==0 ? 'hidden' : ''\" class=\"pagination\">\n            <div class=\"clr-row\">\n                <app-pagination-count (PageSize)=\"getPlaylistsByPageSize($event)\"></app-pagination-count>\n                <app-pagination-button [totalNoOfPages] = \"totalNoOfPages\" (getProductsByPagination)=\"getPaginationAssets($event)\"></app-pagination-button>\n                <app-pagination-result [paginationResultOutPut]=\"paginationResultOutPut\"></app-pagination-result>\n            </div>\n        </div>\n    </clr-tab-content>\n</ng-template>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/asset-details/asset-details.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/asset-details/asset-details.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-area assetViewPageContainer\">\n        <div class=\"viewerSection\">\n                <div class=\"clr-row\">\n                        <div class=\"clr-col-lg-1 clr-col-md-12 clr-col-12\">\n                        </div>\n                        <div class=\"clr-col-lg-10 clr-col-md-12 clr-col-12\">\n                                <div class=\"viewerContent\">\n                                        <clr-icon shape=\"undo\" class=\"backButton\" size=\"24\" (click)=\"goBack()\">\n                                        </clr-icon>\n                                        <iframe *ngIf=\"howToDemoType == 'link'\" [src]=\"howToDemoLink\"\n                                                frameborder=\"0\"></iframe>\n                                        <div *ngIf=\"howToDemoType == 'description'\" [innerHtml]=\"howToDemo\"></div>\n                                        <div class=\"popularityOfAsset\">\n                                                <clr-icon shape=\"thumbs-up\" class=\"is-success\"\n                                                        [ngClass]=\"(isLike) ? 'is-solid' : ''\"\n                                                        (click)=\"likeAsset(AssetID, $event, assetTitle)\"></clr-icon>\n                                                &nbsp;<span>{{likePercentage}}%</span> &nbsp; &nbsp; <clr-icon\n                                                        shape=\"thumbs-down\" [ngClass]=\"(isDislike) ? 'is-solid' : ''\"\n                                                        (click)=\"disLikeAssets(AssetID, $event, assetTitle)\"></clr-icon>\n                                                &nbsp;<span>{{ dislikePercentage }}%</span> &nbsp; &nbsp; <clr-icon\n                                                        shape=\"plus-circle\" (click)=\"addToPlayList(AssetID)\"></clr-icon>\n                                                &nbsp; &nbsp; <clr-icon shape=\"heart\"\n                                                        (click)=\"addToFavourite(AssetID, $event)\"\n                                                        [ngClass]=\"(isFavourite) ? 'is-solid is-faved' : ''\"></clr-icon>\n                                        </div>\n                                        <div class=\"clr-row\">\n                                                <div class=\"clr-col-lg-12 clr-col-md-12 clr-col-12\">\n                                                        <h1> {{assetTitle}} </h1>\n                                                        <p [innerHtml]=\"assetDescription\"> </p>\n                                                </div>\n                                        </div>\n                                </div>\n                        </div>\n                        <div class=\"clr-col-lg-1 clr-col-md-12 clr-col-12\">\n                        </div>\n                </div>\n        </div>\n</div>\n<app-add-to-playlist [addToPlaylistPopup]=\"isAddToPlayList\" [assetToBeAdded]=\"assetToBeAdded\"\n        (modalStatus)=\"isAddToPlayList = $event\"></app-add-to-playlist>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/asset-item-box/asset-item-box.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/asset-item-box/asset-item-box.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"clr-row\" myMatchHeight=\"card-block\">\n    <div *ngFor='let productAsset of productAssets; let i = index' class=\"clr-col-lg-4 clr-col-md-6 clr-col-12\">\n\n        <div class=\"card new-card assets-cards\">\n            <div class=\"\">\n                <div class=\"card-header\">\n                    <clr-icon attr.shape=\"{{ productAsset.assetType.iconShape }}\" class=\"is-info\" size=\"36\">\n                    </clr-icon>\n                    {{ productAsset.assetType.name }}\n                    <span *ngIf=\"productAsset.hasRelatedAssets\"\n                        class=\"related-assets {{currentAssetsId == productAsset.assetId && showRelatedAssets ? 'active' : ''}}\"\n                        (click)=\"openRelatedAssets(i, productAsset.assetId)\">Related\n                        Assets\n                        <!-- <img src=\"./assets/images/angle.png\" onmouseover=\"this.src='./assets/images/angle.png'\"\n                            onmouseout=\"this.src='./assets/images/angle.png'\"> -->\n                        <p class=\"without-active relatedIcon\"> <span>></span></p>\n                        <p class=\"with-active relatedIcon\"> <span>X</span> </p>\n                    </span>\n\n\n\n                </div>\n                <div class=\"card-img\"\n                    (click)=\"cmbuService.showAssetImagePopup = true;cmbuService.assetImageSrc = productAsset.thumbnail ? serverAppBaseUrl + productAsset.thumbnail : './assets/images/asset-thumb-img.jpg'\">\n                    <img [src]=\"productAsset.thumbnail ? serverAppBaseUrl + productAsset.thumbnail : './assets/images/asset-thumb-img.jpg'\"\n                        alt=\"\">\n                </div>\n                <div class=\"card-block\">\n                    <div class=\"card-title\">\n                        {{ productAsset.assetTitle}}\n                    </div>\n                    <div class=\"card-text\">\n\n                        <div *ngIf=\"productAsset.assetDangerLabel\" class=\"alert alert-danger alert-sm\">\n                            <div class=\"alert-items\">\n                                <div class=\"alert-item static\" role=\"alert\">\n                                    <div class=\"alert-icon-wrapper\">\n                                        <clr-icon class=\"alert-icon\" shape=\"exclamation-circle\"></clr-icon>\n                                    </div>\n                                    <span class=\"alert-text\">\n                                        {{ productAsset.assetDangerLabel }}\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div *ngIf=\"productAsset.assetWarningLabel\" class=\"alert alert-warning alert-sm\">\n                            <div class=\"alert-items\">\n                                <div class=\"alert-item static\" role=\"alert\">\n                                    <div class=\"alert-icon-wrapper\">\n                                        <clr-icon class=\"alert-icon\" shape=\"exclamation-circle\"></clr-icon>\n                                    </div>\n                                    <span class=\"alert-text\">\n                                        {{ productAsset.assetWarningLabel }}\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div *ngIf=\"productAsset.assetInfoLabel\" class=\"alert alert-info alert-sm\">\n                            <div class=\"alert-items\">\n                                <div class=\"alert-item static\" role=\"alert\">\n                                    <div class=\"alert-icon-wrapper\">\n                                        <clr-icon class=\"alert-icon\" shape=\"info-circle\"></clr-icon>\n                                    </div>\n                                    <span class=\"alert-text\">\n                                        {{ productAsset.assetInfoLabel }}\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n                        <span class=\"assetDescriptionBox\" [innerHtml]=\"productAsset.assetDescription\">\n                            <!-- {{ productAsset.assetDescription.length > 350 ? \"...\" : \"\"}} -->\n                        </span>\n                        <button [ngClass]=\"[productAsset.assetDescription.length < 225 ? 'hideBtn' : '']\"\n                            class=\"showBtn\" (click)=\"hide($event);\">\n                            {{buttonText}}</button>\n                    </div>\n                </div>\n                <div class=\"card-footer\">\n                    <button *ngIf=\"productAsset.howToDemo || productAsset.howToDemoLink\"\n                        (click)=\"viewAsset(productAsset)\" class=\"btn btn-outline\">How to Demo</button>\n                    <button *ngIf=\"productAsset.demoLink\" (click)=\"viewDemo(productAsset)\"\n                        class=\"btn btn-outline\">Demo</button>\n                    <button class=\"btn btn-link\">\n                        <clr-icon [ngClass]=\"(productAsset.useractions.isFavourite) ? 'is-solid is-faved' : '' \"\n                            shape=\"heart\" size=\"24\" (click)=\"addToFavourite(productAsset.assetId, $event)\">\n                        </clr-icon>\n                    </button>\n                    <button class=\"btn btn-link\">\n                        <clr-icon shape=\"plus-circle\" size=\"24\" (click)=\"addToPlayList(productAsset.assetId)\">\n                        </clr-icon>\n                    </button>\n                    <span class=\"like-asset\">\n                        <clr-icon shape=\"thumbs-up\" class=\"is-success\" size=\"24\"\n                            (click)=\"likeAsset(productAsset.assetId)\">\n                        </clr-icon>\n                        {{ productAsset.useractions.likePercentage | number:'1.0-0' }} %\n                    </span>\n                </div>\n            </div>\n\n            <div *ngIf=\"currentAssetsId == productAsset.assetId\"\n                class=\"related-assets-container {{ showRelatedAssets ? 'full-width' : '' }}\"\n                id=\"related-assets-container{{i}}\">\n                <div class=\"inner-container eq-box\">\n                    <div class=\"inner-container-pad\">\n                        <div *ngFor='let relatedAsset of relatedAssets;' class=\"related-posts\">\n                            <div class=\"thumb-img\"><img\n                                    [src]=\"relatedAsset.thumbnail ? serverAppBaseUrl + relatedAsset.thumbnail : './assets/images/related-asset-thumb.jpg'\"\n                                    alt=\"\"></div>\n                            <div class=\"related-posts-desc-right\">\n                                <div class=\"related-asset-title\">\n                                    <p>{{relatedAsset.title | slice : 0 :38 }}\n                                        {{ relatedAsset.title.length > 38 ? \"...\" : \"\"}}\n                                    </p>\n                                </div>\n                                <div class=\"related-asset-desc\">\n                                    <div class=\"card-text\">\n\n                                        <div>\n                                            <div class=\"container\" [class.show]=\"relatedAsset.visible\">\n                                                <p>{{relatedAsset.description}}</p>\n                                            </div>\n\n                                            <button class=\"showBtn\" (click)=\" close($event);\">\n                                                {{text}}</button>\n                                            <div class=\"button-group\"><button\n                                                    *ngIf=\"relatedAsset.howToDemo || relatedAsset.howToDemoLink\"\n                                                    (click)=\"viewAsset(relatedAsset)\" class=\"btn btn-sm\">How to\n                                                    Demo</button>\n                                                <button *ngIf=\"relatedAsset.demoLink\" (click)=\"viewDemo(relatedAsset)\"\n                                                    class=\"btn btn-sm\">Demo</button>\n                                            </div>\n                                        </div>\n\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n\n<app-add-to-playlist [addToPlaylistPopup]=\"isAddToPlayList\" [assetToBeAdded]=\"assetToBeAdded\"\n    (modalStatus)=\"isAddToPlayList = $event\"></app-add-to-playlist>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/asset-view/asset-view.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/asset-view/asset-view.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>asset-view works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/breadcrumb/breadcrumb.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/breadcrumb/breadcrumb.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n    <div class=\"clr-row\">\n        <div class=\"clr-col-lg-12 clr-col-md-12 clr-col-12\">\n            {{ urlSegments[1].toUpperCase() }} | {{ urlSegments[2].toUpperCase() }} | <span>{{ replaceHyphenFromUrl(urlSegments[3].toUpperCase()) }}</span>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/create-playlist/create-playlist.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/create-playlist/create-playlist.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<clr-modal [(clrModalOpen)]=\"createPlaylistPopup\" class=\"createPlaylistPopup\" (clrModalOpenChange)=\"changeModalStatus()\">\n    <h3 class=\"modal-title\">{{ playListID ? 'Edit Playlist' : 'Create Playlist' }} </h3>\n    <div class=\"modal-body\">\n        <form (submit)=\"onSubmit()\">\n            <input [(ngModel)]=\"playListName\" name=\"playListName\" type=\"text\" appSpaceCutter placeholder=\"Type name of playlist…\" class=\"clr-input\" value=\"playListName\" required maxlength=\"100\">\n            <textarea [(ngModel)]=\"playListDescription\" name=\"playListDescription\" class=\"clr-textarea\" placeholder=\"Type description of playlist…\" appSpaceCutter required></textarea>\n            <p *ngIf=\"responseMsg\" class=\"clr-error\">{{responseMsg}}</p>\n            <button class=\"btn btn-primary\" type=\"submit\">{{ playListID ? 'Update' : 'Create' }} </button>\n        </form>\n    </div>\n</clr-modal>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/discover-slider/discover-slider.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/discover-slider/discover-slider.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<owl-carousel-o [options]=\"customOptions\" myMatchHeight=\"card-block\">\n    <ng-template carouselSlide *ngFor=\"let asset of assetDetails; let i = index\" class=\"abcd\">\n\n        <!-- Asset block -->\n        <div class=\"clr-col-12\">\n            <div class=\"card new-card assets-cards\">\n                <div class=\"\">\n                    <div class=\" card-header\">\n                        <clr-icon attr.shape=\"{{ asset.assetType.iconShape }}\" class=\"is-info\" size=\"36\"></clr-icon>\n                        {{asset.assetType.name}}\n                        <span *ngIf=\"asset.hasRelatedAssets\"\n                            class=\"related-assets {{currentAssetsId == asset.assetId && showRelatedAssets ? 'active' : ''}}\"\n                            (click)=\"openRelatedAssets(i, asset.assetId, $event)\">\n                            <!--Related\n                            Assets-->\n                            <!-- <img src=\"./assets/images/angle.png\" onmouseover=\"this.src='./assets/images/angle.png'\"\n                        onmouseout=\"this.src='./assets/images/angle.png'\"> -->\n                            <p class=\"without-active relatedIcon\"> <span>></span></p>\n                            <p class=\"with-active relatedIcon\"> <span>X</span> </p>\n                        </span>\n                    </div>\n                    <div class=\"card-img\">\n                        <img [src]=\"asset.thumbnail ? serverAppBaseUrl + asset.thumbnail : './assets/images/asset-thumb-img.jpg'\"\n                            alt=\"\"\n                            (click)=\"cmbuService.showAssetImagePopup = true;cmbuService.assetImageSrc = asset.thumbnail ? serverAppBaseUrl + asset.thumbnail : './assets/images/asset-thumb-img.jpg'\">\n                    </div>\n                    <div class=\"card-block\">\n                        <div class=\"card-title\">\n                            {{asset.assetTitle}}\n                        </div>\n                        <div class=\"card-text\">\n\n                            <div *ngIf=\"asset.assetDangerLabel\" class=\"alert alert-danger alert-sm\">\n                                <div class=\"alert-items\">\n                                    <div class=\"alert-item static\" role=\"alert\">\n                                        <div class=\"alert-icon-wrapper\">\n                                            <clr-icon class=\"alert-icon\" shape=\"exclamation-circle\"></clr-icon>\n                                        </div>\n                                        <span class=\"alert-text\">\n                                            {{ asset.assetDangerLabel }}\n                                        </span>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div *ngIf=\"asset.assetWarningLabel\" class=\"alert alert-warning alert-sm\">\n                                <div class=\"alert-items\">\n                                    <div class=\"alert-item static\" role=\"alert\">\n                                        <div class=\"alert-icon-wrapper\">\n                                            <clr-icon class=\"alert-icon\" shape=\"exclamation-circle\"></clr-icon>\n                                        </div>\n                                        <span class=\"alert-text\">\n                                            {{ asset.assetWarningLabel }}\n                                        </span>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div *ngIf=\"asset.assetInfoLabel\" class=\"alert alert-info alert-sm\">\n                                <div class=\"alert-items\">\n                                    <div class=\"alert-item static\" role=\"alert\">\n                                        <div class=\"alert-icon-wrapper\">\n                                            <clr-icon class=\"alert-icon\" shape=\"info-circle\"></clr-icon>\n                                        </div>\n                                        <span class=\"alert-text\">\n                                            {{ asset.assetInfoLabel }}\n                                        </span>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <span class=\"assetDescriptionBox\" [innerHtml]=\"asset.assetDescription\">\n\n                            </span>\n                            <button [ngClass]=\"[asset.assetDescription.length < 225 ? 'hideBtn' : '']\" class=\"showBtn\"\n                                (click)=\"hide($event);\">\n                                {{buttonText}}</button>\n                        </div>\n                    </div>\n                    <div class=\"card-footer\">\n                        <button *ngIf=\"asset.howToDemo || asset.howToDemoLink\" (click)=\"viewAsset(asset)\"\n                            class=\"btn btn-outline\">How to Demo</button>\n                        <button *ngIf=\"asset.demoLink\" (click)=\"viewDemo(asset)\" class=\"btn btn-outline\">Demo</button>\n                        <button class=\"btn btn-link\">\n                            <clr-icon shape=\"heart\"\n                                [ngClass]=\"(asset.useractions.isFavourite) ? 'is-solid is-faved' : '' \"\n                                (click)=\"addToFavourite(asset.assetId, $event)\" size=\"24\"></clr-icon>\n                        </button>\n                        <button class=\"btn btn-link\">\n                            <clr-icon shape=\"plus-circle\" size=\"24\" (click)=\"addToPlayList(asset.assetId)\"></clr-icon>\n                        </button>\n                        <span class=\"like-asset\">\n                            <clr-icon shape=\"thumbs-up\" class=\"is-success\" size=\"24\" (click)=\"likeAsset(asset.assetId)\">\n                            </clr-icon>\n                            {{asset.useractions.likePercentage | number:'1.0-0' }} %\n                        </span>\n                    </div>\n                </div>\n                <!-- related assets -->\n                <div *ngIf=\"currentAssetsId == asset.assetId\"\n                    class=\"related-assets-container {{ showRelatedAssets ? 'full-width' : '' }}\"\n                    id=\"related-assets-container{{i}}\">\n                    <div class=\"inner-container eq-box\">\n                        <div class=\"inner-container-pad\">\n                            <div *ngFor='let relatedAsset of relatedAssets;' class=\"related-posts\">\n                                <div class=\"thumb-img\"><img\n                                        [src]=\"relatedAsset.thumbnail ? serverAppBaseUrl + relatedAsset.thumbnail : './assets/images/related-asset-thumb.jpg'\"\n                                        alt=\"\"></div>\n                                <div class=\"related-posts-desc-right\">\n                                    <div class=\"related-asset-title\">\n                                        <p>{{relatedAsset.title | slice : 0 :70 }}\n                                            {{ relatedAsset.title.length > 70 ? \"...\" : \"\"}}\n                                        </p>\n                                    </div>\n                                    <div class=\"related-asset-desc\">\n                                        <div class=\"card-text\">\n                                            <div>\n                                                <div class=\"container\" [class.show]=\"relatedAsset.visible\">\n                                                    <p>{{relatedAsset.description}}</p>\n                                                </div>\n\n                                                <button class=\"showBtn\" (click)=\" close($event);\">\n                                                    {{text}}</button>\n\n                                                <div class=\"button-group\">\n                                                    <button *ngIf=\"relatedAsset.howToDemo || relatedAsset.howToDemoLink\"\n                                                        (click)=\"viewAsset(relatedAsset)\" class=\"btn btn-sm\">How to\n                                                        Demo</button>\n                                                    <button *ngIf=\"relatedAsset.demoLink\"\n                                                        (click)=\"viewDemo(relatedAsset)\"\n                                                        class=\"btn btn-sm\">Demo</button>\n                                                </div>\n\n                                                <!-- {{ relatedAsset.visible ? 'Show Less': 'Show More' }} -->\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </ng-template>\n</owl-carousel-o>\n<app-add-to-playlist [addToPlaylistPopup]=\"isAddToPlayList\" [assetToBeAdded]=\"assetToBeAdded\"\n    (modalStatus)=\"isAddToPlayList = $event\"></app-add-to-playlist>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/essential-slider/essential-slider.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/essential-slider/essential-slider.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<owl-carousel-o [options]=\"customOptions\" myMatchHeight=\"eqboxElem\">\n\n    <ng-template carouselSlide *ngFor=\"let useCaseAsset of useCaseAssets; let i = index\">\n\n        <div class=\"clr-row essentialSliderRow\">\n            <!-- Asset block -->\n            <div class=\"clr-col-lg-6 clr-col-md-6 clr-col-12\">\n                <div class=\"libraryCard blueBg\">\n                    <div class=\"clr-col-lg-12 clr-col-md-12 clr-col-12\">\n                        <h2>{{useCaseAsset.name}}</h2>\n                        <div class=\"sm-device-blue-bg\">\n                            <div class=\"\">\n                                <clr-icon shape=\"display\"></clr-icon>\n                            </div>\n                        </div>\n                        <p class=\"eqboxElem\">\n                            {{useCaseAsset.description | slice : 0 : 190 }}\n                            {{ useCaseAsset.description.length > 190 ? \"...\" : \"\"}}\n                        </p>\n                        <button class=\"btn btn-outline\" (click)=\"viewUseCase(useCaseAsset)\">View</button>\n                        <!-- <button class=\"btn btn-outline\" (click) [routerLink]=\"['library', 'usecases', useCaseAsset.slug]\">View</button> -->\n                    </div>\n                    <div class=\"libraryStrip\">\n                        <clr-icon shape=\"display\"></clr-icon>\n                    </div>\n                </div>\n            </div>\n\n            <!-- Asset block -->\n            <div class=\"clr-col-lg-6 clr-col-md-6 clr-col-12\">\n                <div class=\"card assets-cards new-card\">\n                    <div class=\"eq-box\">\n                        <div class=\"card-header\">\n                            <clr-icon shape=\"application\" class=\"is-info\" size=\"36\"></clr-icon>\n                            {{useCaseAsset.assets[0].assetType.name}}\n                            <span *ngIf=\"useCaseAsset.assets[0].hasRelatedAssets\"\n                                class=\"related-assets {{currentAssetsId == useCaseAsset.assets[0].assetId && showRelatedAssets ? 'active' : ''}}\"\n                                (click)=\"openRelatedAssets(i, useCaseAsset.assets[0].assetId)\">Related\n                                Assets\n                                <!-- <img src=\"./assets/images/angle.png\" onmouseover=\"this.src='./assets/images/angle.png'\"\n                            onmouseout=\"this.src='./assets/images/angle.png'\"> -->\n                                <p class=\"without-active relatedIcon\"> <span>></span></p>\n                                <p class=\"with-active relatedIcon\"> <span>X</span> </p>\n                            </span>\n                        </div>\n                        <div class=\"card-img\"\n                            (click)=\"cmbuService.showAssetImagePopup = true;cmbuService.assetImageSrc = useCaseAsset.thumbnail ? serverAppBaseUrl + useCaseAsset.thumbnail : './assets/images/asset-thumb-img.jpg'\">\n                            <img [src]=\"useCaseAsset.thumbnail ? serverAppBaseUrl + useCaseAsset.thumbnail : './assets/images/asset-thumb-img.jpg'\"\n                                alt=\"\">\n                        </div>\n                        <div class=\"card-block eqboxElem\">\n                            <div class=\"card-title\">\n                                {{useCaseAsset.assets[0].assetTitle}}\n                            </div>\n                            <div class=\"card-text\">\n\n                                <div *ngIf=\"useCaseAsset.assets[0].assetDangerLabel\"\n                                    class=\"alert alert-danger alert-sm\">\n                                    <div class=\"alert-items\">\n                                        <div class=\"alert-item static\" role=\"alert\">\n                                            <div class=\"alert-icon-wrapper\">\n                                                <clr-icon class=\"alert-icon\" shape=\"exclamation-circle\"></clr-icon>\n                                            </div>\n                                            <span class=\"alert-text\">\n                                                {{ useCaseAsset.assets[0].assetDangerLabel }}\n                                            </span>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div *ngIf=\"useCaseAsset.assets[0].assetWarningLabel\"\n                                    class=\"alert alert-warning alert-sm\">\n                                    <div class=\"alert-items\">\n                                        <div class=\"alert-item static\" role=\"alert\">\n                                            <div class=\"alert-icon-wrapper\">\n                                                <clr-icon class=\"alert-icon\" shape=\"exclamation-circle\"></clr-icon>\n                                            </div>\n                                            <span class=\"alert-text\">\n                                                {{ useCaseAsset.assets[0].assetWarningLabel }}\n                                            </span>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div *ngIf=\"useCaseAsset.assets[0].assetInfoLabel\" class=\"alert alert-info alert-sm\">\n                                    <div class=\"alert-items\">\n                                        <div class=\"alert-item static\" role=\"alert\">\n                                            <div class=\"alert-icon-wrapper\">\n                                                <clr-icon class=\"alert-icon\" shape=\"info-circle\"></clr-icon>\n                                            </div>\n                                            <span class=\"alert-text\">\n                                                {{ useCaseAsset.assets[0].assetInfoLabel }}\n                                            </span>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <span class=\"assetDescriptionBox\">\n                                    {{useCaseAsset.assets[0].assetDescription}}\n                                </span>\n\n                                <button class=\"showBtn {{hideShowMoreBtn(useCaseAssets.length, useCaseAsset)}}\"\n                                    (click)=\"hide($event);\">\n                                    {{buttonText}}</button>\n                            </div>\n                        </div>\n                        <div class=\"card-footer\">\n\n                            <button *ngIf=\"useCaseAsset.assets[0].howToDemo || useCaseAsset.assets[0].howToDemoLink\"\n                                (click)=\"viewAsset(useCaseAsset.assets[0])\" class=\"btn btn-outline\">How to Demo</button>\n                            <button *ngIf=\"useCaseAsset.assets[0].demoLink\" (click)=\"viewDemo(useCaseAsset.assets[0])\"\n                                class=\"btn btn-outline\">Demo</button>\n\n                            <button class=\"btn btn-link\">\n                                <clr-icon shape=\"heart\"\n                                    [ngClass]=\"(useCaseAsset.assets[0].useractions.isFavourite) ? 'is-solid is-faved' : '' \"\n                                    size=\"24\" (click)=\"addToFavourite(useCaseAsset.assets[0].assetId, $event)\">\n                                </clr-icon>\n                            </button>\n                            <button class=\"btn btn-link\">\n                                <clr-icon shape=\"plus-circle\" size=\"24\"\n                                    (click)=\"addToPlayList(useCaseAsset.assets[0].assetId)\"></clr-icon>\n                            </button>\n                            <span class=\"like-asset\">\n                                <clr-icon shape=\"thumbs-up\" class=\"is-success\" size=\"24\"\n                                    (click)=\"likeAsset(useCaseAsset.assets[0].assetId)\"></clr-icon>\n                                {{useCaseAsset.assets[0].useractions.likePercentage | number:'1.0-0' }}%\n                            </span>\n                        </div>\n                    </div>\n                    <!-- Related assets -->\n                    <div *ngIf=\"currentAssetsId == useCaseAsset.assets[0].assetId\"\n                        class=\"related-assets-container {{ showRelatedAssets ? 'full-width' : '' }}\"\n                        id=\"related-assets-container{{i}}\">\n                        <div class=\"inner-container eq-box\">\n                            <div class=\"inner-container-pad\">\n                                <div *ngFor='let relatedAsset of relatedAssets;' class=\"related-posts\">\n                                    <div class=\"thumb-img\"><img\n                                            [src]=\"relatedAsset.thumbnail ? serverAppBaseUrl + relatedAsset.thumbnail : './assets/images/related-asset-thumb.jpg'\"\n                                            alt=\"\"></div>\n                                    <div class=\"related-posts-desc-right\">\n                                        <div class=\"related-asset-title\">\n                                            <p>{{relatedAsset.title | slice : 0 :70 }}\n                                                {{ relatedAsset.title.length > 70 ? \"...\" : \"\"}}\n                                            </p>\n                                        </div>\n                                        <div class=\"related-asset-desc\">\n                                            <div class=\"card-text\">\n                                                <div>\n                                                    <div class=\"container\" [class.show]=\"relatedAsset.visible\">\n                                                        <p>{{relatedAsset.description}}</p>\n                                                    </div>\n\n                                                    <button class=\"showBtn\" (click)=\" close($event);\">\n                                                        {{text}}</button>\n                                                    <div class=\"button-group\">\n                                                        <button\n                                                            *ngIf=\"relatedAsset.howToDemo || relatedAsset.howToDemoLink\"\n                                                            (click)=\"viewAsset(relatedAsset)\" class=\"btn btn-sm\">How to\n                                                            Demo</button>\n                                                        <button *ngIf=\"relatedAsset.demoLink\"\n                                                            (click)=\"viewDemo(relatedAsset)\"\n                                                            class=\"btn btn-sm\">Demo</button>\n                                                    </div>\n                                                    <!-- {{ relatedAsset.visible ? 'Show Less': 'Show More' }} -->\n                                                </div>\n\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </ng-template>\n\n</owl-carousel-o>\n<app-add-to-playlist [addToPlaylistPopup]=\"isAddToPlayList\" [assetToBeAdded]=\"assetToBeAdded\"\n    (modalStatus)=\"isAddToPlayList = $event\"></app-add-to-playlist>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/faq/faq.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/faq/faq.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"content-area faqInfo\">\n    <div class=\"clr-row\" *ngFor=\"let faqDetail of faqDetails\" [attr.id]=\"getElementID(faqDetail.faq_category)\">\n        <div class=\"clr-col-lg-8 clr-col-md-12 clr-col-12\">\n            <h3> {{ faqDetail.faq_category }} </h3>\n            <clr-accordion>\n                <clr-accordion-panel *ngFor=\"let faq of faqDetail.faqs\">\n                    <clr-accordion-title>{{ faq.question }}</clr-accordion-title>\n                    <clr-accordion-content *clrIfExpanded>\n                            {{ faq.answer }}\n                    </clr-accordion-content>\n                </clr-accordion-panel>\n            </clr-accordion>\n        </div>\n    </div>\n\n    <app-footer></app-footer>\n</div>\n\n<!-- Side Navigation -->\n<nav class=\"sidenav\" [clr-nav-level]=\"2\">\n    <section class=\"sidenav-content\">\n        <section class=\"nav-group collapsible\">\n            <input id=\"tabexample1\" type=\"checkbox\">\n            <label for=\"tabexample1\">FAQ</label>\n            <ul class=\"nav-list\">\n                <li *ngFor=\"let faqDetail of faqDetails\"><a (click)=\"scrollToSection(getElementID(faqDetail.faq_category))\" class=\"nav-link\"> {{faqDetail.faq_category}} </a></li>\n            </ul>\n        </section>\n    </section>\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/favorites/favorites.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/favorites/favorites.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \n<div class=\"pageTitle\">\n        <h1>Favorites</h1>\n</div>\n<!-- Filter Section -->\n<app-filter-textbox (keywordEvent)=\"filterByKeyword($event)\"></app-filter-textbox>\n<p *ngIf=\"assetsList.length==0 && (keyword != '')\" class=\"filter-msg\">No result found.</p>\n<!-- Assets  -->\n<app-asset-item-box [productAssets] = 'assetsList' (getFavoriteAssets)=\"getFavoriteAssets()\"></app-asset-item-box>   \n<!-- Pagination -->\n<div [ngClass]=\"assetsList.length==0 ? 'hidden' : ''\" class=\"pagination\">\n        <div class=\"clr-row\">\n                <app-pagination-count (PageSize)=\"getAssetsByPageSize($event)\"></app-pagination-count>\n                <app-pagination-button [totalNoOfPages] = \"totalNoOfPages\" (getProductsByPagination)=\"getPaginationAssets($event)\"></app-pagination-button>\n                <app-pagination-result [paginationResultOutPut]=\"paginationResultOutPut\"></app-pagination-result>\n        </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/feedback/feedback.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/feedback/feedback.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-container\">\n    <div class=\"content-area\" style=\"background:#fff;padding:0;\">\n        <div class=\"form-bg\">\n            <div class=\"clr-row\">\n                <div class=\"clr-col-lg-2 clr-col-md-12 clr-col-12\"></div>\n                <div class=\"clr-col-lg-8 clr-col-md-12 clr-col-12\">\n                    <h3>Feedback</h3>\n                    <p>\n                        Please let us know if there's something we can do to improve this portal by using the form\n                        below.\n                    </p>\n                    <p>\n                        If you have a technical issue with a product or the lab, please submit a <a\n                            href=\"https://help.vmware.com/create-ticket/134fca76-0819-4c43-afaa-4779e4b19944\"\n                            target=_blank>HelpNow ticket</a> with \"CMBU Field Demo\" in the description.\n\n                    </p>\n                    <form #f=\"ngForm\" (submit)=\"onSubmit()\" class=\"clr-form\">\n                        <ng-container *ngFor=\"let formField of formFields;\" [ngSwitch]=\"formField.inputType\">\n                            <ng-container *ngSwitchCase=\"'radio'\">\n                                <clr-radio-container>\n                                    <label>{{formField.label}} {{formField.isRequired==1 ? '*': ''}}</label>\n                                    <clr-radio-wrapper *ngFor=\"let option of formField.options\">\n                                        <input type=\"radio\" [(ngModel)]=\"formValues[formField.id]['option_id']\"\n                                            name=\"{{formField.id}}\" clrRadio value=\"{{option.id}}\"\n                                            [required]=\"formField.isRequired==1\" />\n                                        <label>{{option.option}}</label>\n                                    </clr-radio-wrapper>\n                                </clr-radio-container>\n                            </ng-container>\n                            <ng-container *ngSwitchCase=\"'checkbox'\">\n                                <clr-checkbox-container>\n                                    <label>{{formField.label}} {{formField.isRequired==1 ? '*': ''}}</label>\n                                    <clr-checkbox-wrapper *ngFor=\"let option of formField.options\">\n                                        <input type=\"checkbox\"\n                                            [(ngModel)]=\"formValues[formField.id]['option_ids'][option.id]\"\n                                            name=\"{{formField.id}}\" clrCheckbox value=\"{{option.id}}\"\n                                            [required]=\"formField.isRequired==1\">\n                                        <label>{{option.option}}</label>\n                                    </clr-checkbox-wrapper>\n                                </clr-checkbox-container>\n                            </ng-container>\n                            <ng-container *ngSwitchCase=\"'textarea'\">\n                                <div class=\"clr-form-control\">\n                                    <label for=\"vertical-textarea-basic\" class=\"clr-control-label\">{{formField.label}}\n                                        {{formField.isRequired==1 ? '*': ''}}</label>\n                                    <div class=\"clr-control-container\">\n                                        <div class=\"clr-textarea-wrapper\">\n                                            <textarea [(ngModel)]=\"formValues[formField.id]['value']\"\n                                                name=\"{{formField.id}}\" placeholder=\"Input suggestions here\"\n                                                class=\"clr-textarea\" pattern=\"^(?!\\s*$).+\"\n                                                [required]=\"formField.isRequired==1\"></textarea>\n                                            <clr-icon class=\"clr-validate-icon\" shape=\"exclamation-circle\"></clr-icon>\n                                        </div>\n                                    </div>\n                                </div>\n                            </ng-container>\n                        </ng-container>\n                        <button class=\"btn btn-primary\" type=\"submit\"\n                            [disabled]=\"f.form.invalid || submitted\">Submit</button>\n                        <div *ngIf=\"isFeedbackResponse\"\n                            [ngClass]=\"(!isError)? 'submissionError' : 'submissionSuccessfull'\">{{ feedbackResponse }}\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"contactInfo\">\n            <div class=\"clr-row\">\n                <div class=\"clr-col-lg-2 clr-col-md-12 clr-col-12\"></div>\n                <div class=\"clr-col-lg-2 clr-col-md-3 clr-col-6\">\n                    <label>Dave Overbeek</label>\n                    <p>Director, Technical Marketing (Ops)</p>\n                    <a href=\"mailto:doverbeek@vmware.com?Subject=Field%20Demo%20Feedback\">doverbeek@vmware.com</a>\n                </div>\n                <div class=\"clr-col-lg-2 clr-col-md-3 clr-col-6\">\n                    <label>Chris McClanahan</label>\n                    <p>Group Manager, Technical Marketing (Auto)</p>\n                    <a href=\"mailto:mcclanahanc@vmware.com?Subject=Field%20Demo%20Feedback\">mcclanahanc@vmware.com</a>\n                </div>\n            </div>\n        </div>\n        <div class=\"content-container\" style=\"padding: 0 1rem;\">\n            <app-footer></app-footer>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/filter-textbox/filter-textbox.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/filter-textbox/filter-textbox.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"filterSection\">\n        <div class=\"clr-row\">\n            <div>\n                <form class=\"clr-form\">\n                    <div class=\" clr-form-control\">\n                        <div class=\"clr-control-container\">\n                            <div class=\"clr-input-wrapper\">\n                                <clr-icon shape=\"search\"></clr-icon>\n                                <input class=\"clr-input\" placeholder=\"Filter\" name=\"input\" (keyup)=\"filterAssetsByKeyword($event)\" [(ngModel)]=\"assetKeyword\"/>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"\" [ngClass]=\"(isInnerPage) ? 'withSidebar' : '' \"> <!--class = \"withSidebar\" -->\n    <div class=\"clr-row\">\n        <div class=\"clr-col-lg-3 clr-col-md-12 clr-col-12\">\n            <h1>CMBU Field Demo Portal</h1>\n            <p>The one stop shop for all demos to assist with Cloud Management sales and training.</p>\n            <p>Make cloud your business!</p>\n        </div>\n        <div class=\"clr-col-lg-1 clr-col-0\"></div>\n        <div class=\"clr-col-lg-2 clr-col-md-3 clr-col-12\">\n            <h2>Aria</h2>\n            <ul>\n                <li><a href=\"https://confluence.eng.vmware.com/pages/viewpage.action?spaceKey=AriaGTM&title=Aria+Operations+for+Networks\" target=\"_blank\">Aria Operations for Networks</a></li>\n                <li><a href=\"https://vault.vmware.com/group/vault-main-library/operations\" target=\"_blank\">Aria Operations</a></li>\n                <li><a href=\"https://vault.vmware.com/group/vault-main-library/vrealize-operations-cloud\" target=\"_blank\">Aria Operations (Cloud)</a></li>\n                <li><a href=\"https://confluence.eng.vmware.com/display/AriaGTM/Aria+Operations+for+Logs\" target=\"_blank\">Aria Operations for Logs</a></li>\n                <li><a href=\"https://vault.vmware.com/group/vault-main-library/log-intelligence\" target=\"_blank\">Aria Log Cloud</a></li>\n                <li><a href=\"https://confluence.eng.vmware.com/display/AriaGTM/Aria+Automation\" target=\"_blank\">Aria Automation</a></li>\n                <li><a href=\"https://confluence.eng.vmware.com/display/AriaGTM/Aria+Automation+Config\" target=\"_blank\">Aria Automation Config</a></li>\n            </ul>\n        </div>\n        <div class=\"clr-col-lg-2 clr-col-md-3 clr-col-12\">\n            <h2>Tanzu Intelligence Services</h2>\n            <ul>\n                <li><a href=\"https://confluence.eng.vmware.com/display/AriaGTM/Tanzu+CloudHealth\" target=\"_blank\">Tanzu CloudHealth</a></li>\n                <li><a href=\"https://confluence.eng.vmware.com/display/AriaGTM/Tanzu+Hub\" target=\"_blank\">Tanzu Hub</a></li>\n                <li><a href=\"https://confluence.eng.vmware.com/display/AriaGTM/Tanzu+Guardrails\" target=\"_blank\">Tanzu Gaurdrails</a></li>\n                <li><a href=\"https://confluence.eng.vmware.com/display/AriaGTM/Tanzu+Transformer\" target=\"_blank\">Tanzu Transformer</a></li>\n                <li><a href=\"https://confluence.eng.vmware.com/display/AriaGTM/Tanzu+Insights\" target=\"_blank\">Tanzu Insights</a></li>\n            </ul>\n        </div>\n        <div class=\"clr-col-lg-2 clr-col-md-3 clr-col-12\">\n            <h2>Suites</h2>\n            <ul>\n                <li><a href=\"https://confluence.eng.vmware.com/display/AriaGTM/VMware+Aria\" target=\"_blank\">VMware Aria</a></li>\n                <li><a href=\"https://confluence.eng.vmware.com/display/AriaGTM/Aria+Universal+Suite\" target=\"_blank\">Aria Universal Suite</a></li>\n                <li><a href=\"https://confluence.eng.vmware.com/display/AriaGTM/Aria+Suite\" target=\"_blank\">Aria Suite</a></li>\n                <li><a href=\"https://vault.vmware.com/group/vault-main-library/vcloud-suite\" target=\"_blank\">vCloud Suite</a></li>\n                <li><a href=\"https://confluence.eng.vmware.com/display/AriaGTM/Aria+Suite+Lifecycle\" target=\"_blank\">Aria Suite Lifecycle</a></li>\n            </ul>\n        </div>\n        <div class=\"clr-col-lg-2 clr-col-md-3 clr-col-12\">\n            <h2>Resources</h2>\n            <ul>\n                <li><a href=\"https://apps-cloudmgmt.techzone.vmware.com\" target=\"_blank\">Tech Zone</a></li>\n                <li><a href=\"https://insidertv.vmware.com/channel/Aria%2BEnablement/277744163\" target=\"_blank\">Aria Weekly Enablement</a></li>\n                <!-- <li><a href=\"https://vrealize.vmware.com\" target=\"_blank\">Aria Microsite and Sample Content</a></li> -->\n                <li><a href=\"https://onevmw.sharepoint.com/teams/TAMLab\" target=\"_blank\">TAM Lab Home Page</a></li>\n            </ul>\n        </div>\n    </div>\n</footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/header/header.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<clr-header class=\"header-6\" *ngIf=\"!isLoginPage\">\n    <div class=\"branding\">\n        <a href=\"/\" class=\"nav-link\">\n            <clr-icon shape=\"vm-bug\"></clr-icon>\n            <span class=\"title\">Cloud Demos</span>\n        </a>\n    </div>\n\n\n    <!-- Top Navigation -->\n\n    <!-- Left side of the namvigation -->\n    <div class=\"header-nav\" [clr-nav-level]=\"1\">\n        <clr-dropdown class=\"mob-hide\">\n            <a class=\"nav-link\" clrDropdownTrigger>\n                <span class=\"nav-text\">Products</span>\n            </a>\n            <clr-dropdown-menu clrPosition=\"bottom-left\" *clrIfOpen>\n                <clr-dropdown *ngFor=\"let products of productList\">\n                    <button clrDropdownTrigger>{{ products.product_type }}</button>\n                    <clr-dropdown-menu>\n                        <button clrDropdownItem *ngFor=\"let product of products.products\"\n                            [routerLink]=\"['product',products.slug,product.slug]\">{{ product.name }}\n                            <span>{{ product.description }}</span>\n                        </button>\n                    </clr-dropdown-menu>\n                </clr-dropdown>\n            </clr-dropdown-menu>\n        </clr-dropdown>\n        <!-- Products tab submenu for mobile -->\n        <div class=\"main-container mobile-productsMenu\">\n            <div class=\"content-container\">\n                <clr-vertical-nav class=\"clr-vertical-nav has-nav-groups\">\n                    <div class=\"nav-content\">\n                        <clr-vertical-nav-group class=\"nav-group\">\n                            <div class=\"nav-group-content\">\n                                <button class=\"nav-group-trigger\" type=\"button\">\n                                    <div class=\"nav-group-text\">Products</div>\n                                </button>\n                            </div>\n                            <clr-vertical-nav-group-children>\n                                <div class=\"mob-product-content\" *ngFor=\"let products of productList\">\n                                    <div class=\"subTitle\" [ngClass]=\"( products.slug ) ? 'tab-open' : ''\">\n                                        {{ products.product_type }}\n                                    </div>\n                                    <div *ngFor=\"let product of products.products\">\n                                        <ul *ngIf=\"products.slug\">\n                                            <li> <a [attr.href]=\"'product/'+products.slug+'/'+product.slug\">{{\n                                                    product.name }}</a>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </clr-vertical-nav-group-children>\n                        </clr-vertical-nav-group>\n                    </div>\n                </clr-vertical-nav>\n            </div>\n        </div>\n        <a href=\"/library/usecases\" class=\"nav-link\"><span class=\"nav-text\">Library</span></a>\n\n        <!--<form class=\"search\">\n            <label for=\"search_input\">\n                <input id=\"search_input\" (keyup)=\"getSearchKeyword($event)\" value=\"{{searchKeyword}}\" autocomplete=\"off\" (keyup.enter)=\"redirectPage()\" type=\"text\" placeholder=\"Search for keywords...\">\n            </label>\n        </form>-->\n    </div>\n\n    <!-- Right side navigation -->\n    <div class=\"header-actions\">\n        <a href=\"/faq\" class=\"nav-link\"><span class=\"nav-text\">FAQ</span></a>\n        <a href=\"/feedback\" class=\"nav-link\"><span class=\"nav-text\">Feedback</span></a>\n\n        <a *ngIf=\"!isUserLoggedIn\" href=\"/login{{currentPathname}}\" class=\"nav-link\"><span\n                class=\"nav-text\">Login</span></a>\n\n        <clr-dropdown *ngIf=\"isUserLoggedIn\">\n            <button class=\"nav-text loginUser\" clrDropdownTrigger>\n                {{authenticationService.getUserName()}}\n                <clr-icon shape=\"caret down\"></clr-icon>\n                <span *ngIf=\"service.isAnyNewNotification\"></span>\n            </button>\n            <clr-dropdown-menu *clrIfOpen clrPosition=\"bottom-right\">\n                <a href=\"/notifications\" clrDropdownItem>Notifications</a>\n                <a (click)=\"authenticationService.logout()\" clrDropdownItem>Logout</a>\n            </clr-dropdown-menu>\n        </clr-dropdown>\n    </div>\n</clr-header>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"homecontainer content-container\">\n    <div class=\"content-area\">\n        <app-search-assistant-banner></app-search-assistant-banner>\n        <div class=\"discoverSlider\">\n            <h1>Discover</h1>\n            <div>\n                <div class=\"discoverSliderContent\">\n                    <app-discover-slider [assetDetails]=\"assetDetails\"></app-discover-slider>\n                </div>\n            </div>\n        </div>\n        <div class=\"essentialsSlider\" *ngIf=\"isEssentialToDisplay\">\n            <h1>Essentials</h1>\n            <div>\n                <div class=\"essentialsSliderContent\">\n                    <clr-tabs>\n                        <clr-tab *ngFor=\"let usecase of useCaseAssets; let i = index;\">\n                            <button clrTabLink id=\"link1\"\n                                [clrTabLinkInOverflow]=\"i-1 > tabindexValue\">{{usecase.usecase_category}}</button>\n                            <clr-tab-content id=\"content1\" *clrIfActive=\"i == 0\">\n                                <app-essential-slider [useCaseAssets]=\"usecase.usecases\"></app-essential-slider>\n                            </clr-tab-content>\n                        </clr-tab>\n                    </clr-tabs>\n                </div>\n            </div>\n        </div>\n\n        <app-footer></app-footer>\n    </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/inner-page/inner-page.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/inner-page/inner-page.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<clr-main-container>\n    <clr-header class=\"header-6\">\n        <div class=\"branding\">\n            <a href=\"...\" class=\"nav-link\">\n                <clr-icon shape=\"vm-bug\"></clr-icon>\n                <span class=\"title\">Cloud Demos</span>\n            </a>\n        </div>\n\n\n        <!-- Top Navigation -->\n\n        <!-- Left side of the namvigation -->\n        <div class=\"header-nav\" [clr-nav-level]=\"1\">\n            <clr-dropdown>\n                <a class=\"nav-link\" clrDropdownTrigger>\n                    <span class=\"nav-text\">Products</span>\n                </a>\n                <clr-dropdown-menu clrPosition=\"bottom-left\" *clrIfOpen>\n                    <clr-dropdown>\n                        <button clrDropdownTrigger>Automation</button>\n                        <clr-dropdown-menu>\n                            <button clrDropdownItem>vRealize Automation\n                                <span>Cloud automation that accelerates the deliver of IT services with governance and control</span>\n                            </button>\n                            <button clrDropdownItem>vRealize Lifecycle Manager\n                                <span>Delivers complete lifecycle and content management capabilities for vRealize Suite Products</span>\n                            </button>\n                            <button clrDropdownItem>VMware Cloud Automation Services\n                                <span>SaaS offering including Cloud Assembly, Service Broker and Code Stream </span>\n                            </button>\n                            <button clrDropdownItem>vRealize Business for Cloud\n                                <span>Automates cloud cost analysis for cost visibility and business insights</span>\n                            </button>\n                        </clr-dropdown-menu>\n                    </clr-dropdown>\n                    <clr-dropdown>\n                        <button clrDropdownTrigger>Operations</button>\n                        <clr-dropdown-menu>\n                            <button clrDropdownItem>vRealize Network Insight</button>\n                            <button clrDropdownItem>vRealize Operations</button>\n                            <button clrDropdownItem>vRealize Log Insight</button>\n                            <button clrDropdownItem>VMware Network Insight</button>\n                            <button clrDropdownItem>VMware Log Intelligence</button>\n                        </clr-dropdown-menu>\n                    </clr-dropdown>\n                    <clr-dropdown>\n                        <button clrDropdownTrigger>Partners</button>\n                        <clr-dropdown-menu>\n                            <button clrDropdownItem>BlueMedora</button>\n                            <button clrDropdownItem>AWS</button>\n                            <button clrDropdownItem>vRealize Log Insight</button>\n                            <button clrDropdownItem>VMware Network Insight</button>\n                            <button clrDropdownItem>VMware Log Intelligence</button>\n                        </clr-dropdown-menu>\n                    </clr-dropdown>\n                </clr-dropdown-menu>\n            </clr-dropdown>\n            <a href=\"...\" class=\"nav-link\"><span class=\"nav-text\">Library</span></a>\n        </div>\n\n        <!-- Right side navigation -->\n        <div class=\"header-actions\">\n            <form class=\"search\">\n                <label for=\"search_input\">\n                    <input id=\"search_input\" type=\"text\" placeholder=\"Search for keywords...\">\n                </label>\n            </form>\n            <clr-dropdown>\n                <button class=\"nav-icon\" clrDropdownTrigger>\n                    <clr-icon shape=\"error-standard\"></clr-icon>\n                </button>\n                <clr-dropdown-menu *clrIfOpen clrPosition=\"bottom-right\">\n                    <a href=\"...\" clrDropdownItem>FAQ</a>\n                    <a href=\"...\" clrDropdownItem>Feedback</a>\n                    <a href=\"...\" clrDropdownItem>Contact</a>\n                </clr-dropdown-menu>\n            </clr-dropdown>\n        </div>\n    </clr-header>\n    <div class=\"content-container\">\n        <div class=\"content-area\">\n\n            <!-- Breadcrumb -->\n            <div class=\"breadcrumb\">\n                <div class=\"clr-row\">\n                    <div class=\"clr-col-lg-12 clr-col-md-12 clr-col-12\">\n                        Products | Operations | <span>vRealize Network Insight</span>\n                    </div>\n                </div>\n            </div>\n            \n            <!-- Page Title and Sub-title -->\n            <div class=\"pageTitle\">\n                <h1>vRealize Network Insight</h1>\n                <p>Helps customers build an optimized, highly available and secure network infrastructure</p>\n            </div>\n\n            <!-- Filter Section -->\n            <div class=\"filterSection\">\n                <div class=\"clr-row\">\n                    <div>\n                        <form class=\"clr-form\">\n                            <div class=\" clr-form-control\">\n                                <div class=\"clr-control-container\">\n                                    <div class=\"clr-input-wrapper\">\n                                        <clr-icon shape=\"search\"></clr-icon>\n                                        <input class=\"clr-input\" placeholder=\"Filter\" name=\"input\" />\n                                    </div>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                    <div>\n                        <clr-dropdown>\n                            <button class=\"btn btn-link\" clrDropdownTrigger>\n                                Sort By\n                            </button>\n                            <clr-dropdown-menu clrPosition=\"bottom-right\" *clrIfOpen>\n                                <div aria-label=\"Dropdown header Action\" clrDropdownItem>Most recent</div>\n                                <div aria-label=\"Dropdown header Action\" clrDropdownItem>Most liked</div>\n                            </clr-dropdown-menu>\n                        </clr-dropdown>\n                    </div>\n                </div>\n            </div>\n            \n            <!-- Assets  -->\n            <div class=\"clr-row\">\n\n                <!-- Asset block -->\n                <div class=\"clr-col-lg-4 clr-col-md-6 clr-col-12\">\n                    <div class=\"card\">\n                        <div class=\"card-header\">\n                            <clr-icon shape=\"application\" class=\"is-info\"size=\"36\" ></clr-icon> Environment\n                            <span>\n                                <clr-icon shape=\"thumbs-up\" class=\"is-success\" size=\"24\"></clr-icon>\n                                100%\n                            </span>\n                        </div>\n                        <div class=\"card-block\">\n                            <div class=\"card-title\">\n                                Title of the demo goes over here Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, libero.\n                            </div>\n                            <div class=\"card-text\">\n                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam labore veritatis explicabo natus dignissimos dolore nobis nostrum hic tempore iste ipsam eos harum voluptates odit sunt ipsa voluptas, rerum doloribus!\n                            </div>\n                        </div>\n                        <div class=\"card-footer\">\n                            <button class=\"btn btn-outline\">View <clr-icon shape=\"pop-out\"></clr-icon></button>\n                            <button class=\"btn btn-link\"><clr-icon shape=\"heart\" size=\"24\"></clr-icon></button>\n                            <button class=\"btn btn-link\"><clr-icon shape=\"plus-circle\" size=\"24\"></clr-icon></button>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- Asset block -->\n                <div class=\"clr-col-lg-4 clr-col-md-6 clr-col-12\">\n                    <div class=\"card\">\n                        <div class=\"card-header\">\n                            <clr-icon shape=\"film-strip\" class=\"is-info\"size=\"36\" ></clr-icon> Video\n                            <span>\n                                <clr-icon shape=\"thumbs-up\" class=\"is-success\" size=\"24\"></clr-icon>\n                                100%\n                            </span>\n                        </div>\n                        <div class=\"card-block\">\n                            <div class=\"card-title\">\n                                Title of the demo goes over here Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, libero.\n                            </div>\n                            <div class=\"card-text\">\n                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam labore veritatis explicabo natus dignissimos dolore nobis nostrum hic tempore iste ipsam eos harum voluptates odit sunt ipsa voluptas, rerum doloribus!\n                            </div>\n                        </div>\n                        <div class=\"card-footer\">\n                            <button class=\"btn btn-outline\">View <clr-icon shape=\"pop-out\"></clr-icon></button>\n                            <button class=\"btn btn-link\"><clr-icon shape=\"heart\" size=\"24\"></clr-icon></button>\n                            <button class=\"btn btn-link\"><clr-icon shape=\"plus-circle\" size=\"24\"></clr-icon></button>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- Asset block -->\n                <div class=\"clr-col-lg-4 clr-col-md-6 clr-col-12\">\n                    <div class=\"card\">\n                        <div class=\"card-header\">\n                            <clr-icon shape=\"display\" class=\"is-info\"size=\"36\" ></clr-icon> Walkthroiugh\n                            <span>\n                                <clr-icon shape=\"thumbs-up\" class=\"is-success\" size=\"24\"></clr-icon>\n                                100%\n                            </span>\n                        </div>\n                        <div class=\"card-block\">\n                            <div class=\"card-title\">\n                                Title of the demo goes over here Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, libero.\n                            </div>\n                            <div class=\"card-text\">\n                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam labore veritatis explicabo natus dignissimos dolore nobis nostrum hic tempore iste ipsam eos harum voluptates odit sunt ipsa voluptas, rerum doloribus!\n                            </div>\n                        </div>\n                        <div class=\"card-footer\">\n                            <button class=\"btn btn-outline\">View <clr-icon shape=\"pop-out\"></clr-icon></button>\n                            <button class=\"btn btn-link\"><clr-icon shape=\"heart\" size=\"24\"></clr-icon></button>\n                            <button class=\"btn btn-link\"><clr-icon shape=\"plus-circle\" size=\"24\"></clr-icon></button>\n                            <clr-dropdown [clrCloseMenuOnItemClick]=\"false\">\n                                <button clrDropdownTrigger aria-label=\"Dropdown demo button\">\n                                    <clr-icon shape=\"checkbox-list\" size=\"24\"></clr-icon>\n                                </button>\n                                <clr-dropdown-menu *clrIfOpen>\n                                    <div aria-label=\"Dropdown header Action 1\" clrDropdownItem>Remove from playlist</div>\n                                    <div aria-label=\"Dropdown header Action 2\"  clrDropdownItem>Action 2</div>\n                                </clr-dropdown-menu>\n                            </clr-dropdown>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <!-- Pagination -->\n            <div class=\"pagination\">\n                <div class=\"clr-row\">\n                    <div>\n                        Assets per page\n                        <div class=\"clr-select-wrapper\">\n                            <select id=\"select-basic\" class=\"clr-select\">\n                                <option value=\"18\">18</option>\n                                <option value=\"36\">36</option>\n                                <option value=\"54\">54</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div>\n                        <div class=\"pagination-list ng-star-inserted\">\n                            <button class=\"pagination-first\" type=\"button\" disabled=\"\" aria-label=\"First Page\">\n                                <clr-icon shape=\"step-forward-2 down\" role=\"none\"></clr-icon>\n                            </button>\n                            \n                            <button class=\"pagination-previous\" type=\"button\" disabled=\"\" aria-label=\"Previous Page\">\n                                <clr-icon shape=\"angle left\" role=\"none\"></clr-icon>\n                            </button>\n                            \n                            <input class=\"pagination-current\" type=\"text\" size=\"2\" aria-label=\"Current Page\" value=\"1\"> &nbsp;/&nbsp;<span aria-label=\"Total Pages\">11</span>\n                            \n                            <button class=\"pagination-next\" type=\"button\" aria-label=\"Next Page\">\n                                <clr-icon shape=\"angle right\" role=\"none\"></clr-icon>\n                            </button>\n                            \n                            <button class=\"pagination-last\" type=\"button\" aria-label=\"Last Page\">\n                                <clr-icon shape=\"step-forward-2 up\" role=\"none\"></clr-icon>\n                            </button>\n                        </div>\n                    </div>\n                    <div>\n                        1 - 18 of 32 assets\n                    </div>\n                </div>\n            </div>\n        </div>\n            \n        <!-- Side Navigation -->\n        <nav class=\"sidenav\" [clr-nav-level]=\"2\">\n            <section class=\"sidenav-content\">\n                <a href=\"...\" class=\"nav-link active\"><clr-icon shape=\"grid-view\"></clr-icon> All Demos <span class=\"badge\">1</span></a>\n                <a href=\"...\" class=\"nav-link\"><clr-icon shape=\"application\"></clr-icon> Live <span class=\"badge\">1</span></a>\n                <a href=\"...\" class=\"nav-link\"><clr-icon shape=\"display\"></clr-icon> iSim <span class=\"badge\">1</span></a>\n                <a href=\"...\" class=\"nav-link\"><clr-icon shape=\"axis-chart\"></clr-icon> Offline <span class=\"badge\">1</span></a>\n                <a href=\"...\" class=\"nav-link\"><clr-icon shape=\"cursor-hand-click\"></clr-icon> How-To <span class=\"badge\">1</span></a>\n            </section>\n        </nav>\n    </div>\n</clr-main-container>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/library-sidebar/library-sidebar.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/library-sidebar/library-sidebar.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    \n<!-- Side Navigation -->\n<section class=\"sidenav-content\">\n    <a [routerLink]=\"['/library/usecases']\" [class.active]=\"router.url == '/library/usecases' || router.url == '/library/playlists' || router.url == '/library/whatsnew' || router.url == '/library/toprated'\" class=\"nav-link\"><clr-icon shape=\"grid-view\"></clr-icon> Browse All </a>\n    <a [routerLink]=\"['/library/recently-viewed']\" [class.active]=\"router.url == '/library/recently-viewed'\"  class=\"nav-link\"><clr-icon shape=\"history\"></clr-icon> Recently Viewed </a>\n    <section class=\"nav-group collapsible\">\n        <input id=\"tabexample1\" type=\"checkbox\">\n        <label for=\"tabexample1\">Your Library</label>\n        <ul class=\"nav-list\">\n            <li><a [routerLink]=\"['/library/favorites']\" [class.active]=\"router.url == '/library/favorites'\" class=\"nav-link\"><clr-icon shape=\"heart\"></clr-icon> Favorites <span class=\"badge\" *ngIf=\"cmbuService.librarySidebarFavoriteCount\">{{cmbuService.librarySidebarFavoriteCount}}</span></a></li>\n            <li><a [routerLink]=\"['/library/user-playlists']\" [class.active]=\"router.url == '/library/user-playlists'\"  class=\"nav-link\"><clr-icon shape=\"video-gallery\"></clr-icon> Playlists <span class=\"badge\" *ngIf=\"cmbuService.librarySidebarPlaylistCount\">{{cmbuService.librarySidebarPlaylistCount}}</span></a></li>\n        </ul>\n    </section>\n    <a class=\"nav-link\" (click)=\"isshowPlaylistPopup()\"><clr-icon shape=\"plus-circle\"></clr-icon> Create Playlist </a>\n</section>\n<app-create-playlist [createPlaylistPopup]=\"showPlaylistPopup\" (modalStatus)=\"showPlaylistPopup = $event\"></app-create-playlist>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/library/library.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/library/library.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-area\">\n    <!-- Tabs -->\n    <clr-tabs *ngIf=\"showLibraryTab\" class=\"showLib\">\n        <clr-tab>\n            <button clrTabLink [routerLink]=\"['/library/usecases']\">Use Cases</button>\n            <app-use-cases *ngIf=\"cmbuService.usecaseTabActive\"></app-use-cases>\n        </clr-tab>\n        <clr-tab>\n            <button clrTabLink [routerLink]=\"['/library/playlists']\">Playlists</button>\n            <app-admin-playlist *ngIf=\"cmbuService.playlistTabActive\"></app-admin-playlist>\n        </clr-tab>\n        <clr-tab>\n            <button clrTabLink [routerLink]=\"['/library/whatsnew']\">What's New</button>\n            <app-whats-new *ngIf=\"cmbuService.whatsNewTabActive\"></app-whats-new>\n        </clr-tab>\n        <clr-tab>\n            <button clrTabLink [routerLink]=\"['/library/toprated']\">Top Rated</button>\n            <app-top-rated *ngIf=\"cmbuService.topratedTabActive\"></app-top-rated>\n        </clr-tab>\n    </clr-tabs>\n    <router-outlet *ngIf=\"showLibraryTab == false\"></router-outlet>\n\n    <app-footer></app-footer>\n\n</div>\n\n<!-- Create Playlist Popup -->\n<clr-modal [(clrModalOpen)]=\"createPlaylistPopup\" class=\"createPlaylistPopup\">\n    <h3 class=\"modal-title\">Create Playlist</h3>\n    <div class=\"modal-body\">\n        <div class=\"clr-input-wrapper\">\n            <input type=\"text\" placeholder=\"Enter value here\" class=\"clr-input\" maxlength=\"100\">\n            <button class=\"btn btn-primary\" type=\"button\">Create</button>\n        </div>\n    </div>\n</clr-modal>\n\n<!-- Add to Playlist Popup -->\n<clr-modal [(clrModalOpen)]=\"addToPlaylistPopup\" class=\"addToPlaylistPopup\">\n    <h3 class=\"modal-title\">Add to Playlist</h3>\n    <div class=\"modal-body\">\n        <label class=\"clr-control-label\">Create new playlist</label>\n        <div class=\"clr-input-wrapper\">\n            <input type=\"text\" placeholder=\"Enter value here\" class=\"clr-input\" maxlength=\"100\">\n            <button class=\"btn btn-primary\" type=\"button\">Create</button>\n        </div>\n\n        <div class=\"listOfExistingPlaylists\">\n            <label class=\"clr-control-label\">Or Add Demo to Existing Playlists:</label>\n            <div class=\"listOfPlaylists\">\n                <div>\n                    <p>Playlist 1</p>\n                    <button class=\"btn btn-primary\" type=\"button\">Add</button>\n                </div>\n                <div>\n                    <p>Playlist 2</p>\n                    <button class=\"btn btn-primary\" type=\"button\">Add</button>\n                </div>\n                <div>\n                    <p>Playlist 3</p>\n                    <button class=\"btn btn-primary\" type=\"button\">Add</button>\n                </div>\n                <div>\n                    <p>Playlist 4</p>\n                    <button class=\"btn btn-primary\" type=\"button\">Add</button>\n                </div>\n                <div>\n                    <p>Playlist 5</p>\n                    <button class=\"btn btn-primary\" type=\"button\">Add</button>\n                </div>\n                <div>\n                    <p>Playlist 6</p>\n                    <button class=\"btn btn-primary\" type=\"button\">Add</button>\n                </div>\n                <div>\n                    <p>Playlist 7</p>\n                    <button class=\"btn btn-primary\" type=\"button\">Add</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</clr-modal>\n\n<app-library-sidebar class=\"sidenav\" [clr-nav-level]=\"2\"></app-library-sidebar>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/manage-playlist/manage-playlist.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/manage-playlist/manage-playlist.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <button class=\"backButton\" [routerLink]=\"['/library/user-playlists']\">\n        <clr-icon shape=\"undo\" size=\"24\" title=\"back\"></clr-icon>\n    </button>\n    <!-- Page Title and Sub-title -->\n    <div class=\"pageTitle\">\n        <h1>{{playlist.name}}</h1>\n    </div>\n    <app-filter-textbox (keywordEvent)=\"filterByKeyword($event)\"></app-filter-textbox>\n    <!-- Filter Section -->\n    <div class=\"deletePlaylist\">\n        <p (click)=\"deleteConfirmation = true\">\n            <clr-icon shape=\"trash\" size=\"24\"></clr-icon>\n            Delete playlist\n        </p>\n    </div>\n    <div class=\"clr-row\">\n        <div class=\"clr-col-lg-12 clr-col-md-12 clr-col-12\">\n            <p *ngIf=\"playlistAssets.length==0 && (keyowrd != '')\" class=\"filter-msg\">No result found.</p>\n            <!-- Notification tile -->\n            <div class=\"playlistItemTile\" *ngFor=\"let assetDetails of playlistAssets\">\n                <div class=\"playlistItemDetails\">\n                    <h4>{{assetDetails.assetTitle}}</h4>\n                    <p>{{assetDetails.assetDescription}}</p>\n                </div>\n                <div class=\"playlistItemSetting\">\n                    <clr-icon shape=\"times\" size=\"24\" (click)=\"removeAssetsFromPlaylists(playlist.slug, assetDetails.assetId)\"></clr-icon>\n                </div>\n            </div>\n\n        </div>\n    </div>\n    <clr-modal [(clrModalOpen)]=\"deleteConfirmation\">\n        <h3 class=\"modal-title\">Are you sure to delete &#34; {{playlist.name}} &#34; ?</h3>\n        <div class=\"modal-body\">\n            <!-- <p>But not much to say...</p> -->\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-outline\" (click)=\"deleteConfirmation = false\">Cancel</button>\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"deletePlaylist(playlist.id)\">Ok</button>\n        </div>\n    </clr-modal>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/notification/notification.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/notification/notification.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-area\">\n    <div class=\"clr-row\">\n        <div class=\"clr-col-lg-1 clr-col-md-1 clr-col-12\">\n        </div>\n        <div class=\"clr-col-lg-10 clr-col-md-12 clr-col-12\">\n\n            <h3 class=\"notificationHeader\" *ngIf=\"allNotifications\">Notifications\n                ({{ totalAssetCount }})\n                <!-- <button class=\"btn btn-sm tooltip tooltip-xs\" (click)=\"subscribe()\"\n                [ngClass]=\"toggle ? 'unsubscribeBtn' : 'btn-primary'\" role=\"tooltip\" aria-haspopup=\"true\">\n                <span>\n                    {{toggle ? 'Subscribed' : 'Subscribe for email alerts'}}\n\n                </span>\n\n            </button> -->\n                <button class=\"btn btn-sm btn-primary\" (click)=\"subscribe()\" [ngClass]=\"notificationService.isSubscribed ? 'hidden' : ''\">\n                    <span>\n                        Subscribe for email alerts\n\n                    </span>\n\n                </button>\n                <button class=\" btn btn-sm tooltip tooltip-lg unsubscribeBtn\" style=\"display: none;\"\n                    [ngClass]=\"notificationService.isSubscribed ? 'showUnsubscribeBtn' : ''\">\n                    <span role=\"tooltip\" aria-haspopup=\"true\">Subscribed</span>\n                    <span class=\"tooltip-content\">Check your mail to unsubscribe</span>\n\n                </button>\n            </h3>\n\n            <h5 *ngIf=\"allNotifications\" class=\"notificationHeader markAsRead\"><button class=\"disabledBtn\"\n                    (click)=\"markAllAsRead()\" [disabled]=\"!cmbuService.isAnyNewNotification\">Mark all as read</button>\n            </h5>\n\n            <!-- Notification tile -->\n            <div class=\"notificationTile\" *ngFor=\"let notification of allNotifications\"\n                [ngClass]=\"(!cmbuService.isAnyNewNotification || notification.isViewed) ? '' : 'notRead'\">\n                <div class=\"notificationContent\"\n                    (click)=\"markAsRead(notification.id, notification.link, notification.link_type)\">\n                    <clr-icon [attr.shape]=\"notification.iconShape\" class=\"is-info\" size=\"32\"></clr-icon>\n                    <div>\n                        <p>{{ notification.text }}</p>\n                        <span>{{ getHours(notification.created_at) }}</span>\n                    </div>\n                </div>\n                <div class=\"notificationSetting\">\n                    <clr-icon shape=\"times\" size=\"24\" (click)=\"removeNotification(notification.id)\"></clr-icon>\n                </div>\n            </div>\n        </div>\n        <div class=\"clr-col-lg-1 clr-col-md-1 clr-col-12\">\n        </div>\n    </div>\n    <!-- Pagination -->\n    <div class=\"pagination\">\n        <div class=\"clr-row\">\n            <app-pagination-count (PageSize)=\"getAssetsByPageSize($event)\"></app-pagination-count>\n            <app-pagination-button [totalNoOfPages]=\"totalNoOfPages\"\n                (getProductsByPagination)=\"getPaginationAssets($event)\"></app-pagination-button>\n            <app-pagination-result [paginationResultOutPut]=\"paginationResultOutPut\"></app-pagination-result>\n        </div>\n    </div>\n    <app-footer></app-footer>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/page-not-found/page-not-found.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/page-not-found/page-not-found.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-container\">\n    <div class=\"content-area\">\n        <div class=\"page404\">\n        <h2>Page Not Found </h2>\n    </div>\n        <app-footer></app-footer>\n    </div>    \n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/pagination-button/pagination-button.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/pagination-button/pagination-button.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"displayPaginationButton\">\n    <div class=\"pagination-list ng-star-inserted\">\n        <button class=\"pagination-first\" type=\"button\" aria-label=\"First Page\" (click) = \"navigatePagination(1)\">\n            <clr-icon shape=\"step-forward-2 down\" role=\"none\"></clr-icon>\n        </button>\n        \n        <button class=\"pagination-previous\" type=\"button\" [disabled]=\"!hasPrevious\" aria-label=\"Previous Page\" (click) = \"navigatePagination(prevPage)\">\n            <clr-icon shape=\"angle left\" role=\"none\"></clr-icon>\n        </button>\n        \n        <input class=\"pagination-current\" appNumericOnly (keydown)=\"keydownEvent($event)\" type=\"text\" size=\"2\" aria-label=\"Current Page\" value=\"{{currentPage}}\"> &nbsp;/&nbsp;<span aria-label=\"Total Pages\">{{ totalNoOfPages }}</span>\n        \n        <button class=\"pagination-next\" [disabled]=\"!hasNext\" type=\"button\" aria-label=\"Next Page\" (click) = \"navigatePagination(nextPage)\">\n            <clr-icon shape=\"angle right\" role=\"none\"></clr-icon>\n        </button>\n        \n        <button class=\"pagination-last\" (click) = \"navigatePagination(totalNoOfPages)\" type=\"button\" aria-label=\"Last Page\">\n            <clr-icon shape=\"step-forward-2 up\" role=\"none\"></clr-icon>\n        </button>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/pagination-count/pagination-count.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/pagination-count/pagination-count.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    Assets per page\n    <div class=\"clr-select-wrapper\">\n        <select id=\"select-basic\" class=\"clr-select\" [(ngModel)]=\"selectedPageSize\" (change)=\"getAssetsByPageSize($event)\">\n            <option value=\"10\">10</option>\n            <option value=\"20\">20</option>\n            <option value=\"50\">50</option>\n            <option value=\"100\">100</option>\n        </select>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/pagination-result/pagination-result.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/pagination-result/pagination-result.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    {{ paginationResultOutPut }}\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/playlist-item/playlist-item.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/playlist-item/playlist-item.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"clr-row\" myMatchHeight=\"card-block\">\n    <div *ngFor='let playlistDetails of playlists' class=\"clr-col-lg-6 clr-col-md-6 clr-col-12\">\n        <div class=\"card new-card\">\n            <div class=\"card-header\">\n                <clr-icon shape=\"video-gallery\" class=\"is-info\" size=\"36\"></clr-icon> Playlist\n            </div>\n            <div class=\"card-block\">\n                <div class=\"card-title\">\n                    {{ playlistDetails.name }}\n                </div>\n                <div class=\"card-text\">\n                    {{ playlistDetails.description | slice : 0 : 350 }}\n                    {{ playlistDetails.description.length > 350 ? \"...\" : \"\"}}\n                </div>\n            </div>\n            <div class=\"card-footer\">\n                <button class=\"btn btn-outline\" (click)=\"viewPlaylist(playlistDetails)\">Open\n                </button>\n                <!-- <button class=\"btn btn-link\"><clr-icon shape=\"heart\" size=\"24\"></clr-icon></button> -->\n                <button *ngIf=\"!playlistDetails.savedPlaylist && playlistType=='admin'\" class=\"btn btn-link\">\n                    <clr-icon shape=\"plus-circle\" size=\"24\" (click)=\"savePlaylist(playlistDetails.id)\"></clr-icon>\n                </button>\n                <clr-dropdown [clrCloseMenuOnItemClick]=\"false\"\n                    *ngIf=\"playlistDetails.savedPlaylist || playlistType=='user'\">\n                    <button clrDropdownTrigger aria-label=\"Dropdown demo button\">\n                        <clr-icon shape=\"checkbox-list\" size=\"24\"></clr-icon>\n                    </button>\n                    <clr-dropdown-menu *clrIfOpen>\n                        <div aria-label=\"Dropdown header\" clrDropdownItem\n                            *ngIf=\"playlistType=='admin' || playlistType=='saved'\"\n                            (click)=\"removePlaylist(playlistDetails.id)\">Remove from playlist</div>\n                        <div aria-label=\"Dropdown header\" clrDropdownItem *ngIf=\"playlistType=='user'\"\n                            [routerLink]=\"['/library/user-playlists/', playlistDetails.slug]\">Manage Playlist</div>\n                        <div aria-label=\"Dropdown header\" clrDropdownItem *ngIf=\"playlistType=='user'\"\n                            (click)=\"isshowPlaylistPopup(playlistDetails.slug)\">Rename</div>\n                        <div aria-label=\"Dropdown header\" clrDropdownItem *ngIf=\"playlistType=='user'\"\n                            (click)=\"deleteConfirmation=true;deletePlaylistName=playlistDetails.name;deletePlaylistId=playlistDetails.id\">\n                            Delete Playlist</div>\n                    </clr-dropdown-menu>\n                </clr-dropdown>\n            </div>\n        </div>\n    </div>\n</div>\n<clr-modal [(clrModalOpen)]=\"deleteConfirmation\">\n    <h3 class=\"modal-title\">Are you sure to delete &#34; {{deletePlaylistName}} &#34; ?</h3>\n    <div class=\"modal-body\">\n        <!-- <p>But not much to say...</p> -->\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline\" (click)=\"deleteConfirmation = false\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"deletePlaylist(deletePlaylistId)\">Ok</button>\n    </div>\n</clr-modal>\n<app-create-playlist (modalStatus)=\"showPlaylistPopup = $event\" [createPlaylistPopup]=\"showPlaylistPopup\"\n    [playListID]=\"playListID\" [isRenameEvent]=\"isRenameEvent\" [playListName]=\"playListName\"\n    [playListDescription]=\"playListDescription\" (getUserPlaylists)=\"getUserPlaylists()\"></app-create-playlist>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/playlist-view/playlist-view.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/playlist-view/playlist-view.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-container\">\n    <div class=\"content-area no-pad\" *ngIf=\"playlist\">\n        <app-breadcrumb></app-breadcrumb>\n        <div class=\"pageTitle\">\n            <h1> {{ playlist.name }} </h1>\n            <p *ngIf=\"!showMore\"> {{ playlist.description | slice : 0 : 350 }} <span\n                    *ngIf=\"playlist.description.length > 350\">...</span> <span class=\"show-more\"\n                    *ngIf=\"playlist.description.length > 350\"><a (click)=\"showMore = true\">Show More</a></span> </p>\n            <p *ngIf=\"showMore\"> {{ playlist.description }}</p>\n        </div>\n\n        <!-- Filter Section -->\n        <app-filter-textbox (keywordEvent)=\"filterByKeyword($event)\"></app-filter-textbox>\n\n        <!-- Assets  -->\n        <p *ngIf=\"playlist.assets.length==0 && (keyword != '')\" class=\"filter-msg\">No result found.</p>\n\n        <!-- Asset block -->\n        <app-asset-item-box [productAssets]='playlist.assets'></app-asset-item-box>\n\n        <!--  Pagination -->\n        <div [ngClass]=\"playlist.assets.length==0 ? 'hidden' : ''\" class=\"pagination\">\n            <div class=\"clr-row\">\n                <app-pagination-count (PageSize)=\"getAssetsByPageSize($event)\"></app-pagination-count>\n                <app-pagination-button [totalNoOfPages]=\"totalNoOfPages\"\n                    (getProductsByPagination)=\"getPaginationAssets($event)\"></app-pagination-button>\n                <app-pagination-result [paginationResultOutPut]=\"paginationResultOutPut\"></app-pagination-result>\n            </div>\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/product-sidebar/product-sidebar.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/product-sidebar/product-sidebar.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n    <section class=\"sidenav-content\">\n        <a class=\"nav-link\" [ngClass]=\"(isSlugName == '') ? 'active' : ''\" (click)=\"filterAssetsByCategory ('')\"><clr-icon shape=\"grid-view\"></clr-icon> All Demos <span *ngIf = 'productCategories' class=\"badge\"> {{ allProductCount }} </span></a>\n        <a [ngClass]=\"(isSlugName == productCategory.slug) ? 'active' : ''\" (click)=\"filterAssetsByCategory (productCategory.slug)\" *ngFor='let productCategory of productCategories' class=\"nav-link\"><clr-icon [attr.shape]=\"productCategory.iconShape\"></clr-icon> {{ productCategory.name }} <span class=\"badge\"> {{ productCategory.count }} </span></a>\n    </section>\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/product/product.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/product/product.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Sidebar Navigation -->\n<app-product-sidebar [allProductCount]=\"allProductCount\" [totalAssetCount]=\"totalAssetCount\" (categorySlugEvent)=\"filteredAssetsByCategorySlug($event)\"  [productCategories] = 'productCategories' class=\"sidenav\" [clr-nav-level]=\"2\"></app-product-sidebar>\n\n<div class=\"content-area\">\n    <app-breadcrumb></app-breadcrumb>\n    <div class=\"pageTitle\" *ngIf=\"productDetails\">\n            <h1 > {{ productDetails.name }} </h1>\n            <p *ngIf=\"productDetails.description\"> {{ productDetails.description }} </p>\n        </div>\n\n        <!-- Filter Section -->\n        <app-filter-textbox [assetKeyword]=\"assetKeyword\" (keywordEvent)=\"filterAssetsByKeyword($event)\"></app-filter-textbox>\n        <p *ngIf=\"productAssets.length==0 && (assetKeyword != '')\" class=\"filter-msg\">No result found.</p>\n        <!-- Assets  -->\n        \n\n        <!-- Asset block -->\n        <app-asset-item-box [productAssets] = 'productAssets'></app-asset-item-box>\n\n        <!-- Pagination -->\n        <div [ngClass]=\"productAssets.length==0 ? 'hidden' : ''\" class=\"pagination\">\n            <div class=\"clr-row\">\n                <app-pagination-count (PageSize)=\"getAssetsByPageSize($event)\"></app-pagination-count>\n                <app-pagination-button [totalNoOfPages] = \"totalNoOfPages\" (getProductsByPagination)=\"getPaginationAssets($event)\"></app-pagination-button>\n                <app-pagination-result [paginationResultOutPut]=\"paginationResultOutPut\"></app-pagination-result>\n            </div>\n        </div>\n        \n        <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/recently-viewed/recently-viewed.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/recently-viewed/recently-viewed.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n \n<div class=\"pageTitle\">\n                <h1>Recently Viewed</h1>\n        </div>\n<!-- Filter Section -->\n<app-filter-textbox (keywordEvent)=\"filterByKeyword($event)\"></app-filter-textbox>\n<p *ngIf=\"assetsList.length==0 && (keyword != '')\" class=\"filter-msg\">No result found.</p>\n<!-- Assets  -->\n<app-asset-item-box [productAssets] = 'assetsList'></app-asset-item-box>   \n<!-- Pagination -->\n<div [ngClass]=\"assetsList.length==0 ? 'hidden' : ''\" class=\"pagination\">\n        <div class=\"clr-row\">\n                <app-pagination-count (PageSize)=\"getAssetsByPageSize($event)\"></app-pagination-count>\n                <app-pagination-button [totalNoOfPages] = \"totalNoOfPages\" (getProductsByPagination)=\"getPaginationAssets($event)\"></app-pagination-button>\n                <app-pagination-result [paginationResultOutPut]=\"paginationResultOutPut\"></app-pagination-result>\n        </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/search-assistant-banner/search-assistant-banner.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/search-assistant-banner/search-assistant-banner.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"searchAssistanceContainer whiteBg\">\n    <div class=\"searchAssistance\">\n        <h1>Search Assistance</h1>\n        <div class=\"clr-form-control\">\n            <label for=\"basic\" class=\"clr-control-label\">\n                I’m looking for\n\n                <div class=\"clr-select-wrapper\">\n                    <select id=\"select-basic\" class=\"clr-select\" (change)=\"getCategorySlug($event)\" ng-model=\"categorySlug\">\n                        <option [selected]=\"currentSlug == 'all-assets'\" value=\"all-assets\">ANY DEMO</option>\n                        <option  *ngFor=\"let assetCategory of assetCategories\" [selected]=\"assetCategory.count == currentSlug\" [attr.value]=\"assetCategory.count\">{{assetCategory.name}} </option>\n                    </select>\n                </div>\n\n                to assist with:\n            </label>\n            <div class=\"clr-control-container\">\n                <div class=\"clr-input-wrapper\">\n                    <form action=\"\" [ngClass]=\"isErrorMsg ? 'clr-error' : '' \">\n                        <input type=\"text\" id=\"basic\" placeholder=\"Type something…\" class=\"clr-input\" (keyup)=\"getSearchKeyword($event)\" value=\"{{searchKeyword}}\" autocomplete=\"off\">\n                        <button class=\"btn btn-primary\" (click)=\"redirectPage()\">Search</button>\n                        <span class=\"clr-subtext\" *ngIf=\"isErrorMsg\">{{errorMsg}}</span>\n                    </form>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/search-result-button/search-result-button.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/search-result-button/search-result-button.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"filterContainer\">\n        <div class=\"filterButtons\">\n            <div>\n                <h1>Results</h1>\n                <button class=\"btn \" [ngClass]=\"(categorySlug == '') ? 'btn-primary' : 'btn-outline'\" (click)=\"redirectPage('all-assets')\">All</button>\n                \n                <button class=\"btn \"  *ngFor=\"let assetCategory of assetCategories\" [ngClass]=\"(assetCategory.slug.toLowerCase() == categorySlug.toLowerCase()) ? 'btn-primary' : 'btn-outline'\" (click)=\"redirectPage(assetCategory.slug)\">{{ assetCategory.name }} ({{ assetCategory.count}})</button>\n            </div>\n        </div>\n    \n        <div class=\"filterList\">\n         \n        </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/search/search.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/search/search.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-area searchPageUi\">\n    <app-search-assistant-banner [categorySlug]=\"categorySlug\" [searchKeyword]=\"searchKeyword\"></app-search-assistant-banner>\n    <app-search-result-button [categorySlug]=\"categorySlug\" [assetCategories] = \"assetCategories\"></app-search-result-button>\n    <div class=\"resultContainer\">\n        <div class=\"resultList\" >\n                <h3 *ngIf=\"productAssets.length == 0\" class=\"clr-error\">No record found</h3>\n                <app-asset-item-box *ngIf=\"productAssets.length > 0\" [productAssets] = 'productAssets'></app-asset-item-box>\n        </div>\n    </div>\n\n    <!-- Pagination -->\n    <div class=\"pagination\">\n        <div class=\"clr-row\">\n            <app-pagination-count (PageSize)=\"getAssetsByPageSize($event)\"></app-pagination-count>\n            <app-pagination-button [totalNoOfPages] = \"totalNoOfPages\" (getProductsByPagination)=\"getPaginationAssets($event)\"></app-pagination-button>\n            <app-pagination-result [paginationResultOutPut]=\"paginationResultOutPut\"></app-pagination-result>\n        </div>\n    </div>\n\n    <app-footer></app-footer>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/sort-by/sort-by.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/sort-by/sort-by.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>sort-by works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/top-rated/top-rated.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/top-rated/top-rated.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template [(clrIfActive)]=\"cmbuService.topratedTabActive\">\n    <clr-tab-content>\n        <!-- Filter Section -->\n        <app-filter-textbox (keywordEvent)=\"filterByKeyword($event)\"></app-filter-textbox>\n        <p *ngIf=\"assetsList.length==0 && (keyword != '')\" class=\"filter-msg\">No result found.</p>\n        <!-- Assets  -->\n        <app-asset-item-box [productAssets] = 'assetsList'></app-asset-item-box>   \n        <!-- Pagination -->\n        <div [ngClass]=\"assetsList.length==0 ? 'hidden' : ''\"  class=\"pagination\">\n            <div class=\"clr-row\">\n                <app-pagination-count (PageSize)=\"getAssetsByPageSize($event)\"></app-pagination-count>\n                <app-pagination-button [totalNoOfPages] = \"totalNoOfPages\" (getProductsByPagination)=\"getPaginationAssets($event)\"></app-pagination-button>\n                <app-pagination-result [paginationResultOutPut]=\"paginationResultOutPut\"></app-pagination-result>\n            </div>\n        </div>\n    </clr-tab-content>\n</ng-template>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/unsubscribe/unsubscribe.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/unsubscribe/unsubscribe.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-container\">\n    <div *ngIf=\"message\" class=\"content-area\">\n        <div class=\"unsubscribe-page\">\n        <h2>{{message}} </h2>\n        <h3>You can subscribe back <a href=\"/notifications\" >here</a></h3>\n    </div>\n        <app-footer></app-footer>\n    </div>    \n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/use-cases/use-cases.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/use-cases/use-cases.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template *ngIf=\"cmbuService.usecaseTabActive\" [(clrIfActive)]=\"cmbuService.usecaseTabActive\">\n    <clr-tab-content>\n        <!-- Filter Section -->\n        <app-filter-textbox (keywordEvent)=\"filterUsecasesByKeyword($event)\"></app-filter-textbox>\n        <p *ngIf=\"usecasesList.length==0 && (useCaseKeyword != '')\" class=\"filter-msg\">No result found.</p>\n        <!-- Usecases  -->\n        <app-usecase-item [usecasesList] = 'usecasesList'></app-usecase-item>\n        <!-- Pagination -->\n        <div [ngClass]=\"usecasesList.length==0 ? 'hidden' : ''\" class=\"pagination\">\n            <div class=\"clr-row\">\n                <app-pagination-count (PageSize)=\"getUsecasesByPageSize($event)\"></app-pagination-count>\n                <app-pagination-button [totalNoOfPages] = \"totalNoOfPages\" (getProductsByPagination)=\"getPaginationAssets($event)\"></app-pagination-button>\n                <app-pagination-result [paginationResultOutPut]=\"paginationResultOutPut\"></app-pagination-result>\n            </div>\n        </div>\n    </clr-tab-content>\n</ng-template>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/usecase-item/usecase-item.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/usecase-item/usecase-item.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Assets  -->\n<div class=\"clr-row\">\n    <div class=\"content-area\">\n    </div>\n    <!-- Asset block -->\n    <div *ngFor='let usecaseDetails of usecasesList' class=\"clr-col-lg-12 clr-col-md-12 clr-col-12 libraryItem\">\n        <div\n            class=\"libraryCard {{ usecaseDetails.backgroundClass != null ? usecaseDetails.backgroundClass :'blueBg'  }}\">\n            <div class=\"clr-col-lg-5 clr-col-md-6 clr-col-12\">\n                <h2>{{ usecaseDetails.name }}</h2>\n                <p>{{ usecaseDetails.description | slice : 0 : 350 }}\n                    {{ usecaseDetails.description.length > 350 ? \"...\" : \"\"}}\n                </p>\n                <button class=\"btn btn-outline\" (click)=\"viewUseCase(usecaseDetails)\">Open</button>\n            </div>\n            <div class=\"libraryStrip\">\n                <clr-icon shape=\"display\"></clr-icon>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/usecase-view/usecase-view.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/usecase-view/usecase-view.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <app-breadcrumb></app-breadcrumb>\n    <div class=\"pageTitle\" *ngIf=\"usercaseDetails\">\n        <h1> {{ usercaseDetails.name }} </h1>\n        <p *ngIf=\"!showMore\"> {{ usercaseDetails.description | slice : 0 : 350 }}<span *ngIf=\"usercaseDetails.description.length > 350\">...</span> <span class=\"show-more\" *ngIf=\"usercaseDetails.description.length > 350\"><a (click)=\"showMore = true\">Show More</a></span> </p>\n        <p *ngIf=\"showMore\"> {{ usercaseDetails.description }}</p>\n    </div>\n\n    <!-- Filter Section -->\n    <app-filter-textbox (keywordEvent)=\"filterByKeyword($event)\"></app-filter-textbox>\n    <p *ngIf=\"productAssets.length==0 && (keyword != '')\" class=\"filter-msg\">No result found.</p>\n    <!-- Assets  -->\n\n\n    <!-- Asset block -->\n    <app-asset-item-box [productAssets]='productAssets'></app-asset-item-box>\n\n    <!--  Pagination -->\n    <div [ngClass]=\"productAssets.length==0 ? 'hidden' : ''\" class=\"pagination\">\n        <div class=\"clr-row\">\n            <app-pagination-count (PageSize)=\"getAssetsByPageSize($event)\"></app-pagination-count>\n            <app-pagination-button [totalNoOfPages]=\"totalNoOfPages\"\n                (getProductsByPagination)=\"getPaginationAssets($event)\"></app-pagination-button>\n            <app-pagination-result [paginationResultOutPut]=\"paginationResultOutPut\"></app-pagination-result>\n        </div>\n    </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/user-playlist/user-playlist.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/user-playlist/user-playlist.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<clr-tabs>\n  <clr-tab>\n    <button clrTabLink (click)=\"tab()\">Your Playlist</button>\n    <ng-template [(clrIfActive)]=\"yourPlaylistActive\">\n      <clr-tab-content>\n        <app-filter-textbox (keywordEvent)=\"filterByKeyword($event)\"></app-filter-textbox>\n        <p *ngIf=\"playlists.length==0 && (keyword != '')\" class=\"filter-msg\">No result found.</p>\n        <app-playlist-item [playlists]='playlists' [playlistType]='playlistType' (getPlaylists)=\"getPlaylists()\"></app-playlist-item>\n        <!-- Pagination -->\n        <div [ngClass]=\"playlists.length==0 ? 'hidden' : ''\" class=\"pagination\">\n            <div class=\"clr-row\">\n                <app-pagination-count (PageSize)=\"getPlaylistsByPageSize($event)\"></app-pagination-count>\n                <app-pagination-button [totalNoOfPages] = \"totalNoOfPages\" (getProductsByPagination)=\"getPaginationUserPlaylists($event)\"></app-pagination-button>\n                <app-pagination-result [paginationResultOutPut]=\"paginationResultOutPut\"></app-pagination-result>\n            </div>\n        </div>\n      </clr-tab-content>\n    </ng-template>\n  </clr-tab>            \n  <clr-tab>\n    <button clrTabLink (click)=\"tab()\">Saved Playlist</button>\n    <ng-template [(clrIfActive)]=\"savedPlaylistActive\">\n      <clr-tab-content>\n          <app-filter-textbox (keywordEvent)=\"filterByKeyword($event)\"></app-filter-textbox>\n          <p *ngIf=\"savedPlaylists.length==0 && (savedPlaylistsKeyword != '')\" class=\"filter-msg\">No result found.</p>\n        <app-playlist-item [playlists]='savedPlaylists'  [playlistType]='savedPlaylist' (getSavedPlaylists)=\"getSavedPlaylists()\"></app-playlist-item>\n        <!-- Pagination -->\n        <div [ngClass]=\"savedPlaylists.length==0 ? 'hidden' : ''\" class=\"pagination\">\n            <div class=\"clr-row\">\n                <app-pagination-count (PageSize)=\"getSavedPlaylistsByPageSize($event)\"></app-pagination-count>\n                <app-pagination-button [totalNoOfPages] = \"totalNoOfPages\" (getProductsByPagination)=\"getPaginationSavedPlaylists($event)\"></app-pagination-button>\n                <app-pagination-result [paginationResultOutPut]=\"paginationResultOutPut\"></app-pagination-result>\n            </div>\n        </div>\n      </clr-tab-content>\n    </ng-template>\n  </clr-tab>\n</clr-tabs> "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/whats-new/whats-new.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/whats-new/whats-new.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template [(clrIfActive)]=\"cmbuService.whatsNewTabActive\" >\n    <clr-tab-content >\n        <!-- Filter Section -->\n        <app-filter-textbox (keywordEvent)=\"filterByKeyword($event)\"></app-filter-textbox>\n        <p *ngIf=\"newAssets.length==0 && (keyword != '')\" class=\"filter-msg\">No result found.</p>\n        <!-- Assets  -->\n        <app-asset-item-box [productAssets] = 'newAssets'></app-asset-item-box>   \n        <!-- Pagination -->\n        <div [ngClass]=\"newAssets.length==0 ? 'hidden' : ''\"  class=\"pagination\">\n            <div class=\"clr-row\">\n                <app-pagination-count (PageSize)=\"getAssetsByPageSize($event)\"></app-pagination-count>\n                <app-pagination-button [totalNoOfPages] = \"totalNoOfPages\" (getProductsByPagination)=\"getPaginationAssets($event)\"></app-pagination-button>\n                <app-pagination-result [paginationResultOutPut]=\"paginationResultOutPut\"></app-pagination-result>\n            </div>\n        </div>\n    </clr-tab-content>\n</ng-template>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_product_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/product/product.component */ "./src/app/components/product/product.component.ts");
/* harmony import */ var _components_library_library_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/library/library.component */ "./src/app/components/library/library.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _components_use_cases_use_cases_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/use-cases/use-cases.component */ "./src/app/components/use-cases/use-cases.component.ts");
/* harmony import */ var _components_admin_playlist_admin_playlist_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/admin-playlist/admin-playlist.component */ "./src/app/components/admin-playlist/admin-playlist.component.ts");
/* harmony import */ var _components_whats_new_whats_new_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/whats-new/whats-new.component */ "./src/app/components/whats-new/whats-new.component.ts");
/* harmony import */ var _components_top_rated_top_rated_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/top-rated/top-rated.component */ "./src/app/components/top-rated/top-rated.component.ts");
/* harmony import */ var _components_recently_viewed_recently_viewed_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/recently-viewed/recently-viewed.component */ "./src/app/components/recently-viewed/recently-viewed.component.ts");
/* harmony import */ var _components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/favorites/favorites.component */ "./src/app/components/favorites/favorites.component.ts");
/* harmony import */ var _components_user_playlist_user_playlist_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/user-playlist/user-playlist.component */ "./src/app/components/user-playlist/user-playlist.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_faq_faq_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/faq/faq.component */ "./src/app/components/faq/faq.component.ts");
/* harmony import */ var _components_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/feedback/feedback.component */ "./src/app/components/feedback/feedback.component.ts");
/* harmony import */ var _components_manage_playlist_manage_playlist_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/manage-playlist/manage-playlist.component */ "./src/app/components/manage-playlist/manage-playlist.component.ts");
/* harmony import */ var _components_usecase_view_usecase_view_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/usecase-view/usecase-view.component */ "./src/app/components/usecase-view/usecase-view.component.ts");
/* harmony import */ var _components_asset_details_asset_details_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/asset-details/asset-details.component */ "./src/app/components/asset-details/asset-details.component.ts");
/* harmony import */ var _components_playlist_view_playlist_view_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/playlist-view/playlist-view.component */ "./src/app/components/playlist-view/playlist-view.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/notification/notification.component */ "./src/app/components/notification/notification.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _components_unsubscribe_unsubscribe_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/unsubscribe/unsubscribe.component */ "./src/app/components/unsubscribe/unsubscribe.component.ts");

























var routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], pathMatch: 'full' },
    { path: 'product/:product-type/:product-slug', component: _components_product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"] },
    { path: 'search/:categorySlug/:searchKeyword', component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"] },
    {
        path: 'library',
        component: _components_library_library_component__WEBPACK_IMPORTED_MODULE_4__["LibraryComponent"],
        children: [
            { path: 'usecases', component: _components_use_cases_use_cases_component__WEBPACK_IMPORTED_MODULE_7__["UseCasesComponent"] },
            { path: 'usecases/:usecaseslug', component: _components_usecase_view_usecase_view_component__WEBPACK_IMPORTED_MODULE_18__["UsecaseViewComponent"] },
            { path: 'playlists', component: _components_admin_playlist_admin_playlist_component__WEBPACK_IMPORTED_MODULE_8__["AdminPlaylistComponent"] },
            { path: 'playlists/:playlistSlug', component: _components_playlist_view_playlist_view_component__WEBPACK_IMPORTED_MODULE_20__["PlaylistViewComponent"] },
            { path: 'whatsnew', component: _components_whats_new_whats_new_component__WEBPACK_IMPORTED_MODULE_9__["WhatsNewComponent"] },
            { path: 'toprated', component: _components_top_rated_top_rated_component__WEBPACK_IMPORTED_MODULE_10__["TopRatedComponent"] },
            { path: 'recently-viewed', component: _components_recently_viewed_recently_viewed_component__WEBPACK_IMPORTED_MODULE_11__["RecentlyViewedComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]] },
            { path: 'favorites', component: _components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_12__["FavoritesComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]] },
            { path: 'user-playlists', component: _components_user_playlist_user_playlist_component__WEBPACK_IMPORTED_MODULE_13__["UserPlaylistComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]] },
            { path: 'user-playlists/:playlist-slug', component: _components_manage_playlist_manage_playlist_component__WEBPACK_IMPORTED_MODULE_17__["ManagePlaylistComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]] },
        ]
    },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"] },
    { path: 'login/:assetAction/:assetID', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"] },
    { path: 'faq', component: _components_faq_faq_component__WEBPACK_IMPORTED_MODULE_15__["FaqComponent"] },
    { path: 'feedback', component: _components_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_16__["FeedbackComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]] },
    { path: 'view/asset/:assetID', component: _components_asset_details_asset_details_component__WEBPACK_IMPORTED_MODULE_19__["AssetDetailsComponent"] },
    { path: 'notifications', component: _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_22__["NotificationComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]] },
    { path: 'unsubscribe', component: _components_unsubscribe_unsubscribe_component__WEBPACK_IMPORTED_MODULE_24__["UnsubscribeComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]] },
    { path: '**', component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_23__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_cmbu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/cmbu.service */ "./src/app/services/cmbu.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(authenticationService, cmbuService) {
        this.authenticationService = authenticationService;
        this.cmbuService = cmbuService;
        this.title = 'front-end';
    }
    AppComponent.prototype.ngOnInit = function () {
        // login is required for all pages
        this.authenticationService.loginRequired();
    };
    AppComponent.ctorParameters = function () { return [
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
        { type: _services_cmbu_service__WEBPACK_IMPORTED_MODULE_3__["CmbuService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _components_library_library_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/library/library.component */ "./src/app/components/library/library.component.ts");
/* harmony import */ var _components_product_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/product/product.component */ "./src/app/components/product/product.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/fesm5/clr-angular.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_search_assistant_banner_search_assistant_banner_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/search-assistant-banner/search-assistant-banner.component */ "./src/app/components/search-assistant-banner/search-assistant-banner.component.ts");
/* harmony import */ var _components_asset_item_box_asset_item_box_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/asset-item-box/asset-item-box.component */ "./src/app/components/asset-item-box/asset-item-box.component.ts");
/* harmony import */ var _components_discover_slider_discover_slider_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/discover-slider/discover-slider.component */ "./src/app/components/discover-slider/discover-slider.component.ts");
/* harmony import */ var _components_essential_slider_essential_slider_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/essential-slider/essential-slider.component */ "./src/app/components/essential-slider/essential-slider.component.ts");
/* harmony import */ var _components_asset_details_asset_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/asset-details/asset-details.component */ "./src/app/components/asset-details/asset-details.component.ts");
/* harmony import */ var _components_pagination_count_pagination_count_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/pagination-count/pagination-count.component */ "./src/app/components/pagination-count/pagination-count.component.ts");
/* harmony import */ var _components_pagination_button_pagination_button_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/pagination-button/pagination-button.component */ "./src/app/components/pagination-button/pagination-button.component.ts");
/* harmony import */ var _components_pagination_result_pagination_result_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/pagination-result/pagination-result.component */ "./src/app/components/pagination-result/pagination-result.component.ts");
/* harmony import */ var _components_filter_textbox_filter_textbox_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/filter-textbox/filter-textbox.component */ "./src/app/components/filter-textbox/filter-textbox.component.ts");
/* harmony import */ var _components_sort_by_sort_by_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/sort-by/sort-by.component */ "./src/app/components/sort-by/sort-by.component.ts");
/* harmony import */ var _components_add_to_playlist_add_to_playlist_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/add-to-playlist/add-to-playlist.component */ "./src/app/components/add-to-playlist/add-to-playlist.component.ts");
/* harmony import */ var _components_manage_playlist_manage_playlist_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/manage-playlist/manage-playlist.component */ "./src/app/components/manage-playlist/manage-playlist.component.ts");
/* harmony import */ var _components_create_playlist_create_playlist_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/create-playlist/create-playlist.component */ "./src/app/components/create-playlist/create-playlist.component.ts");
/* harmony import */ var _components_library_sidebar_library_sidebar_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/library-sidebar/library-sidebar.component */ "./src/app/components/library-sidebar/library-sidebar.component.ts");
/* harmony import */ var _components_product_sidebar_product_sidebar_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/product-sidebar/product-sidebar.component */ "./src/app/components/product-sidebar/product-sidebar.component.ts");
/* harmony import */ var _components_playlist_item_playlist_item_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/playlist-item/playlist-item.component */ "./src/app/components/playlist-item/playlist-item.component.ts");
/* harmony import */ var _components_usecase_item_usecase_item_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/usecase-item/usecase-item.component */ "./src/app/components/usecase-item/usecase-item.component.ts");
/* harmony import */ var _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/breadcrumb/breadcrumb.component */ "./src/app/components/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _components_use_cases_use_cases_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/use-cases/use-cases.component */ "./src/app/components/use-cases/use-cases.component.ts");
/* harmony import */ var _components_admin_playlist_admin_playlist_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/admin-playlist/admin-playlist.component */ "./src/app/components/admin-playlist/admin-playlist.component.ts");
/* harmony import */ var _components_whats_new_whats_new_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/whats-new/whats-new.component */ "./src/app/components/whats-new/whats-new.component.ts");
/* harmony import */ var _components_top_rated_top_rated_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/top-rated/top-rated.component */ "./src/app/components/top-rated/top-rated.component.ts");
/* harmony import */ var _components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/favorites/favorites.component */ "./src/app/components/favorites/favorites.component.ts");
/* harmony import */ var _components_user_playlist_user_playlist_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/user-playlist/user-playlist.component */ "./src/app/components/user-playlist/user-playlist.component.ts");
/* harmony import */ var _components_recently_viewed_recently_viewed_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/recently-viewed/recently-viewed.component */ "./src/app/components/recently-viewed/recently-viewed.component.ts");
/* harmony import */ var _components_inner_page_inner_page_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/inner-page/inner-page.component */ "./src/app/components/inner-page/inner-page.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ngx-owl-carousel-o */ "./node_modules/ngx-owl-carousel-o/fesm5/ngx-owl-carousel-o.js");
/* harmony import */ var _components_search_result_button_search_result_button_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/search-result-button/search-result-button.component */ "./src/app/components/search-result-button/search-result-button.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_faq_faq_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/faq/faq.component */ "./src/app/components/faq/faq.component.ts");
/* harmony import */ var _components_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/feedback/feedback.component */ "./src/app/components/feedback/feedback.component.ts");
/* harmony import */ var _components_usecase_view_usecase_view_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/usecase-view/usecase-view.component */ "./src/app/components/usecase-view/usecase-view.component.ts");
/* harmony import */ var _components_asset_view_asset_view_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./components/asset-view/asset-view.component */ "./src/app/components/asset-view/asset-view.component.ts");
/* harmony import */ var _components_playlist_view_playlist_view_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./components/playlist-view/playlist-view.component */ "./src/app/components/playlist-view/playlist-view.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./components/notification/notification.component */ "./src/app/components/notification/notification.component.ts");
/* harmony import */ var _directives_space_cutter_directive__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./directives/space-cutter.directive */ "./src/app/directives/space-cutter.directive.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _directives_numeric_only_directive__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./directives/numeric-only.directive */ "./src/app/directives/numeric-only.directive.ts");
/* harmony import */ var _directives_match_height_directive__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./directives/match-height.directive */ "./src/app/directives/match-height.directive.ts");
/* harmony import */ var _components_unsubscribe_unsubscribe_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./components/unsubscribe/unsubscribe.component */ "./src/app/components/unsubscribe/unsubscribe.component.ts");



























// import { RoductsSidebarComponent } from './components/roducts-sidebar/roducts-sidebar.component';




// import { SeCasesComponent } from './components/se-cases/se-cases.component';



// import { OpRatedComponent } from './components/op-rated/op-rated.component';




// import { ServicesComponent } from './components/services/services.component';





// for cookie service














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _components_search_search_component__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"],
                _components_library_library_component__WEBPACK_IMPORTED_MODULE_7__["LibraryComponent"],
                _components_product_product_component__WEBPACK_IMPORTED_MODULE_8__["ProductComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                _components_search_assistant_banner_search_assistant_banner_component__WEBPACK_IMPORTED_MODULE_13__["SearchAssistantBannerComponent"],
                _components_asset_item_box_asset_item_box_component__WEBPACK_IMPORTED_MODULE_14__["AssetItemBoxComponent"],
                _components_discover_slider_discover_slider_component__WEBPACK_IMPORTED_MODULE_15__["DiscoverSliderComponent"],
                _components_essential_slider_essential_slider_component__WEBPACK_IMPORTED_MODULE_16__["EssentialSliderComponent"],
                _components_asset_details_asset_details_component__WEBPACK_IMPORTED_MODULE_17__["AssetDetailsComponent"],
                _components_pagination_count_pagination_count_component__WEBPACK_IMPORTED_MODULE_18__["PaginationCountComponent"],
                _components_pagination_button_pagination_button_component__WEBPACK_IMPORTED_MODULE_19__["PaginationButtonComponent"],
                _components_pagination_result_pagination_result_component__WEBPACK_IMPORTED_MODULE_20__["PaginationResultComponent"],
                _components_filter_textbox_filter_textbox_component__WEBPACK_IMPORTED_MODULE_21__["FilterTextboxComponent"],
                _components_sort_by_sort_by_component__WEBPACK_IMPORTED_MODULE_22__["SortByComponent"],
                _components_add_to_playlist_add_to_playlist_component__WEBPACK_IMPORTED_MODULE_23__["AddToPlaylistComponent"],
                _components_manage_playlist_manage_playlist_component__WEBPACK_IMPORTED_MODULE_24__["ManagePlaylistComponent"],
                _components_create_playlist_create_playlist_component__WEBPACK_IMPORTED_MODULE_25__["CreatePlaylistComponent"],
                _components_library_sidebar_library_sidebar_component__WEBPACK_IMPORTED_MODULE_26__["LibrarySidebarComponent"],
                // RoductsSidebarComponent,
                _components_product_sidebar_product_sidebar_component__WEBPACK_IMPORTED_MODULE_27__["ProductSidebarComponent"],
                _components_playlist_item_playlist_item_component__WEBPACK_IMPORTED_MODULE_28__["PlaylistItemComponent"],
                _components_usecase_item_usecase_item_component__WEBPACK_IMPORTED_MODULE_29__["UsecaseItemComponent"],
                _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_30__["BreadcrumbComponent"],
                // SeCasesComponent,
                _components_use_cases_use_cases_component__WEBPACK_IMPORTED_MODULE_31__["UseCasesComponent"],
                _components_admin_playlist_admin_playlist_component__WEBPACK_IMPORTED_MODULE_32__["AdminPlaylistComponent"],
                _components_whats_new_whats_new_component__WEBPACK_IMPORTED_MODULE_33__["WhatsNewComponent"],
                // OpRatedComponent,
                _components_top_rated_top_rated_component__WEBPACK_IMPORTED_MODULE_34__["TopRatedComponent"],
                _components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_35__["FavoritesComponent"],
                _components_user_playlist_user_playlist_component__WEBPACK_IMPORTED_MODULE_36__["UserPlaylistComponent"],
                _components_recently_viewed_recently_viewed_component__WEBPACK_IMPORTED_MODULE_37__["RecentlyViewedComponent"],
                // ServicesComponent,
                _components_inner_page_inner_page_component__WEBPACK_IMPORTED_MODULE_38__["InnerPageComponent"],
                _components_search_result_button_search_result_button_component__WEBPACK_IMPORTED_MODULE_41__["SearchResultButtonComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_42__["LoginComponent"],
                _components_faq_faq_component__WEBPACK_IMPORTED_MODULE_45__["FaqComponent"],
                _components_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_46__["FeedbackComponent"],
                _components_usecase_view_usecase_view_component__WEBPACK_IMPORTED_MODULE_47__["UsecaseViewComponent"],
                _components_asset_view_asset_view_component__WEBPACK_IMPORTED_MODULE_48__["AssetViewComponent"],
                _components_playlist_view_playlist_view_component__WEBPACK_IMPORTED_MODULE_49__["PlaylistViewComponent"],
                _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_51__["NotificationComponent"],
                _directives_space_cutter_directive__WEBPACK_IMPORTED_MODULE_52__["SpaceCutterDirective"],
                _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_53__["PageNotFoundComponent"],
                _directives_numeric_only_directive__WEBPACK_IMPORTED_MODULE_54__["NumericOnlyDirective"],
                _directives_match_height_directive__WEBPACK_IMPORTED_MODULE_55__["MatchHeightDirective"],
                _components_unsubscribe_unsubscribe_component__WEBPACK_IMPORTED_MODULE_56__["UnsubscribeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_11__["ClarityModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_39__["HttpClientModule"],
                ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_40__["CarouselModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_44__["FormsModule"]
            ],
            providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_43__["CookieService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_50__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/add-to-playlist/add-to-playlist.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/add-to-playlist/add-to-playlist.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".addToPlaylistPopup .modal-body {\n    padding: 2rem .125rem 0;\n}\n\n.addToPlaylistPopup .listOfExistingPlaylists {\n    background-color: #F7F7F7;\n    padding: 1rem;\n    margin-top: 2rem;\n}\n\n.addToPlaylistPopup .listOfExistingPlaylists .listOfPlaylists div {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    box-shadow: 0 0.125rem 0 0 #d7d7d7;\n    border-radius: .125rem;\n    border: 1px solid #d7d7d7;\n    padding: 0.25rem;\n    background-color: #ffffff;\n    margin-top: 1rem;\n}\n\n.addToPlaylistPopup .listOfExistingPlaylists .listOfPlaylists div p, .addToPlaylistPopup .listOfExistingPlaylists .listOfPlaylists div button {\n    margin: 0;\n}\n\n.main-container .content-container .content-area {\n    padding-bottom: 0;\n}\n\n.addToPlaylistPopup input {\n    width: 100%;\n    margin-right: 2%;\n    margin-top: 1rem;\n}\n\n.addToPlaylistPopup textarea{\n    margin-top: 1rem;\n    width: 100%;\n    max-width: 100%;\n}\n\n.addToPlaylistPopup button{\n    margin-top: 0.8rem;\n}\n\n.clr-error {\n    color: #c92100;\n    font-size: .458333rem;\n    margin: 0;\n }\n\n.listOfExistingPlaylists button[disabled]{\n     background-color: var(--clr-btn-success-bg-color,#3c8500);\n     color: #fff;\n     opacity: 1;\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtdG8tcGxheWxpc3QvYWRkLXRvLXBsYXlsaXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIseUJBQThCO1lBQTlCLDhCQUE4QjtJQUM5QixrQ0FBa0M7SUFDbEMsc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFHQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtJQUNyQixTQUFTO0NBQ1o7O0FBQ0E7S0FDSSx5REFBeUQ7S0FDekQsV0FBVztLQUNYLFVBQVU7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLXRvLXBsYXlsaXN0L2FkZC10by1wbGF5bGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZFRvUGxheWxpc3RQb3B1cCAubW9kYWwtYm9keSB7XG4gICAgcGFkZGluZzogMnJlbSAuMTI1cmVtIDA7XG59XG5cbi5hZGRUb1BsYXlsaXN0UG9wdXAgLmxpc3RPZkV4aXN0aW5nUGxheWxpc3RzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGN0Y3O1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxuLmFkZFRvUGxheWxpc3RQb3B1cCAubGlzdE9mRXhpc3RpbmdQbGF5bGlzdHMgLmxpc3RPZlBsYXlsaXN0cyBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYm94LXNoYWRvdzogMCAwLjEyNXJlbSAwIDAgI2Q3ZDdkNztcbiAgICBib3JkZXItcmFkaXVzOiAuMTI1cmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkN2Q3ZDc7XG4gICAgcGFkZGluZzogMC4yNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi5hZGRUb1BsYXlsaXN0UG9wdXAgLmxpc3RPZkV4aXN0aW5nUGxheWxpc3RzIC5saXN0T2ZQbGF5bGlzdHMgZGl2IHAsIC5hZGRUb1BsYXlsaXN0UG9wdXAgLmxpc3RPZkV4aXN0aW5nUGxheWxpc3RzIC5saXN0T2ZQbGF5bGlzdHMgZGl2IGJ1dHRvbiB7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5cbi5tYWluLWNvbnRhaW5lciAuY29udGVudC1jb250YWluZXIgLmNvbnRlbnQtYXJlYSB7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi5hZGRUb1BsYXlsaXN0UG9wdXAgaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1yaWdodDogMiU7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuLmFkZFRvUGxheWxpc3RQb3B1cCB0ZXh0YXJlYXtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbn1cblxuLmFkZFRvUGxheWxpc3RQb3B1cCBidXR0b257XG4gICAgbWFyZ2luLXRvcDogMC44cmVtO1xufVxuXG4uY2xyLWVycm9yIHtcbiAgICBjb2xvcjogI2M5MjEwMDtcbiAgICBmb250LXNpemU6IC40NTgzMzNyZW07XG4gICAgbWFyZ2luOiAwO1xuIH1cbiAubGlzdE9mRXhpc3RpbmdQbGF5bGlzdHMgYnV0dG9uW2Rpc2FibGVkXXtcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWJ0bi1zdWNjZXNzLWJnLWNvbG9yLCMzYzg1MDApO1xuICAgICBjb2xvcjogI2ZmZjtcbiAgICAgb3BhY2l0eTogMTtcbiB9Il19 */"

/***/ }),

/***/ "./src/app/components/add-to-playlist/add-to-playlist.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/add-to-playlist/add-to-playlist.component.ts ***!
  \*************************************************************************/
/*! exports provided: AddToPlaylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddToPlaylistComponent", function() { return AddToPlaylistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_cmbu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cmbu.service */ "./src/app/services/cmbu.service.ts");



var AddToPlaylistComponent = /** @class */ (function () {
    function AddToPlaylistComponent(cmbuService) {
        this.cmbuService = cmbuService;
        this.modalStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.playListName = '';
        this.playListDescription = '';
        this.userPlaylists = [];
        this.isPlaylistToDisplay = false;
        this.isError = false;
        this.errorMsg = '';
    }
    AddToPlaylistComponent.prototype.ngOnInit = function () {
        this.getPlayLists();
    };
    AddToPlaylistComponent.prototype.getPlayLists = function () {
        var _this = this;
        this.cmbuService.getPlayLists().subscribe(function (data) {
            _this.userPlaylists = data.data;
            if (_this.userPlaylists.length == 0) {
                _this.isPlaylistToDisplay = false;
            }
            else {
                _this.isPlaylistToDisplay = true;
            }
        });
    };
    AddToPlaylistComponent.prototype.changeModalStatus = function () {
        this.addToPlaylistPopup = false;
        this.playListName = '';
        this.playListDescription = '';
        this.modalStatus.emit(this.addToPlaylistPopup);
    };
    AddToPlaylistComponent.prototype.onSubmit = function () {
        var playListName = this.playListName;
        var playListDescription = this.playListDescription;
        if (playListName.trim() == '') {
            this.isError = true;
            this.errorMsg = 'Please provide a playlist name';
        }
        else if (playListDescription == '') {
            this.isError = true;
            this.errorMsg = 'Please provide description';
        }
        else {
            this.createPlayList(playListName.trim());
        }
    };
    AddToPlaylistComponent.prototype.createPlayList = function (playListName) {
        var _this = this;
        this.errorMsg = '';
        this.isError = false;
        this.playListName = playListName;
        this.cmbuService.addToPlayList(this.playListName, this.playListDescription).subscribe(function (data) {
            if (data.status) {
                _this.playListName = '';
                _this.playListDescription = '';
                _this.getPlayLists();
                _this.addToPlayList(data.slug);
                _this.cmbuService.getLibrarySidebarMenuCount().subscribe(function (data) {
                    _this.cmbuService.librarySidebarFavoriteCount = data.favorite_count;
                    _this.cmbuService.librarySidebarPlaylistCount = data.playlist_count;
                });
            }
            else {
                _this.isError = true;
                _this.errorMsg = data.message;
            }
        });
        return false;
    };
    AddToPlaylistComponent.prototype.addToPlayList = function (playListName) {
        var _this = this;
        this.playListName = playListName;
        this.cmbuService.addAssetsToPlayList(this.playListName, this.assetToBeAdded).subscribe(function (data) {
            // if(data.status){
            _this.playListName = '';
            _this.playListDescription = '';
            _this.addToPlaylistPopup = false;
            var self = _this;
            _this.userPlaylists.filter(function (x) {
                if (x.slug == playListName) {
                    console.log('here');
                    x.assets.push(self.assetToBeAdded);
                }
            });
            // }
        });
        return false;
    };
    AddToPlaylistComponent.ctorParameters = function () { return [
        { type: src_app_services_cmbu_service__WEBPACK_IMPORTED_MODULE_2__["CmbuService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AddToPlaylistComponent.prototype, "addToPlaylistPopup", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AddToPlaylistComponent.prototype, "assetToBeAdded", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], AddToPlaylistComponent.prototype, "modalStatus", void 0);
    AddToPlaylistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-to-playlist',
            template: __webpack_require__(/*! raw-loader!./add-to-playlist.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/add-to-playlist/add-to-playlist.component.html"),
            styles: [__webpack_require__(/*! ./add-to-playlist.component.css */ "./src/app/components/add-to-playlist/add-to-playlist.component.css")]
        })
    ], AddToPlaylistComponent);
    return AddToPlaylistComponent;
}());



/***/ }),

/***/ "./src/app/components/admin-playlist/admin-playlist.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/admin-playlist/admin-playlist.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4tcGxheWxpc3QvYWRtaW4tcGxheWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/admin-playlist/admin-playlist.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/admin-playlist/admin-playlist.component.ts ***!
  \***********************************************************************/
/*! exports provided: AdminPlaylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPlaylistComponent", function() { return AdminPlaylistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_playlists_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/playlists.service */ "./src/app/services/playlists.service.ts");
/* harmony import */ var src_app_services_paginationservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/paginationservice.service */ "./src/app/services/paginationservice.service.ts");
/* harmony import */ var src_app_services_cmbu_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/cmbu.service */ "./src/app/services/cmbu.service.ts");






var AdminPlaylistComponent = /** @class */ (function () {
    function AdminPlaylistComponent(router, playlistsService, paginationService, cmbuService) {
        this.router = router;
        this.playlistsService = playlistsService;
        this.paginationService = paginationService;
        this.cmbuService = cmbuService;
        this.playlists = [];
        this.keyword = '';
        this.playlistType = 'admin';
        this.pageSize = 10;
        this.currentPage = 1;
        this.totalNoOfPages = 0;
        this.paginationResultOutPut = '';
    }
    AdminPlaylistComponent.prototype.ngOnInit = function () {
        this.getPlaylists();
    };
    AdminPlaylistComponent.prototype.getPlaylists = function () {
        var _this = this;
        this.playlistsService.getPlaylists(this.keyword, 'admin', this.currentPage, this.pageSize).subscribe(function (data) {
            _this.playlists = data.data;
            _this.paginationService.displayPaginationResult(data.pagination);
        });
    };
    AdminPlaylistComponent.prototype.filterUsecasesByKeyword = function (keyword) {
        this.keyword = keyword;
        this.getPlaylists();
    };
    AdminPlaylistComponent.prototype.getPaginationAssets = function (currentPage) {
        this.currentPage = currentPage;
        this.getPlaylists();
    };
    AdminPlaylistComponent.prototype.getPlaylistsByPageSize = function (pageSize) {
        if (pageSize != this.pageSize) {
            // this.isAssetPerPageChanged = true;
            this.currentPage = 1;
            // this.direction = 1;
        }
        this.pageSize = pageSize;
        this.getPlaylists();
    };
    AdminPlaylistComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_playlists_service__WEBPACK_IMPORTED_MODULE_3__["PlaylistsService"] },
        { type: src_app_services_paginationservice_service__WEBPACK_IMPORTED_MODULE_4__["PaginationserviceService"] },
        { type: src_app_services_cmbu_service__WEBPACK_IMPORTED_MODULE_5__["CmbuService"] }
    ]; };
    AdminPlaylistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-playlist',
            template: __webpack_require__(/*! raw-loader!./admin-playlist.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/admin-playlist/admin-playlist.component.html"),
            styles: [__webpack_require__(/*! ./admin-playlist.component.css */ "./src/app/components/admin-playlist/admin-playlist.component.css")]
        })
    ], AdminPlaylistComponent);
    return AdminPlaylistComponent;
}());



/***/ }),

/***/ "./src/app/components/asset-details/asset-details.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/asset-details/asset-details.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-container .content-container .content-area {\n    padding: 0;\n    background-color: rgba(0, 0, 0, 0.4);\n    overflow-x: hidden;\n}\n\n.content-area.assetViewPageContainer {\n    padding: 0;\n}\n\n.viewerContent {\n    background-color: #ffffff;\n    padding: 3rem;\n    position: relative;\n}\n\n.viewerContent video {\n    width: 100%;\n    height: auto;\n    border: 1px solid #333;\n}\n\n.popularityOfAsset {\n    margin: 1rem 0;\n    text-align: right;\n}\n\n.popularityOfAsset clr-icon {\n    cursor: pointer;\n}\n\n.backButton {\n    position: absolute;\n    left: 1.5rem;\n    top: 1.5rem;\n    cursor: pointer;\n}\n\niframe {\n    width: 100%;\n    height: 41.03vw;\n}\n\n.main-container {\n    height: auto;\n}\n\n.content-area {\n    overflow-x: hidden;\n}\n\n.is-faved {\n    color: #991700 !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hc3NldC1kZXRhaWxzL2Fzc2V0LWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixvQ0FBb0M7SUFDcEMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFDQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXNzZXQtZGV0YWlscy9hc3NldC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250YWluZXIgLmNvbnRlbnQtY29udGFpbmVyIC5jb250ZW50LWFyZWEge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuLmNvbnRlbnQtYXJlYS5hc3NldFZpZXdQYWdlQ29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4udmlld2VyQ29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBwYWRkaW5nOiAzcmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnZpZXdlckNvbnRlbnQgdmlkZW8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xufVxuXG4ucG9wdWxhcml0eU9mQXNzZXQge1xuICAgIG1hcmdpbjogMXJlbSAwO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ucG9wdWxhcml0eU9mQXNzZXQgY2xyLWljb24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJhY2tCdXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxLjVyZW07XG4gICAgdG9wOiAxLjVyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pZnJhbWUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDEuMDN2dztcbn1cblxuLm1haW4tY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG4uY29udGVudC1hcmVhIHtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG4uaXMtZmF2ZWQge1xuICAgIGNvbG9yOiAjOTkxNzAwICFpbXBvcnRhbnQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/asset-details/asset-details.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/asset-details/asset-details.component.ts ***!
  \*********************************************************************/
/*! exports provided: AssetDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetDetailsComponent", function() { return AssetDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_cmbu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cmbu.service */ "./src/app/services/cmbu.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







var AssetDetailsComponent = /** @class */ (function () {
    function AssetDetailsComponent(cmbuService, route, sanitizer, authenticationService, router, _location) {
        this.cmbuService = cmbuService;
        this.route = route;
        this.sanitizer = sanitizer;
        this.authenticationService = authenticationService;
        this.router = router;
        this._location = _location;
        this.assetDetails = '';
        this.assetTitle = '';
        this.assetDescription = '';
        this.assetType = '';
        this.isLike = false;
        this.isFavourite = '';
        this.likePercentage = '';
        this.isDislike = false;
        this.dislikePercentage = '';
        this.isAddToPlayList = false;
        this.assetToBeAdded = '';
        this.assetID = '';
        this.AssetID = '';
        this.howToDemo = '';
        this.howToDemoType = '';
        this.howToDemoLink = '';
    }
    AssetDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (data) {
            var assetID = data.get('assetID');
            _this.cmbuService.getSingleAssetDetails(assetID).subscribe(function (data) {
                if (!data.data[0]) {
                    _this.router.navigate(['/**'], { skipLocationChange: true });
                    return false;
                }
                _this.AssetID = data.data[0].assetId;
                _this.assetType = data.data[0].assetType.name;
                _this.assetTitle = data.data[0].assetTitle;
                _this.assetDescription = data.data[0].assetDescription;
                _this.isDislike = data.data[0].useractions.isDislike;
                _this.isLike = data.data[0].useractions.isLike;
                _this.likePercentage = data.data[0].useractions.likePercentage;
                _this.isFavourite = data.data[0].useractions.isFavourite;
                _this.dislikePercentage = data.data[0].useractions.dislikePercentage;
                //this.iframeLink = data.data[0].assetLink;
                _this.iframeLink = _this.sanitizer.bypassSecurityTrustResourceUrl(data.data[0].assetLink);
                _this.howToDemo = data.data[0].howToDemo;
                _this.howToDemoType = data.data[0].howToDemoType;
                _this.howToDemoLink = _this.sanitizer.bypassSecurityTrustResourceUrl(data.data[0].howToDemoLink);
                if (_this.authenticationService.isLoggedIn()) {
                    _this.cmbuService.addAssetsToRecentlyViewed(assetID).subscribe(function (data) {
                    });
                }
            });
        });
    };
    AssetDetailsComponent.prototype.likeAsset = function (assetID, event, assetTitle) {
        var _this = this;
        var isUserLoggedIn = this.getUserAccessToken();
        if (isUserLoggedIn != '') {
            this.cmbuService.likeAssets(assetID).subscribe(function (data) {
                _this.changeLikeAndDisLikeStatus(data);
                if (data.useractions.isLike == 1) {
                    _paq.push(['trackEvent', 'Asset like', '"' + assetTitle + '"is liked', 'like']);
                }
            });
        }
        else {
            this.router.navigate(['login', 'like', assetID]);
        }
    };
    AssetDetailsComponent.prototype.getUserAccessToken = function () {
        return this.authenticationService.getUserAccessToken();
    };
    AssetDetailsComponent.prototype.addToPlayList = function (assetID) {
        var isUserLoggedIn = this.getUserAccessToken();
        if (isUserLoggedIn != '') {
            this.isAddToPlayList = true;
            this.assetToBeAdded = assetID;
        }
        else {
            this.router.navigate(['login']);
        }
    };
    AssetDetailsComponent.prototype.addToFavourite = function (assetID, event) {
        var _this = this;
        var isUserLoggedIn = this.getUserAccessToken();
        if (isUserLoggedIn != '') {
            this.cmbuService.addToFavourite(assetID).subscribe(function (data) {
                _this.addRemoveSolidClass(event);
            });
        }
        else {
            this.router.navigate(['login', 'favourite', assetID]);
        }
    };
    AssetDetailsComponent.prototype.disLikeAssets = function (assetID, event, assetTitle) {
        var _this = this;
        var isUserLoggedIn = this.getUserAccessToken();
        if (isUserLoggedIn != '') {
            this.cmbuService.disLikeAssets(assetID).subscribe(function (data) {
                _this.changeLikeAndDisLikeStatus(data);
                if (data.useractions.isDisLike == 1) {
                    _paq.push(['trackEvent', 'Asset dislike', '"' + assetTitle + '"is disliked', 'dislike']);
                }
            });
        }
        else {
            this.router.navigate(['login', 'favourite', assetID]);
        }
    };
    AssetDetailsComponent.prototype.addRemoveSolidClass = function (event) {
        if (event.target.classList.contains('is-solid')) {
            event.target.classList.remove('is-solid');
        }
        else {
            event.target.classList.add('is-solid');
        }
    };
    AssetDetailsComponent.prototype.goBack = function () {
        this._location.back();
    };
    AssetDetailsComponent.prototype.changeLikeAndDisLikeStatus = function (data) {
        this.isDislike = data.useractions.isDisLike;
        this.isLike = data.useractions.isLike;
        this.dislikePercentage = data.useractions.dislikePercentage;
        this.likePercentage = data.useractions.likePercentage;
    };
    AssetDetailsComponent.ctorParameters = function () { return [
        { type: src_app_services_cmbu_service__WEBPACK_IMPORTED_MODULE_2__["CmbuService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
        { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] }
    ]; };
    AssetDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-asset-details',
            template: __webpack_require__(/*! raw-loader!./asset-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/asset-details/asset-details.component.html"),
            host: { '[class.content-container]': 'true' },
            styles: [__webpack_require__(/*! ./asset-details.component.css */ "./src/app/components/asset-details/asset-details.component.css")]
        })
    ], AssetDetailsComponent);
    return AssetDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/asset-item-box/asset-item-box.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/asset-item-box/asset-item-box.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-header {\n    font-size: 0.6rem;\n    text-transform: uppercase;\n    color: #737373;\n}\n\n.card-header span {\n    float: right;\n    position: absolute;\n    right: 0.75rem;\n    top: 0.75rem;\n}\n\n.card-footer .btn-link {\n    color: #adbac4;\n    outline: none;\n}\n\n/* .relatedAssetDescripton, .hide{\n    display: none;\n}\n.relatedAssetDescripton.showNow{\n    display: inline;\n} */\n\n.assetDescriptionBox {\n    max-height: 150px;\n    /* overflow: scroll; */\n    display: block;\n    overflow: hidden;\n    margin-bottom: 4px;\n}\n\n.showMore {\n    overflow: visible;\n    max-height: 100% !important;\n}\n\n.card-block .card-text {\n    max-height: 190px;\n    overflow-y: auto;\n}\n\n.hideBtn {\n    display: none;\n}\n\n@media (max-width: 1366px) {\n    .new-card.assets-cards .card-header {\n        font-size: 12px;\n    }\n}\n\n@media (max-width: 1280px) {\n    .assetDescriptionBox {\n        max-height: 142px;\n    }\n    .new-card.assets-cards .card-header {\n        font-size: 11.5px;\n    }\n    .card-header,\n    .card-header span {\n        top: 11.25px !important;\n    }\n    .card-header clr-icon {\n        width: 25px !important;\n        height: 25px !important;\n    }\n    .related-assets p {\n        width: 18px !important;\n        height: 18px !important;\n    }\n}\n\n@media (max-width: 1024px) {\n    .new-card.assets-cards .card-header {\n        font-size: 11px;\n    }\n    .card-header span {\n        top: 11px;\n    }\n    .new-card.assets-cards .card-footer .btn {\n        font-size: 0.325rem;\n    }\n    .new-card.assets-cards .card-footer .btn.btn-link clr-icon {\n        width: 18px !important;\n        height: 18px !important;\n    }\n}\n\n@media (max-width: 768px) {\n    .card-header span {\n        position: static;\n        float: none;\n        margin-top: 10px;\n    }\n    .card-header .relatedIcon span {\n        margin-top: 0;\n    }\n}\n\n@media (max-width: 767px) {\n    .clr-row .clr-col-md-6:nth-child(even) .related-assets-container {\n        right: 0;\n    }\n    .related-assets-container {\n        height: 86%;\n    }\n}\n\n.clr-row .clr-col-lg-4:nth-child(3n + 3) .related-assets-container {\n    right: 100%;\n    left: auto;\n}\n\n.is-faved {\n    color: #991700 !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hc3NldC1pdGVtLWJveC9hc3NldC1pdGVtLWJveC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0FBQ2pCOztBQUVBOzs7OztHQUtHOztBQUNIO0lBQ0ksaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQiwyQkFBMkI7QUFDL0I7O0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksYUFBYTtBQUNqQjs7QUFDQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtBQUNKOztBQUNBO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBOztRQUVJLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksc0JBQXNCO1FBQ3RCLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksc0JBQXNCO1FBQ3RCLHVCQUF1QjtJQUMzQjtBQUNKOztBQUNBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxTQUFTO0lBQ2I7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksc0JBQXNCO1FBQ3RCLHVCQUF1QjtJQUMzQjtBQUNKOztBQUNBO0lBQ0k7UUFDSSxnQkFBZ0I7UUFDaEIsV0FBVztRQUNYLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtBQUNKOztBQUNBO0lBQ0k7UUFDSSxRQUFRO0lBQ1o7SUFDQTtRQUNJLFdBQVc7SUFDZjtBQUNKOztBQUVBO0lBQ0ksV0FBVztJQUNYLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXNzZXQtaXRlbS1ib3gvYXNzZXQtaXRlbS1ib3guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWhlYWRlciB7XG4gICAgZm9udC1zaXplOiAwLjZyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogIzczNzM3Mztcbn1cblxuLmNhcmQtaGVhZGVyIHNwYW4ge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDAuNzVyZW07XG4gICAgdG9wOiAwLjc1cmVtO1xufVxuXG4uY2FyZC1mb290ZXIgLmJ0bi1saW5rIHtcbiAgICBjb2xvcjogI2FkYmFjNDtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4vKiAucmVsYXRlZEFzc2V0RGVzY3JpcHRvbiwgLmhpZGV7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbi5yZWxhdGVkQXNzZXREZXNjcmlwdG9uLnNob3dOb3d7XG4gICAgZGlzcGxheTogaW5saW5lO1xufSAqL1xuLmFzc2V0RGVzY3JpcHRpb25Cb3gge1xuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xuICAgIC8qIG92ZXJmbG93OiBzY3JvbGw7ICovXG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG4uc2hvd01vcmUge1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIG1heC1oZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbn1cbi5jYXJkLWJsb2NrIC5jYXJkLXRleHQge1xuICAgIG1heC1oZWlnaHQ6IDE5MHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG59XG4uaGlkZUJ0biB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMzY2cHgpIHtcbiAgICAubmV3LWNhcmQuYXNzZXRzLWNhcmRzIC5jYXJkLWhlYWRlciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTI4MHB4KSB7XG4gICAgLmFzc2V0RGVzY3JpcHRpb25Cb3gge1xuICAgICAgICBtYXgtaGVpZ2h0OiAxNDJweDtcbiAgICB9XG4gICAgLm5ldy1jYXJkLmFzc2V0cy1jYXJkcyAuY2FyZC1oZWFkZXIge1xuICAgICAgICBmb250LXNpemU6IDExLjVweDtcbiAgICB9XG4gICAgLmNhcmQtaGVhZGVyLFxuICAgIC5jYXJkLWhlYWRlciBzcGFuIHtcbiAgICAgICAgdG9wOiAxMS4yNXB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5jYXJkLWhlYWRlciBjbHItaWNvbiB7XG4gICAgICAgIHdpZHRoOiAyNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDogMjVweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAucmVsYXRlZC1hc3NldHMgcCB7XG4gICAgICAgIHdpZHRoOiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDogMThweCAhaW1wb3J0YW50O1xuICAgIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAubmV3LWNhcmQuYXNzZXRzLWNhcmRzIC5jYXJkLWhlYWRlciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICB9XG4gICAgLmNhcmQtaGVhZGVyIHNwYW4ge1xuICAgICAgICB0b3A6IDExcHg7XG4gICAgfVxuICAgIC5uZXctY2FyZC5hc3NldHMtY2FyZHMgLmNhcmQtZm9vdGVyIC5idG4ge1xuICAgICAgICBmb250LXNpemU6IDAuMzI1cmVtO1xuICAgIH1cbiAgICAubmV3LWNhcmQuYXNzZXRzLWNhcmRzIC5jYXJkLWZvb3RlciAuYnRuLmJ0bi1saW5rIGNsci1pY29uIHtcbiAgICAgICAgd2lkdGg6IDE4cHggIWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLmNhcmQtaGVhZGVyIHNwYW4ge1xuICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgICAgICBmbG9hdDogbm9uZTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG4gICAgLmNhcmQtaGVhZGVyIC5yZWxhdGVkSWNvbiBzcGFuIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAuY2xyLXJvdyAuY2xyLWNvbC1tZC02Om50aC1jaGlsZChldmVuKSAucmVsYXRlZC1hc3NldHMtY29udGFpbmVyIHtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgfVxuICAgIC5yZWxhdGVkLWFzc2V0cy1jb250YWluZXIge1xuICAgICAgICBoZWlnaHQ6IDg2JTtcbiAgICB9XG59XG5cbi5jbHItcm93IC5jbHItY29sLWxnLTQ6bnRoLWNoaWxkKDNuICsgMykgLnJlbGF0ZWQtYXNzZXRzLWNvbnRhaW5lciB7XG4gICAgcmlnaHQ6IDEwMCU7XG4gICAgbGVmdDogYXV0bztcbn1cblxuLmlzLWZhdmVkIHtcbiAgICBjb2xvcjogIzk5MTcwMCAhaW1wb3J0YW50O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/asset-item-box/asset-item-box.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/asset-item-box/asset-item-box.component.ts ***!
  \***********************************************************************/
/*! exports provided: AssetItemBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetItemBoxComponent", function() { return AssetItemBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_cmbu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/cmbu.service */ "./src/app/services/cmbu.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var AssetItemBoxComponent = /** @class */ (function () {
    function AssetItemBoxComponent(authenticationService, cmbuService, router, renderer, elRef) {
        var _this = this;
        this.authenticationService = authenticationService;
        this.cmbuService = cmbuService;
        this.router = router;
        this.renderer = renderer;
        this.elRef = elRef;
        this.getFavoriteAssets = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isAddToPlayList = false;
        this.assetToBeAdded = '';
        this.relatedAssets = [];
        this.serverAppBaseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverAppBaseUrl;
        this.currentAssetsId = 0;
        this.showRelatedAssets = false;
        this.show = false;
        this.status = false;
        this.text = 'Show More';
        this.showDescription = false;
        this.buttonText = 'Show More';
        this.renderer.listen('window', 'click', function (e) {
            var relatedAssetElement = _this.elRef.nativeElement.querySelectorAll('.card .related-assets');
            var tempShowRelatedAssets = false;
            for (var i = 0; i < relatedAssetElement.length; i++) {
                if (relatedAssetElement[i].contains(e.target)) {
                    tempShowRelatedAssets = true;
                    break;
                }
            }
            var relatedAssetContainerElement = _this.elRef.nativeElement.querySelectorAll('.card .related-assets-container');
            for (var i = 0; i < relatedAssetContainerElement.length; i++) {
                if (relatedAssetContainerElement[i].contains(e.target)) {
                    tempShowRelatedAssets = true;
                    break;
                }
            }
            if (!tempShowRelatedAssets) {
                _this.showRelatedAssets = false;
                _this.currentAssetsId = 0;
            }
        });
    }
    AssetItemBoxComponent.prototype.ngOnInit = function () {
    };
    AssetItemBoxComponent.prototype.likeAsset = function (assetID) {
        var isUserLoggedIn = this.getUserAccessToken();
        if (isUserLoggedIn != '') {
            this.cmbuService.likeAssets(assetID).subscribe(function (data) {
            });
        }
        else {
            this.router.navigate(['login', 'like', assetID]);
        }
    };
    AssetItemBoxComponent.prototype.getUserAccessToken = function () {
        return this.authenticationService.getUserAccessToken();
    };
    AssetItemBoxComponent.prototype.addToPlayList = function (assetID) {
        var isUserLoggedIn = this.getUserAccessToken();
        if (isUserLoggedIn != '') {
            this.isAddToPlayList = true;
            this.assetToBeAdded = assetID;
        }
        else {
            window.location.href = "/login";
            // this.router.navigate(['login']);
        }
        return false;
    };
    AssetItemBoxComponent.prototype.addToFavourite = function (assetID, event) {
        var _this = this;
        this.addRemoveSolidClass(event);
        var isUserLoggedIn = this.getUserAccessToken();
        if (isUserLoggedIn != '') {
            this.cmbuService.addToFavourite(assetID).subscribe(function (data) {
                if (_this.router.url == '/library/favorites') {
                    _this.getFavoriteAssets.emit();
                }
                _this.cmbuService.getLibrarySidebarMenuCount().subscribe(function (data) {
                    _this.cmbuService.librarySidebarFavoriteCount = data.favorite_count;
                    _this.cmbuService.librarySidebarPlaylistCount = data.playlist_count;
                });
            });
        }
        else {
            this.router.navigate(['login', 'favourite', assetID]);
        }
    };
    AssetItemBoxComponent.prototype.addRemoveSolidClass = function (event) {
        if (event.target.classList.contains('is-solid')) {
            event.target.classList.remove('is-solid');
        }
        else {
            event.target.classList.add('is-solid');
        }
    };
    AssetItemBoxComponent.prototype.openRelatedAssets = function (index, assetID) {
        var _this = this;
        this.relatedAssets = [];
        if (!(this.showRelatedAssets && (this.currentAssetsId != assetID))) {
            this.showRelatedAssets = !this.showRelatedAssets;
        }
        if (this.showRelatedAssets) {
            this.currentAssetsId = assetID;
        }
        else {
            this.currentAssetsId = 0;
        }
        this.currentAssetsId = assetID;
        this.cmbuService.getRelatedAssets(assetID).subscribe(function (results) {
            _this.relatedAssets = results.data;
            setTimeout(function () {
                var relatedAssetPosts = document.querySelectorAll('.related-posts .container');
                for (var i = 0; i < relatedAssetPosts.length; i++) {
                    if (window.innerWidth > 300 && (relatedAssetPosts[i].querySelector('p').offsetHeight < 50)) {
                        console.log(relatedAssetPosts[i].querySelector('p').offsetHeight);
                        console.log(relatedAssetPosts[i].querySelector('p').innerHTML);
                        console.log(relatedAssetPosts[i].nextSibling.classList);
                        relatedAssetPosts[i].nextSibling.classList.add("noShow");
                        console.log(relatedAssetPosts[i].nextSibling.classList);
                    }
                    if (window.innerWidth > 1440 && (relatedAssetPosts[i].querySelector('p').offsetHeight < 85)) {
                        console.log(relatedAssetPosts[i].querySelector('p').offsetHeight);
                        console.log(relatedAssetPosts[i].querySelector('p').innerHTML);
                        console.log(relatedAssetPosts[i].nextSibling.classList);
                        relatedAssetPosts[i].nextSibling.classList.add("noShow");
                        console.log(relatedAssetPosts[i].nextSibling.classList);
                    }
                }
            }, 100);
        });
    };
    AssetItemBoxComponent.prototype.close = function (event) {
        var scrollUpBox = document.querySelectorAll('.related-posts .container');
        var scrollUp = this.elRef.nativeElement.querySelectorAll('.related-posts .showBtn');
        document.querySelector('.content-area').classList.add('noScroll');
        setTimeout(function () {
            document.querySelector('.content-area').classList.remove('noScroll');
        }, 100);
        for (var i = 0; i < scrollUpBox.length; i++) {
            scrollUpBox[i].classList.remove('show');
            event.target.previousSibling.classList.add('show');
        }
        if (event.target.innerText === 'Show More') {
            for (var i = 0; i < scrollUp.length; i++) {
                console.log(scrollUp[i].textContent);
                scrollUp[i].textContent = 'Show More';
            }
            event.target.innerText = 'Show Less';
        }
        else {
            event.target.previousSibling.classList.remove('show');
            event.target.innerText = 'Show More';
            for (var i = 0; i < scrollUp.length; i++) {
                scrollUp[i].textContent = 'Show More';
            }
        }
    };
    AssetItemBoxComponent.prototype.hide = function (event) {
        var assetDescriptionBox = document.querySelectorAll('.new-card .assetDescriptionBox');
        var assetDescriptionBoxExpand = this.elRef.nativeElement.querySelectorAll('.new-card .showBtn');
        for (var i = 0; i < assetDescriptionBox.length; i++) {
            assetDescriptionBox[i].classList.remove('showMore');
            event.target.previousSibling.classList.add('showMore');
        }
        if (event.target.innerText === 'Show More') {
            for (var i = 0; i < assetDescriptionBoxExpand.length; i++) {
                assetDescriptionBoxExpand[i].textContent = 'Show More';
            }
            event.target.innerText = 'Show Less';
        }
        else {
            event.target.previousSibling.classList.remove('showMore');
            event.target.innerText = 'Show More';
            for (var i = 0; i < assetDescriptionBoxExpand.length; i++) {
                assetDescriptionBoxExpand[i].textContent = 'Show More';
            }
        }
    };
    AssetItemBoxComponent.prototype.viewAsset = function (productAsset) {
        _paq.push(['trackEvent', 'Asset view', '"' + productAsset.assetTitle + '"is viewed', 'view']);
        setTimeout(function () {
            if (productAsset.howToDemoType == "link") {
                window.open(productAsset.howToDemoLink, "_blank");
            }
            else {
                window.location.href = 'view/asset/' + productAsset.assetId;
            }
        }, 100);
        return false;
    };
    AssetItemBoxComponent.prototype.viewDemo = function (productAsset) {
        _paq.push(['trackEvent', 'Demo view', '"' + productAsset.assetTitle + '"is viewed', 'view']);
        setTimeout(function () {
            window.open(productAsset.demoLink, "_blank");
        }, 100);
        return false;
    };
    AssetItemBoxComponent.ctorParameters = function () { return [
        { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
        { type: src_app_services_cmbu_service__WEBPACK_IMPORTED_MODULE_4__["CmbuService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AssetItemBoxComponent.prototype, "productAssets", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], AssetItemBoxComponent.prototype, "getFavoriteAssets", void 0);
    AssetItemBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-asset-item-box',
            template: __webpack_require__(/*! raw-loader!./asset-item-box.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/asset-item-box/asset-item-box.component.html"),
            styles: [__webpack_require__(/*! ./asset-item-box.component.css */ "./src/app/components/asset-item-box/asset-item-box.component.css")]
        })
    ], AssetItemBoxComponent);
    return AssetItemBoxComponent;
}());



/***/ }),

/***/ "./src/app/components/asset-view/asset-view.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/asset-view/asset-view.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXNzZXQtdmlldy9hc3NldC12aWV3LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/asset-view/asset-view.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/asset-view/asset-view.component.ts ***!
  \***************************************************************/
/*! exports provided: AssetViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetViewComponent", function() { return AssetViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AssetViewComponent = /** @class */ (function () {
    function AssetViewComponent() {
    }
    AssetViewComponent.prototype.ngOnInit = function () {
    };
    AssetViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-asset-view',
            template: __webpack_require__(/*! raw-loader!./asset-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/asset-view/asset-view.component.html"),
            styles: [__webpack_require__(/*! ./asset-view.component.css */ "./src/app/components/asset-view/asset-view.component.css")]
        })
    ], AssetViewComponent);
    return AssetViewComponent;
}());



/***/ }),

/***/ "./src/app/components/breadcrumb/breadcrumb.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/breadcrumb/breadcrumb.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/breadcrumb/breadcrumb.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/breadcrumb/breadcrumb.component.ts ***!
  \***************************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(router) {
        this.router = router;
    }
    BreadcrumbComponent.prototype.ngOnInit = function () {
        this.urlSegments = this.router.url.split('/');
    };
    BreadcrumbComponent.prototype.replaceHyphenFromUrl = function (urlsegment) {
        return urlsegment.replace(/-/g, ' ');
    };
    BreadcrumbComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    BreadcrumbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-breadcrumb',
            template: __webpack_require__(/*! raw-loader!./breadcrumb.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/breadcrumb/breadcrumb.component.html"),
            styles: [__webpack_require__(/*! ./breadcrumb.component.css */ "./src/app/components/breadcrumb/breadcrumb.component.css")]
        })
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "./src/app/components/create-playlist/create-playlist.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/create-playlist/create-playlist.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".createPlaylistPopup {\n    margin: 2rem 0;\n    max-height: 2rem;\n}\n\n.createPlaylistPopup input {\n    width: 100%;\n    margin-right: 2%\n}\n\n.createPlaylistPopup textarea{\n    margin-top: 1rem;\n    width: 100%;\n    max-width: 100%;\n}\n\n.createPlaylistPopup button{\n    margin-top: 0.8rem;\n}\n\n.clr-error {\n    color: #c92100;\n    font-size: .458333rem;\n    margin: 0;\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmVhdGUtcGxheWxpc3QvY3JlYXRlLXBsYXlsaXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYO0FBQ0o7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLFNBQVM7Q0FDWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3JlYXRlLXBsYXlsaXN0L2NyZWF0ZS1wbGF5bGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNyZWF0ZVBsYXlsaXN0UG9wdXAge1xuICAgIG1hcmdpbjogMnJlbSAwO1xuICAgIG1heC1oZWlnaHQ6IDJyZW07XG59XG5cbi5jcmVhdGVQbGF5bGlzdFBvcHVwIGlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDIlXG59XG5cbi5jcmVhdGVQbGF5bGlzdFBvcHVwIHRleHRhcmVhe1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uY3JlYXRlUGxheWxpc3RQb3B1cCBidXR0b257XG4gICAgbWFyZ2luLXRvcDogMC44cmVtO1xufVxuXG4uY2xyLWVycm9yIHtcbiAgICBjb2xvcjogI2M5MjEwMDtcbiAgICBmb250LXNpemU6IC40NTgzMzNyZW07XG4gICAgbWFyZ2luOiAwO1xuIH0iXX0= */"

/***/ }),

/***/ "./src/app/components/create-playlist/create-playlist.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/create-playlist/create-playlist.component.ts ***!
  \*************************************************************************/
/*! exports provided: CreatePlaylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePlaylistComponent", function() { return CreatePlaylistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_cmbu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cmbu.service */ "./src/app/services/cmbu.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CreatePlaylistComponent = /** @class */ (function () {
    function CreatePlaylistComponent(cmbuService, router) {
        this.cmbuService = cmbuService;
        this.router = router;
        this.modalStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.getUserPlaylists = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    CreatePlaylistComponent.prototype.ngOnInit = function () {
    };
    CreatePlaylistComponent.prototype.onSubmit = function () {
        this.createPlayList(this.playListName);
        return false;
    };
    CreatePlaylistComponent.prototype.createPlayList = function (playListName) {
        var _this = this;
        if (playListName) {
            playListName = playListName.trim();
        }
        this.responseMsg = '';
        this.playListName = playListName;
        if (!this.isRenameEvent) {
            this.cmbuService.addToPlayList(this.playListName, this.playListDescription).subscribe(function (data) {
                if (data.status) {
                    _this.playListName = '';
                    _this.createPlaylistPopup = false;
                    _this.router.navigateByUrl('/', { skipLocationChange: true }).then(function () {
                        return _this.router.navigateByUrl('library/user-playlists');
                    });
                }
                else {
                    _this.responseMsg = data.message;
                }
            });
        }
        else {
            this.cmbuService.renamePlayList(this.playListName, this.playListID, this.playListDescription).subscribe(function (data) {
                if (data.status) {
                    _this.playListName = '';
                    _this.createPlaylistPopup = false;
                    _this.router.navigateByUrl('/', { skipLocationChange: true }).then(function () {
                        return _this.router.navigateByUrl('library/user-playlists');
                    });
                }
                else {
                    _this.responseMsg = data.message;
                }
            });
        }
    };
    CreatePlaylistComponent.prototype.changeModalStatus = function () {
        this.createPlaylistPopup = false;
        this.playListName = '';
        this.playListDescription = '';
        this.modalStatus.emit(this.createPlaylistPopup);
    };
    CreatePlaylistComponent.ctorParameters = function () { return [
        { type: src_app_services_cmbu_service__WEBPACK_IMPORTED_MODULE_2__["CmbuService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CreatePlaylistComponent.prototype, "createPlaylistPopup", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CreatePlaylistComponent.prototype, "playListName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], CreatePlaylistComponent.prototype, "modalStatus", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CreatePlaylistComponent.prototype, "isRenameEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CreatePlaylistComponent.prototype, "playListID", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CreatePlaylistComponent.prototype, "playListDescription", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], CreatePlaylistComponent.prototype, "getUserPlaylists", void 0);
    CreatePlaylistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-playlist',
            template: __webpack_require__(/*! raw-loader!./create-playlist.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/create-playlist/create-playlist.component.html"),
            styles: [__webpack_require__(/*! ./create-playlist.component.css */ "./src/app/components/create-playlist/create-playlist.component.css")]
        })
    ], CreatePlaylistComponent);
    return CreatePlaylistComponent;
}());



/***/ }),

/***/ "./src/app/components/discover-slider/discover-slider.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/discover-slider/discover-slider.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Card buttons */\n\n.card-footer .btn-link {\n    color: #adbac4;\n}\n\n/* .card.not-active{\n    opacity: 0;\n}\n.card.active{\n    opacity: 1;\n} */\n\n.assetDescriptionBox {\n    max-height: 150px;\n    /* overflow: scroll; */\n    display: block;\n    overflow: hidden;\n    margin-bottom: 4px;\n}\n\n.showMore {\n    overflow: visible;\n    max-height: 100% !important;\n}\n\n.card-block .card-text {\n    max-height: 190px;\n    overflow-y: auto;\n}\n\n.new-card .card-img > img {\n    cursor: pointer;\n}\n\n.hideBtn {\n    display: none;\n}\n\n@media (max-width: 1280px) {\n    .assetDescriptionBox {\n        max-height: 142px;\n    }\n}\n\n@media (max-width: 1024px) {\n    .assetDescriptionBox {\n        max-height: 95px;\n    }\n    .card-block .card-text {\n        max-height: 160px;\n    }\n}\n\n.is-faved {\n    color: #991700 !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kaXNjb3Zlci1zbGlkZXIvZGlzY292ZXItc2xpZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQWlCOztBQUVqQjtJQUNJLGNBQWM7QUFDbEI7O0FBQ0E7Ozs7O0dBS0c7O0FBRUg7SUFDSSxpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLDJCQUEyQjtBQUMvQjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUNBO0lBQ0ksYUFBYTtBQUNqQjs7QUFDQTtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0o7O0FBQ0E7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0o7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rpc2NvdmVyLXNsaWRlci9kaXNjb3Zlci1zbGlkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENhcmQgYnV0dG9ucyAqL1xuXG4uY2FyZC1mb290ZXIgLmJ0bi1saW5rIHtcbiAgICBjb2xvcjogI2FkYmFjNDtcbn1cbi8qIC5jYXJkLm5vdC1hY3RpdmV7XG4gICAgb3BhY2l0eTogMDtcbn1cbi5jYXJkLmFjdGl2ZXtcbiAgICBvcGFjaXR5OiAxO1xufSAqL1xuXG4uYXNzZXREZXNjcmlwdGlvbkJveCB7XG4gICAgbWF4LWhlaWdodDogMTUwcHg7XG4gICAgLyogb3ZlcmZsb3c6IHNjcm9sbDsgKi9cbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbi1ib3R0b206IDRweDtcbn1cbi5zaG93TW9yZSB7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgbWF4LWhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuLmNhcmQtYmxvY2sgLmNhcmQtdGV4dCB7XG4gICAgbWF4LWhlaWdodDogMTkwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbn1cbi5uZXctY2FyZCAuY2FyZC1pbWcgPiBpbWcge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5oaWRlQnRuIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xuICAgIC5hc3NldERlc2NyaXB0aW9uQm94IHtcbiAgICAgICAgbWF4LWhlaWdodDogMTQycHg7XG4gICAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgIC5hc3NldERlc2NyaXB0aW9uQm94IHtcbiAgICAgICAgbWF4LWhlaWdodDogOTVweDtcbiAgICB9XG4gICAgLmNhcmQtYmxvY2sgLmNhcmQtdGV4dCB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDE2MHB4O1xuICAgIH1cbn1cblxuLmlzLWZhdmVkIHtcbiAgICBjb2xvcjogIzk5MTcwMCAhaW1wb3J0YW50O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/discover-slider/discover-slider.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/discover-slider/discover-slider.component.ts ***!
  \*************************************************************************/
/*! exports provided: DiscoverSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverSliderComponent", function() { return DiscoverSliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_cmbu_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/cmbu.service */ "./src/app/services/cmbu.service.ts");






var DiscoverSliderComponent = /** @class */ (function () {
    function DiscoverSliderComponent(authenticationService, router, cmbuService, elRef, renderer) {
        var _this = this;
        this.authenticationService = authenticationService;
        this.router = router;
        this.cmbuService = cmbuService;
        this.elRef = elRef;
        this.renderer = renderer;
        this.isAddToPlayList = false;
        this.assetToBeAdded = '';
        this.likePercentage = '';
        this.relatedAssets = [];
        this.showRelatedAssets = false;
        this.show = false;
        this.status = false;
        this.text = 'Show More';
        this.showDescription = false;
        this.buttonText = 'Show More';
        this.serverAppBaseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverAppBaseUrl;
        this.customOptions = {
            loop: true,
            mouseDrag: false,
            touchDrag: false,
            pullDrag: false,
            dots: false,
            navSpeed: 700,
            slideBy: 4,
            navText: ['<', '>'],
            responsive: {
                0: {
                    items: 1,
                    slideBy: 1,
                },
                400: {
                    items: 2
                },
                740: {
                    items: 2
                },
                940: {
                    items: 4
                }
            },
            nav: true
        };
        this.renderer.listen('window', 'click', function (e) {
            var relatedAssetElement = _this.elRef.nativeElement.querySelectorAll('.card .related-assets');
            var tempShowRelatedAssets = false;
            for (var i = 0; i < relatedAssetElement.length; i++) {
                if (relatedAssetElement[i].contains(e.target)) {
                    tempShowRelatedAssets = true;
                    break;
                }
            }
            var relatedAssetContainerElement = _this.elRef.nativeElement.querySelectorAll('.card .related-assets-container');
            for (var i = 0; i < relatedAssetContainerElement.length; i++) {
                if (relatedAssetContainerElement[i].contains(e.target)) {
                    tempShowRelatedAssets = true;
                    break;
                }
            }
            if (!tempShowRelatedAssets) {
                _this.showRelatedAssets = false;
            }
        });
    }
    DiscoverSliderComponent.prototype.ngOnInit = function () { };
    DiscoverSliderComponent.prototype.likeAsset = function (assetID) {
        this.addRemoveSolidClass(event);
        var isUserLoggedIn = this.getUserAccessToken();
        if (isUserLoggedIn != '') {
            this.cmbuService.likeAssets(assetID).subscribe(function (data) {
            });
        }
        else {
            this.router.navigate(['login', 'like', assetID]);
        }
    };
    DiscoverSliderComponent.prototype.getUserAccessToken = function () {
        return this.authenticationService.getUserAccessToken();
    };
    DiscoverSliderComponent.prototype.addToPlayList = function (assetID) {
        var isUserLoggedIn = this.getUserAccessToken();
        if (isUserLoggedIn != '') {
            this.isAddToPlayList = true;
            this.assetToBeAdded = assetID;
        }
        else {
            this.router.navigate(['login']);
        }
    };
    DiscoverSliderComponent.prototype.addToFavourite = function (assetID, event) {
        this.addRemoveSolidClass(event);
        var isUserLoggedIn = this.getUserAccessToken();
        if (isUserLoggedIn != '') {
            this.cmbuService.addToFavourite(assetID).subscribe(function (data) {
            });
        }
        else {
            this.router.navigate(['login', 'favourite', assetID]);
        }
    };
    DiscoverSliderComponent.prototype.addRemoveSolidClass = function (event) {
        if (event.target.classList.contains('is-solid')) {
            event.target.classList.remove('is-solid');
        }
        else {
            event.target.classList.add('is-solid');
        }
    };
    DiscoverSliderComponent.prototype.openRelatedAssets = function (index, assetID, event) {
        var _this = this;
        this.relatedAssets = [];
        var owlitms = this.elRef.nativeElement.querySelectorAll('.owl-item');
        for (var i = 0; i < owlitms.length; i++) {
            this.renderer.removeClass(owlitms[i], 'relatedAssetSlide');
        }
        // this.renderer.removeClass(this.elRef.nativeElement.querySelector('.owl-item'), 'RleatedAssetSlide');
        this.renderer.addClass(event.target.closest('.owl-item'), 'relatedAssetSlide');
        if (!(this.showRelatedAssets && (this.currentAssetsId != assetID))) {
            this.showRelatedAssets = !this.showRelatedAssets;
        }
        this.currentAssetsId = assetID;
        this.cmbuService.getRelatedAssets(assetID).subscribe(function (results) {
            _this.relatedAssets = results.data;
            setTimeout(function () {
                var relatedAssetPosts = document.querySelectorAll('.related-posts .container');
                for (var i = 0; i < relatedAssetPosts.length; i++) {
                    if (window.innerWidth > 300 && (relatedAssetPosts[i].querySelector('p').offsetHeight < 50)) {
                        console.log(relatedAssetPosts[i].querySelector('p').offsetHeight);
                        console.log(relatedAssetPosts[i].querySelector('p').innerHTML);
                        console.log(relatedAssetPosts[i].nextSibling.classList);
                        relatedAssetPosts[i].nextSibling.classList.add("noShow");
                        console.log(relatedAssetPosts[i].nextSibling.classList);
                    }
                    if (window.innerWidth > 1440 && (relatedAssetPosts[i].querySelector('p').offsetHeight < 85)) {
                        console.log(relatedAssetPosts[i].querySelector('p').offsetHeight);
                        console.log(relatedAssetPosts[i].querySelector('p').innerHTML);
                        console.log(relatedAssetPosts[i].nextSibling.classList);
                        relatedAssetPosts[i].nextSibling.classList.add("noShow");
                        console.log(relatedAssetPosts[i].nextSibling.classList);
                    }
                }
            }, 100);
        });
    };
    DiscoverSliderComponent.prototype.close = function (event) {
        document.querySelector('body').classList.add('noScroll');
        setTimeout(function () {
            document.querySelector('body').classList.remove('noScroll');
        }, 100);
        var scrollUpBox = document.querySelectorAll('.related-posts .container');
        var scrollUp = this.elRef.nativeElement.querySelectorAll('.related-posts .showBtn');
        for (var i = 0; i < scrollUpBox.length; i++) {
            scrollUpBox[i].classList.remove('show');
            event.target.previousSibling.classList.add('show');
        }
        if (event.target.innerText === 'Show More') {
            for (var i = 0; i < scrollUp.length; i++) {
                console.log(scrollUp[i].textContent);
                scrollUp[i].textContent = 'Show More';
            }
            event.target.innerText = 'Show Less';
        }
        else {
            event.target.previousSibling.classList.remove('show');
            event.target.innerText = 'Show More';
            for (var i = 0; i < scrollUp.length; i++) {
                scrollUp[i].textContent = 'Show More';
            }
        }
    };
    DiscoverSliderComponent.prototype.hide = function (event) {
        var assetDescriptionBox = document.querySelectorAll('.new-card .assetDescriptionBox');
        var assetDescriptionBoxExpand = this.elRef.nativeElement.querySelectorAll('.new-card .showBtn');
        for (var i = 0; i < assetDescriptionBox.length; i++) {
            assetDescriptionBox[i].classList.remove('showMore');
            event.target.previousSibling.classList.add('showMore');
        }
        if (event.target.innerText === 'Show More') {
            for (var i = 0; i < assetDescriptionBoxExpand.length; i++) {
                assetDescriptionBoxExpand[i].textContent = 'Show More';
            }
            event.target.innerText = 'Show Less';
        }
        else {
            event.target.previousSibling.classList.remove('showMore');
            event.target.innerText = 'Show More';
            for (var i = 0; i < assetDescriptionBoxExpand.length; i++) {
                assetDescriptionBoxExpand[i].textContent = 'Show More';
            }
        }
    };
    DiscoverSliderComponent.prototype.viewAsset = function (productAsset) {
        console.log(0);
        _paq.push(['trackEvent', 'Asset view', '"' + productAsset.assetTitle + '"is viewed', 'view']);
        setTimeout(function () {
            if (productAsset.howToDemoType == "link") {
                window.open(productAsset.howToDemoLink, "_blank");
            }
            else {
                window.location.href = 'view/asset/' + productAsset.assetId;
            }
        }, 100);
        return false;
    };
    DiscoverSliderComponent.prototype.viewDemo = function (productAsset) {
        _paq.push(['trackEvent', 'Demo view', '"' + productAsset.assetTitle + '"is viewed', 'view']);
        setTimeout(function () {
            window.open(productAsset.demoLink, "_blank");
        }, 100);
        return false;
    };
    DiscoverSliderComponent.ctorParameters = function () { return [
        { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: src_app_services_cmbu_service__WEBPACK_IMPORTED_MODULE_5__["CmbuService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], DiscoverSliderComponent.prototype, "assetDetails", void 0);
    DiscoverSliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-discover-slider',
            template: __webpack_require__(/*! raw-loader!./discover-slider.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/discover-slider/discover-slider.component.html"),
            styles: [__webpack_require__(/*! ./discover-slider.component.css */ "./src/app/components/discover-slider/discover-slider.component.css")]
        })
    ], DiscoverSliderComponent);
    return DiscoverSliderComponent;
}());



/***/ }),

/***/ "./src/app/components/essential-slider/essential-slider.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/essential-slider/essential-slider.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Card buttons */\n.card-footer .btn-link {\n    color: #adbac4;\n}\n.essentialSliderRow > div {\n    display: -webkit-box;\n    display: flex;\n}\n.essentialSliderRow > div > div {\n    width: 100%;\n}\n.sm-device-blue-bg {\n    background: linear-gradient(\n        135deg,\n        rgba(0, 177, 221, 1) 0%,\n        rgba(0, 170, 217, 1) 10%,\n        rgba(0, 168, 214, 1) 20%,\n        rgba(0, 161, 210, 1) 30%,\n        rgba(0, 155, 206, 1) 40%,\n        rgba(0, 148, 202, 1) 50%,\n        rgba(0, 143, 199, 1) 60%,\n        rgba(0, 137, 195, 1) 70%,\n        rgba(0, 131, 191, 1) 80%,\n        rgba(0, 128, 188, 1) 90%,\n        rgba(0, 120, 184, 1) 100%\n    );\n    text-align: center;\n    width: calc(100% + 46px);\n    display: block;\n    margin: 0px -23px;\n    margin-top: 10px;\n    left: 0;\n    display: none;\n    padding: 27px 0;\n}\n.sm-device-blue-bg clr-icon {\n    margin: 0 auto;\n    color: #ffffff;\n    width: 40%;\n    height: 40%;\n    z-index: 1;\n}\n.essentialSliderRow .libraryCard .btn {\n    position: absolute;\n    bottom: 0.25rem;\n}\n.new-card .card-img > img {\n    cursor: pointer;\n}\n.hideBtn {\n    display: none;\n}\n.assetDescriptionBox {\n    max-height: 150px;\n    /* overflow: scroll; */\n    display: block;\n    overflow: hidden;\n    margin-bottom: 4px;\n}\n.showMore {\n    overflow: visible;\n    max-height: 100% !important;\n}\n.card-block .card-text {\n    max-height: 190px;\n    overflow-y: auto;\n}\n@media (max-width: 1280px) {\n    .assetDescriptionBox {\n        max-height: 142px;\n    }\n}\n@media (max-width: 1024px) {\n    .assetDescriptionBox {\n        max-height: 95px;\n    }\n    .card-block .card-text {\n        max-height: 160px;\n    }\n}\n@media (max-width: 768px) {\n    .libraryCard .libraryStrip {\n        display: none;\n    }\n    .sm-device-blue-bg {\n        display: block;\n    }\n    .usecase-viewBtn {\n        position: absolute;\n        width: 100%;\n        bottom: 0.25rem;\n    }\n}\n@media (max-width: 767px) {\n    .essentialSliderRow .libraryCard .btn {\n        position: static;\n    }\n}\n.is-faved {\n    color: #991700 !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lc3NlbnRpYWwtc2xpZGVyL2Vzc2VudGlhbC1zbGlkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUI7QUFDakI7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7QUFDakI7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0k7Ozs7Ozs7Ozs7Ozs7S0FhQztJQUNELGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsT0FBTztJQUNQLGFBQWE7SUFDYixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsY0FBYztJQUNkLFVBQVU7SUFDVixXQUFXO0lBQ1gsVUFBVTtBQUNkO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7QUFDSjtBQUNBO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKO0FBQ0E7SUFDSTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsZUFBZTtJQUNuQjtBQUNKO0FBQ0E7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKO0FBRUE7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Vzc2VudGlhbC1zbGlkZXIvZXNzZW50aWFsLXNsaWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ2FyZCBidXR0b25zICovXG4uY2FyZC1mb290ZXIgLmJ0bi1saW5rIHtcbiAgICBjb2xvcjogI2FkYmFjNDtcbn1cblxuLmVzc2VudGlhbFNsaWRlclJvdyA+IGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmVzc2VudGlhbFNsaWRlclJvdyA+IGRpdiA+IGRpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uc20tZGV2aWNlLWJsdWUtYmcge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgMTM1ZGVnLFxuICAgICAgICByZ2JhKDAsIDE3NywgMjIxLCAxKSAwJSxcbiAgICAgICAgcmdiYSgwLCAxNzAsIDIxNywgMSkgMTAlLFxuICAgICAgICByZ2JhKDAsIDE2OCwgMjE0LCAxKSAyMCUsXG4gICAgICAgIHJnYmEoMCwgMTYxLCAyMTAsIDEpIDMwJSxcbiAgICAgICAgcmdiYSgwLCAxNTUsIDIwNiwgMSkgNDAlLFxuICAgICAgICByZ2JhKDAsIDE0OCwgMjAyLCAxKSA1MCUsXG4gICAgICAgIHJnYmEoMCwgMTQzLCAxOTksIDEpIDYwJSxcbiAgICAgICAgcmdiYSgwLCAxMzcsIDE5NSwgMSkgNzAlLFxuICAgICAgICByZ2JhKDAsIDEzMSwgMTkxLCAxKSA4MCUsXG4gICAgICAgIHJnYmEoMCwgMTI4LCAxODgsIDEpIDkwJSxcbiAgICAgICAgcmdiYSgwLCAxMjAsIDE4NCwgMSkgMTAwJVxuICAgICk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyA0NnB4KTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDBweCAtMjNweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwYWRkaW5nOiAyN3B4IDA7XG59XG4uc20tZGV2aWNlLWJsdWUtYmcgY2xyLWljb24ge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHdpZHRoOiA0MCU7XG4gICAgaGVpZ2h0OiA0MCU7XG4gICAgei1pbmRleDogMTtcbn1cbi5lc3NlbnRpYWxTbGlkZXJSb3cgLmxpYnJhcnlDYXJkIC5idG4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDAuMjVyZW07XG59XG4ubmV3LWNhcmQgLmNhcmQtaW1nID4gaW1nIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaGlkZUJ0biB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbi5hc3NldERlc2NyaXB0aW9uQm94IHtcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgICAvKiBvdmVyZmxvdzogc2Nyb2xsOyAqL1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuLnNob3dNb3JlIHtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG4uY2FyZC1ibG9jayAuY2FyZC10ZXh0IHtcbiAgICBtYXgtaGVpZ2h0OiAxOTBweDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xuICAgIC5hc3NldERlc2NyaXB0aW9uQm94IHtcbiAgICAgICAgbWF4LWhlaWdodDogMTQycHg7XG4gICAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgIC5hc3NldERlc2NyaXB0aW9uQm94IHtcbiAgICAgICAgbWF4LWhlaWdodDogOTVweDtcbiAgICB9XG4gICAgLmNhcmQtYmxvY2sgLmNhcmQtdGV4dCB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDE2MHB4O1xuICAgIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5saWJyYXJ5Q2FyZCAubGlicmFyeVN0cmlwIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLnNtLWRldmljZS1ibHVlLWJnIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC51c2VjYXNlLXZpZXdCdG4ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3R0b206IDAuMjVyZW07XG4gICAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgLmVzc2VudGlhbFNsaWRlclJvdyAubGlicmFyeUNhcmQgLmJ0biB7XG4gICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgfVxufVxuXG4uaXMtZmF2ZWQge1xuICAgIGNvbG9yOiAjOTkxNzAwICFpbXBvcnRhbnQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/essential-slider/essential-slider.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/essential-slider/essential-slider.component.ts ***!
  \***************************************************************************/
/*! exports provided: EssentialSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EssentialSliderComponent", function() { return EssentialSliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var src_app_services_cmbu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/cmbu.service */ "./src/app/services/cmbu.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var EssentialSliderComponent = /** @class */ (function () {
    function EssentialSliderComponent(authenticationService, cmbuService, router, route, renderer, elRef) {
        var _this = this;
        this.authenticationService = authenticationService;
        this.cmbuService = cmbuService;
        this.router = router;
        this.route = route;
        this.renderer = renderer;
        this.elRef = elRef;
        this.isAddToPlayList = false;
        this.assetToBeAdded = '';
        this.relatedAssets = [];
        this.showRelatedAssets = false;
        this.show = false;
        this.status = false;
        this.text = 'Show More';
        this.showDescription = false;
        this.buttonText = 'Show More';
        this.serverAppBaseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverAppBaseUrl;
        this.customOptions = {
            loop: true,
            mouseDrag: false,
            touchDrag: false,
            pullDrag: false,
            dots: false,
            navSpeed: 700,
            navText: ['<', '>'],
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 1
                },
                740: {
                    items: 1
                },
                940: {
                    items: 2,
                    slideBy: 2,
                }
            },
            nav: true
        };
        this.renderer.listen('window', 'click', function (e) {
            var relatedAssetElement = _this.elRef.nativeElement.querySelectorAll('.card .related-assets');
            var tempShowRelatedAssets = false;
            for (var i = 0; i < relatedAssetElement.length; i++) {
                if (relatedAssetElement[i].contains(e.target)) {
                    tempShowRelatedAssets = true;
                    break;
                }
            }
            var relatedAssetContainerElement = _this.elRef.nativeElement.querySelectorAll('.card .related-assets-container');
            for (var i = 0; i < relatedAssetContainerElement.length; i++) {
                if (relatedAssetContainerElement[i].contains(e.target)) {
                    tempShowRelatedAssets = true;
                    break;
                }
            }
            if (!tempShowRelatedAssets) {
                _this.showRelatedAssets = false;
            }
        });
    }
    EssentialSliderComponent.prototype.ngOnInit = function () {
    };
    EssentialSliderComponent.prototype.likeAsset = function (assetID) {
        var isUserLoggedIn = this.getUserAccessToken();
        if (isUserLoggedIn != '') {
            this.cmbuService.likeAssets(assetID).subscribe(function (data) {
            });
        }
        else {
            this.router.navigate(['login', 'like', assetID]);
        }
    };
    EssentialSliderComponent.prototype.getUserAccessToken = function () {
        return this.authenticationService.getUserAccessToken();
    };
    EssentialSliderComponent.prototype.addToPlayList = function (assetID) {
        var isUserLoggedIn = this.getUserAccessToken();
        if (isUserLoggedIn != '') {
            this.isAddToPlayList = true;
            this.assetToBeAdded = assetID;
        }
        else {
            this.router.navigate(['login']);
        }
    };
    EssentialSliderComponent.prototype.addToFavourite = function (assetID, event) {
        var _this = this;
        var isUserLoggedIn = this.getUserAccessToken();
        if (isUserLoggedIn != '') {
            this.cmbuService.addToFavourite(assetID).subscribe(function (data) {
                _this.addRemoveSolidClass(event);
            });
        }
        else {
            this.router.navigate(['login', 'favourite', assetID]);
        }
    };
    EssentialSliderComponent.prototype.addRemoveSolidClass = function (event) {
        if (event.target.classList.contains('is-solid')) {
            event.target.classList.remove('is-solid');
        }
        else {
            event.target.classList.add('is-solid');
        }
    };
    EssentialSliderComponent.prototype.openRelatedAssets = function (index, assetID) {
        var _this = this;
        this.relatedAssets = [];
        if (!(this.showRelatedAssets && (this.currentAssetsId != assetID))) {
            this.showRelatedAssets = !this.showRelatedAssets;
        }
        this.currentAssetsId = assetID;
        this.cmbuService.getRelatedAssets(assetID).subscribe(function (results) {
            _this.relatedAssets = results.data;
            setTimeout(function () {
                var relatedAssetPosts = document.querySelectorAll('.related-posts .container');
                for (var i = 0; i < relatedAssetPosts.length; i++) {
                    if (window.innerWidth > 300 && (relatedAssetPosts[i].querySelector('p').offsetHeight < 50)) {
                        console.log(relatedAssetPosts[i].querySelector('p').offsetHeight);
                        console.log(relatedAssetPosts[i].querySelector('p').innerHTML);
                        console.log(relatedAssetPosts[i].nextSibling.classList);
                        relatedAssetPosts[i].nextSibling.classList.add("noShow");
                        console.log(relatedAssetPosts[i].nextSibling.classList);
                    }
                    if (window.innerWidth > 1440 && (relatedAssetPosts[i].querySelector('p').offsetHeight < 85)) {
                        console.log(relatedAssetPosts[i].querySelector('p').offsetHeight);
                        console.log(relatedAssetPosts[i].querySelector('p').innerHTML);
                        console.log(relatedAssetPosts[i].nextSibling.classList);
                        relatedAssetPosts[i].nextSibling.classList.add("noShow");
                        console.log(relatedAssetPosts[i].nextSibling.classList);
                    }
                }
            }, 100);
        });
    };
    EssentialSliderComponent.prototype.close = function (event) {
        var scrollUpBox = document.querySelectorAll('.related-posts .container');
        var scrollUp = this.elRef.nativeElement.querySelectorAll('.related-posts .showBtn');
        document.querySelector('body').classList.add('noScroll');
        setTimeout(function () {
            document.querySelector('body').classList.remove('noScroll');
        }, 100);
        for (var i = 0; i < scrollUpBox.length; i++) {
            scrollUpBox[i].classList.remove('show');
            event.target.previousSibling.classList.add('show');
        }
        if (event.target.innerText === 'Show More') {
            for (var i = 0; i < scrollUp.length; i++) {
                console.log(scrollUp[i].textContent);
                scrollUp[i].textContent = 'Show More';
            }
            event.target.innerText = 'Show Less';
        }
        else {
            event.target.previousSibling.classList.remove('show');
            event.target.innerText = 'Show More';
            for (var i = 0; i < scrollUp.length; i++) {
                scrollUp[i].textContent = 'Show More';
            }
        }
    };
    EssentialSliderComponent.prototype.hide = function (event) {
        var assetDescriptionBox = document.querySelectorAll('.new-card .assetDescriptionBox');
        var assetDescriptionBoxExpand = this.elRef.nativeElement.querySelectorAll('.new-card .showBtn');
        for (var i = 0; i < assetDescriptionBox.length; i++) {
            assetDescriptionBox[i].classList.remove('showMore');
            event.target.previousSibling.classList.add('showMore');
        }
        if (event.target.innerText === 'Show More') {
            for (var i = 0; i < assetDescriptionBoxExpand.length; i++) {
                assetDescriptionBoxExpand[i].textContent = 'Show More';
            }
            event.target.innerText = 'Show Less';
        }
        else {
            event.target.previousSibling.classList.remove('showMore');
            event.target.innerText = 'Show More';
            for (var i = 0; i < assetDescriptionBoxExpand.length; i++) {
                assetDescriptionBoxExpand[i].textContent = 'Show More';
            }
        }
    };
    EssentialSliderComponent.prototype.hideShowMoreBtn = function (length, useCaseAsset) {
        if (length <= 1) {
            return useCaseAsset.assets[0].assetDescription.length < 350 ? 'hideBtn' : '';
        }
        else {
            return useCaseAsset.assets[0].assetDescription.length < 225 ? 'hideBtn' : '';
        }
    };
    EssentialSliderComponent.prototype.viewAsset = function (productAsset) {
        _paq.push(['trackEvent', 'Asset view', '"' + productAsset.assetTitle + '"is viewed', 'view']);
        setTimeout(function () {
            if (productAsset.howToDemoType == "link") {
                window.open(productAsset.howToDemoLink, "_blank");
            }
            else {
                window.location.href = 'view/asset/' + productAsset.assetId;
            }
        }, 100);
        return false;
    };
    EssentialSliderComponent.prototype.viewDemo = function (productAsset) {
        _paq.push(['trackEvent', 'Demo view', '"' + productAsset.assetTitle + '"is viewed', 'view']);
        setTimeout(function () {
            window.open(productAsset.demoLink, "_blank");
        }, 100);
        return false;
    };
    EssentialSliderComponent.prototype.viewUseCase = function (usecaseDetails) {
        _paq.push(['trackEvent', 'Usecase view', '"' + usecaseDetails.name + '"is viewed', 'view']);
        setTimeout(function () {
            window.location.href = '/library/usecases/' + usecaseDetails.slug;
        }, 100);
        return false;
    };
    EssentialSliderComponent.ctorParameters = function () { return [
        { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
        { type: src_app_services_cmbu_service__WEBPACK_IMPORTED_MODULE_4__["CmbuService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], EssentialSliderComponent.prototype, "useCaseAssets", void 0);
    EssentialSliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-essential-slider',
            template: __webpack_require__(/*! raw-loader!./essential-slider.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/essential-slider/essential-slider.component.html"),
            styles: [__webpack_require__(/*! ./essential-slider.component.css */ "./src/app/components/essential-slider/essential-slider.component.css")]
        })
    ], EssentialSliderComponent);
    return EssentialSliderComponent;
}());



/***/ }),

/***/ "./src/app/components/faq/faq.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/faq/faq.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Accordians */\n\n.clr-accordion:not(.clr-stepper-forms) .clr-accordion-panel:first-child .clr-accordion-header {\n    border-radius: 3px;\n}\n\n.clr-accordion-panel {\n    margin-top: 0.75rem;\n    box-shadow: 0 0.125rem 0 0 #d7d7d7;\n    border-radius: .125rem;\n}\n\n.clr-accordion-panel:last-child .clr-accordion-header {\n    border-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mYXEvZmFxLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZUFBZTs7QUFFZjtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQ0FBa0M7SUFDbEMsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mYXEvZmFxLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBBY2NvcmRpYW5zICovXG5cbi5jbHItYWNjb3JkaW9uOm5vdCguY2xyLXN0ZXBwZXItZm9ybXMpIC5jbHItYWNjb3JkaW9uLXBhbmVsOmZpcnN0LWNoaWxkIC5jbHItYWNjb3JkaW9uLWhlYWRlciB7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4uY2xyLWFjY29yZGlvbi1wYW5lbCB7XG4gICAgbWFyZ2luLXRvcDogMC43NXJlbTtcbiAgICBib3gtc2hhZG93OiAwIDAuMTI1cmVtIDAgMCAjZDdkN2Q3O1xuICAgIGJvcmRlci1yYWRpdXM6IC4xMjVyZW07XG59XG5cbi5jbHItYWNjb3JkaW9uLXBhbmVsOmxhc3QtY2hpbGQgLmNsci1hY2NvcmRpb24taGVhZGVyIHtcbiAgICBib3JkZXItYm90dG9tOiAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/faq/faq.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/faq/faq.component.ts ***!
  \*************************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_faq_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/faq.service */ "./src/app/services/faq.service.ts");



var FaqComponent = /** @class */ (function () {
    function FaqComponent(faqService) {
        this.faqService = faqService;
        this.faqDetails = '';
    }
    FaqComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.faqService.getFaqDetails().subscribe(function (data) {
            _this.faqDetails = data.data;
        });
    };
    FaqComponent.prototype.scrollToSection = function (element) {
        var element1 = document.querySelector('#' + element);
        element1.scrollIntoView({ behavior: 'smooth' });
    };
    FaqComponent.prototype.getElementID = function (categoryName) {
        return categoryName.replace(/\s/g, '');
    };
    FaqComponent.ctorParameters = function () { return [
        { type: src_app_services_faq_service__WEBPACK_IMPORTED_MODULE_2__["FaqService"] }
    ]; };
    FaqComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__(/*! raw-loader!./faq.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/faq/faq.component.html"),
            host: { '[class.content-container]': 'true' },
            styles: [__webpack_require__(/*! ./faq.component.css */ "./src/app/components/faq/faq.component.css")]
        })
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "./src/app/components/favorites/favorites.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/favorites/favorites.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmF2b3JpdGVzL2Zhdm9yaXRlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/favorites/favorites.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/favorites/favorites.component.ts ***!
  \*************************************************************/
/*! exports provided: FavoritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesComponent", function() { return FavoritesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_cmbu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cmbu.service */ "./src/app/services/cmbu.service.ts");
/* harmony import */ var src_app_services_paginationservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/paginationservice.service */ "./src/app/services/paginationservice.service.ts");




var FavoritesComponent = /** @class */ (function () {
    function FavoritesComponent(cmbuService, paginationService) {
        this.cmbuService = cmbuService;
        this.paginationService = paginationService;
        this.assetsList = [];
        this.keyword = '';
        this.pageSize = 10;
        this.currentPage = 1;
        this.totalNoOfPages = 0;
        this.paginationResultOutPut = '';
    }
    FavoritesComponent.prototype.ngOnInit = function () {
        this.getFavoriteAssets();
    };
    FavoritesComponent.prototype.getFavoriteAssets = function () {
        var _this = this;
        this.cmbuService.getFavoriteAssets(this.keyword, this.currentPage, this.pageSize).subscribe(function (data) {
            _this.assetsList = data.data;
            _this.paginationService.displayPaginationResult(data.pagination);
        });
    };
    FavoritesComponent.prototype.getPaginationAssets = function (currentPage) {
        this.currentPage = currentPage;
        this.getFavoriteAssets();
    };
    FavoritesComponent.prototype.filterByKeyword = function (keyword) {
        this.keyword = keyword;
        this.getFavoriteAssets();
    };
    FavoritesComponent.prototype.getAssetsByPageSize = function (pageSize) {
        if (pageSize != this.pageSize) {
            // this.isAssetPerPageChanged = true;
            this.currentPage = 1;
            // this.direction = 1;
        }
        this.pageSize = pageSize;
        this.getFavoriteAssets();
    };
    FavoritesComponent.ctorParameters = function () { return [
        { type: src_app_services_cmbu_service__WEBPACK_IMPORTED_MODULE_2__["CmbuService"] },
        { type: src_app_services_paginationservice_service__WEBPACK_IMPORTED_MODULE_3__["PaginationserviceService"] }
    ]; };
    FavoritesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-favorites',
            template: __webpack_require__(/*! raw-loader!./favorites.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/favorites/favorites.component.html"),
            styles: [__webpack_require__(/*! ./favorites.component.css */ "./src/app/components/favorites/favorites.component.css")]
        })
    ], FavoritesComponent);
    return FavoritesComponent;
}());



/***/ }),

/***/ "./src/app/components/feedback/feedback.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/feedback/feedback.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* CSS */\n\n.clr-control-container {\n    width: 100%;\n}\n\n#vertical-textarea-basic {\n    width: 100%;\n}\n\nform button {\n    margin-top: 1.5rem;\n}\n\n.submissionSuccessfull{\n    color: green;\n}\n\n.submissionError{\n    color: red;\n}\n\n/* Contact */\n\n.contactInfo {\n    margin: 5rem 0 3rem;\n}\n\n.contactInfo p {\n    margin-top: 0.2rem;\n}\n\n.contactInfo label {\n    display: block;\n    color: #444;\n    font-size: .541667rem;\n    font-weight: 600;\n    line-height: .75rem;\n}\n\n.contactInfo a {\n    display: block;\n    color: #002437;\n}\n\n.content-area .form-bg{\n    background: #f3f3f3;\n    padding: 1rem;\n}\n\n.clr-textarea-wrapper textarea{\n    width: 100%;\n}\n\n@media(max-width: 1024px){\n\n.contactInfo a{\n    font-size: 0.55rem;\n}\n}\n\n@media(max-width: 768px){\n    .contactInfo{\n        padding: 0 1rem;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mZWVkYmFjay9mZWVkYmFjay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFFBQVE7O0FBRVI7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBLFlBQVk7O0FBRVo7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFDQTtJQUNJLFdBQVc7QUFDZjs7QUFDQTs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBOztBQUNBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ZlZWRiYWNrL2ZlZWRiYWNrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDU1MgKi9cblxuLmNsci1jb250cm9sLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbiN2ZXJ0aWNhbC10ZXh0YXJlYS1iYXNpYyB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbmZvcm0gYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG59XG5cbi5zdWJtaXNzaW9uU3VjY2Vzc2Z1bGx7XG4gICAgY29sb3I6IGdyZWVuO1xufVxuXG4uc3VibWlzc2lvbkVycm9ye1xuICAgIGNvbG9yOiByZWQ7XG59XG5cbi8qIENvbnRhY3QgKi9cblxuLmNvbnRhY3RJbmZvIHtcbiAgICBtYXJnaW46IDVyZW0gMCAzcmVtO1xufVxuXG4uY29udGFjdEluZm8gcCB7XG4gICAgbWFyZ2luLXRvcDogMC4ycmVtO1xufVxuXG4uY29udGFjdEluZm8gbGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiAjNDQ0O1xuICAgIGZvbnQtc2l6ZTogLjU0MTY2N3JlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxpbmUtaGVpZ2h0OiAuNzVyZW07XG59XG5cbi5jb250YWN0SW5mbyBhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb2xvcjogIzAwMjQzNztcbn1cbi5jb250ZW50LWFyZWEgLmZvcm0tYmd7XG4gICAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgICBwYWRkaW5nOiAxcmVtO1xufVxuLmNsci10ZXh0YXJlYS13cmFwcGVyIHRleHRhcmVhe1xuICAgIHdpZHRoOiAxMDAlO1xufVxuQG1lZGlhKG1heC13aWR0aDogMTAyNHB4KXtcblxuLmNvbnRhY3RJbmZvIGF7XG4gICAgZm9udC1zaXplOiAwLjU1cmVtO1xufVxufVxuQG1lZGlhKG1heC13aWR0aDogNzY4cHgpe1xuICAgIC5jb250YWN0SW5mb3tcbiAgICAgICAgcGFkZGluZzogMCAxcmVtO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/feedback/feedback.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/feedback/feedback.component.ts ***!
  \***********************************************************/
/*! exports provided: FeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function() { return FeedbackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_feedback_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/feedback.service */ "./src/app/services/feedback.service.ts");



var FeedbackComponent = /** @class */ (function () {
    function FeedbackComponent(feedbackService) {
        this.feedbackService = feedbackService;
        this.feedbackPoint = '';
        this.feedBackText = '';
        this.isFeedbackResponse = false;
        this.feedbackResponse = '';
        this.isError = true;
        this.formFields = [];
        this.tempFormValues = [];
        this.formValues = {};
    }
    FeedbackComponent.prototype.ngOnInit = function () {
        this.getFormFields();
    };
    FeedbackComponent.prototype.setFeedbaclValue = function (feedbackPoint) {
        this.feedbackPoint = feedbackPoint;
    };
    FeedbackComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        this.feedbackService.submitFeedbackForm(Object.values(this.formValues)).subscribe(function (data) {
            _this.isError = data.status;
            _this.isFeedbackResponse = true;
            _this.feedbackResponse = data.message;
            _this.submitted = false;
            _this.formFields = JSON.parse(JSON.stringify(_this.formFields));
            _this.formValues = JSON.parse(JSON.stringify(_this.tempFormValues));
        });
    };
    FeedbackComponent.prototype.getFormFields = function () {
        var _this = this;
        this.feedbackService.getFeedbackFormFields().subscribe(function (result) {
            if (result.status == true) {
                _this.formFields = result.data;
                _this.formFields.forEach(function (formField) {
                    _this.formValues[formField.id] = {
                        'id': formField.id,
                        'value': null,
                        'option_id': null,
                        'option_ids': {}
                    };
                });
                _this.tempFormValues = JSON.parse(JSON.stringify(_this.formValues));
            }
        });
    };
    FeedbackComponent.ctorParameters = function () { return [
        { type: src_app_services_feedback_service__WEBPACK_IMPORTED_MODULE_2__["FeedbackService"] }
    ]; };
    FeedbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-feedback',
            template: __webpack_require__(/*! raw-loader!./feedback.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/feedback/feedback.component.html"),
            styles: [__webpack_require__(/*! ./feedback.component.css */ "./src/app/components/feedback/feedback.component.css")]
        })
    ], FeedbackComponent);
    return FeedbackComponent;
}());



/***/ }),

/***/ "./src/app/components/filter-textbox/filter-textbox.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/filter-textbox/filter-textbox.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".filterSection {\n    margin: 2rem 0 1rem;\n    padding: 0.5rem;\n}\n\n.filterSection .clr-form-control {\n    margin: 0;\n}\n\n.filterSection .clr-row {\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9maWx0ZXItdGV4dGJveC9maWx0ZXItdGV4dGJveC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBQ0E7SUFDSSx5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHlCQUE4QjtZQUE5Qiw4QkFBOEI7QUFDbEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ZpbHRlci10ZXh0Ym94L2ZpbHRlci10ZXh0Ym94LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsdGVyU2VjdGlvbiB7XG4gICAgbWFyZ2luOiAycmVtIDAgMXJlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG59XG5cbi5maWx0ZXJTZWN0aW9uIC5jbHItZm9ybS1jb250cm9sIHtcbiAgICBtYXJnaW46IDA7XG59XG4uZmlsdGVyU2VjdGlvbiAuY2xyLXJvdyB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59Il19 */"

/***/ }),

/***/ "./src/app/components/filter-textbox/filter-textbox.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/filter-textbox/filter-textbox.component.ts ***!
  \***********************************************************************/
/*! exports provided: FilterTextboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterTextboxComponent", function() { return FilterTextboxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterTextboxComponent = /** @class */ (function () {
    function FilterTextboxComponent() {
        this.keywordEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    FilterTextboxComponent.prototype.ngOnInit = function () {
    };
    FilterTextboxComponent.prototype.filterAssetsByKeyword = function (event) {
        this.keywordEvent.emit(event.target.value);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], FilterTextboxComponent.prototype, "keywordEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], FilterTextboxComponent.prototype, "assetKeyword", void 0);
    FilterTextboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-filter-textbox',
            template: __webpack_require__(/*! raw-loader!./filter-textbox.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/filter-textbox/filter-textbox.component.html"),
            styles: [__webpack_require__(/*! ./filter-textbox.component.css */ "./src/app/components/filter-textbox/filter-textbox.component.css")]
        })
    ], FilterTextboxComponent);
    return FilterTextboxComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Footer css */\n\nfooter {\n    padding: 1rem 1rem 5rem; \n    font-weight: 300;\n    line-height: 1rem;\n    box-sizing: border-box;\n    border: 0px;\n    border-top: 0.2rem solid;\n    border-image-source: rgba(0,177,221,1);\n    border-image-source: -moz-linear-gradient(-45deg, rgba(0,177,221,1) 0%, rgba(0,170,217,1) 10%, rgba(0,168,214,1) 20%, rgba(0,161,210,1) 30%, rgba(0,155,206,1) 40%, rgba(0,148,202,1) 50%, rgba(0,143,199,1) 60%, rgba(0,137,195,1) 70%, rgba(0,131,191,1) 80%, rgba(0,128,188,1) 90%, rgba(0,120,184,1) 100%);\n    border-image-source: -webkit-gradient(left top, right bottom, color-stop(0%, rgba(0,177,221,1)), color-stop(10%, rgba(0,170,217,1)), color-stop(20%, rgba(0,168,214,1)), color-stop(30%, rgba(0,161,210,1)), color-stop(40%, rgba(0,155,206,1)), color-stop(50%, rgba(0,148,202,1)), color-stop(60%, rgba(0,143,199,1)), color-stop(70%, rgba(0,137,195,1)), color-stop(80%, rgba(0,131,191,1)), color-stop(90%, rgba(0,128,188,1)), color-stop(100%, rgba(0,120,184,1)));\n    border-image-source: -webkit-linear-gradient(-45deg, rgba(0,177,221,1) 0%, rgba(0,170,217,1) 10%, rgba(0,168,214,1) 20%, rgba(0,161,210,1) 30%, rgba(0,155,206,1) 40%, rgba(0,148,202,1) 50%, rgba(0,143,199,1) 60%, rgba(0,137,195,1) 70%, rgba(0,131,191,1) 80%, rgba(0,128,188,1) 90%, rgba(0,120,184,1) 100%);\n    border-image-source: -o-linear-gradient(-45deg, rgba(0,177,221,1) 0%, rgba(0,170,217,1) 10%, rgba(0,168,214,1) 20%, rgba(0,161,210,1) 30%, rgba(0,155,206,1) 40%, rgba(0,148,202,1) 50%, rgba(0,143,199,1) 60%, rgba(0,137,195,1) 70%, rgba(0,131,191,1) 80%, rgba(0,128,188,1) 90%, rgba(0,120,184,1) 100%);\n    border-image-source: -ms-linear-gradient(-45deg, rgba(0,177,221,1) 0%, rgba(0,170,217,1) 10%, rgba(0,168,214,1) 20%, rgba(0,161,210,1) 30%, rgba(0,155,206,1) 40%, rgba(0,148,202,1) 50%, rgba(0,143,199,1) 60%, rgba(0,137,195,1) 70%, rgba(0,131,191,1) 80%, rgba(0,128,188,1) 90%, rgba(0,120,184,1) 100%);\n    border-image-source: linear-gradient(135deg, rgba(0,177,221,1) 0%, rgba(0,170,217,1) 10%, rgba(0,168,214,1) 20%, rgba(0,161,210,1) 30%, rgba(0,155,206,1) 40%, rgba(0,148,202,1) 50%, rgba(0,143,199,1) 60%, rgba(0,137,195,1) 70%, rgba(0,131,191,1) 80%, rgba(0,128,188,1) 90%, rgba(0,120,184,1) 100%);\n    border-image-slice: 1;\n    margin: 4rem 0 0;\n    background-color: #ffffff;\n}\n\nfooter h1 {\n    font-size: 0.915rem;\n    color: #002437;\n    text-transform: uppercase;\n    line-height: 1rem;\n    font-weight: 500;\n}\n\nfooter h2 {\n    font-size: 0.835rem;\n    font-weight: 300;\n    color: #002437;\n    line-height: 1rem;\n}\n\nfooter p {\n    font-size: 0.67rem;\n    font-weight: 200;\n    color: #002437;     \n}\n\nfooter ul {\n    list-style: none;\n}\n\nfooter ul li {\n    margin-top: 0.5rem;\n}\n\nfooter ul li a {\n    text-decoration: none;\n    color: #002437;\n}\n\nfooter .clr-row > div {\n    margin-top: 1rem;\n}\n\nfooter.withSidebar {\n    margin: 4rem -1rem 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZUFBZTs7QUFFZjtJQUNJLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLHNDQUFzQztJQUN0Qyw4U0FBOFM7SUFDOVMseWNBQXljO0lBQ3pjLGlUQUFpVDtJQUNqVCw0U0FBNFM7SUFDNVMsNlNBQTZTO0lBQzdTLHlTQUF5UztJQUN6UyxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRm9vdGVyIGNzcyAqL1xuXG5mb290ZXIge1xuICAgIHBhZGRpbmc6IDFyZW0gMXJlbSA1cmVtOyBcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyOiAwcHg7XG4gICAgYm9yZGVyLXRvcDogMC4ycmVtIHNvbGlkO1xuICAgIGJvcmRlci1pbWFnZS1zb3VyY2U6IHJnYmEoMCwxNzcsMjIxLDEpO1xuICAgIGJvcmRlci1pbWFnZS1zb3VyY2U6IC1tb3otbGluZWFyLWdyYWRpZW50KC00NWRlZywgcmdiYSgwLDE3NywyMjEsMSkgMCUsIHJnYmEoMCwxNzAsMjE3LDEpIDEwJSwgcmdiYSgwLDE2OCwyMTQsMSkgMjAlLCByZ2JhKDAsMTYxLDIxMCwxKSAzMCUsIHJnYmEoMCwxNTUsMjA2LDEpIDQwJSwgcmdiYSgwLDE0OCwyMDIsMSkgNTAlLCByZ2JhKDAsMTQzLDE5OSwxKSA2MCUsIHJnYmEoMCwxMzcsMTk1LDEpIDcwJSwgcmdiYSgwLDEzMSwxOTEsMSkgODAlLCByZ2JhKDAsMTI4LDE4OCwxKSA5MCUsIHJnYmEoMCwxMjAsMTg0LDEpIDEwMCUpO1xuICAgIGJvcmRlci1pbWFnZS1zb3VyY2U6IC13ZWJraXQtZ3JhZGllbnQobGVmdCB0b3AsIHJpZ2h0IGJvdHRvbSwgY29sb3Itc3RvcCgwJSwgcmdiYSgwLDE3NywyMjEsMSkpLCBjb2xvci1zdG9wKDEwJSwgcmdiYSgwLDE3MCwyMTcsMSkpLCBjb2xvci1zdG9wKDIwJSwgcmdiYSgwLDE2OCwyMTQsMSkpLCBjb2xvci1zdG9wKDMwJSwgcmdiYSgwLDE2MSwyMTAsMSkpLCBjb2xvci1zdG9wKDQwJSwgcmdiYSgwLDE1NSwyMDYsMSkpLCBjb2xvci1zdG9wKDUwJSwgcmdiYSgwLDE0OCwyMDIsMSkpLCBjb2xvci1zdG9wKDYwJSwgcmdiYSgwLDE0MywxOTksMSkpLCBjb2xvci1zdG9wKDcwJSwgcmdiYSgwLDEzNywxOTUsMSkpLCBjb2xvci1zdG9wKDgwJSwgcmdiYSgwLDEzMSwxOTEsMSkpLCBjb2xvci1zdG9wKDkwJSwgcmdiYSgwLDEyOCwxODgsMSkpLCBjb2xvci1zdG9wKDEwMCUsIHJnYmEoMCwxMjAsMTg0LDEpKSk7XG4gICAgYm9yZGVyLWltYWdlLXNvdXJjZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCByZ2JhKDAsMTc3LDIyMSwxKSAwJSwgcmdiYSgwLDE3MCwyMTcsMSkgMTAlLCByZ2JhKDAsMTY4LDIxNCwxKSAyMCUsIHJnYmEoMCwxNjEsMjEwLDEpIDMwJSwgcmdiYSgwLDE1NSwyMDYsMSkgNDAlLCByZ2JhKDAsMTQ4LDIwMiwxKSA1MCUsIHJnYmEoMCwxNDMsMTk5LDEpIDYwJSwgcmdiYSgwLDEzNywxOTUsMSkgNzAlLCByZ2JhKDAsMTMxLDE5MSwxKSA4MCUsIHJnYmEoMCwxMjgsMTg4LDEpIDkwJSwgcmdiYSgwLDEyMCwxODQsMSkgMTAwJSk7XG4gICAgYm9yZGVyLWltYWdlLXNvdXJjZTogLW8tbGluZWFyLWdyYWRpZW50KC00NWRlZywgcmdiYSgwLDE3NywyMjEsMSkgMCUsIHJnYmEoMCwxNzAsMjE3LDEpIDEwJSwgcmdiYSgwLDE2OCwyMTQsMSkgMjAlLCByZ2JhKDAsMTYxLDIxMCwxKSAzMCUsIHJnYmEoMCwxNTUsMjA2LDEpIDQwJSwgcmdiYSgwLDE0OCwyMDIsMSkgNTAlLCByZ2JhKDAsMTQzLDE5OSwxKSA2MCUsIHJnYmEoMCwxMzcsMTk1LDEpIDcwJSwgcmdiYSgwLDEzMSwxOTEsMSkgODAlLCByZ2JhKDAsMTI4LDE4OCwxKSA5MCUsIHJnYmEoMCwxMjAsMTg0LDEpIDEwMCUpO1xuICAgIGJvcmRlci1pbWFnZS1zb3VyY2U6IC1tcy1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCByZ2JhKDAsMTc3LDIyMSwxKSAwJSwgcmdiYSgwLDE3MCwyMTcsMSkgMTAlLCByZ2JhKDAsMTY4LDIxNCwxKSAyMCUsIHJnYmEoMCwxNjEsMjEwLDEpIDMwJSwgcmdiYSgwLDE1NSwyMDYsMSkgNDAlLCByZ2JhKDAsMTQ4LDIwMiwxKSA1MCUsIHJnYmEoMCwxNDMsMTk5LDEpIDYwJSwgcmdiYSgwLDEzNywxOTUsMSkgNzAlLCByZ2JhKDAsMTMxLDE5MSwxKSA4MCUsIHJnYmEoMCwxMjgsMTg4LDEpIDkwJSwgcmdiYSgwLDEyMCwxODQsMSkgMTAwJSk7XG4gICAgYm9yZGVyLWltYWdlLXNvdXJjZTogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgwLDE3NywyMjEsMSkgMCUsIHJnYmEoMCwxNzAsMjE3LDEpIDEwJSwgcmdiYSgwLDE2OCwyMTQsMSkgMjAlLCByZ2JhKDAsMTYxLDIxMCwxKSAzMCUsIHJnYmEoMCwxNTUsMjA2LDEpIDQwJSwgcmdiYSgwLDE0OCwyMDIsMSkgNTAlLCByZ2JhKDAsMTQzLDE5OSwxKSA2MCUsIHJnYmEoMCwxMzcsMTk1LDEpIDcwJSwgcmdiYSgwLDEzMSwxOTEsMSkgODAlLCByZ2JhKDAsMTI4LDE4OCwxKSA5MCUsIHJnYmEoMCwxMjAsMTg0LDEpIDEwMCUpO1xuICAgIGJvcmRlci1pbWFnZS1zbGljZTogMTtcbiAgICBtYXJnaW46IDRyZW0gMCAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbmZvb3RlciBoMSB7XG4gICAgZm9udC1zaXplOiAwLjkxNXJlbTtcbiAgICBjb2xvcjogIzAwMjQzNztcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbmZvb3RlciBoMiB7XG4gICAgZm9udC1zaXplOiAwLjgzNXJlbTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGNvbG9yOiAjMDAyNDM3O1xuICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xufVxuXG5mb290ZXIgcCB7XG4gICAgZm9udC1zaXplOiAwLjY3cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgY29sb3I6ICMwMDI0Mzc7ICAgICBcbn1cblxuZm9vdGVyIHVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5mb290ZXIgdWwgbGkge1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cblxuZm9vdGVyIHVsIGxpIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogIzAwMjQzNztcbn1cblxuZm9vdGVyIC5jbHItcm93ID4gZGl2IHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG5mb290ZXIud2l0aFNpZGViYXIge1xuICAgIG1hcmdpbjogNHJlbSAtMXJlbSAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var FooterComponent = /** @class */ (function () {
    function FooterComponent(router) {
        var _this = this;
        this.router = router;
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                var urlDetails = event.url;
                var urlSegment = urlDetails.split('/');
                if (urlSegment.length == 1 || urlSegment[1] == "" || urlSegment[1] == "search") {
                    _this.isInnerPage = false;
                }
                else {
                    _this.isInnerPage = true;
                }
            }
        });
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header .header-nav .nav-link {\n    text-align: left;\n}\n\n.dropdown-menu button {\n    font-weight: 500;\n}\n\n.dropdown-menu button span {\n    white-space: normal;\n    display: block;\n    font-size: 0.9em;\n    line-height: 1.5em;\n    font-weight: 300;\n}\n\n.loginUser span {\n    position: absolute;\n    width: 6px;\n    height: 6px;\n    border-radius: 3px;\n    background: red;\n    top: 40%;\n    right: 0.7rem;\n}\n\n.loginUser {\n    outline: none;\n}\n\n.mobile-productsMenu{\n    display: none;\n  }\n\n@media (max-width: 768px){\n    .mobile-productsMenu{\n      display: block;\n      height: auto;\n    }\n    .mob-hide{\n        display: none;\n    }\n  }\n\ndiv.header-nav form.search input:focus {\n    outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixRQUFRO0lBQ1IsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSxhQUFhO0VBQ2Y7O0FBRUE7SUFDRTtNQUNFLGNBQWM7TUFDZCxZQUFZO0lBQ2Q7SUFDQTtRQUNJLGFBQWE7SUFDakI7RUFDRjs7QUFFRjtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIgLmhlYWRlci1uYXYgLm5hdi1saW5rIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uZHJvcGRvd24tbWVudSBidXR0b24ge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5kcm9wZG93bi1tZW51IGJ1dHRvbiBzcGFuIHtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5sb2dpblVzZXIgc3BhbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA2cHg7XG4gICAgaGVpZ2h0OiA2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICB0b3A6IDQwJTtcbiAgICByaWdodDogMC43cmVtO1xufVxuXG4ubG9naW5Vc2VyIHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuLm1vYmlsZS1wcm9kdWN0c01lbnV7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCl7XG4gICAgLm1vYmlsZS1wcm9kdWN0c01lbnV7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG4gICAgLm1vYi1oaWRle1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG5kaXYuaGVhZGVyLW5hdiBmb3JtLnNlYXJjaCBpbnB1dDpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_cmbu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cmbu.service */ "./src/app/services/cmbu.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/notification.service */ "./src/app/services/notification.service.ts");






var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(service, route, authenticationService, router, notificationService) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.authenticationService = authenticationService;
        this.router = router;
        this.notificationService = notificationService;
        // Creating variable to store the details of all products
        this.productList = [];
        this.isUserLoggedIn = false;
        this.isLoginPage = false;
        this.currentPathname = '';
        this.isCollapsed = false;
        this.mobAutomation = false;
        this.mobOperations = false;
        this.mobPartners = false;
        this.isDatalistVisible = false;
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                if (location.pathname != '/') {
                    _this.currentPathname = '?returnUrl=' + location.pathname;
                }
                var urlDetails = event.url;
                var urlSegment = urlDetails.split('/');
                if ((urlSegment[1]).indexOf("login") >= 0) {
                    _this.isLoginPage = true;
                }
                else {
                    _this.isLoginPage = false;
                }
                if (event.url != '/null') {
                    _paq.push(['setCustomUrl', event.url]);
                    _paq.push(['setDocumentTitle', 'Cloud Demo Portal']);
                    _paq.push(['trackPageView']);
                }
            }
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.authenticationService.isLoggedIn()) {
            this.isUserLoggedIn = true;
        }
        this.service.getAllProducts().subscribe(function (result) {
            _this.productList = result.data;
        });
        this.checkNewNotification();
    };
    HeaderComponent.prototype.checkNewNotification = function () {
        var _this = this;
        if (this.authenticationService.isLoggedIn()) {
            this.notificationService.checkNewNotifications().subscribe(function (result) {
                _this.service.isAnyNewNotification = result.isAnyNewNotification;
                _this.notificationService.isSubscribed = result.isSubscribed;
            });
        }
    };
    HeaderComponent.prototype.ngAfterContentChecked = function () {
        if (this.authenticationService.isLoggedIn()) {
            this.isUserLoggedIn = true;
        }
    };
    HeaderComponent.prototype.getSearchKeyword = function (event) {
        this.searchKeywordHeader = event.target.value;
    };
    HeaderComponent.prototype.redirectPage = function () {
        if (this.searchKeywordHeader && this.searchKeywordHeader.trim() != "") {
            this.searchKeywordHeader = this.searchKeywordHeader.trim();
            var searPageURL = '/search/all-assets/' + this.searchKeywordHeader;
            this.router.navigateByUrl(searPageURL);
        }
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: src_app_services_cmbu_service__WEBPACK_IMPORTED_MODULE_2__["CmbuService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], HeaderComponent.prototype, "searchKeywordHeader", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".homecontainer.main-container .content-container .content-area {\n    padding: 0;\n    background: #FFF;\n}\n\n.homecontainer {\n    background-color: #fff;\n}\n\n.homecontainer .content-area{\n    padding: 0;\n}\n\nh1 { \n    font-weight: 300;\n}\n\n/* discoverSlider */\n\n.discoverSlider h1 {\n    background: #fff;\n    max-width: 1700px;\n    margin: 1rem auto;\n    padding: 0 2.5rem;\n}\n\n.discoverSlider h1 span {\n    color: #0078B7;\n    font-size: 0.6rem;\n}\n\n.discoverSlider > div {\n    background: #F3F3F3\n}\n\n.discoverSliderContent {\n    max-width: 1700px;\n    margin: 0 auto;\n    padding: 2rem 2.5rem;\n}\n\n/* essentialsSlider */\n\n.essentialsSlider h1 {\n    background: #fff;\n    max-width: 1700px;\n    margin: 1rem auto;\n    padding: 5rem 2.5rem 0;\n}\n\n.essentialsSlider h1 span {\n    color: #0078B7;\n    font-size: 0.6rem;\n}\n\n.essentialsSlider > div {\n    background: #F3F3F3\n}\n\n.essentialsSliderContent {\n    max-width: 1700px;\n    margin: 0 auto;\n    padding: 2rem 2.5rem;\n}\n\n@media(max-width: 768px){\n    .discoverSliderContent, .essentialsSliderContent{\n        padding: 2rem;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUEsbUJBQW1COztBQUVuQjtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxvQkFBb0I7QUFDeEI7O0FBRUEscUJBQXFCOztBQUVyQjtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSTtBQUNKOztBQUdBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZWNvbnRhaW5lci5tYWluLWNvbnRhaW5lciAuY29udGVudC1jb250YWluZXIgLmNvbnRlbnQtYXJlYSB7XG4gICAgcGFkZGluZzogMDtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGO1xufVxuXG4uaG9tZWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLmhvbWVjb250YWluZXIgLmNvbnRlbnQtYXJlYXtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG5oMSB7IFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi8qIGRpc2NvdmVyU2xpZGVyICovXG5cbi5kaXNjb3ZlclNsaWRlciBoMSB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBtYXgtd2lkdGg6IDE3MDBweDtcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcbiAgICBwYWRkaW5nOiAwIDIuNXJlbTtcbn1cblxuLmRpc2NvdmVyU2xpZGVyIGgxIHNwYW4ge1xuICAgIGNvbG9yOiAjMDA3OEI3O1xuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xufVxuXG4uZGlzY292ZXJTbGlkZXIgPiBkaXYge1xuICAgIGJhY2tncm91bmQ6ICNGM0YzRjNcbn1cblxuLmRpc2NvdmVyU2xpZGVyQ29udGVudCB7XG4gICAgbWF4LXdpZHRoOiAxNzAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZzogMnJlbSAyLjVyZW07XG59XG5cbi8qIGVzc2VudGlhbHNTbGlkZXIgKi9cblxuLmVzc2VudGlhbHNTbGlkZXIgaDEge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgbWF4LXdpZHRoOiAxNzAwcHg7XG4gICAgbWFyZ2luOiAxcmVtIGF1dG87XG4gICAgcGFkZGluZzogNXJlbSAyLjVyZW0gMDtcbn1cblxuLmVzc2VudGlhbHNTbGlkZXIgaDEgc3BhbiB7XG4gICAgY29sb3I6ICMwMDc4Qjc7XG4gICAgZm9udC1zaXplOiAwLjZyZW07XG59XG5cbi5lc3NlbnRpYWxzU2xpZGVyID4gZGl2IHtcbiAgICBiYWNrZ3JvdW5kOiAjRjNGM0YzXG59XG5cblxuLmVzc2VudGlhbHNTbGlkZXJDb250ZW50IHtcbiAgICBtYXgtd2lkdGg6IDE3MDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nOiAycmVtIDIuNXJlbTtcbn1cblxuQG1lZGlhKG1heC13aWR0aDogNzY4cHgpe1xuICAgIC5kaXNjb3ZlclNsaWRlckNvbnRlbnQsIC5lc3NlbnRpYWxzU2xpZGVyQ29udGVudHtcbiAgICAgICAgcGFkZGluZzogMnJlbTtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_cmbu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cmbu.service */ "./src/app/services/cmbu.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(service) {
        this.service = service;
        this.assetDetails = '';
        this.useCaseAssets = [];
        this.useCaseAssetsCat = [];
        this.isEssentialToDisplay = true;
        this.tabindexValue = 5;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getLatestAssets();
        this.getLatestUseCases();
        if (window.screen.width < 460) {
            this.tabindexValue = 0;
        }
        else if (window.screen.width < 1200) {
            this.tabindexValue = 2;
        }
    };
    HomeComponent.prototype.getLatestAssets = function () {
        var _this = this;
        this.service.getLatestAssets('', 1, 10).subscribe(function (result) {
            if (result.status) {
                var totalCount = parseInt(result.pagination.totalCount);
                if ((totalCount < 10) && ((totalCount % 2) != 0)) {
                    result.assets.pop();
                    _this.assetDetails = result.assets;
                }
                else {
                    _this.assetDetails = result.assets;
                }
            }
        });
    };
    HomeComponent.prototype.getLatestUseCases = function () {
        var _this = this;
        this.service.getLatestUseCasesCategories().subscribe(function (data) {
            _this.useCaseAssets = data.data;
            if (_this.useCaseAssets.length == 0) {
                _this.isEssentialToDisplay = false;
            }
            else {
                _this.isEssentialToDisplay = true;
            }
        });
    };
    HomeComponent.ctorParameters = function () { return [
        { type: src_app_services_cmbu_service__WEBPACK_IMPORTED_MODULE_2__["CmbuService"] }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/inner-page/inner-page.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/inner-page/inner-page.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Custom CSS */\n\n/* navigation */\n\n.header .header-nav .nav-link {\n    text-align: left;\n}\n\n.dropdown-menu button span {\n    white-space: normal;\n    display: block;\n    font-size: 0.9em;\n    line-height: 1.5em;\n}\n\n/* Side nav */\n\n.sidenav .sidenav-content>.nav-link {\n    margin: 0.5rem 0 0 0;\n    padding: 0.5rem 1rem;\n}\n\n/* Card */\n\n.card-header {\n    font-size: .60rem;\n    text-transform: uppercase;\n    color: #737373;\n}\n\n.card-header span {\n    float: right;\n    position: absolute;\n    right: 0.75rem;\n    top: 0.75rem;\n}\n\n.card-footer .btn-link{\n    color: #ADBAC4;\n}\n\n/* Pagination */\n\n.pagination {\n    margin-top: 2rem;\n    padding: 0.5rem;\n    background-color: #F7F7F7;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n}\n\n.pagination .clr-row {\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n}\n\n.pagination .assetsPerPage {\n    display: inline;\n}\n\n.pagination .pagination-list {\n    -webkit-box-align: center;\n            align-items: center;\n}\n\n.pagination div:last-child {\n    text-align: right;\n}\n\n/* Filter Section */\n\n.filterSection {\n    margin: 2rem 0 1rem;\n    padding: 0.5rem;\n}\n\n.filterSection .clr-form-control {\n    margin: 0;\n}\n\n.filterSection .clr-row {\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n}\n\n/* Page title */\n\n.pageTitle {\n    margin-top: 2rem;\n}\n\n.pageTitle h1, .pageTitle p {\n    margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbm5lci1wYWdlL2lubmVyLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxlQUFlOztBQUVmLGVBQWU7O0FBQ2Y7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUEsYUFBYTs7QUFDYjtJQUNJLG9CQUFvQjtJQUNwQixvQkFBb0I7QUFDeEI7O0FBR0EsU0FBUzs7QUFFVDtJQUNJLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBLGVBQWU7O0FBRWY7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHlCQUF5QjtJQUN6Qix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHlCQUE4QjtZQUE5Qiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSx5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHlCQUE4QjtZQUE5Qiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQW1CO1lBQW5CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFHQSxtQkFBbUI7O0FBRW5CO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBQ0E7SUFDSSx5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHlCQUE4QjtZQUE5Qiw4QkFBOEI7QUFDbEM7O0FBRUEsZUFBZTs7QUFFZjtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFNBQVM7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5uZXItcGFnZS9pbm5lci1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDdXN0b20gQ1NTICovXG5cbi8qIG5hdmlnYXRpb24gKi9cbi5oZWFkZXIgLmhlYWRlci1uYXYgLm5hdi1saW5rIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uZHJvcGRvd24tbWVudSBidXR0b24gc3BhbiB7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDAuOWVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbn1cblxuLyogU2lkZSBuYXYgKi9cbi5zaWRlbmF2IC5zaWRlbmF2LWNvbnRlbnQ+Lm5hdi1saW5rIHtcbiAgICBtYXJnaW46IDAuNXJlbSAwIDAgMDtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbn1cblxuXG4vKiBDYXJkICovXG5cbi5jYXJkLWhlYWRlciB7XG4gICAgZm9udC1zaXplOiAuNjByZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogIzczNzM3Mztcbn1cblxuLmNhcmQtaGVhZGVyIHNwYW4ge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDAuNzVyZW07XG4gICAgdG9wOiAwLjc1cmVtO1xufVxuXG4uY2FyZC1mb290ZXIgLmJ0bi1saW5re1xuICAgIGNvbG9yOiAjQURCQUM0O1xufVxuXG4vKiBQYWdpbmF0aW9uICovXG5cbi5wYWdpbmF0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGN0Y3O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ucGFnaW5hdGlvbiAuY2xyLXJvdyB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5wYWdpbmF0aW9uIC5hc3NldHNQZXJQYWdlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi5wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLWxpc3Qge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wYWdpbmF0aW9uIGRpdjpsYXN0LWNoaWxkIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuXG4vKiBGaWx0ZXIgU2VjdGlvbiAqL1xuXG4uZmlsdGVyU2VjdGlvbiB7XG4gICAgbWFyZ2luOiAycmVtIDAgMXJlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG59XG5cbi5maWx0ZXJTZWN0aW9uIC5jbHItZm9ybS1jb250cm9sIHtcbiAgICBtYXJnaW46IDA7XG59XG4uZmlsdGVyU2VjdGlvbiAuY2xyLXJvdyB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi8qIFBhZ2UgdGl0bGUgKi9cblxuLnBhZ2VUaXRsZSB7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxuLnBhZ2VUaXRsZSBoMSwgLnBhZ2VUaXRsZSBwIHtcbiAgICBtYXJnaW46IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/inner-page/inner-page.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/inner-page/inner-page.component.ts ***!
  \***************************************************************/
/*! exports provided: InnerPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InnerPageComponent", function() { return InnerPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InnerPageComponent = /** @class */ (function () {
    function InnerPageComponent() {
    }
    InnerPageComponent.prototype.ngOnInit = function () {
    };
    InnerPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inner-page',
            template: __webpack_require__(/*! raw-loader!./inner-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/inner-page/inner-page.component.html"),
            styles: [__webpack_require__(/*! ./inner-page.component.css */ "./src/app/components/inner-page/inner-page.component.css")]
        })
    ], InnerPageComponent);
    return InnerPageComponent;
}());



/***/ }),

/***/ "./src/app/components/library-sidebar/library-sidebar.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/library-sidebar/library-sidebar.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlicmFyeS1zaWRlYmFyL2xpYnJhcnktc2lkZWJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/library-sidebar/library-sidebar.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/library-sidebar/library-sidebar.component.ts ***!
  \*************************************************************************/
/*! exports provided: LibrarySidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibrarySidebarComponent", function() { return LibrarySidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var src_app_services_cmbu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/cmbu.service */ "./src/app/services/cmbu.service.ts");





var LibrarySidebarComponent = /** @class */ (function () {
    function LibrarySidebarComponent(router, cookieService, cmbuService) {
        this.router = router;
        this.cookieService = cookieService;
        this.cmbuService = cmbuService;
        this.showPlaylistPopup = false;
    }
    LibrarySidebarComponent.prototype.ngOnInit = function () {
    };
    LibrarySidebarComponent.prototype.isshowPlaylistPopup = function () {
        if (this.cookieService.get('accessToken')) {
            this.showPlaylistPopup = true;
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    LibrarySidebarComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] },
        { type: src_app_services_cmbu_service__WEBPACK_IMPORTED_MODULE_4__["CmbuService"] }
    ]; };
    LibrarySidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-library-sidebar',
            template: __webpack_require__(/*! raw-loader!./library-sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/library-sidebar/library-sidebar.component.html"),
            host: { 'class.clr-nav-level-2': 'true' },
            styles: [__webpack_require__(/*! ./library-sidebar.component.css */ "./src/app/components/library-sidebar/library-sidebar.component.css")]
        })
    ], LibrarySidebarComponent);
    return LibrarySidebarComponent;
}());



/***/ }),

/***/ "./src/app/components/library/library.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/library/library.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/* Create Playlist Popup */\n\n.createPlaylistPopup .clr-input-wrapper{\n    margin: 2rem 0;\n    max-height: 2rem;\n}\n\n.createPlaylistPopup .clr-input-wrapper input{\n    width: 73%;\n    margin-right: 2%\n}\n\n.createPlaylistPopup .clr-input-wrapper button{\n    margin: 0;\n    width: 25%;\n}\n\n/* Add to Playlist Popup */\n\n.addToPlaylistPopup .clr-input-wrapper{\n    max-height: 2rem;\n}\n\n.addToPlaylistPopup .modal-body {\n    padding: 2rem .125rem 0;\n}\n\n.addToPlaylistPopup .clr-input-wrapper input {\n    width: 73%;\n    margin-right: 2%\n}\n\n.addToPlaylistPopup .clr-input-wrapper button {\n    margin: 0;\n    width: 25%;\n}\n\n.addToPlaylistPopup .listOfExistingPlaylists {\n    background-color: #F7F7F7;\n    padding: 1rem;\n    margin-top: 2rem;\n}\n\n.addToPlaylistPopup .listOfExistingPlaylists .listOfPlaylists div {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    box-shadow: 0 0.125rem 0 0 #d7d7d7;\n    border-radius: .125rem;\n    border: 1px solid #d7d7d7;\n    padding: 0.25rem;\n    background-color: #ffffff;\n    margin-top: 1rem;\n}\n\n.addToPlaylistPopup .listOfExistingPlaylists .listOfPlaylists div p, .addToPlaylistPopup .listOfExistingPlaylists .listOfPlaylists div button {\n    margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saWJyYXJ5L2xpYnJhcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsMEJBQTBCOztBQUUxQjtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Y7QUFDSjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBR0EsMEJBQTBCOztBQUUxQjtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFVBQVU7SUFDVjtBQUNKOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQix5QkFBOEI7WUFBOUIsOEJBQThCO0lBQzlCLGtDQUFrQztJQUNsQyxzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksU0FBUztBQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9saWJyYXJ5L2xpYnJhcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyogQ3JlYXRlIFBsYXlsaXN0IFBvcHVwICovXG5cbi5jcmVhdGVQbGF5bGlzdFBvcHVwIC5jbHItaW5wdXQtd3JhcHBlcntcbiAgICBtYXJnaW46IDJyZW0gMDtcbiAgICBtYXgtaGVpZ2h0OiAycmVtO1xufVxuXG4uY3JlYXRlUGxheWxpc3RQb3B1cCAuY2xyLWlucHV0LXdyYXBwZXIgaW5wdXR7XG4gICAgd2lkdGg6IDczJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDIlXG59XG5cbi5jcmVhdGVQbGF5bGlzdFBvcHVwIC5jbHItaW5wdXQtd3JhcHBlciBidXR0b257XG4gICAgbWFyZ2luOiAwO1xuICAgIHdpZHRoOiAyNSU7XG59XG5cblxuLyogQWRkIHRvIFBsYXlsaXN0IFBvcHVwICovXG5cbi5hZGRUb1BsYXlsaXN0UG9wdXAgLmNsci1pbnB1dC13cmFwcGVye1xuICAgIG1heC1oZWlnaHQ6IDJyZW07XG59XG5cbi5hZGRUb1BsYXlsaXN0UG9wdXAgLm1vZGFsLWJvZHkge1xuICAgIHBhZGRpbmc6IDJyZW0gLjEyNXJlbSAwO1xufVxuXG4uYWRkVG9QbGF5bGlzdFBvcHVwIC5jbHItaW5wdXQtd3JhcHBlciBpbnB1dCB7XG4gICAgd2lkdGg6IDczJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDIlXG59XG5cbi5hZGRUb1BsYXlsaXN0UG9wdXAgLmNsci1pbnB1dC13cmFwcGVyIGJ1dHRvbiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHdpZHRoOiAyNSU7XG59XG5cbi5hZGRUb1BsYXlsaXN0UG9wdXAgLmxpc3RPZkV4aXN0aW5nUGxheWxpc3RzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGN0Y3O1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxuLmFkZFRvUGxheWxpc3RQb3B1cCAubGlzdE9mRXhpc3RpbmdQbGF5bGlzdHMgLmxpc3RPZlBsYXlsaXN0cyBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYm94LXNoYWRvdzogMCAwLjEyNXJlbSAwIDAgI2Q3ZDdkNztcbiAgICBib3JkZXItcmFkaXVzOiAuMTI1cmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkN2Q3ZDc7XG4gICAgcGFkZGluZzogMC4yNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi5hZGRUb1BsYXlsaXN0UG9wdXAgLmxpc3RPZkV4aXN0aW5nUGxheWxpc3RzIC5saXN0T2ZQbGF5bGlzdHMgZGl2IHAsIC5hZGRUb1BsYXlsaXN0UG9wdXAgLmxpc3RPZkV4aXN0aW5nUGxheWxpc3RzIC5saXN0T2ZQbGF5bGlzdHMgZGl2IGJ1dHRvbiB7XG4gICAgbWFyZ2luOiAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/library/library.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/library/library.component.ts ***!
  \*********************************************************/
/*! exports provided: LibraryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryComponent", function() { return LibraryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_cmbu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/cmbu.service */ "./src/app/services/cmbu.service.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");





var LibraryComponent = /** @class */ (function () {
    function LibraryComponent(router, route, cmbuService, authenticationService) {
        this.router = router;
        this.route = route;
        this.cmbuService = cmbuService;
        this.authenticationService = authenticationService;
    }
    LibraryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.libraryTab(this.router.url);
        this.router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                _this.libraryTab(e.url);
            }
        });
        if (this.authenticationService.isLoggedIn()) {
            var self = this;
            setTimeout(function () {
                self.cmbuService.getLibrarySidebarMenuCount().subscribe(function (data) {
                    self.cmbuService.librarySidebarFavoriteCount = data.favorite_count;
                    self.cmbuService.librarySidebarPlaylistCount = data.playlist_count;
                });
            }, 100);
        }
    };
    LibraryComponent.prototype.libraryTab = function (url) {
        switch (url) {
            case '/library/usecases': {
                this.showLibraryTab = true;
                this.cmbuService.usecaseTabActive = true;
                break;
            }
            case '/library/playlists': {
                this.showLibraryTab = true;
                this.cmbuService.playlistTabActive = true;
                break;
            }
            case '/library/whatsnew': {
                this.showLibraryTab = true;
                this.cmbuService.whatsNewTabActive = true;
                break;
            }
            case '/library/toprated': {
                this.showLibraryTab = true;
                this.cmbuService.topratedTabActive = true;
                break;
            }
            default: {
                this.showLibraryTab = false;
                break;
            }
        }
    };
    LibraryComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_services_cmbu_service__WEBPACK_IMPORTED_MODULE_3__["CmbuService"] },
        { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
    ]; };
    LibraryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-library',
            template: __webpack_require__(/*! raw-loader!./library.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/library/library.component.html"),
            host: { '[class.content-container]': 'true' },
            styles: [__webpack_require__(/*! ./library.component.css */ "./src/app/components/library/library.component.css")]
        })
    ], LibraryComponent);
    return LibraryComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_cmbu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/cmbu.service */ "./src/app/services/cmbu.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(cmbuService, authenticationService, route, router) {
        this.cmbuService = cmbuService;
        this.authenticationService = authenticationService;
        this.route = route;
        this.router = router;
        this.returnUrl = '';
        this.assetAction = '';
        this.assetID = '';
        this.loginId = 1;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (data) {
            _this.assetID = data.get('assetID');
            _this.assetAction = data.get('assetAction');
        });
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        if (this.authenticationService.isLoggedIn()) {
            if (this.assetAction == 'like') {
                this.cmbuService.likeAssets(this.assetID).subscribe(function (data) {
                });
            }
            else if (this.assetAction == 'favourite') {
                this.cmbuService.addToFavourite(this.assetID).subscribe(function (data) {
                });
            }
            this.router.navigate([this.returnUrl]);
        }
        else {
            if (this.returnUrl == '/' && location.pathname != '/login') {
                this.returnUrl = location.pathname;
            }
            location.href = location.origin + "/auth/login?return_to=" + location.origin + '' + this.returnUrl;
            return false;
        }
    };
    LoginComponent.ctorParameters = function () { return [
        { type: src_app_services_cmbu_service__WEBPACK_IMPORTED_MODULE_4__["CmbuService"] },
        { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            // templateUrl: './login.component.html',
            template: '',
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/manage-playlist/manage-playlist.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/manage-playlist/manage-playlist.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Back button */\n\n.backButton {\n    background: none;\n    border: 0;\n    cursor: pointer;\n}\n\n/* Manage Playllist CSS */\n\n.playlistItemTile {\n    display: -webkit-box;\n    display: flex;\n    background: #fff;\n    padding: 1rem;\n    margin-top: 1rem;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n            align-items: center;    \n    box-shadow: 0 0.125rem 0 0 #d7d7d7;\n    border-radius: .125rem;\n}\n\n.playlistItemDetails {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n}\n\n.playlistItemDetails h4 {\n    margin: 0;\n    margin-right: 2rem;\n}\n\n.playlistItemDetails p {\n    margin: 0;\n}\n\n.playlistItemSetting clr-icon {\n    cursor: pointer;\n}\n\n/* Delete Playlist Buttom */\n\n.deletePlaylist {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n            flex-flow: row-reverse;\n    align-content: center;\n    margin: 1rem 0;\n    cursor: pointer;\n}\n\n.deletePlaylist clr-icon {\n    margin-right: 0.2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYW5hZ2UtcGxheWxpc3QvbWFuYWdlLXBsYXlsaXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCOztBQUVoQjtJQUNJLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsZUFBZTtBQUNuQjs7QUFFQSx5QkFBeUI7O0FBRXpCO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIseUJBQThCO1lBQTlCLDhCQUE4QjtJQUM5Qix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLGtDQUFrQztJQUNsQyxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksU0FBUztJQUNULGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUEsMkJBQTJCOztBQUUzQjtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDhCQUFzQjtJQUF0Qiw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFuYWdlLXBsYXlsaXN0L21hbmFnZS1wbGF5bGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQmFjayBidXR0b24gKi9cblxuLmJhY2tCdXR0b24ge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogTWFuYWdlIFBsYXlsbGlzdCBDU1MgKi9cblxuLnBsYXlsaXN0SXRlbVRpbGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgIFxuICAgIGJveC1zaGFkb3c6IDAgMC4xMjVyZW0gMCAwICNkN2Q3ZDc7XG4gICAgYm9yZGVyLXJhZGl1czogLjEyNXJlbTtcbn1cblxuLnBsYXlsaXN0SXRlbURldGFpbHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnBsYXlsaXN0SXRlbURldGFpbHMgaDQge1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XG59XG5cbi5wbGF5bGlzdEl0ZW1EZXRhaWxzIHAge1xuICAgIG1hcmdpbjogMDtcbn1cblxuLnBsYXlsaXN0SXRlbVNldHRpbmcgY2xyLWljb24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogRGVsZXRlIFBsYXlsaXN0IEJ1dHRvbSAqL1xuXG4uZGVsZXRlUGxheWxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiByb3ctcmV2ZXJzZTtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxcmVtIDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZGVsZXRlUGxheWxpc3QgY2xyLWljb24ge1xuICAgIG1hcmdpbi1yaWdodDogMC4ycmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/manage-playlist/manage-playlist.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/manage-playlist/manage-playlist.component.ts ***!
  \*************************************************************************/
/*! exports provided: ManagePlaylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagePlaylistComponent", function() { return ManagePlaylistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_playlists_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/playlists.service */ "./src/app/services/playlists.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_cmbu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/cmbu.service */ "./src/app/services/cmbu.service.ts");





var ManagePlaylistComponent = /** @class */ (function () {
    function ManagePlaylistComponent(playlistsService, router, route, cmbuService) {
        this.playlistsService = playlistsService;
        this.router = router;
        this.route = route;
        this.cmbuService = cmbuService;
        this.keyowrd = '';
        this.playlistAssets = [];
        this.pageSize = 10;
        this.currentPage = 1;
        this.playlistSlug = '';
    }
    ManagePlaylistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.getAssetsFromPlaylists(params['playlist-slug']);
            _this.playlistSlug = params['playlist-slug'];
        });
    };
    ManagePlaylistComponent.prototype.getAssetsFromPlaylists = function (playlistSlug) {
        var _this = this;
        this.playlistsService.getAssetsFromPlaylists(playlistSlug, this.keyowrd, this.currentPage, this.pageSize).subscribe(function (data) {
            if (!data.name) {
                _this.router.navigate(['/**'], { skipLocationChange: true });
                return false;
            }
            _this.playlist = data;
            _this.playlistAssets = data.assets;
        });
    };
    ManagePlaylistComponent.prototype.removeAssetsFromPlaylists = function (playlistSlug, assetId) {
        var _this = this;
        this.playlistsService.removeAssetsFromPlaylists(playlistSlug, assetId).subscribe(function (data) {
            if (data.status) {
                var currentAsset = _this.playlistAssets.find(function (x) { return x.assetId === assetId; });
                var index = _this.playlistAssets.indexOf(currentAsset);
                if (index !== -1) {
                    _this.playlistAssets.splice(index, 1);
                }
            }
        });
    };
    ManagePlaylistComponent.prototype.deletePlaylist = function (playlistId) {
        var _this = this;
        this.playlistsService.deletePlaylist(playlistId).subscribe(function (data) {
            if (data.status) {
                _this.cmbuService.getLibrarySidebarMenuCount().subscribe(function (data) {
                    _this.cmbuService.librarySidebarFavoriteCount = data.favorite_count;
                    _this.cmbuService.librarySidebarPlaylistCount = data.playlist_count;
                });
                _this.router.navigate(['/library/user-playlists']);
            }
        });
    };
    ManagePlaylistComponent.prototype.filterByKeyword = function (keyword) {
        this.keyowrd = keyword;
        this.getAssetsFromPlaylists(this.playlistSlug);
    };
    ManagePlaylistComponent.ctorParameters = function () { return [
        { type: _services_playlists_service__WEBPACK_IMPORTED_MODULE_2__["PlaylistsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: src_app_services_cmbu_service__WEBPACK_IMPORTED_MODULE_4__["CmbuService"] }
    ]; };
    ManagePlaylistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manage-playlist',
            template: __webpack_require__(/*! raw-loader!./manage-playlist.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/manage-playlist/manage-playlist.component.html"),
            styles: [__webpack_require__(/*! ./manage-playlist.component.css */ "./src/app/components/manage-playlist/manage-playlist.component.css")]
        })
    ], ManagePlaylistComponent);
    return ManagePlaylistComponent;
}());



/***/ }),

/***/ "./src/app/components/notification/notification.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/notification/notification.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Notification CSS */\n\n.notificationTile {\n    display: -webkit-box;\n    display: flex;\n    background: #fff;\n    padding: 1rem;\n    margin-top: 1rem;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n            align-items: center;    \n    box-shadow: 0 0.125rem 0 0 #d7d7d7;\n    border-radius: .125rem;\n}\n\n.notificationContent {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    width: 100%;\n    cursor: pointer;\n}\n\n.notificationContent div {\n    padding-left: 1rem;\n}\n\n.notificationContent div p {\n    margin: 0;\n    font-weight: 500;\n}\n\n.notificationContent div span {\n    font-weight: 300;\n}\n\n.notificationSetting clr-icon {\n    cursor: pointer;\n}\n\n.notRead{\n    background-color: #fefe\n}\n\n.notificationHeader{\n    display: inline-block;\n    width: 50%;\n\n}\n\n.notificationHeader.markAsRead{\n    text-align: right;\n    /* cursor: pointer; */\n}\n\n.disabledBtn {\n    background-color: transparent;\n    border: 0;\n    padding-right: 0;\n    outline: none;\n    color: #565656;\n    cursor: pointer;\n}\n\n.disabledBtn:disabled{\n    cursor: default;\n}\n\n.notificationHeader button, .notificationHeader button span{\n    outline: 0 !important;\n}\n\n.notificationHeader button.btn-primary .tooltip-content{\ndisplay: none;\n}\n\n.unsubscribeBtn{\n    /* opacity:0.65; */\n    cursor: initial;\n}\n\n/* .unsubscribeBtn .tooltip-content{\n    background: #fff;\n    color: #0079b8;\n    padding: .25rem .5rem;\n} */\n\n/* .unsubscribeBtn .tooltip-content::before{\n    border-left: .25rem solid #fff;\n    border-top: .208333rem solid #fff\n} */\n\n.hidden{\n    display: none;\n}\n\n.showUnsubscribeBtn{\n    display: inline-block !important;\n}\n\n.notificationHeader button{\n    margin-left: 1.5em;\n}\n\n@media(max-width: 480px){\n    .notificationHeader button{\n        margin-left: 0;\n        font-size: 0.37rem;\n    }\n    .notificationHeader.markAsRead{\n        width: 33%;\n    }\n    .notificationHeader{\n        width:62%;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUJBQXFCOztBQUVyQjtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLHlCQUE4QjtZQUE5Qiw4QkFBOEI7SUFDOUIseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixrQ0FBa0M7SUFDbEMsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixVQUFVOztBQUVkOztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLHFCQUFxQjtBQUN6Qjs7QUFDQTtJQUNJLDZCQUE2QjtJQUM3QixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7O0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFDQTs7OztHQUlHOztBQUNIOzs7R0FHRzs7QUFDSDtJQUNJLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSTtRQUNJLGNBQWM7UUFDZCxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksU0FBUztJQUNiO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIE5vdGlmaWNhdGlvbiBDU1MgKi9cblxuLm5vdGlmaWNhdGlvblRpbGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgIFxuICAgIGJveC1zaGFkb3c6IDAgMC4xMjVyZW0gMCAwICNkN2Q3ZDc7XG4gICAgYm9yZGVyLXJhZGl1czogLjEyNXJlbTtcbn1cblxuLm5vdGlmaWNhdGlvbkNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5ub3RpZmljYXRpb25Db250ZW50IGRpdiB7XG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xufVxuXG4ubm90aWZpY2F0aW9uQ29udGVudCBkaXYgcCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5ub3RpZmljYXRpb25Db250ZW50IGRpdiBzcGFuIHtcbiAgICBmb250LXdlaWdodDogMzAwO1xufVxuXG4ubm90aWZpY2F0aW9uU2V0dGluZyBjbHItaWNvbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubm90UmVhZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZVxufVxuXG4ubm90aWZpY2F0aW9uSGVhZGVye1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNTAlO1xuXG59XG4ubm90aWZpY2F0aW9uSGVhZGVyLm1hcmtBc1JlYWR7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgLyogY3Vyc29yOiBwb2ludGVyOyAqL1xufVxuLmRpc2FibGVkQnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IDA7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGNvbG9yOiAjNTY1NjU2O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5kaXNhYmxlZEJ0bjpkaXNhYmxlZHtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG59XG4ubm90aWZpY2F0aW9uSGVhZGVyIGJ1dHRvbiwgLm5vdGlmaWNhdGlvbkhlYWRlciBidXR0b24gc3BhbntcbiAgICBvdXRsaW5lOiAwICFpbXBvcnRhbnQ7XG59XG4ubm90aWZpY2F0aW9uSGVhZGVyIGJ1dHRvbi5idG4tcHJpbWFyeSAudG9vbHRpcC1jb250ZW50e1xuZGlzcGxheTogbm9uZTtcbn1cbi51bnN1YnNjcmliZUJ0bntcbiAgICAvKiBvcGFjaXR5OjAuNjU7ICovXG4gICAgY3Vyc29yOiBpbml0aWFsO1xufVxuLyogLnVuc3Vic2NyaWJlQnRuIC50b29sdGlwLWNvbnRlbnR7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBjb2xvcjogIzAwNzliODtcbiAgICBwYWRkaW5nOiAuMjVyZW0gLjVyZW07XG59ICovXG4vKiAudW5zdWJzY3JpYmVCdG4gLnRvb2x0aXAtY29udGVudDo6YmVmb3Jle1xuICAgIGJvcmRlci1sZWZ0OiAuMjVyZW0gc29saWQgI2ZmZjtcbiAgICBib3JkZXItdG9wOiAuMjA4MzMzcmVtIHNvbGlkICNmZmZcbn0gKi9cbi5oaWRkZW57XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbi5zaG93VW5zdWJzY3JpYmVCdG57XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG59XG4ubm90aWZpY2F0aW9uSGVhZGVyIGJ1dHRvbntcbiAgICBtYXJnaW4tbGVmdDogMS41ZW07XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6IDQ4MHB4KXtcbiAgICAubm90aWZpY2F0aW9uSGVhZGVyIGJ1dHRvbntcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMC4zN3JlbTtcbiAgICB9XG4gICAgLm5vdGlmaWNhdGlvbkhlYWRlci5tYXJrQXNSZWFke1xuICAgICAgICB3aWR0aDogMzMlO1xuICAgIH1cbiAgICAubm90aWZpY2F0aW9uSGVhZGVye1xuICAgICAgICB3aWR0aDo2MiU7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/notification/notification.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/notification/notification.component.ts ***!
  \*******************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var src_app_services_paginationservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/paginationservice.service */ "./src/app/services/paginationservice.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_services_cmbu_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/cmbu.service */ "./src/app/services/cmbu.service.ts");






var NotificationComponent = /** @class */ (function () {
    function NotificationComponent(notificationService, paginationservice, location, cmbuService) {
        this.notificationService = notificationService;
        this.paginationservice = paginationservice;
        this.location = location;
        this.cmbuService = cmbuService;
        this.totalNumberOfAssetsPerPage = 10;
        this.currentPage = 1;
        this.totalNoOfPages = 0;
        this.paginationResultOutPut = '';
        this.checkNewNotification = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.value = "Subscribe for email alerts";
    }
    NotificationComponent.prototype.ngOnInit = function () {
        this.getAllNotifications(this.currentPage, this.totalNumberOfAssetsPerPage);
    };
    NotificationComponent.prototype.getAllNotifications = function (currentPage, pageSize) {
        var _this = this;
        this.notificationService.getAllNotifications(currentPage, pageSize).subscribe(function (data) {
            _this.allNotifications = data.data;
            _this.totalAssetCount = data.pagination.totalCount;
            _this.displayPaginationResult(data.pagination);
        });
    };
    NotificationComponent.prototype.getHours = function (createdTime) {
        var activationDate = new Date();
        this.currentDate = new Date(activationDate.getUTCFullYear(), activationDate.getUTCMonth(), activationDate.getUTCDate(), activationDate.getUTCHours(), activationDate.getUTCMinutes(), activationDate.getUTCSeconds());
        var diffInSec = Math.abs(Date.parse(this.currentDate) - Date.parse(createdTime)) / 1000;
        var diffHrs = Math.floor(diffInSec / 3600) % 24;
        var diffMins = Math.floor(diffInSec / 60) % 60;
        var diffSec = diffInSec % 60;
        var result = '';
        if (diffHrs > 0) {
            result += diffHrs + ' hour ' + diffMins + ' minutes ' + diffSec + ' second ago';
        }
        else if (diffMins > 0) {
            result += diffMins + ' minutes ' + diffSec + ' second ago';
        }
        else if (diffSec > 0) {
            result += diffSec + ' second ago';
        }
        else {
            result += 'Just now';
        }
        return result;
    };
    NotificationComponent.prototype.removeNotification = function (motificationID) {
        var _this = this;
        this.notificationService.removeNotification(motificationID).subscribe(function (data) {
            _this.getAllNotifications(_this.currentPage, _this.totalNumberOfAssetsPerPage);
        });
    };
    NotificationComponent.prototype.getPaginationAssets = function (currentPage) {
        if (currentPage) {
            var tempTotalNumberOfAssetsPerPage = 0;
            this.totalAssetDisplayed = (currentPage - 1) * this.totalNumberOfAssetsPerPage;
            this.remainingAssetsToBeDisplayed = this.totalAssetCount - this.totalAssetDisplayed;
            if (this.remainingAssetsToBeDisplayed < this.totalNumberOfAssetsPerPage) {
                tempTotalNumberOfAssetsPerPage = this.remainingAssetsToBeDisplayed;
                this.reducePaginationCount = this.remainingAssetsToBeDisplayed;
            }
            else {
                tempTotalNumberOfAssetsPerPage = this.totalNumberOfAssetsPerPage;
            }
            if (this.currentPage > currentPage) {
                this.direction = 0;
            }
            else {
                this.direction = 1;
            }
            this.currentPage = currentPage;
            this.getAllNotifications(this.currentPage, this.totalNumberOfAssetsPerPage);
        }
    };
    NotificationComponent.prototype.getAssetsByPageSize = function (pageSize) {
        this.totalNumberOfAssetsPerPage = pageSize;
        if (pageSize != this.totalNumberOfAssetsPerPage) {
            this.isAssetPerPageChanged = true;
            this.currentPage = 1;
            this.direction = 1;
        }
        this.currentPage = 1;
        this.totalNumberOfAssetsPerPage = pageSize;
        this.getAllNotifications(this.currentPage, this.totalNumberOfAssetsPerPage);
    };
    NotificationComponent.prototype.displayPaginationResult = function (paginationDetails) {
        this.paginationservice.displayPaginationResult(paginationDetails);
    };
    NotificationComponent.prototype.markAsRead = function (notificationID, notificationLink, notificationLinkType) {
        var _this = this;
        this.notificationService.viewNotification(notificationID).subscribe(function (data) {
            _this.cmbuService.isAnyNewNotification = data.isAnyNewNotification;
            if (notificationLinkType == 'external-link') {
                window.open(notificationLink, '_blank');
            }
            else {
                window.location.href = notificationLink;
            }
        });
    };
    NotificationComponent.prototype.markAllAsRead = function () {
        var _this = this;
        this.notificationService.viewNotification('all').subscribe(function (data) {
            _this.getAllNotifications(_this.currentPage, _this.totalNumberOfAssetsPerPage);
            _this.checkNewNotification.emit();
            if (data.status) {
                _this.cmbuService.isAnyNewNotification = false;
            }
        });
    };
    NotificationComponent.prototype.subscribe = function () {
        this.notificationService.isSubscribed = !this.notificationService.isSubscribed;
        this.notificationService.subscribe().subscribe(function (result) {
            console.log(result);
        });
    };
    NotificationComponent.ctorParameters = function () { return [
        { type: src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"] },
        { type: src_app_services_paginationservice_service__WEBPACK_IMPORTED_MODULE_3__["PaginationserviceService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: src_app_services_cmbu_service__WEBPACK_IMPORTED_MODULE_5__["CmbuService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], NotificationComponent.prototype, "checkNewNotification", void 0);
    NotificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__(/*! raw-loader!./notification.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/notification/notification.component.html"),
            host: { '[class.content-container]': 'true' },
            styles: [__webpack_require__(/*! ./notification.component.css */ "./src/app/components/notification/notification.component.css")]
        })
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-area .page404{margin-top:80px;}\n.page404 h2{text-align: center; padding-bottom: 10px; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVCQUF1QixlQUFlLENBQUM7QUFDdkMsWUFBWSxrQkFBa0IsRUFBRSxvQkFBb0IsRUFBRSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LWFyZWEgLnBhZ2U0MDR7bWFyZ2luLXRvcDo4MHB4O31cbi5wYWdlNDA0IGgye3RleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZy1ib3R0b206IDEwcHg7IH0iXX0= */"

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/components/page-not-found/page-not-found.component.css")]
        })
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/pagination-button/pagination-button.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/pagination-button/pagination-button.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnaW5hdGlvbi1idXR0b24vcGFnaW5hdGlvbi1idXR0b24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/pagination-button/pagination-button.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/pagination-button/pagination-button.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PaginationButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationButtonComponent", function() { return PaginationButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_paginationservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/paginationservice.service */ "./src/app/services/paginationservice.service.ts");



var PaginationButtonComponent = /** @class */ (function () {
    function PaginationButtonComponent(paginationService) {
        this.paginationService = paginationService;
        this.getProductsByPagination = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.hasPrevious = false;
        this.hasNext = false;
        this.currentPage = 1;
        this.isPaginationStop = false;
        this.nextPage = 0;
        this.prevPage = 0;
        this.displayPaginationButton = false;
    }
    PaginationButtonComponent.prototype.ngOnInit = function () {
    };
    PaginationButtonComponent.prototype.ngAfterContentChecked = function () {
        this.currentPage = this.paginationService.currentPage;
        this.totalNoOfPages = this.paginationService.totalPages;
        this.nextPage = this.paginationService.nextPageNo;
        this.prevPage = this.paginationService.prevPageNo;
        this.hasNext = this.paginationService.hasNext;
        this.hasPrevious = this.paginationService.hasPrevious;
        this.displayPaginationButton = this.paginationService.displayPaginationButton;
    };
    PaginationButtonComponent.prototype.navigatePagination = function (pageNo) {
        this.getProductsByPagination.emit(pageNo);
    };
    PaginationButtonComponent.prototype.keydownEvent = function (event) {
        clearTimeout(this.paginationFunction);
        if (event.key === "Enter") {
            this.triggerPagination(event);
        }
        else {
            var self_1 = this;
            this.paginationFunction = setTimeout(function () {
                self_1.triggerPagination(event);
            }, 1000);
        }
    };
    PaginationButtonComponent.prototype.triggerPagination = function (event) {
        var currentPageInput = parseInt(event.target.value);
        if (currentPageInput > 0 && currentPageInput <= this.totalNoOfPages) {
            this.navigatePagination(currentPageInput);
        }
    };
    PaginationButtonComponent.ctorParameters = function () { return [
        { type: src_app_services_paginationservice_service__WEBPACK_IMPORTED_MODULE_2__["PaginationserviceService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], PaginationButtonComponent.prototype, "totalNoOfPages", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], PaginationButtonComponent.prototype, "getProductsByPagination", void 0);
    PaginationButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pagination-button',
            template: __webpack_require__(/*! raw-loader!./pagination-button.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/pagination-button/pagination-button.component.html"),
            styles: [__webpack_require__(/*! ./pagination-button.component.css */ "./src/app/components/pagination-button/pagination-button.component.css")]
        })
    ], PaginationButtonComponent);
    return PaginationButtonComponent;
}());



/***/ }),

/***/ "./src/app/components/pagination-count/pagination-count.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/pagination-count/pagination-count.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnaW5hdGlvbi1jb3VudC9wYWdpbmF0aW9uLWNvdW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/pagination-count/pagination-count.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/pagination-count/pagination-count.component.ts ***!
  \***************************************************************************/
/*! exports provided: PaginationCountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationCountComponent", function() { return PaginationCountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PaginationCountComponent = /** @class */ (function () {
    function PaginationCountComponent() {
        this.PageSize = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectedPageSize = "10";
    }
    PaginationCountComponent.prototype.ngOnInit = function () {
        var selectedPageSize = localStorage.getItem("SelectedPageSize");
        if (selectedPageSize) {
            this.selectedPageSize = selectedPageSize;
            this.PageSize.emit(this.selectedPageSize);
        }
    };
    PaginationCountComponent.prototype.getAssetsByPageSize = function (event) {
        localStorage.setItem("SelectedPageSize", event.target.value);
        this.PageSize.emit(event.target.value);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], PaginationCountComponent.prototype, "PageSize", void 0);
    PaginationCountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pagination-count',
            template: __webpack_require__(/*! raw-loader!./pagination-count.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/pagination-count/pagination-count.component.html"),
            styles: [__webpack_require__(/*! ./pagination-count.component.css */ "./src/app/components/pagination-count/pagination-count.component.css")]
        })
    ], PaginationCountComponent);
    return PaginationCountComponent;
}());



/***/ }),

/***/ "./src/app/components/pagination-result/pagination-result.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/pagination-result/pagination-result.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnaW5hdGlvbi1yZXN1bHQvcGFnaW5hdGlvbi1yZXN1bHQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/pagination-result/pagination-result.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/pagination-result/pagination-result.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PaginationResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationResultComponent", function() { return PaginationResultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_paginationservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/paginationservice.service */ "./src/app/services/paginationservice.service.ts");



var PaginationResultComponent = /** @class */ (function () {
    function PaginationResultComponent(paginationService) {
        this.paginationService = paginationService;
    }
    PaginationResultComponent.prototype.ngOnInit = function () {
    };
    PaginationResultComponent.prototype.ngAfterContentChecked = function () {
        if (this.paginationService.totalCount == 0) {
            this.paginationResultOutPut = '';
        }
        else {
            this.paginationResultOutPut = this.paginationService.paginationOutPutText;
        }
    };
    PaginationResultComponent.ctorParameters = function () { return [
        { type: src_app_services_paginationservice_service__WEBPACK_IMPORTED_MODULE_2__["PaginationserviceService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], PaginationResultComponent.prototype, "paginationResultOutPut", void 0);
    PaginationResultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pagination-result',
            template: __webpack_require__(/*! raw-loader!./pagination-result.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/pagination-result/pagination-result.component.html"),
            styles: [__webpack_require__(/*! ./pagination-result.component.css */ "./src/app/components/pagination-result/pagination-result.component.css")]
        })
    ], PaginationResultComponent);
    return PaginationResultComponent;
}());



/***/ }),

/***/ "./src/app/components/playlist-item/playlist-item.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/playlist-item/playlist-item.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.card-header {\n    font-size: .60rem;\n    text-transform: uppercase;\n    color: #737373;\n}\n\n.card-header span {\n    float: right;\n    position: absolute;\n    right: 0.75rem;\n    top: 0.75rem;\n}\n\n.card-footer .btn-link{\n    color: #ADBAC4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wbGF5bGlzdC1pdGVtL3BsYXlsaXN0LWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGxheWxpc3QtaXRlbS9wbGF5bGlzdC1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jYXJkLWhlYWRlciB7XG4gICAgZm9udC1zaXplOiAuNjByZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogIzczNzM3Mztcbn1cblxuLmNhcmQtaGVhZGVyIHNwYW4ge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDAuNzVyZW07XG4gICAgdG9wOiAwLjc1cmVtO1xufVxuXG4uY2FyZC1mb290ZXIgLmJ0bi1saW5re1xuICAgIGNvbG9yOiAjQURCQUM0O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/playlist-item/playlist-item.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/playlist-item/playlist-item.component.ts ***!
  \*********************************************************************/
/*! exports provided: PlaylistItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistItemComponent", function() { return PlaylistItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_playlists_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/playlists.service */ "./src/app/services/playlists.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_cmbu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/cmbu.service */ "./src/app/services/cmbu.service.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");






var PlaylistItemComponent = /** @class */ (function () {
    function PlaylistItemComponent(playlistService, router, cmbuService, authenticationService) {
        this.playlistService = playlistService;
        this.router = router;
        this.cmbuService = cmbuService;
        this.authenticationService = authenticationService;
        this.playListName = '';
        this.getPlaylists = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.getSavedPlaylists = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showPlaylistPopup = false;
        this.isRenameEvent = false;
        this.keyword = '';
        this.pageSize = 10;
        this.currentPage = 1;
        //   this.router.routeReuseStrategy.shouldReuseRoute = function(){
        //     return false;
        //  }
    }
    PlaylistItemComponent.prototype.ngOnInit = function () {
    };
    PlaylistItemComponent.prototype.savePlaylist = function (playlistId) {
        var _this = this;
        if (!this.authenticationService.isLoggedIn()) {
            this.router.navigate(['/login'], { queryParams: { returnUrl: this.router.url } });
            return false;
        }
        this.playlistService.savePlaylist(playlistId).subscribe(function (data) {
            if (data.status) {
                var currentPlaylist = _this.playlists.find(function (x) { return x.id === playlistId; });
                currentPlaylist.savedPlaylist = true;
            }
        });
    };
    PlaylistItemComponent.prototype.removePlaylist = function (playlistId) {
        var _this = this;
        this.playlistService.removePlaylist(playlistId).subscribe(function (data) {
            if (data.status) {
                var currentPlaylist = _this.playlists.find(function (x) { return x.id === playlistId; });
                currentPlaylist.savedPlaylist = false;
                _this.getSavedPlaylists.emit();
            }
        });
    };
    PlaylistItemComponent.prototype.deletePlaylist = function (playlistId) {
        var _this = this;
        this.playlistService.deletePlaylist(playlistId).subscribe(function (data) {
            if (data.status) {
                _this.deleteConfirmation = false;
                _this.getPlaylists.emit();
                _this.cmbuService.getLibrarySidebarMenuCount().subscribe(function (data) {
                    _this.cmbuService.librarySidebarFavoriteCount = data.favorite_count;
                    _this.cmbuService.librarySidebarPlaylistCount = data.playlist_count;
                });
            }
        });
    };
    PlaylistItemComponent.prototype.isshowPlaylistPopup = function (playlistSlug) {
        var _this = this;
        this.playlistSlug = playlistSlug;
        this.isRenameEvent = true;
        this.showPlaylistPopup = true;
        this.playlistService.getAssetsFromPlaylists(playlistSlug, this.keyword, this.currentPage, this.pageSize).subscribe(function (data) {
            _this.playListName = data.name;
            _this.playListID = data.id;
            _this.playListDescription = data.description;
        });
    };
    PlaylistItemComponent.prototype.getUserPlaylists = function () {
        this.getPlaylists.emit();
    };
    PlaylistItemComponent.prototype.viewPlaylist = function (playlistDetails) {
        _paq.push(['trackEvent', 'Playlist view', '"' + playlistDetails.name + '"is viewed', 'view']);
        // this.router.navigate(['/library/playlists/', playlistDetails.slug]);
        setTimeout(function () {
            window.location.href = '/library/playlists/' + playlistDetails.slug;
        }, 100);
        return false;
    };
    PlaylistItemComponent.ctorParameters = function () { return [
        { type: src_app_services_playlists_service__WEBPACK_IMPORTED_MODULE_2__["PlaylistsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_services_cmbu_service__WEBPACK_IMPORTED_MODULE_4__["CmbuService"] },
        { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], PlaylistItemComponent.prototype, "playlists", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], PlaylistItemComponent.prototype, "playlistType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], PlaylistItemComponent.prototype, "playListName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], PlaylistItemComponent.prototype, "getPlaylists", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], PlaylistItemComponent.prototype, "getSavedPlaylists", void 0);
    PlaylistItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-playlist-item',
            template: __webpack_require__(/*! raw-loader!./playlist-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/playlist-item/playlist-item.component.html"),
            styles: [__webpack_require__(/*! ./playlist-item.component.css */ "./src/app/components/playlist-item/playlist-item.component.css")]
        })
    ], PlaylistItemComponent);
    return PlaylistItemComponent;
}());



/***/ }),

/***/ "./src/app/components/playlist-view/playlist-view.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/playlist-view/playlist-view.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".show-more a {\n    cursor: pointer;\n    text-decoration: none;\n}\n.show-more {\n    display: block;\n    color: #707070;\n    text-transform: uppercase;\n    margin-top: 0.5rem;\n    font-weight: 500;\n}\n.content-area.no-pad{\n    padding:0;\n} \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wbGF5bGlzdC12aWV3L3BsYXlsaXN0LXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFNBQVM7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGxheWxpc3Qtdmlldy9wbGF5bGlzdC12aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hvdy1tb3JlIGEge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uc2hvdy1tb3JlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb2xvcjogIzcwNzA3MDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuLmNvbnRlbnQtYXJlYS5uby1wYWR7XG4gICAgcGFkZGluZzowO1xufSAiXX0= */"

/***/ }),

/***/ "./src/app/components/playlist-view/playlist-view.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/playlist-view/playlist-view.component.ts ***!
  \*********************************************************************/
/*! exports provided: PlaylistViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistViewComponent", function() { return PlaylistViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_playlists_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/playlists.service */ "./src/app/services/playlists.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_paginationservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/paginationservice.service */ "./src/app/services/paginationservice.service.ts");





var PlaylistViewComponent = /** @class */ (function () {
    function PlaylistViewComponent(playlistsService, route, paginationService, router) {
        this.playlistsService = playlistsService;
        this.route = route;
        this.paginationService = paginationService;
        this.router = router;
        this.playlistSlug = '';
        this.keyword = '';
        this.pageSize = 10;
        this.currentPage = 1;
        this.showMore = false;
        this.totalNoOfPages = 0;
        this.paginationResultOutPut = '';
    }
    PlaylistViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (data) {
            _this.playlistSlug = data.get('playlistSlug');
            _this.getAssetsFromPlaylists();
        });
    };
    PlaylistViewComponent.prototype.getAssetsFromPlaylists = function () {
        var _this = this;
        this.playlistsService.getAssetsFromPlaylists(this.playlistSlug, this.keyword, this.currentPage, this.pageSize).subscribe(function (data) {
            if (!data.name) {
                _this.router.navigate(['/**'], { skipLocationChange: true });
                return false;
            }
            _this.playlist = data;
            _this.paginationService.displayPaginationResult(data.pagination);
        });
    };
    PlaylistViewComponent.prototype.getPaginationAssets = function (currentPage) {
        this.currentPage = currentPage;
        this.getAssetsFromPlaylists();
    };
    PlaylistViewComponent.prototype.filterByKeyword = function (keyword) {
        this.keyword = keyword;
        this.getAssetsFromPlaylists();
    };
    PlaylistViewComponent.prototype.getAssetsByPageSize = function (pageSize) {
        if (pageSize != this.pageSize) {
            this.currentPage = 1;
        }
        this.pageSize = pageSize;
        this.getAssetsFromPlaylists();
    };
    PlaylistViewComponent.ctorParameters = function () { return [
        { type: src_app_services_playlists_service__WEBPACK_IMPORTED_MODULE_2__["PlaylistsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: src_app_services_paginationservice_service__WEBPACK_IMPORTED_MODULE_4__["PaginationserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    PlaylistViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-playlist-view',
            template: __webpack_require__(/*! raw-loader!./playlist-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/playlist-view/playlist-view.component.html"),
            styles: [__webpack_require__(/*! ./playlist-view.component.css */ "./src/app/components/playlist-view/playlist-view.component.css")]
        })
    ], PlaylistViewComponent);
    return PlaylistViewComponent;
}());



/***/ }),

/***/ "./src/app/components/product-sidebar/product-sidebar.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/product-sidebar/product-sidebar.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC1zaWRlYmFyL3Byb2R1Y3Qtc2lkZWJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/product-sidebar/product-sidebar.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/product-sidebar/product-sidebar.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProductSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductSidebarComponent", function() { return ProductSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductSidebarComponent = /** @class */ (function () {
    function ProductSidebarComponent() {
        this.isSlugName = '';
        this.categorySlugEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ProductSidebarComponent.prototype.ngOnInit = function () {
    };
    ProductSidebarComponent.prototype.filterAssetsByCategory = function (productCategory) {
        this.isSlugName = productCategory;
        this.categorySlugEvent.emit(productCategory);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ProductSidebarComponent.prototype, "productCategories", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ProductSidebarComponent.prototype, "totalAssetCount", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ProductSidebarComponent.prototype, "allProductCount", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], ProductSidebarComponent.prototype, "categorySlugEvent", void 0);
    ProductSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-sidebar',
            template: __webpack_require__(/*! raw-loader!./product-sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/product-sidebar/product-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./product-sidebar.component.css */ "./src/app/components/product-sidebar/product-sidebar.component.css")]
        })
    ], ProductSidebarComponent);
    return ProductSidebarComponent;
}());



/***/ }),

/***/ "./src/app/components/product/product.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/product/product.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Page title */\n\n.pageTitle {\n    margin-top: 2rem;\n}\n\n.pageTitle h1, .pageTitle p {\n    margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxlQUFlOztBQUVmO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksU0FBUztBQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhZ2UgdGl0bGUgKi9cblxuLnBhZ2VUaXRsZSB7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxuLnBhZ2VUaXRsZSBoMSwgLnBhZ2VUaXRsZSBwIHtcbiAgICBtYXJnaW46IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/product/product.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/product/product.component.ts ***!
  \*********************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_cmbu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cmbu.service */ "./src/app/services/cmbu.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_paginationservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/paginationservice.service */ "./src/app/services/paginationservice.service.ts");





var ProductComponent = /** @class */ (function () {
    function ProductComponent(service, route, router, paginationservice) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.router = router;
        this.paginationservice = paginationservice;
        // Declearing Parameters
        this.productSlug = '';
        this.categorySlug = '';
        this.assetKeyword = '';
        this.productCategories = '';
        this.productAssets = '';
        this.totalAssetCount = 0;
        this.totalNoOfPages = 0;
        this.currentPage = 1;
        this.totalNumberOfAssetsPerPage = 10;
        this.firstCount = 1;
        this.lastCount = 0;
        this.paginationResultOutPut = '';
        this.direction = 1;
        this.isAssetPerPageChanged = false;
        this.totalAssetDisplayed = 0;
        this.remainingAssetsToBeDisplayed = 0;
        this.reducePaginationCount = 0;
        this.allProductCount = 0;
        this.isCategorySlugChanged = false;
        router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivationEnd"]) {
                _this.productSlug = val.snapshot.paramMap.get('product-slug');
                _this.categorySlug = '';
                _this.assetKeyword = '';
                _this.currentPage = 1;
                _this.getAssetsByProductSlug(_this.productSlug, _this.categorySlug, _this.assetKeyword, _this.currentPage, _this.totalNumberOfAssetsPerPage);
            }
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                _this.getAssetCountByProductSlug(_this.productSlug);
            }
        });
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.productSlug = params.get('product-slug');
        });
    };
    ProductComponent.prototype.getAssetCountByProductSlug = function (productSlug) {
        var _this = this;
        this.service.getAssetCountByProductSlug(productSlug).subscribe(function (data) {
            _this.productCategories = data.categories;
            _this.allProductCount = data.totalCount;
        });
    };
    ProductComponent.prototype.getAssetsByProductSlug = function (productSlug, categorySlug, assetKeyword, currentPage, totalNumberOfAssetsPerPage) {
        var _this = this;
        this.service.getAssetsByProductSlug(productSlug, categorySlug, assetKeyword, currentPage, totalNumberOfAssetsPerPage).subscribe(function (data) {
            if (!data.productDetails) {
                _this.router.navigate(['/**'], { skipLocationChange: true });
                return false;
            }
            _this.productAssets = data.assets;
            _this.productDetails = data.productDetails;
            _this.totalAssetCount = data.totalCount;
            _this.getNoOfPages(_this.totalNumberOfAssetsPerPage);
            _this.displayPaginationResult(data.pagination);
        });
    };
    ProductComponent.prototype.filteredAssetsByCategorySlug = function (categorySlug) {
        this.assetKeyword = '';
        this.isCategorySlugChanged = true;
        this.categorySlug = categorySlug;
        this.currentPage = 1;
        this.direction = 1;
        this.getAssetsByProductSlug(this.productSlug, categorySlug, this.assetKeyword, this.currentPage, this.totalNumberOfAssetsPerPage);
    };
    ProductComponent.prototype.filterAssetsByKeyword = function (assetKeyword) {
        this.assetKeyword = assetKeyword;
        this.getAssetsByProductSlug(this.productSlug, this.categorySlug, assetKeyword, this.currentPage, this.totalNumberOfAssetsPerPage);
    };
    ProductComponent.prototype.getNoOfPages = function (totalNumberOfAssetsPerPage) {
        this.totalNumberOfAssetsPerPage = totalNumberOfAssetsPerPage;
        this.totalNoOfPages = Math.ceil(this.totalAssetCount / this.totalNumberOfAssetsPerPage);
    };
    ProductComponent.prototype.getPaginationAssets = function (currentPage) {
        var tempTotalNumberOfAssetsPerPage = 0;
        this.totalAssetDisplayed = (currentPage - 1) * this.totalNumberOfAssetsPerPage;
        this.remainingAssetsToBeDisplayed = this.totalAssetCount - this.totalAssetDisplayed;
        if (this.remainingAssetsToBeDisplayed < this.totalNumberOfAssetsPerPage) {
            tempTotalNumberOfAssetsPerPage = this.remainingAssetsToBeDisplayed;
            this.reducePaginationCount = this.remainingAssetsToBeDisplayed;
        }
        else {
            tempTotalNumberOfAssetsPerPage = this.totalNumberOfAssetsPerPage;
        }
        if (this.currentPage > currentPage) {
            this.direction = 0;
        }
        else {
            this.direction = 1;
        }
        this.currentPage = currentPage;
        this.getAssetsByProductSlug(this.productSlug, this.categorySlug, this.assetKeyword, this.currentPage, tempTotalNumberOfAssetsPerPage);
    };
    ProductComponent.prototype.getAssetsByPageSize = function (pageSize) {
        if (pageSize != this.totalNumberOfAssetsPerPage) {
            this.isAssetPerPageChanged = true;
            this.currentPage = 1;
            this.direction = 1;
        }
        this.totalNumberOfAssetsPerPage = pageSize;
        this.getAssetsByProductSlug(this.productSlug, this.categorySlug, this.assetKeyword, this.currentPage, this.totalNumberOfAssetsPerPage);
    };
    ProductComponent.prototype.displayPaginationResult = function (paginationDetails) {
        this.paginationservice.displayPaginationResult(paginationDetails);
    };
    ProductComponent.ctorParameters = function () { return [
        { type: src_app_services_cmbu_service__WEBPACK_IMPORTED_MODULE_2__["CmbuService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_services_paginationservice_service__WEBPACK_IMPORTED_MODULE_4__["PaginationserviceService"] }
    ]; };
    ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! raw-loader!./product.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/product/product.component.html"),
            host: { '[class.content-container]': 'true' },
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/components/product/product.component.css")]
        })
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/components/recently-viewed/recently-viewed.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/recently-viewed/recently-viewed.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVjZW50bHktdmlld2VkL3JlY2VudGx5LXZpZXdlZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/recently-viewed/recently-viewed.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/recently-viewed/recently-viewed.component.ts ***!
  \*************************************************************************/
/*! exports provided: RecentlyViewedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentlyViewedComponent", function() { return RecentlyViewedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_cmbu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cmbu.service */ "./src/app/services/cmbu.service.ts");
/* harmony import */ var src_app_services_paginationservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/paginationservice.service */ "./src/app/services/paginationservice.service.ts");




var RecentlyViewedComponent = /** @class */ (function () {
    function RecentlyViewedComponent(cmbuService, paginationService) {
        this.cmbuService = cmbuService;
        this.paginationService = paginationService;
        this.assetsList = [];
        this.keyword = '';
        this.pageSize = 10;
        this.currentPage = 1;
        this.totalNoOfPages = 0;
        this.paginationResultOutPut = '';
    }
    RecentlyViewedComponent.prototype.ngOnInit = function () {
        this.getRecentlyViewedAssets();
    };
    RecentlyViewedComponent.prototype.getRecentlyViewedAssets = function () {
        var _this = this;
        this.cmbuService.getRecentlyViewedAssets(this.keyword, this.currentPage, this.pageSize).subscribe(function (data) {
            _this.assetsList = data.data;
            _this.paginationService.displayPaginationResult(data.pagination);
        });
    };
    RecentlyViewedComponent.prototype.filterByKeyword = function (keyword) {
        this.keyword = keyword;
        this.getRecentlyViewedAssets();
    };
    RecentlyViewedComponent.prototype.getPaginationAssets = function (currentPage) {
        this.currentPage = currentPage;
        this.getRecentlyViewedAssets();
    };
    RecentlyViewedComponent.prototype.getAssetsByPageSize = function (pageSize) {
        if (pageSize != this.pageSize) {
            // this.isAssetPerPageChanged = true;
            this.currentPage = 1;
            // this.direction = 1;
        }
        this.pageSize = pageSize;
        this.getRecentlyViewedAssets();
    };
    RecentlyViewedComponent.ctorParameters = function () { return [
        { type: src_app_services_cmbu_service__WEBPACK_IMPORTED_MODULE_2__["CmbuService"] },
        { type: src_app_services_paginationservice_service__WEBPACK_IMPORTED_MODULE_3__["PaginationserviceService"] }
    ]; };
    RecentlyViewedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recently-viewed',
            template: __webpack_require__(/*! raw-loader!./recently-viewed.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/recently-viewed/recently-viewed.component.html"),
            styles: [__webpack_require__(/*! ./recently-viewed.component.css */ "./src/app/components/recently-viewed/recently-viewed.component.css")]
        })
    ], RecentlyViewedComponent);
    return RecentlyViewedComponent;
}());



/***/ }),

/***/ "./src/app/components/search-assistant-banner/search-assistant-banner.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/components/search-assistant-banner/search-assistant-banner.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* searchAssistance */\n\n\n.searchAssistance {\n    max-width: 1700px;\n    margin: 0 auto;\n}\n\n\n.searchAssistanceContainer.whiteBg {\n    background-color: #fff;\n    position: relative;\n    z-index: 2;\n}\n\n\n.searchAssistance .clr-select-wrapper {\n   border: 0;\n}\n\n\n.searchAssistance {\n   padding: 5rem 2.5rem;\n}\n\n\n.searchAssistance h1{\n   margin: 0;\n}\n\n\n.searchAssistance .clr-select-wrapper select {\n   border: 0;\n   text-transform: uppercase;\n   color: #0078B7;\n}\n\n\n.searchAssistance .clr-select-wrapper select:hover, .searchAssistance .clr-select-wrapper select:focus {\n   border: 0;\n   background: transparent;\n}\n\n\n.searchAssistance .clr-control-container {\n   width: 100%;\n   background-color: #F2F2F2;\n   margin-top: 1rem;\n}\n\n\n.searchAssistance .clr-control-container > div {\n   background-color: #F2F2F2;\n   max-height: inherit;\n   padding: 1rem;\n}\n\n\n.searchAssistance .clr-control-container > div input{\n   width: 40%;\n   margin-right: 0.5rem;\n}\n\n\n.searchAssistance {\n   background-color: transparent;\n}\n\n\n.searchAssistanceContainer::after {\n   content: '';\n   position: absolute;\n   width: 50%;\n   height: 70%;\n   top: 0;\n   right: 0;\n   z-index: -1;\n   -webkit-clip-path: polygon(30% 0%, 100% 0%, 70% 100%, 0% 100%);\n   -webkit-clip-path: polygon(30% 0%, 100% 0%, 70% 100%, 0% 100%);\n   clip-path: polygon(30% 0%, 100% 0%, 70% 100%, 0% 100%);\n   -webkit-clip-path: polygon(40% 0%, 100% 0%, 60% 100%, 0% 100%);\n           clip-path: polygon(40% 0%, 100% 0%, 60% 100%, 0% 100%);\n   background: rgba(0,177,221,1);\n   background: -webkit-gradient(left top, right bottom, color-stop(0%, rgba(0,177,221,1)), color-stop(10%, rgba(0,170,217,1)), color-stop(20%, rgba(0,168,214,1)), color-stop(30%, rgba(0,161,210,1)), color-stop(40%, rgba(0,155,206,1)), color-stop(50%, rgba(0,148,202,1)), color-stop(60%, rgba(0,143,199,1)), color-stop(70%, rgba(0,137,195,1)), color-stop(80%, rgba(0,131,191,1)), color-stop(90%, rgba(0,128,188,1)), color-stop(100%, rgba(0,120,184,1)));\n   background: linear-gradient(135deg, rgba(0,177,221,1) 0%, rgba(0,170,217,1) 10%, rgba(0,168,214,1) 20%, rgba(0,161,210,1) 30%, rgba(0,155,206,1) 40%, rgba(0,148,202,1) 50%, rgba(0,143,199,1) 60%, rgba(0,137,195,1) 70%, rgba(0,131,191,1) 80%, rgba(0,128,188,1) 90%, rgba(0,120,184,1) 100%);\n   filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00b1dd', endColorstr='#0078b8', GradientType=1 );\n}\n\n\n/* Error */\n\n\n.clr-control-container .clr-input-wrapper form, .clr-control-container .clr-input-wrapper form input {\n   position: relative;\n}\n\n\n.clr-error .clr-input {\n   border-bottom-color: #c72100;\n   -webkit-transition: background-size .2s ease;\n   transition: background-size .2s ease;\n}\n\n\n.clr-error .clr-subtext {\n   color: #c92100;\n   position: absolute;\n   left: 0;\n   top: 1.6rem;\n   font-size: .458333rem;\n}\n\n\n@media(max-width: 600px){\n   .searchAssistanceContainer::after {\n      background: none\n   }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gtYXNzaXN0YW50LWJhbm5lci9zZWFyY2gtYXNzaXN0YW50LWJhbm5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFCQUFxQjs7O0FBR3JCO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7OztBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7OztBQUVBO0dBQ0csU0FBUztBQUNaOzs7QUFFQTtHQUNHLG9CQUFvQjtBQUN2Qjs7O0FBRUE7R0FDRyxTQUFTO0FBQ1o7OztBQUVBO0dBQ0csU0FBUztHQUNULHlCQUF5QjtHQUN6QixjQUFjO0FBQ2pCOzs7QUFFQTtHQUNHLFNBQVM7R0FDVCx1QkFBdUI7QUFDMUI7OztBQUVBO0dBQ0csV0FBVztHQUNYLHlCQUF5QjtHQUN6QixnQkFBZ0I7QUFDbkI7OztBQUVBO0dBQ0cseUJBQXlCO0dBQ3pCLG1CQUFtQjtHQUNuQixhQUFhO0FBQ2hCOzs7QUFFQTtHQUNHLFVBQVU7R0FDVixvQkFBb0I7QUFDdkI7OztBQUVBO0dBQ0csNkJBQTZCO0FBQ2hDOzs7QUFFQTtHQUNHLFdBQVc7R0FDWCxrQkFBa0I7R0FDbEIsVUFBVTtHQUNWLFdBQVc7R0FDWCxNQUFNO0dBQ04sUUFBUTtHQUNSLFdBQVc7R0FDWCw4REFBOEQ7R0FDOUQsOERBQThEO0dBQzlELHNEQUFzRDtHQUN0RCw4REFBc0Q7V0FBdEQsc0RBQXNEO0dBQ3RELDZCQUE2QjtHQUM3QixnY0FBZ2M7R0FDaGMsZ1NBQWdTO0dBQ2hTLG9IQUFvSDtBQUN2SDs7O0FBRUEsVUFBVTs7O0FBRVY7R0FDRyxrQkFBa0I7QUFDckI7OztBQUVBO0dBQ0csNEJBQTRCO0dBQzVCLDRDQUFvQztHQUFwQyxvQ0FBb0M7QUFDdkM7OztBQUVBO0dBQ0csY0FBYztHQUNkLGtCQUFrQjtHQUNsQixPQUFPO0dBQ1AsV0FBVztHQUNYLHFCQUFxQjtBQUN4Qjs7O0FBQ0E7R0FDRztNQUNHO0dBQ0g7QUFDSCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoLWFzc2lzdGFudC1iYW5uZXIvc2VhcmNoLWFzc2lzdGFudC1iYW5uZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHNlYXJjaEFzc2lzdGFuY2UgKi9cblxuXG4uc2VhcmNoQXNzaXN0YW5jZSB7XG4gICAgbWF4LXdpZHRoOiAxNzAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG4uc2VhcmNoQXNzaXN0YW5jZUNvbnRhaW5lci53aGl0ZUJnIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAyO1xufVxuXG4uc2VhcmNoQXNzaXN0YW5jZSAuY2xyLXNlbGVjdC13cmFwcGVyIHtcbiAgIGJvcmRlcjogMDtcbn1cblxuLnNlYXJjaEFzc2lzdGFuY2Uge1xuICAgcGFkZGluZzogNXJlbSAyLjVyZW07XG59XG5cbi5zZWFyY2hBc3Npc3RhbmNlIGgxe1xuICAgbWFyZ2luOiAwO1xufVxuXG4uc2VhcmNoQXNzaXN0YW5jZSAuY2xyLXNlbGVjdC13cmFwcGVyIHNlbGVjdCB7XG4gICBib3JkZXI6IDA7XG4gICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgY29sb3I6ICMwMDc4Qjc7XG59XG5cbi5zZWFyY2hBc3Npc3RhbmNlIC5jbHItc2VsZWN0LXdyYXBwZXIgc2VsZWN0OmhvdmVyLCAuc2VhcmNoQXNzaXN0YW5jZSAuY2xyLXNlbGVjdC13cmFwcGVyIHNlbGVjdDpmb2N1cyB7XG4gICBib3JkZXI6IDA7XG4gICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLnNlYXJjaEFzc2lzdGFuY2UgLmNsci1jb250cm9sLWNvbnRhaW5lciB7XG4gICB3aWR0aDogMTAwJTtcbiAgIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XG4gICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4uc2VhcmNoQXNzaXN0YW5jZSAuY2xyLWNvbnRyb2wtY29udGFpbmVyID4gZGl2IHtcbiAgIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XG4gICBtYXgtaGVpZ2h0OiBpbmhlcml0O1xuICAgcGFkZGluZzogMXJlbTtcbn1cblxuLnNlYXJjaEFzc2lzdGFuY2UgLmNsci1jb250cm9sLWNvbnRhaW5lciA+IGRpdiBpbnB1dHtcbiAgIHdpZHRoOiA0MCU7XG4gICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbn1cblxuLnNlYXJjaEFzc2lzdGFuY2Uge1xuICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5zZWFyY2hBc3Npc3RhbmNlQ29udGFpbmVyOjphZnRlciB7XG4gICBjb250ZW50OiAnJztcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgIHdpZHRoOiA1MCU7XG4gICBoZWlnaHQ6IDcwJTtcbiAgIHRvcDogMDtcbiAgIHJpZ2h0OiAwO1xuICAgei1pbmRleDogLTE7XG4gICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbigzMCUgMCUsIDEwMCUgMCUsIDcwJSAxMDAlLCAwJSAxMDAlKTtcbiAgIC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKDMwJSAwJSwgMTAwJSAwJSwgNzAlIDEwMCUsIDAlIDEwMCUpO1xuICAgY2xpcC1wYXRoOiBwb2x5Z29uKDMwJSAwJSwgMTAwJSAwJSwgNzAlIDEwMCUsIDAlIDEwMCUpO1xuICAgY2xpcC1wYXRoOiBwb2x5Z29uKDQwJSAwJSwgMTAwJSAwJSwgNjAlIDEwMCUsIDAlIDEwMCUpO1xuICAgYmFja2dyb3VuZDogcmdiYSgwLDE3NywyMjEsMSk7XG4gICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxlZnQgdG9wLCByaWdodCBib3R0b20sIGNvbG9yLXN0b3AoMCUsIHJnYmEoMCwxNzcsMjIxLDEpKSwgY29sb3Itc3RvcCgxMCUsIHJnYmEoMCwxNzAsMjE3LDEpKSwgY29sb3Itc3RvcCgyMCUsIHJnYmEoMCwxNjgsMjE0LDEpKSwgY29sb3Itc3RvcCgzMCUsIHJnYmEoMCwxNjEsMjEwLDEpKSwgY29sb3Itc3RvcCg0MCUsIHJnYmEoMCwxNTUsMjA2LDEpKSwgY29sb3Itc3RvcCg1MCUsIHJnYmEoMCwxNDgsMjAyLDEpKSwgY29sb3Itc3RvcCg2MCUsIHJnYmEoMCwxNDMsMTk5LDEpKSwgY29sb3Itc3RvcCg3MCUsIHJnYmEoMCwxMzcsMTk1LDEpKSwgY29sb3Itc3RvcCg4MCUsIHJnYmEoMCwxMzEsMTkxLDEpKSwgY29sb3Itc3RvcCg5MCUsIHJnYmEoMCwxMjgsMTg4LDEpKSwgY29sb3Itc3RvcCgxMDAlLCByZ2JhKDAsMTIwLDE4NCwxKSkpO1xuICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgwLDE3NywyMjEsMSkgMCUsIHJnYmEoMCwxNzAsMjE3LDEpIDEwJSwgcmdiYSgwLDE2OCwyMTQsMSkgMjAlLCByZ2JhKDAsMTYxLDIxMCwxKSAzMCUsIHJnYmEoMCwxNTUsMjA2LDEpIDQwJSwgcmdiYSgwLDE0OCwyMDIsMSkgNTAlLCByZ2JhKDAsMTQzLDE5OSwxKSA2MCUsIHJnYmEoMCwxMzcsMTk1LDEpIDcwJSwgcmdiYSgwLDEzMSwxOTEsMSkgODAlLCByZ2JhKDAsMTI4LDE4OCwxKSA5MCUsIHJnYmEoMCwxMjAsMTg0LDEpIDEwMCUpO1xuICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyMwMGIxZGQnLCBlbmRDb2xvcnN0cj0nIzAwNzhiOCcsIEdyYWRpZW50VHlwZT0xICk7XG59XG5cbi8qIEVycm9yICovXG5cbi5jbHItY29udHJvbC1jb250YWluZXIgLmNsci1pbnB1dC13cmFwcGVyIGZvcm0sIC5jbHItY29udHJvbC1jb250YWluZXIgLmNsci1pbnB1dC13cmFwcGVyIGZvcm0gaW5wdXQge1xuICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2xyLWVycm9yIC5jbHItaW5wdXQge1xuICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2M3MjEwMDtcbiAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtc2l6ZSAuMnMgZWFzZTtcbn1cblxuLmNsci1lcnJvciAuY2xyLXN1YnRleHQge1xuICAgY29sb3I6ICNjOTIxMDA7XG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICBsZWZ0OiAwO1xuICAgdG9wOiAxLjZyZW07XG4gICBmb250LXNpemU6IC40NTgzMzNyZW07XG59XG5AbWVkaWEobWF4LXdpZHRoOiA2MDBweCl7XG4gICAuc2VhcmNoQXNzaXN0YW5jZUNvbnRhaW5lcjo6YWZ0ZXIge1xuICAgICAgYmFja2dyb3VuZDogbm9uZVxuICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/search-assistant-banner/search-assistant-banner.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/search-assistant-banner/search-assistant-banner.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: SearchAssistantBannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchAssistantBannerComponent", function() { return SearchAssistantBannerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_cmbu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/cmbu.service */ "./src/app/services/cmbu.service.ts");




var SearchAssistantBannerComponent = /** @class */ (function () {
    function SearchAssistantBannerComponent(router, cmbuService, route) {
        var _this = this;
        this.router = router;
        this.cmbuService = cmbuService;
        this.route = route;
        this.isLive = false;
        this.isIsim = false;
        this.isOffline = false;
        this.isHoeTo = false;
        this.isErrorMsg = false;
        this.errorMsg = '';
        this.currentSlug = '';
        this.route.paramMap.subscribe(function (data) {
            _this.currentSlug = data.get('categorySlug');
        });
    }
    SearchAssistantBannerComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.categorySlug = 'live';
        this.cmbuService.getAllAssetCategories().subscribe(function (data) {
            _this.assetCategories = data.data;
            _this.categorySlug = 'all-assets'; //data.data[0].count;
        });
    };
    SearchAssistantBannerComponent.prototype.getCategorySlug = function (event) {
        this.categorySlug = event.target.value.toLowerCase().replace(/ /g, '-');
    };
    SearchAssistantBannerComponent.prototype.getSearchKeyword = function (event) {
        this.searchKeyword = event.target.value;
    };
    SearchAssistantBannerComponent.prototype.redirectPage = function () {
        if (!this.searchKeyword || this.searchKeyword.trim() == "") {
            this.isErrorMsg = true;
            this.errorMsg = 'Please provide a keyword to search';
        }
        else {
            this.searchKeyword = this.searchKeyword.trim();
            if (this.categorySlug == '') {
                this.categorySlug = 'all-assets';
            }
            var searPageURL = '/search/' + this.categorySlug + '/' + this.searchKeyword;
            this.router.navigateByUrl(searPageURL);
        }
    };
    SearchAssistantBannerComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_services_cmbu_service__WEBPACK_IMPORTED_MODULE_3__["CmbuService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], SearchAssistantBannerComponent.prototype, "categorySlug", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], SearchAssistantBannerComponent.prototype, "searchKeyword", void 0);
    SearchAssistantBannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-assistant-banner',
            template: __webpack_require__(/*! raw-loader!./search-assistant-banner.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/search-assistant-banner/search-assistant-banner.component.html"),
            styles: [__webpack_require__(/*! ./search-assistant-banner.component.css */ "./src/app/components/search-assistant-banner/search-assistant-banner.component.css")]
        })
    ], SearchAssistantBannerComponent);
    return SearchAssistantBannerComponent;
}());



/***/ }),

/***/ "./src/app/components/search-result-button/search-result-button.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/search-result-button/search-result-button.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n.filterContainer .filterList, .filterContainer .filterButtons > div {\n    max-width: 1700px;\n    margin: 0 auto;\n    padding: 0 2.5rem;\n}\n\n.filterContainer .filterButtons {\n     background: #ffffff;\n}\n\n.filterContainer .filterButtons > div {\n     padding-bottom: 1rem;\n}\n\n.filterContainer .filterButtons h1 {\n     margin: 0;\n     padding-top: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gtcmVzdWx0LWJ1dHRvbi9zZWFyY2gtcmVzdWx0LWJ1dHRvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtLQUNLLG1CQUFtQjtBQUN4Qjs7QUFFQTtLQUNLLG9CQUFvQjtBQUN6Qjs7QUFFQTtLQUNLLFNBQVM7S0FDVCxpQkFBaUI7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlYXJjaC1yZXN1bHQtYnV0dG9uL3NlYXJjaC1yZXN1bHQtYnV0dG9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLmZpbHRlckNvbnRhaW5lciAuZmlsdGVyTGlzdCwgLmZpbHRlckNvbnRhaW5lciAuZmlsdGVyQnV0dG9ucyA+IGRpdiB7XG4gICAgbWF4LXdpZHRoOiAxNzAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZzogMCAyLjVyZW07XG59XG5cbi5maWx0ZXJDb250YWluZXIgLmZpbHRlckJ1dHRvbnMge1xuICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuXG4uZmlsdGVyQ29udGFpbmVyIC5maWx0ZXJCdXR0b25zID4gZGl2IHtcbiAgICAgcGFkZGluZy1ib3R0b206IDFyZW07XG59XG5cbi5maWx0ZXJDb250YWluZXIgLmZpbHRlckJ1dHRvbnMgaDEge1xuICAgICBtYXJnaW46IDA7XG4gICAgIHBhZGRpbmctdG9wOiAxcmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/search-result-button/search-result-button.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/search-result-button/search-result-button.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SearchResultButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultButtonComponent", function() { return SearchResultButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var SearchResultButtonComponent = /** @class */ (function () {
    function SearchResultButtonComponent(router) {
        var _this = this;
        this.router = router;
        this.searchRedirectPage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.searchKeyword = '';
        router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivationEnd"]) {
                _this.searchKeyword = val.snapshot.paramMap.get('searchKeyword');
            }
        });
    }
    SearchResultButtonComponent.prototype.ngOnInit = function () {
    };
    SearchResultButtonComponent.prototype.redirectPage = function (categorySlug) {
        var searPageURL = '';
        this.categorySlug = categorySlug;
        this.router.navigateByUrl('/search/' + this.categorySlug + '/' + this.searchKeyword);
    };
    SearchResultButtonComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], SearchResultButtonComponent.prototype, "assetCategories", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], SearchResultButtonComponent.prototype, "categorySlug", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], SearchResultButtonComponent.prototype, "searchRedirectPage", void 0);
    SearchResultButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-result-button',
            template: __webpack_require__(/*! raw-loader!./search-result-button.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/search-result-button/search-result-button.component.html"),
            styles: [__webpack_require__(/*! ./search-result-button.component.css */ "./src/app/components/search-result-button/search-result-button.component.css")]
        })
    ], SearchResultButtonComponent);
    return SearchResultButtonComponent;
}());



/***/ }),

/***/ "./src/app/components/search/search.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/search/search.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* CSS */\n\n.resultContainer .resultList {\n    max-width: 1600px;\n    margin: 0 auto;\n    padding: 2rem 1rem 5rem;\n}\n\n.resultContainer .resultList h3 {\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsUUFBUTs7QUFFUjtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDU1MgKi9cblxuLnJlc3VsdENvbnRhaW5lciAucmVzdWx0TGlzdCB7XG4gICAgbWF4LXdpZHRoOiAxNjAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZzogMnJlbSAxcmVtIDVyZW07XG59XG5cbi5yZXN1bHRDb250YWluZXIgLnJlc3VsdExpc3QgaDMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_cmbu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cmbu.service */ "./src/app/services/cmbu.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_paginationservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/paginationservice.service */ "./src/app/services/paginationservice.service.ts");





var SearchComponent = /** @class */ (function () {
    function SearchComponent(service, router, paginationservice) {
        var _this = this;
        this.service = service;
        this.router = router;
        this.paginationservice = paginationservice;
        this.productSlug = '';
        this.categorySlug = '';
        this.catagory = '';
        this.searchKeyword = '';
        this.currentPage = 1;
        this.totalNoOfPages = 0;
        this.paginationResultOutPut = '';
        this.assetCategories = '';
        this.assetCategoryResultCount = 0;
        this.productAssets = '';
        this.totalNumberOfAssetsPerPage = 10;
        this.assetKeyword = '';
        this.isAssetPerPageChanged = false;
        router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivationEnd"]) {
                _this.categorySlug = val.snapshot.paramMap.get('categorySlug');
                if (_this.categorySlug == 'all-assets') {
                    _this.categorySlug = '';
                }
                _this.searchKeyword = val.snapshot.paramMap.get('searchKeyword');
            }
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                _this.currentPage = 1;
                _this.getAssetsByCategorySlug(_this.categorySlug, _this.searchKeyword, _this.currentPage, _this.totalNumberOfAssetsPerPage);
            }
        });
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.getAssetsByCategorySlug = function (categorySlug, assetKeyword, currentPage, pageSize) {
        var _this = this;
        this.categorySlug = categorySlug;
        this.assetKeyword = assetKeyword;
        var t1 = new Date().getTime();
        this.service.getAssetsByCategorySlug(this.categorySlug, this.assetKeyword, currentPage, pageSize).subscribe(function (data) {
            var t2 = new Date().getTime();
            _this.productAssets = data.assets;
            _this.assetCategories = data.categories;
            _this.assetCategoryResultCount = data.categories.filter(function (x) { return x.slug == _this.categorySlug; })[0].count;
            _paq.push(['setGenerationTimeMs', t2 - t1]);
            _paq.push(['trackSiteSearch',
                // Search keyword searched for
                _this.searchKeyword,
                // Search category selected in your search engine. If you do not need this, set to false
                _this.categorySlug,
                // Number of results on the Search results page. Zero indicates a 'No Result Search Keyword'. Set to false if you don't know
                _this.assetCategoryResultCount
            ]);
            _this.displayPaginationResult(data.pagination);
        });
    };
    SearchComponent.prototype.displayPaginationResult = function (paginationDetails) {
        this.paginationservice.displayPaginationResult(paginationDetails);
    };
    SearchComponent.prototype.getPaginationAssets = function (currentPage) {
        this.currentPage = currentPage;
        this.getAssetsByCategorySlug(this.categorySlug, this.searchKeyword, this.currentPage, this.totalNumberOfAssetsPerPage);
    };
    SearchComponent.prototype.getAssetsByPageSize = function (pageSize) {
        this.currentPage = 1;
        this.totalNumberOfAssetsPerPage = pageSize;
        this.getAssetsByCategorySlug(this.categorySlug, this.searchKeyword, this.currentPage, this.totalNumberOfAssetsPerPage);
    };
    SearchComponent.ctorParameters = function () { return [
        { type: src_app_services_cmbu_service__WEBPACK_IMPORTED_MODULE_2__["CmbuService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_services_paginationservice_service__WEBPACK_IMPORTED_MODULE_4__["PaginationserviceService"] }
    ]; };
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/search/search.component.html"),
            host: { '[class.content-container]': 'true' },
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/components/search/search.component.css")]
        })
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/components/sort-by/sort-by.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/sort-by/sort-by.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc29ydC1ieS9zb3J0LWJ5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/sort-by/sort-by.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sort-by/sort-by.component.ts ***!
  \*********************************************************/
/*! exports provided: SortByComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortByComponent", function() { return SortByComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SortByComponent = /** @class */ (function () {
    function SortByComponent() {
    }
    SortByComponent.prototype.ngOnInit = function () {
    };
    SortByComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sort-by',
            template: __webpack_require__(/*! raw-loader!./sort-by.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/sort-by/sort-by.component.html"),
            styles: [__webpack_require__(/*! ./sort-by.component.css */ "./src/app/components/sort-by/sort-by.component.css")]
        })
    ], SortByComponent);
    return SortByComponent;
}());



/***/ }),

/***/ "./src/app/components/top-rated/top-rated.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/top-rated/top-rated.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9wLXJhdGVkL3RvcC1yYXRlZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/top-rated/top-rated.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/top-rated/top-rated.component.ts ***!
  \*************************************************************/
/*! exports provided: TopRatedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopRatedComponent", function() { return TopRatedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_cmbu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/cmbu.service */ "./src/app/services/cmbu.service.ts");
/* harmony import */ var src_app_services_paginationservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/paginationservice.service */ "./src/app/services/paginationservice.service.ts");





var TopRatedComponent = /** @class */ (function () {
    function TopRatedComponent(router, cmbuService, paginationservice) {
        this.router = router;
        this.cmbuService = cmbuService;
        this.paginationservice = paginationservice;
        this.assetsList = [];
        this.keyword = '';
        this.pageSize = 10;
        this.currentPage = 1;
        this.totalNoOfPages = 0;
        this.paginationResultOutPut = '';
    }
    TopRatedComponent.prototype.ngOnInit = function () {
        this.getRopRatedAssets();
    };
    TopRatedComponent.prototype.getRopRatedAssets = function () {
        var _this = this;
        this.cmbuService.getTopRatedAssets(this.keyword, this.currentPage, this.pageSize).subscribe(function (data) {
            _this.assetsList = data.data;
            _this.paginationservice.displayPaginationResult(data.pagination);
        });
    };
    TopRatedComponent.prototype.getAssetsByPageSize = function (pageSize) {
        if (pageSize != this.pageSize) {
            // this.isAssetPerPageChanged = true;
            this.currentPage = 1;
            // this.direction = 1;
        }
        this.pageSize = pageSize;
        this.getRopRatedAssets();
    };
    TopRatedComponent.prototype.filterByKeyword = function (keyword) {
        this.keyword = keyword;
        this.getRopRatedAssets();
    };
    TopRatedComponent.prototype.getPaginationAssets = function (currentPage) {
        this.currentPage = currentPage;
        this.getRopRatedAssets();
    };
    TopRatedComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_services_cmbu_service__WEBPACK_IMPORTED_MODULE_3__["CmbuService"] },
        { type: src_app_services_paginationservice_service__WEBPACK_IMPORTED_MODULE_4__["PaginationserviceService"] }
    ]; };
    TopRatedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-top-rated',
            template: __webpack_require__(/*! raw-loader!./top-rated.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/top-rated/top-rated.component.html"),
            styles: [__webpack_require__(/*! ./top-rated.component.css */ "./src/app/components/top-rated/top-rated.component.css")]
        })
    ], TopRatedComponent);
    return TopRatedComponent;
}());



/***/ }),

/***/ "./src/app/components/unsubscribe/unsubscribe.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/unsubscribe/unsubscribe.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-area .unsubscribe-page{margin-top:80px;}\n.unsubscribe-page h2{text-align: center; padding-bottom: 10px; }\n.unsubscribe-page h3{text-align: center;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91bnN1YnNjcmliZS91bnN1YnNjcmliZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdDQUFnQyxlQUFlLENBQUM7QUFDaEQscUJBQXFCLGtCQUFrQixFQUFFLG9CQUFvQixFQUFFO0FBQy9ELHFCQUFxQixrQkFBa0IsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdW5zdWJzY3JpYmUvdW5zdWJzY3JpYmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LWFyZWEgLnVuc3Vic2NyaWJlLXBhZ2V7bWFyZ2luLXRvcDo4MHB4O31cbi51bnN1YnNjcmliZS1wYWdlIGgye3RleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZy1ib3R0b206IDEwcHg7IH1cbi51bnN1YnNjcmliZS1wYWdlIGgze3RleHQtYWxpZ246IGNlbnRlcjt9Il19 */"

/***/ }),

/***/ "./src/app/components/unsubscribe/unsubscribe.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/unsubscribe/unsubscribe.component.ts ***!
  \*****************************************************************/
/*! exports provided: UnsubscribeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnsubscribeComponent", function() { return UnsubscribeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/notification.service */ "./src/app/services/notification.service.ts");



var UnsubscribeComponent = /** @class */ (function () {
    function UnsubscribeComponent(notificatonService) {
        this.notificatonService = notificatonService;
        this.message = '';
    }
    UnsubscribeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.notificatonService.unSubscribe().subscribe(function (result) {
            _this.message = result.message;
        });
    };
    UnsubscribeComponent.ctorParameters = function () { return [
        { type: src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"] }
    ]; };
    UnsubscribeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-unsubscribe',
            template: __webpack_require__(/*! raw-loader!./unsubscribe.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/unsubscribe/unsubscribe.component.html"),
            styles: [__webpack_require__(/*! ./unsubscribe.component.css */ "./src/app/components/unsubscribe/unsubscribe.component.css")]
        })
    ], UnsubscribeComponent);
    return UnsubscribeComponent;
}());



/***/ }),

/***/ "./src/app/components/use-cases/use-cases.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/use-cases/use-cases.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlLWNhc2VzL3VzZS1jYXNlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/use-cases/use-cases.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/use-cases/use-cases.component.ts ***!
  \*************************************************************/
/*! exports provided: UseCasesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UseCasesComponent", function() { return UseCasesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_usecases_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/usecases.service */ "./src/app/services/usecases.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_paginationservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/paginationservice.service */ "./src/app/services/paginationservice.service.ts");
/* harmony import */ var src_app_services_cmbu_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/cmbu.service */ "./src/app/services/cmbu.service.ts");






var UseCasesComponent = /** @class */ (function () {
    function UseCasesComponent(usecasesService, router, paginationService, cmbuService) {
        this.usecasesService = usecasesService;
        this.router = router;
        this.paginationService = paginationService;
        this.cmbuService = cmbuService;
        this.usecasesList = [];
        this.useCaseKeyword = '';
        this.pageSize = 10;
        this.currentPage = 1;
        this.totalNoOfPages = 0;
        this.paginationResultOutPut = '';
    }
    UseCasesComponent.prototype.ngOnInit = function () {
        this.getUsecases();
    };
    UseCasesComponent.prototype.getUsecases = function () {
        var _this = this;
        this.usecasesService.getUsecases(this.useCaseKeyword, this.currentPage, this.pageSize).subscribe(function (data) {
            _this.usecasesList = data.data;
            _this.paginationService.displayPaginationResult(data.pagination);
        });
    };
    UseCasesComponent.prototype.filterUsecasesByKeyword = function (keyword) {
        this.useCaseKeyword = keyword;
        this.getUsecases();
    };
    UseCasesComponent.prototype.getPaginationAssets = function (currentPage) {
        this.currentPage = currentPage;
        this.getUsecases();
    };
    UseCasesComponent.prototype.getUsecasesByPageSize = function (pageSize) {
        this.pageSize = pageSize;
        this.getUsecases();
    };
    UseCasesComponent.ctorParameters = function () { return [
        { type: _services_usecases_service__WEBPACK_IMPORTED_MODULE_2__["UsecasesService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_services_paginationservice_service__WEBPACK_IMPORTED_MODULE_4__["PaginationserviceService"] },
        { type: src_app_services_cmbu_service__WEBPACK_IMPORTED_MODULE_5__["CmbuService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], UseCasesComponent.prototype, "pageSize", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], UseCasesComponent.prototype, "currentPage", void 0);
    UseCasesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-use-cases',
            template: __webpack_require__(/*! raw-loader!./use-cases.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/use-cases/use-cases.component.html"),
            styles: [__webpack_require__(/*! ./use-cases.component.css */ "./src/app/components/use-cases/use-cases.component.css")]
        })
    ], UseCasesComponent);
    return UseCasesComponent;
}());



/***/ }),

/***/ "./src/app/components/usecase-item/usecase-item.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/usecase-item/usecase-item.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/* Library Card */\n\n.libraryCard  {\n    background-color: #ffffff;\n    padding: 1rem 0.5rem 1rem;\n    margin-top: 1rem;\n    position: relative;\n    box-shadow: 0 0.125rem 0 0 #d7d7d7;\n    border-radius: .125rem;\n    border: 1px solid #d7d7d7;\n}\n\n.libraryCard h2 {\n    color: #000;\n    font-size: .75rem;\n    font-weight: 200;\n    letter-spacing: normal;\n    margin: 0;\n    line-height: 1rem;\n}\n\n.libraryCard button {\n    margin-top: 1.5rem;\n}\n\n.libraryStrip {\n    position: absolute;\n    width: 40%;\n    right: 0;\n    top: 0;\n    height: 100%;\n    display: -webkit-box;\n    display: flex;\n    text-align: center;\n    -webkit-box-align: center;\n            align-items: center;\n    background-color: transparent;\n}\n\n.libraryStrip clr-icon {\n    margin: 0 auto;\n    color: #ffffff;\n    width: 40%;\n    height: 40%;\n    z-index: 1;\n}\n\n.libraryStrip::after {\n    content: '';\n    position: absolute;\n    width: 100%; \n    height: 100%; \n    -webkit-clip-path: polygon(30% 0%, 100% 0%, 70% 100%, 0% 100%);\n    -webkit-clip-path: polygon(30% 0%, 100% 0%, 70% 100%, 0% 100%);\n    clip-path: polygon(30% 0%, 100% 0%, 70% 100%, 0% 100%);\n    clip-path: polygon(30% 0%, 100% 0%, 70% 100%, 0% 100%);\n}\n\n.libraryItem .libraryCard .libraryStrip::after {\n    background: rgba(0,177,221,1);\n    background: -webkit-gradient(left top, right bottom, color-stop(0%, rgba(0,177,221,1)), color-stop(10%, rgba(0,170,217,1)), color-stop(20%, rgba(0,168,214,1)), color-stop(30%, rgba(0,161,210,1)), color-stop(40%, rgba(0,155,206,1)), color-stop(50%, rgba(0,148,202,1)), color-stop(60%, rgba(0,143,199,1)), color-stop(70%, rgba(0,137,195,1)), color-stop(80%, rgba(0,131,191,1)), color-stop(90%, rgba(0,128,188,1)), color-stop(100%, rgba(0,120,184,1)));\n    background: linear-gradient(135deg, rgba(0,177,221,1) 0%, rgba(0,170,217,1) 10%, rgba(0,168,214,1) 20%, rgba(0,161,210,1) 30%, rgba(0,155,206,1) 40%, rgba(0,148,202,1) 50%, rgba(0,143,199,1) 60%, rgba(0,137,195,1) 70%, rgba(0,131,191,1) 80%, rgba(0,128,188,1) 90%, rgba(0,120,184,1) 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00b1dd', endColorstr='#0078b8', GradientType=1 );\n}\n\n.libraryItem:nth-child(3n + 2) .libraryCard .libraryStrip::after {\n    background: rgba(119,190,33,1);\n    background: -webkit-gradient(left top, right bottom, color-stop(0%, rgba(119,190,33,1)), color-stop(10%, rgba(115,184,32,1)), color-stop(20%, rgba(111,178,30,1)), color-stop(30%, rgba(108,172,29,1)), color-stop(40%, rgba(104,166,28,1)), color-stop(50%, rgba(100,160,26,1)), color-stop(60%, rgba(96,154,25,1)), color-stop(70%, rgba(92,148,23,1)), color-stop(80%, rgba(88,142,22,1)), color-stop(90%, rgba(84,136,21,1)), color-stop(100%, rgba(80,130,19,1)));\n    background: linear-gradient(135deg, rgba(119,190,33,1) 0%, rgba(115,184,32,1) 10%, rgba(111,178,30,1) 20%, rgba(108,172,29,1) 30%, rgba(104,166,28,1) 40%, rgba(100,160,26,1) 50%, rgba(96,154,25,1) 60%, rgba(92,148,23,1) 70%, rgba(88,142,22,1) 80%, rgba(84,136,21,1) 90%, rgba(80,130,19,1) 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#77be21', endColorstr='#508213', GradientType=1 );\n}\n\n.libraryItem:nth-child(3n + 3) .libraryCard .libraryStrip::after {\n    background: rgba(128,53,178,1);\n    background: -webkit-gradient(left top, right bottom, color-stop(0%, rgba(128,53,178,1)), color-stop(10%, rgba(122,50,170,1)), color-stop(20%, rgba(115,48,163,1)), color-stop(30%, rgba(109,45,155,1)), color-stop(40%, rgba(104,43,147,1)), color-stop(50%, rgba(99,40,139,1)), color-stop(60%, rgba(93,38,132,1)), color-stop(70%, rgba(88,35,124,1)), color-stop(80%, rgba(82,33,116,1)), color-stop(90%, rgba(76,30,108,1)), color-stop(100%, rgba(71,27,101,1)));\n    background: linear-gradient(135deg, rgba(128,53,178,1) 0%, rgba(122,50,170,1) 10%, rgba(115,48,163,1) 20%, rgba(109,45,155,1) 30%, rgba(104,43,147,1) 40%, rgba(99,40,139,1) 50%, rgba(93,38,132,1) 60%, rgba(88,35,124,1) 70%, rgba(82,33,116,1) 80%, rgba(76,30,108,1) 90%, rgba(71,27,101,1) 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#8035b2', endColorstr='#471b65', GradientType=1 );\n}\n\n@media(max-width: 600px){\n    .libraryItem .libraryCard .libraryStrip::after{\n       background: none !important;\n    }\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VjYXNlLWl0ZW0vdXNlY2FzZS1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGlCQUFpQjs7QUFFakI7SUFDSSx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0NBQWtDO0lBQ2xDLHNCQUFzQjtJQUN0Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsU0FBUztJQUNULGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsUUFBUTtJQUNSLE1BQU07SUFDTixZQUFZO0lBQ1osb0JBQWE7SUFBYixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksY0FBYztJQUNkLGNBQWM7SUFDZCxVQUFVO0lBQ1YsV0FBVztJQUNYLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWiw4REFBOEQ7SUFDOUQsOERBQThEO0lBQzlELHNEQUFzRDtJQUN0RCxzREFBc0Q7QUFDMUQ7O0FBRUE7SUFDSSw2QkFBNkI7SUFFN0IsZ2NBQWdjO0lBSWhjLGdTQUFnUztJQUNoUyxvSEFBb0g7QUFDeEg7O0FBRUE7SUFDSSw4QkFBOEI7SUFFOUIsc2NBQXNjO0lBSXRjLHNTQUFzUztJQUN0UyxvSEFBb0g7QUFDeEg7O0FBR0E7SUFDSSw4QkFBOEI7SUFFOUIscWNBQXFjO0lBSXJjLHFTQUFxUztJQUNyUyxvSEFBb0g7QUFDeEg7O0FBQ0E7SUFDSTtPQUNHLDJCQUEyQjtJQUM5QjtDQUNIIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VjYXNlLWl0ZW0vdXNlY2FzZS1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qIExpYnJhcnkgQ2FyZCAqL1xuXG4ubGlicmFyeUNhcmQgIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIHBhZGRpbmc6IDFyZW0gMC41cmVtIDFyZW07XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm94LXNoYWRvdzogMCAwLjEyNXJlbSAwIDAgI2Q3ZDdkNztcbiAgICBib3JkZXItcmFkaXVzOiAuMTI1cmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkN2Q3ZDc7XG59XG5cbi5saWJyYXJ5Q2FyZCBoMiB7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC1zaXplOiAuNzVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgIG1hcmdpbjogMDtcbiAgICBsaW5lLWhlaWdodDogMXJlbTtcbn1cblxuLmxpYnJhcnlDYXJkIGJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xufVxuXG4ubGlicmFyeVN0cmlwIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDQwJTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5saWJyYXJ5U3RyaXAgY2xyLWljb24ge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHdpZHRoOiA0MCU7XG4gICAgaGVpZ2h0OiA0MCU7XG4gICAgei1pbmRleDogMTtcbn1cblxuLmxpYnJhcnlTdHJpcDo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTsgXG4gICAgaGVpZ2h0OiAxMDAlOyBcbiAgICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbigzMCUgMCUsIDEwMCUgMCUsIDcwJSAxMDAlLCAwJSAxMDAlKTtcbiAgICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbigzMCUgMCUsIDEwMCUgMCUsIDcwJSAxMDAlLCAwJSAxMDAlKTtcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMzAlIDAlLCAxMDAlIDAlLCA3MCUgMTAwJSwgMCUgMTAwJSk7XG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDMwJSAwJSwgMTAwJSAwJSwgNzAlIDEwMCUsIDAlIDEwMCUpO1xufVxuXG4ubGlicmFyeUl0ZW0gLmxpYnJhcnlDYXJkIC5saWJyYXJ5U3RyaXA6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMTc3LDIyMSwxKTtcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHJnYmEoMCwxNzcsMjIxLDEpIDAlLCByZ2JhKDAsMTcwLDIxNywxKSAxMCUsIHJnYmEoMCwxNjgsMjE0LDEpIDIwJSwgcmdiYSgwLDE2MSwyMTAsMSkgMzAlLCByZ2JhKDAsMTU1LDIwNiwxKSA0MCUsIHJnYmEoMCwxNDgsMjAyLDEpIDUwJSwgcmdiYSgwLDE0MywxOTksMSkgNjAlLCByZ2JhKDAsMTM3LDE5NSwxKSA3MCUsIHJnYmEoMCwxMzEsMTkxLDEpIDgwJSwgcmdiYSgwLDEyOCwxODgsMSkgOTAlLCByZ2JhKDAsMTIwLDE4NCwxKSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxlZnQgdG9wLCByaWdodCBib3R0b20sIGNvbG9yLXN0b3AoMCUsIHJnYmEoMCwxNzcsMjIxLDEpKSwgY29sb3Itc3RvcCgxMCUsIHJnYmEoMCwxNzAsMjE3LDEpKSwgY29sb3Itc3RvcCgyMCUsIHJnYmEoMCwxNjgsMjE0LDEpKSwgY29sb3Itc3RvcCgzMCUsIHJnYmEoMCwxNjEsMjEwLDEpKSwgY29sb3Itc3RvcCg0MCUsIHJnYmEoMCwxNTUsMjA2LDEpKSwgY29sb3Itc3RvcCg1MCUsIHJnYmEoMCwxNDgsMjAyLDEpKSwgY29sb3Itc3RvcCg2MCUsIHJnYmEoMCwxNDMsMTk5LDEpKSwgY29sb3Itc3RvcCg3MCUsIHJnYmEoMCwxMzcsMTk1LDEpKSwgY29sb3Itc3RvcCg4MCUsIHJnYmEoMCwxMzEsMTkxLDEpKSwgY29sb3Itc3RvcCg5MCUsIHJnYmEoMCwxMjgsMTg4LDEpKSwgY29sb3Itc3RvcCgxMDAlLCByZ2JhKDAsMTIwLDE4NCwxKSkpO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KC00NWRlZywgcmdiYSgwLDE3NywyMjEsMSkgMCUsIHJnYmEoMCwxNzAsMjE3LDEpIDEwJSwgcmdiYSgwLDE2OCwyMTQsMSkgMjAlLCByZ2JhKDAsMTYxLDIxMCwxKSAzMCUsIHJnYmEoMCwxNTUsMjA2LDEpIDQwJSwgcmdiYSgwLDE0OCwyMDIsMSkgNTAlLCByZ2JhKDAsMTQzLDE5OSwxKSA2MCUsIHJnYmEoMCwxMzcsMTk1LDEpIDcwJSwgcmdiYSgwLDEzMSwxOTEsMSkgODAlLCByZ2JhKDAsMTI4LDE4OCwxKSA5MCUsIHJnYmEoMCwxMjAsMTg0LDEpIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHJnYmEoMCwxNzcsMjIxLDEpIDAlLCByZ2JhKDAsMTcwLDIxNywxKSAxMCUsIHJnYmEoMCwxNjgsMjE0LDEpIDIwJSwgcmdiYSgwLDE2MSwyMTAsMSkgMzAlLCByZ2JhKDAsMTU1LDIwNiwxKSA0MCUsIHJnYmEoMCwxNDgsMjAyLDEpIDUwJSwgcmdiYSgwLDE0MywxOTksMSkgNjAlLCByZ2JhKDAsMTM3LDE5NSwxKSA3MCUsIHJnYmEoMCwxMzEsMTkxLDEpIDgwJSwgcmdiYSgwLDEyOCwxODgsMSkgOTAlLCByZ2JhKDAsMTIwLDE4NCwxKSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KC00NWRlZywgcmdiYSgwLDE3NywyMjEsMSkgMCUsIHJnYmEoMCwxNzAsMjE3LDEpIDEwJSwgcmdiYSgwLDE2OCwyMTQsMSkgMjAlLCByZ2JhKDAsMTYxLDIxMCwxKSAzMCUsIHJnYmEoMCwxNTUsMjA2LDEpIDQwJSwgcmdiYSgwLDE0OCwyMDIsMSkgNTAlLCByZ2JhKDAsMTQzLDE5OSwxKSA2MCUsIHJnYmEoMCwxMzcsMTk1LDEpIDcwJSwgcmdiYSgwLDEzMSwxOTEsMSkgODAlLCByZ2JhKDAsMTI4LDE4OCwxKSA5MCUsIHJnYmEoMCwxMjAsMTg0LDEpIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMCwxNzcsMjIxLDEpIDAlLCByZ2JhKDAsMTcwLDIxNywxKSAxMCUsIHJnYmEoMCwxNjgsMjE0LDEpIDIwJSwgcmdiYSgwLDE2MSwyMTAsMSkgMzAlLCByZ2JhKDAsMTU1LDIwNiwxKSA0MCUsIHJnYmEoMCwxNDgsMjAyLDEpIDUwJSwgcmdiYSgwLDE0MywxOTksMSkgNjAlLCByZ2JhKDAsMTM3LDE5NSwxKSA3MCUsIHJnYmEoMCwxMzEsMTkxLDEpIDgwJSwgcmdiYSgwLDEyOCwxODgsMSkgOTAlLCByZ2JhKDAsMTIwLDE4NCwxKSAxMDAlKTtcbiAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzAwYjFkZCcsIGVuZENvbG9yc3RyPScjMDA3OGI4JywgR3JhZGllbnRUeXBlPTEgKTtcbn1cblxuLmxpYnJhcnlJdGVtOm50aC1jaGlsZCgzbiArIDIpIC5saWJyYXJ5Q2FyZCAubGlicmFyeVN0cmlwOjphZnRlciB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgxMTksMTkwLDMzLDEpO1xuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KC00NWRlZywgcmdiYSgxMTksMTkwLDMzLDEpIDAlLCByZ2JhKDExNSwxODQsMzIsMSkgMTAlLCByZ2JhKDExMSwxNzgsMzAsMSkgMjAlLCByZ2JhKDEwOCwxNzIsMjksMSkgMzAlLCByZ2JhKDEwNCwxNjYsMjgsMSkgNDAlLCByZ2JhKDEwMCwxNjAsMjYsMSkgNTAlLCByZ2JhKDk2LDE1NCwyNSwxKSA2MCUsIHJnYmEoOTIsMTQ4LDIzLDEpIDcwJSwgcmdiYSg4OCwxNDIsMjIsMSkgODAlLCByZ2JhKDg0LDEzNiwyMSwxKSA5MCUsIHJnYmEoODAsMTMwLDE5LDEpIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGVmdCB0b3AsIHJpZ2h0IGJvdHRvbSwgY29sb3Itc3RvcCgwJSwgcmdiYSgxMTksMTkwLDMzLDEpKSwgY29sb3Itc3RvcCgxMCUsIHJnYmEoMTE1LDE4NCwzMiwxKSksIGNvbG9yLXN0b3AoMjAlLCByZ2JhKDExMSwxNzgsMzAsMSkpLCBjb2xvci1zdG9wKDMwJSwgcmdiYSgxMDgsMTcyLDI5LDEpKSwgY29sb3Itc3RvcCg0MCUsIHJnYmEoMTA0LDE2NiwyOCwxKSksIGNvbG9yLXN0b3AoNTAlLCByZ2JhKDEwMCwxNjAsMjYsMSkpLCBjb2xvci1zdG9wKDYwJSwgcmdiYSg5NiwxNTQsMjUsMSkpLCBjb2xvci1zdG9wKDcwJSwgcmdiYSg5MiwxNDgsMjMsMSkpLCBjb2xvci1zdG9wKDgwJSwgcmdiYSg4OCwxNDIsMjIsMSkpLCBjb2xvci1zdG9wKDkwJSwgcmdiYSg4NCwxMzYsMjEsMSkpLCBjb2xvci1zdG9wKDEwMCUsIHJnYmEoODAsMTMwLDE5LDEpKSk7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCByZ2JhKDExOSwxOTAsMzMsMSkgMCUsIHJnYmEoMTE1LDE4NCwzMiwxKSAxMCUsIHJnYmEoMTExLDE3OCwzMCwxKSAyMCUsIHJnYmEoMTA4LDE3MiwyOSwxKSAzMCUsIHJnYmEoMTA0LDE2NiwyOCwxKSA0MCUsIHJnYmEoMTAwLDE2MCwyNiwxKSA1MCUsIHJnYmEoOTYsMTU0LDI1LDEpIDYwJSwgcmdiYSg5MiwxNDgsMjMsMSkgNzAlLCByZ2JhKDg4LDE0MiwyMiwxKSA4MCUsIHJnYmEoODQsMTM2LDIxLDEpIDkwJSwgcmdiYSg4MCwxMzAsMTksMSkgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KC00NWRlZywgcmdiYSgxMTksMTkwLDMzLDEpIDAlLCByZ2JhKDExNSwxODQsMzIsMSkgMTAlLCByZ2JhKDExMSwxNzgsMzAsMSkgMjAlLCByZ2JhKDEwOCwxNzIsMjksMSkgMzAlLCByZ2JhKDEwNCwxNjYsMjgsMSkgNDAlLCByZ2JhKDEwMCwxNjAsMjYsMSkgNTAlLCByZ2JhKDk2LDE1NCwyNSwxKSA2MCUsIHJnYmEoOTIsMTQ4LDIzLDEpIDcwJSwgcmdiYSg4OCwxNDIsMjIsMSkgODAlLCByZ2JhKDg0LDEzNiwyMSwxKSA5MCUsIHJnYmEoODAsMTMwLDE5LDEpIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCByZ2JhKDExOSwxOTAsMzMsMSkgMCUsIHJnYmEoMTE1LDE4NCwzMiwxKSAxMCUsIHJnYmEoMTExLDE3OCwzMCwxKSAyMCUsIHJnYmEoMTA4LDE3MiwyOSwxKSAzMCUsIHJnYmEoMTA0LDE2NiwyOCwxKSA0MCUsIHJnYmEoMTAwLDE2MCwyNiwxKSA1MCUsIHJnYmEoOTYsMTU0LDI1LDEpIDYwJSwgcmdiYSg5MiwxNDgsMjMsMSkgNzAlLCByZ2JhKDg4LDE0MiwyMiwxKSA4MCUsIHJnYmEoODQsMTM2LDIxLDEpIDkwJSwgcmdiYSg4MCwxMzAsMTksMSkgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgxMTksMTkwLDMzLDEpIDAlLCByZ2JhKDExNSwxODQsMzIsMSkgMTAlLCByZ2JhKDExMSwxNzgsMzAsMSkgMjAlLCByZ2JhKDEwOCwxNzIsMjksMSkgMzAlLCByZ2JhKDEwNCwxNjYsMjgsMSkgNDAlLCByZ2JhKDEwMCwxNjAsMjYsMSkgNTAlLCByZ2JhKDk2LDE1NCwyNSwxKSA2MCUsIHJnYmEoOTIsMTQ4LDIzLDEpIDcwJSwgcmdiYSg4OCwxNDIsMjIsMSkgODAlLCByZ2JhKDg0LDEzNiwyMSwxKSA5MCUsIHJnYmEoODAsMTMwLDE5LDEpIDEwMCUpO1xuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjNzdiZTIxJywgZW5kQ29sb3JzdHI9JyM1MDgyMTMnLCBHcmFkaWVudFR5cGU9MSApO1xufVxuXG5cbi5saWJyYXJ5SXRlbTpudGgtY2hpbGQoM24gKyAzKSAubGlicmFyeUNhcmQgLmxpYnJhcnlTdHJpcDo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMTI4LDUzLDE3OCwxKTtcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHJnYmEoMTI4LDUzLDE3OCwxKSAwJSwgcmdiYSgxMjIsNTAsMTcwLDEpIDEwJSwgcmdiYSgxMTUsNDgsMTYzLDEpIDIwJSwgcmdiYSgxMDksNDUsMTU1LDEpIDMwJSwgcmdiYSgxMDQsNDMsMTQ3LDEpIDQwJSwgcmdiYSg5OSw0MCwxMzksMSkgNTAlLCByZ2JhKDkzLDM4LDEzMiwxKSA2MCUsIHJnYmEoODgsMzUsMTI0LDEpIDcwJSwgcmdiYSg4MiwzMywxMTYsMSkgODAlLCByZ2JhKDc2LDMwLDEwOCwxKSA5MCUsIHJnYmEoNzEsMjcsMTAxLDEpIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGVmdCB0b3AsIHJpZ2h0IGJvdHRvbSwgY29sb3Itc3RvcCgwJSwgcmdiYSgxMjgsNTMsMTc4LDEpKSwgY29sb3Itc3RvcCgxMCUsIHJnYmEoMTIyLDUwLDE3MCwxKSksIGNvbG9yLXN0b3AoMjAlLCByZ2JhKDExNSw0OCwxNjMsMSkpLCBjb2xvci1zdG9wKDMwJSwgcmdiYSgxMDksNDUsMTU1LDEpKSwgY29sb3Itc3RvcCg0MCUsIHJnYmEoMTA0LDQzLDE0NywxKSksIGNvbG9yLXN0b3AoNTAlLCByZ2JhKDk5LDQwLDEzOSwxKSksIGNvbG9yLXN0b3AoNjAlLCByZ2JhKDkzLDM4LDEzMiwxKSksIGNvbG9yLXN0b3AoNzAlLCByZ2JhKDg4LDM1LDEyNCwxKSksIGNvbG9yLXN0b3AoODAlLCByZ2JhKDgyLDMzLDExNiwxKSksIGNvbG9yLXN0b3AoOTAlLCByZ2JhKDc2LDMwLDEwOCwxKSksIGNvbG9yLXN0b3AoMTAwJSwgcmdiYSg3MSwyNywxMDEsMSkpKTtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHJnYmEoMTI4LDUzLDE3OCwxKSAwJSwgcmdiYSgxMjIsNTAsMTcwLDEpIDEwJSwgcmdiYSgxMTUsNDgsMTYzLDEpIDIwJSwgcmdiYSgxMDksNDUsMTU1LDEpIDMwJSwgcmdiYSgxMDQsNDMsMTQ3LDEpIDQwJSwgcmdiYSg5OSw0MCwxMzksMSkgNTAlLCByZ2JhKDkzLDM4LDEzMiwxKSA2MCUsIHJnYmEoODgsMzUsMTI0LDEpIDcwJSwgcmdiYSg4MiwzMywxMTYsMSkgODAlLCByZ2JhKDc2LDMwLDEwOCwxKSA5MCUsIHJnYmEoNzEsMjcsMTAxLDEpIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHJnYmEoMTI4LDUzLDE3OCwxKSAwJSwgcmdiYSgxMjIsNTAsMTcwLDEpIDEwJSwgcmdiYSgxMTUsNDgsMTYzLDEpIDIwJSwgcmdiYSgxMDksNDUsMTU1LDEpIDMwJSwgcmdiYSgxMDQsNDMsMTQ3LDEpIDQwJSwgcmdiYSg5OSw0MCwxMzksMSkgNTAlLCByZ2JhKDkzLDM4LDEzMiwxKSA2MCUsIHJnYmEoODgsMzUsMTI0LDEpIDcwJSwgcmdiYSg4MiwzMywxMTYsMSkgODAlLCByZ2JhKDc2LDMwLDEwOCwxKSA5MCUsIHJnYmEoNzEsMjcsMTAxLDEpIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCByZ2JhKDEyOCw1MywxNzgsMSkgMCUsIHJnYmEoMTIyLDUwLDE3MCwxKSAxMCUsIHJnYmEoMTE1LDQ4LDE2MywxKSAyMCUsIHJnYmEoMTA5LDQ1LDE1NSwxKSAzMCUsIHJnYmEoMTA0LDQzLDE0NywxKSA0MCUsIHJnYmEoOTksNDAsMTM5LDEpIDUwJSwgcmdiYSg5MywzOCwxMzIsMSkgNjAlLCByZ2JhKDg4LDM1LDEyNCwxKSA3MCUsIHJnYmEoODIsMzMsMTE2LDEpIDgwJSwgcmdiYSg3NiwzMCwxMDgsMSkgOTAlLCByZ2JhKDcxLDI3LDEwMSwxKSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDEyOCw1MywxNzgsMSkgMCUsIHJnYmEoMTIyLDUwLDE3MCwxKSAxMCUsIHJnYmEoMTE1LDQ4LDE2MywxKSAyMCUsIHJnYmEoMTA5LDQ1LDE1NSwxKSAzMCUsIHJnYmEoMTA0LDQzLDE0NywxKSA0MCUsIHJnYmEoOTksNDAsMTM5LDEpIDUwJSwgcmdiYSg5MywzOCwxMzIsMSkgNjAlLCByZ2JhKDg4LDM1LDEyNCwxKSA3MCUsIHJnYmEoODIsMzMsMTE2LDEpIDgwJSwgcmdiYSg3NiwzMCwxMDgsMSkgOTAlLCByZ2JhKDcxLDI3LDEwMSwxKSAxMDAlKTtcbiAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzgwMzViMicsIGVuZENvbG9yc3RyPScjNDcxYjY1JywgR3JhZGllbnRUeXBlPTEgKTtcbn1cbkBtZWRpYShtYXgtd2lkdGg6IDYwMHB4KXtcbiAgICAubGlicmFyeUl0ZW0gLmxpYnJhcnlDYXJkIC5saWJyYXJ5U3RyaXA6OmFmdGVye1xuICAgICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gfSJdfQ== */"

/***/ }),

/***/ "./src/app/components/usecase-item/usecase-item.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/usecase-item/usecase-item.component.ts ***!
  \*******************************************************************/
/*! exports provided: UsecaseItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsecaseItemComponent", function() { return UsecaseItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UsecaseItemComponent = /** @class */ (function () {
    function UsecaseItemComponent() {
    }
    UsecaseItemComponent.prototype.ngOnInit = function () {
    };
    UsecaseItemComponent.prototype.viewUseCase = function (usecaseDetails) {
        _paq.push(['trackEvent', 'Usecase view', '"' + usecaseDetails.name + '"is viewed', 'view']);
        setTimeout(function () {
            window.location.href = '/library/usecases/' + usecaseDetails.slug;
        }, 100);
        return false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], UsecaseItemComponent.prototype, "usecasesList", void 0);
    UsecaseItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-usecase-item',
            template: __webpack_require__(/*! raw-loader!./usecase-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/usecase-item/usecase-item.component.html"),
            styles: [__webpack_require__(/*! ./usecase-item.component.css */ "./src/app/components/usecase-item/usecase-item.component.css")]
        })
    ], UsecaseItemComponent);
    return UsecaseItemComponent;
}());



/***/ }),

/***/ "./src/app/components/usecase-view/usecase-view.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/usecase-view/usecase-view.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".show-more a {\n    cursor: pointer;\n    text-decoration: none;\n}\n.show-more {\n    display: block;\n    color: #707070;\n    text-transform: uppercase;\n    margin-top: 0.5rem;\n    font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VjYXNlLXZpZXcvdXNlY2FzZS12aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VjYXNlLXZpZXcvdXNlY2FzZS12aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hvdy1tb3JlIGEge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uc2hvdy1tb3JlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb2xvcjogIzcwNzA3MDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/usecase-view/usecase-view.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/usecase-view/usecase-view.component.ts ***!
  \*******************************************************************/
/*! exports provided: UsecaseViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsecaseViewComponent", function() { return UsecaseViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usecases_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usecases.service */ "./src/app/services/usecases.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_paginationservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/paginationservice.service */ "./src/app/services/paginationservice.service.ts");





var UsecaseViewComponent = /** @class */ (function () {
    function UsecaseViewComponent(service, route, paginationService, router) {
        this.service = service;
        this.route = route;
        this.paginationService = paginationService;
        this.router = router;
        this.usecaseSlug = '';
        this.productAssets = '';
        this.keyword = '';
        this.pageSize = 10;
        this.currentPage = 1;
        this.showMore = false;
        this.totalNoOfPages = 0;
        this.paginationResultOutPut = '';
    }
    UsecaseViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (data) {
            _this.usecaseSlug = data.get('usecaseslug');
            _this.getUseCasesAssets();
        });
    };
    UsecaseViewComponent.prototype.getUseCasesAssets = function () {
        var _this = this;
        this.service.getUsecasesAssets(this.usecaseSlug, this.keyword, this.currentPage, this.pageSize).subscribe(function (data) {
            if (!data.name) {
                _this.router.navigate(['/**'], { skipLocationChange: true });
                return false;
            }
            _this.usercaseDetails = data;
            _this.productAssets = data.assets;
            _this.paginationService.displayPaginationResult(data.pagination);
        });
    };
    UsecaseViewComponent.prototype.getPaginationAssets = function (currentPage) {
        this.currentPage = currentPage;
        this.getUseCasesAssets();
    };
    UsecaseViewComponent.prototype.filterByKeyword = function (keyword) {
        this.keyword = keyword;
        this.getUseCasesAssets();
    };
    UsecaseViewComponent.prototype.getAssetsByPageSize = function (pageSize) {
        if (pageSize != this.pageSize) {
            // this.isAssetPerPageChanged = true;
            this.currentPage = 1;
            // this.direction = 1;
        }
        this.pageSize = pageSize;
    };
    UsecaseViewComponent.ctorParameters = function () { return [
        { type: src_app_services_usecases_service__WEBPACK_IMPORTED_MODULE_2__["UsecasesService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: src_app_services_paginationservice_service__WEBPACK_IMPORTED_MODULE_4__["PaginationserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    UsecaseViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-usecase-view',
            template: __webpack_require__(/*! raw-loader!./usecase-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/usecase-view/usecase-view.component.html"),
            styles: [__webpack_require__(/*! ./usecase-view.component.css */ "./src/app/components/usecase-view/usecase-view.component.css")]
        })
    ], UsecaseViewComponent);
    return UsecaseViewComponent;
}());



/***/ }),

/***/ "./src/app/components/user-playlist/user-playlist.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/user-playlist/user-playlist.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1wbGF5bGlzdC91c2VyLXBsYXlsaXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/user-playlist/user-playlist.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/user-playlist/user-playlist.component.ts ***!
  \*********************************************************************/
/*! exports provided: UserPlaylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPlaylistComponent", function() { return UserPlaylistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_playlists_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/playlists.service */ "./src/app/services/playlists.service.ts");
/* harmony import */ var src_app_services_paginationservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/paginationservice.service */ "./src/app/services/paginationservice.service.ts");




var UserPlaylistComponent = /** @class */ (function () {
    function UserPlaylistComponent(playlistsService, paginationService) {
        this.playlistsService = playlistsService;
        this.paginationService = paginationService;
        this.playlists = [];
        this.savedPlaylists = [];
        this.keyword = '';
        this.savedPlaylistsKeyword = '';
        this.playlistType = 'user';
        this.savedPlaylist = 'saved';
        this.currentPage = 1;
        this.pageSize = 10;
        this.savedPlaylistCurrentPage = 1;
        this.savedPlaylistPageSize = 10;
        this.totalNoOfPages = 0;
        this.paginationResultOutPut = '';
    }
    UserPlaylistComponent.prototype.ngOnInit = function () {
        this.yourPlaylistActive = true;
        this.tab();
    };
    UserPlaylistComponent.prototype.getPlaylists = function () {
        var _this = this;
        this.playlistsService.getPlaylists(this.keyword, 'users', this.currentPage, this.pageSize).subscribe(function (data) {
            _this.playlists = data.data;
            _this.paginationService.displayPaginationResult(data.pagination);
        });
    };
    UserPlaylistComponent.prototype.getSavedPlaylists = function () {
        var _this = this;
        this.playlistsService.getSavedPlaylists(this.savedPlaylistsKeyword, this.savedPlaylistCurrentPage, this.savedPlaylistPageSize).subscribe(function (data) {
            _this.savedPlaylists = data.data;
            _this.paginationService.displayPaginationResult(data.pagination);
        });
    };
    UserPlaylistComponent.prototype.getPlaylistsByPageSize = function (pageSize) {
        if (pageSize != this.pageSize) {
            // this.isAssetPerPageChanged = true;
            this.currentPage = 1;
            // this.direction = 1;
        }
        this.pageSize = pageSize;
        this.getPlaylists();
    };
    UserPlaylistComponent.prototype.getSavedPlaylistsByPageSize = function (pageSize) {
        if (pageSize != this.savedPlaylistPageSize) {
            // this.isAssetPerPageChanged = true;
            this.savedPlaylistCurrentPage = 1;
            // this.direction = 1;
        }
        this.savedPlaylistPageSize = pageSize;
        this.getSavedPlaylists();
    };
    UserPlaylistComponent.prototype.getPaginationUserPlaylists = function (currentPage) {
        this.currentPage = currentPage;
        this.getPlaylists();
    };
    UserPlaylistComponent.prototype.getPaginationSavedPlaylists = function (currentPage) {
        this.savedPlaylistCurrentPage = currentPage;
        this.getSavedPlaylists();
    };
    UserPlaylistComponent.prototype.filterByKeyword = function (keyword) {
        this.currentPage = 1;
        this.savedPlaylistCurrentPage = 1;
        if (this.savedPlaylistActive) {
            this.savedPlaylistsKeyword = keyword;
            this.getSavedPlaylists();
        }
        else {
            this.keyword = keyword;
            this.getPlaylists();
        }
    };
    UserPlaylistComponent.prototype.tab = function () {
        if (this.savedPlaylistActive) {
            this.savedPlaylistsKeyword = '';
            this.getSavedPlaylists();
        }
        else {
            this.keyword = '';
            this.getPlaylists();
        }
    };
    UserPlaylistComponent.ctorParameters = function () { return [
        { type: src_app_services_playlists_service__WEBPACK_IMPORTED_MODULE_2__["PlaylistsService"] },
        { type: src_app_services_paginationservice_service__WEBPACK_IMPORTED_MODULE_3__["PaginationserviceService"] }
    ]; };
    UserPlaylistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-playlist',
            template: __webpack_require__(/*! raw-loader!./user-playlist.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/user-playlist/user-playlist.component.html"),
            styles: [__webpack_require__(/*! ./user-playlist.component.css */ "./src/app/components/user-playlist/user-playlist.component.css")]
        })
    ], UserPlaylistComponent);
    return UserPlaylistComponent;
}());



/***/ }),

/***/ "./src/app/components/whats-new/whats-new.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/whats-new/whats-new.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2hhdHMtbmV3L3doYXRzLW5ldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/whats-new/whats-new.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/whats-new/whats-new.component.ts ***!
  \*************************************************************/
/*! exports provided: WhatsNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhatsNewComponent", function() { return WhatsNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_cmbu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cmbu.service */ "./src/app/services/cmbu.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_paginationservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/paginationservice.service */ "./src/app/services/paginationservice.service.ts");





var WhatsNewComponent = /** @class */ (function () {
    function WhatsNewComponent(cmbuService, router, paginationservice) {
        this.cmbuService = cmbuService;
        this.router = router;
        this.paginationservice = paginationservice;
        this.newAssets = [];
        this.keyword = '';
        this.paginationResultOutPut = '';
        this.totalAssetCount = 0;
        this.isAssetPerPageChanged = false;
        this.isCategorySlugChanged = false;
        this.direction = 1;
        this.totalNumberOfAssetsPerPage = 10;
        this.currentPage = 1;
        this.totalNoOfPages = 0;
        this.totalAssetDisplayed = 0;
        this.remainingAssetsToBeDisplayed = 0;
        this.reducePaginationCount = 0;
    }
    WhatsNewComponent.prototype.ngOnInit = function () {
        this.getLatestAssets();
    };
    WhatsNewComponent.prototype.getLatestAssets = function () {
        var _this = this;
        this.cmbuService.getLatestAssets(this.keyword, this.currentPage, this.totalNumberOfAssetsPerPage).subscribe(function (data) {
            _this.newAssets = data.assets;
            _this.currentPage = 1;
            _this.totalAssetCount = data.totalCount;
            _this.getNoOfPages(_this.totalNumberOfAssetsPerPage);
            _this.paginationservice.displayPaginationResult(data.pagination);
        });
    };
    WhatsNewComponent.prototype.getNoOfPages = function (totalNumberOfAssetsPerPage) {
        this.totalNumberOfAssetsPerPage = totalNumberOfAssetsPerPage;
        this.totalNoOfPages = Math.ceil(this.totalAssetCount / this.totalNumberOfAssetsPerPage);
    };
    WhatsNewComponent.prototype.filterByKeyword = function (keyword) {
        this.keyword = keyword;
        this.getLatestAssets();
    };
    WhatsNewComponent.prototype.displayPaginationResult = function () {
        if (this.isAssetPerPageChanged || this.isCategorySlugChanged) {
            this.isAssetPerPageChanged = false;
            this.isCategorySlugChanged = false;
        }
    };
    WhatsNewComponent.prototype.getAssetsByPageSize = function (pageSize) {
        if (pageSize != this.totalNumberOfAssetsPerPage) {
            this.isAssetPerPageChanged = true;
            this.currentPage = 1;
            this.direction = 1;
        }
        this.totalNumberOfAssetsPerPage = pageSize;
        this.getLatestAssets();
    };
    WhatsNewComponent.prototype.getPaginationAssets = function (currentPage) {
        var tempTotalNumberOfAssetsPerPage = 0;
        this.totalAssetDisplayed = (currentPage - 1) * this.totalNumberOfAssetsPerPage;
        this.remainingAssetsToBeDisplayed = this.totalAssetCount - this.totalAssetDisplayed;
        if (this.remainingAssetsToBeDisplayed < this.totalNumberOfAssetsPerPage) {
            tempTotalNumberOfAssetsPerPage = this.remainingAssetsToBeDisplayed;
            this.reducePaginationCount = this.remainingAssetsToBeDisplayed;
        }
        else {
            tempTotalNumberOfAssetsPerPage = this.totalNumberOfAssetsPerPage;
        }
        if (this.currentPage > currentPage) {
            this.direction = 0;
        }
        else {
            this.direction = 1;
        }
        this.currentPage = currentPage;
        this.getLatestAssets();
    };
    WhatsNewComponent.ctorParameters = function () { return [
        { type: src_app_services_cmbu_service__WEBPACK_IMPORTED_MODULE_2__["CmbuService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_services_paginationservice_service__WEBPACK_IMPORTED_MODULE_4__["PaginationserviceService"] }
    ]; };
    WhatsNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-whats-new',
            template: __webpack_require__(/*! raw-loader!./whats-new.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/whats-new/whats-new.component.html"),
            styles: [__webpack_require__(/*! ./whats-new.component.css */ "./src/app/components/whats-new/whats-new.component.css")]
        })
    ], WhatsNewComponent);
    return WhatsNewComponent;
}());



/***/ }),

/***/ "./src/app/directives/match-height.directive.ts":
/*!******************************************************!*\
  !*** ./src/app/directives/match-height.directive.ts ***!
  \******************************************************/
/*! exports provided: MatchHeightDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchHeightDirective", function() { return MatchHeightDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MatchHeightDirective = /** @class */ (function () {
    function MatchHeightDirective(el) {
        this.el = el;
    }
    MatchHeightDirective.prototype.ngAfterViewChecked = function () {
        this.matchHeight(this.el.nativeElement, this.myMatchHeight);
    };
    MatchHeightDirective.prototype.onResize = function () {
        // call our matchHeight function here
        this.matchHeight(this.el.nativeElement, this.myMatchHeight);
    };
    MatchHeightDirective.prototype.matchHeight = function (parent, className) {
        // match height logic here
        if (!parent)
            return;
        // step 1: find all the child elements with the selected class name
        var children = parent.getElementsByClassName(className);
        if (!children)
            return;
        // step 1b: reset all children height
        Array.from(children).forEach(function (x) {
            x.style.height = 'initial';
        });
        // step 2a: get all the child elements heights
        var itemHeights = Array.from(children)
            .map(function (x) { return x.getBoundingClientRect().height; });
        // step 2b: find out the tallest
        var maxHeight = itemHeights.reduce(function (prev, curr) {
            return curr > prev ? curr : prev;
        }, 0);
        // step 3: update all the child elements to the tallest height
        Array.from(children)
            .forEach(function (x) { return x.style.height = maxHeight + "px"; });
    };
    MatchHeightDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MatchHeightDirective.prototype, "myMatchHeight", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize')
    ], MatchHeightDirective.prototype, "onResize", null);
    MatchHeightDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[myMatchHeight]'
        })
    ], MatchHeightDirective);
    return MatchHeightDirective;
}());



/***/ }),

/***/ "./src/app/directives/numeric-only.directive.ts":
/*!******************************************************!*\
  !*** ./src/app/directives/numeric-only.directive.ts ***!
  \******************************************************/
/*! exports provided: NumericOnlyDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumericOnlyDirective", function() { return NumericOnlyDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NumericOnlyDirective = /** @class */ (function () {
    function NumericOnlyDirective(el) {
        this.el = el;
    }
    NumericOnlyDirective.prototype.onInput = function () {
        this.inputValue = this.el.nativeElement.value;
        this.el.nativeElement.value = this.inputValue.replace(/[^0-9]/g, '');
    };
    NumericOnlyDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('input')
    ], NumericOnlyDirective.prototype, "onInput", null);
    NumericOnlyDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appNumericOnly]'
        })
    ], NumericOnlyDirective);
    return NumericOnlyDirective;
}());



/***/ }),

/***/ "./src/app/directives/space-cutter.directive.ts":
/*!******************************************************!*\
  !*** ./src/app/directives/space-cutter.directive.ts ***!
  \******************************************************/
/*! exports provided: SpaceCutterDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpaceCutterDirective", function() { return SpaceCutterDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SpaceCutterDirective = /** @class */ (function () {
    function SpaceCutterDirective(el) {
        this.el = el;
    }
    SpaceCutterDirective.prototype.onInput = function () {
        this.inputValue = this.el.nativeElement.value;
        this.el.nativeElement.value = this.inputValue.replace(/\s\s+/g, ' ');
    };
    SpaceCutterDirective.prototype.onblur = function () {
        this.inputValue = this.el.nativeElement.value;
        this.el.nativeElement.value = this.inputValue.replace(/(^\s*)|(\s*$)/gi, "") // removes leading and trailing spaces
            .replace(/[ ]{2,}/gi, " ") // replaces multiple spaces with one space 
            .replace(/\n +/, "\n"); // Removes spaces after newlines
    };
    SpaceCutterDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('input')
    ], SpaceCutterDirective.prototype, "onInput", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('blur')
    ], SpaceCutterDirective.prototype, "onblur", null);
    SpaceCutterDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appSpaceCutter]'
        })
    ], SpaceCutterDirective);
    return SpaceCutterDirective;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, cookieService, authenticationService) {
        this.router = router;
        this.cookieService = cookieService;
        this.authenticationService = authenticationService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var isLoggedIn = this.authenticationService.isLoggedIn();
        if (isLoggedIn) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(cookieService, http, router) {
        this.cookieService = cookieService;
        this.http = http;
        this.router = router;
    }
    AuthenticationService.prototype.getAuthHeader = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        if (this.isLoggedIn()) {
            headers = headers.append("Authorization", "Bearer " + this.getUserAccessToken());
        }
        headers = headers.append("Content-Type", "application/json");
        var options = { headers: headers };
        return options;
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        var matomoUser = this.cookieService.get('matomoUser');
        var accessToken = this.cookieService.get('accessToken');
        var email = this.cookieService.get('email');
        if (!matomoUser && accessToken) {
            this.cookieService.set('matomoUser', "true");
            _paq.push(['setUserId', email]);
        }
        if (!accessToken) {
            return false;
        }
        return true;
    };
    AuthenticationService.prototype.loginRequired = function () {
        if (this.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['/login'], { queryParams: { returnUrl: this.router.url } });
        return false;
    };
    AuthenticationService.prototype.getUserName = function () {
        var result = '';
        if (this.isLoggedIn()) {
            result = this.cookieService.get('name');
        }
        result = result.replace(/"/g, '');
        return result;
    };
    AuthenticationService.prototype.getUserAccessToken = function () {
        var result = '';
        if (this.isLoggedIn()) {
            result = this.cookieService.get('accessToken');
        }
        return result;
    };
    AuthenticationService.prototype.logout = function () {
        _paq.push(['resetUserId']);
        setTimeout(function () {
            window.location.href = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].serverAppBaseUrl + "/auth/logout";
        }, 100);
        return false;
    };
    AuthenticationService.ctorParameters = function () { return [
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/cmbu.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/cmbu.service.ts ***!
  \******************************************/
/*! exports provided: CmbuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CmbuService", function() { return CmbuService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentication.service */ "./src/app/services/authentication.service.ts");





var CmbuService = /** @class */ (function () {
    function CmbuService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.librarySidebarFavoriteCount = 0;
        this.librarySidebarPlaylistCount = 0;
        this.isAnyNewNotification = false;
        this.showAssetImagePopup = false;
        this.assetImageSrc = '';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({})
        };
    }
    CmbuService.prototype.getAssetsByProductSlug = function (productSlug, categorySlug, assetKeyword, currentPage, totalNumberOfAssetsPerPage) {
        this.checkUserLoginStatus();
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + 'assets/?productSlug=' + productSlug + '&categorySlug=' + categorySlug + '&assetKeyword=' + assetKeyword + '&currentPage=' + currentPage + '&pageSize=' + totalNumberOfAssetsPerPage + '&additionalFields=categories,productDetails', this.authenticationService.getAuthHeader());
    };
    CmbuService.prototype.getAllProducts = function () {
        this.checkUserLoginStatus();
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + 'products', this.authenticationService.getAuthHeader());
    };
    CmbuService.prototype.getAssetCountByProductSlug = function (productSlug) {
        this.checkUserLoginStatus();
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + 'assets-count?productSlug=' + productSlug, this.authenticationService.getAuthHeader());
    };
    CmbuService.prototype.getAssetsByCategorySlug = function (categorySlug, searchKeyword, currentPage, pageSize) {
        this.checkUserLoginStatus();
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + 'search?categorySlug=' + categorySlug + '&searchKeyword=' + searchKeyword + '&currentPage=' + currentPage + '&pageSize=' + pageSize, this.authenticationService.getAuthHeader());
    };
    CmbuService.prototype.getLatestAssets = function (keyword, currentPage, pageSize) {
        if (keyword === void 0) { keyword = ''; }
        this.checkUserLoginStatus();
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + 'assets/latest?keyword=' + keyword + '&currentPage=' + currentPage + '&pageSize=' + pageSize, this.authenticationService.getAuthHeader());
    };
    CmbuService.prototype.getTopRatedAssets = function (keyword, currentPage, pageSize) {
        if (keyword === void 0) { keyword = ''; }
        this.checkUserLoginStatus();
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + 'assets/top-rated?keyword=' + keyword + '&currentPage=' + currentPage + '&pageSize=' + pageSize, this.authenticationService.getAuthHeader());
    };
    CmbuService.prototype.getLatestUseCases = function () {
        this.checkUserLoginStatus();
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + 'usecases', this.authenticationService.getAuthHeader());
    };
    CmbuService.prototype.getRecentlyViewedAssets = function (keyword, currentPage, pageSize) {
        if (keyword === void 0) { keyword = ''; }
        this.checkUserLoginStatus();
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + 'assets/recently-viewed?keyword=' + keyword + '&currentPage=' + currentPage + '&pageSize=' + pageSize, this.authenticationService.getAuthHeader());
    };
    CmbuService.prototype.getFavoriteAssets = function (keyword, currentPage, pageSize) {
        if (keyword === void 0) { keyword = ''; }
        this.checkUserLoginStatus();
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + 'assets/favorites?keyword=' + keyword + '&currentPage=' + currentPage + '&pageSize=' + pageSize, this.authenticationService.getAuthHeader());
    };
    CmbuService.prototype.getLatestUseCasesCategories = function () {
        this.checkUserLoginStatus();
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + 'homeusecases', this.authenticationService.getAuthHeader());
    };
    CmbuService.prototype.likeAssets = function (assetID) {
        this.checkUserLoginStatus();
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + 'assets/' + assetID + '/likes', assetID, this.authenticationService.getAuthHeader());
    };
    CmbuService.prototype.addToPlayList = function (playListName, description) {
        this.checkUserLoginStatus();
        var postData = { 'playlistName': playListName, 'description': description };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + 'playlists?playlistName=' + playListName, postData, this.authenticationService.getAuthHeader());
    };
    CmbuService.prototype.renamePlayList = function (playListName, playListID, playlistDescription) {
        this.checkUserLoginStatus();
        var postData = { 'playlistId': playListID, 'playlistName': playListName, 'description': playlistDescription };
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + 'playlists/' + playListID + '?playlistName=' + playListName, postData, this.authenticationService.getAuthHeader());
    };
    CmbuService.prototype.addAssetsToPlayList = function (playListName, assetId) {
        var postData = { 'playlistSlug': playListName, 'assetId': assetId };
        this.checkUserLoginStatus();
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + 'playlists/' + playListName + '/assets/' + assetId, postData, this.authenticationService.getAuthHeader());
    };
    CmbuService.prototype.getPlayLists = function () {
        this.checkUserLoginStatus();
        if (this.availableAccessToken != '') {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + 'playlists?playListType=users&pageSize=100', this.authenticationService.getAuthHeader());
        }
        else {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + 'playlists?playListType=admin&pageSize=100', this.authenticationService.getAuthHeader());
        }
    };
    CmbuService.prototype.addToFavourite = function (assetID) {
        this.checkUserLoginStatus();
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + 'assets/' + assetID + '/favorites', assetID, this.authenticationService.getAuthHeader());
    };
    CmbuService.prototype.addAssetsToRecentlyViewed = function (assetID) {
        this.checkUserLoginStatus();
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + 'assets/' + assetID + '/recently-viewed', assetID, this.authenticationService.getAuthHeader());
    };
    CmbuService.prototype.getSingleAssetDetails = function (assetID) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + 'assets/' + assetID, this.authenticationService.getAuthHeader());
    };
    CmbuService.prototype.getAllAssetCategories = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + 'assets/categories', this.authenticationService.getAuthHeader());
    };
    CmbuService.prototype.checkUserLoginStatus = function () {
        var accessToken = this.authenticationService.getUserAccessToken();
        this.availableAccessToken = accessToken;
        this.setHeader(accessToken);
    };
    CmbuService.prototype.setHeader = function (accessToken) {
        this.httpOptions.headers.delete('authorization');
        this.httpOptions.headers.append('authorization', 'Bearer ' + accessToken);
        this.httpOptions.headers.append('Content-Type', 'application/json');
        this.options = { headers: this.httpOptions.headers };
    };
    CmbuService.prototype.getLibrarySidebarMenuCount = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + 'favorite-playlist-count', this.authenticationService.getAuthHeader());
    };
    CmbuService.prototype.disLikeAssets = function (assetID) {
        this.checkUserLoginStatus();
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + 'assets/' + assetID + '/dislikes', assetID, this.authenticationService.getAuthHeader());
    };
    CmbuService.prototype.getRelatedAssets = function (asset_id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + 'assets/related/' + asset_id);
    };
    CmbuService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
    ]; };
    CmbuService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], CmbuService);
    return CmbuService;
}());



/***/ }),

/***/ "./src/app/services/faq.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/faq.service.ts ***!
  \*****************************************/
/*! exports provided: FaqService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqService", function() { return FaqService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var FaqService = /** @class */ (function () {
    function FaqService(http) {
        this.http = http;
    }
    FaqService.prototype.getFaqDetails = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + 'faq');
    };
    FaqService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    FaqService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], FaqService);
    return FaqService;
}());



/***/ }),

/***/ "./src/app/services/feedback.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/feedback.service.ts ***!
  \**********************************************/
/*! exports provided: FeedbackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackService", function() { return FeedbackService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





var FeedbackService = /** @class */ (function () {
    function FeedbackService(authenticationService, http) {
        this.authenticationService = authenticationService;
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({})
        };
    }
    FeedbackService.prototype.submitFeedback = function (feedBackText, feedbackPoint) {
        this.checkUserLoginStatus();
        var postData = { 'type': feedbackPoint, 'message': feedBackText };
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBaseUrl + 'feedback', postData, this.options);
    };
    FeedbackService.prototype.submitFeedbackForm = function (inputData) {
        this.checkUserLoginStatus();
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBaseUrl + 'feedback/form-values', inputData, this.options);
    };
    FeedbackService.prototype.checkUserLoginStatus = function () {
        var accessToken = this.authenticationService.getUserAccessToken();
        this.setHeader(accessToken);
    };
    FeedbackService.prototype.setHeader = function (accessToken) {
        this.httpOptions.headers.delete('authorization');
        this.httpOptions.headers = this.httpOptions.headers.set('authorization', 'Bearer ' + accessToken);
        this.options = this.httpOptions;
    };
    FeedbackService.prototype.getFeedbackFormFields = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBaseUrl + 'feedback/form-fields');
    };
    FeedbackService.ctorParameters = function () { return [
        { type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    FeedbackService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], FeedbackService);
    return FeedbackService;
}());



/***/ }),

/***/ "./src/app/services/notification.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/notification.service.ts ***!
  \**************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





var NotificationService = /** @class */ (function () {
    function NotificationService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.isAnyNewNotification = false;
        this.isSubscribed = false;
    }
    NotificationService.prototype.getAllNotifications = function (currentPage, pageSize) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBaseUrl + 'notifications?currentPage=' + currentPage + '&pageSize=' + pageSize, this.authenticationService.getAuthHeader());
    };
    NotificationService.prototype.removeNotification = function (notificationID) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBaseUrl + 'notifications/' + notificationID, this.authenticationService.getAuthHeader());
    };
    NotificationService.prototype.viewNotification = function (notificationID) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBaseUrl + 'notifications/' + notificationID, notificationID, this.authenticationService.getAuthHeader());
    };
    NotificationService.prototype.checkNewNotifications = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBaseUrl + 'new-notifications', this.authenticationService.getAuthHeader());
    };
    NotificationService.prototype.subscribe = function () {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBaseUrl + 'email-notifications/subscribe', {}, this.authenticationService.getAuthHeader());
    };
    NotificationService.prototype.unSubscribe = function () {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBaseUrl + 'email-notifications/subscribe', this.authenticationService.getAuthHeader());
    };
    NotificationService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
    ]; };
    NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "./src/app/services/paginationservice.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/paginationservice.service.ts ***!
  \*******************************************************/
/*! exports provided: PaginationserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationserviceService", function() { return PaginationserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PaginationserviceService = /** @class */ (function () {
    function PaginationserviceService() {
        this.currentPage = 0;
        this.hasNext = false;
        this.hasPrevious = false;
        this.nextPageNo = 0;
        this.prevPageNo = 0;
        this.paginationOutPutText = '';
        this.totalCount = 0;
        this.totalPages = 0;
        this.displayPaginationButton = true;
    }
    PaginationserviceService.prototype.displayPaginationResult = function (paginationDetails) {
        this.currentPage = paginationDetails.currentPage;
        this.hasNext = paginationDetails.hasNext;
        this.hasPrevious = paginationDetails.hasPrev;
        this.nextPageNo = paginationDetails.nextNum;
        this.prevPageNo = paginationDetails.prevNum;
        this.totalCount = paginationDetails.totalCount;
        this.totalPages = paginationDetails.totalPages;
        this.paginationOutPutText = paginationDetails.text;
        if (!this.hasNext && !this.hasPrevious) {
            this.displayPaginationButton = false;
        }
        else {
            this.displayPaginationButton = true;
        }
    };
    PaginationserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], PaginationserviceService);
    return PaginationserviceService;
}());



/***/ }),

/***/ "./src/app/services/playlists.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/playlists.service.ts ***!
  \***********************************************/
/*! exports provided: PlaylistsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistsService", function() { return PlaylistsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentication.service */ "./src/app/services/authentication.service.ts");





var PlaylistsService = /** @class */ (function () {
    function PlaylistsService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
    }
    PlaylistsService.prototype.getPlaylists = function (keyword, playlistType, currentPage, pageSize) {
        if (keyword === void 0) { keyword = ''; }
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + 'playlists?playListType=' + playlistType + '&keyword=' + keyword + '&currentPage=' + currentPage + '&pageSize=' + pageSize, this.authenticationService.getAuthHeader());
    };
    PlaylistsService.prototype.getSavedPlaylists = function (keyword, currentPage, pageSize) {
        if (keyword === void 0) { keyword = ''; }
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + 'saved-playlists?keyword=' + keyword + '&currentPage=' + currentPage + '&pageSize=' + pageSize, this.authenticationService.getAuthHeader());
    };
    PlaylistsService.prototype.getAssetsFromPlaylists = function (playlistSlug, keyowrd, currentPage, pageSize) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + 'playlists/' + playlistSlug + '/assets?keyword=' + keyowrd + '&currentPage=' + currentPage + '&pageSize=' + pageSize, this.authenticationService.getAuthHeader());
    };
    PlaylistsService.prototype.removeAssetsFromPlaylists = function (playlistSlug, assetId) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + 'playlists/' + playlistSlug + '/assets/' + assetId, this.authenticationService.getAuthHeader());
    };
    PlaylistsService.prototype.savePlaylist = function (playlistId) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + 'saved-playlists/' + playlistId, {}, this.authenticationService.getAuthHeader());
    };
    PlaylistsService.prototype.removePlaylist = function (playlistId) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + 'saved-playlists/' + playlistId, this.authenticationService.getAuthHeader());
    };
    PlaylistsService.prototype.deletePlaylist = function (playlistId) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + 'playlists/' + playlistId, this.authenticationService.getAuthHeader());
    };
    PlaylistsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
    ]; };
    PlaylistsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], PlaylistsService);
    return PlaylistsService;
}());



/***/ }),

/***/ "./src/app/services/usecases.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/usecases.service.ts ***!
  \**********************************************/
/*! exports provided: UsecasesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsecasesService", function() { return UsecasesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentication.service */ "./src/app/services/authentication.service.ts");





var UsecasesService = /** @class */ (function () {
    function UsecasesService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
    }
    UsecasesService.prototype.getUsecases = function (keyword, currentPage, pageSize) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + 'usecases?keyword=' + keyword + '&currentPage=' + currentPage + '&pageSize=' + pageSize, this.authenticationService.getAuthHeader());
    };
    UsecasesService.prototype.getUsecasesAssets = function (usecaseSlug, keyword, currentPage, pageSize) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl + 'usecases/' + usecaseSlug + '/assets?keyword=' + keyword + '&currentPage=' + currentPage + '&pageSize=' + pageSize, this.authenticationService.getAuthHeader());
    };
    UsecasesService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
    ]; };
    UsecasesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], UsecasesService);
    return UsecasesService;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    serverAppBaseUrl: '',
    apiBaseUrl: '/api/'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/website/vmware-cmbu/public/front-end/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map