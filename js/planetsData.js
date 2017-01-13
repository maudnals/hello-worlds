// Main sources:

// discovery Date
// distance to earth / in generations
// planet type

const defaultRotationPeriod = '8000';
const defaultRadius = '4.2';

let planets = {
    // SOLAR SYSTEM
    'mercury': {
        id: 'mercury',
        name: 'mercury',
        color: 'slategrey',
        defaultPosition: vectorHelper.generateNeighborPosition(frontPlanetPosition, 55),
        radius: '1.8',
        // original 0.2440 but too small
        texture: 'img/2k_mercury.jpg',
        rotationPeriod: '58000',
        discovery: '2000 B.C.',
        travelTime: '?',
        //Black hole in the
        specificity: "temperature swings"
        // specificity: "As the planet nearest the sun, the surface of Mercury can reach a scorching 450 degrees Celsius. However, since this world doesn't have enough atmosphere to entrap any heat, at night temperatures can plummet to -170 degrees Celsius. That's a huge temperature swing and the greatest in the solar system."
    },
    'venus': {
        id: 'venus',
        name: 'venus',
        color: 'darkorange',
        defaultPosition: vectorHelper.generateNeighborPosition(frontPlanetPosition, 45),
        radius: '2',
        // original 0.6052 but too small
        texture: 'img/2k_venus_surface.jpg',
        rotationPeriod: '243000',
        discovery: '2000 B.C.',
        travelTime: '?',
        specificity: "greenhouse effect"
        // specificity: "Although Venus is only the planet second nearest the sun, its dense, toxic atmosphere traps heat in a runaway version of the greenhouse effect that warms up the Earth. As a result, temperatures on Venus reach 465 degrees Celsius, more than hot enough to melt lead."
    },
    'earth': {
        id: 'earth',
        name: 'earth',
        color: '#0054FF',
        defaultPosition: vectorHelper.generateNeighborPosition(frontPlanetPosition, 34),
        radius: '3.4',
        // original 0.6378 but too small
        texture: 'img/2k_earth_daymap.jpg',
        rotationPeriod: '10000',
        discovery: '2000 B.C.',
        travelTime: '?',
        specificity: "water + people"
        // specificity: "It might seem a bit like navel-gazing to point out how special Earth is — after all, we live here. Although Earth is covered in oceans of water, Mars could have once hosted seas as well. But nowhere else in the solar system can one find atmospheres loaded with free oxygen, which ultimately proved vital to one of the other unique features of Earth — us."
    },
    'mars': {
        id: 'mars',
        name: 'mars',
        color: 'orangered',
        defaultPosition: vectorHelper.generateNeighborPosition(frontPlanetPosition, 22),
        radius: '2.2',
        // original 0.3397 but too small so *2
        texture: 'img/2k_mars.jpg',
        rotationPeriod: '10200',
        discovery: '2000 B.C.',
        travelTime: '?',
        specificity: "huge dust storms"
        //specificity: "The dust storms of Mars are the largest in the solar system, capable of blanketing the entire red planet and lasting for months. One theory as to why dust storms can grow so big on Mars starts with airborne dust particles absorbing sunlight, warming the Martian atmosphere in their vicinity. Warm pockets of air flow toward colder regions, generating winds. Strong winds lift more dust off the ground, which in turn heats the atmosphere, raising more wind and kicking up more dust."
    },
    'jupiter': {
        id: 'jupiter',
        name: 'jupiter',
        color: 'burlywood',
        defaultPosition: frontPlanetPosition,
        radius: '7.1492',
        texture: 'img/Txtr-Jupiter.jpg',
        rotationPeriod: '4100',
        discovery: '2000 B.C.',
        travelTime: '?',
        specificity: "great Red Spot"
        //specificity: "The most extraordinary feature on Jupiter's surface is undoubtedly the Great Red Spot, a giant storm seen for more than 300 years. At its widest diameter, the Great Red Spot is roughly three times as wide as Earth. Every now and again, the spot fades entirely."
    },
    'saturn': {
        id: 'saturn',
        name: 'saturn',
        color: 'wheat',
        defaultPosition: vectorHelper.generateNeighborPosition(frontPlanetPosition, -25),
        radius: '6.0368',
        texture: 'img/2k_saturn.jpg',
        rotationPeriod: '4400',
        discovery: '2000 B.C.',
        travelTime: '?',
        specificity: "spectacular rings (imagine :))"
        //specificity: "Saturn is most famous for its spectacular rings. One ring, too faint to be seen from Earth and discovered just in 2009, measures at least 200 times the diameter of the planet — a billion Earths could fit inside the ring."
    },
    'uranus': {
        id: 'uranus',
        name: 'uranus',
        color: 'powderblue',
        defaultPosition: vectorHelper.generateNeighborPosition(frontPlanetPosition, -40),
        radius: '1.8',
        // original 0.25559 but too small so *2 
        texture: 'img/2k_uranus.jpg',
        rotationPeriod: '7000',
        discovery: '1781',
        travelTime: '?',
        specificity: "strongly tilted (collision)"
        //specificity: 'Unlike other worlds, Uranus is tilted so far that it essentially orbits the sun on its side, with the axis of its spin nearly pointing at the star. Many astronomers believe this unusual orientation might be due to a collision with an Earth-sized planet soon after it was formed.'
    },
    'neptune': {
        id: 'neptune',
        name: 'neptune',
        color: 'royalblue',
        defaultPosition: vectorHelper.generateNeighborPosition(frontPlanetPosition, -50),
        radius: '2',
        // original 0.24766 but too small so *2 
        texture: 'img/2k_neptune.jpg',
        rotationPeriod: '6700',
        discovery: '1846',
        travelTime: '?',
        specificity: "jet stream winds"
        // specificity: "On Neptune, one can find jet stream winds traveling at more than 1,500 mph. It remains a mystery as to how it gets the energy to drive the fastest planetary winds seen in the solar system, despite it being so far from the sun — at times farther from the sun than Pluto — and having relatively weak internal heat."
    },

    // WEIRDOS
    // + add forever alone

    'GJ-504b': {
        id: 'GJ-504b',
        name: 'Pink Planet',
        color: 'deeppink',
        defaultPosition: vectorHelper.generateNeighborPosition(frontPlanetPosition, -64),
        radius: defaultRadius * 0.3,
        // original 0.24766 but too small so *2 
        texture: 'img/txtr-pink.jpg',
        rotationPeriod: defaultRotationPeriod,
        distanceToEarth: '57',
        distanceToEarthAlias: 'short',
        discovery: '2011',
        travelTime: '57',
        specificity: "only known pink planet",
        //specificity: 'The only pink planet ever discovered. Extremely far away from the star it orbits, which is challenging ideas on how giant planets form.  At first glance, the planet appears covered in a dark shade of pink. The planet is still glowing from the heat of its formation, thus causing the uncommon planetary hue, according to NASA. But beyond its peculiar magenta coloring, this particular world has scientists reconsidering how planets and solar systems form. Although the  is about the same size as Jupiter, it\'s much farther from its parent star than many astronomers believed such a huge planet could form—debris was believed to be too sparse to form such large celestial bodies. At 43.5 AU (1 AU, or astronomical unit, is the distance from the Earth to the sun), GJ 504b is farther from its star than even Neptune is from the sun. Yet there it is in all its pink glory.',
        geometry: 'It has several times the mass of Jupiter, yet it’s about the same size.',
        otherData: {
            star: '59 Virginis, a yellow dwarf star',
            age: 'Old (around 160 million years old)'
        }
    },

    'WASP-33b': {
        id: 'WASP-33b',
        name: 'Hell',
        color: 'red',
        defaultPosition: vectorHelper.generateNeighborPosition(frontPlanetPosition, -78),
        radius: defaultRadius * 1.2,
        // original 0.24766 but too small so *2 
        texture: 'img/txtr-fire.jpg',
        // http://orig14.deviantart.net/e267/f/2014/311/a/d/background_fire_theme_by_lockeliefather-d85ka9h.png
        rotationPeriod: defaultRotationPeriod,
        distanceToEarth: '378',
        //  light years away, situated in the Andromeda constellation
        discovery: '2011',
        travelTime: '378',
        specificity: "hottest known planet",
        // specificity: 'Surface temperature is 3,200 degrees Celsius. It’s the hottest planet in the known universe. The planet flies very close to it’s star, which also happens to be the hottest known star in the universe.',
        geometry: 'It’s a huge planet, 4 times the size of Jupiter.',
        otherData: {
            orbit: 'It’s orbit is complete every 30 hours.'
        }
    },

    'p-55-Cancri-e': {
        id: 'p-55-Cancri-e',
        name: 'Diamond planet',
        color: 'white',
        defaultPosition: vectorHelper.generateNeighborPosition(frontPlanetPosition, -92),
        radius: defaultRadius * 0.6,
        // original 0.24766 but too small so *2 
        texture: 'img/txtr-diamond-4.jpg',
        rotationPeriod: defaultRotationPeriod,
        distanceToEarth: '40',
        discovery: '2004',
        travelTime: '?',
        specificity: "diamond surface",
        //specificity: "Want to make a quick $26.9 nonillion? ? That's $26.9 followed 29 zeros, and that's how much the diamonds on this planets would be worth, if only you could travel 40 light-years to retrieve them. One-third of this planet's surface is likely to be made of diamonds due to high temperatures, interior pressures, and carbon-based composition. Scientists say this planet offers the first glimpse of a world with an extremely different chemistry from our own. The Diamond Planet is twice the size of Earth and eight times as dense. However, mining the planet is out of the question. Despite the 40-light-year distance, surface temperatures reach close to 3900 degrees Celsius. However, there are a few other planets with a similar bling composition, such as WASP-12b and the next planet on our list. Strange things transpire in the twilight zone, and stranger still is the place where the sun never rises nor sets, but remains trapped at dusk. The planet Janssen (scientific name 55 Cancri e) is tidally locked, a two-faced super-Earth with the dayside of the planet molten from the heat of its star Copernicus and its nightside plunged permanently into darkness. You might think you’d survive in the twilight or “terminator” zone, where the day and night sides meet. But Janssen’s year is only 18 hours long. That means the backside of the planet is just cool enough to harden the dayside’s boiling hellish world of possible lava flows. Don’t get on this planet’s bad side–either of them–or you’ll be toast.",
        geometry: '',
        otherData: {
            orbit: ''
        }
    },

    'GJ-1214-b': {
        id: 'GJ-1214-b',
        name: 'Waterworld',
        color: 'lightblue',
        defaultPosition: vectorHelper.generateNeighborPosition(frontPlanetPosition, -105),
        radius: defaultRadius * 0.8,
        // original 0.24766 but too small so *2 
        texture: 'img/txtr-waterworld.png',
        rotationPeriod: defaultRotationPeriod,
        distanceToEarth: '44',
        discovery: '2009',
        travelTime: '?',
        specificity: "oceans - earth-like?",
        // specificity: 'Discovered in December 2009, this planet has the best possibility of being an ocean planet over any exoplanet yet discovered. Ocean planets are, of course, completely covered by one giant ocean, with depths far deeper than the oceans on Earth. These depths could cause a core to form, composed of different forms of ice. The planet most likely hosts water in a medley of phases, including as steam, liquid, and plasma.',
        geometry: '',
        otherData: {
            star: 'Gliese 1214 b'
        }
    },

    'TrES-2b': {
        id: 'TrES-2b',
        name: 'Dark World',
        color: 'black',
        defaultPosition: vectorHelper.generateNeighborPosition(frontPlanetPosition, -125),
        radius: defaultRadius * 1.6,
        // original 0.24766 but too small so *2 
        texture: 'img/txtr-blackHole.jpg',
        // http://jasonyesser.com/wp-content/uploads/2014/03/Black-Red-Grunge-Texture.jpg
        rotationPeriod: defaultRotationPeriod,

        // http: //orig01.deviantart.net/0088/f/2013/005/a/3/red_and_black_sprayed_wppr_by_rentehman-d5qj9ks.jpg
        distanceToEarth: '750',
        discovery: '2011',
        travelTime: '?',
        specificity: 'darkest known planet',
        // specificity: "This Dark World is exactly that. The planet reflects only 1 percent of light that falls on it, making it even darker than coal or black acrylic paint, according to David Kipping, an astronomer at the Harvard-Smithsonian Center for Astrophysics and lead author on the paper revealing this weird world. There are a few theories as to why the planet devours light. It\'s possible that TrES-2b has no reflective clouds due to its high temperature, or that its atmosphere contains chemicals that absorb light. However, there is a third possibility that is the most intriguing: It\'s a mystery as to what\'s causing it to be so dark, Kipping told Space.com in 2011. There\'s a good chance it\'s a chemical we haven\'t even thought of yet.'",
        geometry: '',
        otherData: {
            age: ''
        }
    },
};



