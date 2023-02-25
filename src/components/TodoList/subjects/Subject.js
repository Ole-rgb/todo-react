class Subject{
    constructor(){
        this._observerList = [];
    }

    attach(observer){
        this._observerList.push(observer);
        this.notify(); //Test if its good or not
    };

    detach(observer){
        //TODO
    };

    notify(){
        this._observerList.forEach(observer => {
            observer.update(this)
        });
    };
}
export default Subject