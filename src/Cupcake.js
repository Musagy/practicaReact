import { Component } from "react"

class Cupcake extends Component{
    constructor(props){
        super(props)
        this.state = {
            vendido: false,
            unPitoEnLaBocaDeTuMadre: true
        }

        // preparacion de metodos bind
        this.comprar = this.comprar.bind(this)
    }

    // creacion de metodos
    comprar() {
        // determinar que lo que sigue es una modificacion a un state dentro de constructor
        this.setState({
            vendido: true
        }
        )
    }

    render() {
        return (
            <div className="cupcake">
                <p>Esto es un cupcake sabor <b>{`${this.props.sabor}`}</b> de color <b>{`${this.props.color}`}</b></p>

                <img src={this.props.url} alt={`cupcake ${this.props.color}`} />
                
                <p>
                    <b>state del producto: </b>
                    {
                        this.state.vendido
                        ?
                        "Vendido" : "A la venta"
                    }
                </p>
                {
                    !this.state.vendido
                    && 
                    <>
                        <button onClick={this.comprar} >Comprar</button>
                    </>
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

// import { Component } from "react"

// class Cupcake extends Component {
//     constructor (props) {
//         super (props)
//         this.state = {
//             vendido: false
//         }
//         this.vender = this.vender.bind(this)
//     }
//     vender(){
//         this.setState({
//             vendido: true
//         })
//     }
//     render() { 
//         return (
//             <div className="cupcake">
//                 <p>Esto es un cupcake sabor <b>{`${this.props.sabor}`}</b> de color <b>{`${this.props.color}`}</b></p>

//                 <img src={this.props.url} alt={`cupcake ${this.props.color}`} />
//                 <p>
//                     <b>state: </b>
//                     {
//                         this.state.vendido ? "vendido" : "a la venta"
//                     }
//                 </p>
//                 {
//                     !this.state.vendido && <button onClick={this.vender}>vender</button>
//                 }
//             </div>
//         )
//     }
// }

// export default Cupcake
