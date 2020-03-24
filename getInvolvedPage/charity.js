function initMap () {
  var options = {
    zoom:10,
    center:{lat:51.5074,lng:-0.118092}
  }
  var map = new google.maps.Map(document.getElementById('map'), options);
}
$( document ).ready(function() {
  console.log("hi");

$( '#getInvolvedForm' ).submit(function( event ) {
  event.preventDefault();
  var getInvolvedVar = $(this).serializeArray();
  console.log(getInvolvedVar);
  console.log('hi');
  alert('thank you '+ getInvolvedVar[0].value);
}); 
$( '#enquiryForm' ).submit(function( event ) {
  event.preventDefault();
  var enquiryFormVar = $(this).serializeArray();
  console.log(enquiryFormVar);
  console.log('hi');
  alert('thank you '+ enquiryFormVar[0].value);
  console.log('submit');
});
});