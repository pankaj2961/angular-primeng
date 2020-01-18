import { MatAutocompleteModule, MatButtonModule, MatCheckboxModule, MatDatepickerModule, 
    MatFormFieldModule, MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule, 
    MatSlideToggleModule } from '@angular/material';

import { NgModule } from '@angular/core'
    
    @NgModule({
    imports: [
         MatAutocompleteModule,
         MatButtonModule,
         MatCheckboxModule,
         MatDatepickerModule,
         MatFormFieldModule,
         MatInputModule,
         MatRadioModule,
         MatSelectModule,
         MatSliderModule,
         MatSlideToggleModule
     ],
    exports:[
            MatAutocompleteModule,
            MatButtonModule,
            MatCheckboxModule,
            MatDatepickerModule,
            MatFormFieldModule,
            MatInputModule,
            MatRadioModule,
            MatSelectModule,
            MatSliderModule,
            MatSlideToggleModule
        ]
    })
     export class AngularMaterialExternalModules {}