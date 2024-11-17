import { Component, OnInit, ViewChild } from '@angular/core';
import { Itodos } from '../../models/todo';
import { TodoService } from 'src/app/shared/services/todo.service';
import { NgForm } from '@angular/forms';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  todoArr!:Array<Itodos>
  @ViewChild('todoForm')todoForm!:NgForm
  constructor(
    private _todoService :TodoService,
    private _uuIdService:UuidService
  ) { }

  ngOnInit(): void {
    this.todoArr= this._todoService.fetchAllTodos()
    console.log()
  }
  onTodoAdd(){
    if(this.todoForm.valid){
      let todoObj :Itodos={...this.todoForm.value,todoid:this._uuIdService.generateUuid()}
      console.log(todoObj)
      this._todoService.addNewTodo(todoObj)
      this.todoForm.reset()

    }
  }
}
