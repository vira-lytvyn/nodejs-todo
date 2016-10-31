import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService{
    constructor(private http:Http){
        console.log('Todo Service Initialized...');
    }
    
    getTodos(){
        return this.http.get('/api/todos')
            .map(res => res.json());
    }
    
    addTodo(newTodo){
        return this.http.post('/api/todo', newTodo)
            .map(res => res.json());
    }
    
    deleteTodo(id){
        return this.http.delete('/api/todo/'+id)
            .map(res => res.json());
    }
    
    updateStatus(todo){
        return this.http.put('/api/todo/'+todo._id, todo)
            .map(res => res.json());
    }
}