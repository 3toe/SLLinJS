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

// Add a method contains(value) to your SLL class, which is given a value as a parameter.  
// Return a boolean (true/false); true, if the list possesses a node that contains the provided value.
   contains(val) {

      if(!this.head){
         return(null);
      }

      // why is "self" used here and not "this?" (in the example in the learn platform) what's the difference?
      var runner = self.head;
      var found = false;

      while(runner !== null){
         if(runner.data == val){
            found = true;
         }
         runner = runner.next;
      }
      return(found);
   }

// Create a new SLL method length() that returns number of nodes in that list.
   length() {

      if(!this.head){
         return(0);
      }

      var runner = self.head;
      var length = 0;

      while(runner !== null){
         length+=1;
         runner = runner.next;
      }

      return(length);
   }

// Create display() that returns a string containing all list values. Build what you wish console.log(myList) did! 
   display() {

      if(!this.head){
         return(null);
      }

      var runner = self.head;
      var str = "";

      while(runner !== null){
         str += String(runner.data);
         runner = runner.next;
      }
   
      return(str);
   }

// Create a standalone function that locates the minimum value in a linked list, and moves that node to the front of the list. 
// Return the new list, with all nodes still present, and all (except for the new head node) in their original order.
   findMin() {

      if(!this.head){
         return(null);
      }

      var runner = self.head;
      var min = runner.data;
      var temp = runner;
      runner = runner.next;

      while(runner !== null){
         if(runner.data < min){
            min = runner.data
         }
         runner = runner.next;
      }

      runner = self.head;
      while(runner !== null){
         if(runner.data == min){
            runner= this.head;
            temp=runner.next;
            return(this);
            // i think this severs the chain after where the new header originally was...
         }
         runner = runner.next;
      }
   }

// Create a standalone function that locates the maximum value in a linked list, and moves that node to the back of the list. 
// Return the new list, with all nodes still present, and all in their original order except for the node you moved to the 
// end of the singly linked list. 
   findMax() {

      if(!this.head){
         return(null);
      }

      var runner = self.head;
      var max = runner.data;
      var tail = null;
      var temp = null;
      runner = runner.next;

      while(runner !== null){
         if(runner.data > max){
            max = runner.data;
         }
         if(runner.next == null){
            tail = runner;
         }
      }

      runner = self.head;

   // if the head is the max, make the second node the head and move the max to the end
      if(runner.data == max){
         runner.next = this.head;
         tail.next = runner;
         return(this);
      }
   // if a different node is max, move it to the end and join the chains.
      while(runner !== null){
         if(runner.next.data == max){
            temp = runner.next;
            runner.next = runner.next.next;
            tail.next = temp;
            return(this);
         }
      }
   }
}