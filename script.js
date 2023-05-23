mapboxgl.accessToken = 'pk.eyJ1Ijoic3dhcm5hNDAzIiwiYSI6ImNsaHl6Mmh1NjE4bjYzaXFhYTdreDIyZGoifQ.NFzAM7uKPFVOx4LS8Nor0A';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
  })
  
  function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude])
  }

function errorLocation() {
    setupMap([40.748440, -73.984559])
}

function setupMap(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 10
    });

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav)

    const directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
      });
      
    //   const map = new mapboxgl.Map({
    //     container: 'map',
    //     style: 'mapbox://styles/mapbox/streets-v12'
    //   });
    
      
      map.addControl(directions, 'top-left');
}
