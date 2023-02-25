import Observer from "./Observer.js";

class CompletedObserver extends Observer{
    // constructor(){
    //     super()
    // }

    update(subject) {
        super._stateOfSubject = subject.getCompleted()
    }
    
    getStateOfSubject() {
        return this.getState()
    }
}
export default CompletedObserver