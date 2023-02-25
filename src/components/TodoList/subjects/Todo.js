import Subject from "./Subject.js";

class Todo extends Subject{
    constructor(Name, DueTo, Completed, Description, Importance){
        super();
        this._Name = Name;
        this._Description = Description;
        this._Completed = Completed;
        
        this._DueTo = DueTo;
        this._Importance = Importance;
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
        var str = `{ "name": "${this._Name ? this._Name : "default"}",  "dueTo": ${this._DueTo ? this._DueTo : 0}, "completed": ${this._Completed === "on" ? false : true}, "description": "${this._Description ? this._Description : "default"}", "importance": ${this._Importance ? this._Importance : 0}}`;
        return JSON.parse(str)
    }
}
export default Todo