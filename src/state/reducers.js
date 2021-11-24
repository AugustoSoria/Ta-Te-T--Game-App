import { RESET, SET_POSICION, SET_PUNTAJE_O, SET_PUNTAJE_X, SET_X } from "./types";

export const juegoReducer = (state, action) => {
    switch(action.type){
        case SET_PUNTAJE_X:
            return {
                ...state,
                puntajeX: state.puntajeX + 1 
            }
        
        case SET_PUNTAJE_O:
            return {
                ...state,
                puntajeO: state.puntajeO + 1
            }

        case SET_POSICION: 
            return {
                ...state,
                posiciones: action.posicion
            }   

        case SET_X: 
            return {
                ...state,
                sigueX: action.x
            } 

        case RESET: 
            return {
                ...state,
                posiciones: action.posiciones 
            }   

        default: 
            return state
    }

}







//VER PORQUE EL STATE NO LLEGA A LOS COMPONENTES Y PQ sigueX NO CAMBIA