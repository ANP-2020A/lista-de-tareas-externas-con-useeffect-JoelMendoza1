import React, {useState} from "react";
import Spiner from "./Spiner";
const TodoList =({list,setList})=>{


    const handleAddTask = () => {
        const title = document.querySelector( '#task' ).value;
        setList( prevState => [
            ...prevState, {
                title,
                completed: false
            }
        ] );
        document.querySelector( '#task' ).value = '';
    };

    const handleDeleteTask = ( index ) => {
        setList( ( prevState ) => {
        return prevState.filter( ( task, i ) => i !== index );
        } );
    };

    const handleCompleteTask = ( index ) => {
        setList( ( prevState ) => {
            const listUpdated = [ ...prevState ];
            listUpdated[ index ].completed = true;
            return listUpdated;
    } );
    };

    return(
    <dev>

        <div>
            <label htmlFor='task'>Tarea</label>
            <input type='text' id='task' />

            <button onClick={ handleAddTask }>Agregar tarea</button>
        </div>

        <h1>Lista de tareas ({ list.length } en total)</h1>
        <table>
            <thead>
            <tr>
                <th>Nombre</th>
                <th>Estado</th>
                <th>Eliminar</th>
            </tr>
            </thead>
            <tbody>
            {
                list.map( ( task, index ) => (
                        <tr key={ index }>
                            <td>{ task.title }</td>
                            <td className={ task.completed
                                ? 'task-completed'
                                : 'task-pending' }>
                                {
                                    task.completed
                                        ? 'Completada'
                                        : <button onClick={ () => handleCompleteTask( index ) }>Marcar como completada</button>
                                }
                            </td>
                            <td>
                                <button onClick={ () => handleDeleteTask( index ) }>Eliminar</button>
                            </td>
                        </tr>
                    )
                )
            }
            </tbody>
        </table>
    </dev>
    );
};
export default TodoList;