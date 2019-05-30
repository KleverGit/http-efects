import * as fromUsuariosActions from '../actions';
import { UsuarioModel } from 'src/app/models/usuario.model';

export interface UsuariosState {
    usuarios: UsuarioModel[];
    loading: boolean;
    loaded: boolean;
    error: any;
}

const initState: UsuariosState = {
    usuarios: [],
    loading: false,
    loaded: false,
    error: null
};

export function usuariosReducer(state: UsuariosState = initState, action: fromUsuariosActions.actions): UsuariosState {
    switch (action.type) {
        case fromUsuariosActions.SET_USUARIOS:
            return {
                ...state,
                loading: true
            };
        case fromUsuariosActions.SET_USUARIOS_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                usuarios: [...action.usuarios]
            };
        case fromUsuariosActions.SET_USUARIOS_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
                error: action.error
            };
        default:
            return state;
    }
}

