// Wrap all code that interacts with the DOM in a call to jQuery 
// to ensure that
// the code isn't run UNTIL the browser has finished rendering all the elements
// in the html.
var now = dayjs();
var saveBtn = $(".saveBtn");
var timeBlock = $(".time-block")
var specificTimeBlock = [
  $("#hour-9"), 
  $("#hour-10"),
  $("#hour-11"),
  $("#hour-12"),
  $("#hour-1"),
  $("#hour-2"),
  $("#hour-3"),
  $("#hour-4"),
  $("#hour-5"),
];





$(function () {
  // TODO: SAVE BUTTON
  // Add a click event on the save button. 
  // This code should use the id () in the containing time-block 
  // as a key to save the user input in local storage. 
  // HINT: What does `this` reference in the click listener function? 
  // How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? 
  // How might the id be useful when saving the description in local storage?
  saveBtn.on('click', function() {

  });



  // TODO: COLOR-CODE THE HOURS BASED ON CURRENT HOUR
  // Add code to apply the past, present, or future class to each time block by 
  // comparing the id to the current hour. 
  // HINTS: How can the *id attribute* of each time-block 
  // be used to conditionally (if statement) add or remove the past, present, and future classes? 
  // How can *Day.js* be used to get the current hour in 24-hour time?
  
  var currentHour = now.format("H"); 
  // for (var i = 0; i < timeBlock.length; i++) {
  //   timeblock[i].addClass('present');
  // }

  timeBlock.addClass('past');
  timeBlock.addClass('present');
  timeBlock.addClass('future');
  

  // if (currentHour = 0){
  //   future;
  // } else if (currentHour > 17) {
  //   past;
  // }
 
  for(var i = 0; i < specificTimeBlock.length; i++){
    var presentTime = currentHour - 9 === i
    
    if (presentTime){
      specificTimeBlock[i].removeClass('future');
      // specificTimeBlock[i-1].removeClass('present');
    }
    if (presentTime < i){
      specificTimeBlock[i].removeClass('future')
      specificTimeBlock[i].removeClass('present')
    }

    console.log(presentTime - i);
    // console.log(i);
    // console.log(currentHour); 


  };


   
  
  // var pastHours = $(".past");
  console.log(timeBlock);
  console.log(specificTimeBlock[0])
  
  // (gives me the value of #)
  // var futureHours = $(".future");

  



  // TODO: ???
  // Add code to get any user input that was saved in localStorage 
  // and set the values of the corresponding textarea elements. 
  // HINT: How can the id attribute of each time-block be used to do this?
  //


  // TODO: DISPLAY CURRENT DATE
  // Add code to display the current date in the header of the page.
  $('#currentDay').text(now.format('dddd, MMM D, YYYY'));

});
