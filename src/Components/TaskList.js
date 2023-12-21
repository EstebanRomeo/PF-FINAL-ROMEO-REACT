import {useState, useEffect} from 'react'

const TaskList = () => {
  
    const [tasks, setTaks] = useState([]);
    const [filter, setFilter] = useState('all');

   useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response)=>{
        if(!response.ok){
            throw new Error('Error al cargar una tarea');
        }
        return response.json();
    })
    .then((data) =>{
        const filteredTasks = data.filter((t) =>{
            if(filter === 'all'){
                return true;
            }
            return filter === 'completed' ? t.completed : !t.completed
        });
        setTaks(filteredTasks);
    })
    .catch((error)=>{
        console.error('Error:', error);
    })
   }, [filter]);

  return (
    <div>
      <h2>Lista de tareas ({filter})</h2>
      <div>
       <button onClick={()=> setFilter('all')}> Todas las tareas</button>
       <button onClick={()=> setFilter('pendig')}> pendientes</button>
       <button onClick={()=> setFilter('completed')}> completadas</button>
      </div>
     <ul>
        { tasks.map(task => (
            <li key={task.id}>
                {task.title} - {task.completed ? 'Completada' : 'Pendiente'}
            </li>
        ))}
     </ul>

    </div>
  )
}

export default TaskList
