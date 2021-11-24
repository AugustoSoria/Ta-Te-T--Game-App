import { createStore } from "redux";
import { juegoReducer } from "./reducers";

export const store = createStore(
    juegoReducer,
    {
        sigueX: true,
        posiciones: [],
        puntajeX: 0,
        puntajeO: 0,
    }
)

