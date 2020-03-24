function initMap () {
  var options = {
  zoom:12,
  center:{lat:51.5074,lng:-0.118092},
  }
  var map = new google.maps.Map(document.getElementById('map'), options);

  var markers = [
  {
  coords:{lat:51.452542,lng:-0.098263},
  content:'<h5>Speak up for the Climate (talk)</h5><img src="./mapMarkerImages/Friends-of-the-Earth_Lamberth-(logo).png" style="height:50%; width:20%;padding-right:1%; float:left" alt="Friends of the Earth image"><h4 style="float:right;width:80%;">Talk including ideas on the effects of food choice, new government energy polices, converting schools into eco-buildings and building or converting to low-energy homes.<br><br>Saturday, February 8, 2020<br><br>10:30-17:30<br><br>Herne Hill Baptist Church</h4><a href="https://www.lambethfriendsoftheearth.org.uk/events/speakupfortheclimate" target="_blank" style="width:100%;margin-left:5%;">find out more</a>',
  },
  {
  coords:{lat:51.457884,lng:-0.306495},
  content:'<h5>SAS Big Spring Beach Clean 2020 (litter picking)</h5><img src="./mapMarkerImages/sasImage.jpg" style="height:50%; width:20%;padding-right:1%;float:left" alt="Surfers Against Sewage image"><h4 style="float:right;width:80%;">Help clean up the Thames on our Surfers Against Sewage Big Spring Beach Clean 2020 plastic clean-up session at Richmond.<br><br>Saturday, April 18, 2020<br><br>10:30-14:30<br><br>Richmond Bridge Boathouses</h4><a href="https://www.meetup.com/Sustainable-London-Lifestyle/events/269158061/" target="_blank" style="width:100%;margin-left:5%;">find out more</a>',
  },
  {
  coords:{lat:51.5566,lng:-0.08616},
  content:'<h5>Greenpeace Shoreditch Social: Tree planting with the Tree Musketeers</h5><img src="./mapMarkerImages/greenpeaceImageMaps.jpg" style="height:50%; width:20%;padding-right:1%; float:left" alt="Greenpeace image"><h4 style="float:right;width:80%;">The Tree Muskteer is a group of "local people who do practical stuff to plant and care for trees in Hackney" and organise tree planting sessions.<br><br>Saturday, February 8, 2020<br><br>10:00-12:00<br><br>Clissold Park</h4><a href="https://greenwire.greenpeace.org/uk/en-gb/events/greenpeace-shoreditch-social-tree-planting-tree-musketeers" target="_blank" style="width:100%;margin-left:5%;">find out more</a>',
  },
  {
  coords:{lat:51.5712,lng:-0.1009},
  content:'<h5>Finsbury Park Trust Tree Planting</h5><img src="./mapMarkerImages/finsburyParkTrustMapImage.jpg" style="height:50%; width:20%;padding-right:1%; float:left" alt="Finsbury Park Trust image"><h4 style="float:right;width:80%;">We plan to have a tree planting event in April 2020 jointly with Friends of Finsbury Park as part of 150 years celebration of the Park.<br><br> Saturday, April 4 (TBC), 2020<br><br>10:00-12:00<br><br>Finsbury Park</h4><a href="https://www.finsburyparktrust.co.uk/tree-planting/?fbclid=IwAR1QAG5LXygCi_OytGgKg2CYjs-OMX0Zh7ivBHfELZmz2B-vcs8YjlNx0Gk" target="_blank" style="width:100%;margin-left:5%;">find out more</a>',
  },
 {
  coords:{lat:51.549858,lng: -0.140970},
  content:'<h5>Introduction to Climate Justice (talk)</h5><img src="./mapMarkerImages/thinkDoCamdenImage.png" style="height:50%; width:20%;padding-right:1%; float:left" alt="Think and Do Camden image"><h4 style="float:right;width:80%;">In this workshop, we explore why the climate solutions must take into account how past and present systems of injustice have created and perpetuated climate change.<br><br> Tuesday, April 7, 2020<br><br>18:00-20:30<br><br>315 Kentish Town Road</h4><a href="https://www.eventbrite.co.uk/e/introduction-to-climate-justice-tickets-97854265743?aff=ebdssbdestsearch" target="_blank" style="width:100%;margin-left:5%;">find out more</a>',
  },
 ];

// loop through markers
  for(var i = 0;i < markers.length; i++){
  addMarker(markers[i]);
  }
  
 function addMarker(props){
  var marker = new google.maps.Marker({
  position:props.coords,
  map:map,
  content:props.content,
 });

// check content//
  if(props.content){
  var infoWindow = new google.maps.InfoWindow({
  content:props.content,
  });

  marker.addListener('click', function(){
  infoWindow.open(map, marker);
 });
  }
 }
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