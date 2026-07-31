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
          "Venus",
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
          "Europa",
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
          "A meteor",
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
          "A moon orbiting a planet"
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
          "Solid rock only",
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
          "A giant ball of hot gas that produces light and heat through nuclear fusion",
          "A moon orbiting a planet",
          "A type of asteroid"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is an 'astronaut'?",
        "opts": [
          "A person who studies rocks",
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
          "Traveling to space",
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
          "A planet outside our solar system",
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
          "When Earth passes between the Sun and Moon",
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
          "Carbon",
          "Iron"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is a 'nebula'?",
        "opts": [
          "A dying star",
          "A cloud of gas and dust in space, often where stars are born",
          "A type of black hole",
          "A moon of Jupiter"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What causes the phases of the Moon?",
        "opts": [
          "The Moon's own light output changing",
          "Changing angles of sunlight reflecting off the Moon as it orbits Earth",
          "Earth's shadow always covering part of the Moon",
          "The Moon spinning rapidly"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is a 'black hole'?",
        "opts": [
          "A region of space with an extremely strong gravitational pull that not even light can escape",
          "A dark, empty region of space with nothing in it",
          "A type of dying comet",
          "A very dark planet"
        ],
        "a": 0,
        "tier": 2
      },
      {
        "q": "What are the two main types of galaxies, based on shape?",
        "opts": [
          "Round and square",
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
          "A planet within our solar system",
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
          "Pushes matter apart",
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
          "A small, dense star at the end of its life",
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
          "The formation of black holes",
          "The leading scientific model describing the origin and expansion of the universe from an extremely hot, dense initial state",
          "A theory about volcanic eruptions on Mars",
          "A theory explaining lunar eclipses"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is a 'dwarf planet'? Give an example.",
        "opts": [
          "A very small star, like the Sun",
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
          "Interference from Earth's atmosphere",
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
          "A star that flickers on and off",
          "A star with a moon"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is the 'habitable zone' around a star?",
        "opts": [
          "The region closest to the star, with the most heat",
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
          "No new elements, only light",
          "Extremely high-energy conditions capable of forming many of the universe's heavier elements",
          "Only hydrogen and helium",
          "Only carbon dioxide"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is 'redshift' used to help astronomers determine?",
        "opts": [
          "A star's color when observed at noon",
          "That an object is moving away from the observer, based on a stretching of its light wavelength toward the red end of the spectrum",
          "The temperature of a planet's atmosphere",
          "The exact mass of a black hole"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is the Kuiper Belt?",
        "opts": [
          "A ring of asteroids between Mars and Jupiter",
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
          "Permanent bright spots on the Sun",
          "Temporary, relatively cooler and darker regions on the Sun's surface associated with intense magnetic activity",
          "Craters on the Sun's surface",
          "Reflections of Earth on the Sun"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'nuclear fusion' in stars primarily involve?",
        "opts": [
          "Splitting heavy atomic nuclei into lighter ones",
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
          "Galaxies, based on their shape",
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
          "How black holes form",
          "How comets are formed"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'Hubble's Law' a statement about?",
        "opts": [
          "The rotation speed of the Milky Way",
          "The observation that galaxies are receding from us at a speed roughly proportional to their distance, providing evidence for an expanding universe",
          "The orbital period of Jupiter's moons",
          "The temperature gradient of the Sun's layers"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is a 'pulsar'?",
        "opts": [
          "A slowly rotating red giant",
          "A highly magnetized, rotating neutron star that emits beams of electromagnetic radiation observed as regular pulses",
          "A type of nebula",
          "A binary star system with no rotation"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does the term 'escape velocity' refer to?",
        "opts": [
          "The speed of light in a vacuum",
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
          "A telescope technology for magnifying distant objects",
          "The bending of light from a distant object due to the gravity of a massive object, like a galaxy, positioned between it and the observer",
          "A method for measuring a star's temperature",
          "A type of solar eclipse"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is the Chandrasekhar limit relevant to?",
        "opts": [
          "The maximum size of a planet",
          "The maximum mass of a stable white dwarf star, above which it will collapse further, potentially into a neutron star or trigger a supernova",
          "The minimum distance for a habitable zone",
          "The speed limit for objects in orbit"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does the term 'accretion disk' refer to, commonly around black holes or forming stars?",
        "opts": [
          "A solid ring of rock around a planet",
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
          "Ordinary matter that is simply too dim to see with current telescopes",
          "A form of matter that does not emit, absorb, or reflect light, but whose presence is inferred from its gravitational effects on visible matter and galaxies",
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
          "It states that, on a sufficiently large scale, the universe is homogeneous and isotropic, meaning it looks roughly the same in all directions and locations",
          "It only applies to our own galaxy",
          "It states that the universe is not expanding"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'spectroscopy' allow astronomers to determine about a distant star or planet?",
        "opts": [
          "Its exact age in years",
          "Its chemical composition, temperature, and motion, by analyzing the light it emits or absorbs across different wavelengths",
          "Its precise physical diameter alone",
          "Its exact distance without any other data"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is a 'neutron star'?",
        "opts": [
          "A star made entirely of hydrogen gas",
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
          "Directly photographing the exoplanet",
          "Measuring the slight, periodic dimming of a star's light as an orbiting exoplanet passes in front of it",
          "Measuring radio signals from the exoplanet",
          "Detecting gravitational waves from the exoplanet"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is the 'radial velocity method' (Doppler method) of exoplanet detection based on?",
        "opts": [
          "Direct imaging of the planet",
          "Detecting a star's slight wobble, and corresponding shifts in its light spectrum, caused by the gravitational tug of an orbiting planet",
          "Measuring the planet's surface temperature directly",
          "Analyzing the planet's magnetic field directly"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'general relativity', developed by Einstein, primarily a theory of?",
        "opts": [
          "The behavior of subatomic particles",
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
          "A fully formed planetary ring system",
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
          "Their well-defined relationship between pulsation period and luminosity makes them useful as 'standard candles' for measuring cosmic distances",
          "They mark the exact center of every galaxy",
          "They indicate the presence of dark matter directly"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'tidal locking' explain about the Moon's rotation relative to Earth?",
        "opts": [
          "The Moon rotates much faster than it orbits Earth",
          "The Moon's rotational period matches its orbital period around Earth, so the same side always faces Earth",
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
          "The outermost, extremely hot layer of the Sun's atmosphere",
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
          "The mass of a typical black hole",
          "The distance to the nearest star"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is the significance of 'cosmic inflation' theory in early-universe cosmology?",
        "opts": [
          "It describes the ongoing, gradual expansion of the universe observed today",
          "It proposes an extremely rapid, exponential expansion of the universe in a fraction of a second after the Big Bang, helping explain the universe's observed flatness and uniformity",
          "It describes the collapse of stars into black holes",
          "It is a theory explaining the formation of the solar system specifically"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'baryon acoustic oscillation' provide astronomers as a cosmological tool?",
        "opts": [
          "A method for detecting individual exoplanets",
          "A 'standard ruler' based on regular, periodic density fluctuations in the early universe, useful for measuring cosmic distances and the universe's expansion history",
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
          "The boundary surrounding a black hole beyond which nothing, including light, can escape its gravitational pull",
          "The outer edge of the black hole's accretion disk",
          "A theoretical boundary that has never been mathematically defined"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'gravitational wave' detection, such as by LIGO, directly confirm?",
        "opts": [
          "The existence of dark matter",
          "Ripples in spacetime predicted by general relativity, generated by extremely massive accelerating objects, such as merging black holes or neutron stars",
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
          "The observation that the fundamental physical constants of the universe appear finely tuned to permit the existence of observers like us, and the philosophical implications of this",
          "A method for calculating a planet's habitability score directly",
          "A theory about the biological evolution of life on Earth"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'stellar nucleosynthesis beyond iron' require, since fusion of elements heavier than iron does not release net energy?",
        "opts": [
          "A simple continuation of ordinary stellar fusion processes",
          "Extreme, energy-absorbing processes, such as the rapid neutron-capture process (r-process) occurring in supernovae or neutron star mergers",
          "No mechanism exists; elements heavier than iron are not naturally formed",
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
          "They apply only to main-sequence stars",
          "They describe the temperature ranges of stars"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'dark energy' refer to, as distinguished from dark matter, in current cosmological models?",
        "opts": [
          "A form of matter with strong gravitational attraction, like dark matter",
          "A poorly understood form of energy hypothesized to be responsible for the observed accelerating expansion of the universe",
          "The energy released by supernovae explosions",
          "The energy contained within black holes"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is the 'Fermi paradox' concerned with?",
        "opts": [
          "The mathematical inconsistency in general relativity",
          "The apparent contradiction between the high estimated probability of extraterrestrial civilizations existing and the lack of observed evidence or contact with them",
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
          "The overwhelming brightness of the host star relative to the much dimmer planet, requiring techniques like coronagraphs to block the star's light",
          "The planet's lack of any detectable light",
          "The planet's excessive distance from Earth, which cannot be overcome"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'reionization' in the history of the early universe?",
        "opts": [
          "The initial formation of protons and neutrons after the Big Bang",
          "The period when the first stars and galaxies ionized the neutral hydrogen gas that had filled the universe, making it transparent to light",
          "The current accelerating expansion of the universe",
          "The formation of the cosmic microwave background radiation itself"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does the 'Lambda-CDM model' represent as the current standard model of cosmology?",
        "opts": [
          "A model with no dark matter or dark energy included",
          "A model incorporating dark energy (denoted Lambda) and cold dark matter (CDM), alongside ordinary matter, to explain the universe's large-scale structure and expansion history",
          "A purely Newtonian model of the solar system",
          "A model that rejects the Big Bang theory"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'astrometry' used for in astronomy?",
        "opts": [
          "Measuring a star's exact chemical composition only",
          "Precisely measuring the positions and movements of celestial objects, useful for detecting exoplanets through a star's positional wobble",
          "Measuring a planet's surface temperature",
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
          "Wind generated by a planet's rotation",
          "A type of solar eclipse"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is the significance of the 'cosmic distance ladder' in astronomy?",
        "opts": [
          "A single, universal method for measuring all cosmic distances at once",
          "A succession of different methods, each calibrated against the next, used to measure progressively greater cosmic distances, since no single method works at all scales",
          "A physical structure used to launch space telescopes",
          "A method for measuring only distances within our solar system"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'metallicity' refer to when astronomers describe a star's composition?",
        "opts": [
          "The percentage of the star made of metallic elements exclusively",
          "The proportion of a star's mass composed of elements heavier than hydrogen and helium, which astronomers broadly term 'metals'",
          "The magnetic field strength of a star",
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
          "The final collapse phase of a massive star",
          "A phase exclusive to binary star systems"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'microlensing' as an exoplanet and dark matter detection technique rely on?",
        "opts": [
          "Direct photography of the object being studied",
          "The gravitational bending and magnifying of light from a background star as a foreground object, like a planet or dark matter clump, passes in front of it",
          "Measuring the object's radio emissions",
          "Measuring the object's exact surface temperature"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is the significance of 'the Great Attractor' in large-scale cosmic structure?",
        "opts": [
          "A theoretical black hole at the center of the Milky Way",
          "A massive gravitational anomaly in the local universe that appears to be pulling the Milky Way and thousands of other galaxies toward it",
          "A term for the center of the observable universe",
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
          "A dispute over the exact mass of the first imaged black hole",
          "A disagreement about black holes' rotational speed"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'Hawking radiation' theoretically predict about black holes?",
        "opts": [
          "Black holes are entirely stable and never change over time",
          "Black holes should slowly emit thermal radiation due to quantum effects near the event horizon, causing them to gradually lose mass and eventually evaporate",
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
          "It proposes that all the information contained within a volume of space, such as inside a black hole, can be encoded on a lower-dimensional boundary surface, with deep implications for quantum gravity",
          "It is a purely metaphorical idea with no basis in theoretical physics",
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
          "A dispute about a black hole's event horizon radius",
          "A problem measuring a star's exact distance"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is 'primordial nucleosynthesis' (Big Bang nucleosynthesis) theoretically responsible for producing in the early universe?",
        "opts": [
          "All of the periodic table's elements, including heavy metals",
          "The light elements, primarily hydrogen, helium, and trace amounts of lithium, formed within the first few minutes after the Big Bang",
          "Only carbon and oxygen",
          "Only heavy radioactive elements"
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
          "Electromagnetism and the strong nuclear force only",
          "Chemistry and biology"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'loop quantum gravity', as one candidate approach to quantum gravity, propose about the structure of spacetime?",
        "opts": [
          "Spacetime is perfectly smooth and continuous at all scales",
          "Spacetime itself may have a discrete, granular structure at the Planck scale, composed of finite loops woven into a spin network",
          "Spacetime does not exist as a physical entity",
          "Gravity is not a real force and requires no quantum description"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical motivation behind 'string theory' as a candidate framework unifying gravity with quantum mechanics?",
        "opts": [
          "It proposes that fundamental particles are point-like with zero dimension, as in the Standard Model",
          "It proposes that fundamental particles are actually tiny, vibrating one-dimensional 'strings', with different vibration modes corresponding to different particles, potentially unifying all fundamental forces including gravity",
          "It rejects the existence of fundamental particles entirely",
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
          "It conjectures that singularities formed by gravitational collapse are always hidden behind an event horizon (rather than being 'naked'), preserving the predictability of general relativity outside black holes",
          "It conjectures that all information can freely escape black holes",
          "It is a proven theorem with no remaining open questions"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'the no-hair theorem' in general relativity state about black holes?",
        "opts": [
          "Black holes retain detailed information about everything that fell into them",
          "A stationary black hole can be completely characterized externally by only three properties, mass, electric charge, and angular momentum, with no other distinguishing 'hair' or detail",
          "Black holes must always be perfectly spherical with zero rotation",
          "Black holes cannot have any electric charge"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'eternal inflation' as an extension of standard cosmic inflation theory?",
        "opts": [
          "It proposes inflation occurred only once, in a single uniform burst",
          "It proposes that in some versions of inflationary theory, inflation never fully stops everywhere, continually spawning causally disconnected 'bubble universes', potentially forming a multiverse",
          "It is a theory rejecting the existence of the Big Bang entirely",
          "It applies exclusively to the formation of individual solar systems"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'primordial gravitational wave' detection, if achieved via the cosmic microwave background's B-mode polarization, potentially confirm?",
        "opts": [
          "The existence of exoplanets around distant stars",
          "Direct evidence of cosmic inflation, since inflation is predicted to have generated a background of gravitational waves imprinted as a specific polarization pattern in the cosmic microwave background",
          "The exact mass of every black hole in the observable universe",
          "The existence of dark matter particles directly"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical basis of 'braneworld cosmology' models, derived from certain string theory frameworks?",
        "opts": [
          "The idea that our observable universe may be confined to a lower-dimensional 'brane' embedded within a higher-dimensional 'bulk' space, potentially explaining gravity's relative weakness compared to other fundamental forces",
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
          "A problem measuring a single star's exact luminosity",
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
          "A purely mathematical curiosity with no relevance to cosmology"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'holographic dark energy' propose as an alternative explanation for cosmic acceleration, drawing on the holographic principle?",
        "opts": [
          "That dark energy does not exist and acceleration is a measurement error",
          "That the dark energy density might be related to the information content bound by a cosmological horizon, as suggested by holographic principle reasoning applied to cosmology",
          "That dark energy is identical to ordinary dark matter",
          "That the universe is not actually accelerating in its expansion"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'firewalls', proposed in the black hole information paradox debate, as a potential resolution?",
        "opts": [
          "A firewall proposes black holes contain literal fire that destroys infalling matter instantly with no further implications",
          "A firewall is a hypothesized high-energy barrier at a black hole's event horizon proposed to resolve tensions between the equivalence principle of general relativity and the unitarity requirements of quantum mechanics regarding information preservation",
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
          "The difficulty of defining a well-behaved, non-arbitrary probability measure for comparing outcomes across an infinite ensemble of universes generated by eternal inflation, complicating predictions from multiverse theories",
          "A problem measuring the exact size of a single galaxy",
          "A dispute about telescope calibration standards"
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
          "Total money earned before expenses",
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
          "The total money left after all expenses",
          "A company's total debt",
          "A company's number of employees"
        ],
        "a": 0,
        "tier": 1
      },
      {
        "q": "What is a 'customer'?",
        "opts": [
          "A person who works for a company",
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
          "A large, established corporation",
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
          "Manufacturing a product",
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
          "A method of employee training"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a 'competitor'?",
        "opts": [
          "A company's own employee",
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
          "Back to Basics",
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
          "A type of business license",
          "A marketing advertisement"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does 'entrepreneur' mean?",
        "opts": [
          "A company's largest shareholder",
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
          "A company's office location"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does 'brand' refer to in business?",
        "opts": [
          "A company's tax ID number",
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
          "A one-time bonus payment",
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
          "A type of employee contract",
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
          "A type of business loan"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does 'net profit' generally mean?",
        "opts": [
          "Total revenue before any deductions",
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
          "A type of employee contract",
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
          "Increasing a product's price"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a 'merger' between two companies?",
        "opts": [
          "One company suing another",
          "Two companies combining into a single company",
          "A company declaring bankruptcy",
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
          "A company's employee schedule"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'market share' measure?",
        "opts": [
          "A company's total profit",
          "The percentage of an industry's total sales that a specific company controls",
          "The number of a company's employees",
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
          "The maximum possible profit a company can earn",
          "The point at which a company must raise prices"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'SWOT analysis' stand for?",
        "opts": [
          "Sales, Workforce, Operations, Taxes",
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
          "Total revenue minus total expenses of every kind",
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
          "A company's total profit",
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
          "Costs increasing as production increases",
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
          "A type of employee contract",
          "A company's annual report"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'churn rate' measure in a subscription business?",
        "opts": [
          "The rate at which new customers are acquired",
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
          "A company entering a completely unrelated industry"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'EBITDA' stand for?",
        "opts": [
          "Earnings Before Interest, Taxes, Depreciation, and Amortization",
          "Estimated Business Income Tax Deduction Amount",
          "Employee Benefits, Insurance, Tax, and Deferred Assets",
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
          "A government tax filing deadline",
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
          "A merger between two companies"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is 'working capital'?",
        "opts": [
          "Total company debt",
          "Current assets minus current liabilities",
          "A company's total annual revenue",
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
          "Splitting a company's stock into more shares",
          "Reducing a product's price"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is 'due diligence' in a business acquisition context?",
        "opts": [
          "Signing a contract immediately without review",
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
          "The company's total number of employees",
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
          "Closing the business permanently",
          "A fundamental change in a company's business strategy or product direction, often based on market feedback",
          "Hiring a new CEO",
          "Filing for a business loan"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does Porter's Five Forces framework analyze?",
        "opts": [
          "An individual employee's performance",
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
          "Being the last company to enter a market",
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
          "The direct monetary cost of a purchase",
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
          "The number of competitors in a market"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'agency theory' in corporate governance primarily address?",
        "opts": [
          "The relationship between a company and a government regulator",
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
          "A government-mandated business requirement",
          "A company's total assets"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'disruptive innovation', a term coined by Clayton Christensen, describe?",
        "opts": [
          "Any new product launch by a company",
          "An innovation that creates a new market and value network, eventually displacing established market leaders and products",
          "A temporary supply chain disruption",
          "A company's marketing budget increase"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is the 'principal-agent problem' most concerned with?",
        "opts": [
          "Pricing strategy for new products",
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
          "A company's physical office design only",
          "A government business regulation"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'lean startup methodology' primarily focused on?",
        "opts": [
          "Maximizing initial funding before building a product",
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
          "A government regulation on telecommunications"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'transfer pricing' in a multinational corporation context?",
        "opts": [
          "The price a company charges external customers",
          "The pricing of transactions between related entities within the same corporate group, often across different tax jurisdictions",
          "The price of transferring company ownership",
          "A type of employee relocation cost"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does the 'resource-based view' (RBV) of the firm argue drives competitive advantage?",
        "opts": [
          "External market conditions alone",
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
          "A government policy limiting business growth",
          "A type of financial audit"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'total addressable market' (TAM) estimate?",
        "opts": [
          "A company's current annual revenue",
          "The total revenue opportunity available if a product or service achieved 100% market share of its target market",
          "A company's total number of employees",
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
          "A company's internal accounting practices",
          "Employee recruitment processes"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'moat', as popularized by Warren Buffett, refer to in business analysis?",
        "opts": [
          "A company's physical office layout",
          "A sustainable competitive advantage that protects a company's market position and profits from competitors",
          "A type of short-term business loan",
          "A government trade tariff"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is the 'bullwhip effect' in supply chain management?",
        "opts": [
          "A sudden increase in a company's stock price",
          "The phenomenon where small fluctuations in consumer demand cause increasingly larger fluctuations in orders further up the supply chain",
          "A marketing technique for increasing sales",
          "A type of employee performance review"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'organizational ambidexterity' refer to in strategic management?",
        "opts": [
          "A company's ability to operate in two different countries",
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
          "A method for a company to communicate with regulators only",
          "A framework explaining how parties with more information convey credible signals to those with less information to reduce information asymmetry",
          "A method for pricing new products",
          "A theory about supply chain logistics"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does the Modigliani-Miller theorem, foundational to corporate finance theory, argue about capital structure in a perfect market?",
        "opts": [
          "A firm's value is significantly affected by its debt-to-equity ratio",
          "A firm's value is unaffected by how it is financed, in the absence of taxes, bankruptcy costs, and information asymmetry",
          "Firms should always finance entirely with equity",
          "Firms should always maximize debt to minimize taxes"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'transaction cost economics', associated with Ronald Coase and Oliver Williamson, use to explain why firms exist?",
        "opts": [
          "Government regulation alone forces firms to exist",
          "Firms exist to internalize transactions and reduce the costs of using the market, such as search, negotiation, and enforcement costs",
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
          "The idea that strategic investments, like entering a new market, can be valued similarly to financial options, capturing the value of managerial flexibility under uncertainty",
          "It only applies to publicly traded stock decisions",
          "It replaces the need for any financial analysis"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is the 'dynamic capabilities' framework in strategic management theory concerned with?",
        "opts": [
          "A firm's static set of fixed resources",
          "A firm's ability to integrate, build, and reconfigure internal and external competencies to address rapidly changing environments",
          "A firm's short-term cash flow management",
          "A firm's tax optimization strategy"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'behavioral economics', as applied to organizational decision-making, challenge about traditional economic models of the firm?",
        "opts": [
          "Nothing; it fully supports classical rational-actor assumptions",
          "The assumption that managers and consumers always act as perfectly rational, utility-maximizing agents, incorporating psychological biases instead",
          "The existence of markets entirely",
          "The relevance of supply and demand"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'institutional theory' in organizational studies argue shapes firm behavior, beyond pure efficiency considerations?",
        "opts": [
          "Only a firm's internal financial metrics",
          "Social and cultural pressures for legitimacy, leading organizations in the same field to become more similar over time (isomorphism)",
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
          "It applies exclusively to the labor market"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does the 'contingency theory' of organizational design argue, as opposed to a 'one best way' approach?",
        "opts": [
          "Every organization should be structured identically for efficiency",
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
          "A situation where competitors always choose opposite strategies",
          "A situation where firms' optimal strategies reinforce each other, such that an increase in one firm's activity increases the incentive for others to do the same",
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
          "Single-loop learning, which corrects errors within existing frameworks, and double-loop learning, which questions the underlying assumptions themselves",
          "Individual learning and no organizational learning at all",
          "Financial learning and marketing learning"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is the 'principal-principal conflict', distinct from the classic principal-agent problem, particularly relevant in firms with concentrated ownership?",
        "opts": [
          "A conflict between a firm and a government regulator",
          "A conflict between majority and minority shareholders, where controlling shareholders may expropriate value from minority shareholders",
          "A conflict between two competing firms",
          "A conflict between employees and management only"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'real earnings management', as distinct from accrual-based earnings management, involve?",
        "opts": [
          "Illegally falsifying financial statements outright",
          "Altering actual business activities, like cutting R&D spending, to influence reported earnings within accounting rules",
          "A government-mandated accounting adjustment",
          "A routine annual audit process"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is the 'efficient boundary of the firm', per transaction cost economics, meant to determine?",
        "opts": [
          "The physical size of a company's office",
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
          "A government's regulatory categories for industries",
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
          "A firm's environmental sustainability practices exclusively",
          "A firm's supply chain logistics"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does the 'knowledge-based view' of the firm argue is the primary basis for sustained competitive advantage?",
        "opts": [
          "A firm's physical capital and machinery",
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
          "Environments characterized by intense and rapidly escalating competition, where competitive advantages are quickly eroded and must be continuously renewed",
          "A monopolistic market with no competition",
          "A government-regulated industry with fixed prices"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'organizational slack' refer to in strategic management theory?",
        "opts": [
          "A lack of employee motivation",
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
          "How firms allocate financial capital only",
          "How the focus and allocation of decision-makers' limited attention shapes what a firm perceives, interprets, and acts upon strategically",
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
          "Avoid taxation legally in all jurisdictions"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does the 'incomplete contracts' literature in organizational economics, associated with Oliver Hart, argue is a fundamental limitation on contracting?",
        "opts": [
          "Contracts can always specify every possible future contingency perfectly",
          "It is impossible to write contracts that specify every contingent action for every possible future state, making the allocation of residual control rights central to firm boundaries and governance",
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
          "Government mandates on ownership structure"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the significance of 'real business cycle theory' in macroeconomics for understanding aggregate business fluctuations?",
        "opts": [
          "It attributes economic fluctuations primarily to changes in the money supply",
          "It attributes business cycle fluctuations primarily to real (non-monetary) shocks, such as technology shocks, propagated through the economy via optimizing agents' rational responses",
          "It denies that business cycles exist at all",
          "It attributes all fluctuations solely to government fiscal policy"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'contest theory' (or tournament theory) in organizational economics, associated with Edward Lazear and Sherwin Rosen, use to explain executive compensation structures?",
        "opts": [
          "Executives are paid purely based on absolute individual output",
          "Compensation structured as a rank-order tournament, with large prizes for top performers, can efficiently incentivize effort even when individual output is hard to measure directly",
          "Executive pay should always equal average worker pay",
          "Compensation has no effect on managerial effort"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the core argument of 'population ecology' theory (Hannan and Freeman) regarding organizational change, as distinct from adaptation-focused strategic management views?",
        "opts": [
          "Organizations can freely and easily adapt to any environmental change",
          "Structural inertia limits organizations' ability to adapt, so environmental selection (differential survival of organizational forms) is often a more powerful force than adaptation",
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
          "Self-enforcing informal agreements sustained by the shadow of the future, reputation effects, and relationship-specific trust, beyond what formal contracts can capture",
          "Government intervention is required in every case",
          "Relational contracts are legally identical to formal contracts"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical contribution of 'mechanism design theory' (Hurwicz, Maskin, Myerson, Nobel laureates) to auction and market design?",
        "opts": [
          "It only applies to government-run auctions",
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
          "Removing any single market distortion always improves overall welfare",
          "If one optimality condition in an economic system cannot be satisfied, satisfying additional optimality conditions elsewhere may not necessarily increase, and could decrease, overall welfare",
          "Perfect competition is always achievable through partial reforms",
          "All market distortions have identical welfare effects"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the significance of 'Coasean bargaining' (per Ronald Coase's 1960 theorem) for resolving externalities in the absence of transaction costs?",
        "opts": [
          "Externalities can never be resolved without government intervention",
          "In the absence of transaction costs, parties can bargain to an efficient allocation of resources regardless of the initial assignment of property rights",
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
          "How a firm's deeply held, collectively shared beliefs about 'who we are as an organization' can both enable and constrain strategic adaptation and change efforts",
          "Organizational identity is identical across all firms in an industry",
          "Identity only concerns marketing and branding decisions"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the core insight of 'search theory' in labor and industrial organization economics for understanding frictional unemployment and pricing dispersion?",
        "opts": [
          "Markets always clear instantaneously with no friction",
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
          "A legal fiction serving as a nexus for a set of contracting relationships among various stakeholders, including shareholders, managers, employees, and creditors, each with distinct interests",
          "A purely government-created institution with no private contracting",
          "An entity with no meaningful internal conflicts of interest"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the significance of 'multi-task principal-agent theory' (Holmström and Milgrom) for designing incentive contracts when agents perform multiple tasks?",
        "opts": [
          "A single strong incentive on one measurable task is always optimal regardless of other tasks",
          "Providing strong incentives on easily measurable tasks can distort effort away from equally or more important but harder-to-measure tasks, requiring careful balance in incentive intensity across tasks",
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
          "Firms may achieve ambidexterity through structural separation of exploratory and exploitative units, contextual ambidexterity within individuals, or temporal cycling between modes",
          "Exploration and exploitation are functionally identical activities",
          "Only startups can achieve organizational ambidexterity"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'reference-dependent preferences' and 'loss aversion' (Kahneman and Tversky's prospect theory) for corporate risk-taking and pricing decisions?",
        "opts": [
          "Decision-makers evaluate outcomes as absolute wealth levels, exactly as in classical expected utility theory",
          "Decision-makers evaluate outcomes as gains or losses relative to a reference point, weighting losses more heavily than equivalent gains, which alters predicted risk-taking and pricing behavior compared to classical models",
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
          "Organizations' need to manage dependencies on external resources controlled by other organizations in their environment, shaping strategies to reduce uncertainty and increase autonomy",
          "Government mandates requiring specific alliance structures",
          "Organizations never depend on external resources"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the core contribution of 'strategic factor market theory' (Barney, 1986) to the resource-based view of the firm?",
        "opts": [
          "Any resource purchased in an open market can generate above-normal economic returns",
          "Resources acquired at their true economic value in a competitive strategic factor market cannot generate above-normal returns; only resources acquired below their value, often due to differing expectations or luck, can generate superior performance",
          "All firms have equal access to identical strategic resources",
          "Strategic factor markets are always perfectly efficient with no expectational differences among buyers"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'the theory of dynamic pricing and revenue management', rooted in operations research and economics, mathematically optimize for firms with perishable inventory, such as airlines or hotels?",
        "opts": [
          "A single fixed price applied uniformly to all customers regardless of timing",
          "Prices that vary dynamically over time and across customer segments to maximize total revenue, given demand forecasts, inventory constraints, and price sensitivity",
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
          "Stable matching algorithms can allocate resources efficiently and fairly using preference orderings alone, without relying on a price mechanism, addressing markets where monetary exchange is infeasible or prohibited",
          "Matching markets always fail without a price mechanism",
          "Preference-based allocation is mathematically impossible to guarantee stability"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the core theoretical insight of 'the Uppsala model' of firm internationalization for explaining how firms expand into foreign markets over time?",
        "opts": [
          "Firms typically enter all foreign markets simultaneously with full commitment from the outset",
          "Firms typically internationalize incrementally, increasing commitment to foreign markets gradually as they accumulate experiential market knowledge, often starting with 'psychically close' markets",
          "International expansion decisions are entirely random and unrelated to accumulated knowledge",
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
          "Nintendo",
          "Microsoft",
          "Sega"
        ],
        "a": 2,
        "tier": 1
      },
      {
        "q": "What is an 'avatar' in a video game?",
        "opts": [
          "A type of game console",
          "The character a player controls to represent themselves in the game",
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
          "Donkey Kong"
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
          "Displaying the game on screen",
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
          "Playing only sports simulations"
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
          "A type of game controller",
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
          "A game that can only be played alone",
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
          "A type of in-game currency",
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
          "A type of gaming console exclusive to sports games",
          "A single-player gaming mode"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a video game 'save file' used for?",
        "opts": [
          "Deleting a player's game progress",
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
          "A method for reporting bugs to developers",
          "A type of graphics rendering technique"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'speedrunning' refer to in gaming culture?",
        "opts": [
          "Playing a game as slowly as possible to explore every detail",
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
          "A physical box used to store gaming consoles",
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
          "A bonus reward for completing a level quickly"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is a 'loot box' in gaming?",
        "opts": [
          "A container used to store a physical game disc",
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
          "The game's tutorial section"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is 'permadeath' in video game design?",
        "opts": [
          "A temporary in-game penalty with no lasting consequence",
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
          "A game that can only be played with an internet connection",
          "A game genre focused exclusively on puzzles"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is a video game 'patch'?",
        "opts": [
          "A physical accessory for a game controller",
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
          "A visual representation of a game's file structure",
          "A method for organizing multiplayer lobbies"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is 'procedural generation' in game development?",
        "opts": [
          "Manually designing every level by hand with no automation",
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
          "Different graphics settings options",
          "Types of game controllers"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is 'aggro' in gaming terminology?",
        "opts": [
          "A game's difficulty setting",
          "The attention or hostility of an enemy, often directed toward a specific player or character",
          "A type of in-game currency",
          "A multiplayer chat feature"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'sandbox game' generally mean?",
        "opts": [
          "A game confined to a small, literal sandbox setting only",
          "A game offering significant creative freedom, allowing players to build, explore, and interact with the game world with minimal imposed objectives",
          "A game that can only be played on mobile devices",
          "A game genre focused exclusively on racing"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is a 'boss fight' in video games?",
        "opts": [
          "A regular, minor enemy encounter",
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
          "A method for transferring save files between consoles",
          "A type of split-screen local multiplayer"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is 'early access' in the context of video game releases on platforms like Steam?",
        "opts": [
          "A version of a game released only to game journalists",
          "A model where a game is sold and made playable to the public before its full, official release, often to gather feedback during development",
          "A demo version with no purchase required",
          "A subscription-only version of a game"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'game engine' refer to?",
        "opts": [
          "The physical hardware inside a gaming console",
          "The underlying software framework used by developers to build and run a video game, handling elements like graphics, physics, and audio",
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
          "A method for detecting cheating in online games",
          "A type of in-game camera control scheme"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'frame data' refer to in fighting game analysis?",
        "opts": [
          "The visual resolution settings of a game",
          "Precise numerical information about the timing, startup, and recovery of specific moves, measured in frames, used for competitive strategy",
          "A method for compressing video game graphics",
          "A type of matchmaking ranking system"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'input lag' as a technical concept distinct from network lag?",
        "opts": [
          "Delay caused specifically by network connectivity issues",
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
          "The underlying software architecture and techniques used to synchronize game state and handle latency between players over a network connection",
          "A type of in-game currency system",
          "A method for organizing single-player save files"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'rollback netcode', a specific networking technique increasingly used in fighting games?",
        "opts": [
          "A technique that pauses the game entirely whenever any network delay is detected",
          "A technique where the game predicts player inputs to minimize perceived input lag, and 'rolls back' and recalculates the game state if the prediction was incorrect once the actual input arrives",
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
          "The design process of ensuring different strategies, characters, or systems within a game are comparably viable and fair, avoiding any single dominant, unbeatable option",
          "A method for adjusting a game's difficulty for accessibility only",
          "The physical weight distribution of a game controller"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'ludonarrative dissonance', a term used in game criticism?",
        "opts": [
          "A technical glitch causing audio and video to desynchronize",
          "A perceived conflict or contradiction between a game's narrative themes or story and the actions and incentives embedded in its actual gameplay mechanics",
          "A type of multiplayer connection error",
          "A method for balancing a game's difficulty curve"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'the game design concept of 'flow'', adapted from psychologist Mihaly Csikszentmihalyi's broader theory, describe as an ideal player experience?",
        "opts": [
          "A state where a player is constantly overwhelmed and frustrated by excessive difficulty",
          "A mental state of complete immersion and focused engagement, achieved when a game's challenge level is well-matched to a player's skill level, neither too easy (boring) nor too hard (frustrating)",
          "A technical term for a game's frame rate performance",
          "A method for organizing a game's save file structure"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'skinner box design' or 'compulsion loop design', a critically-discussed concept in game monetization?",
        "opts": [
          "A design philosophy focused purely on artistic visual style with no gameplay implications",
          "A design approach, drawing a critical analogy to psychological operant conditioning research, that structures reward schedules, such as randomized loot drops, to encourage repetitive, often compulsive player engagement and spending",
          "A term for a game's tutorial level design",
          "A method for optimizing a game's loading times"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'emergent gameplay' refer to in game design?",
        "opts": [
          "Gameplay scenarios explicitly scripted and predetermined by the developers in every detail",
          "Unplanned, often surprising gameplay situations and player strategies that arise naturally from the interaction of a game's underlying systems and rules, rather than being explicitly designed",
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
          "A genre characterized by exploration of an interconnected map, with progress often gated by acquiring new abilities that unlock previously inaccessible areas",
          "A genre focused exclusively on turn-based strategy",
          "A genre defined by purely linear, non-branching level design"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'the concept of 'diegetic' versus 'non-diegetic' user interface elements' distinguish in game design?",
        "opts": [
          "Elements are categorized based purely on their visual color scheme",
          "Diegetic UI elements exist within the game's fictional world, visible to characters, such as a health display on a character's suit, while non-diegetic elements, like a standard health bar overlay, exist only for the player, outside the game's fictional reality",
          "This distinction refers exclusively to a game's audio design, with no relevance to visual interface elements",
          "Diegetic and non-diegetic are terms used exclusively in film, with no application to video games"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'a soulslike', as a genre term derived from the 'Dark Souls' franchise?",
        "opts": [
          "A genre characterized by extremely easy difficulty and generous checkpoints",
          "A genre characterized by demanding difficulty, methodical combat, significant player punishment for death often involving lost resources, and interconnected, atmospheric level design",
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
          "The frequency at which a game server updates and processes the game state, measured in updates per second, which can significantly affect the precision and responsiveness of online gameplay",
          "A method for compressing a game's downloadable file size",
          "A ranking system for competitive matchmaking"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'a roguelike', as a genre distinguished by specific structural conventions derived from the game 'Rogue'?",
        "opts": [
          "A genre defined by a single, fixed, non-random level layout that never changes",
          "A genre typically featuring procedurally generated levels, permanent character death requiring a fresh run upon failure, and significant reliance on randomization for a highly replayable experience",
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
          "A method for adjusting a game's overall difficulty level"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'a battle royale', as a game mode popularized by titles like 'Fortnite' and 'PUBG'?",
        "opts": [
          "A cooperative mode where all players work together against AI enemies",
          "A large-scale, last-player-or-team-standing competitive mode, typically featuring a shrinking safe zone that forces players into increasingly close confrontation over the course of a match",
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
          "A numerical estimate of a player's skill level, used by a matchmaking system to pair them with opponents and teammates of comparable skill",
          "A player's in-game currency balance",
          "A measure of a player's internet connection speed"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'a live service game', as a modern industry business and design model?",
        "opts": [
          "A game released once with no planned post-launch content or updates",
          "A game designed to be continuously updated and supported with new content, events, and monetization over an extended period after its initial release, rather than being a one-time, complete purchase",
          "A game that can only be played via a live-streamed broadcast, with no direct player control",
          "A genre focused exclusively on historical simulation"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'accessibility options' in modern game design, such as customizable difficulty, colorblind modes, or remappable controls, aim to achieve?",
        "opts": [
          "Making a game exclusively harder for experienced players",
          "Allowing a broader range of players, including those with disabilities or differing needs, to comfortably play and enjoy a game by adjusting its presentation and mechanics",
          "Restricting a game's content only to a specific age group",
          "Reducing a game's file size for lower-end hardware exclusively"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'a Metroidvania map's concept of 'gating', as a specific level design technique'?",
        "opts": [
          "Physically locking a player out of the game entirely after a certain point",
          "Using ability-based or item-based barriers to prevent players from accessing certain areas until they acquire a specific upgrade or item, structuring the pace and order of exploration",
          "A method for organizing a game's audio settings menu",
          "A term for a multiplayer game's spectator mode"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'the magic circle', a concept adapted from game theorist Johan Huizinga's work and applied by scholars like Katie Salen and Eric Zimmerman, describe about the boundary of play?",
        "opts": [
          "A literal, physical circular boundary marked on the ground during a game",
          "A conceptual, socially agreed-upon boundary that separates the special context of a game, with its own internally consistent rules and meanings, from ordinary 'real life', within which actions carry different significance",
          "A technical term for a game's rendering boundary or draw distance",
          "A specific mechanic used only in tabletop board games"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'the MDA framework' (Mechanics, Dynamics, Aesthetics), an influential formal approach to game design analysis?",
        "opts": [
          "A framework used exclusively for analyzing a game's visual art style",
          "A framework analyzing games at three interrelated levels: the underlying rules and systems (Mechanics), the run-time behavior arising from those mechanics in play (Dynamics), and the resulting emotional player experience (Aesthetics)",
          "A method for calculating a game's minimum hardware requirements",
          "A ranking system used in competitive esports"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'ludology', as an academic field of game studies, argue as its foundational premise regarding how video games should be analyzed?",
        "opts": [
          "Video games should be analyzed using exactly the same critical frameworks developed for film and literature, with no distinct methodology needed",
          "Ludology argues that games possess distinctive formal properties, centered on rules and interactive systems, that are not adequately captured by narrative-centered analytical frameworks borrowed from film or literary studies, and therefore require their own dedicated theoretical and analytical approach",
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
          "Bogost argues that video games possess a unique persuasive capacity, distinct from other media, arising from their procedural nature, meaning the rule-based systems and processes a player must actually interact with can themselves construct and convey an argument or perspective, beyond what could be communicated through explicit text or imagery alone",
          "Procedural rhetoric theory denies that games can convey any meaningful argument or perspective",
          "This concept applies exclusively to educational games, excluding entertainment-focused titles"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'the concept of 'game feel'' as a formalized area of game design research, distinct from more general 'juice'?",
        "opts": [
          "A purely subjective concept with no formal, analyzable components whatsoever",
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
          "Meaningful play occurs when the relationships between player actions and game outcomes are both discernible, meaning the player can perceive the effect of their action, and integrated, meaning the effect meaningfully influences the broader context of future play",
          "This theory applies exclusively to competitive multiplayer games, with no relevance to single-player experiences",
          "Meaningful play theory concludes that all player actions in a well-designed game are equally significant with no hierarchy of importance"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'the concept of 'systemic game design'', as an approach emphasizing emergent complexity arising from interacting simple rules?",
        "opts": [
          "A design approach relying entirely on hand-scripted, pre-determined events with no underlying interacting systems",
          "An approach to game design that prioritizes crafting a set of relatively simple, interconnected underlying systems and rules that interact with each other to produce complex, often unpredictable and emergent gameplay possibilities, rather than relying primarily on scripted, authored content",
          "This concept applies exclusively to turn-based strategy games, excluding real-time genres",
          "Systemic game design theory denies that player-driven emergent behavior is a desirable design outcome"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'the concept of 'player agency'' refer to in game design and criticism?",
        "opts": [
          "A game's total number of possible narrative branches, regardless of player input",
          "The degree to which a player's choices and actions within a game meaningfully influence the game's outcomes, narrative, or state, as opposed to following a strictly predetermined, non-responsive path",
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
          "A term for a game's multiplayer matchmaking queue system"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'the concept of 'difficulty curve design'' formally analyze in game pacing?",
        "opts": [
          "A game's visual art style progression over its various levels",
          "The intentional design and pacing of a game's challenge level over time, typically aiming for a gradual, well-calibrated escalation that continuously develops player skill without excessive frustration or boredom",
          "A method for measuring a game's frame rate performance across different hardware",
          "A term describing a game's monetization revenue over its lifecycle"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'the concept of 'game economy design'', as applied to games with significant in-game currency, trading, or crafting systems?",
        "opts": [
          "A term describing exclusively a game's real-world sales revenue and pricing strategy",
          "The design and balancing of a game's internal systems of resource acquisition, currency, trading, and consumption, aiming for a sustainable, engaging, and appropriately balanced internal economic system",
          "A method for organizing a game's save file structure",
          "A genre term for games focused exclusively on real-world stock market simulation"
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
          "A method for translating a game into multiple languages"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'the concept of 'affordance' in game interface and level design, adapted from design theorist Donald Norman's broader work?",
        "opts": [
          "A game's total production budget",
          "The perceived and actual properties of a game object or environmental feature that suggest to the player how it can be interacted with, such as a ledge visually suggesting it can be grabbed or climbed",
          "A term describing a game's monetization pricing tiers",
          "A method for calculating a game's minimum system requirements"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'the concept of 'kinesthetic gameplay'', as discussed in some formal game design analysis, emphasize?",
        "opts": [
          "Purely narrative-driven gameplay with minimal player interaction",
          "The direct, moment-to-moment physical sensation and pleasure derived from controlling a character or object's movement and physics within a game, independent of broader narrative or strategic considerations",
          "A term describing a game's monetization structure exclusively",
          "A method for organizing a game's difficulty settings menu"
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
          "A method for reporting technical bugs to a game's developers"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'the concept of 'diegetic storytelling' or 'environmental storytelling'' in game design refer to?",
        "opts": [
          "Storytelling conveyed exclusively through explicit, non-interactive cutscenes",
          "Conveying narrative information implicitly through the details, arrangement, and design of the game world's environment itself, such as scattered objects or architectural clues, rather than through explicit dialogue or text",
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
          "The fundamental, frequently repeated cycle of actions, such as explore, fight, loot, and upgrade, that forms the central, moment-to-moment engaging activity of a game",
          "A technical term describing a game's network connection protocol",
          "A method for organizing a game's credits sequence"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'the concept of 'telegraphing' in combat-focused game design refer to?",
        "opts": [
          "An in-game messaging system for player-to-player communication",
          "Visually or audibly signaling an upcoming enemy action, such as a powerful attack, in advance, giving the player a fair opportunity to perceive and react to the threat",
          "A method for compressing a game's save file size",
          "A term describing a game's matchmaking wait times"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'the concept of 'player-driven emergent narrative'', as distinguished from authored, scripted narrative?",
        "opts": [
          "A narrative entirely pre-written by developers with zero player influence on its content",
          "Stories and memorable moments that arise organically from a player's unique interactions with a game's underlying systems, rather than from content explicitly authored or scripted by the game's writers, often unique to that particular player's experience",
          "A term describing a game's official, licensed novelization",
          "A method for organizing a game's downloadable content schedule"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'the concept of 'procedural rhetoric' applied to 'critical games' or 'newsgames'' argue about the unique capacity of interactive systems to convey political or social arguments, as extensively theorized by Ian Bogost?",
        "opts": [
          "Games are theorized to be incapable of conveying any political or social argument, being purely entertainment products with no persuasive capacity",
          "Bogost's extended theory argues that because video games require players to actually enact and internalize a system's underlying rules through direct interaction, they possess a unique persuasive capacity for conveying complex political or social arguments about how systems function, a capacity distinct from and, in certain respects, more powerful than purely textual or visual argumentation",
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
          "Early formal game studies drew on cybernetics theory to characterize games as fundamentally defined by a continuous feedback loop, wherein the player receives information from the game system, makes a decision and acts upon it, and the system responds and adapts in turn, positioning this dynamic, responsive circuit as a defining formal property distinguishing games from non-interactive media",
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
          "The possibility space refers to the complete theoretical set of all potential states, actions, and outcomes that a game's underlying rules and systems allow, with game design fundamentally understood as the act of carefully shaping and constraining this space to produce specific, intended kinds of meaningful player experiences",
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
          "Some game studies scholarship examines how certain deliberately norm-violating or disruptive player behaviors, sometimes termed griefing, can be understood not merely as technical exploitation but as a form of transgressive, creative, or even performative play that reveals underlying tensions and unstated assumptions embedded within a game's formal rules and its surrounding social community norms",
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
          "Some scholars distinguish between the practical skill of successfully playing a game and a distinct, more analytically demanding 'procedural literacy', involving the capacity to critically read, interpret, and even author the underlying rule-based systems that generate a game's behavior, arguing this literacy is increasingly important given games' growing cultural and persuasive significance",
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
          "Critical scholarship examines how matchmaking algorithms, often incorporating proprietary and non-transparent factors beyond pure skill rating, such as engagement optimization or monetization-related signals, can shape player experience, perceived fairness, and long-term retention in ways that raise questions about algorithmic transparency and player trust, extending the broader critical platform studies literature on algorithmic governance into the specific domain of competitive game design",
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
          "Phenomenologically-informed game scholarship examines how players can develop a felt, embodied sense of extended presence and perceptual engagement through their avatar's movement within virtual space, drawing on broader phenomenological philosophy's interest in lived, first-person bodily experience to analyze the distinctive perceptual and kinesthetic qualities of interactive digital play",
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
          "Scholars examine how procedural content generation systems, despite generating content algorithmically rather than by direct hand-authoring, still substantially embody and reflect the specific design intentions, constraints, and aesthetic choices encoded into the generative algorithm by its human designers, complicating any simple binary distinction between purely 'authored' and purely 'generated' game content",
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
          "Critical scholarship situates the design of randomized, probability-based monetization mechanics, such as loot boxes and gacha systems, within the broader political economy of platform capitalism, examining how these systems are optimized to extract sustained player spending through carefully calibrated psychological reward schedules, and analyzing the resulting regulatory, ethical, and consumer protection debates that have emerged across different national jurisdictions",
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
          "Queer game studies scholarship critically examines how many mainstream game design conventions, such as default avatar customization options, binary gender selection systems, or heteronormative romance mechanics, often implicitly encode and reinforce particular normative assumptions about player identity and desire, while also highlighting alternative, independently-developed games that deliberately challenge or subvert these embedded conventions",
          "This critical approach applies exclusively to games explicitly marketed as LGBTQ-themed, with no relevance to analyzing mainstream game design conventions",
          "Queer game studies scholarship concludes that game design choices regarding identity and relationships have no meaningful cultural or ideological significance"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'the concept of 'juiciness diminishing returns'', extending earlier 'game feel' research, propose about the relationship between escalating audiovisual feedback intensity and player satisfaction over extended play sessions?",
        "opts": [
          "Increasing the intensity of audiovisual feedback effects is theorized to produce a permanently linear, ever-increasing improvement in player satisfaction with no diminishing effect",
          "Extended design research building on earlier 'juice' and game feel theory suggests that escalating audiovisual feedback intensity, such as increasingly elaborate particle effects or screen shake, tends to produce diminishing or even negative returns on sustained player satisfaction over long play sessions, as excessive sensory intensity can become fatiguing rather than continuously more rewarding, requiring careful calibration rather than simple maximization",
          "This research area concludes that audiovisual feedback intensity has no measurable relationship to player satisfaction under any circumstances",
          "Diminishing returns theory regarding game feel applies exclusively to games without any audiovisual feedback effects whatsoever"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'proceduralist game criticism', as a specific critical methodology distinguished from more traditional narrative-focused game reviewing?",
        "opts": [
          "Proceduralist criticism evaluates games using exactly the same methodology and criteria as traditional literary or film criticism, with no distinct focus",
          "Proceduralist game criticism, as an approach significantly shaped by scholars like Ian Bogost, emphasizes analyzing and evaluating a game primarily through close examination of its underlying rule systems and the meanings those systems procedurally generate through play, rather than primarily through the game's narrative content, visual presentation, or surface-level entertainment value",
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
          "Design theory examines how sufficiently complex, systemically-driven open-world games can generate emergent, ambient narrative meaning through the dynamic interaction of their underlying simulation systems, such as unscripted NPC behaviors or environmental events, producing narrative texture and meaning that exists alongside, and sometimes independent of, the game's explicitly authored central storyline",
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
          "Critical scholarship drawing loosely on Jameson's concept examines how a game's seemingly neutral, purely technical mechanical systems, such as resource extraction, territorial conquest, or economic simulation mechanics, can implicitly naturalize and reproduce particular real-world ideological assumptions, such as assumptions about capitalism, colonialism, or resource scarcity, even when the game's explicit narrative content makes no overt political statement",
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
          "Scholars examine how speedrunning communities, through intensive collective analysis and exploitation of a game's underlying rule systems, glitches, and mechanical interactions, effectively perform a rigorous, deeply technical form of game analysis and creative reinterpretation, often revealing unintended emergent possibilities and systemic behaviors that neither the original developers nor casual players had anticipated",
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
          "Scholars and archivists highlight that video games present distinctive preservation challenges beyond traditional media, including reliance on specific, often obsolete hardware and software environments, online-dependent components that cease functioning when servers are shut down, and complex licensing and copyright barriers, all complicating efforts to maintain long-term playable access to gaming history for future research and cultural memory",
          "This preservation challenge area has been fully and permanently resolved with no remaining unsolved technical or legal barriers",
          "Game preservation theory concludes that no meaningful differences exist between preserving video games and preserving traditional printed books"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'the concept of 'the ethics of AI-driven NPC behavior and player manipulation'', as an emerging area of critical game design scholarship, examine regarding the use of increasingly sophisticated AI systems to model and respond to individual player psychology?",
        "opts": [
          "The use of AI systems to model player behavior and psychology in games is theorized to raise no meaningful ethical questions whatsoever, being purely a neutral technical optimization",
          "Emerging scholarship examines the ethical implications of increasingly sophisticated AI-driven systems that model individual player psychology and behavioral patterns, potentially enabling highly personalized manipulation of player engagement, spending behavior, or emotional state, raising questions analogous to broader debates about algorithmic manipulation and consent in other digital domains, now extended specifically into interactive game design contexts",
          "This ethical concern area applies exclusively to games explicitly marketed as utilizing artificial intelligence technology in their title or marketing",
          "AI-driven NPC behavior ethics theory concludes that no meaningful distinction exists between simple scripted NPC behavior and sophisticated adaptive AI systems"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'cross-cultural game design comparative analysis', examining how core game design conventions, such as difficulty balancing or narrative pacing, can differ systematically across game industries rooted in different national and cultural contexts, such as Japanese versus Western AAA game development traditions?",
        "opts": [
          "Game design conventions are theorized to be entirely universal and culturally invariant, with absolutely no meaningful systematic variation across different national game development traditions",
          "Comparative game studies scholarship examines how distinct national and regional game development traditions, shaped by differing cultural, economic, and historical contexts, have historically produced systematically different conventions regarding elements like difficulty design philosophy, narrative pacing, and player guidance, complicating any single, universal theory of 'good' game design that fails to account for this cultural variation",
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
          "Critical labor scholarship examines how the industry-wide shift toward continuously-updated live service games, requiring sustained, ongoing post-launch content development rather than a single, finite production cycle, has been argued by critics and labor organizers to contribute to sustained crunch culture, employment precarity, and heightened burnout risk for game development workers, fueling broader ongoing debates about labor organizing and working conditions within the games industry",
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
          "Flanagan's concept of critical play describes a tradition of games, activist game modifications, and playful cultural interventions deliberately designed to disrupt, question, or subvert mainstream cultural, social, or political norms and assumptions through the specific medium of interactive play, positioning games as a legitimate vehicle for cultural critique and activism rather than solely entertainment",
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
          "Venus",
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
          "Hydrogen"
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
          "Venus"
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
          "Mars",
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
          "Silk",
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
          "Mars",
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
          "Watt",
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
          "Hydrogen"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "Which blood cells primarily fight infection?",
        "opts": [
          "Red blood cells",
          "White blood cells",
          "Platelets",
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
          "Newton's third law",
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
          "Watt"
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
          "The speed of light in a vacuum",
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
          "Protein folding structures",
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
          "Reaction rate only",
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
          "DNA replication"
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
          "Provide activation energy permanently",
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
          "A whole chromosome",
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
          "The absorption of light by a material"
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
          "The decay rate of radioactive isotopes",
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
          "It is the particle responsible for electromagnetism",
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
          "The process of DNA replication during mitosis"
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
          "A single particle existing in two places"
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
          "Gene expression levels in tissues"
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
          "Cosmological expansion alone"
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
          "Folding newly synthesized proteins"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "Allosteric regulation of an enzyme refers to:",
        "opts": [
          "Regulation occurring only at the active site",
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
          "Visible matter concentrated in galaxy cores",
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
          "Vaccine development exclusively",
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
          "Kinetic energy"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "Homeostasis refers to an organism's ability to:",
        "opts": [
          "Divide its cells rapidly",
          "Maintain stable internal conditions",
          "Produce large amounts of energy",
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
          "Only divide, never differentiate",
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
          "Only via computer simulation",
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
          "Thermodynamic phase transitions"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "The AdS/CFT correspondence in theoretical physics relates:",
        "opts": [
          "Quantum mechanics directly to classical mechanics",
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
          "The mass of neutrinos",
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
          "Purely mitochondrial inheritance patterns"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "Quantum decoherence explains:",
        "opts": [
          "The spontaneous creation of particles from a vacuum",
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
          "Replacement of a whole chromosome",
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
          "Black holes contain no information whatsoever"
        ],
        "a": 0,
        "tier": 5
      },
      {
        "q": "Protein allostery, at a structural biology level, describes:",
        "opts": [
          "Direct binding exclusively at the active site",
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
          "Sequence the whole genome of a population only",
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
          "A crisis in the cellular DNA replication machinery",
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
          "Electrically conducting throughout its bulk",
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
          "Cutting DNA at multiple sites simultaneously",
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
          "Protein-protein interactions within one cell"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "A quasiparticle, such as a phonon or exciton, is best described as:",
        "opts": [
          "A fundamental particle within the Standard Model",
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
          "Removing quantum effects at large scales",
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
          "A theoretical framework with no laboratory component"
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
          "Cloning is possible but always destroys the original"
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
          "A phase transition observed in condensed matter"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "Proteomics, as distinct from genomics, studies:",
        "opts": [
          "The full set of genes encoded in an organism's genome",
          "The full set of proteins expressed by a genome, cell, tissue, or organism",
          "The full set of small-molecule metabolites only",
          "The full set of membrane lipids only"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "The detection of gravitational waves by LIGO confirmed:",
        "opts": [
          "The direct existence of dark matter",
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
          "Kilimanjaro",
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
          "New York City",
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
          "Pacific",
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
          "Strait of Malacca",
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
          "Somalia"
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
          "Montevideo"
        ],
        "a": 2,
        "tier": 2
      },
      {
        "q": "Which mountain range contains Mount Everest?",
        "opts": [
          "Andes",
          "Rockies",
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
          "A steep mountain valley",
          "A landform where a river deposits sediment as it enters a larger body of water",
          "A type of desert dune",
          "A type of ocean current"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'plate tectonics' theory explain?",
        "opts": [
          "Only volcanic eruptions",
          "The movement of Earth's crust, causing earthquakes and mountain formation",
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
          "A horseshoe-shaped zone around the Pacific Ocean with frequent earthquakes and volcanic activity",
          "A mountain range in South America only",
          "A term for coral reef formations"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'urbanization' refer to in human geography?",
        "opts": [
          "The decline of city populations",
          "The increasing proportion of a population living in urban areas rather than rural areas",
          "The construction of new farmland",
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
          "A permanent ocean current"
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
          "A type of urban planning policy"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is an 'archipelago'?",
        "opts": [
          "A single large island",
          "A group or chain of islands",
          "A type of mountain range",
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
          "The apparent deflection of moving objects, like wind and ocean currents, due to Earth's rotation",
          "A type of volcanic activity",
          "A pattern of continental drift"
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
          "A country's administrative region"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'desertification'?",
        "opts": [
          "The formation of new deserts through volcanic activity",
          "The process by which fertile land becomes desert, often due to drought, deforestation, or unsustainable agriculture",
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
          "A piece of a country's territory that is geographically separated from the main part of that country",
          "A type of international border dispute",
          "A capital city located on an island"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is a 'rain shadow' effect?",
        "opts": [
          "Increased rainfall on both sides of a mountain range",
          "An area of reduced rainfall on the leeward (downwind) side of a mountain range, since moisture falls on the windward side",
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
          "Conditions that drive people to leave a place (push) and conditions that attract them to a new place (pull)",
          "Weather patterns affecting crop yields",
          "Trade tariffs between countries"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is a 'landlocked country'?",
        "opts": [
          "A country entirely covered by forest",
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
          "A type of underground cave system",
          "An area of land where all water drains to a common outlet, such as a river or lake",
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
          "Trade involving the import and re-export of goods through a strategically located port or hub, without significant processing",
          "Trade restricted by international sanctions",
          "A type of agricultural subsidy"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'physical geography' primarily study, as distinguished from human geography?",
        "opts": [
          "Political borders and government systems",
          "Natural features and processes of the Earth, such as landforms, climate, and ecosystems",
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
          "A type of river tributary"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'choropleth map' refer to in cartography?",
        "opts": [
          "A map showing only physical terrain",
          "A thematic map where areas are shaded or patterned to represent a statistical variable, like population density",
          "A map used exclusively for navigation",
          "A 3D relief map"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does the concept of 'geopolitics' broadly analyze?",
        "opts": [
          "Only a country's physical terrain",
          "The influence of geographic factors on international politics, power dynamics, and foreign policy",
          "A country's internal tax policy",
          "A type of urban zoning regulation"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is the 'heartland theory', proposed by Halford Mackinder, concerned with?",
        "opts": [
          "Naval dominance as the key to global power",
          "The idea that control of the Eurasian 'heartland' was key to global geopolitical dominance",
          "The economic development of coastal cities",
          "The distribution of natural resources in Africa"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'central place theory', developed by Walter Christaller, explain?",
        "opts": [
          "The migration patterns of birds",
          "The size, number, and distribution of urban settlements within a region, based on the provision of goods and services",
          "The formation of mountain ranges",
          "The distribution of rainfall across continents"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'geomorphology' the study of?",
        "opts": [
          "Political boundaries and their historical formation",
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
          "Countries with abundant natural resources always develop faster economically",
          "Countries rich in natural resources, particularly non-renewable ones, often experiencing slower economic growth and more instability than resource-poor countries",
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
          "A region caught between stronger, competing powers, often characterized by internal instability and fragmentation",
          "A type of tectonic plate boundary",
          "A region with high agricultural productivity"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'gentrification' refer to in urban geography?",
        "opts": [
          "The decline of a wealthy neighborhood",
          "The process of renovation and revitalization of a deteriorating urban area, often displacing lower-income residents as property values and rents rise",
          "A type of rural-to-urban infrastructure project",
          "A government policy for building new suburbs"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is the 'rimland theory', proposed by Nicholas Spykman as a counter to the heartland theory?",
        "opts": [
          "Control of the interior of continents is most critical for global power",
          "Control of the coastal fringes (rimland) surrounding the Eurasian heartland is more critical to global power than the heartland itself",
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
          "The potential economic growth benefit a country can experience when it has a large working-age population relative to dependents",
          "A government subsidy for large families",
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
          "A method for surveying land boundaries"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'von Thünen's model' in agricultural geography predict?",
        "opts": [
          "Random distribution of agricultural land use",
          "A pattern of concentric rings of agricultural land use around a central market, based on transportation costs and land value",
          "Uniform crop yields regardless of distance from market",
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
          "A political alliance between neighboring countries",
          "A type of coral reef formation"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'the Malthusian trap' describe, as originally theorized by Thomas Malthus?",
        "opts": [
          "Population growth is always sustainable given enough technology",
          "The idea that population growth tends to outpace food supply growth, leading to periodic checks like famine, unless counteracted by preventive checks",
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
          "How geopolitical knowledge is socially constructed to serve power interests",
          "A method for mapping physical terrain only",
          "A branch of geology studying plate tectonics"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'world-systems theory' (Wallerstein), as applied within economic geography, categorize countries into?",
        "opts": [
          "Developed and undeveloped nations only, with no further distinction",
          "Core, semi-periphery, and periphery nations, based on their role and power within the global economic system",
          "North and South nations exclusively",
          "Landlocked and coastal nations exclusively"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'ethnic enclave' theory concerned with explaining in urban and migration geography?",
        "opts": [
          "The formation of purely random neighborhood clusters",
          "How and why immigrant or minority groups often concentrate spatially within specific urban neighborhoods, and the economic and social functions these enclaves serve",
          "Government-mandated housing policy exclusively",
          "The physical geology of urban areas"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'time-geography', developed by Torsten Hägerstrand, use to analyze human activity patterns?",
        "opts": [
          "Only historical population census data",
          "Space-time paths tracing individuals' movement and activities through both physical space and time, subject to various constraints",
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
          "Environmental determinism argues the physical environment strictly determines human cultural development, while possibilism argues the environment offers possibilities that humans creatively adapt to, rather than strict constraints",
          "Neither position has ever been seriously debated in geography",
          "The debate concerns only agricultural productivity"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'spatial autocorrelation' measure in geographic and statistical analysis?",
        "opts": [
          "The correlation between two unrelated variables in different locations",
          "The degree to which a variable is correlated with itself across geographic space, i.e., whether nearby locations have similar values",
          "The accuracy of a map's projection",
          "The population density of a single point location"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'the friction of distance' concept used to describe in geography?",
        "opts": [
          "A purely physical measure of road surface texture",
          "The general principle that interaction, movement, and communication between two places tend to decrease as the distance between them increases",
          "A type of tectonic plate interaction",
          "A measure of a country's trade tariffs"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'assemblage theory', as applied by geographers like Manuel DeLanda in the study of urban and political space, emphasize about socio-spatial phenomena?",
        "opts": [
          "That spatial structures are fixed, static, and hierarchically determined from above",
          "That social and spatial phenomena emerge from the contingent, relational assembly of heterogeneous human and non-human components, rather than being reducible to a single deterministic structure",
          "That geography has no relevance to social theory",
          "That all spatial patterns can be explained purely by economic factors"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'relational economic geography', as a critique of earlier spatial-analytical approaches?",
        "opts": [
          "It rejects the study of networks and relationships entirely in favor of fixed locational analysis",
          "It emphasizes that economic activity and competitive advantage arise from evolving, embedded relationships, networks, and institutions across space, rather than from fixed locational or cost-minimization factors alone",
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
          "The interplay of increasing returns to scale, transportation costs, and market size, generating a 'core-periphery' pattern of industrial agglomeration through cumulative causation",
          "A fixed, government-mandated allocation of industry locations",
          "Climate as the sole determinant of industrial location"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is 'territorial trap' a critique of, within critical political geography, as articulated by John Agnew?",
        "opts": [
          "The assumption that all political territories are equally powerful",
          "The assumption, often implicit in international relations theory, that fixed, bounded state territories are the natural and unchanging unit of political-economic analysis, obscuring more fluid and networked forms of power",
          "A specific dispute over a physical border between two states",
          "A methodology for calculating a country's GDP"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'non-representational theory' in human geography, associated with Nigel Thrift, shift analytical focus toward?",
        "opts": [
          "Only textual and symbolic representations of place found in maps and literature",
          "Embodied practices, affect, and the pre-cognitive, performative dimensions of everyday spatial experience, beyond what can be captured in fixed representations",
          "Purely quantitative statistical modeling of spatial data",
          "The physical geology of tectonic plates exclusively"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the core argument of 'planetary urbanization' theory, associated with Neil Brenner and Christian Schmid, regarding the urban-rural divide?",
        "opts": [
          "Urbanization is strictly confined to dense city cores, with clearly bounded rural hinterlands untouched by urban processes",
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
          "Capitalism's tendency to remain permanently fixed in a single geographic location",
          "Capitalism's recurring tendency to resolve its internal crises of overaccumulation temporarily through geographic expansion and the reconfiguration of spatial infrastructure, only to produce new contradictions",
          "A government policy for fixing currency exchange rates",
          "A term for repairing damaged transportation infrastructure"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is 'more-than-human geography' primarily concerned with expanding geographic analysis to include?",
        "opts": [
          "Only human political and economic institutions",
          "The agency and significance of non-human actors, such as animals, plants, and technological objects, in co-constituting geographic space and social life",
          "Purely abstract mathematical spatial models",
          "Government census data exclusively"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'feminist geopolitics' critique in traditional geopolitical analysis?",
        "opts": [
          "The relevance of geography to international relations entirely",
          "The traditional focus on state-level, elite, and often masculinized perspectives of security and power, arguing for attention to everyday, embodied, and gendered experiences of geopolitical processes across scales",
          "The existence of international borders",
          "The use of maps in political analysis"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the significance of 'the production of space' (Henri Lefebvre) for understanding how geographic space is theorized in critical human geography?",
        "opts": [
          "Space is a neutral, pre-given container within which social processes simply occur",
          "Space is actively produced through social, economic, and political processes, and is simultaneously perceived, conceived, and lived, rather than being a fixed, neutral backdrop",
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
          "A fixed physical measurement unit with no social dimension",
          "A term used exclusively in geology for rock strata"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the core argument of 'assemblage urbanism' as a critique of earlier structuralist urban theory?",
        "opts": [
          "Cities are best understood as the fixed, deterministic outcome of a single global capitalist logic",
          "Cities should be understood as contingent, heterogeneous assemblages of diverse actors, materials, and processes, resisting reduction to any single overarching structural explanation",
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
          "The complex, geographically dispersed and power-laden networks of firms, institutions, and workers involved in producing and distributing goods and services globally",
          "Only the physical transportation infrastructure of a single country",
          "A country's domestic tax policy exclusively"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the significance of 'topological thinking' in contemporary geography, as opposed to purely 'topographical' or Euclidean spatial thinking?",
        "opts": [
          "It rejects any consideration of spatial relationships entirely",
          "It emphasizes relational, network-based connectivity and the qualitative properties of spatial relationships (such as connection and proximity in a network sense) over fixed, absolute Euclidean distance",
          "It refers exclusively to the mathematical study of geological rock formations",
          "It is synonymous with traditional cartographic mapping"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'postcolonial geography' critically examine regarding the discipline of geography's own historical development?",
        "opts": [
          "Geography's complete independence from histories of colonialism",
          "The discipline's historical entanglement with colonial power, knowledge production, and the ongoing colonial legacies embedded in geographic concepts, categories, and practices",
          "Only the physical geology of former colonies",
          "Purely economic development statistics in postcolonial nations"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is 'the ontological politics of mapping', as discussed in critical cartography and GIS studies?",
        "opts": [
          "The idea that maps are simply neutral, objective, and value-free technical representations of reality",
          "The recognition that maps and mapping practices actively construct and shape particular versions of reality and power relations, rather than merely passively representing a pre-existing, singular truth",
          "A purely technical debate about map projection accuracy",
          "A term referring only to historical, pre-digital maps"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'relational place theory' (Doreen Massey's concept of a 'global sense of place') argue against the idea of place as a bounded, singular, authentic entity?",
        "opts": [
          "Places should be understood as entirely fixed, unchanging, and defined by a single essential identity rooted in the past",
          "Places should be understood as open, porous, and constituted by the dynamic intersection of multiple social relations and connections stretching across different scales, rather than as bounded and singular",
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
          "An integration of critical social theory, particularly attention to power and inequality, with rigorous biophysical science methods to analyze socio-environmental systems and landscape change",
          "A purely descriptive cataloguing of landforms with no theoretical framework",
          "A field concerned exclusively with historical maps"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'the anthropocene' concept, increasingly engaged with in physical and human geography, propose about the current geological epoch?",
        "opts": [
          "That human activity has had no measurable geological impact on Earth systems",
          "That human activity has become a dominant geological and environmental force shaping Earth's systems at a planetary scale, warranting recognition as a distinct geological epoch",
          "That the concept applies only to urban areas, not the planet as a whole",
          "That it is synonymous with the term 'globalization'"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'multi-scalar governance' analysis for understanding contemporary environmental and economic policy geography?",
        "opts": [
          "Governance always operates most effectively at a single, fixed scale, such as the nation-state",
          "Effective governance of complex issues like climate change often requires coordinated action across multiple, interacting geographic scales, from local to global, since no single scale of governance is sufficient alone",
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
          "A government internet regulation"
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
          "Blocking another user"
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
          "It becomes a paid advertisement"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is an 'emoji'?",
        "opts": [
          "A type of computer file",
          "A small digital image or icon used to express an emotion or idea in text",
          "A type of internet meme format",
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
          "A verified social media account"
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
          "A type of social media platform",
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
          "To block the person who posted it"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a 'screenshot'?",
        "opts": [
          "A video recording of a screen",
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
          "A screenshot of a conversation",
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
          "A completely original image with no reused elements",
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
          "Something considered admirable and impressive",
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
          "A type of online advertisement",
          "An image or GIF used in a conversation to express a specific emotion or reaction, often humorously",
          "A profile picture",
          "A hashtag category"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does it mean for content to be 'relatable'?",
        "opts": [
          "Content only understood by a small technical audience",
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
          "A type of direct message",
          "A blocked user list"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does 'ratio'd' mean, as internet slang on platforms like Twitter/X?",
        "opts": [
          "A post that received more likes than replies, indicating popularity",
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
          "A block of text that is copied and pasted repeatedly across the internet, often humorously or ironically",
          "A verified social media account",
          "A type of video compression"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'stan' mean as internet slang, derived from an Eminem song?",
        "opts": [
          "To dislike a celebrity intensely",
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
          "A method for verifying social media accounts",
          "A type of computer virus"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'based', as internet slang, generally mean when used approvingly?",
        "opts": [
          "Something considered boring or unoriginal",
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
          "A post reported for violating platform rules"
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
          "Social media platforms are legally required to keep content private"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is a 'Wojak', a well-known internet meme character?",
        "opts": [
          "A branded corporate mascot used in advertising",
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
          "Scrolling through only positive, uplifting content",
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
          "A physical recording studio used by podcasters",
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
          "A method for officially deleting a social media account",
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
          "A verified account belonging to a public figure",
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
          "An official platform content warning label"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is 'Rule 34', a well-known internet adage?",
        "opts": [
          "A rule about copyright takedowns",
          "An internet adage jokingly asserting that pornographic content exists for absolutely any conceivable topic or character",
          "A rule about verified account eligibility",
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
          "A person with a large social media following exclusively"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is 'engagement farming' as a social media strategy?",
        "opts": [
          "Growing crops and posting about it online",
          "Crafting provocative content specifically to maximize likes, comments, and shares",
          "A method for verifying an account's authenticity",
          "A type of paid advertising campaign only"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'the algorithm', as commonly referenced by social media users, generally refer to?",
        "opts": [
          "A single, universal internet-wide ranking system",
          "The platform-specific automated system that determines what content is shown to a given user, based on factors like engagement, relevance, and past behavior",
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
          "A method for calculating a post's exact reach",
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
          "Creating multiple accounts on the same platform"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is a 'burner account'?",
        "opts": [
          "A verified, official brand account",
          "A temporary or anonymous account separate from someone's main identity",
          "An account exclusively for posting memes",
          "A government-monitored account"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'the discourse', as often used ironically on social media, refer to?",
        "opts": [
          "A single, calm, and highly civil individual conversation",
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
          "A purely modern internet phenomenon with no broader theoretical basis",
          "Cultural units of information, analogous to genes, that replicate, mutate, and undergo selection as they spread from person to person, providing a framework for understanding cultural evolution",
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
          "A combination of factors including relatability, ease of remixing or modification, emotional resonance, and alignment with existing cultural or platform-specific conventions",
          "Exclusively the number of followers the original poster has",
          "Formal endorsement by a verified account, which is required for any meme to spread"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'the Streisand effect' illustrate about attempts to suppress viral content online?",
        "opts": [
          "Suppression attempts always successfully and permanently remove content from public view",
          "Attempting to censor or remove information can inadvertently draw far more attention to it than if it had been left alone",
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
          "A communicative style characterized by layered irony, self-aware absurdism, and a reluctance to express genuine sentiment directly, often making sincerity itself difficult to distinguish from parody",
          "A formal content moderation category",
          "A term for verified, professionally produced comedy content"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'post-irony' describe as a further development beyond straightforward ironic humor in internet culture?",
        "opts": [
          "A style that completely rejects irony in favor of pure sincerity",
          "A mode that layers irony upon irony to the point that sincerity and mockery become genuinely ambiguous or indistinguishable, sometimes looping back toward an unironic, sincere effect",
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
          "A meme format considered overused, stale, or no longer culturally relevant, sometimes revived later ironically",
          "A meme that has been permanently deleted by a platform",
          "A meme format that was never popular in the first place"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does the concept of 'meme decay' or an 'exploitable' format describe in the lifecycle of a meme?",
        "opts": [
          "A meme that remains completely unchanged throughout its entire lifespan",
          "The process by which a meme format is repeatedly remixed, reinterpreted, and abstracted further from its original context as it spreads, sometimes losing legibility to newcomers",
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
          "The flattening of multiple, distinct audiences (such as friends, family, and strangers) into a single, imagined audience on social media, causing content, including memes, to be interpreted differently or awkwardly across these merged contexts",
          "A term describing a website's server outage",
          "A method for organizing hashtags"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'astroturfing' refer to in the context of coordinated online campaigns?",
        "opts": [
          "A grassroots movement that arises organically without coordination",
          "A fake grassroots campaign, orchestrated by an organization or interested party, designed to appear as spontaneous, independent public sentiment",
          "A meme format about gardening",
          "A platform's official content promotion tool"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'a normie', as a term used within certain online subcultures?",
        "opts": [
          "A verified social media influencer",
          "A person perceived as having mainstream tastes and being unfamiliar with or outside of niche internet subcultures",
          "A moderator of an online forum",
          "A type of bot account"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'meme magic', a term used somewhat ironically or seriously within certain internet subcultures, claim about the power of memes?",
        "opts": [
          "That memes have no real-world influence or effect whatsoever",
          "A belief, often expressed with a mix of irony and sincerity, that internet memes can meaningfully shape real-world events, particularly political or cultural outcomes",
          "That memes are formally regulated by international law",
          "That memes can only ever be created by AI systems"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'shitposting as a rhetorical strategy', as analyzed in some internet culture scholarship, sometimes used to accomplish?",
        "opts": [
          "Purely apolitical, meaningless humor with zero social function",
          "Deploying deliberately absurd, ironic, or low-effort content to simultaneously entertain, provoke, and obscure or deniably float a genuine underlying message or position",
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
          "Since platforms often monetize user attention through advertising, algorithms tend to favor content, including provocative or emotionally charged memes, that maximizes engagement metrics like time spent and interactions",
          "Engagement metrics have no bearing on what content platforms choose to promote",
          "Meme content is promoted purely at random with no algorithmic influence"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is a 'copypasta chain letter', drawing an analogy to earlier chain letter culture, illustrate about meme propagation?",
        "opts": [
          "Memes spread through a completely centralized, single-source distribution model",
          "Certain memes propagate through repeated, largely unaltered copying and resharing across many individual accounts, echoing the structure of pre-internet chain letters, rather than through creative remixing",
          "This format is exclusive to email and has no internet meme equivalent",
          "Copypasta chains require official platform verification to spread"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'weaponized irony' describe as a critique leveled at some forms of online political meme culture?",
        "opts": [
          "The straightforward, sincere expression of a political position with no humor involved",
          "The use of ironic, humorous framing to advance or normalize a genuine underlying ideological position while maintaining plausible deniability about one's sincerity",
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
          "Platforms face a dilemma where formally removing or restricting a piece of viral content can itself become a newsworthy event that draws more attention to the content than leaving it untouched",
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
          "A meme exclusively associated with slow internet connections"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'reaction content farming', as a criticized practice on some video platforms?",
        "opts": [
          "Creating entirely original video content with no reference to other creators' work",
          "Producing videos that consist primarily of a creator reacting to another creator's original content, sometimes criticized for adding minimal original value while capturing engagement and revenue",
          "A method for verifying the authenticity of video content",
          "A formal genre officially recognized and defined by video platforms"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'the death of the author', a literary theory concept by Roland Barthes, get informally invoked to describe in meme remix culture?",
        "opts": [
          "The idea that only the original creator's intended meaning for a meme is valid",
          "The idea that once a meme or image is released into internet culture, its meaning becomes shaped by how audiences reinterpret and remix it, independent of the original creator's intent",
          "A rule requiring meme creators to be formally credited on every repost",
          "A term describing the literal death of a meme's original creator"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'engagement bait', as a term describing certain manipulative social media post formats?",
        "opts": [
          "Content designed purely to inform, with no attempt to solicit interaction",
          "A post deliberately structured, such as through a controversial question or a 'like if you agree' prompt, to artificially inflate engagement metrics like comments and shares",
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
          "As a meme format circulates across different online communities and subcultures, each with distinct norms and reference points, its implied tone or meaning can shift substantially, sometimes even inverting from its original usage",
          "This phenomenon applies exclusively to memes translated into different languages",
          "Meme meaning drift is prevented entirely by platform content moderation systems"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'the concept of hyperstition', drawing on theory-fiction associated with the Cybernetic Culture Research Unit (CCRU), propose about the relationship between fictional ideas circulating online and material reality?",
        "opts": [
          "Fictional ideas and narratives can never have any influence on real-world outcomes or behavior",
          "Hyperstition describes fictional or speculative ideas that, through their circulation and belief, can become causally self-fulfilling, effectively making themselves real, a concept some scholars apply to how certain viral internet narratives or memes can shape real-world events",
          "Hyperstition is a formal legal term regulating fictional content online",
          "This concept applies exclusively to video game narrative design"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is the theoretical significance of 'accelerationist aesthetics' as sometimes discussed in relation to certain strains of extremely online, ironic meme culture?",
        "opts": [
          "An aesthetic mode entirely disconnected from any broader philosophical or political currents",
          "A contested aesthetic and rhetorical mode, associated loosely with philosophical accelerationism, that embraces or ironically amplifies technological and social disruption and extremity rather than resisting it, which some scholars analyze as manifesting in certain fringe online meme and shitposting subcultures",
          "A term describing only the technical speed of internet connections",
          "A formally defined content category regulated uniformly across all platforms"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'network propaganda theory', as developed by scholars like Yochai Benkler, Robert Faris, and Hal Roberts, argue about the structural dynamics of media manipulation and disinformation within polarized online media ecosystems?",
        "opts": [
          "Disinformation spreads identically and symmetrically across all points on the political spectrum with no structural asymmetry",
          "The researchers found significant asymmetric polarization and propaganda dynamics within the media ecosystem they studied, arguing that network structure, not just individual psychology, plays a central causal role in how mis- and disinformation, including memetic content, propagates",
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
          "Affect theory approaches to meme culture examine how memes circulate and gain traction partly through pre-cognitive, bodily, and emotional intensities they generate and transmit between users, rather than through purely rational or semantic content evaluation alone",
          "Affect theory rejects any connection between emotion and the spread of online content",
          "This theoretical approach applies exclusively to advertising, not user-generated meme content"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'the concept of 'weird internet'' or 'internet uncanny' as an aesthetic and cultural category, discussed in some digital culture scholarship, attempt to characterize?",
        "opts": [
          "A formally regulated content category defined uniformly by all major platforms",
          "A loosely defined aesthetic and cultural sensibility characterized by deliberately strange, absurdist, or dreamlike content that plays with the conventions of mainstream internet culture, often generating a sense of unease or disorientation alongside humor",
          "A term describing exclusively malfunctioning or broken websites",
          "A category applied only to AI-generated content"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is the theoretical significance of 'platformed racism' or 'platformed hate speech' research for understanding how meme formats can be co-opted for extremist messaging?",
        "opts": [
          "Extremist ideologies have historically had no meaningful presence or adaptation within internet meme culture",
          "Scholars examine how extremist and hateful ideologies have historically adapted mainstream meme formats and internet humor conventions, exploiting irony and plausible deniability to spread coded or normalize extremist messaging within ostensibly mainstream or apolitical online spaces",
          "This research area is concerned exclusively with formal hate speech legislation, not informal online culture",
          "Platform algorithms are proven to have no role whatsoever in amplifying or suppressing such content"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'the concept of 'dog whistle' communication', as applied to political meme culture, describe about certain coded online messaging strategies?",
        "opts": [
          "A message with an entirely unambiguous, single meaning understood identically by every audience member",
          "A communicative strategy, sometimes realized through specific meme formats or symbols, that conveys a particular, often controversial or coded meaning to an in-group audience aware of the reference, while appearing innocuous or having plausible deniability to outsiders unfamiliar with the coded meaning",
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
          "A concept describing the deliberate, strategic use of memes and viral content as tools within broader information operations, political campaigns, or ideological conflicts, exploiting their capacity for rapid, low-cost, emotionally resonant dissemination",
          "This concept applies exclusively to formally declared cyberwarfare between nation-states",
          "Memetic warfare theory denies that memes have ever been used for any strategic political purpose"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'the concept of 'algospeak'' describe as an emerging linguistic phenomenon on heavily moderated social media platforms?",
        "opts": [
          "A formal, standardized programming language used to write content moderation algorithms",
          "A set of informally developed linguistic workarounds, such as substituting letters, using coded terms, or intentional misspellings, that users adopt to discuss sensitive or moderated topics while evading automated content moderation and algorithmic suppression",
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
          "An emerging pedagogical and research area focused on developing the critical skills needed to interpret, contextualize, and evaluate memes, including their potential to convey misinformation, coded ideology, or manipulated framing, alongside their more straightforward comedic function",
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
          "Scholars and critics have argued that nostalgic memes and content, evoking selectively idealized memories of a past era, can be strategically deployed to advance particular ideological narratives about social or cultural decline, exploiting the emotional pull of nostalgia for persuasive ends",
          "This concept applies exclusively to memes about literal historical events with no relevance to pop-cultural nostalgia",
          "Weaponized nostalgia theory denies that memes referencing the past can carry any rhetorical function"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is the theoretical significance of 'ambient co-presence', a concept from internet culture and social media studies, for understanding how platforms like Discord or group chats sustain ongoing meme-sharing communities?",
        "opts": [
          "Ambient co-presence describes only formally scheduled video calls with no informal or background social dimension",
          "A concept describing the low-level, ongoing sense of connectedness and shared social presence users experience within always-on digital spaces, like group chats, which sustains ongoing informal social bonding and meme-sharing even without constant active, direct interaction",
          "This concept applies exclusively to physical, in-person social gatherings",
          "Ambient co-presence theory denies that any meaningful social bonding can occur through purely text-based digital communication"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'the concept of 'chaos posting'' or 'chaotic online aesthetics' describe as a stylistic mode within certain internet subcultures?",
        "opts": [
          "A highly formal, structured posting style with rigid, predictable conventions",
          "A deliberately disjointed, absurdist, and unpredictable posting style that resists coherent narrative or clear meaning, often as an ironic response to, or rejection of, more polished, algorithmically optimized mainstream content",
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
          "An adapted ethnographic research methodology involving researchers immersing themselves, often over extended periods, within online communities to observe and interpret their cultural practices, norms, and communicative conventions, including meme creation and circulation, from within the community's own context",
          "This methodology applies exclusively to studying offline, physical communities, with no application to internet subcultures",
          "Digital ethnography is considered methodologically identical to a simple keyword-based content analysis"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'the concept of 'phatic communication'', originally from linguistic anthropology (Bronisław Malinowski), get applied to describe in the context of low-content, high-frequency meme and reaction sharing between friends?",
        "opts": [
          "Communication whose primary function is conveying complex, novel factual information",
          "Communication whose primary social function is maintaining social bonds and signaling ongoing connection or attention, rather than conveying substantive new information, a concept applied to explain why users frequently exchange low-content memes or reaction images simply to sustain a social relationship",
          "A term applicable exclusively to formal written correspondence",
          "Phatic communication theory denies that any social function is served by casual online exchanges"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is the theoretical significance of 'the concept of 'semantic bleaching'' as applied to the evolution of internet slang and meme-associated vocabulary over time?",
        "opts": [
          "Words and phrases used in internet slang retain a permanently fixed, unchanging meaning and intensity over time",
          "A linguistic process where a word or phrase, through repeated informal and often ironic or exaggerated usage online, gradually loses its original, more intense or specific meaning, becoming a more generic or weaker term over time",
          "This concept applies exclusively to formal academic vocabulary, not internet slang",
          "Semantic bleaching theory denies that internet slang undergoes any meaningful linguistic evolution"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'the concept of 'context-collapsed irony'' describe as a particular risk or challenge for meme creators posting to broad, undifferentiated online audiences?",
        "opts": [
          "The concept describes memes that are always understood identically by every viewer regardless of audience",
          "The risk that an ironic or satirical meme, intended to critique a particular position, may be sincerely misread or literally reappropriated by different segments of a large, context-collapsed audience who lack the shared context needed to correctly interpret the irony",
          "This concept applies exclusively to memes shared within small, tightly-knit private group chats",
          "Context-collapsed irony theory denies that irony can ever be misinterpreted online"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is the theoretical significance of 'digital folklore studies' as an emerging academic field for analyzing internet memes and viral content?",
        "opts": [
          "Digital folklore studies reject any connection between internet culture and traditional folklore studies methodologies",
          "An emerging interdisciplinary field applying traditional folklore studies methods and concepts, such as variation, transmission, and communal ownership, to internet memes and viral content, treating them as a genuinely contemporary form of vernacular, communally authored folk culture",
          "This field applies exclusively to formally published, professionally authored digital content",
          "Digital folklore studies is concerned exclusively with the technical file formats used to store meme images"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'the concept of 'stochastic terrorism'', as controversially applied in some analyses of extremist online meme and rhetoric circulation, describe?",
        "opts": [
          "A formally defined legal category applied uniformly and without controversy across all jurisdictions",
          "A contested concept describing how broad, coded, or inflammatory public rhetoric and meme content, while not directly ordering any specific violent act, may statistically increase the likelihood that some unpredictable individual within a large audience will be incited toward real-world violence",
          "This concept applies exclusively to formally declared acts of war between nation-states",
          "Stochastic terrorism theory denies that online rhetoric or meme content can have any real-world behavioral effect"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'the concept of 'accelerationism' in its explicitly philosophical (rather than purely internet-subcultural) formulation, associated with theorists like Nick Land, propose regarding capitalism's relationship to technological and social change, and how has this concept been controversially appropriated within certain extremely online meme subcultures?",
        "opts": [
          "Philosophical accelerationism argues technological and capitalist processes should be actively slowed to allow for careful, deliberate social planning",
          "Land's original philosophical accelerationism argued that capitalism's inherent tendencies toward deterritorialization and technological intensification should be pushed further and faster rather than resisted, a complex and contested philosophical position that has since been selectively and often superficially appropriated, stripped of its original theoretical complexity, within certain fringe online meme and shitposting subcultures as an aesthetic of embracing chaos and disruption",
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
          "Egregore, originally an occultist concept referring to a distinct group mind or thoughtform arising from a collective of individuals, has been informally and often semi-ironically adopted within some internet subcultures to describe emergent, seemingly autonomous collective online phenomena or persistent community identities, drawing loose, often unrigorous parallels to more formal academic theories of distributed cognition, swarm intelligence, and collective online behavior",
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
          "Research on computational propaganda examines how coordinated networks of automated or semi-automated accounts, sometimes called bots or sockpuppets, can be strategically deployed to artificially amplify the apparent popularity and organic reach of particular memes or narratives, manufacturing a false impression of grassroots consensus, a tactic increasingly documented across numerous geopolitical contexts",
          "This research area is concerned exclusively with historical print propaganda, with no application to contemporary digital or meme-based content",
          "Computational propaganda research has concluded that all viral content spread is entirely organic with zero coordinated inauthentic amplification"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'the concept of 'post-truth epistemology' as applied to internet meme and disinformation research, and how does this concept relate to earlier philosophical debates about the social construction of knowledge?",
        "opts": [
          "Post-truth epistemology asserts that objective truth has always been irrelevant to any human society throughout history",
          "It describes a perceived online shift where emotional appeal and belief carry more persuasive weight than objective fact, echoing older debates about the social construction of knowledge",
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
          "Fiske's concept of semiotic democracy proposed that audiences hold significant power to actively reinterpret and appropriate mass media texts and symbols for their own purposes, a framework later applied, with both enthusiasm and critical qualification, to internet meme remix culture, where users freely reappropriate copyrighted or branded imagery, while critics note this 'democracy' remains constrained by platform ownership, algorithmic curation, and persistent intellectual property enforcement",
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
          "Classical framing theory examines how the specific presentation of an issue, emphasizing certain aspects while omitting others, shapes audience interpretation and evaluation; networked framing theory extends this to examine how such framing processes now occur in a distributed, iterative, and user-driven manner across memes and social media posts, rather than being controlled primarily by centralized professional media gatekeepers as in earlier framing theory research",
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
          "Comparative research suggests that identical or closely related meme formats often mutate substantially in tone, content, and social function as they migrate between platforms with differing technical affordances (such as anonymity, algorithmic curation, or video-first formats) and differing pre-existing community norms, meaning a meme's meaning is not fixed but is co-produced by its platform environment",
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
          "Research within critical platform studies examines evidence suggesting that engagement-optimized recommendation algorithms may systematically amplify content characterized by high emotional or moral intensity, such as outrage-inducing or highly polarizing memes, potentially independent of the content's factual accuracy or broader social value, since such content reliably generates high engagement metrics that the algorithm is optimized to maximize",
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
          "Some digital sociology research suggests that meme creation and circulation during collective crisis events, such as major disasters or public emergencies, can serve as a genuine, if informal, collective sense-making and coping mechanism, allowing dispersed publics to process shared uncertainty, grief, or anxiety through shared humor and symbolic communication, alongside their more straightforward entertainment function",
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
          "Emerging research examines how increasingly accessible AI image, video, and text generation tools are beginning to reshape meme culture by lowering the technical barrier to creating highly customized or entirely novel visual meme content, raising new research questions about authenticity, misattribution, the blurring of human and AI authorship, and the potential for both creative flourishing and new forms of synthetic disinformation within meme ecosystems",
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
          "Quantitative research on viral content trajectories often finds that a meme's cultural salience and shared comprehensibility tend to decay over time, following patterns sometimes modeled with analogies to informational or thermodynamic entropy, as a format becomes overused, its original context is lost, or public attention moves to newer content",
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
          "Research in this area examines how specific technical constraints and affordances of a platform, such as Twitter/X's historical character limits or TikTok's vertical video and sound-remix functionality, directly shape the formal conventions, pacing, and structure of memes that become native to and characteristic of that particular platform",
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
          "Some research suggests visual meme content may be processed more rapidly, evoke stronger immediate emotional and identity-based responses, and be more easily and widely shared than equivalent purely textual political messaging, potentially contributing distinctively to affective political polarization through mechanisms not fully captured by earlier research focused primarily on text-based political communication",
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
          "Scholars examine how many widely circulated meme formats evolve through genuinely diffuse, iterative, and often anonymous collective authorship, creating significant tension with traditional copyright law's assumption of a clearly identifiable individual or corporate author, raising unresolved legal and ethical questions about attribution, compensation, and ownership of communally-created viral cultural content",
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
          "Some researchers examining online radicalization pathways have proposed that ostensibly ironic or humorous extremist-adjacent meme content can, for a subset of vulnerable individuals, function as a lower-commitment, plausibly-deniable entry point that gradually normalizes exposure to more explicit extremist framing over time, though this proposed pathway remains an area of ongoing empirical research and some scholarly debate regarding its generalizability",
          "This research area has been universally and uncontroversially validated as applying identically to one hundred percent of individuals exposed to such content",
          "Ironic radicalization pathway theory concludes that meme content is entirely irrelevant to any real-world extremist behavior or belief formation"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'the concept of 'meme-based epistemic communities'', examining how shared engagement with specific meme formats and in-group references can function to demarcate and reinforce boundaries around a community's shared knowledge base and worldview?",
        "opts": [
          "Shared engagement with meme content is theorized to have no bearing whatsoever on how online communities define their boundaries or shared identity",
          "Research on meme-based epistemic communities examines how fluency in a specific community's evolving meme vocabulary and in-group references can function as a signal of belonging and shared worldview, simultaneously reinforcing community cohesion for insiders while creating a comprehension barrier that can exclude or confuse outsiders unfamiliar with the community's specific referential history",
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
          "Scholars have noted an increasing prevalence of recursive, self-referential meme content that explicitly comments on, parodies, or critiques meme culture and internet communication conventions themselves, which some interpret as a sign of the form's cultural maturation and increasing self-awareness as a distinct, historically-conscious communicative genre",
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
          "Some international relations scholarship examines instances where government accounts, diplomatic missions, and state-adjacent actors have adopted internet meme formats and humor conventions as a deliberate strategic communication tool, aiming to engage younger audiences, shape public perception, or advance geopolitical narratives through culturally resonant, informal online content, rather than through traditional formal diplomatic channels alone",
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
          "Digital memory studies scholarship examines how, alongside more traditional forms of commemoration and journalism, memes increasingly function as a distinctive, informal, and often emotionally condensed vehicle through which online publics collectively process, reference, and reconstruct memory of significant historical or contemporary events, sometimes becoming the primary lens through which younger or more online-native audiences come to understand and recall a given event",
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
          "Digital humanities researchers have developed methodologies combining reverse image search, web archive analysis, and community-sourced documentation, such as that compiled by sites like Know Your Meme, to reconstruct the historical origin point and subsequent mutation lineage of viral meme formats, treating this genealogical tracing as a legitimate form of digital historical and cultural documentation",
          "This methodology applies exclusively to memes created after 2020, with no application to earlier internet culture",
          "Meme format genealogy tracing has been shown to be methodologically identical to, and fully interchangeable with, traditional print bibliography"
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
          "A type of business contract",
          "A voluntary suggestion"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a 'court'?",
        "opts": [
          "A place where laws are written",
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
          "Enforces traffic laws directly on the street",
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
          "A judge in a courtroom",
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
          "The defendant is found innocent",
          "The case is dismissed",
          "The trial is postponed"
        ],
        "a": 0,
        "tier": 1
      },
      {
        "q": "What does 'innocent until proven guilty' mean?",
        "opts": [
          "A person is assumed guilty unless they prove otherwise",
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
          "A type of criminal charge",
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
          "A group of lawyers representing the defendant",
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
          "Any disagreement between two people",
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
          "To be found guilty of a crime",
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
          "The judge presiding over the case",
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
          "The judge deciding the case",
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
          "The judge presiding over the trial",
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
          "A type of legal document filed before a trial",
          "The location where a trial takes place"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does 'legal age' typically refer to?",
        "opts": [
          "The age at which someone can retire",
          "The age at which a person is considered a legal adult with full legal rights and responsibilities",
          "The age at which someone must pay taxes",
          "The age at which someone can become a judge"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is 'evidence' in a legal case?",
        "opts": [
          "A lawyer's personal opinion",
          "Information, documents, or testimony presented to prove or disprove facts in a case",
          "The judge's final ruling",
          "The location where a crime occurred"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does 'appeal' mean in a legal context?",
        "opts": [
          "Accepting a court's decision immediately",
          "A request to a higher court to review and potentially overturn a lower court's decision",
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
          "A single law about taxes",
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
          "Civil law deals with disputes between private parties, often seeking compensation; criminal law deals with offenses against the state, often resulting in punishment",
          "Civil law only applies to businesses; criminal law only applies to individuals",
          "Criminal law has no involvement from judges"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is 'due process'?",
        "opts": [
          "A guarantee that the government will follow fair legal procedures before depriving a person of life, liberty, or property",
          "A requirement that all trials be televised",
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
          "Unlawful detention, by requiring courts to review an imprisonment's legality",
          "Discrimination in hiring",
          "Breach of contract"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is 'precedent' in common law legal systems?",
        "opts": [
          "A law passed by a legislature",
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
          "A criminal offense punishable by imprisonment",
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
          "A type of criminal sentence",
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
          "Signing a new contract",
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
          "A type of legal punishment",
          "The official authority of a court or legal body to hear and decide cases within a certain geographic area or subject matter",
          "A type of contract clause",
          "A lawyer's area of specialization only"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'plea bargain' refer to in criminal law?",
        "opts": [
          "A defendant's right to remain silent",
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
          "Physical real estate",
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
          "A permanent ban on filing any lawsuit",
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
          "Intentionally causing harm to another person",
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
          "Being tried twice by two different judges on the same day",
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
          "A criminal trial process",
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
          "A judge's careful thought before ruling",
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
          "The physical act of committing a crime",
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
          "A defendant's state of mind",
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
          "The initial filing of a lawsuit",
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
          "A lawsuit filed by a single individual only",
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
          "A law degree",
          "A sufficient connection to and harm from the issue in question to justify their participation in the case",
          "Prior experience as a witness",
          "Approval from the opposing party"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'judicial review' allow courts to do?",
        "opts": [
          "Only interpret contracts between private parties",
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
          "Cooperation between branches of government",
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
          "Courts should ignore all past rulings",
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
          "Liability that requires proof of intent or negligence",
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
          "Only the individual who directly caused harm can be held liable",
          "One party, such as an employer, can be held legally responsible for the wrongful acts of another, such as an employee, committed within the scope of their relationship",
          "Liability only applies to intentional torts",
          "Liability cannot be transferred between parties under any circumstances"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is the significance of 'Miranda rights' in US criminal procedure?",
        "opts": [
          "They guarantee a defendant a jury trial",
          "They require law enforcement to inform a suspect of certain constitutional rights, including the right to remain silent, before a custodial interrogation",
          "They apply only to civil lawsuits",
          "They guarantee an immediate release from custody"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'promissory estoppel' allow a court to enforce?",
        "opts": [
          "Only contracts with formal written consideration",
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
          "Whether a defendant is guilty of a crime",
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
          "An action taken within one's legal authority",
          "An act performed beyond the scope of legal power or authority granted to a person or entity, such as a corporation or government body",
          "A type of binding contract",
          "A criminal defense based on insanity"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'res judicata' meant to prevent?",
        "opts": [
          "A defendant from ever appealing a decision",
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
          "The physical evidence presented in a case",
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
          "Liability that can only be assigned to one party",
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
          "Authority over a specific piece of property only",
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
          "A rule requiring all evidence to be admitted regardless of how it was obtained",
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
          "Only cash compensation for harm suffered",
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
          "Always shield shareholders from any liability",
          "Hold shareholders or owners personally liable for a corporation's actions or debts, typically in cases of fraud or when the corporate form has been abused",
          "Dissolve a corporation automatically after a lawsuit",
          "Transfer a corporation's assets to the government"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'conflict of laws' (or private international law) address?",
        "opts": [
          "Disputes between two branches of the same government",
          "Which jurisdiction's laws should apply, and which court has authority, when a legal dispute involves parties or events connected to more than one jurisdiction",
          "Only disputes between two individuals in the same city",
          "A type of international trade tariff"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is a 'fiduciary duty'?",
        "opts": [
          "A general duty owed by any person to any other person",
          "A heightened legal and ethical obligation of trust, loyalty, and care owed by one party, like a trustee or corporate director, to another, such as a beneficiary or shareholder",
          "A duty that applies only to elected government officials",
          "A duty owed exclusively by lawyers to their clients"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'the reasonable person standard' provide in negligence law?",
        "opts": [
          "A subjective measure based on the specific defendant's own personal judgment",
          "An objective benchmark asking how a hypothetical reasonably careful and prudent person would have acted under similar circumstances, used to assess whether conduct was negligent",
          "A standard applied only in criminal cases",
          "A rule eliminating the need to prove fault entirely"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'collateral estoppel' (issue preclusion) designed to prevent?",
        "opts": [
          "A party from ever filing a new, unrelated lawsuit",
          "A party from relitigating a specific issue of fact or law that was already actually litigated and necessarily decided in a prior case between the same parties",
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
          "The validity of a law is determined by its sources, such as proper enactment by a recognized authority, and is conceptually separate from its moral merit",
          "Law can only be understood through religious doctrine",
          "Legal rules have no binding force unless universally agreed upon"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is the significance of 'natural law theory' as a jurisprudential tradition, in contrast to legal positivism?",
        "opts": [
          "It holds that law is purely a social construct with no connection to morality",
          "It holds that there are inherent moral principles, discoverable through reason, that any valid human law must conform to, and that a sufficiently unjust rule may fail to be truly 'law'",
          "It rejects the existence of any universal moral principles",
          "It applies only to environmental regulation"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'legal realism', as a school of American jurisprudence, emphasize about how judges actually decide cases?",
        "opts": [
          "Judges mechanically apply legal rules with no discretion or influence from other factors",
          "Judicial decisions are significantly influenced by practical, social, psychological, and policy considerations, not merely the formal application of legal rules to facts",
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
          "The claim that law is a coherent, neutral, and apolitical system, arguing instead that legal doctrine often reflects and reinforces existing social and economic power structures",
          "The use of precedent in common law systems exclusively",
          "Only constitutional law, with no relevance to other legal fields"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does the 'Hart-Fuller debate' in jurisprudence center on?",
        "opts": [
          "A dispute over corporate tax law",
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
          "Analyzing legal rules and institutions using economic theory and methods, often assessing law in terms of efficiency and the incentives it creates",
          "Rejecting the relevance of economic considerations to legal questions entirely",
          "A field concerned exclusively with tax law"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does the 'Coase theorem', as applied within law and economics, imply about the role of legal rules like liability assignment when transaction costs are low?",
        "opts": [
          "Legal rules always determine the final efficient economic outcome regardless of bargaining",
          "Parties will bargain to an efficient outcome regardless of the initial legal assignment of rights, provided transaction costs are sufficiently low, though the initial assignment still affects distribution of wealth",
          "Legal rules are irrelevant to economic outcomes under any conditions",
          "Transaction costs are always zero in real-world legal disputes"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'comparative law' as a field of legal scholarship primarily concerned with?",
        "opts": [
          "Studying only a single country's legal system in isolation",
          "The systematic study and comparison of different legal systems, traditions, and institutions across countries, examining similarities, differences, and their underlying causes",
          "Comparing criminal sentences for the same crime within a single jurisdiction",
          "A field concerned exclusively with international trade law"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does the distinction between 'civil law' and 'common law' legal traditions primarily refer to, at a systemic level?",
        "opts": [
          "Civil law systems have no written constitutions, while common law systems always do",
          "Civil law systems are primarily based on comprehensive, codified statutes as the primary source of law, while common law systems place greater emphasis on judicial precedent and case law",
          "Civil law systems only apply to non-criminal matters",
          "Common law systems reject the use of any statutes entirely"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'legal formalism' as a jurisprudential approach, often contrasted with legal realism?",
        "opts": [
          "The view that judges should exercise wide personal discretion untethered from legal rules",
          "The view that legal reasoning is, or should be, a largely logical and mechanical process of applying established rules to facts, with minimal room for policy considerations or judicial discretion",
          "A theory rejecting the existence of legal rules altogether",
          "A theory applicable only to constitutional interpretation"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'originalism' as a method of constitutional interpretation generally hold?",
        "opts": [
          "Constitutional provisions should be interpreted according to evolving contemporary social values regardless of original meaning",
          "Constitutional provisions should be interpreted according to their original public meaning or the original intent of those who drafted and ratified them",
          "Courts should never interpret the constitution at all",
          "Constitutional interpretation is identical to statutory interpretation in every respect"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'living constitutionalism' as a contrasting method of constitutional interpretation?",
        "opts": [
          "The view that a constitution's meaning is fixed permanently at the time of ratification",
          "The view that a constitution's meaning can evolve over time to reflect changing societal values and circumstances, rather than being strictly bound to its original meaning",
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
          "Multiple legal systems or normative orders, such as state law, customary law, religious law, or indigenous law, can coexist and interact within the same social field",
          "Legal pluralism refers only to the existence of multiple courts within one legal system",
          "It is a concept applicable only to international law"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'the internal point of view', a concept central to H.L.A. Hart's legal positivism, meant to capture?",
        "opts": [
          "A purely external, sociological observation of how people happen to behave in response to rules",
          "The perspective of participants who accept legal rules as providing genuine standards of conduct and criticize deviations from them, distinct from merely predicting how officials will act",
          "A judge's private, subjective political opinions",
          "A defendant's mental state during a crime"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'the rule of recognition', another key concept in Hart's legal theory, function to identify?",
        "opts": [
          "The specific punishment for every criminal offense",
          "The ultimate, socially accepted criteria within a legal system used to identify which rules count as valid law within that system",
          "A rule applicable only to written constitutions",
          "A rule requiring unanimous judicial agreement on every case"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'transitional justice' as a field concerned with, in societies emerging from conflict or authoritarian rule?",
        "opts": [
          "Only the immediate imprisonment of former leaders with no further process",
          "A range of judicial and non-judicial mechanisms, such as truth commissions, prosecutions, and reparations, aimed at addressing legacies of large-scale past human rights abuses and facilitating societal transition",
          "A field concerned exclusively with corporate bankruptcy law",
          "A type of international trade dispute resolution"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'the doctrine of proportionality', widely used in constitutional and human rights adjudication, generally require courts to assess?",
        "opts": [
          "Whether a government measure has any conceivable justification whatsoever, regardless of impact",
          "Whether a government measure that limits a right pursues a legitimate aim, is suitable and necessary to achieve it, and does not impose an excessive burden relative to the benefit achieved",
          "Whether a criminal sentence matches the exact length specified in a statute",
          "Whether a contract's terms are numerically balanced"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'legal indeterminacy', a key claim associated with critical legal studies and some legal realists?",
        "opts": [
          "The idea that legal rules always produce a single, objectively correct answer to any legal question",
          "The claim that, in many cases, existing legal materials such as statutes and precedents do not logically compel a single correct outcome, leaving genuine room for judicial choice influenced by other factors",
          "A concept applicable only to ambiguous contract terms",
          "A theory rejecting the existence of any legal reasoning"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'the New Haven School' of international law, associated with Myres McDougal and Harold Lasswell, emphasize as central to understanding international legal processes?",
        "opts": [
          "A purely formalist, rule-based reading of treaty texts with no attention to context",
          "A policy-oriented approach examining international law as a dynamic process of authoritative decision-making aimed at realizing shared community values, rather than a fixed, static set of rules",
          "The exclusive authority of a single international court",
          "A rejection of the relevance of state sovereignty entirely"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is the theoretical significance of 'law as an autopoietic (self-referential) system', a concept drawn from systems theory and applied to law by scholars like Niklas Luhmann?",
        "opts": [
          "Law is directly and mechanically controlled by political and economic systems with no independent operational logic",
          "Law can be understood as a self-producing, self-referential social system that processes information according to its own internal binary code (legal/illegal), operationally closed off from, though cognitively open to, other social systems like politics or economics",
          "Law has no meaningful relationship to any other social system whatsoever",
          "This concept applies only to administrative law"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'the Grundnorm' (basic norm), a foundational concept in Hans Kelsen's 'Pure Theory of Law', function to provide?",
        "opts": [
          "A specific, substantive moral rule that all valid laws must satisfy",
          "A hypothesized, presupposed ultimate norm that provides the foundational validity for an entire legal system's hierarchy of norms, without itself being derived from a further positive legal rule",
          "A rule that only applies to international treaties",
          "A concept rejecting the existence of any legal hierarchy"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of Ronald Dworkin's concept of 'law as integrity' as an alternative to both legal positivism and strict natural law theory?",
        "opts": [
          "Law consists purely of explicit, enacted rules with no role for principles",
          "Judges should interpret the law, including its underlying principles as well as explicit rules, in a way that presents the community's legal practice in its best and most morally coherent light, treating law as a seamless, principled whole",
          "Judges should apply only their own personal moral views, unconstrained by precedent",
          "Law and morality must always be treated as entirely identical concepts"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does Dworkin's distinction between 'rules' and 'principles' in legal reasoning argue about how legal systems actually function, contra strict positivism?",
        "opts": [
          "Legal systems consist solely of clear-cut rules that apply in an all-or-nothing fashion, with no other normative standards",
          "Legal systems also contain principles, which have a dimension of weight and can be balanced against one another, playing a crucial role especially in hard cases where explicit rules run out or conflict",
          "Principles and rules are functionally identical and interchangeable in legal reasoning",
          "Only legislatures, never courts, can articulate legal principles"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical contribution of 'third world approaches to international law' (TWAIL) as a critical scholarly movement?",
        "opts": [
          "An approach affirming that international law has always been neutral and equally beneficial to all states regardless of historical context",
          "A critical approach examining how international law's historical development, doctrines, and institutions have been shaped by, and often perpetuate, colonial and imperial power structures and persistent global inequalities",
          "A field concerned exclusively with trade tariffs between developed nations",
          "A movement rejecting the existence of international law as a discipline"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'the interpretive turn' in jurisprudence, associated significantly with Dworkin's broader methodology, argue about the nature of legal theory itself?",
        "opts": [
          "Legal theory should be a purely descriptive, value-neutral sociological account of legal practice with no interpretive or evaluative dimension",
          "Understanding the concept of law itself is fundamentally an interpretive enterprise, requiring engagement with the purposes and values that make sense of legal practice, rather than a purely external, descriptive exercise",
          "Legal theory should be entirely mathematical and formal, with no reference to social practice",
          "Interpretation is relevant only to statutory construction, never to jurisprudential theory itself"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the significance of 'the internal morality of law', a concept developed by Lon Fuller, for distinguishing law from mere coercive power?",
        "opts": [
          "Fuller argued law requires no formal or procedural qualities whatsoever beyond effective enforcement",
          "Fuller argued that law-making is subject to an inherent procedural morality, comprising principles like generality, publicity, non-retroactivity, clarity, and consistency, and that a system failing these principles significantly may not constitute law in a meaningful sense at all",
          "This concept applies exclusively to international human rights treaties",
          "Fuller's theory rejects any connection between law's form and its legitimacy"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'legal indeterminacy' theory, as radicalized in some strands of critical legal studies, imply for the relationship between legal reasoning and political ideology?",
        "opts": [
          "Legal reasoning is entirely mechanical, and political ideology plays no role whatsoever in judicial outcomes",
          "Because existing legal doctrine often fails to compel unique determinate outcomes, the gaps are frequently filled, whether consciously or not, by judges' background political and ideological commitments, challenging claims of law's neutrality",
          "Political ideology only influences legislative processes, never judicial decision-making",
          "This claim applies only to constitutional law, never to private law fields like contracts"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'autopoiesis' as applied by Gunther Teubner to the phenomenon of transnational law developing outside formal state structures (such as global commercial 'lex mercatoria')?",
        "opts": [
          "Teubner argues transnational normative orders cannot function as law absent formal state enactment",
          "Teubner extends Luhmann's systems theory to argue that self-referential, operationally autonomous normative orders can emerge and function as genuine law even without a formal nation-state as their source, based on their own internal self-reproducing logic",
          "This theory applies only to domestic administrative law",
          "Autopoietic theory denies that transnational commercial norms have any binding force"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'the New Legal Realism' movement, distinguished from classical American legal realism, emphasize methodologically?",
        "opts": [
          "A pure return to formalist doctrinal analysis with no empirical component",
          "A commitment to rigorous, often interdisciplinary empirical social science methods for studying how law actually operates in practice and its real-world effects, building on but methodologically refining classical legal realist insights",
          "A rejection of any connection between law and social science",
          "An approach limited exclusively to criminal law empirical studies"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'juridification' as a concept in socio-legal studies, associated with thinkers like Jürgen Habermas?",
        "opts": [
          "A term describing the total absence of law in a given social sphere",
          "A process describing the increasing penetration and regulation of previously informal social spheres, such as family or workplace relations, by formal legal norms and procedures, with potentially both enabling and colonizing effects",
          "A concept applicable only to the codification of civil law systems",
          "A term synonymous with judicial review"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'the capabilities approach', developed by Amartya Sen and Martha Nussbaum and increasingly influential in legal and constitutional theory, propose as an alternative metric to purely formal legal equality or resource-based justice?",
        "opts": [
          "A metric based solely on aggregate national GDP",
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
          "Classical contract doctrine already fully captures the reality of most long-term commercial relationships",
          "Macneil argued that classical contract law's focus on discrete, one-off exchanges fails to capture the norms, relational context, and ongoing cooperative dynamics that actually govern many real-world, especially long-term, contractual relationships",
          "Relational contract theory denies that any contracts are legally enforceable",
          "This theory applies only to consumer, not commercial, contracts"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'legal consciousness' theory, prominent in law and society scholarship, examine regarding ordinary people's relationship to law?",
        "opts": [
          "Only formal legal doctrine as articulated by appellate courts",
          "How ordinary people, in their everyday lives, understand, interpret, invoke, avoid, or resist law, and how these understandings in turn shape and are shaped by broader legal and social structures",
          "The psychological state of judges exclusively while deciding cases",
          "A concept applicable only to criminal defendants' state of mind"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'the counter-majoritarian difficulty', a phrase coined by Alexander Bickel, for theories of judicial review in constitutional democracies?",
        "opts": [
          "It refers to a purely procedural difficulty in counting votes during jury deliberation",
          "It names the fundamental tension in constitutional democracies where unelected judges, exercising judicial review, can invalidate laws enacted by democratically elected, majoritarian legislatures, raising deep questions about democratic legitimacy",
          "It is a concept applicable only to civil law jurisdictions without judicial review",
          "It refers to a dispute over legislative voting thresholds"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'expressivist theory of law', as applied for instance to criminal punishment, emphasize about law's function beyond deterrence or retribution?",
        "opts": [
          "Law functions purely as a mechanistic system of costs and benefits with no communicative or symbolic dimension",
          "Law, including punishment, serves an important expressive or communicative function, conveying social condemnation, values, and messages to both the offender and the broader community, beyond its purely instrumental effects",
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
          "Watson argued legal rules and institutions can be transplanted relatively successfully between different societies even with quite different social and economic conditions, sparking ongoing debate with scholars who emphasize the importance of local socio-cultural context for a transplant's success",
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
          "How the legal profession is internally stratified by factors such as prestige, specialization, and client type (e.g., corporate versus individual clients), and how this stratification shapes professional norms, career trajectories, and the profession's broader social and political influence",
          "A field concerned exclusively with bar examination pass rates",
          "A field with no connection to broader theories of professions and expertise"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'legal formants' theory, developed by Rodolfo Sacco within comparative law, for understanding apparent similarities between legal systems?",
        "opts": [
          "Legal systems consist of a single unified source with no internal complexity worth analyzing",
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
          "Only the formally specified amendment procedure in a constitution's text can ever produce legitimate constitutional change",
          "Ackerman argues that, at certain rare historical junctures of heightened, sustained popular political mobilization and deliberation, fundamental constitutional change can occur and gain legitimacy through processes falling outside the strict formal amendment procedures set out in the constitutional text itself",
          "This theory applies only to unwritten constitutions",
          "Ackerman's theory denies that any informal constitutional change has ever legitimately occurred"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'legal indeterminacy versus underdeterminacy' as refined by scholars like Brian Leiter, responding to critical legal studies' strongest claims?",
        "opts": [
          "The distinction is meaningless and both terms refer to the exact same phenomenon",
          "Leiter distinguishes full indeterminacy, where legal materials permit literally any outcome, from underdeterminacy, where legal materials rule out many but not all possible outcomes, arguing the more defensible and empirically supportable claim about law is the latter, weaker one",
          "This distinction applies only to tax law disputes",
          "The distinction was developed to prove legal materials always fully determine a single correct outcome"
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
          "Quotient"
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
          "Angles of any triangle",
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
          "y = 1/x",
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
          "-5",
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
          "1/x² + C",
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
          "The probability the null hypothesis is true",
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
          "A vector that changes direction under a linear transformation",
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
          "The sum of independent random variables tends toward a normal distribution as sample size grows, regardless of the original distribution",
          "The mean of a data set equals its median",
          "Variance decreases as sample size decreases"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is a matrix's determinant used to determine?",
        "opts": [
          "Whether a matrix is symmetric",
          "Whether a matrix is invertible, among other properties",
          "The number of rows in a matrix",
          "The trace of a matrix"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'correlation does not imply causation' caution against?",
        "opts": [
          "Assuming two correlated variables have no relationship",
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
          "The probability that a hypothesis is true",
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
          "Calculating the determinant of a matrix",
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
          "The determinant of a covariance matrix"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does it mean for a function to be 'continuous' at a point?",
        "opts": [
          "It has a defined derivative everywhere",
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
          "A categorical outcome from categorical predictors",
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
          "They point in the same direction",
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
          "The average value of a data set",
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
          "The derivative of a function at a point"
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
          "Mathematics can be fully derived from a finite set of axioms without exception"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is a Markov chain?",
        "opts": [
          "A deterministic sequence with no randomness",
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
          "A fixed, deterministic sequence of numbers",
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
          "To classify data into predefined categories",
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
          "The set of all possible outcomes of an experiment",
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
          "Calculating the exact population mean directly",
          "Testing whether two means are equal",
          "Reducing the dimensionality of a data set"
        ],
        "a": 0,
        "tier": 4
      },
      {
        "q": "What does 'convexity' of a function mean in optimization?",
        "opts": [
          "The function has multiple local minima",
          "A line segment between any two points on the graph lies above or on the graph, ensuring any local minimum is a global minimum",
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
          "A type of matrix with only real eigenvalues",
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
          "Probability distributions of random variables"
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
          "A purely discrete mathematical structure"
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
          "A method for factoring polynomials"
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
          "It applies only when sample size is less than 5"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'regularization', such as L1 or L2 penalties, address in statistical modeling?",
        "opts": [
          "Overfitting, by penalizing model complexity to improve generalization",
          "Underfitting exclusively",
          "The exact computation of p-values",
          "Sample collection bias"
        ],
        "a": 0,
        "tier": 4
      },
      {
        "q": "What is a 'Poisson process' used to model?",
        "opts": [
          "A fixed, non-random sequence of events",
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
          "Fixed, unknown constants only",
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
          "The sum of its diagonal entries",
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
          "The process is always deterministic",
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
          "To calculate a matrix's eigenvalues directly"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'homoscedasticity' assume in linear regression?",
        "opts": [
          "The variance of the errors is constant across all levels of the independent variable",
          "The errors are always normally distributed with mean 100",
          "The independent variables are uncorrelated with each other",
          "The dependent variable is always binary"
        ],
        "a": 0,
        "tier": 4
      },
      {
        "q": "What is a 'random walk' in probability theory?",
        "opts": [
          "A deterministic path with fixed step sizes and directions",
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
          "Every even integer is the sum of two primes",
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
          "An entirely computational simulation-based approach"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does the Kolmogorov-Smirnov test assess?",
        "opts": [
          "Whether two means are significantly different",
          "Whether a sample's distribution differs significantly from a reference distribution, or whether two samples come from the same distribution",
          "The correlation between two variables",
          "The variance of a single sample"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is 'Ito calculus', used in stochastic processes and quantitative finance, an extension of?",
        "opts": [
          "Standard calculus applied to continuous, differentiable functions",
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
          "A process that always increases over time",
          "A stochastic process where the conditional expected value of the next observation, given all prior observations, equals the current observation",
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
          "Whether computers can simulate the human brain"
        ],
        "a": 0,
        "tier": 5
      },
      {
        "q": "What does 'algebraic topology' primarily study, using tools from abstract algebra?",
        "opts": [
          "The properties of topological spaces that are preserved under continuous deformations, using algebraic invariants like homology and homotopy groups",
          "The numerical solution of differential equations",
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
          "A purely discrete space with no functions",
          "A space used only for integer arithmetic",
          "A type of finite field"
        ],
        "a": 0,
        "tier": 5
      },
      {
        "q": "What does the 'Central Limit Theorem for martingales' extend the classical CLT to handle?",
        "opts": [
          "Only independent, identically distributed variables",
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
          "Studying algebraic structures like modules and their relationships via chain complexes and derived functors",
          "Estimating population parameters",
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
          "It disproves the existence of irrational numbers"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'stochastic differential equations' (SDEs) model?",
        "opts": [
          "Purely deterministic dynamical systems",
          "Systems whose evolution includes a deterministic drift term and a random (stochastic) noise term, often driven by Brownian motion",
          "Static equilibrium states only",
          "Discrete combinatorial structures"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the 'Curse of Dimensionality' in high-dimensional statistics and machine learning?",
        "opts": [
          "The observation that data becomes increasingly dense as dimensions increase",
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
          "Fixed matrices of constants"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is 'algebraic geometry' broadly the study of?",
        "opts": [
          "The geometry of physical, real-world shapes only",
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
          "The elimination of randomness from a stochastic process"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is 'category theory' broadly concerned with, as a highly abstract branch of mathematics?",
        "opts": [
          "Only the study of finite sets",
          "Mathematical structures and the relationships (morphisms) between them, unifying concepts across different areas of mathematics",
          "Numerical methods for solving equations",
          "The classification of prime numbers only"
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
          "It applies only to polynomials"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the significance of the 'Black-Scholes partial differential equation' in mathematical finance, derived using Ito calculus?",
        "opts": [
          "It guarantees a risk-free profit from any asset",
          "It describes how the price of a derivative, like a European option, evolves over time under certain assumptions, enabling closed-form pricing formulas",
          "It proves markets are always inefficient",
          "It calculates a company's exact future earnings"
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
          "Multiple instruments playing at once",
          "A type of musical instrument"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does 'tempo' refer to in music?",
        "opts": [
          "The volume of a piece",
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
          "A single musical note",
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
          "The melody of a song",
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
          "The speed of a piece",
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
          "A written description of a song",
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
          "The loudness of a piece",
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
          "A single melody line alone",
          "Multiple notes or chords played together that sound pleasing or complementary",
          "The speed of a song",
          "The lyrics of a song"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a 'genre' in music?",
        "opts": [
          "A specific song title",
          "A category or style of music, like jazz, rock, or classical",
          "A type of musical instrument",
          "A tempo marking"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does 'a cappella' mean?",
        "opts": [
          "Singing with a full orchestra",
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
          "A song with no instruments",
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
          "A single musician performing alone",
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
          "The very first line of a song",
          "A repeated section of a song, often containing the main musical hook",
          "A single instrument solo",
          "The song's title"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does 'acoustic' mean when describing an instrument or performance?",
        "opts": [
          "Played using only electronic instruments",
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
          "A written piece of sheet music",
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
          "Playing very quickly",
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
          "A bright, happy sound",
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
          "The key of the piece",
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
          "Any group of eight musicians",
          "The interval between one musical pitch and another with double or half its frequency",
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
          "A scale of ten notes",
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
          "The tempo of the piece",
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
          "A single melodic line with no accompaniment",
          "The technique of combining two or more independent melodic lines that harmonize with each other",
          "A type of percussion rhythm",
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
          "A rhythm with perfectly even, predictable beats",
          "A rhythmic technique that emphasizes off-beats or weak beats, creating a sense of surprise or groove",
          "A very slow tempo",
          "A type of scale"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does the term 'modulation' refer to in music theory?",
        "opts": [
          "A change in volume",
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
          "A single sustained note",
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
          "The ability to sing very loudly",
          "The rare ability to identify or produce a musical note without any reference tone",
          "The ability to play many instruments",
          "A type of professional music training certificate"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is a 'scale degree' in music theory?",
        "opts": [
          "The physical size of an instrument",
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
          "Music consisting of a single melodic line",
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
          "Music with multiple independent melodies of equal importance",
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
          "Changing the tempo of a piece",
          "Shifting a piece of music from one key to another while preserving the intervals between notes",
          "Changing the instrument used to perform a piece",
          "Adding lyrics to an instrumental piece"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is a 'leitmotif', as famously used by composers like Wagner?",
        "opts": [
          "A single, unchanging tempo marking",
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
          "The physical construction of instruments",
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
          "The main dominant chord of a key",
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
          "The lyrics sung by a lead vocalist",
          "The smooth and logical movement of individual melodic lines (voices) from one chord to the next",
          "The volume balance between instruments",
          "A type of scale used in jazz"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'modal interchange' (or borrowed chords) in music theory?",
        "opts": [
          "Playing a piece entirely in a single mode with no variation",
          "Borrowing chords from a parallel key or mode, such as using a minor iv chord in a major key, to add harmonic color",
          "A method for changing tempo mid-piece",
          "A type of percussion technique"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does the 'circle of fifths' visually organize?",
        "opts": [
          "The order in which instruments should be introduced in an orchestra",
          "The relationships among the 12 tones of the chromatic scale, their key signatures, and associated major and minor keys",
          "The rhythmic subdivisions within a measure",
          "The historical timeline of musical genres"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is a 'pedal point' (or pedal tone) in music?",
        "opts": [
          "A note played only on a piano's pedal",
          "A sustained or repeated note, usually in the bass, held while the harmonies above it change",
          "A type of key signature",
          "A tempo marking indicating a gradual slowdown"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'chromaticism' refer to in music?",
        "opts": [
          "The use of only notes within a single diatonic scale",
          "The use of notes outside the primary diatonic scale of a piece, often for expressive or transitional effect",
          "A specific time signature",
          "A type of instrument tuning system"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'sonata form', a common structure in classical instrumental music?",
        "opts": [
          "A single continuous melody with no sections",
          "A large-scale musical structure typically consisting of an exposition, development, and recapitulation of thematic material",
          "A type of vocal-only composition",
          "A rhythmic pattern used only in dance music"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'ternary form' (ABA) describe in musical structure?",
        "opts": [
          "A piece with only one section repeated endlessly",
          "A three-part musical structure where the first section returns after a contrasting middle section",
          "A piece composed for exactly three instruments",
          "A type of key signature"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'the Neapolitan sixth chord', a specific chromatic chord used in tonal harmony?",
        "opts": [
          "A chord built on the tonic of a major scale",
          "A major chord built on the flattened second scale degree, typically used in first inversion, adding a distinctive chromatic color, especially before a dominant chord",
          "A chord used exclusively in atonal music",
          "A rhythmic pattern rather than a harmonic structure"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'enharmonic equivalence' mean in music theory?",
        "opts": [
          "Two notes with completely different pitches that happen to share a name",
          "Two different note names, such as C-sharp and D-flat, that refer to the same physical pitch in standard equal temperament tuning",
          "A rhythmic pattern with equal note durations",
          "A type of instrument tuning method"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'the Picardy third'?",
        "opts": [
          "A type of dissonant interval used in modern jazz",
          "The technique of ending a piece or section in a minor key with a major tonic chord, raising the third to create a brighter final resolution",
          "A specific tempo marking used in Baroque music",
          "A type of percussion rhythm from French folk music"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'species counterpoint', a pedagogical system historically associated with Johann Fux, teach?",
        "opts": [
          "A single method for composing purely electronic music",
          "A structured, rule-based method for progressively learning to write independent, harmonically compatible melodic lines against a given cantus firmus",
          "A modern system for mixing audio recordings",
          "A rhythmic notation system used only in percussion music"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is a 'Neapolitan cadence' distinguished from a standard cadence by?",
        "opts": [
          "The use of only diatonic chords with no chromatic alteration",
          "Its incorporation of the Neapolitan (flattened supertonic) chord, typically just before the dominant, in the approach to a cadential resolution",
          "A cadence used exclusively in atonal compositions",
          "A cadence defined purely by its rhythm, with no harmonic component"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'the augmented sixth chord' family (Italian, French, German) share as a common harmonic function?",
        "opts": [
          "They function as simple tonic chords in root position",
          "They are chromatically altered predominant chords built to resolve strongly, via an augmented sixth interval, typically outward to the dominant",
          "They are used exclusively for ending a piece",
          "They only appear in unaccompanied vocal music"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'the tritone', an interval of particular significance in tonal harmony?",
        "opts": [
          "A perfectly consonant interval used to establish the tonic",
          "A highly dissonant interval spanning three whole tones, historically associated with instability and often called 'diabolus in musica'",
          "An interval used only in major scales, never minor",
          "A type of rhythmic subdivision"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'metric modulation' refer to in more advanced rhythmic composition?",
        "opts": [
          "Simply speeding up or slowing down a piece uniformly",
          "A technique where a rhythmic value in one tempo or meter is reinterpreted as an equivalent value in a new tempo or meter, creating a smooth but calculated shift",
          "A method for transposing a melody to a new key",
          "A type of dynamic marking indicating volume change"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'the Rule of the Octave' (Regola dell'ottava), a historical harmonic convention from the Baroque period?",
        "opts": [
          "A rule limiting compositions to exactly eight measures",
          "A conventional guideline specifying standard harmonizations for each scale degree of an ascending or descending bass line, used as a foundation for figured bass improvisation",
          "A rule requiring all octaves to be played simultaneously",
          "A rule governing the tuning of keyboard instruments only"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'set theory' as applied to atonal music analysis (pitch-class set theory) primarily analyze?",
        "opts": [
          "The chord progressions found in traditional tonal harmony exclusively",
          "Collections of pitch classes and their intervallic relationships, independent of a traditional tonal or key-based framework, often used to analyze 20th-century atonal music",
          "The physical construction materials of orchestral instruments",
          "The historical publication dates of musical scores"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is a 'deceptive cadence' (or interrupted cadence) in tonal harmony?",
        "opts": [
          "A cadence that resolves exactly as the listener expects, to the tonic",
          "A cadence, typically V-vi, where the expected resolution to the tonic chord is avoided in favor of an unexpected chord, creating a sense of surprise or continuation",
          "A cadence used only at the very beginning of a piece",
          "A cadence defined purely by dynamics, with no harmonic content"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'twelve-tone technique' (dodecaphony), developed by Arnold Schoenberg, structure a composition around?",
        "opts": [
          "A traditional major or minor scale",
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
          "Serialism concerns only the ordering of pitches, never other musical parameters",
          "Serialism can extend the principle of ordered, systematic control to other musical parameters as well, such as rhythm, dynamics, and timbre, in what is sometimes called 'total serialism'",
          "Serialism is a purely improvisational technique with no systematic ordering",
          "Serialism applies exclusively to solo piano compositions"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'spectral music', associated with composers like Gérard Grisey and Tristan Murail, use as a primary basis for compositional material?",
        "opts": [
          "Traditional diatonic scales and functional harmony exclusively",
          "The acoustic analysis of sound's spectral (overtone) content, using the physical properties of timbre and the harmonic or inharmonic overtone series as a direct basis for pitch and harmonic organization",
          "A fixed twelve-tone row, as in classical serialism",
          "Purely improvised, unstructured performance with no compositional planning"
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
          "Traditional Roman numeral functional harmony exclusively",
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
          "A tool for notating rhythm exclusively",
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
          "Strict, fully predetermined notation with zero performer discretion",
          "An element of chance or indeterminacy, where certain musical parameters, such as pitch, duration, or order, are left to random processes or performer choice rather than being fully fixed by the composer",
          "Only traditional tonal harmony with no experimental elements",
          "A requirement that all performers play in strict unison at all times"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'musique concrète', pioneered by Pierre Schaeffer, fundamentally based on as a compositional method?",
        "opts": [
          "Composing exclusively for traditional orchestral instruments",
          "Composing with recorded, real-world sounds, which are then manipulated and organized using early tape-based electronic techniques, rather than starting from traditionally notated musical material",
          "A strict twelve-tone serial technique applied to acoustic instruments",
          "A purely improvisational jazz technique"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'the theory of pitch-class set similarity relations' (such as those developed by Allen Forte) attempt to quantify in atonal music analysis?",
        "opts": [
          "The tempo relationships between different sections of a piece",
          "The degree of intervallic or structural similarity between different pitch-class sets, providing an analytical tool for identifying meaningful relationships in music that lacks traditional tonal function",
          "The dynamic markings used throughout a score",
          "The historical popularity of a given musical work"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'spectralism's use of the harmonic series' theoretically grounded in, as a departure from earlier twentieth-century atonal approaches?",
        "opts": [
          "An arbitrary, purely constructed ordering of pitches with no acoustic basis",
          "The physical, acoustic phenomenon of the overtone series naturally present in any complex vibrating sound, used as a generative source for pitch material, harmony, and orchestration",
          "A strict adherence to Renaissance-era modal theory",
          "A rejection of any connection between compositional theory and the physics of sound"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'process music', associated with composers like Steve Reich, structure a piece around?",
        "opts": [
          "A single, static harmonic block with no development",
          "A clearly audible, often gradual and systematic musical process, such as phasing or additive rhythm, that the listener can perceive unfolding over the course of the piece",
          "A strict twelve-tone row manipulated according to serialist principles",
          "Purely improvised material with no underlying systematic process"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'the theory of rhythmic phasing', central to some minimalist compositions by Steve Reich?",
        "opts": [
          "A technique of abruptly changing tempo without transition",
          "A compositional technique where two identical rhythmic patterns are played simultaneously but gradually shift out of synchronization with one another, creating evolving interference patterns",
          "A method for tuning instruments to match each other precisely",
          "A rhythmic notation system used only for percussion ensembles"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'microtonality' involve, as distinct from standard Western 12-tone equal temperament?",
        "opts": [
          "Using only the standard 12 semitones of Western tuning",
          "The use of musical intervals smaller than the standard semitone of 12-tone equal temperament, often drawing on alternative tuning systems like just intonation or various equal divisions of the octave",
          "A technique limited exclusively to solo vocal performance",
          "A purely theoretical concept never used in actual compositions"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'just intonation' as a tuning system, in contrast to equal temperament?",
        "opts": [
          "A tuning system based purely on arbitrary, non-mathematical adjustments",
          "A tuning system based on frequency ratios of small whole numbers, producing acoustically pure intervals, but which cannot be transposed to all keys without retuning, unlike equal temperament's compromise tuning",
          "An identical tuning system to standard 12-tone equal temperament",
          "A tuning system used exclusively in electronic music production"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'the theory of formal function', as developed by scholars like William Caplin building on earlier theorists, analyze regarding classical-era musical phrases?",
        "opts": [
          "The exact notated dynamics of a phrase",
          "The structural role a musical unit plays, like 'presentation' or 'cadential'",
          "The historical performance practice of ornamentation",
          "The instrumentation choices made by a composer"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'timbral composition' or 'Klangfarbenmelodie' ('tone-color melody'), a concept associated with Schoenberg and later composers like Webern?",
        "opts": [
          "Composing a melody using only a single instrument's timbre throughout",
          "A compositional technique where a melodic line's continuity is achieved by distributing successive notes or short motives across different instrumental timbres, making timbre itself a structural, melody-like element",
          "A technique exclusively concerned with dynamics, not timbre",
          "A method for notating traditional Western harmony"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'the theory of harmonic rhythm' analyze in a piece of tonal music?",
        "opts": [
          "The exact melodic contour of a piece",
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
          "An analysis based solely on exact pitch and duration values",
          "An analytical approach examining the up-and-down shape (contour) of a melodic line, abstracted from its precise pitch content, useful for comparing melodic similarity in music where exact intervals are less structurally central",
          "A method for analyzing only rhythmic notation",
          "A technique applicable exclusively to purely tonal, functional harmony"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'transformational theory', as systematically formalized by David Lewin, propose as an alternative analytical perspective to traditional interval-based (Cartesian) pitch analysis?",
        "opts": [
          "A framework focused exclusively on measuring fixed distances between static pitch objects",
          "A framework shifting analytical focus from measuring distances between static musical objects toward characterizing the actions, or transformations, that move one musical configuration to another, emphasizing process and gesture over static comparison",
          "A purely historical framework with no formal mathematical basis",
          "A theory limited exclusively to the analysis of rhythm, not pitch"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the significance of 'generalized interval systems' (GIS), a formal mathematical structure introduced by David Lewin, for music theory?",
        "opts": [
          "GIS provides a single, fixed definition of 'interval' applicable only to traditional pitch space",
          "GIS provides an abstract algebraic framework, generalizing the concept of musical interval beyond simple pitch distance to apply consistently across diverse musical spaces, such as pitch, rhythm, or timbre, using group-theoretic structures",
          "GIS is a purely notational system with no theoretical or analytical content",
          "GIS applies exclusively to microtonal tuning systems"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'the theory of maximally smooth voice leading', formalized using geometric models by theorists like Dmitri Tymoczko, mathematically characterize?",
        "opts": [
          "Chord progressions that always involve the largest possible pitch motion between voices",
          "Chord progressions in which the total distance moved by all voices between successive chords is minimized, a property that can be modeled geometrically in continuous musical spaces called orbifolds",
          "A purely rhythmic property of a musical passage",
          "A property applicable exclusively to purely diatonic, non-chromatic music"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the significance of 'geometrical music theory', as developed extensively by Dmitri Tymoczko, for representing chords and voice leading?",
        "opts": [
          "It rejects any mathematical or geometric modeling of musical structure entirely",
          "It represents chords as points in continuous, often non-Euclidean geometric spaces called orbifolds, allowing voice-leading relationships between chords to be visualized and measured as paths or distances within this geometric space",
          "It is applicable only to twelve-tone serial compositions",
          "It is a purely notational convenience with no analytical or compositional implications"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'diatonic set theory', as a formalized subfield combining set theory and scale theory, mathematically investigate about the diatonic collection's special properties?",
        "opts": [
          "That the diatonic collection has no distinguishing mathematical properties compared to arbitrary seven-note collections",
          "Special combinatorial and structural properties of the diatonic (major) scale, such as maximal evenness, the deep scale property, and Myhill's property, which may help explain its historical prevalence across many musical cultures",
          "That the diatonic scale is mathematically identical to the twelve-tone chromatic aggregate",
          "A property applicable exclusively to non-Western musical scales"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'the well-formedness property' of scales, as formalized by theorists like Norman Carey and David Clampitt?",
        "opts": [
          "A property held by all arbitrary pitch collections regardless of structure",
          "A formal mathematical property describing scales, like the diatonic scale, generated by iterating a single generic interval within an octave, such that the scale exhibits a particularly regular and coherent structural organization",
          "A property describing only rhythmic patterns, not pitch collections",
          "A property limited exclusively to twelve-tone equal temperament scales"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'computational musicology', as an interdisciplinary field, primarily apply computational and statistical methods to investigate?",
        "opts": [
          "Only the historical biographical details of composers",
          "Large-scale patterns in musical corpora, style, and structure using computational analysis, machine learning, and statistical modeling, often complementing or testing traditional music-theoretic and music-historical claims",
          "The physical acoustics of concert hall architecture exclusively",
          "A field concerned exclusively with digital audio file compression formats"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'topic theory' in the study of eighteenth-century classical music, as developed by scholars like Leonard Ratner and Kofi Agawu?",
        "opts": [
          "A theory concerned exclusively with the harmonic function of chords",
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
          "Musical expectation plays no meaningful role in a listener's emotional or aesthetic experience",
          "A framework arguing that music's emotional and aesthetic effect substantially derives from the interplay between a listener's implicit expectations, shaped by statistical learning and musical convention, and the actual musical events that confirm, delay, or violate those expectations",
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
          "Listeners implicitly learn the statistical distributional regularities of pitch usage within a musical culture through exposure, internalizing this as a perceptual sense of tonal hierarchy, such as the relative stability of scale degrees, which can be empirically measured using methods like the probe-tone technique",
          "Tonal hierarchy perception is identical across every musical culture with no learned, culture-specific component",
          "This theory applies only to trained professional musicians, not casual listeners"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the significance of 'spectral analysis-informed orchestration', as a compositional technique building on spectral music research, for orchestrating timbre?",
        "opts": [
          "Orchestration decisions are made without any reference to a sound's acoustic spectral content",
          "Composers use detailed acoustic analysis of a sound's overtone spectrum to inform how instrumental combinations are voiced and layered, aiming to acoustically approximate, blend, or morph between different timbral spectra through the orchestra",
          "This technique applies exclusively to solo, unaccompanied instrumental writing",
          "A technique limited exclusively to purely electronic, non-orchestral composition"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'the theory of musical Markov models' apply from probability theory to analyze or generate musical sequences?",
        "opts": [
          "A deterministic, non-probabilistic model of musical structure",
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
          "Musical meaning is understood purely through abstract, disembodied symbolic manipulation",
          "An approach proposing that musical understanding and meaning are substantially grounded in embodied, physical gestures and cross-domain metaphorical mappings, such as pitch height mapping onto physical verticality, drawing on broader cognitive science research into embodied cognition",
          "A theory concerned exclusively with the physical construction of musical instruments",
          "A framework applicable only to vocal, not instrumental, music"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'the theory of maximal evenness applied to rhythm' (rhythmic maximal evenness), extending concepts from scale theory, mathematically characterize about certain rhythmic patterns found across world music traditions?",
        "opts": [
          "Rhythmic patterns with an arbitrary, unstructured distribution of onsets within a cycle",
          "Certain culturally widespread rhythmic timelines, such as the son clave, exhibit a mathematically maximally even distribution of onsets around a rhythmic cycle, analogous to the maximally even property found in scales like the diatonic collection",
          "A property describing only pitch relationships, with no rhythmic application",
          "A property unique exclusively to Western art music rhythmic notation"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'neural network-based music generation models', as a contemporary computational approach to algorithmic composition?",
        "opts": [
          "These models require the composer to explicitly hand-code every compositional rule with no learning involved",
          "These models learn statistical and structural patterns directly from large corpora of existing music through training, enabling them to generate novel musical material that reflects learned stylistic regularities, without being explicitly programmed with traditional music-theoretic rules",
          "These models are purely deterministic with no element of learned statistical inference",
          "This approach applies exclusively to generating rhythm, never melody or harmony"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'the theory of tonal pitch space', as formalized by theorists like Fred Lerdahl building on generative approaches, propose as a way to quantify psychological distance between musical elements?",
        "opts": [
          "All pitches and chords are perceived as psychologically equidistant from one another regardless of tonal context",
          "A hierarchical, multi-level geometric model representing psychological distances between pitches, chords, and keys, incorporating levels from the chromatic scale up through diatonic, triadic, and regional (key) levels, allowing tonal tension and distance to be quantitatively modeled",
          "A purely rhythmic model with no application to pitch or harmony",
          "A model applicable only to atonal, non-tonal musical passages"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'generative theory of tonal music' (GTTM), developed by Fred Lerdahl and Ray Jackendoff, drawing explicitly on generative linguistics?",
        "opts": [
          "GTTM proposes that musical structure has no meaningful hierarchical organization",
          "GTTM proposes a formal, rule-based system modeling the listener's unconscious, hierarchical mental organization of tonal music, including grouping structure, metrical structure, time-span reduction, and prolongational reduction, drawing an explicit analogy to Chomskyan generative grammar in linguistics",
          "GTTM applies exclusively to the surface-level notation of a score with no deeper structural claims",
          "GTTM is concerned exclusively with the biographical context of a composition, not its internal structure"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'corpus-based music cognition research', combining computational corpus analysis with cognitive and perceptual experiments, aim to empirically test?",
        "opts": [
          "Purely abstract music-theoretic claims with no reference to real musical repertoire or listener behavior",
          "Whether music-theoretic constructs and cognitive models of musical perception, such as tonal hierarchy or expectation, are actually reflected in statistical regularities present in large corpora of real musical repertoire, and whether these regularities predict measured listener responses",
          "A field concerned exclusively with the economics of the recorded music industry",
          "A method limited exclusively to studying a single composer's complete works in isolation"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'the theory of tonnetz-based neo-Riemannian networks applied to atonal and post-tonal repertoire' for extending transformational theory beyond its original triadic context?",
        "opts": [
          "Neo-Riemannian and transformational networks are theoretically restricted exclusively to classical triadic tonal harmony with no possible extension",
          "Theorists have extended transformational and network-based approaches, originally developed for triadic chromatic harmony, to model relationships among more general pitch-class sets and non-triadic sonorities found in twentieth and twenty-first century post-tonal repertoire, broadening the applicability of geometric and transformational modeling",
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
          "A government tax form",
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
          "Borrowing money from a bank"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a bank account primarily used for?",
        "opts": [
          "Filing taxes",
          "Storing and managing your money",
          "Applying for a job",
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
          "A government subsidy",
          "A stock market index"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a credit card?",
        "opts": [
          "A card that only stores your own money",
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
          "Money invested in stocks",
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
          "Interest paid only on the original principal",
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
          "A type of savings account",
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
          "Avoiding the stock market entirely",
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
          "A type of investment",
          "A tax form"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a 'debit card' primarily used for?",
        "opts": [
          "Borrowing money from a bank",
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
          "Having no bank account"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a 'paycheck'?",
        "opts": [
          "A type of bank loan",
          "Payment received for work done, typically on a regular schedule",
          "A tax refund",
          "A type of insurance"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is 'income'?",
        "opts": [
          "Money spent on bills",
          "Money received, typically from work or investments",
          "A type of debt",
          "A government tax"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a 'receipt'?",
        "opts": [
          "A type of loan",
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
          "To donate money regularly"
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
          "Higher taxes"
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
          "A government grant"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does it mean to 'invest' money?",
        "opts": [
          "To spend money immediately",
          "To put money into something, like stocks or property, expecting a future return",
          "To hide money away",
          "To donate money to charity"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a 'credit report'?",
        "opts": [
          "A tax return",
          "A record of an individual's credit history and borrowing behavior",
          "A bank statement",
          "A stock certificate"
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
          "Your credit score"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is a 'mortgage'?",
        "opts": [
          "A type of credit card",
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
          "A bank account number",
          "A stock ticker symbol"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is a 'premium' in the context of insurance?",
        "opts": [
          "The payout received after a claim",
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
          "Money earned from a salary",
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
          "The deposit cannot be withdrawn early",
          "The deposit is entirely tax-free"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is a 'W-2 form' used for in the US?",
        "opts": [
          "Applying for a loan",
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
          "A method of avoiding debt entirely"
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
          "To transfer a loan to another person"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is a 'certificate of deposit' (CD)?",
        "opts": [
          "A type of stock",
          "A savings product locking a sum for a fixed term and rate",
          "A government bond",
          "A type of insurance"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "In budgeting, what is the difference between a 'need' and a 'want'?",
        "opts": [
          "Needs always cost more than wants",
          "Needs are essential for living, while wants are discretionary",
          "There is no meaningful difference",
          "Wants are always cheaper than needs"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is 'gross income'?",
        "opts": [
          "Income after taxes and deductions",
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
          "No insurance or protection at all",
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
          "Storing physical cash only"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is a 'checking account' primarily designed for?",
        "opts": [
          "Long-term investment growth",
          "Frequent, everyday transactions like deposits and withdrawals",
          "Retirement savings exclusively",
          "Filing taxes"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'annual percentage yield' (APY) reflect, that simple interest does not?",
        "opts": [
          "The effect of compounding over a year",
          "A fixed government-set rate",
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
          "A bank employee who approves loans",
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
          "A type of savings bonus",
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
          "To open a new bank account",
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
          "How much tax an asset incurs",
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
          "A government stimulus check",
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
          "Your total net worth",
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
          "An increase in interest rates set by a bank",
          "A decrease in unemployment"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is a mutual fund?",
        "opts": [
          "A single company's stock",
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
          "Roth IRAs are only available through employers",
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
          "Converting all assets to a single currency",
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
          "The bond issuer's credit rating"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does the price-to-earnings (P/E) ratio measure?",
        "opts": [
          "A company's total debt load",
          "A stock's price relative to its earnings per share, as a valuation metric",
          "The dividend yield of a stock",
          "A company's cash reserves"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'asset allocation'?",
        "opts": [
          "The tax owed on investment income",
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
          "A company's dividend yield",
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
          "A company's total debt",
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
          "Selling an asset you own for a quick profit",
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
          "Guarantee a fixed rate of return",
          "Focus solely on foreign currencies"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does the 'time value of money' concept state?",
        "opts": [
          "A dollar today is worth more than the same dollar in the future, due to its earning potential",
          "Money is worth the same regardless of when it is received",
          "Time has no bearing on financial decisions",
          "Money always depreciates at a fixed government rate"
        ],
        "a": 0,
        "tier": 3
      },
      {
        "q": "What is a 'derivative' in finance?",
        "opts": [
          "A type of savings account",
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
          "Guarantee a fixed profit regardless of market conditions"
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
          "Diversifying across many asset classes",
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
          "A government tax collection method",
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
          "Its book value"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "The weak form of the Efficient Market Hypothesis claims what?",
        "opts": [
          "Insider information cannot ever move prices",
          "Current prices fully reflect all past price and volume information",
          "All public and private information is priced in instantly",
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
          "The number of years until a bond is issued",
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
          "A government-regulated trading halt"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'Value at Risk' (VaR) estimate?",
        "opts": [
          "The guaranteed minimum return of a portfolio",
          "The maximum potential loss of a portfolio over a given time period at a given confidence level",
          "The total value of all assets held",
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
          "The efficient market hypothesis directly"
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
          "The bond issuer's total outstanding debt"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is a 'credit default swap' (CDS)?",
        "opts": [
          "A type of savings bond",
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
          "An ethical rule against insider trading",
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
          "Eliminating all investment risk entirely",
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
          "A government policy limiting market entry",
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
          "The regulation of financial institutions",
          "The history of stock exchanges"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "The 'term structure of interest rates' describes:",
        "opts": [
          "The relationship between a company's debt and equity",
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
          "The risk associated with a single company's stock",
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
          "A firm's dividend payout ratio",
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
          "A government-issued perpetual bond"
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
          "Guaranteeing a fixed nominal return regardless of interest rates"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "The 'agency problem' in corporate finance refers to:",
        "opts": [
          "A dispute between two competing companies",
          "The conflict of interest between a company's management and its shareholders",
          "A legal issue involving insurance agencies",
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
          "The credit risk of corporate bonds",
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
          "A measure of a company's credit rating",
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
          "A method for calculating dividend yields",
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
          "Calculate a firm's weighted average cost of capital",
          "Structure a company's balance sheet"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "The Merton structural credit risk model treats a firm's equity as:",
        "opts": [
          "A perpetual bond with fixed coupons",
          "A call option on the firm's assets, with default occurring if asset value falls below debt obligations at maturity",
          "A risk-free government security",
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
          "A firm's credit rating trajectory"
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
          "Corporate governance structures"
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
          "The minimum capital requirement for a bank"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "'Implied volatility', derived from option prices, represents:",
        "opts": [
          "The asset's actual historical volatility",
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
          "A firm's fixed cost structure"
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
          "Fixed annual portfolio rebalancing"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "The 'equity premium puzzle' in financial economics refers to:",
        "opts": [
          "The fact that stocks always outperform bonds by a fixed margin",
          "The observation that historical excess returns of stocks over risk-free bonds are too large to be explained by standard risk-aversion models",
          "The tendency of IPOs to be underpriced",
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
          "The risk associated with fixed-rate bonds only"
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
          "The spread between bid and ask prices only"
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
          "Currency exchange rate volatility"
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
          "A single company's earnings surprises"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "The 'liquidity premium' in asset pricing refers to:",
        "opts": [
          "A discount given for holding liquid assets",
          "The additional expected return investors demand for holding less liquid, harder-to-sell assets",
          "A government subsidy for illiquid markets",
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
          "A fixed seasonal pattern in prices"
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
          "The risk associated with holding cash"
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
          "Focuses the image automatically"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a 'lens' on a camera used for?",
        "opts": [
          "Storing photos",
          "Focusing light onto the sensor or film",
          "Powering the camera",
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
          "Delete unwanted photos"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a 'flash' used for in photography?",
        "opts": [
          "Making the camera lighter",
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
          "The color of the photo"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What is a 'tripod' used for?",
        "opts": [
          "Cleaning the lens",
          "Stabilizing the camera to prevent blur",
          "Charging the camera battery",
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
          "A photo of a landscape",
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
          "Powering the camera",
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
          "The color of a photo",
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
          "A type of photo editing software",
          "A type of memory card"
        ],
        "a": 1,
        "tier": 1
      },
      {
        "q": "What does 'black and white' photography remove from a color image?",
        "opts": [
          "Sharpness",
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
          "Taking photos",
          "Storing and organizing printed or digital photos",
          "Editing photos",
          "Printing photos"
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
          "Night skies only"
        ],
        "a": 0,
        "tier": 1
      },
      {
        "q": "What is 'panorama' photography used to capture?",
        "opts": [
          "A single close-up subject",
          "A wide, sweeping view, often stitched from multiple shots",
          "Underwater scenes only",
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
          "Charge the battery",
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
          "A slower shutter speed automatically",
          "No effect on depth of field"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'depth of field' refer to?",
        "opts": [
          "The distance between the camera and the subject",
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
          "Underexposed images",
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
          "Taking exactly three photos of the same scene",
          "Using only three types of lenses"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is a 'prime lens', as opposed to a zoom lens?",
        "opts": [
          "A lens with a fixed focal length that cannot zoom",
          "A lens that can zoom to any focal length",
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
          "Only black and white information",
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
          "A type of camera flash",
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
          "Only extreme close-ups",
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
          "Nighttime, when stars are visible",
          "Any hour with cloudy skies"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does a 'polarizing filter' commonly reduce?",
        "opts": [
          "Sharpness",
          "Glare and reflections, and can enhance sky contrast",
          "Shutter speed",
          "ISO sensitivity"
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
          "Remove all color from an image"
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
          "Take only black and white photos",
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
          "The image is out of focus",
          "The image has too much noise"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'leading lines' refer to as a compositional technique?",
        "opts": [
          "Using lines within a scene to draw the viewer's eye toward a subject",
          "Always shooting in a straight line from the subject",
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
          "The focal length of the lens",
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
          "Automatically edit a photo",
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
          "The physical size of the sensor",
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
          "Faster autofocus exclusively",
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
          "It determines the lens's maximum aperture"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'diffraction' cause when a lens aperture is stopped down too far (a very high f-number)?",
        "opts": [
          "Increased sharpness at all apertures",
          "A gradual softening of image detail due to the physical bending of light waves",
          "Increased depth of field with no downsides",
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
          "A camera's autofocus point"
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
          "A defect only found in flash photography"
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
          "The distance a flash needs to be from a subject"
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
          "The shutter speed needed for correct exposure"
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
          "A method for compressing JPEG files"
        ],
        "a": 0,
        "tier": 3
      },
      {
        "q": "What is 'focus stacking' used to achieve?",
        "opts": [
          "A single image with an extended depth of field, by combining multiple photos focused at different distances",
          "A blurred background effect in a single shot",
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
          "The number of shots the flash can produce per battery charge",
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
          "The maximum zoom range of a telephoto lens",
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
          "The distance between the flash and the subject only",
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
          "Diffusing the flash for softer light only"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'crop factor' describe for a camera sensor smaller than full-frame?",
        "opts": [
          "The sensor's resolution in megapixels",
          "The multiplier applied to a lens's focal length to determine its effective field of view compared to full-frame",
          "The sensor's ISO range",
          "The camera's autofocus speed"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'back-button focus' used for?",
        "opts": [
          "Increasing a camera's shutter speed",
          "Separating the autofocus trigger from the shutter button for more deliberate focus control",
          "Automatically applying flash",
          "Adjusting white balance"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'noise reduction' processing typically trade off against?",
        "opts": [
          "Battery life",
          "Fine detail and sharpness, since it can smooth away both noise and real texture",
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
          "To provide a neutral reference for setting accurate white balance and exposure",
          "To diffuse a flash",
          "To clean camera sensors"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'vignetting' refer to in a photograph?",
        "opts": [
          "A sharp central focus point",
          "A darkening or shading of an image toward its edges or corners",
          "An increase in color saturation",
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
          "A type of lens flare",
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
          "The maximum ISO setting available",
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
          "Noise caused only by high temperatures",
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
          "Using a low-quality lens"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'demosaicing' in digital image processing?",
        "opts": [
          "Compressing a RAW file into JPEG format",
          "Reconstructing a full-color image from the raw data captured through a Bayer color filter array, where each pixel senses only one color",
          "Removing noise from an image",
          "Adjusting the white balance of an image"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does a 'Bayer filter array' arrange on a camera sensor?",
        "opts": [
          "Equal numbers of red, green, and blue filtered photosites, typically in a 1:1:1 ratio",
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
          "A color-only defect with no effect on sharpness",
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
          "Distortion causing straight lines to bow outward",
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
          "To improve low-light performance",
          "To correct chromatic aberration"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'global shutter', as opposed to 'rolling shutter', achieve in sensor readout?",
        "opts": [
          "It reads the sensor line by line sequentially, causing skew on fast motion",
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
          "The physical composition of the camera's memory card",
          "The camera's autofocus algorithm exclusively"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'computational photography' broadly refer to?",
        "opts": [
          "Traditional single-exposure photography with no processing",
          "Techniques that use significant digital processing, often combining multiple exposures or data sources, to produce images beyond what a single traditional exposure could achieve",
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
          "A defect that causes color shifts during autofocus",
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
          "Sensor noise in low light",
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
          "The maximum aperture of a lens",
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
          "Applying artificial blur to hide noise",
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
          "Using only wireless flash triggers",
          "Editing photos exclusively on a mobile device"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'color gamut' refer to when comparing color spaces like sRGB and Adobe RGB?",
        "opts": [
          "The total file size of an image",
          "The complete range of colors that a particular color space or device can represent or reproduce",
          "The sensor's dynamic range",
          "The lens's maximum aperture"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'gamma correction' used for in digital imaging?",
        "opts": [
          "Adjusting a camera's ISO automatically",
          "Encoding or decoding luminance values non-linearly to match human perception and display characteristics efficiently",
          "Removing chromatic aberration",
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
          "The lens's optical formula",
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
          "The sensor's maximum shutter speed"
        ],
        "a": 0,
        "tier": 4
      },
      {
        "q": "What does the modulation transfer function (MTF) quantify for a lens?",
        "opts": [
          "The lens's exact focal length",
          "A lens's ability to transfer contrast from the subject to the image at a given spatial frequency, a key measure of resolving power",
          "The lens's weight and physical dimensions",
          "The lens's autofocus speed"
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
          "The lens's autofocus motor type"
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
          "Only a single fixed depth of field with no additional data"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the significance of the 'Nyquist-Shannon sampling theorem' for camera sensor resolution and moiré artifacts?",
        "opts": [
          "It has no relevance to digital imaging",
          "It establishes that a sensor must sample at more than twice the highest spatial frequency present in a scene to avoid aliasing artifacts like moiré",
          "It only applies to audio recording, not imaging",
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
          "Doubling the sensor's dynamic range with no trade-offs"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is 'computational refocusing', as enabled by light field data, mathematically achieved through?",
        "opts": [
          "Simple digital blurring applied uniformly to the whole image",
          "Synthetic aperture integration, digitally combining the light field's ray data to simulate the effect of a different focus plane after capture",
          "Physically moving the lens after the photo is taken",
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
          "Increasing the sensor's native ISO range"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical basis for 'deconvolution' techniques used to sharpen images degraded by a known blur (such as motion blur or lens aberration)?",
        "opts": [
          "Random pixel manipulation with no mathematical basis",
          "Inverting the convolution operation that produced the blur, using knowledge or estimation of the point spread function, subject to noise amplification trade-offs",
          "Simply increasing image contrast globally",
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
          "The exact GPS location of the photo",
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
          "It is a defect only found in cheap lenses",
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
          "The exact exposure settings used for each photo",
          "A simple 2D panorama with no depth information"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical limitation described by the 'space-bandwidth product' in imaging system design?",
        "opts": [
          "A camera's maximum battery life",
          "A fundamental trade-off between an optical system's field of view and its achievable resolution, given physical and diffraction constraints",
          "The maximum file size a memory card can store",
          "The maximum flash duration achievable"
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
          "Increasing the camera's shutter speed range"
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
          "Measuring the ambient temperature of the scene"
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
          "Increasing the ISO setting on subsequent frames"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical basis of 'polarimetric imaging' for material analysis?",
        "opts": [
          "Measuring only the total brightness of reflected light",
          "Capturing the polarization state of light reflected or emitted by a scene, which reveals surface orientation, material properties, and features invisible to standard intensity-only imaging",
          "Measuring the exact wavelength of a single color channel",
          "Measuring the shutter speed required for correct exposure"
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
          "A lens's chromatic aberration correction curve"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is 'computational bokeh simulation', used in smartphone portrait modes, primarily reliant on?",
        "opts": [
          "A genuinely large-aperture optical lens system alone",
          "Depth estimation, often from stereo sensors or machine learning, combined with algorithmic blurring applied selectively based on estimated subject distance",
          "Simply blurring the entire image uniformly",
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
          "The maximum ISO achievable with a given lens"
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
          "Converting the image to a lower resolution"
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
          "James Bond"
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
          "Chris Hemsworth",
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
          "Twitch",
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
          "Corona",
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
          "Prequel"
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
          "Watching only trailers of upcoming shows",
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
          "A streaming platform's original content"
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
          "A type of fan club membership"
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
          "A term for adapting a book directly into a film with no changes"
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
          "The screenwriter exclusively, independent of the director"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'stan culture', as a term describing intense fandom behavior, generally characterized by?",
        "opts": [
          "Casual, occasional interest in a celebrity's work",
          "Highly devoted, often organized fan communities that intensely support and defend a celebrity or franchise, sometimes coordinating online activity like streaming or hashtag campaigns",
          "A formal fan club with paid membership fees",
          "A term used only for sports fandom, not music or film"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'the Bechdel test', a popular though informal metric in film criticism, evaluate?",
        "opts": [
          "A film's box office success relative to its budget",
          "Whether a work of fiction features at least two named women who talk to each other about something other than a man, used as a simple measure of female representation",
          "A film's historical accuracy",
          "A film's critical reception among professional critics"
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
          "A remake using footage from the original film"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does the term 'Streisand effect' refer to?",
        "opts": [
          "A marketing technique for increasing a celebrity's popularity",
          "The phenomenon where an attempt to hide, remove, or suppress information has the unintended effect of publicizing it more widely",
          "A method for calculating box office revenue",
          "A type of film editing technique"
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
          "A term referring only to search engine results"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'fandom' generally refer to as a sociological and cultural phenomenon?",
        "opts": [
          "A single individual's interest in a show",
          "A community of fans sharing a passionate interest in a work or celebrity",
          "An official organization run by a media studio",
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
          "A term describing declining box office revenues industry-wide"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'the male gaze', a concept introduced by film theorist Laura Mulvey, critique in visual media?",
        "opts": [
          "The technical camera angles used in action sequences",
          "The tendency of visual media, particularly film, to frame and present women from a heterosexual male perspective, often objectifying female characters for visual pleasure",
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
          "A crossover episode between two unrelated shows"
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
          "A term for a film's international premiere"
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
          "A specific film genre focused on horror"
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
          "A term describing a company's advertising budget"
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
          "A term for the film and TV industry's labor unions"
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
          "A term for televised award show ceremonies"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'the star system', as a historical concept in the film industry, particularly associated with old Hollywood studios?",
        "opts": [
          "A rating system for classifying films by quality",
          "A studio-driven practice of cultivating, promoting, and often contractually controlling actors as marketable 'stars' to drive audience appeal and box office success",
          "A system for ranking films at award ceremonies",
          "A term for astronomy-themed films"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'the long tail', a concept applied to media and content consumption in the digital age, describe?",
        "opts": [
          "The trend of films becoming longer in runtime over time",
          "The phenomenon where digital platforms enable a vast number of niche, low-demand items to collectively capture significant market share, compared to a smaller number of high-demand hits",
          "A term for a film's opening weekend box office performance",
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
          "A marketing strategy for launching a new show"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'cultivation theory', developed by George Gerbner, propose about the long-term effects of television viewing?",
        "opts": [
          "Television has no measurable effect on viewers' perceptions of reality",
          "Heavy, long-term exposure to television content gradually shapes and 'cultivates' viewers' perceptions of social reality to align more closely with the frequently depicted patterns and themes in television content",
          "Television viewing only affects children, not adults",
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
          "A theory describing the decline of print media"
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
          "This theory applies exclusively to social media platforms, not traditional news"
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
          "It denies that any meaningful psychological connection can form between audiences and media figures"
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
          "A term describing the technical merger of television and internet infrastructure only"
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
          "This model applies exclusively to written text, not audiovisual media"
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
          "A framework applicable exclusively to video game communities"
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
          "A concept limited exclusively to virtual reality gaming"
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
          "A statistical method for measuring television ratings"
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
          "This theory applies exclusively to dependency on a single specific news outlet"
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
          "A framework concerned exclusively with government media regulation"
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
          "A theory limited exclusively to the reception of literary novels"
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
          "A framework concerned exclusively with e-commerce platforms"
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
          "A term describing celebrity involvement in political campaigns exclusively"
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
          "A term describing purely unpaid, voluntary fan activities with no economic dimension"
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
          "This theory applies only to print journalism, not broadcast or digital media"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'fan labor' as studied in fan studies scholarship, drawing on thinkers like Henry Jenkins and later critical scholars, complicate about the traditional producer-consumer distinction?",
        "opts": [
          "Fans are purely passive consumers who contribute nothing of value to a media franchise",
          "Fans often perform substantial unpaid creative and promotional labor, such as creating fan fiction, art, or online buzz, that can generate significant value for media franchises, raising questions about exploitation and the boundary between consumption and production",
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
          "A framework concerned exclusively with academic research funding allocation"
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
          "A category limited exclusively to fictional, scripted programming"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'commodity fetishism as applied to celebrity and influencer branding', drawing on Marxist cultural theory, argue about the perceived value of celebrity-endorsed products?",
        "opts": [
          "Product value is determined purely by objective, functional utility with no social dimension",
          "The social relations of labor and production behind a commodity become obscured, while a celebrity or influencer's aura is imbued into the product itself, making the product's perceived value seem to derive from an almost magical association with the celebrity's persona rather than from underlying production processes",
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
          "Jameson's theory applies exclusively to literary fiction, not film or music"
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
          "This theory applies exclusively to social media platforms, excluding streaming or e-commerce platforms"
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
          "Barthes's semiotic theory of myth rejects any connection between signs and ideology"
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
          "Algorithmic identity theory is concerned exclusively with cybersecurity, not culture or identity"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'the concept of the 'imagined community' (Benedict Anderson) applied to transnational fandom' for understanding globally dispersed fan communities organized around media franchises?",
        "opts": [
          "Fans in different countries who engage with the same franchise share no meaningful sense of collective identity or belonging",
          "Scholars have adapted Anderson's concept, originally developed to explain nationalism, to argue that transnational fan communities can constitute a form of 'imagined community', where geographically dispersed fans who will never meet each other nonetheless experience a strong sense of shared belonging and collective identity through their common engagement with a media text",
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
          "Some scholars provocatively draw on Mbembe's concept of power over life and death to critically analyze how intense, coordinated forms of public 'cancellation' can function as a form of symbolic social 'death' exercised collectively by networked publics against a public figure's career or reputation, though this application remains contested and debated within the field",
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
          "Virtual influencer research is concerned exclusively with the technical animation methods used to create them"
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
          "Affective publics theory applies exclusively to entertainment fandoms, excluding political mobilization"
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
          "Platform vernacular theory denies any meaningful difference in communicative style between different social media platforms"
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
          "Cultural capital theory denies that any hierarchy of taste exists in contemporary society"
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
          "Media ritual theory denies that television or streaming can generate any shared collective experience"
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
          "This approach rejects any influence of marketing materials on audience interpretation"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the theoretical significance of 'the concept of media franchises as 'storyworlds'' (drawing on narratology and transmedia theory) for understanding contemporary intellectual property strategy?",
        "opts": [
          "A storyworld is understood as a single, fixed narrative told through exactly one medium",
          "A storyworld is theorized as an expansive, coherent fictional universe with its own internal logic, geography, and history, which can generate numerous distinct narratives across multiple media and time periods while maintaining underlying continuity, making it a strategically valuable and extensible commercial asset",
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
          "Networked publics theory applies exclusively to professional journalism audiences"
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
          "Quality television theory applies exclusively to publicly funded broadcast television, excluding commercial or streaming platforms"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does 'the theory of 'convergence' and 'residual', 'dominant', and 'emergent' cultural forms' (drawing on Raymond Williams's cultural materialism) offer for analyzing shifts in contemporary media technology and popular culture?",
        "opts": [
          "Cultural change is understood as a sudden, total replacement of old forms by new ones with no overlap or coexistence",
          "Williams's framework helps analyze how, at any given historical moment, culture contains residual elements from earlier periods, a currently dominant set of cultural forms and practices, and emergent new forms still in the process of establishing themselves, offering a nuanced lens for understanding gradual and uneven media and cultural transitions",
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
          "Media capital theory denies that geography or location has any bearing on global media industry structure"
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
          "This theory denies that any meaningful creative contribution comes from ordinary media users"
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
          "Taste publics theory was developed specifically to describe algorithmic content recommendation, with no earlier sociological basis"
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
          "XML"
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
          "A type of database",
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
          "A single computer",
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
          "A type of image",
          "A clickable link that takes you to another webpage or resource",
          "A programming error",
          "A type of password"
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
          "Decorating a webpage",
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
          "gap",
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
          "To create a heading",
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
          "A website that responds to voice commands",
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
          "Automatic translation",
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
          "A function's return type"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does the term 'front-end' refer to in web development?",
        "opts": [
          "The server-side database logic",
          "The client-facing part of a website that users interact with directly",
          "The company's business logic only",
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
          "The website's marketing copy",
          "The user's web browser"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is a 'for loop' used for in programming?",
        "opts": [
          "Storing a single value",
          "Repeating a block of code a specific number of times or over a collection",
          "Declaring a function",
          "Importing a library"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does CSS 'flexbox' primarily help with?",
        "opts": [
          "Encrypting web traffic",
          "Laying out and aligning items within a container flexibly",
          "Compressing images",
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
          "A type of database",
          "A CSS selector"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does an 'if-else' statement represent in programming logic?",
        "opts": [
          "A type of loop that never ends",
          "A conditional structure that executes different code based on whether a condition is true or false",
          "A way to declare variables",
          "A method for styling text"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is an 'array' in programming?",
        "opts": [
          "A single number",
          "An ordered collection of values under one variable name",
          "A type of function",
          "A CSS property"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What does 'debugging' mean in software development?",
        "opts": [
          "Writing new code from scratch",
          "The process of finding and fixing errors or bugs in code",
          "Deploying code to a live server",
          "Designing a user interface"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "What is 'version control', such as Git, used for?",
        "opts": [
          "Compressing image files",
          "Tracking and managing changes to code over time, enabling collaboration",
          "Encrypting a database",
          "Hosting a website"
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
          "Compiling JavaScript"
        ],
        "a": 1,
        "tier": 2
      },
      {
        "q": "In JavaScript, what is the key difference between '==' and '==='?",
        "opts": [
          "There is no difference",
          "'===' checks value and type; '==' allows type coercion",
          "'==' is only used for strings",
          "'===' is deprecated"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does CORS stand for, and what does it govern?",
        "opts": [
          "Cross-Origin Resource Sharing; which origins can access a server's resources",
          "Client-Only Resource Storage; local browser caching",
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
          "A function that retains access to variables from its enclosing scope after that scope has finished executing",
          "A CSS rule that hides an element",
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
          "To compress images automatically",
          "To handle server-side routing"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'asynchronous' JavaScript code, as opposed to synchronous code?",
        "opts": [
          "Code that always runs in a strict top-to-bottom order without exception",
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
          "A type of CSS animation",
          "A database query language"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'server-side rendering' (SSR)?",
        "opts": [
          "Rendering a page entirely in the user's browser only",
          "Generating the full HTML for a page on the server before sending it to the browser",
          "Storing rendered pages permanently in a database",
          "Compressing images on the server"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "A RESTful API endpoint is typically identified by:",
        "opts": [
          "A single fixed password",
          "A URL combined with an HTTP method representing a resource and action",
          "A CSS class name",
          "A browser cookie"
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
          "Converting a database to JSON format"
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
          "A standard way of joining SQL tables"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'MVC' (Model-View-Controller) describe?",
        "opts": [
          "A type of database indexing method",
          "A software architecture pattern separating an application's data, user interface, and control logic into distinct components",
          "A CSS layout system",
          "A version control branching strategy"
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
          "Compressing a database's schema"
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
          "Design a website's visual layout"
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
          "Testing only in the production environment"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What does 'idempotency' mean for a REST API endpoint, like PUT or DELETE?",
        "opts": [
          "The request can never be repeated",
          "Making the same request multiple times produces the same result as making it once",
          "The request always requires authentication",
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
          "Compressing all resources into one file",
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
          "Stores a website's static files only"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What is 'containerization', such as Docker, used for in software deployment?",
        "opts": [
          "Compressing images for a webpage",
          "Packaging an app with its dependencies into a portable, isolated unit",
          "Writing CSS more efficiently",
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
          "Ignoring older devices entirely",
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
          "Handling HTTP redirects"
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
          "Eliminating the need for TCP entirely"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "In HTTP semantics, what does 'idempotence' mean for a method like PUT?",
        "opts": [
          "The request can never fail",
          "Making the same request multiple times has the same effect as making it once",
          "The request is always cached",
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
          "To manage garbage collection timing"
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
          "A method for permanently locking a database record"
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
          "Compressing a database's indexes"
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
          "A method for optimizing loops"
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
          "Converts synchronous code to asynchronous"
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
          "Compile JavaScript into WebAssembly"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'Byzantine fault tolerance' address in distributed systems?",
        "opts": [
          "A system's ability to handle high traffic volume only",
          "A system's ability to continue operating correctly even if some nodes fail or act maliciously",
          "A method for encrypting node communication only",
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
          "A way to visualize a DOM tree"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does WebAssembly (Wasm) enable in the browser?",
        "opts": [
          "Writing CSS more efficiently",
          "Running code compiled from languages like C++ or Rust at near-native speed alongside JavaScript",
          "Replacing HTML entirely",
          "Encrypting browser cookies"
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
          "A server's load balancing algorithm"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What does 'optimistic concurrency control' assume, as opposed to locking?",
        "opts": [
          "That conflicts are common and must be prevented with locks at all times",
          "That conflicts between concurrent operations are rare, so it checks for conflicts only at commit time rather than locking resources upfront",
          "That only one user can ever access data at once",
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
          "Compiling server-side code"
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
          "Synchronous function calls exclusively"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "What is 'backpressure' in stream processing systems?",
        "opts": [
          "A method for compressing streamed data",
          "A mechanism for a consumer to signal a producer to slow down when it cannot process data as fast as it's being produced",
          "A type of network encryption",
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
          "Reducing the number of servers to save cost",
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
          "A guarantee that data is never replicated",
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
          "That conflicts must always be resolved manually by a human operator"
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
          "It proves that all distributed databases must be strongly consistent"
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
          "That only one client can connect at a time"
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
          "Avoiding log replication entirely in favor of shared memory"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What does homomorphic encryption allow, as an advanced cryptographic technique?",
        "opts": [
          "Encrypting data faster than standard AES",
          "Performing computations directly on encrypted data without needing to decrypt it first, with results matching operations on the plaintext",
          "Making encrypted data permanently unreadable",
          "Compressing encrypted data to a smaller size"
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
          "A type of hash collision"
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
          "Benchmarking a program's runtime performance"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the 'halting problem', proven undecidable by Alan Turing, concerned with?",
        "opts": [
          "Whether a program contains syntax errors",
          "Whether it's possible to write a general algorithm that determines if any given program will finish running or continue forever",
          "Whether a program is faster than another",
          "Whether a program uses too much memory"
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
          "That a webpage's CSS is valid"
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
          "That all users must be anonymous to access data"
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
          "CSS selectors and DOM traversal"
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
          "The number of hash functions required"
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
          "Compile code without any type information whatsoever"
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
          "CRDTs cannot support real-time collaboration at all"
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
          "A design system for CSS grid layouts"
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
          "Encrypting messages between two trusted parties only"
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
          "Converts a program into a different programming language entirely"
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
          "HTTP status code conventions"
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
          "The programming language's syntax highlighting theme"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "What is the core research question addressed by the PCP theorem (Probabilistically Checkable Proofs) in computational complexity theory?",
        "opts": [
          "Whether P equals NP directly",
          "Whether every mathematical proof can be rewritten so that its correctness can be verified by checking only a small, constant number of randomly selected bits, with high probability",
          "Whether quantum computers can factor large primes efficiently",
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
          "Ferdinand Magellan",
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
          "Buzz Aldrin",
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
          "Kublai Khan"
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
          "Spain",
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
          "A trade agreement",
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
          "A military tactic for naval warfare",
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
          "China and the Mediterranean world",
          "India and Australia",
          "Japan and the Americas"
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
          "The sinking of the Lusitania",
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
          "Divide Africa among European powers",
          "Restore the balance of power in Europe after Napoleon",
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
          "Economic recovery of Western Europe",
          "Expansion of Soviet influence",
          "Formation of the United Nations"
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
          "An African-led independence movement",
          "The rapid colonization of African territory by European powers in the late 19th century",
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
          "To avoid formal alignment with either Cold War superpower bloc",
          "To form a new military alliance with NATO",
          "To promote European economic integration"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "The Meiji Restoration led to what major transformation in Japan?",
        "opts": [
          "A return to strict isolationism",
          "Rapid modernization and industrialization",
          "Adoption of a communist government",
          "Formation of a republic"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What was the significance of the Edict of Nantes (1598)?",
        "opts": [
          "It ended the Hundred Years' War",
          "It granted religious toleration to Protestant Huguenots in Catholic France",
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
          "Russia",
          "France"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What was the 'Great Leap Forward'?",
        "opts": [
          "A Japanese military campaign",
          "A Chinese economic and social campaign under Mao Zedong to rapidly industrialize",
          "A Soviet space program",
          "An Indian independence movement"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "The Peace of Westphalia (1648) is significant for establishing what concept?",
        "opts": [
          "Colonial trade routes",
          "The modern system of sovereign nation-states",
          "The League of Nations",
          "The Catholic Counter-Reformation"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "What triggered the Haitian Revolution?",
        "opts": [
          "A trade dispute with Spain",
          "A slave uprising against French colonial rule",
          "A war with Britain",
          "A religious schism"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "The Cold War-era 'Domino Theory' held that:",
        "opts": [
          "Capitalism would spread through trade alone",
          "The fall of one country to communism would lead neighboring countries to fall as well",
          "Nuclear weapons would inevitably proliferate",
          "Economic collapse in Europe was inevitable"
        ],
        "a": 1,
        "tier": 3
      },
      {
        "q": "The 'Annales School' of historiography is most associated with emphasizing what?",
        "opts": [
          "Biographies of great political leaders",
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
          "The unification of East and West Germany",
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
          "Reconstructing royal genealogies",
          "Recovering the histories of marginalized and colonized groups from below, against elite-centric narratives",
          "Quantitative economic modelling of trade routes",
          "Diplomatic history between great powers"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "'World-systems theory', associated with Immanuel Wallerstein, primarily analyzes:",
        "opts": [
          "The spread of religion globally",
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
          "Studying only ancient microorganisms",
          "The intensive study of a small, well-defined unit to illuminate broader historical patterns",
          "A statistical macro-level survey of economies",
          "A biography of a single monarch"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "'Historical materialism', associated with Marx, argues that historical change is primarily driven by:",
        "opts": [
          "The will of great individuals",
          "Material economic conditions and class conflict",
          "Divine providence",
          "Climate change alone"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "'Presentism' as a critique in historical writing refers to:",
        "opts": [
          "Focusing only on very recent history",
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
          "Eastern philosophy's influence on the West",
          "Western representations of the East as exotic and inferior, serving colonial power structures",
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
          "Exploring hypothetical alternative historical outcomes ('what if' scenarios)",
          "Debunking common historical myths",
          "A statistical method for dating artifacts"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "'Whig history', as a term of critique, refers to:",
        "opts": [
          "A history written only by British monarchists",
          "A narrative that presents history as an inevitable progression toward greater liberty and enlightenment",
          "A history focused solely on economic data",
          "A Marxist interpretation of class struggle"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "The 'Great Divergence' debate in economic history concerns:",
        "opts": [
          "The split of Christianity into denominations",
          "Why Western Europe economically pulled ahead of regions like China from roughly the 18th–19th century",
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
          "Recorded personal testimonies and recollections as historical sources",
          "Archaeological excavation reports",
          "Statistical census data exclusively"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "'Postcolonial theory' is broadly concerned with analyzing:",
        "opts": [
          "Ancient trade networks",
          "The cultural, political, and economic legacies of colonialism on former colonies",
          "Medieval feudal structures",
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
          "A biography spanning one lifetime",
          "A short-term political crisis"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "'Historiography' itself is defined as:",
        "opts": [
          "The chronological listing of events",
          "The study of how history is written and interpreted, including the methods and biases of historians",
          "A branch of archaeology",
          "The collection of primary sources only"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "'Revisionist history' typically involves:",
        "opts": [
          "Simply repeating traditional narratives unchanged",
          "Reinterpreting accepted historical narratives, often using new evidence or perspectives",
          "Writing fictional alternate histories",
          "Translating ancient texts literally"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "The 'Bielefeld School' in German historiography is significant for:",
        "opts": [
          "Focusing exclusively on military history",
          "Emphasizing structural social history and modernization theory, contrasting with traditional political-narrative history",
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
          "The division of history into discrete named periods or eras for analytical purposes",
          "The study of historical population cycles",
          "A method of translating ancient calendars"
        ],
        "a": 1,
        "tier": 4
      },
      {
        "q": "Reinhart Koselleck's concept of 'Sattelzeit' refers to:",
        "opts": [
          "A specific battle in the Napoleonic Wars",
          "A transitional period (roughly 1750–1850) during which key modern political and social concepts took on their current meanings",
          "A term for medieval land tenure",
          "A Cold War-era diplomatic doctrine"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "'Begriffsgeschichte' (conceptual history), associated with Koselleck, is:",
        "opts": [
          "The genealogy of royal bloodlines",
          "The historical study of the changing meanings of key political and social concepts over time",
          "A method for dating manuscripts",
          "The study of ancient legal codes"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "Michel Foucault's concept of 'governmentality' analyzes:",
        "opts": [
          "The divine right of kings",
          "The techniques and rationalities through which populations are governed, beyond formal state institutions",
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
          "A turn toward purely quantitative statistical history"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "'Entangled history' (histoire croisée), unlike traditional comparative history, emphasizes:",
        "opts": [
          "Strict chronological sequencing of events",
          "The mutual interactions and interconnections between societies, rather than treating them as separate units for comparison",
          "The isolation of civilizations from each other",
          "A purely economic analysis of trade"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "Hayden White's 'Metahistory' (1973) is significant in historiographical theory because it argued that:",
        "opts": [
          "It provided a new statistical method for demography",
          "Historical narratives are shaped by underlying literary and rhetorical tropes, blurring the line between history and literature",
          "It was a comprehensive history of ancient Rome",
          "It introduced radiocarbon dating to archaeology"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "The 'archival turn' in historical scholarship critically examines:",
        "opts": [
          "Only the digitization of library catalogs",
          "The archive itself as a constructed institution shaping what can be known, rather than a neutral repository of facts",
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
          "Eurocentric, nation-bound historical narratives, by tracing connections across regions like Eurasia",
          "A purely military historiographical school",
          "The study of isolated island civilizations"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "'New imperial history' seeks to differ from traditional imperial history by:",
        "opts": [
          "Focusing solely on the economics of colonial extraction",
          "Examining empire's effects on both colonizer and colonized societies within a single analytic frame",
          "Celebrating the achievements of imperial administrators",
          "Restricting analysis to military conquest only"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "The core argument of Kenneth Pomeranz's 'The Great Divergence' (2000) is that:",
        "opts": [
          "Europe was always more advanced due to cultural superiority",
          "China's Yangzi Delta and Western Europe were economically comparable until roughly 1800, when coal access and New World resources diverged their paths",
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
          "The mutual relationship and interaction between human societies and the natural environment over time",
          "Climate science entirely independent of human history",
          "The geological history of the Earth alone"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "The 'Cambridge School' in the history of political thought (Skinner, Pocock) is significant for:",
        "opts": [
          "Focusing on quantitative economic modeling",
          "Emphasizing understanding political texts within their specific historical linguistic context and the author's intentions",
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
          "Insights from evolutionary biology, archaeology, and prehistory to extend historical analysis beyond written records",
          "Exclusively oral traditions",
          "A focus limited strictly to the last 200 years"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "'Transnational history' is primarily concerned with tracing:",
        "opts": [
          "The internal politics of a single nation only",
          "Flows of people, ideas, and institutions that cross national borders, challenging the nation-state as the default unit of analysis",
          "The military history of border conflicts",
          "The economic history of a single empire"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "The concept of 'multiple modernities', associated with S.N. Eisenstadt, challenges:",
        "opts": [
          "The idea that any society can modernize at all",
          "The assumption that modernization leads all societies toward a single, Western-style outcome",
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
          "Applying computational tools, such as text mining and network analysis, to analyze large historical datasets",
          "Replacing physical archives with social media",
          "Creating video games about historical events"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "The 'Fischer controversy' in German historiography concerns:",
        "opts": [
          "A dispute over the authorship of the Treaty of Versailles",
          "Fritz Fischer's argument that Germany bore primary responsibility for the outbreak of World War I through deliberate expansionist policy",
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
          "Tracing a single commodity's production, trade, and consumption to illuminate global economic and social systems",
          "A purely botanical study of crops",
          "The history of currency exchange rates only"
        ],
        "a": 1,
        "tier": 5
      },
      {
        "q": "The central argument of Benedict Anderson's 'Imagined Communities' (1983) is that:",
        "opts": [
          "Nations are biologically determined groups",
          "Nations are socially constructed, 'imagined' communities, imagined by people who perceive themselves as part of a group despite never meeting most members",
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
          "Nation-centered and Eurocentric frameworks, by tracing connections, comparisons, and processes at a planetary scale",
          "The study of any history before 1500",
          "Purely economic analysis exclusively"
        ],
        "a": 1,
        "tier": 5
      }
    ]
  }
];
