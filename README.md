# hola yo del futuro, esta es una guia de react para que tengas en cuenta por si te olvida alguna idea

Ya sabe el concepto de react asi que no lo voy a poner acá

## Formato jsx

¿Pero como funciona? funciona con elemtos que se forman con un formato llamado jsx
- en sintesis es como crear un elemento con "html" en js

- no es html es xml pero son muy parecidos

para hacer un constructor de ese elemento se hace re esta forma

        declaracion de elemento = (parametros) => (XML)

recordar que se crea de la misma forma que un funcion pero en vez de poner su funcion en {} lo hacemos en ()

## render

ahora en los modulos que queramos hacer los render SIEMPRE TENDREMOS QUE IMPORTA LAS LIBRERIAS DE REACT

        import React from 'react';
        import ReactDOM from 'react-dom';

a esta tambien le puedes poner las funciones a llamar y listo, aparte de tambien poner los imports del los elementos

        import {StrictMode} from 'react';
        import {render} from 'react-dom';
        import 'elem' from './elem';

## crear elementos para los constructores y exportarlos (se llaman conponentes pero acá los llamare por elementos)

bueno que tal que si ahora, ponemos elementos abstratos
en construcciones para jsx. pues se hace de la siguiente forma

        const "NombreDelElemento" = (props) => {
            return (
                <>
                    <"contenido" />
                </>
            )
        }
        export default "NombreDelElemento"

- NOTA: su nombre tiene que comenzar con mayuscula, o eso es lo que creo porque me pasaban errores.

ahora para pasarlo al constructor primero se le tiene que importar y despues tienes que poner etiquetas con el nombre del elemento creado, asi

        import "NombreDelElemento"  from "./'NombreDelArchivoDelElemto' ";

        const App = () => (
        <div>
            <"NombreDelElemento" prop="valor" />
        </div>
        );

        export default App;

## crear contenido dinamico para los elementos

ok, pero esto solo retorna elementos estatica, como lo hacemos dinamico

pues para eso se hay algunas reglas para usarlo

- para texto dinamicos en JS se utilizaba con backtick `` y poner el dato dinamico dentro de llaves despues de un signo de dolar ${}

        variable = `hola ${nombre de persona a saludar}``

    - NOTA: pongo 2 backtick al final para que lo tome como string el md

- y ahora para poner textos scripts en el xml tenemos que agruparlo en llaver {}

        < {`hola ${nombre de persona a saludar}``}  />

    - NOTA: las llaves de los backtick y los que almacenan scripts no tienen nada que ver

