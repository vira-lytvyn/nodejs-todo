import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Todo} from '../../Todo';

@Injectable()
export class TodoService{
    constructor(private http:Http){
        console.log('Todo Service Initialized...');
    }
    
    getTodos(){
        return this.http.get('/api/todos')
            .map(res => res.json());
    }
    
    addTodo(newTodo:Todo){
        return this.http.post('/api/todo', newTodo)
            .map(res => res.json());
    }
    
    deleteTodo(id:string){
        return this.http.delete('/api/todo/'+id)
            .map(res => res.json());
    }
    
    updateStatus(todo:Todo){
        return this.http.put('/api/todo/'+todo._id, todo)
            .map(res => res.json());
    }
}