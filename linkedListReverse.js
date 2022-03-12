
class Node {
    constructor(data){
        this.data = data;
        this.link=null;
    }
}



const createLinkedList = (arr, node) => {
    for(let i=0; i<arr.length; i++){
        const newNode = new Node(arr[i]);
        node.link = newNode;
        node = newNode;
    }
}

const printLinkedList = (node) => {
    let ptr = node.link;
    while(ptr!=null){
        console.log(`node data = ${ptr.data}`);
        ptr = ptr.link;
    }
}

const reverse = (node) =>{
    if(!node.link.link){
        return node; 
    }
    let head = node.link;
    let first = node.link;
    let second = first.link;
    while(second){
        const temp = second.link;
        second.link = first;
        first = second;
        second = temp;
    }
    node.link = first;
    console.log(head);
    head.link = null;
}
   


function main(){
    const node = new Node();
    createLinkedList([1,2,3,4,5,6,7,8,9,0], node);
    printLinkedList(node);
    reverse(node);
    console.log("Reversed = ");
    printLinkedList(node);
}

main();