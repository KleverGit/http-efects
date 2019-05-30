import { Action } from '@ngrx/store';
import { UsuarioModel } from 'src/app/models/usuario.model';
export const SET_USUARIOS = '[Usuarios] SET USUARIOS';
export const SET_USUARIOS_FAIL = '[Usuarios] SET USUARIOS fail';
export const SET_USUARIOS_SUCCESS = '[Usuarios] SET USUARIOS success';

export class SetUsuariosFailAction implements Action {
    readonly type = SET_USUARIOS_FAIL;
    constructor(public error: any) {
    }
}

export class SetUsuariosSuccessAction implements Action {
    readonly type = SET_USUARIOS_SUCCESS;
    constructor(public usuarios: UsuarioModel[]) {
    }
}

export class SetUsuariosAction implements Action {
    readonly type = SET_USUARIOS;
}

export type actions = SetUsuariosSuccessAction | SetUsuariosFailAction | SetUsuariosAction;
