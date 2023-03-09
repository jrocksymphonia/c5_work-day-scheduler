// Wrap all code that interacts with the DOM in a call to jQuery 
// to ensure that
// the code isn't run UNTIL the browser has finished rendering all the elements
// in the html.
var now = dayjs();
var saveBtn = $(".saveBtn");






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


  $(".time-block").each(function(){
    var timeBlock = $(this).attr("id");
    console.log($(this));
    console.log(timeBlock < currentHour);
    console.log(timeBlock);
    

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


  // timeBlock.addClass('past');
  // timeBlock.addClass('present');
  // timeBlock.addClass('future');
 
  // for(var i = 0; i < specificTimeBlock.length; i++){
    // var presentTime = currentHour - 9 === i
    // console.log($(this))
    // var presentTime = $(this).attr("id")

    // console.log(presentTime);
    // if (presentTime < currentHour){
    //   specificTimeBlock[i].removeClass('future');
    //   // specificTimeBlock[i-1].removeClass('present');
    // }
    // if (){
    //   specificTimeBlock[i].removeClass('future')
    //   specificTimeBlock[i].removeClass('present')
    // }
  // };



  // TODO: ???
  // Add code to get any user input that was saved in localStorage 
  // and set the values of the corresponding textarea elements. 
  // HINT: How can the id attribute of each time-block be used to do this?
  //


  // TODO: DISPLAY CURRENT DATE
  // Add code to display the current date in the header of the page.
  $('#currentDay').text(now.format('dddd, MMM D, YYYY'));

});
