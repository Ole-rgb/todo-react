import Observer from "./Observer.js"

class DateObserver extends Observer {
    // constructor(){
    //     super();
    // }

    update(subject) {
        super._stateOfSubject = subject.getDate();
    }

    getStateOfSubject() {
        return this.getState();
    }
}

export default DateObserver