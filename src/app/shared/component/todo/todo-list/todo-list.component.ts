import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/shared/services/todo.service';
import { Itodos } from '../../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
todoArr:Array<Itodos>=[]
  constructor(
    private _todoService :TodoService
  ) { }

  ngOnInit(): void {
   this.todoArr= this._todoService.fetchAllTodos()
    console.log()
  }
  onTodoRemove(todoId:string){
    console.log(todoId)
    this._todoService.removeTodo(todoId)
  }

}
