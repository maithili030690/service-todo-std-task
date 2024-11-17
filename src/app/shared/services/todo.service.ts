import { Injectable } from '@angular/core';
import { Itodos } from '../component/models/todo';
import { SnackBarService } from './snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
todos:Array<Itodos> =[
  {
    todoItem:"Angular 18",
    todoId :"1234"
  },
  {
    todoItem:"Node 18",
    todoId :"1235"
  }
]
  constructor(
    private _snackBarService :SnackBarService
  ) { }
  fetchAllTodos():Array<Itodos>{
    //Api call to fetch all todos
    return this.todos
  }
  addNewTodo(todo:Itodos){
    //Api call to add new todo
    this.todos.push(todo)
    //new todo added successfully
    this._snackBarService.openSnackBar(`New todo Item ${todo.todoItem} is added successfully!!!` )
  }
  removeTodo(id:string){
    //Api call to remove todo from db
    let getIndex = this.todos.findIndex(todo=>todo.todoId ===id)
    console.log(getIndex)
    let removeObj =this.todos[getIndex]
    this.todos.splice(getIndex,1)
    this._snackBarService.openSnackBar(`todo Item ${removeObj.todoItem} removed successfully`)
  }
  
}