- ahora para sacar cada dato del las propiedades (prmps), se hace como si fuera un objeto props.propiedad

        < {`hola ${props.nombre}``}  />

y así se hace.

## destructuración de props

como ya lo sabia se pueden destructurar las propiedades del elemento

pero como :0

pues props es un objeto el cual podemos eliminar y quedarnos solo con sus atributos

        const "NombreDelElemento" = (props) => {
            return (
                <>
                    <{ ${props.atributo} } />
                </>
            )
        }
        export default "NombreDelElemento"


        const "NombreDelElemento" = ({atributo}) => {
            return (
                <>
                    <{ ${atributo} } />
                </>
            )
        }
        export default "NombreDelElemento"

- NOTA: si son multiples propiedades tendremos que poner todas en el lugar de estaba props dentro de llaves {}

        const "NombreDelElemento" = ({atributo1,atributo2}) => {
            return (
                <>
                    <{ ${atributo1} } />
                    <{ ${atributo2} } />
                </>
            )
        }
        export default "NombreDelElemento"

todo bien, es muy buena su estructura de los componentes por funciones, es como lo vamos a llamar ahora y esta piola, pero esto recien surgio hace unos años, antes se usaban los componentes por clases.

- esta es su estructura
    - primero importamos una clase de react llamada Component

            import { Component } from "react"

    - despues declarar una clase, y en ella vamos a hacer que tenga una herencia de Component
    - ¿por que? porque este tiene un metodo para que todo esto funcione el cual es render(), render es lo mismo que hacer una funcion, ahí se pondra todo el return

            class NombreDeComponente extends Component{
                render() {
                }
            }

    - okey, pero hay algunas cosas que son diferente en clases que en funcion como la escritura de las propiedades

            class NombreDeComponente extends Component{
                render() {
                    return (
                        <>
                            <{ ${this.props.atributo1} } />
                            <{ ${this.props.atributo2} } />
                        </>
                    )
                }
            }

    - si, le pusimos this.props antes de la propiedad como si fueran los de una clase obvio.
    - pero date cuenta que todos las propiedades se generar en el atributo props y en el estan los propiedades

y haciendo esto ya tenemos nuestro cambio de componente de funcion a clase

## estados

los estados del componente son valores que pueden estar true o false (o eso es lo que creo)
se declaran de la siguiente forma

        class Componente extends Component{
            constructor(props){
                super(props)
                this.estado = {
                    cosaAAlternar: false o true
                }
            }
        }
    
- lo primero que se hace es determinar constructor como en una clase heredera de otra
- esto es para determinar sus atributos, y como ya estamos determinando constructor, es obligatorio poner super(props) para determinar propiedades
- NOTA: parece ser que cuando no determinamos constructor, el atributo props ya esta llamado por defecto
- ahora despues de determinar props, podremos determinar otros atributos, en este caso seran atributos booleanos para crear un estado de si o no
y esto seria todo

y ahora como los hacemos funcionar
pues se puede usar con condicionales

acá hay algunas formas que aprendi ahora

        <p>
            <b>Estado del producto: </b>
            {
                this.estado.vendido
                ?
                "Vendido" : "A la venta"
            }
        </p>

- muy extraño
    - su sintaxis es asi

            variable con booleano
            ? <--- funciona como un "if"
            sí el booleano es TRUE : sí el booleano es FALSE

- y esta es otra

            {
                !this.estado.vendido
                && 
                <button>Comprar</button>
            }

- tiene el parametro && pero "no tiene nada que ver" o si
    - esta es la sintaxis como yo la veo

            si esto exite o es true
            &&
            esto tambien existe

    - yo lo pienso como si el codigo nos dijiera que si esto es sierto o exite lo de abajo tambien, pero si no, el otro tampoco

y podran ver el ejemplo por el commit donde README termine en esta linea

### PAPUUUUU IMPORTANTE
LO QUE ACABAS DE VER ESTA DEL TODO CORRECTO, PERO RECUERDA QUE EN ESTADO SI O SI SE TIENE QUE LLAMAR EN INGLES O SEA "STATE"

NO LO OLVIDES QUE YA HE ESTADO PELEANDO 1 HORA CON REACT PARA DARME CUENTA DEL ERROR, HASTA QUE TUVE QUE COPIAR EL CODIGO DEL PROFESOR PARA INTERCANBIAR SUS PIEZAS PARA DARME CUENTA

ASI QUE SUPONGO QUE SI QUIERES MAS ESTADOS TENDRAS QUE PONERLOS EN SUS LLAVE QUE LLEVA EL ATRIBUTO STATE COMO SI FUERA UN JSON

## lifecycle - ciclo de vida

en react hay algunas funciones que nos ayudaran a identificar los momentos de que tienen los componentes, son 6 y son los siquientes

        componentWillMount(){}

- este es pasa saber cuando se VA a montar un componente

        componentDidMount(){}

- este es para saber cuando un componente YA ESTA montado

        componentWillUpdate(){}

- este es para saber cuando se va a ACTUALIZAR un componente

        componentDidUpdate(){}

- este es para saber cuando un componente YA ESTA actualizaso

        componentWillUnmount(){}

- este es para saber cuando un componente va a ser eliminado

        render(){}

- este lo conocemo y tambien funciona para determinar cuando se esta haciendo cualquier cambio tanto montaje como actualizar

eso si, estos se van a eliminar entre algunos años.

## componentes funciones y los hooks

primero que todo tenemos que volver nuestro componente clase a funcion como lo hicimos antes pero a la inversa.

ok, ya que estate daras cuenta que los estados no cuadran en el sistema de las funciones asi que para ello existe una forma

en react existe una funcion llamada useState la cual determinara los estados como lo haciamos con state en las clases
y se hace asi

        import {useState} from "react"

        const "NombreDelElemento" = ({atributo}) => {

            const ["nombre con el cual quieres llamar al valor del estado, nombre de la funcion que va editarla"] = useState(valor del estado o estados)

            return (
                <>
                    <{ ${atributo} } />
                </>
            )
        }
        export default "NombreDelElemento"

- acá hay algunas especificaciones pero primero hay que mostrar como funcionan

en la constante se van a guardar los estados o un unico estado asi

        1 estado
        useState(booleano)

        2 o mas estados
        useState({
            estado1: booleano,
            estado2: booleano
        })

- si, si son mas de 1 se los agrupa en un JSON

y para llamar estos valores se hace asi

        1 estado
        "el primer valor de la constante de useState"

        2 o mas estados
        "el primer valor de la constante de useState"."nombre del estado en el JSON"

- es asi porque los JSON son objetos

pero ahora como hacemos funciones para que modifiquen al estado, pues se hace asi

        const "nombre la funcion" = () => {
            nombre del segundo valor de las constante de useState(revaloriza usando la forma como lo hiciste en la declaracion de useState)
        }

- ahora una NOTA de buena practica, la cual es que tienes que llamar al segundo valor de la constante useState como el primero pero con un set al principio usando camelcase

        Ejemplo:

        const [algo, setAlgo] = useState({
            Valor1: true
            Valor2: false
            })

## userEffect

userEffect es una funcion que se ejecuta cuando se actualizan un ante estados determinados

su sitaxis es así

        useEffect( () => {
            funcion a realizar
        }, [estados con los que se activara] )

- es muy importante poner el array en el segundo componente de la funcion, PORQUE SI NO SE PONE se va a activar esa funcion en cualquier cambio de cualquier estado

- al poner el array vacio [] estamos diciendo que no se ejecute en ni un momento

claro, esta bien y piola pero como useState tambien se tiene que importar de react

        import { useEffect } from "react"

- en este commit termina acá, puedes ver un ejemplo practico si ejecutas el yarn start en consola

## userRef

userRef no da una referencia en el vitualDOM como lo haria getElementById en el DOM

pero quizas es un poco rebuscado porque tienes que buscarlo en el objeto que te da useRef

por ejemplo, (no lo se solo lo he intentado en img y texto) current es la atributo que te da su elemento en el DOM

a esta funcion tambien se le importa desde react

        import { useRef } from "react"

Pero esto en que nos ayuda, pues como agregarle clases con ajustes en un css externo como la forma practica que hicimos en este commit

pues como selecciono a que elemento quiero editar con esto

pues tienes que ponerlo en la estructuracion del componente con 

        <elemento ref="nombre con el que se referneciara" />

bueno ahora como lo ejecutamos

pues asi

        const "nombre con el que se referneciara" = userRef()

y se implementa poniendolo en cualquier funcion antes pero antes declarando al elemento

        const funcion = () => {
            const "nombre para el elemento" = "nombre de useRef.current
            accion de la funcion
        }

Y en este commit tambien se agregara una forma practica de como hacerlo con clases con 2 elementos

## React Route

es una libreria que nos ayuda mas que todo a optimizar los enlaces de pagina en pagina, con un sistema de peticiones del componente requerido

Toda la documentacion esta acá => https://reactrouter.com/

solo voy a explicar cositar a destacar

para instalarlo con yarn es

        yarn add react-router-dom

y esta sera la estructura deñ import

        import {
            BrowserRouter as Router,
            Switch,
            Route,
            Link
        } from "react-router-dom";

tendremos que eliminar los componente que no necesitemos

y por ultimo no olvidar que es muy necesario que la ruta principal "/" tiene que ser colocada al ultimo ya que cuando se busca el caso del Switch lo que busca es que si contiene esa parte y todos las extenciones tendran "/"

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

## Crear una API y consumirla en react

vamos a crear una API fake con una libreria llamada JSON SERVER

esta es su pagina en npm --> https://www.npmjs.com/package/json-server

se instala de forma global asi que se podra usar en cualquier direccion.

para ejecutarlo tendremos que usar 

        json-server --watch db.json --port NumeroDePuerto

y listo

ahora para poder implementar esta base de datos fake en nuestro proyecto usaremos fetch y then

es la primera vez que uso asi que no soy un experto en eso

bueno, entonces se comienza declarando un estado para la lista de los objetos y esta va a estar al principio de la creacion del componente

        const objetos = () => {
            const [objeto,setObjeto] = useState([])

            return(
                componente
            )
        }

ahora que ya tenemos el contenedor para la informacion de la BD vamos a traerla asi

        useEffect(() => {
            fetch ("http://localhost:puerto/NombreDelArchivoDeLaBaseDeDatos")
                .then(response => response.json())
                .then(data => console.log(data))
        }, [])

- primero usamos useEffect para ejecutar esto cuando se cargue la pagina, despues usamos una funcion anonima para poner el fetch
- este se usa poniendo entre parentesis y comillas ("") la url de la BD 
- y despues siguen comandos que recien miro como el .then, response y data
- acá hay mas informacion de como funciona esto --> https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch
- como yo entiendo la respuesta del fetch es un HTTP y para sacar el JSON se usa el metodo .json(), y es lo que vemos en el primer .then
- y parece tambien que todo termina almacenado en un tal objeto data, y para verlo usamos console.log(data) como en el segundo .then

ahora con esto podremos almacenar la data en el objeto que determinamos en useState con otro .then, asi

        .then(data => setObjeto(data))

y ya esta

ahora como podemos poner esto en practica poniendolo en practica...

## renderizar contenido con una BD

        const Pagina1 = () => {

            const [caja,setCaja] = useState()

            useEffect(() => {
                fetch ("http://localhost:puerto/caja")
                    .then(response => response.json())
                    .then(data => setCaja(data))
            }, [])

            return (
                <div>
                    {
                        caja ? (
                            <section>
                                {
                                    caja.map(({
                                        id,
                                        atributo1,
                                        atributo2
                                    }) => (
                                        <Item
                                            key={id}
                                            atributo1={atributo1}
                                            atributo2={atributo2}
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

- despues de hacer todo nuestro codigo de peticion HTTP escribimos el componente que tendria tener una operacion ternaria o tambien puedes usar if() si quieres

- en la primera parte la comprobacion de la existencia del elemento, despues la contruccion del elemento

- en este caso se tiene que usar si o si map para que no altere el array original

- en los atributos es recomendado poner a cada item un id para identificarlo bien esto ira en el atributo key del componente

- despues se escribe el componente con los atributos integrados a el

- y en la tercera parte de la operacion ternaria se pone lo que aparecera cuando no haya cargado, en este caso un texto "Cargando..."

- NOTA: para que funcione la tercera parte es necesario que el useState inicie vacio, o sino se tomara como si ya tuviera algo y no saldria el texto "Cargando..."

### Sintaxis de las operaciones ternarias

        (condicional) ? (si se cumple) : (si no se cumple)

y por ultimo en la creacion del componente en otro archivo tambien se tiene que hacer esta desestructuracion de los atributos

## variables de entorno

ya sabemos como renderizar contenido mediante una API pero ahora que pasaria si queremos cambiar la direccion de la API e imagina que ya tienes muchos archivos donde usa esa direccion

pues podrias cambiar una por una de ellas o podrias simplemente guardarlas como variables en un archivo externo

ok, pero esto tiene unos requerimientos

estas variables tienen que ir en un archivo llamado .env.local y tambien un archivo env.example para guardar ahi la de por defecto, este ultimo se guardara en git

y como se nombran estas variables, pues es algo extraña su sintaxis, de lo que antes conocemos de que ni una variable tiene que empezar con mayuscula a hacer componentes con nombres que comienzan en mayuscula, llegamos a estas vareable que son totalmente en mayusculas y separadas por guiones bajos, asi

        NOMBRE_DE_LA_VARIABLE_DE_DIRECCION = "http://laDireccion.com/"

y para implementarlas en los fetch es asi

        useEffect(() => {
            fetch (`${process.env.NOMBRE_DE_LA_VARIABLE_DE_DIRECCION}extencion`)
                .then(response => response.json())
                .then(data => console.log(data))
        }, [])

- se tiene que poner porcess.env. antes de la vareable para llamarla

- puedes hacer una concatenacion de strings usando backticks`` y poner una extencion despues

podemos usar con un tipo de extencion especial que nos ofrece json-server el cual es

    cajaDeItems?atributo_like=nombreDelAtributo

hay un ejemplo practico en el main de la pagina del proyecto

y esto puede implementarce en una propiedad para el componente por la extencion


        const Pagina1 = (extencion) => {

            const [caja,setCaja] = useState()

            useEffect(() => {
                fetch (`${process.env.NOMBRE_DE_LA_VARIABLE_DE_DIRECCION}${extencion}`)
                    .then(response => response.json())
                    .then(data => setCaja(data))
            }, [extencion])
        }

- y como buena practica se tiene que poner la propiedad en el array donde van los elementos que detectara su actualizacion

y en cuando escribamos el compomponente lo ponemos como propiedades del mismo, asi

        <Item extencion="cajaDeItems?atributo_like=nombreDelAtributo"/>

y ahora como buena practipa para el fetch tenemos que usar catch

pero papu, no se que es catch y como se usa. no te preocupes crack, tu yo del pasado te lo explicara

catch te servira para determinar el error y se declara con un punto al principio como .then; mira, asi es
    
        useEffect(() => {
            fetch (`${process.env.NOMBRE_DE_LA_VARIABLE_DE_DIRECCION}${extencion}`)
                .then(response => response.json())
                .then(data => setCaja(data))
                .catch(err => console.log(err))
        }, [extencion])

- su propiedad puede ir con cualquier nombre por eso lo he reducido de error

en este caso, si ocurre un error, le decimos que imprima el error en consola

## axios

axios es una libreria que nos facilita las peticiones

        import Axios from "axios"

asi es como se importa

aunque tambien podemos desestructurar los metodos que necesitamos como get, asi

        import { get } from "axios"

ahora vamos a ver el cambio de la anterios forma con esta forma
    
        useEffect(() => {
            fetch (API)
                .then(response => response.json())
                .then(data => setCaja(data))
                .catch(err => console.log(err))
        }, [])
    
        useEffect(() => {
            get (API)
                .then(({data}) => setCaja(data))
                .catch(err => console.log(err))
        }, [])

- en primera vemos menos codigo
- ya no necesitamos volver nuestro response en json
- pero lo que nos devuelve es objeto con nuestra base de datos llamada por defecto data
- y tambien vemos que solo ponermos get en vez de fetch, pero ten cuidado que esto solo se puede hacer si lo desestructuramos si usamos la primera forma de importe tendremos que poner como si guera un metodo del Axios, asi

        Axios.get(API)

## Creando hooks

esto cada vez se vuelve mas dinamico pero cada ves mas cosas que saber papu

ya sabes el funcionamiento de hooks como useState y useEffect a la perfecion pero en algunos casos esto puede se repetitivo, asi que puedes crear hook con tu propia logica en un archivo js aparte

en este caso hice un hook de peticion HTTP con la libreria axios

        import { useState, useEffect } from "react"
        import { get } from "axios"

        const useFetch = (endpoint) => {

            const [data,setData] = useState(),
                  [error,setError] = useState()

            useEffect(() => {
                get (`${process.env.REACT_APP_URL_API}${endpoint}`)
                    .then(({ data }) => setData(data))
                    .catch(e => setError(e))
            }, [endpoint])

            return [data, error]
        }

        export default useFetch

- use terminos genericos como data o error

y este hook solo necesita una propiedad la cual seria la extencion a la que se quiere hacer la peticion o llamada tambien endpoint

y si te das cuenta lo que nos retorna sera un array asi que cuando la declaremos tendremos que hacerlo entre corchetes []

        const [nombreParaElObjetoQueTendraLaData, error] = useFetch(peticion)

y listo

## catch y error con los nuestros hooks

lo utilizamos como si fuera un estado comun y corriente

podemos ponerlo en un condicional para que aparesca una alerta que algo a salido mal

        error ?
            <h1>hubo un error</h1>
        :
            <h1>contenido</h1>

en el proyecto esta el componente servicios que lo usa

## prop type

es una libreria de comprobacion de tipo de contenido

esta nos dara alertas cada cuando una propiedad no tenga su tipo adecuado de contenido

se instala asi

        yarn add prop-types

y se ejecuta cuando terminemos el componente con una sintaxis asi

        Componente.propTypes = {
            numero: PropTypes.number,
            texto: PropTypes.string,
            array: PropTypes.array,
            bool: PropTypes.bool,
            funcion: PropTypes.func,
            objeto: PropTypes.object 
        }

se declaran todos las propiedades de tu componente PropType.tipoDeValor

y para declararla al componente tienes que escribirlo sin mayuscula al principio

y puedes ver mas tipos en su documentacion en npm --> https://www.npmjs.com/package/prop-types

### .Required

tambien si pones a la propiedad una extencion .Required, te saldran errores para los que no tienen esa prop

### .defaultProps

y tambien es una propiedad aparte como el .propTypes

pero en este caso, este nos dara valores por defecto

        perfil.defaultProps = {
            imagen: "urlDeFotoPorDefecto"
        }