// let weirdos = {
//     // Max 10
//     // description: 'The weirdest exoplanets. Twenty years after scientists confirmed the first planets beyond our solar system, there are more than 900 confirmed exoplanets and thousands of additional candidates. Some of the worlds out there are just plain out-there.',
//     // 'foreverAlone': {

//     // },
//     // 'diamond': {
//     //     id: '55 Cancri e',
//     //     distanceToEarth: '40 light-years',
//     //     specificity: 'Want to make a quick $26.9 nonillion? ? That\'s $26.9 followed 29 zeros, and that\'s how much the diamonds on this planets would be worth, if only you could travel 40 light-years to retrieve them. One-third of this planet\'s surface is likely to be made of diamonds due to high temperatures, interior pressures, and carbon-based composition. Scientists say this planet offers the first glimpse of a world with an extremely different chemistry from our own. The Diamond Planet is twice the size of Earth and eight times as dense. However, mining the planet is out of the question. Despite the 40-light-year distance, surface temperatures reach close to 3900 degrees Fahrenheit. However, there are a few other planets with a similar bling composition, such as WASP-12b and the next planet on our list.',
//     //     geometry: '',
//     //     otherData: {
//     //         orbit: ''
//     //     }
//     // },
//     'sunHugger': {
//         id: 'PSR J1719-14 b',
//         distanceToEarth: '3900 light-years',
//         specificity: ' Other than being a possible member of the diamond-planet family, this world exhibits a few other strange characteristics, most notably its amazingly short orbital period—just 2.2 hours. If you lived for 80 Earth years, on this planet you\'d be around 321,200 years old. Sounds exhausting. The dense planet—a pulsar planet, technically, because its parent star is a pulsar—completes almost 11 years in a single Earth day and is the fastest planet in the USPP (ultra-short-period-planet) category, which also includes Kepler-70b (5.5 hours) and SWEEPS-10 (10 hours).',
//         geometry: '',
//         otherData: {
//             orbit: ''
//         }
//     },
//     'metuselah': {
//         id: 'PSR 1620-26b',
//         distanceToEarth: '12,400 light-years',
//         specificity: " Methuselah, a well-known old timer from the Bible, is an apt description for this planet: It's really old.In fact, it 's too old. The planet\'s age is about 13 billion years, almost three times as old as Earth. This means that the planet formed less than a billion years after the Big Bang, a time when astronomers thought planets couldn\'t form due to lack of materials needed to create a planet\'s core. It seems the galaxy was an efficient world-maker even in its infancy.",
//         geometry: '',
//         otherData: {
//             orbit: ''
//         }
//     },
//     // 'hell': {
//     //     id: 'WASP-33b',
//     //     distanceToEarth: 'around 378 light years away, situated in the Andromeda constellation',
//     //     specificity: 'Surface temperature is 3,200 degrees Celsius. It’s the hottest planet in the known universe. The planet flies very close to it’s star, which also happens to be the hottest known star in the universe.',
//     //     geometry: 'It’s a huge planet, 4 times the size of Jupiter.',
//     //     otherData: {
//     //         orbit: 'It’s orbit is complete every 30 hours.'
//     //     }
//     // },
//     // 'pinkPlanet': {
//     //     id: 'GJ 504b',
//     //     distanceToEarth: 'Short (57 light-years)',
//     //     specificity: 'The only pink planet ever discovered. Extremely far away from the star it orbits, which is challenging ideas on how giant planets form.  At first glance, the planet appears covered in a dark shade of pink. The planet\'s still glowing from the heat of its formation, thus causing the uncommon planetary hue, according to NASA. But beyond its peculiar magenta coloring, this particular world has scientists reconsidering how planets and solar systems form. Although the  is about the same size as Jupiter, it\'s much farther from its parent star than many astronomers believed such a huge planet could form—debris was believed to be too sparse to form such large celestial bodies. At 43.5 AU (1 AU, or astronomical unit, is the distance from the Earth to the sun), GJ 504b is farther from its star than even Neptune is from the sun. Yet there it is in all its pink glory.',
//     //     geometry: 'It has several times the mass of Jupiter, yet it’s about the same size.',
//     //     otherData: {
//     //         star: '59 Virginis, a yellow dwarf star',
//     //         age: 'Old (around 160 million years old)'
//     //     }
//     // },
//     'giant': {
//         id: 'Hat-P-2b',
//         distanceToEarth: 'Short (57 light years)',
//         specificity: 'This planet is bigger and hotter than the sun, it weighs the same as 2,500 Earths, and is travelling at an insane speed. The planet is located 3 to 9 million miles away from it’s star yet it only takes 5.6 Earth days for it to complete it’s orbit. It’s gravity is 15 times stronger than Earths, and it’s gets as hot as 2000 degrees Celsius. It lives in the constellation Hercules, and is the biggest known planet outside of our solar system. This is clearly one of the weirdest planets ever found, so much so that when scientists found it they didn’t even believe it was real, and assumed it was just a false alarm.',
//         geometry: 'it weighs the same as 2,500 Earths',
//         otherData: {}
//     },
//     // 'waterworld': {
//     //     id: 'GJ 1214 b',
//     //     distanceToEarth: '42 light years away from us',
//     //     specificity: 'Discovered in December 2009, this planet has the best possibility of being an ocean planet over any exoplanet yet discovered. Ocean planets are, of course, completely covered by one giant ocean, with depths far deeper than the oceans on Earth. These depths could cause a core to form, composed of different forms of ice. The planet most likely hosts water in a medley of phases, including as steam, liquid, and plasma.',
//     //     geometry: '',
//     //     otherData: {
//     //         star: 'Gliese 1214 b'
//     //     }
//     // },
//     'doubleStarGrandPa': {
//         id: 'PSR B1620-26 b',
//         distanceToEarth: '',
//         specificity: 'it’s 13 billion years old, and less than a billion years older than the universe itself. Our planet, which is 4.5 billion years old is less than half it’s age. It’s orbits two burned out stars which reside inside a core of 100,000 stars. The planet is evidence that the first planets formed very quickly, which means that planets could be abundant in our universe. It’s the first known planet in existence to orbit two stars instead of one. This alone makes it one of the weirdest planets, let alone it’s gargantuan size, and extreme age. One star is a pulsar, and the other is a white dwarf.',
//         geometry: '',
//         otherData: {
//             age: '13 billion years old'
//         }
//     },

