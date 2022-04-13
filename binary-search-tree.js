class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (this.root === null) {
      this.root = new Node(val)
      return this;
    };

    const nodeStack = [this.root];

    while (nodeStack.length > 0) {
      let currNode = nodeStack.pop();

      if (val < currNode.val) {
        if (currNode.left) {
          nodeStack.push(currNode.left);
        }
        else {
          currNode.left = new Node(val);
        }
      }
      else {
        if (currNode.right) {
          nodeStack.push(currNode.right);
        }
        else {
          currNode.right = new Node(val);
        }
      }
    }
    console.log(this);
    return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, node = this.root) {
    if (this.root === null) {
      this.root = new Node(val)
      return this;
    };

    console.log("val", val);
    console.log("currNode", node);

    if (val < node.val) {
      if (node.left) {
        this.insertRecursively(val, node.left);
      }
      else {
        node.left = new Node(val);
        return this;
      }
    }
    else {
      if (node.right) {
        this.insertRecursively(val, node.right);
      }
      else {
        node.right = new Node(val);
        return this;
      }
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {

    const nodeStack = [this.root];

    while (nodeStack.length > 0) {
      let currNode = nodeStack.pop();

      if (currNode.val === val) return currNode;

      if (val < currNode.val && currNode.left) {
        nodeStack.push(currNode.left);
      }
      else if (currNode.right) {
        nodeStack.push(currNode.right)
      }
    }

    return undefined;

  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, node = this.root) {
    let foundNode = undefined;
    if (val === node.val) {
      foundNode = node;
      return foundNode;
    }

    if (val < node.val && node.left) {
      foundNode = this.findRecursively(val, node.left);
    }
    else if (node.right) {
      foundNode = this.findRecursively(val, node.right);
    }

    return foundNode;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(node = this.root) {
    let preOrder = [node.val];

    if (node.left) {
      preOrder = preOrder.concat(this.dfsPreOrder(node.left));
    }
    if (node.right) {
      preOrder = preOrder.concat(this.dfsPreOrder(node.right));

    }
    return preOrder

  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(node = this.root) {
    let inOrder = [];
    if (node.left) {
      inOrder = inOrder.concat(this.dfsInOrder(node.left));
    }

    inOrder = inOrder.concat([node.val]);

    if (node.right) {

      inOrder = inOrder.concat(this.dfsInOrder(node.right));

    }
    return inOrder

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(node = this.root) {
    let postOrder = [];
    if (node.left) {
      postOrder = postOrder.concat(this.dfsPostOrder(node.left));
    }

    if (node.right) {

      postOrder = postOrder.concat(this.dfsPostOrder(node.right));

    }
    postOrder = postOrder.concat([node.val]);

    return postOrder

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const nodeQueue = [this.root];
    const bfsOrder = [];

    while (nodeQueue.length > 0) {
      let currNode = nodeQueue.shift();

      bfsOrder.push(currNode.val);

      if (currNode.left) nodeQueue.push(currNode.left);
      if (currNode.right) nodeQueue.push(currNode.right);
    }

    return bfsOrder;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val, node = this.root, parent = null) {
    //removal of root node
    if (!parent && val === node.val) {
      if (node.left) {
        this.root = node.left;
      }
    }

    let foundNode = undefined;

    if (val < node.val && node.left) {
      foundNode = this.findRecursively(val, node.left);
    }
    else if (node.right) {
      foundNode = this.findRecursively(val, node.right);
    }


  }
}

module.exports = BinarySearchTree;
