import { NgModule } from '@angular/core';

import { CapitalizePipe } from './capitaze.pipe';

@NgModule({
    declarations: [ CapitalizePipe ],
    exports: [ CapitalizePipe ]
})
export class SharedModule { }