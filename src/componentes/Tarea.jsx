import '../estilos/Tarea.css';
// recibo tarea, tareaCompletada(funcion) y eliminarTarea(funcion)
export const Tarea = ({tarea, tareaCompletada, eliminarTarea}) => {
    return (
        // si tarea.completada es true, entonces agregar la clase cambioColor
        <div className={tarea.completada? "cambioColor":"contenedor-tarea"}>
            {/* // p si tarea.completada es true, entonces agregar la clase completado
            // sino, agregar la clase vacia */}
            <p className={tarea.completada?"completado": ""}>{tarea.texto} </p>
            {/* contenedor de botones             */}
            <div className="contenedor-botones">
                {/* ejecuto la funcion tareaCompletada con el id de la tarea */}
                <button onClick={() => tareaCompletada(tarea.id)} className="realizado">H</button>
                {/* ejecuto la funcion eliminarTarea con el id de la tarea */}
                <button className="eliminar" onClick={()=> eliminarTarea(tarea.id)} >D</button>
            </div>
        </div>
    )
}

// comentarios:
// Se utilizan funciones anónimas en los botones por dos razones principales:

// 1. Para pasar parámetros a la función: En tu código, necesitas pasar tarea.id como argumento a las funciones tareaCompletada y eliminarTarea . Si escribieras directamente:
// ```
// onClick={tareaCompletada
// (tarea.id)}
// ```
// Esta función se ejecutaría inmediatamente al renderizar el componente, no cuando se haga clic en el botón.

// 2. Para evitar la ejecución inmediata: Al usar una función anónima:
// ```
// onClick={() => 
// tareaCompletada(tarea.id)}
// ```
// La función solo se ejecutará cuando se haga clic en el botón, que es el comportamiento que queremos.

// En resumen, las funciones anónimas actúan como un "envoltorio" que nos permite:

// - Pasar parámetros a las funciones
// - Controlar cuándo se ejecuta la función (solo al hacer clic)
// - Evitar que la función se ejecute durante el renderizado inicial del componente