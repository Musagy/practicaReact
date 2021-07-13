const Cupcake = ({sabor,color,url}) => {
    return (
        <div className="cupcake">
            <h3>{`Esto es un cupcake sabor ${sabor} de color ${color}`}</h3>
            <img src={url} alt={`cupcake ${color}`} />
        </div>
    )
}

export default Cupcake