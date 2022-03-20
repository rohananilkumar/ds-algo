class Node{
    constructor(value){
        this.data = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(value){
        if(!this.root) this.root = new Node(value);
        else{
            const node = this.getParentRecur(value, this.root);
            if(!node) console.error("Item already present");
            else{
                if(node.data>value) node.left = new Node(value);
                else if(node.data<value) node.right = new Node(value);
            }
        }
    }

    getParentRecur(value, node){
        if(node.data>value){
            if(node.left){
                return this.getParentRecur(value, node.left);
            } else {
                return node;
            }
        } else if(node.data<value){
            if(node.right){
                return this.getParentRecur(value, node.right);
            } else {
                return node;
            }
        } else {
            return null;
        }
    }

    getRecur(value, node){
        console.log([value, node])
        if(!node) return null;
        if(node.data === value) return node;
        else if(node.data>value) return this.getRecur(value, node.left);
        else if(node.data<value) return this.getRecur(value, node.right);
    }

    lookup(value){
       return this.getRecur(value, this.root);
    }
}
const tree = new BinarySearchTree();

tree.insert(10);
tree.insert(20);
tree.insert(3);
tree.insert(21);
tree.insert(17);
console.log(tree.lookup(20))