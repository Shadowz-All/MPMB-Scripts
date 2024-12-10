MagicItemsList["plate armor of etherealness"] = {
	name: "Armor of Etherealness",
	nameTest: "of Etherealness",
	source: ["DMG2024", 286],
	type: "armor (half plate or plate)",
	rarity: "legendary",
	attunement: true,
	description: "While you’re wearing this armor, you can take a Magic action and use a command word to gain the effect of the Etherealness spell. The spell ends immediately if you remove the armor or take a Magic action to repeat the command word.",
	descriptionFull: "While you’re wearing this armor, you can take a Magic action and use a command word to gain the effect of the Etherealness spell. The spell ends immediately if you remove the armor or take a Magic action to repeat the command word. This property of the armor can’t be used again until the next dawn.\n Plate consists of shaped, interlocking metal plates to cover the entire body. A suit of plate includes gauntlets, heavy leather boots, a visored helmet, and thick layers of padding underneath the armor. Buckles and straps distribute the weight over the body.",
	allowDuplicates: false,
	stealthdis: true,
	weight: 65,
	strReq: 15,
	chooseGear: {
		type: "armor",
		prefixOrSuffix: "prefix",
		descriptionChange: ["replace", "armor"],
		excludeCheck: function (inObjKey, inObj) {
			return !(/"half plate"|plate/i).test(inObj.name) || (/breastplate/i).test(inObj.name);
		},
	},
	usages: 1,
	recovery: "dawn",
	action: [["action", "start/stop ethereal"]],
	spellcastingBonus: {
		name: "once per dawn",
		spells: ["etherealness"],
		selection: ["etherealness"],
		firstCol: "oncelr"
	},
	spellChanges: {
		"etherealness": {
			components: "",//removed due to item casting
			duration: "10 min",
			description: "I travel to the Ethereal Plane; move there freely, but able to perceive 60 ft into the normal plane",
			changes: "Using the Plate Armor of Etherealness, I can cast Etherealness, but only on myself and it lasts only 10 minutes.",
		}
	}
};
MagicItemsList["pole of angling"] = {
	name: "Pole of Angling",
	source: [["DMG2024", 286]],
	magicItemTable: "?",
	type: "wondrous item",
	rarity: "common",
	description: "This item functions as a Pole. While holding it, you can take a Magic action to cause it to transform into a fishing pole with a hook, a line, and a reel, or have the fishing pole revert to a Pole.",
	descriptionFull: "This item functions as a Pole. While holding it, you can take a Magic action to cause it to transform into a fishing pole with a hook, a line, and a reel, or have the fishing pole revert to a Pole.",
	weight: 7,
	action: [["action", "transform"]],
};
MagicItemsList["pole of collapsing"] = {
	name: "Pole of Collapsing",
	source: [["DMG2024", 286]],
	magicItemTable: "?",
	type: "wondrous item",
	rarity: "common",
	description: "This item functions as a Pole.While holding it, you can take a Magic action to collapse it into a 1-foot - long rod for ease of storage(the pole’s weight doesn’t change) or cause the 1-foot - long rod to revert to a Pole.The rod elongates only as far as the surrounding space allows.",
	descriptionFull: "This item functions as a Pole. While holding it, you can take a Magic action to collapse it into a 1-foot-long rod for ease of storage (the pole’s weight doesn’t change) or cause the 1-foot-long rod to revert to a Pole. The rod elongates only as far as the surrounding space allows.",
	weight: 7,
	action: [["action", "transform"]],
};
MagicItemsList["portable hole"] = {
	name: "Portable Hole",
	source: [["DMG2024", 286]],
	type: "wondrous item",
	rarity: "rare",
	magicItemTable: "?",
	description: "As Magic action, I can unfold this black cloth, 6 ft in diameter, and place it on a solid surface, whereupon it creates a 10-ft deep extradimensional hole. It can't be used to create passages. The space is always the same, so I can store things and creatures in there. Removing it and folding it back takes a Magic action.",
	descriptionFull: "This fine black cloth, soft as silk, is folded up to the dimensions of a handkerchief. It unfolds into a circular sheet 6 feet in diameter.\n You can take a Magic action to unfold a Portable Hole and place it on or against a solid surface, whereupon the Portable Hole creates an extradimensional hole 10 feet deep. The cylindrical space within the hole exists on a different plane of existence, so it can’t be used to create open passages. Any creature inside an open Portable Hole can exit the hole by climbing out of it.\n You can take a Magic action to close a Portable Hole by taking hold of the edges of the cloth and folding it up. Folding the cloth closes the hole, and any creatures or objects within remain in the extradimensional space. No matter what’s in it, the hole weighs next to nothing.\n If the hole is folded up, a creature within the hole’s extradimensional space can take an action to make a DC 10 Strength (Athletics) check. On a successful check, the creature forces its way out and appears within 5 feet of the Portable Hole. A closed Portable Hole holds enough air for 1 hour of breathing, divided by the number of breathing creatures inside.\n Placing a Portable Hole inside an extradimensional space created by a Bag of Holding, Heward’s Handy Haversack, or similar item instantly destroys both items and opens a gate to the Astral Plane. The gate originates where the one item was placed inside the other. Any creature within 10 feet of the gate and not behind Total Cover is sucked through it and deposited in a random location on the Astral Plane. The gate then closes. The gate is one-way only and can’t be reopened.",
	action: [["action", " (place/fold)"]]
};
MagicItemsList["potion of animal friendship"] = {
	name: "Potion of Animal Friendship",
	source: [["DMG2024", 287]],
	type: "potion",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "When you drink this potion, you can cast the level 3 version of the Animal Friendship spell (save DC 13).",
	descriptionFull: "When you drink this potion, you can cast the level 3 version of the Animal Friendship spell (save DC 13). Agitating this potion’s muddy liquid brings little bits into view: a fish scale, a hummingbird feather, a cat claw, or a squirrel hair.",
	weight: 0.5,
	spellChanges: {
		"Animal Friendship": {
			description: "Target up to 3 beasts you can see within 30-ft. Target must succeed on a Wisdom saving throw or be Charmed for duration or until damage is taken.",
			changes: "When using the Potion to cast Animal Friendship, it is cast at 3rd-level."
		},
	}
};
MagicItemsList["potion of clairvoyance"] = {
	name: "Potion of Clairvoyance",
	source: [["DMG2024", 287]],
	type: "potion",
	rarity: "rare",
	magicItemTable: "?",
	description: "When you drink this potion, you gain the effect of the Clairvoyance spell (no Concentration required). An eyeball bobs in this potion’s yellowish liquid but vanishes when the potion is opened.",
	descriptionFull: "When you drink this potion, you gain the effect of the Clairvoyance spell (no Concentration required). An eyeball bobs in this yellowish liquid but vanishes when the potion is opened.",
	weight: 0.5,
};
MagicItemsList["potion of climbing"] = {
	name: "Potion of Climbing",
	source: [["DMG2024", 287]],
	type: "potion",
	rarity: "common",
	magicItemTable: "?",
	description: "When you drink this potion, you gain a Climb Speed equal to your Speed for 1 hour. During this time, you have Advantage on Strength (Athletics) checks to climb.",
	descriptionFull: "When you drink this potion, you gain a Climb Speed equal to your Speed for 1 hour. During this time, you have Advantage on Strength (Athletics) checks to climb. This potion is separated into brown, silver, and gray layers resembling bands of stone. Shaking the bottle fails to mix the colors. ",
	weight: 0.5,
};
MagicItemsList["potion of comprehension"] = {
	name: "Potion of Comprehension",
	source: [["DMG2024", 287]],
	type: "potion",
	rarity: "common",
	magicItemTable: "?",
	description: "When you drink this potion, you gain the effect of the Comprehend Languages spell for 1 hour.. This potion’s liquid is a clear concoction with bits of salt and soot swirling in it.",
	descriptionFull: "When you drink this potion, you gain the effect of the Comprehend Languages spell for 1 hour. This potion’s liquid is a clear concoction with bits of salt and soot swirling in it.",
	weight: 0.5,
};
MagicItemsList["potion of diminution"] = {
	name: "Potion of Diminution",
	source: [["DMG2024", 287]],
	type: "potion",
	rarity: "rare",
	magicItemTable: "?",
	description: "When you drink this potion, you gain the \“reduce\” effect of the Enlarge/Reduce spell for 1d4 hours (no Concentration required).. The red in the potion's liquid continuously contracts to a tiny bead and then expands to color the clear liquid around it.",
	descriptionFull: "When you drink this potion, you gain the \"reduce\" effect of the Enlarge/Reduce spell for 1d4 hours (no concentration required). The red in the potion's liquid continuously contracts to a tiny bead and then expands to color the clear liquid around it. Shaking the bottle fails to interrupt this process.",
	weight: 0.5
};
MagicItemsList["potion of fire breath"] = {
	name: "Potion of Fire Breath",
	source: [["DMG2024", 287]],
	type: "potion",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "After drinking this potion, you can take a Bonus Action to exhale fire at a target within 30 feet of yourself. The target makes a DC 13 Dexterity saving throw, taking 4d6 Fire damage on a failed save or half as much damage on a successful one. The effect ends after you exhale the fire three times or when 1 hour has passed.",
	descriptionFull: "After drinking this potion, you can take a Bonus Action to exhale fire at a target within 30 feet of yourself. The target makes a DC 13 Dexterity saving throw, taking 4d6 Fire damage on a failed save or half as much damage on a successful one. The effect ends after you exhale the fire three times or when 1 hour has passed. This potion's orange liquid flickers, and smoke fills the top of the container and wafts out whenever it is opened.",
	weight: 0.5
};
MagicItemsList["potion of flying"] = {
	name: "Potion of Flying",
	source: [["DMG2024", 287]],
	type: "potion",
	rarity: "very rare",
	magicItemTable: "?",
	description: "When you drink this potion, you gain a Fly Speed equal to your Speed for 1 hour and can hover. If you’re in the air when the potion wears off, you fall unless you have some other means of staying aloft. This potion's clear liquid floats at the top of its container and has cloudy white impurities drifting in it.",
	descriptionFull: "When you drink this potion, you gain a Fly Speed equal to your Speed for 1 hour and can hover. If you’re in the air when the potion wears off, you fall unless you have some other means of staying aloft. This potion's clear liquid floats at the top of its container and has cloudy white impurities drifting in it.",
	weight: 0.5
};
MagicItemsList["potion of gaseous form"] = {
	name: "Potion of Gaseous Form",
	source: [["DMG2024", 287]],
	type: "potion",
	rarity: "rare",
	magicItemTable: "?",
	description: "When you drink this potion, you gain the effect of the Gaseous Form spell for 1 hour (no Concentration required) or until you end the effect as a Bonus Action.This potion's container seems to hold fog that moves and pours like water.",
	descriptionFull: "When you drink this potion, you gain the effect of the Gaseous Form spell for 1 hour (no Concentration required) or until you end the effect as a Bonus Action.. This potion's container seems to hold fog that moves and pours like water.",
	weight: 0.5
};
MagicItemsList["potion of giant strength"] = {
	name: "Potion of Giant Strength",
	source: [["DMG2024", 288]],
	type: "potion",
	description: "When you drink this potion, your Strength score changes for 1 hour. The type of giant determines the score (see the table below). The potion has no effect on you if your Strength is equal to or greater than that score.",
	descriptionFull: "When you drink this potion, your Strength score changes for 1 hour. The type of giant determines the score (see the table below). The potion has no effect on you if your Strength is equal to or greater than that score.\n   This potion’s transparent liquid has floating in it a sliver of light resembling a giant’s fingernail. The potion of frost giant strength and the potion of stone giant strength have the same effect.\n\n" + toUni("Type\t\tStr\tRarity") + "\nHill giant\t\t21\tUncommon\nStone/frost giant\t23\tRare\nFire giant   \t25\tRare\nCloud giant\t27\tVery rare\nStorm giant\t29\tLegendary",
	weight: 0.5,
	allowDuplicates: true,
	choices: ["Hill (Str 21, uncommon)", "Frost (Str 23, rare)", "Stone (Str 23, rare)", "Fire (Str 25, rare)", "Cloud (Str 27, very rare)", "Storm (Str 29, legendary)"],
	"hill (str 21, uncommon)": {
		name: "Potion of Hill Giant Strength",
		sortname: "Potion of Giant Strength, Hill (Str 21)",
		rarity: "uncommon",
		magicItemTable: "?",
		description: "As an action, I can drink this potion or administer it to another to change the consumer's Strength score to 21 for 1 hour. This potion has no effect if the consumer's Strength score is already equal or higher. This potion's transparent liquid has floating in it a sliver of fingernail from a hill giant.",
		descriptionFull: "When you drink this potion, your Strength score changes to 21 for 1 hour. The potion has no effect on you if your Strength is equal to or greater than that score.\n   This potion's transparent liquid has floating in it a sliver of fingernail from a hill giant."
	},
	"frost (str 23, rare)": {
		name: "Potion of Frost Giant Strength",
		sortname: "Potion of Giant Strength, Frost (Str 23)",
		rarity: "rare",
		magicItemTable: "?",
		description: "As an action, I can drink this potion or administer it to another to change the consumer's Strength score to 23 for 1 hour. This potion has no effect if the consumer's Strength score is already equal or higher. This potion's transparent liquid has floating in it a sliver of fingernail from a frost giant.",
		descriptionFull: "When you drink this potion, your Strength score changes to 23 for 1 hour. The potion has no effect on you if your Strength is equal to or greater than that score.\n   This potion's transparent liquid has floating in it a sliver of fingernail from a frost giant."
	},
	"stone (str 23, rare)": {
		name: "Potion of Stone Giant Strength",
		sortname: "Potion of Giant Strength, Stone (Str 23)",
		rarity: "rare",
		magicItemTable: "?",
		description: "As an action, I can drink this potion or administer it to another to change the consumer's Strength score to 23 for 1 hour. This potion has no effect if the consumer's Strength score is already equal or higher. This potion's transparent liquid has floating in it a sliver of fingernail from a stone giant.",
		descriptionFull: "When you drink this potion, your Strength score changes to 23 for 1 hour. The potion has no effect on you if your Strength is equal to or greater than that score.\n   This potion's transparent liquid has floating in it a sliver of fingernail from a stone giant."
	},
	"fire (str 25, rare)": {
		name: "Potion of Fire Giant Strength",
		sortname: "Potion of Giant Strength, Fire (Str 25)",
		rarity: "rare",
		magicItemTable: "?",
		description: "As an action, I can drink this potion or administer it to another to change the consumer's Strength score to 25 for 1 hour. This potion has no effect if the consumer's Strength score is already equal or higher. This potion's transparent liquid has floating in it a sliver of fingernail from a fire giant.",
		descriptionFull: "When you drink this potion, your Strength score changes to 25 for 1 hour. The potion has no effect on you if your Strength is equal to or greater than that score.\n   This potion's transparent liquid has floating in it a sliver of fingernail from a fire giant."
	},
	"cloud (str 27, very rare)": {
		name: "Potion of Cloud Giant Strength",
		sortname: "Potion of Giant Strength, Cloud (Str 27)",
		rarity: "very rare",
		magicItemTable: "?",
		description: "As an action, I can drink this potion or administer it to another to change the consumer's Strength score to 27 for 1 hour. This potion has no effect if the consumer's Strength score is already equal or higher. This potion's transparent liquid has floating in it a sliver of fingernail from a cloud giant.",
		descriptionFull: "When you drink this potion, your Strength score changes to 27 for 1 hour. The potion has no effect on you if your Strength is equal to or greater than that score.\n   This potion's transparent liquid has floating in it a sliver of fingernail from a cloud giant."
	},
	"storm (str 29, legendary)": {
		name: "Potion of Storm Giant Strength",
		sortname: "Potion of Giant Strength, Storm (Str 29)",
		rarity: "legendary",
		magicItemTable: "?",
		description: "As an action, I can drink this potion or administer it to another to change the consumer's Strength score to 29 for 1 hour. This potion has no effect if the consumer's Strength score is already equal or higher. This potion's transparent liquid has floating in it a sliver of fingernail from a storm giant.",
		descriptionFull: "When you drink this potion, your Strength score changes to 29 for 1 hour. The potion has no effect on you if your Strength is equal to or greater than that score.\n   This potion's transparent liquid has floating in it a sliver of fingernail from a storm giant."
	}
};
MagicItemsList["potion of greater invisibility"] = {
	name: "Potion of Greater Invisibility",
	source: [["DMG2024", 288]],
	type: "potion",
	rarity: "very rare",
	magicItemTable: "?",
	description: "This potion’s container looks empty but feels as though it holds liquid. When you drink the potion, you have the Invisible condition for 1 hour. Anything the consumer wears or carries is invisible along with it. If invisible during Initiative Roll, I have Adv on the roll. Attack rolls against me have DisAdv and my attack rolls have Adv.",
	descriptionFull: "This potion’s container looks empty but feels as though it holds liquid. When you drink the potion, you have the Invisible condition for 1 hour. Anything the consumer wears or carries is invisible along with it. If invisible during Initiative Roll, I have Adv on the roll. Attack rolls against me have DisAdv and my attack rolls have Adv.",
	weight: 0.5,
};
MagicItemsList["potion of growth"] = {
	name: "Potion of Growth",
	source: [["DMG2024", 288]],
	type: "potion",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "When you drink this potion, you gain the \“enlarge\” effect of the Enlarge/Reduce spell for 10 minutes (no Concentration required). The red in the potion's liquid continuously expands from a tiny bead to color the clear liquid around it and then contracts.",
	descriptionFull: "When you drink this potion, you gain the \"enlarge\" effect of the Enlarge/Reduce spell for 10 minutes (no concentration required). The red in the potion's liquid continuously expands from a tiny bead to color the clear liquid around it and then contracts. Shaking the bottle fails to interrupt this process.",
	weight: 0.5
};
MagicItemsList["potion of healing"] = {
	name: "Potion of Healing",
	source: [["DMG2024", 288]],
	type: "potion",
	description: "You regain Hit Points when you drink this potion. The number of Hit Points depends on the potion’s rarity, as shown in the table below. This potion's red liquid glimmers when agitated.",
	descriptionFull: "You regain Hit Points when you drink this potion. The number of Hit Points depends on the potion’s rarity, as shown in the table below. Whatever its potency, the potion's red liquid glimmers when agitated.",
	weight: 0.5,
	allowDuplicates: true,
	choices: ["Healing (2d4+2, common)", "Greater Healing (4d4+4, uncommon)", "Superior Healing (8d4+8, rare)", "Supreme Healing (10d4+20, very rare)"],
	"healing (2d4+2, common)": {
		name: "Potion of Healing  ",
		rarity: "common",
		magicItemTable: "?",
		description: "As an action, I can drink this potion or administer it to another to regain 2d4+2 hit points. This potion's red liquid glimmers when agitated.",
		descriptionFull: "You regain 2d4+2 hit points when you drink this potion. The potion's red liquid glimmers when agitated.",
	},
	"greater healing (4d4+4, uncommon)": {
		name: "Potion of Greater Healing",
		sortname: "Potion of Healing, Greater",
		rarity: "uncommon",
		magicItemTable: "?",
		description: "As an action, I can drink this potion or administer it to another to regain 4d4+4 hit points. This potion's red liquid glimmers when agitated.",
		descriptionFull: "You regain 4d4+4 hit points when you drink this potion. The potion's red liquid glimmers when agitated.",
	},
	"superior healing (8d4+8, rare)": {
		name: "Potion of Superior Healing",
		sortname: "Potion of Healing, Superior",
		rarity: "rare",
		magicItemTable: "?",
		description: "As an action, I can drink this potion or administer it to another to regain 8d4+8 hit points. This potion's red liquid glimmers when agitated.",
		descriptionFull: "You regain 8d4+8 hit points when you drink this potion. The potion's red liquid glimmers when agitated.",
	},
	"supreme healing (10d4+20, very rare)": {
		name: "Potion of Supreme Healing",
		sortname: "Potion of Healing, Supreme",
		rarity: "very rare",
		magicItemTable: ["?"],
		description: "As an action, I can drink this potion or administer it to another to regain 10d4+20 hit points. This potion's red liquid glimmers when agitated.",
		descriptionFull: "You regain 10d4+20 hit points when you drink this potion. The potion's red liquid glimmers when agitated.",
	}
};
MagicItemsList["potion of heroism"] = {
	name: "Potion of Heroism",
	source: [["DMG2024", 288]],
	type: "potion",
	rarity: "rare",
	magicItemTable: "?",
	description: "When you drink this potion, you gain 10 Temporary Hit Points that last for 1 hour. For the same duration, you are under the effect of the Bless spell (no Concentration required). For the same duration, the consumer is under the effect of the Bless spell (no concentration required), which adds +1d4 on all attack rolls and saving throws. This blue potion bubbles and steams as if boiling.",
	descriptionFull: "When you drink this potion, you gain 10 Temporary Hit Points that last for 1 hour. For the same duration, you are under the effect of the Bless spell (no Concentration required). This blue potion bubbles and steams as if boiling.",
	weight: 0.5
};
MagicItemsList["potion of invisibility"] = {
	name: "Potion of Invisibility",
	source: [["DMG2024", 288]],
	type: "potion",
	rarity: "rare",
	magicItemTable: "?",
	description: "This potion’s container looks empty but feels as though it holds liquid. When you drink the potion, you have the Invisible condition for 1 hour. The effect ends early if you make an attack roll, deal damage, or cast a spell.",
	descriptionFull: "This potion’s container looks empty but feels as though it holds liquid. When you drink the potion, you have the Invisible condition for 1 hour. The effect ends early if you make an attack roll, deal damage, or cast a spell.",
	weight: 0.5,
};
MagicItemsList["potion of invulnerability"] = {
	name: "Potion of Invulnerability",
	source: [["",]], //Listed on DDB as Free Rules 2024, 188
	type: "potion",
	rarity: "rare",
	magicItemTable: "?",
	description: "For 1 minute after you drink this potion, you have Resistance to all damage.",
	descriptionFull: "For 1 minute after you drink this potion, you have Resistance to all damage. This potion’s syrupy liquid looks like liquefied iron.",
	weight: 0.5,
};
MagicItemsList["potion of longevity"] = {
	name: "Potion of Longevity",
	source: [["DMG2024", 288]],
	type: "potion",
	rarity: "very rare",
	magicItemTable: "?",
	description: "When you drink this potion, your physical age is reduced by 1d6 + 6 years, to a minimum of 13 years. Each time you subsequently drink a Potion of Longevity, there is 10 percent cumulative chance that you instead age by 1d6 + 6 years.",
	descriptionFull: "When you drink this potion, your physical age is reduced by 1d6 + 6 years, to a minimum of 13 years. Each time you subsequently drink a Potion of Longevity, there is 10 percent cumulative chance that you instead age by 1d6 + 6 years. Suspended in this amber liquid is a tiny heart that, against all reason, is still beating. These ingredients vanish when the potion is opened.",
	weight: 0.5
};
MagicItemsList["potion of mind reading"] = {
	name: "Potion of Mind Reading",
	source: [["DMG2024", 288]],
	type: "potion",
	rarity: "rare",
	magicItemTable: "?",
	description: "When you drink this potion, you gain the effect of the Detect Thoughts spell (save DC 13) for 10 minutes (no Concentration required). The potion's dense, purple liquid has an ovoid cloud of pink floating in it.",
	descriptionFull: "When you drink this potion, you gain the effect of the Detect Thoughts spell (save DC 13) for 10 minutes, (no Concentration required). The potion's dense, purple liquid has an ovoid cloud of pink floating in it.",
	weight: 0.5
};
MagicItemsList["potion of poison"] = {
	name: "Potion of Poison",
	source: [["DMG2024", 288]],
	type: "potion",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "If you drink this potion, you take 4d6 Poison damage and must succeed on a DC 13 Constitution saving throw or have the Poisoned condition for 1 hour.",
	descriptionFull: "This concoction looks, smells, and tastes like a Potion of Healing or another beneficial potion. However, it is actually poison masked by illusion magic. Identify reveals its true nature.\n If you drink this potion, you take 4d6 Poison damage and must succeed on a DC 13 Constitution saving throw or have the Poisoned condition for 1 hour.",
	weight: 0.5
};
MagicItemsList["potion of pugilism"] = {
	name: "Potion of Pugilism",
	source: [["DMG2024", 289]],
	type: "potion",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "After you drink this potion, each Unarmed Strike you make deals an extra 1d6 Force damage on a hit. This effect lasts 10 minutes.",
	descriptionFull: "After you drink this potion, each Unarmed Strike you make deals an extra 1d6 Force damage on a hit. This effect lasts 10 minutes. This potion is a thick green fluid that tastes like spinach.",
	weight: 0.5
};
MagicItemsList["potion of resistance"] = {
	name: "Potion of Resistance",
	source: [["DMG2024", 289]],
	type: "potion",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "When you drink this potion, you have Resistance to one type of damage for 1 hour. The DM chooses the type or determines it randomly by rolling on the following table.",
	descriptionFull: "When you drink this potion, you gain resistance to one type of damage for 1 hour. The DM chooses the type or determines it randomly from the options below.\n\n" + toUni("d10\tType\t\td10\tType") + "\n 1\tAcid\t\t 6\tNecrotic\n 2\tCold\t\t 7\tPoison\n 3\tFire\t\t 8\tPsychic\n 4\tForce\t\t 9\tRadiant\n 5\tLightning   \t 10\tThunder",
	weight: 0.5,
	allowDuplicates: true,
	choices: ["Acid", "Cold", "Fire", "Force", "Lightning", "Necrotic", "Poison", "Psychic", "Radiant", "Thunder"],
	choicesNotInMenu: true,
	"acid": {
		name: "Potion of Acid Resistance",
		description: "When you drink this potion, you gain resistance to acid damage for 1 hour."
	},
	"cold": {
		name: "Potion of Cold Resistance",
		description: "When you drink this potion, you gain resistance to cold damage for 1 hour."
	},
	"fire": {
		name: "Potion of Fire Resistance",
		description: "When you drink this potion, you gain resistance to fire damage for 1 hour."
	},
	"force": {
		name: "Potion of Force Resistance",
		description: "When you drink this potion, you gain resistance to force damage for 1 hour."
	},
	"lightning": {
		name: "Potion of Lightning Resistance",
		description: "When you drink this potion, you gain resistance to lightning damage for 1 hour."
	},
	"necrotic": {
		name: "Potion of Necrotic Resistance",
		description: "When you drink this potion, you gain resistance tonecrotic damage for 1 hour."
	},
	"poison": {
		name: "Potion of Poison Resistance",
		description: "When you drink this potion, you gain resistance topoison damage for 1 hour."
	},
	"psychic": {
		name: "Potion of Psychic Resistance",
		description: "When you drink this potion, you gain resistance topsychic damage for 1 hour."
	},
	"radiant": {
		name: "Potion of Radiant Resistance",
		description: "When you drink this potion, you gain resistance toradiant damage for 1 hour."
	},
	"thunder": {
		name: "Potion of Thunder Resistance",
		description: "When you drink this potion, you gain resistance tothunder damage for 1 hour."
	}
};
MagicItemsList["potion of speed"] = {
	name: "Potion of Speed",
	source: [["DMG2024", 289]],
	type: "potion",
	rarity: "very rare",
	magicItemTable: "?",
	description: "When you drink this potion, you gain the effect of the Haste spell for 1 minute (no Concentration required) without suffering the wave of lethargy that typically occurs when the effect ends. The potion's yellow fluid is streaked with black and swirls on its own.",
	descriptionFull: "When you drink this potion, you gain the effect of the Haste spell for 1 minute (no Concentration required) without suffering the wave of lethargy that typically occurs when the effect ends. The potion's yellow fluid is streaked with black and swirls on its own.",
	weight: 0.5
};
MagicItemsList["potion of vitality"] = {
	name: "Potion of Vitality",
	source: [["DMG2024", 289]],
	type: "potion",
	rarity: "very rare",
	magicItemTable: "?",
	description: "When you drink this potion, it removes any Exhaustion levels you have and ends the Poisoned condition on you. For the next 24 hours, you regain the maximum number of Hit Points for any Hit Point Die you spend. The potion's crimson liquid regularly pulses with dull light, calling to mind a heartbeat.",
	descriptionFull: "When you drink this potion, it removes any Exhaustion levels you have and ends the Poisoned condition on you. For the next 24 hours, you regain the maximum number of Hit Points for any Hit Point Die you spend. The potion's crimson liquid regularly pulses with dull light, calling to mind a heartbeat.",
	weight: 0.5
};
MagicItemsList["potion of water breathing"] = {
	name: "Potion of Water Breathing",
	source: [["DMG2024", 289]],
	type: "potion",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "You can breathe underwater for 24 hours after drinking this potion. This potion’s cloudy green fluid smells of the sea and has a jellyfish-like bubble floating in it.",
	descriptionFull: "You can breathe underwater for 24 hours after drinking this potion. This potion’s cloudy green fluid smells of the sea and has a jellyfish-like bubble floating in it.",
	weight: 0.5,
};
MagicItemsList["pot of awakening"] = {
	name: "Pot of Awakening",
	source: [["DMG2024", 289]],
	magicItemTable: "?",
	type: "wondrous item",
	rarity: "common",
	description: "If you plant an ordinary shrub in this 10-pound clay pot and let it grow for 30 days, the shrub magically transforms into an Awakened Shrub at the end of that time. When the shrub awakens, its roots break the pot, destroying it. The awakened shrub is friendly toward me. Absent commands from me, it does nothing.",
	descriptionFull: "If you plant an ordinary shrub in this 10-pound clay pot and let it grow for 30 days, the shrub magically transforms into an Awakened Shrub at the end of that time. When the shrub awakens, its roots break the pot, destroying it.\n   The awakened shrub is friendly toward you. Absent commands from you, it does nothing.",
	weight: 10
};
MagicItemsList["prosthetic limb"] = {
	name: "Prosthetic Limb",
	source: [["DMG2024", 290]],
	magicItemTable: "?",
	type: "wondrous item",
	rarity: "common",
	description: "This magic item replaces a lost limb\u2014a hand, an arm, a foot, a leg, or a similar body part. While the prosthetic is attached, it functions identically to the part it replaces. You can detach or reattach it as a Magic action, and it can’t be removed against your will while you are alive.",
	descriptionFull: "This item replaces a lost limb\u2014a hand, an arm, a foot, a leg, or a similar body part. While the prosthetic is attached, it functions identically to the part it replaces. You can detach or reattach it as a Magic action, and it can't be removed against your will.",
	action: [["action", " (attach/detach)"]]
};
MagicItemsList["quaal's feather token"] = {
	name: "Quaal's Feather Token",
	nameAlt: "Feather Token",
	source: [["DMG2024", 290]],
	type: "wondrous item",
	magicItemTable: "?",
	descriptionFull: "This tiny object looks like a feather. Different types of feather tokens exist, each with a different single-use effect. The DM chooses the kind of token or determines it randomly.\n\n" + toUni("d100\tToken\tRarity\td100\tToken\Rarity") +
		"\n01-20\tAnchor\tUncommon\t51-65\tSwan boat\tRare" +
		"\n21-35\tBird\tRare   \t66-90\tTree\tUncommon" +
		"\n36-50\tFan\tUncommon   \t91-00\tWhip\tRare",
	allowDuplicates: true,
	choices: ["Anchor", "Bird", "Fan", "Swan Boat", "Tree", "Whip"],
	"anchor": {
		description: "You can take a Magic action to touch the token to a boat or ship. For the next 24 hours, the vessel can’t be moved by any means. Touching the token to the vessel again ends the effect. When the effect ends, the token disappears.",
		descriptionFull: "You can take a Magic action to touch the token to a boat or ship. For the next 24 hours, the vessel can’t be moved by any means. Touching the token to the vessel again ends the effect. When the effect ends, the token disappears.",
		action: [["action", ""]]
	},
	"bird": {
		description: "You can take a Magic action to toss the token 5 feet into the air.The token disappears and an enormous, multicolored bird takes its place.The bird has the statistics of a Roc, but it can’t attack.It obeys your simple commands and can carry up to 500 pounds while flying at its maximum speed(16 miles per hour for a maximum of 144 miles per day, with a 1-hour rest for every 3 hours of flying) or 1,000 pounds at half that speed.The bird disappears after flying its maximum distance for a day or if it drops to 0 Hit Points.You can dismiss the bird as a Magic action.",
		descriptionFull: "You can take a Magic action to toss the token 5 feet into the air. The token disappears and an enormous, multicolored bird takes its place. The bird has the statistics of a Roc, but it can’t attack. It obeys your simple commands and can carry up to 500 pounds while flying at its maximum speed (16 miles per hour for a maximum of 144 miles per day, with a 1-hour rest for every 3 hours of flying) or 1,000 pounds at half that speed. The bird disappears after flying its maximum distance for a day or if it drops to 0 Hit Points. You can dismiss the bird as a Magic action.",
		action: [["action", " (use/dismiss)"]]
	},
	"fan": {
		description: "As a Magic action when I'm on a boat or ship, I can toss this token up to 10 ft in the air. The token disappears, and a giant flapping fan takes its place. The fan floats and creates a wind strong enough to fill the sails of one ship, increasing its speed by 5 miles per hour for 8 hours. I can dismiss the fan as an action.",
		descriptionFull: "This tiny object looks like a feather. If you are on a boat or ship, you can use a Magic action to toss the token up to 10 feet in the air. The token disappears, and a giant flapping fan takes its place. The fan floats and creates a wind strong enough to fill the sails of one ship, increasing its speed by 5 miles per hour for 8 hours. You can dismiss the fan as an action.",
		action: [["action", " (create/dismiss)"]]
	},
	"swan boat": {
		description: "You can take a Magic action to touch the token to a body of water at least 60 feet in diameter. The token disappears, and a 50-foot-long, 20-foot-wide boat shaped like a swan takes its place. The boat is self-propelled and moves across water at a speed of 6 miles per hour. You can take a Magic action while on the boat to command it to move or to turn up to 90 degrees. The boat remains for 24 hours and then disappears. You can dismiss the boat as a Magic action.",
		descriptionFull: "You can take a Magic action to touch the token to a body of water at least 60 feet in diameter. The token disappears, and a 50-foot-long, 20-foot-wide boat shaped like a swan takes its place. The boat is self-propelled and moves across water at a speed of 6 miles per hour. You can take a Magic action while on the boat to command it to move or to turn up to 90 degrees. The boat remains for 24 hours and then disappears. You can dismiss the boat as a Magic action.",
		action: [["action", " (create/dismiss)"]]
	},
	"tree": {
		description: "You must be outdoors to use this token. You can take a Magic action to touch it to an unoccupied space on the ground. The token disappears, and in its place a nonmagical oak tree springs into existence. The tree is 60 feet tall and has a 5-foot-diameter trunk, and its branches at the top spread out in a 20-foot radius.",
		descriptionFull: "You must be outdoors to use this token. You can take a Magic action to touch it to an unoccupied space on the ground. The token disappears, and in its place a nonmagical oak tree springs into existence. The tree is 60 feet tall and has a 5-foot-diameter trunk, and its branches at the top spread out in a 20-foot radius.",
		action: [["action", ""]]
	},
	"whip": {
		description: "You can take a Magic action to throw the token to a point within 10 feet of yourself. The token disappears, and a floating whip takes its place. You can then take a Bonus Action to make a melee spell attack against a creature within 10 feet of the whip, with an attack bonus of +9. On a hit, the target takes 1d6 + 5 Force damage.\n As a Bonus Action, you can direct the whip to fly up to 20 feet and repeat the attack against a creature within 10 feet of the whip. The whip disappears after 1 hour, when you take a Magic action to dismiss it, or when you die or have the Incapacitated condition.",
		descriptionFull: "You can take a Magic action to throw the token to a point within 10 feet of yourself. The token disappears, and a floating whip takes its place. You can then take a Bonus Action to make a melee spell attack against a creature within 10 feet of the whip, with an attack bonus of +9. On a hit, the target takes 1d6 + 5 Force damage.\n As a Bonus Action, you can direct the whip to fly up to 20 feet and repeat the attack against a creature within 10 feet of the whip. The whip disappears after 1 hour, when you take a Magic action to dismiss it, or when you die or have the Incapacitated condition.",
		action: [["action", " (create)"], ["bonus action", " (direct)"], ["bonus action", " (whip melee"]],
	},
};
MagicItemsList["quarterstaff of the acrobat"] = {
	name: "Quarterstaff of the Acrobat",
	source: [["DMG2024", 279]],
	type: "weapon (quarterstaff)",
	rarity: "very rare",
	magicItemTable: "?",
	description: "This magic quarterstaff adds a +2 bonus to attack and damage rolls made with it. While holding this weapon, I can emit a dim green light (10ft) as a Bonus Action or after you roll Initiative and can extinguish the light as a Bonus Action. You can take a Bonus Action to alter its form, tunring it into a 6-inch rod or 10-foot pole, or revert it back to its Quarterstaff form.",
	descriptionFull: "This magic weapon adds a +2 bonus to attack and damage rolls made with it. While holding this weapon, I can emit a dim green light (10ft) as a Bonus Action or after initiative and can extinguish the light as a Bonus Action.\n" +
		"\n While holding this weapon, you can take a Bonus Action to alter its form, turning it into a 6-inch rod (for ease of storage) or a 10-foot pole, or reverting it a Quarterstaff; the weapon will elongate only as far as the surrounding space allows." +
		"\n In certain forms, the weapon has the following additional properties." + toUni("Acrobatic Assist - Quarterstaff or 10ft Pole") + "While holding this weapon, you have Advantage on Dex (Acrobatics) checks." + toUni("Attack Deflection - Quarterstaff") + "When you are hit by an attack while holding the weapon, you can take a Reaction to twirl the weapon around you, gaining +5 bonus to your AC against a triggering attack, potentially causing the attack to miss you. You can't use this propety again until you finish a Short or Long Rest." + toUni("Ranged Weapon - Quarterstaff") + "This weapon has the Thrown property with a normal range of 30 feet and a long range of 120 feet. Immediately after you make a ranged attack with the weapon, it flies back to your hand.",
	attunement: true,
	weight: 4,
	modifers: [2, 2],
	action: [["bonus action", "Dim Light/Extinguish Light"], ["bonus action", "Transform Staff"], ["reaction", "Attack Deflection (+5AC)"]],
	savetxt: { adv_vs: ["Acrobatics"] },
	weaponOptions: [{
		baseWeapon: "quarterstaff",
		regExpSearch: /^(?=.*acrobat)(?=.*quarterstaff).*$/i,
		name: "Quarterstaff of the Acrobat",
		source: [["DMG2024", 279]],
		description: "Versatile (1d8); Thrown, Returning; Magical",
		isMagical: true,
		selectNow: true,
	}],
	toNotesPage: [{
		name: "Quartstaff of the Acrobat",
		note: [
			"You gain a +2 bonus to attack rolls and damage rolls with this magic weapon. While holding this weapon, you an cause it to emit green Dim Light out to 10 feet, either as a Bonus Action or after you roll initiative, or you can extinguish the light as a Bonus Action.",
			"\n While holding this weapon, you can take a Bonus Action to alter its form, turning it into a 6-inch rod (for storage) or a 10-foot pole, or reverting it to a Quarterstaff; the weapon will elongate only as far as surrounding space allows.",
			"\n In certain forms, the weapon has the following additional properties:",
			"\u2022 Acrobatic Assist: Quarterstaff or 10-foot Pole Forms Only. While holding this weapon, you have advantage on Dex (Acrobatics) checks.",
			"\u2022 Attack Deflection: Quarterstaff form only. When you are hit by an attack while holding the weapon, you can take a Reaction to twirl the weapon around you, gaining +5 AC against a triggering attack, potentially causing the attack to miss you. You can't use this property again until you finish a Short or Long rest.",
			"\u2022 Ranged Weapon: Quarterstaff form only. This weapon has the >>Thrown<< property with a normal range of 30 feet and a long range of 120 feet. Immediately after you make a ranged attack, it flies back to your hand.",
		]
	}],
};
MagicItemsList["quiver of ehlonna"] = {
	name: "Quiver of Ehlonna",
	nameAlt: "Efficient Quiver",
	source: [["DMG2024", 291]],
	type: "wondrous item",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "This quiver has three compartments and weighs 2 lb, regardless of its contents. Its shortest compartment can hold 60 arrows, bolts, or similar objects. Its midsize compartment holds up to 18 javelins or similar objects. Its longest compartment holds up to 6 long objects, such as bows, quarterstaffs, or spears.",
	descriptionFull: "Each of the quiver's three compartments connects to an extradimensional space that allows the quiver to hold numerous items while never weighing more than 2 pounds. The shortest compartment can hold up to sixty arrows, bolts, or similar objects. The midsize compartment holds up to eighteen javelins or similar objects. The longest compartment holds up to six long objects, such as bows, quarterstaffs, or spears.\n   You can draw any item the quiver contains as if doing so from a regular quiver or scabbard.",
	weight: 2
};