// Wrap all code that interacts with the DOM in a call to jQuery 
// to ensure that
// the code isn't run UNTIL the browser has finished rendering all the elements
// in the html.




$( document ).ready(function() {

  var now = dayjs();
  
 



  $(".saveBtn").on('click', function() {
    // TODO: SAVE BUTTON
    // Add a click event on the save button.
    // This code should use the id () in the containing time-block 
    // as a key to save the user input in local storage. 
     // HINT: What does `this` reference in the click listener function? 
    // How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? 
    // How might the id be useful when saving the description in local storage?
    
    var individualBtn = $(this).attr("id");


    //'this' refers to the button that's clicked. Siblings refers to th
    localStorage.setItem(individualBtn, $(this).siblings(".description").val());

  });

  $('#09 .description').val(localStorage.getItem("9am-task"));
  $('#10 .description').val(localStorage.getItem("10am-task"));
  $('#11 .description').val(localStorage.getItem("11am-task"));
  $('#12 .description').val(localStorage.getItem("12pm-task"));
  $('#13 .description').val(localStorage.getItem("1pm-task"));
  $('#14 .description').val(localStorage.getItem("2pm-task"));
  $('#15 .description').val(localStorage.getItem("3pm-task"));
  $('#16 .description').val(localStorage.getItem("4pm-task"));
  $('#17 .description').val(localStorage.getItem("5pm-task"));







  //----------------------------------------------------------------------------
  // TODO: COLOR-CODE THE HOURS BASED ON CURRENT HOUR
  // Add code to apply the past, present, or future class to each time block by 
  // comparing the id to the current hour. 
  // HINTS: How can the *id attribute* of each time-block 
  // be used to conditionally (if statement) add or remove the past, present, and future classes? 
  // How can *Day.js* be used to get the current hour in 24-hour time?
  
  //captured day.js in a variable only for its hour value (0-23)
  var currentHour = now.format("HH");

  //created an .each() iterator function. Works like a forLoop
  $(".time-block").each(function(){

    //timeBlock is defined by each id value of the divs, which happens to be a number
    var timeBlock = $(this).attr("id");
    
    //made a conditional statement comparing the number of the currentHour to the number of the id
    if (timeBlock < currentHour) {
        $(this).addClass('past');
      } else if (timeBlock === currentHour) {
        $(this).removeClass('past');
        $(this).addClass('present');
      } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
    }

  });

//----------------------------------------------------------------------------
  // TODO: ???
  // Add code to get any user input that was saved in localStorage 
  // and set the values of the corresponding textarea elements. 
  // HINT: How can the id attribute of each time-block be used to do this?
  
 // setInterval(cb, time in milliseconds)



//----------------------------------------------------------------------------
  // TODO: DISPLAY CURRENT DATE
  // Add code to display the current date in the header of the page.
  $('#currentDay').text(now.format('dddd, MMM D, YYYY'));

});


