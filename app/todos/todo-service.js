import http from '../shared/http-service';
import {BaseUrl} from '../api-config';

export async function getTodos() {
  return await http.get(BaseUrl.todos);
}
