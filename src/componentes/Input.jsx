import '../estilos/Input.css';
// recibo texto, setTexto, y agregarTarea(funcion)
export const Input = ({texto, setTexto, agregarTarea}) => {
    return (

        <div className="contenedor-input">
            {/* Creo un input para ingresar una tarea  */}
            {/* en el input establezco el valor con value={texto} */}
            <input className ='entradaTexto'type="text" value={texto} placeholder="Ingrese una tarea"
                // onchange escucha un cambio y lo agrega a texto
                // e.target.value es el valor que se ingresa en el input
                // setTexto actualiza el valor de texto
                // de e se extrae target y value
                onChange={(e) => { setTexto(e.target.value);
                }} />
                
            <button onClick={agregarTarea} className="agregar-tarea">Agregar</button>
        </div>
    )
}