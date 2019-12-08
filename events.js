console.log('dateClicked')
$("td").click(function(event){
  console.log(event.target.innerText)
 var dateClicked = event.target.innerText;
 var link = "http://www.whatsonglasgow.co.uk/events/all-events/2019/12/";
 window.open(link+dateClicked);
});
