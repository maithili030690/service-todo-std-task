import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {
  private _snackBarService =inject(MatSnackBar)
  constructor(
  
  ) { }
  openSnackBar(msg:string){
    this._snackBarService.open(msg,'close',{
      horizontalPosition:'left',
      verticalPosition:'top',
      duration:500
    })
  }
}
