// Inicializa o mapa e define sua posição e zoom inicial
var map = L.map('googleMap').setView([41.14961, -8.61099], 12);

// Adiciona um tile layer ao mapa (a camada de mapa de fundo)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Adiciona um marcador ao mapa
var marker = L.marker([41.14961, -8.61099]).addTo(map);

// Adiciona um popup ao marcador
marker.bindPopup("<b>WebConference</b><br>É aqui a WebConference!").openPopup();

/*window.onload = function() {
  ( async () => {
    const porto = new google.maps.LatLng(41.14961, -8.61099)
    const mapProp = {
      center:porto,
      zoom:12,
      scrollweel:false,
      draggable:false,
      mapTypeId:google.maps.mapTypeId.ROADMAP
    }
    const map = new
    google.maps.Map(document.getElementById("googleMap"),mapProp)
     const infowindow = new google.maps.InfoWindow({
      content: "É aqui a WebConference!"
     })
     const marker = new google.maps.Marker({
      position:porto,
      map:map,
      title:"WebConference"
     })
     marker.addListener('click', function() {
      infowindow.open(map, marker)
     })
  })
}*/