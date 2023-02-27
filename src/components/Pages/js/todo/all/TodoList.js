import React, { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import axios from "../../../../../api/axios";
import TodoListItem from "../../../../TodoListItem";
import { Navigate } from "react-router-dom";
import useAuth from "../../../../../hooks/useAuth";

function TodoList() {
    const [data, setData] = useState();
    const { auth } = useAuth();

    const refreshTodo = () => {
        axios.get(`/user/todo?token=${auth.accessToken}`, {
            headers: { Authorization: `Bearer ${auth.accessToken}` }
        })
            .then((result) => {
                setData(result.data);
                console.log(result.data);
            })
            .catch((err) => {
                console.log(err.response.data.detail)
            })
    }

    useEffect(() => {
        if (auth.accessToken) {
            refreshTodo()
        }
    }, [])

    //figure out what todo with done Todos
    //Where should you show the importance ? => Code importance as strings with meaning ?!
    //SORT LIST FOR IMPORTANCE / DUE-TO
    return (
        <div>
            {auth.accessToken ? (
                <>
                    <h1>TODOLIST</h1>
                    <div>
                        <ul className="list-group">
                            {data ? data.map((todo) => {
                                return (
                                    <TodoListItem key={todo.id} name={todo.name} dueTo={todo.dueTo} description={todo.description} importance={todo.importance} id={todo.id} />
                                )
                            }) :
                                <h1>This user didnt create any todos yet</h1>
                            }
                        </ul>
                    </div>
                </>
            ) : (
                <Navigate to="/accounts/login" />
            )}
        </div>
    )
}

export default TodoList
