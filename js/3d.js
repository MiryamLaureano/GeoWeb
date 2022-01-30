function add3D(terreno) {

    map.addSource('mapbox-dem', {
        'type': 'raster-dem',
        'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
        'tileSize': 512,
        'maxzoom': 14
    });

    map.addSource('icgc-dem', {
        'type': 'raster-dem',
        "tiles": [
        "https://tilemaps.icgc.cat/tileserver/tileserver.php/terreny_icgc_2m_rgb/{z}/{x}/{y}.png"
      ],
        'tileSize': 512,
        'maxzoom': 14
    });

    map.addLayer({
        'id': 'sky',
        'type': 'sky',
        'paint': {
            'sky-type': 'atmosphere',
            'sky-atmosphere-sun': [0.0, 0.0],
            'sky-atmosphere-sun-intensity': 15
        }
    });

   /* codigo comentado
    map.setTerrain({
        'source': 'mapbox-dem',
        'exaggeration': 1.5
    });
    */
   changeTerrain(terreno);


} //fin funcion

function changeTerrain(terreno){

    if(terreno){
        map.setTerrain({
            'source': terreno,
            'exaggeration': 1.5
        });
    }else{
        map.setTerrain(null);
    }

} //fin funcion
