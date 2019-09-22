import http from '../shared/http-service';
import {BaseUrl} from '../api-config';

export async function getTodos() {
  return await http.get(BaseUrl.todos);
}

export async function deleteTodo(id) {
  return await http.delete(`${BaseUrl.todos}${id}`);
}

export async function postTodo(newTodo) {
  return await http.post(BaseUrl.todos, newTodo);
}

export async function putTodo(updateTodo) {
  return await http.put(`${BaseUrl.todos}${updateTodo.id}`, updateTodo);
}
