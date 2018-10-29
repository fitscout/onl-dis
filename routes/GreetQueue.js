class Queue {
  constructor(io,len) {
    this.io = io;
    this.rear = -1;
    this.front = -1;
    this.max = len;
    this.Q = new Array(this.max);
  }

  insert_q(data) {
    // Check for overflow 

    if (this.front == -1) {
        this.front = 0;
        this.rear = 0;
    } else if (this.front == this.max - 1 || this.front == this.rear + 1) {
        // this.io.emit("Queue_full",{messge:"Queue is Full"})
        console.log("Greetings Queue is full");
    } else if (this.rear == this.max - 1 && this.front != 0) {
        this.rear = 0;
    } else {
        this.rear++;
    }
    this.Q[this.rear] = data;
  }

  delete_q() {
    // Check if Q is empty
    if (this.front == -1) {
      // console.log("Greetings Queue is empty");
        // this.io.emit("No_Greetings",{messge:"Greetings Queue is empty"})
        // console.log("Greetings Queue is empty");
    } else if (this.rear == this.front) {
        // this.io.emit("No_Greetings",{messge:"Greetings Queue is empty"})
        this.rear = -1;
        this.front = -1;
    } else if (this.front == this.max - 1) {
        this.front = 0;
    } else {
        this.front++;
    }
  }

  display_q() {
    if (this.front == -1) {
      // console.log("\nQueue is Empty");
      return;
    }
    // console.log("\nElements in Circular Queue are: ");
    if (this.rear >= this.front) {
      for (let i = this.front; i <= this.rear; i++)
        console.log(this.Q[i]);
    } else {
      for (let i = this.front; i < this.max; i++)
        console.log(this.Q[i]);
      for (let i = 0; i <= rear; i++)
        console.log(this.Q[i]);
    }
  }
  peek() {
    if (this.front == -1) {
      // console.log("Greetings Queue is empty");
      // this.io.emit("No_Greetings",{messge:"Greetings Queue is empty"})
      return;    
    }
    return (this.Q[this.front]);
  }
}
module.exports = Queue;