import Cupcake from "./cards/Cupcake"
import useFetch from "../hooks/useFetch"

const Pagina1 = ({peticion, title}) => {

    const [cupcakes] = useFetch(peticion)

    return (
        <div>
            { title && <h1>Cupcakes mas comprados</h1>}
            {
                cupcakes ? (
                    <section className="ed-grid s-grid-2 m-grid-3 lg-grid-4 row-gap">
                        {
                            cupcakes.map(({
                                id,
                                sabor,
                                color,
                                imagen,
                                precio
                            }) => (
                                <Cupcake
                                    key={id}
                                    sabor={sabor}
                                    color={color}
                                    imagen={imagen}
                                    precio={precio}
                                />
                            ))
                        }
                    </section>
                ) : (
                    <span>Cargando...</span>
                )
            }
        </div>
    )
}
export default Pagina1