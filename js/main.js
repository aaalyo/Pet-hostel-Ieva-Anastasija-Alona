// const myFullpage = new fullpage('#fullpage', {

//     anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
//     menu: '#menu',
//     lazyLoad: true
// });



function myMap() {
  const mapProp = {
    center: new google.maps.LatLng(56.997459, 24.283190),
    zoom: 15,
  };
  map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
  const marker = new google.maps.Marker({
    position: { lat: 56.997459, lng: 24.283190 },
    map: map,
  });
  let infowindow = new google.maps.InfoWindow({
    content: 'Pet Resort'
  });
  infowindow.open(map, marker);
}

$(function () {
  $("#datepicker-from").datepicker();
});

$(function () {
  $("#datepicker-till").datepicker();
});
