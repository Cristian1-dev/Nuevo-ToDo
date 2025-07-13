import '../estilos/Input.css';
export const Input = ({texto, setTexto, agregarTarea}) => {
    return (
        <div className="contenedor-input">
            <input className ='entradaTexto'type="text" value={texto} placeholder="Ingrese una tarea"
                onChange={(e) => { setTexto(e.target.value);
                }} />
                
            <button onClick={agregarTarea} className="agregar-tarea">Agregar</button>
        </div>
    )
}