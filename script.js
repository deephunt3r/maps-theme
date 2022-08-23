mapboxgl.accessToken = 'pk.eyJ1IjoicmFuZG9tMTE2IiwiYSI6ImNsNzA3bTZ6bTA3cHMzd28zc3RwMmx6cXMifQ.nDSIc8HmxXiqhozdf4VBGQ';

navigator.geolocation.getCurrentPosition(
    successLocation,errorLocation,
    {enableHighAccuracy:true}
    )
function successLocation(position){
    console.log(position) //asks for loc access
    setupMap([position.coords.longitude, position.coords.latitude]) //setting up map for particular loc
}

function errorLocation(position){
    setupMap([135.433056, 34.664722])
}
function setupMap(center){
    // var map = new mapboxgl.Map({
    //     container: 'map',
    //     style: 'mapbox://styles/mapbox/outdoors-v11',
    //     center:center, //center is latitude longitude array
    //     zoom: 13,//setting up default zoom level
    // })
    
    map.on("load",function() {

        map.setPaintProperty('water','fill-color','#a83252')
    });
    
    const nav = new mapboxgl.NavigationControl();//zoom and navigation control
    map.addControl(nav, 'bottom-right');//default top-right

    //Direction/Routing
    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
      });
    map.addControl(directions, 'bottom-left');
    


    var geojson = {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [135.433056, 34.664722]
            },
            properties: {
              title: 'Mapbox',
              description: 'Washington, D.C.'
            }
          }
        ]
        }


      // add markers to map
    for (const feature of geojson.features) {
        // create a HTML element for each feature
        const el = document.createElement('div');
        el.className = 'marker';
    
        // make a marker for each feature and add to the map
        new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map);
    }

}