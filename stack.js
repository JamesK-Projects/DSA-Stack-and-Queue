const _Node = require('./_node');

// #1 Create the Stack class

class Stack {
    constructor(){
        this.top = null;
    }

    push(data){
        if(this.top === null){
            this.top = new _Node(data, null);
            return this.top;
        }
        const node = new _Node(data, this.top);
        this.top = node;
    }

    pop(){
        const node = this.top;
        this.top = node.next;
        return node.data;
    }

    
}

module.exports = Stack;

const starTrek = new Stack
starTrek.push('Kirk');
starTrek.push('Spock');
starTrek.push('McCoy');
starTrek.push('Scotty');

starTrek.pop();
starTrek.pop();


// #2 Useful methods for a stack

function peek(stackName){
    return stackName.top.data;
}

function isEmpty(stackName){
    if(stackName.top){
        return true;
    }
    else return false;
}

function display(stackName){
    let stackContents = []
    let thisNode = stackName.top;
    while(thisNode !== null){
        stackContents.push(thisNode.data);
        thisNode = thisNode.next;
    }
    return stackContents;
}

//console.log(display(starTrek));


// #3 Check for palindromes using a stack

function is_palindrome(s) {
    str = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    let reverseStr = ''
    for(let i = 0; i < str.length; i++){
        reverseStr = str[i] + reverseStr;
    }
    if(str === reverseStr){
        return `'${s}' is a palindrome!`
    }
    else {
        return `'${s}' is not a palindrome :(`
    }
}
//console.log(is_palindrome("1001"))


// #4 Matching parentheses in an expression ** Need Help

function matchingParentheses(exp) {
    const expStack = new Stack;
    //let location = 0;
    for(let i = 0; i < exp.length; i++){
        
    }

}


// #5 Sort Stack ** Need help

function sort(stack){
    let stackLength = 0;
    let sortedLength = 0;
    let thisNode = stack.top;
    const sortedStack = new Stack;
    while(stackLength !== sortedLength){
        let bigNum = stack.top.data
        if(thisNode.next.data > thisNode.data){
            bigNum = thisNode.next.data
            thisNode = thisNode.next;
        }
    }
}

