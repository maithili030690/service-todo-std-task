import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/shared/services/student.service';
import { Istd } from '../../models/student';

@Component({
  selector: 'app-std-table',
  templateUrl: './std-table.component.html',
  styleUrls: ['./std-table.component.scss']
})
export class StdTableComponent implements OnInit {
stdArr:Array<Istd> =[]
  constructor(
    private _stdService :StudentService
  ) { }

  ngOnInit(): void {
    this.stdArr =this._stdService.fetchAllStdData()
    console.log(this.stdArr)
  }
  onstdRemove(id:string){
    let getConfirm:boolean =confirm(`Are you sure, you want to remove this student?`)
    if(getConfirm){
      this._stdService.removeStd(id)
    }
  }
}
