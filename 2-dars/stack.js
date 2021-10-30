class Stack{
    constructor(){
        this.count = 0;
        this.stack = []
    }
    push(value){
        this.stack[this.count] = value;
        this.count++;
        return this.stack;

    }
    pop(){
        let poppedElement =  this.stack[this.count-1]
        delete this.stack[this.count-1]
        return poppedElement
    }
    peek(){
        return this.count;
    }

}

let arr = new Stack();
arr.push(1)
console.log(arr)