import useFetch from "../hooks/useFetch"

const Servicios = ({peticion}) => {

    const [servicios, error] = useFetch(peticion)

    return (
        <>{ error ?

            <span>Hubo un error</span>

            :

            <>{ !servicios || servicios.length === 0 ?
        
                <span>no hay ningun servicio</span>
        
                :

                <div className="ed-grid">
                    {
                        servicios.map( ({ id, nombre, descripcion }) => (
                            <div key={id}>
                                <h1>{nombre}</h1>
                                <p>{descripcion}</p>
                            </div>
                        ))
                    }
                </div>
            }</>
        }</>
    )
}
export default Servicios