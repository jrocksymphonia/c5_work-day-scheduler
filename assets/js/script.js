// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run UNTIL the browser has finished rendering all the elements in the html:

$( document ).ready(function() {
  
  
  var now = dayjs();

  $(".saveBtn").on('click', function() {
    // TODO: SAVE BUTTON
    
    var individualBtn = $(this).attr("id");

    //'this' refers to the button that's clicked. Siblings refers to th
    localStorage.setItem(individualBtn, $(this).siblings(".description").val());

  });

  //----------------------------------------------------------------------------
  // TODO: REPOPULATE THE DOM WITH WHAT"S SAVED ON LOCAL STORAGE

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
  // TODO: DISPLAY CURRENT DATE
  // Add code to display the current date in the header of the page.
  $('#currentDay').text(now.format('dddd, MMM D, YYYY'));

});


