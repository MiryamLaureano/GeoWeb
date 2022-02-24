var config = {
    style: 'mapbox://styles/mapbox/satellite-v9',
    accessToken: 'pk.eyJ1IjoibWlyeWFtbGF1cmVhbm8iLCJhIjoiY2t5aXhjZTIyMDFreTJ1dWY1MGFpYWl1ZCJ9.rWVNtAiXFnk50QgVRuUQOA',
    showMarkers: true,
    markerColor: '#0000ff',
    theme: 'dark',
    use3dTerrain: true,
    title: 'Los Niñ@s y las Guerras',
    subtitle: '',
    byline: '“Todas las guerras, justas o injustas, desastrosas o victoriosas, son guerras contra los niños” .Eglantyne Jebb',
    footer: 'Source: Wikipedia, Amnistía Internacional, Cruz Roja Internacional, UNICEF, SIPRI, EOM, Save the Children, Aldeas Infantiles, ACNUR. ',
  
       
   
    chapters: [

        {
            id: 'Introduccion',
            alignment: 'centered', 
            hidden: false,
            title: 'LOS PEORES LUGARES DEL MUNDO PARA SER NIÑ@S',
            image: 'https://imagenes.elpais.com/resizer/OkHIAN74p4UdGuS8bjrEK0cgtjg=/414x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/IFSVMIPTTJFIJCXKCLN3VZRXEI.jpg',
            location: {
                center: [30, 10],
                zoom: 1.5,
                pitch: 10,
                bearing: -13.2
            },
           
        }, 
        {
            id: 'primera parte',
            alignment: 'centered', 
            hidden: false,
            description: 'Al día de hoy uno de cada cinco menores en todo el mundo, aproximadamente 420 millones, viven en zonas de guerra; 30 millones más que en 2016. La guerra moderna no tiene un único frente, sino que se libra en ciudades, pueblos y aldeas. </p> <p>La infancia, en lugar de estar protegida, es atacada constantemente. Las escuelas y los hospitales han dejado de ser refugios seguros y han pasado a ser usados con fines militares. Los más vulnerables de la sociedad han pasado a ser objetivo.</p> Son reclutados para ser niños soldados, separados de sus familias y sometidos a violencia sexual. Los efectos de la guerra en la infancia es devastadora.  Se trata de una auténtica guerra contra la infancia: en los conflictos actuales hay cinco niños asesinados por cada soldado muerto en combate. Save the Children ',
            location: {
                center: [30, 10],
                zoom: 1.5,
                pitch: 10,
                bearing: -13.2
            },
           
        },
        {
            id: 'continente',
            alignment: 'center', 
            hidden: false,
            description: '<strong><center>ASIA</center> </strong>  ',
            location: {
                center: [30, 10],
                zoom: 1.5,
                pitch: 10,
                bearing: -13.2
            },
           
        },
        {
            id: 'Rohingya – Rakáin',
            alignment: 'left', 
            hidden: false,
            title: 'Rohingya – Rakáin',
            image: 'https://www.unicef.org/sites/default/files/press-releases/glo-media-20171020_Rohingya_ChildAlert_web.jpg',
            description: 'Los niños y niñas rohingya siguen atrapados en el limbo, como parte de una minoría étnica sin Estado, y sin poder decidir su propio futuro. Hace ya más de tres años, desde agosto de 2017, fuimos testigos del éxodo de los rohingya, que escapaban de la violencia de Myanmar hacia Bangladesh. Más de 860.000 personas están acogidas en el distrito de Cox´s Bazar. Y más de la mitad, en torno a medio millón, son niños y niñas.',
            location: {
                center: [ 94, 19.5],
                zoom:5,
                pitch: 60,
                bearing: -13.2
            
              
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Afganistán',
            alignment: 'right', 
            hidden: false,
            title: 'Afganistán',
            image: 'https://ipsnoticias.net/wp-content/uploads/2021/08/Afg-madre-hijo-Unicef.jpg',
            description: 'Conflicto, desnutrición, violencia y explotación sexual, abuso doméstico, matrimonio infantil, reclutamiento, entre otros, son algunos de los riesgos que enfrentan los niños de Afganistán. Según Unicef, desde principios de año, “más de 552 niños han muerto y más de 1.400 han resultado heridos”. En tanto, “la mitad de la población, más de 18 millones de personas –entre ellas casi 10 millones de niños- necesita ayuda humanitaria”.',
            location: {
                center: [ 69.165833, 34.532778],
                zoom: 5,
                pitch: 60,
                bearing: -13.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
       
        {
            id: 'Siria',
            alignment: 'left',
            hidden: false,
            title: 'Siria',
            image: 'https://1.bp.blogspot.com/-wGDa3FRyjD0/XedfH_8HjDI/AAAAAAAAIzw/rGKq3mUhJfENimHHTDgPo51JbT52aQvGACLcBGAsYHQ/s320/UNICEF_Siria_0.jpg',
            description: 'La guerra en Siria empezó en 2011 y es uno de los conflictos más graves de la actualidad. En 2018, la cifra de víctimas mortales ascendía a 500.000 según el Observatorio Sirio de Derechos Humanos. En 2018 murieron 1.106 niños y niñas durante los combates en Siria, el año más mortífero para los niños desde que se inició la guerra según UNICEF.',
            location: {
                center: [36.291944, 33.513056],
                zoom: 5,
                pitch: 60,
                bearing: 50
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'Irak',
            alignment: 'right',
            hidden: false,
            title: 'Irak',
            image: 'https://www.es.amnesty.org/fileadmin/user_upload/279070.jpg',
            description: 'Entre 2014 y 2017, el Estado Islámico perpetró crímenes de guerra, crímenes de lesa humanidad y lo que la ONU describe como genocidio contra la comunidad yazidí de Irak. En julio de 2020, Amnistía Internacional publicó un informe que documentaba cómo los niños yazidíes que habían regresado con su familia tras vivir bajo el cautiverio del Estado Islámico sufrían una crisis de salud física y mental.',
            location: {
                center: [ 44.416667, 33.35],
                zoom: 5,
                pitch: 60,
                bearing: -13.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        
        
        {
            id: 'Yemen',
            alignment: 'left',
            hidden: false,
            title: 'Yemen',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3hTZwsXUb9TvYF5tIfxxDtLJsdbuAMMVZPg&usqp=CAU',
            description: 'La guerra civil en Yemen se inició tras la Primavera Árabe de 2011. Este conflicto es conocido como la “guerra olvidada”. La población del Yemen sufre la peor crisis humanitaria del mundo, más de 11 millones de niños (el 80% de todos los niños yemeníes) dependen de la ayuda humanitaria para sobrevivir.',
            location: {
                center: [44.2,  15.35],
                zoom: 5,
                pitch: 60,
                bearing: 50
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        
        {
            id: 'continente',
            alignment: 'center', 
            hidden: false,
            description: '<strong><center>ÁFRICA</center> </strong>  ',
            location: {
                center: [44.2,  15.35],
                zoom: 5,
                pitch: 60,
                bearing: 50
            },
        
        
        
        }, {
            id: 'Somalia',
            alignment: 'right', 
            hidden: false,
            title: 'Somalia',
            image: 'https://www.nationalgeographic.com.es/medio/2009/09/27/metatada_168.jpg',
            description: 'Al Shabab, el principal grupo armado de la oposición, ha restringido el derecho a la educación impidiendo a las niñas que asistan a la escuela, prohibiendo la enseñanza de asignaturas o usando las escuelas para adoctrinar a niños para que participen en los combates. Niños y niñas entrevistadas por Amnistía Internacional, presenciaron el asesinato de maestros en ataques a las escuelas y denunciaron que algunas niñas fueron obligadas a contraer matrimonio con combatientes. Niños y niñas han sido víctimas de flagelaciones y han presenciado otros abusos terribles contra los derechos humanos, como lapidaciones, amputaciones y homicidios realizados en público. También han visto morir o torturar a amigos y familiares.',
            location: {
                center: [ 45.34253, 2.040833],
                zoom: 5,
                pitch: 60,
                bearing: 10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Sudán del Sur',
            alignment: 'left',
            hidden: false,
            title: 'Sudán del Sur',
            image: 'https://www.lavanguardia.com/uploads/2019/11/20/5fa3d9ef60a0c.jpeg',
            description: '“Más de 16.000 niños han sido reclutados como niños soldado. El secuestro y explotación sexual a niñas se han convertido en armas de guerra. Más de la mitad de menores no van a la escuela y 250.000 niños sufren desnutrición. Además, muchos de ellos han sido separados de sus familias o están en paradero desconocido.',
            location: {
                center: [32.52654, 15.60308],
                zoom: 5,
                pitch: 60,
                bearing: 10
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
            id: 'República Centroafricana',
            alignment: 'right', 
            hidden: false,
            title: 'República Centroafricana',
            image: 'https://imagenes.elpais.com/resizer/EPwltTxx-RNYTHN2oBjn9lSEIHw=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/USWYITIICWMIR6CN7MF5LS55FI.jpg',
            description: 'Uso de niños soldados, la ONU informó que más de 14.000 niños han sido reclutados por las milicias Séléka y Anti-Balaka, así como por varios otros grupos armados, han utilizado a niños de hasta 8 años como combatientes, guardias, escudos humanos, porteadores, mensajeros, espías, cocineros y para propósitos sexuales.',
            location: {
                center: [ 18.562833, 4.37325],
                zoom: 5,
                pitch: 60,
                bearing: 10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'Mali',
            alignment: 'left', 
            hidden: false,
            title: 'Mali',
            image: 'https://img2.rtve.es/a/5366260/?h=320',
            description: 'Como los colegios permanecen cerrados por el conflicto, la inseguridad, la COVID-19 o las huelgas de los profesores, los niños y niñas también son empujados hacia las minas de oro informales, especialmente en Gao y Kidal, donde muchas áreas están controladas por grupos armados. “Los grupos armados están forzando a niñas y niños a luchar, están siendo víctimas de trata, de violaciones, los están vendido, utilizando como esclavos sexuales o domésticos, o forzándolos a casarse. Hay muchos niños y niñas en riesgo en el Sahel, una región que está convirtiéndose en la crisis humanitaria de más rápido crecimiento a nivel mundial”. ACNUR.',
            location: {
                center: [ -7.992222, 12.645833],
                zoom: 5,
                pitch: 60,
                bearing: 10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'Nigeria',
            alignment: 'right', 
            hidden: false,
            title: 'Nigeria',
            image: 'https://www.swissinfo.ch/resource/image/43640084/landscape_ratio3x2/880/587/b8a792a973c039ed9cc4e0a7bb8e2750/ECE8FE2DFA5B0CD1909DB5D513EA7330/image_doc-tv54a.jpg',
            description: '“Entre otras atrocidades, Boko Haram ha atacado reiteradamente escuelas y ha secuestrado a un gran número de niños y niñas para utilizarlos como combatientes o ‘esposas’". ”El ejército de Nigeria también ha tratado de forma terrible a quienes lograban escapar de tal brutalidad. Desde detenciones ilegales en masa en condiciones inhumanas hasta el uso de palizas y tortura, pasando por permitir abusos sexuales a manos de reclusos adultos, resulta increíble que las propias autoridades responsables de proteger a los menores les hayan podido causar tanto daño.” ',
            location: {
                center: [ 7.491389, 9.055556],
                zoom: 5,
                pitch: 60,
                bearing: 10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'República Democrática del Congo',
            alignment: 'left',
            hidden: false,
            title: 'República Democrática del Congo',
            image: 'https://img2.rtve.es/i/?w=800&i=1227098056951.jpg&crop=yes',
            description: 'La guerra que azota la República Democrática del Congo desde hace ya diez años, se ha cobrado millones de vidas. El territorio está devastado, pobreza, abandono y violencia. Esta tragedia humana se conoce ya como la primera guerra mundial de África. Más de 30.000 niños soldados que también ejercen funciones de espías, porteadores y esclavos sexuales. En el año 2005 fueron denunciados 25.000 casos de violaciones a niños ',
            location: {
                center: [ 15.283333, -4.266667],
                zoom: 5,
                pitch: 60,
                bearing: 10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'contienente',
            alignment: 'center', 
            hidden: false,
            description: '<strong><center>AMÉRICA DEL SUR</center> </strong>  ',
            location: {
                center: [-74.08175, 4.60971],
                zoom: 5,
                pitch: 60,
                bearing: 10
            },
        },{
            id: 'Colombia',
            alignment: 'right', 
            hidden: false,
            title: 'Colombia',
            image: 'https://cdni.rt.com/actualidad/public_images/2019.03/original/5c9d366ce9180f0a1d8b4567.jpg',
            description: 'Las FARC reclutaron a más de 18.000 niños como soldados, niños y niñas de 15, 16 y 17 años como parte de su política expresa y formal de reclutamiento. Se han dado graves violaciones que afectan a la niñez: reclutamiento y utilización por grupos armados, muertes y mutilaciones, actos de violencia sexual, secuestros, ataques contra escuelas y hospitales y denegación de acceso humanitario. ',
            location: {
                center: [-74.08175, 4.60971],
                zoom: 5,
                pitch: 60,
                bearing: 10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
          
        
         },{
            id: 'Venezuela',
            alignment: 'left', 
            hidden: false,
            title: 'Venezuela',
            image: 'https://pbs.twimg.com/media/BZhX6XECEAE6HiZ?format=jpg&name=small',
            description: 'El conflicto en Arauca, región fronteriza con Venezuela, entre el Ejército de Liberación Nacional y las FARC se agudizó el 2 de enero y ha provocado ya 34 muertes y casi 1.500 personas desplazadas. Miles de niños sin padres qe se han marchado a otro país para trabajar, se quedaron con abuelos o un cuidador que a muchas veces desaparecen.',
            location: {
                center: [ -66.933333, 10.5],
                zoom: 5,
                pitch: 60,
                bearing: 10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'video',
            alignment: 'centered', 
            hidden: false,
            title: '',
            description: '<iframe width="560" height="315" src="https://www.youtube.com/embed/zj5Oui-ABr0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            location: {
                center: [30, 10],
                zoom: 1.5,
                pitch: 10,
                bearing: -13.2
            },
            mapAnimation: 'flyTo',
        rotateAnimation: true,
        callback: '',
        },
       
    
        {
            id: 'segunda parte',
            alignment: 'center', 
            hidden: false,
            description: '"Exigimos a los líderes mundiales que dejen de mirar para otro lado y que tomen medidas contra aquellos grupos armados, fuerzas militares y Estados que incumplen las leyes y tratados internacionales que les obligan a proteger a la infancia en situaciones de conflicto”.  Andrés Conde, director general de Save the Children.  ',
            location: {
                center: [30, 10],
                zoom: 1.5,
                pitch: 10,
                bearing: -13.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    
        {
            id: 'paises fabricantes',
            alignment: 'centered', 
            hidden: false,
            title: '¿Quienes se benefician de las Guerras?',
            image: 'https://elordenmundial.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/05/paises-exportadores-armas.png.webp',
            location: {
                center: [30, 10],
                zoom: 1.5,
                pitch: 10,
                bearing: -13.2
            },
           
        },{
            id: 'texto2',
            alignment: 'centered', 
            hidden: false,
            title: 'Solo cinco potencias controlan tres cuartos del mercado de las ventas de armas en el mundo.',
            description: 'SIPRI ',
            location: {
                center: [30, 10],
                zoom: 1.5,
                pitch: 10,
                bearing: -13.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
          
        
         },{
            id: 'EEUU presidente 1',
            alignment: 'right', 
            hidden: false,
            title: 'Estados Unidos',
            image: 'https://i.blogs.es/961b91/barack-obama-saudies/1024_2000.jpg' ,
            location: {
                center: [-77.055833, 38.871111],
                zoom: 14,
                pitch: 60,
                bearing: -13.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
          
        
         },{
            id: 'EEUU presidente 1',
            alignment: 'centered', 
            hidden: false,
            title: 'Estados Unidos',
            description: 'Entre el periodo del 2010–14 y del 2015–19, las exportaciones de armamento pesado proveniente de los EEUU crecieron un 23%, incrementando en un 36% la participación del segmento en sus exportaciones de armas a nivel global.  ',
            location: {
                center: [-77.055833, 38.871111],
                zoom: 14,
                pitch: 60,
                bearing: -13.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
          
        
         },{
            id: 'EEUU presidente 2',
            alignment: 'left', 
            hidden: false,
            title: 'Estados Unidos',
            image: 'https://static.dw.com/image/43130321_303.jpgg',
            location: {
                center: [-77.055833, 38.871111],
                zoom: 14,
                pitch: 60,
                bearing: -13.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
          
        
         },{
            id: 'EEUU presidente 2',
            alignment: 'centered', 
            hidden: false,
            title: 'Estados Unidos',
            description: 'Las armas de EEUU fueron exportadas, en total, a 96 países. En los últimos cinco años, “la mitad de las exportaciones de armamento estadounidense tuvieron como destino el Oriente Medio. A su vez, la mitad de este volumen fue adquirida por Arabia Saudita”, afirma Pieter D. Wezeman, investigador senior del SIPRI. ',
            location: {
                center: [-77.055833, 38.871111],
                zoom: 14,
                pitch: 60,
                bearing: -13.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
          
        
         },{
            id: 'drone eeuu',
            alignment: 'right', 
            hidden: false,
            title: 'Estados Unidos',
            image: 'https://i.blogs.es/a21c02/drone/1024_2000.jpg',
            description: 'Drones americanos en Yemen. ',
            location: {
                center: [-77.055833, 38.871111],
                zoom: 14,
                pitch: 60,
                bearing: -13.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
          
        
         },{
            id: 'F presidente',
            alignment: 'left', 
            hidden: false,
            title: 'Francia',
            image: 'https://cdn.hispantv.com/hispanmedia/files/images/thumbnail/20180507/13201208_xl.jpg',
            location: {
                center: [2.294479, 48.858296],
                zoom:17,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
          
        
         },{
            id: 'comentario',
            alignment: 'right', 
            hidden: false,
            title: 'Francia',
            description: 'En el caso de Francia, sus exportaciones de armamento registraron el pico quinquenal más alto desde 1990, y representaron el 7,9% de las exportaciones de armas a nivel global, con un incremento del 72% versus el período del 2010 al 2014.<p>“La industria de armas francesa se ha visto beneficiada por la demanda de Egipto, Qatar y la India”, afirma Diego Lopes Da Silva, investigador del SIPRI.  </p> ',
            location: {
                center: [2.294479, 48.858296],
                zoom:17,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
          
        
         },{
            id: '3 president ',
            alignment: 'left', 
            hidden: false,
            title: 'Alemania',
            image: 'https://static4.abc.es/media/internacional/2018/10/21/salman-abdulaziz-kkiG--620x349@abc.jpg',
            location: {
                center: [13.376889, 52.516111],
                zoom:5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
          
        
         },{
            id: '3 nave 1',
            alignment: 'right', 
            hidden: false,
            title: 'Alemania',
            image: 'https://www.defensa.com/adjuntos/stories/noticias/2014/01/6678.jpg',
            description: 'Buques patrulla  ',
            location: {
                center: [13.376889, 52.516111],
                zoom:5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
          
        




         },{
            id: '3 nave 1',
            alignment: 'centered', 
            hidden: false,
            title: 'Alemania',
            description: 'Pero no se trata solo de los buques patrulla. "Alemania también es un importante distribuidor de componentes clave para sistemas de armas suministrados por otros”, dice Pieter Wezeman, del Instituto sueco de Investigación para la PAZ (SIPRI por sus siglas en inglés).  ',
            location: {
                center: [13.376889, 52.516111],
                zoom:5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
          
        




         },{
            id: '3 nave 2',
            alignment: 'left', 
            hidden: false,
            title: 'Alemania',
            image: 'https://i.blogs.es/c4dbf4/eurofighter/1024_2000.jpg',
            description: 'Avión caza Eurofighter-Typhoon, tiene un 30 por ciento de componentes procedentes de Alemania.  ',
            location: {
                center: [13.376889, 52.516111],
                zoom:5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
          
        
         },{
            id: '3 nave 2',
            alignment: 'centered', 
            hidden: false,
            title: 'Alemania',
            description: '"El caza llamado Eurofighter-Typhoon, vendido por Reino Unido a Arabia Saudí, tiene, por ejemplo, un 30 por ciento de componentes procedentes de Alemania”. Se trata de un avión de caza que puede cargar bombas y misiles. Wezeman, experto en armamento, considera que se trata de una de las más importantes aeronaves de la fuerza aérea saudí. ',
            location: {
                center: [13.376889, 52.516111],
                zoom:5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
          
        
         },{
            id: '4 Rusia presidente 1',
            alignment: 'right', 
            hidden: false,
            title: 'Rusia',
            image: 'https://imagenes.elpais.com/resizer/SwWHEQphdh8BkK1e5QLYgDmFyOU=/980x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/G7JWG5GTDZSDDI2B4Y5I2EAWZU.jpg',
            location: {
                center: [37.62,55.754167],
                zoom:4,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
          
        
         },{
            id: '4 Rusia comentario',
            alignment: 'centered', 
            hidden: false,
            title: 'Rusia',
            description: '“Las exportaciones de armamento pesado fabricado en Rusia disminuyeron un 18% entre los periodos 2010–14 y 2015–19. ‘Rusia ha perdido terreno en la India, un país que durante muchos años fue el principal receptor de armamento ruso de gran calibre”, dice Alexandra Kuimova, investigadora del SIPRI. “Esta caída, a su vez, se vio compensada por el incremento en las exportaciones de armas rusas con destino a Egipto e Irak en el período del 2015 al 2019”.  ',
            location: {
                center: [37.62,55.754167],
                zoom: 4,
                pitch: 60,
                bearing:0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
          
        
         },{
            id: '4 Rusia presidente 2',
            alignment: 'left', 
            hidden: false,
            title: 'Rusia',
            image: 'https://ichef.bbci.co.uk/news/800/cpsprodpb/11BF5/production/_98739627_chavezputingetty2006.jpg.webp',
            location: {
                center: [37.62,55.754167],
                zoom: 4,
                pitch: 60,
                bearing:0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
          
        
         },{
            id: '5 presidente',
            alignment: 'right', 
            hidden: false,
            title: 'China',
            image: 'https://2.bp.blogspot.com/-lOuJ_9RRAOA/VTYw5q7Zg7I/AAAAAAABkSE/eSkhMkQWR88/s640/T-55_main_battle_tank_sri_lankan_army_sri_lanka_04_February_2009_news_003.jpg',
            description: ' Pekín planea contar con 4 grupos de combate encabezados por portaaviones como el Liaoning, en la imagen. ',
            location: {
                center: [113.320556, 23.120278],
                zoom: 5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
          
        
         },{
            id: '5 portaaviones',
            alignment: 'left', 
            hidden: false,
            title: 'China',
            image: 'https://ichef.bbci.co.uk/news/800/cpsprodpb/DA49/production/_101218855_gettyimages-810023414.jpg.webp',
            description: ' Portaaviones Liaoning. ',
            location: {
                center: [113.320556, 23.120278],
                zoom: 5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
          
        
         },{
            id: '6 presidente',
            alignment: 'right', 
            hidden: false,
            title: 'Reino Unido',
            image: 'https://cdn.hispantv.com/hispanmedia/files/images/thumbnail/20151018/11264584_xl.jpg',
            location: {
                center: [-0.12457, 51.50067],
                zoom: 6,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
          
        
         },{
            id: '6 nave',
            alignment: 'left', 
            hidden: false,
            title: 'Reino Unido',
            image: 'https://i.blogs.es/c4dbf4/eurofighter/1024_2000.jpg',
            description: 'Un Eurofighter Typhoon saudí. Fabricado en el Reino Unido para Arabia Saudí',
            location: {
                center: [-0.12457, 51.50067],
                zoom: 6,
                pitch:60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
          



            
        
         },{
            id: '8 presidente',
            alignment: 'right', 
            hidden: false,
            title: 'España',
            image: 'https://imagenes.elpais.com/resizer/5oHSUJd-EZyEmFvwjUbkWxlnbfw=/980x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/2VPL7WFMKIOGQ2B7U55RXNUL6A.jpg',
            location: {
                center: [-3.714167, 40.418056],
                zoom: 5,
                pitch: 60,
                bearing: -13.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
          
        
         },
         
         {
            id: '8 comentario',
            alignment: 'centered', 
            hidden: false,
            title: 'España',
            description: 'La industria militar española está integrada por unas 250 empresas que dan trabajo a 22.000 personas. Con todo, cuatro grandes compañías se reparten casi toda la tarta: Navantia (constructora de buques militares); Airbus Military (antigua EADS-CASA, fabricante de aeronaves); General Dynamics (antes Santa Bárbara, privatizada y ahora en manos de la multinacional estadounidense), e Indra, suministradora de alta tecnología y electrónica. Según Pere Ortega, del Centro Delàs de Estudios por la Paz. ',
            location: {
                center: [-3.714167, 40.418056],
                zoom: 5,
                pitch: 60,
                bearing: -13.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
          
        
         },             
         {
            id: '8 rey',
            alignment: 'left', 
            hidden: false,
            title: 'España',
            image: 'https://www.lasrepublicas.com/wp-content/uploads/2020/06/ESTE-Felipe-VI-con-Rey-Arabe.jpg',
            description: 'El lobby de la industria militar española, el sector factura entre 6.000 y 6.500 millones de euros al año. La patronal eleva esta cifra a 10.700 millones de euros y dice exportar el 83% de sus productos y servicios. ',
            location: {
                center: [-3.714167, 40.418056],
                zoom: 5,
                pitch: 60,
                bearing: -13.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
          
        
         },{
            id: '8 corbeta',
            alignment: 'right', 
            hidden: false,
            title: 'España',
            image: 'https://imagenes.elpais.com/resizer/bVS9b3d-A5qit0zin6WSvu3RF00=/980x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/STZNC3POXEXGOANPNY53WWHN3M.jpg',
            location: {
                center: [-3.714167, 40.418056],
                zoom: 5,
                pitch: 60,
                bearing: -13.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
          
        
         },{
            id: '9 ministro',
            alignment: 'left', 
            hidden: false,
            title: 'Italia',
            image: 'https://estaticos-cdn.elperiodico.com/clip/e39bd4bc-3369-40f1-8c29-2ee67b2fd798_media-libre-aspect-ratio_default_0.jpg',
            description: 'Las bombas utilizadas por la Coalición liderada por Arabia Saudita en Yemen para atacar objetivos civiles se producen en Italia. ',
            location: {
                center: [12.492222, 41.890278],
                zoom: 5,
                pitch: 60,
                bearing: -13.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
          
        
         },{
            id: '9 nave',
            alignment: 'right', 
            hidden: false,
            title: 'Italia',
            image: 'https://www.vaticannews.va/content/dam/vaticannews/multimedia/2019/02/15/tank-732829_1920aem.jpg/_jcr_content/renditions/cq5dam.thumbnail.cropped.500.281.jpeg',
            location: {
                center: [12.492222, 41.890278],
                zoom: 5,
                pitch: 60,
                bearing: -13.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
          
        
         }, {
            id: 'parte final',
            alignment: 'center', 
            hidden: false,
            description: '¿Cómo acabar con las guerras que están acabando con los <strong>inocentes</strong> de una casa, de una ciudad y de un país?  Hoy se ha iniciado la invasión de Ucrania por Rusia, todos los motivos para iniciar una guerra son sólo pretextos o como en éste caso mentiras, el fin es la búsqueda de escenarios para fortalecer su negocio armamentista, o de narcotráfico, o de explotación en minas o la explotación sexual de mujeres y niños.  Hoy mismo las naciones europeas o mejor dicho sus gobernantes, rechazan la acción de Rusia, rechazan sus actos violentos y se solidarizan con el puelo Ucraniano. Pero sólo harán eso, por supuesto no dejarán de fabricar armamento bélico, no dejarán a un lado sus negocios tan rentables.  ',
            location: {
                center: [30, 10],
                zoom: 1.5,
                pitch: 10,
                bearing: -13.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'final',
            alignment: 'centered', 
            hidden: false,
            title: 'SIN FUTURO, NO SÓLO VIVEN EL PEOR LUGAR, VIVEN EN EL PEOR MUNDO PARA SER NIÑ@S',
            image: 'https://www.unicef.org/sites/default/files/styles/hero_mobile/public/20180914_Yemen_PB.jpg?itok=tAFQVmbA',
            location: {
                center: [30, 10],
                zoom: 1.5,
                pitch: 10,
                bearing: -13.2
            },
           
    
        },
    
    
    ]

};



