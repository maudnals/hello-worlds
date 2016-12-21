var planets = {
    'mercury': {
        id: 'mercury',
        color: 'slategrey',
        position: '-180 180 -400',
        radius: '2.440',
        texture: 'img/2k_mercury.jpg',
        rotationPeriod: '58000',
        textPosition: '0 20 -28'
    },
    'venus': {
        id: 'venus',
        color: 'darkorange',
        position: '-150 180 -400',
        radius: '6.052',
        texture: 'img/2k_venus_surface.jpg',
        rotationPeriod: '243000',
        textPosition: '20 16 -20'
    },
    'earth': {
        id: 'earth',
        color: '#0054FF',
        position: '25 2010 -35',
        radius: '1.0',
        // originial 6.378 = 0.6378 but too small 
        texture: 'img/2k_earth_daymap.jpg',
        rotationPeriod: '10000',
        textPosition: '28 16 0'
    },
    'mars': {
        id: 'mars',
        color: 'orangered',
        position: '30 2010 -30',
        radius: '0.8',
        // originial 3.397 = 0.3397 but too small 
        texture: 'img/2k_mars.jpg',
        rotationPeriod: '10200',
        textPosition: '20 16 20'
    },
    'jupiter': {
        id: 'jupiter',
        color: 'burlywood',
        position: '40 2010 -20',
        radius: '7.1492',
        texture: 'img/Txtr-Jupiter.jpg',
        rotationPeriod: '4100',
        textPosition: '0 16 28'
    },
    'saturn': {
        id: 'saturn',
        color: 'wheat',
        position: '60 2010 -10',
        radius: '6.0368',
        texture: 'img/2k_saturn.jpg',
        rotationPeriod: '4400',
        textPosition: '-20 16 -20'
    }
    ,
    'uranus': {
        id: 'uranus',
        color: 'powderblue',
        position: '270 180 -400',
        radius: '25.559',
        texture: 'img/2k_uranus.jpg',
        rotationPeriod: '7000',
        textPosition: '-28 16 0'
    },
    'neptune': {
        id: 'neptune',
        color: 'royalblue',
        position: '340 180 -400',
        radius: '24.766',
        texture: 'img/2k_neptune.jpg',
        rotationPeriod: '6700',
        textPosition: '-20 5 20'
    }
};

/*function setPosition(){
var distance = 400;
}*/
/*initialize.js: for each planet in planets: launch template*/
/*coordinate: each planet's coordinates are the same as their neighbor but simply rotated*/
