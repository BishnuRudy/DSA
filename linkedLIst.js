
let Node = function(value, next=null) {
	this.value = value;
	this.next = next;
};

let LinkedList = function() {
	this.head = null;
	this.size = 0;
}

LinkedList.prototype.addHeadNode = function(value) {
	this.head = new Node(value, this.head);
	this.size++;
};

let linkedList = new LinkedList();
linkedList.addHeadNode(2);
linkedList.addHeadNode(1);

LinkedList.prototype.addTailNode = function(value) {
	let node = new Node(value)
	let current = this.head;
	let previous;

	while (current.next) {
		current = current.next;
	}

	current.next = node;
	this.size++;
}

linkedList.addTailNode(3);
linkedList.addTailNode(4);

LinkedList.prototype.iterate = function() {
	current = this.head;

	while(current) {
		console.log("----------->\t", current, '\n');
		current = current.next;
	}
	console.log("----------->\t",this.size,'\n');

}

LinkedList.prototype.addNodeAtIndex = function(value, index) {
	if (index > this.size) return -1;
	if (index == 0) this.addHeadNode(value);

	let count = 0;
	let current = this.head;
	let node = new Node(value);
	let previous;

	while (count < index) {
		count++;
		previous = current;
		current =current.next;
	}

	previous.next = node;
	node.next = current;
	this.size++;

}


LinkedList.prototype.getNodeAtIndex = function(index) {
	if (index >= this.size) return -1;
	if (index == 0) return this.head;

	let current = this.head;
	let count = 0;

	while (count < index) {
		count++;
		current = current.next;
	}

	return current;
}

linkedList.addNodeAtIndex(2.2,2);


LinkedList.prototype.removeHeadNode = function() {
	this.head = this.head.next;
	this.size--;
}

LinkedList.prototype.removeTailNode = function() {
	let current = this.head;
	let previous;

	while(current.next) {
		previous = current;
		current = current.next;
	}

	previous.next = null;
	this.size--;
}

LinkedList.prototype.removeNodeAtIndex = function(index) {
	if (index == 0) this.head = this.head.next;

	let previous;
	let count = 0;
	let current = this.head;

	while (count < index) {
		count++;
		previous = current;
		current = current.next;
	}

	previous.next = current.next;
	this.size--;
}

LinkedList.prototype.clear = function() {
	this.head = null;
	this.size = 0;
}
