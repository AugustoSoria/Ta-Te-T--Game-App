import { connect } from "react-redux";

const Puntaje = (props) => {
    console.log(props)
    return (  
        <div>
            <h4 className="turnoDe">{'Turno de: ' + (props.sigueX? 'X' : 'O')}</h4>
            <div className="puntaje">
                <div>
                    <h3>Puntaje X </h3>
                    <h4>{props.puntajeX}</h4>            
                </div>
                <div>
                    <h3>Puntaje O </h3>
                    <h4>{props.puntajeO}</h4>            
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    sigueX: state.sigueX,
    puntajeX: state.puntajeX,
    puntajeO: state.puntajeO,
})

export default connect(mapStateToProps)(Puntaje)