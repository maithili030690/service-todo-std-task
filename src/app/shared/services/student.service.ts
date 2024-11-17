import { inject, Injectable } from '@angular/core';
import { Istd } from '../component/models/student';
import { SnackBarService } from './snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private _snackBarService =inject(SnackBarService)
stdArr:Array<Istd> =[
  {
    fname:"James",
    lname:"Doe",
    email:"jd@gmail.com",
    contact:1234567890,
    id:"123"
  },
  {
    fname:"June",
    lname:"Doe",
    email:"jd@gmail.com",
    contact:1234567891,
    id:"124"
  },
  {
    fname:"July",
    lname:"Doe",
    email:"jd@gmail.com",
    contact:1234567892,
    id:"125"
  }
]
  constructor() { }
  fetchAllStdData(){
    //Api call fetch all std data
    return this.stdArr
  }
  addNewStd(std:Istd){
    //Api call new std send to db
    this.stdArr.push(std)
    this._snackBarService.openSnackBar(`The new student ${std.fname} ${std.lname} is added successfully!!!`)
  }
removeStd(id:string){
  //api call to remove std obj
  let getIndex = this.stdArr.findIndex(std=>std.id === id)
  let removeStd = this.stdArr[getIndex]
  this.stdArr.splice(getIndex,1)
  this._snackBarService.openSnackBar(`student ${removeStd.fname} ${removeStd.lname} is removed successfully`)
}

}
