const api_url = "https://api.wheretheiss.at/v1/satellites";

const getISS = async()=>{

   const response =  await fetch(api_url);
   const data = await response.json();
   const {id} = data[0];
   const api2 = `https://api.wheretheiss.at/v1/satellites/${id}`
   const response2 = await fetch(api2);
   const locationData = await response2.json();
  const {latitude,longitude} = locationData;
  console.log(latitude,longitude);
  const lat = document.querySelector('.lat');
  const long = document.querySelector('.long');
  console.log(lat,long);
  lat.textContent = latitude;
  long.textContent = longitude;
//   setting up the map
var mymap = L.map('map').setView([latitude, longitude], 2);
 var issIcon = L.icon({
    iconUrl: '/2.jpg',
    iconSize:     [45, 25], // size of the icon    
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location   
});
let marker = L.marker([0, 0],{icon:issIcon}).addTo(mymap);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWpheWJhaW5zIiwiYSI6ImNrdnQ4Ymg5ajJ0bGIzM291bnNydHRndHoifQ.0EBNVxjqYP0Pj6ssY8J_UA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYWpheWJhaW5zIiwiYSI6ImNrdnQ4Ymg5ajJ0bGIzM291bnNydHRndHoifQ.0EBNVxjqYP0Pj6ssY8J_UA'
 }).addTo(mymap);

 marker.setLatLng([latitude,longitude]);

 
}

getISS();