import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

const TodoDetails = (props) => {
    return(
        <form>
            <div className="form-group row">
                <label htmlFor="dueTo_form" className="col-sm-2 col-form-label">DueTo:</label>
                <div className="col-sm-10">
                    <strong className="form-control form-control-lg" id="dueTo_form">{props.dueTo}</strong>
                </div>
            </div>            
            <div className="form-group row">
                <label htmlFor="description_form" className="col-sm-2 col-form-label">Description:</label>
                <div className="col-sm-10">
                    <strong className="form-control form-control-lg" id="description_form">{props.description}</strong>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="importance_form" className="col-sm-2 col-form-label">Importance:</label>
                <div className="col-sm-10">
                    <strong className="form-control form-control-lg" id="importance_form">{props.importance}</strong>
                </div>
            </div>

        </form>

    )
} 

export default TodoDetails