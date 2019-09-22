import http from '../shared/http-service';
import {BaseUrl} from '../api-config';

export async function getFoods() {
  return await http.get(BaseUrl.foods);
}

export async function deleteFood(id) {
  return await http.delete(`${BaseUrl.foods}${id}`);
}

export async function postFood(newFood) {
  return await http.post(BaseUrl.foods, newFood);
}

export async function putFood(updateFood) {
  return await http.put(`${BaseUrl.foods}${updateFood.id}`, updateFood);
}
