// const textPosition = '-1 -3 -15';
const textPosition = '3 1 -6';
const frontPlanetPosition = '-0.5 20 -40';

let planets = {
    'mercury': {
        id: 'mercury',
        color: 'slategrey',
        defaultPosition: vectorHelper().generateNeighborPosition(frontPlanetPosition, 40),
        radius: '0.4880',
        // original 0.2440 but too small so *2 
        texture: 'img/2k_mercury.jpg',
        rotationPeriod: '58000',
        textPosition: textPosition
    },
    'venus': {
        id: 'venus',
        color: 'darkorange',
        defaultPosition: vectorHelper().generateNeighborPosition(frontPlanetPosition, 30),
        radius: '1.2104',
        // original 0.6052 but too small so *2 
        texture: 'img/2k_venus_surface.jpg',
        rotationPeriod: '243000',
        textPosition: textPosition
    },
    'earth': {
        id: 'earth',
        color: '#0054FF',
        defaultPosition: vectorHelper().generateNeighborPosition(frontPlanetPosition, 20),
        radius: '1.2756',
        // original 0.6378 but too small so *2 
        texture: 'img/2k_earth_daymap.jpg',
        rotationPeriod: '10000',
        textPosition: textPosition
    },
    'mars': {
        id: 'mars',
        color: 'orangered',
        defaultPosition: '30 2010 -30',
        radius: '0.6794',
        // original 0.3397 but too small so *2
        texture: 'img/2k_mars.jpg',
        rotationPeriod: '10200',
        textPosition: textPosition
    },
    'jupiter': {
        id: 'jupiter',
        color: 'burlywood',
        defaultPosition: frontPlanetPosition,
        radius: '7.1492',
        texture: 'img/Txtr-Jupiter.jpg',
        rotationPeriod: '4100',
        textPosition: textPosition
    },
    'saturn': {
        id: 'saturn',
        color: 'wheat',
        defaultPosition: vectorHelper().generateNeighborPosition(frontPlanetPosition, -25),
        radius: '6.0368',
        texture: 'img/2k_saturn.jpg',
        rotationPeriod: '4400',
        textPosition: textPosition
    }
    ,
    'uranus': {
        id: 'uranus',
        color: 'powderblue',
        defaultPosition: vectorHelper().generateNeighborPosition(frontPlanetPosition, -40),
        radius: '0.52',
        // original 0.25559 but too small so *2 
        texture: 'img/2k_uranus.jpg',
        rotationPeriod: '7000',
        textPosition: textPosition
    },
    'neptune': {
        id: 'neptune',
        color: 'royalblue',
        defaultPosition: vectorHelper().generateNeighborPosition(frontPlanetPosition, -45),
        radius: '0.50',
        // original 0.24766 but too small so *2 
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
