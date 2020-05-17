const { cons, append } = require('functional-light');
/**
 * Node
 * @param value <Any>
 * @param left <Node>
 * @param right <Node>
 * @returns <Node>
 */
function Node(value, sub_tree_1, sub_tree_2){
	return { value, left: sub_tree_1, right: sub_tree_2 };
}

const tree2 = Node(1, // root
	Node(2,
		Node(4),
		Node(5) // { value: 5, left: null, right: null }
	),
	Node(3)
);

/**
 * 				(1)
 *			 /   \
 *		 (2)	undefined
 */
const tree3 = Node(1, // root
	Node(2)
);

const isLeaf = (node) => {
	if(typeof node !== 'undefined') {
		return (!node.left && !node.right);
	}
	return false;
}

/**
 * Algorithm Inorder(tree)
 * 1. Traverse the left subtree, i.e., call Inorder(left-subtree)
 * 2. Visit the root.
 * 3. Traverse the right subtree, i.e., call Inorder(right-subtree)
 */
const Inorder = (tree) => {
	if(typeof tree === 'undefined') {
		return [];
	}

	if(isLeaf(tree)) {
		return cons(tree.value, []);
	}

	return append(Inorder(tree.left), cons(tree.value, Inorder(tree.right)));
}

const Inorder2 = (tree) => {
	return InorderHelper(tree, []);
}

const InorderHelper = (tree, list) => {
	if(typeof tree === 'undefined') {
		return list;
	}

	if(isLeaf(tree)) {
		return cons(tree.value, list);
	}

	return InorderHelper(tree.left, cons(tree.value, InorderHelper(tree.right, list)));
}

console.log(Inorder2(tree2))


