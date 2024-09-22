// Can you write a function in JavaScript to get the current date in the format “YYYY-MM-DD”?

function timeAndDate(){
        date = new Date().toISOString().split('T')[0];
        dateTime = new Date().toISOString() 
  console.log(date);
  console.log(dateTime);
}
timeAndDate();
