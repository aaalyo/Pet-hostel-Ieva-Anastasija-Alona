const myFullpage = new fullpage('#fullpage', {
    
    anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
    menu: '#menu',
    lazyLoad: true
});



function myMap() {
    const mapProp = {
        center: new google.maps.LatLng(51.33765, 0.60302),
        zoom: 15,
    };
    map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    const marker = new google.maps.Marker({
        position: {lat:51.33765, lng:0.60302},
        map: map,
      });
}

// $( function() {
//     $( "#datepicker" ).datepicker();
//   } );