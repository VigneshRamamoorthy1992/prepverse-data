/*
    binary search tree
    insert
    find
    delete
    find successor
    BFS
    DFS - inorder, pre-order, post-order
*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    }

    let current = this.root;

    while (current) {
      if (current.value === value) {
        console.log("bst ", JSON.stringify(this.root));
        return undefined;
      }
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
        }
        current = current.left;
      } else if (value > current.value) {
        if (current.right === null) {
          current.right = newNode;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    if (!this.root) {
      return false;
    }

    let current = this.root;

    while (current) {
      if (value === current.value) {
        return true;
      } else if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      }
    }
    return false;
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
    console.log("D1: ", JSON.stringify(this.root));
  }

  deleteNode(current, value) {
    console.log("delete current: ", current, " : ", value);
    if (current === null) {
      return current;
    }

    // when value is found
    if (current.value === value) {
      if (current.left === null && current.right === null) {
        // node to delete does not have child
        return null;
      } else if (current.left === null) {
        // node to delete does not have left child
        return current.right;
      } else if (current.right === null) {
        // node to delete does not have right child
        return current.left;
      } else {
        // find the successor
        // minimum of the right node
        const successor = this.findSuccessor(current.right);
        console.log("successor: ", successor);
        // replace the source node
        current.value = successor.value;
        // delete the successor
        current.right = this.deleteNode(current.right, successor.value);
        return current;
      }
    } else if (value < current.value) {
      current.left = this.deleteNode(current.left, value);
      return current;
    } else if (value > current.value) {
      current.right = this.deleteNode(current.right, value);
      return current;
    }
  }

  findSuccessor(current) {
    while (!!current.left) {
      current = current.left;
    }
    return current;
  }

  breadthFirstTraversal(bst = this.root) {
    console.log("--------------------------------------");
    console.log("bst : ", JSON.stringify(bst));
    if (bst === null) {
      return null;
    }

    const queue = [bst];
    while (queue.length > 0) {
      let node = queue.shift();
      console.log(node.value);
      if (node.left === null && node.right === null) {
        continue;
      }
      if (!!node.left) {
        queue.push(node.left);
      }
      if (!!node.right) {
        queue.push(node.right);
      }
    }
  }

  depthFirstSearchInOrderTraversal(bst = this.root) {
    if (bst !== null) {
      this.depthFirstSearchInOrderTraversal(bst.left);
      console.log(bst.value);
      this.depthFirstSearchInOrderTraversal(bst.right);
    }

    // another solution
    if (!root) return [];
    return [
      ...inorderTraversal(root.left),
      root.val,
      ...inorderTraversal(root.right),
    ];

    // iterative solution
    /**
     * Definition for a binary tree node.
     * function TreeNode(val) {
     *     this.val = val;
     *     this.left = this.right = null;
     * }
     */
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    var inorderTraversal = function (root) {
      const output = [];

      if (root === null) {
        return output;
      }

      /**
       * The goal is to maintain a stack of nodes to visit as we traverse
       * down the tree. As we traverse down, We go left and push all the
       * left nodes first in the stack. Once we reach to the bottom, we
       * store the node value and traverse right.
       *           1
       *         /   \
       *        2     3    inorder traversal: 4 -> 2 -> 5 -> 1 -> 6 -> 3
       *       / \   /     (left -> root -> right)
       *      4   5 6
       */
      const stack = [];
      let curr = root;

      while (curr !== null || stack.length !== 0) {
        if (curr !== null) {
          stack.push(curr);
          curr = curr.left;
        } else {
          curr = stack.pop();
          output.push(curr.val);
          curr = curr.right;
        }
      }

      return output;
    };
  }

  depthFirstSearchPreOrderTraversal(bst = this.root) {
    if (bst !== null) {
      console.log(bst.value);
      this.depthFirstSearchPreOrderTraversal(bst.left);
      this.depthFirstSearchPreOrderTraversal(bst.right);
    }
  }

  preorderTraversal = function (root) {
    if (!root) return [];
    let stack = [root];
    let output = [];

    while (stack.length) {
      root = stack.pop();
      if (root !== null) {
        output.push(root.val);
        if (root.right !== null) stack.push(root.right);
        if (root.left !== null) stack.push(root.left);
      }
    }

    return output;
  };

  depthFirstSearchPostOrderTraversal(bst = this.root) {
    if (bst !== null) {
      this.depthFirstSearchPostOrderTraversal(bst.left);
      this.depthFirstSearchPostOrderTraversal(bst.right);
      console.log(bst.value);
    }
  }

  postorderTraversal = function (root) {
    return recursive(root);
  };

  recursive = (node) => {
    let output = [];
    let stack = [];
    let lastNodeVisited = null;
    while (stack.length || node !== null) {
      if (node !== null) {
        stack.push(node);
        node = node.left;
      } else {
        let peekNode = stack[stack.length - 1];
        if (peekNode.right !== null && peekNode.right !== lastNodeVisited) {
          node = peekNode.right;
        } else {
          output.push(peekNode.val);
          lastNodeVisited = stack.pop();
        }
      }
    }
    return output;
  };

  validBST() {
    return this.validBSTUtil(this.root);
  }

  // Time complexity O(n)
  // Space complexity O(n)
  validBSTUtil(node, min, max) {
    // null node is a bst
    if (node === null) {
      return true;
    }

    if (node.value <= min || node.value >= max) {
      return false;
    }
    return (
      this.validBSTUtil(node.left, min, node.value) &&
      this.validBSTUtil(node.right, node.value, max)
    );
  }
  // VAILD BST using inOrder to sort asc then validate
  isValidBST = function (root) {
    function inOrder(node) {
      if (!node) return [];
      return [...inOrder(node.left), node.val, ...inOrder(node.right)];
    }

    const sortedArr = inOrder(root);

    for (let i = 0; i < sortedArr.length; i++) {
      if (sortedArr[i + 1] <= sortedArr[i]) return false;
    }
    return true;
  };
}

const bst = new BinarySearchTree();

console.log(">>>>>>>>>>>>>>>>> Insert");
bst.insert(10);
bst.insert(8);
bst.insert(19);
bst.insert(7);
bst.insert(18);
bst.insert(21);
bst.insert(17);
bst.insert(20);
bst.insert(25);

console.log(">>>>>>>>>>>>>>>>> Find");

console.log("find1: 21: ", bst.find(21));
console.log("find2: 11: ", bst.find(11));

console.log(">>>>>>>>>>>>>>>>> delete");
// bst.delete(7); // no child node
// bst.delete(18); // one child node
bst.delete(21); // with child node

//Traversal
// BFS
// console.log(">>>>>>>>>>>>>>>>> BFS");
// bst.breadthFirstTraversal();
// DFS
console.log(">>>>>>>>>>>>>>>>> in-order traversal");
bst.depthFirstSearchInOrderTraversal();
// console.log(">>>>>>>>>>>>>>>>> pre-order traversal");
// bst.depthFirstSearchPreOrderTraversal();
// console.log(">>>>>>>>>>>>>>>>> post-order traversal");
// bst.depthFirstSearchInOrderTraversal()

//Verification
// greedy algorithm
console.log("valid BST >> ", bst.validBST());
// Sort
// Priority queue operations
