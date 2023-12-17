export const Pokedex: {[speciesid: string]: ModdedSpeciesData} = {
	emboar: {
		inherit: true,
		otherFormes: ["Emboar-Storm", "Emboar-Metal", "Emboar-Frostbite", "Emboar-Storm-Tera", "Emboar-Metal-Tera", "Emboar-Frostbite-Tera"],
		formeOrder: ["Emboar", "Emboar-Storm", "Emboar-Metal", "Emboar-Frostbite", "Emboar-Storm-Tera", "Emboar-Metal-Tera", "Emboar-Frostbite-Tera"],
		forceTeraType: "Fire",
	},
	emboarstorm: {
		num: 500,
		name: "Emboar-Storm",
		baseSpecies: "Emboar",
		forme: "Storm",
		types: ["Fire", "Electric"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 110, atk: 123, def: 65, spa: 100, spd: 65, spe: 65},
		abilities: {0: "Speed Boost"},
		heightm: 1.6,
		weightkg: 150,
		color: "Yellow",
		eggGroups: ["Field"],
		requiredItem: "Storm Mask",
		changesFrom: "Emboar",
		forceTeraType: "Electric",
	},
	emboarmetal: {
		num: 500,
		name: "Emboar-Metal",
		baseSpecies: "Emboar",
		forme: "Metal",
		types: ["Fire", "Steel"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 110, atk: 123, def: 65, spa: 100, spd: 65, spe: 65},
		abilities: {0: "Fur Coat"},
		heightm: 1.6,
		weightkg: 150,
		color: "Gray",
		eggGroups: ["Field"],
		requiredItem: "Metal Mask",
		changesFrom: "Emboar",
		forceTeraType: "Steel",
	},
	emboarfrostbite: {
		num: 500,
		name: "Emboar-Frostbite",
		baseSpecies: "Emboar",
		forme: "Frostbite",
		types: ["Fire", "Ice"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 110, atk: 123, def: 65, spa: 100, spd: 65, spe: 65},
		abilities: {0: "Magic Guard"},
		heightm: 1.6,
		weightkg: 150,
		color: "Blue",
		eggGroups: ["Field"],
		requiredItem: "Frostbite Mask",
		changesFrom: "Emboar",
		forceTeraType: "Ice",
	},
	emboarstormtera: {
		num: 500,
		name: "Emboar-Storm-Tera",
		baseSpecies: "Emboar",
		forme: "Storm-Tera",
		types: ["Fire", "Electric"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 110, atk: 123, def: 65, spa: 100, spd: 65, spe: 65},
		abilities: {0: "No Guard"},
		heightm: 1.6,
		weightkg: 150,
		color: "Yellow",
		eggGroups: ["Field"],
		requiredItem: "Storm Mask",
		battleOnly: "Emboar-Storm",
		forceTeraType: "Electric",
	},
	emboarmetaltera: {
		num: 500,
		name: "Emboar-Metal-Tera",
		baseSpecies: "Emboar",
		forme: "Metal-Tera",
		types: ["Fire", "Steel"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 110, atk: 123, def: 65, spa: 100, spd: 65, spe: 65},
		abilities: {0: "Sheer Force"},
		heightm: 1.6,
		weightkg: 150,
		color: "Gray",
		eggGroups: ["Field"],
		requiredItem: "Metal Mask",
		battleOnly: "Emboar-Metal",
		forceTeraType: "Steel",
	},
	emboarfrostbitetera: {
		num: 500,
		name: "Emboar-Frostbite-Tera",
		baseSpecies: "Emboar",
		forme: "Frostbite-Tera",
		types: ["Fire", "Ice"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 110, atk: 123, def: 65, spa: 100, spd: 65, spe: 65},
		abilities: {0: "Parental Bond"},
		heightm: 1.6,
		weightkg: 150,
		color: "Blue",
		eggGroups: ["Field"],
		requiredItem: "Frostbite Mask",
		battleOnly: "Emboar-Frostbite",
		forceTeraType: "Ice",
	},
	delphox: {
		inherit: true,
		otherFormes: ["Delphox-Oracle", "Delphox-Oracle-Tera"],
		formeOrder: ["Delphox", "Delphox-Oracle", "Delphox-Oracle-Tera"],
		forceTeraType: "Fire",
	},
	delphoxoracle: {
		num: 655,
		name: "Delphox-Oracle",
		baseSpecies: "Delphox",
		forme: "Oracle",
		types: ["Fire", "Fairy"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 75, atk: 69, def: 72, spa: 114, spd: 100, spe: 104},
		abilities: {0: "Soul-Heart"},
		heightm: 1.5,
		weightkg: 39,
		color: "Pink",
		requiredItem: "Oracle Mask",
		changesFrom: "Delphox",
		forceTeraType: "Fairy",
	},
	delphoxoracletera: {
		num: 655,
		name: "Delphox-Oracle-Tera",
		baseSpecies: "Delphox",
		forme: "Oracle-Tera",
		types: ["Fire", "Fairy"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 75, atk: 69, def: 72, spa: 114, spd: 100, spe: 104},
		abilities: {0: "Neuroforce"},
		heightm: 1.5,
		weightkg: 39,
		color: "Pink",
		requiredItem: "Oracle Mask",
		battleOnly: "Delphox-Oracle",
		forceTeraType: "Fairy",
	},
	swampert: {
		inherit: true,
		otherFormes: ["Swampert-Lakelurker", "Swampert-Lakelurker-Tera"],
		formeOrder: ["Swampert", "Swampert-Lakelurker", "Swampert-Lakelurker-Tera"],
		forceTeraType: "Water",
	},
	swampertlakelurker: {
		num: 260,
		name: "Swampert-Lakelurker",
		baseSpecies: "Swampert",
		forme: "Lakelurker",
		types: ["Water", "Dragon"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 100, atk: 110, def: 90, spa: 85, spd: 90, spe: 60},
		abilities: {0: "Water Absorb"},
		heightm: 1.5,
		weightkg: 81.9,
		color: "Blue",
		requiredItem: "Lakelurker Mask",
		changesFrom: "Swampert",
		forceTeraType: "Dragon",
	},
	swampertlakelurkertera: {
		num: 260,
		name: "Swampert-Lakelurker-Tera",
		baseSpecies: "Swampert",
		forme: "Lakelurker-Tera",
		types: ["Water", "Dragon"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 100, atk: 110, def: 90, spa: 85, spd: 90, spe: 60},
		abilities: {0: "Regenerator"},
		heightm: 1.5,
		weightkg: 81.9,
		color: "Blue",
		requiredItem: "Lakelurker Mask",
		battleOnly: "Swampert-Lakelurker",
		forceTeraType: "Dragon",
	},
	chesnaught: {
		inherit: true,
		otherFormes: ["Chesnaught-Armored", "Chesnaught-Armored-Tera"],
		formeOrder: ["Chesnaught", "Chesnaught-Armored", "Chesnaught-Armored-Tera"],
		forceTeraType: "Grass",
	},
	chesnaughtarmored: {
		num: 652,
		name: "Chesnaught-Armored",
		baseSpecies: "Chesnaught",
		forme: "Armored",
		types: ["Grass", "Steel"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 88, atk: 107, def: 122, spa: 74, spd: 75, spe: 64},
		abilities: {0: "Battle Armor"},
		heightm: 1.6,
		weightkg: 90,
		color: "Gray",
		requiredItem: "Armored Mask",
		changesFrom: "Chesnaught",
		forceTeraType: "Steel",
	},
	chesnaughtarmoredtera: {
		num: 652,
		name: "Chesnaught-Armored-Tera",
		baseSpecies: "Chesnaught",
		forme: "Armored-Tera",
		types: ["Grass", "Steel"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 88, atk: 107, def: 122, spa: 74, spd: 75, spe: 64},
		abilities: {0: "Heatproof"},
		heightm: 1.6,
		weightkg: 90,
		color: "Gray",
		requiredItem: "Armored Mask",
		battleOnly: "Chesnaught-Armored",
		forceTeraType: "Steel",
	},
	boltund: {
		inherit: true,
		otherFormes: ["Boltund-Cold", "Boltund-Lights", "Boltund-Crash", "Boltund-Cold-Tera", "Boltund-Lights-Tera", "Boltund-Crash-Tera"],
		formeOrder: ["Boltund", "Boltund-Cold", "Boltund-Lights", "Boltund-Crash", "Boltund-Cold-Tera", "Boltund-Lights-Tera", "Boltund-Crash-Tera"],
		forceTeraType: "Electric",
	},
	boltundcold: {
		num: 836,
		name: "Boltund-Cold",
		baseSpecies: "Boltund",
		forme: "Cold",
		types: ["Electric", "Ice"],
		baseStats: {hp: 69, atk: 90, def: 60, spa: 90, spd: 60, spe: 121},
		abilities: {0: "Mountaineer"},
		heightm: 1,
		weightkg: 34,
		color: "Blue",
		requiredItem: "Cold Mask",
		changesFrom: "Boltund",
		forceTeraType: "Ice",
	},
	boltundcoldtera: {
		num: 836,
		name: "Boltund-Cold-Tera",
		baseSpecies: "Boltund",
		forme: "Cold-Tera",
		types: ["Electric", "Ice"],
		baseStats: {hp: 69, atk: 90, def: 60, spa: 90, spd: 60, spe: 121},
		abilities: {0: "Tough Claws"},
		heightm: 1,
		weightkg: 34,
		color: "Blue",
		requiredItem: "Cold Mask",
		battleOnly: "Boltund-Cold",
		forceTeraType: "Ice",
	},
	boltundlights: {
		num: 836,
		name: "Boltund-Lights",
		baseSpecies: "Boltund",
		forme: "Lights",
		types: ["Electric", "Fairy"],
		baseStats: {hp: 69, atk: 90, def: 60, spa: 90, spd: 60, spe: 121},
		abilities: {0: "Magic Bounce"},
		heightm: 1,
		weightkg: 34,
		color: "Pink",
		eggGroups: ["Field"],
		requiredItem: "Lights Mask",
		changesFrom: "Boltund",
		forceTeraType: "Fairy",
	},
  boltundlightstera: {
		num: 836,
		name: "Boltund-Lights-Tera",
		baseSpecies: "Boltund",
		forme: "Lights-Tera",
		types: ["Electric", "Fairy"],
		baseStats: {hp: 69, atk: 90, def: 60, spa: 90, spd: 60, spe: 121},
		abilities: {0: "Dazzling"},
		heightm: 1,
		weightkg: 34,
		color: "Pink",
		requiredItem: "Lights Mask",
		battleOnly: "Boltund-Lights",
		forceTeraType: "Fairy",
	},
	boltundcrash: {
		num: 836,
		name: "Boltund-Crash",
		baseSpecies: "Boltund",
		forme: "Crash",
		types: ["Electric", "Fighting"],
		baseStats: {hp: 69, atk: 90, def: 60, spa: 90, spd: 60, spe: 121},
		abilities: {0: "Screen Cleaner"},
		heightm: 1,
		weightkg: 34,
		color: "Brown",
		eggGroups: ["Field"],
		requiredItem: "Crash Mask",
		changesFrom: "Boltund",
		forceTeraType: "Fighting",
	},
  boltundcrashtera: {
		num: 836,
		name: "Boltund-Crash-Tera",
		baseSpecies: "Boltund",
		forme: "Crash-Tera",
		types: ["Electric", "Fighting"],
		baseStats: {hp: 69, atk: 90, def: 60, spa: 90, spd: 60, spe: 121},
		abilities: {0: "Guts"},
		heightm: 1,
		weightkg: 34,
		color: "Brown",
		requiredItem: "Crash Mask",
		battleOnly: "Boltund-Crash",
		forceTeraType: "Fighting",
	},
	gardevoir: {
		inherit: true,
		otherFormes: ["Gardevoir-Mega", "Gardevoir-Sandshroud", "Gardevoir-Blightbent", "Gardevoir-All-Ice", "Gardevoir-Sandshroud-Tera", "Gardevoir-Blightbent-Tera", "Gardevoir-All-Ice-Tera"],
		formeOrder: ["Gardevoir", "Gardevoir-Mega", "Gardevoir-Sandshroud", "Gardevoir-Blightbent", "Gardevoir-Crash", "Gardevoir-Sandshroud-Tera", "Gardevoir-Blightbent-Tera", "Gardevoir-All-Ice-Tera"],
		forceTeraType: "Psychic",
	},
	gardevoirsandshroud: {
		num: 282,
		name: "Gardevoir-Sandshroud",
		baseSpecies: "Gardevoir",
		forme: "Sandshroud",
		types: ["Psychic", "Ground"],
		baseStats: {hp: 68, atk: 65, def: 65, spa: 125, spd: 115, spe: 80},
		abilities: {0: "Dry Skin"},
		heightm: 1.6,
		weightkg: 48.4,
		color: "Brown",
		requiredItem: "Sandshroud Mask",
		changesFrom: "Gardevoir",
		forceTeraType: "Ground",
	},
  gardevoirsandshroudtera: {
		num: 282,
		name: "Gardevoir-Sandshroud-Tera",
		baseSpecies: "Gardevoir",
		forme: "Sandshroud-Tera",
		types: ["Psychic", "Ground"],
		baseStats: {hp: 68, atk: 65, def: 65, spa: 125, spd: 115, spe: 80},
		abilities: {0: "Sand Stream"},
		heightm: 1.6,
		weightkg: 48.4,
		color: "Brown",
		requiredItem: "Sandshroud Mask",
		battleOnly: "Gardevoir-Sandshroud",
		forceTeraType: "Ground",
	},
	gardevoirblightbent: {
		num: 282,
		name: "Gardevoir-Blightbent",
		baseSpecies: "Gardevoir",
		forme: "Blightbent",
		types: ["Psychic", "Poison"],
		baseStats: {hp: 68, atk: 65, def: 65, spa: 125, spd: 115, spe: 80},
		abilities: {0: "Poison Point"},
		heightm: 1.6,
		weightkg: 48.4,
		color: "Purple",
		requiredItem: "Blightbent Mask",
		changesFrom: "Gardevoir",
		forceTeraType: "Poison",
	},
  gardevoirblightbenttera: {
		num: 282,
		name: "Gardevoir-Blightbent-Tera",
		baseSpecies: "Gardevoir",
		forme: "Blightbent-Tera",
		types: ["Psychic", "Poison"],
		baseStats: {hp: 68, atk: 65, def: 65, spa: 125, spd: 115, spe: 80},
		abilities: {0: "Toxic Chain"},
		heightm: 1.6,
		weightkg: 48.4,
		color: "Purple",
		requiredItem: "Blightbent Mask",
		battleOnly: "Gardevoir-Blightbent",
		forceTeraType: "Poison",
	},
	gardevoirallice: {
		num: 282,
		name: "Gardevoir-All-Ice",
		baseSpecies: "Gardevoir",
		forme: "All-Ice",
		types: ["Psychic", "Ice"],
		baseStats: {hp: 68, atk: 65, def: 65, spa: 125, spd: 115, spe: 80},
		abilities: {0: "Clear Body"},
		heightm: 1.6,
		weightkg: 48.4,
		color: "Blue",
		requiredItem: "All-Ice Mask",
		changesFrom: "Gardevoir",
		forceTeraType: "Ice",
	},
  gardevoirallicetera: {
		num: 282,
		name: "Gardevoir-All-Ice-Tera",
		baseSpecies: "Gardevoir",
		forme: "All-Ice-Tera",
		types: ["Psychic", "Ice"],
		baseStats: {hp: 68, atk: 65, def: 65, spa: 125, spd: 115, spe: 80},
		abilities: {0: "Snow Warning"},
		heightm: 1.6,
		weightkg: 48.4,
		color: "Blue",
		requiredItem: "All-Ice Mask",
		battleOnly: "Gardevoir-All-Ice",
		forceTeraType: "Ice",
	},
	arboliva: {
		inherit: true,
		otherFormes: ["Arboliva-Pondweed", "Arboliva-Sundew", "Arboliva-Pondweed-Tera", "Arboliva-Sundew-Tera"],
		formeOrder: ["Arboliva", "Arboliva-Pondweed", "Arboliva-Sundew", "Arboliva-Pondweed-Tera", "Arboliva-Sundew-Tera"],
		forceTeraType: "Grass",
	},
	arbolivasundew: {
		num: 930,
		name: "Arboliva-Sundew",
		baseSpecies: "Arboliva",
		forme: "Sundew",
		types: ["Grass", "Poison"],
		baseStats: {hp: 78, atk: 69, def: 90, spa: 125, spd: 109, spe: 39},
		abilities: {0: "Effect Spore"},
		heightm: 1.4,
		weightkg: 48.2,
		color: "Purple",
		requiredItem: "Sundew Mask",
		changesFrom: "Arboliva",
		forceTeraType: "Poison",
	},
  arbolivasundewtera: {
		num: 930,
		name: "Arboliva-Sundew-Tera",
		baseSpecies: "Arboliva",
		forme: "Sundew-Tera",
		types: ["Grass", "Poison"],
		baseStats: {hp: 78, atk: 69, def: 90, spa: 125, spd: 109, spe: 39},
		abilities: {0: "Toxic Chain"},
		heightm: 1.4,
		weightkg: 48.2,
		color: "Purple",
		requiredItem: "Sundew Mask",
		battleOnly: "Arboliva-Sundew",
		forceTeraType: "Poison",
	},
	arbolivapondweed: {
		num: 930,
		name: "Arboliva-Pondweed",
		baseSpecies: "Arboliva",
		forme: "Pondweed",
		types: ["Grass", "Water"],
		baseStats: {hp: 78, atk: 69, def: 90, spa: 125, spd: 109, spe: 39},
		abilities: {0: "Overcoat"},
		heightm: 1.4,
		weightkg: 48.2,
		color: "Blue",
		requiredItem: "Pondweed Mask",
		changesFrom: "Arboliva",
		forceTeraType: "Water",
	},
  arbolivapondweedtera: {
		num: 930,
		name: "Arboliva-Pondweed-Tera",
		baseSpecies: "Arboliva",
		forme: "Pondweed-Tera",
		types: ["Grass", "Water"],
		baseStats: {hp: 78, atk: 69, def: 90, spa: 125, spd: 109, spe: 39},
		abilities: {0: "Unaware"},
		heightm: 1.4,
		weightkg: 48.2,
		color: "Blue",
		requiredItem: "Pondweed Mask",
		battleOnly: "Arboliva-Pondweed",
		forceTeraType: "Water",
	},
	corviknight: {
		inherit: true,
		otherFormes: ["Corviknight-Jet", "Corviknight-Burrowing", "Corviknight-Jet-Tera", "Corviknight-Burrowing-Tera"],
		formeOrder: ["Corviknight", "Corviknight-Jet", "Corviknight-Burrowing", "Corviknight-Jet-Tera", "Corviknight-Burrowing-Tera"],
		forceTeraType: "Flying",
	},
	corviknightjet: {
		num: 823,
		name: "Corviknight-Jet",
		baseSpecies: "Corviknight",
		forme: "Jet",
		types: ["Flying", "Fighting"],
		baseStats: {hp: 98, atk: 87, def: 105, spa: 53, spd: 85, spe: 67},
		abilities: {0: "Flash Fire"},
		heightm: 2.2,
		weightkg: 75,
		color: "Red",
		requiredItem: "Jet Mask",
		changesFrom: "Corviknight",
		forceTeraType: "Fighting",
	},
  corviknightjettera: {
		num: 930,
		name: "Corviknight-Jet-Tera",
		baseSpecies: "Corviknight",
		forme: "Jet-Tera",
		types: ["Flying", "Fighting"],
		baseStats: {hp: 98, atk: 87, def: 105, spa: 53, spd: 85, spe: 67},
		abilities: {0: "Gale Wings"},
		heightm: 2.2,
		weightkg: 75,
		color: "Red",
		requiredItem: "Jet Mask",
		battleOnly: "Corviknight-Jet",
		forceTeraType: "Fighting",
	},
	corviknightburrowing: {
		num: 823,
		name: "Corviknight-Burrowing",
		baseSpecies: "Corviknight",
		forme: "Burrowing",
		types: ["Flying", "Ground"],
		baseStats: {hp: 98, atk: 87, def: 105, spa: 53, spd: 85, spe: 67},
		abilities: {0: "Residue Cleaning"},
		heightm: 2.2,
		weightkg: 75,
		color: "Brown",
		requiredItem: "Burrowing Mask",
		changesFrom: "Corviknight",
		forceTeraType: "Ground",
	},
  corviknightburrowingtera: {
		num: 930,
		name: "Corviknight-Burrowing-Tera",
		baseSpecies: "Corviknight",
		forme: "Burrowing-Tera",
		types: ["Flying", "Ground"],
		baseStats: {hp: 98, atk: 87, def: 105, spa: 53, spd: 85, spe: 67},
		abilities: {0: "Earth Eater"},
		heightm: 2.2,
		weightkg: 75,
		color: "Brown",
		requiredItem: "Burrowing Mask",
		battleOnly: "Corviknight-Burrowing",
		forceTeraType: "Ground",
	},
};
