import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../_modal/task';
@Injectable({
  providedIn: 'root'
})
export class ToDoListService {
  baseUrl = "https://60d8582ca376360017f45fe2.mockapi.io/";
  todos: Task[] = [];
  unCompletedTasks!: number;
  numOfUncompleted = new EventEmitter<number>();
  constructor(private httpClient: HttpClient) {
    //condition for local storage
    let localStor = JSON.parse(localStorage.getItem('todoList') as string);
      if (localStor===null || localStor.length==0 ) {
      this.getAllList().subscribe(
      (resp) => {
        Object.values(resp).map(item => {
          this.addTodo(item);
        });
        console.log(this.todos);
      }, 
      (error) => { },
      ()=>{}
    )
    } else {
      let todoArr = JSON.parse(localStorage.getItem('todoList') as string);
      this.todos = todoArr;
      console.log(this.todos);   }
      this.unCompletedTasks = this.todos.filter(todo => todo.completed === false).length;

  }
 
  getAllList() {
    return this.httpClient.get(`${this.baseUrl}todos`);
  }
  addTodo(todo: Task) {
  this.todos.push(todo);
    localStorage.setItem("todoList", JSON.stringify(this.todos));
  }
  deleteTodo(todo: Task) {
    let arr = this.todos.filter(item => item.title !== todo.title);
    this.todos = arr;
    localStorage.setItem("todoList", JSON.stringify(this.todos));
  }
  updateTodo(todo:Task) {
    let arr = this.todos.filter(item => item.title !== todo.title);
    this.todos = [...arr, todo];
    localStorage.setItem("todoList", JSON.stringify(this.todos));
    this.unCompletedTasks = this.todos.filter(todo => todo.completed === false).length;
    this.numOfUncompleted.emit(this.unCompletedTasks);
  }
}
