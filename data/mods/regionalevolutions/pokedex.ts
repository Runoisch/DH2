export const Pokedex: { [k: string]: ModdedSpeciesData } = {
	// Kanto Dex

	beldum: {
		inherit: true,
		otherFormes: ["Beldum-Kanto"],
		formeOrder: ["Beldum", "Beldum-Kanto"],
	},
	beldumkanto: {
		num: 374,
		name: "Beldum-Kanto",
		baseSpecies: "Beldum",
		forme: "Kanto",
		types: ["Steel", "Fire"],
		gender: "N",
		baseStats: {hp: 40, atk: 35, def: 55, spa: 30, spd: 60, spe: 80},
		abilities: {0: "Speed Boost", H: "Light Metal"},
		heightm: 0.6,
		weightkg: 95.2,
		color: "Blue",
		evos: ["Metang-Kanto"],
		eggGroups: ["Mineral"],
	},
	metang: {
		inherit: true,
		otherFormes: ["Metang-Kanto"],
		formeOrder: ["Metang", "Metang-Kanto"],
	},
	metangkanto: {
		num: 375,
		name: "Metang-Kanto",
		baseSpecies: "Metang",
		forme: "Kanto",
		types: ["Steel", "Fire"],
		gender: "N",
		baseStats: {hp: 60, atk: 55, def: 75, spa: 50, spd: 80, spe: 100},
		abilities: {0: "Speed Boost", H: "Light Metal"},
		heightm: 1.2,
		weightkg: 202.5,
		color: "Blue",
		prevo: "Beldum-Kanto",
		evoLevel: 20,
		evos: ["Yamatang"],
		eggGroups: ["Mineral"],
	},
	yamatang: {
		num: -11,
		name: "Yamatang",
		types: ["Steel", "Fire"],
		gender: "N",
		baseStats: {hp: 100, atk: 115, def: 95, spa: 70, spd: 100, spe: 120},
		abilities: {0: "Speed Boost", H: "Light Metal"},
		heightm: 1.6,
		weightkg: 264.09,
		color: "Blue",
		prevo: "Metang-Kanto",
		evoLevel: 45,
		eggGroups: ["Mineral"],
	},
	aipom: {
		inherit: true,
		otherFormes: ["Aipom-Kanto"],
		formeOrder: ["Aipom", "Aipom-Kanto"],
	},
	aipomkanto: {
		num: 190,
		name: "Aipom-Kanto",
		baseSpecies: "Aipom",
		forme: "Kanto",
		types: ["Ice"],
		baseStats: {hp: 55, atk: 45, def: 55, spa: 70, spd: 60, spe: 75},
		abilities: {0: "Run Away", 1: "Frisk", H: "Snow Warning"},
		heightm: 0.8,
		weightkg: 11.5,
		color: "Purple",
		evos: ["Kortori"],
		eggGroups: ["Field"],
	},
	kortori: {
		num: -12,
		name: "Kortori",
		types: ["Ice", "Psychic"],
		baseStats: {hp: 70, atk: 60, def: 66, spa: 105, spd: 85, spe: 96},
		abilities: {0: "Forewarn", 1: "Frisk", H: "Snow Warning"},
		heightm: 1.4,
		weightkg: 30,
		color: "Purple",
		prevo: "Aipom-Kanto",
		evoType: "levelMove",
		evoMove: "Extrasensory",
		eggGroups: ["Field"],
	},
	// Johto Dex

	dratini: {
		inherit: true,
		otherFormes: ["Dratini-Johto"],
		formeOrder: ["Dratini", "Dratini-Johto"],
	},
	dratinijohto: {
		num: 147,
		name: "Dratini-Johto",
		baseSpecies: "Dratini",
		forme: "Johto",
		types: ["Poison", "Psychic"],
		baseStats: {hp: 41, atk: 54, def: 65, spa: 60, spd: 50, spe: 30},
		abilities: {0: "Ionization", H: "Perish Body"},
		heightm: 1.8,
		weightkg: 3.3,
		color: "Blue",
		evos: ["Dragonair-Johto"],
		eggGroups: ["Water 1", "Dragon"],
	},
	dragonair: {
		inherit: true,
		otherFormes: ["Dragonair-Johto"],
		formeOrder: ["Dragonair", "Dragonair-Johto"],
	},
	dragonairjohto: {
		num: 148,
		name: "Dragonair-Johto",
		baseSpecies: "Dragonair",
		forme: "Johto",
		types: ["Poison", "Psychic"],
		baseStats: {hp: 61, atk: 74, def: 75, spa: 90, spd: 70, spe: 50},
		abilities: {0: "Ionization", H: "Perish Body"},
		heightm: 4,
		weightkg: 16.5,
		color: "Blue",
		prevo: "Dratini-Johto",
		evoLevel: 30,
		evos: ["Dratomic"],
		eggGroups: ["Water 1", "Dragon"],
	},
	dratomic: {
		num: -1,
		name: "Dratomic",
		types: ["Poison", "Psychic"],
		baseStats: {hp: 91, atk: 94, def: 115, spa: 120, spd: 100, spe: 70},
		abilities: {0: "Ionization", H: "Perish Body"},
		heightm: 2.2,
		weightkg: 210,
		color: "Brown",
		prevo: "Dragonair-Johto",
		evoLevel: 55,
		eggGroups: ["Water 1", "Dragon"],
	},
	drifloon: {
		inherit: true,
		otherFormes: ["Drifloon-Johto", "Drifloon-Alola"],
		formeOrder: ["Drifloon", "Drifloon-Johto", "Drifloon-Alola"],
	},
	drifloonjohto: {
		num: 425,
		name: "Drifloon-Johto",
		baseSpecies: "Drifloon",
		forme: "Johto",
		types: ["Normal", "Ghost"],
		baseStats: {hp: 70, atk: 50, def: 34, spa: 60, spd: 90, spe: 44},
		abilities: {0: "Aftermath", 1: "Own Tempo", H: "Clear Body"},
		heightm: 0.4,
		weightkg: 1.2,
		color: "Purple",
		evos: ["Drifblim-Johto"],
		eggGroups: ["Amorphous"],
	},
	drifblim: {
		inherit: true,
		otherFormes: ["Drifblim-Johto", "Drifblim-Alola"],
		formeOrder: ["Drifblim", "Drifblim-Johto", "Drifblim-Alola"],
	},
	drifblimjohto: {
		num: 426,
		name: "Drifblim-Johto",
		baseSpecies: "Drifblim",
		forme: "Johto",
		types: ["Normal", "Ghost"],
		baseStats: {hp: 80, atk: 80, def: 44, spa: 90, spd: 150, spe: 54},
		abilities: {0: "Aftermath", 1: "Own Tempo", H: "Clear Body"},
		heightm: 1.2,
		weightkg: 15,
		color: "Purple",
		prevo: "Drifloon-Johto",
		evoLevel: 28,
		evos: ["Melklim"],
		eggGroups: ["Amorphous"],
	},
	melklim: {
		num: -18,
		name: "Melklim",
		types: ["Normal", "Ghost"],
		baseStats: {hp: 120, atk: 90, def: 70, spa: 90, spd: 150, spe: 34},
		abilities: {0: "Aftermath", 1: "Own Tempo", H: "Clear Body"},
		heightm: 1.2,
		weightkg: 581.6,
		color: "Purple",
		prevo: "Drifblim-Johto",
		eggGroups: ["Amorphous"],
	},
	turtonator: {
		inherit: true,
		otherFormes: ["Turtonator-Johto"],
		formeOrder: ["Turtonator", "Turtonator-Johto"],
	},
	turtonatorjohto: {
		num: 776,
		name: "Turtonator-Johto",
		baseSpecies: "Turtonator",
		forme: "Johto",
		types: ["Water", "Dragon"],
		baseStats: {hp: 60, atk: 78, def: 135, spa: 91, spd: 85, spe: 36},
		abilities: {0: "Soft Shell"},
		heightm: 2,
		weightkg: 220,
		color: "Red",
		eggGroups: ["Monster", "Dragon"],
		evos: ["Coramata"],
	},
	coramata: {
		num: -24,
		name: "Coramata",
		types: ["Water", "Dragon"],
		baseStats: {hp: 70, atk: 98, def: 135, spa: 121, spd: 85, spe: 31},
		abilities: {0: "Regenerator"},
		heightm: 2,
		weightkg: 352,
		color: "Red",
		eggGroups: ["Monster", "Dragon"],
	},

	// Hoenn Dex

	diodactyl: {
		num: -13,
		name: "Diodactyl",
		types: ["Electric", "Flying"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 60, atk: 85, def: 70, spa: 105, spd: 65, spe: 130},
		abilities: {0: "Soundproof", 1: "Volt Absorb", H: "Galvanize"},
		heightm: 1.8,
		weightkg: 59,
		color: "Purple",
		eggGroups: ["Flying"],
		evos: ["Meissnactyl"],
	},
	meissnactyl: {
		num: -14,
		name: "Meissnactyl",
		types: ["Electric", "Flying"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 85, atk: 95, def: 115, spa: 125, spd: 90, spe: 45},
		abilities: {0: "Soundproof", 1: "Volt Absorb", H: "Galvanize"},
		heightm: 2.1,
		weightkg: 79,
		color: "Purple",
		eggGroups: ["Flying"],
		prevo: "Diodactyl",
	},

	// Sinnoh Dex
	// Hisui Dex

	shroomish: {
		inherit: true,
		otherFormes: ["Shroomish-Hisui"],
		formeOrder: ["Shroomish", "Shroomish-Hisui"],
	},
	shroomishhisui: {
		num: 285,
		name: "Shroomish-Hisui",
		baseSpecies: "Shroomish",
		forme: "Hisui",
		types: ["Ice", "Grass"],
		baseStats: {hp: 60, atk: 40, def: 60, spa: 40, spd: 60, spe: 35},
		abilities: {0: "Natural Cure", 1: "Effect Spore", H: "Ice Body"},
		heightm: 0.4,
		weightkg: 4.5,
		color: "Brown",
		evos: ["Breloom-Hisui"],
		eggGroups: ["Fairy", "Grass"],
	},
	breloom: {
		inherit: true,
		otherFormes: ["Breloom-Hisui"],
		formeOrder: ["Breloom", "Breloom-Hisui"],
	},
	breloomhisui: {
		num: 286,
		name: "Breloom-Hisui",
		baseSpecies: "Breloom",
		forme: "Hisui",
		types: ["Ice", "Fighting"],
		baseStats: {hp: 60, atk: 130, def: 80, spa: 60, spd: 60, spe: 70},
		abilities: {0: "Natural Cure", 1: "Effect Spore", H: "Ice Body"},
		heightm: 1.5,
		weightkg: 30,
		color: "Green",
		prevo: "Shroomish-Hisui",
		evoLevel: 23,
		eggGroups: ["Fairy", "Grass"],
		evos: ["Sageloom"],
	},
	sageloom: {
		num: -15,
		name: "Sageloom",
		types: ["Ice", "Fighting"],
		baseStats: {hp: 70, atk: 130, def: 80, spa: 60, spd: 60, spe: 120},
		abilities: {0: "Natural Cure", 1: "Effect Spore", H: "Grassy Surge"},
		heightm: 2,
		weightkg: 35,
		color: "Green",
		prevo: "Breloom-Hisui",
		evoType: "levelHold",
		evoItem: "Forest Staff",
		eggGroups: ["Fairy", "Grass"],
	},

	// Unova Dex
	
	pachirisu: {
		inherit: true,
		otherFormes: ["Pachirisu-Unova"],
		formeOrder: ["Pachirisu", "Pachirisu-Unova"],
	},
	pachirisuunova: {
		num: 417,
		name: "Pachirisu-Unova",
		baseSpecies: "Pachirisu",
		forme: "Unova",
		types: ["Electric", "Fighting"],
		baseStats: {hp: 60, atk: 90, def: 45, spa: 70, spd: 45, spe: 95},
		abilities: {0: "Justified", 1: "Iron Fist", H: "Volt Absorb"},
		heightm: 0.4,
		weightkg: 3.9,
		color: "White",
		eggGroups: ["Field", "Fairy"],
		evos: ["Pachiro"],
	},
	pachiro: {
		num: -19,
		name: "Pachiro",
		types: ["Electric", "Fighting"],
		baseStats: {hp: 70, atk: 110, def: 55, spa: 90, spd: 55, spe: 125},
		abilities: {0: "Justified", 1: "Iron Fist", H: "Volt Absorb"},
		heightm: 0.81,
		weightkg: 31.75,
		color: "White",
		eggGroups: ["Field", "Fairy"],
		prevo: "Pachirisu-Unova",
	},
	glameow: {
		inherit: true,
		otherFormes: ["Glameow-Unova"],
		formeOrder: ["Glameow", "Glameow-Unova"],
	},
	glameowunova: {
		num: 431,
		name: "Glameow-Unova",
		baseSpecies: "Glameow",
		forme: "Unova",
		types: ["Normal", "Fairy"],
		genderRatio: {M: 0.25, F: 0.75},
		baseStats: {hp: 49, atk: 55, def: 42, spa: 42, spd: 37, spe: 85},
		abilities: {0: "Limber", 1: "Own Tempo", H: "Magic Guard"},
		heightm: 0.5,
		weightkg: 3.9,
		color: "Gray",
		evos: ["Purugly"],
		eggGroups: ["Field"],
	},
	purugly: {
		inherit: true,
		otherFormes: ["Purugly-Unova"],
		formeOrder: ["Purugly", "Purugly-Unova"],
	},
	puruglyunova: {
		num: 432,
		name: "Purugly-Unova",
		baseSpecies: "Purugly",
		forme: "Unova",
		types: ["Normal", "Fairy"],
		genderRatio: {M: 0.25, F: 0.75},
		baseStats: {hp: 71, atk: 92, def: 64, spa: 54, spd: 59, spe: 112},
		abilities: {0: "Thick Fat", 1: "Tinted Lens", H: "Magic Guard"},
		heightm: 1.05,
		weightkg: 54.4,
		color: "Gray",
		prevo: "Glameow-Unova",
		evoLevel: 38,
		eggGroups: ["Field"],
		evos: ["Purrfect"],
	},
	purrfect: {
		num: -20,
		name: "Purrfect",
		types: ["Normal", "Fairy"],
		genderRatio: {M: 0.25, F: 0.75},
		baseStats: {hp: 101, atk: 122, def: 74, spa: 60, spd: 101, spe: 72},
		abilities: {0: "Thick Fat", 1: "Tinted Lens", H: "Magic Guard"},
		heightm: 3,
		weightkg: 89.41,
		color: "Gray",
		prevo: "Purugly-Unova",
		eggGroups: ["Field"],
	},

	// Kalos Dex
	// Alola Dex

	drifloonalola: {
		num: 425,
		name: "Drifloon-Alola",
		baseSpecies: "Drifloon",
		forme: "Alola",
		types: ["Water", "Ghost"],
		baseStats: {hp: 100, atk: 75, def: 44, spa: 40, spd: 34, spe: 65},
		abilities: {0: "Cursed Body", 1: "Water Veil", H: "Immunity"},
		heightm: 0.4,
		weightkg: 1.2,
		color: "Purple",
		evos: ["Drifblim-Alola"],
		eggGroups: ["Amorphous"],
	},
	drifblimalola: {
		num: 426,
		name: "Drifblim-Alola",
		baseSpecies: "Drifblim",
		forme: "Alola",
		types: ["Water", "Ghost"],
		baseStats: {hp: 140, atk: 100, def: 64, spa: 65, spd: 64, spe: 75},
		abilities: {0: "Cursed Body", 1: "Water Veil", H: "Immunity"},
		heightm: 1.2,
		weightkg: 15,
		color: "Purple",
		prevo: "Drifloon-Alola",
		evoLevel: 28,
		evos: ["Yachtergeist"],
		eggGroups: ["Amorphous"],
	},
	yachtergeist: {
		num: -21,
		name: "Yachtergeist",
		types: ["Water", "Ghost"],
		baseStats: {hp: 165, atk: 107, def: 84, spa: 60, spd: 64, spe: 65},
		abilities: {0: "Swift Swim", 1: "Water Veil", H: "Steam Engine"},
		heightm: 1.2,
		weightkg: 581.6,
		color: "Purple",
		prevo: "Drifblim-Alola",
		eggGroups: ["Amorphous"],
	},

	// Galar Dex
	
	rotom: {
		inherit: true,
		otherFormes: ["Rotom-Galar"],
		formeOrder: ["Rotom", "Rotom-Galar"],
	},
	rotomgalar: {
		num: 479,
		name: "Rotom-Galar",
		baseSpecies: "Rotom",
		forme: "Galar",
		types: ["Ghost"],
		gender: "N",
		baseStats: {hp: 50, atk: 50, def: 77, spa: 95, spd: 77, spe: 91},
		abilities: {0: "Levitate"},
		heightm: 0.25,
		weightkg: 0.3,
		color: "Red",
		eggGroups: ["Amorphous"],
		evos: ["Rotomoire"],
	},
	rotomoire: {
		num: -2,
		name: "Rotomoire",
		types: ["Ghost", "Psychic"],
		gender: "N",
		baseStats: {hp: 65, atk: 60, def: 84, spa: 107, spd: 100, spe: 104},
		abilities: {0: "Protean"},
		heightm: 0.5,
		weightkg: 5,
		color: "Red",
		prevo: "Rotom-Galar",
		evoType: "levelHold",
		evoItem: "Grimoire",
		eggGroups: ["Amorphous"],
	},
	buneary: {
		inherit: true,
		otherFormes: ["Buneary-Galar"],
		formeOrder: ["Buneary", "Buneary-Galar"],
	},
	bunearygalar: {
		num: 427,
		name: "Buneary-Galar",
		baseSpecies: "Buneary",
		forme: "Galar",
		types: ["Fairy"],
		baseStats: {hp: 55, atk: 66, def: 44, spa: 44, spd: 56, spe: 85},
		abilities: {0: "Klutz", 1: "Cute Charm", H: "Dazzling"},
		heightm: 0.5,
		weightkg: 4,
		color: "Brown",
		evos: ["Lopunny-Galar"],
		eggGroups: ["Field", "Human-Like"],
	},
	lopunny: {
		inherit: true,
		otherFormes: ["Lopunny-Galar"],
		formeOrder: ["Lopunny", "Lopunny-Galar"],
	},
	lopunnygalar: {
		num: 428,
		name: "Lopunny-Galar",
		baseSpecies: "Lopunny",
		forme: "Galar",
		types: ["Fairy"],
		baseStats: {hp: 65, atk: 86, def: 84, spa: 54, spd: 86, spe: 105},
		abilities: {0: "Sweet Veil", 1: "Cute Charm", H: "Dazzling"},
		heightm: 1.5,
		weightkg: 25,
		color: "Brown",
		prevo: "Buneary-Galar",
		evoType: "levelFriendship",
		eggGroups: ["Field", "Human-Like"],
		evos: ["Chroncony"],
	},
	chroncony: {
		num: -3,
		name: "Chroncony",
		types: ["Fairy", "Electric"],
		baseStats: {hp: 75, atk: 106, def: 84, spa: 54, spd: 86, spe: 115},
		abilities: {0: "Galvanize", 1: "Cute Charm", H: "Dazzling"},
		heightm: 1.3,
		weightkg: 28.3,
		color: "Brown",
		eggGroups: ["Field", "Human-Like"],
		prevo: "Lopunny-Galar",
		evoType: "useItem",
		evoItem: "Thunder Stone",
	},

	// Paldea Dex

	skiddo: {
		inherit: true,
		otherFormes: ["Skiddo-Paldea"],
		formeOrder: ["Skiddo", "Skiddo-Paldea"],
	},
	skiddopaldea: {
		num: 672,
		name: "Skiddo-Paldea",
		baseSpecies: "Skiddo",
		forme: "Paldea",
		types: ["Grass", "Water"],
		baseStats: {hp: 66, atk: 60, def: 55, spa: 67, spd: 57, spe: 45},
		abilities: {0: "Swift Swim", H: "Grass Pelt"},
		heightm: 0.9,
		weightkg: 34,
		color: "Brown",
		evos: ["Machara"],
		eggGroups: ["Field"],
	},
	machara: {
		num: -4,
		name: "Machara",
		types: ["Grass", "Water"],
		baseStats: {hp: 123, atk: 95, def: 69, spa: 102, spd: 81, spe: 61},
		abilities: {0: "Swift Swim", H: "Grass Pelt"},
		heightm: 1.7,
		weightkg: 107,
		color: "Brown",
		prevo: "Skiddo-Paldea",
		evoLevel: 32,
		eggGroups: ["Field"],
	},

	// Kitakami Dex

	wimpod: {
		inherit: true,
		otherFormes: ["Wimpod-Kitakami"],
		formeOrder: ["Wimpod", "Wimpod-Kitakami"],
	},
	wimpodkitakami: {
		num: 767,
		name: "Wimpod-Kitakami",
		baseSpecies: "Wimpod",
		forme: "Kitakami",
		types: ["Bug", "Ground"],
		baseStats: {hp: 40, atk: 35, def: 30, spa: 20, spd: 80, spe: 30},
		abilities: {0: "Dry Skin", H: "Tough Claws"},
		heightm: 2.1,
		weightkg: 79.5,
		color: "Gray",
		evos: ["Golisargil"],
		eggGroups: ["Bug", "Water 3"],
	},
	golisargil: {
		num: -5,
		name: "Golisargil",
		types: ["Bug", "Ground"],
		baseStats: {hp: 75, atk: 125, def: 65, spa: 45, spd: 140, spe: 90},
		abilities: {0: "Dry Skin", H: "Rattled"},
		heightm: 0.6,
		weightkg: 280,
		color: "Gray",
		prevo: "Wimpod",
		evoLevel: 30,
		eggGroups: ["Bug", "Water 3"],
	},

	// Orre Dex
	
	gossifleur: {
		inherit: true,
		otherFormes: ["Gossifleur-Orre"],
		formeOrder: ["Gossifleur", "Gossifleur-Orre"],
	},
	gossifleurorre: {
		num: 829,
		name: "Gossifleur-Orre",
		baseSpecies: "Gossifleur",
		forme: "Orre",
		types: ["Fairy"],
		baseStats: {hp: 40, atk: 60, def: 40, spa: 60, spd: 40, spe: 10},
		abilities: {0: "Contrary", 1: "Regenerator", H: "Intimidate"},
		heightm: 0.4,
		weightkg: 2.2,
		color: "Green",
		evos: ["Eldegoss-Orre"],
		eggGroups: ["Grass"],
	},
	eldegoss: {
		inherit: true,
		otherFormes: ["Eldegoss-Orre"],
		formeOrder: ["Eldegoss", "Wimpod-Orre"],
	},
	eldegossorre: {
		num: 830,
		name: "Eldegoss-Orre",
		baseSpecies: "Eldegoss",
		forme: "Orre",
		types: ["Fairy", "Dark"],
		baseStats: {hp: 60, atk: 120, def: 50, spa: 90, spd: 80, spe: 60},
		abilities: {0: "Contrary", 1: "Regenerator", H: "Intimidate"},
		heightm: 0.5,
		weightkg: 2.5,
		color: "Green",
		prevo: "Gossifleur-Orre",
		evoLevel: 20,
		eggGroups: ["Grass"],
		evos: ["Eldegoth"],
	},
	eldegoth: {
		num: -6,
		name: "Eldegoth",
		types: ["Fairy", "Dark"],
		baseStats: {hp: 85, atk: 120, def: 55, spa: 130, spd: 70, spe: 70},
		abilities: {0: "Contrary", 1: "Regenerator", H: "Intimidate"},
		heightm: 0.5,
		weightkg: 17.5,
		color: "Green",
		prevo: "Eldegoss-Orre",
		evoLevel: 36,
		eggGroups: ["Grass"],
	},
	skarmory: {
		inherit: true,
		otherFormes: ["Skarmory-Orre"],
		formeOrder: ["Skarmory", "Skarmory-Orre"],
	},
	skarmoryorre: {
		num: 227,
		name: "Skarmory-Orre",
		baseSpecies: "Skarmory",
		forme: "Orre",
		types: ["Steel", "Fighting"],
		baseStats: {hp: 65, atk: 100, def: 100, spa: 40, spd: 70, spe: 90},
		abilities: {0: "Battle Armor", 1: "Sturdy", H: "Aerodynamic"},
		heightm: 1.07,
		weightkg: 50.5,
		color: "Gray",
		eggGroups: ["Flying"],
		evos: ["Skarocious"],
	},
	skarocious: {
		num: -7,
		name: "Skarocious",
		types: ["Steel", "Fighting"],
		baseStats: {hp: 65, atk: 120, def: 140, spa: 40, spd: 70, spe: 90},
		abilities: {0: "Battle Armor", 1: "Sturdy", H: "Aerodynamic"},
		heightm: 2.5,
		weightkg: 270,
		color: "Gray",
		eggGroups: ["Flying"],
		prevo: "Skarmory-Orre",
		evoType: "levelHold",
		evoItem: "Fossile",
	},
	feebas: {
		inherit: true,
		otherFormes: ["Feebas-Orre"],
		formeOrder: ["Feebas", "Feebas-Orre"],
	},
	feebasorre: {
		num: 349,
		name: "Feebas-Orre",
		baseSpecies: "Feebas",
		forme: "Orre",
		types: ["Dragon"],
		baseStats: {hp: 20, atk: 15, def: 40, spa: 10, spd: 75, spe: 40},
		abilities: {0: "Water Veil", 1: "Heatproof", H: "Adaptability"},
		heightm: 0.4,
		weightkg: 4,
		color: "Brown",
		evos: ["Quetzalucid"],
		eggGroups: ["Water 1", "Dragon"],
	},
	quetzalucid: {
		num: -8,
		name: "Quetzalucid",
		types: ["Dragon", "Flying"],
		baseStats: {hp: 95, atk: 100, def: 60, spa: 100, spd: 60, spe: 125},
		abilities: {0: "Dazzling", 1: "Flash Fire", H: "Magic Guard"},
		heightm: 5.5,
		weightkg: 132,
		color: "Pink",
		prevo: "Feebas-Orre",
		evoType: "useItem",
		evoItem: "Dawn Stone",
		eggGroups: ["Water 1", "Dragon"],
	},
	hoothoot: {
		inherit: true,
		otherFormes: ["Hoothoot-Orre"],
		formeOrder: ["Hoothoot", "Hoothoot-Orre"],
	},
	hoothootorre: {
		num: 163,
		name: "Hoothoot-Orre",
		baseSpecies: "Hoothoot",
		forme: "Orre",
		types: ["Ground", "Flying"],
		baseStats: {hp: 60, atk: 33, def: 50, spa: 33, spd: 56, spe: 30},
		abilities: {0: "Harvest", 1: "Keen Eye", H: "Tinted Lens"},
		heightm: 1.1,
		weightkg: 80.0,
		color: "Brown",
		evos: ["Noctowl-Orre"],
		eggGroups: ["Flying"],
	},
	noctowl: {
		inherit: true,
		otherFormes: ["Noctowl-Orre"],
		formeOrder: ["Noctowl", "Noctowl-Orre"],
	},
	noctowlorre: {
		num: 164,
		name: "Noctowl-Orre",
		baseSpecies: "Noctowl",
		forme: "Orre",
		types: ["Ground", "Flying"],
		baseStats: {hp: 100, atk: 55, def: 96, spa: 55, spd: 96, spe: 50},
		abilities: {0: "Harvest", 1: "Keen Eye", H: "Tinted Lens"},
		heightm: 1.6,
		weightkg: 40.8,
		color: "Brown",
		prevo: "Hoothoot-Orre",
		evoLevel: 20,
		eggGroups: ["Flying"],
		evos: ["Archathene"],
	},
	archathene: {
		num: -16,
		name: "Archathene",
		types: ["Ground", "Fairy"],
		baseStats: {hp: 100, atk: 85, def: 96, spa: 85, spd: 96, spe: 60},
		abilities: {0: "Harvest", 1: "Keen Eye", H: "Tinted Lens"},
		heightm: 1.78,
		weightkg: 113.4,
		color: "Brown",
		prevo: "Noctowl-Orre",
		eggGroups: ["Flying"],
	},
	poliwag: {
		inherit: true,
		evos: ["Poliwhirl", "Poliwhirl-Orre"],
	},
	poliwhirl: {
		inherit: true,
		otherFormes: ["Poliwhirl-Orre"],
		formeOrder: ["Poliwhirl", "Poliwhirl-Orre"],
	},
	poliwhirlorre: {
		num: 61,
		name: "Poliwhirl-Orre",
		baseSpecies: "Poliwhirl",
		forme: "Orre",
		types: ["Water", "Rock"],
		baseStats: {hp: 75, atk: 75, def: 65, spa: 40, spd: 40, spe: 90},
		abilities: {0: "Earth Eater", 1: "Damp", H: "Sand Stream"},
		heightm: 1.1,
		weightkg: 32,
		color: "Blue",
		prevo: "Poliwag",
		evoLevel: 25,
		evos: ["Poliorre"],
		eggGroups: ["Water 1"],
	},
	poliorre: {
		num: -17,
		name: "Poliorre",
		types: ["Water", "Rock"],
		baseStats: {hp: 100, atk: 105, def: 95, spa: 60, spd: 80, spe: 70},
		abilities: {0: "Earth Eater", 1: "Damp", H: "Sand Stream"},
		heightm: 1.3,
		weightkg: 68.9,
		color: "Blue",
		prevo: "Poliwhirl-Orre",
		evoType: "useItem",
		evoItem: "Water Stone",
		eggGroups: ["Water 1"],
	},

	// Distortion World Dex
	tadbulb: {
		inherit: true,
		otherFormes: ["Tadbulb-Distorted"],
		formeOrder: ["Tadbulb", "Tadbulb-Distorted"],
	},
	tadbulbdistorted: {
		num: 938,
		name: "Tadbulb-Distorted",
		baseSpecies: "Tadbulb",
		forme: "Distorted",
		types: ["Poison", "Ground"],
		baseStats: {hp: 61, atk: 31, def: 41, spa: 59, spd: 35, spe: 45},
		abilities: {0: "Own Tempo", 1: "Unaware", H: "Damp"},
		heightm: 0.3,
		weightkg: 0.4,
		color: "Yellow",
		evos: ["Bellitoxin"],
		eggGroups: ["Water 1"],
	},
	bellitoxin: {
		num: -25,
		name: "Bellitoxin",
		types: ["Poison", "Ground"],
		baseStats: {hp: 109, atk: 100, def: 98, spa: 60, spd: 83, spe: 45},
		abilities: {0: "Poison Point", 1: "Unaware", H: "Damp"},
		heightm: 1.2,
		weightkg: 60,
		color: "Green",
		prevo: "Tadbulb-Distorted",
		evoType: "useItem",
		evoItem: "Thunder Stone",
		eggGroups: ["Water 1"],
	},

	// Ultra Space Dex

	snubbull: {
		inherit: true,
		otherFormes: ["Snubbull-Ultra"],
		formeOrder: ["Snubbull", "Snubbull-Ultra"],
	},
	snubbullultra: {
		num: 209,
		name: "Snubbull-Ultra",
		baseSpecies: "Snubbull",
		forme: "Ultra",
		types: ["Dark", "Normal"],
		genderRatio: {M: 0.25, F: 0.75},
		baseStats: {hp: 60, atk: 80, def: 50, spa: 40, spd: 40, spe: 30},
		abilities: {0: "Beast Boost"},
		heightm: 0.6,
		weightkg: 7.8,
		color: "Pink",
		evos: ["Granbull"],
		eggGroups: ["Field", "Fairy"],
	},
	granbull: {
		inherit: true,
		otherFormes: ["Granbull-Ultra"],
		formeOrder: ["Granbull", "Granbull-Ultra"],
	},
	granbullultra: {
		num: 210,
		name: "Granbull-Ultra",
		baseSpecies: "Granbull",
		forme: "Ultra",
		types: ["Dark", "Normal"],
		genderRatio: {M: 0.25, F: 0.75},
		baseStats: {hp: 90, atk: 60, def: 60, spa: 120, spd: 75, spe: 45},
		abilities: {0: "Beast Boost"},
		heightm: 1.4,
		weightkg: 48.7,
		color: "Purple",
		prevo: "Snubbull-Ultra",
		evoLevel: 23,
		eggGroups: ["Field", "Fairy"],
		evos: ["Blancbull"],
	},
	blancbull: {
		num: -9,
		name: "Blancbull",
		types: ["Dark", "Poison"],
		genderRatio: {M: 0.25, F: 0.75},
		baseStats: {hp: 90, atk: 60, def: 73, spa: 120, spd: 113, spe: 101},
		abilities: {0: "Beast Boost"},
		heightm: 1.4,
		weightkg: 48.7,
		color: "Purple",
		prevo: "Granbull-Ultra",
		evoType: "levelMove",
		evoMove: "Toxic",
		eggGroups: ["Field", "Fairy"],
	},
	emolga: {
		inherit: true,
		otherFormes: ["Emolga-Ultra"],
		formeOrder: ["Emolga", "Emolga-Ultra"],
	},
	emolgaultra: {
		num: 587,
		name: "Emolga-Ultra",
		baseSpecies: "Emolga",
		forme: "Ultra",
		types: ["Electric", "Poison"],
		baseStats: {hp: 55, atk: 95, def: 60, spa: 55, spd: 60, spe: 103},
		abilities: {0: "Frenzy Virus", H: "Regenerator"},
		heightm: 0.4,
		weightkg: 5,
		color: "White",
		eggGroups: ["Field"],
		evos: ["Jinrolga"],
	},
	jinrolga: {
		num: -22,
		name: "Jinrolga",
		types: ["Electric", "Poison"],
		baseStats: {hp: 75, atk: 115, def: 70, spa: 75, spd: 70, spe: 103},
		abilities: {0: "Frenzy Virus", H: "Regenerator"},
		heightm: 0.91,
		weightkg: 26.39,
		color: "White",
		eggGroups: ["Field"],
		prevo: "Emolga-Ultra",
	},

	// Paradox Dex

	stufful: {
		inherit: true,
		otherFormes: ["Stufful-Ancient"],
		formeOrder: ["Stufful", "Stufful-Ancient"],
	},
	stuffulancient: {
		num: 759,
		name: "Stufful-Ancient",
		baseSpecies: "Stufful",
		forme: "Ancient",
		types: ["Dark"],
		baseStats: {hp: 70, atk: 75, def: 65, spa: 35, spd: 50, spe: 45},
		abilities: {0: "Fluffy", 1: "Strong Jaw", H: "Intimidate"},
		heightm: 0.6,
		weightkg: 9.1,
		color: "Pink",
		evos: ["Inciscyon"],
		eggGroups: ["Field"],
	},
	inciscyon: {
		num: -10,
		name: "Inciscyon",
		types: ["Dark"],
		baseStats: {hp: 120, atk: 125, def: 95, spa: 45, spd: 60, spe: 55},
		abilities: {0: "Fluffy", 1: "Strong Jaw", H: "Intimidate"},
		heightm: 2.05,
		weightkg: 59,
		color: "Pink",
		prevo: "Stufful-Ancient",
		evoLevel: 27,
		eggGroups: ["Field"],
	},

	// Lental Dex

	lickitung: {
		inherit: true,
		evos: ["Lickilicky", "Lickilicky-Lental"],
	},
	lickilicky: {
		inherit: true,
		otherFormes: ["Lickilicky-Lental"],
		formeOrder: ["Lickilicky", "Lickilicky-Lental"],
	},
	lickilickylental: {
		num: 463,
		name: "Lickilicky-Lental",
		baseSpecies: "Lickilicky",
		forme: "Lental",
		types: ["Normal", "Dragon"],
		baseStats: {hp: 110, atk: 95, def: 85, spa: 50, spd: 95, spe: 80},
		abilities: {0: "Own Tempo", 1: "Sand Rush", H: "Cloud Nine"},
		heightm: 1.7,
		weightkg: 140,
		color: "Pink",
		prevo: "Lickitung",
		evoType: "levelMove",
		evoMove: "Rollout",
		eggGroups: ["Monster"],
		evos: ["Anolicky"],
	},
	anolicky: {
		num: -23,
		name: "Anolicky",
		types: ["Normal", "Dragon"],
		baseStats: {hp: 110, atk: 110, def: 75, spa: 50, spd: 100, spe: 103},
		abilities: {0: "Unburden", 1: "Sand Rush", H: "Cloud Nine"},
		heightm: 1.7,
		weightkg: 64.6,
		color: "Pink",
		prevo: "Lickilicky-Lental",
		evoType: "levelMove",
		evoMove: "Rollout",
		eggGroups: ["Monster"],
	},
};
