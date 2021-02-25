const Stack = require('./stack');

class _Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
    }

    enqueue(data){
        const node = new _Node(data);
        if(this.first === null){
            this.first = node;
        }
        if(this.last){
            node.previous = this.last;
            this.last.next = node;
        }
        this.last = node;
    }

    dequeue(){
        if(this.first === null){
            return;
        }
        const node = this.first;
        this.first = this.first.next;
        if(node === this.last){
            this.last = null;
        }
        return node.value;
    }
}

// #6 Create a queue using a singly linked list

const starTrekQ = new Queue;
starTrekQ.enqueue('Kirk');
starTrekQ.enqueue('Spock');
starTrekQ.enqueue('Uhura');
starTrekQ.enqueue('Sulu');
starTrekQ.enqueue('Checkov');

function peek(queue){
    return queue.first.value;
}

function isEmpty(queue){
    if(queue.first === null){
        return true;
    }
    else return false;
}

function display(queue){
    let queueContents = []
    let thisNode = queue.first;
    while(thisNode !== null){
        queueContents.push(thisNode.value)
        thisNode = thisNode.next;
    }
    return queueContents;
}

starTrekQ.dequeue();
starTrekQ.dequeue();

//console.log((starTrekQ))


// #7 Create a queue using a doubly linked list
// Added 'this.previous' to _Node constructor and 'node.previous = this.last' in enqueue


// #8 Queue implementation using a stack
let stack1 = new Stack();
let stack2 = new Stack();

class QueueWithStacks {
    constructor(){
        this.first = null;
        this.last = null;
    }
    
    enqueue(data){
        stack1.push(data)
    }

    dequeue(data){
        if(stack2.length === 0){
            if(stack1.length === 0){
                return 'queue is empty'
            }
            while(stack1.length > 0){
                let p = stack1.pop();
                stack2.push(p)
            }
        }
        return stack2.pop()
    }
}


// #9 Square Dance Pairing
const q = new Queue();
q.enqueue('F Jane')
q.enqueue('M Frank')
q.enqueue('M John')
q.enqueue('M Sherlock')
q.enqueue('F Madonna')
q.enqueue('M David')
q.enqueue('M Christopher')
q.enqueue('F Beyonce')

function squareDance(q){
    let dancePairs = [];
    const mQ = new Queue();
    const fQ = new Queue();
    let currNode = q.first;

    while(currNode !== null){
        if(currNode.value[0] === 'M'){
            mQ.enqueue(currNode.value) 
        }
        if(currNode.value[0] === 'F'){
            fQ.enqueue(currNode.value)  
        }
        currNode = currNode.next;
    }
    
    while(mQ.first !== null && fQ.first !== null){
        dancePairs.push(`${mQ.first.value.slice(2)} + ${fQ.first.value.slice(2)}`)
        mQ.dequeue();
        fQ.dequeue();
    }
    
    return dancePairs;
}

//console.log(squareDance(q))


// #10 Ophidian bank