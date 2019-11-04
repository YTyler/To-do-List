function TaskList(){
  this.tasks = [];
  this.taskCount = 0;
};
TaskList.prototype.addTask = function(task) {
  task.id = this.assignCount();
  this.tasks.push(task);
}

TaskList.prototype.assignCount = function(){
  this.taskCount +=1;
  return this.taskCount;
}

function Task(name, urgency, deadline ) {
  this.name = name;
  this.urgency = urgency;
  this.deadline = deadline;
  this.done = false;
}

var task1 = new Task('Trash', 3, '2019-11-06');
var task2 = new Task('Clean',1,'2019-12-09');
var task3 = new Task('Dish',5,'2019-07-14');

$(document).ready(function(){

});
