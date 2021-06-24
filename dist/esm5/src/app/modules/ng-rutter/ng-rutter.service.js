/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { get } from 'scriptjs';
import { Observable } from "rxjs";
import * as i0 from "@angular/core";
/**
 * @record
 */
export function NgRutterEvent() { }
/** @type {?} */
NgRutterEvent.prototype.name;
/** @type {?|undefined} */
NgRutterEvent.prototype.data;
/** @enum {string} */
var NgRutterEventType = {
    SUCCESS: 'SUCCESS',
    LOAD: 'LOAD',
    EXIT: 'EXIT',
};
export { NgRutterEventType };
var NgRutterServiceOptions = /** @class */ (function () {
    function NgRutterServiceOptions() {
        this.PUBLIC_API_KEY = '';
    }
    NgRutterServiceOptions.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */ NgRutterServiceOptions.ngInjectableDef = i0.defineInjectable({ factory: function NgRutterServiceOptions_Factory() { return new NgRutterServiceOptions(); }, token: NgRutterServiceOptions, providedIn: "root" });
    return NgRutterServiceOptions;
}());
export { NgRutterServiceOptions };
if (false) {
    /** @type {?} */
    NgRutterServiceOptions.prototype.PUBLIC_API_KEY;
}
var NgRutterService = /** @class */ (function () {
    function NgRutterService(options) {
        var _this = this;
        this.url = 'https://unpkg.com/@rutter/rutter-link@latest';
        this.options = options;
        this.observable = Observable.create(function (observer) {
            _this.observer = observer;
        });
        this.setup();
    }
    /**
     * @return {?}
     */
    NgRutterService.prototype.open = /**
     * @return {?}
     */
    function () {
        this.loadRutter(function () { }, function () { }, function () { });
    };
    /**
     * @param {?} onSuccess
     * @param {?} onLoad
     * @param {?} onExit
     * @return {?}
     */
    NgRutterService.prototype.loadRutter = /**
     * @param {?} onSuccess
     * @param {?} onLoad
     * @param {?} onExit
     * @return {?}
     */
    function (onSuccess, onLoad, onExit) {
        var _this = this;
        /** @type {?} */
        var rutterInstance = Rutter.create({
            publicKey: this.options.PUBLIC_API_KEY,
            onSuccess: function (publicToken) {
                console.log("inner success " + _this.observer);
                _this.observer.next({
                    name: NgRutterEventType.SUCCESS,
                    data: {
                        token: publicToken
                    }
                });
                onSuccess(publicToken);
            },
            onLoad: function () {
                _this.observer.next({
                    name: NgRutterEventType.LOAD
                });
                onLoad();
            },
            onExit: function () {
                _this.observer.next({
                    name: NgRutterEventType.EXIT
                });
                onExit();
            },
        });
        rutterInstance.open();
    };
    /**
     * @return {?}
     */
    NgRutterService.prototype.setup = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            get(_this.url, function () {
                resolve();
            });
        });
    };
    /**
     * @param {?} subscriber
     * @return {?}
     */
    NgRutterService.prototype.destroy = /**
     * @param {?} subscriber
     * @return {?}
     */
    function (subscriber) {
        subscriber.unsubscribe();
    };
    NgRutterService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */
    NgRutterService.ctorParameters = function () { return [
        { type: NgRutterServiceOptions }
    ]; };
    /** @nocollapse */ NgRutterService.ngInjectableDef = i0.defineInjectable({ factory: function NgRutterService_Factory() { return new NgRutterService(i0.inject(NgRutterServiceOptions)); }, token: NgRutterService, providedIn: "root" });
    return NgRutterService;
}());
export { NgRutterService };
if (false) {
    /** @type {?} */
    NgRutterService.prototype.options;
    /** @type {?} */
    NgRutterService.prototype.observable;
    /** @type {?} */
    NgRutterService.prototype.observer;
    /** @type {?} */
    NgRutterService.prototype.url;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcnV0dGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jdy1haXJ0YWJsZS8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9uZy1ydXR0ZXIvbmctcnV0dGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUMvQixPQUFPLEVBQVksVUFBVSxFQUFvQixNQUFNLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7O0lBVzdELFNBQVUsU0FBUztJQUNuQixNQUFPLE1BQU07SUFDYixNQUFPLE1BQU07Ozs7OzhCQU9tQixFQUFFOzs7Z0JBSmxDLFVBQVUsU0FBQztvQkFDWCxVQUFVLEVBQUUsTUFBTTtpQkFDbEI7OztpQ0FyQkQ7O1NBc0JhLHNCQUFzQjs7Ozs7O0lBMkRsQyx5QkFBYSxPQUErQjtRQUE1QyxpQkFPQzttQkF0REssOENBQThDO1FBZ0RuRCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBQyxRQUF1QjtZQUMzRCxLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQTtTQUN4QixDQUFDLENBQUE7UUFFRixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUE7S0FDWjs7OztJQXBERCw4QkFBSTs7O0lBQUo7UUFDQyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQVEsRUFBRSxlQUFRLEVBQUUsZUFBUSxDQUFDLENBQUE7S0FDN0M7Ozs7Ozs7SUFFRCxvQ0FBVTs7Ozs7O0lBQVYsVUFBVyxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU07UUFBcEMsaUJBK0JDOztRQTdCQSxJQUFJLGNBQWMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ2xDLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWM7WUFDdEMsU0FBUyxFQUFFLFVBQUMsV0FBVztnQkFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBaUIsS0FBSSxDQUFDLFFBQVUsQ0FBQyxDQUFBO2dCQUU3QyxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztvQkFFbEIsSUFBSSxFQUFFLGlCQUFpQixDQUFDLE9BQU87b0JBQy9CLElBQUksRUFBRTt3QkFDTCxLQUFLLEVBQUUsV0FBVztxQkFDbEI7aUJBQ0QsQ0FBQyxDQUFBO2dCQUNGLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQTthQUN0QjtZQUNELE1BQU0sRUFBRTtnQkFDUCxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztvQkFDbEIsSUFBSSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQzVCLENBQUMsQ0FBQTtnQkFDRixNQUFNLEVBQUUsQ0FBQTthQUNSO1lBQ0QsTUFBTSxFQUFFO2dCQUNQLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO29CQUNsQixJQUFJLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDNUIsQ0FBQyxDQUFBO2dCQUNGLE1BQU0sRUFBRSxDQUFBO2FBQ1I7U0FDRCxDQUFDLENBQUE7UUFFRixjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDdEI7Ozs7SUFFRCwrQkFBSzs7O0lBQUw7UUFBQSxpQkFNQztRQUxBLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNsQyxHQUFHLENBQUMsS0FBSSxDQUFDLEdBQUcsRUFBRTtnQkFDYixPQUFPLEVBQUUsQ0FBQTthQUNULENBQUMsQ0FBQztTQUNILENBQUMsQ0FBQTtLQUNGOzs7OztJQVdELGlDQUFPOzs7O0lBQVAsVUFBUSxVQUF3QjtRQUMvQixVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDekI7O2dCQWxFRCxVQUFVLFNBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCOzs7O2dCQXFEc0Isc0JBQXNCOzs7MEJBakY3Qzs7U0E2QmEsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydCB0aGUgY29yZSBhbmd1bGFyIHNlcnZpY2VzLlxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBnZXQgfSBmcm9tICdzY3JpcHRqcyc7XG5pbXBvcnQgeyBPYnNlcnZlciwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uLCBvZiB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBmaWx0ZXIsIHNoYXJlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnXG5cbmRlY2xhcmUgdmFyIFJ1dHRlcjogYW55O1xuXG5leHBvcnQgaW50ZXJmYWNlIE5nUnV0dGVyRXZlbnQge1xuXHRuYW1lOiBzdHJpbmdcblx0ZGF0YT86IGFueVxufVxuXG5leHBvcnQgZW51bSBOZ1J1dHRlckV2ZW50VHlwZSB7XG5cdFNVQ0NFU1MgPSAnU1VDQ0VTUycsXG5cdExPQUQgPSAnTE9BRCcsXG5cdEVYSVQgPSAnRVhJVCcsXG59XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogXCJyb290XCJcbn0pXG5leHBvcnQgY2xhc3MgTmdSdXR0ZXJTZXJ2aWNlT3B0aW9ucyB7XG5cdHB1YmxpYyBQVUJMSUNfQVBJX0tFWTogc3RyaW5nID0gJyc7XG59XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogXCJyb290XCJcbn0pXG5leHBvcnQgY2xhc3MgTmdSdXR0ZXJTZXJ2aWNlIHtcbiBcblx0cHVibGljIG9wdGlvbnM6IE5nUnV0dGVyU2VydmljZU9wdGlvbnM7XG5cdHB1YmxpYyBvYnNlcnZhYmxlOiBPYnNlcnZhYmxlPE5nUnV0dGVyRXZlbnQ+O1xuXHRwdWJsaWMgb2JzZXJ2ZXI6IE9ic2VydmVyPGFueT5cblx0dXJsID0gJ2h0dHBzOi8vdW5wa2cuY29tL0BydXR0ZXIvcnV0dGVyLWxpbmtAbGF0ZXN0JztcblxuXHRvcGVuKCkge1xuXHRcdHRoaXMubG9hZFJ1dHRlcigoKSA9PiB7fSwgKCkgPT4ge30sICgpID0+IHt9KVxuXHR9XG5cblx0bG9hZFJ1dHRlcihvblN1Y2Nlc3MsIG9uTG9hZCwgb25FeGl0KSB7XG5cblx0XHR2YXIgcnV0dGVySW5zdGFuY2UgPSBSdXR0ZXIuY3JlYXRlKHtcblx0XHRcdHB1YmxpY0tleTogdGhpcy5vcHRpb25zLlBVQkxJQ19BUElfS0VZLFxuXHRcdFx0b25TdWNjZXNzOiAocHVibGljVG9rZW4pID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coYGlubmVyIHN1Y2Nlc3MgJHt0aGlzLm9ic2VydmVyfWApXG5cblx0XHRcdFx0dGhpcy5vYnNlcnZlci5uZXh0KHtcblxuXHRcdFx0XHRcdG5hbWU6IE5nUnV0dGVyRXZlbnRUeXBlLlNVQ0NFU1MsXG5cdFx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdFx0dG9rZW46IHB1YmxpY1Rva2VuXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0XHRvblN1Y2Nlc3MocHVibGljVG9rZW4pXG5cdFx0XHR9LFxuXHRcdFx0b25Mb2FkOiAoKSA9PiB7XG5cdFx0XHRcdHRoaXMub2JzZXJ2ZXIubmV4dCh7XG5cdFx0XHRcdFx0bmFtZTogTmdSdXR0ZXJFdmVudFR5cGUuTE9BRFxuXHRcdFx0XHR9KVxuXHRcdFx0XHRvbkxvYWQoKVxuXHRcdFx0fSxcblx0XHRcdG9uRXhpdDogKCkgPT4ge1xuXHRcdFx0XHR0aGlzLm9ic2VydmVyLm5leHQoe1xuXHRcdFx0XHRcdG5hbWU6IE5nUnV0dGVyRXZlbnRUeXBlLkVYSVRcblx0XHRcdFx0fSlcblx0XHRcdFx0b25FeGl0KClcblx0XHRcdH0sXG5cdFx0fSlcblx0XHRcdFxuXHRcdHJ1dHRlckluc3RhbmNlLm9wZW4oKTtcblx0fVxuXG5cdHNldHVwKCkge1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRnZXQodGhpcy51cmwsICgpID0+IHtcblx0XHRcdFx0cmVzb2x2ZSgpXG5cdFx0XHR9KTtcblx0XHR9KVxuXHR9XG5cblx0Y29uc3RydWN0b3IoIG9wdGlvbnM6IE5nUnV0dGVyU2VydmljZU9wdGlvbnMgKSB7XG5cdFx0dGhpcy5vcHRpb25zID0gb3B0aW9ucztcblx0XHR0aGlzLm9ic2VydmFibGUgPSBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXI6IE9ic2VydmVyPGFueT4pID0+IHtcblx0XHRcdHRoaXMub2JzZXJ2ZXIgPSBvYnNlcnZlclxuXHRcdH0pXG5cblx0XHR0aGlzLnNldHVwKClcblx0fVxuXG5cdGRlc3Ryb3koc3Vic2NyaWJlcjogU3Vic2NyaXB0aW9uKSB7XG5cdFx0c3Vic2NyaWJlci51bnN1YnNjcmliZSgpO1xuXHR9XG59Il19