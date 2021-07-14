import { Component } from "react"

class Cupcake extends Component{
    render() {
        return (
            <div className="cupcake">
                <h3>{`Esto es un cupcake sabor ${this.props.sabor} de color ${this.props.color}`}</h3>
                <img src={this.props.url} alt={`cupcake ${this.props.color}`} />
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