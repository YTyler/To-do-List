

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

TaskList.prototype.deleteTask = function(id){
  for (let i = 0; i < this.tasks.length; i++) {
    if (this.tasks[i]) {
      if (this.tasks[i].id === id) {
        delete this.tasks[i];
        return true;
      }
    }
  };
  return false;
}

TaskList.prototype.findTask = function(id){
  for (let i = 0; i < this.tasks.length; i++) {
    if (this.tasks[i]) {
      if (this.tasks[i].id === id) {
        return this.tasks[i];
      }
    }
  };
  return false;
}

TaskList.prototype.clearDone = function() {
  var thisList = this;
  thisList.tasks.forEach(function(task) {
    if (task) {
      if(task.done) {
        thisList.deleteTask(task.id);
      }
    }
  })
}

function Task(name, urgency, deadline ) {
  this.name = name;
  this.urgency = urgency;
  this.deadline = deadline;
  this.done = false;
}

Task.prototype.toggleDone = function() {
  this.done = (this.done) ? false : true;
}

var task1 = new Task('Trash', 3, '2019-11-06');
var task2 = new Task('Clean',1,'2019-12-09');
var task3 = new Task('Dish',5,'2019-07-14');


var list = new TaskList();
list.addTask(task1);
list.addTask(task2);
list.addTask(task3);
task2.toggleDone();


$(document).ready(function(){

  function reset() {
    $(".taskDiv").text('');
    list.tasks.forEach(function(task) {
      $('.taskDiv').append(buildTask(task));
    });
  }

  $('#submitNew').click(function(){
    var nameInput = $('#name').val();
    var urgencyInput = parseInt($('input[name=urgency]:checked').val());
    var dateInput = $('#deadline').val();
    var newTask = new Task(nameInput, urgencyInput, dateInput);
    list.addTask(newTask);
    $('.newTaskInput').hide();
    $('#addNewTask').fadeIn();
    reset();
  })

  $('#addNewTask').click(function() {
    $('.newTaskInput').fadeIn();
    $('#addNewTask').hide();
  })



  $('#markDone').click(function() {
    var checked = $('input[name=mark]:checked');
    for (let i = 0; i < checked.length; i++) {
      var thisId = parseInt(checked[i].value);
      var thisTask = list.findTask(thisId);
      thisTask.done = true;
    }
    reset();
  })



  reset();

});
