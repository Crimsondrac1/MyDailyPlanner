var current = document.getElementById('currentDay');
var hourList = document.getElementById('container');
const rows = document.getElementsByClassName("task");
var taskNotes = document.querySelector(".task");
var saveButton = document.querySelector(".saveBtn");

var now = moment().format('dddd, LL');
current.innerText = now
var thisHour = moment().format('H');
let block = $('textarea').attr('id');
var loadTasks = function() {
  tasks = JSON.parse(localStorage.getItem("taskLists"));
}

Array.from(rows).forEach(row => {
  let rowIdString = row.name,
  rowHour;
      
    //   console.log(rowIdString)
    if (rowIdString) {
      rowHour = parseInt(rowIdString);
    }
    if (rowHour) {
      // Compares row id to current hour and sets color accordingly
      if (thisHour == rowHour) {
        setColor(row, "yellow");
      } else if ((thisHour < rowHour)) {
        setColor(row, "green");
        $(row).css('color', 'white');
      } else if ((thisHour > rowHour)) {
        setColor(row, "red");
        $(row).css('color', 'white');
      } else {
        setColor(row, "pink");
      }
    }
  });
  
  function setColor(element, color) {
    element.style.backgroundColor = color;
  }


      $(".saveBtn").on('click',saveButton, function(event) {
     event.preventDefault();
    console.log("Button Clicked")
     
    
 
      var taskItems = {
        tId: block,
        tName: $(".taskNotes").val()
       };
         localStorage.setItem('taskItems', JSON.stringify(taskItems))
       const data = JSON.parse(localStorage.getItem('items'))
    });

