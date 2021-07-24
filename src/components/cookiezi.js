import { useState, useEffect } from "react"
import Cupcake from "./cards/Cupcake"

const Pagina1 = () => {

    const [cupcakes,setCupcakes] = useState()

    useEffect(() => {
        fetch ("http://localhost:3001/cupcakes")
            .then(response => response.json())
            .then(data => setCupcakes(data))
    }, [])

    return (
        <div>
            {
                cupcakes ? (
                    <section>
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