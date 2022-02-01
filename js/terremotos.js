{
    "earthquakes":[
       {
          "datetime":"2011-03-11 04:46:23",
          "depth":24.4,
          "lng":142.369,
          "src":"us",
          "eqid":"c0001xgp",
          "magnitude":8.8,
          "lat":38.322
       },
       {
          "datetime":"2012-04-11 06:38:37",
          "depth":22.9,
          "lng":93.0632,
          "src":"us",
          "eqid":"c000905e",
          "magnitude":8.6,
          "lat":2.311
       },
       {
          "datetime":"2007-09-12 09:10:26",
          "depth":30,
          "lng":101.3815,
          "src":"us",
          "eqid":"2007hear",
          "magnitude":8.4,
          "lat":-4.5172
       }
 
    ]
 } 
 



 {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {"datetime":"2011-03-11 04:46:23", "magnitude":8.8},
        "geometry": {
          "type": "Point",
          "coordinates": [
            142.369,
            38.322
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {"datetime":"2012-04-11 06:38:37","magnitude":8.6},
        "geometry": {
          "type": "Point",
          "coordinates": [
           93.0632,
           2.311
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {"datetime":"2007-09-12 09:10:26","magnitude":8.4},
        "geometry": {
          "type": "Point",
          "coordinates": [
           101.3815,
            -4.5172
          ]
        }
      }
    ]
  }
  






  function terremotosGeonamesToGeoJSON(respuestaGeonames){

    var geoJSON ={
        "type": "FeatureCollection",
        "features": []
    };

    for (var i =0; i < respuestaGeonames.earthquakes.length; i++){

        geoJSON.features.push(
            {
                "type": "Feature",
                "properties": {"magnitude":respuestaGeonames.earthquakes[i].magnitude,
                                "datetime":respuestaGeonames.earthquakes[i].datetime },
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    respuestaGeonames.earthquakes[i].lng,
                    respuestaGeonames.earthquakes[i].lat
                  ]
                }
              }
        );

    } //fin loop

    return geoJSON;

    } //fin funcion
