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
                center: [-19.65, 63.63],
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
                center: [14.435, 40.82],
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
                center: [-71.38,  -16.29],
                zoom: 12.8,
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
            title: 'Monte Nyiragongo, República Democrática del Congo',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/An_aerial_view_of_the_towering_volcanic_peak_of_Mt._Nyiragongo.jpg/275px-An_aerial_view_of_the_towering_volcanic_peak_of_Mt._Nyiragongo.jpg',
            description: 'El monte Nyiragongo es un estratovolcán activo de 3470 m de altitud1​ situado en las montañas Virunga, asociados al Rift Albertino. Se encuentra dentro del Parque nacional Virunga, en la República Democrática del Congo, a unos 20 km al norte de la ciudad de Goma y el lago Kivu y justo al oeste de la frontera con Ruanda. El cráter principal tiene unos dos kilómetros de ancho y suele contener un lago de lava. ',
            location: {
                center: [ 29.26,  -1.53],
                zoom: 13.6,
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
