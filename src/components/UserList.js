import React, {useEffect, useState} from "react";
import TodoList from "./TodoList";
import Spiner from "./Spiner";
const UserList=()=>{
    const [ userId, setUserId ] = useState( 1 );
    const [ userData, setUserData ] = useState( null );
    const [ list, setList ] = useState( [] );
    useEffect( () => {
        const getUser = async () => {
            const data = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
            const jsonUser = await data.json();
            console.log('user', jsonUser);

            setUserData(jsonUser);
        };
        getUser();

        const getList = async () => {
            const data = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`);
            const jsonList = await data.json();
            console.log('list', jsonList);

            setList(jsonList);
        };
        getList();
    },[userId]);


        const handlePrevUser = () => {
            setUserId( userId - 1 );
        };

        const handleNextUser = () => {
            setUserId( userId + 1 );
        };

    return(
        <dev>

                {
                    userId > 1 &&
                    <button onClick={ handlePrevUser }>Anterior usuario</button>
                }
                {
                    userId < 10 &&
                    <button onClick={ handleNextUser }>Siguiente usuario</button>
                }
                {
                    userData
                        ?
                        <>
                            <h1>Información del usuario</h1>
                            <ul>
                                <li><strong>Nombre: </strong> { userData.name }</li>
                                <li><strong>Usuario: </strong> { userData.username }</li>
                                <li><strong>Email: </strong> { userData.email }</li>
                                <li><strong>Web: </strong> { userData.website }</li>
                                <li><strong>Teléfono: </strong> { userData.phone }</li>
                            </ul>
                        </>
                        : <Spiner/>
                }


            <TodoList list={list} setList={setList}/>



        </dev>
    );
};
export default UserList;