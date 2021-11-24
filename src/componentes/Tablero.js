import { connect } from "react-redux";
import { accionReset, accionSetPosicion, accionSetPuntajeO, accionSetPuntajeX, accionSetX } from "../state/actions.js";
import Cuadro from "./Cuadro.js"
import "./style.css"

const Tablero = (props) => {
    let posiciones = props.posiciones.slice()

    let decimeElGanador = (posiciones) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (posiciones[a] && posiciones[a] === posiciones[b] && posiciones[a] === posiciones[c]) {
                return posiciones[a];
            }
        }
        return false;
    }

    let puntaje = (selector) => {
        if(selector === "X") props.setPuntajeX(selector)
        if(selector === "O") props.setPuntajeO(selector)
    }

    let winner = decimeElGanador(posiciones);

    let handleClick = i => {
        if(winner || posiciones[i]){
            puntaje(winner)
            props.reset([])
            return
        } 
        posiciones[i] = props.sigueX? "X" : "O"
        props.setX(!props.sigueX)
        props.setPosicion(posiciones)
    }

    return (
        <div>
            <div className="tablero">
                <div className="luz"></div>
                <div className="juego">
                    <Cuadro onClick={() => handleClick(0)} value={props.posiciones[0]}/>
                    <Cuadro onClick={() => handleClick(1)} value={props.posiciones[1]}/>
                    <Cuadro onClick={() => handleClick(2)} value={props.posiciones[2]}/>
                    <Cuadro onClick={() => handleClick(3)} value={props.posiciones[3]}/>
                    <Cuadro onClick={() => handleClick(4)} value={props.posiciones[4]}/>
                    <Cuadro onClick={() => handleClick(5)} value={props.posiciones[5]}/>
                    <Cuadro onClick={() => handleClick(6)} value={props.posiciones[6]}/>
                    <Cuadro onClick={() => handleClick(7)} value={props.posiciones[7]}/>
                    <Cuadro onClick={() => handleClick(8)} value={props.posiciones[8]}/>
                </div>
            </div>
        </div>
    );
}






const mapStateToProps = state => ({
    sigueX: state.sigueX,
    posiciones: state.posiciones,
    puntajeX: state.puntajeX,
    puntajeO: state.puntajeO,
})


const mapDispatchToProps = dispatch => ({ //esto provee el dispatch
    setPuntajeX: () => { //setJugador va por el props
        dispatch(accionSetPuntajeX())
    },
    setPuntajeO: () => { //setJugador va por el props
        dispatch(accionSetPuntajeO())
    },
    setPosicion: posicion => {
        dispatch(accionSetPosicion(posicion))
    },
    setX: x => {
        dispatch(accionSetX(x))
    },
    reset: posiciones => {
        dispatch(accionReset(posiciones))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Tablero)