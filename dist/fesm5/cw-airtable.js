import { Injectable, Component, Output, EventEmitter, Input, NgModule, defineInjectable, inject, InjectionToken } from '@angular/core';
import { get } from 'scriptjs';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {string} */
var NgRutterEventType = {
    SUCCESS: 'SUCCESS',
    LOAD: 'LOAD',
    EXIT: 'EXIT',
};
var NgRutterServiceOptions = /** @class */ (function () {
    function NgRutterServiceOptions() {
        this.PUBLIC_API_KEY = '';
    }
    NgRutterServiceOptions.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */ NgRutterServiceOptions.ngInjectableDef = defineInjectable({ factory: function NgRutterServiceOptions_Factory() { return new NgRutterServiceOptions(); }, token: NgRutterServiceOptions, providedIn: "root" });
    return NgRutterServiceOptions;
}());
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
    /** @nocollapse */ NgRutterService.ngInjectableDef = defineInjectable({ factory: function NgRutterService_Factory() { return new NgRutterService(inject(NgRutterServiceOptions)); }, token: NgRutterService, providedIn: "root" });
    return NgRutterService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgRutterComponent = /** @class */ (function () {
    function NgRutterComponent(rutterService) {
        this.rutterService = rutterService;
        this.text = 'Log in';
        this.backgroundColor = '#000';
        this.color = '#FFF';
        this.onSuccess = new EventEmitter();
        this.onLoad = new EventEmitter();
        this.onExit = new EventEmitter();
    }
    /**
     * @return {?}
     */
    NgRutterComponent.prototype.load = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.rutterService.loadRutter(function (publicToken) {
            _this.onSuccess.emit(publicToken);
        }, function () {
            _this.onLoad.emit();
        }, function () {
            _this.onExit.emit();
        });
    };
    /**
     * @return {?}
     */
    NgRutterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.rutterService.setup();
    };
    NgRutterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-rutter',
                    template: "<div class=\"btn\" (click)=\"load()\" \n[style.background-color]=\"backgroundColor\"\n[style.color]=\"color\"\n\n> {{ text }} </div>",
                    styles: [".btn{display:inline-block;font-weight:400;text-align:center;white-space:nowrap;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid transparent;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem;position:relative;color:#fff;background-color:#007bff;font-family:Lato,sans-serif!important;cursor:pointer}"]
                },] },
    ];
    /** @nocollapse */
    NgRutterComponent.ctorParameters = function () { return [
        { type: NgRutterService }
    ]; };
    NgRutterComponent.propDecorators = {
        text: [{ type: Input }],
        backgroundColor: [{ type: Input }],
        color: [{ type: Input }],
        onSuccess: [{ type: Output }],
        onLoad: [{ type: Output }],
        onExit: [{ type: Output }]
    };
    return NgRutterComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgRutterModule = /** @class */ (function () {
    function NgRutterModule() {
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    NgRutterModule.forRoot = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        return ({
            ngModule: NgRutterModule,
            providers: [
                {
                    provide: FOR_ROOT_OPTIONS_TOKEN,
                    useValue: options
                },
                {
                    provide: NgRutterServiceOptions,
                    useFactory: provideMyServiceOptions,
                    deps: [FOR_ROOT_OPTIONS_TOKEN]
                },
                NgRutterService
            ]
        });
    };
    NgRutterModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    providers: [
                        NgRutterService
                    ],
                    declarations: [
                        NgRutterComponent
                    ],
                    exports: [
                        NgRutterComponent,
                    ]
                },] },
    ];
    return NgRutterModule;
}());
/** @type {?} */
var FOR_ROOT_OPTIONS_TOKEN = new InjectionToken("forRoot() MyService configuration.");
/**
 * @param {?=} options
 * @return {?}
 */
