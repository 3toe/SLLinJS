class Node {
   constructor(data) {
      this.data = data;
      this.next = null;              
   }
}

class LinkedList {
   constructor() {
      this.head = null;
   } 

// Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.
   
   front() {
      if(!this.head){
         return(null);
      }
      return(this.head.data)
   }

// Write a method to remove the head node and return the new list head node. If the list is empty, return null.

   removeFront() {
      if(!this.head){
         return(null);
      }
      if(!this.head.next){
         return(null);
      }
      this.head = this.head.next;
      return(this.head);
   }

// Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.  

   addFront(val) {
      nn = new Node(val);
      if(!this.head){
         this.head=nn ;
         return this;
      }
      // This was in the example, but i don't understand why: nn.next=this.head;
      this.head = nn
      // return(this.self) was in the example, but i don't understand that, does this work?
      return(this.head);
   }
}