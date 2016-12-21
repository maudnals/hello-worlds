// const textPosition = '-1 -3 -15';
const textPosition = '3 1 -6';

let planets = {
    'mercury': {
        id: 'mercury',
        color: 'slategrey',
        defaultPosition: '-180 180 -400',
        radius: '2.440',
        texture: 'img/2k_mercury.jpg',
        rotationPeriod: '58000',
        textPosition: textPosition
    },
    'venus': {
        id: 'venus',
        color: 'darkorange',
        defaultPosition: '-150 180 -400',
        radius: '6.052',
        texture: 'img/2k_venus_surface.jpg',
        rotationPeriod: '243000',
        textPosition: textPosition
    },
    'earth': {
        id: 'earth',
        color: '#0054FF',
        defaultPosition: '25 2010 -35',
        radius: '1.0',
        // originial 6.378 = 0.6378 but too small 
        texture: 'img/2k_earth_daymap.jpg',
        rotationPeriod: '10000',
        textPosition: textPosition
    },
    'mars': {
        id: 'mars',
        color: 'orangered',
        defaultPosition: '30 2010 -30',
        radius: '0.8',
        // originial 3.397 = 0.3397 but too small 
        texture: 'img/2k_mars.jpg',
        rotationPeriod: '10200',
        textPosition: textPosition
    },
    'jupiter': {
        id: 'jupiter',
        color: 'burlywood',
        defaultPosition: '-0.5 20 -40',
        // defaultPosition: '40 2010 -20',
        radius: '7.1492',
        texture: 'img/Txtr-Jupiter.jpg',
        rotationPeriod: '4100',
        textPosition: textPosition
    },
    'saturn': {
        id: 'saturn',
        color: 'wheat',
        defaultPosition: '60 2010 -10',
        radius: '6.0368',
        texture: 'img/2k_saturn.jpg',
        rotationPeriod: '4400',
        textPosition: textPosition
    }
    ,
    'uranus': {
        id: 'uranus',
        color: 'powderblue',
        defaultPosition: '270 180 -400',
        radius: '25.559',
        texture: 'img/2k_uranus.jpg',
        rotationPeriod: '7000',
        textPosition: textPosition
    },
    'neptune': {
        id: 'neptune',
        color: 'royalblue',
        defaultPosition: '340 180 -400',
        radius: '24.766',
        texture: 'img/2k_neptune.jpg',
        rotationPeriod: '6700',
        textPosition: textPosition
    }
};

/*function setPosition(){
var distance = 400;
}*/
/*initialize.js: for each planet in planets: launch template*/
/*coordinate: each planet's coordinates are the same as their neighbor but simply rotated*/
