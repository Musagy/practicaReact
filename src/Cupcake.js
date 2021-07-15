// import { Component } from "react"

// class Cupcake extends Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             vendido: false,
//             unPitoEnLaBocaDeTuMadre: true
//         }

//         // preparacion de metodos bind
//         this.comprar = this.comprar.bind(this)
//     }

//     // creacion de metodos
    // comprar() {
    //     // determinar que lo que sigue es una modificacion a un state dentro de constructor
    //     this.setState({
    //         vendido: true
    //     }
    //     )
    // }

//     render() {
//         return (
//             <div className="cupcake">
//                 <p>Esto es un cupcake sabor <b>{`${this.props.sabor}`}</b> de color <b>{`${this.props.color}`}</b></p>

//                 <img src={this.props.url} alt={`cupcake ${this.props.color}`} />
                
//                 <p>
//                     <b>El producto esta: </b>
//                     {
//                         this.state.vendido
//                         ?
//                         "Vendido" : "A la venta"
//                     }
//                 </p>
//                 {
//                     !this.state.vendido
//                     && 
//                     <>
//                         <button onClick={this.comprar} >Comprar</button>
//                     </>
//                 }
//             </div>
//         )
//     }
// }

import { useState, useRef } from "react"
import "./Cupcake.css"

const Cupcake = ({sabor,color,url}) => {
    const [vendido, setVendido] = useState(false),
          [reservado, setReservado] = useState(false)

    const foto = useRef(),
          texto = useRef()

    const reservar = () => {
        setReservado(true) 
        const elTexto = texto.current
        elTexto.classList.add("reservado")
    }  

    const comprar = () => {
        setVendido(true)
        setReservado(true)
        const laFoto = foto.current
        laFoto.classList.add("vendido")
        const elTexto = texto.current
        elTexto.classList.remove("reservado")
    }

    return (
        <div className="cupcake">
            <p>Esto es un cupcake sabor <b>{`${sabor}`}</b> de color <b>{`${color}`}</b></p>

            <img ref={foto} src={url} alt={`cupcake ${color}`} />
            
            <p>
                <b ref={texto}>El producto esta: </b>
                {
                    vendido
                    ?
                    "Vendido" : "A la venta"
                }
            </p>
            {
                !reservado
                && 
                <>
                    <button onClick={reservar} >Reservar</button>
                </>
            }
            {
                !vendido
                && 
                <>
                    <button onClick={comprar} >Comprar</button>
                </>
            }
        </div>
    )
}

export default Cupcake