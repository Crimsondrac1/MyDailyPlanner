var current = document.getElementById('currentDay');
var hourList = document.getElementById('container');
const rows = document.getElementsByClassName("task");
var taskNotes = document.querySelector("#tNotes");
var saveButton = document.querySelector("#saveBtn");

var element = document.getElementsByTagName("textarea")[2];
var id = element.id;
// console.log(current)
console.log(id)

var now = moment().format('dddd, LL');
current.innerText = now
var thisHour = moment().format('H');


// if (thisHour < $('div[name]')) {
//     console.log("Less")
// } else {
//     console.log("more")
// }
let storedPlans = JSON.parse(localStorage.getItem("storedPlans"));

var planTextArr = storedPlans;

Array.from(rows).forEach(row => {
    let
      rowIdString = row.name,
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
      } else if ((thisHour > rowHour)) {
        setColor(row, "red");
      } else {
        setColor(row, "pink");
      }
    //   console.log("This -->" + thisHour)
    //   console.log("Row -->" + rowHour)
    }
  });
  
  function setColor(element, color) {
    element.style.backgroundColor = color;
  }

  $(document).on('click',saveButton, function(event) {
    event.preventDefault();  
    

    let indexId = $(this).attr('id');

    let inputId = indexId;
    let value = $(inputId).val();

    planTextArr[indexId] = value;
    console.log('IndexID -->' + indexId)
    console.log('inputId -->' + inputId)
    console.log('$value -->' + value)



//   saveButton.addEventListener("click", function(event) {
//     event.preventDefault();
    
//     // create user object from submission
//     var taskItems = {
//         tName: taskNotes.value.trim(),
//       };
  
//     // set new submission to local storage 
//     window.localStorage.setItem("taskItems", JSON.stringify(taskItems));
    
   });

// var hours = ["12:00 AM","1:00 AM","2:00 AM","3:00 AM","4:00 AM","5:00 AM","6:00 AM","7:00 AM","8:00 AM","9:00 AM","10:00 AM","11:00 AM","12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM","6:00 PM","7:00 PM","8:00 PM","9:00 PM","10:00 PM","11:00 PM"]

// for (let i = 0; i < hours.length; i++) {
//     var oneHour = hours[i]
//     // var createDiv = document.createElement("div")
//     let text = "";
//     // createDiv.textContent = hours[i]
//     // createDiv.classList = "hourList"
//     console.log(oneHour)
    
//     $('.container').append(hours[i]);
//     if (i === 24) break;
//     text += i + "<br>"
//     //   hourList.text(hours[i]);
    
// }