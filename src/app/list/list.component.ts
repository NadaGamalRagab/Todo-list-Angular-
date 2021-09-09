import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Task } from '../_modal/task';
import { ToDoListService } from '../_services/to-do-list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnChanges {
  @Input("list") list!:Array<Task>;
  completedList: Task[] = [];
  checked: boolean = true;
   todos: Task[]=[];

  constructor(private ToDoListService: ToDoListService) {
   }
  ngOnInit(): void {
    this.todos = this.list;
  }

  ngOnChanges() {
    this.todos = this.list;
  }

  deleteTodo(todo:Task) {
    this.ToDoListService.deleteTodo(todo);
    this.todos = this.ToDoListService.todos;
  }
  updateTodo(todo: Task) {
    todo.completed = !todo.completed;
    console.log(todo);
    this.ToDoListService.updateTodo(todo);
  }

}
