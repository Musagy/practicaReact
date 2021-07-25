const Cupcake = ({
    sabor,
    color,
    imagen,
    precio
}) => { return (
    <div className="s-radius-1 s-shadow-bottom backgound s-shadow-card-micro white-color s-pxy-2">
        <img src={imagen} alt={sabor} />
        <p>Cupcake sabor <b>{sabor}</b> de color <b>{color}</b></p>
        <span>Precio: S/.<b>{precio}</b></span>
    </div>
)}

export default Cupcake