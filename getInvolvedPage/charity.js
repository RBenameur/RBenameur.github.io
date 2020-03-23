$( document ).ready(function() {
  console.log("hi");
  /*$('#submitGetInvolved').click( function() {
    console.log('submit');
});*/
$('#submitEnquiryForm').onclick( function( event ) {
  event.stopPropagation();
  buttonFuction(this.id);
   console.log('submit');
  });
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
});
});