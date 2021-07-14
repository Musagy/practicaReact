import { Component } from "react"

class Cupcake extends Component{
    constructor(props){
        super(props)
        this.estado = {
            vendido: false
        }
    }

    render() {
        return (
            <div className="cupcake">
                <p>Esto es un cupcake sabor <b>{`${this.props.sabor}`}</b> de color <b>{`${this.props.color}`}</b></p>

                <img src={this.props.url} alt={`cupcake ${this.props.color}`} />
                
                <p>
                    <b>Estado del producto: </b>
                    {
                        this.estado.vendido
                        ?
                        "Vendido" : "A la venta"
                    }
                </p>
                {
                    !this.estado.vendido
                    && 
                    <button>Comprar</button>
                }
            </div>
        )
    }
}

// const Cupcake = ({sabor,color,url}) => {
//     return (
//         <div className="cupcake">
//             <h3>{`Esto es un cupcake sabor ${sabor} de color ${color}`}</h3>
//             <img src={url} alt={`cupcake ${color}`} />
//         </div>
//     )
// }

export default Cupcake