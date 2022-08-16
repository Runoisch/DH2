export const Pokedex: {[speciesid: string]: ModdedSpeciesData} = {
	growlithe: {
		inherit: true,
		otherFormes: ["Growlithe-Hisui"],
		formeOrder: ["Growlithe", "Growlithe-Hisui"],
	},
	growlithehisui: {
		name: "Growlithe-Hisui",
		baseSpecies: "Growlithe",
		forme: "Hisui",
		copyData: "Growlithe",
		types: ["Fire", "Rock"],
		baseStats: {hp: 60, atk: 75, def: 45, spa: 65, spd: 50, spe: 55},
		heightm: 0.8,
		weightkg: 22.7,
		evos: ["Arcanine-Hisui"],
	},
	arcanine: {
		inherit: true,
		otherFormes: ["Arcanine-Hisui"],
		formeOrder: ["Arcanine", "Arcanine-Hisui"],
	},
	arcaninehisui: {
		name: "Arcanine-Hisui",
		baseSpecies: "Arcanine",
		forme: "Hisui",
		copyData: "Arcanine",
		types: ["Fire", "Rock"],
		baseStats: {hp: 95, atk: 115, def: 80, spa: 95, spd: 80, spe: 90},
		heightm: 2.0,
		weightkg: 168,
		prevo: "Growlithe-Hisui",
		evoType: "useItem",
		evoItem: "Fire Stone",
	},
	voltorb: {
		inherit: true,
		otherFormes: ["Voltorb-Hisui"],
		formeOrder: ["Voltorb", "Voltorb-Hisui"],
	},
	voltorbhisui: {
		name: "Voltorb-Hisui",
		baseSpecies: "Voltorb",
		forme: "Hisui",
		copyData: "Voltorb",
		types: ["Electric", "Grass"],
		heightm: 0.5,
		weightkg: 13,
		evos: ["Electrode-Hisui"],
	},
	electrode: {
		inherit: true,
		otherFormes: ["Electrode-Hisui"],
		formeOrder: ["Electrode", "Electrode-Hisui"],
	},
	electrodehisui: {
		name: "Electrode-Hisui",
		baseSpecies: "Electrode",
		forme: "Hisui",
		copyData: "Electrode",
		types: ["Electric", "Grass"],
		heightm: 1.2,
		weightkg: 71,
		prevo: "Voltorb-Hisui",
		evoType: "useItem",
		evoItem: "Leaf Stone",
		evoCondition: "at level 40 or above",
	},
	quilava: {
		inherit: true,
		evos: ["Typhlosion", "Typhlosion-Hisui"],
	},
	typhlosion: {
		inherit: true,
		otherFormes: ["Typhlosion-Hisui"],
		formeOrder: ["Typhlosion", "Typhlosion-Hisui"],
	},
	typhlosionhisui: {
		name: "Typhlosion-Hisui",
		baseSpecies: "Typhlosion",
		forme: "Hisui",
		copyData: "Typhlosion",
		types: ["Fire", "Ghost"],
		baseStats: {hp: 73, atk: 84, def: 78, spa: 119, spd: 85, spe: 95},
		heightm: 1.6,
		weightkg: 69.8,
		prevo: "Quilava",
		evoLevel: 36,
	},
	qwilfish: {
		inherit: true,
		otherFormes: ["Qwilfish-Hisui"],
		formeOrder: ["Qwilfish", "Qwilfish-Hisui"],
	},
	qwilfishhisui: {
		name: "Qwilfish-Hisui",
		baseSpecies: "Qwilfish",
		forme: "Hisui",
		copyData: "Qwilfish",
		types: ["Dark", "Poison"],
		heightm: 0.5,
		weightkg: 3.9,
		evos: ["Overqwil"],
	},
	overqwil: {
		num: 904,
		name: "Overqwil",
		copyData: "Qwilfish",
		types: ["Dark", "Poison"],
		baseStats: {hp: 85, atk: 115, def: 95, spa: 65, spd: 65, spe: 85},
		heightm: 2.5,
		weightkg: 60.5,
		prevo: "Qwilfish-Hisui",
		evoType: "levelMove",
		evoMove: "Barb Barrage",
	},
	sneasel: {
		inherit: true,
		otherFormes: ["Sneasel-Hisui"],
		formeOrder: ["Sneasel", "Sneasel-Hisui"],
	},
	sneaselhisui: {
		num: 903,
		name: "Sneasel-Hisui",
		baseSpecies: "Sneasel",
		forme: "Hisui",
		copyData: "Sneasel",
		types: ["Dark", "Poison"],
		abilities: {0: "Inner Focus", 1: "Keen Eye", H: "Poison Touch"},
		heightm: 0.9,
		weightkg: 27,
		evos: ["Sneasler"],
	},
	sneasler: {
		name: "Sneasler",
		copyData: "Sneasel",
		types: ["Poison", "Fighting"],
		abilities: {0: "Pressure", H: "Poison Touch"},
		baseStats: {hp: 80, atk: 130, def: 60, spa: 40, spd: 80, spe: 120},
		heightm: 1.3,
		weightkg: 43,
		prevo: "Sneasel-Hisui",
		evoType: "levelHold",
		evoItem: "Razor Claw",
	},
	dialga: {
		inherit: true,
		baseForme: "Altered",
		otherFormes: ["Dialga-Origin"],
		formeOrder: ["Dialga", "Dialga-Origin"],
	},
	dialgaorigin: {
		num: 483,
		name: "Dialga-Origin",
		baseSpecies: "Dialga",
		forme: "Origin",
		types: ["Steel", "Dragon"],
		gender: "N",
		baseStats: {hp: 100, atk: 100, def: 120, spa: 150, spd: 120, spe: 90},
		abilities: {0: "Pressure", H: "Telepathy"},
		heightm: 7,
		weightkg: 850,
		color: "White",
		eggGroups: ["Undiscovered"],
		requiredItem: "Adamant Orb",
		changesFrom: "Dialga",
	},
	palkia: {
		inherit: true,
		baseForme: "Altered",
		otherFormes: ["Palkia-Origin"],
		formeOrder: ["Palkia", "Palkia-Origin"],
	},
	palkiaorigin: {
		num: 484,
		name: "Palkia-Origin",
		baseSpecies: "Palkia",
		forme: "Origin",
		types: ["Water", "Dragon"],
		gender: "N",
		baseStats: {hp: 90, atk: 100, def: 100, spa: 150, spd: 120, spe: 120},
		abilities: {0: "Pressure", H: "Telepathy"},
		heightm: 6.3,
		weightkg: 660,
		color: "Purple",
		eggGroups: ["Undiscovered"],
		requiredItem: "Lustrous Orb",
		changesFrom: "Palkia",
	},
	dewott: {
		inherit: true,
		evos: ["Samurott", "Samurott-Hisui"],
	},
	samurott: {
		inherit: true,
		otherFormes: ["Samurott-Hisui"],
		formeOrder: ["Samurott", "Samurott-Hisui"],
	},
	samurotthisui: {
		name: "Samurott-Hisui",
		baseSpecies: "Samurott",
		forme: "Hisui",
		copyData: "Samurott",
		types: ["Water", "Dark"],
		baseStats: {hp: 90, atk: 108, def: 80, spa: 100, spd: 65, spe: 85},
		heightm: 1.5,
		weightkg: 58.2,
		prevo: "Dewott",
		evoLevel: 36,
	},
	petilil: {
		inherit: true,
		evos: ["Lilligant", "Lilligant-Hisui"],
	},
	lilligant: {
		inherit: true,
		otherFormes: ["Lilligant-Hisui"],
		formeOrder: ["Lilligant", "Lilligant-Hisui"],
	},
	lilliganthisui: {
		name: "Lilligant-Hisui",
		baseSpecies: "Lilligant",
		forme: "Hisui",
		copyData: "Lilligant",
		types: ["Grass", "Fighting"],
		abilities: {0: "Chlorophyll", 1: "Hustle", H: "Leaf Guard"},
		baseStats: {hp: 70, atk: 105, def: 75, spa: 50, spd: 75, spe: 105},
		heightm: 1.2,
		weightkg: 19.2,
		prevo: "Petilil",
		evoType: "useItem",
		evoItem: "Leaf Stone",
	},
	basculin: {
		inherit: true,
		otherFormes: ["Basculin-Blue-Striped", "Basculin-White-Striped"],
		formeOrder: ["Basculin", "Basculin-Blue-Striped", "Basculin-White-Striped"],
	},
	basculinwhitestriped: {
		name: "Basculin-White-Striped",
		baseSpecies: "Basculin",
		forme: "White-Striped",
		copyData: "Basculin",
		abilities: {0: "Rattled", 1: "Adaptability", H: "Mold Breaker"},
		heightm: 1.0,
		weightkg: 18,
		evos: ["Basculegion", "Basculegion-F"],
	},
	basculegion: {
		num: 902,
		name: "Basculegion",
		copyData: "Basculin",
		baseForme: "M",
		gender: "M",
		types: ["Water", "Ghost"],
		abilities: {0: "Rattled", 1: "Adaptability", H: "Mold Breaker"},
		baseStats: {hp: 120, atk: 112, def: 65, spa: 80, spd: 75, spe: 78},
		heightm: 3.0,
		weightkg: 110,
		prevo: "Basculin-White-Striped",
		evoType: "levelMove",
		evoMove: "Wave Crash",
		otherFormes: ["Basculegion-F"],
		formeOrder: ["Basculegion", "Basculegion-F"],
	},
	basculegionf: {
		num: 902,
		name: "Basculegion-F",
		baseSpecies: "Basculegion",
		forme: "F",
		copyData: "Basculin",
		gender: "F",
		types: ["Water", "Ghost"],
		abilities: {0: "Rattled", 1: "Adaptability", H: "Mold Breaker"},
		baseStats: {hp: 120, atk: 92, def: 65, spa: 100, spd: 75, spe: 78},
		heightm: 3.0,
		weightkg: 110,
		prevo: "Basculin-White-Striped",
		evoType: "levelMove",
		evoMove: "Wave Crash",
	},
	zorua: {
		inherit: true,
		otherFormes: ["Zorua-Hisui"],
		formeOrder: ["Zorua", "Zorua-Hisui"],
	},
	zoruahisui: {
		name: "Zorua-Hisui",
		baseSpecies: "Zorua",
		forme: "Hisui",
		copyData: "Zorua",
		types: ["Normal", "Ghost"],
		baseStats: {hp: 35, atk: 60, def: 40, spa: 85, spd: 40, spe: 70},
		heightm: 0.7,
		weightkg: 12.5,
		evos: ["Zoroark-Hisui"],
	},
	zoroark: {
		inherit: true,
		otherFormes: ["Zoroark-Hisui"],
		formeOrder: ["Zoroark", "Zoroark-Hisui"],
	},
	zoroarkhisui: {
		name: "Zoroark-Hisui",
		baseSpecies: "Zoroark",
		forme: "Hisui",
		copyData: "Zoroark",
		types: ["Normal", "Ghost"],
		baseStats: {hp: 55, atk: 100, def: 60, spa: 125, spd: 60, spe: 110},
		heightm: 1.6,
		weightkg: 73,
		prevo: "Zorua-Hisui",
		evoLevel: 30,
	},
	rufflet: {
		inherit: true,
		evos: ["Braviary", "Braviary-Hisui"],
	},
	braviary: {
		inherit: true,
		otherFormes: ["Braviary-Hisui"],
		formeOrder: ["Braviary", "Braviary-Hisui"],
	},
	braviaryhisui: {
		name: "Braviary-Hisui",
		baseSpecies: "Braviary",
		forme: "Hisui",
		copyData: "Braviary",
		types: ["Psychic", "Flying"],
		baseStats: {hp: 110, atk: 83, def: 70, spa: 112, spd: 70, spe: 65},
		heightm: 1.7,
		weightkg: 43.4,
		prevo: "Rufflet",
		evoLevel: 54,
	},
	goomy: {
		inherit: true,
		evos: ["Sliggoo", "Sliggoo-Hisui"],
	},
	sliggoo: {
		inherit: true,
		otherFormes: ["Sliggoo-Hisui"],
		formeOrder: ["Sliggoo", "Sliggoo-Hisui"],
	},
	sliggoohisui: {
		name: "Sliggoo-Hisui",
		baseSpecies: "Sliggoo",
		forme: "Hisui",
		copyData: "Sliggoo",
		types: ["Steel", "Dragon"],
		abilities: {0: "Sap Sipper", 1: "Overcoat", H: "Gooey"},
		baseStats: {hp: 58, atk: 75, def: 83, spa: 83, spd: 113, spe: 40},
		heightm: 0.7,
		weightkg: 68.5,
		prevo: "Goomy",
		evoLevel: 40,
		evos: ["Goodra-Hisui"],
	},
	goodra: {
		inherit: true,
		otherFormes: ["Goodra-Hisui"],
		formeOrder: ["Goodra", "Goodra-Hisui"],
	},
	goodrahisui: {
		name: "Goodra-Hisui",
		baseSpecies: "Goodra",
		forme: "Hisui",
		copyData: "Goodra",
		types: ["Steel", "Dragon"],
		abilities: {0: "Sap Sipper", 1: "Overcoat", H: "Gooey"},
		baseStats: {hp: 80, atk: 100, def: 100, spa: 110, spd: 150, spe: 60},
		heightm: 1.7,
		weightkg: 334.1,
		prevo: "Sliggoo-Hisui",
		evoLevel: 50,
	},
	bergmite: {
		inherit: true,
		evos: ["Avalugg", "Avalugg-Hisui"],
	},
	avalugg: {
		inherit: true,
		otherFormes: ["Avalugg-Hisui"],
		formeOrder: ["Avalugg", "Avalugg-Hisui"],
	},
	avalugghisui: {
		name: "Avalugg-Hisui",
		baseSpecies: "Avalugg",
		forme: "Hisui",
		copyData: "Avalugg",
		types: ["Ice", "Rock"],
		abilities: {0: "Strong Jaw", 1: "Ice Body", H: "Sturdy"},
		baseStats: {hp: 95, atk: 127, def: 184, spa: 34, spd: 36, spe: 38},
		heightm: 1.4,
		weightkg: 262,
		prevo: "Bergmite",
		evoLevel: 37,
	},
	dartrix: {
		inherit: true,
		evos: ["Decidueye", "Decidueye-Hisui"],
	},
	decidueye: {
		inherit: true,
		otherFormes: ["Decidueye-Hisui"],
		formeOrder: ["Decidueye", "Decidueye-Hisui"],
	},
	decidueyehisui: {
		name: "Decidueye-Hisui",
		baseSpecies: "Decidueye",
		forme: "Hisui",
		copyData: "Decidueye",
		types: ["Grass", "Fighting"],
		baseStats: {hp: 88, atk: 112, def: 80, spa: 95, spd: 95, spe: 60},
		heightm: 1.6,
		weightkg: 37,
		prevo: "Dartrix",
		evoLevel: 34,
	},
	stantler: {
		inherit: true,
		evos: ["Wyrdeer"],
	},
	wyrdeer: {
		num: 899,
		name: "Wyrdeer",
		copyData: "Stantler",
		types: ["Normal", "Psychic"],
		baseStats: {hp: 103, atk: 105, def: 72, spa: 105, spd: 75, spe: 65},
		heightm: 1.8,
		weightkg: 95.1,
		prevo: "Stantler",
		evoType: "levelMove",
		evoMove: "Psyshield Bash",
	},
	scyther: {
		inherit: true,
		evos: ["Scizor", "Kleavor"],
	},
	kleavor: {
		num: 900,
		name: "Kleavor",
		copyData: "Scyther",
		types: ["Bug", "Rock"],
		abilities: {0: "Swarm", 1: "Sheer Force", H: "Steadfast"},
		baseStats: {hp: 70, atk: 135, def: 95, spa: 45, spd: 70, spe: 85},
		heightm: 1.8,
		weightkg: 89,
		prevo: "Scyther",
		evoType: "trade",
		evoItem: "Black Augurite",
	},
	ursaring: {
		inherit: true,
		evos: ["Ursaluna"],
	},
	ursaluna: {
		num: 901,
		name: "Ursaluna",
		copyData: "Ursaring",
		types: ["Ground", "Normal"],
		abilities: {0: "Guts", 1: "Bulletproof", H: "Unnerve"},
		baseStats: {hp: 130, atk: 140, def: 105, spa: 45, spd: 80, spe: 50},
		heightm: 2.4,
		weightkg: 290,
		prevo: "Ursaring",
		evoType: "trade",
		evoItem: "Peat Block",
	},
	enamorus: {
		num: 905,
		name: "Enamorus",
		baseForme: "Incarnate",
		types: ["Fairy", "Flying"],
		gender: "F",
		baseStats: {hp: 74, atk: 115, def: 70, spa: 135, spd: 80, spe: 106},
		abilities: {0: "Healer", H: "Contrary"},
		heightm: 1.6,
		weightkg: 48,
		color: "Pink",
		eggGroups: ["Undiscovered"],
		otherFormes: ["Enamorus-Therian"],
		formeOrder: ["Enamorus", "Enamorus-Therian"],
	},
	enamorustherian: {
		num: 905,
		name: "Enamorus-Therian",
		baseSpecies: "Enamorus",
		forme: "Therian",
		types: ["Fairy", "Flying"],
		gender: "F",
		baseStats: {hp: 74, atk: 115, def: 110, spa: 135, spd: 100, spe: 46},
		abilities: {0: "Overcoat"},
		heightm: 1.6,
		weightkg: 48,
		color: "Pink",
		eggGroups: ["Undiscovered"],
		changesFrom: "Enamorus",
	},
};
