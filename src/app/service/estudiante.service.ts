import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Estudiante } from '../model/estudiante';
const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  private url=`${base_url}/estudiantes`
  private listaCambio=new Subject<Estudiante[]>()
  private confirmarEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  list() {
    return this.http.get<Estudiante[]>(this.url);
  }
  insert(u: Estudiante){
    return this.http.post(this.url,u)
  }
  setList(ListaNueva: Estudiante[]){
    this.listaCambio.next(ListaNueva);
    }
    getList(){
      return this.listaCambio.asObservable();
    }
    listId(id: number) {
      return this.http.get<Estudiante>(`${this.url}/${id}`);
    }
    update(au:Estudiante){
      return this.http.put(this.url+"/"+au.idEstudiante,au)
    }
    delete(id: number) {
      return this.http.delete(`${this.url}/${id}`)
    }

    getConfirmDelete(){
      return this.confirmarEliminacion.asObservable();
    }
    setConfirmDelete(estado:Boolean){
      this.confirmarEliminacion.next(estado);
    }
}
