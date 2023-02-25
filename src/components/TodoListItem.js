import React, {useState} from 'react'
import TodoDetails from './TodoDetails'

const TodoListItem = (props) => {
    const [showDetails, setShowDetails] = useState(false);

    const backgroundToGray = (e) => {
        e.target.style.background = "lightgray";
    }
    const backgroundToWhite = (e) => {
        e.target.style.background = "white";
    }

    const toggleDetails = () => {
        showDetails ? setShowDetails(false) : setShowDetails(true);
    }

    return (
        <li className="list-group-item" onClick={toggleDetails} onMouseEnter={backgroundToGray} onMouseLeave={backgroundToWhite}>
            {showDetails ? 
                (<>
                    <b>{props.name}</b>
                    <TodoDetails dueTo={props.dueTo} description={props.description} importance={props.importance} />
                 </>): 
                <p>{props.name}</p>
            }
    </li>

  )
}

export default TodoListItem