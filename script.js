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
    
    
    map.on('load',function() {

      map.setPaintProperty('water','fill-color','#021019')
      map.setPaintProperty('land','background-color','#08304b')
      map.setPaintProperty('road-motorway-trunk','line-color','#000000')
      map.setPaintProperty('road-major-link','line-color','#000000')
      map.setPaintProperty('bridge-motorway-trunk','line-color','#000000')
      map.setPaintProperty('bridge-major-link','line-color','#000000')
      map.setPaintProperty('bridge-major-link-2','line-color','#000000')
      map.setPaintProperty('bridge-motorway-trunk-2','line-color','#000000')
      map.setPaintProperty('tunnel-motorway-trunk','line-color','#000000')
      map.setPaintProperty('road-secondary-tertiary','line-color','#000000')
      map.setPaintProperty('road-primary','line-color','#000000')
      map.setPaintProperty('road-street','line-color','#000000')
      map.setPaintProperty('road-minor','line-color','#000000')
      map.setPaintProperty('aerialway','line-color','#146474')
      map.setPaintProperty('bridge-rail-tracks','line-color','#146474')
      map.setPaintProperty('bridge-rail','line-color','#146474')
      map.setPaintProperty('road-rail-tracks','line-color','#146474')
      map.setPaintProperty('road-rail','line-color','#146474')
      map.setPaintProperty('ferry-auto','line-color','#146474')
      map.setPaintProperty('ferry','line-color','#146474')
      map.setPaintProperty('aeroway-line','line-color','#146474')
      map.setPaintProperty('landuse','fill-color','#08304b')
      map.setPaintProperty('national-park','fill-color','#1e6c85')
      map.setPaintProperty('road-path','line-color','#000000')
      map.setPaintProperty('building','fill-color','#08304b')

      map.setPaintProperty('road-motorway-trunk-case','line-color','#09ffc3')
      map.setPaintProperty('road-major-link-case','line-color','#09ffc3')
      map.setPaintProperty('bridge-major-link-case','line-color','#09ffc3')
      map.setPaintProperty('bridge-major-link-2-case','line-color','#09ffc3')
      map.setPaintProperty('bridge-motorway-trunk-case','line-color','#09ffc3')
      map.setPaintProperty('bridge-motorway-trunk-2-case','line-color','#09ffc3')
      map.setPaintProperty('tunnel-motorway-trunk-case','line-color','#09ffc3')
      map.setPaintProperty('road-secondary-tertiary-case','line-color','#ff09d8')
      map.setPaintProperty('road-primary-case','line-color','#000000')
      map.setPaintProperty('road-street-case','line-color','#000000')
      map.setPaintProperty('road-minor-case','line-color','#000000')
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
              coordinates: [83.3430332379697,17.820352819819014]
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