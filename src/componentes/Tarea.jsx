import '../estilos/Tarea.css';

export const Tarea = ({tarea, tareaCompletada, eliminarTarea}) => {
    return (
        <div className={tarea.completada? "cambioColor":"contenedor-tarea"}>
            <p className={tarea.completada?"completado": ""}>{tarea.texto}</p>
            <div className="contenedor-botones">
                <button onClick={() => tareaCompletada(tarea.id)} className="realizado">H</button>
                <button className="eliminar" onClick={()=> eliminarTarea(tarea.id)} >D</button>
            </div>
        </div>
    )
}