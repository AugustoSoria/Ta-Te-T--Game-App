import { RESET, SET_POSICION, SET_PUNTAJE_O, SET_PUNTAJE_X, SET_X } from "./types";

export const accionSetPuntajeX = () => ({
    type: SET_PUNTAJE_X,
})

export const accionSetPuntajeO = () => ({
    type: SET_PUNTAJE_O,
})

export const accionSetPosicion = posicion => ({
    type: SET_POSICION,
    posicion
})

export const accionSetX = x => (
    {
    type: SET_X,
    x
})

export const accionReset = (posiciones) => (
    {
    type: RESET,
    posiciones
})