import Subject from "./Subject.js";

class Todo extends Subject{
    constructor(name, dueTo, completed, description, importance){
        super();
        this._Name = name;
        this._DueTo = dueTo;
        this._Completed = completed;
        this._Description = description;
        this._Importance = importance;   
    }

    setDue(DueTo){
        this._DueTo = DueTo;
        this.notify();
    }

    setCompleted(completed){
        this._Completed = completed;
        this.notify();
    }

    getDate(){
        return this._DueTo;
    }
    getCompleted(){
        return this._Completed;
    }

    toJSON(){
        //create the datetime.datetime python format
        let dueTo = this._DueTo.split("-")
        let year = dueTo[0];
        let month = dueTo[1];
        let day = dueTo[2];
        var dateTimeFormat =`${year}-${month}-${day}T00:00:00.000`

        return ({
            "name": this._Name,
            "dueTo": dateTimeFormat,
            "completed": this._Completed,
            "description": this._Description,
            "importance": this._Importance
        })

    }
}
export default Todo