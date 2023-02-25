import DateObserver from "./observers/DateObserver.js";
import CompletedObserver from "./observers/CompletedObserver.js"
import Todo from "./subjects/Todo.js";
import axios from "axios";

import URL from "../../URL.js";

function main() {
    const concSub = new Todo();
    const observeDueTo = new DateObserver();
    const observeDone = new CompletedObserver();
    
    concSub.attach(observeDueTo);
    concSub.attach(observeDone);
    concSub.setDue(new Date("2/1/22"));
    
    concSub.notify();
    
    console.log(observeDueTo.getStateOfSubject());
    console.log(observeDone.getStateOfSubject());    
}

axios.get(URL + "/")
    .then((response) => {handleGetResult( response.data)})
    .catch((err) => (console.log(err)))

function handleGetResult(data) {
    //console.log(data[1])
    console.log(data)
} 
function handleResult(data) {
    console.log(data)
}

var json = '{"name": "Todo1", "dueTo": 0,"completed": true, "description": "string","importance": 2}' 
var todo = JSON.parse(json)
//console.log(todo.name)

axios.post(URL + "/", todo)
    .then((response) => {handleResult(response.data)})
    .catch((err) => (console.log(err)))

main()


