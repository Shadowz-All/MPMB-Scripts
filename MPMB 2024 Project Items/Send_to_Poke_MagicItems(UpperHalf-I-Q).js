MagicItemsList["instrument of the bards"] = {
	name: "Instrument of the Bards",
	source: [["D24", "-"]],
	type: "wondrous item (instrument)",
	description: "When I play this exquisite magical instrument, I can use it to cast a set of spells, each once per dawn, using my spellcasting ability and spell save DC. If I play without attuning, I must pass a DC 15 Wis save or take 2d4 Psychic damage.",
	descriptionFull: "An Instrument of the Bards is superior to an ordinary instrument in every way. Seven types of these instruments exist, each named after a bard college. The Instruments of the Bards table lists the spells common to all instruments, as well as the spells specific to each one and its rarity. A creature that attempts to play the instrument without being attuned to it must succeed on a DC 15 Wisdom saving throw or take 2d4 Psychic damage.\n   You can play the instrument to cast one of its spells. Once the instrument has been used to cast a spell, it can’t be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC.",
	attunement: true,
	weight: 3, // Magic of Faerûn (2001) page 161
	prerequisite: "Requires attunement by a bard",
	prereqeval: function (v) { return classes.known.bard ? true : false; },
	choices: ["Anstruth Harp (very rare)", "Canaith Mandolin (rare)", "Cli Lyre (rare)", "Doss Lute (uncommon)", "Fochlucan Bandore (uncommon)", "Mac-Fuirmidh Cittern (uncommon)", "Ollamh Harp (legendary)"],
	"anstruth harp (very rare)": {
		name: "Anstruth Harp [Instrument of the Bards]",
		sortname: "Instrument of the Bards, Anstruth Harp",
		rarity: "very rare",
		magicItemTable: "?",
		descriptionFull: "An Instrument of the Bards is superior to an ordinary instrument in every way. Seven types of these instruments exist, each named after a bard college. The Instruments of the Bards table lists the spells common to all instruments, as well as the spells specific to each one and its rarity. A creature that attempts to play the instrument without being attuned to it must succeed on a DC 15 Wisdom saving throw or take 2d4 Psychic damage.\n   You can play the instrument to cast one of its spells. Once the instrument has been used to cast a spell, it can’t be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC.\n   All instruments of the bards can be used to cast the following spells: Fly, Invisibility, Levitate, and Protection from Evil and Good.\n   In addition, the Anstruth harp can be used to cast Cure Wounds (5th level), Ice Storm, and Wall of Thorns.",
		spellcastingBonus: [{
			name: "Once per long rest",
			spells: ["fly", "invisibility", "levitate", "protection from evil and good", "cure wounds", "ice storm", "wall of thorns"],
			selection: ["fly", "invisibility", "levitate", "protection from evil and good", "cure wounds", "ice storm", "wall of thorns"],
			firstCol: "oncelr",
			times: 7,
			spellcastingAbility: "class"
		}],
		spellChanges: {
			"cure wounds": {
				description: "1 living creature heals 10d8+spellcasting ability modifier HP",
				changes: "When using the Anstruth Harp to cast Cure Wounds, it is cast at 5th-level."
			},
		}
	},
	"canaith mandolin (rare)": {
		name: "Canaith Mandolin [Instrument of the Bards]",
		sortname: "Instrument of the Bards, Canaith Mandolin",
		rarity: "rare",
		magicItemTable: "?",
		descriptionFull: "An Instrument of the Bards is superior to an ordinary instrument in every way. Seven types of these instruments exist, each named after a bard college. The Instruments of the Bards table lists the spells common to all instruments, as well as the spells specific to each one and its rarity. A creature that attempts to play the instrument without being attuned to it must succeed on a DC 15 Wisdom saving throw or take 2d4 Psychic damage.\n   You can play the instrument to cast one of its spells. Once the instrument has been used to cast a spell, it can’t be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC.\n   All instruments of the bards can be used to cast the following spells: Fly, Invisibility, Levitate, and Protection from Evil and Good.\n   In addition, the Canaith mandolin can be used to cast Cure Wounds (3rd level), Dispel Magic, and Protection from Energy (lightning only).",
		spellcastingBonus: [{
			name: "Once per long rest",
			spells: ["fly", "invisibility", "levitate", "protection from evil and good", "cure wounds", "dispel magic", "protection from energy"],
			selection: ["fly", "invisibility", "levitate", "protection from evil and good", "cure wounds", "dispel magic", "protection from energy"],
			firstCol: "oncelr",
			times: 7,
			spellcastingAbility: "class"
		}],
		spellChanges: {
			"cure wounds": {
				description: "1 living creature heals 6d8+spellcasting ability modifier HP",
				changes: "When using the Canaith Mandolin to cast Cure Wounds, it is cast at 3rd-level."
			},
			"protection from energy": {
				description: "1 creature gains Resistance to Lightning damage for the duration",
				changes: "When using the Canaith Mandolin to cast Protection from Energy, it can only grant Resistance to lightning damage."
			}
		}
	},
	"cli lyre (rare)": {
		name: "Cli Lyre [Instrument of the Bards]",
		sortname: "Instrument of the Bards, Cli Lyre",
		rarity: "rare",
		magicItemTable: "?",
		descriptionFull: "An Instrument of the Bards is superior to an ordinary instrument in every way. Seven types of these instruments exist, each named after a bard college. The Instruments of the Bards table lists the spells common to all instruments, as well as the spells specific to each one and its rarity. A creature that attempts to play the instrument without being attuned to it must succeed on a DC 15 Wisdom saving throw or take 2d4 Psychic damage.\n   You can play the instrument to cast one of its spells. Once the instrument has been used to cast a spell, it can’t be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC.\n   All instruments of the bards can be used to cast the following spells: Fly, Invisibility, Levitate, and Protection from Evil and Good.\n   In addition, the Cli lyre can be used to cast Stone Shape, Wall of Fire, and Wind Wall.",
		spellcastingBonus: [{
			name: "Once per long rest",
			spells: ["fly", "invisibility", "levitate", "protection from evil and good", "stone shape", "wall of fire", "wind wall"],
			selection: ["fly", "invisibility", "levitate", "protection from evil and good", "stone shape", "wall of fire", "wind wall"],
			firstCol: "oncelr",
			times: 7,
			spellcastingAbility: "class"
		}]
	},
	"doss lute (uncommon)": {
		name: "Doss Lute [Instrument of the Bards]",
		sortname: "Instrument of the Bards, Doss Lute",
		rarity: "uncommon",
		magicItemTable: "?",
		descriptionFull: "An Instrument of the Bards is superior to an ordinary instrument in every way. Seven types of these instruments exist, each named after a bard college. The Instruments of the Bards table lists the spells common to all instruments, as well as the spells specific to each one and its rarity. A creature that attempts to play the instrument without being attuned to it must succeed on a DC 15 Wisdom saving throw or take 2d4 Psychic damage.\n   You can play the instrument to cast one of its spells. Once the instrument has been used to cast a spell, it can’t be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC.\n   All instruments of the bards can be used to cast the following spells: Fly, Invisibility, Levitate, and Protection from Evil and Good.\n   In addition, the Doss lute can be used to cast Animal Friendship, Protection from Energy (fire only), and Protection from Poison.",
		spellcastingBonus: [{
			name: "Once per long rest",
			spells: ["fly", "invisibility", "levitate", "protection from evil and good", "animal friendship", "protection from energy", "protection from poison"],
			selection: ["fly", "invisibility", "levitate", "protection from evil and good", "animal friendship", "protection from energy", "protection from poison"],
			firstCol: "oncelr",
			times: 7,
			spellcastingAbility: "class"
		}],
		spellChanges: {
			"protection from energy": {
				description: "1 creature gains resistance to Fire damage for the duration",
				changes: "When using the Doss Lute to cast Protection from Energy, it can only grant resistance to fire damage."
			}
		}
	},
	"fochlucan bandore (uncommon)": {
		name: "Fochlucan Bandore [Instrument of the Bards]",
		sortname: "Instrument of the Bards, Fochlucan Bandore",
		rarity: "uncommon",
		magicItemTable: "?",
		descriptionFull: "An Instrument of the Bards is superior to an ordinary instrument in every way. Seven types of these instruments exist, each named after a bard college. The Instruments of the Bards table lists the spells common to all instruments, as well as the spells specific to each one and its rarity. A creature that attempts to play the instrument without being attuned to it must succeed on a DC 15 Wisdom saving throw or take 2d4 Psychic damage.\n   You can play the instrument to cast one of its spells. Once the instrument has been used to cast a spell, it can’t be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC.\n   All instruments of the bards can be used to cast the following spells: Fly, Invisibility, Levitate, and Protection from Evil and Good.\n   In addition, the Fochlucan bandore can be used to cast Entangle, Faerie Fire, Shillelagh, and Speak with Animals.",
		spellcastingBonus: [{
			name: "Once per long rest",
			spells: ["fly", "invisibility", "levitate", "protection from evil and good", "entangle", "faerie fire", "shillelagh", "speak with animals"],
			selection: ["fly", "invisibility", "levitate", "protection from evil and good", "entangle", "faerie fire", "shillelagh", "speak with animals"],
			firstCol: "oncelr",
			times: 8,
			spellcastingAbility: "class"
		}]
	},
	"mac-fuirmidh cittern (uncommon)": {
		name: "Mac-Fuirmidh Cittern [Instrument of the Bards]",
		sortname: "Instrument of the Bards, Mac-Fuirmidh Cittern",
		rarity: "uncommon",
		magicItemTable: "?",
		descriptionFull: "An Instrument of the Bards is superior to an ordinary instrument in every way. Seven types of these instruments exist, each named after a bard college. The Instruments of the Bards table lists the spells common to all instruments, as well as the spells specific to each one and its rarity. A creature that attempts to play the instrument without being attuned to it must succeed on a DC 15 Wisdom saving throw or take 2d4 Psychic damage.\n   You can play the instrument to cast one of its spells. Once the instrument has been used to cast a spell, it can’t be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC.\n   All instruments of the bards can be used to cast the following spells: Fly, Invisibility, Levitate, and Protection from Evil and Good.\n   In addition, the Mac-Fuirmidh cittern can be used to cast Barkskin, Cure Wounds, and Fog Cloud.",
		spellcastingBonus: [{
			name: "Once per long rest",
			spells: ["fly", "invisibility", "levitate", "protection from evil and good", "barkskin", "cure wounds", "fog cloud"],
			selection: ["fly", "invisibility", "levitate", "protection from evil and good", "barkskin", "cure wounds", "fog cloud"],
			firstCol: "oncelr",
			times: 7,
			spellcastingAbility: "class"
		}]
	},
	"ollamh harp (legendary)": {
		name: "Ollamh Harp [Instrument of the Bards]",
		sortname: "Instrument of the Bards, Ollamh Harp",
		rarity: "legendary",
		magicItemTable: "?",
		descriptionFull: "An Instrument of the Bards is superior to an ordinary instrument in every way. Seven types of these instruments exist, each named after a bard college. The Instruments of the Bards table lists the spells common to all instruments, as well as the spells specific to each one and its rarity. A creature that attempts to play the instrument without being attuned to it must succeed on a DC 15 Wisdom saving throw or take 2d4 Psychic damage.\n   You can play the instrument to cast one of its spells. Once the instrument has been used to cast a spell, it can’t be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC.\n   All instruments of the bards can be used to cast the following spells: Fly, Invisibility, Levitate, and Protection from Evil and Good.\n   In addition, the Ollamh harp can be used to cast Confusion, Control Weather, and Fire Storm.",
		spellcastingBonus: [{
			name: "Once per long rest",
			spells: ["fly", "invisibility", "levitate", "protection from evil and good", "confusion", "control weather", "fire storm"],
			selection: ["fly", "invisibility", "levitate", "protection from evil and good", "confusion", "control weather", "fire storm"],
			firstCol: "oncelr",
			times: 7,
			spellcastingAbility: "class"
		}],
	}
};
MagicItemsList["ioun stone"] = {
	name: "Ioun Stone",
	source: [["D24", "-"]],
	type: "wondrous item",
	attunement: true,
	description: "As a Magic action, I can make an ioun stone orbit my head at 1d3 ft or retrieve it. Others can catch it as a Utilize action with an attack or Acrobatics check (AC/DC 24). It has 10 HP and resistance to all damage. Different stones grant different benefits.",
	descriptionFull: "Roughly marble sized, Ioun Stones are named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun Stones exist, each type a distinct combination of shape and color.\n   When you take a Magic action to toss an Ioun Stone into the air, the stone orbits your head at a distance of 1d3 feet, conferring its benefit to you while doing so. You can have up to three Ioun Stones orbiting your head at the same time.\n   Each Ioun Stone orbiting your head is considered to be an object you are wearing. The orbiting stone avoids contact with other creatures and objects, adjusting its orbit to avoid collisions and thwarting all attempts by other creatures to attack or snatch it.\n   As a Utilize action, you can seize and stow any number of Ioun Stones orbiting your head. If your Attunement to an Ioun Stone ends while it’s orbiting your head, the stone falls as though you had dropped it.",
	allowDuplicates: true,
	action: [["action", " (orbit/retrieve)"]],
	choices: ["Absorption", "Agility", "Awareness", "Fortitude", "Greater Absorption", "Insight", "Intellect", "Leadership", "Mastery", "Protection", "Regeneration", "Reserve", "Strength", "Sustenance"],
	"absorption": {
		rarity: "very rare",
		magicItemTable: "?",
		description: "As a Magic action, I can make this pale lavender ellipsoid orbit my head at 1d3 ft and a Utilize action to retrieve it. While it orbits my head, I can use my reaction to cancel a spell of 4th level or lower targeting only me, if I can see the caster and the stone has enough charges left. It can cancel 20 levels of spells before it loses its magic.",
		descriptionFull: "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use a Magic action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. You can use a Utilize action to seize and stow the stone, ending its effect.\n   It is considered to be an object that is being worn while it orbits your head.\n   While this pale lavender ellipsoid orbits your head, you can take a Reaction to cancel a spell of level 4 or lower cast by a creature you can see. A canceled spell has no effect, and any resources used to cast it are wasted. Once the stone has canceled 20 levels of spells, it burns out, turns dull gray, and loses its magic.",
		limfeaname: "Ioun Stone of Absorption",
		usages: 20,
		recovery: "Never",
		action: [["reaction", ""]]
	},
	"agility": {
		rarity: "very rare",
		magicItemTable: "?",
		description: "As a Magic action, I can make this deep red sphere orbit my head at 1d3 ft and a Utilize action to retrieve it. While it orbits my head, my Dexterity score increases by 2, to a maximum of 20.",
		descriptionFull: "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use a Magic action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. You can use a Utilize action to seize and stow the stone, ending its effect.\n   It is considered to be an object that is being worn while it orbits your head.\n   Your Dexterity increases by 2, to a maximum of 20, while this deep-red sphere orbits your head.",
		scores: [0, 2, 0, 0, 0, 0]
	},
	"awareness": {
		rarity: "rare",
		magicItemTable: "?",
		description: "As a Magic action, I can make this dark blue rhomboid orbit my head at 1d3 ft and a Utilize action to retrieve it. While it orbits my head, I can't be surprised.",
		descriptionFull: "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use a Magic action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. You can use a Utilize action to seize and stow the stone, ending its effect.\n   It is considered to be an object that is being worn while it orbits your head.\n   While this dark-blue rhomboid orbits your head, you have Advantage on Initiative rolls and Wisdom (Perception) checks.",
		advantages: [["Initiative", true], ["Perception", true]],
		vision: [["Adv. on Perception checks", 0]]
	},
	"fortitude": {
		rarity: "very rare",
		magicItemTable: "?",
		description: "As a Magic action, I can make this pink rhomboid orbit my head at 1d3 ft and a Utilize action to retrieve it. While it orbits my head, my Constitution score increases by 2, to a maximum of 20.",
		descriptionFull: "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use a Magic action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. You can use a Utilize action to seize and stow the stone, ending its effect.\n   It is considered to be an object that is being worn while it orbits your head.\n   Your Constitution increases by 2, to a maximum of 20, while this pink rhomboid orbits your head.",
		scores: [0, 0, 2, 0, 0, 0]
	},
	"greater absorption": {
		rarity: "legendary",
		magicItemTable: "?",
		description: "As a Magic action, I can make this marbled lavender and green ellipsoid orbit my head at 1d3 ft and a Utilize action to retrieve it. While it orbits my head, I can use a reaction to cancel a spell of 8th level or lower targeting only me, if I can see the caster and enough charges are left. It can cancel 20 levels of spells before it loses its magic.",
		descriptionFull: "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use a Magic action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. You can use a Utilize action to seize and stow the stone, ending its effect.\n   It is considered to be an object that is being worn while it orbits your head.\n   While this marbled lavender and green ellipsoid orbits your head, you can take a Reaction to cancel a spell of level 8 or lower cast by a creature you can see. A canceled spell has no effect, and any resources used to cast it are wasted. Once the stone has canceled 20 levels of spells, it burns out, turns dull gray, and loses its magic.",
		limfeaname: "Ioun Stone of Greater Absorption",
		usages: 20,
		recovery: "Never",
		action: [["reaction", ""]]
	},
	"insight": {
		rarity: "very rare",
		magicItemTable: "?",
		description: "As a Magic action, I can make this incandescent blue sphere orbit my head at 1d3 ft and a Utilize action to retrieve it. While it orbits my head, my Wisdom score increases by 2, to a maximum of 20.",
		descriptionFull: "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use a Magic action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. You can use a Utilize action to seize and stow the stone, ending its effect.\n   It is considered to be an object that is being worn while it orbits your head.\n   Your Wisdom increases by 2, to a maximum of 20, while this incandescent blue sphere orbits your head.",
		scores: [0, 0, 0, 0, 2, 0]
	},
	"intellect": {
		rarity: "very rare",
		magicItemTable: "?",
		description: "As a Magic action, I can make this marbled scarlet and blue sphere orbit my head at 1d3 ft and a Utilize action to retrieve it. While it orbits my head, my Intelligence score increases by 2, to a maximum of 20.",
		descriptionFull: "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use a Magic action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. You can use a Utilize action to seize and stow the stone, ending its effect.\n   It is considered to be an object that is being worn while it orbits your head.\n   Your Intelligence increases by 2, to a maximum of 20, while this marbled scarlet and blue sphere orbits your head.",
		scores: [0, 0, 0, 2, 0, 0]
	},
	"leadership": {
		rarity: "very rare",
		magicItemTable: "?",
		description: "As a Magic action, I can make this marbled pink and green sphere orbit my head at 1d3 ft and a Utilize action to retrieve it. While it orbits my head, my Charisma score increases by 2, to a maximum of 20.",
		descriptionFull: "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use a Magic action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. You can use a Utilize action to seize and stow the stone, ending its effect.\n   It is considered to be an object that is being worn while it orbits your head.\n   Your Charisma increases by 2, to a maximum of 20, while this marbled pink and green sphere orbits your head.",
		scores: [0, 0, 0, 0, 0, 2]
	},
	"mastery": {
		rarity: "legendary",
		magicItemTable: "?",
		description: "As a Magic action, I can make this pale green prism orbit my head at 1d3 ft and a Utilize action to retrieve it. While it orbits my head, my proficiency bonus increases by 1.",
		descriptionFull: "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use a Magic action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. You can use a Utilize action to seize and stow the stone, ending its effect.\n   It is considered to be an object that is being worn while it orbits your head.\n   Your Proficiency Bonus increases by 1 while this pale green prism orbits your head.",
		addMod: [{ type: "", field: "Proficiency Bonus Modifier", mod: 1, text: "My proficiency bonus increases by 1." }]
	},
	"protection": {
		rarity: "rare",
		magicItemTable: "?",
		description: "As a Magic action, I can make this dusty rose prism orbit my head at 1d3 ft and a Utilize action to retrieve it. While it orbits my head, I have a +1 bonus to AC.",
		descriptionFull: "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use a Magic action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. You can use a Utilize action to seize and stow the stone, ending its effect.\n   It is considered to be an object that is being worn while it orbits your head.\n   You gain a +1 bonus to Armor Class while this dusty-rose prism orbits your head.",
		extraAC: [{ name: "Ioun Stone of Protection", mod: 1, magic: true, text: "I gain a +1 bonus to AC while attuned." }]
	},
	"regeneration": {
		rarity: "legendary",
		magicItemTable: "?",
		description: "As a Magic action, I can make this pearly white spindle orbit my head at 1d3 ft and a Utilize action to retrieve it. It has 10 HP and resistance to all damage. While it orbits my head, I regain 15 HP at the end of each hour as long as I have at least 1 HP.",
		descriptionFull: "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use a Magic action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. You can use a Utilize action to seize and stow the stone, ending its effect.\n   It is considered to be an object that is being worn while it orbits your head.\n   You regain 15 Hit Points at the end of each hour this pearly white spindle orbits your head if you have at least 1 Hit Point."
	},
	"reserve": {
		rarity: "rare",
		magicItemTable: "?",
		description: "As a Magic action, I can make this vibrant purple prism orbit my head at 1d3 ft and a Utilize action to retrieve it. It can store 4 (spell slot) levels worth of spells. By touching it, one can cast a 1-4 level spell into it. While it orbits my head, I can cast any spell stored in it as if casting it myself, but using the original casters spellcasting ability.",
		descriptionFull: "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use a Magic action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. You can use a Utilize action to seize and stow the stone, ending its effect.\n   It is considered to be an object that is being worn while it orbits your head.\n   This vibrant purple prism stores spells cast into it, holding them until you use them. The stone can store up to 4 levels of spells at a time. When found, it contains 1d4 levels of stored spells chosen by the DM.\n   Any creature can cast a spell of level 1 through 4 into the stone by touching it as the spell is cast. The spell has no effect, other than to be stored in the stone. If the stone can’t hold the spell, the spell is expended without effect. The level of the slot used to cast the spell determines how much space it uses.\n   While this stone orbits your head, you can cast any spell stored in it. The spell uses the slot level, spell save DC, spell attack bonus, and spellcasting ability of the original caster but is otherwise treated as if you cast the spell. The spell cast from the stone is no longer stored in it, freeing up space."
	},
	"strength": {
		rarity: "very rare",
		magicItemTable: "?",
		description: "As a Magic action, I can make this pale blue rhomboid orbit my head at 1d3 ft and a Utilize action to retrieve it. While it orbits my head, my Strength score increases by 2, to a maximum of 20.",
		descriptionFull: "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use a Magic action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. You can use a Utilize action to seize and stow the stone, ending its effect.\n   It is considered to be an object that is being worn while it orbits your head.\n   Your Strength increases by 2, to a maximum of 20, while this pale blue rhomboid orbits your head.",
		scores: [2, 0, 0, 0, 0, 0]
	},
	"sustenance": {
		rarity: "rare",
		magicItemTable: "?",
		description: "As a Magic action, I can make this clear spindle orbit my head at 1d3 ft and a Utilize action to retrieve it. While it orbits my head, I don't need to eat or drink.",
		descriptionFull: "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use a Magic action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. You can use a Utilize action to seize and stow the stone, ending its effect.\n   It is considered to be an object that is being worn while it orbits your head.\n   You don’t need to eat or drink while this clear spindle orbits your head."
	}
};
MagicItemsList["iron bands of bilarro"] = { // contains contributions by AelarTheElfRogue
	name: "Iron Bands of Bilarro",
	nameAlt: "Iron Bands of Binding",
	source: [["D24", 274]],
	type: "wondrous item",
	rarity: "rare",
	magicItemTable: "?",
	description: "Once per dawn, as a Magic action, I can make a ranged attack (Dex Mod + Prof). If hit, the target is Restrained until I use a bonus action to speak a command word to release it. Once per 24 hours, the target can make a DC 20 Strength (Athletics) check as an action to free itself and destroy the bands.",
	descriptionLong: "Once per dawn, as a Magic action, I can throw this rusty iron sphere. I make a ranged attack roll with an attack bonus equal to my Dexterity modifier plus Proficiency Bonus. On a hit, the target is restrained until I take a bonus action to speak a command word to release it. Doing so, or missing with the attack, causes the bands to contract and become a sphere once more. The target can make a DC 20 Strength (Athletics) check as an action, freeing itself and destroying the bands on a success. If the check fails, any further attempts made by that creature automatically fail until 24 hours have elapsed.",
	descriptionFull: "This rusty iron sphere measures 3 inches in diameter and weighs 1 pound. You can take a Magic action to throw the sphere at a Huge or smaller creature you can see within 60 feet of yourself. As the sphere moves through the air, it opens into a tangle of metal bands.\n   Make a ranged attack roll with an attack bonus equal to your Dexterity modifier plus your Proficiency Bonus. On a hit, the target has the Restrained condition until you take a Bonus Action to issue a command that releases it. Doing so or missing with the attack causes the bands to contract and become a sphere once more.\n   A creature that can touch the bands, including the one Restrained, can take an action to make a DC 20 Strength (Athletics) check to break the iron bands. On a successful check, the item is destroyed, and the Restrained creature is freed. On a failed check, any further attempts made by that creature automatically fail until 24 hours have elapsed.\n   Once the bands are used, they can’t be used again until the next dawn.",
	weight: 1,
	usages: 1,
	recovery: "dawn",
	action: [["action", " (throw)"], ["bonus action", " (release)"]],
	weaponsAdd: ["Iron Bands of Bilarro"],
	weaponOptions: {
		regExpSearch: /^(?=.*iron)(?=.*band)(?=.*(bilarro|binding)).*$/i,
		name: "Iron Bands of Bilarro",
		source: [["D24", 274]],
		ability: 2,
		type: "Natural",
		damage: ["\u2015", "", "Restrained"],
		range: "60 ft",
		description: "Restrains Huge or smaller creature; DC 20 Strength (Athletics) check to break out",
		abilitytodamage: false,
		weight: 1
	}
};
MagicItemsList["iron flask"] = { // contains contributions by Larry Hoy
	name: "Iron Flask",
	source: [["D24", "-"]],
	type: "wondrous item",
	rarity: "legendary",
	magicItemTable: "?",
	description: "While holding this flask, I can take a Magic action to target a creature from another plane that I can see within 60 ft. It must make a DC 17 Wis save (adv. if trapped before) or be trapped in the flask. It holds only 1 creature. As Magic action, I can open it to release the creature, which then obeys my commands for 1 hour.",
	descriptionLong: "While holding this flask, I can take a Magic action to target a creature from another plane that I can see within 60 ft. It must make a DC 17 Wis save (adv. if trapped before) or be trapped in the flask. It holds only 1 creature. As Magic action, I can open it to release the creature, which then obeys my commands for 1 hour. See Notes.",
	descriptionFull: "While holding this flask, I can take a Magic action to target a creature from another plane that I can see within 60 ft. It must make a DC 17 Wis save (adv. if trapped before) or be trapped in the flask. It holds only 1 creature. As Magic action, I can open it to release the creature, which then obeys my commands for 1 hour. See Notes.",
	weight: 1,
	toNotesPage: [{
		name: "Iron Flask",
		note: [
			"This iron bottle has a brass stopper. You can take a Magic action to target a creature that you can see within 60 feet of you. If the target is native to a plane of existence other than the one you're on, the target must succeed on a DC 17 Wisdom saving throw or be trapped in the flask. If the target has been trapped by the flask before, it has advantage on the saving throw.\n\n" +
			"Once trapped, a creature remains in the flask until released.The flask can hold only one creature at a time.A creature trapped in the flask doesn't need to breathe, eat, or drink and doesn't age.\n   You can take a Magic action to remove the stopper and release the creature. The creature is friendly to you and your companions for 1 hour and obeys your commands for that duration. If you give no commands or give it a command that is likely to result in its death, it defends itself but otherwise takes no actions. At the end of the duration, the creature acts in accordance with its normal disposition and alignment.\n\n" +
			"An Identify spell reveals that a creature is inside the flask, opening the flask is the only way to determing the type. A newly discovered bottle might already contain a creature chosen by the DM or determined randomly.\n\n" +
			toUni("d100\tContents"),
			"00-50\tEmpty\t\t76-77\tInvisible Stalker",
			"  51\tArcanaloth\t\t78-79\tMarid",
			"52-54\tBone Devil\t\t  80\tMarilith",
			"55-56\tCambion\t\t81-82\tMezzoloth",
			"57-58\tDao\t\t83-84\tNalfeshnee",
			"  59\tDeva\t\t85-86\tNight Hag",
			"60-61\tDjinni\t\t87-88\tNycaloth",
			"62-63\tEfreeti\t\t89\tPlanetar",
			"64-65\tErinyes\t\t90-91\tRed Slaad",
			"66-67\tFomorian\t\t92-93\tSalamander",
			"  68\tGithyanki Knight\t94\tSolar",
			"  69\tGitzerai Zerth\t95\tSuccubus",
			"70-71\tGlabrezu\t\t96\tUltroloth",
			"72-74\tHezrou\t\t97-99\tVrock",
			"  75\tIncubys\t\t00\tXorn",
		]
	}],
};
MagicItemsList["javelin of lightning"] = { // contains contributions by Larry Hoy
	name: "Javelin of Lightning",
	source: [["D24", 275]],
	type: "weapon (javelin)",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "Once per dawn I can throw this javelin at a target within 120 ft. and forgo the ranged weapon attack with it turning it into a bolt of lightning. All between me and the target in a 5-ft wide line take 4d6 lightning damage, DC 13 Dex save halves. Immediately after dealing damage, the weapon reappears in my hand.",
	descriptionFull: "Each time you make an attack roll with this magic weapon and hit, you can have it deal Lightning damage instead of Piercing damage.\n   Lightning Bolt. When you throw this weapon at a target no farther than 120 feet from you, you can forgo making a ranged attack roll and instead turn the weapon into a bolt of lightning. This bolt forms a 5-foot-wide Line between you and the target. The target and each other creature in the Line (excluding you) makes a DC 13 Dexterity saving throw, taking 4d6 Lightning damage on a failed save or half as much damage on a successful one. Immediately after dealing this damage, the weapon reappears in your hand. This property can’t be used again until the next dawn.",
	weight: 2,
	usages: 1,
	recovery: "dawn",
	weaponsAdd: ["Javelin of Lightning"],
	weaponOptions: {
		baseWeapon: "javelin",
		regExpSearch: /^(?=.*javelin)(?=.*lightning).*$/i,
		name: "Javelin of Lightning",
		source: [["D24", 275]],
		description: "Thrown; Once per dawn special attack, see item description; Slow",
	}
};
MagicItemsList["keoghtom's ointment"] = {
	name: "Keoghtom's Ointment",
	nameAlt: "Restorative Ointment",
	source: [["D24", 275]],
	type: "wondrous item",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "This glass jar, 3 inches in diameter, contains 1d4+1 doses of a thick mixture that smells faintly of aloe. As a Utilize action, one dose of the ointment can be swallowed or applied to a creature within 5 ft of me. The creature that receives it regains 2d8+2 hit points, and ceases to be poisoned.",
	descriptionFull: "This glass jar, 3 inches in diameter, contains 1d4 + 1 doses of a thick mixture that smells faintly of aloe. The jar and its contents weigh 1/2 pound.\n   As a Utilize action, you can swallow one dose of the ointment or apply it to a creature within 5 feet of yourself. The creature that receives it regains 2d8 + 2 Hit Points and ceases to have the Poisoned condition.",
	weight: 0.5,
	usages: "1d4+1",
	recovery: "Never"
};
MagicItemsList["lantern of revealing"] = {
	name: "Lantern of Revealing",
	source: [["D24", 275]],
	type: "wondrous item",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "This lantern burns for 6 hours on 1 pint of oil. It shines bright light in a 30-ft radius and dim light for an additional 30 ft. Invisible objects and creatures are visible in the lantern's bright light. As a Utilize action, I can lower the hood, making it only dim light in a 5-ft radius.",
	descriptionFull: "While lit, this hooded lantern burns for 6 hours on 1 pint of oil, shedding Bright Light in a 30-foot radius and Dim Light for an additional 30 feet. Invisible creatures and objects are visible as long as they are in the lantern’s Bright Light. You can take a Utilize action to lower the hood, reducing the lantern’s light to Dim Light in a 5-foot radius.",
	weight: 2,
	action: [["action", " (hood up/down)"]]
};
MagicItemsList["lock of trickery"] = {
	name: "Lock of Trickery",
	source: [["D24", 275]],
	magicItemTable: "?",
	type: "wondrous item",
	rarity: "common",
	description: "This lock appears to be an ordinary Lock and comes with a single key. The tumblers in this lock magically adjust to thwart burglars. Dexterity checks made to pick the lock have Disadvantage.",
	descriptionFull: "This lock appears to be an ordinary Lock (of the type described in chapter 6 of the Player’s Handbook) and comes with a single key. The tumblers in this lock magically adjust to thwart burglars. Dexterity checks made to pick the lock have Disadvantage.",
	weight: 1
};
MagicItemsList["luck blade"] = {
	name: "Luck Blade",
	source: [["D24", 275]],
	type: "weapon (glaive, greatsword, longsword, rapier, scimitar, sickle, or shortsword)",
	rarity: "legendary",
	magicItemTable: "?",
	attunement: true,
	description: "This magic weapon has a +1 bonus to attack and damage rolls made with it, and grants me +1 to all saves. Once per dawn, I can use its luck to reroll one attack, ability check, or save, but I must use the second result. While holding it, I can expend one of its 1d3 charges to cast Wish from it, once per dawn. Charges can't be regained.",
	descriptionFull: "You gain a +1 bonus to attack rolls and damage rolls made with this magic weapon. While the weapon is on your person, you also gain a +1 bonus to saving throws.\n   " + toUni("Luck") + ". If the weapon is on your person, you can call on its luck (no action required) to reroll one failed D20 Test if you don’t have the Incapacitated condition. You must use the second roll. Once used, this property can’t be used again until the next dawn.\n   " + toUni("Wish") + ". The weapon has 1d3 charges. While holding it, you can expend 1 charge and cast Wish from it. Once used, this property can’t be used again until the next dawn. The weapon loses this property if it has no charges.",
	extraLimitedFeatures: [{
		name: "Luck Blade - luck reroll",
		usages: 1,
		recovery: "Dawn"
	}, {
		name: "Luck Blade - cast Wish",
		usages: "1d3",
		recovery: "Never"
	}],
	chooseGear: {
		type: "weapon",
		prefixOrSuffix: "brackets",
		descriptionChange: ["replace", "weapon"],
		excludeCheck: function (inObjKey, inObj) {
			var testRegex = /glaive|greatsword|longsword|rapier|scimitar|sickle|shortsword/i;
			return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
		}
	},
	addMod: [{ type: "save", field: "all", mod: 1, text: "While the Luck Blade is on my person, I gain a +1 bonus to all my saving throws." }],
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/glaive|greatsword|longsword|rapier|scimitar|sickle|shortsword/i).test(v.baseWeaponName) && (/^(?=.*luck)(?=.*blade).*$/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
				}
			},
			'If I include the words "Luck Blade" in a the name of a glaive, greatsword, longsword, rapier, scimitar, sickle, or shortsword, it will be treated as the magic weapon Luck Blade. It has +1 to hit and damage.'
		],
		atkCalc: [
			function (fields, v, output) {
				if (v.isMeleeWeapon && (/glaive|greatsword|longsword|rapier|scimitar|sickle|shortsword/i).test(v.baseWeaponName) && (/^(?=.*luck)(?=.*blade).*$/i).test(v.WeaponTextName)) {
					output.magic = v.thisWeapon[1] + 1;
				}
			}, ''
		]
	}
};
MagicItemsList["lute of thunderous thumping"] = {
	name: "Lute of Thunderous Thumping",
	source: [["D24", 275]],
	type: "weapon (club)",
	rarity: "very rare",
	magicItemTable: "?",
	description: "This reinforced lute can be wielded as a magic Club that deals an extra 2d8 Thunder damage on a hit.",
	descriptionLong: "This reinforced lute can be wielded as a magic Club that deals an extra 2d8 Thunder damage on a hit.\n If you're a bard, you can use your CHA modifier instead of your Str Mod when making a melee attack roll provided that you sing or hum while making the attack.",
	descriptionFull: "This reinforced lute can be wielded as a magic Club that deals an extra 2d8 Thunder damage on a hit.\n\n" + toUni("Sing and Swing") + "If you’re a Bard, you can use your Charisma modifier instead of your Strength modifier when making a melee attack roll with the lute, provided you sing or hum while making the attack.",
	weight: 1,
	weaponsAdd: "Lute of Thunderous Thumping",
	weaponOptions: {
		baseWeapon: "club",
		regExpSearch: /lute of thunderous thumping/i,
		name: "Lute of Thunderous Thumping",
		source: [["PHB2024", "-"]],
		description: "light, slow, +2d8 Thunder",
	},
	toNotesPage: [{
		name: "Sing and Swing",
		note: [
			"You can use your CHA Modifier instead of your STR modifier when making a melee attack roll provided you sing or hum."
		]
	}],
	selfChoosing: function () {
		return classes.known.bard ? "lute of thunderous thumping (bard)" : "lute of thunderous thumping (not bard)";
	},
	"lute of thunderous thumping (bard)": {
		name: "Lute of Thunderous Thumping",
		description: "This reinforced lute can be wielded as a magic Club that deals an extra 2d8 Thunder damage on a hit.\n\n" + toUni("Sing and Swing") + "You can use your CHA Modifier instead of your STR modifier when making a melee attack roll provided you sing or hum.",
		weaponsAdd: "Lute of Thunderous Thumping",
		weaponOptions: {
			baseWeapon: "club",
			regExpSearch: /lute of thunderous thumping/i,
			name: "Lute of Thunderous Thumping",
			source: [["PHB2024", "-"]],
			description: "light, slow, +2d8 Thunder",
		},
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					if (v.theWea.is('lute of thunderous thumping') && fields.Mod === 1 && What('Cha') > What('Str')) {
						fields.Mod = 6;
					}
				},
				"I can use my Charisma modifier instead of my Strength modifier for attack rolls made with the Lute of Thunderous Thumping."
			]
		},
	},
	"lute of thunderous thumping (not bard)": {
		name: "Lute of Thunderous Thumping",
		description: "This reinforced lute can be wielded as a magic Club that deals an extra 2d8 Thunder damage on a hit.",
		weaponsAdd: "Lute of Thunderous Thumping",
		weaponOptions: {
			baseWeapon: "club",
			regExpSearch: /lute of thunderous thumping/i,
			name: "Lute of Thunderous Thumping",
			source: [["PHB2024", "-"]],
			description: "light, slow, +2d8 Thunder;2",
		}
	},
};
MagicItemsList["mace of disruption"] = {
	name: "Mace of Disruption",
	source: [["D24", 276]],
	type: "weapon (mace)",
	rarity: "rare",
	magicItemTable: "?",
	description: "This magic mace sheds Bright Light in a 20-ft radius and Dim Light for another 20 ft while held. Fiends and undead hit with it take +2d6 Radiant damage. If the target has less than 25 or fewer HP after taking the damage, it must make a DC 15 Wisdom save or be destroyed.  On a successful save, the creature becomes frightened of me until my next turn ends.",
	descriptionFull: "When you hit a fiend or an undead with this magic weapon, that creature takes an extra 2d6 Radiant damage. If the target has 25 hit points or fewer after taking this damage, it must succeed on a DC 15 Wisdom saving throw or be destroyed. On a successful save, the creature becomes frightened of you until the end of your next turn.\n   While you hold this weapon, it sheds Bright Light in a 20-foot radius and Dim Light for an additional 20 feet.",
	attunement: true,
	weight: 4,
	weaponsAdd: ["Mace of Disruption"],
	weaponOptions: {
		baseWeapon: "mace",
		regExpSearch: /^(?=.*mace)(?=.*disruption).*$/i,
		name: "Mace of Disruption",
		source: [["D24", 276]],
		description: "Fiend/undead +2d6 radiant damage, and if HP<26, DC 15 Wis save or die, on success frightened until my next turn ends; Sap"
	}
};
MagicItemsList["mace of smiting"] = {
	name: "Mace of Smiting",
	source: [["D24", 276]],
	type: "weapon (mace)",
	rarity: "rare",
	magicItemTable: "?",
	description: "I gain a +1 bonus (+3 vs. constructs) to attack and damage rolls made with it. When I roll a 20 on an attack roll, the target takes an extra 7 Bludgeoning damage, or 14 Bludgeoning damage if it's a Construct. If a Construct has 25 or fewer HP after taking this damage, it is destroyed.",
	descriptionFull: "You gain a +1 bonus to attack and damage rolls made with this magic weapon. The bonus increases to +3 when you use the mace to attack a Construct.\n   When you roll a 20 on an attack roll made with this weapon, the target takes an extra 7 Bludgeoning damage, or 14 Bludgeoning damage if it's a Construct. If a Construct has 25 hit points or fewer after taking this damage, it is destroyed.",
	weight: 4,
	weaponsAdd: ["Mace of Smiting"],
	weaponOptions: {
		baseWeapon: "mace",
		regExpSearch: /^(?=.*mace)(?=.*smiting).*$/i,
		name: "Mace of Smiting",
		source: [["D24", 276]],
		description: "+1 to hit/damage (+3 vs. constructs); On 20 to hit: +7 damage (+14 vs. constructs); Constructs HP<= 25 destroyed; Sap",
		modifiers: [1, 1]
	}
};
MagicItemsList["mace of terror"] = {
	name: "Mace of Terror",
	source: [["D24", 276]],
	type: "weapon (mace)",
	rarity: "rare",
	magicItemTable: "?",
	description: "While holding this weapon, as a Magic action, I can use 1 charge of this mace to have all chosen creatures within 30 ft make a DC 15 Wis save or be frightened of me for 1 min, repeating the save at the end of its turns. While frightened, it takes only the Dash action to move away (or action to free itself), no reactions, and can't move within 30 ft of me.",
	descriptionLong: "While holding this weapon, as a Magic action, I can expend 1 charge to release a wave of terror. Each creature of my choice within 30 ft must succeed on a DC 15 Wis save or be Frightened of me for 1 min, repeating the save at the end of its turns. While frightened, it takes only the Dash action to move away (or action to free itself), no reactions, and can't move within 30 ft of me.",
	descriptionFull: "This magic weapon has 3 charges and regains 1d3 expended charges daily at dawn. While holding the weapon, you can take a Magic action and expend 1 charge to release a wave of terror from it. Each creature of your choice within 30 feet of you must succeed on a DC 15 Wisdom saving throw or have the Frightened condition for 1 minute. While Frightened in this way, a creature must spend its turns trying to move as far away from you as it can, and it can’t make Opportunity Attacks. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If it has nowhere it can move, the creature can take the Dodge action. At the end of each of its turns, a creature repeats the save, ending the effect on itself on a success",
	attunement: true,
	weight: 4,
	usages: 3,
	recovery: "dawn",
	additional: "regains 1d3",
	weaponsAdd: ["Mace of Terror"],
	weaponOptions: {
		baseWeapon: "mace",
		regExpSearch: /^(?=.*mace)(?=.*terror).*$/i,
		name: "Mace of Terror",
		source: [["D24", 276]],
		description: "Sap",
	}
};
MagicItemsList["mantle of spell resistance"] = {
	name: "Mantle of Spell Resistance",
	source: [["D24", 276]],
	type: "wondrous item",
	rarity: "rare",
	magicItemTable: "?",
	description: "I have Advantage on saving throws against spells while I wear this cloak.",
	descriptionFull: "You have Advantage on saving throws against spells while you wear this cloak.",
	attunement: true,
	savetxt: { adv_vs: ["spells"] }
};
MagicItemsList["manual of bodily health"] = {
	name: "Manual of Bodily Health",
	source: [["D24", 277]],
	type: "wondrous item",
	rarity: "very rare",
	magicItemTable: "?",
	description: "This book contains health and nutrition tips, and its words are charged with magic. If I spend 48 hours over a period of 6 days to study its contents and practicing its guidelines, my Constitution score increases by 2, to a maximum of 30. The manual then loses its magic, but regains it in a century.",
	descriptionFull: "This book contains health and nutrition tips, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book's contents and practicing its guidelines, your Constitution score increases by 2, to a maximum of 30. The manual then loses its magic, but regains it in a century.",
	weight: 5,
	applyStatBonus: function (itemName, statName, statBonus) {
		// a function for all the manuals/tomes
		if (!IsNotReset) return;
		initiateCurrentStats();
		var statIndx = AbilityScores.names.indexOf(statName);
		var alreadyAppliedBefore = CurrentStats.maximumsLinked[itemName];
		var applyChange = app.alert({
			nIcon: 2,
			nType: 2,
			nTitle: "Apply " + itemName + "?",
			cMsg: "Do you want to apply the +" + statBonus + " bonus to the " + statName + " score and maximum from the " + itemName + " permanently? This increase will stay even after you remove this magic item.\nIf you select 'No' below, this increase will not be applied, even if you keep the magic item selected.\n\n" + (alreadyAppliedBefore ? "It seems you have applied this item before. If you click 'No', you will be prompted to remove all ability score increases from " + itemName : "If you want to remove this ability score increase at a later time, just add the item again and you will be prompted to remove the ability score increase then.")
		});
		if (applyChange == 3) {
			if (alreadyAppliedBefore) {
				var removeAll = app.alert({
					nIcon: 2,
					nType: 2,
					nTitle: "Remove all previous uses of " + itemName + "?",
					cMsg: "Do you want to remove all the previous bonuses to " + statName + " gained from the " + itemName + "?"
				});
				if (removeAll == 3) return;
			} else {
				return;
			}
		}
		var baseAdd = [0, 0, 0, 0, 0, 0];
		baseAdd[statIndx] = statBonus;
		var maxAdd = [0, 0, 0, 0, 0, 0];
		maxAdd[statIndx] = "+" + baseAdd[statIndx];
		if (alreadyAppliedBefore) {
			baseAdd = [].concat(CurrentStats.maximumsLinked[itemName]);
			// remove the old version
			processStats(false, "magic", itemName, baseAdd, false, false, maxAdd);
			if (removeAll) {
				// also remove the maximum
				processStats(false, "magic", itemName, maxAdd, false, "maximums");
				return;
			}
			// now increase the gains to include the item again
			baseAdd[statIndx] += statBonus;
			maxAdd[statIndx] = "+" + baseAdd[statIndx];
		}
		processStats(true, "magic", itemName, baseAdd, false, false, maxAdd);
		processStats(true, "magic", itemName, maxAdd, false, "maximums");
	},
	eval: function () {
		MagicItemsList["manual of bodily health"].applyStatBonus("Manual of Bodily Health", "Constitution", 2);
	}
};
MagicItemsList["manual of gainful exercise"] = {
	name: "Manual of Gainful Exercise",
	source: [["D24", 277]],
	type: "wondrous item",
	rarity: "very rare",
	magicItemTable: "?",
	description: "This book describes fitness exercises, and its words are charged with magic. If I spend 48 hours over a period of 6 days or fewer studying its contents and practicing its guidelines, my Strength score increases by 2, up to a maximum of 30. The manual then loses its magic, but regains it in a century.",
	descriptionFull: "This book describes fitness exercises, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book's contents and practicing its guidelines, your Strength score increases by 2, up to a maximum of 30. The manual then loses its magic, but regains it in a century.",
	weight: 5,
	eval: function () {
		MagicItemsList["manual of bodily health"].applyStatBonus("Manual of Gainful Exercise", "Strength", 2);
	}
};
MagicItemsList["manual of golems"] = { // contains contributions by Larry Hoy
	name: "Manual of Golems",
	source: [["D24", 277]],
	type: "wondrous item",
	rarity: "very rare",
	magicItemTable: "?",
	description: "This tome can only be used by a spellcaster with two 5th-level spell slots. Others reading it take 6d6 psychic damage.",
	descriptionFull: "This tome contains information and incantations necessary to make a particular type of golem. The DM chooses the type or determines it randomly by rolling on the accompanying table. To decipher and use the manual, you must be a spellcaster with at least two level 5 spell slots. A creature that can’t use a Manual of Golems and attempts to read it takes 6d6 Psychic damage.\n" + " To create a golem, you must spend the time shown on the table, working without interruption with the manual at hand and resting no more than 8 hours per day. You must also pay the specified cost to purchase supplies.\n" + " Once you finish creating the golem, the book is consumed in eldritch flames. The golem becomes animate when the ashes of the manual are sprinkled on it. See the Monster Manual for the golem’s stat block. The golem is under your control, and it understands and obeys your commands.",
	weight: 5,
	allowDuplicates: true,
	prerequisite: "Requires a spellcaster with at least two 5th-level spell slots",
	prereqeval: function () { return What('SpellSlots.CheckboxesSet.lvl5') >= 2; },
	choices: ["Clay", "Flesh", "Iron", "Stone"],
	"clay": {
		name: "Manual of Clay Golems",
		sortname: "Manual of Golems, Clay",
		description: "Only spellcasters with two 5th-level spell slots can use this tome. Creating a clay golem requires 65,000 gp of supplies, 30 days working uninterrupted with the manual at hand, resting no more than 8 hours per day. The manual is consumed to animate the golem, which understands and obeys my spoken commands.",
		descriptionFull: "This tome contains information and incantations necessary to make a particular type of golem. The DM chooses the type or determines it randomly by rolling on the accompanying table. To decipher and use the manual, you must be a spellcaster with at least two level 5 spell slots. A creature that can’t use a Manual of Golems and attempts to read it takes 6d6 Psychic damage.\n" + " To create a golem, you must spend the time shown on the table, working without interruption with the manual at hand and resting no more than 8 hours per day. You must also pay the specified cost to purchase supplies.\n" + " Once you finish creating the golem, the book is consumed in eldritch flames. The golem becomes animate when the ashes of the manual are sprinkled on it. See the Monster Manual for the golem’s stat block. The golem is under your control, and it understands and obeys your commands.",
	},
	"flesh": {
		name: "Manual of Flesh Golems",
		sortname: "Manual of Golems, Flesh",
		description: "Only spellcasters with two 5th-level spell slots can use this tome. Creating a flesh golem requires 50,000 gp of supplies, 60 days working uninterrupted with the manual at hand, resting no more than 8 hours per day. The manual is consumed to animate the golem, which understands and obeys my spoken commands.",
		descriptionFull: "This tome contains information and incantations necessary to make a particular type of golem. The DM chooses the type or determines it randomly by rolling on the accompanying table. To decipher and use the manual, you must be a spellcaster with at least two level 5 spell slots. A creature that can’t use a Manual of Golems and attempts to read it takes 6d6 Psychic damage.\n" + " To create a golem, you must spend the time shown on the table, working without interruption with the manual at hand and resting no more than 8 hours per day. You must also pay the specified cost to purchase supplies.\n" + " Once you finish creating the golem, the book is consumed in eldritch flames. The golem becomes animate when the ashes of the manual are sprinkled on it. See the Monster Manual for the golem’s stat block. The golem is under your control, and it understands and obeys your commands.",
	},
	"iron": {
		name: "Manual of Iron Golems",
		sortname: "Manual of Golems, Iron",
		description: "Only spellcasters with two 5th-level spell slots can use this tome. Creating a iron golem requires 100,000 gp of supplies, 120 days working uninterrupted with the manual at hand, resting no more than 8 hours per day. The manual is consumed to animate the golem, which understands and obeys my spoken commands.",
		descriptionFull: "This tome contains information and incantations necessary to make a particular type of golem. The DM chooses the type or determines it randomly by rolling on the accompanying table. To decipher and use the manual, you must be a spellcaster with at least two level 5 spell slots. A creature that can’t use a Manual of Golems and attempts to read it takes 6d6 Psychic damage.\n" + " To create a golem, you must spend the time shown on the table, working without interruption with the manual at hand and resting no more than 8 hours per day. You must also pay the specified cost to purchase supplies.\n" + " Once you finish creating the golem, the book is consumed in eldritch flames. The golem becomes animate when the ashes of the manual are sprinkled on it. See the Monster Manual for the golem’s stat block. The golem is under your control, and it understands and obeys your commands.",
	},
	"stone": {
		name: "Manual of Stone Golems",
		sortname: "Manual of Golems, Stone",
		description: "Only spellcasters with two 5th-level spell slots can use this tome. Creating a stone golem requires 80,000 gp of supplies, 90 days working uninterrupted with the manual at hand, resting no more than 8 hours per day. The manual is consumed to animate the golem, which understands and obeys my spoken commands.",
		descriptionFull: "This tome contains information and incantations necessary to make a particular type of golem. The DM chooses the type or determines it randomly by rolling on the accompanying table. To decipher and use the manual, you must be a spellcaster with at least two level 5 spell slots. A creature that can’t use a Manual of Golems and attempts to read it takes 6d6 Psychic damage.\n" + " To create a golem, you must spend the time shown on the table, working without interruption with the manual at hand and resting no more than 8 hours per day. You must also pay the specified cost to purchase supplies.\n" + " Once you finish creating the golem, the book is consumed in eldritch flames. The golem becomes animate when the ashes of the manual are sprinkled on it. See the Monster Manual for the golem’s stat block. The golem is under your control, and it understands and obeys your commands.",
	}
};
MagicItemsList["manual of quickness of action"] = {
	name: "Manual of Quickness of Action",
	source: [["D24", 278]],
	type: "wondrous item",
	rarity: "very rare",
	magicItemTable: "?",
	description: "This book contains coordination and balance exercises, and its words are charged with magic. If I spend 48 hours over a period of 6 days or fewer studying the book's contents and practicing its guidelines, my Dexterity score increases by 2, to a maximum of 30. The manual then loses its magic, but regains it in a century.",
	descriptionFull: "This book contains coordination and balance exercises, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book's contents and practicing its guidelines, your Dexterity score increases by 2, to a maximum of 30. The manual then loses its magic, but regains it in a century.",
	weight: 5,
	eval: function () {
		MagicItemsList["manual of quickness of action"].applyStatBonus("Manual of Quickness of Action", "Dexterity", 2);
	}
};
MagicItemsList["mariner's armor"] = {
	name: "Mariner's Armor",
	nameTest: "Mariner's",
	source: [["D24", 278]],
	type: "armor (light, medium, or heavy)",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "While wearing this armor, I have a Swim speed equal to my Speed. In addition, if I start my turn underwater with 0 hit points, I immediately regain 1d4 hit points. The armor is decorated with fish and shell motifs.",
	descriptionFull: "While wearing this armor, you have a Swim speed equal to your Speed. In addition, whenever you start your turn underwater with 0 hit points, you immediately regain 1d4 hit points. The armor can't heal anyone again until the next dawn. The armor is decorated with fish and shell motifs.",
	allowDuplicates: true,
	chooseGear: {
		type: "armor",
		prefixOrSuffix: ["brackets"],
		descriptionChange: ["replace", "armor"],
		excludeCheck: function (inObjKey, inObj) {
			return !(/light|medium|heavy/i).test(inObj.type);
		},
	},
	speed: { swim: { spd: "walk", enc: "walk" } }
};
MagicItemsList["medallion of thoughts"] = {
	name: "Medallion of Thoughts",
	source: [["D24", 278]],
	type: "wondrous item",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "The medallion has 5 charges. While wearing it, I can expend 1 charge to cast Detect Thoughts (save DC 13) from it. The medallion regains 1d4 expended charges daily at dawn.",
	descriptionFull: "The medallion has 5 charges. While wearing it, you can expend 1 charge to cast the Detect Thoughts spell (save DC 13) from it. The medallion regains 1d4 expended charges daily at dawn.",
	attunement: true,
	weight: 1,
	usages: 5,
	recovery: "dawn",
	additional: "regains 1d4",
	spellcastingBonus: {
		name: "1 charge",
		spells: ["detect thoughts"],
		selection: ["detect thoughts"],
		firstCol: 1
	},
	fixedDC: 13,
	spellFirstColTitle: "Ch"
};
MagicItemsList["mirror of life trapping"] = {
	name: "Mirror of Life Trapping",
	source: [["D24", 278]],
	type: "wondrous item",
	rarity: "very rare",
	magicItemTable: "?",
	description: "As an action when I'm within 5 ft of this mirror, I can speak its command word and activate it and it remains activated until I do so again. Creatures other than me who look in the activated mirror must make a DC 15 Charisma save or become trapped in one of its twelve extradimensional cells. See Notes page for info.",
	descriptionFull: "When this 4-foot-tall, 2 foot wide mirror is viewed indirectly, its surface shows faint images of creatures. The mirror weighs 50 pounds, and it has AC 11, 10 HP, Immunity to Poison and Psychic damage, and Vulnerability to Bludgeoning damage. It shatters and is destroyed when reduced to 0 Hit Points.\n   If the mirror is hanging on a vertical surface and you am within 5 feet of it, you can use take a Magic action and repeat the command word to deactivate it.\n   Any creature other than you that sees its reflection in the activated mirror while within 30 feet of it must succeed on a DC 15 Charisma saving throw or be trapped, along with anything it is wearing or carrying, in one of the mirror's twelve extradimensional cells. A creature that knows the mirror’s nature makes the save with Advantage, and Constructs succeed on the save automatically.\n   An extradimensional cell is an infinite expanse filled with thick fog that reduces visibility to 10 feet. Creatures trapped in the mirror's cells don't age, and they don't need to eat, drink, or sleep. A creature trapped within a cell can escape using magic that permits planar travel. Otherwise, the creature is confined to the cell until freed.\n   If the mirror traps a creature but its twelve extradimensional cells are already occupied, the mirror frees one trapped creature at random to accommodate the new prisoner. A freed creature appears in an unoccupied space within sight of the mirror but facing away from it. If the mirror is shattered, all creatures it contains are freed and appear in unoccupied spaces near it.\n   While within 5 feet of the mirror, you can take a Magic action to name one creature trapped in it or call out a particular cell by number. The creature named or contained in the named cell appears as an image on the mirror's surface. You and the creature can them communicate.\n In a similar way, you can take a Magic action and use a second command word and free one creature trapped in the mirror. The freed creature appears, along with its possessions, in the unoccupied space nearest to the mirror and facing away from it.\n Placing the mirror inside an extradimensional space created by a Bag of Holding, Portable Hole, or similar item instantly destroys both items and opens a gate to the Astral Plane. The gate originates where the one item was placed inside the other. Any creature within 10 feet of the gate and not behind Total Cover is sucked through it to a random location on the Astral Plane. The gate then closes. The gate is one-way only and can’t be reopened.",
	weight: 50,
	action: [["action", "activate/deactivate"], ["action", "name/free trapped"]],
	toNotesPage: [{
		name: "Workings of the Mirror",
		note: [
			"When this 4-foot-tall, 2-foot-wide mirror is viewed indirectly, its surface shows faint images of creatures. The mirror weighs 50 pounds, and it has AC 11, HP 10, Immunity to Poison and Psychic damage, and Vulnerability to Bludgeoning damage. It shatters and is destroyed when reduced to 0 Hit Points.",
			"If the mirror is hanging on a vertical surface and you are within 5 feet of it, you can take a Magic action and use a command word to activate it. It remains activated until you take a Magic action and repeat the command word to deactivate it.",
			"Any creature other than you that sees its reflection in the activated mirror while within 30 feet of the mirror must succeed on a DC 15 Charisma saving throw or be trapped, along with anything it is wearing or carrying, in one of the mirror’s twelve extradimensional cells. A creature that knows the mirror’s nature makes the save with Advantage, and Constructs succeed on the save automatically.",
			"An extradimensional cell is an infinite expanse filled with thick fog that reduces visibility to 10 feet. Creatures trapped in the mirror’s cells don’t age, and they don’t need to eat, drink, or sleep. A creature trapped within a cell can escape using magic that permits planar travel. Otherwise, the creature is confined to the cell until freed.",
			"If the mirror traps a creature but its twelve extradimensional cells are already occupied, the mirror frees one trapped creature at random to accommodate the new prisoner. A freed creature appears in an unoccupied space within sight of the mirror but facing away from it. If the mirror is shattered, all creatures it contains are freed and appear in unoccupied spaces near it.",
			"While within 5 feet of the mirror, you can take a Magic action to name one creature trapped in it or call out a particular cell by number. The creature named or contained in the named cell appears as an image on the mirror’s surface. You and the creature can then communicate.",
			"In a similar way, you can take a Magic action and use a second command word to free one creature trapped in the mirror. The freed creature appears, along with its possessions, in the unoccupied space nearest to the mirror and facing away from it.",
			"Placing the mirror inside an extradimensional space created by a Bag of Holding, Portable Hole, or similar item instantly destroys both items and opens a gate to the Astral Plane. The gate originates where the one item was placed inside the other. Any creature within 10 feet of the gate and not behind Total Cover is sucked through it to a random location on the Astral Plane. The gate then closes. The gate is one-way only and can’t be reopened.",
		]
	}]
};
MagicItemsList["mithral armor"] = {
	name: "Mithral Armor",
	nameTest: "Mithral",
	source: [["D24", 279]],
	type: "armor (medium or heavy, except hide)",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "Mithral is a light, flexible metal. If the armor normally imposes disadvantage on Dexterity (Stealth) checks or has a Strength requirement, the mithral version of the armor doesn't. This armor can be worn under normal clothes.",
	descriptionFull: "Mithral is a light, flexible metal. This armor can be worn under normal clothes. If the armor normally imposes disadvantage on Dexterity (Stealth) checks or has a Strength requirement, the mithral version of the armor doesn't.",
	allowDuplicates: true,
	chooseGear: {
		type: "armor",
		prefixOrSuffix: "suffix",
		excludeCheck: function (inObjKey, inObj) {
			return !(/medium|heavy/i).test(inObj.type) || (/hide/i).test(inObj.name);
		},
		descriptionChange: ["prefix", "armor"]
	}
};
MagicItemsList["moon-touched sword"] = {
	name: "Moon-Touched Sword",
	nameTest: "Moon-Touched",
	source: [["D24", 280]],
	magicItemTable: "?",
	type: "weapon (Glaive, Greatsword, Longsword, Rapier, Scimitar, or Shortsword)",
	rarity: "common",
	description: "In Darkness, the unsheathed blade of this sword sheds moonlight, creating Bright Light in a 15-ft radius and Dim light for an additional 15 ft.",
	descriptionFull: "In Darkness, the unsheathed blade of this sword sheds moonlight, creating Bright Light in a 15-foot radius and Dim light for an additional 15 feet.",
	chooseGear: {
		type: "weapon",
		prefixOrSuffix: "suffix",
		descriptionChange: ["replace", "sword"],
		excludeCheck: function (inObjKey, inObj) {
			var testRegex = /glaive|greatsword|longsword|rapier|scimitar|shortsword/i;
			return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
		}
	},
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && /glaive|greatsword|longsword|rapier|scimitar|shortsword/i.test(v.baseWeaponName) && /moon.touched/i.test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
				}
			},
			'If I include the words "Moon-Touched" in the name of a sword, it will be treated as the magic weapon Moon-Touched Sword.'
		]
	}
};
MagicItemsList["mystery key"] = {
	name: "Mystery Key",
	source: [["D24", 280]],
	magicItemTable: "?",
	type: "wondrous item",
	rarity: "common",
	description: "A question mark is worked into the head of this key. The key has a 5% chance of unlocking any lock into which it's inserted. Once it unlocks something, the key disappears.",
	descriptionFull: "A question mark is worked into the head of this key. The key has a 5% chance of unlocking any lock into which it's inserted. Once it unlocks something, the key disappears."
};
MagicItemsList["nature's mantle"] = {
	name: "Nature's Mantle",
	source: [["D24", 280]],
	magicItemTable: "?",
	type: "wondrous item",
	rarity: "uncommon",
	attunement: true,
	prerequisite: "Requires attunement by a druid or a ranger",
	prereqeval: function (v) { return classes.known.druid || classes.known.ranger ? true : false; },
	description: "This cloak shifts color and texture to blend with the terrain surrounding me. While wearing the cloak, I can use it as a Spellcasting Focus for my Druid and Ranger spells. While I am in an area that is Lightly Obscured, I can Hide as a Bonus Action even if I am being directly observed.",
	descriptionFull: "This cloak shifts color and texture to blend with the terrain surrounding you. While wearing the cloak, you can use it as a Spellcasting Focus for your Druid and Ranger spells." +
		"\n   While you are in an area that is lightly obscured, you can Hide as a Bonus action even if you are being directly observed.",
	action: [["Bonus action", " (Hide)"]]
};
MagicItemsList["necklace of adaptation"] = {
	name: "Necklace of Adaptation",
	source: [["D24", 280]],
	type: "wondrous item",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "While wearing this necklace, I can breathe normally in any environment, and I have advantage on saving throws made to avoid or end the Poisoned condition.",
	descriptionFull: "While wearing this necklace, you can breathe normally in any environment, and you have advantage on saving throws made to avoid or end the Poisoned condition.",
	weight: 1,
	attunement: true,
	savetxt: {
		adv_vs: ["poisoned"],
	}
};
MagicItemsList["necklace of fireballs"] = {
	name: "Necklace of Fireballs",
	source: [["D24", 280]],
	type: "wondrous item",
	rarity: "rare",
	magicItemTable: "?",
	description: "This necklace has 1d6+3 beads hanging from it. I can take a Magic action to detach a bead and throw it up to 60 ft away. When it reaches the end of its trajectory, the bead detonates as a level 3 Fireball (save DC 15). You can hurl multiple beads, or even the whole necklace, at one time. When you do so, increase the damage of the Fireball by 1d6 for each bead after the first (maximum 12d6).",
	descriptionFull: "This necklace has 1d6+3 beads hanging from it. You can take a Magic action to detach a bead and throw it up to 60 feet away. When it reaches the end of its trajectory, the bead detonates as a level 3 Fireball (save DC 15).\n   You can hurl multiple beads, or even the whole necklace, at one time. When you do so, increase the damage of the Fireball by 1d6 for each bead after the first (maximum 12d6).",
	weight: 1,
	usages: "1d6+3",
	recovery: "Never",
	spellcastingBonus: {
		name: "Fireball",
		spells: ["fireball"],
		selection: ["fireball"]
	},
	fixedDC: 15,
	spellChanges: {
		"fireball": {
			description: "20-ft rad all crea 8d6+1d6/extra bead Fire dmg (max 12d6); save halves; unattended flammable objects ignite",
			components: "M\u2020",
			compMaterial: "Using the Necklace of Fireballs to cast Fireball requires removing and destroying one or more of the beads from it.",
			changes: "Using the Necklace of Fireballs to cast Fireball requires removing and destroing one or more of the beads from it. The damage is that of a Fireball cast a 3rd-level, +1 level per bead thrown as part of the same action beyond the first."
		}
	}
};
MagicItemsList["necklace of prayer beads"] = {
	name: "Necklace of Prayer Beads",
	source: [["D24", 281]],
	type: "wondrous item",
	rarity: "rare",
	magicItemTable: "?",
	description: "This necklace has many beads, 1d4+2 are magical and can each be used to cast a spell once per dawn as a Bonus action. The DM selects the spells from: Bless, Cure Wounds, Greater Restoration, Shining Smite, Guardian of Faith, and Wind Walk. Multiple beads of the same type can be on one necklace.",
	descriptionLong: "This necklace has many beads, 1d4+2 are magical aquamarine, black pearl, or topaz beads and can each be used to cast a spell once per dawn as a Bonus action. The DM selects the bead from: blessing bead (Bless), curing bead (Cure Wounds), favor bead (Greater Restoration), smiting bead (Shining Smite), summons bead (Guardian Bead), and wind walking bead (Wind Walk). Multiple beads of the same type can be on one necklace.",
	descriptionFull: "This necklace has 1d4+2 magic beads made from aquamarine, black pearl, or topaz. It also has many nonmagical beads made from stones such as amber, bloodstone, citrine, coral, jade, pearl, or quartz. If a magic bead is removed from the necklace, that bead loses its magic.\n   Six types of magic beads exist. The DM decides the type of each bead on the necklace or determines it randomly. A necklace can have more than one bead of the same type. To use one, you must be wearing the necklace. Each bead contains a spell that you can cast from it as a Bonus action (using your spell save DC if a save is necessary). Once a magic bead's spell is cast, that bead can't be used again until the next dawn.\n\n" + toUni("d20\tBead of ...\tSpell") + "\n1-6\tBlessing\t\tBless\n7-12\tCuring\t\tCure Wounds (2nd level)\n13-16\tFavor\t\tGreater Restoration\n17-18\tSmiting\t\tShining Smite\n19\tSummons   \tGuardian of Faith\n20\tWind walking\tWind Walk",
	attunement: true,
	prerequisite: "Requires attunement by a cleric, druid, or paladin",
	prereqeval: function (v) { return classes.known.druid || classes.known.paladin || classes.known.ranger ? true : false; },
	weight: 1,
	usages: "1d4+2",
	recovery: "dawn",
	spellcastingAbility: "class",
	spellFirstColTitle: "Us",
	spellcastingBonus: {
		name: "Bead Spells",
		spells: ["bless", "cure wounds", "greater restoration", "shining smite", "guardian of faith", "wind walk"],
		times: 6
	},
	calcChanges: {
		spellAdd: [
			function (spellKey, spellObj, spName) {
				if ((/necklace of prayer beads/i).test(spName)) {
					var toReturn = spellObj.time !== "1 bns";
					spellObj.time = "1 bns";
					spellObj.firstCol = "checkbox";
					if (spellKey === "cure wounds") {
						spellObj.name += " (2nd level)";
						spellObj.description = "1 living creature heals 4d8 + spellcasting ability modifier HP";
					}
					return toReturn;
				}
			},
			"Using the Necklace of Prayer Beads, the casting time is only a Bonus action. Also, Cure Wounds is cast as a 2nd-level spell."
		]
	}
};
MagicItemsList["nine lives stealer"] = {
	name: "Nine Lives Stealer",
	source: [["D24", 281]],
	type: "weapon (any simple or martial)",
	rarity: "very rare",
	magicItemTable: "?",
	attunement: true,
	description: "I have a +2 bonus to attack and damage rolls with this magic weapon. It has 1d8+1 charges and if it inflicts a critical hit while it has charges left on a creature with fewer than 100 HP (and that is not a construct or undead), the target must make a DC 15 Con save or die. If it dies, the sword uses a charge.",
	descriptionFull: "I gain a +2 bonus to attack and damage rolls made with this magic weapon.\n   The sword has 1d8+1 charges. If you score a critical hit against a creature that has fewer than 100 hit points, it must succeed on a DC 15 Constitution saving throw or be slain instantly as the sword tears its life force from its body (a construct or an undead is immune). The sword loses 1 charge if the creature is slain. When the sword has no charges remaining, it loses this property.",
	usages: "1d8+1",
	recovery: "Never",
	chooseGear: {
		type: "weapon",
		prefixOrSuffix: "brackets",
		descriptionChange: ["replace", "weapon"],
	},
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && (/^(?=.*(9|nine))(?=.*(lives|life))(?=.*stealer).*$/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'On crit to target <100 HP, DC 15 Con save or die';
				}
			},
			'If I include the words "Nine Lives Stealer" in a the name of a weapon, it will be treated as the magic weapon Nine Lives Stealer. It has +2 to hit and damage. Also, as long as it has charges left, when it does a critical hit against a creature with fewer than 100 HP, that creature must make a DC 15 Constitution saving throw or die.'
		],
		atkCalc: [
			function (fields, v, output) {
				if ((/^(?=.*(9|nine))(?=.*(lives|life))(?=.*stealer).*$/i).test(v.WeaponTextName)) {
					output.magic = v.thisWeapon[1] + 2;
				}
			}, ''
		]
	}
};
MagicItemsList["nolzur's marvelous pigments"] = {
	name: "Nolzur's Marvelous Pigments",
	nameAlt: "Marvelous Pigments",
	source: [["D24", 281]],
	type: "wondrous item",
	rarity: "very rare",
	magicItemTable: "?",
	description: "This wooden box contains 1d4 pots of pigments and a brush. I can use the brush and 1 pot of pigment to paint any number of 3d objects and terrain features - confined to a 20-ft cube. It takes 10 minutes, regardless of the number of elements, and I must maintain Concentration or all the elements vanish. Nothing created can have a value over 25 gp.",
	descriptionFull: "This fine wooden box contains 1d4 pots of pigment and a brush (weighing 1 pound in total).\n Using the brush and expending 1 pot of pigment, you can paint any number of three-dimensional objects and terrain features (such as walls, doors, trees, flowers, weapons, webs, and pits), provided these elements are all confined to a 20-foot Cube. The effort takes 10 minutes (regardless of the number of elements you create), during which time you must remain in the Cube, and requires Concentration. If your Concentration is broken or you leave the Cube before the work is done, all the painted elements vanish, and the pot of pigment is wasted.\n When the work is done, all the painted objects and terrain features become real. Thus, painting a door on a wall creates an actual door, which can be opened to whatever is beyond. Painting a pit creates a real pit, the entire depth of which must lie within the 20-foot Cube.\n No object created by a pot of pigment can have a value greater than 25 GP, and the total value of all objects created by a pot of pigment can’t exceed 500 GP. If you paint objects of greater value (such as a large pile of gold), they look authentic, but close inspection reveals they’re made from paste, cookies, or some other worthless material.\n If you paint a form of energy such as fire or lightning, the energy dissipates as soon as you complete the painting, doing no harm.",
	weight: 1
};
MagicItemsList["oathbow"] = {
	name: "Oathbow",
	source: [["D24", 282]],
	type: "weapon (shortbow, longbow)",
	rarity: "very rare",
	magicItemTable: "?",
	attunement: true,
	choices: ["Shortbow", "Longbow"],
	"shortbow": {
		description: "When I attack with this longbow and say its command phrase, I make the target my sworn enemy if I don't have one already for 7 days or until it dies. Attacks with this bow vs. it get adv, +3d6 damage, ignore cover (not full), and suffer no disadv. from long range. While it lives, I have disadv. when I use other weapons.",
		descriptionFull: 'When you nock an arrow on this bow, it whispers in Elvish, "Swift defeat to my enemies." When you use this weapon to make a ranged attack, you can, as a command phrase, say, "Swift death to you who have wronged me." The target of your attack becomes your sworn enemy until it dies or until dawn seven days later. You can have only one such sworn enemy at a time. When your sworn enemy dies, you can choose a new one after the next dawn.\n   When you make a ranged attack roll with this weapon against your sworn enemy, you have Advantage on the roll. In addition, your target gains no benefit from Half Cover or Three-Quarters Cover, and you suffer no Disadvantage due to long range. If the attack hits, your sworn enemy takes an extra 3d6 piercing damage.\n   While your sworn enemy lives, you have Disadvantage on attack rolls with all other weapons.',
		weaponOptions: [{
			baseWeapon: "shortbow",
			regExpSearch: /oathbow/i,
			name: "Oathbow",
			source: [["PHB2024", 215]],
			description: "Ammunition, heavy, two-handed; Vex; Vs. sworn enemy: adv, +3d6 damage, no cover/range penalties",
			isMagicWeapon: true,
			selectNow: true
		},],
	},
	"longbow": {
		description: "When I attack with this longbow and say its command phrase, I make the target my sworn enemy if I don't have one already for 7 days or until it dies. Attacks with this bow vs. it get adv, +3d6 damage, ignore cover (not full), and suffer no disadv. from long range. While it lives, I have disadv. when I use other weapons.",
		descriptionFull: 'When you nock an arrow on this bow, it whispers in Elvish, "Swift defeat to my enemies." When you use this weapon to make a ranged attack, you can, as a command phrase, say, "Swift death to you who have wronged me." The target of your attack becomes your sworn enemy until it dies or until dawn seven days later. You can have only one such sworn enemy at a time. When your sworn enemy dies, you can choose a new one after the next dawn.\n   When you make a ranged attack roll with this weapon against your sworn enemy, you have Advantage on the roll. In addition, your target gains no benefit from Half Cover or Three-Quarters Cover, and you suffer no Disadvantage due to long range. If the attack hits, your sworn enemy takes an extra 3d6 piercing damage.\n   While your sworn enemy lives, you have Disadvantage on attack rolls with all other weapons.',
		weaponOptions: [{
			baseWeapon: "longbow",
			regExpSearch: /oathbow/i,
			name: "Oathbow",
			source: [["PHB2024", 215]],
			description: "Ammunition, Heavy, Two-handed; Slow; Vs. sworn enemy: Adv, +3d6 damage, no half-cover or 3/4 cover/range penalties",
			isMagicWeapon: true,
			selectNow: true
		},],
	}
};
MagicItemsList["oil of etherealness"] = { // contains contributions by AelarTheElfRogue
	name: "Oil of Etherealness",
	source: [["D24", 282]],
	type: "potion",
	rarity: "rare",
	magicItemTable: "?",
	description: "This cloudy gray oil can be used once to cover a Medium or smaller creature, along with the equipment it's wearing and carrying (one additional vial is required for each size category above Medium). Applying the oil takes 10 minutes. The affected target then gains the effect of the Etherealness spell for 1 hour.",
	descriptionFull: "One vial of this oil can cover one Medium or smaller creature, along with the equipment it’s wearing and carrying (one additional vial is required for each size category above Medium). Applying the oil takes 10 minutes. The affected creature then gains the effect of the Etherealness spell for 1 hour.\n Beads of this cloudy, gray oil form on the outside of its container and quickly evaporate.",
	weight: 0.5
};
MagicItemsList["oil of sharpness"] = { // contributed by AelarTheElfRogue
	name: "Oil of Sharpness",
	source: [["D24", 282]],
	type: "potion",
	rarity: "very rare",
	magicItemTable: "?",
	description: "This clear, gelatinous oil sparkles with tiny, ultrathin silver shards. One vial of this oil can coat one Melee weapon or twenty pieces of ammunition, but only ammunition and Melee weapons that are nonmagical and deal Slashing or Piercing damage are affected. Applying the oil takes 1 minute, after which the oil magically seeps into whatever it coats, turning the coated weapon into a +3 Weapon or the coated ammunition into +3 Ammunition.",
	descriptionFull: "This clear, gelatinous oil sparkles with tiny, ultrathin silver shards. One vial of this oil can coat one Melee weapon or twenty pieces of ammunition, but only ammunition and Melee weapons that are nonmagical and deal Slashing or Piercing damage are affected. Applying the oil takes 1 minute, after which the oil magically seeps into whatever it coats, turning the coated weapon into a +3 Weapon or the coated ammunition into +3 Ammunition.",
	weight: 0.5
};
MagicItemsList["oil of slipperiness"] = { // contains contributions by AelarTheElfRogue
	name: "Oil of Slipperiness",
	source: [["D24", 283]],
	type: "potion",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "This sticky black unguent can be used once to cover a Medium or smaller creature and its equipment, granting it the effects of  Freedom of Movement for 8 hours. Applying it takes 10 minutes. Alternatively, it can be poured out as an action, duplicating the effects of the Grease spell in a 10-ft square for 8 hours.",
	descriptionFull: "One vial of this oil can cover one Medium or smaller creature, along with the equipment it’s wearing and carrying (one additional vial is required for each size category above Medium). Applying the oil takes 10 minutes. The affected creature then gains the effect of the Freedom of Movement spell for 8 hours.\n Alternatively, the oil can be poured on the ground as a Magic action, where it covers a 10-foot square, duplicating the effect of the Grease spell in that area for 8 hours.\n This sticky, black unguent is thick and heavy, but it flows quickly when poured.",
	weight: 0.5
};
MagicItemsList["orb of direction"] = {
	name: "Orb of Direction",
	source: [["D24", 283]],
	magicItemTable: "?",
	type: "wondrous item",
	rarity: "common",
	description: "This orb can be used as an Arcane Focus. As a Magic action while holding this orb, I can determine which way is magnetic north. Nothing happens if the orb is used in a location that has no magnetic north.",
	descriptionFull: "This orb can be used as an Arcane Focus. While holding this orb, you can take a Magic action to determine which way is magnetic north. Nothing happens if the orb is used in a location that has no magnetic north.",
	weight: 3,
	action: [["action", "Detect North"]]
};
MagicItemsList["orb of time"] = {
	name: "Orb of Time",
	source: [["D24", 284]],
	magicItemTable: "?",
	type: "wondrous item",
	rarity: "common",
	description: "This orb can be used as an Arcane Focus. As a Magic action, while holding this orb, I can determine whether it is morning, afternoon, evening, or nighttime outside. This property functions only on the Material Plane.",
	descriptionFull: "This orb can be used as an Arcane Focus.\n While holding the orb, you can take a Magic action to determine whether it is morning, afternoon, evening, or nighttime. This property functions only on the Material Plane.",
	weight: 3,
	action: [["action", "Detect Time"]]
};