//     'doomed': {
//         id: 'WASP - 18b',
//         distanceToEarth: '325 light-years',
//         specificity: "One million years. That\'s how long this planet has until it inevitably collides with its star. This world faces oblivion due to the slow degradation of its orbit, meaning it's gradually being pulled into its own sun.Even the planet's existence is a mystery, as scientists think that it should have disintegrated by now. One theory is that the planet's orbit has been degenerating for some time and is coming close to the end of its death spiral. A similar instance of this space phenomenon can be seen with Mars's moon Phobos, which approaches the Martian surface 1.8 meters every 100 years. It will meet its demise and eventually break up into a planetary ring in 30 to 50 million years.",
//         geometry: '',
//         otherData: {
//             age: ''
//         }
//     },

// };



// let friends = {
//     // description: 'T',
//     // '': {
//     //     description: 'pink'
//     // }
// };
// // http://www.space.com/18790-habitable-exoplanets-catalog-photos.htmlhttp://www.space.com/33915-newfound-planet-proxima-b-habitability.html
// // https://en.wikipedia.org/wiki/List_of_potentially_habitable_exoplanets


// // Kepler-186 f
// // kepler186f-artistconcept-20140417
// // This is one of the few weird planets that can actually sustain life. What makes this planet so strange is how similar it is to earth. This planet is roughly the same size as earth and inside it’s solar systems habitable zone. This planet isn’t even ten percent larger than earth, and is the most similar planet known right now. Kepler-186 f takes 130 days to orbit it’s sun. The atmosphere on this planet might make it possible to keep water in liquid form. Although promising, the planet is still a mystery to scientists, it’s possible that the planet is too far from the sun for the water to stay warm enough not too freeze, but perhaps it’s atmosphere is able to stop it from getting too cold.
// // src: http://eskify.com/10-weird-planets-too-crazy-to-believe/


// let falseFriends = {
//     // description: 'Look habitable but are not',
//     // 'HD-189733b': {
//     //     description: 'see http://www.space.com/34576-blue-alien-planet-glass-rain.html'
//     // }
// };



/*function setPosition(){
var distance = 400;
}*/
/*initialize.js: for each planet in planets: launch template*/
/*coordinate: each planet's coordinates are the same as their neighbor but simply rotated*/
