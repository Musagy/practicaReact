const Cupcake = ({
    sabor,
    color,
    imagen,
    precio
}) => { return (
    <div className="cupcake">
        <img src={imagen} alt={sabor} />
        <p>Cupcake sabor <b>{sabor}</b> de color <b>{color}</b></p>
        <span>Precio: S/.<b>{precio}</b></span>
    </div>
)}

export default Cupcake