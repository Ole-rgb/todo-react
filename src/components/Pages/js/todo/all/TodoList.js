import React, {useState, useEffect} from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import axios from "../../../../../api/axios";
import TodoListItem from "../../../../TodoListItem";

function TodoList(props) {    
    const [data, setData] = useState();

    
    const refreshTodo = () =>{
        axios.get(`/users/${props.user_id}`)
            .then((result) => {
                setData(result.data.todos);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        refreshTodo()
    }, [])


    //TODO figure out what todo with done Todos
    //Where should you show the importance ? => Code importance as strings with meaning ?!
    //SORT LIST FOR IMPORTANCE / DUE-TO
    return (
        <div>
            <h1>TODOLIST</h1>
            <div> 
                <ul className="list-group">
                    {data ? data.map((todo) => {
                        return(
                            <TodoListItem key={todo.id} name={todo.name} dueTo={todo.dueTo} description={todo.description} importance={todo.importance} id={todo.id}/>
                        )
                    }): null}
                </ul>  
            </div>
        </div>
    )
}

export default TodoList
