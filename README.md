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
