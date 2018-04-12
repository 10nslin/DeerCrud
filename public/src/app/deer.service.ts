import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Deer } from './deer';

@Injectable()
export class DeerService {

  constructor(private _http: HttpClient) { }

  getDeers() {
    return this._http.get('/deers');
  }

  addDeer(deer: Deer) {
    return this._http.post('/deers', deer);
  }

  getOneDeer(id: String) {
    return this._http.get(`/deers/${id}`);
  }

  updateDeer(id: String, deer: Deer){
    return this._http.put(`/deers/${id}`, deer);
  }

  deleteDeer(id: String){
    return this._http.delete(`/deers/${id}`);
  }

}
