import * as fromUsuariosReducers from './reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    usuarios: fromUsuariosReducers.UsuariosState;
}

export const reducers: ActionReducerMap<AppState> = {
    usuarios: fromUsuariosReducers.usuariosReducer
};

