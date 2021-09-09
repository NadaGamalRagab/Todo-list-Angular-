import { Component, Input, OnInit } from '@angular/core';
import { getEnumVals } from '../util';
import { CATEGORY_TYPE } from '../_modal/category';
import { Task } from '../_modal/task';
import { ToDoListService } from '../_services/to-do-list.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  unCompletedTasks!: number;
  categories = CATEGORY_TYPE;
  categoryArr: any[] = getEnumVals(this.categories);
  todos: Task[] = [];
  completed = false;
  title!: string;
  constructor(private toDoListService: ToDoListService) {
    this.getAllList();
    this.unCompletedTasks = this.toDoListService.unCompletedTasks;
    this.toDoListService.numOfUncompleted.subscribe(
      (resp) => {
        this.unCompletedTasks = resp;
      }
    )
  }
  ngOnInit(): void {

  }
  addTodo(form: any) {
    let creationDate = new Date()
    let todo = {
      title: form.title,
    	description: "",
	    creationDate: creationDate,
    	completed: false,
    	category: form.category    
    }
    this.toDoListService.addTodo(todo);
    this.title = "";
  }
  getAllList() {
    this.todos = this.toDoListService.todos;
  }
  getCatList(cat: any) {
    this.todos = this.toDoListService.todos.filter(todo => todo.category === cat);
  }
  getcompletedList() {
    this.completed = !this.completed;
    if (this.completed == false) {
      this.getAllList();
    } else {
      this.todos = this.toDoListService.todos.filter(todo => todo.completed === this.completed);
    }
   }

}
