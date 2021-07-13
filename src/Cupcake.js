const Cupcake = (props) => {
    return (
        <div className="cupcake">
            <h3>{`Esto es un cupcake sabor ${props.sabor} de color ${props.color}`}</h3>
            <img src={`${props.url}`} alt={`cupcake ${props.color}`} />
        </div>
    )
}

export default Cupcake