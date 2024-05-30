// function validBraces(braces){
//   const BRACKETS_PAIR = {
//     ')': '(',
//     ']': '[',
//     '}': '{',
//   }
//   const BRACKETS_OPEN = ['(', '[', '{'];
//   let stack = [];
//   for (let i = 0; i < braces.length; i++) {
//     let currentSymbol = braces[i];
//     if (BRACKETS_OPEN.includes(currentSymbol)) {
//       stack.push(currentSymbol)
//     } else {
//       if (stack.length === 0) {
//         return false;
//       }
//       let topElement = stack[stack.length - 1];
//       if (BRACKETS_PAIR[currentSymbol] === topElement) {
//         stack.pop();
//       } else {
//         return false;
//       }
//     }
//   }
//   return stack.length === 0; 
// }


// console.log(validBraces("([{}])"));


// class Node {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class binarTree {
//     constructor() {
//         this.root = null;
//     }

//     add(value) {
//         let newNode = new Node(value);
//         if (!this.root) {
//             this.root = newNode;
//             return;
//         }

//         let currentNode = this.root;
//         while (currentNode) {
//             if (newNode.value < currentNode.value) {
//                 if (!currentNode.left) {
//                     currentNode.left = newNode;
//                     return;
//                 }

//                 currentNode = currentNode.left;
//             } else {
//                 if (!currentNode.right) {
//                     currentNode.right = newNode;
//                     return;
//                 }

//                 currentNode = currentNode.right;
//             }
//         }
//     }
// }

// const myTree = new binarTree;
// myTree.add(8);
// myTree.add(6);
// myTree.add(12);
// myTree.add(3);
// myTree.add(22);
// myTree.add(6);
// myTree.add(1);

// console.log(myTree)


class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class binarTree {
    constructor() {
        this.root = null;
    }

    add(value) {
        let newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }

        let currentNode = this.root;
        while (currentNode) {
            if (newNode.value < currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = newNode;
                    return;
                }
                currentNode = currentNode.left;

            } else {
                if (!currentNode.right) {
                    currentNode.right = newNode;
                    return;
                }
                currentNode = currentNode.right;
            }
        }
    }
}

let newTree = new binarTree;
newTree.add(8);
newTree.add(6);
newTree.add(12);
newTree.add(3);
console.log(newTree)