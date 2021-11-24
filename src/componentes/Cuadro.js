import { connect } from "react-redux";
import "./style.css"

const Cuadro = (props) => {
    return (  
        <button className="cuadro" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

const mapStateToProps = state => ({
    sigueX: state.sigueX,
    posiciones: state.posiciones
})

export default connect(mapStateToProps)(Cuadro)