import { Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';

import Todo from "../../../../TodoList/subjects/Todo";
import URL from '../../../../../URL';

function AddTodo() {

    const addTodo = () => {
        let todo_name = document.getElementById("i_name").value;
        let todo_dueTo = document.getElementById("i_dueTo").value;
        let todo_completed = document.getElementById("i_completed").checked;
        let todo_description = document.getElementById("i_description").value;
        let todo_importance = document.getElementById("i_importance").value;

        var todo = new Todo(todo_name, todo_dueTo, todo_completed, todo_description, todo_importance)
        
        console.log(todo_completed)

        axios.post(URL + "/", todo.toJSON())
            .then((response) => { /*console.log("done")*/})
            .catch((err) => (alert(err)))

        document.getElementById("i_name").value = null;
        document.getElementById("i_dueTo").value = null;
        document.getElementById("i_completed").value = null;
        document.getElementById("i_description").value = null;
        document.getElementById("i_importance").value = null;
    }

    return(
        <div>
            <h2>ADD TODO</h2>
            <form>
                <div className="form-group row">
                    <label htmlFor="i_name" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input className="form-control form-control-lg" id="i_name" type="text" placeholder="My New Todo"></input>
                    </div>
                </div>

                <br />

                <div className="form-group row">
                    <label htmlFor="i_dueTo" className="col-sm-2 col-form-label">DueTo</label>
                    <div className="col-sm-10">
                        <input type="date" id="i_dueTo" name="dueTo" />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="i_completed" className="col-sm-2 col-form-label">Completed</label>
                    <div className="col-sm-10">
                        <input type="checkbox" className="form-check-input" id="i_completed"  />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="i_importance" className="col-sm-2 col-form-label">Importance (0-5)</label>
                    <div className="col-sm-10">
                        <select className="form-control" id="i_importance">
                            <option>0</option>
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
                        <textarea className="form-control" id="i_description" rows="2"></textarea>
                    </div>
                </div>
            </form>
            <Button onClick={addTodo}>ADD TO LIST</Button>
        </div>
    )
}

export default AddTodo