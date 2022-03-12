class Stack{
    constructor(size){
        this.top = -1;
        this.size = size;
        this.arr = [];
    }

    push(ele){
        if(this.top == this.size-1) return console.error("Stack Overflow");
        this.arr[++this.top] = ele;
    }

    pop(){
        if(this.top == -1) return console.error("Stack Underflow");
        return this.arr[this.top--];
    }

    display(){
        for(let i=this.top; i>=0; i--){
            console.log(this.arr[i]);
        }
    }
}

class Queue{
    constructor(size){
        this.size = size;
        this.s1 = new Stack(size);
        this.s2 = new Stack(size);
    }

    enqueue(ele){
        this.s1.push(ele);
    }

    dequeue(){
        let x = this.s1.pop()
        while(x){
            this.s2.push(x);
            x = this.s1.pop();
        }
        const returnEle = this.s2.pop();
        let y = this.s2.pop();
        while(y){
            this.s1.push(y);
            y = this.s2.pop();
        }

        return returnEle;
    }

}


const queue = new Queue(100);

queue.enqueue(100);
queue.enqueue(200);
queue.enqueue(300);
queue.enqueue(400);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
queue.enqueue(400);
queue.enqueue(300);
queue.enqueue(200);
console.log(queue.dequeue());