function provideMyServiceOptions(options) {
    /** @type {?} */
    var serviceOptions = new NgRutterServiceOptions();
    if (options) {
        if (typeof (options.PUBLIC_API_KEY) === "string") {
            serviceOptions.PUBLIC_API_KEY = options.PUBLIC_API_KEY;
        }
    }
    return (serviceOptions);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { NgRutterModule, FOR_ROOT_OPTIONS_TOKEN, provideMyServiceOptions, NgRutterEventType, NgRutterServiceOptions, NgRutterService, NgRutterComponent as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3ctYWlydGFibGUuanMubWFwIiwic291cmNlcyI6WyJuZzovL2N3LWFpcnRhYmxlL3NyYy9hcHAvbW9kdWxlcy9uZy1ydXR0ZXIvbmctcnV0dGVyLnNlcnZpY2UudHMiLCJuZzovL2N3LWFpcnRhYmxlL3NyYy9hcHAvbW9kdWxlcy9uZy1ydXR0ZXIvbmctcnV0dGVyLmNvbXBvbmVudC50cyIsIm5nOi8vY3ctYWlydGFibGUvc3JjL2FwcC9tb2R1bGVzL25nLXJ1dHRlci9uZy1ydXR0ZXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydCB0aGUgY29yZSBhbmd1bGFyIHNlcnZpY2VzLlxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBnZXQgfSBmcm9tICdzY3JpcHRqcyc7XG5pbXBvcnQgeyBPYnNlcnZlciwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uLCBvZiB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBmaWx0ZXIsIHNoYXJlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnXG5cbmRlY2xhcmUgdmFyIFJ1dHRlcjogYW55O1xuXG5leHBvcnQgaW50ZXJmYWNlIE5nUnV0dGVyRXZlbnQge1xuXHRuYW1lOiBzdHJpbmdcblx0ZGF0YT86IGFueVxufVxuXG5leHBvcnQgZW51bSBOZ1J1dHRlckV2ZW50VHlwZSB7XG5cdFNVQ0NFU1MgPSAnU1VDQ0VTUycsXG5cdExPQUQgPSAnTE9BRCcsXG5cdEVYSVQgPSAnRVhJVCcsXG59XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogXCJyb290XCJcbn0pXG5leHBvcnQgY2xhc3MgTmdSdXR0ZXJTZXJ2aWNlT3B0aW9ucyB7XG5cdHB1YmxpYyBQVUJMSUNfQVBJX0tFWTogc3RyaW5nID0gJyc7XG59XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogXCJyb290XCJcbn0pXG5leHBvcnQgY2xhc3MgTmdSdXR0ZXJTZXJ2aWNlIHtcbiBcblx0cHVibGljIG9wdGlvbnM6IE5nUnV0dGVyU2VydmljZU9wdGlvbnM7XG5cdHB1YmxpYyBvYnNlcnZhYmxlOiBPYnNlcnZhYmxlPE5nUnV0dGVyRXZlbnQ+O1xuXHRwdWJsaWMgb2JzZXJ2ZXI6IE9ic2VydmVyPGFueT5cblx0dXJsID0gJ2h0dHBzOi8vdW5wa2cuY29tL0BydXR0ZXIvcnV0dGVyLWxpbmtAbGF0ZXN0JztcblxuXHRvcGVuKCkge1xuXHRcdHRoaXMubG9hZFJ1dHRlcigoKSA9PiB7fSwgKCkgPT4ge30sICgpID0+IHt9KVxuXHR9XG5cblx0bG9hZFJ1dHRlcihvblN1Y2Nlc3MsIG9uTG9hZCwgb25FeGl0KSB7XG5cblx0XHR2YXIgcnV0dGVySW5zdGFuY2UgPSBSdXR0ZXIuY3JlYXRlKHtcblx0XHRcdHB1YmxpY0tleTogdGhpcy5vcHRpb25zLlBVQkxJQ19BUElfS0VZLFxuXHRcdFx0b25TdWNjZXNzOiAocHVibGljVG9rZW4pID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coYGlubmVyIHN1Y2Nlc3MgJHt0aGlzLm9ic2VydmVyfWApXG5cblx0XHRcdFx0dGhpcy5vYnNlcnZlci5uZXh0KHtcblxuXHRcdFx0XHRcdG5hbWU6IE5nUnV0dGVyRXZlbnRUeXBlLlNVQ0NFU1MsXG5cdFx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdFx0dG9rZW46IHB1YmxpY1Rva2VuXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0XHRvblN1Y2Nlc3MocHVibGljVG9rZW4pXG5cdFx0XHR9LFxuXHRcdFx0b25Mb2FkOiAoKSA9PiB7XG5cdFx0XHRcdHRoaXMub2JzZXJ2ZXIubmV4dCh7XG5cdFx0XHRcdFx0bmFtZTogTmdSdXR0ZXJFdmVudFR5cGUuTE9BRFxuXHRcdFx0XHR9KVxuXHRcdFx0XHRvbkxvYWQoKVxuXHRcdFx0fSxcblx0XHRcdG9uRXhpdDogKCkgPT4ge1xuXHRcdFx0XHR0aGlzLm9ic2VydmVyLm5leHQoe1xuXHRcdFx0XHRcdG5hbWU6IE5nUnV0dGVyRXZlbnRUeXBlLkVYSVRcblx0XHRcdFx0fSlcblx0XHRcdFx0b25FeGl0KClcblx0XHRcdH0sXG5cdFx0fSlcblx0XHRcdFxuXHRcdHJ1dHRlckluc3RhbmNlLm9wZW4oKTtcblx0fVxuXG5cdHNldHVwKCkge1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRnZXQodGhpcy51cmwsICgpID0+IHtcblx0XHRcdFx0cmVzb2x2ZSgpXG5cdFx0XHR9KTtcblx0XHR9KVxuXHR9XG5cblx0Y29uc3RydWN0b3IoIG9wdGlvbnM6IE5nUnV0dGVyU2VydmljZU9wdGlvbnMgKSB7XG5cdFx0dGhpcy5vcHRpb25zID0gb3B0aW9ucztcblx0XHR0aGlzLm9ic2VydmFibGUgPSBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXI6IE9ic2VydmVyPGFueT4pID0+IHtcblx0XHRcdHRoaXMub2JzZXJ2ZXIgPSBvYnNlcnZlclxuXHRcdH0pXG5cblx0XHR0aGlzLnNldHVwKClcblx0fVxuXG5cdGRlc3Ryb3koc3Vic2NyaWJlcjogU3Vic2NyaXB0aW9uKSB7XG5cdFx0c3Vic2NyaWJlci51bnN1YnNjcmliZSgpO1xuXHR9XG59IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdSdXR0ZXJTZXJ2aWNlIH0gZnJvbSAnLi9uZy1ydXR0ZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nLXJ1dHRlcicsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImJ0blwiIChjbGljayk9XCJsb2FkKClcIiBcbltzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cImJhY2tncm91bmRDb2xvclwiXG5bc3R5bGUuY29sb3JdPVwiY29sb3JcIlxuXG4+IHt7IHRleHQgfX0gPC9kaXY+YCxcbiAgc3R5bGVzOiBbYC5idG57ZGlzcGxheTppbmxpbmUtYmxvY2s7Zm9udC13ZWlnaHQ6NDAwO3RleHQtYWxpZ246Y2VudGVyO3doaXRlLXNwYWNlOm5vd3JhcDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO2JvcmRlcjoxcHggc29saWQgdHJhbnNwYXJlbnQ7cGFkZGluZzouMzc1cmVtIC43NXJlbTtmb250LXNpemU6MXJlbTtsaW5lLWhlaWdodDoxLjU7Ym9yZGVyLXJhZGl1czouMjVyZW07cG9zaXRpb246cmVsYXRpdmU7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiMwMDdiZmY7Zm9udC1mYW1pbHk6TGF0byxzYW5zLXNlcmlmIWltcG9ydGFudDtjdXJzb3I6cG9pbnRlcn1gXVxufSlcblxuZXhwb3J0IGNsYXNzIE5nUnV0dGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgdGV4dCA9ICdMb2cgaW4nO1xuICBASW5wdXQoKSBiYWNrZ3JvdW5kQ29sb3IgPSAnIzAwMCc7XG4gIEBJbnB1dCgpIGNvbG9yID0gJyNGRkYnO1xuXG4gIEBPdXRwdXQoKSBvblN1Y2Nlc3MgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIG9uTG9hZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uRXhpdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBsb2FkKCkge1xuICAgIHRoaXMucnV0dGVyU2VydmljZS5sb2FkUnV0dGVyKChwdWJsaWNUb2tlbikgPT4ge1xuICAgICAgdGhpcy5vblN1Y2Nlc3MuZW1pdChwdWJsaWNUb2tlbilcbiAgICB9LCAoKSA9PiB7XG4gICAgICB0aGlzLm9uTG9hZC5lbWl0KClcbiAgICB9LCAoKSA9PiB7XG4gICAgICB0aGlzLm9uRXhpdC5lbWl0KClcbiAgICB9KTtcbiAgfVxuICBcbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5ydXR0ZXJTZXJ2aWNlLnNldHVwKClcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcnV0dGVyU2VydmljZTogTmdSdXR0ZXJTZXJ2aWNlKSB7fVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ1J1dHRlckNvbXBvbmVudCB9IGZyb20gJy4vbmctcnV0dGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOZ1J1dHRlclNlcnZpY2VPcHRpb25zLCBOZ1J1dHRlclNlcnZpY2UgfSBmcm9tICcuL25nLXJ1dHRlci5zZXJ2aWNlJztcblxuXG5ATmdNb2R1bGUoe1xuICBcdGltcG9ydHM6IFtcbiAgICBcdENvbW1vbk1vZHVsZVxuICBcdF0sXG4gIFx0cHJvdmlkZXJzOiBbXG5cdFx0TmdSdXR0ZXJTZXJ2aWNlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdE5nUnV0dGVyQ29tcG9uZW50XG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHROZ1J1dHRlckNvbXBvbmVudCxcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBOZ1J1dHRlck1vZHVsZSB7XG5cbiAgc3RhdGljIGZvclJvb3QoIG9wdGlvbnM/OiBNb2R1bGVPcHRpb25zICkgOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiBcblx0XHRyZXR1cm4oe1xuXHRcdFx0bmdNb2R1bGU6IE5nUnV0dGVyTW9kdWxlLFxuXHRcdFx0cHJvdmlkZXJzOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRwcm92aWRlOiBGT1JfUk9PVF9PUFRJT05TX1RPS0VOLFxuXHRcdFx0XHRcdHVzZVZhbHVlOiBvcHRpb25zXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRwcm92aWRlOiBOZ1J1dHRlclNlcnZpY2VPcHRpb25zLFxuXHRcdFx0XHRcdHVzZUZhY3Rvcnk6IHByb3ZpZGVNeVNlcnZpY2VPcHRpb25zLFxuXHRcdFx0XHRcdGRlcHM6IFsgRk9SX1JPT1RfT1BUSU9OU19UT0tFTiBdXG5cdFx0XHRcdH0sXG5cdFx0XHRcdE5nUnV0dGVyU2VydmljZVxuXHRcdFx0XVxuXHRcdH0pO1xuXHR9XG4gfVxuXG5cbi8vIEkgZGVmaW5lIHRoZSBzaGFwZSBvZiB0aGUgb3B0aW9uYWwgY29uZmlndXJhdGlvbiBkYXRhIHBhc3NlZCB0byB0aGUgZm9yUm9vdCgpIG1ldGhvZC5cbmV4cG9ydCBpbnRlcmZhY2UgTW9kdWxlT3B0aW9ucyB7XG4gIFBVQkxJQ19BUElfS0VZPzogc3RyaW5nO1xufVxuXG5leHBvcnQgdmFyIEZPUl9ST09UX09QVElPTlNfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48TW9kdWxlT3B0aW9ucz4oIFwiZm9yUm9vdCgpIE15U2VydmljZSBjb25maWd1cmF0aW9uLlwiICk7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlTXlTZXJ2aWNlT3B0aW9ucyggb3B0aW9ucz86IE1vZHVsZU9wdGlvbnMgKSA6IE5nUnV0dGVyU2VydmljZU9wdGlvbnMge1xuIFxuXHR2YXIgc2VydmljZU9wdGlvbnMgPSBuZXcgTmdSdXR0ZXJTZXJ2aWNlT3B0aW9ucygpO1xuXHRpZiAoIG9wdGlvbnMgKSB7XG4gXG5cdFx0aWYgKCB0eXBlb2YoIG9wdGlvbnMuUFVCTElDX0FQSV9LRVkgKSA9PT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdHNlcnZpY2VPcHRpb25zLlBVQkxJQ19BUElfS0VZID0gb3B0aW9ucy5QVUJMSUNfQVBJX0tFWTtcblx0XHR9XG5cdH1cbiBcblx0cmV0dXJuKCBzZXJ2aWNlT3B0aW9ucyApO1xufSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7SUFhQyxTQUFVLFNBQVM7SUFDbkIsTUFBTyxNQUFNO0lBQ2IsTUFBTyxNQUFNOzs7OzhCQU9tQixFQUFF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