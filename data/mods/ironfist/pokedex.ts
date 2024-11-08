export const Pokedex: {[k: string]: ModdedSpeciesData} = {
	melmetal: {
		inherit: true,
		num: 1001,
		name: "Melmetal",
		types: ["Steel"],
		baseStats: {hp: 135, atk: 143, def: 143, spa: 80, spd: 65, spe: 34},
		abilities: {0: "Iron Fist"},
	},
	ninjask: {
		inherit: true,
		num: 1002,
		name: "Ninjask",
		types: ["Bug", "Flying"],
		baseStats: {hp: 61, atk: 90, def: 45, spa: 50, spd: 50, spe: 160},
		abilities: {0: "Ultra Luck", 1: "Speed Boost", H: "Infiltrator"},
	},
	toxapex: {
		inherit: true,
		num: 1003,
		name: "Toxapex",
		fish: true,
		types: ["Poison", "Water"],
		baseStats: {hp: 152, atk: 142, def: 53, spa: 50, spd: 63, spe: 35},
		abilities: {0: "Merciless", 1: "Gex Server", H: "Degenerator"},
	},
	silcoon: {
		inherit: true,
		num: 1004,
		name: "Silcoon",
		fish: true,
		types: ["Ground", "Flying"],
		baseStats: {hp: 89, atk: 145, def: 90, spa: 105, spd: 80, spe: 91},
		abilities: {0: "Intimidate", H: "toxic masculinity"},
		evos: null,
	},
	togedemaru: {
		inherit: true,
		num: 1005,
		name: "Togedemaru",
		types: ["Electric", "Steel"],
		baseStats: {hp: 100, atk: 50, def: 100, spa: 50, spd: 100, spe: 133},
		abilities: {0: "Iron Barbs", 1: "Lightning Rod", H: "Benevolent Blessing"},
	},
	bramblin: {
		inherit: true,
		num: 1006,
		name: "Bramblin",
		types: ["Grass", "Ghost"],
		baseStats: {hp: 75, atk: 125, def: 60, spa: 75, spd: 70, spe: 120},
		abilities: {0: "Wind Rider", 1: "!dt air slash", H: "Infiltrator"},
		evos: null,
	},
	anarlvet: {
		num: 1007,
		name: "Anarlvet",
		diamondHand: true,
		gender: "M",
		types: ["Dark"],
		baseStats: {hp: 84, atk: 138, def: 88, spa: 63, spd: 70, spe: 132},
		abilities: {0: "Auctor Wile"},
		weightkg: 226.2,
	},
	gholdengo: {
		inherit: true,
		num: 1008,
		name: "Gholdengo",
		types: ["Ghost", "Silly"],
		baseStats: {hp: 100, atk: 60, def: 90, spa: 125, spd: 90, spe: 110},
		abilities: {0: "Alpha Sigma Rizz"},
	},
	kingler: {
		inherit: true,
		num: 1009,
		name: "Kingler",
		fish: true,
		types: ["Water"],
		baseStats: {hp: 70, atk: 130, def: 130, spa: 50, spd: 70, spe: 50},
		abilities: {0: "Hyper Cutter", 1: "Shell Armor", H: "Tough Claws"},
	},
	kinglermega: {
		num: 1010,
		name: "Kingler-Mega",
		baseSpecies: "Kingler",
		forme: "Mega",
		fish: true,
		types: ["Water", "Steel"],
		baseStats: {hp: 72, atk: 132, def: 212, spa: 62, spd: 102, spe: 32},
		abilities: {0: "Shell Armor"},
		requiredItem: "Kinglerite",
		weightkg: 140.0,
	},
	feebas: {
		inherit: true,
		num: 1011,
		name: "Feebas",
		fish: true,
		types: ["Water"],
		baseStats: {hp: 20, atk: 25, def: 20, spa: 10, spd: 55, spe: 80},
		abilities: {0: "Swift Swim", 1: "Oblivious", H: "Adaptability"},
	},
	microwave: {
		num: 1012,
		name: "microwave",
		types: ["Fire", "Steel"],
		baseStats: {hp: 41, atk: 79, def: 177, spa: 123, spd: 111, spe: 69},
		abilities: {0: "Motor Drive", 1: "Parting Gift", H: "Transistor"},
		weightkg: 150.0,
	},
	glaceon: {
		inherit: true,
		num: 1013,
		name: "Glaceon",
		types: ["Ice"],
		baseStats: {hp: 85, atk: 60, def: 110, spa: 130, spd: 95, spe: 65},
		abilities: {0: "Perfectionist", 1: "MILF", H: "Ice Body"},
		weightkg: 25.9,
	},
	lytlegai: {
		num: 1014,
		name: "Lytlegai",
		types: ["Steel", "Fairy"],
		baseStats: {hp: 60, atk: 115, def: 75, spa: 60, spd: 85, spe: 85},
		abilities: {0: "Just a Little Guy"},
		weightkg: 30.0,
	},
	sylveon: {
		inherit: true,
		num: 1015,
		name: "Sylveon",
		types: ["Fairy"],
		baseStats: {hp: 60, atk: 130, def: 110, spa: 65, spd: 65, spe: 95},
		abilities: {0: "Gex Server", 1: "MILF", H: "Pixilate"},
	},
	ohmyrod: {
		num: 1016,
		name: "Ohmyrod",
		fish: true,
		types: ["Water", "Grass"],
		baseStats: {hp: 75, atk: 130, def: 134, spa: 95, spd: 86, spe: 45},
		abilities: {0: "Water Absorb", H: "Innards Out"},
		weightkg: 96.9,
	},
	celesteela: {
		inherit: true,
		num: 1017,
		name: "Celesteela",
		types: ["Steel", "Dragon"],
		baseStats: {hp: 107, atk: 101, def: 103, spa: 107, spd: 101, spe: 71},
		abilities: {0: "Levitate", H: "Compound Eyes"},
		weightkg: 999.9,
	},
	bigcrammer: {
		num: 1018,
		name: "Big Crammer",
		fish: true,
		types: ["Water", "Electric"],
		baseStats: {hp: 89, atk: 93, def: 69, spa: 119, spd: 111, spe: 109},
		abilities: {0: "Protostasis"},
		weightkg: 36.0,
		tags: ["Paradox"],
	},
	archeops: {
		inherit: true,
		num: 1019,
		name: "Archeops",
		types: ["Ghost", "Steel"],
		baseStats: {hp: 85, atk: 110, def: 65, spa: 95, spd: 95, spe: 130},
		abilities: {0: "Armor Tail", 1: "Iron Barbs", H: "Chained Wrath"},
	},
	runerigus: {
		inherit: true,
		num: 1020,
		name: "Runerigus",
		types: ["Ground", "Ghost"],
		baseStats: {hp: 85, atk: 100, def: 120, spa: 80, spd: 80, spe: 70},
		abilities: {0: "Wandering Spirit", H: "Neutralizing Gas"},
		weightkg: 66.6,
	},
	crabominable: {
		inherit: true,
		num: 1021,
		name: "Crabominable",
		fish: true,
		types: ["Ghost", "Dragon"],
		baseStats: {hp: 87, atk: 112, def: 57, spa: 62, spd: 117, spe: 93},
		abilities: {0: "Anger Shell", 1: "Iron Fist", H: "Unseen Fist"},
		weightkg: 180.0,
	},
	samurottsinnoh: {
		num: 1022,
		name: "Samurott-Sinnoh",
		fish: true,
		types: ["Fire", "Dark"],
		baseStats: {hp: 80, atk: 105, def: 80, spa: 70, spd: 75, spe: 115},
		abilities: {0: "Blaze", H: "Sharpness"},
		weightkg: 90.6,
	},
	wyrdeer: {
		inherit: true,
		num: 1023,
		name: "Wyrdeer",
		types: ["Normal", "Psychic"],
		baseStats: {hp: 110, atk: 105, def: 72, spa: 105, spd: 75, spe: 85},
		abilities: {0: "Intimidate", 1: "MILF", H: "Sap Sipper", S: "Psychic Surge"},
	},
	goomba: {
		num: 1024,
		name: "Goomba",
		types: ["Poison", "Normal"],
		baseStats: {hp: 80, atk: 95, def: 80, spa: 95, spd: 80, spe: 55},
		abilities: {0: "Strong Jaw", 1: "Innards Out", H: "Sheer Force", S: "Intimidate"},
		weightkg: 138.0,
	},
	fridgile: {
		num: 1025,
		name: "Fridgile",
		types: ["Ice", "Rock"],
		baseStats: {hp: 255, atk: 75, def: 25, spa: 75, spd: 25, spe: 75},
		abilities: {0: "Snow Warning", 1: "Sand Stream", H: "Innards Out"},
		weightkg: 1.0,
	},
	zaciancrowned: {
		inherit: true,
		forme: null,
		requiredItem: null,
		battleOnly: null,
		name: "Zacian-Crowned",
		abilities: {0: "Identity Crisis"},	
	},
	
	melmetal2: {
		num: 1027,
		name: "Melmetal 2",
		types: ["Steel"],
		baseStats: {hp: 135, atk: 144, def: 144, spa: 80, spd: 65, spe: 34},
		abilities: {0: "Iron Fist", H: "Gex Server"},
		weightkg: 802.0,
	},
	pidown: {
		num: 1028,
		name: "Pidown",
		types: ["Fighting", "Poison"],
		baseStats: {hp: 130, atk: 120, def: 95, spa: 40, spd: 85, spe: 40},
		abilities: {0: "Guts", 1: "Gluttony", H: "Mold Breaker"},
		weightkg: 102.9,
	},
	silvally: {
		inherit: true,
		fish: true,
		num: 773,
		otherFormes: ["Silvally-Bug", "Silvally-Dark", "Silvally-Dragon", "Silvally-Electric", "Silvally-Fairy", "Silvally-Fighting", "Silvally-Fire", "Silvally-Flying", "Silvally-Ghost", "Silvally-Grass", "Silvally-Ground", "Silvally-Ice", "Silvally-Lemon", "Silvally-Poison", "Silvally-Psychic", "Silvally-Rock", "Silvally-Silly", "Silvally-Steel", "Silvally-Water"],
		formeOrder: [
			"Silvally", "Silvally-Fighting", "Silvally-Flying", "Silvally-Poison", "Silvally-Ground", "Silvally-Rock", "Silvally-Bug", "Silvally-Ghost", "Silvally-Steel",
			"Silvally-Fire", "Silvally-Water", "Silvally-Grass", "Silvally-Electric", "Silvally-Psychic", "Silvally-Ice", "Silvally-Dragon", "Silvally-Dark", "Silvally-Fairy", "Silvally-Lemon", "Silvally-Silly",
		],
	},
	vivillonplainshigh: {
		num: 1030,
		name: "Vivillon-Plains-High",
		baseSpecies: "Vivillon",
		forme: "Plains-High",
		types: ["Bug", "Fighting"],
		baseStats: {hp: 73, atk: 89, def: 65, spa: 99, spd: 109, spe: 106},
		abilities: {0: "Shield Dust", 1: "Compound Eyes", H: "Natural Cure"},
		weightkg: 17.0,
	},
	moltres: {
		inherit: true,
		num: 1031,
		name: "Moltres",
		types: ["Fire", "Flying"],
		baseStats: {hp: 90, atk: 100, def: 90, spa: 125, spd: 85, spe: 90},
		abilities: {0: "Pressure", H: "Flame Body"},
		weightkg: 60.0,
	},
	kurayami: {
		num: 1032,
		name: "Kurayami",
		types: ["Dark"],
		baseStats: {hp: 85, atk: 100, def: 95, spa: 110, spd: 95, spe: 95},
		abilities: {0: "Magic Guard", H: "Dark Aura"},
		weightkg: 999.7,
	},
	hitmontop: {
		inherit: true,
		num: 1033,
		name: "Hitmontop",
		types: ["Fighting"],
		baseStats: {hp: 65, atk: 115, def: 65, spa: 35, spd: 145, spe: 50},
		abilities: {0: "Intimidate", 1: "Technician", H: "Steadfast"},
		weightkg: 48.0,
	},
	zelda: {
		num: 1034,
		name: "Zelda",
		types: ["Fighting", "Flying"],
		baseStats: {hp: 90, atk: 115, def: 90, spa: 90, spd: 80, spe: 100},
		abilities: {0: "Sniper", 1: "MILF", H: "Stamina"},
		weightkg: 70.0,
	},
	cascoon: {
		inherit: true,
		num: 1035,
		name: "Cascoon",
		types: ["Bug", "Fairy"],
		baseStats: {hp: 105, atk: 65, def: 115, spa: 85, spd: 95, spe: 25},
		abilities: {0: "Shed Skin", 1: "Unaware", H: "Magic Guard"},
		evos: null,
	},
	sentret: {
		inherit: true,
		num: 1036,
		name: "Sentret",
		types: ["Normal"],
		baseStats: {hp: 35, atk: 46, def: 34, spa: 35, spd: 45, spe: 20},
		abilities: {0: "Run Away", 1: "Parting Gift", H: "Frisk"},
	},
	drigike: {
		num: 1037,
		name: "Drigike",
		types: ["Rock"],
		baseStats: {hp: 65, atk: 80, def: 60, spa: 135, spd: 65, spe: 80},
		abilities: {0: "Crossover", 1: "Lightning Rod", H: "Storm Drain"},
		weightkg: 445.0,
	},
	phish: {
		num: 1038,
		name: "Phish",
		fish: true,
		types: ["Ghost", "Electric"],
		baseStats: {hp: 52, atk: 54, def: 104, spa: 123, spd: 111, spe: 80},
		abilities: {0: "Illusion", 1: "Imposter", H: "Good as Gold"},
		weightkg: 69.0,
	},
	smelmetal: {
		num: 1039,
		name: "Smelmetal",
		types: ["Steel", "Silly"],
		baseStats: {hp: 97, atk: 99, def: 144, spa: 77, spd: 107, spe: 37},
		abilities: {0: "Iron Nose"},
		weightkg: 570.0,
	},
	starmie: {
		inherit: true,
		num: 1040,
		name: "Starmie",
		fish: true,
		types: ["Water", "Psychic"],
		baseStats: {hp: 60, atk: 75, def: 85, spa: 100, spd: 110, spe: 115},
		abilities: {0: "Illuminate", 1: "Natural Cure", H: "Analytic"},
		weightkg: 80.0,
	},
	victreebel: {
		inherit: true,
		num: 1041,
		name: "Victreebel",
		types: ["Grass", "Poison"],
		baseStats: {hp: 80, atk: 105, def: 105, spa: 100, spd: 70, spe: 70},
		abilities: {0: "Fly Eater", H: "Gluttony"},
		weightkg: 15.5,
	},
	bondra: {
		num: 1042,
		name: "Bondra",
		types: ["Grass", "Fire"],
		baseStats: {hp: 103, atk: 113, def: 93, spa: 43, spd: 93, spe: 113},
		abilities: {0: "Strong Jaw", 1: "Hustle", H: "Chlorophyll"},
		weightkg: 312.0,
	},
	tangetteeternal: {
		num: 1043,
		name: "Tangette-Eternal",
		types: ["Grass", "Fairy"],
		baseStats: {hp: 90, atk: 85, def: 100, spa: 120, spd: 90, spe: 75},
		abilities: {0: "Growth Veil"},
		weightkg: 64.75,
	},
	donmigo: {
		num: 1044,
		name: "Donmigo",
		types: ["Ground", "Flying"],
		baseStats: {hp: 90, atk: 120, def: 100, spa: 70, spd: 70, spe: 70},
		abilities: {0: "Bravery"},
		weightkg: 78.5,
	},
	dragoone: {
		num: 1045,
		name: "Dragoone",
		types: ["Normal", "Dragon"],
		baseStats: {hp: 88, atk: 97, def: 50, spa: 78, spd: 175, spe: 78},
		abilities: {0: "Bulletproof"},
		weightkg: 206.5,
	},
	collachet: {
		num: 1046,
		name: "Collachet",
		diamondHand: true,
		gender: "M",
		types: ["Fighting"],
		baseStats: {hp: 102, atk: 128, def: 88, spa: 100, spd: 103, spe: 54},
		abilities: {0: "toxic masculinity", 1: "Intimidate", H: "Parting Gift"},
		weightkg: 538.3,
	},
	guiltrism: {
		num: 1047,
		name: "Guiltrism",
		diamondHand: true,
		gender: "M",
		types: ["Flying"],
		baseStats: {hp: 95, atk: 95, def: 95, spa: 95, spd: 95, spe: 100},
		abilities: {0: "Prism Wings"},
		weightkg: 77.2,
	},
	swampert: {
		inherit: true,
		num: 1048,
		name: "Swampert",
		fish: true,
		types: ["Water", "Ground"],
		baseStats: {hp: 100, atk: 110, def: 90, spa: 75, spd: 90, spe: 60},
		abilities: {0: "Torrent", H: "Steel Drummer"},
		weightkg: 81.9,
	},
	swooliobat: {
		num: 1049,
		name: "Swooliobat",
		types: ["Psychic", "Flying"],
		baseStats: {hp: 77, atk: 57, def: 105, spa: 77, spd: 105, spe: 114},
		abilities: {0: "Unaware", 1: "Klutz", H: "Oblivious"},
		weightkg: 325.5,
	},
	electrode: {
		inherit: true,
		num: 1050,
		name: "Electrode",
		types: ["Electric"],
		baseStats: {hp: 60, atk: 50, def: 70, spa: 80, spd: 80, spe: 150},
		abilities: {0: "Soundproof", 1: "Static", H: "Aftermath"},
	},
	electrodemega: {
		num: 1051,
		name: "Electrode-Mega",
		baseSpecies: "Electrode",
		forme: "Mega",
		types: ["Electric"],
		baseStats: {hp: 52, atk: 52, def: 52, spa: 152, spd: 52, spe: 242},
		abilities: {0: "Time Bomb"},
		weightkg: 133.2,
	},
	mariokartwii: {
		num: 1052,
		name: "Mario Kart Wii",
		types: ["Steel"],
		baseStats: {hp: 100, atk: 80, def: 100, spa: 70, spd: 40, spe: 135},
		abilities: {0: "Gorilla Tactics"},
		weightkg: 1.0,
	},
	impalpitoad: {
		num: 1053,
		name: "Impalpitoad",
		fish: true,
		types: ["Water", "Ground"],
		baseStats: {hp: 75, atk: 65, def: 55, spa: 65, spd: 55, spe: 69},
		abilities: {0: "MILF", H: "Impalpable"},
	},
	scrubby: {
		num: 1054,
		name: "Scrubby",
		fish: true,
		types: ["Water", "Dark"],
		baseStats: {hp: 90, atk: 50, def: 75, spa: 125, spd: 90, spe: 90},
		abilities: {0: "Quick Feet"},
		weightkg: 0.1,
	},
	palpitoadissocool: {
		num: 1056,
		name: "palpitoad is so cool",
		fish: true,
		types: ["Water", "Ground"],
		baseStats: {hp: 120, atk: 100, def: 85, spa: 100, spd: 85, spe: 70},
		abilities: {0: "MILF", H: "champion"},
	},
	spewpa: {
		inherit: true,
		num: 1057,
		name: "Spewpa",
		types: ["Bug", "Ghost"],
		baseStats: {hp: 70, atk: 50, def: 120, spa: 110, spd: 120, spe: 30},
		abilities: {0: "Shed Skin", 1: "Perish Body", H: "Magic Bounce"},
		evos: null,
	},
	
	moltresmega: {
		num: 1058,
		name: "Moltres-Mega",
		baseSpecies: "Moltres",
		forme: "Mega",
		types: ["Fire", "Flying"],
		baseStats: {hp: 92, atk: 127, def: 102, spa: 162, spd: 102, spe: 107},
		abilities: {0: "Magic Bounce"},
		weightkg: 70.0,
		requiredItem: "Moltresite",
	},
	jirachitwo: {
		num: 1059,
		name: "Jirachitwo",
		types: ["Psychic", "Ground"],
		baseStats: {hp: 95, atk: 95, def: 100, spa: 95, spd: 100, spe: 70},
		abilities: {0: "Benevolent Blessing"},
		weightkg: 5.0,
	},
	shinxfishing: {
		num: 1060,
		name: "Shinx-Fishing",
		fish: true,
		types: ["Electric"],
		baseStats: {hp: 46, atk: 66, def: 35, spa: 41, spd: 35, spe: 46},
		abilities: {0: "Fishercat", 1: "toxic masculinity", H: "Guts"},
		weightkg: 9.5,
	},
	conquescape: {
		num: 1061,
		name: "Conquescape",
		diamondHand: true,
		gender: "N",
		types: ["Ice"],
		baseStats: {hp: 120, atk: 40, def: 34, spa: 86, spd: 220, spe: 75},
		abilities: {0: "Frozen Landscape"},
		weightkg: 999.9,
	},
	daiyafia: {
		num: 1062,
		name: "Daiyafia",
		diamondHand: true,
		gender: "M",
		types: ["Normal"],
		baseStats: {hp: 125, atk: 100, def: 100, spa: 100, spd: 100, spe: 50},
		abilities: {0: "The Diamond Hand"},
		weightkg: 999.9,
	},
	metapod: {
		inherit: true,
		num: 1063,
		name: "Metapod",
		types: ["Bug", "Grass"],
		baseStats: {hp: 120, atk: 120, def: 120, spa: 120, spd: 120, spe: 120},
		abilities: {0: "Shed Skin", 1: "Multiscale", H: "Grassy Surge"},
		weightkg: 9.9,
		evos: null,
	},
	kakuna: {
		inherit: true,
		num: 1064,
		name: "Kakuna",
		types: ["Bug", "Poison"],
		baseStats: {hp: 100, atk: 120, def: 100, spa: 80, spd: 100, spe: 100},
		abilities: {0: "Shed Skin", 1: "Sharpness", H: "Tinted Lens"},
		weightkg: 10.0,
		evos: null,
	},
	enamorustherian: {
		inherit: true,
		num: 1065,
		name: "Enamorus-Therian",
		types: ["Fairy", "Dragon"],
		baseStats: {hp: 74, atk: 105, def: 110, spa: 135, spd: 100, spe: 46},
		abilities: {0: "Overcoat", H: "Gex Server"},
		weightkg: 48.0,
	},
	pokestarfisherman: {
		num: 1066,
		name: "Pokestar Fisherman",
		fish: true,
		types: ["Normal"],
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "I Love Fishing"},
		weightkg: 100.0,
	},
	magnegiri: {
		num: 1067,
		name: "Magnegiri",
		fish: true,
		types: ["Water", "Electric"],
		baseStats: {hp: 70, atk: 60, def: 90, spa: 125, spd: 95, spe: 80},
		abilities: {0: "Magnetic Storm"},
		weightkg: 94.0,
	},
	mario: {
		num: 1068,
		name: "mario",
		types: ["Ghost", "Steel"],
		baseStats: {hp: 104, atk: 44, def: 104, spa: 104, spd: 44, spe: 44},
		abilities: {0: "Stall", 1: "Cursed Body", H: "Mega Launcher"},
	},
	contamicow: {
		num: 1069,
		name: "Contamicow",
		types: ["Dark", "Poison"],
		baseStats: {hp: 80, atk: 110, def: 73, spa: 73, spd: 120, spe: 79},
		abilities: {0: "Sheer Force", 1: "Strong Jaw", H: "Cud Chew"},
	},
	whonhef: {
		num: 1070,
		name: "Whonhef",
		types: ["Normal", "Fighting"],
		baseStats: {hp: 80, atk: 110, def: 73, spa: 73, spd: 120, spe: 79},
		abilities: {0: "Sharpness", 1: "Berserk", H: "Hyper Cutter"},
	},
	fishfactory: {
		num: 1071,
		name: "Fish Factory",
		fish: true,
		types: ["Steel", "Fire"],
		baseStats: {hp: 120, atk: 40, def: 100, spa: 90, spd: 90, spe: 60},
		abilities: {0: "White Smoke", 1: "MILF", H: "Flash Fire"},
		weightkg: 999.0,
	},
	cowboybandido: {
		num: 1072,
		name: "cowboy_bandido",
		types: ["Dark", "Fighting"],
		baseStats: {hp: 100, atk: 135, def: 120, spa: 70, spd: 95, spe: 80},
		abilities: {0: "Sand Rush", H: "River Thief"},
		weightkg: 58.0,
	},
	basculinbluestriped: {
		inherit: true,
		num: 1073,
		name: "Basculin-Blue-Striped",
		fish: true,
		types: ["Water"],
		baseStats: {hp: 70, atk: 92, def: 65, spa: 80, spd: 55, spe: 98},
		abilities: {0: "Rock Head", 1: "Adaptability", H: "Fishy Surge"},
		weightkg: 18.0,
	},
	pokestargiant: {
		inherit: true,
		num: 1074,
		name: "Pokestar Giant",
		types: ["Normal"],
		baseStats: {hp: 150, atk: 70, def: 80, spa: 100, spd: 80, spe: 60},
		abilities: {0: "Supreme Overlord", 1: "Pressure", H: "Big Lady"},
		weightkg: 999.0,
	},
	richardpetty: {
		num: 1075,
		name: "Richard Petty",
		types: ["Normal"],
		baseStats: {hp: 43, atk: 43, def: 43, spa: 43, spd: 43, spe: 200},
		abilities: {0: "Speed Boost", H: "Steely Spirit"},
		weightkg: 60.0,
	},
	impidimp: {
		inherit: true,
		num: 1076,
		name: "Impidimp",
		types: ["Fairy", "Dark"],
		baseStats: {hp: 45, atk: 45, def: 30, spa: 55, spd: 40, spe: 50},
		abilities: {0: "Prankster", 1: "Frisk", H: "Pickpocket"},
		weightkg: 5.5,
	},
	impidimpmega: {
		num: 1077,
		name: "Impidimp-Mega",
		baseSpecies: "Impidimp",
		forme: "Mega",
		types: ["Fairy", "Dark"],
		baseStats: {hp: 47, atk: 87, def: 42, spa: 37, spd: 52, spe: 112},
		abilities: {0: "Pure Power"},
		weightkg: 5.5,
		requiredItem: "Impidimpite",
	},
	lemon: {
		num: 1078,
		name: "Lemon",
		types: ["Lemon"],
		baseStats: {hp: 70, atk: 75, def: 90, spa: 107, spd: 120, spe: 55},
		abilities: {0: "Mold Breaker", 1: "Ripen", H: "Alpha Sigma Rizz"},
		weightkg: 0.1,
	},
	fishingzombie: {
		num: 1079,
		name: "Fishing Zombie",
		fish: true,
		types: ["Ghost", "Water"],
		baseStats: {hp: 110, atk: 85, def: 110, spa: 90, spd: 80, spe: 5},
		abilities: {0: "PVZ Fishing", H: "Damp"},
		weightkg: 4.8,
	},
	pokestarmt: {
		num: 1080,
		name: "Pokestar MT",
		types: ["Steel"],
		baseStats: {hp: 105, atk: 103, def: 105, spa: 100, spd: 97, spe: 90},
		abilities: {0: "Analytic", H: "Kaiju Killer"},
		weightkg: 999.0,
	},
	margaretthatcher: {
		num: 1081,
		name: "Margaret Thatcher",
		types: ["Normal", "Poison"],
		baseStats: {hp: 120, atk: 80, def: 90, spa: 80, spd: 70, spe: 69},
		abilities: {0: "Poison Puppeteer", 1: "Gex Server", H: "Iron Lady"},
		weightkg: 81.0,
	},
	fleshvaliant: {
		num: 1082,
		name: "Flesh Valiant",
		types: ["Fairy", "Fighting"],
		baseStats: {hp: 70, atk: 105, def: 85, spa: 95, spd: 115, spe: 80},
		abilities: {0: "Skill Issue"},
		weightkg: 50.0,
	},
	fleshvaliantmega: {
		num: 1083,
		name: "Flesh Valiant-Mega",
		baseSpecies: "Flesh Valiant",
		forme: "Mega",
		types: ["Fairy", "Fighting"],
		baseStats: {hp: 72, atk: 137, def: 67, spa: 137, spd: 137, spe: 112},
		abilities: {0: "Mystic Slicer"},
		weightkg: 50.0,
		requiredItem: "Fleshvaliantite",
	},
	abomasnow: {
		inherit: true,
		num: 1084,
		name: "Abomasnow",
		types: ["Ice", "Grass"],
		baseStats: {hp: 90, atk: 92, def: 75, spa: 92, spd: 85, spe: 60},
		abilities: {0: "Snow Warning", 1: "Aboma Care", H: "Soundproof"},
		weightkg: 135.5,
	},
	komala: {
		inherit: true,
		num: 1085,
		name: "Komala",
		types: ["Normal"],
		baseStats: {hp: 65, atk: 115, def: 65, spa: 75, spd: 95, spe: 65},
		abilities: {0: "Bramblin Mentality"},
		weightkg: 19.9,
	},
	inkay: {
		inherit: true,
		fish: true,
	},

	silvallybug: {
		inherit: true,
		fish: true,
	},
	silvallydark: {
		inherit: true,
		fish: true,
	},
	silvallydragon: {
		inherit: true,
		fish: true,
	},
	silvallyelectric: {
		inherit: true,
		fish: true,
	},
	silvallyfairy: {
		inherit: true,
		fish: true,
	},
	silvallyfighting: {
		inherit: true,
		fish: true,
	},
	silvallyfire: {
		inherit: true,
		fish: true,
	},
	silvallyflying: {
		inherit: true,
		fish: true,
	},
	silvallyghost: {
		inherit: true,
		fish: true,
	},
	silvallygrass: {
		inherit: true,
		fish: true,
	},
	silvallyground: {
		inherit: true,
		fish: true,
	},
	silvallyice: {
		inherit: true,
		fish: true,
	},
	silvallypoison: {
		inherit: true,
		fish: true,
	},
	silvallypsychic: {
		inherit: true,
		fish: true,
	},
	silvallyrock: {
		inherit: true,
		fish: true,
	},
	silvallysteel: {
		inherit: true,
		fish: true,
	},
	silvallywater: {
		inherit: true,
		fish: true,
	},
	silvallylemon: {
		num: 773,
		name: "Silvally-Lemon",
		baseSpecies: "Silvally",
		forme: "Lemon",
		types: ["Lemon"],
		fish: true,
		baseStats: {hp: 95, atk: 95, def: 95, spa: 95, spd: 95, spe: 95},
		abilities: {0: "RKS System"},
		requiredItem: "Lemon Memory",
		changesFrom: "Silvally",
	},
	ronaldreagan: {
		num: 1001,
		name: "Ronald Reagan",
		types: ["Fire", "Dark"],
		baseStats: {hp: 125, atk: 85, def: 90, spa: 105, spd: 95, spe: 60},
		abilities: {0: "Reaganomics"},
		weightkg: 83.0,
	},
	limelips: {
		num: 1002,
		name: "Lime Lips",
		types: ["Lemon", "Fairy"],
		baseStats: {hp: 80, atk: 110, def: 70, spa: 90, spd: 70, spe: 110},
		abilities: {0: "Dazzling", H: "Strong Jaw"},
		weightkg: 123.4,
	},
	lemotic: {
		num: 1003,
		name: "Lemotic",
		types: ["Lemon", "Ghost"],
		baseStats: {hp: 139, atk: 146, def: 57, spa: 115, spd: 71, spe: 72},
		abilities: {0: "Minus", 1: "Mega Launcher", H: "Perish Body"},
		weightkg: 150.0,
	},
	zestii: {
		num: 1004,
		name: "Zestii",
		diamondHand: true,
		gender: "F",
		types: ["Lemon"],
		baseStats: {hp: 80, atk: 65, def: 90, spa: 120, spd: 125, spe: 95},
		abilities: {0: "Lemon Squeezy"},
		weightkg: 44.6,
	},
	sunflora: {
		inherit: true,
		num: 1005,
		name: "Sunflora",
		types: ["Grass", "Fire"],
		baseStats: {hp: 85, atk: 110, def: 75, spa: 110, spd: 110, spe: 50},
		abilities: {0: "Chlorophyll", 1: "Solar Power", H: "Drought"},
		weightkg: 8.5,
	},
	rawringmoon: {
		num: 1006,
		name: "Rawring Moon",
		types: ["Dragon", "Silly"],
		baseStats: {hp: 105, atk: 129, def: 71, spa: 55, spd: 101, spe: 109},
		abilities: {0: "Protosynthesis"},
		weightkg: 360.0,
	},
	boogerponclownerstone: {
		num: 1007,
		name: "Boogerpon-CLOWNerstone",
		types: ["Grass", "Silly"],
		baseStats: {hp: 80, atk: 120, def: 84, spa: 60, spd: 96, spe: 110},
		abilities: {0: "Get Silly"},
		weightkg: 39.8,
		requiredItem: "Cornerstone Mask",
	},
	keisbergif: {
		num: 1008,
		name: "Keisberg-IF",
		types: ["Ice", "Silly"],
		baseStats: {hp: 105, atk: 120, def: 110, spa: 75, spd: 110, spe: 25},
		abilities: {0: "Clownery", H: "Inner Focus"},
		weightkg: 236.9,
	},
	indeedee: {
		num: 1009,
		name: "Indeedee",
		types: ["Psychic", "Silly"],
		baseStats: {hp: 60, atk: 65, def: 55, spa: 105, spd: 95, spe: 135},
		abilities: {0: "Inner Focus", 1: "Psychic Surge", H: "Synchronize"},
		weightkg: 28.0,
	},
	applesnewestemoji: {
		num: 1010,
		name: "Apple\'s Newest Emoji",
		types: ["Fire", "Lemon"],
		baseStats: {hp: 92, atk: 65, def: 100, spa: 110, spd: 82, spe: 108},
		abilities: {0: "Flame Body", 1: "Unaware", H: "Zesty"},
		weightkg: 0.2,
	},
	cinderace: {
		inherit: true,
		num: 1011,
		name: "Cinderace",
		types: ["Fire"],
		baseStats: {hp: 80, atk: 116, def: 85, spa: 65, spd: 85, spe: 99},
		abilities: {0: "Blaze", H: "Libero"},
		weightkg: 33.0,
	},
	lemonfish: {
		num: 1012,
		name: "Lemon Fish",
		fish: true,
		types: ["Lemon", "Water"],
		baseStats: {hp: 100, atk: 105, def: 80, spa: 60, spd: 60, spe: 80},
		abilities: {0: "Swift Swim", 1: "Ripen", H: "Lemonade"},
		weightkg: 1,
	},
	dracolition: {
		num: 1013,
		name: "Dracolition",
		types: ["Steel", "Fighting"],
		baseStats: {hp: 112, atk: 128, def: 90, spa: 60, spd: 85, spe: 40},
		abilities: {0: "Wrecking Ball", 1: "Intimidate", H: "Dragon\'s Maw"},
		weightkg: 235.4,
	},

	silvallysilly: {
		num: 773,
		name: "Silvally-Silly",
		baseSpecies: "Silvally",
		forme: "Silly",
		types: ["Silly"],
		fish: true,
		baseStats: {hp: 95, atk: 95, def: 95, spa: 95, spd: 95, spe: 95},
		abilities: {0: "RKS System"},
		requiredItem: "Silly Memory",
		changesFrom: "Silvally",
	},
	silvallystellar: {
		num: 773,
		name: "Silvally-Stellar",
		baseSpecies: "Silvally",
		forme: "Stellar",
		types: ["Stellar"],
		fish: true,
		baseStats: {hp: 95, atk: 95, def: 95, spa: 95, spd: 95, spe: 95},
		abilities: {0: "RKS System"},
		requiredItem: "Stellarium Z",
		changesFrom: "Silvally",
	},
	goddease: {
		num: 1001,
		name: "Goddease",
		types: ["Normal", "Flying"],
		baseStats: {hp: 80, atk: 120, def: 100, spa: 90, spd: 140, spe: 70},
		abilities: {0: "Pressure"},
		weightkg: 10.8,
	},
	jableye: {
		num: 1002,
		name: "Jableye",
		types: ["Ghost", "Dark", "Poison"],
		baseStats: {hp: 75, atk: 75, def: 100, spa: 75, spd: 100, spe: 50},
		abilities: {0: "Justified", H: "Jankster"},
		weightkg: 11.0,
	},
	kyrum: {
		num: 1003,
		name: "Kyrum",
		types: ["Bug", "Dark"],
		baseStats: {hp: 71, atk: 102, def: 78, spa: 52, spd: 55, spe: 92},
		abilities: {0: "Swarm", 1: "Tinted Lens", H: "Pressure"},
		weightkg: 17.5,
	},
	raccoon: {
		num: 1004,
		name: "Raccoon",
		types: ["Dark", "Silly"],
		baseStats: {hp: 75, atk: 100, def: 70, spa: 63, spd: 75, spe: 102},
		abilities: {0: "Pickpocket", 1: "Parting Gift", H: "Prankster"},
		weightkg: 15.5,
	},
	lucariocalm: {
		num: 1005,
		name: "Lucario-Calm",
		types: ["Fighting", "Psychic", "Steel"],
		baseStats: {hp: 70, atk: 115, def: 70, spa: 105, spd: 70, spe: 105},
		abilities: {0: "Steadfast", 1: "Inner Focus", H: "Justified"},
		weightkg: 47.0,
	},
	nedontrol: {
		num: 1006,
		name: "Nedontrol",
		gender: "M",
		types: ["Rock"],
		baseStats: {hp: 126, atk: 92, def: 120, spa: 52, spd: 131, spe: 54},
		abilities: {0: "Bon Appetit"},
		weightkg: 434.5,
	},
	princirang: {
		num: 1007,
		name: "Princirang",
		gender: "F",
		types: ["Fairy"],
		baseStats: {hp: 98, atk: 93, def: 86, spa: 83, spd: 80, spe: 135},
		abilities: {0: "Honor Student"},
		weightkg: 110.3,
	},
	ironclown: {
		num: 1008,
		name: "Iron Clown",
		types: ["Steel", "Silly"],
		baseStats: {hp: 90, atk: 72, def: 100, spa: 122, spd: 108, spe: 98},
		abilities: {0: "Quark Drive", H: "Get Silly"},
		weightkg: 156.0,
	},
	thepearlhand: {
		num: 1009,
		name: "The Pearl Hand",
		types: ["Water", "Dragon"],
		baseStats: {hp: 50, atk: 100, def: 100, spa: 100, spd: 100, spe: 125},
		abilities: {0: "The Pearl Hand"},
		weightkg: 0.5,
	},
	mcfish: {
		num: 1010,
		name: "McFish",
		types: ["Normal", "Dark"],
		baseStats: {hp: 125, atk: 125, def: 90, spa: 50, spd: 90, spe: 60},
		abilities: {0: "The Ever-Growing Hunger of Capitalism™"},
		weightkg: 999.9,
	},
	applwirm: {
		num: 1011,
		name: "Applwirm",
		types: ["Ground", "Bug"],
		baseStats: {hp: 70, atk: 105, def: 70, spa: 75, spd: 70, spe: 115},
		abilities: {0: "Hustle", H: "Katabatic Winds"},
		weightkg: 7.2,
	},
	minunandplusled: {
		num: 1012,
		name: "minun and plusle :D",
		types: ["Electric", "Electric"],
		baseStats: {hp: 75, atk: 50, def: 50, spa: 100, spd: 100, spe: 125},
		abilities: {0: "best friends"},
		weightkg: 8.4,
	},

	traike: {
		num: 1001,
		name: "Traike",
		types: ["Fighting", "Electric"],
		baseStats: {hp: 75, atk: 130, def: 50, spa: 115, spd: 50, spe: 95},
		abilities: {0: "Sturdy", 1: "No Guard", H: "Mold Breaker"},
		weightkg: 71.4,
	},
	groudon: {
		inherit: true,
		num: 1002,
		name: "Groudon",
		types: ["Ground"],
		baseStats: {hp: 90, atk: 130, def: 120, spa: 90, spd: 80, spe: 70},
		abilities: {0: "Drought"},
		weightkg: 950.0,
	},
	drliberty: {
		num: 1003,
		name: "Dr. Liberty",
		types: ["Psychic"],
		baseStats: {hp: 89, atk: 71, def: 78, spa: 120, spd: 117, spe: 100},
		abilities: {0: "Mad Scientist"},
		weightkg: 76.4,
	},
	absol: {
		inherit: true,
		num: 1004,
		name: "Absol",
		types: ["Dark", "Ghost"],
		baseStats: {hp: 94, atk: 104, def: 74, spa: 104, spd: 74, spe: 114},
		abilities: {0: "Forewarn", 1: "Divining Horn", H: "Hoenn Stan"},
		weightkg: 47.0,
	},
	sunfloragrave: {
		num: 1005,
		name: "Sunflora-Grave",
		types: ["Ghost"],
		baseStats: {hp: 95, atk: 120, def: 75, spa: 120, spd: 110, spe: 20},
		abilities: {0: "Zombies on Your Lawn"},
		weightkg: 0.1,
	},
	ironboulder: {
		num: 1006,
		name: "Iron Boulder",
		types: ["Rock", "Psychic"],
		baseStats: {hp: 90, atk: 120, def: 80, spa: 68, spd: 108, spe: 124},
		abilities: {0: "Quark Drive"},
		weightkg: 162.5,
	},
	hydralemon: {
		num: 1007,
		name: "Hydralemon",
		types: ["Lemon", "Dragon"],
		baseStats: {hp: 106, atk: 80, def: 110, spa: 120, spd: 80, spe: 44},
		abilities: {0: "Supersour Syrup", 1: "Regenerator", H: "Sticky Hold"},
		weightkg: 93.0,
	},
	zapdos: {
		inherit: true,
		num: 1008,
		name: "Zapdos",
		types: ["Electric", "Flying"],
		baseStats: {hp: 90, atk: 90, def: 85, spa: 125, spd: 90, spe: 100},
		abilities: {0: "Pressure", H: "Static"},
		weightkg: 52.6,
	},

}
