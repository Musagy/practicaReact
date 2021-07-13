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

## crear elementos para los constructores y exportarlos

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

    `hola ${nombre de persona a saludar}``
    NOTA: pongo 2 backtick al final para que lo tome como string el md

- y ahora para poner textos scripts en el xml tenemos que agruparlo en llaver {}

    {`hola ${nombre de persona a saludar}``}
    NOTA: las llaves de los backtick y los que almacenan scripts no tienen nada que ver

- ahora para sacar cada dato del las propiedades (prmps), se hace como si fuera un objeto props.propiedad

    {`hola ${props.nombre}``}

y así se hace.