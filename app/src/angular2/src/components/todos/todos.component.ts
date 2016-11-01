import { Component } from '@angular/core';
import {TodoService} from '../../services/todos.service';
import {Todo} from '../../../Todo';

@Component({
  moduleId: module.id,
  selector: 'todos',
  templateUrl: 'todos.component.html'
})

export class TodosComponent { 
    todos: Todo[];
    task: string;
    
    constructor(private todosService:TodoService){
        this.todosService.getTodos()
            .subscribe(todos => {
                this.todos = todos;
            });
    }
    
    addTodo(){
        var newTodo = {
            task: this.task,
            isCompleted: false
        }
        
        this.todosService.addTodo(newTodo)
            .subscribe(todos => {
                this.todos.push(todos);
                this.task = '';
            });
    }
    
    deleteTodo(id:string){
        var todos = this.todos;
        
        this.todosService.deleteTodo(id).subscribe(data => {
            if(data.n == 1){
                for(var i = 0;i < todos.length;i++){
                    if(todos[i]._id == id){
                        todos.splice(i, 1);
                    }
                }
            }
        });
    }
    
    updateStatus(todos:Todo){
        var _todos = {
            _id:todos._id,
            task: todos.task,
            isCompleted: !todos.isCompleted
        };
        
        this.todosService.updateStatus(_todos).subscribe(data => {
            todos.isCompleted = !todos.isCompleted;
        });
    }
}
