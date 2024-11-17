import { Component, OnInit, ViewChild } from '@angular/core';
import { Istd } from '../../models/student';
import { StudentService } from 'src/app/shared/services/student.service';
import { NgForm } from '@angular/forms';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {
  stdArr:Array<Istd> =[]
  fnameMaxLFlag:boolean =false;
  lnameMaxLFlag:boolean =false;
  @ViewChild('stdForm')stdForm!:NgForm
  constructor(
    private _stdService :StudentService,
    private _uuidService :UuidService
  ) { }

  ngOnInit(): void {
    this.stdArr =this._stdService.fetchAllStdData()
    console.log(this.stdArr)
  }

  onStdAdd(){
    if(this.stdForm.valid){
      let stdObj :Istd ={...this.stdForm.value,
        stdId:this._uuidService.generateUuid()}
        console.log(stdObj)
        this._stdService.addNewStd(stdObj)
        this.stdForm.reset()
    }
  }
  onfname(eve:Event){
    let fnamelength =(eve.target as HTMLInputElement).value.length
    if(fnamelength >=12){
      this.fnameMaxLFlag =true
    }else{
      this.fnameMaxLFlag =false
    }

  }
  onlname(eve:Event){
    let lnamelength =(eve.target as HTMLInputElement).value.length
    if(lnamelength >=12){
      this.lnameMaxLFlag =true
    }else{
      this.lnameMaxLFlag =false
    }

  }
}
