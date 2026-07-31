const TOPICS = [
  {
    "id": "astronomy",
    "name": "Astronomy",
    "questions": [
      {
        "q": "What is at the center of our solar system?",
        "opts": [
          "Earth",
          "The Moon",
          "The Sun",
          "Jupiter"
        ],
        "a": 2,
        "tier": 1
      },
      {
        "q": "How many planets are in our solar system?",
        "opts": [
          "7",
          "8",
          "9",
          "10"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is the closest planet to the Sun?",
        "opts": [
          "Venus, the second planet from the Sun",
          "Mercury",
          "Earth",
          "Mars"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "Which planet is known as the Red Planet?",
        "opts": [
          "Jupiter",
          "Mars",
          "Saturn",
          "Venus"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is the name of Earth's natural satellite?",
        "opts": [
          "Titan",
          "The Moon",
          "Europa, one of Jupiter's largest moons",
          "Phobos"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "Which planet is the largest in our solar system?",
        "opts": [
          "Saturn",
          "Jupiter",
          "Neptune",
          "Uranus"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What do we call a star that explodes at the end of its life?",
        "opts": [
          "A comet",
          "A supernova",
          "A meteor, the streak of light from burning space debris",
          "A nebula"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a 'galaxy'?",
        "opts": [
          "A single star",
          "A massive collection of stars, gas, and dust bound by gravity",
          "A type of planet",
          "A moon orbiting a planet, such as Earth's Moon or Saturn's Titan"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is the name of our galaxy?",
        "opts": [
          "Andromeda",
          "The Milky Way",
          "Triangulum",
          "The Whirlpool"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What causes day and night on Earth?",
        "opts": [
          "The Moon's orbit",
          "Earth's rotation on its axis",
          "The Sun's movement around Earth",
          "Seasonal changes"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a 'comet' made of?",
        "opts": [
          "Solid rock only, similar to most asteroids",
          "Ice, dust, and rocky material",
          "Pure metal",
          "Gas only"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "Which planet has famous rings visible from Earth?",
        "opts": [
          "Mars",
          "Saturn",
          "Mercury",
          "Venus"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a 'star'?",
        "opts": [
          "A planet with rings",
          "A ball of hot gas that produces light through nuclear fusion",
          "A moon orbiting a planet, shining only by reflected sunlight",
          "A type of asteroid"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is an 'astronaut'?",
        "opts": [
          "A person who studies rocks, typically called a geologist",
          "A person trained to travel and work in space",
          "A type of telescope",
          "A planet's moon"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "How long does it take Earth to orbit the Sun once?",
        "opts": [
          "1 day",
          "1 month",
          "1 year",
          "10 years"
        ],
        "a": 2,
        "tier": 1
      },
      {
        "q": "What is a 'telescope' used for?",
        "opts": [
          "Traveling to space, which requires a rocket instead",
          "Observing distant objects like stars and planets",
          "Measuring earthquakes",
          "Predicting weather"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "Which planet is closest to Earth?",
        "opts": [
          "Mars",
          "Venus",
          "Mercury",
          "Jupiter"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a 'meteor', commonly called a shooting star?",
        "opts": [
          "A planet outside our solar system, more commonly called an exoplanet",
          "A small piece of debris that burns up entering Earth's atmosphere",
          "A type of moon",
          "A distant galaxy"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is the term for the path a planet takes around the Sun?",
        "opts": [
          "Rotation",
          "Orbit",
          "Axis",
          "Eclipse"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a 'solar eclipse'?",
        "opts": [
          "When the Moon is full",
          "When the Moon passes between the Sun and Earth, blocking sunlight",
          "When Earth passes between the Sun and Moon, causing a lunar eclipse",
          "When a planet aligns with a star"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a 'light-year' a unit of measurement for?",
        "opts": [
          "Time",
          "Distance",
          "Brightness",
          "Mass"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is the main component of the Sun?",
        "opts": [
          "Oxygen",
          "Hydrogen",
          "Carbon, an element formed by stellar fusion",
          "Iron"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is a 'nebula'?",
        "opts": [
          "A star nearing the end of its life",
          "A cloud of gas and dust in space, often where stars are born",
          "A collapsed stellar remnant with intense gravity, such as a black hole",
          "One of Jupiter's larger orbiting moons"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What causes the phases of the Moon?",
        "opts": [
          "The Moon's own light output changing",
          "Changing angles of sunlight reflecting off the Moon as it orbits Earth",
          "Earth's shadow always covering part of the Moon, as happens during a lunar eclipse",
          "The Moon spinning rapidly"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is a 'black hole'?",
        "opts": [
          "A region of space with an extremely strong gravitational pull that not even light can escape",
          "A dark, empty region of space with nothing in it, sometimes called a void by astronomers",
          "A type of dying comet",
          "A very dark planet"
        ],
        "a": 0,
        "tier": 2
      },
      {
        "q": "What are the two main types of galaxies, based on shape?",
        "opts": [
          "Round and square, describing their rough outer silhouette",
          "Spiral and elliptical",
          "Bright and dark",
          "Fast and slow"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is an 'exoplanet'?",
        "opts": [
          "A planet within our solar system, like Mars or Saturn",
          "A planet that orbits a star outside our solar system",
          "A moon of a distant planet",
          "A dwarf planet"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is the asteroid belt located between?",
        "opts": [
          "Earth and Mars",
          "Mars and Jupiter",
          "Jupiter and Saturn",
          "Saturn and Uranus"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'gravity' do in the context of planetary formation?",
        "opts": [
          "Pushes matter apart, similar to how magnets can repel",
          "Pulls matter together, helping form stars and planets",
          "Has no effect on space objects",
          "Only affects objects on Earth"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is the name of the force that keeps planets in orbit around the Sun?",
        "opts": [
          "Magnetism",
          "Gravity",
          "Friction",
          "Nuclear force"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is a 'red giant'?",
        "opts": [
          "A small, dense star at the end of its life, like a white dwarf",
          "A large, cooling star in a late stage of its life cycle",
          "A newly formed star",
          "A type of black hole"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is the 'Big Bang theory' about?",
        "opts": [
          "The formation of black holes, which happens when massive stars collapse",
          "The leading model for the universe's origin from an extremely hot, dense state",
          "A theory about volcanic eruptions on Mars",
          "A theory explaining lunar eclipses"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is a 'dwarf planet'? Give an example.",
        "opts": [
          "A very small star, like the Sun, that shines brightly through nuclear fusion",
          "A round Sun-orbiting body that hasn't cleared its neighborhood, e.g. Pluto",
          "A moon of Jupiter",
          "A type of asteroid cluster"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does the term 'cosmic microwave background' refer to?",
        "opts": [
          "Radio signals sent by satellites",
          "Faint radiation left over from the early universe, considered strong evidence for the Big Bang",
          "Interference from Earth's atmosphere, which can distort and scatter incoming radio telescope signals",
          "Light emitted by nearby stars only"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is a 'binary star system'?",
        "opts": [
          "A star with two planets",
          "A system where two stars orbit a common center of mass",
          "A star that flickers on and off, known as a variable star",
          "A star with a moon"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is the 'habitable zone' around a star?",
        "opts": [
          "The region closest to the star, with the most heat, where surface temperatures could melt metal outright",
          "The region around a star where conditions might allow liquid water to exist on a planet's surface",
          "The area where asteroids are most common",
          "The outermost edge of a solar system"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does a 'supernova' produce, in terms of heavy elements?",
        "opts": [
          "No new elements, only light, similar to the glow of an ordinary burning star",
          "Extreme energy capable of forming many of the universe's heavier elements",
          "Only hydrogen and helium",
          "Only carbon dioxide"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is 'redshift' used to help astronomers determine?",
        "opts": [
          "A star's color when observed at noon, which can appear washed out by daylight",
          "That an object is moving away, based on its light stretching toward red wavelengths",
          "The temperature of a planet's atmosphere",
          "The exact mass of a black hole"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is the Kuiper Belt?",
        "opts": [
          "A ring of asteroids between Mars and Jupiter, known as the main asteroid belt",
          "A region of icy bodies beyond Neptune's orbit, including dwarf planets like Pluto",
          "A belt of dust around the Sun",
          "A ring system around Saturn"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What are 'sunspots'?",
        "opts": [
          "Permanent bright spots on the Sun, similar to solar flares in brightness",
          "Cooler, darker regions on the Sun's surface caused by intense magnetic activity",
          "Craters on the Sun's surface",
          "Reflections of Earth on the Sun"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'nuclear fusion' in stars primarily involve?",
        "opts": [
          "Splitting heavy atomic nuclei into lighter ones, the process used in nuclear reactors",
          "Combining light atomic nuclei, like hydrogen, into heavier ones, releasing energy",
          "A chemical reaction between gases",
          "The collision of two stars"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is the 'Hertzsprung-Russell diagram' used to classify?",
        "opts": [
          "Planetary orbits",
          "Stars, based on their luminosity and temperature (or spectral type)",
          "Galaxies, based on their overall shape, such as spiral or elliptical",
          "Asteroids, based on their composition"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'stellar nucleosynthesis' explain?",
        "opts": [
          "How planets form from dust",
          "How elements form via nuclear fusion in stars and supernovae",
          "How black holes form, typically from the collapse of massive stars",
          "How comets are formed"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'Hubble's Law' a statement about?",
        "opts": [
          "The rotation speed of the Milky Way",
          "That galaxies recede from us at a speed roughly proportional to their distance",
          "The orbital period of Jupiter's moons, which ranges from about two days to over a year",
          "The temperature gradient of the Sun's layers"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is a 'pulsar'?",
        "opts": [
          "A slowly rotating red giant, a swollen star nearing the end of its fuel supply",
          "A magnetized, rotating neutron star emitting beams seen as regular pulses",
          "A type of nebula",
          "A binary star system with no rotation"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does the term 'escape velocity' refer to?",
        "opts": [
          "The speed of light in a vacuum, roughly 300,000 kilometers per second",
          "The minimum speed needed to escape a body's gravity",
          "The orbital speed of a satellite",
          "The rotational speed of a planet"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'gravitational lensing'?",
        "opts": [
          "A telescope technology for magnifying distant objects, akin to a powerful zoom lens",
          "The bending of light by the gravity of a massive object, like a galaxy, in between",
          "A method for measuring a star's temperature",
          "A type of solar eclipse"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is the Chandrasekhar limit relevant to?",
        "opts": [
          "The maximum size of a planet, which depends on its composition and gravity",
          "The maximum mass a white dwarf can hold before collapsing further",
          "The minimum distance for a habitable zone",
          "The speed limit for objects in orbit"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does the term 'accretion disk' refer to, commonly around black holes or forming stars?",
        "opts": [
          "A solid ring of rock around a planet, like Saturn's icy rings",
          "A spinning disk of gas and dust falling into a massive object",
          "A type of asteroid belt",
          "A layer of a star's atmosphere"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'dark matter' inferred to be, based on its gravitational effects?",
        "opts": [
          "Ordinary matter that is simply too dim to see with current telescopes, like faint dwarf stars",
          "Matter that doesn't emit or reflect light, inferred only from its gravitational pull on galaxies",
          "Antimatter left over from the Big Bang",
          "The empty vacuum of space itself"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is the significance of the 'cosmological principle' in modern astronomy?",
        "opts": [
          "It states that Earth is at the center of the universe",
          "That on a large scale, the universe looks the same everywhere and every direction",
          "It only applies to our own galaxy, the Milky Way, and not other galaxies at all",
          "It states that the universe is not expanding"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'spectroscopy' allow astronomers to determine about a distant star or planet?",
        "opts": [
          "Its exact age in years, typically estimated instead from its mass and brightness",
          "Its chemical composition, temperature, and motion, from analyzing the light it emits",
          "Its precise physical diameter alone",
          "Its exact distance without any other data"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is a 'neutron star'?",
        "opts": [
          "A star made entirely of hydrogen gas, the main fuel of most stars",
          "The dense, collapsed core left behind after a massive star's supernova",
          "A newly forming star",
          "A type of exoplanet"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does the 'transit method' of exoplanet detection rely on?",
        "opts": [
          "Directly photographing the exoplanet, using specialized space telescopes",
          "The slight dimming of starlight as a planet passes in front of its star",
          "Measuring radio signals from the exoplanet",
          "Detecting gravitational waves from the exoplanet"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is the 'radial velocity method' (Doppler method) of exoplanet detection based on?",
        "opts": [
          "Direct imaging of the planet, achieved using advanced space telescope optics",
          "A star's slight wobble and spectrum shifts caused by an orbiting planet's gravity",
          "Measuring the planet's surface temperature directly",
          "Analyzing the planet's magnetic field directly"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'general relativity', developed by Einstein, primarily a theory of?",
        "opts": [
          "The behavior of subatomic particles, the focus of quantum mechanics instead",
          "Gravity, describing it as the curvature of spacetime caused by mass and energy",
          "Electromagnetic radiation exclusively",
          "The composition of stars"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does the term 'protoplanetary disk' describe?",
        "opts": [
          "A fully formed planetary ring system, like the icy rings currently surrounding Saturn",
          "A rotating disk of dense gas and dust surrounding a young star, from which planets can form",
          "A disk-shaped galaxy",
          "A dying star's outer shell"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is the significance of 'Cepheid variable stars' in astronomy?",
        "opts": [
          "They are used purely for their aesthetic brightness",
          "Their link between brightness and pulsation rate helps measure distances to galaxies",
          "They mark the exact center of every galaxy, similar to a supermassive black hole",
          "They indicate the presence of dark matter directly"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'tidal locking' explain about the Moon's rotation relative to Earth?",
        "opts": [
          "The Moon rotates much faster than it orbits Earth, completing several spins a day",
          "The Moon's rotation period matches its orbit, so the same side always faces Earth",
          "The Moon does not rotate at all",
          "The Moon's rotation is unrelated to Earth's gravity"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is the 'photosphere' of the Sun?",
        "opts": [
          "The Sun's hot, energy-producing core",
          "The visible 'surface' layer of the Sun from which most of its light is emitted",
          "The outermost, extremely hot layer of the Sun's atmosphere, known as its corona",
          "A layer found only during a solar eclipse"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does the 'Drake equation' attempt to estimate?",
        "opts": [
          "The exact age of the universe",
          "The number of communicative alien civilizations in our galaxy",
          "The mass of a typical black hole, often several times that of our Sun",
          "The distance to the nearest star"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is the significance of 'cosmic inflation' theory in early-universe cosmology?",
        "opts": [
          "It describes the ongoing, gradual expansion of the universe observed today, driven by dark energy",
          "A brief but extremely rapid expansion of the universe right after the Big Bang",
          "It describes the collapse of stars into black holes",
          "It is a theory explaining the formation of the solar system specifically"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'baryon acoustic oscillation' provide astronomers as a cosmological tool?",
        "opts": [
          "A method for detecting individual exoplanets, typically done through the transit technique",
          "A 'standard ruler' from early-universe density fluctuations, used to measure cosmic distances",
          "A method for measuring a star's exact temperature",
          "A technique for directly imaging black holes"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is the 'event horizon' of a black hole?",
        "opts": [
          "The exact center point (singularity) of the black hole",
          "The boundary around a black hole beyond which nothing, not even light, can escape",
          "The outer edge of the black hole's accretion disk, made of superheated infalling gas",
          "A theoretical boundary that has never been mathematically defined"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'gravitational wave' detection, such as by LIGO, directly confirm?",
        "opts": [
          "The existence of dark matter, inferred instead from galaxy rotation speeds",
          "Ripples in spacetime from massive accelerating objects, like merging black holes",
          "The exact composition of a black hole's interior",
          "The existence of a multiverse"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is the 'anthropic principle' in cosmology concerned with?",
        "opts": [
          "Proving that humans are the only intelligent life in the universe",
          "That the universe's physical constants appear finely tuned to allow observers like us to exist",
          "A method for calculating a planet's habitability score directly, used in exoplanet research",
          "A theory about the biological evolution of life on Earth"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'stellar nucleosynthesis beyond iron' require, since fusion of elements heavier than iron does not release net energy?",
        "opts": [
          "A simple continuation of ordinary stellar fusion processes",
          "Energy-absorbing processes, like rapid neutron capture in supernovae or neutron star mergers",
          "No mechanism exists; elements heavier than iron are not naturally formed, only synthesized artificially",
          "Only nuclear fission reactors on Earth"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is the significance of the 'Chandrasekhar limit' and 'Tolman-Oppenheimer-Volkoff limit' together for stellar remnants?",
        "opts": [
          "They define the exact size of every planet",
          "They mark the mass limits separating white dwarfs, neutron stars, and black holes",
          "They apply only to main-sequence stars, before any late-stage collapse begins",
          "They describe the temperature ranges of stars"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'dark energy' refer to, as distinguished from dark matter, in current cosmological models?",
        "opts": [
          "A form of matter with strong gravitational attraction, like dark matter, but far denser",
          "An unexplained form of energy thought to drive the universe's accelerating expansion",
          "The energy released by supernovae explosions",
          "The energy contained within black holes"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is the 'Fermi paradox' concerned with?",
        "opts": [
          "The mathematical inconsistency in general relativity, since resolved through numerical modeling",
          "The gap between the high odds of alien civilizations existing and the lack of evidence for them",
          "A paradox regarding the age of the universe",
          "A paradox in stellar nucleosynthesis calculations"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'direct imaging' as an exoplanet detection method require overcoming as its primary technical challenge?",
        "opts": [
          "The planet's excessive brightness compared to its star",
          "The host star's brightness overwhelming the much dimmer planet's own light",
          "The planet's lack of any detectable light",
          "The planet's excessive distance from Earth, which no current telescope can overcome"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'reionization' in the history of the early universe?",
        "opts": [
          "The initial formation of protons and neutrons after the Big Bang",
          "The first stars ionizing the universe's hydrogen, making it transparent to light",
          "The current accelerating expansion of the universe, driven by dark energy",
          "The formation of the cosmic microwave background radiation itself"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does the 'Lambda-CDM model' represent as the current standard model of cosmology?",
        "opts": [
          "A model with no dark matter or dark energy included",
          "A model combining dark energy and cold dark matter to explain the universe's structure",
          "A purely Newtonian model of the solar system, without any relativistic corrections",
          "A model that rejects the Big Bang theory"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'astrometry' used for in astronomy?",
        "opts": [
          "Measuring a star's exact chemical composition only",
          "Tracking celestial objects' positions, useful for detecting exoplanets via stellar wobble",
          "Measuring a planet's surface temperature, typically done using infrared instruments",
          "Photographing distant galaxies in visible light only"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does the term 'stellar wind' refer to?",
        "opts": [
          "Weather patterns on a planet's surface",
          "A continuous outflow of charged particles from a star's outer atmosphere into space",
          "Wind generated by a planet's rotation, similar to the trade winds found on Earth",
          "A type of solar eclipse"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is the significance of the 'cosmic distance ladder' in astronomy?",
        "opts": [
          "A single, universal method for measuring all cosmic distances at once",
          "A chain of methods, each calibrated to the next, for measuring greater cosmic distances",
          "A physical structure used to launch space telescopes",
          "A method for measuring only distances within our solar system, using radar ranging"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'metallicity' refer to when astronomers describe a star's composition?",
        "opts": [
          "The percentage of the star made of metallic elements exclusively",
          "The share of a star's mass made of elements heavier than hydrogen and helium",
          "The magnetic field strength of a star, measured using its spectral lines",
          "The exact iron content of a star's core"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is the 'main sequence' in the context of stellar evolution?",
        "opts": [
          "A brief, unstable phase at a star's birth",
          "The long stable phase when a star fuses hydrogen into helium in its core",
          "The final collapse phase of a massive star, often ending in a supernova",
          "A phase exclusive to binary star systems"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'microlensing' as an exoplanet and dark matter detection technique rely on?",
        "opts": [
          "Direct photography of the object being studied",
          "The gravitational bending of a background star's light as an object passes in front of it",
          "Measuring the object's radio emissions, a technique commonly used to study distant pulsars",
          "Measuring the object's exact surface temperature"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is the significance of 'the Great Attractor' in large-scale cosmic structure?",
        "opts": [
          "A theoretical black hole at the center of the Milky Way",
          "A massive gravitational anomaly pulling the Milky Way and thousands of galaxies toward it",
          "A term for the center of the observable universe, a concept with no fixed location",
          "A hypothetical region with no gravitational influence"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'the black hole information paradox' fundamentally concern in theoretical physics?",
        "opts": [
          "Whether black holes can be directly photographed",
          "Whether black holes truly destroy information, conflicting with quantum mechanics",
          "A dispute over the exact mass of the first imaged black hole, captured by the Event Horizon Telescope",
          "A disagreement about black holes' rotational speed"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'Hawking radiation' theoretically predict about black holes?",
        "opts": [
          "Black holes are entirely stable and never change over time, retaining all their mass forever",
          "Black holes should slowly emit radiation from quantum effects, gradually losing mass over time",
          "Black holes emit only visible light",
          "Black holes cannot exist according to quantum mechanics"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'holographic cosmology' and the holographic principle for understanding the universe, particularly black holes?",
        "opts": [
          "It suggests the universe is a literal two-dimensional projection screen visible from Earth",
          "Information within a region of space can be encoded on its lower-dimensional boundary",
          "It is a purely metaphorical idea with no basis in modern theoretical physics research",
          "It applies only to the visible light spectrum"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'the horizon problem' in cosmology, motivating the theory of cosmic inflation, refer to?",
        "opts": [
          "A disagreement about how far telescopes can observe",
          "Why distant, unconnected regions of the universe have nearly identical temperatures",
          "A dispute about a black hole's event horizon radius, debated since the 1970s",
          "A problem measuring a star's exact distance"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is 'primordial nucleosynthesis' (Big Bang nucleosynthesis) theoretically responsible for producing in the early universe?",
        "opts": [
          "All of the periodic table's elements, including heavy metals",
          "Light elements, mainly hydrogen and helium, formed minutes after the Big Bang",
          "Only carbon and oxygen",
          "Only heavy radioactive elements, similar to uranium found on Earth today"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'the flatness problem' in cosmology refer to?",
        "opts": [
          "A dispute over whether Earth is flat",
          "Why the universe's geometry is so close to perfectly flat",
          "A problem measuring the curvature of a single galaxy",
          "A disagreement about the shape of black holes"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is 'quantum gravity' as an unsolved problem in theoretical physics attempting to unify?",
        "opts": [
          "Classical mechanics and thermodynamics",
          "General relativity's gravity with the principles of quantum mechanics",
          "Electromagnetism and the strong nuclear force only, two of the four fundamental forces",
          "Chemistry and biology"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'loop quantum gravity', as one candidate approach to quantum gravity, propose about the structure of spacetime?",
        "opts": [
          "Spacetime is perfectly smooth and continuous at all scales",
          "Spacetime may be discrete at the smallest scales, built from tiny interwoven loops",
          "Spacetime does not exist as a physical entity, only as a mathematical convenience",
          "Gravity is not a real force and requires no quantum description"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical motivation behind 'string theory' as a candidate framework unifying gravity with quantum mechanics?",
        "opts": [
          "It proposes that fundamental particles are point-like with zero dimension, as in the Standard Model",
          "Particles are tiny vibrating strings, whose vibration mode determines particle type",
          "It rejects the existence of fundamental particles entirely, favoring pure fields instead",
          "It is a purely experimentally confirmed theory with no remaining open questions"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'the Hubble tension' refer to in contemporary cosmology?",
        "opts": [
          "A dispute over whether Edwin Hubble actually discovered the expanding universe",
          "A mismatch between early- and late-universe measurements of cosmic expansion",
          "A disagreement about the exact location of the Hubble Space Telescope",
          "A problem calculating a single galaxy's rotation curve"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the significance of 'cosmic censorship conjecture', proposed by Roger Penrose, in general relativity?",
        "opts": [
          "It conjectures that black holes cannot exist in nature",
          "It conjectures that collapse singularities are always hidden behind an event horizon, never 'naked'",
          "It conjectures that all information can freely escape black holes, contradicting general relativity",
          "It is a proven theorem with no remaining open questions"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'the no-hair theorem' in general relativity state about black holes?",
        "opts": [
          "Black holes retain detailed information about everything that fell into them",
          "A black hole can be fully described by just three properties: mass, charge, and spin",
          "Black holes must always be perfectly spherical with zero rotation, like a still pond",
          "Black holes cannot have any electric charge"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'eternal inflation' as an extension of standard cosmic inflation theory?",
        "opts": [
          "It proposes inflation occurred only once, in a single uniform burst",
          "In some models, inflation never fully stops, continually spawning separate 'bubble universes'",
          "It is a theory rejecting the existence of the Big Bang entirely",
          "It applies exclusively to the formation of individual solar systems, not the wider cosmos"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'primordial gravitational wave' detection, if achieved via the cosmic microwave background's B-mode polarization, potentially confirm?",
        "opts": [
          "The existence of exoplanets around distant stars",
          "Direct evidence of cosmic inflation, which should imprint a specific polarization pattern in the CMB",
          "The exact mass of every black hole in the observable universe",
          "The existence of dark matter particles directly, sought in deep underground detector experiments"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical basis of 'braneworld cosmology' models, derived from certain string theory frameworks?",
        "opts": [
          "Our universe may be a lower-dimensional 'brane' inside a larger higher-dimensional space",
          "The idea that the universe consists of exactly four spatial dimensions with no additional structure",
          "A purely observational model with no theoretical basis in string theory",
          "A theory rejecting the existence of any extra dimensions"
        ],
        "a": 0,
        "tier": 5
      },
      {
        "q": "What does the 'cosmological constant problem' refer to as one of the most significant unsolved problems in theoretical physics?",
        "opts": [
          "A disagreement over the age of the universe by a few years",
          "The vast mismatch between predicted and observed vacuum energy density (dark energy)",
          "A problem measuring a single star's exact luminosity, usually done via parallax",
          "A dispute over the existence of black holes"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the significance of 'the swampland conjectures' in contemporary string theory research?",
        "opts": [
          "A proof that string theory is entirely incorrect",
          "Criteria for telling real quantum-gravity theories from ones that just look consistent",
          "A theory describing the formation of wetlands on exoplanets",
          "A purely mathematical curiosity with no relevance to cosmology, confined to pure algebra"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'holographic dark energy' propose as an alternative explanation for cosmic acceleration, drawing on the holographic principle?",
        "opts": [
          "That dark energy does not exist and acceleration is a measurement error",
          "That dark energy density may relate to the information bound by a cosmological horizon",
          "That dark energy is identical to ordinary dark matter",
          "That the universe is not actually accelerating in its expansion, contrary to observations"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'firewalls', proposed in the black hole information paradox debate, as a potential resolution?",
        "opts": [
          "A firewall proposes black holes contain literal fire that destroys infalling matter instantly with no further implications",
          "A hypothesized high-energy barrier at a black hole's horizon, proposed to resolve conflicts over information loss",
          "A firewall is a proven, observationally confirmed physical structure",
          "A firewall refers to a solar flare event with no connection to black hole physics"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'the measure problem' refer to in the context of eternal inflation and multiverse cosmology?",
        "opts": [
          "A dispute over the correct unit system for measuring cosmic distances",
          "The difficulty of defining a fair probability measure across an infinite multiverse of universes",
          "A problem measuring the exact size of a single galaxy",
          "A dispute about telescope calibration standards, which get recalibrated every few years by observatories"
        ],
        "a": 1,
        "tier": 5
      }
    ]
  },
  {
    "id": "business",
    "name": "Business",
    "questions": [
      {
        "q": "What is 'profit' in business?",
        "opts": [
          "Total money earned before expenses, often called gross revenue",
          "The money left over after expenses are subtracted from revenue",
          "The total amount a company borrows",
          "The number of customers a company has"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does 'revenue' mean?",
        "opts": [
          "The total money a business earns from sales before expenses",
          "The total money left after all expenses, often called net profit",
          "A company's total debt",
          "A company's number of employees"
        ],
        "a": 0,
        "tier": 1
      },
      {
        "q": "What is a 'customer'?",
        "opts": [
          "A person who works for a company, often called an employee",
          "A person or organization that buys goods or services",
          "A company's competitor",
          "A type of business loan"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does 'CEO' stand for?",
        "opts": [
          "Chief Executive Officer",
          "Central Executive Office",
          "Chief Employment Officer",
          "Company Executive Order"
        ],
        "a": 0,
        "tier": 1
      },
      {
        "q": "What is a 'startup'?",
        "opts": [
          "A large, established corporation, often trading on public stock markets",
          "A newly founded company, typically small and aiming to grow quickly",
          "A government agency",
          "A type of tax form"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is 'marketing'?",
        "opts": [
          "Manufacturing a product, typically done on a factory assembly line",
          "Promoting and selling products or services to customers",
          "Hiring new employees",
          "Filing company taxes"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does 'supply and demand' describe?",
        "opts": [
          "A company's org chart",
          "How availability and demand for a product interact to set price",
          "A type of business loan",
          "A method of employee training, often run by HR departments"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a 'competitor'?",
        "opts": [
          "A company's own employee, typically hired through HR",
          "Another business offering similar products or services",
          "A company's customer",
          "A government regulator"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does 'B2B' stand for?",
        "opts": [
          "Business to Business",
          "Back to Basics, a phrase often used in retro marketing campaigns",
          "Buy to Build",
          "Business to Bank"
        ],
        "a": 0,
        "tier": 1
      },
      {
        "q": "What is an 'invoice'?",
        "opts": [
          "A job application",
          "A document requesting payment for goods or services provided",
          "A type of business license, typically issued by a local government",
          "A marketing advertisement"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does 'entrepreneur' mean?",
        "opts": [
          "A company's largest shareholder, often a founder or early investor",
          "A person who starts and runs a business, taking on financial risk",
          "A government tax auditor",
          "A type of bank loan"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a 'product'?",
        "opts": [
          "A company's employees",
          "A good or service offered for sale",
          "A type of tax form",
          "A company's office location, sometimes called its headquarters"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does 'brand' refer to in business?",
        "opts": [
          "A company's tax ID number, used for filing returns with tax authorities",
          "The identity, name, and reputation associated with a product or company",
          "A type of loan agreement",
          "A government regulation"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a 'salary'?",
        "opts": [
          "A one-time bonus payment, often given during the holidays",
          "Fixed, regular compensation paid to an employee",
          "A type of business tax",
          "A company's total revenue"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does 'supply chain' refer to?",
        "opts": [
          "A company's marketing team",
          "The network delivering a product from production to customers",
          "A type of employee contract, often used for temporary staff",
          "A government tax bracket"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a 'shareholder'?",
        "opts": [
          "A company employee only",
          "A person or entity that owns shares (stock) in a company",
          "A government tax office",
          "A type of business loan, typically issued by a commercial bank"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does 'net profit' generally mean?",
        "opts": [
          "Total revenue before any deductions, sometimes called gross revenue",
          "Profit remaining after all expenses, including taxes, are subtracted",
          "A company's total debt",
          "The number of products sold"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a 'business plan'?",
        "opts": [
          "A company's tax return",
          "A document outlining a company's goals, strategy, and how it plans to achieve them",
          "A type of employee contract, often negotiated with a labor union representative",
          "A government business license"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does 'outsourcing' mean?",
        "opts": [
          "Hiring employees directly",
          "Contracting work out to an external company or individual rather than doing it in-house",
          "Closing a business permanently",
          "Increasing a product's price, often in response to rising material and labor costs"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a 'merger' between two companies?",
        "opts": [
          "One company suing another",
          "Two companies combining into a single company",
          "A company declaring bankruptcy, usually after running out of cash",
          "A company hiring new staff"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does 'ROI' stand for?",
        "opts": [
          "Rate of Interest",
          "Return on Investment",
          "Revenue over Income",
          "Ratio of Investment"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is a 'balance sheet' used to show?",
        "opts": [
          "A company's marketing plan",
          "A company's assets, liabilities, and equity at a specific point in time",
          "A company's daily sales log",
          "A company's employee schedule, typically managed using HR scheduling software"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'market share' measure?",
        "opts": [
          "A company's total profit",
          "The percentage of an industry's total sales that a specific company controls",
          "The number of a company's employees, often disclosed in annual reports",
          "A company's stock price"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is 'break-even point' in business?",
        "opts": [
          "The point at which a company goes bankrupt",
          "The point at which total revenue equals total costs, resulting in neither profit nor loss",
          "The maximum possible profit a company can earn, often set as an annual stretch goal",
          "The point at which a company must raise prices"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'SWOT analysis' stand for?",
        "opts": [
          "Sales, Workforce, Operations, Taxes, common categories in company reports",
          "Strengths, Weaknesses, Opportunities, Threats",
          "Strategy, Wins, Objectives, Targets",
          "Supply, Workflow, Output, Trends"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is 'gross margin'?",
        "opts": [
          "Total revenue minus total expenses of every kind, commonly called net income",
          "Revenue minus the cost of goods sold, expressed as a percentage of revenue",
          "A company's total assets",
          "The number of units sold"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'B2C' stand for?",
        "opts": [
          "Business to Consumer",
          "Business to Corporation",
          "Bank to Client",
          "Buy to Cash"
        ],
        "a": 0,
        "tier": 2
      },
      {
        "q": "What is 'cash flow'?",
        "opts": [
          "A company's total profit, reported at the end of each fiscal year",
          "The net amount of cash moving into and out of a business over a period",
          "A type of business loan",
          "A company's stock price"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'economies of scale' refer to?",
        "opts": [
          "Costs increasing as production increases, a pattern known as diseconomies of scale",
          "Cost advantages a business gains as production volume increases, lowering per-unit costs",
          "A type of employee bonus",
          "A government tax break"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is a 'value proposition'?",
        "opts": [
          "A company's tax filing",
          "A clear statement of the unique benefit a product or service offers to customers",
          "A type of employee contract, often reviewed annually by the HR department",
          "A company's annual report"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'churn rate' measure in a subscription business?",
        "opts": [
          "The rate at which new customers are acquired, closely tracked by the sales and marketing teams",
          "The rate at which customers stop using a company's product or service over a given period",
          "The company's total revenue growth",
          "The number of products launched per year"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is 'vertical integration'?",
        "opts": [
          "A company merging with a direct competitor",
          "A company expanding by acquiring or controlling different stages of its own supply chain",
          "A company reducing its number of employees",
          "A company entering a completely unrelated industry, a strategy known as diversification"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'EBITDA' stand for?",
        "opts": [
          "Earnings Before Interest, Taxes, Depreciation, and Amortization",
          "Estimated Business Income Tax Deduction Amount",
          "Employee Benefits, Insurance, Tax, and Deferred Assets, tracked on payroll ledgers",
          "Equity Balance In Total Debt Analysis"
        ],
        "a": 0,
        "tier": 2
      },
      {
        "q": "What is a 'KPI' (Key Performance Indicator)?",
        "opts": [
          "A type of business loan",
          "A measurable value used to evaluate how effectively a company is achieving key objectives",
          "A government tax filing deadline, usually falling in the spring of each calendar year",
          "A type of employee title"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'franchise' mean in a business context?",
        "opts": [
          "A government-owned business",
          "A licensed right to run a business under another company's brand",
          "A type of employee union",
          "A merger between two companies, often approved by antitrust regulators"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is 'working capital'?",
        "opts": [
          "Total company debt",
          "Current assets minus current liabilities",
          "A company's total annual revenue, reported each fiscal year",
          "The salary paid to executives"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'market segmentation' involve?",
        "opts": [
          "Dividing a company into departments",
          "Dividing a broad target market into smaller groups of consumers with shared characteristics",
          "Splitting a company's stock into more shares, a process known as a stock split for investors",
          "Reducing a product's price"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is 'due diligence' in a business acquisition context?",
        "opts": [
          "Signing a contract immediately without review, a risky but sometimes used approach",
          "A thorough investigation and analysis of a business before finalizing a deal",
          "A type of employee performance review",
          "A government tax audit"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'scalability' mean for a business?",
        "opts": [
          "The company's total number of employees, as listed in its most recent public annual filings and reports",
          "The ability of a business to grow and handle increased demand without a proportional increase in costs",
          "The company's tax bracket",
          "A company's office square footage"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is a 'pivot' in a startup context?",
        "opts": [
          "Closing the business permanently, often after a formal bankruptcy filing",
          "A fundamental change in a company's strategy or product direction",
          "Hiring a new CEO",
          "Filing for a business loan"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does Porter's Five Forces framework analyze?",
        "opts": [
          "An individual employee's performance, usually assessed in annual reviews",
          "The competitive forces shaping an industry's structure and profitability",
          "A company's internal org chart",
          "A government's tax policy"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is the 'first-mover advantage' in strategy?",
        "opts": [
          "Being the last company to enter a market, a strategy often called the late-mover advantage instead",
          "The competitive edge a company gains by being the first to enter a market or introduce a new product",
          "A government subsidy for new businesses",
          "A tax break for startups only"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'opportunity cost' represent in economics and business decision-making?",
        "opts": [
          "The direct monetary cost of a purchase, as shown on the receipt total",
          "The value of the next best alternative given up when making a choice",
          "The total revenue of a company",
          "A government tax deduction"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'price elasticity of demand' a measure of?",
        "opts": [
          "A product's manufacturing cost",
          "How sensitive the quantity demanded of a good is to a change in its price",
          "A company's total market share",
          "The number of competitors in a market, often tracked in industry reports"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'agency theory' in corporate governance primarily address?",
        "opts": [
          "The relationship between a company and a government regulator, often overseen by an antitrust or licensing body",
          "Conflicts of interest that arise when agents, like managers, act on behalf of principals, like shareholders",
          "The process of hiring a marketing agency",
          "A company's supply chain logistics"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is a 'core competency' in strategic management?",
        "opts": [
          "Any skill a company's employees have",
          "A unique capability or strength that provides a company with a competitive advantage",
          "A government-mandated business requirement, such as a mandatory safety certification",
          "A company's total assets"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'disruptive innovation', a term coined by Clayton Christensen, describe?",
        "opts": [
          "Any new product launch by a company",
          "An innovation that creates a new market, eventually displacing established leaders",
          "A temporary supply chain disruption",
          "A company's marketing budget increase, usually approved each new fiscal year"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is the 'principal-agent problem' most concerned with?",
        "opts": [
          "Pricing strategy for new products, often tested first through limited regional market launches",
          "Misaligned incentives between an owner (principal) and the person acting on their behalf (agent)",
          "A company's tax filing structure",
          "Market segmentation strategy"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'organizational culture' refer to?",
        "opts": [
          "A company's tax structure",
          "The shared values, beliefs, and behaviors that characterize an organization",
          "A company's physical office design only, chosen by its facilities management team",
          "A government business regulation"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'lean startup methodology' primarily focused on?",
        "opts": [
          "Maximizing initial funding before building a product, a strategy favored by some venture-backed firms",
          "Rapidly building, measuring, and learning through a cycle of minimum viable products and validated learning",
          "Hiring as many employees as possible upfront",
          "Avoiding customer feedback until launch"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'network effects' describe in business, particularly for platforms?",
        "opts": [
          "A company's IT infrastructure",
          "A phenomenon where a product or service becomes more valuable as more people use it",
          "A type of employee benefit",
          "A government regulation on telecommunications, enforced by a national regulator"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'transfer pricing' in a multinational corporation context?",
        "opts": [
          "The price a company charges external customers, typically listed in a public catalog",
          "Pricing set for transactions between related entities in the same corporate group",
          "The price of transferring company ownership",
          "A type of employee relocation cost"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does the 'resource-based view' (RBV) of the firm argue drives competitive advantage?",
        "opts": [
          "External market conditions alone, such as interest rates and consumer demand",
          "A firm's unique, valuable, and hard-to-imitate internal resources and capabilities",
          "Government regulation alone",
          "Random market fluctuations"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'organizational inertia' in the context of corporate strategy?",
        "opts": [
          "A company's rapid rate of innovation",
          "The tendency of an established organization to resist change, even when change is beneficial",
          "A government policy limiting business growth, often tied to strict antitrust enforcement rules",
          "A type of financial audit"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'total addressable market' (TAM) estimate?",
        "opts": [
          "A company's current annual revenue",
          "The total revenue possible if a product captured 100% of its target market",
          "A company's total number of employees, reported each fiscal quarter to investors",
          "A company's total debt"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'game theory', as applied in business strategy, primarily used to analyze?",
        "opts": [
          "A company's product design process",
          "Strategic decision-making where the outcome for each party depends on the actions of others",
          "A company's internal accounting practices, usually governed by GAAP rules and regular audits",
          "Employee recruitment processes"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'moat', as popularized by Warren Buffett, refer to in business analysis?",
        "opts": [
          "A company's physical office layout",
          "A sustainable competitive advantage protecting a company's market position",
          "A type of short-term business loan, usually repaid within a single year",
          "A government trade tariff"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is the 'bullwhip effect' in supply chain management?",
        "opts": [
          "A sudden increase in a company's stock price, often following unexpectedly strong earnings",
          "Small demand fluctuations causing increasingly larger swings further up the supply chain",
          "A marketing technique for increasing sales",
          "A type of employee performance review"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'organizational ambidexterity' refer to in strategic management?",
        "opts": [
          "A company's ability to operate in two different countries, often through local subsidiaries",
          "A firm's capacity to simultaneously explore new opportunities and exploit existing capabilities",
          "A type of financial hedging strategy",
          "A government requirement for public companies"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'signaling theory' in economics and business, relevant to areas like job markets and finance?",
        "opts": [
          "A method for a company to communicate with regulators only, via formal filings",
          "Parties with more information sending credible signals to reduce information gaps",
          "A method for pricing new products",
          "A theory about supply chain logistics"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does the Modigliani-Miller theorem, foundational to corporate finance theory, argue about capital structure in a perfect market?",
        "opts": [
          "A firm's value is significantly affected by its debt-to-equity ratio, especially during downturns",
          "A firm's value is unaffected by how it's financed, absent taxes or bankruptcy costs",
          "Firms should always finance entirely with equity",
          "Firms should always maximize debt to minimize taxes"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'transaction cost economics', associated with Ronald Coase and Oliver Williamson, use to explain why firms exist?",
        "opts": [
          "Government regulation alone forces firms to exist, without any market-based rationale",
          "Firms exist to internalize transactions and cut the costs of using the open market",
          "Firms exist only to avoid taxation",
          "Firms exist purely due to historical accident"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'real options theory' apply from financial options pricing to strategic management decisions?",
        "opts": [
          "It has no practical strategic application",
          "Valuing strategic investments like financial options, capturing flexibility under uncertainty",
          "It only applies to publicly traded stock decisions, never to private company deals or ventures",
          "It replaces the need for any financial analysis"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is the 'dynamic capabilities' framework in strategic management theory concerned with?",
        "opts": [
          "A firm's static set of fixed resources",
          "A firm's ability to reconfigure its competencies to address rapidly changing environments",
          "A firm's short-term cash flow management, typically reviewed by finance teams every month",
          "A firm's tax optimization strategy"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'behavioral economics', as applied to organizational decision-making, challenge about traditional economic models of the firm?",
        "opts": [
          "Nothing; it fully supports classical rational-actor assumptions found in older textbooks",
          "That managers and consumers always act as perfectly rational, utility-maximizing agents",
          "The existence of markets entirely",
          "The relevance of supply and demand"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'institutional theory' in organizational studies argue shapes firm behavior, beyond pure efficiency considerations?",
        "opts": [
          "Only a firm's internal financial metrics, tracked quarterly by its finance team",
          "Social pressures for legitimacy that make organizations in a field grow more alike",
          "Random chance alone",
          "Government taxation exclusively"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is the significance of 'information asymmetry', as studied by economists like George Akerlof (the 'market for lemons'), in business transactions?",
        "opts": [
          "It has no measurable effect on markets",
          "Unequal information between buyers and sellers can lead to market inefficiencies, adverse selection, and even market failure",
          "It only matters in international trade",
          "It applies exclusively to the labor market, particularly during wage and salary negotiations between employers and workers"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does the 'contingency theory' of organizational design argue, as opposed to a 'one best way' approach?",
        "opts": [
          "Every organization should be structured identically for efficiency, following one single universal corporate template company-wide",
          "There is no single best way to organize a company; the optimal structure depends on internal and external contextual factors",
          "Organizational structure has no impact on performance",
          "Government regulation should dictate organizational structure"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'strategic complementarity' in game-theoretic models of competition?",
        "opts": [
          "A situation where competitors always choose opposite strategies, never overlapping in approach",
          "A situation where firms' optimal strategies reinforce each other, encouraging similar moves by rivals",
          "A legal requirement for merging companies",
          "A tax benefit for complementary industries"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'organizational learning theory' distinguish between as two levels of learning, per Chris Argyris and Donald Schön?",
        "opts": [
          "Fast learning and slow learning",
          "Single-loop learning, fixing errors within a system, and double-loop learning, questioning its assumptions",
          "Individual learning and no organizational learning at all, a once-common but now largely outdated view",
          "Financial learning and marketing learning"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is the 'principal-principal conflict', distinct from the classic principal-agent problem, particularly relevant in firms with concentrated ownership?",
        "opts": [
          "A conflict between a firm and a government regulator, usually resolved through lengthy formal hearings",
          "A conflict between majority and minority shareholders, where controlling owners squeeze out minority value",
          "A conflict between two competing firms",
          "A conflict between employees and management only"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'real earnings management', as distinct from accrual-based earnings management, involve?",
        "opts": [
          "Illegally falsifying financial statements outright, a criminal offense in most jurisdictions",
          "Altering real business activities, like cutting R&D spending, to shape reported earnings",
          "A government-mandated accounting adjustment",
          "A routine annual audit process"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is the 'efficient boundary of the firm', per transaction cost economics, meant to determine?",
        "opts": [
          "The physical size of a company's office, often set by real-estate budgets",
          "Whether to do an activity in-house or outsource it, based on transaction costs",
          "A firm's optimal tax jurisdiction",
          "A firm's ideal number of shareholders"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'strategic groups analysis' within an industry aim to identify?",
        "opts": [
          "A single firm's internal departments",
          "Clusters of firms within an industry that follow similar strategies along key strategic dimensions",
          "A government's regulatory categories for industries, used mainly for tax classification purposes",
          "A firm's individual employee performance tiers"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'organizational ecology theory' primarily concerned with explaining?",
        "opts": [
          "A single firm's internal hierarchy",
          "Population-level dynamics of organizational founding and failure rates within an industry, using ecological analogies",
          "A firm's environmental sustainability practices exclusively, such as its carbon footprint and recycling reporting",
          "A firm's supply chain logistics"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does the 'knowledge-based view' of the firm argue is the primary basis for sustained competitive advantage?",
        "opts": [
          "A firm's physical capital and machinery, recorded as fixed assets on the company's balance sheet",
          "A firm's ability to create, integrate, and apply specialized knowledge more effectively than competitors",
          "A firm's tax optimization strategy",
          "A firm's marketing budget size alone"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'hypercompetition', a term associated with strategist Richard D'Aveni, used to describe?",
        "opts": [
          "Stable, slow-moving competitive environments",
          "Environments where competition escalates so fast that advantages erode almost immediately",
          "A monopolistic market with no competition",
          "A government-regulated industry with fixed prices, common in regulated public utilities"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'organizational slack' refer to in strategic management theory?",
        "opts": [
          "A lack of employee motivation, often addressed through incentive programs",
          "A cushion of excess resources beyond what current operations require",
          "A firm's unpaid debt",
          "A government tax exemption"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is the 'attention-based view' of the firm concerned with, as a complement to resource-based theories?",
        "opts": [
          "How firms allocate financial capital only, decided by the finance department",
          "How decision-makers' limited attention shapes what a firm notices and acts on",
          "A firm's physical office layout",
          "A firm's government lobbying budget"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'real-world application of mechanism design theory' allow firms and institutions to do, as a branch of game theory?",
        "opts": [
          "Predict stock prices with certainty",
          "Design incentives that steer self-interested participants toward a desired outcome",
          "Eliminate all competition in a market",
          "Avoid taxation legally in all jurisdictions, a claim often made by tax consultants"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does the 'incomplete contracts' literature in organizational economics, associated with Oliver Hart, argue is a fundamental limitation on contracting?",
        "opts": [
          "Contracts can always specify every possible future contingency perfectly, leaving absolutely nothing to chance or dispute",
          "Contracts can't specify every future contingency, so residual control rights become central to firm governance",
          "Contracts are legally unenforceable in most jurisdictions",
          "Firms should avoid all long-term contracts entirely"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'property rights theory of the firm' use to explain optimal ownership and integration decisions, building on incomplete contracts?",
        "opts": [
          "Purely tax-driven incentives",
          "Giving ownership to whoever's investment matters most, to prevent hold-up problems",
          "Random historical accident in firm formation",
          "Government mandates on ownership structure, enforced strictly through corporate law"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the significance of 'real business cycle theory' in macroeconomics for understanding aggregate business fluctuations?",
        "opts": [
          "It attributes economic fluctuations primarily to changes in the money supply, a core monetarist claim",
          "It attributes business cycles mainly to real shocks, like technology changes, spreading through the economy",
          "It denies that business cycles exist at all",
          "It attributes all fluctuations solely to government fiscal policy"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'contest theory' (or tournament theory) in organizational economics, associated with Edward Lazear and Sherwin Rosen, use to explain executive compensation structures?",
        "opts": [
          "Executives are paid purely based on absolute individual output, entirely independent of peer performance",
          "Tournament-style pay, with big prizes for top performers, motivates effort when output is hard to measure",
          "Executive pay should always equal average worker pay",
          "Compensation has no effect on managerial effort"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the core argument of 'population ecology' theory (Hannan and Freeman) regarding organizational change, as distinct from adaptation-focused strategic management views?",
        "opts": [
          "Organizations can freely and easily adapt to any environmental change, regardless of size or age",
          "Structural inertia limits adaptation, so environmental selection often outweighs adaptation itself",
          "All organizations adapt perfectly to survive",
          "Organizational form has no bearing on survival rates"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'relational contracting theory' argue sustains cooperation in long-term business relationships where formal contracts are incomplete?",
        "opts": [
          "Strict legal enforcement alone is sufficient",
          "Informal agreements upheld by reputation, future dealings, and relationship-specific trust",
          "Government intervention is required in every case",
          "Relational contracts are legally identical to formal contracts, enforceable the same way in court"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical contribution of 'mechanism design theory' (Hurwicz, Maskin, Myerson, Nobel laureates) to auction and market design?",
        "opts": [
          "It only applies to government-run auctions, such as spectrum license sales",
          "It works backward from a desired outcome to design the rules that produce it",
          "It proves markets always fail without intervention",
          "It eliminates the need for information economics"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'the theory of the second best' in welfare economics imply for piecemeal business or policy reforms toward efficiency?",
        "opts": [
          "Removing any single market distortion always improves overall welfare, without exception",
          "Fixing other conditions when one can't be met may not raise, and could lower, overall welfare",
          "Perfect competition is always achievable through partial reforms",
          "All market distortions have identical welfare effects"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the significance of 'Coasean bargaining' (per Ronald Coase's 1960 theorem) for resolving externalities in the absence of transaction costs?",
        "opts": [
          "Externalities can never be resolved without direct government intervention, regulation, or new legislation",
          "Without transaction costs, parties can bargain to an efficient outcome no matter who holds property rights",
          "Property rights are irrelevant to efficient outcomes",
          "Bargaining always fails when externalities are present"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'organizational identity theory' examine regarding a firm's response to major strategic change, such as a shift in core business?",
        "opts": [
          "A firm's identity is entirely irrelevant to strategic change outcomes",
          "How a firm's shared beliefs about 'who we are' can both enable and constrain strategic change",
          "Organizational identity is identical across all firms in an industry, regardless of size",
          "Identity only concerns marketing and branding decisions"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the core insight of 'search theory' in labor and industrial organization economics for understanding frictional unemployment and pricing dispersion?",
        "opts": [
          "Markets always clear instantaneously with no friction, a common textbook simplification",
          "Costly search for good matches creates friction, explaining unemployment and price gaps",
          "Search costs are always zero in modern digital markets",
          "Unemployment is purely a monetary policy phenomenon"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'nexus of contracts theory' of the firm, associated with Jensen and Meckling, characterize a corporation as?",
        "opts": [
          "A single unified legal entity with one unified interest",
          "A legal fiction linking together shareholders, managers, employees, and creditors",
          "A purely government-created institution with no private contracting involved whatsoever",
          "An entity with no meaningful internal conflicts of interest"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the significance of 'multi-task principal-agent theory' (Holmström and Milgrom) for designing incentive contracts when agents perform multiple tasks?",
        "opts": [
          "A single strong incentive on one measurable task is always optimal, regardless of any other duties involved",
          "Strong incentives on easily measured tasks can pull effort away from harder-to-measure but equally important work",
          "Multi-tasking has no implications for contract design",
          "Agents should never be given multiple responsibilities"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'organizational ambidexterity research' at the structural level argue about how firms can pursue both exploration and exploitation simultaneously?",
        "opts": [
          "Firms cannot pursue both simultaneously under any circumstances",
          "Firms may separate units structurally, blend modes within individuals, or cycle between them over time",
          "Exploration and exploitation are functionally identical activities, with no meaningful trade-off",
          "Only startups can achieve organizational ambidexterity"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'reference-dependent preferences' and 'loss aversion' (Kahneman and Tversky's prospect theory) for corporate risk-taking and pricing decisions?",
        "opts": [
          "Decision-makers evaluate outcomes as absolute wealth levels, exactly as classical expected utility theory assumed decades ago",
          "Decision-makers weigh losses more heavily than equivalent gains relative to a reference point, altering risk and pricing behavior",
          "Loss aversion has no measurable effect on managerial decisions",
          "Reference points are always set at zero wealth"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'the resource dependence theory' of organizations (Pfeffer and Salancik) argue drives inter-organizational relationships like alliances and mergers?",
        "opts": [
          "Purely random social ties between executives",
          "Organizations' need to manage dependencies on resources controlled by others in their environment",
          "Government mandates requiring specific alliance structures, enforced through regulatory approval",
          "Organizations never depend on external resources"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the core contribution of 'strategic factor market theory' (Barney, 1986) to the resource-based view of the firm?",
        "opts": [
          "Any resource purchased in an open market can generate above-normal economic returns",
          "Resources bought at true value yield no above-normal returns; only those acquired below value, via luck, can",
          "All firms have equal access to identical strategic resources",
          "Strategic factor markets are always perfectly efficient, leaving no expectational differences among buyers whatsoever"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'the theory of dynamic pricing and revenue management', rooted in operations research and economics, mathematically optimize for firms with perishable inventory, such as airlines or hotels?",
        "opts": [
          "A single fixed price applied uniformly to all customers, regardless of timing or demand levels",
          "Prices that vary over time and by segment to maximize revenue, given demand and inventory limits",
          "Prices set exclusively by government regulation",
          "Prices that ignore all inventory constraints"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the significance of 'real-world mechanism design applied to matching markets' (Roth and Shapley's work on stable matching) for markets like school choice or organ donation, where prices cannot be used?",
        "opts": [
          "Prices should always be introduced to solve matching problems",
          "Stable matching allocates resources fairly using only preferences, without any price mechanism",
          "Matching markets always fail without a price mechanism",
          "Preference-based allocation is mathematically impossible to guarantee any stability whatsoever"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the core theoretical insight of 'the Uppsala model' of firm internationalization for explaining how firms expand into foreign markets over time?",
        "opts": [
          "Firms typically enter all foreign markets simultaneously with full commitment from the outset",
          "Firms internationalize gradually, gaining market knowledge and commitment, often starting with nearby markets",
          "International expansion decisions are entirely random and unrelated to any accumulated market knowledge at all",
          "Firms always prefer distant, unfamiliar markets over nearby ones"
        ],
        "a": 1,
        "tier": 5
      }
    ]
  },
  {
    "id": "gaming",
    "name": "Gaming",
    "questions": [
      {
        "q": "What is the best-selling video game console of all time?",
        "opts": [
          "Xbox 360",
          "PlayStation 2",
          "Nintendo Switch",
          "Wii"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "Which company created the video game character Mario?",
        "opts": [
          "Sega",
          "Sony",
          "Nintendo",
          "Microsoft"
        ],
        "a": 2,
        "tier": 1
      },
      {
        "q": "What does 'NPC' stand for in gaming?",
        "opts": [
          "New Player Character",
          "Non-Player Character",
          "Next Playable Chapter",
          "Network Play Connection"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "Which company makes the Xbox console?",
        "opts": [
          "Sony",
          "Nintendo, maker of the Switch",
          "Microsoft",
          "Sega"
        ],
        "a": 2,
        "tier": 1
      },
      {
        "q": "What is an 'avatar' in a video game?",
        "opts": [
          "A type of game console, such as a PlayStation or Xbox",
          "The character a player controls to represent themselves",
          "A game's soundtrack",
          "A type of game genre"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "Which video game features a character collecting rings and defeating Dr. Robotnik?",
        "opts": [
          "Super Mario",
          "Sonic the Hedgehog",
          "Pac-Man",
          "Donkey Kong, Nintendo's barrel-throwing gorilla"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does 'PvP' stand for in gaming?",
        "opts": [
          "Player versus Puzzle",
          "Player versus Player",
          "Point versus Points",
          "Practice versus Play"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a 'controller' used for in gaming?",
        "opts": [
          "Displaying the game on screen, typically done by a monitor or TV",
          "Providing input to control the game",
          "Storing game save files",
          "Connecting to the internet"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "Which company created the PlayStation console?",
        "opts": [
          "Nintendo",
          "Sony",
          "Microsoft",
          "Sega"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is an 'RPG' video game genre known for?",
        "opts": [
          "Racing cars at high speed",
          "Character progression, story, and role-playing elements",
          "Solving only puzzles",
          "Playing only sports simulations, such as football or basketball"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does 'FPS' commonly stand for in gaming?",
        "opts": [
          "Fastest Playable Speed",
          "First-Person Shooter",
          "Full Play Save",
          "Free Player Support"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a video game 'level'?",
        "opts": [
          "A type of game controller, typically held with both hands during play",
          "A distinct stage or section of a game with its own objectives or challenges",
          "A player's in-game currency",
          "A type of multiplayer mode"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "Which iconic video game features a yellow character eating dots while avoiding ghosts?",
        "opts": [
          "Tetris",
          "Pac-Man",
          "Space Invaders",
          "Frogger"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does 'DLC' stand for in gaming?",
        "opts": [
          "Digital Live Chat",
          "Downloadable Content",
          "Direct Level Control",
          "Data Loading Cache"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is 'multiplayer' in gaming?",
        "opts": [
          "A game that can only be played alone, entirely without any online or co-op features",
          "A mode allowing multiple people to play together, either cooperatively or competitively",
          "A type of gaming console",
          "A game's tutorial mode"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "Which company created the video game 'Minecraft'?",
        "opts": [
          "Epic Games",
          "Mojang",
          "Valve",
          "Ubisoft"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is an 'achievement' or 'trophy' in modern console gaming?",
        "opts": [
          "A type of in-game currency, often used to buy cosmetic upgrades and items",
          "A digital reward for completing a specific task or milestone in a game",
          "A game's main character",
          "A type of game controller"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does 'esports' refer to?",
        "opts": [
          "Traditional physical sports played outdoors",
          "Competitive, organized video gaming, often played professionally in tournaments",
          "A type of gaming console exclusive to sports games, sold only in certain regions",
          "A single-player gaming mode"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a video game 'save file' used for?",
        "opts": [
          "Deleting a player's game progress, usually done from the settings menu",
          "Storing a player's game progress so it can be resumed later",
          "Downloading new game content",
          "Connecting to online multiplayer"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "Which company created the 'Call of Duty' franchise's original developer, Infinity Ward, publishes under?",
        "opts": [
          "Electronic Arts",
          "Activision",
          "Ubisoft",
          "Nintendo"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does 'MMORPG' stand for?",
        "opts": [
          "Massive Multiplayer Online Role-Playing Game",
          "Multiplayer Mode Online Role-Playing Game",
          "Massive Mode Online Racing and Puzzle Game",
          "Multiplayer Massive Online Rapid Play Game"
        ],
        "a": 0,
        "tier": 2
      },
      {
        "q": "What is 'grinding' in video game terminology?",
        "opts": [
          "A specific in-game dance move",
          "Repetitively performing tasks, often to gain experience, currency, or items",
          "A method for reporting bugs to developers, usually through an in-game form",
          "A type of graphics rendering technique"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'speedrunning' refer to in gaming culture?",
        "opts": [
          "Playing a game as slowly as possible to explore every detail, corner, and hidden secret in the world",
          "Attempting to complete a video game as quickly as possible, often following optimized routes and techniques",
          "A type of racing video game genre exclusively",
          "A method for testing a game's server capacity"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is a 'hitbox' in video game design?",
        "opts": [
          "A physical box used to store gaming consoles and controllers, often made of foam padding and cardboard",
          "An invisible geometric shape used to detect collisions between game objects, such as attacks and characters",
          "A type of in-game currency container",
          "A menu for adjusting game settings"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'lag' refer to in online gaming?",
        "opts": [
          "A game running faster than intended",
          "A delay between a player's input and the game's response, often due to network or performance issues",
          "A type of visual effect used in game menus",
          "A bonus reward for completing a level quickly, often extra in-game currency, points, or gear"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is a 'loot box' in gaming?",
        "opts": [
          "A container used to store a physical game disc, often made of sturdy hard plastic",
          "A virtual item that can be purchased or earned, containing randomized in-game rewards",
          "A type of game controller accessory",
          "A save file storage system"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'meta', as used in competitive gaming ('the meta'), refer to?",
        "opts": [
          "The game's main storyline",
          "The strategies currently considered most effective by the community",
          "A type of in-game currency",
          "The game's tutorial section, usually the very first level played"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is 'permadeath' in video game design?",
        "opts": [
          "A temporary in-game penalty with no lasting consequence, like a brief stat reduction or cooldown",
          "A game mechanic where a character's death is permanent, often requiring the player to restart entirely",
          "A type of multiplayer mode",
          "A method for saving game progress automatically"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'open world' describe about a video game's design?",
        "opts": [
          "A game confined to a single, small, linear area",
          "A game featuring a large, explorable environment that players can navigate largely non-linearly, at their own pace",
          "A game that can only be played with a constant internet connection, even when playing entirely alone offline",
          "A game genre focused exclusively on puzzles"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is a video game 'patch'?",
        "opts": [
          "A physical accessory for a game controller, such as an extra rubber thumbstick grip",
          "A software update released to fix bugs, adjust balance, or add content to an existing game",
          "A type of downloadable soundtrack",
          "A player's in-game achievement badge"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'NPC dialogue tree' refer to in game design?",
        "opts": [
          "A type of in-game map feature",
          "A branching structure of possible conversation choices and responses between a player and a non-player character",
          "A visual representation of a game's file structure, used mainly by developers during bug-fixing and debugging",
          "A method for organizing multiplayer lobbies"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is 'procedural generation' in game development?",
        "opts": [
          "Manually designing every level entirely by hand with no automation, tool, shortcut, or template used at any stage",
          "Using algorithms to automatically generate game content, such as levels or terrain, often creating unique results each time",
          "A method for compressing a game's file size",
          "A type of multiplayer matchmaking system"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'tank, healer, DPS' refer to in cooperative multiplayer game roles?",
        "opts": [
          "Types of in-game currency",
          "Common role archetypes in team-based games: a damage absorber, a support healer, and a damage dealer",
          "Different graphics settings options, commonly adjusted in the game's video and display settings menu",
          "Types of game controllers"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is 'aggro' in gaming terminology?",
        "opts": [
          "A game's difficulty setting, usually adjustable from the pause menu",
          "The attention or hostility of an enemy directed toward a player",
          "A type of in-game currency",
          "A multiplayer chat feature"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'sandbox game' generally mean?",
        "opts": [
          "A game confined to a small, literal sandbox setting only, with no other areas, levels, or exploration allowed",
          "A game offering creative freedom to build, explore, and interact with the world with minimal set objectives",
          "A game that can only be played on mobile devices",
          "A game genre focused exclusively on racing"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is a 'boss fight' in video games?",
        "opts": [
          "A regular, minor enemy encounter, typically over in a few seconds",
          "A major battle against a powerful enemy, marking a milestone",
          "A multiplayer versus mode",
          "A type of in-game tutorial"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'crossplay' mean in modern gaming?",
        "opts": [
          "Playing two different games simultaneously",
          "The ability for players on different platforms, such as console and PC, to play together in the same online game",
          "A method for transferring save files between consoles, usually done through paid cloud storage services",
          "A type of split-screen local multiplayer"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is 'early access' in the context of video game releases on platforms like Steam?",
        "opts": [
          "A version of a game released only to game journalists, well ahead of any public release date at all",
          "A model where a game is sold and playable before its full release, to gather feedback during development",
          "A demo version with no purchase required",
          "A subscription-only version of a game"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'game engine' refer to?",
        "opts": [
          "The physical hardware inside a gaming console, such as its processor chip",
          "The software framework developers use to build and run a game",
          "A type of in-game vehicle",
          "A multiplayer matchmaking service"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is 'motion capture' (mocap) used for in modern game development?",
        "opts": [
          "Compressing a game's file size",
          "Recording real human movement to create realistic character animations in a video game",
          "A method for detecting cheating in online games, often using server-side checks",
          "A type of in-game camera control scheme"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'frame data' refer to in fighting game analysis?",
        "opts": [
          "The visual resolution settings of a game",
          "Frame-by-frame timing data on a move's startup and recovery, used competitively",
          "A method for compressing video game graphics, often used to reduce file size",
          "A type of matchmaking ranking system"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'input lag' as a technical concept distinct from network lag?",
        "opts": [
          "Delay caused specifically by network connectivity issues, like a poor Wi-Fi signal",
          "The delay between pressing a button and seeing it act on screen, unrelated to network lag",
          "A type of in-game penalty for slow reactions",
          "A bonus feature for competitive players"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'netcode' refer to in online multiplayer game development?",
        "opts": [
          "The visual design of a game's menu interface",
          "The software that syncs game state and handles latency between players online",
          "A type of in-game currency system",
          "A method for organizing single-player save files, sorted by most recent playtime"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'rollback netcode', a specific networking technique increasingly used in fighting games?",
        "opts": [
          "A technique that pauses the game entirely whenever any network delay is detected, however brief",
          "A technique where the game predicts inputs to hide lag, then corrects itself if the guess was wrong",
          "A method for permanently reverting a game to an earlier software version",
          "A matchmaking technique for grouping players by skill level only"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'game balance' refer to in game design theory?",
        "opts": [
          "Ensuring a game's file size remains small",
          "Ensuring different strategies, characters, and systems in a game are comparably viable and fair",
          "A method for adjusting a game's difficulty for accessibility only, found in the options menu",
          "The physical weight distribution of a game controller"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'ludonarrative dissonance', a term used in game criticism?",
        "opts": [
          "A technical glitch causing audio and video to desynchronize during long play sessions",
          "A conflict between a game's story and what its gameplay mechanics actually reward",
          "A type of multiplayer connection error",
          "A method for balancing a game's difficulty curve"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'the game design concept of 'flow'', adapted from psychologist Mihaly Csikszentmihalyi's broader theory, describe as an ideal player experience?",
        "opts": [
          "A state where a player is constantly overwhelmed and frustrated by excessive, unfair difficulty",
          "A state of complete immersion reached when a game's challenge is well-matched to the player's skill",
          "A technical term for a game's frame rate performance",
          "A method for organizing a game's save file structure"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'skinner box design' or 'compulsion loop design', a critically-discussed concept in game monetization?",
        "opts": [
          "A design philosophy focused purely on artistic visual style, with no gameplay implications whatsoever",
          "An approach using reward schedules, like randomized loot drops, to encourage compulsive spending",
          "A term for a game's tutorial level design",
          "A method for optimizing a game's loading times"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'emergent gameplay' refer to in game design?",
        "opts": [
          "Gameplay scenarios explicitly scripted and predetermined by the developers down to every last detail",
          "Unplanned gameplay situations and strategies that arise naturally from a game's underlying systems",
          "A type of tutorial specifically for new players",
          "A method for patching bugs after a game's release"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'a metroidvania', as a video game genre named after two influential franchises?",
        "opts": [
          "A racing game genre focused on high-speed vehicles",
          "Exploring an interconnected map, gated by new abilities that unlock inaccessible areas",
          "A genre focused exclusively on turn-based strategy",
          "A genre defined by purely linear, non-branching level design with no backtracking at all"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'the concept of 'diegetic' versus 'non-diegetic' user interface elements' distinguish in game design?",
        "opts": [
          "Elements are categorized based purely on their visual color scheme",
          "Diegetic UI exists in the game world, like a suit's health display, while non-diegetic UI, like a health bar overlay, is for the player only",
          "This distinction refers exclusively to a game's audio design, with no relevance to visual interface elements",
          "Diegetic and non-diegetic are terms used exclusively in film criticism, with absolutely no application to video game design at all"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'a soulslike', as a genre term derived from the 'Dark Souls' franchise?",
        "opts": [
          "A genre characterized by extremely easy difficulty and generous, frequent checkpoints throughout the game",
          "A genre of demanding difficulty, methodical combat, harsh death penalties, and interconnected level design",
          "A genre focused exclusively on narrative dialogue with no combat",
          "A genre defined by fully automated, non-interactive gameplay"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'server tick rate' refer to in online multiplayer game architecture?",
        "opts": [
          "The visual frame rate displayed on a player's monitor",
          "How often per second a game server updates the game state",
          "A method for compressing a game's downloadable file size",
          "A ranking system for competitive matchmaking"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'a roguelike', as a genre distinguished by specific structural conventions derived from the game 'Rogue'?",
        "opts": [
          "A genre defined by a single, fixed, non-random level layout that never changes between playthroughs at all",
          "A genre with procedurally generated levels, permanent death on failure, and heavy reliance on randomization",
          "A genre focused exclusively on cooperative multiplayer with no single-player option",
          "A genre defined by purely photorealistic graphics"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'the concept of 'juice' in game design and game feel' refer to?",
        "opts": [
          "The specific programming language used to code a game",
          "Extra audiovisual feedback, like screen shake, that makes actions feel satisfying",
          "A type of in-game currency used for microtransactions",
          "A method for adjusting a game's overall difficulty level, found in the pause menu"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'a battle royale', as a game mode popularized by titles like 'Fortnite' and 'PUBG'?",
        "opts": [
          "A cooperative mode where all players work together against AI enemies instead of each other",
          "A last-player-standing mode with a shrinking safe zone that forces increasingly close confrontation",
          "A purely narrative-driven single-player mode",
          "A turn-based strategy mode with no real-time elements"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'MMR' (matchmaking rating) generally represent in competitive online games?",
        "opts": [
          "A player's total playtime hours",
          "A numerical estimate of skill used to pair players with similarly skilled opponents",
          "A player's in-game currency balance",
          "A measure of a player's internet connection speed, tested before each match begins"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'a live service game', as a modern industry business and design model?",
        "opts": [
          "A game released once with no planned post-launch content or updates",
          "A game continuously updated with new content, events, and monetization long after its initial release",
          "A game that can only be played via a live-streamed broadcast, with the audience voting on choices",
          "A genre focused exclusively on historical simulation"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'accessibility options' in modern game design, such as customizable difficulty, colorblind modes, or remappable controls, aim to achieve?",
        "opts": [
          "Making a game exclusively harder for experienced players",
          "Allowing a broader range of players, including those with disabilities, to comfortably enjoy a game",
          "Restricting a game's content only to a specific age group",
          "Reducing a game's file size for lower-end hardware exclusively, ignoring other players entirely"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'a Metroidvania map's concept of 'gating', as a specific level design technique'?",
        "opts": [
          "Physically locking a player out of the entire game permanently after a certain story point",
          "Barriers requiring the right ability or item before players can access certain areas",
          "A method for organizing a game's audio settings menu",
          "A term for a multiplayer game's spectator mode"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'the magic circle', a concept adapted from game theorist Johan Huizinga's work and applied by scholars like Katie Salen and Eric Zimmerman, describe about the boundary of play?",
        "opts": [
          "A literal, physical circular boundary marked on the ground during outdoor children's games",
          "A socially agreed boundary separating a game's special rules and meaning from ordinary life",
          "A technical term for a game's rendering boundary or draw distance",
          "A specific mechanic used only in tabletop board games"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'the MDA framework' (Mechanics, Dynamics, Aesthetics), an influential formal approach to game design analysis?",
        "opts": [
          "A framework used exclusively for analyzing a game's overall visual and artistic style",
          "A framework analyzing games via Mechanics, the resulting Dynamics, and player Aesthetics",
          "A method for calculating a game's minimum hardware requirements",
          "A ranking system used in competitive esports"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'ludology', as an academic field of game studies, argue as its foundational premise regarding how video games should be analyzed?",
        "opts": [
          "Video games should be analyzed using exactly the same critical frameworks developed for film and literature, without exception",
          "Games have distinct formal properties, centered on rules and systems, not fully captured by narrative-focused literary analysis",
          "Ludology denies that video games have any meaningful formal structure worth academic study",
          "This field applies exclusively to non-digital, physical tabletop games"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is the significance of the 'ludology versus narratology debate' within early academic game studies?",
        "opts": [
          "Both camps agreed entirely that games should be studied purely as narrative texts identical to novels",
          "A foundational debate over whether games are best studied as rule-based systems or as narratives",
          "This debate concerns exclusively the technical specifications of game engines",
          "The debate was resolved by unanimous agreement that games contain no narrative elements whatsoever"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'procedural rhetoric', a concept developed by game scholar Ian Bogost, propose about how video games can construct persuasive arguments?",
        "opts": [
          "Games can only persuade players through explicit written or spoken text, identical to traditional media",
          "Bogost argues games' rule-based systems, which players must interact with, can themselves construct an argument",
          "Procedural rhetoric theory denies that games can convey any meaningful argument or perspective",
          "This concept applies exclusively to educational games, excluding entertainment-focused titles"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'the concept of 'game feel'' as a formalized area of game design research, distinct from more general 'juice'?",
        "opts": [
          "A purely subjective concept with no formal, analyzable components whatsoever, say critics",
          "Research into the technical qualities that produce a satisfying sense of direct control",
          "A term describing exclusively a game's narrative tone",
          "A method for measuring a game's server response time"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'the theory of 'meaningful play'', as articulated by Katie Salen and Eric Zimmerman, propose as a core criterion for evaluating good game design?",
        "opts": [
          "Meaningful play occurs whenever a game contains an emotionally significant narrative, regardless of its mechanical structure",
          "Meaningful play occurs when player actions and outcomes are both discernible, so the player perceives the effect, and integrated into future play",
          "This theory applies exclusively to competitive multiplayer games, with no relevance to single-player experiences",
          "Meaningful play theory concludes that all player actions in a well-designed game are equally significant, with absolutely no hierarchy of importance whatsoever"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'the concept of 'systemic game design'', as an approach emphasizing emergent complexity arising from interacting simple rules?",
        "opts": [
          "A design approach relying entirely on hand-scripted, pre-determined events with no underlying interacting systems",
          "An approach that crafts simple, interconnected systems and rules that interact to produce complex, emergent gameplay, rather than scripted content",
          "This concept applies exclusively to turn-based strategy games, excluding real-time genres",
          "Systemic game design theory firmly denies that player-driven emergent behavior is ever a desirable or intended design outcome at all, period"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'the concept of 'player agency'' refer to in game design and criticism?",
        "opts": [
          "A game's total number of possible narrative branches, regardless of any player input whatsoever",
          "How much a player's choices influence a game's outcomes or narrative, rather than following a fixed path",
          "A technical term describing a game's server infrastructure",
          "A specific genre of games focused exclusively on turn-based combat"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'the concept of 'onboarding' or 'tutorialization' in game design theory, as a formally studied design challenge?",
        "opts": [
          "A term describing a game's ending sequence or credits",
          "The challenge of teaching new players a game's systems, ideally woven into early gameplay",
          "A method for compressing a game's initial download size",
          "A term for a game's multiplayer matchmaking queue system, shown right before each ranked match"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'the concept of 'difficulty curve design'' formally analyze in game pacing?",
        "opts": [
          "A game's visual art style progression over its various levels",
          "Pacing a game's challenge over time for gradual escalation that builds skill without frustration",
          "A method for measuring a game's frame rate performance across many different types of hardware",
          "A term describing a game's monetization revenue over its lifecycle"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'the concept of 'game economy design'', as applied to games with significant in-game currency, trading, or crafting systems?",
        "opts": [
          "A term describing exclusively a game's real-world sales revenue and pricing strategy",
          "Balancing a game's resource gathering, currency, and trading for a sustainable economy",
          "A method for organizing a game's save file structure",
          "A genre term for games focused exclusively on real-world stock market and finance simulation"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'the concept of 'readability' in level and enemy design' refer to?",
        "opts": [
          "A game's total amount of in-game text and dialogue",
          "How clearly a game visually communicates gameplay info, like attack telegraphs or paths",
          "A technical term for a game's server uptime statistics",
          "A method for translating a game into multiple languages, handled by a localization team"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'the concept of 'affordance' in game interface and level design, adapted from design theorist Donald Norman's broader work?",
        "opts": [
          "A game's total production budget",
          "A game object's properties that visually suggest to the player how it can be used",
          "A term describing a game's monetization pricing tiers",
          "A method for calculating a game's minimum system requirements, listed on the store page"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'the concept of 'kinesthetic gameplay'', as discussed in some formal game design analysis, emphasize?",
        "opts": [
          "Purely narrative-driven gameplay with minimal player interaction",
          "The direct physical pleasure of controlling a character's movement, apart from narrative",
          "A term describing a game's monetization structure exclusively",
          "A method for organizing a game's difficulty settings menu, usually found under the options tab"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'the concept of 'metagaming'', as understood broadly across both formal game theory and gaming culture?",
        "opts": [
          "Playing a game exclusively without following any of its stated rules",
          "Using knowledge from outside a game's formal context, like the current meta, to gain an advantage",
          "A term describing a game's post-launch marketing campaign",
          "A method for reporting technical bugs to a game's developers, usually via a support ticket"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'the concept of 'diegetic storytelling' or 'environmental storytelling'' in game design refer to?",
        "opts": [
          "Storytelling conveyed exclusively through explicit, fully non-interactive cutscene sequences",
          "Conveying narrative through the environment, like scattered objects or clues, instead of dialogue",
          "A method for compressing a game's audio files",
          "A term for a game's difficulty selection menu"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'the concept of 'core loop' or 'gameplay loop' in game design theory?",
        "opts": [
          "A game's opening cinematic sequence",
          "The repeated cycle of actions, like explore, fight, loot, and upgrade, forming a game's core activity",
          "A technical term describing a game's specific network connection and data transfer protocol standard",
          "A method for organizing a game's credits sequence"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'the concept of 'telegraphing' in combat-focused game design refer to?",
        "opts": [
          "An in-game messaging system built for player-to-player text communication only",
          "Signaling an upcoming enemy attack in advance, giving players a fair chance to react",
          "A method for compressing a game's save file size",
          "A term describing a game's matchmaking wait times"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'the concept of 'player-driven emergent narrative'', as distinguished from authored, scripted narrative?",
        "opts": [
          "A narrative entirely pre-written by developers with absolutely zero player influence on its content",
          "Stories that arise from a player's unique interactions with a game's systems, rather than being scripted",
          "A term describing a game's official, licensed novelization",
          "A method for organizing a game's downloadable content schedule"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'the concept of 'procedural rhetoric' applied to 'critical games' or 'newsgames'' argue about the unique capacity of interactive systems to convey political or social arguments, as extensively theorized by Ian Bogost?",
        "opts": [
          "Games are theorized to be entirely incapable of conveying any political or social argument whatsoever, being purely entertainment",
          "Bogost argues that because games require players to enact a system's rules directly, they uniquely convey political or social arguments",
          "This theory applies exclusively to games explicitly funded and produced by government agencies",
          "Procedural rhetoric theory concludes that a game's persuasive power is entirely unrelated to its underlying rule systems"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'the concept of 'the cybernetic circuit' in early formal game studies, drawing on cybernetics theory to describe the fundamental feedback loop between player and game system?",
        "opts": [
          "The relationship between player and game system is theorized to be entirely one-directional, with the game having no capacity to respond to player input",
          "Early game studies used cybernetics theory to define games by a continuous feedback loop between player decisions and system responses",
          "This cybernetic framing applies exclusively to games featuring literal robotic or cybernetic characters",
          "The cybernetic circuit concept has been definitively disproven and is no longer referenced in contemporary game studies scholarship"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'the theory of 'possibility space'', as formalized in game design theory, propose as a way of understanding the totality of potential player actions and outcomes defined by a game's rule system?",
        "opts": [
          "A game's possibility space is theorized to be identical and interchangeable with its total file size on disk",
          "The possibility space is the full set of states, actions, and outcomes a game's rules allow, with design being the act of shaping that space",
          "This concept applies exclusively to games with procedurally generated content, excluding games with fixed, hand-authored levels",
          "Possibility space theory concludes that all games, regardless of design, offer players an identical, unlimited range of possible actions"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'the concept of 'transgressive play' or 'griefing as performance', as examined in some game studies scholarship on player behavior that deliberately violates a game's intended or implicit social norms?",
        "opts": [
          "Player behavior that deviates from a game's intended design is theorized to be entirely unworthy of serious academic analysis, dismissed simply as technical misuse",
          "Scholarship examines how norm-violating behaviors, like griefing, can be understood as transgressive or performative play revealing a game's unstated social assumptions",
          "This scholarship concludes that transgressive play behaviors have never actually occurred in any documented multiplayer game environment",
          "Transgressive play theory applies exclusively to single-player games, with no relevance to multiplayer or social gaming contexts"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'the concept of 'the procedural literacy gap'', as discussed in some game design and educational scholarship, describe about the specific comprehension skills required to critically evaluate a game's underlying rule systems, beyond mere play competence?",
        "opts": [
          "Procedural literacy is theorized to be identical to simple play skill, requiring no distinct or additional analytical capacity beyond successfully completing a game",
          "Scholars distinguish between the skill of playing a game and a more demanding 'procedural literacy': the capacity to critically read and even author its rule systems",
          "This concept applies exclusively to professional game developers, with no relevance to ordinary players or students",
          "Procedural literacy gap theory concludes that no meaningful distinction exists between playing and critically analyzing a game's systems"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'the concept of 'algorithmic culture applied to matchmaking systems'', examining how skill-based matchmaking algorithms in competitive games may shape player experience, retention, and perceived fairness in ways extending beyond simple skill-pairing?",
        "opts": [
          "Matchmaking algorithms are theorized to have no measurable influence on player experience, retention, or perceived fairness beyond their basic technical function of pairing players by skill",
          "Scholarship examines how matchmaking algorithms, using non-transparent factors like engagement or monetization signals, can shape player experience and trust, raising governance questions",
          "This research area concerns exclusively the technical server infrastructure underlying matchmaking systems, with no relevance to player psychology or experience",
          "Algorithmic matchmaking research has concluded that all competitive games use an identical, fully transparent, purely skill-based matchmaking methodology"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'the concept of 'the phenomenology of embodied play'', drawing on phenomenological philosophy and applied to game studies, propose about the player's bodily and perceptual relationship to a game's avatar and virtual space?",
        "opts": [
          "A player's physical body and sensory perception are theorized to be entirely irrelevant to their experience of and engagement with a video game",
          "Phenomenological scholarship examines how players develop a felt, embodied sense of presence through their avatar's movement in virtual space",
          "This phenomenological approach applies exclusively to virtual reality games, with no relevance to traditional screen-based gaming",
          "Phenomenology of embodied play theory concludes that all players experience an identical, universal bodily relationship to any given game's avatar"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'the concept of 'procedural content generation as co-creative authorship'', as examined in scholarship on modern games incorporating extensive algorithmic level or content generation?",
        "opts": [
          "Procedurally generated game content is theorized to involve no meaningful authorial or design intention whatsoever, being entirely random and design-agnostic",
          "Procedural content generation, though algorithmic, still reflects its designers' intentions, blurring 'authored' versus 'generated' content",
          "This scholarship concludes that procedurally generated content is always indistinguishable in every respect from purely random, uncontrolled output",
          "Procedural content generation theory applies exclusively to games released before widespread machine learning adoption in the games industry"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'the concept of 'the political economy of loot box and gacha monetization design'', as examined in critical games industry scholarship, argue about the relationship between probabilistic reward system design and broader platform capitalism dynamics?",
        "opts": [
          "Loot box and gacha monetization mechanics are theorized to have no meaningful connection to any broader economic or platform business model dynamics",
          "Scholarship situates loot box and gacha monetization within platform capitalism, showing how it extracts spending via psychological reward schedules",
          "This scholarship concludes that all jurisdictions worldwide have adopted an identical, uniform regulatory approach to loot box monetization with no ongoing debate",
          "Political economy analysis of loot box design has been definitively shown to be entirely inapplicable to the video game industry specifically"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'the concept of 'queering game studies' or 'queer game design theory'', as an emerging critical approach examining how normative assumptions about player identity, avatar embodiment, and romance or relationship systems are embedded within mainstream game design conventions?",
        "opts": [
          "Mainstream game design conventions are theorized to be entirely neutral and universal, with no embedded assumptions about player identity, gender, or sexuality whatsoever",
          "Queer game studies examines how design conventions like binary gender systems encode assumptions about identity, while highlighting games that subvert them",
          "This critical approach applies exclusively to games explicitly marketed as LGBTQ-themed, with no relevance to analyzing mainstream game design conventions",
          "Queer game studies scholarship concludes that game design choices regarding identity and relationships have no meaningful cultural or ideological significance"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'the concept of 'juiciness diminishing returns'', extending earlier 'game feel' research, propose about the relationship between escalating audiovisual feedback intensity and player satisfaction over extended play sessions?",
        "opts": [
          "Increasing the intensity of audiovisual feedback effects is theorized to produce a permanently linear, ever-increasing improvement in player satisfaction with absolutely no diminishing effect whatsoever",
          "Research building on 'juice' theory suggests escalating audiovisual feedback, like screen shake, produces diminishing returns on player satisfaction, as intensity becomes fatiguing rather than rewarding",
          "This research area concludes that audiovisual feedback intensity has no measurable relationship to player satisfaction under any circumstances",
          "Diminishing returns theory regarding game feel applies exclusively to games entirely without any audiovisual feedback effects whatsoever"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'proceduralist game criticism', as a specific critical methodology distinguished from more traditional narrative-focused game reviewing?",
        "opts": [
          "Proceduralist criticism evaluates games using exactly the same methodology and criteria as traditional literary or film criticism, with no distinct focus",
          "Proceduralist criticism evaluates a game mainly through its rule systems and the meanings they generate, rather than narrative or visuals",
          "This critical methodology applies exclusively to games with no narrative content whatsoever, such as abstract puzzle games",
          "Proceduralist criticism theory concludes that a game's underlying rule systems are entirely irrelevant to critical evaluation"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'the concept of 'the ambient narrative' in open-world game design theory', extending earlier environmental storytelling concepts, propose about how large-scale open-world games can convey narrative meaning through systemic, dynamically-generated events rather than solely through authored, scripted content?",
        "opts": [
          "Open-world games are theorized to convey narrative meaning exclusively through explicit, fully scripted and pre-authored cutscene sequences",
          "Complex, systemic open-world games can generate ambient narrative meaning through unscripted NPC behavior and environmental events",
          "This concept applies exclusively to games with zero explicit, authored narrative content of any kind",
          "Ambient narrative theory concludes that systemic, emergent game events can never meaningfully contribute to a player's sense of narrative"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'the political unconscious of game mechanics', drawing loosely on literary theorist Fredric Jameson's broader concept and applied to critical game studies, for analyzing how a game's core mechanical systems may implicitly encode ideological assumptions?",
        "opts": [
          "A game's core mechanical systems, such as resource management or combat rules, are theorized to be entirely ideologically neutral, technical constructs with no embedded social or political assumptions whatsoever",
          "Scholarship drawing on Jameson examines how a game's seemingly neutral mechanics, like resource extraction or economic simulation, can naturalize real-world ideological assumptions",
          "This theoretical approach applies exclusively to games explicitly and overtly designed as political commentary or satire",
          "Political unconscious theory concludes that game mechanics can never meaningfully be analyzed through any ideological or critical theoretical lens"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'the concept of 'speedrunning as a critical and creative practice'', as examined in some game studies scholarship, argue about the relationship between competitive speedrunning communities and a game's original, developer-intended design?",
        "opts": [
          "Speedrunning is theorized to have no meaningful relationship whatsoever to a game's underlying design or systems, being purely an external competitive activity unrelated to game analysis",
          "Scholars examine how speedrunning communities analyze and exploit a game's rule systems and glitches, revealing unintended possibilities neither developers nor casual players anticipated",
          "This scholarship concludes that speedrunning communities never discover any gameplay possibilities beyond those explicitly intended by original developers",
          "Speedrunning as critical practice theory applies exclusively to games explicitly designed and marketed for competitive speedrunning"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'game preservation and digital game historiography', as an emerging concern within game studies and library and information science, regarding the unique challenges of preserving playable video game history?",
        "opts": [
          "Video games are theorized to require no distinct preservation methodology or challenges beyond those already established for preserving traditional physical media like books or film",
          "Archivists highlight that games present distinctive preservation challenges, including obsolete hardware, servers shutting down online components, and licensing barriers complicating long-term access",
          "This preservation challenge area has been fully and permanently resolved with no remaining unsolved technical or legal barriers",
          "Game preservation theory concludes that no meaningful differences exist between preserving video games and preserving traditional printed books"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'the concept of 'the ethics of AI-driven NPC behavior and player manipulation'', as an emerging area of critical game design scholarship, examine regarding the use of increasingly sophisticated AI systems to model and respond to individual player psychology?",
        "opts": [
          "The use of AI systems to model player behavior and psychology in games is theorized to raise no meaningful ethical questions whatsoever, being purely a neutral technical optimization step",
          "Scholarship examines the ethics of AI systems modeling player psychology, potentially enabling personalized manipulation of engagement or spending, echoing debates on algorithmic manipulation elsewhere",
          "This ethical concern area applies exclusively to games explicitly marketed as utilizing artificial intelligence technology in their title or marketing",
          "AI-driven NPC behavior ethics theory concludes that no meaningful distinction exists at all between simple scripted NPC behavior and sophisticated adaptive AI systems"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'cross-cultural game design comparative analysis', examining how core game design conventions, such as difficulty balancing or narrative pacing, can differ systematically across game industries rooted in different national and cultural contexts, such as Japanese versus Western AAA game development traditions?",
        "opts": [
          "Game design conventions are theorized to be entirely universal and culturally invariant, with absolutely no meaningful systematic variation across different national game development traditions",
          "Comparative studies examine how national game development traditions, shaped by differing cultural and historical contexts, produce different conventions for difficulty, pacing, and player guidance",
          "This comparative analysis area applies exclusively to games released before the year 2000, with no relevance to contemporary global game development",
          "Cross-cultural game design theory concludes that all national game development traditions have now become entirely identical and indistinguishable"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'the games-as-service labor critique', as examined in critical games industry labor scholarship, argue about the working conditions and industry dynamics associated with the shift toward continuously-updated live service games?",
        "opts": [
          "The shift toward live service game models is theorized to have produced no measurable changes whatsoever to game development labor conditions or industry working practices",
          "Labor scholarship examines how the shift to live service games, requiring ongoing post-launch content, has been linked to sustained crunch, employment precarity, and worker burnout",
          "This labor critique area concludes that game development working conditions are entirely unrelated to a game's underlying business or monetization model",
          "Games-as-service labor critique theory applies exclusively to games developed by companies with fewer than ten employees"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'the concept of 'critical play' as formalized by scholar Mary Flanagan, describing games and modding practices that deliberately intervene in or subvert mainstream cultural and political norms through their design?",
        "opts": [
          "Critical play is theorized to describe only games that are commercially unsuccessful, with no relationship to a game's design intentions or cultural function",
          "Critical play describes games and activist modifications designed to disrupt mainstream norms, positioning games as a vehicle for cultural critique",
          "This concept applies exclusively to non-digital, physical performance art with no relevance to video games",
          "Critical play theory concludes that games can never meaningfully be used as a vehicle for social or political critique"
        ],
        "a": 1,
        "tier": 5
      }
    ]
  },
  {
    "id": "science",
    "name": "General Science",
    "questions": [
      {
        "q": "What is the closest planet to the Sun?",
        "opts": [
          "Venus, the hottest planet",
          "Mercury",
          "Earth",
          "Mars"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What gas do plants primarily absorb for photosynthesis?",
        "opts": [
          "Oxygen",
          "Carbon dioxide",
          "Nitrogen",
          "Hydrogen sulfide"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is the chemical formula for water?",
        "opts": [
          "CO2",
          "O2",
          "H2O",
          "NaCl"
        ],
        "a": 2,
        "tier": 1
      },
      {
        "q": "How many legs does an insect have?",
        "opts": [
          "4",
          "6",
          "8",
          "10"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is the powerhouse of the cell?",
        "opts": [
          "Nucleus",
          "Ribosome",
          "Mitochondria",
          "Golgi apparatus"
        ],
        "a": 2,
        "tier": 1
      },
      {
        "q": "Which force pulls objects toward the Earth?",
        "opts": [
          "Magnetism",
          "Gravity",
          "Friction",
          "Tension"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is the boiling point of water at sea level, in Celsius?",
        "opts": [
          "90°C",
          "100°C",
          "110°C",
          "120°C"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "Which planet is known as the Red Planet?",
        "opts": [
          "Jupiter",
          "Mars",
          "Saturn",
          "Venus, the hottest planet"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What gas do humans need to breathe to survive?",
        "opts": [
          "Nitrogen",
          "Carbon dioxide",
          "Oxygen",
          "Helium"
        ],
        "a": 2,
        "tier": 1
      },
      {
        "q": "What is the chemical symbol for sodium?",
        "opts": [
          "So",
          "Sd",
          "Na",
          "Sn"
        ],
        "a": 2,
        "tier": 1
      },
      {
        "q": "What is at the center of our solar system?",
        "opts": [
          "Earth",
          "The Moon",
          "The Sun",
          "Jupiter"
        ],
        "a": 2,
        "tier": 1
      },
      {
        "q": "What is frozen water called?",
        "opts": [
          "Steam",
          "Ice",
          "Fog",
          "Slush"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What natural satellite orbits the Earth?",
        "opts": [
          "Mars, the Red Planet",
          "The Sun",
          "The Moon",
          "Venus"
        ],
        "a": 2,
        "tier": 1
      },
      {
        "q": "How many main colors are in a rainbow?",
        "opts": [
          "5",
          "6",
          "7",
          "8"
        ],
        "a": 2,
        "tier": 1
      },
      {
        "q": "How many basic senses do humans typically have?",
        "opts": [
          "3",
          "4",
          "5",
          "6"
        ],
        "a": 2,
        "tier": 1
      },
      {
        "q": "Which organ pumps blood around the body?",
        "opts": [
          "Liver",
          "Lungs",
          "Heart",
          "Kidney"
        ],
        "a": 2,
        "tier": 1
      },
      {
        "q": "What do bees produce?",
        "opts": [
          "Milk",
          "Honey",
          "Silkworm cocoons",
          "Sap"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "Which of these is a mammal?",
        "opts": [
          "Shark",
          "Frog",
          "Whale",
          "Eagle"
        ],
        "a": 2,
        "tier": 1
      },
      {
        "q": "What is the freezing point of water in Celsius?",
        "opts": [
          "-10",
          "0",
          "10",
          "32"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "Which planet do humans live on?",
        "opts": [
          "Mars, the Red Planet",
          "Earth",
          "Venus",
          "Jupiter"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "Newton's second law is commonly expressed as which equation?",
        "opts": [
          "E=mc²",
          "F=ma",
          "PV=nRT",
          "a²+b²=c²"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is the pH value of a neutral solution?",
        "opts": [
          "0",
          "7",
          "10",
          "14"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "Which cell organelle contains most of the genetic material?",
        "opts": [
          "Nucleus",
          "Vacuole",
          "Lysosome",
          "Cytoplasm"
        ],
        "a": 0,
        "tier": 2
      },
      {
        "q": "A chemical bond formed by sharing electron pairs is called what?",
        "opts": [
          "Ionic bond",
          "Covalent bond",
          "Metallic bond",
          "Hydrogen bond"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is the SI unit of electric current?",
        "opts": [
          "Volt",
          "Watt-hour",
          "Ampere",
          "Ohm"
        ],
        "a": 2,
        "tier": 2
      },
      {
        "q": "Which gas is released as a byproduct of photosynthesis?",
        "opts": [
          "Carbon dioxide",
          "Oxygen",
          "Nitrogen",
          "Hydrogen sulfide"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "Which blood cells primarily fight infection?",
        "opts": [
          "Red blood cells",
          "White blood cells",
          "Platelets, which aid clotting",
          "Plasma cells"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is the atomic number of hydrogen?",
        "opts": [
          "0",
          "1",
          "2",
          "3"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "Energy cannot be created or destroyed, only transformed — this is which law?",
        "opts": [
          "Newton's third law of motion",
          "Law of conservation of energy",
          "Ohm's law",
          "Boyle's law"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is the SI unit of force?",
        "opts": [
          "Joule",
          "Newton",
          "Pascal",
          "Watt-hour"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is the most abundant gas in Earth's atmosphere?",
        "opts": [
          "Oxygen",
          "Nitrogen",
          "Carbon dioxide",
          "Argon"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "An element is made of only one type of what?",
        "opts": [
          "Molecule",
          "Atom",
          "Compound",
          "Cell"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "Speed is equal to distance divided by what?",
        "opts": [
          "Mass",
          "Time",
          "Force",
          "Volume"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "Which organ filters blood to remove waste?",
        "opts": [
          "Liver",
          "Kidney",
          "Spleen",
          "Pancreas"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "Rock formed from cooled lava or magma is called?",
        "opts": [
          "Sedimentary",
          "Igneous",
          "Metamorphic",
          "Mineral"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "The process of liquid turning into gas is called?",
        "opts": [
          "Condensation",
          "Evaporation",
          "Sublimation",
          "Precipitation"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "Who proposed the theory of evolution by natural selection?",
        "opts": [
          "Gregor Mendel",
          "Charles Darwin",
          "Louis Pasteur",
          "Isaac Newton"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is the chemical symbol for iron?",
        "opts": [
          "Ir",
          "Fe",
          "In",
          "Fr"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "How many chromosomes do humans typically have?",
        "opts": [
          "23",
          "44",
          "46",
          "48"
        ],
        "a": 2,
        "tier": 2
      },
      {
        "q": "What is the main function of red blood cells?",
        "opts": [
          "Fight infection",
          "Carry oxygen",
          "Clot blood",
          "Digest food"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does Avogadro's number represent?",
        "opts": [
          "The exact speed of light as measured through a perfect vacuum",
          "The number of particles in one mole of a substance",
          "The charge of an electron",
          "The gravitational constant"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "The second law of thermodynamics states that the entropy of an isolated system will:",
        "opts": [
          "Always decrease over time",
          "Never decrease over time",
          "Remain exactly constant",
          "Oscillate periodically"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "The Heisenberg Uncertainty Principle concerns the impossibility of simultaneously knowing exact:",
        "opts": [
          "Mass and volume",
          "Position and momentum",
          "Charge and spin",
          "Energy and time in a classical system"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "In genetics, a Punnett square is used to predict what?",
        "opts": [
          "Mutation rates",
          "Genotype and phenotype ratios of offspring",
          "Protein folding structures in ribosomes",
          "Rates of natural selection"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "Which process produces gametes through cell division?",
        "opts": [
          "Mitosis",
          "Meiosis",
          "Binary fission",
          "Apoptosis"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "A reaction that releases energy to its surroundings is called what?",
        "opts": [
          "Endothermic",
          "Exothermic",
          "Isothermic",
          "Adiabatic"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "Le Chatelier's principle predicts what?",
        "opts": [
          "The speed of a reaction, not its equilibrium",
          "A shift in equilibrium in response to a change",
          "Bond energies",
          "Molecular geometry"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "The Krebs cycle is part of which broader process?",
        "opts": [
          "Photosynthesis",
          "Cellular respiration",
          "Protein synthesis",
          "DNA replication and repair"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "Ohm's law is expressed as which equation?",
        "opts": [
          "V=IR",
          "F=ma",
          "E=mc²",
          "PV=nRT"
        ],
        "a": 0,
        "tier": 3
      },
      {
        "q": "A catalyst's role in a chemical reaction is to:",
        "opts": [
          "Slow the reaction down",
          "Speed up the reaction without being consumed",
          "Provide activation energy permanently to the reaction",
          "Act as a reactant that is used up"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "Organisms sharing a recent common ancestor and all its descendants form a:",
        "opts": [
          "Species",
          "Clade",
          "Kingdom",
          "Phylum"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "The central dogma of molecular biology describes the flow of information as:",
        "opts": [
          "RNA to DNA to protein",
          "DNA to RNA to protein",
          "Protein to RNA to DNA",
          "DNA to protein directly"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "Boyle's law states that at constant temperature, pressure and volume of a gas are:",
        "opts": [
          "Directly proportional",
          "Inversely proportional",
          "Unrelated",
          "Proportional to the square of volume"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "An allele is best described as:",
        "opts": [
          "A whole chromosome segment",
          "A variant form of a gene",
          "A type of protein",
          "A cell organelle"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "The Doppler effect describes:",
        "opts": [
          "The bending of light through a lens",
          "A change in frequency due to relative motion between source and observer",
          "The reflection of sound waves",
          "The gradual absorption of light by a dense, opaque material over time"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "Splitting white light into its component colors is called:",
        "opts": [
          "Reflection",
          "Dispersion",
          "Diffusion",
          "Polarization"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "A redox reaction fundamentally involves:",
        "opts": [
          "Proton transfer",
          "Electron transfer",
          "Neutron transfer",
          "Photon transfer"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "The half-life of a radioactive isotope is:",
        "opts": [
          "The time for a full sample to decay completely",
          "The time for half of a sample to decay",
          "A fixed number of atoms remaining",
          "The atomic mass of the isotope"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "In gene structure, an exon is best described as:",
        "opts": [
          "A non-coding region removed from mature mRNA",
          "A coding region retained in mature mRNA",
          "A type of protein",
          "A random mutation"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "The scientific study of heredity is called:",
        "opts": [
          "Ecology",
          "Genetics",
          "Taxonomy",
          "Physiology"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does the Schrödinger equation describe?",
        "opts": [
          "The decay rate of radioactive isotopes over long timescales",
          "The time evolution of a quantum system's wavefunction",
          "The trajectory of a projectile under gravity",
          "The thermodynamic entropy of a gas"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "CRISPR-Cas9 is a technology primarily used for what purpose?",
        "opts": [
          "Amplifying DNA via PCR",
          "Sequencing entire genomes",
          "Targeted editing of specific DNA sequences",
          "Imaging live cells at atomic resolution"
        ],
        "a": 2,
        "tier": 4
      },
      {
        "q": "What is the significance of the Higgs boson in particle physics?",
        "opts": [
          "It mediates the strong nuclear force",
          "It is associated with the field that gives elementary particles mass",
          "It is the particle believed to be responsible for all electromagnetism",
          "It explains the expansion of the universe"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "The term 'epigenetics' refers to what?",
        "opts": [
          "Mutations in the DNA sequence itself",
          "Heritable changes in gene expression without changes to DNA sequence",
          "The study of genes across different species",
          "The precise process of DNA replication that occurs during cell mitosis"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "A protein's overall three-dimensional shape is called its:",
        "opts": [
          "Primary structure",
          "Secondary structure",
          "Tertiary structure",
          "Quaternary structure"
        ],
        "a": 2,
        "tier": 4
      },
      {
        "q": "Quantum entanglement describes:",
        "opts": [
          "Particles physically colliding",
          "Correlated quantum states between particles regardless of distance",
          "Particles annihilating each other",
          "A single particle simultaneously existing in two separate places at once"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "Phylogenetics is the study of:",
        "opts": [
          "Cell structure and organelles",
          "Evolutionary relationships represented as trees",
          "Protein folding pathways",
          "Gene expression levels across different body tissues"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "A molecular chaperone's primary function is to:",
        "opts": [
          "Transport oxygen in blood",
          "Assist proteins in folding correctly",
          "Catalyze DNA replication directly",
          "Act as a cell surface receptor"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "The Standard Model of particle physics describes:",
        "opts": [
          "Only gravity",
          "Fundamental particles and forces, excluding gravity",
          "Dark matter exclusively",
          "Cosmological expansion of the entire universe alone"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "RNA interference (RNAi) is a mechanism for:",
        "opts": [
          "Amplifying gene expression",
          "Silencing gene expression via small RNA molecules",
          "Directly repairing DNA breaks",
          "Folding newly synthesized proteins into their shape"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "Allosteric regulation of an enzyme refers to:",
        "opts": [
          "Regulation occurring only at the enzyme's active site directly",
          "Regulation via binding at a site other than the active site",
          "Regulation of gene transcription only",
          "Regulation via pH change only"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "The concept of 'dark matter' refers to:",
        "opts": [
          "Visible, ordinary matter concentrated in galaxy cores",
          "Unseen matter inferred from its gravitational effects",
          "A form of antimatter",
          "A synonym for dark energy"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "Polymerase chain reaction (PCR) is used to amplify which molecule?",
        "opts": [
          "RNA",
          "DNA",
          "Protein",
          "Lipid"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "A 'knockout mouse' is used in research to study:",
        "opts": [
          "Cancer treatment exclusively",
          "Gene function by disabling a specific gene",
          "Vaccine development and testing exclusively",
          "The aging process exclusively"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "The energy barrier a chemical reaction must overcome to proceed is called:",
        "opts": [
          "Bond energy",
          "Activation energy",
          "Free energy",
          "Kinetic energy of motion"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "Homeostasis refers to an organism's ability to:",
        "opts": [
          "Divide its cells rapidly",
          "Maintain stable internal conditions",
          "Produce large amounts of energy quickly",
          "Excrete waste exclusively"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "Apoptosis is best described as:",
        "opts": [
          "Uncontrolled cell division",
          "Programmed cell death",
          "A random cell mutation",
          "Fusion of two cells"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "Chirality in chemistry refers to molecules that:",
        "opts": [
          "Have identical, superimposable mirror images",
          "Have non-superimposable mirror images",
          "Form symmetric crystal structures",
          "Undergo radioactive decay"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "Stem cell 'pluripotency' means the cell has the ability to:",
        "opts": [
          "Only divide rapidly, never differentiate at all",
          "Differentiate into virtually any cell type",
          "Only become blood cells",
          "Resist all mutation"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "In a laboratory context, 'in vitro' means an experiment is performed:",
        "opts": [
          "Inside a living organism",
          "Outside a living organism, e.g. in a test tube",
          "Only via computer simulation, never in a lab",
          "Only on animal models"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "A Feynman diagram in quantum field theory is used to represent:",
        "opts": [
          "Atomic orbital structure",
          "Particle interactions and scattering amplitudes",
          "The crystal lattice of a solid",
          "Thermodynamic phase transitions of a material"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "The AdS/CFT correspondence in theoretical physics relates:",
        "opts": [
          "Quantum mechanics directly to classical mechanics with no boundary condition at all",
          "A gravity theory in Anti-de Sitter space to a conformal field theory on its boundary",
          "Electricity directly to magnetism",
          "Entropy directly to temperature"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "The Yang-Mills mass gap problem, an unsolved Millennium Prize problem, concerns:",
        "opts": [
          "The exact mass of the Higgs boson",
          "The existence of a gap between the vacuum and the next lowest energy state in Yang-Mills theory",
          "The precise mass of neutrinos, which remains unmeasured by any current experiment to date",
          "The mass of dark matter particles"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "Epistasis in genetics refers to:",
        "opts": [
          "A single isolated gene mutation",
          "An interaction where one gene's effect depends on the presence of one or more other genes",
          "Chromosomal duplication events",
          "Purely mitochondrial inheritance patterns passed only from mother to offspring across generations"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "Quantum decoherence explains:",
        "opts": [
          "The spontaneous creation of particles from a vacuum, as with Hawking radiation near a black hole",
          "The loss of quantum coherence due to interaction with the environment, giving rise to classical behavior",
          "A steady gain of entanglement between particles over time",
          "The onset of superconductivity"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "CRISPR base editing allows what, beyond standard Cas9-mediated editing?",
        "opts": [
          "Complete deletion of an entire gene only",
          "Precise single-nucleotide changes without creating double-strand breaks",
          "Replacement of a whole chromosome with a synthetic laboratory-made copy",
          "Edits only at the RNA level, never DNA"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "The holographic principle in theoretical physics proposes that:",
        "opts": [
          "Information within a spacetime volume can be fully encoded on its lower-dimensional boundary",
          "All physical constants are illusions",
          "Light is fundamentally two-dimensional",
          "Black holes contain no information whatsoever, a view held before Hawking radiation was proposed"
        ],
        "a": 0,
        "tier": 5
      },
      {
        "q": "Protein allostery, at a structural biology level, describes:",
        "opts": [
          "Direct binding exclusively at the enzyme's active site region, with no distant effect",
          "Propagation of a conformational change from one site to a distant functional site",
          "Irreversible denaturation of a protein",
          "Covalent modification only"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "Single-cell RNA sequencing primarily enables researchers to:",
        "opts": [
          "Sequence the whole genome of an entire population only, without single-cell resolution",
          "Profile the transcriptome of individual cells to study cellular heterogeneity",
          "Determine 3D protein structures",
          "Analyze lipid membrane composition"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "The 'replication crisis' in scientific research broadly refers to:",
        "opts": [
          "A crisis in the cellular DNA replication machinery of rapidly dividing cells",
          "Widespread concern about the reproducibility of published research findings",
          "A shortage of laboratory equipment",
          "A rise in retracted textbooks only"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "A topological insulator is a material that is:",
        "opts": [
          "Electrically conducting throughout its entire bulk volume uniformly",
          "Insulating in its bulk but conducting on its surface via protected states",
          "Superconducting at room temperature",
          "Magnetic at all temperatures"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "CRISPR interference (CRISPRi) works by:",
        "opts": [
          "Cutting DNA at multiple sites simultaneously across the whole genome",
          "Using a catalytically dead Cas9 to block transcription without cutting DNA",
          "Inserting foreign DNA at random locations",
          "Directly degrading messenger RNA"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "Metagenomics is the study of:",
        "opts": [
          "A single organism's complete genome",
          "Genetic material recovered directly from environmental samples",
          "Only viral genomes in isolation",
          "Protein-protein interactions within a single isolated cell type"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "A quasiparticle, such as a phonon or exciton, is best described as:",
        "opts": [
          "A fundamental, indivisible particle listed within the Standard Model of particle physics",
          "An emergent collective excitation that behaves like a particle in condensed matter",
          "A form of antimatter",
          "A subatomic charge carrier only"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "Renormalization in quantum field theory addresses:",
        "opts": [
          "Eliminating gravity from the equations entirely",
          "Systematically handling mathematical infinities by absorbing them into redefined physical parameters",
          "Removing quantum effects entirely at very large cosmological distance and time scales alike",
          "Directly converting energy into mass"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "Directed evolution, in protein engineering, refers to:",
        "opts": [
          "Purely computational simulation of protein folding",
          "Iterative rounds of mutagenesis and selection in the lab to evolve proteins with desired properties",
          "Natural evolution observed passively in the wild",
          "A theoretical framework with no laboratory component, used only in university lecture courses"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "The no-cloning theorem in quantum mechanics states that:",
        "opts": [
          "Quantum states can always be copied perfectly",
          "An arbitrary unknown quantum state cannot be copied exactly",
          "Only classical states can ever be cloned",
          "Cloning is possible but always destroys the original quantum state"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "A 'Berry phase' in quantum mechanics refers to:",
        "opts": [
          "A phase related only to particle spin",
          "A geometric phase acquired over a cycle when a system undergoes adiabatic changes",
          "A phase shift caused purely by gravity",
          "A phase transition observed only in condensed matter systems near absolute zero"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "Proteomics, as distinct from genomics, studies:",
        "opts": [
          "The full set of genes encoded in an organism's genome",
          "The full set of proteins expressed by a genome, cell, tissue, or organism",
          "The full set of small-molecule metabolites produced by a living cell only",
          "The full set of membrane lipids only"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "The detection of gravitational waves by LIGO confirmed:",
        "opts": [
          "The direct existence of dark matter spread evenly throughout the observable universe",
          "Ripples in spacetime, predicted by general relativity, generated by merging massive objects",
          "That general relativity is incorrect",
          "The direct detection of the Higgs field"
        ],
        "a": 1,
        "tier": 5
      }
    ]
  },
  {
    "id": "geography",
    "name": "Geography",
    "questions": [
      {
        "q": "What is the largest continent by area?",
        "opts": [
          "Africa",
          "Asia",
          "Europe",
          "North America"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is the capital of France?",
        "opts": [
          "Berlin",
          "Madrid",
          "Paris",
          "Rome"
        ],
        "a": 2,
        "tier": 1
      },
      {
        "q": "Which ocean is the largest?",
        "opts": [
          "Atlantic",
          "Indian",
          "Arctic",
          "Pacific"
        ],
        "a": 3,
        "tier": 1
      },
      {
        "q": "What is the longest river in the world?",
        "opts": [
          "Amazon",
          "Nile",
          "Mississippi",
          "Yangtze"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "Which country has the largest population?",
        "opts": [
          "USA",
          "India",
          "China",
          "Russia"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is the capital of Japan?",
        "opts": [
          "Beijing",
          "Seoul",
          "Tokyo",
          "Bangkok"
        ],
        "a": 2,
        "tier": 1
      },
      {
        "q": "Which continent is Egypt located on?",
        "opts": [
          "Asia",
          "Africa",
          "Europe",
          "South America"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is the tallest mountain in the world?",
        "opts": [
          "K2",
          "Mount Everest",
          "Kilimanjaro peak",
          "Denali"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "Which country is known as the 'Land of the Rising Sun'?",
        "opts": [
          "China",
          "Japan",
          "Thailand",
          "Korea"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is the smallest continent by area?",
        "opts": [
          "Europe",
          "Australia",
          "Antarctica",
          "South America"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "Which desert is the largest hot desert in the world?",
        "opts": [
          "Gobi",
          "Kalahari",
          "Sahara",
          "Mojave"
        ],
        "a": 2,
        "tier": 1
      },
      {
        "q": "What is the capital of the United States?",
        "opts": [
          "New York City area",
          "Washington, D.C.",
          "Los Angeles",
          "Chicago"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "Which country is shaped like a boot?",
        "opts": [
          "Spain",
          "Greece",
          "Italy",
          "Portugal"
        ],
        "a": 2,
        "tier": 1
      },
      {
        "q": "What is the largest country in the world by land area?",
        "opts": [
          "China",
          "USA",
          "Canada",
          "Russia"
        ],
        "a": 3,
        "tier": 1
      },
      {
        "q": "Which river flows through Egypt?",
        "opts": [
          "Amazon",
          "Nile",
          "Danube",
          "Ganges"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is the capital of Australia?",
        "opts": [
          "Sydney",
          "Melbourne",
          "Canberra",
          "Perth"
        ],
        "a": 2,
        "tier": 1
      },
      {
        "q": "Which continent is the Sahara Desert located on?",
        "opts": [
          "Asia",
          "Africa",
          "Australia",
          "South America"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is the smallest country in the world by area?",
        "opts": [
          "Monaco",
          "San Marino",
          "Vatican City",
          "Liechtenstein"
        ],
        "a": 2,
        "tier": 1
      },
      {
        "q": "Which ocean is located between the Americas and Europe/Africa?",
        "opts": [
          "Pacific Ocean",
          "Indian",
          "Atlantic",
          "Arctic"
        ],
        "a": 2,
        "tier": 1
      },
      {
        "q": "What is the capital of Canada?",
        "opts": [
          "Toronto",
          "Vancouver",
          "Ottawa",
          "Montreal"
        ],
        "a": 2,
        "tier": 1
      },
      {
        "q": "What is the driest continent (excluding Antarctica)?",
        "opts": [
          "Africa",
          "Australia",
          "Asia",
          "South America"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "Which mountain range separates Europe from Asia?",
        "opts": [
          "Alps",
          "Andes",
          "Ural Mountains",
          "Rocky Mountains"
        ],
        "a": 2,
        "tier": 2
      },
      {
        "q": "What is the largest lake in the world by surface area?",
        "opts": [
          "Lake Superior",
          "Lake Victoria",
          "Caspian Sea",
          "Lake Baikal"
        ],
        "a": 2,
        "tier": 2
      },
      {
        "q": "Which country has the most time zones?",
        "opts": [
          "USA",
          "Russia",
          "China",
          "France"
        ],
        "a": 3,
        "tier": 2
      },
      {
        "q": "What is the capital of Brazil?",
        "opts": [
          "Rio de Janeiro",
          "São Paulo",
          "Brasília",
          "Salvador"
        ],
        "a": 2,
        "tier": 2
      },
      {
        "q": "Which strait separates Europe from Africa at its narrowest point?",
        "opts": [
          "Bering Strait",
          "Strait of Gibraltar",
          "The Strait of Malacca",
          "Bosphorus"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is the world's deepest ocean trench?",
        "opts": [
          "Puerto Rico Trench",
          "Java Trench",
          "Mariana Trench",
          "Tonga Trench"
        ],
        "a": 2,
        "tier": 2
      },
      {
        "q": "Which African country was formerly known as Abyssinia?",
        "opts": [
          "Kenya",
          "Ethiopia",
          "Sudan",
          "Somaliland"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is the capital of South Korea?",
        "opts": [
          "Busan",
          "Seoul",
          "Incheon",
          "Daegu"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "Which sea lies between Saudi Arabia and Egypt?",
        "opts": [
          "Mediterranean Sea",
          "Red Sea",
          "Black Sea",
          "Caspian Sea"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is the largest island in the world?",
        "opts": [
          "Madagascar",
          "Borneo",
          "New Guinea",
          "Greenland"
        ],
        "a": 3,
        "tier": 2
      },
      {
        "q": "Which country has the most natural lakes?",
        "opts": [
          "USA",
          "Finland",
          "Canada",
          "Russia"
        ],
        "a": 2,
        "tier": 2
      },
      {
        "q": "What is the capital of Egypt?",
        "opts": [
          "Alexandria",
          "Cairo",
          "Giza",
          "Luxor"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "Which two countries share the longest international land border?",
        "opts": [
          "USA and Mexico",
          "Canada and USA",
          "Russia and China",
          "Brazil and Argentina"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is the term for a large area of flat, treeless Arctic land?",
        "opts": [
          "Savanna",
          "Tundra",
          "Steppe",
          "Prairie"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "Which country is both in Europe and Asia (transcontinental)?",
        "opts": [
          "Spain",
          "Turkey",
          "Germany",
          "Italy"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is the capital of Argentina?",
        "opts": [
          "Santiago",
          "Lima",
          "Buenos Aires",
          "Montevideo city"
        ],
        "a": 2,
        "tier": 2
      },
      {
        "q": "Which mountain range contains Mount Everest?",
        "opts": [
          "Andes",
          "The Rockies",
          "Himalayas",
          "Alps"
        ],
        "a": 2,
        "tier": 2
      },
      {
        "q": "What is the world's longest mountain range (including undersea ranges)?",
        "opts": [
          "Andes",
          "Himalayas",
          "Rocky Mountains",
          "Mid-Ocean Ridge"
        ],
        "a": 3,
        "tier": 2
      },
      {
        "q": "Which country is landlocked and located entirely within South Africa?",
        "opts": [
          "Botswana",
          "Lesotho",
          "Namibia",
          "Zimbabwe"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is a 'delta' in physical geography?",
        "opts": [
          "A steep, narrow valley carved by glacial erosion in high mountains",
          "Where a river deposits sediment as it enters a larger body of water",
          "A type of desert dune",
          "A type of ocean current"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'plate tectonics' theory explain?",
        "opts": [
          "Only the formation of volcanic eruptions along fault lines",
          "The movement of Earth's crust, causing earthquakes",
          "Ocean tides exclusively",
          "Weather patterns exclusively"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is the 'Ring of Fire'?",
        "opts": [
          "A desert region in Australia",
          "A horseshoe-shaped Pacific zone of frequent earthquakes and volcanoes",
          "A mountain range in South America only",
          "A term used to describe large coral reef formations near the equator"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'urbanization' refer to in human geography?",
        "opts": [
          "The decline of city populations",
          "The growing share of a population living in urban areas",
          "The government-led construction of new farmland on city outskirts",
          "A type of climate pattern"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is a 'monsoon'?",
        "opts": [
          "A type of earthquake",
          "A seasonal wind bringing heavy rain, especially in South Asia",
          "A type of desert landform",
          "A permanent, warm ocean current that flows year-round near the equator"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does the term 'demographic transition' describe?",
        "opts": [
          "A sudden migration event",
          "The shift from high to low birth and death rates as a country develops",
          "A change in a country's borders",
          "A type of urban planning policy adopted by rapidly growing capitals"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is an 'archipelago'?",
        "opts": [
          "A single large island",
          "A group or chain of islands",
          "A type of mountain range formed entirely by volcanic activity",
          "A type of river delta"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'GIS' stand for in geography?",
        "opts": [
          "Global Information System",
          "Geographic Information System",
          "General Information Survey",
          "Geological Interpretation Software"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is the 'Coriolis effect'?",
        "opts": [
          "A tidal pattern caused by the moon",
          "The apparent deflection of moving objects due to Earth's rotation",
          "A type of volcanic activity",
          "A gradual pattern of continental drift measured over millions of years"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'biome' refer to in geography?",
        "opts": [
          "A single species of plant",
          "A community of flora and fauna suited to a specific climate region",
          "A type of soil composition",
          "A country's smallest administrative region, like a district or province"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'desertification'?",
        "opts": [
          "The formation of entirely new deserts through sudden, large-scale volcanic activity",
          "The process by which fertile land becomes desert, often due to drought or overuse",
          "The migration of desert wildlife",
          "A type of sand dune formation"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does the term 'exclave' mean in political geography?",
        "opts": [
          "A country with no coastline",
          "Territory of a country that is separated from its main part",
          "A type of long-running international border dispute between neighbors",
          "A capital city located on an island"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is a 'rain shadow' effect?",
        "opts": [
          "Increased rainfall recorded equally on both sides of a mountain range",
          "Reduced rainfall on the leeward side of a mountain range",
          "A type of tropical storm",
          "A shadow cast by clouds during a rainstorm"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'push and pull factors' refer to in the study of human migration?",
        "opts": [
          "Types of ocean currents",
          "Conditions that push people to leave and pull them to a new place",
          "Seasonal weather patterns that primarily affect regional crop yields",
          "Trade tariffs between countries"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is a 'landlocked country'?",
        "opts": [
          "A country whose entire territory is covered by dense tropical forest",
          "A country with no direct access to an ocean or sea",
          "A country located on an island",
          "A country with no mountains"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'watershed' (or drainage basin) mean in geography?",
        "opts": [
          "A type of large underground cave system carved by flowing water",
          "An area where all water drains to a common outlet",
          "A type of coastal erosion",
          "A boundary between two countries"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'entrepôt' trade, a term used in economic geography?",
        "opts": [
          "Trade conducted only within a single country",
          "Import and re-export of goods through a strategic trade hub",
          "Trade that is heavily restricted by international sanctions and tariffs",
          "A type of agricultural subsidy"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'physical geography' primarily study, as distinguished from human geography?",
        "opts": [
          "Political borders and government systems established since colonial times",
          "Natural features and processes like landforms and climate",
          "Economic trade patterns exclusively",
          "Population demographics exclusively"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is a 'strait' in geography?",
        "opts": [
          "A wide, flat plain",
          "A narrow channel of water connecting two larger bodies of water",
          "A type of mountain pass",
          "A type of narrow river tributary that feeds into a larger river"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'choropleth map' refer to in cartography?",
        "opts": [
          "A map showing only physical terrain",
          "A thematic map shading areas by a statistical variable",
          "A map used exclusively for maritime navigation and charting routes",
          "A 3D relief map"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does the concept of 'geopolitics' broadly analyze?",
        "opts": [
          "Only a country's physical terrain",
          "The influence of geography on politics and power",
          "A country's internal tax policy",
          "A type of urban zoning regulation used to plan new suburbs"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is the 'heartland theory', proposed by Halford Mackinder, concerned with?",
        "opts": [
          "Naval dominance as the key to global power",
          "Control of the Eurasian heartland as key to global power",
          "The economic development of coastal cities",
          "The uneven distribution of natural resources across the African continent"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'central place theory', developed by Walter Christaller, explain?",
        "opts": [
          "The migration patterns of birds",
          "The size and distribution of urban settlements based on services",
          "The formation of mountain ranges",
          "The seasonal distribution of rainfall patterns across entire continents"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'geomorphology' the study of?",
        "opts": [
          "Political boundaries and their historical formation since ancient times",
          "Landforms and the processes that shape the Earth's surface",
          "Human migration patterns",
          "Climate change policy"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'the resource curse' (or 'paradox of plenty') in economic geography describe?",
        "opts": [
          "Countries with abundant natural resources always develop faster economically than resource-poor nations, without exception",
          "Resource-rich nations, especially in non-renewables, often growing slower and less stably",
          "A shortage of resources causing conflict",
          "A type of agricultural policy in developed nations"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'shatter belt' a term for in political geography?",
        "opts": [
          "A stable, unified political region",
          "A region caught between competing powers, prone to instability",
          "A type of tectonic plate boundary",
          "A region known primarily for its high agricultural productivity and exports"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'gentrification' refer to in urban geography?",
        "opts": [
          "The decline of a wealthy neighborhood",
          "Urban renewal that raises property values and displaces residents",
          "A type of large-scale rural-to-urban infrastructure and transit project",
          "A government policy for building new suburbs"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is the 'rimland theory', proposed by Nicholas Spykman as a counter to the heartland theory?",
        "opts": [
          "Control of the deep interior of continents is most critical for global military power",
          "Control of Eurasia's coastal rimland matters more than the heartland",
          "Naval power is irrelevant to geopolitical strategy",
          "Island nations have no geopolitical significance"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'the demographic dividend' refer to in development geography?",
        "opts": [
          "A tax paid based on population size",
          "The benefit of a large working-age population relative to dependents",
          "A government cash subsidy paid annually to families with many children",
          "A type of population census methodology"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'territoriality', as a geographic and behavioral concept, primarily concerned with?",
        "opts": [
          "The physical geology of a territory",
          "Claiming, defending, and controlling an area to control access to it",
          "A type of climate classification",
          "A precise legal method for surveying and marking land boundaries"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'von Thünen's model' in agricultural geography predict?",
        "opts": [
          "Random distribution of agricultural land use",
          "Concentric rings of farmland around a market based on transport cost",
          "Uniform crop yields regardless of distance from market or soil quality",
          "The migration patterns of farm laborers"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'ecumene' a term for in geography?",
        "opts": [
          "A type of ecosystem found only in deserts",
          "The portion of Earth's surface that is permanently inhabited by humans",
          "A formal political and military alliance between neighboring countries",
          "A type of coral reef formation"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'the Malthusian trap' describe, as originally theorized by Thomas Malthus?",
        "opts": [
          "Population growth is always sustainable indefinitely given enough advanced technology",
          "Population growth tends to outpace food supply, causing periodic famine",
          "Resources are infinite and population has no natural limit",
          "Urbanization always solves food scarcity problems"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'critical geopolitics' as an academic approach, in contrast to classical geopolitics?",
        "opts": [
          "A purely military strategic framework",
          "How geopolitical knowledge is shaped to serve power interests",
          "A method for mapping physical terrain only",
          "A specialized branch of geology focused solely on plate tectonics"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'world-systems theory' (Wallerstein), as applied within economic geography, categorize countries into?",
        "opts": [
          "Developed and undeveloped nations only, with no further regional or historical distinction",
          "Core, semi-periphery, and periphery nations by economic role",
          "North and South nations exclusively",
          "Landlocked and coastal nations exclusively"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'ethnic enclave' theory concerned with explaining in urban and migration geography?",
        "opts": [
          "The formation of purely random, unplanned neighborhood clusters over time",
          "Why immigrant groups cluster spatially and what enclaves provide",
          "Government-mandated housing policy exclusively",
          "The physical geology of urban areas"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'time-geography', developed by Torsten Hägerstrand, use to analyze human activity patterns?",
        "opts": [
          "Only historical population census data collected every ten years",
          "Space-time paths tracing movement through space and time",
          "Purely economic trade flow data",
          "Climate data exclusively"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is the significance of 'the environmental determinism vs. possibilism debate' in the history of geographic thought?",
        "opts": [
          "Both positions agree entirely on the role of environment in shaping societies",
          "Determinism says environment shapes culture; possibilism says humans adapt",
          "Neither position has ever been seriously debated within academic geography departments",
          "The debate concerns only agricultural productivity"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'spatial autocorrelation' measure in geographic and statistical analysis?",
        "opts": [
          "The statistical correlation between two entirely unrelated variables measured in different locations",
          "How correlated a variable is with itself across nearby locations",
          "The accuracy of a map's projection",
          "The population density of a single point location"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'the friction of distance' concept used to describe in geography?",
        "opts": [
          "A purely physical engineering measure of road surface texture and quality",
          "Interaction between places tends to decrease as distance increases",
          "A type of tectonic plate interaction",
          "A measure of a country's trade tariffs"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'assemblage theory', as applied by geographers like Manuel DeLanda in the study of urban and political space, emphasize about socio-spatial phenomena?",
        "opts": [
          "That spatial structures are entirely fixed, static, and hierarchically determined from above by government planners",
          "That spatial phenomena emerge from relational assemblies, not one fixed structure",
          "That geography has no relevance to social theory",
          "That all spatial patterns can be explained purely by economic factors"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'relational economic geography', as a critique of earlier spatial-analytical approaches?",
        "opts": [
          "It rejects the study of networks and relationships entirely in favor of older, fixed locational-cost analysis",
          "Economic advantage arises from evolving relationships and networks across space",
          "It argues economic geography should only study physical infrastructure",
          "It denies that geographic proximity matters at all in the digital economy"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'the new economic geography' (associated with Paul Krugman) mathematically model to explain the spatial concentration of economic activity?",
        "opts": [
          "Purely random distribution of firms with no underlying mechanism",
          "Increasing returns, transport costs, and market size driving core-periphery patterns",
          "A fixed, government-mandated allocation of industry locations decided by central planners",
          "Climate as the sole determinant of industrial location"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is 'territorial trap' a critique of, within critical political geography, as articulated by John Agnew?",
        "opts": [
          "The assumption that all political territories are equally powerful militarily and economically",
          "The assumption that fixed state territories are the natural unit of political analysis",
          "A specific dispute over a physical border between two states",
          "A methodology for calculating a country's GDP"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'non-representational theory' in human geography, associated with Nigel Thrift, shift analytical focus toward?",
        "opts": [
          "Only textual and symbolic representations of place found in historical maps and literature",
          "Embodied, affective, pre-cognitive dimensions of everyday spatial experience",
          "Purely quantitative statistical modeling of spatial data",
          "The physical geology of tectonic plates exclusively"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the core argument of 'planetary urbanization' theory, associated with Neil Brenner and Christian Schmid, regarding the urban-rural divide?",
        "opts": [
          "Urbanization is strictly confined to dense city cores, with clearly bounded rural hinterlands untouched by urban processes or economic influence of any kind",
          "Urbanization processes now extend across the entire planet in variegated forms, dissolving any clear conceptual boundary between 'urban' and its presumed non-urban outside",
          "Rural areas are entirely disconnected from global urban economic networks",
          "Urban geography has become irrelevant given digital communication"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'the spatial fix', a concept developed by David Harvey drawing on Marxist theory, describe regarding capitalism's relationship to geographic space?",
        "opts": [
          "Capitalism's tendency to remain permanently fixed in a single geographic location without ever relocating",
          "Capitalism resolving crises of overaccumulation through geographic expansion",
          "A government policy for fixing currency exchange rates",
          "A term for repairing damaged transportation infrastructure"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is 'more-than-human geography' primarily concerned with expanding geographic analysis to include?",
        "opts": [
          "Only human political and economic institutions, laws, and formal treaties",
          "The agency of non-human actors in shaping geographic space",
          "Purely abstract mathematical spatial models",
          "Government census data exclusively"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'feminist geopolitics' critique in traditional geopolitical analysis?",
        "opts": [
          "The overall relevance of geography as a discipline to international relations entirely",
          "The traditional focus on elite, masculinized views of power",
          "The existence of international borders",
          "The use of maps in political analysis"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the significance of 'the production of space' (Henri Lefebvre) for understanding how geographic space is theorized in critical human geography?",
        "opts": [
          "Space is a neutral, pre-given, unchanging container within which social processes simply occur passively",
          "Space is actively produced through social and political processes",
          "Space can only be understood through purely physical, geological processes",
          "Lefebvre's theory applies only to rural agricultural land"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'scale' as a theoretical and contested concept in critical human geography (following theorists like Neil Smith) refer to, beyond simple cartographic scale?",
        "opts": [
          "Only the ratio used on a printed map",
          "A socially constructed hierarchy of spatial levels, from local to global",
          "A fixed physical measurement unit with no social or political dimension at all",
          "A term used exclusively in geology for rock strata"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the core argument of 'assemblage urbanism' as a critique of earlier structuralist urban theory?",
        "opts": [
          "Cities are best understood as the fixed, deterministic outcome of a single unified global capitalist economic logic",
          "Cities as contingent assemblages of diverse actors and processes",
          "Urban theory should focus exclusively on formal government planning documents",
          "Cities have no meaningful internal complexity worth studying"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'the geography of global production networks' (GPN) theory analyze, as a framework in economic geography?",
        "opts": [
          "A single firm's internal organizational chart",
          "Dispersed, power-laden networks of firms and workers producing goods globally",
          "Only the physical transportation infrastructure and road networks of a single country",
          "A country's domestic tax policy exclusively"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the significance of 'topological thinking' in contemporary geography, as opposed to purely 'topographical' or Euclidean spatial thinking?",
        "opts": [
          "It rejects any consideration of spatial relationships entirely",
          "It emphasizes relational, network-based connectivity over fixed Euclidean distance",
          "It refers exclusively to the mathematical and geological study of rock strata formations",
          "It is synonymous with traditional cartographic mapping"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'postcolonial geography' critically examine regarding the discipline of geography's own historical development?",
        "opts": [
          "Geography's complete and total independence from all histories of colonialism worldwide",
          "The discipline's historical entanglement with colonial power and knowledge",
          "Only the physical geology of former colonies",
          "Purely economic development statistics in postcolonial nations"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is 'the ontological politics of mapping', as discussed in critical cartography and GIS studies?",
        "opts": [
          "The idea that maps are simply neutral, objective, and entirely value-free technical representations of physical reality",
          "Maps actively construct versions of reality, not just represent it",
          "A purely technical debate about map projection accuracy",
          "A term referring only to historical, pre-digital maps"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'relational place theory' (Doreen Massey's concept of a 'global sense of place') argue against the idea of place as a bounded, singular, authentic entity?",
        "opts": [
          "Places should be understood as entirely fixed, permanently unchanging, and defined solely by a single essential identity rooted deep in the past",
          "Places as open, porous, and constituted by relations across scales, not bounded",
          "Place has no meaningful role in contemporary social theory",
          "Globalization has entirely eliminated the significance of place"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the core theoretical contribution of 'critical physical geography' as an emerging hybrid subfield?",
        "opts": [
          "A rejection of quantitative environmental science methods entirely",
          "Integrating critical social theory with rigorous biophysical science methods",
          "A purely descriptive cataloguing of landforms with no underlying theoretical framework at all",
          "A field concerned exclusively with historical maps"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'the anthropocene' concept, increasingly engaged with in physical and human geography, propose about the current geological epoch?",
        "opts": [
          "That human activity has had no measurable geological or environmental impact on Earth systems at all",
          "Human activity has become a dominant geological force at a planetary scale",
          "That the concept applies only to urban areas, not the planet as a whole",
          "That it is synonymous with the term 'globalization'"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'multi-scalar governance' analysis for understanding contemporary environmental and economic policy geography?",
        "opts": [
          "Governance always operates most effectively at a single, fixed scale, such as the nation-state alone, forever",
          "Effective governance of complex issues needs coordination across multiple scales",
          "Local governance is entirely irrelevant to global environmental outcomes",
          "National governments have complete and exclusive authority over all environmental policy"
        ],
        "a": 1,
        "tier": 5
      }
    ]
  },
  {
    "id": "meme",
    "name": "Internet Meme Culture",
    "questions": [
      {
        "q": "What is a 'meme'?",
        "opts": [
          "A type of computer virus",
          "An idea, image, or video that spreads rapidly online, often humorously altered by users",
          "A type of internet browser",
          "A formal government policy regulating internet content, speech, and platforms nationwide"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does 'LOL' commonly stand for?",
        "opts": [
          "Lots of Love",
          "Laugh Out Loud",
          "Lack of Logic",
          "List of Links"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a 'hashtag' used for on social media?",
        "opts": [
          "Encrypting a post",
          "Categorizing and making a post searchable by topic",
          "Deleting a post",
          "Blocking another user's account and all their posts"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does it mean when a post 'goes viral'?",
        "opts": [
          "It gets deleted by moderators",
          "It spreads rapidly and widely across the internet",
          "It is flagged as spam",
          "It becomes a paid advertisement placement deal"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is an 'emoji'?",
        "opts": [
          "A type of computer file",
          "A small digital image or icon used to express an emotion or idea in text",
          "A type of internet meme format used only in image captions, titles, and overlays",
          "A social media platform"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does 'DM' stand for in social media?",
        "opts": [
          "Data Message",
          "Direct Message",
          "Digital Media",
          "Delete Message"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a 'troll' in internet slang?",
        "opts": [
          "A helpful online moderator",
          "Someone who deliberately posts provocative or inflammatory content to upset others",
          "A type of meme format",
          "A verified social media account with a blue checkmark badge and follower count displayed"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does 'FOMO' stand for?",
        "opts": [
          "Fear Of Missing Out",
          "Focus On My Own",
          "Fun Or Meaningful Outcome",
          "Follow Only My Others"
        ],
        "a": 0,
        "tier": 1
      },
      {
        "q": "What is a 'GIF'?",
        "opts": [
          "A type of major social media platform",
          "A short, looping animated image file",
          "A type of text message",
          "A video call app"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does it mean to 'like' a post?",
        "opts": [
          "To report it as inappropriate",
          "To show approval or appreciation for it, usually with a button or icon",
          "To delete it from your feed",
          "To permanently block the person who posted it online and hide all their content"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a 'screenshot'?",
        "opts": [
          "A continuous video recording of everything shown on a screen",
          "A captured still image of what is currently displayed on a screen",
          "A type of meme format only",
          "A social media filter"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does 'BRB' commonly mean in online chat?",
        "opts": [
          "Be Right Back",
          "Bring Recent Books",
          "Best Regards, Bye",
          "Break Requires Break"
        ],
        "a": 0,
        "tier": 1
      },
      {
        "q": "What is a 'profile picture' (or 'pfp')?",
        "opts": [
          "A screenshot of an entire private conversation thread saved for later reference",
          "The image a user chooses to represent themselves on a social media account",
          "A type of meme",
          "A hashtag"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does 'DIY meme' or 'template meme' generally involve?",
        "opts": [
          "A completely original image containing no reused elements or existing formats",
          "A recognizable image or format that users customize with their own text or context",
          "A meme created exclusively by a company",
          "A meme that cannot be edited or shared"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is 'cringe' commonly used to describe on the internet?",
        "opts": [
          "Something considered universally admirable and impressive",
          "Something that causes secondhand embarrassment or awkwardness",
          "A type of internet meme format specifically",
          "A verified social media badge"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does 'IRL' stand for?",
        "opts": [
          "Internet Relay Line",
          "In Real Life",
          "Instant Reply Later",
          "Internal Recorded Log"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a 'reaction image' or 'reaction gif'?",
        "opts": [
          "A type of paid online video advertisement format shown before other videos",
          "An image or GIF used to express a reaction in a conversation, often humorously",
          "A profile picture",
          "A hashtag category"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does it mean for content to be 'relatable'?",
        "opts": [
          "Content only understood by a small, highly specialized technical audience with expert knowledge",
          "Content that resonates with many people because it reflects a common, shared experience",
          "Content that has been officially verified as true",
          "Content created exclusively by celebrities"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a 'thread' on a platform like Twitter/X?",
        "opts": [
          "A single, unrelated post",
          "A series of connected posts forming one continuous discussion",
          "A type of private direct message conversation between two users only",
          "A blocked user list"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does 'ratio'd' mean, as internet slang on platforms like Twitter/X?",
        "opts": [
          "A post that received significantly more likes than replies, indicating strong popularity and approval across the platform",
          "A post that received significantly more replies (often critical) than likes, suggesting it was poorly received",
          "A post that was deleted by its author",
          "A post that went viral in a positive way"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a 'copypasta' in internet culture?",
        "opts": [
          "A type of Italian food meme",
          "A block of text copied and pasted repeatedly across the internet, often ironically",
          "A verified, officially authenticated social media account badge shown next to a username",
          "A type of video compression"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'stan' mean as internet slang, derived from an Eminem song?",
        "opts": [
          "To publicly dislike and criticize a celebrity intensely on social media platforms",
          "To be an extremely devoted, sometimes obsessive fan of a celebrity or public figure",
          "A type of meme template",
          "A social media moderation tool"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is 'rickrolling'?",
        "opts": [
          "A type of dance meme",
          "A prank where a person is tricked into clicking a link that leads to Rick Astley's 'Never Gonna Give You Up' music video",
          "An official method used by platforms for verifying social media accounts and identities to prevent impersonation and fraud",
          "A type of computer virus"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'based', as internet slang, generally mean when used approvingly?",
        "opts": [
          "Something considered thoroughly boring, unoriginal, or entirely predictable by most online commenters",
          "Something considered admirably authentic, unapologetic, or true to one's own views, regardless of popularity",
          "A type of low-quality meme",
          "A term for a banned user"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is a 'shitpost'?",
        "opts": [
          "A carefully researched, high-effort post",
          "A deliberately low-effort, absurd, or ironic post made for humor rather than serious content",
          "An officially sponsored advertisement",
          "A post reported and removed for violating platform community rules regarding harassment or spam"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'the internet is forever' commonly caution about?",
        "opts": [
          "Internet content is always automatically deleted after a set time",
          "Content posted online can be difficult or impossible to fully remove, and can resurface unexpectedly later",
          "Internet servers never experience downtime",
          "Social media platforms are legally required in every country to keep all content private and fully confidential forever"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is a 'Wojak', a well-known internet meme character?",
        "opts": [
          "A branded corporate mascot character used in official advertising campaigns for major consumer product companies since the early 2000s",
          "A simplistically drawn, bald cartoon face used to express a range of emotions, often associated with feelings like resignation or sadness",
          "A verified badge on social media",
          "A type of video compression format"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'doomscrolling' refer to?",
        "opts": [
          "Scrolling exclusively through positive, uplifting, and inspirational content only, ignoring all negative news entirely",
          "Compulsively continuing to scroll through negative or distressing news and content, often to one's own detriment",
          "A method for archiving old social media posts",
          "A type of content moderation technique"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is an 'echo chamber' in the context of social media?",
        "opts": [
          "A physical, soundproofed recording studio used by professional podcasters and radio broadcasters",
          "An environment where you're mostly shown opinions that reinforce what you already believe",
          "A type of meme format about sound",
          "A term for a viral audio clip"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'cancel culture' broadly describe, as it plays out on social media?",
        "opts": [
          "An official, platform-mandated method for permanently deleting a social media account after repeated rule violations confirmed by moderators",
          "Public backlash, boycotts, or withdrawal of support directed at a person or brand in response to perceived offensive behavior or statements",
          "A government regulation on online speech",
          "A type of platform verification process"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is a 'sock puppet account' on social media?",
        "opts": [
          "A verified, officially authenticated account belonging to a public figure or brand, confirmed by the platform through an official review process",
          "A fake online identity created by someone to deceptively promote their own views, support themselves in arguments, or evade a ban",
          "A type of meme format featuring puppets",
          "An official brand account"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'brain rot', a term popularized on social media, generally describe?",
        "opts": [
          "A medical condition diagnosed by doctors",
          "A joking term for the perceived mental effect of too much low-quality internet content",
          "A type of computer malware",
          "An official content warning label applied by platform moderators to flag sensitive material"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is 'Rule 34', a well-known internet adage?",
        "opts": [
          "A rule about copyright takedowns",
          "An internet adage jokingly asserting that pornographic content exists for absolutely any conceivable topic or character",
          "An official platform rule about verified account eligibility requirements for public figures and organizations seeking a badge",
          "A guideline for meme formatting"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does the term 'chronically online' describe about a person?",
        "opts": [
          "Someone who rarely uses the internet",
          "Someone perceived as spending an excessive amount of time engaged with internet culture, to the point that their perspective seems shaped or skewed by it",
          "A verified content moderator",
          "A person with a large social media following exclusively, regardless of how much time they personally spend online each and every single day"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is 'engagement farming' as a social media strategy?",
        "opts": [
          "Growing crops and posting about it online",
          "Crafting provocative content specifically to maximize likes, comments, and shares",
          "An official method used by platforms for verifying an account's authenticity",
          "A type of paid advertising campaign only"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'the algorithm', as commonly referenced by social media users, generally refer to?",
        "opts": [
          "A single, universal internet-wide ranking system used by every platform",
          "The platform's automated system determining what content a user is shown",
          "A government agency overseeing internet content",
          "A type of manual content moderation team"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is 'ratioing' as a strategic tactic sometimes used in online arguments?",
        "opts": [
          "Deliberately replying to a post en masse to make its reply count exceed its like count, as a visible sign of public disapproval",
          "An official method used by platforms for calculating a post's exact reach and impressions across every user demographic",
          "A type of platform verification badge",
          "A method for reporting spam accounts"
        ],
        "a": 0,
        "tier": 2
      },
      {
        "q": "What does 'lurking' mean on a forum or social media platform?",
        "opts": [
          "Actively posting content very frequently",
          "Observing and reading content on a platform or forum without actively posting or engaging",
          "Reporting other users for violations",
          "Creating multiple duplicate accounts on the same platform to evade a ban or moderation action"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is a 'burner account'?",
        "opts": [
          "A verified, official brand account",
          "A temporary or anonymous account separate from someone's main identity",
          "An account used exclusively for posting memes and nothing else at all, ever",
          "A government-monitored account"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'the discourse', as often used ironically on social media, refer to?",
        "opts": [
          "A single, calm, and highly civil individual conversation between two friends discussing an unrelated topic privately over direct message",
          "An ongoing, often heated and rapidly evolving public debate or controversy about a particular topic circulating across a platform",
          "An official platform announcement",
          "A verified fact-checking process"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'memetics', a term coined by Richard Dawkins in 'The Selfish Gene', theorize memes as?",
        "opts": [
          "A purely modern internet phenomenon with no broader theoretical or academic basis whatsoever, according to most critics",
          "Cultural units of information, analogous to genes, that replicate and mutate as they spread from person to person",
          "A term exclusively for image-based internet jokes",
          "A government classification system for online content"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'meme virality' theorized to depend on, drawing on internet culture research?",
        "opts": [
          "Purely random chance with no identifiable contributing factors",
          "A combination of relatability, ease of remixing, emotional resonance, and fit with platform conventions",
          "Exclusively the number of followers the original poster has",
          "Formal endorsement by a verified account, which is required for any meme to spread across any major platform"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'the Streisand effect' illustrate about attempts to suppress viral content online?",
        "opts": [
          "Suppression attempts always successfully and permanently remove content from public view",
          "Attempting to censor information can draw far more attention to it than leaving it alone",
          "Suppression has no measurable effect on how widely content spreads",
          "This effect applies exclusively to government censorship, not private takedown requests"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'ironic detachment', as a stylistic mode common in certain strains of internet humor and meme culture?",
        "opts": [
          "A completely sincere, unqualified expression of genuine emotion",
          "A style of layered irony and reluctance to express sentiment directly",
          "A formal content moderation category",
          "A term for verified, professionally produced comedy content"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'post-irony' describe as a further development beyond straightforward ironic humor in internet culture?",
        "opts": [
          "A style that completely and permanently rejects irony in favor of pure, unqualified sincerity",
          "A mode that layers irony so deeply that sincerity and mockery become genuinely indistinguishable",
          "A term for content that has been officially fact-checked",
          "A type of meme format restricted to a single platform"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is a 'dead meme', as understood within internet meme culture's own informal taxonomy?",
        "opts": [
          "A meme format currently at peak popularity",
          "A meme format considered overused, stale, or no longer culturally relevant",
          "A meme that has been permanently deleted by a platform",
          "A meme format that was never popular with any audience in the first place"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does the concept of 'meme decay' or an 'exploitable' format describe in the lifecycle of a meme?",
        "opts": [
          "A meme that remains completely and permanently unchanged throughout its entire cultural lifespan",
          "A meme format being repeatedly remixed and abstracted further from its original context as it spreads",
          "A technical term for image file compression degradation only",
          "A meme officially retired by its original creator"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'context collapse', a concept from internet and social media studies (danah boyd), relevant to how memes and posts are interpreted?",
        "opts": [
          "The phenomenon where a post is understood identically by every possible audience",
          "Multiple distinct audiences flattening into one imagined audience on social media",
          "A term describing a website's server outage",
          "A method for organizing hashtags"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'astroturfing' refer to in the context of coordinated online campaigns?",
        "opts": [
          "A grassroots movement that arises entirely organically without any coordination or funding whatsoever from any organization",
          "A fake grassroots campaign, orchestrated by an interested party, designed to look like spontaneous public sentiment",
          "A meme format about gardening",
          "A platform's official content promotion tool"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'a normie', as a term used within certain online subcultures?",
        "opts": [
          "A verified social media influencer with millions of followers across every platform",
          "Someone seen as having mainstream tastes, unfamiliar with niche internet subcultures",
          "A moderator of an online forum",
          "A type of bot account"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'meme magic', a term used somewhat ironically or seriously within certain internet subcultures, claim about the power of memes?",
        "opts": [
          "That memes have no real-world influence or effect whatsoever on politics or culture, according to most skeptics",
          "A half-ironic belief that internet memes can meaningfully shape real-world political or cultural events",
          "That memes are formally regulated by international law",
          "That memes can only ever be created by AI systems"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'shitposting as a rhetorical strategy', as analyzed in some internet culture scholarship, sometimes used to accomplish?",
        "opts": [
          "Purely apolitical, meaningless humor with zero social function or underlying intent whatsoever, according to most researchers",
          "Deploying deliberately absurd, low-effort content to entertain, provoke, and deniably float a real underlying message",
          "A method exclusively used by verified accounts",
          "A formal platform moderation tool"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'the attention economy' framework suggest about why platforms are algorithmically optimized to promote highly engaging, sometimes divisive meme content?",
        "opts": [
          "Platforms have no financial incentive tied to how long users remain engaged",
          "Since platforms monetize attention through advertising, algorithms favor content, including provocative memes, that maximizes engagement",
          "Engagement metrics have no bearing whatsoever on what content platforms choose to algorithmically promote to their users each day",
          "Meme content is promoted purely at random with no algorithmic influence"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is a 'copypasta chain letter', drawing an analogy to earlier chain letter culture, illustrate about meme propagation?",
        "opts": [
          "Memes spread through a completely centralized, single-source distribution model controlled by one account or organization",
          "Certain memes spread through repeated, largely unaltered copying across many accounts, echoing pre-internet chain letters",
          "This format is exclusive to email and has no internet meme equivalent",
          "Copypasta chains require official platform verification to spread"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'weaponized irony' describe as a critique leveled at some forms of online political meme culture?",
        "opts": [
          "The straightforward, sincere expression of a political position with absolutely no humor or irony involved whatsoever",
          "Using ironic, humorous framing to advance a genuine ideological position while keeping plausible deniability about sincerity",
          "A term for memes that have been officially banned by a government",
          "A purely apolitical meme format with no ideological content whatsoever"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'the Barbara Streisand paradox' of content moderation, as it applies to platform takedown decisions regarding viral memes?",
        "opts": [
          "Removing content is always the most effective way to reduce its spread with no downside",
          "Removing or restricting viral content can itself become a newsworthy event that draws more attention to it",
          "This paradox applies exclusively to copyright takedown requests, not community guideline violations",
          "Content moderation decisions have no measurable effect on a meme's continued spread"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'a slow burn meme' refer to, as distinguished from a rapidly viral one?",
        "opts": [
          "A meme format about literal fire or burning",
          "A meme or joke format that gradually gains traction and cultural staying power over an extended period, rather than exploding in popularity all at once",
          "A meme that has been officially deleted by its platform",
          "A meme exclusively associated with slow internet connections and buffering video loading times, mostly before broadband was widespread nationally"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'reaction content farming', as a criticized practice on some video platforms?",
        "opts": [
          "Creating entirely original video content with no reference to other creators' work",
          "Producing videos mostly of a creator reacting to another creator's content, criticized for adding little original value",
          "An official method used by every major platform for verifying the authenticity of all uploaded video content worldwide",
          "A formal genre officially recognized and defined by video platforms"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'the death of the author', a literary theory concept by Roland Barthes, get informally invoked to describe in meme remix culture?",
        "opts": [
          "The idea that only the original creator's intended meaning for a meme is ever valid or correct",
          "A meme's meaning becomes shaped by how audiences reinterpret and remix it, not the creator's intent",
          "A rule requiring meme creators to be formally credited on every repost",
          "A term describing the literal death of a meme's original creator"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'engagement bait', as a term describing certain manipulative social media post formats?",
        "opts": [
          "Content designed purely to inform readers, with absolutely no attempt to solicit any interaction whatsoever",
          "A post structured, like a 'like if you agree' prompt, to inflate engagement metrics",
          "A formal platform-sanctioned advertising category",
          "A term for content that has been fact-checked by a third party"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'context-dependent meaning drift' describe about how a meme format's implied meaning can change as it spreads across different online communities?",
        "opts": [
          "A meme's meaning is fixed permanently from the moment of its creation and never changes",
          "A meme's meaning can shift substantially as it spreads across communities with different norms",
          "This phenomenon applies exclusively to memes that have been translated into a different spoken language",
          "Meme meaning drift is prevented entirely by platform content moderation systems"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'the concept of hyperstition', drawing on theory-fiction associated with the Cybernetic Culture Research Unit (CCRU), propose about the relationship between fictional ideas circulating online and material reality?",
        "opts": [
          "Fictional ideas and narratives can never have any influence on real-world outcomes or behavior",
          "Fictional ideas that, through circulation and belief, can become self-fulfilling and effectively real",
          "Hyperstition is a formal legal term used to regulate fictional online content in most jurisdictions",
          "This concept applies exclusively to video game narrative design"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is the theoretical significance of 'accelerationist aesthetics' as sometimes discussed in relation to certain strains of extremely online, ironic meme culture?",
        "opts": [
          "An aesthetic mode entirely disconnected from any broader philosophical or political currents",
          "An aesthetic that embraces or ironically amplifies technological and social disruption",
          "A term describing only the technical speed of internet connections",
          "A formally defined content category regulated uniformly across all platforms"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'network propaganda theory', as developed by scholars like Yochai Benkler, Robert Faris, and Hal Roberts, argue about the structural dynamics of media manipulation and disinformation within polarized online media ecosystems?",
        "opts": [
          "Disinformation spreads identically and symmetrically across all points on the political spectrum with no structural asymmetry of any measurable kind",
          "The researchers found significant asymmetric polarization, arguing network structure, not just individual psychology, drives how disinformation propagates",
          "This theory denies that network structure has any bearing on disinformation spread",
          "Network propaganda theory applies exclusively to television broadcast media, excluding social media"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is the theoretical significance of 'affect theory' as applied to meme circulation and virality, drawing on scholars like Lauren Berlant and others working on cultural affect?",
        "opts": [
          "Memes are theorized to spread purely through rational, deliberate cognitive evaluation with no emotional or bodily dimension",
          "Affect theory examines how memes gain traction partly through pre-cognitive, bodily, and emotional intensities transmitted between users",
          "Affect theory rejects any connection between emotion and the spread of online content",
          "This theoretical approach applies exclusively to advertising, not user-generated meme content"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'the concept of 'weird internet'' or 'internet uncanny' as an aesthetic and cultural category, discussed in some digital culture scholarship, attempt to characterize?",
        "opts": [
          "A formally regulated content category defined uniformly by all major platforms worldwide under international law",
          "A loosely defined aesthetic of deliberately strange, absurdist content that unsettles as much as it amuses",
          "A term describing exclusively malfunctioning or broken websites",
          "A category applied only to AI-generated content"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is the theoretical significance of 'platformed racism' or 'platformed hate speech' research for understanding how meme formats can be co-opted for extremist messaging?",
        "opts": [
          "Extremist ideologies have historically had no meaningful presence or adaptation within internet meme culture, according to most researchers",
          "Scholars examine how extremist ideologies adapt mainstream meme formats, exploiting irony and deniability to spread coded messaging",
          "This research area is concerned exclusively with formal hate speech legislation, not informal online culture",
          "Platform algorithms are proven to have no role whatsoever in amplifying or suppressing such content"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'the concept of 'dog whistle' communication', as applied to political meme culture, describe about certain coded online messaging strategies?",
        "opts": [
          "A message with an entirely unambiguous, single meaning understood identically by every audience member regardless of context",
          "A strategy, often via specific meme formats, that conveys a coded meaning to an in-group while appearing innocuous to outsiders",
          "A formally regulated broadcasting term with no application to internet culture",
          "A term describing literal audio content inaudible to humans"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is the theoretical significance of 'meme warfare' or 'memetic warfare' as a term increasingly used in the study of information operations and political communication?",
        "opts": [
          "A term describing literal, physical military conflict fought using internet technology",
          "The deliberate, strategic use of memes as tools within information operations, exploiting their rapid, low-cost dissemination",
          "This concept applies exclusively to formally declared cyberwarfare between nation-states",
          "Memetic warfare theory denies that memes have ever been used for any strategic political purpose in any country whatsoever"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'the concept of 'algospeak'' describe as an emerging linguistic phenomenon on heavily moderated social media platforms?",
        "opts": [
          "A formal, standardized programming language used exclusively to write content moderation algorithms for major tech companies worldwide today",
          "Informal linguistic workarounds, like substituted letters or coded terms, users adopt to discuss moderated topics while evading algorithmic suppression",
          "A term describing the official language used in a platform's terms of service",
          "Algospeak refers exclusively to a dialect spoken by professional software engineers"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is the theoretical significance of 'the concept of 'meme literacy'' as an emerging area of media literacy education and research?",
        "opts": [
          "Meme literacy is considered irrelevant to broader media literacy education, since memes are assumed to have no persuasive or informational content",
          "An emerging field developing critical skills to interpret and evaluate memes, including their potential to convey misinformation or coded ideology",
          "This concept applies exclusively to teaching students how to technically create memes using image editing software",
          "Meme literacy research denies that memes have any persuasive or rhetorical function warranting critical evaluation"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'weaponized nostalgia', as a term describing certain internet meme trends built around retro references, critically suggest about the political or ideological uses of nostalgic content online?",
        "opts": [
          "Nostalgic content online is always entirely apolitical and has no ideological function",
          "Nostalgic memes, evoking selectively idealized memories of the past, can be strategically deployed to advance ideological narratives of decline",
          "This concept applies exclusively to memes about literal historical events with no relevance to pop-cultural nostalgia of any kind whatsoever",
          "Weaponized nostalgia theory denies that memes referencing the past can carry any rhetorical function"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is the theoretical significance of 'ambient co-presence', a concept from internet culture and social media studies, for understanding how platforms like Discord or group chats sustain ongoing meme-sharing communities?",
        "opts": [
          "Ambient co-presence describes only formally scheduled video calls with no informal or background social dimension",
          "The low-level, ongoing sense of shared social presence in always-on digital spaces that sustains informal bonding and meme-sharing",
          "This concept applies exclusively to physical, in-person social gatherings",
          "Ambient co-presence theory denies that any meaningful social bonding can occur through purely text-based digital communication"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'the concept of 'chaos posting'' or 'chaotic online aesthetics' describe as a stylistic mode within certain internet subcultures?",
        "opts": [
          "A highly formal, structured posting style with rigid, predictable conventions and strict formatting rules enforced by moderators",
          "A deliberately disjointed, unpredictable posting style resisting coherent meaning, often as a rejection of polished mainstream content",
          "A term describing only technical website malfunctions or bugs",
          "A formally regulated content category with specific platform guidelines"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is the theoretical significance of 'digital ethnography' as a research methodology for studying internet meme communities and subcultures?",
        "opts": [
          "Digital ethnography rejects any direct observation or participation, relying purely on quantitative engagement statistics",
          "An adapted ethnographic method where researchers immerse themselves within online communities to interpret their cultural practices from within",
          "This methodology applies exclusively to studying offline, physical communities, with no application to internet subcultures of any kind",
          "Digital ethnography is considered methodologically identical to a simple keyword-based content analysis"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'the concept of 'phatic communication'', originally from linguistic anthropology (Bronisław Malinowski), get applied to describe in the context of low-content, high-frequency meme and reaction sharing between friends?",
        "opts": [
          "Communication whose primary function is conveying complex, novel factual information",
          "Communication mainly meant to maintain social bonds, rather than convey new information",
          "A term applicable exclusively to formal written correspondence",
          "Phatic communication theory denies that any social function is served by casual online exchanges"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is the theoretical significance of 'the concept of 'semantic bleaching'' as applied to the evolution of internet slang and meme-associated vocabulary over time?",
        "opts": [
          "Words and phrases used in internet slang retain a permanently fixed, unchanging meaning and intensity over time, regardless of usage",
          "A process where a word, through repeated ironic or exaggerated usage online, gradually loses its original, more intense meaning",
          "This concept applies exclusively to formal academic vocabulary, not internet slang",
          "Semantic bleaching theory denies that internet slang undergoes any meaningful linguistic evolution"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'the concept of 'context-collapsed irony'' describe as a particular risk or challenge for meme creators posting to broad, undifferentiated online audiences?",
        "opts": [
          "The concept describes memes that are always understood identically by every viewer regardless of audience size or composition",
          "The risk that a satirical meme may be sincerely misread by segments of a large audience lacking the shared context to interpret the irony",
          "This concept applies exclusively to memes shared within small, tightly-knit private group chats",
          "Context-collapsed irony theory denies that irony can ever be misinterpreted online"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is the theoretical significance of 'digital folklore studies' as an emerging academic field for analyzing internet memes and viral content?",
        "opts": [
          "Digital folklore studies reject any connection between internet culture and traditional folklore studies methodologies of any kind",
          "An interdisciplinary field applying traditional folklore concepts like variation and communal ownership to internet memes as vernacular folk culture",
          "This field applies exclusively to formally published, professionally authored digital content",
          "Digital folklore studies is concerned exclusively with the technical file formats used to store meme images, video clips, and text captions"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'the concept of 'stochastic terrorism'', as controversially applied in some analyses of extremist online meme and rhetoric circulation, describe?",
        "opts": [
          "A formally defined legal category applied uniformly and without controversy across all jurisdictions",
          "A contested idea that inflammatory public rhetoric, without ordering any specific act, may statistically increase the odds of unpredictable real-world violence",
          "This concept applies exclusively to formally declared acts of war between nation-states",
          "Stochastic terrorism theory denies that online rhetoric or meme content can have any real-world behavioral effect on any individual under any circumstances"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'the concept of 'accelerationism' in its explicitly philosophical (rather than purely internet-subcultural) formulation, associated with theorists like Nick Land, propose regarding capitalism's relationship to technological and social change, and how has this concept been controversially appropriated within certain extremely online meme subcultures?",
        "opts": [
          "Philosophical accelerationism argues technological and capitalist processes should be actively slowed to allow for careful, deliberate social planning",
          "Land argued capitalism's technological intensification should be pushed further, a stance later adopted aesthetically by fringe meme subcultures",
          "This concept has no documented connection whatsoever to any internet subculture",
          "Accelerationism as a philosophical concept was invented specifically to describe contemporary social media algorithm design"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'the concept of 'egregore'', an occult-derived term increasingly informally invoked within certain internet subcultures to describe emergent collective online phenomena, and how does its usage intersect with more formal theories of distributed cognition and collective online behavior?",
        "opts": [
          "The term egregore has an exclusively formal, scientifically validated definition with no occult or esoteric origin",
          "An occultist term for a group mind, informally adopted online to describe emergent collective phenomena",
          "This concept is used identically and without any semantic drift across every online community that references it",
          "Egregore theory has been definitively and uncontroversially validated as an accurate scientific description of internet community dynamics"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'network propaganda and computational propaganda research' (Woolley and Howard, among others) argue regarding the role of automated bot accounts and coordinated inauthentic behavior in amplifying memetic content within contemporary information warfare?",
        "opts": [
          "Automated accounts have been definitively proven to have no measurable effect on the spread or perceived popularity of viral content",
          "Coordinated networks of automated accounts, or bots, can be deployed to artificially amplify a meme's apparent popularity, manufacturing a false impression of consensus",
          "This research area is concerned exclusively with historical print propaganda, with no application to contemporary digital or meme-based content",
          "Computational propaganda research has concluded that all viral content spread is entirely organic with zero coordinated inauthentic amplification of any kind"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'the concept of 'post-truth epistemology' as applied to internet meme and disinformation research, and how does this concept relate to earlier philosophical debates about the social construction of knowledge?",
        "opts": [
          "Post-truth epistemology asserts that objective truth has always been irrelevant to any human society throughout history",
          "It describes a perceived shift where emotional appeal carries more persuasive weight online than objective fact",
          "This concept has been universally and uncontroversially accepted by all media scholars with no ongoing academic debate",
          "Post-truth epistemology theory denies that any factual claims can ever be evaluated as more or less accurate than others"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'the theoretical concept of 'semiotic democracy'', as originally articulated by cultural theorist John Fiske and later critically revisited in relation to internet remix and meme culture, propose about the distribution of interpretive and creative power over shared cultural symbols?",
        "opts": [
          "Semiotic democracy asserts that only professional media producers and copyright holders have any legitimate claim to interpret or reuse cultural symbols",
          "Fiske's idea that audiences hold real power to reinterpret media texts, later applied to meme remix culture",
          "This concept was developed specifically to describe formal democratic voting systems, with no relevance to media or cultural theory",
          "Semiotic democracy theory has been definitively disproven and is no longer referenced in any contemporary media scholarship"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'the concept of 'networked framing theory'', extending classical media framing theory (Erving Goffman, Robert Entman) to the distributed, user-generated context of meme-based political communication?",
        "opts": [
          "Framing theory asserts that the specific presentation or 'frame' applied to an issue has no measurable effect on how audiences interpret or evaluate it",
          "How an issue's framing shapes interpretation, now happening in a distributed way across memes and posts",
          "This theoretical extension applies exclusively to television broadcast framing, excluding any digital or social media context",
          "Networked framing theory concludes that framing effects have become entirely negligible in the contemporary high-choice media environment"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'the concept of 'platform-dependent meme mutation'', as examined in comparative digital culture research across platforms like 4chan, Twitter/X, TikTok, and Instagram, suggest about how identical meme formats can evolve differently depending on their platform context?",
        "opts": [
          "Meme formats are theorized to spread and evolve identically regardless of the specific technical affordances or community norms of the platform involved",
          "Meme formats often mutate in tone and function as they migrate between platforms with different affordances and community norms",
          "This concept applies exclusively to memes that have never been shared on more than one platform",
          "Platform-dependent mutation theory has been shown to apply only to text-based memes, with no relevance to image or video-based formats"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'the concept of 'algorithmic amplification bias'' as researched within critical platform studies, for understanding the disproportionate virality of certain types of emotionally or morally charged meme content?",
        "opts": [
          "Platform recommendation algorithms have been conclusively shown to amplify all types of content completely equally, with no measurable bias toward any particular content characteristics",
          "Engagement-optimized algorithms may systematically amplify emotionally or morally charged memes, since such content reliably drives high engagement",
          "This research area concludes definitively that algorithmic amplification bias does not exist on any major platform",
          "Algorithmic amplification bias theory applies exclusively to explicitly political content, with no relevance to entertainment or humor-based memes"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'the concept of 'meme-based collective sense-making'', as explored in some digital sociology research on crisis and disaster events, suggest about the social function memes can serve during periods of collective uncertainty or trauma?",
        "opts": [
          "Memes created during crisis events are theorized to serve no meaningful social or psychological function whatsoever, being purely frivolous distractions",
          "Meme creation during crisis events can serve as an informal collective coping mechanism, letting dispersed publics process shared grief through humor",
          "This concept applies exclusively to memes created by professional crisis communication teams, excluding organic user-generated content",
          "Meme-based collective sense-making theory has been definitively proven to worsen, rather than aid, collective psychological coping during crisis events"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'the concept of 'synthetic media meme propagation'', an emerging area of research examining how AI-generated images, video, and text are beginning to reshape traditional meme creation, remix, and virality dynamics?",
        "opts": [
          "The introduction of AI-generated synthetic media is theorized to have no meaningful effect on existing patterns of meme creation, remix culture, or virality dynamics",
          "Accessible AI generation tools are reshaping meme culture by lowering the barrier to novel visual content, raising questions about authenticity and authorship",
          "This research area is concerned exclusively with AI-generated music, with no application to visual or textual meme content",
          "Synthetic media meme propagation research has concluded that AI-generated content is indistinguishable from and functionally identical to traditional human-created memes in every measurable respect"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'the concept of 'meme entropy'' or 'informational decay in viral content', as discussed in some quantitative internet culture research, suggest about the typical trajectory of a meme's cultural relevance and comprehensibility over its lifecycle?",
        "opts": [
          "Memes are theorized to retain a perfectly constant, unchanging level of comprehensibility and relevance indefinitely once created",
          "A meme's cultural salience and comprehensibility tend to decay over time as a format becomes overused and public attention moves elsewhere",
          "This concept applies exclusively to memes that have been formally archived by a library or museum",
          "Meme entropy theory has been shown to apply only to text-based memes, never to image or video formats"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'the concept of 'platform vernacular architecture'', examining how a platform's specific technical design choices, such as character limits or algorithmic feed ordering, shape the formal aesthetic conventions of memes native to that platform?",
        "opts": [
          "A platform's technical design and interface choices are theorized to have no measurable influence on the formal style or conventions of memes created for it",
          "Specific technical constraints of a platform, like character limits or video-remix functionality, directly shape the conventions of memes native to it",
          "This concept applies exclusively to platforms that have been discontinued and are no longer in operation",
          "Platform vernacular architecture theory concludes that all major platforms produce structurally identical meme formats"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'the concept of 'meme-mediated political polarization'', as examined in some computational social science research, suggest about the specific mechanisms by which visual meme content may contribute to affective political polarization, beyond the effects of purely textual political messaging?",
        "opts": [
          "Visual meme content is theorized to have a persuasive and emotional effect entirely identical to purely textual political messaging, with no distinguishing characteristics",
          "Visual memes may be processed more rapidly and evoke stronger emotional responses than text, contributing distinctively to political polarization",
          "This research area has concluded definitively that visual memes have no measurable effect on political attitudes or polarization whatsoever",
          "Meme-mediated polarization research applies exclusively to memes explicitly labeled as political, excluding ostensibly apolitical content with implicit political framing"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'the concept of 'collective meme authorship and diffuse intellectual property'', as examined in legal and cultural scholarship on the tension between traditional copyright frameworks and communally evolved, iteratively remixed meme formats?",
        "opts": [
          "Meme formats are theorized to always have a single, clearly identifiable, and legally straightforward original author with no meaningful diffusion of creative contribution",
          "Widely circulated meme formats evolve through diffuse, anonymous collective authorship, creating tension with copyright law's assumption of a single author",
          "This scholarship concludes that all meme formats are, in fact, legally unprotected and freely available for any commercial use with no legal ambiguity whatsoever",
          "Collective meme authorship theory applies exclusively to memes created before the year 2000"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'the concept of 'ironic radicalization pathways'', as examined in some research on online extremism, propose about the potential role of ostensibly humorous, ironic meme content as an early-stage on-ramp toward more explicit extremist ideological engagement for some individuals?",
        "opts": [
          "Ironic or humorous meme content is theorized to have no documented relationship whatsoever to subsequent extremist ideological engagement for any individual",
          "Ironic, extremist-adjacent meme content can, for some vulnerable individuals, function as a low-commitment entry point that gradually normalizes exposure to extremist framing",
          "This research area has been universally and uncontroversially validated as applying identically to one hundred percent of individuals exposed to such content across all cultures",
          "Ironic radicalization pathway theory concludes that meme content is entirely irrelevant to any real-world extremist behavior or belief formation"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'the concept of 'meme-based epistemic communities'', examining how shared engagement with specific meme formats and in-group references can function to demarcate and reinforce boundaries around a community's shared knowledge base and worldview?",
        "opts": [
          "Shared engagement with meme content is theorized to have no bearing whatsoever on how online communities define their boundaries or shared identity",
          "Fluency in a community's evolving meme vocabulary signals belonging, reinforcing cohesion for insiders while excluding unfamiliar outsiders",
          "This concept applies exclusively to formally organized academic research communities, with no relevance to informal internet subcultures",
          "Meme-based epistemic community theory concludes that all online communities share an identical, universal meme vocabulary with no distinguishing in-group references"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'the concept of 'recursive meme commentary'', where memes are increasingly created specifically to comment on or parody the phenomenon of memes and internet culture itself, suggest about the self-referential maturation of internet meme culture as a communicative form?",
        "opts": [
          "Meme culture is theorized to remain a purely first-order phenomenon with no capacity for self-referential or meta-commentary content",
          "An increasing prevalence of recursive meme content parodying meme culture itself, seen by some as a sign of the form's cultural maturation",
          "This recursive commentary phenomenon has been observed exclusively in memes created by professional media critics, never by ordinary internet users",
          "Recursive meme commentary theory concludes that self-referential memes are entirely incomprehensible and have zero measurable audience engagement"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'the concept of 'meme diplomacy' or 'meme-based public diplomacy'', as examined in some international relations and strategic communication scholarship regarding state and non-state actors' use of memes in geopolitical messaging?",
        "opts": [
          "State and non-state political actors are theorized to have no documented history of using meme formats for diplomatic or geopolitical strategic communication purposes",
          "Government accounts and diplomatic missions have adopted meme formats as a strategic tool to engage younger audiences and shape public perception",
          "This concept applies exclusively to historical, pre-internet forms of public diplomacy, with no application to contemporary digital or meme-based communication",
          "Meme diplomacy research has concluded that this strategic communication approach has never been attempted or documented by any government or diplomatic entity"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'the concept of 'meme-mediated collective memory formation'', as examined in some digital memory studies scholarship, propose about the role memes increasingly play in shaping how significant historical or current events are collectively remembered and referenced by online publics?",
        "opts": [
          "Meme content is theorized to have no measurable influence whatsoever on how significant events are collectively remembered, referenced, or discussed by online publics over time",
          "Memes increasingly function as an informal, emotionally condensed vehicle through which online publics collectively remember significant events",
          "This scholarship concludes that memes exclusively distort collective memory with no legitimate documentary or commemorative function whatsoever",
          "Meme-mediated collective memory theory applies exclusively to events that occurred before the invention of the internet"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'the concept of 'meme format genealogy tracing'', a digital humanities methodology using reverse image search and archival analysis to reconstruct the historical origin and mutation lineage of a given viral meme format?",
        "opts": [
          "Meme format origins are theorized to be permanently untraceable and inherently unknowable using any archival or computational methodology",
          "Researchers combine reverse image search, web archive analysis, and community-sourced documentation to reconstruct a viral meme format's origin and mutation lineage",
          "This methodology applies exclusively to memes created after 2020, with no application to earlier internet culture",
          "Meme format genealogy tracing has been shown to be methodologically identical to, and fully interchangeable with, traditional print bibliography in every respect"
        ],
        "a": 1,
        "tier": 5
      }
    ]
  },
  {
    "id": "law",
    "name": "Law",
    "questions": [
      {
        "q": "What is a 'law'?",
        "opts": [
          "A personal opinion",
          "A rule created and enforced by a governing authority",
          "A type of business contract signed between two private companies",
          "A voluntary suggestion"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a 'court'?",
        "opts": [
          "A place where new laws are debated and passed by elected legislators",
          "A place where legal disputes are resolved by a judge or jury",
          "A government tax office",
          "A police station"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does a 'judge' do?",
        "opts": [
          "Enforces traffic laws directly on public streets and highways",
          "Presides over court cases and makes legal rulings",
          "Writes all new laws",
          "Represents one side in a criminal case"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a 'lawyer'?",
        "opts": [
          "A judge who presides over hearings inside a courtroom setting",
          "Someone licensed to advise and represent others in legal matters",
          "A police officer",
          "A member of a jury"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does 'guilty' mean in a criminal trial?",
        "opts": [
          "The defendant is found responsible for the crime charged",
          "The defendant is found innocent of every charge presented",
          "The case is dismissed",
          "The trial is postponed"
        ],
        "a": 0,
        "tier": 1
      },
      {
        "q": "What does 'innocent until proven guilty' mean?",
        "opts": [
          "A person is assumed guilty unless they can prove their own innocence in court",
          "A person is presumed not guilty unless the prosecution proves guilt",
          "Only judges can be found guilty",
          "Trials are unnecessary if evidence exists"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a 'contract'?",
        "opts": [
          "A type of criminal charge filed against a company executive",
          "A legally binding agreement between two or more parties",
          "A government tax form",
          "A type of court ruling"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does 'jury' mean in a trial?",
        "opts": [
          "A group of lawyers hired to represent the defendant throughout the trial",
          "A group of citizens who decide the facts of a case and reach a verdict",
          "The judge's assistant",
          "A type of legal document"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a 'crime'?",
        "opts": [
          "Any disagreement between two people over money owed",
          "An act that is prohibited and punishable by law",
          "A civil lawsuit",
          "A type of contract dispute"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does 'sue' mean?",
        "opts": [
          "To be arrested by police",
          "To bring a civil lawsuit against someone",
          "To be found guilty of a crime after a full jury trial",
          "To sign a contract"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a 'witness' in a trial?",
        "opts": [
          "The person accused of a crime",
          "A person who testifies about what they saw, heard, or know relevant to a case",
          "The judge who presides over the case and issues the final ruling in open court",
          "A type of legal document"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does 'plaintiff' mean in a civil lawsuit?",
        "opts": [
          "The person being sued",
          "The person or party who brings the lawsuit",
          "The judge who hears the evidence and decides the case",
          "A witness testifying in court"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does 'defendant' mean in a legal case?",
        "opts": [
          "The person bringing the lawsuit",
          "The person accused or being sued in a legal case",
          "The judge presiding over the entire criminal trial proceedings",
          "A member of the jury"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a 'verdict'?",
        "opts": [
          "The opening statement in a trial",
          "The formal decision or finding made by a judge or jury at the end of a trial",
          "A type of legal document filed with the court before a trial officially begins",
          "The location where a trial takes place"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does 'legal age' typically refer to?",
        "opts": [
          "The age at which someone can retire",
          "The age at which a person gains full legal rights and responsibilities",
          "The age at which someone must first begin paying income and property taxes",
          "The age at which someone can become a judge"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is 'evidence' in a legal case?",
        "opts": [
          "A lawyer's personal opinion",
          "Information or testimony presented to prove or disprove facts in a case",
          "The judge's final ruling",
          "The location where a crime occurred, sealed off and investigated by police"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does 'appeal' mean in a legal context?",
        "opts": [
          "Accepting a court's decision immediately and waiving any right to further review",
          "A request to a higher court to review and overturn a lower court's decision",
          "Filing an initial lawsuit",
          "Testifying as a witness"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a 'police officer's' basic role?",
        "opts": [
          "Deciding a defendant's guilt or innocence",
          "Enforcing laws and maintaining public order",
          "Writing new laws for a country",
          "Representing defendants in court"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does 'illegal' mean?",
        "opts": [
          "Approved and encouraged by law",
          "Prohibited or against the law",
          "Optional under the law",
          "A type of legal contract"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a 'constitution'?",
        "opts": [
          "A single law about property and income taxes owed each year",
          "The core document establishing a country's government and rights",
          "A type of criminal charge",
          "A court's daily schedule"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is the difference between 'civil law' and 'criminal law'?",
        "opts": [
          "There is no meaningful difference",
          "Civil law deals with disputes between private parties, often seeking compensation; criminal law deals with offenses against the state",
          "Civil law only applies to businesses and their contracts; criminal law only applies to private individuals accused of minor infractions",
          "Criminal law has no involvement from judges"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is 'due process'?",
        "opts": [
          "A guarantee that the government will follow fair legal procedures before depriving a person of life, liberty, or property",
          "A rule requiring every criminal trial to be broadcast live on national television for public viewing and review",
          "A rule that only applies to civil cases",
          "A process for filing taxes"
        ],
        "a": 0,
        "tier": 2
      },
      {
        "q": "What does 'habeas corpus' protect against?",
        "opts": [
          "Unfair taxation",
          "Unlawful detention, by requiring courts to promptly review its legality",
          "Discrimination in hiring based on protected personal characteristics and background",
          "Breach of contract"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is 'precedent' in common law legal systems?",
        "opts": [
          "A law passed by a legislature and formally signed into effect by the head of state",
          "A previous court decision used as authority for deciding similar future cases",
          "A type of criminal punishment",
          "A written constitution"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'tort' refer to in civil law?",
        "opts": [
          "A criminal offense punishable by imprisonment, a fine, or both, depending on the severity of the statute violated",
          "A civil wrong causing harm or loss to another person, for which the injured party may seek compensation",
          "A type of tax fraud",
          "A government regulation"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is 'liability' in a legal context?",
        "opts": [
          "A type of criminal sentence handed down after conviction, often served in a state prison",
          "Legal responsibility for one's actions, often requiring compensation for harm",
          "A type of legal document",
          "A court's jurisdiction"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'breach of contract' mean?",
        "opts": [
          "Signing a brand new contract with more favorable terms than the one before it",
          "Failing to fulfill the terms of a legally binding agreement",
          "Successfully completing a contract",
          "A type of criminal charge"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is 'jurisdiction' in law?",
        "opts": [
          "A type of legal punishment handed down after sentencing by a criminal court",
          "A court's official authority to hear cases within a certain area or subject",
          "A type of contract clause",
          "A lawyer's area of specialization only"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'plea bargain' refer to in criminal law?",
        "opts": [
          "A defendant's constitutional right to remain silent during police questioning",
          "Pleading guilty to a lesser charge in exchange for a lighter sentence",
          "A jury's final verdict",
          "A type of civil lawsuit settlement"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is 'intellectual property' law primarily concerned with protecting?",
        "opts": [
          "Physical real estate and the buildings built upon it",
          "Creations of the mind, like inventions and trademarks",
          "Personal bank accounts",
          "Government buildings"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'statute of limitations' refer to?",
        "opts": [
          "A permanent ban on filing any lawsuit whatsoever, regardless of the underlying claim or the parties involved",
          "A legally defined time limit within which a lawsuit or criminal charge must be initiated",
          "A rule limiting how long a trial can last",
          "A limit on how many witnesses can testify"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is 'negligence' in tort law?",
        "opts": [
          "Intentionally and knowingly causing harm to another person without any provocation",
          "A failure to exercise reasonable care, resulting in harm to another person",
          "A type of criminal fraud",
          "A breach of a written contract only"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'double jeopardy' protect a defendant from?",
        "opts": [
          "Being tried twice by two entirely different judges on the very same calendar day in the same courthouse",
          "Being prosecuted twice for substantially the same criminal offense after an acquittal or conviction",
          "Paying two separate fines for one crime",
          "Facing both civil and criminal consequences for different acts"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is 'arbitration' as a method of dispute resolution?",
        "opts": [
          "A formal criminal trial process overseen by a judge and a jury of twelve peers",
          "A private process where a neutral third party resolves a dispute outside court",
          "A type of jury selection process",
          "A government audit process"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'consideration' mean in contract law?",
        "opts": [
          "A judge's careful thought and private deliberation before issuing a final written ruling in open court",
          "Something of value exchanged between parties, which is generally required to make a contract legally binding",
          "A type of witness testimony",
          "A formal legal apology"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is 'mens rea' in criminal law?",
        "opts": [
          "The physical act of committing a crime, regardless of the person's intent or state of mind at the exact time it occurred",
          "The mental state or intent of a person at the time of committing a crime, a key element in many criminal offenses",
          "A type of legal defense document",
          "The location where a crime occurred"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'actus reus' refer to in criminal law?",
        "opts": [
          "A defendant's state of mind and intentions at the time of the alleged offense",
          "The actual physical act or conduct that constitutes a criminal offense",
          "A type of legal appeal",
          "A witness's testimony"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is 'discovery' in the context of a civil lawsuit?",
        "opts": [
          "The initial filing of a lawsuit's paperwork with the local court clerk's office",
          "A pre-trial process in which both parties exchange relevant information and evidence",
          "The jury's final decision",
          "An appeal to a higher court"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'class action lawsuit' mean?",
        "opts": [
          "A lawsuit filed by a single individual acting entirely alone without any legal representation",
          "A lawsuit filed by one or more plaintiffs on behalf of a larger group of people with similar claims",
          "A criminal trial involving multiple defendants",
          "A lawsuit exclusively between two businesses"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is 'legal standing' required for a party to have in order to bring a lawsuit?",
        "opts": [
          "A law degree earned from an accredited law school after passing the bar exam",
          "A sufficient connection to and harm from the issue to justify bringing the case",
          "Prior experience as a witness",
          "Approval from the opposing party"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'judicial review' allow courts to do?",
        "opts": [
          "Only interpret the terms of contracts formed between two private commercial parties",
          "Examine and potentially invalidate laws or government actions found to be unconstitutional",
          "Only preside over criminal trials",
          "Only issue advisory, non-binding opinions"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is the doctrine of 'separation of powers' intended to prevent?",
        "opts": [
          "Cooperation between all three branches of government",
          "Any one branch of government from gaining too much power",
          "Courts from ever reviewing legislation",
          "States from having their own laws"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'stare decisis' mean in legal systems that follow precedent?",
        "opts": [
          "Courts should ignore all past rulings entirely and start completely fresh with each and every new case they hear",
          "The legal principle of adhering to precedent, meaning courts should follow rulings established in prior similar cases",
          "Only the highest court's decisions matter",
          "Statutes always override judicial rulings"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'strict liability' in tort law?",
        "opts": [
          "Liability that requires clear and convincing proof of intent or careless, reckless negligence on the part of the defendant",
          "Liability imposed regardless of fault or intent, often applied to inherently dangerous activities or defective products",
          "A type of criminal defense",
          "A liability that applies only to government entities"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'vicarious liability' generally hold?",
        "opts": [
          "Only the individual who directly and personally caused the harm can ever be held liable under any circumstance",
          "One party, such as an employer, can be held legally responsible for the wrongful acts of another, such as an employee",
          "Liability only applies to intentional torts",
          "Liability cannot be transferred between parties under any circumstances"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is the significance of 'Miranda rights' in US criminal procedure?",
        "opts": [
          "They guarantee a defendant the constitutional right to a full jury trial in every criminal case brought against them",
          "They require police to inform a suspect of key rights, like remaining silent, before interrogation",
          "They apply only to civil lawsuits",
          "They guarantee an immediate release from custody"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'promissory estoppel' allow a court to enforce?",
        "opts": [
          "Only contracts backed by formal written consideration that has been signed, witnessed, and notarized by a licensed public official",
          "A promise that induced reasonable reliance by another party, even in the absence of formal contractual consideration, to prevent injustice",
          "Any verbal statement made casually",
          "Only government promises"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'comparative negligence' used to determine in tort cases?",
        "opts": [
          "Whether a defendant is guilty of a criminal offense beyond a reasonable doubt, as decided by a unanimous jury verdict",
          "How damages should be apportioned between parties based on each party's relative degree of fault in causing harm",
          "Whether a contract is legally valid",
          "The statute of limitations for a claim"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does the term 'ultra vires' refer to in corporate and administrative law?",
        "opts": [
          "An action taken well within one's own recognized legal authority and power",
          "An act performed beyond the legal power granted to a person or entity",
          "A type of binding contract",
          "A criminal defense based on insanity"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'res judicata' meant to prevent?",
        "opts": [
          "A defendant from ever appealing a decision to a higher court under any circumstances whatsoever, even with new evidence",
          "The relitigation of a matter that has already been finally decided by a competent court between the same parties",
          "Any settlement between parties",
          "A jury from deliberating too long"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'burden of proof' refer to in a legal proceeding?",
        "opts": [
          "The physical evidence presented in a case, such as documents, photographs, and recordings",
          "The obligation to prove disputed facts, with a stricter standard in criminal cases",
          "A lawyer's fee structure",
          "The length of a trial"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'joint and several liability'?",
        "opts": [
          "Liability that can only ever be assigned to a single party, regardless of how many other parties were involved in causing the harm or how the fault was actually divided among them",
          "A legal doctrine allowing a plaintiff to recover the full amount of damages from any one of multiple liable defendants, regardless of that defendant's individual share of fault",
          "A rule preventing multiple defendants from being sued together",
          "A type of criminal sentencing guideline"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'in personam' jurisdiction refer to, as distinguished from 'in rem' jurisdiction?",
        "opts": [
          "Authority over a specific piece of real property only, never over any of the people actually involved in the case",
          "A court's authority over the specific parties (persons) involved in a lawsuit, as opposed to authority over property itself",
          "A type of jurisdiction that applies only to criminal cases",
          "Jurisdiction that never requires any connection to the parties"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is the 'exclusionary rule' in criminal procedure?",
        "opts": [
          "A rule requiring all evidence to be admitted at trial regardless of how it was obtained by police or investigators, even illegally and without a warrant",
          "A rule that generally prohibits the use of evidence obtained in violation of a defendant's constitutional rights from being used in a criminal trial",
          "A rule excluding certain witnesses from testifying based on age",
          "A civil law doctrine with no application in criminal cases"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'equitable relief', as opposed to monetary damages, typically involve?",
        "opts": [
          "Only cash compensation for harm suffered, paid out in a single lump sum payment",
          "Non-monetary court remedies, like injunctions, when damages alone aren't enough",
          "A criminal sentence of imprisonment",
          "A type of settlement agreement only"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'piercing the corporate veil' a legal doctrine allowing courts to do?",
        "opts": [
          "Always shield shareholders from any personal liability whatsoever, no matter the circumstances or conduct involved",
          "Hold shareholders or owners personally liable for a corporation's actions or debts, typically in cases of fraud",
          "Dissolve a corporation automatically after a lawsuit",
          "Transfer a corporation's assets to the government"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'conflict of laws' (or private international law) address?",
        "opts": [
          "Disputes between two branches of the same national government over budget, spending, and administrative authority, resolved internally without any court involvement",
          "Which jurisdiction's laws should apply, and which court has authority, when a dispute involves parties or events connected to more than one jurisdiction",
          "Only disputes between two individuals in the same city",
          "A type of international trade tariff"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is a 'fiduciary duty'?",
        "opts": [
          "A general, minimal duty owed by any person to any other person they happen to meet",
          "A heightened duty of trust and loyalty owed by one party, like a trustee, to another",
          "A duty that applies only to elected government officials",
          "A duty owed exclusively by lawyers to their clients"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'the reasonable person standard' provide in negligence law?",
        "opts": [
          "A subjective measure based solely on the defendant's own personal judgment and individual beliefs at the time of the incident",
          "An objective benchmark asking how a hypothetical reasonably careful person would have acted under similar circumstances",
          "A standard applied only in criminal cases",
          "A rule eliminating the need to prove fault entirely"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'collateral estoppel' (issue preclusion) designed to prevent?",
        "opts": [
          "A party from ever filing a new, entirely unrelated lawsuit in any court whatsoever",
          "A party from relitigating an issue already decided in a prior case between them",
          "A defendant from being represented by a lawyer",
          "A jury from being selected in a new trial"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'legal positivism', as a jurisprudential theory associated with thinkers like H.L.A. Hart, argue about the nature of law?",
        "opts": [
          "Law is inherently and necessarily connected to morality, and an immoral rule cannot be valid law",
          "The validity of a law is determined by its sources, such as proper enactment, and is separate from its moral merit",
          "Law can only be understood through religious doctrine and scripture, as interpreted by religious leaders and scholars",
          "Legal rules have no binding force unless universally agreed upon"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is the significance of 'natural law theory' as a jurisprudential tradition, in contrast to legal positivism?",
        "opts": [
          "It holds that law is purely a social construct with absolutely no connection to morality or ethics at all",
          "There are inherent moral principles, discoverable through reason, that any valid human law must conform to",
          "It rejects the existence of any universal moral principles",
          "It applies only to environmental regulation"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'legal realism', as a school of American jurisprudence, emphasize about how judges actually decide cases?",
        "opts": [
          "Judges mechanically apply legal rules with absolutely no discretion or outside influence whatsoever",
          "Judicial decisions are significantly shaped by social and policy considerations, not just formal rules",
          "Judges should ignore precedent entirely",
          "Legal outcomes are entirely random and unpredictable"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'critical legal studies' (CLS) as a movement in legal theory primarily critical of?",
        "opts": [
          "The idea that any legal reform is possible",
          "The claim that law is neutral and apolitical, when doctrine actually reflects existing power structures",
          "The use of precedent in common law systems exclusively",
          "Only constitutional law, with no relevance whatsoever to any other area or field of legal practice or scholarship"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does the 'Hart-Fuller debate' in jurisprudence center on?",
        "opts": [
          "A dispute over corporate tax law between two large multinational conglomerates",
          "Hart and Fuller's debate over whether law and morality are conceptually separate",
          "A debate about criminal sentencing guidelines",
          "A dispute over international trade agreements"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'law and economics', as an interdisciplinary approach to legal analysis associated with scholars like Richard Posner, primarily concerned with?",
        "opts": [
          "Applying purely moral philosophy to legal questions",
          "Analyzing legal rules and institutions using economic theory, often assessing law in terms of efficiency and incentives",
          "Rejecting the relevance of economic considerations to legal questions entirely",
          "A field concerned exclusively with corporate tax law, filings, and regulatory compliance for large multinational corporations"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does the 'Coase theorem', as applied within law and economics, imply about the role of legal rules like liability assignment when transaction costs are low?",
        "opts": [
          "Legal rules always determine the final efficient economic outcome, regardless of any bargaining between the parties involved",
          "Parties will bargain to an efficient outcome regardless of the initial legal assignment of rights, provided transaction costs are low",
          "Legal rules are irrelevant to economic outcomes under any conditions whatsoever",
          "Transaction costs are always zero in real-world legal disputes"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'comparative law' as a field of legal scholarship primarily concerned with?",
        "opts": [
          "Studying only a single country's legal system in total isolation",
          "The systematic study and comparison of different legal systems and traditions across countries",
          "Comparing criminal sentencing practices for the exact same crime within a single national jurisdiction",
          "A field concerned exclusively with international trade law"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does the distinction between 'civil law' and 'common law' legal traditions primarily refer to, at a systemic level?",
        "opts": [
          "Civil law systems have no written constitutions at all, while common law systems always maintain a single formal one",
          "Civil law systems are primarily based on codified statutes, while common law systems emphasize judicial precedent and case law",
          "Civil law systems only apply to non-criminal matters",
          "Common law systems reject the use of any statutes entirely"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'legal formalism' as a jurisprudential approach, often contrasted with legal realism?",
        "opts": [
          "The view that judges should exercise wide, unchecked personal discretion untethered from any established legal rules or precedent",
          "The view that legal reasoning is, or should be, a largely logical and mechanical process of applying established rules to facts",
          "A theory rejecting the existence of legal rules altogether",
          "A theory applicable only to constitutional interpretation"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'originalism' as a method of constitutional interpretation generally hold?",
        "opts": [
          "Constitutional provisions should be interpreted according to evolving contemporary social values, regardless of their original meaning",
          "Constitutional provisions should be interpreted according to their original public meaning or the intent of those who drafted them",
          "Courts should never interpret the constitution at all",
          "Constitutional interpretation is identical to statutory interpretation in every respect"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'living constitutionalism' as a contrasting method of constitutional interpretation?",
        "opts": [
          "The view that a constitution's meaning is fixed permanently and unalterably at the moment of ratification",
          "The view that a constitution's meaning can evolve over time to reflect changing societal values and circumstances",
          "A method used exclusively in civil law jurisdictions",
          "A theory rejecting the existence of a written constitution"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'legal pluralism' as a theoretical framework recognize about the coexistence of legal systems within a society?",
        "opts": [
          "Only a single, state-sanctioned legal system can validly exist within any given society",
          "Multiple legal systems or normative orders, such as state, customary, or religious law, can coexist within the same social field",
          "Legal pluralism refers only to the existence of multiple separate courts within one single, unified national legal system",
          "It is a concept applicable only to international law"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'the internal point of view', a concept central to H.L.A. Hart's legal positivism, meant to capture?",
        "opts": [
          "A purely external, sociological observation of how people merely happen to behave in response to existing legal rules over time",
          "The perspective of participants who accept legal rules as genuine standards of conduct and criticize deviations from them",
          "A judge's private, subjective political opinions",
          "A defendant's mental state during a crime"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'the rule of recognition', another key concept in Hart's legal theory, function to identify?",
        "opts": [
          "The specific punishment prescribed by statute for every individual criminal offense committed within a jurisdiction",
          "The ultimate, socially accepted criteria used to identify which rules count as valid law within a system",
          "A rule applicable only to written constitutions",
          "A rule requiring unanimous judicial agreement on every case"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'transitional justice' as a field concerned with, in societies emerging from conflict or authoritarian rule?",
        "opts": [
          "Only the immediate imprisonment of former leaders, with no further truth-seeking, reparations, or judicial process of any kind whatsoever",
          "A range of judicial and non-judicial mechanisms aimed at addressing legacies of past human rights abuses and facilitating societal transition",
          "A field concerned exclusively with corporate bankruptcy law",
          "A type of international trade dispute resolution"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'the doctrine of proportionality', widely used in constitutional and human rights adjudication, generally require courts to assess?",
        "opts": [
          "Whether a government measure has any conceivable justification whatsoever, regardless of its actual real-world impact on the people affected",
          "Whether a government measure that limits a right pursues a legitimate aim and does not impose an excessive burden relative to the benefit achieved",
          "Whether a criminal sentence matches the exact length specified in a statute",
          "Whether a contract's terms are numerically balanced"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'legal indeterminacy', a key claim associated with critical legal studies and some legal realists?",
        "opts": [
          "The idea that legal rules always produce a single, objectively correct answer to absolutely any legal question imaginable, without exception",
          "The claim that, in many cases, existing legal materials do not logically compel a single correct outcome, leaving room for judicial choice",
          "A concept applicable only to ambiguous contract terms",
          "A theory rejecting the existence of any legal reasoning"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'the New Haven School' of international law, associated with Myres McDougal and Harold Lasswell, emphasize as central to understanding international legal processes?",
        "opts": [
          "A purely formalist, rule-based reading of treaty texts with no attention to context, surrounding circumstances, or state practice",
          "A policy-oriented approach examining international law as a dynamic process of authoritative decision-making aimed at shared community values",
          "The exclusive authority of a single international court",
          "A rejection of the relevance of state sovereignty entirely"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is the theoretical significance of 'law as an autopoietic (self-referential) system', a concept drawn from systems theory and applied to law by scholars like Niklas Luhmann?",
        "opts": [
          "Law is directly and mechanically controlled by political and economic systems, with absolutely no independent internal logic of its own whatsoever",
          "Law can be understood as a self-referential system using its own internal legal/illegal code, closed off from other systems like politics",
          "Law has no meaningful relationship to any other social system whatsoever",
          "This concept applies only to administrative law"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'the Grundnorm' (basic norm), a foundational concept in Hans Kelsen's 'Pure Theory of Law', function to provide?",
        "opts": [
          "A specific, substantive moral rule, handed down by a supreme legislature, that all valid laws must satisfy without exception",
          "A hypothesized, presupposed ultimate norm that provides the foundational validity for an entire legal system's hierarchy of norms",
          "A rule that only applies to international treaties",
          "A concept rejecting the existence of any legal hierarchy"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of Ronald Dworkin's concept of 'law as integrity' as an alternative to both legal positivism and strict natural law theory?",
        "opts": [
          "Law consists purely of explicit, enacted rules with no role for underlying principles",
          "Judges should interpret the law, including its underlying principles, in a way that presents legal practice in its best and most morally coherent light",
          "Judges should apply only their own personal moral views, unconstrained by precedent, statute, or any other established source of law or legal authority",
          "Law and morality must always be treated as entirely identical concepts"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does Dworkin's distinction between 'rules' and 'principles' in legal reasoning argue about how legal systems actually function, contra strict positivism?",
        "opts": [
          "Legal systems consist solely of clear-cut rules that apply in an all-or-nothing fashion, with absolutely no exceptions ever permitted under any circumstances",
          "Legal systems also contain principles, which have a dimension of weight and can be balanced against one another, especially in hard cases",
          "Principles and rules are functionally identical and interchangeable in legal reasoning",
          "Only legislatures, never courts, can articulate legal principles"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical contribution of 'third world approaches to international law' (TWAIL) as a critical scholarly movement?",
        "opts": [
          "An approach affirming that international law has always been entirely neutral, apolitical, and equally beneficial to all states regardless of history or colonial legacy",
          "A critical approach examining how international law's development and doctrines have been shaped by, and often perpetuate, colonial power structures and global inequalities",
          "A field concerned exclusively with trade tariffs between developed nations",
          "A movement rejecting the existence of international law as a discipline"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'the interpretive turn' in jurisprudence, associated significantly with Dworkin's broader methodology, argue about the nature of legal theory itself?",
        "opts": [
          "Legal theory should be a purely descriptive, value-neutral sociological account of legal practice, entirely free of interpretation or evaluation of any kind",
          "Understanding the concept of law itself is fundamentally an interpretive enterprise, requiring engagement with the purposes and values that make sense of legal practice",
          "Legal theory should be entirely mathematical and formal, with no reference to social practice",
          "Interpretation is relevant only to statutory construction, never to jurisprudential theory itself"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the significance of 'the internal morality of law', a concept developed by Lon Fuller, for distinguishing law from mere coercive power?",
        "opts": [
          "Fuller argued law requires no formal or procedural qualities whatsoever beyond bare effective enforcement, regardless of fairness, clarity, consistency, or accessibility to those governed by it",
          "Fuller argued that law-making is subject to an inherent procedural morality, comprising principles like generality, clarity, and consistency, and that a system failing these badly may not constitute law at all",
          "This concept applies exclusively to international human rights treaties",
          "Fuller's theory rejects any connection between law's form and its legitimacy"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'legal indeterminacy' theory, as radicalized in some strands of critical legal studies, imply for the relationship between legal reasoning and political ideology?",
        "opts": [
          "Legal reasoning is entirely mechanical, and political ideology plays absolutely no role whatsoever in judicial outcomes, from trial court to the highest appellate bench",
          "Because existing legal doctrine often fails to compel unique determinate outcomes, the resulting gaps are frequently filled by judges' background political and ideological commitments",
          "Political ideology only influences legislative processes, never judicial decision-making",
          "This claim applies only to constitutional law, never to private law fields like contracts"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'autopoiesis' as applied by Gunther Teubner to the phenomenon of transnational law developing outside formal state structures (such as global commercial 'lex mercatoria')?",
        "opts": [
          "Teubner argues transnational normative orders can never function as genuine law absent formal state enactment and enforcement by a recognized sovereign national government anywhere",
          "Teubner extends Luhmann's systems theory to argue that self-referential, operationally autonomous normative orders can function as genuine law even without a formal nation-state as their source",
          "This theory applies only to domestic administrative law",
          "Autopoietic theory denies that transnational commercial norms have any binding force"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'the New Legal Realism' movement, distinguished from classical American legal realism, emphasize methodologically?",
        "opts": [
          "A pure return to formalist doctrinal analysis with no empirical component whatsoever",
          "Rigorous empirical, often interdisciplinary methods for studying how law actually operates",
          "A rejection of any connection between law and social science",
          "An approach limited exclusively to criminal law empirical studies"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'juridification' as a concept in socio-legal studies, associated with thinkers like Jürgen Habermas?",
        "opts": [
          "A term describing the total and complete absence of law in a given social sphere entirely",
          "Formal legal norms increasingly regulating once-informal spheres, like family or work life",
          "A concept applicable only to the codification of civil law systems",
          "A term synonymous with judicial review"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'the capabilities approach', developed by Amartya Sen and Martha Nussbaum and increasingly influential in legal and constitutional theory, propose as an alternative metric to purely formal legal equality or resource-based justice?",
        "opts": [
          "A metric based solely on aggregate national GDP and yearly economic growth figures alone",
          "A framework measuring individuals' real freedoms and opportunities to live a life they value",
          "A framework rejecting the relevance of individual rights entirely",
          "An approach limited exclusively to international trade law"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical contribution of 'relational contract theory', associated with Ian Macneil, as a critique of classical contract law doctrine?",
        "opts": [
          "Classical contract doctrine already fully captures the reality of most long-term commercial and personal relationships, requiring no modification or further theoretical refinement",
          "Macneil argued that classical contract law's focus on discrete, one-off exchanges fails to capture the relational context and ongoing cooperative dynamics of many real-world contracts",
          "Relational contract theory denies that any contracts are legally enforceable",
          "This theory applies only to consumer, not commercial, contracts"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'legal consciousness' theory, prominent in law and society scholarship, examine regarding ordinary people's relationship to law?",
        "opts": [
          "Only formal legal doctrine as articulated by appellate courts, legislatures, and law schools",
          "How ordinary people, in their everyday lives, understand, interpret, invoke, avoid, or resist law",
          "The psychological state of judges exclusively while deciding cases",
          "A concept applicable only to criminal defendants' state of mind"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'the counter-majoritarian difficulty', a phrase coined by Alexander Bickel, for theories of judicial review in constitutional democracies?",
        "opts": [
          "It refers to a purely procedural difficulty in counting votes correctly during a lengthy criminal jury trial held inside a crowded downtown courthouse",
          "It names the fundamental tension where unelected judges, exercising judicial review, can invalidate laws enacted by democratically elected legislatures",
          "It is a concept applicable only to civil law jurisdictions without judicial review",
          "It refers to a dispute over legislative voting thresholds"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'expressivist theory of law', as applied for instance to criminal punishment, emphasize about law's function beyond deterrence or retribution?",
        "opts": [
          "Law functions purely as a mechanistic system of costs and benefits, with no communicative, symbolic, or expressive dimension whatsoever in any legal context",
          "Law, including punishment, serves an important expressive function, conveying social condemnation and values to both the offender and the broader community",
          "Expressive functions of law are entirely irrelevant to legal theory",
          "This theory applies only to civil, not criminal, law"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'legal transplants' theory, associated with Alan Watson, for comparative law scholarship regarding how legal rules move between jurisdictions?",
        "opts": [
          "Legal rules can never be meaningfully transferred between different legal systems and cultures",
          "Watson argued legal rules can transplant successfully between societies, despite differing conditions",
          "This theory applies exclusively to the transfer of criminal sentencing guidelines",
          "Legal transplants theory denies that any legal borrowing has historically occurred"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'the sociology of the legal profession', as a field of socio-legal scholarship, examine regarding stratification and power within legal practice?",
        "opts": [
          "An assumption that all lawyers occupy an identical, undifferentiated professional status",
          "How the legal profession is stratified by prestige, specialization, and client type",
          "A field concerned exclusively with bar examination pass rates",
          "A field with no connection to broader theories of professions and expertise"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'legal formants' theory, developed by Rodolfo Sacco within comparative law, for understanding apparent similarities between legal systems?",
        "opts": [
          "Legal systems consist of a single unified source, such as statute alone, with no internal complexity worth analyzing in comparative scholarship",
          "Sacco argued legal systems are made of multiple 'formants' — statute, case law, doctrine — that can diverge even when they look similar",
          "This theory applies only to the comparison of criminal sentencing statutes",
          "Legal formants theory denies any meaningful difference can exist between legal systems"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'the theory of constitutional moments', developed by Bruce Ackerman, propose regarding how fundamental constitutional change legitimately occurs, beyond formal amendment procedures?",
        "opts": [
          "Only the formally specified amendment procedure written into a constitution's text can ever produce legitimate constitutional change, no matter the circumstances, popular demand, or historical crisis a nation faces",
          "Ackerman argues that, at rare historical junctures of sustained popular political mobilization, fundamental constitutional change can occur and gain legitimacy outside the strict formal amendment procedures in the text itself",
          "This theory applies only to unwritten constitutions",
          "Ackerman's theory denies that any informal constitutional change has ever legitimately occurred"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'legal indeterminacy versus underdeterminacy' as refined by scholars like Brian Leiter, responding to critical legal studies' strongest claims?",
        "opts": [
          "The distinction is meaningless and both terms refer to the exact same phenomenon entirely",
          "Leiter distinguishes full indeterminacy, where legal materials permit any outcome, from underdeterminacy, where they rule out many but not all outcomes, arguing the more defensible claim is the latter, weaker one",
          "This distinction applies only to tax law disputes",
          "The distinction was developed to prove that legal materials always fully and completely determine a single, objectively correct outcome in absolutely every case brought to any court, every single time without fail"
        ],
        "a": 1,
        "tier": 5
      }
    ]
  },
  {
    "id": "math",
    "name": "Math & Statistics",
    "questions": [
      {
        "q": "What is 7 + 8?",
        "opts": [
          "13",
          "14",
          "15",
          "16"
        ],
        "a": 2,
        "tier": 1
      },
      {
        "q": "What is 9 x 6?",
        "opts": [
          "45",
          "52",
          "54",
          "56"
        ],
        "a": 2,
        "tier": 1
      },
      {
        "q": "What is half of 50?",
        "opts": [
          "20",
          "25",
          "30",
          "35"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "Which shape has three sides?",
        "opts": [
          "Square",
          "Triangle",
          "Pentagon",
          "Hexagon"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is 100 divided by 10?",
        "opts": [
          "1",
          "10",
          "100",
          "1000"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is the next number in the sequence 2, 4, 6, 8, ...?",
        "opts": [
          "9",
          "10",
          "11",
          "12"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "How many sides does a hexagon have?",
        "opts": [
          "5",
          "6",
          "7",
          "8"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is 12 - 5?",
        "opts": [
          "6",
          "7",
          "8",
          "9"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "Which number is even?",
        "opts": [
          "7",
          "9",
          "10",
          "13"
        ],
        "a": 2,
        "tier": 1
      },
      {
        "q": "What is 3 x 3 x 3?",
        "opts": [
          "9",
          "18",
          "27",
          "36"
        ],
        "a": 2,
        "tier": 1
      },
      {
        "q": "What is a number greater than zero called?",
        "opts": [
          "Negative",
          "Positive",
          "Zero",
          "Prime"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What do we call the answer to a subtraction problem?",
        "opts": [
          "Sum",
          "Product",
          "Difference",
          "Quotient result"
        ],
        "a": 2,
        "tier": 1
      },
      {
        "q": "What is 1/2 as a decimal?",
        "opts": [
          "0.2",
          "0.25",
          "0.5",
          "0.75"
        ],
        "a": 2,
        "tier": 1
      },
      {
        "q": "How many minutes are in one hour?",
        "opts": [
          "30",
          "45",
          "60",
          "90"
        ],
        "a": 2,
        "tier": 1
      },
      {
        "q": "What is the perimeter of a square with side length 4?",
        "opts": [
          "8",
          "12",
          "16",
          "20"
        ],
        "a": 2,
        "tier": 1
      },
      {
        "q": "What is 20% of 100?",
        "opts": [
          "10",
          "20",
          "25",
          "50"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "Which of these is a prime number?",
        "opts": [
          "4",
          "6",
          "7",
          "9"
        ],
        "a": 2,
        "tier": 1
      },
      {
        "q": "What is the sum of angles in a triangle?",
        "opts": [
          "90°",
          "180°",
          "270°",
          "360°"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What symbol represents 'greater than'?",
        "opts": [
          "<",
          "=",
          ">",
          "≠"
        ],
        "a": 2,
        "tier": 1
      },
      {
        "q": "What is 10 squared?",
        "opts": [
          "20",
          "100",
          "1000",
          "10"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "Solve for x: 2x + 4 = 12",
        "opts": [
          "2",
          "4",
          "6",
          "8"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is the area of a rectangle with length 8 and width 3?",
        "opts": [
          "11",
          "22",
          "24",
          "32"
        ],
        "a": 2,
        "tier": 2
      },
      {
        "q": "What is the value of pi to two decimal places?",
        "opts": [
          "3.12",
          "3.14",
          "3.16",
          "3.18"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is the slope of the line y = 3x + 2?",
        "opts": [
          "1",
          "2",
          "3",
          "5"
        ],
        "a": 2,
        "tier": 2
      },
      {
        "q": "What is the square root of 144?",
        "opts": [
          "11",
          "12",
          "13",
          "14"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is the median of the set {3, 7, 9, 15, 21}?",
        "opts": [
          "7",
          "9",
          "15",
          "11"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does the Pythagorean theorem relate?",
        "opts": [
          "Angles found in any triangle",
          "The sides of a right triangle",
          "The area of a circle",
          "The volume of a cube"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is 5 factorial (5!)?",
        "opts": [
          "20",
          "60",
          "120",
          "720"
        ],
        "a": 2,
        "tier": 2
      },
      {
        "q": "What is the mode of the set {2, 4, 4, 6, 8}?",
        "opts": [
          "2",
          "4",
          "6",
          "8"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is the formula for the circumference of a circle?",
        "opts": [
          "πr²",
          "2πr",
          "πd²",
          "4πr"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "If a die is rolled once, what is the probability of rolling a 4?",
        "opts": [
          "1/2",
          "1/3",
          "1/6",
          "1/4"
        ],
        "a": 2,
        "tier": 2
      },
      {
        "q": "What is the value of 2^5?",
        "opts": [
          "10",
          "16",
          "32",
          "64"
        ],
        "a": 2,
        "tier": 2
      },
      {
        "q": "What is the y-intercept of y = -2x + 7?",
        "opts": [
          "-2",
          "2",
          "7",
          "-7"
        ],
        "a": 2,
        "tier": 2
      },
      {
        "q": "What is the least common multiple of 4 and 6?",
        "opts": [
          "8",
          "10",
          "12",
          "24"
        ],
        "a": 2,
        "tier": 2
      },
      {
        "q": "Which of these represents a linear equation?",
        "opts": [
          "y = x²",
          "y = 2x + 1",
          "y = 1/x + 2",
          "y = √x"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is the volume of a cube with side length 3?",
        "opts": [
          "9",
          "18",
          "27",
          "36"
        ],
        "a": 2,
        "tier": 2
      },
      {
        "q": "What does 'mean' refer to in statistics?",
        "opts": [
          "The middle value",
          "The most frequent value",
          "The average value",
          "The range of values"
        ],
        "a": 2,
        "tier": 2
      },
      {
        "q": "What is 3/4 expressed as a percentage?",
        "opts": [
          "34%",
          "43%",
          "75%",
          "134%"
        ],
        "a": 2,
        "tier": 2
      },
      {
        "q": "What is the sum of the interior angles of a quadrilateral?",
        "opts": [
          "180°",
          "270°",
          "360°",
          "450°"
        ],
        "a": 2,
        "tier": 2
      },
      {
        "q": "What is the reciprocal of 5?",
        "opts": [
          "-1/5",
          "0",
          "1/5",
          "5"
        ],
        "a": 2,
        "tier": 2
      },
      {
        "q": "What is the derivative of x² with respect to x?",
        "opts": [
          "x",
          "2x",
          "x²",
          "2"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is the integral of 1/x dx?",
        "opts": [
          "x²/2",
          "ln|x| + C",
          "-1/x² + C",
          "e^x + C"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does the term 'standard deviation' measure?",
        "opts": [
          "The average of a data set",
          "The middle value of a data set",
          "The spread or dispersion of a data set",
          "The most frequent value in a data set"
        ],
        "a": 2,
        "tier": 3
      },
      {
        "q": "What is the value of the limit as x approaches 0 of sin(x)/x?",
        "opts": [
          "0",
          "1",
          "Undefined",
          "Infinity"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does a p-value in hypothesis testing represent?",
        "opts": [
          "The exact probability that the null hypothesis is true given the data collected in this specific study",
          "The probability of observing data as extreme as this, assuming the null hypothesis is true",
          "The size of the effect being measured",
          "The confidence level of the test"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is an eigenvector?",
        "opts": [
          "A vector that always changes direction under any linear transformation applied to the matrix",
          "A vector whose direction is unchanged by a linear transformation, scaled by an eigenvalue",
          "A vector with length zero",
          "A vector orthogonal to all others in a space"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does the Central Limit Theorem state?",
        "opts": [
          "All data sets are normally distributed",
          "Sums of independent random variables trend toward a normal distribution as sample size grows",
          "The mean of a data set equals its median",
          "Variance always decreases predictably as sample size decreases toward zero eventually"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is a matrix's determinant used to determine?",
        "opts": [
          "Whether a matrix is symmetric",
          "Whether a matrix is invertible, among other properties",
          "The number of rows and columns in a matrix combined together",
          "The trace of a matrix"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'correlation does not imply causation' caution against?",
        "opts": [
          "Assuming two correlated variables have no relationship whatsoever in any context",
          "Assuming that because two variables move together, one must cause the other",
          "Using correlation coefficients at all",
          "Measuring the strength of a linear relationship"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is the chain rule in calculus used for?",
        "opts": [
          "Differentiating a sum of functions",
          "Differentiating a composite function",
          "Integrating a product of functions",
          "Finding the area under a curve"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does a confidence interval represent?",
        "opts": [
          "The exact value of a population parameter",
          "A range of values likely to contain the true population parameter, with a stated confidence level",
          "The exact probability that a specific hypothesis is definitely true beyond any reasonable doubt whatsoever",
          "The margin of error alone"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is a Taylor series used for?",
        "opts": [
          "Solving linear equations exactly",
          "Approximating a function as an infinite sum of terms calculated from its derivatives at a point",
          "Calculating the exact determinant of any square matrix precisely without any approximation whatsoever",
          "Finding the roots of a polynomial"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What distinguishes a Type I error from a Type II error in hypothesis testing?",
        "opts": [
          "Type I is failing to reject a false null hypothesis; Type II is rejecting a true one",
          "Type I is rejecting a true null hypothesis; Type II is failing to reject a false one",
          "There is no meaningful difference",
          "Type I only applies to small samples"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is Bayes' theorem primarily used to calculate?",
        "opts": [
          "The mean of a distribution",
          "An updated (posterior) probability given new evidence and a prior probability",
          "The variance of a random variable",
          "The exact determinant of a full covariance matrix in very high dimensions specifically"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does it mean for a function to be 'continuous' at a point?",
        "opts": [
          "It has a clearly defined derivative at every single point along its entire continuous domain",
          "The function's limit at that point equals the function's value there, with no breaks or jumps",
          "It is always increasing",
          "It has no maximum or minimum"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is linear regression used to model?",
        "opts": [
          "A categorical outcome predicted from several categorical predictor variables combined together",
          "A linear relationship between a dependent variable and one or more independent variables",
          "The variance of a single variable",
          "The probability of a binary event only"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'orthogonality' mean for two vectors?",
        "opts": [
          "They always point in exactly the same direction at all times",
          "Their dot product is zero, meaning they are perpendicular",
          "They have the same magnitude",
          "They are linearly dependent"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is the difference between permutations and combinations?",
        "opts": [
          "Permutations ignore order; combinations consider order",
          "Permutations consider order; combinations ignore order",
          "They are mathematically identical",
          "Combinations only apply to infinite sets"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does the term 'variance' measure in statistics?",
        "opts": [
          "The average value of an entire sorted data set",
          "The average squared deviation from the mean",
          "The most frequent value",
          "The middle value when sorted"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is an asymptote of a function?",
        "opts": [
          "A point where the function equals zero",
          "A line that a function's graph approaches but never touches as input grows or approaches a certain value",
          "The maximum value of a function",
          "The exact derivative of a function evaluated at a single point along its smooth, continuous curve"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does Gödel's incompleteness theorem establish?",
        "opts": [
          "Every mathematical statement can be proven true or false",
          "In any sufficiently powerful consistent formal system, there exist true statements that cannot be proven within that system",
          "All formal systems are inconsistent",
          "Mathematics can be fully and completely derived from a finite set of axioms without any exception of any kind whatsoever"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is a Markov chain?",
        "opts": [
          "A completely deterministic sequence with absolutely no randomness involved at any step whatsoever",
          "A stochastic process where the next state depends only on the current state, not the full history",
          "A method for solving linear equations",
          "A type of matrix decomposition"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does the term 'stochastic process' refer to?",
        "opts": [
          "A fixed, entirely deterministic sequence of numbers with no randomness at any point in time at all",
          "A collection of random variables indexed by time or space, representing a system evolving with randomness",
          "A method for computing exact integrals",
          "A type of geometric proof"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is the purpose of principal component analysis (PCA)?",
        "opts": [
          "To classify data precisely into a fixed set of predefined categories using labeled examples",
          "To reduce the dimensionality of data while preserving as much variance as possible",
          "To compute exact probabilities of events",
          "To solve differential equations numerically"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does a 'sigma-algebra' formalize in measure theory?",
        "opts": [
          "The complete set of all possible outcomes of a random experiment or trial, without any further structure or subset collection",
          "A collection of subsets of a sample space that is closed under complementation and countable unions, used to define measurable events",
          "The mean of a probability distribution",
          "A type of matrix operation"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is the maximum likelihood estimation (MLE) method used for?",
        "opts": [
          "Estimating parameters of a statistical model by finding values that maximize the likelihood of observed data",
          "Calculating the exact population mean directly from a complete census of the entire population every year",
          "Testing whether two means are equal",
          "Reducing the dimensionality of a data set"
        ],
        "a": 0,
        "tier": 4
      },
      {
        "q": "What does 'convexity' of a function mean in optimization?",
        "opts": [
          "The function has multiple distinct local minima and maxima throughout its domain",
          "A line between any two graph points lies above or on the graph itself",
          "The function is always increasing",
          "The function has no derivative"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is a 'manifold' in differential geometry?",
        "opts": [
          "A flat, infinite Euclidean space only",
          "A topological space that locally resembles Euclidean space near each point",
          "A type of matrix with only real eigenvalues and perfectly orthogonal columns throughout",
          "A discrete set of isolated points"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does the Lagrangian multiplier method solve?",
        "opts": [
          "Unconstrained optimization problems only",
          "Optimization problems subject to equality constraints",
          "Linear systems of equations",
          "Probability distributions of continuous random variables only"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is a 'Hilbert space' in functional analysis?",
        "opts": [
          "A finite-dimensional vector space only",
          "A complete inner product space, possibly infinite-dimensional, generalizing Euclidean space",
          "A space with no defined distance metric",
          "A purely discrete mathematical structure with no continuous elements or defined metric at all"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'homomorphism' mean in abstract algebra?",
        "opts": [
          "A structure-preserving map between two algebraic structures of the same type",
          "A function with no defined domain",
          "A type of matrix inverse",
          "A method for factoring polynomials into irreducible components over any field"
        ],
        "a": 0,
        "tier": 4
      },
      {
        "q": "What is the significance of the Central Limit Theorem for the sampling distribution of the sample mean?",
        "opts": [
          "It only applies to normally distributed populations",
          "It shows the sampling distribution of the mean approaches normality as sample size increases, regardless of the population's original distribution",
          "It proves all statistics converge to zero",
          "It applies only when sample size is less than 5 and the population is finite, discrete, and drawn without replacement in each and every trial"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'regularization', such as L1 or L2 penalties, address in statistical modeling?",
        "opts": [
          "Overfitting, by penalizing model complexity to improve generalization",
          "Underfitting exclusively",
          "The exact computation of p-values in hypothesis tests using bootstrapped samples",
          "Sample collection bias"
        ],
        "a": 0,
        "tier": 4
      },
      {
        "q": "What is a 'Poisson process' used to model?",
        "opts": [
          "A fixed, entirely non-random sequence of scheduled events occurring at exact intervals",
          "The occurrence of independent random events over time at a constant average rate",
          "A deterministic linear growth process",
          "A process with negative event counts"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'Bayesian inference', as opposed to frequentist inference, treat model parameters as?",
        "opts": [
          "Fixed, unknown constants that never change under any circumstances or new evidence",
          "Random variables with a probability distribution that gets updated with observed data",
          "Always equal to zero",
          "Irrelevant to the analysis"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is the rank of a matrix?",
        "opts": [
          "The number of rows it has",
          "The dimension of the vector space spanned by its rows or columns",
          "The sum of its diagonal entries added together across every row",
          "Its determinant value"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'ergodicity' mean for a stochastic process?",
        "opts": [
          "The process never changes state",
          "Time averages of the process converge to the same value as ensemble averages, given enough time",
          "The process is always completely deterministic with no random component at any time step",
          "The process has infinite variance"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is the purpose of the Fourier transform?",
        "opts": [
          "To solve linear systems of equations exactly",
          "To decompose a function into its constituent frequencies",
          "To compute the derivative of a function",
          "To calculate a matrix's eigenvalues and eigenvectors directly"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'homoscedasticity' assume in linear regression?",
        "opts": [
          "The variance of the errors is constant across all levels of the independent variable",
          "The errors are always normally distributed with mean 100",
          "The independent variables are always perfectly uncorrelated with each other in every model",
          "The dependent variable is always binary"
        ],
        "a": 0,
        "tier": 4
      },
      {
        "q": "What is a 'random walk' in probability theory?",
        "opts": [
          "A deterministic path with fixed step sizes and directions chosen entirely in advance",
          "A mathematical process describing a path consisting of a succession of random steps",
          "A method for sorting numerical data",
          "A type of matrix factorization"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does the Riemann Hypothesis, one of the Millennium Prize Problems, conjecture?",
        "opts": [
          "All prime numbers are infinite in count",
          "All non-trivial zeros of the Riemann zeta function have real part equal to 1/2",
          "Every even integer greater than two is the sum of two primes, according to Goldbach",
          "Pi is a transcendental number"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is 'measure-theoretic probability', as formalized by Kolmogorov, built upon?",
        "opts": [
          "Simple counting of discrete outcomes only",
          "A formal axiomatic framework using measure theory, defining probability as a measure on a sigma-algebra of events",
          "A purely geometric interpretation of chance",
          "An entirely computational, simulation-based approach using random number generators and repeated sampling"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does the Kolmogorov-Smirnov test assess?",
        "opts": [
          "Whether two population means are significantly and meaningfully different in practice",
          "Whether a sample's distribution differs significantly from a reference distribution",
          "The correlation between two variables",
          "The variance of a single sample"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is 'Ito calculus', used in stochastic processes and quantitative finance, an extension of?",
        "opts": [
          "Standard calculus applied to continuous, differentiable functions over a fixed time interval without randomness",
          "Calculus adapted to handle stochastic processes like Brownian motion, which are continuous but nowhere differentiable",
          "Discrete combinatorics",
          "Linear algebra over finite fields"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does the concept of 'martingale' formalize in probability theory?",
        "opts": [
          "A process that always increases steadily and predictably over time regardless of past values",
          "A process where the expected next value, given past observations, equals the current one",
          "A process with no randomness at all",
          "A fixed, non-random sequence"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the 'P vs NP' problem, a major unsolved question in computational complexity theory, asking?",
        "opts": [
          "Whether every problem verifiable in polynomial time can also be solved in polynomial time",
          "Whether all algorithms run in linear time",
          "Whether prime factorization is impossible",
          "Whether computers can fully simulate the human brain in real time using current hardware"
        ],
        "a": 0,
        "tier": 5
      },
      {
        "q": "What does 'algebraic topology' primarily study, using tools from abstract algebra?",
        "opts": [
          "Topological properties preserved under continuous deformation, via algebraic invariants",
          "The numerical solution of ordinary differential equations only, using finite difference methods",
          "The factorization of large integers",
          "The convergence of infinite series only"
        ],
        "a": 0,
        "tier": 5
      },
      {
        "q": "What is a 'Sobolev space' used for in the analysis of partial differential equations?",
        "opts": [
          "A space of functions with quantified smoothness, used to prove PDE solutions exist",
          "A purely discrete space with no continuous functions defined on it whatsoever",
          "A space used only for integer arithmetic",
          "A type of finite field"
        ],
        "a": 0,
        "tier": 5
      },
      {
        "q": "What does the 'Central Limit Theorem for martingales' extend the classical CLT to handle?",
        "opts": [
          "Only strictly independent, identically distributed random variables with finite variance and exactly zero correlation everywhere",
          "Dependent sequences of random variables satisfying the martingale property, still converging to a normal distribution under conditions",
          "Deterministic sequences with no randomness",
          "Only discrete uniform distributions"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is 'nonparametric statistics' distinguished by?",
        "opts": [
          "Assuming data follows a specific parametric distribution, like the normal distribution",
          "Making minimal assumptions about the underlying distribution of the data being analyzed",
          "Requiring extremely large sample sizes exclusively",
          "Being applicable only to categorical data"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'homological algebra' provide tools for, originally developed from algebraic topology?",
        "opts": [
          "Solving simple linear equations",
          "Studying algebraic structures like modules via chain complexes and derived functors",
          "Estimating unknown population parameters from a random sample using maximum likelihood",
          "Computing numerical derivatives"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the significance of the 'Banach-Tarski paradox' in set theory?",
        "opts": [
          "It shows that all infinite sets are countable",
          "Using the axiom of choice, a ball can be split and reassembled into two identical copies",
          "It proves that geometry is inconsistent",
          "It disproves the existence of irrational numbers entirely within the real number system"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'stochastic differential equations' (SDEs) model?",
        "opts": [
          "Purely deterministic dynamical systems with fixed initial conditions and no external noise",
          "Systems with both a deterministic drift term and a random noise term, often via Brownian motion",
          "Static equilibrium states only",
          "Discrete combinatorial structures"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the 'Curse of Dimensionality' in high-dimensional statistics and machine learning?",
        "opts": [
          "The observation that data becomes increasingly dense and tightly clustered as the number of dimensions increases beyond a few hundred",
          "The phenomenon where data becomes increasingly sparse and analysis increasingly difficult as the number of dimensions grows",
          "A rule stating models always improve with more features",
          "A theorem proving all high-dimensional problems are unsolvable"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'functional data analysis' treat individual observations as?",
        "opts": [
          "Single scalar numbers",
          "Entire functions or curves, rather than finite-dimensional vectors",
          "Categorical labels only",
          "Fixed matrices of constant numerical values with no variability"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is 'algebraic geometry' broadly the study of?",
        "opts": [
          "The geometry of physical, real-world shapes measured only with a ruler and compass by hand, without algebra",
          "Geometric objects defined as solution sets of polynomial equations, using tools from abstract algebra",
          "The numerical approximation of integrals",
          "Random processes evolving over time"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does the 'Girsanov theorem' (also relevant in mathematical finance) allow in stochastic calculus?",
        "opts": [
          "The direct simulation of any random process",
          "A change of probability measure under which a process with drift becomes a driftless martingale",
          "The exact solution of all differential equations",
          "The complete elimination of randomness from any stochastic process entirely and permanently"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is 'category theory' broadly concerned with, as a highly abstract branch of mathematics?",
        "opts": [
          "Only the study of finite sets",
          "Mathematical structures and the relationships between them, unifying different areas of math",
          "Numerical methods for solving equations",
          "The classification of prime numbers using only elementary number theory and modular arithmetic techniques"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does the 'Lebesgue integral' generalize, compared to the Riemann integral?",
        "opts": [
          "It only applies to continuous functions",
          "It extends integration to more functions by partitioning the range, not the domain",
          "It removes the need for limits entirely",
          "It applies only to polynomials of low finite degree with rational coefficients"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the significance of the 'Black-Scholes partial differential equation' in mathematical finance, derived using Ito calculus?",
        "opts": [
          "It guarantees a risk-free profit from any asset",
          "It describes how a derivative's price evolves over time, enabling closed-form pricing",
          "It proves markets are always inefficient",
          "It calculates a company's exact future earnings and cash flow precisely each fiscal quarter"
        ],
        "a": 1,
        "tier": 5
      }
    ]
  },
  {
    "id": "music",
    "name": "Music Theory",
    "questions": [
      {
        "q": "How many notes are in a standard musical scale (do-re-mi...)?",
        "opts": [
          "5",
          "6",
          "7",
          "8"
        ],
        "a": 2,
        "tier": 1
      },
      {
        "q": "What is a 'melody'?",
        "opts": [
          "A rhythm pattern only",
          "A sequence of single notes that form a musical line",
          "Multiple different instruments all playing at once during a chorus",
          "A type of musical instrument"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does 'tempo' refer to in music?",
        "opts": [
          "The overall volume of a piece as marked in the score",
          "The speed at which a piece of music is played",
          "The key a piece is written in",
          "The number of instruments used"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a 'chord'?",
        "opts": [
          "A single musical note held for an extended duration",
          "Three or more notes played together",
          "A type of drum",
          "A tempo marking"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does 'pitch' refer to in music?",
        "opts": [
          "How loud a note is",
          "How high or low a note sounds",
          "How long a note lasts",
          "The instrument playing the note"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a 'beat' in music?",
        "opts": [
          "The melody of a song as sung by the lead vocalist",
          "A basic unit of time or pulse in music",
          "A type of chord",
          "The key signature"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "Which instrument has black and white keys?",
        "opts": [
          "Guitar",
          "Piano",
          "Violin",
          "Drums"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does 'volume' or 'dynamics' refer to in music?",
        "opts": [
          "The speed of a piece, as marked at the top of the score",
          "How loud or soft the music is",
          "The pitch of a note",
          "The rhythm pattern"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a 'note' in music?",
        "opts": [
          "A written description of a song's mood, printed in the liner notes",
          "A single musical sound with a specific pitch and duration",
          "A type of instrument",
          "A tempo marking"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does 'rhythm' refer to in music?",
        "opts": [
          "The pitch of a melody",
          "The pattern of sounds and silences in time",
          "The loudness of a piece as controlled by the performer",
          "The key a song is in"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a 'lyric' in a song?",
        "opts": [
          "The instrumental part of a song",
          "The words sung in a song",
          "The tempo of a song",
          "The rhythm section"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does 'harmony' generally refer to in music?",
        "opts": [
          "A single melody line played entirely alone, with no accompaniment",
          "Multiple notes or chords played together that sound pleasing",
          "The speed of a song",
          "The lyrics of a song"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a 'genre' in music?",
        "opts": [
          "A specific song title chosen by the recording artist and their label",
          "A category or style of music, like jazz, rock, or classical music",
          "A type of musical instrument",
          "A tempo marking"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does 'a cappella' mean?",
        "opts": [
          "Singing with a full orchestra accompanying every note",
          "Singing without instrumental accompaniment",
          "Playing only percussion instruments",
          "Playing music very loudly"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a 'duet'?",
        "opts": [
          "A song performed with no instruments of any kind",
          "A musical performance by two performers",
          "A very long musical piece",
          "A type of musical scale"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does 'orchestra' refer to?",
        "opts": [
          "A single musician performing entirely alone on an empty stage",
          "A large ensemble of musicians playing various instruments together",
          "A type of musical genre",
          "A music recording studio"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a 'chorus' in a song's structure?",
        "opts": [
          "The very first line sung at the start of a song",
          "A repeated section of a song that often contains the main musical hook",
          "A single instrument solo performed near the end of a song, before the final verse",
          "The song's title"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does 'acoustic' mean when describing an instrument or performance?",
        "opts": [
          "Sound played using only electronic instruments and amplifiers",
          "Produced by natural, non-electronically amplified sound",
          "A very fast tempo",
          "A type of musical notation"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a 'concert'?",
        "opts": [
          "A written piece of sheet music sold in stores",
          "A live musical performance for an audience",
          "A type of musical instrument",
          "A music genre"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does 'in tune' mean for a musical instrument or singer?",
        "opts": [
          "Playing very loudly",
          "Playing or singing at the correct pitch",
          "Playing very quickly, faster than the marked tempo",
          "Following a complex rhythm"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a 'major scale' generally associated with, in terms of mood?",
        "opts": [
          "A sad or somber sound",
          "A bright, happy sound",
          "No particular mood",
          "Only used in classical music"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is a 'minor scale' generally associated with, in terms of mood?",
        "opts": [
          "A bright, happy sound typical of major scales",
          "A sad, darker, or more melancholic sound",
          "No particular mood",
          "Only used in jazz music"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does a 'time signature', like 4/4, indicate in sheet music?",
        "opts": [
          "The key signature of the piece being performed by the full ensemble",
          "The number of beats per measure and which note value counts as one beat",
          "The tempo of the piece",
          "The instrument to be used"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is an 'octave'?",
        "opts": [
          "Any group of eight musicians performing together in a small ensemble",
          "The interval between a pitch and another at double or half its frequency",
          "A type of chord",
          "A specific tempo marking"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'staccato' indicate in musical notation?",
        "opts": [
          "Notes played smoothly and connected",
          "Notes played short and detached",
          "Notes played very loudly",
          "Notes played very slowly"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'legato' indicate in musical notation?",
        "opts": [
          "Notes played short and detached",
          "Notes played smoothly and connected",
          "Notes played with a strong accent",
          "A key change"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is a 'triad' in music theory?",
        "opts": [
          "A scale of ten notes used in some modern experimental jazz compositions",
          "A chord consisting of three notes: a root, a third, and a fifth",
          "A type of time signature",
          "A rhythm pattern"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'key signature' indicate at the start of a piece of sheet music?",
        "opts": [
          "The tempo of the piece as chosen by the conductor before rehearsal",
          "Which notes are sharped or flatted throughout, indicating the key",
          "The instrument to be used",
          "The composer's name"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is 'counterpoint' in music?",
        "opts": [
          "A single melodic line performed with no accompaniment of any kind whatsoever, from beginning to end",
          "The technique of combining two or more independent melodic lines that harmonize with each other",
          "A type of percussion rhythm used mainly in marching band arrangements",
          "A tempo marking"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'crescendo' instruct a performer to do?",
        "opts": [
          "Play faster",
          "Gradually get louder",
          "Gradually get softer",
          "Play a specific chord"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'decrescendo' (or diminuendo) instruct a performer to do?",
        "opts": [
          "Gradually get louder",
          "Gradually get softer",
          "Play faster",
          "Change key"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is 'syncopation' in rhythm?",
        "opts": [
          "A rhythm with perfectly even, predictable beats and absolutely no surprises at all for the listener to notice",
          "A rhythmic technique that emphasizes off-beats or weak beats, creating a sense of surprise or groove",
          "A very slow tempo used mainly in funeral marches and requiems",
          "A type of scale"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does the term 'modulation' refer to in music theory?",
        "opts": [
          "A change in volume marked by the composer in the score",
          "A change from one musical key to another within a piece",
          "A change in tempo",
          "A change in instrumentation"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is a 'cadence' in music?",
        "opts": [
          "A single sustained note held by the entire ensemble",
          "A chord progression that creates a sense of resolution",
          "A type of instrument",
          "A tempo marking"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'perfect pitch' refer to?",
        "opts": [
          "The ability to sing very loudly without a microphone or amplifier",
          "The rare ability to identify or produce a musical note without any reference tone",
          "The ability to play many instruments",
          "A type of professional music training certificate issued by a conservatory"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is a 'scale degree' in music theory?",
        "opts": [
          "The physical size of an instrument's body, casing, or resonating chamber, measured in inches",
          "The position of a note within a musical scale, relative to the tonic (first note)",
          "The number of sharps in a key signature",
          "A type of time signature"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'polyphony' refer to in music?",
        "opts": [
          "Music consisting of a single melodic line with absolutely no accompaniment",
          "Music consisting of two or more simultaneous, independent melodic lines",
          "A very fast tempo",
          "A type of percussion instrument"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is 'homophony' in music, as distinguished from polyphony?",
        "opts": [
          "Music with multiple independent melodies of equal importance and prominence",
          "Music consisting of a primary melody supported by chordal accompaniment",
          "Music with no melody at all",
          "Music played only on strings"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'transposition' mean in music?",
        "opts": [
          "Changing the tempo of a piece midway through a live performance",
          "Shifting a piece of music from one key to another while preserving the intervals between notes",
          "Changing the instrument used to perform a piece midway through a live orchestral concert",
          "Adding lyrics to an instrumental piece"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is a 'leitmotif', as famously used by composers like Wagner?",
        "opts": [
          "A single, unchanging tempo marking used throughout an entire four-act opera by the conductor",
          "A recurring musical theme associated with a particular character, place, or idea throughout a piece",
          "A type of time signature",
          "A type of musical instrument"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'functional harmony' analyze in a piece of tonal music?",
        "opts": [
          "The physical construction and materials used to build orchestral instruments in a small workshop by hand",
          "The role chords play in relation to a central key, such as tonic, subdominant, and dominant functions",
          "The tempo variations throughout a piece",
          "The lyrics' emotional content"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is a 'secondary dominant' in music theory?",
        "opts": [
          "The main dominant chord built on the fifth scale degree of a key",
          "A dominant chord that briefly resolves to a chord other than the tonic",
          "A chord used only in minor keys",
          "A type of rhythmic pattern"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'voice leading' refer to in composition and arranging?",
        "opts": [
          "The lyrics sung by a lead vocalist during the chorus of a song",
          "The smooth and logical movement of individual melodic lines (voices) from one chord to the next",
          "The volume balance between instruments as set by a live sound engineer at the mixing board",
          "A type of scale used in jazz"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'modal interchange' (or borrowed chords) in music theory?",
        "opts": [
          "Playing an entire piece in a single mode with absolutely no variation whatsoever from the very start right to the finish",
          "Borrowing chords from a parallel key or mode, such as using a minor iv chord in a major key, to add harmonic color",
          "A method for changing tempo mid-piece using a metronome marking",
          "A type of percussion technique"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does the 'circle of fifths' visually organize?",
        "opts": [
          "The order in which instruments are introduced during an orchestral seating rehearsal held before opening night at the concert hall",
          "The relationships among the 12 tones of the chromatic scale, their key signatures, and associated major and minor keys",
          "The rhythmic subdivisions within a measure, as notated in a time signature",
          "The historical timeline of musical genres"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is a 'pedal point' (or pedal tone) in music?",
        "opts": [
          "A note played only using a piano's sustain pedal during a solo recital performance in front of an audience",
          "A sustained or repeated note, usually in the bass, held while the harmonies above it change",
          "A type of key signature used only in Baroque keyboard music",
          "A tempo marking indicating a gradual slowdown"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'chromaticism' refer to in music?",
        "opts": [
          "The use of only notes found within a single unaltered diatonic scale throughout an entire piece of music",
          "The use of notes outside the primary diatonic scale of a piece, often for expressive or transitional effect",
          "A specific time signature used mainly in traditional waltzes",
          "A type of instrument tuning system"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'sonata form', a common structure in classical instrumental music?",
        "opts": [
          "A single continuous melody with no sections or contrasting themes whatsoever from the very start right to the finish",
          "A large-scale musical structure typically consisting of an exposition, development, and recapitulation of thematic material",
          "A type of vocal-only composition performed without any instruments",
          "A rhythmic pattern used only in dance music"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'ternary form' (ABA) describe in musical structure?",
        "opts": [
          "A piece with only one section, repeated endlessly without any variation from start to finish",
          "A three-part musical structure where the first section returns after a contrasting middle section",
          "A piece composed for exactly three instruments playing in unison",
          "A type of key signature"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'the Neapolitan sixth chord', a specific chromatic chord used in tonal harmony?",
        "opts": [
          "A chord built directly on the tonic note of a major scale, unaltered and left in root position",
          "A major chord built on the flattened second degree, usually used before a dominant chord",
          "A chord used exclusively in atonal music with no tonal center",
          "A rhythmic pattern rather than a harmonic structure"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'enharmonic equivalence' mean in music theory?",
        "opts": [
          "Two notes with completely different pitches that happen to share a written letter name by pure coincidence alone",
          "Two different note names, such as C-sharp and D-flat, that refer to the same physical pitch",
          "A rhythmic pattern with equal note durations played by a metronome",
          "A type of instrument tuning method"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'the Picardy third'?",
        "opts": [
          "A type of dissonant interval used mainly in modern free jazz improvisation and avant-garde composition circles today",
          "The technique of ending a piece in a minor key with a major tonic chord, raising the third for a brighter resolution",
          "A specific tempo marking used in Baroque music",
          "A type of percussion rhythm from French folk music"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'species counterpoint', a pedagogical system historically associated with Johann Fux, teach?",
        "opts": [
          "A single method used only for composing purely electronic dance music in a home recording studio setup using loop-based software",
          "A structured, rule-based method for learning to write independent, melodic lines against a cantus firmus",
          "A modern system for mixing audio recordings",
          "A rhythmic notation system used only in percussion music"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is a 'Neapolitan cadence' distinguished from a standard cadence by?",
        "opts": [
          "The use of only diatonic chords with absolutely no chromatic alteration whatsoever anywhere at all in the entire piece",
          "Its incorporation of the Neapolitan (flattened supertonic) chord, typically just before the dominant",
          "A cadence used exclusively in atonal compositions with no tonal center",
          "A cadence defined purely by its rhythm, with no harmonic component"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'the augmented sixth chord' family (Italian, French, German) share as a common harmonic function?",
        "opts": [
          "They function as simple tonic chords in root position at the very start of a piece, well before any real development",
          "They are chromatically altered predominant chords that resolve strongly, via an augmented sixth interval, to the dominant",
          "They are used exclusively for ending a piece in a slow, quiet coda",
          "They only appear in unaccompanied vocal music"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'the tritone', an interval of particular significance in tonal harmony?",
        "opts": [
          "A perfectly consonant interval traditionally used to establish the tonic key",
          "A highly dissonant interval spanning three whole tones, historically linked to instability and called 'diabolus in musica'",
          "An interval used only in major scales, never once appearing in minor keys or in any of the seven church modes of medieval music",
          "A type of rhythmic subdivision"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'metric modulation' refer to in more advanced rhythmic composition?",
        "opts": [
          "Simply speeding up or slowing down an entire piece uniformly throughout its length",
          "Reinterpreting a rhythmic value from one tempo or meter as equivalent in a new one",
          "A method for transposing a melody to a new key",
          "A type of dynamic marking indicating volume change"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'the Rule of the Octave' (Regola dell'ottava), a historical harmonic convention from the Baroque period?",
        "opts": [
          "A rule limiting compositions to exactly eight measures in total length",
          "A guideline for standard harmonizations of each scale degree in a bass line",
          "A rule requiring all octaves to be played simultaneously",
          "A rule governing the tuning of keyboard instruments only"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'set theory' as applied to atonal music analysis (pitch-class set theory) primarily analyze?",
        "opts": [
          "The chord progressions found exclusively within traditional tonal harmony textbooks used in music conservatories around the world today",
          "Collections of pitch classes and their intervallic relationships, independent of a traditional tonal or key-based framework",
          "The physical construction materials of orchestral instruments",
          "The historical publication dates of musical scores"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is a 'deceptive cadence' (or interrupted cadence) in tonal harmony?",
        "opts": [
          "A cadence that resolves exactly as the listener expects, straight to the tonic chord without any deviation or surprise whatsoever",
          "A cadence, typically V-vi, where the expected resolution to the tonic is avoided for an unexpected chord, creating surprise",
          "A cadence used only at the very beginning of a piece, before any development",
          "A cadence defined purely by dynamics, with no harmonic content"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'twelve-tone technique' (dodecaphony), developed by Arnold Schoenberg, structure a composition around?",
        "opts": [
          "A traditional major or minor scale used throughout a full Romantic-era symphony",
          "A fixed ordering (tone row) of all twelve pitches, manipulated to generate the music",
          "A single repeated rhythmic pattern",
          "A traditional Western time signature exclusively"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'serialism', as an extension of twelve-tone technique associated with composers like Pierre Boulez, applied to beyond pitch?",
        "opts": [
          "Serialism concerns only the ordering of pitches, never any other musical parameter at all, according to its strictest classical definition from the 1920s",
          "Serialism can extend ordered, systematic control to other parameters, such as rhythm, dynamics, and timbre, called 'total serialism'",
          "Serialism is a purely improvisational technique with no systematic ordering",
          "Serialism applies exclusively to solo piano compositions written after 1950"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'spectral music', associated with composers like Gérard Grisey and Tristan Murail, use as a primary basis for compositional material?",
        "opts": [
          "Traditional diatonic scales and functional harmony used exclusively throughout the piece, with absolutely no chromatic material at all",
          "The acoustic analysis of sound's spectral content, using the harmonic or inharmonic overtone series as a direct basis for pitch and harmony",
          "A fixed twelve-tone row, as in classical serialism",
          "Purely improvised, unstructured performance with no compositional planning of any kind"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'Schenkerian analysis', a highly influential analytical method developed by Heinrich Schenker?",
        "opts": [
          "A method for analyzing only the surface-level rhythm of a piece",
          "An analytical approach that reduces a tonal composition to underlying structural layers, ultimately revealing a fundamental背景 structure (Ursatz), to reveal the deep voice-leading and harmonic coherence beneath the musical surface",
          "A system exclusively for analyzing atonal, twelve-tone compositions",
          "A purely historical method with no ongoing analytical use"
        ],
        "a": 0,
        "tier": 4
      },
      {
        "q": "What does 'neo-Riemannian theory', a modern analytical approach building on 19th-century theorist Hugo Riemann, primarily use to analyze chromatic harmony?",
        "opts": [
          "Traditional Roman numeral functional harmony applied exclusively to Baroque chorales",
          "Transformational operations mapping one triad to another via minimal voice-leading",
          "A purely rhythmic analytical framework with no harmonic component",
          "A system limited exclusively to analyzing Baroque counterpoint"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'the Tonnetz' (tone network), a conceptual and visual tool associated with both 19th-century theory and modern neo-Riemannian analysis?",
        "opts": [
          "A tool used for notating rhythm exclusively, with absolutely no pitch content",
          "A geometric lattice visualizing pitch relationships and triadic transformations",
          "A tool used only for tuning instruments",
          "A historical instrument no longer used in modern analysis"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'aleatoric' (chance) music, as pioneered by composers like John Cage, incorporate into the compositional or performance process?",
        "opts": [
          "Strict, fully predetermined notation with zero performer discretion permitted anywhere in the score, from the very first note to the very last measure",
          "An element of chance, where certain parameters, such as pitch or duration, are left to random processes or performer choice",
          "Only traditional tonal harmony with no experimental elements",
          "A requirement that all performers play in strict unison at all times during a concert"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'musique concrète', pioneered by Pierre Schaeffer, fundamentally based on as a compositional method?",
        "opts": [
          "Composing exclusively for traditional orchestral instruments inside a formal concert hall setting, using only standard notated scores and parts",
          "Composing with recorded, real-world sounds, manipulated and organized using early tape-based electronic techniques, rather than notated material",
          "A strict twelve-tone serial technique applied to acoustic instruments",
          "A purely improvisational jazz technique"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'the theory of pitch-class set similarity relations' (such as those developed by Allen Forte) attempt to quantify in atonal music analysis?",
        "opts": [
          "The tempo relationships between different sections of a long symphonic movement",
          "The degree of structural similarity between different pitch-class sets in atonal music",
          "The dynamic markings used throughout a score",
          "The historical popularity of a given musical work"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'spectralism's use of the harmonic series' theoretically grounded in, as a departure from earlier twentieth-century atonal approaches?",
        "opts": [
          "An arbitrary, purely constructed ordering of pitches with absolutely no acoustic basis",
          "The physical, acoustic phenomenon of the overtone series naturally present in any vibrating sound, used as a source for pitch, harmony, and orchestration",
          "A strict adherence to Renaissance-era modal theory",
          "A rejection of any connection between compositional theory and the physics of sound waves or acoustics of any kind whatsoever in nature or in the physical world"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'process music', associated with composers like Steve Reich, structure a piece around?",
        "opts": [
          "A single, static harmonic block with no development across the entire composition or performance, from beginning to end without any change",
          "A clearly audible, gradual and systematic musical process, such as phasing or additive rhythm, that unfolds over the course of the piece",
          "A strict twelve-tone row manipulated according to serialist principles",
          "Purely improvised material with no underlying systematic process"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'the theory of rhythmic phasing', central to some minimalist compositions by Steve Reich?",
        "opts": [
          "A technique of abruptly changing tempo without any transition between sections",
          "Two identical rhythmic patterns played together, gradually drifting out of sync",
          "A method for tuning instruments to match each other precisely",
          "A rhythmic notation system used only for percussion ensembles"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'microtonality' involve, as distinct from standard Western 12-tone equal temperament?",
        "opts": [
          "Using only the standard twelve semitones of Western concert hall tuning",
          "Using musical intervals smaller than the standard semitone, via alternate tuning systems",
          "A technique limited exclusively to solo vocal performance in unaccompanied choral music",
          "A purely theoretical concept never used in actual compositions"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'just intonation' as a tuning system, in contrast to equal temperament?",
        "opts": [
          "A tuning system based purely on arbitrary, non-mathematical personal preference with no acoustic grounding whatsoever in physics, mathematics, or acoustic science",
          "A tuning system based on frequency ratios of small whole numbers, producing acoustically pure intervals, but which cannot be transposed to all keys without retuning",
          "An identical tuning system to standard 12-tone equal temperament",
          "A tuning system used exclusively in electronic music production"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'the theory of formal function', as developed by scholars like William Caplin building on earlier theorists, analyze regarding classical-era musical phrases?",
        "opts": [
          "The exact notated dynamics marked within a single classical phrase",
          "The structural role a musical unit plays, like 'presentation' or 'cadential'",
          "The historical performance practice of ornamentation as documented in period treatises",
          "The instrumentation choices made by a composer"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'timbral composition' or 'Klangfarbenmelodie' ('tone-color melody'), a concept associated with Schoenberg and later composers like Webern?",
        "opts": [
          "Composing a melody using only a single instrument's timbre throughout the piece",
          "Distributing a melody's successive notes across different instrumental timbres",
          "A technique exclusively concerned with dynamics, not timbre",
          "A method for notating traditional Western harmony"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'the theory of harmonic rhythm' analyze in a piece of tonal music?",
        "opts": [
          "The exact melodic contour traced across a single musical phrase",
          "How often the underlying harmony changes over the course of a piece",
          "The dynamic markings used by the composer",
          "The instrumentation used in a given passage"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'the concept of prolongation' in Schenkerian-influenced analysis?",
        "opts": [
          "The literal repetition of a single note for an extended duration",
          "A harmony or tone structurally extended in time through embellishment",
          "A technique for slowing down the tempo of a performance",
          "A method for extending the physical length of a musical instrument"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'the theory of maximally even sets', relevant to scale theory in music, mathematically characterize?",
        "opts": [
          "Scales with an arbitrary, unstructured distribution of intervals",
          "Scales distributed as evenly as possible around the chromatic circle",
          "A purely rhythmic property unrelated to pitch collections",
          "A property exclusive to twelve-tone rows"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'the theory of contour analysis' in the study of atonal or non-tonal melodic material?",
        "opts": [
          "An analysis based solely on exact pitch and duration values in a printed score",
          "Examining a melody's up-and-down shape, abstracted from its precise pitch content",
          "A method for analyzing only rhythmic notation",
          "A technique applicable exclusively to purely tonal, functional harmony"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'transformational theory', as systematically formalized by David Lewin, propose as an alternative analytical perspective to traditional interval-based (Cartesian) pitch analysis?",
        "opts": [
          "A framework focused exclusively on measuring fixed distances between static pitch objects in a score, ignoring any process entirely",
          "A framework shifting analytical focus from static musical objects toward the transformations that move one configuration to another over time",
          "A purely historical framework with no formal mathematical basis or analytical application",
          "A theory limited exclusively to the analysis of rhythm, not pitch"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the significance of 'generalized interval systems' (GIS), a formal mathematical structure introduced by David Lewin, for music theory?",
        "opts": [
          "GIS provides a single, fixed definition of 'interval' applicable only to traditional Western pitch space and to no other space",
          "GIS provides an abstract algebraic framework generalizing musical interval across diverse musical spaces using formal group theory",
          "GIS is a purely notational system with no theoretical or analytical content beyond simple labeling",
          "GIS applies exclusively to microtonal tuning systems"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'the theory of maximally smooth voice leading', formalized using geometric models by theorists like Dmitri Tymoczko, mathematically characterize?",
        "opts": [
          "Chord progressions that always involve the largest possible pitch motion between every single voice, regardless of distance, context, or musical style",
          "Chord progressions in which the total distance moved by all voices between successive chords is minimized, modeled geometrically in spaces called orbifolds",
          "A purely rhythmic property of a musical passage with no bearing on pitch or harmony",
          "A property applicable exclusively to purely diatonic, non-chromatic music"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the significance of 'geometrical music theory', as developed extensively by Dmitri Tymoczko, for representing chords and voice leading?",
        "opts": [
          "It rejects any mathematical or geometric modeling of musical structure entirely, in favor of purely verbal description alone in every case",
          "It represents chords as points in continuous geometric spaces, allowing voice-leading relationships to be visualized and measured as distances",
          "It is applicable only to twelve-tone serial compositions written in the mid-twentieth century",
          "It is a purely notational convenience with no analytical or compositional implications"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'diatonic set theory', as a formalized subfield combining set theory and scale theory, mathematically investigate about the diatonic collection's special properties?",
        "opts": [
          "That the diatonic collection has no distinguishing mathematical properties compared to any arbitrary seven-note collection drawn completely at random",
          "Special combinatorial and structural properties of the diatonic scale, such as maximal evenness, which may explain its prevalence across musical cultures",
          "That the diatonic scale is mathematically identical to the twelve-tone chromatic aggregate",
          "A property applicable exclusively to non-Western musical scales and folk traditions found outside Europe"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'the well-formedness property' of scales, as formalized by theorists like Norman Carey and David Clampitt?",
        "opts": [
          "A property held by all arbitrary pitch collections regardless of their internal structure or spacing",
          "A property of scales, like the diatonic, generated by iterating one interval within an octave",
          "A property describing only rhythmic patterns, not pitch collections",
          "A property limited exclusively to twelve-tone equal temperament scales"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'computational musicology', as an interdisciplinary field, primarily apply computational and statistical methods to investigate?",
        "opts": [
          "Only the historical biographical details of composers' personal lives and correspondence",
          "Large-scale patterns in musical style and structure, via computational and statistical methods",
          "The physical acoustics of concert hall architecture exclusively",
          "A field concerned exclusively with digital audio file compression formats"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'topic theory' in the study of eighteenth-century classical music, as developed by scholars like Leonard Ratner and Kofi Agawu?",
        "opts": [
          "A theory concerned exclusively with the harmonic function of chords in complete isolation",
          "Identifying conventional musical figures, or 'topics', with recognizable expressive associations",
          "A theory limited exclusively to the analysis of opera librettos",
          "A purely biographical approach to studying composers' personal lives"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'music information retrieval' (MIR), as a computational research field, primarily focus on developing?",
        "opts": [
          "Purely acoustic instrument design with no computational component",
          "Algorithms and systems for automatically extracting, analyzing, and organizing musically relevant information from audio or symbolic music data, such as for automatic genre classification, melody extraction, or音楽 recommendation",
          "A field concerned exclusively with historical music notation manuscripts",
          "A purely theoretical framework with no practical software applications"
        ],
        "a": 0,
        "tier": 5
      },
      {
        "q": "What is the theoretical contribution of 'the theory of expectation in music cognition', as significantly developed by Leonard Meyer and later formalized by theorists like David Huron?",
        "opts": [
          "Musical expectation plays no meaningful role in a listener's emotional or aesthetic experience at all",
          "Music's emotional effect largely comes from events confirming, delaying, or violating a listener's expectations",
          "A theory concerned exclusively with the physical acoustics of instruments",
          "A framework applicable only to atonal twentieth-century music"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'the statistical learning theory of tonal cognition', as advanced by researchers like Carol Krumhansl, propose regarding how listeners internalize a sense of key and tonal hierarchy?",
        "opts": [
          "Listeners are born with an innate, fixed, unchangeable sense of tonal hierarchy requiring no learning",
          "Listeners implicitly learn the statistical regularities of pitch usage within a musical culture through repeated exposure over time",
          "Tonal hierarchy perception is identical across every musical culture with absolutely no learned, culture-specific component whatsoever",
          "This theory applies only to trained professional musicians, not casual listeners with no formal training"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the significance of 'spectral analysis-informed orchestration', as a compositional technique building on spectral music research, for orchestrating timbre?",
        "opts": [
          "Orchestration decisions are made without any reference whatsoever to a sound's acoustic spectral content or overtone structure at all",
          "Composers use detailed acoustic analysis of a sound's overtone spectrum to inform how instrumental combinations are voiced and layered together",
          "This technique applies exclusively to solo, unaccompanied instrumental writing",
          "A technique limited exclusively to purely electronic, non-orchestral composition"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'the theory of musical Markov models' apply from probability theory to analyze or generate musical sequences?",
        "opts": [
          "A deterministic, non-probabilistic model of musical structure with no randomness",
          "Models where a note's probability depends on a limited history of prior events",
          "A purely rhythmic notation system with no probabilistic component",
          "A model applicable exclusively to twelve-tone serial composition"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is 'the theory of musical topic and gesture' in embodied music cognition research, as advanced by scholars building on cognitive linguistics?",
        "opts": [
          "Musical meaning is understood purely through abstract, disembodied symbolic manipulation with no bodily basis",
          "Musical meaning is grounded in embodied physical gestures, like pitch height mapping to verticality",
          "A theory concerned exclusively with the physical construction of musical instruments",
          "A framework applicable only to vocal, not instrumental, music"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'the theory of maximal evenness applied to rhythm' (rhythmic maximal evenness), extending concepts from scale theory, mathematically characterize about certain rhythmic patterns found across world music traditions?",
        "opts": [
          "Rhythmic patterns with an arbitrary, unstructured distribution of onsets scattered randomly within a cycle, with no discernible mathematical property",
          "Certain widespread rhythmic timelines, such as the son clave, exhibit a mathematically maximally even distribution of onsets around the rhythmic cycle",
          "A property describing only pitch relationships, with no rhythmic application",
          "A property unique exclusively to Western art music rhythmic notation and its printed scores"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'neural network-based music generation models', as a contemporary computational approach to algorithmic composition?",
        "opts": [
          "These models require the composer to explicitly hand-code every single compositional rule with absolutely no learning involved whatsoever, at any stage",
          "These models learn statistical and structural patterns from large corpora of existing music, generating novel material reflecting learned stylistic regularities",
          "These models are purely deterministic with no element of learned statistical inference or randomness",
          "This approach applies exclusively to generating rhythm, never melody or harmony"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'the theory of tonal pitch space', as formalized by theorists like Fred Lerdahl building on generative approaches, propose as a way to quantify psychological distance between musical elements?",
        "opts": [
          "All pitches and chords are perceived as psychologically equidistant from one another regardless of the surrounding tonal context entirely, in every case",
          "A hierarchical geometric model representing psychological distances between pitches, chords, and keys, allowing tonal tension to be quantitatively modeled",
          "A purely rhythmic model with no application to pitch or harmony",
          "A model applicable only to atonal, non-tonal musical passages composed after 1950"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'generative theory of tonal music' (GTTM), developed by Fred Lerdahl and Ray Jackendoff, drawing explicitly on generative linguistics?",
        "opts": [
          "GTTM proposes that musical structure has no meaningful hierarchical organization at any level of a musical composition whatsoever, according to this view",
          "GTTM proposes a formal, rule-based system modeling a listener's unconscious hierarchical organization of tonal music, drawing an analogy to Chomskyan generative grammar",
          "GTTM applies exclusively to the surface-level notation of a score with no deeper structural claims about cognition",
          "GTTM is concerned exclusively with the biographical context of a composition, not its internal structure"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'corpus-based music cognition research', combining computational corpus analysis with cognitive and perceptual experiments, aim to empirically test?",
        "opts": [
          "Purely abstract music-theoretic claims with no reference whatsoever to real musical repertoire or actual listener behavior of any kind at all",
          "Whether music-theoretic constructs and cognitive models of perception are reflected in statistical regularities present in large music corpora",
          "A field concerned exclusively with the economics of the recorded music industry",
          "A method limited exclusively to studying a single composer's complete works in isolation from any broader corpus"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'the theory of tonnetz-based neo-Riemannian networks applied to atonal and post-tonal repertoire' for extending transformational theory beyond its original triadic context?",
        "opts": [
          "Neo-Riemannian and transformational networks are theoretically restricted exclusively to classical triadic tonal harmony with absolutely no possible extension",
          "Theorists have extended transformational approaches, originally developed for triadic harmony, to model relationships among general pitch-class sets in post-tonal repertoire",
          "This extension applies exclusively to purely rhythmic, non-pitch-based musical parameters",
          "This theoretical extension has been definitively proven inapplicable to any real musical repertoire"
        ],
        "a": 1,
        "tier": 5
      }
    ]
  },
  {
    "id": "finance",
    "name": "Personal Finance",
    "questions": [
      {
        "q": "What is a budget?",
        "opts": [
          "A type of bank account",
          "A plan for how you will spend and save money",
          "A form the government requires you to file every year",
          "A type of loan"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does 'saving' money generally mean?",
        "opts": [
          "Spending money on wants",
          "Setting money aside for future use",
          "Giving money away",
          "Borrowing money from a bank to spend right away"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a bank account primarily used for?",
        "opts": [
          "Filing taxes",
          "Storing and managing your money",
          "Applying for a job at a local company",
          "Insuring your car"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "In simple terms, what is interest?",
        "opts": [
          "A type of tax",
          "Money earned or paid for the use of money",
          "A government subsidy for low-income households",
          "A stock market index"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a credit card?",
        "opts": [
          "A prepaid card that only holds money you've already deposited",
          "A card that lets you borrow money to make purchases",
          "A type of debit account",
          "A government ID card"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does APR stand for?",
        "opts": [
          "Annual Percentage Rate",
          "Average Payment Return",
          "Annual Profit Ratio",
          "Applied Percentage Return"
        ],
        "a": 0,
        "tier": 1
      },
      {
        "q": "What is an emergency fund?",
        "opts": [
          "Money invested in stocks for long-term retirement growth",
          "Money set aside to cover unexpected expenses",
          "A type of insurance policy",
          "A government relief payment"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is compound interest?",
        "opts": [
          "Interest paid only on the original principal, recalculated every ten years",
          "Interest calculated on the principal plus previously accumulated interest",
          "A one-time fixed fee",
          "Interest that decreases every year"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a stock?",
        "opts": [
          "A loan you give to a company",
          "A share of ownership in a company",
          "A type of savings account offered by credit unions",
          "A government bond"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does 'diversification' mean in investing?",
        "opts": [
          "Putting all your money in one stock",
          "Spreading investments across assets to reduce risk",
          "Avoiding the stock market entirely due to high fees",
          "Investing only in real estate"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is cash?",
        "opts": [
          "A type of loan",
          "Physical currency, like coins and banknotes",
          "A type of investment held in a brokerage account",
          "A tax form"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a 'debit card' primarily used for?",
        "opts": [
          "Borrowing money from a bank to be repaid with interest",
          "Spending money directly from your own bank account",
          "Applying for a mortgage",
          "Filing taxes"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does it generally mean to be 'in debt'?",
        "opts": [
          "Having a lot of savings",
          "Owing money to someone else",
          "Owning a business",
          "Having no bank account at any local branch"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a 'paycheck'?",
        "opts": [
          "A type of bank loan",
          "Payment for work done, usually on a regular schedule",
          "A tax refund",
          "A type of insurance policy offered through an employer plan"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is 'income'?",
        "opts": [
          "Money spent on bills",
          "Money received, typically from work or investments",
          "A type of debt that must eventually be repaid with interest",
          "A government tax"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a 'receipt'?",
        "opts": [
          "A type of loan issued by a credit union",
          "A written proof of a purchase or payment",
          "A bank statement",
          "A tax form"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does it mean to 'save for a rainy day'?",
        "opts": [
          "To spend money quickly",
          "To set money aside for unexpected future needs",
          "To take out a loan",
          "To donate money regularly to a charity of choice"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does 'spending less than you earn' generally lead to?",
        "opts": [
          "Debt",
          "Savings, or a budget surplus",
          "Bankruptcy",
          "Higher taxes owed at the end of the year"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a 'loan'?",
        "opts": [
          "A gift of money",
          "Money borrowed and repaid, usually with interest",
          "A type of tax",
          "A government grant that never needs to be repaid"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does it mean to 'invest' money?",
        "opts": [
          "To spend money immediately",
          "Putting money into something, like stocks, expecting a future return",
          "To hide money away",
          "To donate money to charity without expecting anything in return"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a 'credit report'?",
        "opts": [
          "A summary of your annual income and taxes",
          "A record of someone's credit history and borrowing behavior",
          "A record of transactions in a bank account over the past decade",
          "Proof of ownership in a company"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is 'net worth'?",
        "opts": [
          "Your annual salary",
          "The value of what you own minus what you owe",
          "Your monthly expenses",
          "Your credit score reported by the major bureaus"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is a 'mortgage'?",
        "opts": [
          "A type of credit card with an especially high spending limit",
          "A loan specifically used to purchase real estate or property",
          "A retirement account",
          "A type of insurance"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does a 'FICO score' commonly refer to?",
        "opts": [
          "A tax identification number",
          "A widely used type of credit score",
          "A bank account number used for direct deposit",
          "A stock ticker symbol"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is a 'premium' in the context of insurance?",
        "opts": [
          "The payout received after a claim is filed and fully approved by the insurer",
          "The amount paid, usually periodically, for insurance coverage",
          "A type of tax",
          "A government subsidy"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What are 'capital gains'?",
        "opts": [
          "Money earned from a salary, before any deductions or taxes are withheld",
          "Profit from selling an asset for more than its purchase price",
          "A type of bank fee",
          "A government benefit"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'FDIC insured' mean for a US bank deposit?",
        "opts": [
          "The deposit earns guaranteed high interest",
          "The deposit is protected up to a certain limit if the bank fails",
          "The deposit cannot be withdrawn early without a penalty fee",
          "The deposit is entirely tax-free"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is a 'W-2 form' used for in the US?",
        "opts": [
          "Applying for a small business loan from a local bank",
          "Reporting an employee's annual wages and taxes withheld",
          "Filing for bankruptcy",
          "Opening a bank account"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is 'amortization' in the context of a loan?",
        "opts": [
          "Increasing a loan's interest rate over time",
          "The process of paying off debt over time through regular scheduled payments",
          "A type of tax deduction",
          "A method of avoiding debt entirely by only ever paying with cash up front"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does it mean to 'refinance' a loan?",
        "opts": [
          "To pay off a loan entirely in one payment",
          "To replace an existing loan with a new one, often with different terms",
          "To default on a loan",
          "To formally transfer a loan to another named person without changing its terms"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is a 'certificate of deposit' (CD)?",
        "opts": [
          "A share representing partial ownership in a growing company",
          "A savings product locking a sum for a fixed term and rate",
          "A government-issued debt security",
          "A policy protecting against financial loss"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "In budgeting, what is the difference between a 'need' and a 'want'?",
        "opts": [
          "Needs always cost more than wants",
          "Needs are essential for living, while wants are discretionary",
          "There is no meaningful difference once you've paid off debt",
          "Wants are always cheaper than needs"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is 'gross income'?",
        "opts": [
          "Income after taxes and deductions are subtracted each pay period",
          "Total income before any deductions like taxes",
          "Only investment income",
          "Only salary income, excluding bonuses"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "A savings bond is generally considered 'risk-averse friendly' because it typically offers:",
        "opts": [
          "The highest possible returns with high risk",
          "Lower, more stable returns with minimal risk of loss",
          "No insurance or protection at all against inflation",
          "Guaranteed losses over time"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is a 'brokerage account' used for?",
        "opts": [
          "Only paying bills",
          "Buying and selling investments like stocks and bonds",
          "Filing tax returns",
          "Storing physical cash only, kept in a home safe rather than a bank"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is a 'checking account' primarily designed for?",
        "opts": [
          "Long-term investment growth",
          "Frequent, everyday transactions like deposits and withdrawals",
          "Retirement savings exclusively meant to be untouched for decades",
          "Filing taxes"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'annual percentage yield' (APY) reflect, that simple interest does not?",
        "opts": [
          "The effect of compounding over a year",
          "A fixed government-set rate reviewed annually",
          "The total tax owed on interest",
          "The bank's operating costs"
        ],
        "a": 0,
        "tier": 2
      },
      {
        "q": "What is a 'co-signer' on a loan?",
        "opts": [
          "A person who receives the loan proceeds only",
          "A person who agrees to be responsible for the debt if the primary borrower fails to pay",
          "A bank employee whose job is to approve loans and set their interest rates for new applicants",
          "A government auditor"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'overdraft' mean on a bank account?",
        "opts": [
          "Withdrawing more money than the account balance, resulting in a negative balance",
          "Depositing more money than expected",
          "A type of savings bonus banks pay out automatically at the end of each calendar year",
          "A fee-free transaction"
        ],
        "a": 0,
        "tier": 2
      },
      {
        "q": "What is the general purpose of a 'will' in personal financial planning?",
        "opts": [
          "To apply for a mortgage",
          "To specify how a person's assets should be distributed after death",
          "To open a new joint bank account for a surviving spouse or family member",
          "To calculate annual taxes"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'liquidity' refer to in finance?",
        "opts": [
          "How risky an asset is",
          "How easily an asset can be converted to cash",
          "How much tax an asset incurs when it is eventually sold",
          "An asset's historical average return"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is a 401(k)?",
        "opts": [
          "A type of credit score",
          "A US employer-sponsored retirement savings account",
          "A government stimulus check issued during a recession",
          "A type of short-term loan"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "A credit score is primarily used by lenders to assess what?",
        "opts": [
          "Your income level",
          "Your likelihood of repaying debt",
          "Your total net worth across all accounts",
          "Your tax bracket"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is inflation?",
        "opts": [
          "A rise in the stock market",
          "A general rise in prices that erodes purchasing power",
          "An increase in interest rates set by a country's central bank",
          "A decrease in unemployment"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is a mutual fund?",
        "opts": [
          "A single company's stock traded exclusively on a public stock exchange",
          "A pooled investment fund professionally managed across many assets",
          "A type of personal loan",
          "A government savings bond"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is the key difference between a Roth IRA and a Traditional IRA?",
        "opts": [
          "Roth IRAs are only available through employer-sponsored retirement plans",
          "The timing of taxation — contributions taxed now vs. taxed on withdrawal",
          "Traditional IRAs have no contribution limits",
          "Roth IRAs cannot hold stocks"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'dollar-cost averaging' mean?",
        "opts": [
          "Buying only when prices are lowest",
          "Investing a fixed amount at regular intervals regardless of price",
          "Converting all of your assets into a single foreign currency",
          "Averaging your credit card balances"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "A bond's 'yield to maturity' refers to what?",
        "opts": [
          "The bond's face value at issue",
          "The total anticipated return if the bond is held until it matures",
          "The coupon rate printed on the bond",
          "The bond issuer's credit rating as assessed by a ratings agency"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does the price-to-earnings (P/E) ratio measure?",
        "opts": [
          "A company's total debt load",
          "A stock's price relative to its earnings per share, as a valuation metric",
          "The dividend yield of a stock relative to its current market share price",
          "A company's cash reserves"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'asset allocation'?",
        "opts": [
          "The total tax owed each year on all investment income earned across every account you hold",
          "How an investment portfolio is divided among asset classes like stocks, bonds, and cash",
          "The process of applying for a loan",
          "A method of calculating credit scores"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'beta' in finance a measure of?",
        "opts": [
          "A company's total debt",
          "A stock's volatility relative to the overall market",
          "A company's dividend yield paid out to shareholders",
          "A stock's book value"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'market capitalization' measure?",
        "opts": [
          "A company's annual revenue",
          "The total market value of a company's outstanding shares",
          "A company's total debt owed to bondholders and banks",
          "A company's cash reserves"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'short selling'?",
        "opts": [
          "Buying an asset and holding it long-term",
          "Selling a borrowed asset with the expectation of buying it back later at a lower price",
          "Selling an asset you already own outright for a quick profit, without any borrowing involved",
          "Investing only in short-term bonds"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does index fund investing generally aim to do?",
        "opts": [
          "Actively pick individual winning stocks",
          "Track the performance of a specific market index rather than beat it",
          "Guarantee a fixed rate of return regardless of market performance",
          "Focus solely on foreign currencies"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does the 'time value of money' concept state?",
        "opts": [
          "A dollar today is worth more than the same dollar in the future, due to its earning potential",
          "Money is worth exactly the same amount no matter when it is received, spent, or invested",
          "Time has no bearing on financial decisions",
          "Money always depreciates at a fixed government rate"
        ],
        "a": 0,
        "tier": 3
      },
      {
        "q": "What is a 'derivative' in finance?",
        "opts": [
          "A type of savings account offered only to institutional investors",
          "A financial contract whose value is derived from an underlying asset",
          "A government-issued bond",
          "A type of tax deduction"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'hedging' in investing generally aim to do?",
        "opts": [
          "Maximize risk for higher potential returns",
          "Reduce or offset the risk of adverse price movements in an asset",
          "Avoid paying taxes on gains",
          "Guarantee a fixed profit no matter how the market conditions change"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "A steeply inverted yield curve is often watched by economists as a potential signal of:",
        "opts": [
          "Guaranteed stock market gains",
          "Increased recession risk",
          "A currency's exact future value",
          "A company's exact future earnings"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'leverage' mean in an investment context?",
        "opts": [
          "Avoiding all forms of debt",
          "Using borrowed capital to increase the potential return of an investment",
          "Diversifying across many different asset classes to reduce overall risk",
          "Holding only cash reserves"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'securitization'?",
        "opts": [
          "The process of insuring a single loan",
          "The process of pooling various financial assets and repackaging them into tradable securities",
          "A standardized government method for collecting overdue taxes from large corporations and banks",
          "The process of auditing a company's books"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "In the Capital Asset Pricing Model (CAPM), an asset's expected return is related to what?",
        "opts": [
          "Its total trading volume",
          "Its systematic risk, measured by beta relative to the market",
          "Its dividend history alone",
          "Its book value as recorded on the company's balance sheet"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "The weak form of the Efficient Market Hypothesis claims what?",
        "opts": [
          "Insider information cannot ever move prices",
          "Current prices fully reflect all past price and volume information",
          "All public and private information, including insider knowledge, is priced in instantly",
          "Markets are always perfectly rational"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "The Black-Scholes model is primarily used to price what?",
        "opts": [
          "Corporate bonds",
          "European-style options",
          "Real estate mortgages",
          "Government treasury bills"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "In bond analysis, what does 'duration' measure?",
        "opts": [
          "The number of years until a newly announced bond is finally issued",
          "A bond's price sensitivity to changes in interest rates",
          "The bond's credit rating",
          "The total coupon payments received"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "Under the Modigliani-Miller theorem, in a perfect frictionless market, what determines a firm's value?",
        "opts": [
          "Its capital structure — the ratio of debt to equity used to finance it",
          "Its underlying assets and earning power, independent of how it is financed",
          "Its dividend payout ratio alone",
          "The size of its marketing budget"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'arbitrage' refer to in financial markets?",
        "opts": [
          "A high-risk speculative bet on price movement",
          "Exploiting price differences of the same asset in different markets for a risk-free profit",
          "A type of long-term bond investment",
          "A government-regulated trading halt imposed during periods of extreme market volatility"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'Value at Risk' (VaR) estimate?",
        "opts": [
          "The guaranteed minimum return of a portfolio",
          "The maximum potential loss of a portfolio over a given time period at a given confidence level",
          "The total combined value of every asset a firm currently holds across all of its accounts",
          "The average historical return of an asset"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "The Fama-French three-factor model is an extension of which model?",
        "opts": [
          "The Black-Scholes options pricing model",
          "The CAPM, adding size and value factors to explain stock returns",
          "The Modigliani-Miller theorem",
          "The efficient market hypothesis, applied directly without modification"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'convexity' measure in bond analysis, as a refinement beyond duration?",
        "opts": [
          "A bond's coupon rate",
          "The curvature in the relationship between bond prices and interest rates",
          "A bond's credit rating",
          "The bond issuer's total outstanding debt across all series and maturities"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is a 'credit default swap' (CDS)?",
        "opts": [
          "A type of government-backed savings bond issued directly by the national treasury",
          "A derivative contract that transfers the credit risk of a debt instrument between parties",
          "A government bailout mechanism",
          "A type of equity investment"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'moral hazard' refer to in financial economics?",
        "opts": [
          "A formal ethical and legal rule that strictly prohibits insider trading among corporate executives",
          "The tendency to take greater risks when the negative consequences are borne by another party",
          "A legal requirement for financial disclosure",
          "A tax on excessive risk-taking"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "Modern Portfolio Theory (Markowitz) is primarily concerned with:",
        "opts": [
          "Predicting the exact future price of a stock",
          "Constructing an optimal portfolio to maximize expected return for a given level of risk via diversification",
          "Eliminating all forms of investment risk entirely by relying solely on government-backed guarantees and insurance",
          "Timing the market perfectly"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "'Adverse selection' in financial and insurance markets refers to:",
        "opts": [
          "A random selection process for loan approval",
          "A situation where asymmetric information leads to a market disproportionately attracting undesirable participants",
          "A formal government policy that strictly limits which new companies are allowed to enter a heavily regulated market",
          "A method of diversifying a portfolio"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "'Behavioral finance' as a field is primarily concerned with:",
        "opts": [
          "Purely mathematical modeling of markets",
          "Studying how psychological biases affect investors' financial decisions",
          "The formal regulation of financial institutions by government agencies",
          "The history of stock exchanges"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "The 'term structure of interest rates' describes:",
        "opts": [
          "The overall relationship between a company's total debt and its shareholder equity",
          "The relationship between interest rates, or bond yields, and different maturities",
          "The structure of a company's management team",
          "The tax treatment of different bond types"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "'Systemic risk' in finance refers to:",
        "opts": [
          "The risk associated with owning a single company's stock long-term",
          "The risk of collapse of an entire financial system or market",
          "The risk of currency exchange fluctuations only",
          "The risk of a single loan default"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'Tobin's Q' measure?",
        "opts": [
          "A firm's debt-to-equity ratio",
          "The ratio of a firm's market value to the replacement cost of its assets",
          "A firm's dividend payout ratio relative to its total quarterly earnings",
          "A firm's annual revenue growth"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is a 'zero-coupon bond'?",
        "opts": [
          "A bond with a variable interest rate",
          "A bond sold at a discount that pays no periodic interest, paying full face value at maturity",
          "A bond that pays interest monthly",
          "A government-issued perpetual bond that pays interest forever and never reaches maturity"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "'Duration matching', or immunization, in portfolio management aims to achieve:",
        "opts": [
          "Maximizing short-term trading profits",
          "Aligning the duration of assets and liabilities to protect a portfolio against interest rate risk",
          "Eliminating all credit risk",
          "Guaranteeing a fixed nominal return no matter how interest rates move over the life of the portfolio"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "The 'agency problem' in corporate finance refers to:",
        "opts": [
          "A dispute between two competing companies",
          "The conflict of interest between a company's management and its shareholders",
          "A legal issue involving licensed insurance agencies and their regulators",
          "A tax dispute between a firm and the government"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "The Heath-Jarrow-Morton (HJM) framework models:",
        "opts": [
          "The pricing of equity options only",
          "The evolution of the entire forward interest rate curve, rather than a single short rate",
          "The credit risk of corporate bonds, as assessed and rated by major credit rating agencies",
          "The valuation of real estate assets"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "A 'stochastic discount factor' (pricing kernel) is used in asset pricing theory as:",
        "opts": [
          "A fixed government-set discount rate",
          "A random variable used to discount uncertain future payoffs to determine an asset's present value",
          "A standardized measure of a company's overall credit rating as used by major ratings agencies worldwide",
          "A tax adjustment factor for bond yields"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "The Girsanov theorem allows what in mathematical finance?",
        "opts": [
          "The direct calculation of a company's fair value",
          "A change of probability measure, e.g. to the risk-neutral measure, used in derivative pricing",
          "A standardized method for calculating dividend yields across an entire stock market index",
          "A rule for optimal tax-loss harvesting"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "'Copula' modeling is used in quantitative finance to:",
        "opts": [
          "Predict a single asset's future price directly",
          "Model the dependence structure between multiple random variables, such as joint default risk, separately from their individual distributions",
          "Calculate a firm's weighted average cost of capital by combining the cost of its outstanding debt and equity financing in fixed proportions",
          "Structure a company's balance sheet"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "The Merton structural credit risk model treats a firm's equity as:",
        "opts": [
          "A perpetual bond with fixed coupons",
          "A call option on the firm's assets, defaulting if asset value falls below debt at maturity",
          "A completely risk-free government security that is fully guaranteed by the national treasury",
          "A fixed claim senior to all debt"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "GARCH modeling is used to capture what in financial time series?",
        "opts": [
          "A fixed constant volatility over time",
          "Time-varying volatility clustering, where periods of high volatility tend to be followed by more high volatility",
          "The exact direction of future price moves",
          "A firm's credit rating trajectory as tracked continuously by every major ratings agency over several years"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "'Market microstructure' research studies:",
        "opts": [
          "Long-term macroeconomic growth trends",
          "How the specific mechanisms of trading, like order types and bid-ask spreads, affect price formation and liquidity",
          "The history of stock exchange regulation",
          "Corporate governance structures and how boards of directors are formally elected by company shareholders each year"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "The Kelly criterion is used to determine:",
        "opts": [
          "The exact probability of a stock's future price",
          "The optimal fraction of capital to wager or invest to maximize the long-run geometric growth rate of wealth",
          "The fair price of a call option",
          "The minimum amount of capital a bank must hold in reserve under international regulatory standards"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "'Implied volatility', derived from option prices, represents:",
        "opts": [
          "The asset's actual historical volatility as measured over the past several years of trading",
          "The market's forecast of a security's future volatility, backed out from observed option prices",
          "A regulatory volatility cap",
          "The risk-free interest rate"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "Jump-diffusion modeling, beyond standard Brownian motion models, is designed to capture:",
        "opts": [
          "Only continuous, smooth price changes",
          "Sudden, discontinuous large price movements, in addition to continuous small fluctuations",
          "The exact timing of dividend payments",
          "A firm's fixed cost structure as reported each quarter to shareholders and regulators"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "High-frequency trading (HFT) relies primarily on what to generate its edge?",
        "opts": [
          "Long-term fundamental analysis",
          "Extremely fast execution speeds and algorithms to exploit tiny, fleeting price discrepancies",
          "Manual trading floor negotiations",
          "A fixed schedule of annual portfolio rebalancing carried out manually by a team of human traders"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "The 'equity premium puzzle' in financial economics refers to:",
        "opts": [
          "The fact that stocks always outperform bonds by a fixed margin",
          "The observation that historical excess returns of stocks over risk-free bonds are too large to be explained by standard risk-aversion models",
          "The well-documented tendency of newly listed companies' initial public offerings to be systematically underpriced on their very first day of trading",
          "The seasonal pattern of returns in January"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "'Basis risk' in hedging with derivatives refers to:",
        "opts": [
          "The risk of a company going bankrupt",
          "The risk that a hedge and the underlying exposure do not move perfectly together, due to imperfect correlation",
          "The risk of currency devaluation only",
          "The risk associated exclusively with fixed-rate bonds issued by lower-rated corporate borrowers in emerging markets"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "'Slippage' in algorithmic trading refers to:",
        "opts": [
          "The tax owed on a trade",
          "The difference between the expected price of a trade and the price at which it is actually executed",
          "A regulatory fee on high-frequency trades",
          "The spread between the bid and ask prices only, exactly as quoted before any trade takes place"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "The Vasicek model describes what in fixed income analysis?",
        "opts": [
          "The pricing of equity call options",
          "The evolution of short-term interest rates using a mean-reverting stochastic process",
          "Corporate bond default correlations",
          "Currency exchange rate volatility between two major world currencies over long horizons"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "'Tail risk' in portfolio management refers to:",
        "opts": [
          "The risk of small, everyday price fluctuations",
          "The risk of rare, extreme events causing outsized losses",
          "The risk of a firm's stock underperforming its sector slightly",
          "The risk of a minor interest rate change"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "'Factor investing' aims to systematically capture:",
        "opts": [
          "Random, unpredictable price movements",
          "Persistent, well-documented drivers of returns such as value, momentum, size, and quality across assets",
          "Only macroeconomic GDP growth",
          "A single company's quarterly earnings surprises relative to Wall Street analyst expectations each quarter"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "The 'liquidity premium' in asset pricing refers to:",
        "opts": [
          "A discount given for holding liquid assets",
          "The additional expected return investors demand for holding less liquid, harder-to-sell assets",
          "A targeted government subsidy specifically designed to prop up otherwise illiquid emerging markets",
          "A fixed fee charged by exchanges"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "'Regime-switching' modeling in financial econometrics attempts to capture:",
        "opts": [
          "A single unchanging statistical process over time",
          "Structural shifts between distinct market states, such as high and low volatility regimes, that follow different dynamics",
          "The exact timing of central bank meetings",
          "A fixed, unchanging seasonal pattern in prices that repeats in exactly the same way every single calendar year without fail"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "'Model risk' in quantitative finance refers to:",
        "opts": [
          "The risk of a stock's price declining",
          "The risk of loss resulting from using an incorrect or misapplied financial model",
          "The risk of a trader's personal error only",
          "The risk associated with holding too much uninvested cash for long periods of time"
        ],
        "a": 1,
        "tier": 5
      }
    ]
  },
  {
    "id": "photo",
    "name": "Photography",
    "questions": [
      {
        "q": "What does a camera's shutter do?",
        "opts": [
          "Zooms the lens",
          "Controls how long light hits the sensor or film",
          "Changes the color of the photo",
          "Automatically focuses the image before each shot is taken"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a 'lens' on a camera used for?",
        "opts": [
          "Storing photos",
          "Focusing light onto the sensor or film",
          "Supplying electrical power to the camera's internal circuits",
          "Displaying the photo"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does 'zoom' allow a photographer to do?",
        "opts": [
          "Take photos in the dark",
          "Make a subject appear closer or farther without moving",
          "Change the photo's color",
          "Permanently delete unwanted photos from the memory card"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a 'flash' used for in photography?",
        "opts": [
          "Making the camera's body lighter and easier to carry",
          "Providing extra light for a photo",
          "Zooming into a subject",
          "Recording video"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does 'ISO' broadly relate to in photography?",
        "opts": [
          "The lens's zoom level",
          "The camera sensor's sensitivity to light",
          "The size of the memory card",
          "The overall color tone and warmth of the photo"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a 'tripod' used for?",
        "opts": [
          "Cleaning the lens",
          "Stabilizing the camera to prevent blur",
          "Charging the camera's battery through a USB port",
          "Editing photos"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does 'focus' mean in photography?",
        "opts": [
          "Making the image sharp and clear",
          "Making the image brighter",
          "Making the image black and white",
          "Making the image bigger"
        ],
        "a": 0,
        "tier": 1
      },
      {
        "q": "What is a 'selfie'?",
        "opts": [
          "A photo taken by a professional photographer",
          "A photo someone takes of themselves",
          "A black and white photo",
          "A photo taken at night"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does 'portrait' typically refer to in photography?",
        "opts": [
          "A wide photo of a natural landscape taken outdoors",
          "A photo focused on a person, usually their face",
          "A photo of food",
          "A photo taken underwater"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a memory card used for in a digital camera?",
        "opts": [
          "Powering the camera's internal display",
          "Storing photos and videos",
          "Zooming the lens",
          "Cleaning the sensor"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does 'landscape' photography typically capture?",
        "opts": [
          "Close-up portraits",
          "Wide outdoor scenery",
          "Indoor product shots",
          "Fast-moving sports"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is 'exposure' in photography, in simple terms?",
        "opts": [
          "The overall color tone of a photo",
          "How light or dark a photo is",
          "The size of a photo file",
          "The angle of a photo"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does the shutter button do when pressed?",
        "opts": [
          "Turns the camera off",
          "Captures the photo",
          "Zooms the lens",
          "Deletes the last photo"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a DSLR?",
        "opts": [
          "A type of printer",
          "A type of digital camera with interchangeable lenses and a mirror system",
          "A type of subscription-based photo editing software used by professionals",
          "A type of memory card"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does 'black and white' photography remove from a color image?",
        "opts": [
          "Fine detail sharpness",
          "Color information",
          "Brightness",
          "Size"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a 'photo album' used for?",
        "opts": [
          "Capturing new images with a camera",
          "Storing and organizing printed or digital photos",
          "Retouching and adjusting photos after capture",
          "Producing physical prints of digital photos"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does 'macro' photography typically capture?",
        "opts": [
          "Very small subjects in extreme close-up",
          "Distant landscapes",
          "Fast sports action",
          "Only night skies, using very long exposure times"
        ],
        "a": 0,
        "tier": 1
      },
      {
        "q": "What is 'panorama' photography used to capture?",
        "opts": [
          "A single close-up subject",
          "A wide, sweeping view, often stitched from multiple shots",
          "Underwater scenes only, captured using a specialized waterproof camera housing",
          "Only black and white images"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does a camera's 'viewfinder' let you do?",
        "opts": [
          "Print photos",
          "See what the camera is framing before taking the shot",
          "Charge the battery while the camera is powered off",
          "Delete photos"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is 'candid' photography?",
        "opts": [
          "Posed studio photography only",
          "Capturing natural, unposed moments",
          "Photography taken only at night",
          "Photography using only flash"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What are the three components of the 'exposure triangle'?",
        "opts": [
          "Aperture, shutter speed, ISO",
          "Focus, zoom, flash",
          "Color, contrast, brightness",
          "Lens, sensor, memory card"
        ],
        "a": 0,
        "tier": 2
      },
      {
        "q": "What does a wider aperture (smaller f-number) generally produce?",
        "opts": [
          "A deeper depth of field",
          "A shallower depth of field, with more background blur",
          "A slower shutter speed automatically, regardless of lighting conditions",
          "No effect on depth of field"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'depth of field' refer to?",
        "opts": [
          "The precise physical distance measured between the camera body and the photographed subject",
          "The range of a photo that appears acceptably sharp, from foreground to background",
          "The resolution of the image sensor",
          "The zoom range of the lens"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does a faster shutter speed help achieve?",
        "opts": [
          "More light entering the camera",
          "Freezing fast motion with less blur",
          "A shallower depth of field automatically",
          "A wider field of view"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does increasing ISO generally introduce into a photo?",
        "opts": [
          "Sharper focus",
          "More visual noise or grain",
          "A wider aperture automatically",
          "A longer shutter speed automatically"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is 'white balance' used to correct?",
        "opts": [
          "Blurry images",
          "Color casts caused by different lighting conditions",
          "Severely underexposed images caused by insufficient light",
          "Lens distortion"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'rule of thirds' refer to in composition?",
        "opts": [
          "Always dividing a photo into exactly three colors",
          "Placing key elements along imaginary lines dividing the frame into thirds for balanced composition",
          "Taking exactly three separate photos of the same scene and choosing the best exposure afterward",
          "Using only three types of lenses"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is a 'prime lens', as opposed to a zoom lens?",
        "opts": [
          "A lens with a fixed focal length that cannot zoom",
          "A lens that can smoothly zoom to any focal length within its range",
          "A lens used only for macro photography",
          "A lens with no aperture control"
        ],
        "a": 0,
        "tier": 2
      },
      {
        "q": "What does 'RAW' format preserve, compared to JPEG?",
        "opts": [
          "Less image data for smaller file sizes",
          "Maximum uncompressed image data for greater post-processing flexibility",
          "Only black and white luminance information, discarding all captured color data",
          "Only the camera's metadata"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'bokeh' refer to in photography?",
        "opts": [
          "Sharp focus throughout the image",
          "The aesthetic quality of the blurred, out-of-focus areas of an image",
          "A type of camera flash used specifically for close-up subjects",
          "A type of black and white filter"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does a 'wide-angle lens' typically capture?",
        "opts": [
          "A narrow, zoomed-in field of view",
          "A broad field of view, useful for landscapes and interiors",
          "Only extreme close-ups of very small subjects a few inches away",
          "Only portraits"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is 'golden hour' in photography?",
        "opts": [
          "Midday, when the sun is highest",
          "The period shortly after sunrise or before sunset, known for soft, warm light",
          "Nighttime, well after sunset, when stars and the Milky Way become clearly visible",
          "Any hour with cloudy skies"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does a 'polarizing filter' commonly reduce?",
        "opts": [
          "The lens's overall optical sharpness",
          "Glare and reflections, and can enhance sky contrast",
          "The sensor's native ISO sensitivity level in low light",
          "The camera's shutter speed setting"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is 'HDR' (High Dynamic Range) photography designed to do?",
        "opts": [
          "Reduce the number of colors in an image",
          "Combine multiple exposures to capture a greater range of light and shadow detail",
          "Blur the entire image evenly",
          "Completely remove all color information from an image to create a black and white version"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'framing' refer to in photographic composition?",
        "opts": [
          "Printing a photo and putting it in a physical frame",
          "How elements are arranged within the edges of the photo",
          "Editing a photo's colors",
          "Choosing a camera's memory card size"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does a telephoto lens allow a photographer to do?",
        "opts": [
          "Capture extremely wide scenes",
          "Magnify and bring distant subjects closer",
          "Take only black and white photos regardless of settings",
          "Focus only on very close subjects"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is 'overexposure' in a photograph?",
        "opts": [
          "The image is too dark",
          "The image is too bright, with lost highlight detail",
          "The image is completely out of focus and blurry",
          "The image has too much noise"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'leading lines' refer to as a compositional technique?",
        "opts": [
          "Using lines within a scene to draw the viewer's eye toward a subject",
          "Always positioning the camera in a perfectly straight line from the subject",
          "Using only vertical lines in a photo",
          "Cropping out all lines from a photo"
        ],
        "a": 0,
        "tier": 2
      },
      {
        "q": "What is 'metering' in a camera used to determine?",
        "opts": [
          "The correct exposure settings based on the light in a scene",
          "The precise focal length currently set on the attached lens",
          "The correct white balance only",
          "The camera's battery life"
        ],
        "a": 0,
        "tier": 2
      },
      {
        "q": "What does 'burst mode' on a camera do?",
        "opts": [
          "Take a single, high-resolution photo",
          "Capture a rapid sequence of multiple photos in quick succession",
          "Automatically edit and retouch every photo immediately after it's taken",
          "Automatically print a photo"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is 'dynamic range' in the context of an image sensor?",
        "opts": [
          "The number of megapixels a sensor has",
          "The range between the darkest and brightest tones a sensor can capture with detail",
          "The exact physical dimensions and surface area of the image sensor in millimeters",
          "The sensor's power consumption"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does a camera's dual-gain (or 'ISO invariance') sensor architecture allow?",
        "opts": [
          "Unlimited zoom range",
          "Reading sensor data at different gain stages to reduce noise",
          "Faster autofocus exclusively in low-contrast lighting conditions",
          "Automatic color correction"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is the significance of a sensor's 'base ISO'?",
        "opts": [
          "It is always the highest ISO available",
          "It is the ISO setting at which the sensor achieves its optimal dynamic range and lowest noise",
          "It has no effect on image quality",
          "It directly determines the maximum physical aperture setting that the attached lens can achieve"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'diffraction' cause when a lens aperture is stopped down too far (a very high f-number)?",
        "opts": [
          "Increased sharpness at all apertures",
          "A gradual softening of image detail due to the physical bending of light waves",
          "Increased depth of field across the entire frame with no visible downsides",
          "Reduced noise in the image"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is the 'circle of confusion' used to define in optics?",
        "opts": [
          "The exact center point of a lens",
          "The blur spot beyond which a point looks out of focus",
          "A type of lens flare",
          "A specific autofocus point selected manually by the photographer"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'chromatic aberration' in a lens refer to?",
        "opts": [
          "A total loss of color in an image",
          "Color fringing caused by a lens failing to focus all colors of light at the same point",
          "Overexposure in bright scenes",
          "A lighting defect found only in cheap on-camera flash units, never caused by the lens itself"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is the mired scale used to describe in photography lighting?",
        "opts": [
          "The physical size of a light source",
          "A measure of color temperature useful for calculating color-correction gel strength",
          "The intensity of a flash in lumens",
          "The ideal physical distance a flash needs to be placed from the subject being photographed"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'Duv' represent when describing a light source's color, alongside correlated color temperature?",
        "opts": [
          "The exact wattage of the light source",
          "The deviation of a light source's color from the black-body (Planckian) locus, capturing green-magenta tint",
          "The total light output in lumens",
          "The precise shutter speed setting needed to achieve correct exposure under mixed artificial and natural lighting conditions"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'equirectangular projection' represent in 360-degree photography?",
        "opts": [
          "A flat rectangular mapping of a full spherical panorama",
          "A cropped square version of a photo",
          "A black and white conversion technique",
          "A specialized method for compressing JPEG files to reduce file size"
        ],
        "a": 0,
        "tier": 3
      },
      {
        "q": "What is 'focus stacking' used to achieve?",
        "opts": [
          "A single image with an extended depth of field, by combining multiple photos focused at different distances",
          "A blurred background effect created purely optically in a single exposure by using a very wide lens aperture",
          "A black and white conversion",
          "A faster shutter speed"
        ],
        "a": 0,
        "tier": 3
      },
      {
        "q": "What does a camera's 'guide number' indicate for a flash unit?",
        "opts": [
          "The camera's battery capacity",
          "The flash's power output, used to calculate the correct aperture for a given distance and ISO",
          "The total number of individual shots the flash unit can produce on a single full battery charge",
          "The color temperature of the flash"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'hyperfocal distance' in photography?",
        "opts": [
          "The closest distance a lens can focus",
          "The focus distance that maximizes depth of field, keeping objects from half that distance to infinity acceptably sharp",
          "The maximum optical zoom range achievable by a telephoto lens when fully extended to its very longest focal length setting",
          "The distance a flash must be placed from a subject"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does TTL (Through-The-Lens) metering for flash photography measure?",
        "opts": [
          "The color temperature of ambient light only",
          "Light reflected back through the lens to automatically calculate correct flash exposure",
          "The precise physical distance measured between the flash unit and the photographed subject only",
          "The camera's shutter speed setting"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'gel' correction used for in flash photography?",
        "opts": [
          "Cleaning the lens",
          "Adjusting the color temperature of a flash to match or contrast with ambient light",
          "Increasing the flash's power output",
          "Physically diffusing the flash's output to produce a noticeably softer quality of light only"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'crop factor' describe for a camera sensor smaller than full-frame?",
        "opts": [
          "The sensor's resolution in megapixels",
          "The multiplier applied to a lens's focal length versus a full-frame sensor",
          "The sensor's ISO range",
          "The overall speed and accuracy of the camera's autofocus system in low light"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'back-button focus' used for?",
        "opts": [
          "Increasing a camera's shutter speed",
          "Separating the autofocus trigger from the shutter button for more deliberate focus control",
          "Automatically triggering the built-in flash whenever the camera detects a dark or backlit scene",
          "Adjusting white balance"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'noise reduction' processing typically trade off against?",
        "opts": [
          "Overall battery life and continuous shooting speed during long shooting sequences",
          "Fine detail and sharpness, since it smooths away texture along with noise",
          "Color accuracy exclusively",
          "Lens sharpness"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is the purpose of a 'gray card' in photography?",
        "opts": [
          "To block excess light",
          "A neutral reference for setting accurate white balance and exposure",
          "To diffuse a flash",
          "To gently clean and protect camera image sensors between lens changes"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'vignetting' refer to in a photograph?",
        "opts": [
          "A sharp central focus point",
          "A darkening or shading of an image toward its edges or corners",
          "A noticeable increase in overall color saturation and contrast",
          "A form of motion blur"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'parallax error' in photography, particularly relevant to viewfinder cameras and panorama stitching?",
        "opts": [
          "A color shift caused by incorrect white balance",
          "A discrepancy between what a viewfinder shows and what the lens actually captures, or between multiple shots from different positions",
          "A type of lens flare caused by shooting directly into a very bright light source, entirely unrelated to viewfinder or lens positioning",
          "An error in shutter timing"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does a camera sensor's 'quantum efficiency' measure?",
        "opts": [
          "The percentage of incoming photons successfully converted into an electrical signal",
          "The number of megapixels on the sensor",
          "The highest maximum ISO setting available on the camera before visible noise appears",
          "The sensor's physical dimensions"
        ],
        "a": 0,
        "tier": 4
      },
      {
        "q": "What is 'read noise' in image sensor performance?",
        "opts": [
          "Noise introduced by the light itself (photon shot noise)",
          "Noise introduced by the sensor's electronics during the process of reading out the signal, dominant in low-light, low-ISO shadows",
          "Noise caused only by unusually high ambient or internal sensor temperatures during very long exposure times in warm shooting conditions",
          "Noise visible only in JPEG files, never RAW"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'photon shot noise' fundamentally arise from?",
        "opts": [
          "A defect in the camera's electronics",
          "The inherent statistical randomness in the arrival of photons, an unavoidable physical phenomenon",
          "Incorrect white balance settings",
          "Using a cheaply made or poorly manufactured lens constructed with substandard optical glass elements"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'demosaicing' in digital image processing?",
        "opts": [
          "Compressing a RAW file into JPEG format",
          "Reconstructing a full-color image from raw Bayer filter sensor data",
          "Removing noise from an image",
          "Manually adjusting the white balance and tint of an image afterward"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does a 'Bayer filter array' arrange on a camera sensor?",
        "opts": [
          "Exactly equal numbers of red, green, and blue filtered photosites, typically arranged in a simple repeating one-to-one-to-one checkerboard ratio across the whole sensor",
          "A pattern of red, green, and blue filters over individual photosites, typically with twice as many green filters to mimic human luminance sensitivity",
          "A single filter covering the entire sensor uniformly",
          "No color filters at all, relying purely on software"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'astigmatism' as a lens aberration?",
        "opts": [
          "A total loss of sharpness across the whole image",
          "An aberration causing points off-axis to be imaged as lines rather than points, due to the lens focusing tangential and sagittal planes differently",
          "A purely color-based defect that only affects hue accuracy, with absolutely no measurable effect on overall image sharpness or fine detail rendition",
          "An aberration that only occurs at the widest aperture"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'field curvature' describe as a lens aberration?",
        "opts": [
          "A lens element that is physically curved",
          "An aberration imaging a flat subject onto a curved surface, blurring the edges",
          "Optical distortion causing straight lines near the frame edges to visibly bow outward",
          "A defect that only affects color accuracy"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is the purpose of an anti-aliasing (optical low-pass) filter in some camera sensors?",
        "opts": [
          "To increase sharpness at all costs",
          "To slightly blur the image to reduce moiré patterning",
          "To meaningfully improve the camera's low-light autofocus performance",
          "To correct chromatic aberration"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'global shutter', as opposed to 'rolling shutter', achieve in sensor readout?",
        "opts": [
          "It reads the sensor's rows line by line in rapid sequence, causing visible skew artifacts during fast motion or camera panning",
          "It captures the entire sensor's data simultaneously, eliminating motion skew artifacts common with rolling shutter",
          "It only works for black and white sensors",
          "It reduces the sensor's dynamic range significantly"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'color science' in a camera or software context primarily concerned with?",
        "opts": [
          "The mechanical design of the camera body",
          "How raw sensor data is translated and rendered into perceptually pleasing and accurate colors",
          "The precise physical composition and manufacturing process of the camera's memory card",
          "The camera's autofocus algorithm exclusively"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'computational photography' broadly refer to?",
        "opts": [
          "Traditional single-exposure film photography with absolutely no digital processing involved",
          "Techniques using heavy digital processing, often combining exposures, beyond a single shot",
          "Photography that requires no camera at all",
          "Photography using only film cameras"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'focus breathing' in a lens?",
        "opts": [
          "A lens's tendency to lose sharpness at wide apertures",
          "A change in a lens's effective focal length (and thus field of view) as focus distance changes",
          "A lens defect that causes noticeable color shifts specifically during the autofocus process",
          "A term for a lens's autofocus speed"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'lens distortion correction' typically address, such as barrel or pincushion distortion?",
        "opts": [
          "Chromatic color fringing",
          "Geometric warping where straight lines bow outward or inward",
          "Sensor noise that appears specifically in low light conditions",
          "Incorrect exposure metering"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is a 'point spread function' (PSF) in imaging optics?",
        "opts": [
          "The exact color rendition of a lens",
          "How a single point of light is spread out (blurred) by an imaging system",
          "The widest maximum aperture setting physically available on a given lens design",
          "The sensor's total pixel count"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'exposure stacking' for noise reduction, distinct from HDR exposure blending, rely on?",
        "opts": [
          "Combining multiple identical exposures to average out random noise while preserving the same tonal range",
          "Combining differently-exposed shots to extend dynamic range",
          "Applying a uniform layer of artificial digital blur across the entire image to visually hide sensor noise",
          "Increasing ISO to amplify the signal"
        ],
        "a": 0,
        "tier": 4
      },
      {
        "q": "What is 'tethered shooting' in a professional photography workflow?",
        "opts": [
          "Shooting only with a tripod",
          "Connecting a camera directly to a computer to transfer and preview images in real time during a shoot",
          "Relying exclusively on wireless flash triggers instead of any wired camera connections during a professional shoot",
          "Editing photos exclusively on a mobile device"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'color gamut' refer to when comparing color spaces like sRGB and Adobe RGB?",
        "opts": [
          "The total file size of an image",
          "The full range of colors a color space or device can represent",
          "The sensor's total measurable dynamic range across all ISO settings",
          "The lens's maximum aperture"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'gamma correction' used for in digital imaging?",
        "opts": [
          "Adjusting a camera's ISO automatically",
          "Encoding luminance values non-linearly to match human perception and displays",
          "Automatically removing all traces of chromatic aberration from every captured RAW file",
          "Stabilizing a shaky video"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'sensor stacking' technology, such as backside-illuminated (BSI) or stacked CMOS sensors, primarily aim to improve?",
        "opts": [
          "The physical size of the camera body only",
          "Light-gathering efficiency and readout speed by rearranging or layering sensor circuitry",
          "The precise optical formula and internal glass element arrangement used inside the lens",
          "The camera's menu system"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'spectral sensitivity' of a camera sensor?",
        "opts": [
          "The sensor's response to different wavelengths of light, influencing color accuracy under different lighting",
          "The sensor's total resolution in megapixels",
          "The sensor's physical size in millimeters",
          "The sensor's absolute maximum electronically achievable shutter speed under very bright daylight shooting conditions"
        ],
        "a": 0,
        "tier": 4
      },
      {
        "q": "What does the modulation transfer function (MTF) quantify for a lens?",
        "opts": [
          "The lens's exact focal length",
          "A lens's ability to transfer contrast from subject to image at a given spatial frequency",
          "The lens's weight and physical dimensions",
          "The lens's overall autofocus speed and tracking accuracy under especially low-light shooting conditions"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is 'wavefront aberration theory' used to characterize in advanced lens design?",
        "opts": [
          "The color rendition of a lens only",
          "Deviations of a real wavefront from an ideal spherical one, used to model lens flaws",
          "The mechanical durability of a lens",
          "The specific type and internal design of the motor driving the lens's autofocus system"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'light field photography' capture, beyond what a conventional camera captures?",
        "opts": [
          "Only the total intensity of light at the sensor plane, like a conventional camera",
          "Both the intensity and the direction of light rays, enabling post-capture refocusing and depth extraction",
          "Only ultraviolet wavelengths",
          "Only a single fixed depth of field, captured with absolutely no additional directional or distance data at all"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the significance of the 'Nyquist-Shannon sampling theorem' for camera sensor resolution and moiré artifacts?",
        "opts": [
          "It has no relevance to digital imaging",
          "A sensor must sample at over twice the scene's highest spatial frequency to avoid moiré",
          "It only applies to audio recording theory, and has no relevance whatsoever to digital imaging",
          "It determines a lens's maximum aperture"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'plenoptic' (light field) camera design use micro-lens arrays to achieve?",
        "opts": [
          "Simply increasing the total resolution of the sensor",
          "Capturing directional information about incoming light rays at each point, in addition to intensity, at some cost to spatial resolution",
          "Eliminating the need for a main lens entirely",
          "Doubling the sensor's overall dynamic range instantly and permanently, with absolutely no trade-offs in resolution, noise, or manufacturing cost"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is 'computational refocusing', as enabled by light field data, mathematically achieved through?",
        "opts": [
          "Simple digital blurring applied uniformly to the whole image",
          "Synthetic aperture integration, digitally combining the light field's ray data to simulate the effect of a different focus plane after capture",
          "Physically moving the camera's lens elements back and forth after the photo has already been taken and permanently saved to the memory card",
          "Applying a fixed Gaussian blur kernel to out-of-focus areas"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'HDR tone mapping' algorithmically need to solve, given the mismatch between captured dynamic range and typical display capability?",
        "opts": [
          "Simply averaging pixel brightness across the whole image",
          "Compressing a wide captured luminance range into a narrower displayable range while attempting to preserve local contrast and perceptual detail",
          "Removing all color information",
          "Permanently increasing the sensor's native ISO sensitivity range far beyond its actual physical hardware limitations through firmware updates alone"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical basis for 'deconvolution' techniques used to sharpen images degraded by a known blur (such as motion blur or lens aberration)?",
        "opts": [
          "Random pixel manipulation with no mathematical basis",
          "Inverting the blur's convolution using knowledge of the point spread function",
          "Simply increasing the overall image contrast uniformly across the entire frame",
          "Cropping out the blurred regions entirely"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'spectral reconstruction' or hyperspectral imaging aim to recover, beyond standard RGB imaging?",
        "opts": [
          "Only a black-and-white luminance map",
          "A much finer sampling of the light spectrum per pixel, beyond RGB",
          "The exact GPS location and altitude where the photo was taken",
          "The camera's shutter count"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the significance of the 'Airy disk' in diffraction-limited optics?",
        "opts": [
          "It describes the exact color rendition of a lens",
          "It sets the smallest resolvable point possible, regardless of lens quality",
          "It is a manufacturing defect found only in cheaply made, low-quality consumer lenses",
          "It only matters for infrared photography"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'structure from motion' (SfM) photogrammetry algorithmically reconstruct from a series of overlapping photographs?",
        "opts": [
          "Only the color palette of the photographed scene",
          "A 3D geometric structure of a scene, along with camera positions, by analyzing corresponding feature points across multiple images",
          "The exact exposure settings, such as aperture, shutter speed, and ISO, recorded internally for each individual photo in the sequence",
          "A simple 2D panorama with no depth information"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical limitation described by the 'space-bandwidth product' in imaging system design?",
        "opts": [
          "A camera's maximum battery life",
          "The trade-off between an optical system's field of view and its achievable resolution",
          "The maximum file size a memory card can store",
          "The maximum possible flash duration achievable at full power output on a given flash unit model"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'coded aperture imaging' use a non-standard aperture pattern to achieve?",
        "opts": [
          "Simply reducing exposure to prevent overexposure",
          "Encoding additional information, such as depth, into the captured image via a specially patterned aperture, later decoded computationally",
          "Eliminating the need for any lens at all",
          "Increasing the camera's mechanical shutter speed range far beyond its normal factory-set limits through an unofficial firmware modification"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the underlying principle of 'time-of-flight' (ToF) depth sensing used in some computational imaging systems?",
        "opts": [
          "Measuring the color shift of reflected light",
          "Measuring the time it takes emitted light (often infrared) to travel to a subject and back, to calculate distance for each point in a scene",
          "Measuring the exact focal length of the lens used",
          "Measuring the ambient air temperature and relative humidity of the entire scene being photographed at the precise moment the shutter is released"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'super-resolution' imaging via multi-frame fusion algorithmically exploit to exceed a single frame's native resolution?",
        "opts": [
          "Random noise addition to sharpen edges artificially",
          "Sub-pixel misalignments between multiple slightly-shifted frames of the same scene, combined to reconstruct finer detail than any single frame contains",
          "A simple digital zoom with interpolation only",
          "Progressively and deliberately increasing the ISO setting on each subsequent frame of a long multi-shot burst sequence in order to brighten the final combined image"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical basis of 'polarimetric imaging' for material analysis?",
        "opts": [
          "Measuring only the total brightness of reflected light",
          "Capturing light's polarization state, revealing surface and material details standard imaging misses",
          "Measuring the exact wavelength of a single color channel",
          "Measuring the precise shutter speed required to achieve correct exposure under polarized lighting"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does the 'CIE color matching functions', foundational to modern colorimetry, mathematically model?",
        "opts": [
          "The exact spectral output of camera flashes",
          "The average human observer's color perception response across the visible spectrum, forming the basis for standardized color spaces",
          "A camera sensor's raw quantum efficiency",
          "A lens's specific chromatic aberration correction curve, as individually calibrated and officially published by its original manufacturer"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is 'computational bokeh simulation', used in smartphone portrait modes, primarily reliant on?",
        "opts": [
          "A genuinely large-aperture optical lens system alone",
          "Depth estimation, often from stereo sensors or machine learning, combined with algorithmic blurring applied selectively based on estimated subject distance",
          "Simply and crudely blurring the entire captured image uniformly across the whole frame, regardless of subject distance, depth, or fine edge detail present",
          "Increasing the ISO to introduce grain that mimics blur"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does the 'Strehl ratio' quantify in evaluating an optical system's performance?",
        "opts": [
          "The lens's physical weight relative to its focal length",
          "The ratio of an optical system's actual peak intensity at the focal point compared to the theoretical maximum of a perfect, diffraction-limited system",
          "The number of aperture blades in a lens",
          "The maximum theoretical ISO sensitivity achievable in extremely low light conditions when paired with any given lens and camera sensor combination"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the core computational challenge addressed by 'image inpainting' algorithms, as used for object removal in photo editing?",
        "opts": [
          "Increasing the overall file size of an image",
          "Plausibly synthesizing missing or removed regions of an image so they blend seamlessly with the surrounding content, using contextual and statistical inference",
          "Simply cropping the image to exclude the unwanted object",
          "Simply converting the entire edited photograph to a much lower overall resolution in order to visually disguise the exact region that was originally removed"
        ],
        "a": 1,
        "tier": 5
      }
    ]
  },
  {
    "id": "popculture",
    "name": "Popular Culture",
    "questions": [
      {
        "q": "What streaming service is known for the show 'Stranger Things'?",
        "opts": [
          "Hulu",
          "Netflix",
          "Disney+",
          "HBO Max"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "Which artist released the album '1989'?",
        "opts": [
          "Ariana Grande",
          "Taylor Swift",
          "Beyoncé",
          "Adele"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is the highest-grossing film franchise of all time?",
        "opts": [
          "Star Wars",
          "Harry Potter",
          "Marvel Cinematic Universe",
          "James Bond, spanning over sixty years of films"
        ],
        "a": 2,
        "tier": 1
      },
      {
        "q": "Which social media platform is known for short-form videos and is owned by ByteDance?",
        "opts": [
          "Instagram",
          "TikTok",
          "Snapchat",
          "Twitter"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "Who played Iron Man in the Marvel Cinematic Universe?",
        "opts": [
          "Chris Evans",
          "Robert Downey Jr.",
          "Chris Hemsworth, who also played Thor",
          "Mark Ruffalo"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is the name of the fictional wizarding school in Harry Potter?",
        "opts": [
          "Hogwarts",
          "Camelot",
          "Narnia",
          "Neverland"
        ],
        "a": 0,
        "tier": 1
      },
      {
        "q": "Which awards show honors achievements in the film industry?",
        "opts": [
          "The Grammys",
          "The Oscars",
          "The Emmys",
          "The Tonys"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "Which pop star is known as the 'Queen of Pop'?",
        "opts": [
          "Whitney Houston",
          "Madonna",
          "Cher",
          "Celine Dion"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is the name of the coffee shop in the sitcom 'Friends'?",
        "opts": [
          "MacLaren's",
          "Central Perk",
          "The Grind",
          "Joe's Diner"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "Which company produces the 'iPhone'?",
        "opts": [
          "Samsung",
          "Google",
          "Apple",
          "Microsoft"
        ],
        "a": 2,
        "tier": 1
      },
      {
        "q": "Which singer is known for the song 'Shape of You'?",
        "opts": [
          "Justin Bieber",
          "Ed Sheeran",
          "Shawn Mendes",
          "Bruno Mars"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is the name of the superhero played by Chadwick Boseman in Marvel films?",
        "opts": [
          "Spider-Man",
          "Black Panther",
          "Doctor Strange",
          "Falcon"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "Which video streaming platform is known for user-generated content, owned by Google?",
        "opts": [
          "Vimeo",
          "YouTube",
          "Twitch, popular for live streaming",
          "TikTok"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is the name of the fictional kingdom in the movie 'Frozen'?",
        "opts": [
          "Agrabah",
          "Arendelle",
          "Corona, from Tangled",
          "Genovia"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "Which reality TV format involves contestants competing to survive on an island?",
        "opts": [
          "The Bachelor",
          "Survivor",
          "Big Brother",
          "The Voice"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "Who is known as the 'King of Pop'?",
        "opts": [
          "Elvis Presley",
          "Michael Jackson",
          "Prince",
          "Justin Timberlake"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "Which company owns Instagram and Facebook?",
        "opts": [
          "Google",
          "Meta",
          "Amazon",
          "Apple"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is the name of the fictional town in 'Stranger Things'?",
        "opts": [
          "Riverdale",
          "Hawkins",
          "Sunnydale",
          "Twin Peaks"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "Which singer released the album 'Thriller'?",
        "opts": [
          "Prince",
          "Whitney Houston",
          "Michael Jackson",
          "Stevie Wonder"
        ],
        "a": 2,
        "tier": 1
      },
      {
        "q": "What is the name of the popular video game featuring a green plumber?",
        "opts": [
          "Sonic the Hedgehog",
          "Super Mario",
          "Pac-Man",
          "Donkey Kong"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "Which director is known for films like 'Inception' and 'The Dark Knight'?",
        "opts": [
          "Steven Spielberg",
          "Christopher Nolan",
          "Martin Scorsese",
          "James Cameron"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is the name of the fictional universe shared by Marvel superhero films?",
        "opts": [
          "DCEU",
          "MCU",
          "Arrowverse",
          "X-Verse"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "Which artist is associated with the persona 'Slim Shady'?",
        "opts": [
          "Kanye West",
          "Eminem",
          "Jay-Z",
          "Drake"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What was the first feature-length fully computer-animated film, released by Pixar?",
        "opts": [
          "Shrek",
          "Toy Story",
          "Finding Nemo",
          "Monsters, Inc."
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "Which K-pop group is known for the song 'Dynamite'?",
        "opts": [
          "BLACKPINK",
          "BTS",
          "EXO",
          "Stray Kids"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is the name of the fictional continent in 'Game of Thrones' where most of the story takes place?",
        "opts": [
          "Essos",
          "Westeros",
          "Sothoryos",
          "Naath"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "Which streaming platform is known for producing 'The Mandalorian'?",
        "opts": [
          "Netflix",
          "Disney+",
          "HBO Max",
          "Amazon Prime"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is the term for a movie that receives a sequel released the same year, often for marketing purposes?",
        "opts": [
          "Reboot",
          "Franchise",
          "Spin-off",
          "Prequel, set before the original"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "Which musician is known for the 'Renaissance' and 'Cowboy Carter' albums?",
        "opts": [
          "Rihanna",
          "Beyoncé",
          "Nicki Minaj",
          "Cardi B"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'binge-watching' refer to?",
        "opts": [
          "Watching a single movie multiple times",
          "Watching multiple episodes of a TV series in one sitting",
          "Watching only trailers of upcoming shows back to back",
          "Watching TV shows with subtitles"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "Which platform is known for live streaming of video games?",
        "opts": [
          "TikTok",
          "Twitch",
          "Pinterest",
          "LinkedIn"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is the name of the app known for disappearing photo and video messages?",
        "opts": [
          "Instagram",
          "Snapchat",
          "WhatsApp",
          "Telegram"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "Which actress played Hermione Granger in the Harry Potter films?",
        "opts": [
          "Bonnie Wright",
          "Emma Watson",
          "Evanna Lynch",
          "Katie Leung"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is the term for a piece of media, like a meme or video, spreading rapidly online?",
        "opts": [
          "Trending",
          "Viral",
          "Streaming",
          "Buffering"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "Which artist's real name is Stefani Joanne Angelina Germanotta?",
        "opts": [
          "Katy Perry",
          "Lady Gaga",
          "Miley Cyrus",
          "Ariana Grande"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is the name of the long-running animated sitcom featuring the Simpson family?",
        "opts": [
          "Family Guy",
          "The Simpsons",
          "South Park",
          "American Dad"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "Which award recognizes achievement in television?",
        "opts": [
          "The Grammys",
          "The Emmys",
          "The Oscars",
          "The Tonys"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'canon', in the context of a fictional franchise, refer to?",
        "opts": [
          "Fan-made content only",
          "The material officially accepted as part of a franchise's official storyline",
          "A type of movie sequel",
          "A streaming platform's original content, produced exclusively in-house by its own studio"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "Which singer released the hit song 'Blinding Lights'?",
        "opts": [
          "Drake",
          "The Weeknd",
          "Post Malone",
          "Travis Scott"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is the name of the fictional company in the TV show 'The Office' (US version)?",
        "opts": [
          "Sterling Cooper",
          "Dunder Mifflin",
          "Wayne Enterprises",
          "Initech"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'parasocial relationship' refer to in the context of celebrity or influencer culture?",
        "opts": [
          "A mutual friendship between two celebrities",
          "A one-sided psychological relationship where a person feels a sense of intimacy or connection with a media figure who is unaware of their existence",
          "A business partnership between brands and influencers",
          "A formal type of paid fan club membership that includes exclusive merchandise, newsletters, and meet-and-greet access at fan conventions"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'transmedia storytelling', as a concept in modern media franchises?",
        "opts": [
          "Telling a single story exclusively through one medium, like film",
          "A narrative strategy where a story unfolds across multiple media platforms, such as film, television, comics, and games, with each medium contributing a distinct part of the overall narrative",
          "A method for translating a story into multiple languages",
          "A term for adapting a novel directly into a single film with absolutely no changes, preserving the exact same dialogue, scene order, and structure throughout the entire adaptation process"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'the auteur theory' in film criticism attribute a film's artistic vision primarily to?",
        "opts": [
          "The film studio that financed it",
          "The director, viewed as the primary creative author of a film, whose personal stylistic and thematic signature can be traced across their body of work",
          "The lead actor's performance alone",
          "The screenwriter exclusively, independent of the director, whose original script alone is treated as the sole source of a film's artistic vision"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'stan culture', as a term describing intense fandom behavior, generally characterized by?",
        "opts": [
          "Casual, occasional interest in a celebrity's work",
          "Highly devoted, organized fans who intensely support and defend a celebrity or franchise",
          "A formal fan club with paid membership dues and an official quarterly newsletter",
          "A term used only for sports fandom, not music or film"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'the Bechdel test', a popular though informal metric in film criticism, evaluate?",
        "opts": [
          "A film's box office success relative to its budget",
          "Whether a work features two named women talking to each other about something other than a man",
          "A film's historical accuracy",
          "A film's overall critical reception and awards recognition among professional film critics worldwide"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is a 'reboot' in the context of film and television franchises, as distinguished from a sequel?",
        "opts": [
          "A continuation of the existing storyline with the same characters",
          "A new version of an existing work that restarts a franchise's continuity, often reintroducing characters and storylines from the beginning",
          "A spin-off following a minor character from the original",
          "A remake using footage directly recycled from the original film, spliced together with only a small handful of newly shot connecting scenes"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does the term 'Streisand effect' refer to?",
        "opts": [
          "A marketing technique for increasing a celebrity's popularity",
          "The phenomenon where an attempt to hide, remove, or suppress information has the unintended effect of publicizing it more widely",
          "A specialized statistical method used by studios for calculating projected box office revenue well ahead of a film's release date",
          "A specific type of transition-heavy film editing technique"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'algorithmic curation', as it applies to platforms like Spotify, Netflix, or TikTok?",
        "opts": [
          "Content selected entirely by human editors with no automation",
          "The use of automated algorithms, often based on user data and behavior, to personalize and recommend content to individual users, shaping what they see or hear",
          "A method for organizing content strictly by release date",
          "A narrow term referring only to search engine results ranked purely by keyword relevance, publication date, and overall website authority score alone"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'fandom' generally refer to as a sociological and cultural phenomenon?",
        "opts": [
          "A single individual's interest in a show",
          "A community of fans sharing a passionate interest in a work or celebrity",
          "An official fan organization formally run and funded by a media studio",
          "A term used exclusively for sports fan communities"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'cancel culture' generally understood to describe?",
        "opts": [
          "A method for a studio to officially cancel a TV show",
          "A phenomenon in which individuals, often public figures, face significant public backlash, boycotts, or withdrawal of support in response to perceived offensive statements or actions",
          "A formal legal process for revoking a celebrity's contract",
          "A broad economic term describing declining box office revenues industry-wide, often attributed to growing streaming competition and steadily rising ticket prices nationwide"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'the male gaze', a concept introduced by film theorist Laura Mulvey, critique in visual media?",
        "opts": [
          "The specific technical camera angles and lens choices used in big-budget action sequences",
          "Visual media framing and presenting women from a heterosexual male perspective",
          "A term describing box office demographics",
          "A term for a specific genre of film"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is a 'spin-off' in television and film?",
        "opts": [
          "A film adaptation of a video game",
          "A new show or film that focuses on a character, setting, or concept from an existing work, expanding the franchise in a new direction",
          "A remake of a classic film using the same script",
          "A one-off crossover episode airing between two otherwise entirely unrelated television shows produced by different networks"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'IP' commonly refer to in the entertainment industry business context?",
        "opts": [
          "Internet Protocol, referring to streaming technology",
          "Intellectual Property, referring to a recognizable, ownable creative property like a character or franchise that can be adapted or licensed across media",
          "A type of film rating classification",
          "A specific promotional term describing a film's official international theatrical premiere event held in a major foreign market ahead of wide release"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'the uncanny valley', a concept relevant to CGI and animated character design?",
        "opts": [
          "A visual effects technique for creating realistic explosions",
          "The unsettling feeling evoked when a humanlike figure, such as a CGI character, appears almost, but not quite, realistically human, falling into a dip in viewer comfort",
          "A term for a poorly reviewed film sequel",
          "A specific film subgenre focused exclusively on supernatural horror, psychological terror, and graphic slasher-style violence in independently produced low-budget films"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'meme stock' refer to, as a term that emerged from internet and pop culture intersecting with finance?",
        "opts": [
          "A stock recommended by a professional financial analyst",
          "A stock whose price is driven significantly by social media hype and coordinated retail investor interest, rather than traditional fundamental valuation",
          "A stock issued exclusively by a social media company",
          "A specific accounting term describing a publicly traded company's total annual advertising, marketing, and public relations spending budget"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'the culture industry', a critical concept developed by theorists Theodor Adorno and Max Horkheimer?",
        "opts": [
          "A term praising the diversity and artistic value of mass-produced entertainment",
          "A critical concept describing how mass-produced popular culture and entertainment can function to standardize consumer tastes and pacify audiences, serving capitalist economic interests",
          "A government agency regulating film content",
          "A specific term referring to the film and television industry's labor unions and their ongoing collective bargaining agreements and contract negotiations with major studios"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'appointment television' refer to, as a term increasingly contrasted with streaming habits?",
        "opts": [
          "Television shows that require a subscription to watch",
          "The traditional practice of watching a television show live, at its scheduled broadcast time, rather than on-demand or via streaming later",
          "A show exclusively about scheduling and time management",
          "A specific industry term used only for televised award show ceremonies broadcast live to national audiences each awards season"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'the star system', as a historical concept in the film industry, particularly associated with old Hollywood studios?",
        "opts": [
          "A rating system for classifying films by quality",
          "A studio practice of cultivating and contractually controlling actors as marketable 'stars'",
          "A system for ranking films at award ceremonies",
          "A specific marketing term used only for astronomy-themed science fiction films and documentaries"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'the long tail', a concept applied to media and content consumption in the digital age, describe?",
        "opts": [
          "The trend of films becoming longer in runtime over time",
          "Digital platforms letting many niche, low-demand items collectively capture major market share",
          "A specific industry term describing only a film's opening weekend box office performance",
          "A method for editing film credits"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'parasocial breakup', a term used in media psychology?",
        "opts": [
          "The literal breakup between two celebrities in a romantic relationship",
          "The sense of loss or grief some audience members experience when a favored media figure, show, or character 'ends', such as when a beloved TV series is cancelled",
          "A term for a celebrity's divorce announcement",
          "A specific promotional marketing strategy used by television networks for launching an entirely brand new show in order to attract first-time viewers"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'cultivation theory', developed by George Gerbner, propose about the long-term effects of television viewing?",
        "opts": [
          "Television has no measurable effect on viewers' perceptions of reality",
          "Heavy, long-term TV exposure gradually shapes viewers' perceptions to match what's depicted",
          "Television viewing is understood to only meaningfully affect children, never fully grown adults",
          "The theory applies exclusively to news programming"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'the spiral of silence theory', developed by Elisabeth Noelle-Neumann, applied to public opinion and media?",
        "opts": [
          "A theory stating public opinion is always accurately reflected by media coverage",
          "A theory proposing that individuals holding a minority opinion tend to self-censor and stay silent in public due to fear of social isolation, while perceived majority opinions become increasingly vocal, creating a 'spiral' effect",
          "A theory about how silent films influenced modern cinema",
          "A theory describing the long-term commercial and circulation decline of print newspapers and magazines throughout the twentieth century, driven primarily by the rise of broadcast and later digital media competition"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'agenda-setting theory' in media studies, developed by Maxwell McCombs and Donald Shaw, argue about media's influence on public perception?",
        "opts": [
          "Media has no significant power to influence public discourse",
          "While media may not always successfully tell people what to think, it has significant power to influence what issues people think about, by determining which topics receive prominent and repeated coverage",
          "Media coverage is always a neutral, unbiased mirror of pre-existing public priorities",
          "This theory is considered by most contemporary media scholars to apply exclusively to social media platforms, and to have no relevance whatsoever to traditional print or broadcast news outlets"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'para-social interaction theory', originally developed by Donald Horton and Richard Wohl in 1956, foundational for understanding regarding audience-media figure relationships?",
        "opts": [
          "It describes only interactions between two real, mutually acquainted people",
          "It described the illusory sense of face-to-face relationship that media audiences, particularly of early television personalities, could develop with a persona, laying groundwork for later parasocial relationship research applied to modern influencer and celebrity culture",
          "It is a theory concerned exclusively with radio broadcasting technology",
          "It denies that any meaningful psychological connection can form between audiences and media figures, treating all such reported feelings of connection as fabricated or purely imaginary constructs with no basis whatsoever in genuine audience experience or documented psychological research"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'convergence culture', a concept developed by media scholar Henry Jenkins, describe about contemporary media consumption?",
        "opts": [
          "A trend toward audiences consuming media through a single, unified device only",
          "The flow of content across multiple media platforms, combined with increasingly active, participatory audience behavior and the cooperation between multiple media industries, blurring the line between media producers and consumers",
          "A decline in the overall diversity of available media content",
          "A narrow technical term describing only the physical hardware merger of television broadcasting infrastructure and internet cabling systems, entirely unrelated to audience behavior, participatory culture, or industry practices"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'the encoding/decoding model', developed by Stuart Hall, propose about how media audiences interpret media messages?",
        "opts": [
          "Audiences passively receive and accept a media message's intended meaning exactly as encoded by its producers",
          "Media producers encode messages with a preferred meaning, but audiences actively decode these messages, potentially interpreting them through dominant, negotiated, or oppositional reading positions shaped by their own social context",
          "Media messages have no fixed meaning encoded by producers at all",
          "This model is considered by its critics to apply exclusively to written text and print journalism, having no relevance whatsoever to audiovisual media such as television, film, radio broadcasting, or digital streaming content"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'participatory culture', as theorized by Henry Jenkins, characterize about certain contemporary fan and online communities?",
        "opts": [
          "Communities where members are purely passive consumers with no creative contribution",
          "Communities with relatively low barriers to artistic expression and civic engagement, strong support for creating and sharing one's creations, and informal mentorship in which experienced members pass knowledge to novices",
          "A term describing only officially sanctioned studio marketing campaigns",
          "A framework that its harshest critics argue is applicable exclusively to video game communities, having no relevance whatsoever to fan fiction writers, cosplay communities, or any other creative online fandoms"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'hyperreality', a concept developed by theorist Jean Baudrillard, particularly relevant to analyzing media and popular culture saturation?",
        "opts": [
          "The direct, unmediated experience of objective physical reality",
          "When media simulations become so pervasive they replace or outdo the reality they represent",
          "A term describing high-definition video technology",
          "A concept its critics argue is limited exclusively to virtual reality gaming hardware"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'the third-person effect', a concept in media effects research developed by W. Phillips Davison, describe?",
        "opts": [
          "The tendency for individuals to believe media messages, such as advertising or propaganda, affect other people more than themselves",
          "A film technique involving a third-person camera perspective",
          "A term for the third season of a television series",
          "A specific statistical method used only by ratings agencies for measuring nightly television viewership across demographic groups"
        ],
        "a": 0,
        "tier": 4
      },
      {
        "q": "What is 'the theory of media dependency', developed by Sandra Ball-Rokeach and Melvin DeFleur, propose about the relationship between audiences, media, and society?",
        "opts": [
          "Audiences and media systems exist in complete isolation from broader social systems",
          "The degree to which individuals depend on media for information and understanding of their social world is shaped by broader social conditions of instability and by the range of information functions the media system uniquely fulfills",
          "Media dependency is a fixed, universal constant unaffected by social context",
          "This theory is considered by many of its critics to apply exclusively to an individual's dependency on a single specific news outlet, rather than to the broader media system or surrounding social context as a whole in any given society"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'the theory of media convergence and industry conglomeration' critically examine regarding contemporary entertainment industry structure?",
        "opts": [
          "The trend toward increasingly fragmented, independently owned media companies with no cross-ownership",
          "The increasing concentration of ownership across previously distinct media sectors, such as film, television, publishing, and internet platforms, within a small number of large conglomerates, raising concerns about content diversity and market power",
          "A term describing only technical broadcast signal convergence",
          "A narrow regulatory framework concerned exclusively with government oversight and licensing of broadcast media frequencies, entirely unrelated to questions of corporate ownership structures, mergers, or market concentration in the industry"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'reception theory' in cultural and media studies broadly concerned with, as an approach distinguishing it from earlier text-centered analysis?",
        "opts": [
          "Analyzing a media text in complete isolation from any audience interpretation",
          "How actual audiences actively interpret, negotiate, and make meaning from cultural texts, given their diverse social, cultural, and historical contexts, rather than assuming a single fixed meaning inherent in the text itself",
          "A method concerned exclusively with box office reception, i.e., commercial success",
          "A theory its harshest critics claim is limited exclusively to the reception of literary novels, with no meaningful application whatsoever to film, television, or any other audiovisual and digital media forms"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'platformization', as a concept in critical media and internet studies, describe about the contemporary media and cultural ecosystem?",
        "opts": [
          "A decline in the influence of large digital platforms on cultural production",
          "The increasing penetration of digital platforms' economic and infrastructural logics, such as algorithmic curation and data extraction, into the operations of cultural industries and social life more broadly",
          "A term describing the physical construction of streaming servers",
          "A narrow academic framework concerned exclusively with e-commerce platforms and online retail logistics, entirely unrelated to cultural production or the traditional legacy media industries"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'the celebrity-industrial complex', as a critical framing in media studies, meant to highlight?",
        "opts": [
          "A term for a single celebrity's personal business ventures",
          "The interconnected network of industries, including public relations, advertising, and media outlets, that collectively produce, promote, and commercially exploit celebrity as a cultural and economic phenomenon",
          "A government agency regulating celebrity endorsements",
          "A narrow political science term describing only a celebrity's own personal involvement in political campaigns, charitable fundraising galas, and public policy endorsements exclusively, unrelated to any commercial or media industry"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'affective labor', a concept from autonomist Marxist theory increasingly applied to influencer and fan culture, refer to?",
        "opts": [
          "Physical, manual labor performed in a media production studio",
          "Work that primarily produces or manipulates emotional experiences and social connections, such as an influencer's ongoing effort to cultivate an intimate-feeling relationship with their audience",
          "A legal term for entertainment industry labor contracts",
          "A narrow sociological term describing purely unpaid, voluntary fan activities, such as fan fiction writing, that carry absolutely no economic dimension or commercial value whatsoever"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'the theory of media logic', developed by David Altheide and Robert Snow, propose about how media shape social institutions?",
        "opts": [
          "Media simply and neutrally transmit events occurring within other social institutions without altering them",
          "Non-media social institutions, such as politics or religion, increasingly adapt their own practices and modes of presentation to conform to the format, rhythm, and grammar characteristic of media, in a process sometimes termed 'mediatization'",
          "Media logic refers exclusively to technical broadcast engineering standards",
          "This theory is considered by many of its critics to apply only narrowly to print journalism formatting conventions, having no bearing whatsoever on broadcast television, radio, or digital and social media formats used today"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'fan labor' as studied in fan studies scholarship, drawing on thinkers like Henry Jenkins and later critical scholars, complicate about the traditional producer-consumer distinction?",
        "opts": [
          "Fans are purely passive consumers who contribute nothing of value to a media franchise",
          "Fans often perform substantial unpaid creative labor that generates real value for franchises",
          "Fan labor refers exclusively to fans working directly for a studio as paid employees",
          "This concept applies only to fandoms formed before the internet era"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'the attention economy', a term popularized in media and internet studies drawing on economist Herbert Simon's insight, fundamentally premised on?",
        "opts": [
          "The idea that information is a scarce resource requiring careful rationing by producers",
          "The idea that in an environment of information abundance, human attention itself becomes the scarce resource that media platforms and content producers must compete to capture and monetize",
          "A term describing traditional television advertising rates exclusively",
          "A narrow bureaucratic framework concerned exclusively with academic research grant funding allocation across university science and humanities departments nationwide each year"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'the theory of media events', developed by Daniel Dayan and Elihu Katz, characterize as a distinct category of televised occurrence?",
        "opts": [
          "Any regularly scheduled television program",
          "Live, planned broadcasts of major ceremonial events that unite dispersed audiences",
          "A term for breaking news coverage of unexpected disasters",
          "A narrow category limited exclusively to fictional, scripted television programming"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'commodity fetishism as applied to celebrity and influencer branding', drawing on Marxist cultural theory, argue about the perceived value of celebrity-endorsed products?",
        "opts": [
          "Product value is determined purely by objective, functional utility with no social dimension",
          "A celebrity's aura gets imbued into a product, obscuring the labor behind it and inflating its value",
          "This concept applies only to physical, tangible goods, never digital products",
          "Commodity fetishism denies that celebrity endorsement has any measurable commercial effect"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'the postmodern condition of media saturation', as theorized by Fredric Jameson in relation to late capitalism, argue about the relationship between pastiche and pop-cultural production?",
        "opts": [
          "Contemporary popular culture predominantly produces genuinely original stylistic innovation with minimal reference to prior styles",
          "Jameson argues contemporary cultural production is characterized by pastiche, the neutral, often nostalgic imitation and recombination of past styles without the critical or satirical intent of parody, reflecting a broader postmodern loss of historical depth and the commodification of style itself under late capitalism",
          "This theory rejects any connection between economic structures and cultural production",
          "Jameson's theory is considered by many of his harshest critics to apply exclusively to literary fiction and poetry, having no meaningful application whatsoever to film, music, television, or any other visual or audiovisual popular culture medium produced during the entirety of the twentieth century"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'the culture industry thesis' (Adorno and Horkheimer) versus later 'active audience' theories (associated with cultural studies scholars like Stuart Hall and John Fiske) as a central debate in media and cultural theory?",
        "opts": [
          "Both positions agree entirely that audiences are purely passive dupes of mass media manipulation",
          "Whether mass culture pacifies passive audiences, or whether audiences actively rework media meanings",
          "This debate concerns exclusively the technical quality of film production",
          "Both theoretical camps reject any possibility of audience agency whatsoever"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'platform capitalism theory', as developed by scholars like Nick Srnicek, argue characterizes the underlying business logic of contemporary digital media and cultural platforms?",
        "opts": [
          "Platforms function identically to traditional twentieth-century industrial manufacturing firms with no distinct economic logic",
          "Platforms function as a distinct economic form organized around extracting, processing, and monetizing data generated by user interactions, positioning themselves as necessary intermediaries between different user groups, such as content creators, advertisers, and audiences, in ways that generate significant market power",
          "Platform capitalism theory denies that digital platforms have any significant economic power",
          "This theory is considered by many of its critics to apply exclusively and narrowly to social media platforms specifically, excluding streaming services, e-commerce marketplaces, ride-hailing apps, or any other digital platform business model entirely, regardless of industry or country of operation"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'the semiotic theory of myth', as developed by Roland Barthes in 'Mythologies', for analyzing popular culture and advertising imagery?",
        "opts": [
          "Barthes argues cultural signs and images have a single, fixed, universally agreed-upon meaning with no ideological dimension",
          "Barthes proposes a second-order signification system whereby culturally specific, historically contingent ideas are naturalized and presented as if they were simply innate, universal 'common sense', with popular cultural imagery, such as advertising, serving as a key site where such contemporary 'myths' are produced and circulated",
          "This theory applies exclusively to written literary texts, excluding visual media",
          "Barthes's semiotic theory of myth is often misread as rejecting any connection whatsoever between cultural signs, images, and underlying political or economic ideology, a misreading his own later work explicitly and directly contradicts in considerable detail across several later published essays and books"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'the theory of algorithmic identity', as explored in critical platform and internet studies, argue about how recommendation and personalization algorithms shape contemporary subjectivity?",
        "opts": [
          "Algorithms have no influence whatsoever on how individuals come to understand and present their own identities",
          "Algorithms, through continuous data collection, classification, and personalized content delivery, increasingly participate in constructing and reinforcing particular versions of a user's identity and taste, raising questions about agency, filter bubbles, and the co-production of selfhood between individuals and computational systems",
          "This theory applies exclusively to explicit, user-declared identity categories, ignoring inferred or predicted characteristics",
          "Algorithmic identity theory, despite its name, is in fact concerned exclusively with technical cybersecurity protocols, network encryption standards, and data breach prevention measures, having nothing whatsoever to do with culture, personal taste, or identity formation online, according to a common but mistaken characterization"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'the concept of the 'imagined community' (Benedict Anderson) applied to transnational fandom' for understanding globally dispersed fan communities organized around media franchises?",
        "opts": [
          "Fans in different countries who engage with the same franchise share no meaningful sense of collective identity or belonging",
          "Geographically dispersed fans who'll never meet can still feel strong shared belonging via a common text",
          "This concept applies exclusively to fandoms organized around literal national identity",
          "The theory denies that digital media can support any meaningful sense of community formation"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'necropolitics applied to fandom and cancel culture research' (drawing on Achille Mbembe's broader theoretical concept) critically examine regarding intense public backlash against public figures?",
        "opts": [
          "The theory has no meaningful application outside of formal state politics and warfare",
          "Some scholars analyze intense public 'cancellation' as a form of symbolic social 'death' inflicted by networked publics",
          "This concept is universally accepted without controversy as directly equivalent to Mbembe's original political theory",
          "Necropolitics theory rejects any connection between digital media practices and broader theories of power"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'para-social relationship theory's evolution to encompass artificial intelligence and virtual influencer phenomena' in contemporary media psychology research?",
        "opts": [
          "Parasocial relationship theory is considered entirely inapplicable to relationships with non-human or synthetic media personas",
          "Researchers have extended classic parasocial relationship theory to examine how audiences form similar one-sided emotional attachments to AI chatbots, virtual influencers, and computer-generated personas, raising new questions about the boundaries of parasociality when the 'media figure' has no underlying human consciousness at all",
          "This research area has been fully resolved with no remaining open theoretical questions",
          "Virtual influencer research is concerned exclusively with the technical 3D animation, rigging, and motion-capture methods used to create these computer-generated personas, having nothing whatsoever to do with audience psychology, emotional attachment, or parasocial theory more broadly in any meaningful way"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'the concept of 'affective publics'', developed by media scholar Zizi Papacharissi, propose about how emotion and sentiment function in networked, social-media-driven political and cultural discourse?",
        "opts": [
          "Networked publics form and coordinate collective action based purely on rational, emotion-free deliberation",
          "Papacharissi argues that contemporary networked publics are frequently organized and mobilized around shared structures of feeling and emotional expression circulating through social media, such as a shared hashtag's affective charge, rather than solely through traditional rational-critical public discourse",
          "This theory rejects any role for social media in shaping contemporary public discourse",
          "Affective publics theory is considered by critics to apply exclusively to entertainment fandom hashtags and fan campaigns, excluding any form of political mobilization, protest movements, or civic organizing on social media platforms whatsoever, according to a narrow reading of Papacharissi's original research"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'platform vernacular' and 'algorithmic folklore' as emerging concepts in the study of internet and meme culture?",
        "opts": [
          "Internet culture is considered to have no distinctive communicative conventions or creative traditions of its own",
          "Scholars use these concepts to analyze how users develop platform-specific communicative genres, in-group conventions, and creative folk practices that are shaped by, and in turn creatively work around or exploit, the particular technical affordances and algorithmic logics of a given platform",
          "These concepts apply exclusively to formally published, professionally produced digital content",
          "Platform vernacular theory denies any meaningful difference in communicative style, tone, or format between different social media platforms, treating all online communication as functionally identical regardless of context, audience, or the specific technical affordances of the platform in question"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'the theory of cultural capital', developed by Pierre Bourdieu and widely applied to fandom and taste hierarchies in pop culture studies, argue about how aesthetic preferences function socially?",
        "opts": [
          "Aesthetic taste is a purely individual, biologically determined preference unrelated to social position",
          "Taste and aesthetic preferences function as a form of 'cultural capital' that reflects and reproduces social class distinctions, with certain forms of cultural knowledge and consumption serving to signal and maintain social status and group belonging",
          "Bourdieu's theory has no relevance to contemporary popular or fan culture, applying only to historical high art",
          "Cultural capital theory denies that any hierarchy of taste exists in contemporary society, treating all aesthetic preferences, from opera to reality television, as entirely equal and socially meaningless distinctions with no bearing on class or status whatsoever"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'the concept of 'media rituals'' (Nick Couldry) for understanding how audiences engage with mediated events like award shows or season finales?",
        "opts": [
          "Media consumption is theorized as an entirely instrumental, non-ritualistic activity with no symbolic dimension",
          "Couldry argues that certain forms of media engagement function as ritualized practices that implicitly reinforce belief in the media's own centrality and authority in organizing shared social reality, even when participants don't consciously articulate this belief",
          "This concept applies exclusively to religious broadcasting, excluding secular media events",
          "Media ritual theory denies that television, streaming, or any broadcast medium can generate any form of shared collective experience, treating all media consumption as a purely private, individual, and non-communal act with no social or symbolic dimension whatsoever"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'para-textual analysis', a concept adapted from literary theorist Gérard Genette and applied to film and television studies by scholars like Jonathan Gray, examine regarding the meaning of a media text?",
        "opts": [
          "Only the primary media text itself, in complete isolation from any surrounding materials",
          "The surrounding materials, such as trailers, posters, merchandise, reviews, and fan-created content, that shape and mediate audience expectations and interpretations of a primary text, often before, during, and after the text itself is even consumed",
          "Paratextual analysis is concerned exclusively with a film's opening title sequence",
          "This approach rejects any influence of marketing materials, trailers, or promotional posters on audience interpretation, insisting that only the primary film or show itself shapes viewer expectations and understanding in any meaningful way"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'the concept of media franchises as 'storyworlds'' (drawing on narratology and transmedia theory) for understanding contemporary intellectual property strategy?",
        "opts": [
          "A storyworld is understood as a single, fixed narrative told through exactly one medium",
          "An expansive fictional universe with its own internal logic that can generate many stories across media",
          "This concept applies only to video game narratives, excluding film or television franchises",
          "Storyworld theory denies that fictional universes can meaningfully expand beyond their original medium"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'the theory of 'networked publics'' (danah boyd) argue characterizes audiences and social groups formed through social media, as distinct from earlier mass-media audiences?",
        "opts": [
          "Networked publics are structurally identical to traditional broadcast-era mass audiences with no distinguishing characteristics",
          "Networked publics are shaped by specific technical affordances of social media, such as persistence, replicability, scalability, and searchability of content, which fundamentally alter how social groups form, communicate, and are surveilled compared to publics formed around older broadcast media",
          "This theory denies that digital technology has any meaningful effect on how social groups form",
          "Networked publics theory applies exclusively to professional journalism audiences and their consumption of vetted, editorially curated news content, excluding ordinary social media users entirely from its scope of analysis whatsoever, regardless of platform or social context"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'the concept of 'quality television'' as a critically contested category in television studies, particularly regarding shows like prestige cable dramas?",
        "opts": [
          "Quality is understood as a purely objective, universally agreed-upon technical standard with no social or industrial dimension",
          "Scholars critically examine how the label 'quality television' is itself a discursively and industrially constructed category, often reflecting particular class-inflected aesthetic values, production contexts (like premium cable), and marketing strategies, rather than a neutral, self-evident measure of artistic merit",
          "This concept has never been subject to any critical or scholarly debate",
          "Quality television theory applies exclusively to publicly funded, state-run broadcast television networks, excluding commercial cable channels, premium subscription services, and streaming platforms entirely from any critical consideration whatsoever, regardless of production budget or creative ambition"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'the theory of 'convergence' and 'residual', 'dominant', and 'emergent' cultural forms' (drawing on Raymond Williams's cultural materialism) offer for analyzing shifts in contemporary media technology and popular culture?",
        "opts": [
          "Cultural change is understood as a sudden, total replacement of old forms by new ones with no overlap or coexistence",
          "Williams's framework: culture at any moment mixes residual, dominant, and emergent forms together",
          "This framework applies exclusively to literary history, with no relevance to television, film, or digital media",
          "Williams's theory denies that any historical continuity exists between different eras of media technology"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'the concept of 'media capital'' (developed by scholar Michael Curtin) for understanding the geography of global media production hubs like Hollywood, Hong Kong, or Mumbai?",
        "opts": [
          "Global media production is understood to be evenly and randomly distributed across all countries with no concentration in particular hubs",
          "Curtin's concept examines how certain cities become concentrated 'media capitals' due to a specific confluence of factors including accumulated creative talent, favorable logistical and regulatory conditions, and trajectories of economic and cultural power, rather than these hubs being predetermined by simple population size or national government policy alone",
          "This concept applies exclusively to the historical development of Hollywood, with no comparative application to other global production centers",
          "Media capital theory denies that geography, location, or regional infrastructure has any bearing whatsoever on global media industry structure, treating all production hubs as functionally interchangeable regardless of local talent pools, regulation, history, or the surrounding cultural and political context of each individual region"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'the theory of 'produsage'' (Axel Bruns), blending 'producer' and 'user', argue about the boundary between content creation and consumption in digital fan and remix culture?",
        "opts": [
          "Content production and consumption remain entirely separate, non-overlapping activities in the digital age, exactly as in the broadcast era",
          "In many collaborative online environments, such as fan wikis, remix communities, and social platforms, the traditional distinction between producers and consumers collapses, as participants continuously and collaboratively both create and consume content in an ongoing, iterative process",
          "Produsage theory applies exclusively to open-source software development, with no relevance to media or fan culture",
          "This theory denies that any meaningful creative contribution can ever come from ordinary media users, insisting that only professionally trained and formally credentialed producers are capable of genuine creative work of any real cultural or artistic value whatsoever"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'the concept of 'taste publics'' (Herbert Gans) for understanding the fragmentation of contemporary popular culture consumption?",
        "opts": [
          "All audiences within a society share an identical, undifferentiated set of cultural preferences",
          "Gans argued that a society contains multiple coexisting 'taste publics', each with distinct aesthetic standards and preferences shaped by factors like education and social class, challenging the idea of a single, unified 'mass culture' consumed identically by everyone",
          "This concept applies exclusively to musical genre preferences, excluding film or television",
          "Taste publics theory was developed specifically and exclusively to describe modern algorithmic content recommendation systems used by streaming platforms, with absolutely no earlier sociological basis or connection to Gans's original mid-twentieth-century research"
        ],
        "a": 1,
        "tier": 5
      }
    ]
  },
  {
    "id": "webdev",
    "name": "Web Development",
    "questions": [
      {
        "q": "What does HTML stand for?",
        "opts": [
          "HyperText Markup Language",
          "High Text Modern Language",
          "HyperTransfer Markup Language",
          "Home Tool Markup Language"
        ],
        "a": 0,
        "tier": 1
      },
      {
        "q": "What does CSS stand for?",
        "opts": [
          "Computer Style Sheets",
          "Cascading Style Sheets",
          "Creative Style Syntax",
          "Colorful Style Sheets"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "Which HTML tag creates a hyperlink?",
        "opts": [
          "<link>",
          "<href>",
          "<a>",
          "<url>"
        ],
        "a": 2,
        "tier": 1
      },
      {
        "q": "Which language is primarily used to add interactivity to web pages?",
        "opts": [
          "HTML",
          "CSS",
          "JavaScript",
          "XML, used for structured data"
        ],
        "a": 2,
        "tier": 1
      },
      {
        "q": "What does URL stand for?",
        "opts": [
          "Uniform Resource Locator",
          "Universal Reference Link",
          "Unified Resource Locator",
          "User Redirect Link"
        ],
        "a": 0,
        "tier": 1
      },
      {
        "q": "Which tag is used for the largest heading in HTML?",
        "opts": [
          "<h6>",
          "<h1>",
          "<head>",
          "<header>"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What symbol is used to select a class in CSS?",
        "opts": [
          "#",
          "*",
          ".",
          "&"
        ],
        "a": 2,
        "tier": 1
      },
      {
        "q": "What does 'www' stand for?",
        "opts": [
          "World Wide Web",
          "Web Wide World",
          "World Web Wide",
          "Wide World Web"
        ],
        "a": 0,
        "tier": 1
      },
      {
        "q": "Which HTTP method is typically used to retrieve data without modifying it?",
        "opts": [
          "POST",
          "GET",
          "DELETE",
          "PUT"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What file extension is typically used for JavaScript files?",
        "opts": [
          ".java",
          ".js",
          ".jsx",
          ".script"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does 'www' commonly form part of, in a web address?",
        "opts": [
          "A file's storage location",
          "A website's domain address",
          "A computer's hard drive",
          "A type of virus"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a 'web browser'?",
        "opts": [
          "A programming language",
          "Software used to access and view websites",
          "A type of relational database management system",
          "A network cable"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does 'http' stand for?",
        "opts": [
          "HyperText Transfer Protocol",
          "High Traffic Transfer Process",
          "Home Text Transport Protocol",
          "Hyperlink Transfer Program"
        ],
        "a": 0,
        "tier": 1
      },
      {
        "q": "What is a 'website'?",
        "opts": [
          "A single physical computer connected directly to the internet",
          "A collection of related web pages accessible via the internet",
          "A type of email",
          "A programming language"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "Which of these is a web browser?",
        "opts": [
          "Microsoft Word",
          "Google Chrome",
          "Photoshop",
          "Excel"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is an 'image' file format commonly used on the web?",
        "opts": [
          "DOCX",
          "JPEG",
          "XLSX",
          "EXE"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What key is commonly pressed to refresh a web page?",
        "opts": [
          "F1",
          "F5",
          "Esc",
          "Tab"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a 'hyperlink'?",
        "opts": [
          "A static picture file embedded in a page",
          "A clickable link that takes you to another webpage or resource",
          "A common mistake that unexpectedly crashes a running program",
          "A secret credential used to log in"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does 'download' mean in a web context?",
        "opts": [
          "To transfer a file from your device to the internet",
          "To transfer a file from the internet to your device",
          "To delete a file",
          "To open a file without saving it"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a 'password' used for on a website?",
        "opts": [
          "Decorating a webpage with colors, fonts, and images",
          "Authenticating and securing access to an account",
          "Formatting text",
          "Displaying an image"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does DOM stand for?",
        "opts": [
          "Document Object Model",
          "Data Object Method",
          "Direct Output Module",
          "Document Order Map"
        ],
        "a": 0,
        "tier": 2
      },
      {
        "q": "Which CSS property controls the space inside an element's border?",
        "opts": [
          "margin",
          "padding",
          "gap, used in flex and grid layouts",
          "inset"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is JSON short for?",
        "opts": [
          "JavaScript Object Notation",
          "Java Standard Object Network",
          "Joint Syntax Object Notation",
          "JavaScript Ordered Numbers"
        ],
        "a": 0,
        "tier": 2
      },
      {
        "q": "What does API stand for?",
        "opts": [
          "Application Programming Interface",
          "Advanced Programming Instruction",
          "Applied Protocol Integration",
          "Automated Program Index"
        ],
        "a": 0,
        "tier": 2
      },
      {
        "q": "Which JavaScript keyword declares a variable that cannot be reassigned?",
        "opts": [
          "var",
          "let",
          "const",
          "static"
        ],
        "a": 2,
        "tier": 2
      },
      {
        "q": "What is the purpose of the <head> tag in HTML?",
        "opts": [
          "To display the main visible content",
          "To contain metadata about the document, like the title and stylesheet links",
          "To create a large, bold visible heading centered at the very top of the page",
          "To link to images only"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'responsive design' refer to in web development?",
        "opts": [
          "A website that loads very quickly",
          "Designing a website to adapt well across different screen sizes and devices",
          "A website that responds automatically to voice commands and hand gestures",
          "A website with lots of animations"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "Which CSS property is used to change text color?",
        "opts": [
          "font-color",
          "color",
          "text-color",
          "background-color"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'HTTPS' add to HTTP?",
        "opts": [
          "Faster loading times",
          "Encryption and security via SSL/TLS",
          "Automatic translation into other languages",
          "Larger file storage"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is a 'variable' in programming?",
        "opts": [
          "A fixed value that never changes",
          "A named storage location that holds a value which can change",
          "A type of loop",
          "A function's declared return type, parameters, and visibility"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does the term 'front-end' refer to in web development?",
        "opts": [
          "The server-side database logic",
          "The client-facing part of a website that users interact with directly",
          "The company's internal business logic and accounting systems only",
          "The hosting server's hardware"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does the term 'back-end' refer to?",
        "opts": [
          "The visual design of a webpage",
          "The server-side logic, databases, and application logic behind a website",
          "The website's written marketing copy and promotional email campaigns",
          "The user's web browser"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is a 'for loop' used for in programming?",
        "opts": [
          "Holding one piece of data in memory",
          "Repeating a block of code a specific number of times or over a collection",
          "Defining a single reusable block of named code that only ever runs once",
          "Pulling in external code written by others"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does CSS 'flexbox' primarily help with?",
        "opts": [
          "Encrypting web traffic",
          "Laying out and aligning items within a container flexibly",
          "Compressing images and other assets for faster page loads",
          "Validating form inputs"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is a 'function' in programming?",
        "opts": [
          "A single fixed value",
          "A reusable block of code that performs a specific task",
          "A specific type of relational database table structure",
          "A CSS selector"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does an 'if-else' statement represent in programming logic?",
        "opts": [
          "A type of loop that never ends",
          "A structure that runs different code depending on whether a condition is true or false",
          "A specific way to declare, initialize, and permanently lock a whole set of variables",
          "A method for styling text"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is an 'array' in programming?",
        "opts": [
          "A lone numeric value with no structure",
          "An ordered collection of values under one variable name",
          "A reusable, permanently named block of executable code",
          "A style rule applied to HTML elements"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'debugging' mean in software development?",
        "opts": [
          "Writing new code from scratch",
          "The process of finding and fixing errors or bugs in code",
          "Deploying finished code directly to a live production server",
          "Designing a user interface"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is 'version control', such as Git, used for?",
        "opts": [
          "Compressing image files",
          "Tracking changes to code over time and enabling collaboration",
          "Encrypting a database",
          "Hosting a website permanently on a rented remote cloud server"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does CSS 'grid' primarily help with?",
        "opts": [
          "Encrypting form data",
          "Creating two-dimensional layouts with rows and columns",
          "Validating email addresses",
          "Compiling and minifying JavaScript into optimized machine code"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "In JavaScript, what is the key difference between '==' and '==='?",
        "opts": [
          "There is no difference",
          "'===' checks value and type; '==' allows type coercion",
          "'==' is only used for comparing strings and numbers",
          "'===' is deprecated"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does CORS stand for, and what does it govern?",
        "opts": [
          "Cross-Origin Resource Sharing; which origins can access a server's resources",
          "Client-Only Resource Storage; a term for local browser caching of static assets",
          "Cascading Order Rule Set; CSS specificity rules",
          "Cross-Object Reference Syntax; JavaScript prototypes"
        ],
        "a": 0,
        "tier": 3
      },
      {
        "q": "What is a closure in JavaScript?",
        "opts": [
          "A method that closes a browser tab",
          "A function that keeps access to its enclosing scope's variables after that scope ends",
          "A specific CSS rule that permanently hides an element from view and screen readers",
          "A way to terminate a loop early"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does REST stand for in API design?",
        "opts": [
          "Representational State Transfer",
          "Remote End State Transaction",
          "Reliable Endpoint Service Transfer",
          "Recursive State Translation"
        ],
        "a": 0,
        "tier": 3
      },
      {
        "q": "What is the purpose of a CSS preprocessor like Sass?",
        "opts": [
          "To replace HTML entirely",
          "To add features like variables, nesting, and mixins that compile down to plain CSS",
          "To automatically compress, resize, and optimize every image for faster page loads",
          "To handle server-side routing"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'asynchronous' JavaScript code, as opposed to synchronous code?",
        "opts": [
          "Code that always runs in a strict, unchangeable top-to-bottom order without any exception whatsoever",
          "Code that can run without blocking execution while waiting for an operation to complete",
          "Code that never produces errors",
          "Code that only runs on the server"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does a 'Promise' in JavaScript represent?",
        "opts": [
          "A guaranteed synchronous function call",
          "An object representing the eventual completion, or failure, of an asynchronous operation",
          "A specialized database query language used only for querying NoSQL document databases",
          "A type of CSS animation"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'server-side rendering' (SSR)?",
        "opts": [
          "Rendering a page entirely in the user's browser only",
          "Generating the full HTML for a page on the server before sending it to the browser",
          "Storing every rendered page permanently in a dedicated backup database table",
          "Compressing images on the server"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "A RESTful API endpoint is typically identified by:",
        "opts": [
          "A hardcoded credential never meant to change",
          "A URL combined with an HTTP method representing a resource and action",
          "A selector used to style HTML elements",
          "A small piece of session data temporarily stored by the browser"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'normalization' mean in relational database design?",
        "opts": [
          "Compressing a database file for storage",
          "Organizing data to reduce redundancy and improve data integrity, typically by splitting data into related tables",
          "Encrypting all database records",
          "Converting an entire relational database permanently into a single large JSON document format file for storage"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'SQL injection' as a security vulnerability?",
        "opts": [
          "A method for optimizing database queries",
          "An attack that inserts malicious SQL code into a query via unsanitized user input",
          "A type of database backup process",
          "A standard, well-documented way of joining several different SQL tables together"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'MVC' (Model-View-Controller) describe?",
        "opts": [
          "A type of database indexing method",
          "A pattern separating an app's data, user interface, and control logic",
          "A CSS layout system",
          "A common version control branching and merging strategy used by teams"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'caching' in web performance optimization?",
        "opts": [
          "Permanently deleting unused data",
          "Storing copies of data or resources temporarily to reduce load times on repeated requests",
          "Encrypting all network traffic",
          "Compressing and permanently archiving a database's entire schema and all of its records"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does a bundler like Webpack primarily do?",
        "opts": [
          "Host a website on a server",
          "Bundle JavaScript modules and other assets into optimized files for deployment",
          "Manage a SQL database",
          "Design a website's entire visual layout, color scheme, and typography from scratch"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'test-driven development' (TDD)?",
        "opts": [
          "Writing code first, then testing manually at the end",
          "A development practice where automated tests are written before the corresponding code that satisfies them",
          "Skipping tests entirely to ship faster",
          "Testing new code exclusively in the live production environment after it has already shipped to users"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'idempotency' mean for a REST API endpoint, like PUT or DELETE?",
        "opts": [
          "The request can never be repeated",
          "Making the same request multiple times produces the same result as making it once",
          "The request always requires a completely new authentication token each and every time",
          "The request must be encrypted"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'lazy loading' in web performance?",
        "opts": [
          "Loading all resources immediately regardless of need",
          "Deferring the loading of non-critical resources, like images, until they are actually needed",
          "Compressing all page resources into a single combined file well before the page loads",
          "Disabling JavaScript on a page"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does a 'load balancer' do in web infrastructure?",
        "opts": [
          "Encrypts data between client and server",
          "Distributes incoming network traffic across multiple servers to improve reliability and performance",
          "Compiles source code into a binary",
          "Stores a website's static image and CSS files only on a single dedicated backup file server"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'containerization', such as Docker, used for in software deployment?",
        "opts": [
          "Compressing images for a webpage",
          "Packaging an app with its dependencies into a portable, isolated unit",
          "Writing and organizing CSS more efficiently across large development teams",
          "Encrypting database passwords only"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'progressive enhancement' mean as a web design strategy?",
        "opts": [
          "Building only for the newest browsers",
          "Building a baseline experience that works everywhere, then adding advanced features for browsers that support them",
          "Deliberately ignoring older devices and browsers entirely in order to simplify overall development work for the team",
          "Always using the latest JavaScript framework"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is the JavaScript event loop responsible for?",
        "opts": [
          "Rendering CSS animations",
          "Managing execution of the call stack and callback/microtask queues to enable non-blocking async behavior",
          "Compiling JavaScript to machine code",
          "Handling HTTP redirects and rewriting all outbound request headers automatically for every request"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does the CAP theorem claim about distributed systems?",
        "opts": [
          "A system can guarantee Consistency, Availability, and Partition tolerance simultaneously",
          "A system can guarantee at most two of Consistency, Availability, and Partition tolerance at once",
          "Partition tolerance is optional in modern networks",
          "CAP applies only to relational databases"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What problem does HTTP/2 multiplexing primarily solve?",
        "opts": [
          "Encrypting traffic by default",
          "Head-of-line blocking from HTTP/1.1, by allowing multiple concurrent streams over a single connection",
          "Removing the need for DNS lookups",
          "Eliminating the need for TCP entirely in favor of an entirely new custom transport protocol design"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "In HTTP semantics, what does 'idempotence' mean for a method like PUT?",
        "opts": [
          "The request can never fail",
          "Making the same request multiple times has the same effect as making it once",
          "The request is always cached by the browser for an entire year by default",
          "The request cannot carry a body"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "In V8's JavaScript engine, what is the purpose of 'hidden class' optimization?",
        "opts": [
          "To hide private variables from developers",
          "To speed up property access by treating objects with the same shape like fixed-layout structs",
          "To obfuscate source code for production",
          "To precisely manage garbage collection timing and overall memory allocation strategy for the runtime"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'eventual consistency' in distributed systems?",
        "opts": [
          "A guarantee that all nodes are always instantly consistent",
          "A model where, given enough time without new updates, replicas converge to the same value, though they may be temporarily inconsistent",
          "A rule that data is never replicated",
          "A method for permanently locking a database record so that no other process can ever read, modify, or delete it at all, under any circumstances"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'sharding' refer to in database architecture?",
        "opts": [
          "Encrypting individual database rows",
          "Horizontally partitioning a database across multiple servers to distribute load and improve scalability",
          "Backing up a database to the cloud",
          "Compressing a database's indexes and tables to significantly save on total disk storage space used"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is a 'race condition' in concurrent programming?",
        "opts": [
          "A performance benchmark comparing two algorithms",
          "A bug that occurs when the outcome of a program depends on the unpredictable timing or interleaving of concurrent operations",
          "A type of database index",
          "A common method used for optimizing loops and reducing overall memory allocation in performance-critical application code"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'memoization' as an optimization technique do?",
        "opts": [
          "Deletes unused variables automatically",
          "Caches the results of expensive function calls and returns the cached result for the same inputs",
          "Compresses function code for faster parsing",
          "Automatically converts all synchronous code into fully non-blocking asynchronous code everywhere"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is a 'Content Delivery Network' (CDN) primarily designed to do?",
        "opts": [
          "Encrypt all website traffic",
          "Distribute cached content across geographically dispersed servers to reduce latency for end users",
          "Store a website's source code securely",
          "Compile all JavaScript source code directly into optimized WebAssembly binary modules automatically"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'Byzantine fault tolerance' address in distributed systems?",
        "opts": [
          "A system's ability to handle high traffic volume only",
          "A system's ability to continue operating correctly even if some nodes fail or act maliciously",
          "A specific method for encrypting node-to-node communication only, without any consensus logic",
          "A database backup strategy"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'tree shaking' in modern JavaScript bundling?",
        "opts": [
          "A method for randomizing array order",
          "A dead-code elimination technique that removes unused exports and code from the final bundle",
          "A CSS animation technique",
          "A visual browser developer tool used only to inspect and visualize a page's DOM tree structure"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does WebAssembly (Wasm) enable in the browser?",
        "opts": [
          "Writing CSS more efficiently",
          "Running code compiled from languages like C++ or Rust at near-native speed",
          "Replacing HTML entirely",
          "Encrypting browser cookies and all other locally stored session data automatically"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is the 'critical rendering path' in browser performance?",
        "opts": [
          "The path a network request takes through routers",
          "The sequence of steps the browser takes to convert HTML, CSS, and JavaScript into rendered pixels",
          "A database query execution plan",
          "A server's specific load balancing algorithm and automatic failover strategy overall design"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'optimistic concurrency control' assume, as opposed to locking?",
        "opts": [
          "That conflicts are common and must be prevented with locks at all times",
          "That conflicts between concurrent operations are rare, so it checks for conflicts only at commit time rather than locking resources upfront",
          "That only a single authorized user account can ever access or modify any piece of shared data at any given moment in time at all",
          "That data should never be modified concurrently"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'server-sent events' (SSE) used for?",
        "opts": [
          "Allowing a client to send files to a server",
          "Allowing a server to push a stream of updates to a client over a single, long-lived HTTP connection",
          "Encrypting form submissions",
          "Compiling and minifying all server-side application code before every single production deployment"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "The 'actor model' of concurrency uses as its core unit of computation:",
        "opts": [
          "Shared memory locks between threads",
          "Independent actors that communicate exclusively via asynchronous message passing, without shared mutable state",
          "A single global event loop only",
          "Synchronous, blocking function calls made exclusively between threads that all share memory directly"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'backpressure' in stream processing systems?",
        "opts": [
          "A method for compressing streamed data",
          "A way for a consumer to signal a producer to slow down when it can't keep up",
          "A specific type of network encryption used only for streaming video content",
          "A way to prioritize CSS rules"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'horizontal scaling' mean, as opposed to vertical scaling?",
        "opts": [
          "Adding more CPU or RAM to a single existing server",
          "Adding more machines or servers to handle increased load",
          "Reducing the number of active servers to save on monthly cost",
          "Increasing a single database's storage only"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'strong consistency' in a distributed database, as opposed to eventual consistency?",
        "opts": [
          "A guarantee that reads may return stale data temporarily",
          "A guarantee that any read immediately reflects the most recent write, across all nodes",
          "A strict guarantee that data is never replicated across any additional server nodes",
          "A guarantee that writes are always asynchronous"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What do CRDTs (Conflict-free Replicated Data Types) guarantee in distributed systems?",
        "opts": [
          "That only one replica can ever be updated at a time",
          "That replicas updated independently and concurrently will always converge to the same state, without requiring coordination or conflict resolution logic",
          "That all writes must be synchronously confirmed by every node",
          "That every single conflict between replicas must always be resolved manually by a dedicated human operator actively monitoring the entire system"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the significance of the FLP impossibility result in distributed computing theory?",
        "opts": [
          "It proves consensus is always achievable given enough time",
          "It proves that in an asynchronous system, no deterministic consensus protocol can guarantee agreement if even one node may fail, given no bound on message delay",
          "It proves that synchronous systems can never fail",
          "It proves that all distributed databases must always be strongly consistent, never allowing for any eventual consistency model whatsoever in practice"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'linearizability' guarantee in a concurrent or distributed system, as the strongest common consistency model?",
        "opts": [
          "That operations may appear out of order to different clients",
          "That operations appear to take effect instantaneously at some point between invocation and response, consistent with a single global real-time order",
          "That reads are always faster than writes",
          "That only a single authorized client connection is ever permitted to connect to the database server at any given moment in time at all, without exception"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the core idea behind the Raft consensus algorithm, as a more understandable alternative to Paxos?",
        "opts": [
          "Requiring every node to independently agree without any leader",
          "Decomposing consensus into leader election, log replication, and safety, with a single elected leader managing replicated log entries",
          "Encrypting all consensus messages by default",
          "Avoiding log replication entirely in favor of a single shared memory region accessed directly by every single node in the cluster"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does homomorphic encryption allow, as an advanced cryptographic technique?",
        "opts": [
          "Encrypting data faster than standard AES",
          "Computing directly on encrypted data without decrypting it first",
          "Making encrypted data permanently unreadable",
          "Compressing already-encrypted data down to a much smaller file size"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is a 'zero-knowledge proof' in cryptography?",
        "opts": [
          "A proof that requires no computational resources",
          "A method by which one party can prove a statement is true without revealing any information beyond the statement's validity",
          "A proof that can only be verified by its creator",
          "A specific and extremely rare type of cryptographic hash collision attack vulnerability found only in older legacy systems"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does formal verification of software, using techniques like model checking, aim to achieve?",
        "opts": [
          "Testing software against a large number of random sample inputs",
          "Mathematically proving that a program satisfies a formal specification, rather than merely testing it against sample inputs",
          "Manually reviewing code for style",
          "Benchmarking a program's runtime performance and memory usage across many different test machines and configurations"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the 'halting problem', proven undecidable by Alan Turing, concerned with?",
        "opts": [
          "Whether a program contains syntax errors",
          "Whether an algorithm can determine if any program will finish or run forever",
          "Whether a program is faster than another",
          "Whether a running program uses too much memory or disk space over time"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'session types' theory, in programming language research, aim to formally verify?",
        "opts": [
          "That a program's variable names are consistent",
          "That communication protocols between concurrent or distributed processes are followed correctly, checked at compile time",
          "That a database schema is normalized",
          "That a webpage's CSS is fully valid and completely free of any browser-specific rendering bugs whatsoever at all"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is 'differential privacy' designed to guarantee when releasing aggregate data statistics?",
        "opts": [
          "That data is fully encrypted at rest",
          "That any one person's data has only a limited, quantifiable effect on the output",
          "That no statistics can ever be released",
          "That all users must remain completely anonymous in order to access any data at all"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does the Curry-Howard correspondence establish a deep connection between?",
        "opts": [
          "Database schemas and object-oriented classes",
          "Formal proofs in logic and computer programs in type theory, where propositions correspond to types and proofs correspond to programs",
          "Network protocols and cryptographic algorithms",
          "CSS selectors, specificity rules, and DOM traversal algorithms used internally by every major modern web browser rendering engine"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "A 'consistent hashing' algorithm is designed to minimize what, when nodes are added or removed from a distributed cache?",
        "opts": [
          "The total memory used by the cache",
          "The amount of data that must be remapped or moved between nodes, compared to standard modulo-based hashing",
          "The network latency between all nodes",
          "The total number of distinct hash functions required across the entire distributed server cluster"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'gradual typing', as implemented in languages like TypeScript, allow developers to do?",
        "opts": [
          "Convert all code to be fully untyped",
          "Mix statically typed and dynamically typed code within the same program, adding type checks incrementally",
          "Remove all runtime errors automatically",
          "Compile all code entirely without any type information, annotations, or runtime checks whatsoever"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the significance of CRDT-based collaborative editing, compared to Operational Transformation (OT)?",
        "opts": [
          "CRDTs require a central server to sequence every operation",
          "CRDTs allow merging concurrent edits without a central server needing to sequence operations, since the data structure itself guarantees convergence",
          "CRDTs are strictly slower and less scalable than OT in all cases",
          "CRDTs cannot support any form of real-time collaborative editing at all, unlike Operational Transformation systems widely used in production today"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does category theory, increasingly referenced in functional programming via monads and functors, provide?",
        "opts": [
          "Optimizations for SQL query execution plans specifically",
          "A formal framework for abstracting and composing structures and transformations in a highly general mathematical way",
          "A method for compressing binary executables",
          "A specific design system used only for building complex, responsive CSS grid layout frameworks at enterprise scale"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "The 'Byzantine Generals Problem' is a foundational thought experiment for what in distributed computing?",
        "opts": [
          "Optimizing the shortest path in a network graph",
          "Achieving reliable consensus among distributed parties when some participants may be unreliable or actively malicious, without a trusted central authority",
          "Determining the fastest sorting algorithm",
          "Encrypting messages exchanged between two mutually trusted parties only, with no third party ever involved whatsoever in the message exchange process"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'partial evaluation', as a program optimization technique, do?",
        "opts": [
          "Executes only half of a program's instructions",
          "Specializes a program given that some of its inputs are known in advance, generating a more efficient residual program for the remaining inputs",
          "Randomly skips function calls to save time",
          "Converts a program automatically into an entirely different programming language, preserving all of its original runtime behavior exactly"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'algebraic effect handlers', a research area in programming language theory, aim to generalize?",
        "opts": [
          "SQL transaction isolation levels only",
          "Exceptions and coroutines into one composable way to handle computational effects",
          "CSS specificity rules",
          "HTTP status code conventions and all standard request and response header naming rules"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does dependent type theory, used in proof assistants like Coq or Agda, allow types to depend on?",
        "opts": [
          "Only other types, never values",
          "Values, enabling extremely precise specifications where a type can, for example, encode the exact length of a list",
          "The physical hardware architecture only",
          "The programming language's syntax highlighting theme, default editor font, and overall color scheme settings"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the core research question addressed by the PCP theorem (Probabilistically Checkable Proofs) in computational complexity theory?",
        "opts": [
          "Whether P equals NP directly",
          "Whether every mathematical proof can be rewritten so that its correctness can be verified by checking only a small, constant number of randomly selected bits, with high probability",
          "Whether large-scale quantum computers can factor extremely large prime numbers efficiently enough to completely break modern public-key encryption systems used worldwide today",
          "Whether all NP problems have polynomial time algorithms"
        ],
        "a": 1,
        "tier": 5
      }
    ]
  },
  {
    "id": "history",
    "name": "World History",
    "questions": [
      {
        "q": "Who was the first President of the United States?",
        "opts": [
          "Thomas Jefferson",
          "George Washington",
          "John Adams",
          "Abraham Lincoln"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "In which year did World War II end?",
        "opts": [
          "1943",
          "1944",
          "1945",
          "1946"
        ],
        "a": 2,
        "tier": 1
      },
      {
        "q": "Which ancient civilization built the pyramids of Giza?",
        "opts": [
          "Romans",
          "Greeks",
          "Egyptians",
          "Mesopotamians"
        ],
        "a": 2,
        "tier": 1
      },
      {
        "q": "The Great Wall is located in which country?",
        "opts": [
          "Japan",
          "China",
          "Mongolia",
          "Korea"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "Who is traditionally credited with reaching the Americas in 1492?",
        "opts": [
          "Ferdinand Magellan the explorer",
          "Christopher Columbus",
          "Vasco da Gama",
          "Marco Polo"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "The American Civil War was fought between which two sides?",
        "opts": [
          "North and South",
          "East and West",
          "Colonists and Britain",
          "Federalists and Loyalists"
        ],
        "a": 0,
        "tier": 1
      },
      {
        "q": "Who was the British Prime Minister for most of World War II?",
        "opts": [
          "Neville Chamberlain",
          "Clement Attlee",
          "Winston Churchill",
          "Anthony Eden"
        ],
        "a": 2,
        "tier": 1
      },
      {
        "q": "The Renaissance began in which country?",
        "opts": [
          "France",
          "Italy",
          "Spain",
          "Germany"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "In what year did the Berlin Wall fall?",
        "opts": [
          "1985",
          "1987",
          "1989",
          "1991"
        ],
        "a": 2,
        "tier": 1
      },
      {
        "q": "Julius Caesar was a ruler of which empire?",
        "opts": [
          "Persian Empire",
          "Roman Empire",
          "Ottoman Empire",
          "Byzantine Empire"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "Which continent is Egypt located on?",
        "opts": [
          "Asia",
          "Africa",
          "Europe",
          "South America"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What ancient civilization is known for building the Colosseum?",
        "opts": [
          "Greeks",
          "Romans",
          "Egyptians",
          "Persians"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "Which country gifted the Statue of Liberty to the United States?",
        "opts": [
          "Britain",
          "France",
          "Spain",
          "Italy"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "Who was known as the 'Maid of Orléans'?",
        "opts": [
          "Marie Antoinette",
          "Joan of Arc",
          "Catherine the Great",
          "Eleanor of Aquitaine"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "In which country did the modern Olympic Games originate in ancient times?",
        "opts": [
          "Italy",
          "Greece",
          "Egypt",
          "Turkey"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "Which war involved widespread trench warfare in Europe from 1914-1918?",
        "opts": [
          "World War II",
          "World War I",
          "The Cold War",
          "The Napoleonic Wars"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "Who was the first person to walk on the Moon?",
        "opts": [
          "Buzz Aldrin Jr.",
          "Neil Armstrong",
          "Yuri Gagarin",
          "John Glenn"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "Which ancient wonder was located in Egypt?",
        "opts": [
          "Hanging Gardens of Babylon",
          "The Great Pyramid of Giza",
          "Colossus of Rhodes",
          "Lighthouse of Alexandria"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "Which ancient civilization was ruled by pharaohs?",
        "opts": [
          "Greece",
          "Rome",
          "Egypt",
          "Persia"
        ],
        "a": 2,
        "tier": 1
      },
      {
        "q": "The Titanic sank in which year?",
        "opts": [
          "1905",
          "1912",
          "1918",
          "1923"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "In what year did the French Revolution begin?",
        "opts": [
          "1776",
          "1789",
          "1799",
          "1804"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "Who was the first emperor of a unified China?",
        "opts": [
          "Sun Tzu",
          "Qin Shi Huang",
          "Confucius",
          "Kublai Khan the Great"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "Which treaty formally ended World War I?",
        "opts": [
          "Treaty of Paris",
          "Treaty of Versailles",
          "Treaty of Tordesillas",
          "Treaty of Westphalia"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "The Magna Carta was signed in which country?",
        "opts": [
          "France",
          "England",
          "The Kingdom of Spain",
          "Italy"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "Which empire built Machu Picchu?",
        "opts": [
          "Aztec",
          "Maya",
          "Inca",
          "Olmec"
        ],
        "a": 2,
        "tier": 2
      },
      {
        "q": "The Cold War was primarily a rivalry between which two powers?",
        "opts": [
          "US and China",
          "US and Soviet Union",
          "Britain and Germany",
          "France and Russia"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "Who was the leader of Nazi Germany?",
        "opts": [
          "Benito Mussolini",
          "Adolf Hitler",
          "Joseph Stalin",
          "Francisco Franco"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "The Industrial Revolution is generally considered to have begun first in which country?",
        "opts": [
          "France",
          "Britain",
          "Germany",
          "USA"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "Which historic document declared American independence in 1776?",
        "opts": [
          "Bill of Rights",
          "Declaration of Independence",
          "US Constitution",
          "Emancipation Proclamation"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "Which Egyptian queen was known for her relationships with Julius Caesar and Mark Antony?",
        "opts": [
          "Nefertiti",
          "Cleopatra",
          "Hatshepsut",
          "Isis"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "Which empire was ruled by Genghis Khan?",
        "opts": [
          "Ottoman Empire",
          "Mongol Empire",
          "Persian Empire",
          "Roman Empire"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What was the name of the ship that brought the Pilgrims to America in 1620?",
        "opts": [
          "Santa Maria",
          "Mayflower",
          "Endeavour",
          "Beagle"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "Which revolution led directly to the rise of the Soviet Union?",
        "opts": [
          "French Revolution",
          "Russian Revolution",
          "Industrial Revolution",
          "Cuban Revolution"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What was apartheid?",
        "opts": [
          "A trade agreement between South Africa and its neighbors",
          "A system of racial segregation in South Africa",
          "A religious movement",
          "A military alliance"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "Who led India's independence movement through a philosophy of non-violence?",
        "opts": [
          "Jawaharlal Nehru",
          "Mahatma Gandhi",
          "Subhas Chandra Bose",
          "Muhammad Ali Jinnah"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "The Ottoman Empire was centered in which modern-day country?",
        "opts": [
          "Egypt",
          "Turkey",
          "Saudi Arabia",
          "Iran"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "The Cold War is generally considered to have begun around which year?",
        "opts": [
          "1939",
          "1945",
          "1947",
          "1953"
        ],
        "a": 2,
        "tier": 2
      },
      {
        "q": "Who was the US President during the Cuban Missile Crisis?",
        "opts": [
          "Dwight Eisenhower",
          "John F. Kennedy",
          "Lyndon Johnson",
          "Richard Nixon"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "The Boston Tea Party was a protest against what?",
        "opts": [
          "French trade tariffs",
          "British taxes on tea",
          "Spanish colonization",
          "Dutch shipping laws"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What was 'Lebensraum' in the context of Nazi Germany's expansionist policy?",
        "opts": [
          "A military tactic used exclusively in coastal naval warfare campaigns",
          "A policy of seeking territorial expansion for 'living space'",
          "A economic recovery plan",
          "A treaty with the Soviet Union"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What was a primary cause of the Peloponnesian War?",
        "opts": [
          "A succession dispute in Macedon",
          "Rivalry between Athens and Sparta",
          "A trade dispute with Persia",
          "Religious conflict over Delphi"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "The Silk Road primarily connected which two regions?",
        "opts": [
          "Europe and Africa",
          "China and the Mediterranean world's port cities",
          "India and Australia",
          "Japan and the Americas, across the Pacific Ocean trade routes"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "Which empire continued in the East after the fall of the Western Roman Empire?",
        "opts": [
          "Ottoman Empire",
          "Byzantine Empire",
          "Holy Roman Empire",
          "Persian Empire"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What event is generally cited as triggering the start of World War I?",
        "opts": [
          "The sinking of the passenger liner Lusitania by a German submarine",
          "The assassination of Archduke Franz Ferdinand",
          "The invasion of Poland",
          "The Zimmermann Telegram"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "The Congress of Vienna (1815) primarily aimed to do what?",
        "opts": [
          "Divide Africa among rival European colonial powers at a conference",
          "Restore the balance of power in Europe after Napoleon's defeat",
          "End the Thirty Years' War",
          "Establish the League of Nations"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What was the primary economic system of feudal medieval Europe?",
        "opts": [
          "Capitalism",
          "Feudalism",
          "Mercantilism",
          "Socialism"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "The Council of Trent was convened by which institution in response to the Protestant Reformation?",
        "opts": [
          "The Holy Roman Empire",
          "The Catholic Church",
          "The Ottoman Empire",
          "The Byzantine Church"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What was the primary goal of the Marshall Plan after World War II?",
        "opts": [
          "Military occupation of Germany",
          "Economic recovery and rebuilding of Western Europe after the war",
          "Expansion of Soviet influence",
          "Formation of the United Nations Security Council in New York"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "The Treaty of Tordesillas divided newly discovered lands between which two powers?",
        "opts": [
          "England and France",
          "Spain and Portugal",
          "Netherlands and Britain",
          "Portugal and Italy"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is meant by the 'Scramble for Africa'?",
        "opts": [
          "An African-led independence movement against European colonial administrators",
          "The rapid colonization of African territory by European powers in the 1800s",
          "A trade agreement among African nations",
          "A mass migration of African peoples to Europe"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "Which dynasty ruled China during Zheng He's famous maritime expeditions?",
        "opts": [
          "Tang Dynasty",
          "Ming Dynasty",
          "Qing Dynasty",
          "Song Dynasty"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "The Weimar Republic refers to the German government during approximately which years?",
        "opts": [
          "1871–1914",
          "1919–1933",
          "1933–1945",
          "1945–1949"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What was the primary purpose of the Non-Aligned Movement during the Cold War?",
        "opts": [
          "To unite communist nations formally",
          "To avoid formal alignment with either Cold War superpower military bloc",
          "To form a new military alliance with NATO member states in Western Europe",
          "To promote European economic integration"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "The Meiji Restoration led to what major transformation in Japan?",
        "opts": [
          "A return to strict isolationism",
          "Rapid modernization and industrialization of the country",
          "Adoption of a communist government modeled on the Soviet Union",
          "Formation of a republic"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What was the significance of the Edict of Nantes (1598)?",
        "opts": [
          "It ended the Hundred Years' War between England and the Kingdom of France",
          "It granted religious toleration to Protestant Huguenots in France",
          "It established the French monarchy",
          "It declared war on Spain"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "The Opium Wars were fought primarily between China and which power?",
        "opts": [
          "Japan",
          "Britain",
          "The Russian Empire",
          "France"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What was the 'Great Leap Forward'?",
        "opts": [
          "A Japanese military campaign",
          "A Chinese economic and social campaign under Mao Zedong to industrialize",
          "A Soviet space program",
          "An Indian independence movement led by regional political parties and local leaders"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "The Peace of Westphalia (1648) is significant for establishing what concept?",
        "opts": [
          "Colonial trade routes",
          "The modern system of sovereign nation-states in international law",
          "The League of Nations",
          "The Catholic Counter-Reformation's response to Protestant reformers"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What triggered the Haitian Revolution?",
        "opts": [
          "A trade dispute with Spain over sugar tariffs in the Caribbean",
          "A slave uprising against French colonial rule and plantation owners",
          "A war with Britain",
          "A religious schism"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "The Cold War-era 'Domino Theory' held that:",
        "opts": [
          "Capitalism would spread through international trade agreements alone, without any conflict",
          "The fall of one country to communism would cause neighboring countries to fall as well",
          "Nuclear weapons would inevitably proliferate",
          "Economic collapse in Europe was inevitable"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "The 'Annales School' of historiography is most associated with emphasizing what?",
        "opts": [
          "Biographies of great political leaders and their military campaigns in chronological order",
          "Long-term social and economic structures over singular events (longue durée)",
          "Military strategy and battlefield tactics",
          "Strict chronological narration of dates"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "In German historiography, the concept of 'Sonderweg' refers to what?",
        "opts": [
          "The postwar reunification of East and West Germany in 1990 after the Berlin Wall fell",
          "Germany's supposed unique and separate path to modernity compared with Western Europe",
          "The postwar division of Berlin",
          "Bismarck's system of alliances"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "Which historian is most closely associated with the concept of 'invented tradition'?",
        "opts": [
          "Fernand Braudel",
          "Eric Hobsbawm",
          "E.P. Thompson",
          "Michel Foucault"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "The term 'Columbian Exchange', describing the transfer of plants, animals, and disease between the Old and New Worlds, was coined primarily by whom?",
        "opts": [
          "Alfred W. Crosby",
          "Jared Diamond",
          "Fernand Braudel",
          "Immanuel Wallerstein"
        ],
        "a": 0,
        "tier": 4
      },
      {
        "q": "'Subaltern studies' as a historiographical approach is primarily concerned with what?",
        "opts": [
          "Reconstructing royal genealogies and dynastic succession records from court archives",
          "Recovering the histories of marginalized and colonized groups from below",
          "Quantitative economic modelling of trade routes",
          "Diplomatic history between great powers"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "'World-systems theory', associated with Immanuel Wallerstein, primarily analyzes:",
        "opts": [
          "The spread of religion globally through missionary trade networks and pilgrimage routes",
          "The global economy as a system of core, periphery, and semi-periphery nations",
          "Military alliances in the 20th century",
          "Linguistic evolution across continents"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "'Microhistory' as a historiographical method involves:",
        "opts": [
          "Studying only ancient microorganisms found in archaeological soil samples",
          "The intensive study of a small, well-defined unit to illuminate broader patterns",
          "A statistical macro-level survey of economies",
          "A biography of a single monarch"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "'Historical materialism', associated with Marx, argues that historical change is primarily driven by:",
        "opts": [
          "The will of great individuals acting alone, independent of material conditions",
          "Material economic conditions and class conflict throughout history",
          "Divine providence",
          "Climate change alone"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "'Presentism' as a critique in historical writing refers to:",
        "opts": [
          "Focusing only on very recent history from the last few decades of the twentieth century",
          "Interpreting the past through present-day values and concepts, an anachronistic bias",
          "A method of oral history collection",
          "A school of Marxist economics"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "Edward Said's concept of 'Orientalism' critiques:",
        "opts": [
          "Eastern philosophy's growing influence on Western academic thought and universities",
          "Western representations of the East as exotic and inferior, serving colonial power",
          "The spread of Buddhism across Asia",
          "Trade relations along the Silk Road"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "'Counterfactual history' as a method involves:",
        "opts": [
          "Writing fictional historical novels",
          "Exploring hypothetical alternative historical outcomes through 'what if' scenarios",
          "Debunking common historical myths",
          "A statistical method for dating artifacts using radiocarbon isotope analysis"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "'Whig history', as a term of critique, refers to:",
        "opts": [
          "A history written only by British monarchists and royal courtiers of the era",
          "A narrative presenting history as an inevitable progression toward greater liberty",
          "A history focused solely on economic data",
          "A Marxist interpretation of class struggle"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "The 'Great Divergence' debate in economic history concerns:",
        "opts": [
          "The split of Christianity into Catholic and Protestant denominations during the Reformation",
          "Why Western Europe economically pulled ahead of regions like China after roughly 1800",
          "The division of Africa among colonial powers",
          "The separation of church and state"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "'Oral history' as a methodology primarily relies on:",
        "opts": [
          "Only written archival documents",
          "Recorded personal testimonies and recollections used as historical sources",
          "Archaeological excavation reports",
          "Statistical census data exclusively, gathered by government tax offices"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "'Postcolonial theory' is broadly concerned with analyzing:",
        "opts": [
          "Ancient trade networks",
          "The cultural, political, and economic legacies of colonialism worldwide",
          "Medieval feudal structures and the obligations between lords and vassals",
          "The Bronze Age collapse"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "The term 'longue durée', from the Annales School, describes:",
        "opts": [
          "A single decisive battle",
          "Slow-moving, long-term historical structures such as geography and climate",
          "A biography spanning one lifetime, from birth to death, told in detail",
          "A short-term political crisis"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "'Historiography' itself is defined as:",
        "opts": [
          "The chronological listing of events without any interpretation or analysis at all",
          "The study of how history is written and interpreted, including historians' biases",
          "A branch of archaeology",
          "The collection of primary sources only"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "'Revisionist history' typically involves:",
        "opts": [
          "Simply repeating traditional narratives unchanged, without questioning old assumptions",
          "Reinterpreting accepted historical narratives using new evidence or perspectives",
          "Writing fictional alternate histories",
          "Translating ancient texts literally"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "The 'Bielefeld School' in German historiography is significant for:",
        "opts": [
          "Focusing exclusively on military history and battlefield tactics alone, with no social analysis",
          "Emphasizing structural social history and modernization theory over political history",
          "Being a school of art history",
          "Promoting Prussian nationalist history"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "'Periodization' in historical study refers to:",
        "opts": [
          "Dating artifacts using carbon isotopes",
          "The division of history into discrete named periods or eras for analysis",
          "The study of historical population cycles using birth and death registry records",
          "A method of translating ancient calendars"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "Reinhart Koselleck's concept of 'Sattelzeit' refers to:",
        "opts": [
          "A specific decisive battle fought during the Napoleonic Wars in central Europe",
          "A transitional period, roughly 1750-1850, when key modern political concepts formed",
          "A term for medieval land tenure",
          "A Cold War-era diplomatic doctrine"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "'Begriffsgeschichte' (conceptual history), associated with Koselleck, is:",
        "opts": [
          "The genealogy of royal bloodlines traced back through several centuries of dynastic rule",
          "The historical study of the changing meanings of key political concepts over time",
          "A method for dating manuscripts",
          "The study of ancient legal codes"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "Michel Foucault's concept of 'governmentality' analyzes:",
        "opts": [
          "The divine right of kings to rule over their subjects unquestioned by any parliament",
          "The techniques and rationalities through which populations are governed, beyond the state",
          "The economics of feudal taxation",
          "The military strategy of siege warfare"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "The 'linguistic turn' in historiography is associated with:",
        "opts": [
          "The adoption of a single global historical language",
          "A shift toward analyzing history through language, discourse, and how texts construct meaning",
          "The decline of Latin as a scholarly language",
          "A turn toward purely quantitative statistical history using large economic datasets and census figures"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "'Entangled history' (histoire croisée), unlike traditional comparative history, emphasizes:",
        "opts": [
          "Strict chronological sequencing of events across different societies, told separately",
          "The mutual interactions and interconnections between societies, rather than comparison",
          "The isolation of civilizations from each other",
          "A purely economic analysis of trade"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "Hayden White's 'Metahistory' (1973) is significant in historiographical theory because it argued that:",
        "opts": [
          "It provided an entirely new statistical method for demography and census data collection",
          "Historical narratives are shaped by underlying literary tropes, blurring history and fiction",
          "It was a comprehensive history of ancient Rome",
          "It introduced radiocarbon dating to archaeology"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "The 'archival turn' in historical scholarship critically examines:",
        "opts": [
          "Only the digitization of library catalogs and card indexes for public access online and in reading rooms",
          "The archive as a constructed institution shaping what can be known, not a neutral repository",
          "The physical preservation of paper documents",
          "The founding dates of national archives"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "'Connected history' (histoire connectée), associated with Sanjay Subrahmanyam, responds primarily to:",
        "opts": [
          "The decline of oral history",
          "Eurocentric, nation-bound narratives, by tracing connections across regions like Eurasia",
          "A purely military historiographical school focused on naval battle tactics and logistics",
          "The study of isolated island civilizations"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "'New imperial history' seeks to differ from traditional imperial history by:",
        "opts": [
          "Focusing solely on the economics of colonial extraction and resource shipping",
          "Examining empire's effects on both colonizer and colonized within one analytic frame",
          "Celebrating the achievements of imperial administrators",
          "Restricting analysis to military conquest only"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "The core argument of Kenneth Pomeranz's 'The Great Divergence' (2000) is that:",
        "opts": [
          "Europe was always more advanced due to inherent cultural superiority over other world civilizations throughout history",
          "China's Yangzi Delta and Western Europe were comparable until roughly 1800, when resources diverged their paths",
          "The Industrial Revolution began first in China",
          "Divergence was purely due to differing religious values"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "'Environmental history' as a subfield primarily analyzes:",
        "opts": [
          "Only the history of environmental protection laws",
          "The mutual relationship between human societies and the natural environment over time",
          "Climate science entirely independent of human history or any societal influence",
          "The geological history of the Earth alone"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "The 'Cambridge School' in the history of political thought (Skinner, Pocock) is significant for:",
        "opts": [
          "Focusing on quantitative economic modeling of trade statistics between rival nations over several decades",
          "Emphasizing political texts within their historical linguistic context and the author's intent",
          "Being a movement in military history",
          "Promoting a single universal political theory"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "'Deep history' as an approach argues historians should incorporate:",
        "opts": [
          "Only ancient written texts",
          "Insights from evolutionary biology, archaeology, and prehistory beyond written records",
          "Exclusively oral traditions",
          "A focus limited strictly to the last 200 years of recorded written human history"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "'Transnational history' is primarily concerned with tracing:",
        "opts": [
          "The internal politics of a single nation only, ignoring any foreign relations entirely",
          "Flows of people, ideas, and institutions crossing national borders, beyond the nation-state",
          "The military history of border conflicts",
          "The economic history of a single empire"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "The concept of 'multiple modernities', associated with S.N. Eisenstadt, challenges:",
        "opts": [
          "The idea that any society can modernize at all, regardless of its starting conditions",
          "The assumption that modernization leads all societies toward one Western-style outcome",
          "The existence of premodern societies",
          "The value of technological progress itself"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "'Digital history' or the 'digital humanities' is primarily concerned with:",
        "opts": [
          "Only converting books to PDF format",
          "Applying computational tools, such as text mining, to analyze large historical datasets",
          "Replacing physical archives with social media platforms as the primary historical record",
          "Creating video games about historical events"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "The 'Fischer controversy' in German historiography concerns:",
        "opts": [
          "A dispute over the authorship of the Treaty of Versailles document itself and its many disputed clauses",
          "Fischer's argument that Germany bore primary responsibility for starting World War I through expansionist policy",
          "A debate over Bismarck's economic policy",
          "A controversy about Nazi-era art looting"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "'Commodity history', such as studies of sugar or cotton, uses as its central analytical lens:",
        "opts": [
          "The biography of a single merchant",
          "Tracing a single commodity's production and trade to illuminate global economic systems",
          "A purely botanical study of crops",
          "The history of currency exchange rates only, tracked across several different centuries"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "The central argument of Benedict Anderson's 'Imagined Communities' (1983) is that:",
        "opts": [
          "Nations are biologically determined groups sharing a common ancestry and bloodline going back generations",
          "Nations are socially constructed, 'imagined' communities, imagined by people despite never meeting most members",
          "Nationalism is a purely economic phenomenon",
          "All modern nations descend from a single ancient tribe"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "'Global history' as a field aims to move beyond, methodologically:",
        "opts": [
          "The use of primary sources entirely",
          "Nation-centered and Eurocentric frameworks, via connections at a planetary scale",
          "The study of any history before 1500, using only archaeological and material evidence",
          "Purely economic analysis exclusively"
        ],
        "a": 1,
        "tier": 5
      }
    ]
  },
  {
    "id": "military",
    "name": "Military History",
    "questions": [
      {
        "q": "Which war was fought between the North and South regions of the United States from 1861 to 1865?",
        "opts": [
          "World War I",
          "The American Civil War",
          "The Revolutionary War",
          "The Korean War"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "Who commanded the Allied forces during the D-Day invasion of Normandy in 1944?",
        "opts": [
          "General George Patton",
          "Dwight D. Eisenhower",
          "General Douglas MacArthur",
          "Field Marshal Bernard Montgomery"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is the term for a soldier's temporary living quarters in the field?",
        "opts": [
          "Barracks",
          "Bivouac",
          "Garrison",
          "Armory"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "Which side won World War II in Europe?",
        "opts": [
          "The Allied powers",
          "The Axis powers",
          "Neither side",
          "Both sides negotiated peace"
        ],
        "a": 0,
        "tier": 1
      },
      {
        "q": "In which year did World War II end?",
        "opts": [
          "1943",
          "1945",
          "1947",
          "1950"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What rank is directly above a Captain in the US Army?",
        "opts": [
          "Major",
          "Colonel",
          "Sergeant",
          "Lieutenant"
        ],
        "a": 0,
        "tier": 1
      },
      {
        "q": "Which ancient empire relied on a highly organized legion-based army to conquer much of Europe?",
        "opts": [
          "The Roman Empire",
          "The Persian Empire",
          "The Mongol Empire",
          "The Ottoman Empire"
        ],
        "a": 0,
        "tier": 1
      },
      {
        "q": "What is the name of the weapon that shoots arrows?",
        "opts": [
          "Crossbow",
          "Musket rifle",
          "Field cannon",
          "Bayonet knife"
        ],
        "a": 0,
        "tier": 1
      },
      {
        "q": "Which country was primarily responsible for the \"Blitzkrieg\" tactic in WWII?",
        "opts": [
          "Germany",
          "Bulgaria",
          "Romania",
          "Hungary"
        ],
        "a": 0,
        "tier": 1
      },
      {
        "q": "What do we call a person who fights on foot as a basic combat soldier?",
        "opts": [
          "Infantry soldier",
          "Cavalry soldier",
          "Artillery crew member",
          "Naval officer"
        ],
        "a": 0,
        "tier": 1
      },
      {
        "q": "Which weapon was famously used by knights in medieval jousting tournaments?",
        "opts": [
          "Lance",
          "Rapier",
          "Halberd",
          "Crossbow"
        ],
        "a": 0,
        "tier": 1
      },
      {
        "q": "What is the term for the supreme commander of a country's armed forces, often the head of state?",
        "opts": [
          "Commander-in-chief",
          "Field marshal",
          "Quartermaster general",
          "Adjutant general"
        ],
        "a": 0,
        "tier": 1
      },
      {
        "q": "Which war is associated with the phrase \"the shot heard round the world\"?",
        "opts": [
          "The American Revolutionary War",
          "The War of 1812 against Britain",
          "The Mexican-American War of 1846",
          "The Spanish-American War of 1898"
        ],
        "a": 0,
        "tier": 1
      },
      {
        "q": "Who was the British Prime Minister who led the United Kingdom through most of World War II?",
        "opts": [
          "Winston Churchill",
          "Neville Chamberlain",
          "Clement Attlee",
          "Anthony Eden"
        ],
        "a": 0,
        "tier": 1
      },
      {
        "q": "What do you call a large formation of warships traveling together?",
        "opts": [
          "A fleet",
          "A squadron",
          "A convoy",
          "A flotilla"
        ],
        "a": 0,
        "tier": 1
      },
      {
        "q": "Which side of World War I included Germany, Austria-Hungary, and the Ottoman Empire?",
        "opts": [
          "The Central Powers",
          "The Allied Powers",
          "The Triple Entente",
          "The Coalition Powers"
        ],
        "a": 0,
        "tier": 1
      },
      {
        "q": "What is a \"ceasefire\"?",
        "opts": [
          "A temporary halt to fighting",
          "A permanently signed peace treaty",
          "A surprise sneak attack",
          "A type of siege weapon"
        ],
        "a": 0,
        "tier": 1
      },
      {
        "q": "Which famous general led Carthage's army against Rome, crossing the Alps with war elephants?",
        "opts": [
          "Hannibal",
          "Scipio Africanus",
          "Julius Caesar",
          "Alexander the Great"
        ],
        "a": 0,
        "tier": 1
      },
      {
        "q": "What is the term for soldiers who fight while riding horses?",
        "opts": [
          "Cavalry",
          "Infantry",
          "Artillery",
          "Engineers"
        ],
        "a": 0,
        "tier": 1
      },
      {
        "q": "In which conflict did the United States fight against North Vietnam?",
        "opts": [
          "The Vietnam War",
          "The Korean War",
          "The Gulf War",
          "The Cold War"
        ],
        "a": 0,
        "tier": 1
      },
      {
        "q": "Which battle in 1815 marked the final defeat of Napoleon Bonaparte?",
        "opts": [
          "The Battle of Waterloo",
          "The Battle of Trafalgar",
          "The Battle of Austerlitz",
          "The Battle of Leipzig"
        ],
        "a": 0,
        "tier": 2
      },
      {
        "q": "What was the codename for the massive Allied invasion of Normandy in June 1944?",
        "opts": [
          "Operation Overlord",
          "Operation Market Garden",
          "Operation Torch",
          "Operation Barbarossa"
        ],
        "a": 0,
        "tier": 2
      },
      {
        "q": "Which US Civil War battle, fought in Pennsylvania in July 1863, is considered the war's turning point?",
        "opts": [
          "The Battle of Gettysburg",
          "The Battle of Antietam",
          "The Battle of Bull Run",
          "The Battle of Shiloh"
        ],
        "a": 0,
        "tier": 2
      },
      {
        "q": "What term describes a prolonged standoff where neither side advances, as seen in WWI trenches?",
        "opts": [
          "Stalemate",
          "Blitzkrieg",
          "Ambush",
          "Retreat"
        ],
        "a": 0,
        "tier": 2
      },
      {
        "q": "Which naval battle in 1942 is considered the turning point of the Pacific War against Japan?",
        "opts": [
          "The Battle of Midway",
          "The Battle of Coral Sea",
          "The Battle of Leyte Gulf",
          "The Battle of Okinawa"
        ],
        "a": 0,
        "tier": 2
      },
      {
        "q": "Who was the German dictator who ordered the invasion of Poland in 1939, starting World War II?",
        "opts": [
          "Adolf Hitler",
          "Heinrich Himmler",
          "Hermann Goring",
          "Joseph Goebbels"
        ],
        "a": 0,
        "tier": 2
      },
      {
        "q": "What was the codename for the Allied airborne operation in the Netherlands in 1944 that failed to secure key bridges?",
        "opts": [
          "Operation Market Garden",
          "Operation Overlord in Normandy",
          "Operation Cobra breakout in France",
          "Operation Dragoon in southern France"
        ],
        "a": 0,
        "tier": 2
      },
      {
        "q": "Which treaty officially ended World War I in 1919?",
        "opts": [
          "The Treaty of Versailles",
          "The Treaty of Paris from 1783",
          "The Treaty of Vienna from 1815",
          "The Treaty of Ghent from 1814"
        ],
        "a": 0,
        "tier": 2
      },
      {
        "q": "What is the term for a military unit's flag or banner carried into battle?",
        "opts": [
          "A standard",
          "A pennant flag",
          "A family crest",
          "A round shield"
        ],
        "a": 0,
        "tier": 2
      },
      {
        "q": "Which weapon, introduced in WWI, used tracks to cross difficult terrain and break through trench lines?",
        "opts": [
          "The tank",
          "The machine gun",
          "The flamethrower",
          "The mortar"
        ],
        "a": 0,
        "tier": 2
      },
      {
        "q": "What does \"AWOL\" stand for in military terminology?",
        "opts": [
          "Absent Without Leave",
          "Assigned Without Location",
          "Armed and Well Organized Legion",
          "Authorized Withdrawal of Liaison"
        ],
        "a": 0,
        "tier": 2
      },
      {
        "q": "Which side did Japan align with during World War II?",
        "opts": [
          "The Axis powers",
          "The Allied powers",
          "Neither side",
          "The Non-Aligned Movement"
        ],
        "a": 0,
        "tier": 2
      },
      {
        "q": "What was the primary purpose of the Maginot Line built by France before WWII?",
        "opts": [
          "To defend against a German invasion",
          "To attack Germany directly across the Rhine",
          "To control naval trade routes in the Atlantic",
          "To house refugees during wartime"
        ],
        "a": 0,
        "tier": 2
      },
      {
        "q": "Which general is known for his \"island hopping\" strategy in the Pacific Theater of WWII?",
        "opts": [
          "Douglas MacArthur",
          "Dwight Eisenhower",
          "George Patton",
          "Omar Bradley"
        ],
        "a": 0,
        "tier": 2
      },
      {
        "q": "What was the name of the Soviet Union's WWII doctrine that used deep, sudden mass offensives?",
        "opts": [
          "Deep battle",
          "Blitzkrieg",
          "Total war",
          "Scorched earth"
        ],
        "a": 0,
        "tier": 2
      },
      {
        "q": "Which country's military used the \"Enigma\" machine to encrypt its communications during WWII?",
        "opts": [
          "Germany",
          "Japan",
          "Italy",
          "Britain"
        ],
        "a": 0,
        "tier": 2
      },
      {
        "q": "What is the term for a fortified structure designed to protect soldiers, often built underground with thick walls?",
        "opts": [
          "A bunker",
          "A trench",
          "A foxhole",
          "A rampart"
        ],
        "a": 0,
        "tier": 2
      },
      {
        "q": "Which US general famously said \"I shall return\" upon retreating from the Philippines in 1942?",
        "opts": [
          "Douglas MacArthur",
          "Dwight Eisenhower",
          "Chester Nimitz",
          "George Marshall"
        ],
        "a": 0,
        "tier": 2
      },
      {
        "q": "What was the main purpose of the Lend-Lease Act passed by the US Congress in 1941?",
        "opts": [
          "To supply war materials to Allied nations",
          "To declare war on Germany",
          "To draft American soldiers",
          "To establish permanent military bases abroad"
        ],
        "a": 0,
        "tier": 2
      },
      {
        "q": "Which WWII conference in 1945 divided post-war Europe among the Allied leaders?",
        "opts": [
          "The Yalta Conference",
          "The Potsdam Conference",
          "The Tehran Conference",
          "The Casablanca Conference"
        ],
        "a": 0,
        "tier": 2
      },
      {
        "q": "Which battle, fought in 216 BC, is considered Hannibal's greatest tactical victory over Rome, using a double envelopment?",
        "opts": [
          "The Battle of Cannae",
          "The Battle of Zama",
          "The Battle of Trebia",
          "The Battle of Lake Trasimene"
        ],
        "a": 0,
        "tier": 3
      },
      {
        "q": "What was the name of the German offensive in December 1944 through the Ardennes forest, also called the Battle of the Bulge?",
        "opts": [
          "The Ardennes Offensive",
          "Operation Barbarossa",
          "Operation Cobra",
          "Operation Sea Lion"
        ],
        "a": 0,
        "tier": 3
      },
      {
        "q": "Which Civil War siege, lasting from May to July 1863, split the Confederacy by giving the Union control of the Mississippi?",
        "opts": [
          "The Siege of Vicksburg",
          "The Siege of Petersburg",
          "The Battle of Chattanooga",
          "The Battle of Atlanta"
        ],
        "a": 0,
        "tier": 3
      },
      {
        "q": "What is the term for the German strategy of unrestricted submarine attacks on merchant ships in both World Wars?",
        "opts": [
          "U-boat warfare",
          "Convoy warfare",
          "Amphibious warfare",
          "Trench warfare"
        ],
        "a": 0,
        "tier": 3
      },
      {
        "q": "Which 1942 battle on the Eastern Front is often cited as the deadliest and most decisive of WWII, ending in a Soviet victory?",
        "opts": [
          "The Battle of Stalingrad",
          "The Battle of Kursk",
          "The Siege of Leningrad",
          "The Battle of Moscow"
        ],
        "a": 0,
        "tier": 3
      },
      {
        "q": "Who commanded the Confederate Army of Northern Virginia for most of the American Civil War?",
        "opts": [
          "Robert E. Lee",
          "Stonewall Jackson",
          "Jefferson Davis",
          "James Longstreet"
        ],
        "a": 0,
        "tier": 3
      },
      {
        "q": "What was the primary strategic goal of Operation Barbarossa, launched by Germany in June 1941?",
        "opts": [
          "The invasion of the Soviet Union",
          "The invasion of France and the Low Countries",
          "The amphibious invasion of Britain",
          "The invasion of Italian North Africa"
        ],
        "a": 0,
        "tier": 3
      },
      {
        "q": "Which naval engagement in 1805 saw the British fleet under Admiral Nelson defeat the combined French and Spanish fleets?",
        "opts": [
          "The Battle of Trafalgar",
          "The Battle of the Nile",
          "The Battle of Copenhagen",
          "The Battle of Jutland"
        ],
        "a": 0,
        "tier": 3
      },
      {
        "q": "What term describes the WWI attrition warfare symbolized by the prolonged Battle of Verdun in 1916?",
        "opts": [
          "A war of attrition",
          "A war of maneuver",
          "A guerrilla campaign",
          "A naval blockade"
        ],
        "a": 0,
        "tier": 3
      },
      {
        "q": "Which general led the Union's \"March to the Sea\" through Georgia in 1864, employing a scorched-earth campaign?",
        "opts": [
          "William Tecumseh Sherman",
          "Ambrose Everett Burnside",
          "George Gordon Meade",
          "Philip Henry Sheridan"
        ],
        "a": 0,
        "tier": 3
      },
      {
        "q": "What was the code name for the Allied invasion of Sicily in 1943?",
        "opts": [
          "Operation Husky",
          "Operation Avalanche",
          "Operation Torch",
          "Operation Shingle"
        ],
        "a": 0,
        "tier": 3
      },
      {
        "q": "Which battle in 1898 effectively ended Spanish naval power in the Philippines during the Spanish-American War?",
        "opts": [
          "The Battle of Manila Bay",
          "The Battle of Santiago de Cuba",
          "The Siege of Baler",
          "The Battle of San Juan Hill"
        ],
        "a": 0,
        "tier": 3
      },
      {
        "q": "What is the term for a tactic where troops encircle an enemy force from both flanks simultaneously?",
        "opts": [
          "A double envelopment",
          "A frontal assault",
          "A feigned retreat",
          "A defense in depth formation"
        ],
        "a": 0,
        "tier": 3
      },
      {
        "q": "Which WWII Pacific battle in 1945 became famous for the photograph of Marines raising the flag on Mount Suribachi?",
        "opts": [
          "The Battle of Iwo Jima",
          "The Battle of Okinawa",
          "The Battle of Tarawa",
          "The Battle of Guadalcanal"
        ],
        "a": 0,
        "tier": 3
      },
      {
        "q": "What was the name of the Japanese surprise attack on the US naval base in Hawaii on December 7, 1941?",
        "opts": [
          "The attack on Pearl Harbor",
          "The Battle of Midway",
          "The Battle of Coral Sea",
          "The invasion of Wake Island"
        ],
        "a": 0,
        "tier": 3
      },
      {
        "q": "Which general commanded the Allied ground forces in Europe under Eisenhower during the Normandy campaign?",
        "opts": [
          "Bernard Montgomery",
          "George Smith Patton",
          "Omar Nelson Bradley",
          "Mark Wayne Clark"
        ],
        "a": 0,
        "tier": 3
      },
      {
        "q": "What is the term for the Confederate strategy of fighting defensively to wear down Union resolve during the Civil War?",
        "opts": [
          "A war of attrition",
          "A war of conquest",
          "A war of annexation",
          "A war of expansion"
        ],
        "a": 0,
        "tier": 3
      },
      {
        "q": "Which 1836 battle in Texas, following the fall of the Alamo, ended the Texas Revolution against Mexico?",
        "opts": [
          "The Battle of San Jacinto",
          "The Battle of Goliad Massacre",
          "The Siege of Bexar in 1835",
          "The Battle of Gonzales in 1835"
        ],
        "a": 0,
        "tier": 3
      },
      {
        "q": "What was the primary purpose of the Manhattan Project during World War II?",
        "opts": [
          "To develop the atomic bomb",
          "To break German communication codes",
          "To design new fighter aircraft",
          "To build the first jet engine"
        ],
        "a": 0,
        "tier": 3
      },
      {
        "q": "Which battle in 1942 marked the first major Allied land victory against Axis forces in North Africa?",
        "opts": [
          "The Second Battle of El Alamein",
          "The Siege and Battle of Tobruk",
          "The Battle of Kasserine Pass in Tunisia",
          "The Battle of Tunis in 1943"
        ],
        "a": 0,
        "tier": 3
      },
      {
        "q": "Which Prussian military theorist wrote \"On War,\" a foundational text on the philosophy of military strategy?",
        "opts": [
          "Carl von Clausewitz",
          "Antoine-Henri Jomini",
          "Helmuth von Moltke",
          "Alfred von Schlieffen"
        ],
        "a": 0,
        "tier": 4
      },
      {
        "q": "What was the name of the German war plan devised before WWI aiming to defeat France quickly by invading through Belgium?",
        "opts": [
          "The Schlieffen Plan",
          "The Barbarossa Plan",
          "The Manstein Plan",
          "The Ludendorff Offensive"
        ],
        "a": 0,
        "tier": 4
      },
      {
        "q": "Which tactic, refined by German forces in 1918, used small, fast-moving assault groups to infiltrate enemy trench lines?",
        "opts": [
          "Stormtrooper tactics",
          "Small-scale trench raiding",
          "Creeping artillery barrage",
          "Defense in depth doctrine"
        ],
        "a": 0,
        "tier": 4
      },
      {
        "q": "What is the term for Sun Tzu's central idea in \"The Art of War\" about winning without direct battle?",
        "opts": [
          "Achieving victory without fighting",
          "Winning through overwhelming force",
          "Winning through prolonged siege",
          "Winning through alliance building"
        ],
        "a": 0,
        "tier": 4
      },
      {
        "q": "Which German general, known as the \"Desert Fox,\" commanded the Afrika Korps in North Africa during WWII?",
        "opts": [
          "Erwin Rommel",
          "Heinz Guderian",
          "Gerd von Rundstedt",
          "Albert Kesselring"
        ],
        "a": 0,
        "tier": 4
      },
      {
        "q": "What innovation did Heinz Guderian champion, emphasizing concentrated, fast-moving armored divisions supported by air power?",
        "opts": [
          "Blitzkrieg doctrine",
          "Trench warfare doctrine",
          "Defense in depth doctrine",
          "Attrition warfare doctrine"
        ],
        "a": 0,
        "tier": 4
      },
      {
        "q": "Which naval innovation, pioneered by the ironclads USS Monitor and CSS Virginia, marked a shift in Civil War warfare?",
        "opts": [
          "Armored steam-powered warships",
          "Wooden sail-powered frigate ships",
          "Submarine torpedo boats",
          "Wind-powered gunboats"
        ],
        "a": 0,
        "tier": 4
      },
      {
        "q": "What term describes the Mongol tactic of feigning retreat to lure enemies into a vulnerable pursuit formation?",
        "opts": [
          "The feigned retreat",
          "The pincer movement",
          "The forced march",
          "The night ambush"
        ],
        "a": 0,
        "tier": 4
      },
      {
        "q": "Which WWI battle saw the first large-scale use of tanks by the British, at Cambrai in 1917?",
        "opts": [
          "The Battle of Cambrai",
          "The Battle of the Somme",
          "The Battle of Passchendaele",
          "The Battle of Ypres"
        ],
        "a": 0,
        "tier": 4
      },
      {
        "q": "What was the primary tactical innovation of the Roman \"manipular\" legion system during the Republic?",
        "opts": [
          "Flexible small units that could rotate in battle",
          "Massed phalanx formations with long spears",
          "Cavalry-centric charges without infantry support",
          "Fortified wagon circles for defense"
        ],
        "a": 0,
        "tier": 4
      },
      {
        "q": "Which admiral developed the \"crossing the T\" naval tactic used decisively at the Battle of Tsushima in 1905?",
        "opts": [
          "Togo Heihachiro",
          "Chester Nimitz",
          "Isoroku Yamamoto",
          "Zinovy Rozhestvensky"
        ],
        "a": 0,
        "tier": 4
      },
      {
        "q": "What was the German term for the fortified defensive position that the Allies called the \"Hindenburg Line\" in WWI?",
        "opts": [
          "Siegfriedstellung",
          "Westwall fortification",
          "Ostwall defensive line",
          "Atlantikwall coastal wall"
        ],
        "a": 0,
        "tier": 4
      },
      {
        "q": "Which battle in 1242 saw the Teutonic Knights defeated by Alexander Nevsky on a frozen lake?",
        "opts": [
          "The Battle on the Ice",
          "The Battle of Grunwald",
          "The Battle of Tannenberg",
          "The Siege of Pskov"
        ],
        "a": 0,
        "tier": 4
      },
      {
        "q": "What was the primary purpose of the \"Doolittle Raid\" on Tokyo in April 1942?",
        "opts": [
          "To boost American morale after Pearl Harbor",
          "To destroy Japan's industrial base",
          "To assassinate Japanese military leaders",
          "To capture Japanese naval codes"
        ],
        "a": 0,
        "tier": 4
      },
      {
        "q": "Which strategic bombing theory, advocated by Giulio Douhet, argued that air power alone could win wars by breaking civilian morale?",
        "opts": [
          "Douhet's air power doctrine",
          "Mahan's naval power doctrine",
          "Clausewitz's total war doctrine",
          "Liddell Hart's indirect approach"
        ],
        "a": 0,
        "tier": 4
      },
      {
        "q": "What tactical formation did Alexander the Great's Companion Cavalry typically use to break enemy lines?",
        "opts": [
          "A wedge formation",
          "A line formation",
          "A square formation",
          "A circular formation"
        ],
        "a": 0,
        "tier": 4
      },
      {
        "q": "Which WWII operation was the Allied deception plan designed to mislead Germany about the site of the Normandy invasion?",
        "opts": [
          "Operation Fortitude",
          "Operation Mincemeat",
          "Operation Anvil",
          "Operation Jubilee"
        ],
        "a": 0,
        "tier": 4
      },
      {
        "q": "What is the term for the Viet Cong's defensive strategy, using tunnel networks and hit-and-run ambushes against US forces?",
        "opts": [
          "Guerrilla warfare",
          "Trench warfare tactics",
          "Siege warfare tactics",
          "Total warfare doctrine"
        ],
        "a": 0,
        "tier": 4
      },
      {
        "q": "Which naval strategist's writings on \"sea power\" emphasized that control of the seas determined the outcome of great power conflicts?",
        "opts": [
          "Alfred Thayer Mahan",
          "Julian Corbett",
          "Carl von Clausewitz",
          "Antoine-Henri Jomini"
        ],
        "a": 0,
        "tier": 4
      },
      {
        "q": "What was the name of the German WWI unrestricted submarine campaign that contributed to the US entering the war in 1917?",
        "opts": [
          "Unrestricted U-boat warfare",
          "The Zimmermann Telegram plot",
          "The Kaiser's naval blockade",
          "The North Sea mine barrage"
        ],
        "a": 0,
        "tier": 4
      },
      {
        "q": "Which historian's thesis argues that the \"Military Revolution\" of the 16th-17th centuries stemmed from fortification changes (trace italienne) necessitating larger armies?",
        "opts": [
          "Geoffrey Parker",
          "Michael Roberts",
          "John Keegan",
          "Basil Liddell Hart"
        ],
        "a": 0,
        "tier": 5
      },
      {
        "q": "What term did historian Michael Roberts originally coin in 1955 to describe the transformation of European warfare between 1560 and 1660?",
        "opts": [
          "The Military Revolution",
          "The Fiscal-Military State",
          "The Gunpowder Revolution",
          "The Infantry Revolution"
        ],
        "a": 0,
        "tier": 5
      },
      {
        "q": "Which WWI plan's failure, due to the \"Miracle on the Marne\" in 1914, is often attributed to Moltke the Younger weakening the right flank?",
        "opts": [
          "The Schlieffen Plan",
          "The Race to the Sea",
          "The Ludendorff Offensive",
          "The Nivelle Offensive"
        ],
        "a": 0,
        "tier": 5
      },
      {
        "q": "In historiography of the Roman military, what does the term \"Vegetian tradition\" refer to?",
        "opts": [
          "Vegetius's manual shaping later European warfare",
          "The tactics of the Roman navy in the Punic Wars",
          "The organization of the Praetorian Guard",
          "The training methods of Roman gladiators"
        ],
        "a": 0,
        "tier": 5
      },
      {
        "q": "Which concept, developed by Clausewitz, describes the unpredictable factors of chance and friction that disrupt military plans?",
        "opts": [
          "Friction in war",
          "The culminating point",
          "The center of gravity",
          "Absolute war"
        ],
        "a": 0,
        "tier": 5
      },
      {
        "q": "What is the central argument of Victor Davis Hanson's \"Western Way of War\" thesis?",
        "opts": [
          "Western militaries favor decisive, civic-driven infantry battles",
          "Western militaries always outnumbered their opponents in every conflict",
          "Western militaries relied primarily on naval blockades to win wars",
          "Western militaries avoided pitched battles in favor of prolonged sieges"
        ],
        "a": 0,
        "tier": 5
      },
      {
        "q": "Which historian's \"face of battle\" approach shifted military history toward the experience of individual soldiers rather than grand strategy?",
        "opts": [
          "John Keegan",
          "Geoffrey Parker",
          "Michael Howard",
          "Azar Gat"
        ],
        "a": 0,
        "tier": 5
      },
      {
        "q": "What does the term \"Revolution in Military Affairs,\" popularized in the 1990s, primarily refer to?",
        "opts": [
          "Transformative shifts in technology and doctrine reshaping warfare",
          "Political revolutions that overthrow existing military governments",
          "The abolition of all standing armies after the end of the Cold War",
          "The transition from mandatory conscription to all-volunteer forces"
        ],
        "a": 0,
        "tier": 5
      },
      {
        "q": "Which ancient Chinese military treatise, distinct from \"The Art of War,\" is attributed to Sun Bin and emphasizes terrain and deception?",
        "opts": [
          "Sun Bin's Art of War",
          "The Six Secret Teachings",
          "The Wei Liaozi",
          "The Methods of the Sima"
        ],
        "a": 0,
        "tier": 5
      },
      {
        "q": "What is the historiographical debate over the \"Fischer Thesis\" primarily concerned with?",
        "opts": [
          "Germany's premeditated responsibility for causing World War I",
          "France's alleged provocation of the Franco-Prussian War in 1870",
          "Britain's naval policy in the years before World War I",
          "Russia's disputed mobilization timeline in July 1914"
        ],
        "a": 0,
        "tier": 5
      },
      {
        "q": "Which concept from Basil Liddell Hart's writing advocates striking at an enemy's weakest point rather than confronting its strength directly?",
        "opts": [
          "The indirect approach",
          "The direct approach",
          "The attrition approach",
          "The encirclement doctrine"
        ],
        "a": 0,
        "tier": 5
      },
      {
        "q": "What does Azar Gat's work on the history of military thought argue about strategic theory before Clausewitz?",
        "opts": [
          "Enlightenment thinkers pre-shaped Clausewitz's systematic theory",
          "Strategic theory began entirely with Clausewitz himself",
          "Ancient Chinese texts had no influence on European strategic thought",
          "Strategic theory only emerged after the Napoleonic Wars ended"
        ],
        "a": 0,
        "tier": 5
      },
      {
        "q": "Which historian's concept of \"total war\" examines how WWI and WWII blurred the line between combatants and civilian society?",
        "opts": [
          "Roger Chickering",
          "Sir Michael Eliot Howard",
          "Niall Campbell Ferguson",
          "Sir Hew Strachan"
        ],
        "a": 0,
        "tier": 5
      },
      {
        "q": "What is the primary critique historians raise against the \"stab-in-the-back myth\" (Dolchstosslegende) in German WWI historiography?",
        "opts": [
          "It falsely blamed civilians for a battlefield-rooted defeat",
          "It falsely blamed the Kaiser for prolonging the war unnecessarily",
          "It falsely blamed France for violating the Treaty of Versailles early",
          "It falsely blamed Austria-Hungary for dragging Germany into war"
        ],
        "a": 0,
        "tier": 5
      },
      {
        "q": "Which historiographical school emphasizes \"war and society,\" studying how warfare shapes and is shaped by broader social structures?",
        "opts": [
          "The war and society approach",
          "The great man approach",
          "The battle narrative approach",
          "The operational history approach"
        ],
        "a": 0,
        "tier": 5
      },
      {
        "q": "What does \"just war theory,\" rooted in Augustine and Aquinas, primarily evaluate?",
        "opts": [
          "The moral legitimacy of going to war and conduct within it",
          "The economic cost-benefit analysis of prolonged warfare",
          "The technological superiority required to win modern wars",
          "The diplomatic protocols required for declaring war"
        ],
        "a": 0,
        "tier": 5
      },
      {
        "q": "Which historian argued in \"The Pity of War\" that Britain's decision to enter WWI in 1914 was a strategic blunder rather than a necessity?",
        "opts": [
          "Niall Ferguson",
          "Hew Strachan",
          "John Keegan",
          "Margaret MacMillan"
        ],
        "a": 0,
        "tier": 5
      },
      {
        "q": "What is the central thesis of Paul Kennedy's \"The Rise and Fall of the Great Powers\" regarding military overextension?",
        "opts": [
          "Imperial overreach and economic strain erode great power military dominance",
          "Military dominance is permanent once a nation achieves industrial capacity",
          "Great powers fall primarily due to internal political revolutions alone",
          "Naval power alone determines the long-term survival of great powers"
        ],
        "a": 0,
        "tier": 5
      },
      {
        "q": "Which term describes the historiographical shift, as in Christopher Clark's \"The Sleepwalkers,\" from viewing WWI's outbreak as inevitable to emphasizing contingency?",
        "opts": [
          "Contingency-focused revisionism",
          "Structural determinism in diplomacy",
          "Great man historiography of statesmen",
          "Marxist economic determinism theory"
        ],
        "a": 0,
        "tier": 5
      },
      {
        "q": "What does the \"Annales School\" contribute to military historiography through its \"longue duree\" framework?",
        "opts": [
          "Analyzing warfare through slow-changing structures like geography and economy",
          "Focusing exclusively on individual battles and their tactical outcomes",
          "Rejecting the study of any pre-industrial warfare entirely",
          "Prioritizing biographical studies of individual commanders"
        ],
        "a": 0,
        "tier": 5
      }
    ]
  }
];
