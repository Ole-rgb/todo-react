import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

import Todo from "../../../../TodoList/subjects/Todo";
import axios from '../../../../../api/axios';

function AddTodo(props) {
    const [name, setName] = useState("")
    const [complete, setComplete] = useState(false)
    const [importance, setImportance] = useState(0)
    const [description, setDescription] = useState("")
    const [dueTo, setDueTo] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault(); //prevent default behaviour of the form (that would reload the page)

        //add a todo to a user
        axios.post(`/users/${props.user_id}/todo/`, new Todo(name, dueTo, complete, description, importance).toJSON())
            .then((response) => {/* display a little sign that it was added*/})
            .catch((err) => console.log(err)/* display a little sign that it wasn't added*/)

        //TODO think about: When should you reset the fields
        setDueTo("")
        setName("")
        setComplete(false)
        setImportance(0)
        setDescription("")
    }

    return(
        <div>
            <h2>ADD TODO</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group row">
                    <label htmlFor="i_name" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input 
                            id="i_name" 
                            className="form-control form-control-lg" 
                            type="text" 
                            onChange={(e) => setName(e.target.value)} 
                            value={name}
                            placeholder="My New Todo"
                            required
                        />
                    </div>
                </div>
                <br />
                <div className="form-group row">
                    <label htmlFor="i_dueTo" className="col-sm-2 col-form-label">DueTo</label>
                    <div className="col-sm-10">
                        <input 
                            id="i_dueTo" 
                            type="date" 
                            name="dueTo" 
                            required 
                            onChange={(e) => setDueTo(e.target.value)}
                            value={dueTo}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="i_completed" className="col-sm-2 col-form-label">Completed</label>
                    <div className="col-sm-10">
                        <input 
                            id="i_completed" 
                            type="checkbox" 
                            className="form-check-input" 
                            onChange={(e) => setComplete(e.target.checked)}
                            checked={complete}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="i_importance" className="col-sm-2 col-form-label">Importance (0-5)</label>
                    <div className="col-sm-10">
                        <select 
                            className="form-control" 
                            id="i_importance" 
                            onChange={(e) => setImportance(e.target.value)}
                            value={importance}
                            required                            
                        >
                            <option defaultChecked>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                </div>

                <br />

                <div className="form-group row">
                    <label htmlFor="i_description" className="col-sm-2 col-form-label">Describe your TODO</label>
                    <div className="col-sm-10">
                        <textarea 
                            className="form-control" 
                            id="i_description" 
                            rows="2" 
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                        />
                    </div>
                </div>
                <button className='button'>ADD TO LIST</button>
            </form>
        </div>
    )
}

export default AddTodo