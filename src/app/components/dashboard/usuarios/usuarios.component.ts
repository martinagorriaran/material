import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';



const listUsuarios: Usuario[] = [
  {usuario: "gmartina", nombre:"martina", apellido: "gorriaran", sexo: "femenino"},
  {usuario: "gmartina", nombre:"martina", apellido: "gorriaran", sexo: "femenino"},
  {usuario: "gmartina", nombre:"martina", apellido: "gorriaran", sexo: "femenino"},
  {usuario: "gmartina", nombre:"martina", apellido: "gorriaran", sexo: "femenino"},
  {usuario: "gmartina", nombre:"martina", apellido: "gorriaran", sexo: "femenino"},
  {usuario: "gmartina", nombre:"martina", apellido: "gorriaran", sexo: "femenino"}
];

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'sexo','acciones'];
  dataSource = listUsuarios;

  constructor() { }

  ngOnInit(): void {
  }

}
