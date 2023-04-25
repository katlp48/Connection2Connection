import { Component, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario-listar',
  templateUrl: './usuario-listar.component.html',
  styleUrls: ['./usuario-listar.component.css']
})
export class UsuarioListarComponent implements OnInit {
  lista:Usuario[]=[]
  dataSource: MatTableDataSource<Usuario> =new MatTableDataSource();
  displayedColumns: string[]=['codigo','dni','usuario','nombre','email','contraseña','tipo','key','accion01']
  constructor(private uS: UsuarioService){

  }
  ngOnInit(): void {
    this.uS.list().subscribe(data=>{
      this.dataSource= new MatTableDataSource(data);
    })
    this.uS.getList().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
  }
  filtrar(e:any){
    this.dataSource.filter= e.target.value.trim();
  }
}
