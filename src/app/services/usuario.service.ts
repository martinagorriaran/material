import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: Usuario[] = [
    {usuario: "gmartina", nombre:"martina", apellido: "gorriaran", sexo: "femenino"},
    {usuario: "upedro", nombre:"pedro", apellido: "uribe", sexo: "masculino"},
    {usuario: "ijose", nombre:"jose", apellido: "ilafaya", sexo: "masculino"},
    {usuario: "liara", nombre:"iara", apellido: "luna", sexo: "femenino"},
    {usuario: "gazul", nombre:"azul", apellido: "gonzalez", sexo: "femenino"},
    {usuario: "fcamilo", nombre:"camilo", apellido: "figueroa", sexo: "masculino"},
    {usuario: "qtomas", nombre:"tomas", apellido: "quinteros", sexo: "masculino"},
    {usuario: "mceleste", nombre:"celeste", apellido: "muñoz", sexo: "femenino"},
    {usuario: "asantiago", nombre:"santiago", apellido: "apablaza", sexo: "masculino"},
    {usuario: "aguillermo", nombre:"guillermo", apellido: "alarcon", sexo: "masculino"}
  
  ];
  
  constructor() { }

  getUsuario(){
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index: number){
    this.listUsuarios.splice(index, 1);
  }

  agregarUsuario(usuario: Usuario){
    this.listUsuarios.unshift(usuario);
  }
}
