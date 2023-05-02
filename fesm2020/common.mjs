import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class CommonService {
    constructor() { }
}
CommonService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: CommonService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
CommonService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: CommonService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: CommonService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class CommonComponent {
    constructor() { }
    ngOnInit() {
    }
}
CommonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: CommonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CommonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: CommonComponent, selector: "lib-common", ngImport: i0, template: `
    <p>
      common works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: CommonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-common', template: `
    <p>
      common works!
    </p>
  ` }]
        }], ctorParameters: function () { return []; } });

class ButtonComponent {
    constructor() { }
    ngOnInit() {
    }
}
ButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: ButtonComponent, selector: "lib-button", ngImport: i0, template: "<p>button works!</p>\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-button', template: "<p>button works!</p>\n" }]
        }], ctorParameters: function () { return []; } });

class CommonModule {
}
CommonModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: CommonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CommonModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: CommonModule, declarations: [CommonComponent,
        ButtonComponent], exports: [CommonComponent,
        ButtonComponent] });
CommonModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: CommonModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: CommonModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        CommonComponent,
                        ButtonComponent
                    ],
                    imports: [],
                    exports: [
                        CommonComponent,
                        ButtonComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of common
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonComponent, CommonComponent, CommonModule, CommonService };
//# sourceMappingURL=common.mjs.map
