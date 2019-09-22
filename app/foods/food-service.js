import http from '../shared/http-service';
import {BaseUrl} from '../api-config';

export async function getFoods() {
  return await http.get(BaseUrl.foods);
}

export async function deleteFood(id) {
  return await http.delete(`${BaseUrl.foods}${id}`);
}
