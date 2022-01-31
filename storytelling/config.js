var config = {
    style: 'mapbox://styles/mapbox/satellite-v9',
    accessToken: 'pk.eyJ1IjoiZ2lzbWFzdGVybTIiLCJhIjoiY2plZHhubTQxMTNoYzMza3Rqa3kxYTdrOCJ9.53B1E6mKD_EQOVb2Y0-SsA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: true,
    title: 'Volcanes',
    subtitle: 'Los principales volcanes activos del mundo',
    byline: 'M2B ',
    footer: 'Source: Wikipedia',
    chapters: [
        {
            id: 'volcan1',
            alignment: 'left',
            hidden: false,
            title: 'Eyjafjallajökull, Islandia',
            image: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Eyjafjallaj%C3%B6kull_first_crater_20100329.jpg',
            description: 'También conocido como Eyjafjöll,2​ o Eyjafjalla,3​ es un volcán situado al norte de Skógar, en la región de Suðurland, al sur de Islandia.4​ Tiene entre 1651 m y 1666 m de altitud,​ y ha estado moderadamente activo en los últimos 8000 años.',
            location: {
                center: [-19.62, 63.63],
                zoom: 12,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
       },{
            id: 'volcan2',
            alignment: 'right',
            hidden: false,
            title: 'Monte Vesubio, Italia',
            image: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Cr%C3%A1ter_del_Vesubio.jpg',
            description: 'Es un volcán activo del tipo vesubiano situado frente a la bahía de Nápoles y a unos nueve kilómetros de distancia de la ciudad de Nápoles. Se encuentra en la ciudad metropolitana de Nápoles, perteneciente a la región italiana de la Campania. Tiene una altura máxima de 1281 m s. n. m. y se alza al sur de la cadena principal de los Apeninos.',
            location: {
                center: [14.42555555, 40.82138888],
                zoom: 14.5,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'volcan3',
            alignment: 'right',
            hidden: false,
            title: 'El Misti, Perú',
            image: 'https://1.bp.blogspot.com/-sa2KyJ2WhI8/XhoIeIar-AI/AAAAAAAAFa4/shxCfqeiMgUoBvMXnFlyprKFQCBYEzZegCLcBGAsYHQ/s640/volcan%2Bmisti%2Bnevado.jpg',
            description: 'El Volcán Misti se encuentra ubicado en la zona sur del Perú, específicamente en la Ciudad Blanca de Arequipa a 2400 m.s.n.m. El Volcán Misti es considerado como uno de los volcanes más activos del Perú por lo que es monitoreado constantemente.',
            location: {
                center: [-71.40,  -16.29],
                zoom: 12,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'volcan4',
            alignment: 'right',
            hidden: false,
            title: 'Volcán Kilimanjaro, Tanzania',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Kilimanjaro_from_Amboseli.jpg/275px-Kilimanjaro_from_Amboseli.jpg',
            description: 'El Kilimanjaro está situado en el noreste de Tanzania, cerca de la frontera con Kenia y justo debajo del ecuador, formada por tres volcanes inactivos: el Shira, en el oeste, de 3962 m de altitud; el Mawenzi, en el este, de 5149 m y el Kibo, entre ambos, el más reciente desde el punto de vista geológico y cuyo pico, el Uhuru, se eleva hasta los más 5891,8 m. Es la montaña más alta de África, la montaña independiente más alta del mundo —a unos 4900 m de altura desde su base en la meseta— y el cuarto pico ultraprominente en la Tierra.',
            location: {
                center: [37.359,  -3.066],
                zoom: 13,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
