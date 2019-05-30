import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { UsuarioModel } from '../../models/usuario.model';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {

  public usuarios: UsuarioModel[] = [];

  constructor(
    // Con effects no se usa http service
    // private userService: UsuarioService
    ) { }

  ngOnInit() {
    // Un 
    /*this.userService.getUsers().subscribe(users => {
      console.log(users);
      this.usuarios = users;
    });*/

  }

}
