import { Input } from './componentes/Input'
import { Tarea } from './componentes/Tarea'
import { useState } from 'react'
import './App.css'

function App() {
  const [texto, setTexto] = useState('');
  const [lista, setLista] = useState([]);

  const agregarTarea = () => {
    if (texto.trim() === '') return alert('Ingrese una tarea');
    const nuevaTarea = {
      id: Date.now(),
      texto: texto,
      completada: false
    }
    setLista([...lista, nuevaTarea]);
    setTexto('');
  }

  const tareaCompletada = (id) => {
    const tareasActualizadas = lista.map((tarea) => {
      if (tarea.id === id) {
        return { ...tarea, completada: !tarea.completada }
      }
      return tarea;
    })
    setLista(tareasActualizadas);
  }
  const eliminarTarea = (id) => {
    const tareasActualizadas = lista.filter((tarea) => tarea.id !== id);
    setLista(tareasActualizadas);
  }


  return (
    <div className='contenedor-principal'>
      <h1>Lista de tareas</h1>
      <Input texto={texto}
        setTexto={setTexto} agregarTarea={agregarTarea} />
      {lista.map((tarea) => <Tarea key={tarea.id} tarea={tarea} tareaCompletada={tareaCompletada}
        eliminarTarea = {eliminarTarea} />)}
    </div>
  )
}

export default App
