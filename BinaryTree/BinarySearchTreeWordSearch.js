const fs = require('fs');

class Node{
    constructor(word){
        this.word = word;
        this.children = [];
    }
}

class BinaryTree{
    constructor(rootWord){
        this.root = new Node(rootWord);
    }
}

function getParentNode(tree, word){
    ptr = tree.root;
    prev = tree.root;
    while (ptr!=null){
        prev = ptr;
        ptr = ptr.children[0];
    }
}

function createBinaryTree(){
    const alpabets ='a b c d e f g h i j k l m n o p q r s t u v w x y z'.split(' ');
    const trees = {}
    alpabets.forEach(x=>trees[x]=new BinaryTree(x));

    fs.readFile('words.txt', 'utf8', function(err, data) {
        data.split('\n').forEach(x=>{
            const tree = trees[x[0]];
            
        })
      });

}

function main(){
    createBinaryTree();
}

main();