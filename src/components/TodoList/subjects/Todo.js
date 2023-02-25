import Subject from "./Subject.js";

class Todo extends Subject{
    constructor(iName, iDueTo, iCompleted, iDescription, iImportance){
        super();
        if (iName === "" || iName == null) {
            throw new Error("Name cannot be empty")
        }
        if (iCompleted !== false || iCompleted !== true) {
            throw new Error("Complete has wrong inputtype")
        }
        if (iDueTo === "" ||iDueTo == null) {
            throw new Error("Due date cannot be empty")
        }
        if (iImportance === "" || iImportance == null) {
            throw new Error("Importance cannot be empty")
        }

        this._Name = iName;
        this._Description = iDescription;
        this._Completed = iCompleted;
        this._DueTo = iDueTo;
        this._Importance = iImportance;   
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
        // this._DueTo
        
        let dueTo = this._DueTo.split("-")//erst Jahr - dann monat - dann tag
        let year = dueTo[0];
        let month = dueTo[1];
        let day = dueTo[2];
         
        var dateTimeFormat =`"${year}-${month}-${day}T00:00:00.000"`
        var str = `{ "name": "${this._Name}",  "dueTo": ${dateTimeFormat}, "completed": ${this._Completed}, "description": "${this._Description}", "importance": ${this._Importance}}`;
        return JSON.parse(str)
    }
}
export default Todo