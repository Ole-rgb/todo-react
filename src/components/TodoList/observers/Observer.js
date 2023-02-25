class Observer {
    constructor(){
        this._stateOfSubject = null;
    }
    getState() {
        return this._stateOfSubject;
    }

    // update(subject){};
    // getStateOfSubject(){};
}

export default Observer
