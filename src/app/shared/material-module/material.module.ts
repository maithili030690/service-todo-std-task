import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import {MatSnackBarModule} from '@angular/material/snack-bar';

const moduleArr = [
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule
]

@NgModule({
    declarations:[],
    imports:[
        ...moduleArr
    ],
    exports:[
        ...moduleArr
    ]
})
export class MaterialModule{

}