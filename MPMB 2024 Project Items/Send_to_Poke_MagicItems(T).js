var iFileName = "pub_20241112_DMG.js";
RequiredSheetVersion("13.2.1");
SourceList.DMG2024 = {
    name: "2024 Dungeon Master's Guide",
    abbreviation: "DMG2024",
    abbreviationSpellsheet: "D4",
    group: "Core Sources",
    url: "https://marketplace.dndbeyond.com/category/3710000?pid=DB3710000",
    date: "2024/11/12",
};

MagicItemsList["talisman of pure good"] = {
	name: "Talisman of Pure Good",
	source: [["DMG2024", 314]],
	type: "wondrous item",
	rarity: "legendary",
	magicItemTable: "?",
	description: "You can use this talisman as a Holy Symbol, and it gives a +2 bonus to your spell attacks while worn or held. Any Fiend or Undead that touches the talisman takes 8d6 Radiant, and again each time it ends its turn holding or carrying the talisman. As a Magic action, you can use 1 of its 7 charges to have one creature within 120 ft make a DC 20 Dex save, if the target is a Fiend or Undead, it has DisAdv on the roll. On succussful save, target takes 4d6 Psychic. On fail, it falls into the fissure and is destroyed. On last charge, the talisman is destroyed.",
	descriptionFull: "This talisman is a mighty symbol of goodness. A Fiend or an Undead that touches the talisman takes 8d6 Radiant damage and takes the damage again each time it ends its turn holding or carrying the talisman.\n" +
		toUni("Holy Symbol") + ". You can use the talisman as a Holy Symbol. You gain a +2 bonus to spell attack rolls while you wear or hold it.\n " +
		toUni("Pure Rebuke") + ". The talisman has 7 charges. While wearing or holding the talisman, you can take a Magic action to expend 1 charge and target one creature you can see on the ground within 120 feet of yourself. A flaming fissure opens under the target, and the target makes a DC 20 Dexterity saving throw. If the target is a Fiend or an Undead, it has Disadvantage on the save. On a failed save, the target falls into the fissure and is destroyed, leaving no remains. On a successful save, the target isn’t cast into the fissure but takes 4d6 Psychic damage from the ordeal. In either case, the fissure then closes, leaving no trace of its existence. When you expend the last charge, the talisman disperses into motes of golden light and is destroyed.",
	attunement: true,
	weight: 1,
	prerequisite: "Requires attunement by a Cleric or Paladin",
	prereqeval: function (v) {
		return classes.known.cleric || classes.known.paladin ? true : false;
	},
	usages: 7,
	recovery: "never",
	action: [["action", "Pure Rebuke"]],
	calcChanges: {
		spellCalc: [
			function (type, spellcasters, ability) {
				if (type == "attack") return 2;
			},
			"While I wear or hold the Talisman of Pure Good, I have a +2 bonus to spell attack rolls."
		]
	},
};
MagicItemsList["talisman of the sphere"] = {
	name: "Talisman of the Sphere",
	source: [["DMG2024", 315]],
	type: "wondrous item",
	rarity: "legendary",
	magicItemTable: "?",
	description: "While holding or wearing this talisman, you have Advantage on any Intelligence (Arcana) check to control a Sphere of Annihilation. In addition, when you start your turn with control over a Sphere of Annihilation, you can take a Magic action to move it 10 ft plus 10 ft plus your Intelligence modifier.",
	descriptionFull: "While holding or wearing this talisman, you have Advantage on any Intelligence (Arcana) check you make to control a Sphere of Annihilation. In addition, when you start your turn in control of a Sphere of Annihilation, you can take a Magic action to move it 10 feet plus a number of additional feet equal to 10 times your Intelligence modifier. This movement doesn’t have to be in a straight line.",
	attunement: true,
	action: [["action", ""]]
	vision: [["Adv. on Int (Arcana) to control Sphere of Annihil.", 1]],
	weight: 1
};
MagicItemsList["talisman of ultimate evil"] = {
	name: "Talisman of Ultimate Evil",
	source: [["DMG2024", 315]],
	type: "wondrous item",
	rarity: "legendary",
	magicItemTable: "?",
	description: "You can use this talisman as a Holy Symbol and if you are an evil cleric or paladin, it gives a +2 bonus on spell attack rolls while worn or held. As a Magic action, you can use 1 of its 6 charges to have and target 1 creature you can see on the ground within within 120 ft and create a flaming fissure under the target. The target must make a DC 20 Dex save. If target is Celestial, is has Disadvantage on the save. On fail, target falls into fissure and is destroyed. On save, the target takes 4d6 Psychic damage. Non-evil creatures touching it take 8d6 Necrotic damage.",
	descriptionFull: "This item symbolizes unrepentant evil. A creature that isn't a Fiend or Undead takes 8d6 Necrotic damage and takes the damage again each time it ends its turn holding or carrying the talisman\n" +
		toUni("Holy Symbol") + ". You can use the talisman as a Holy Symbol. You gain a +2 bonus to spell attack rolls while you wear or hold it.\n" +
		toUni("Ultimate End") + ". The talisman has 6 charges. While wearing or holding the talisman, you can take a Magic action to expend 1 charge and target one creature you can see on the ground within 120 feet of yourself. A flaming fissure opens under the target, and the target makes a DC 20 Dexterity saving throw. If the target is a Celestial, it has Disadvantage on the save. On a failed save, the target falls into the fissure and is destroyed, leaving no remains. On a successful save, the target isn’t cast into the fissure but takes 4d6 Psychic damage from the ordeal. In either case, the fissure then closes, leaving no trace of its existence. When you expend the last charge, the talisman dissolves into foul-smelling slime and is destroyed.",
	attunement: true,
	weight: 1,
//Commented for now as it isn't in the book or DDB. Kept for later.
//	prerequisite: "Requires attunement by a creature of evil alignment",
//	prereqeval: function (v) { return (/evil/i).test(What("Alignment")); },
	usages: 6,
	recovery: "never",
	action: [["action", ""]],
	calcChanges: {
		spellCalc: [
			function (type, spellcasters, ability) {
				if (type == "attack" && (classes.known.paladin || classes.known.cleric) && (/evil/i).test(What("Alignment"))) return 2;
			},
			"If I'm an evil cleric or paladin, I gain a +2 bonus on my spell attack rolls while wearing or holding the Talisman of Ultimate Evil."
		]
	}
};
MagicItemsList["talking doll"] = {
	name: "Talking Doll",
	source: [["DMG2024", 315]],
	magicItemTable: "?",
	type: "wondrous item",
	rarity: "common",
	attunement: true,
	description: "During a short rest with this doll within 5 ft of you, you can tell it to say up to 6 phrases of up to 6 words each, and set an observable condition under which the doll speaks each phrase. Conditions must happen within 5 ft of the doll. The doll can remember only 6 phrases that are lost when my attunement to it ends.",
	descriptionFull: "While this doll is within 5 feet of you, you can spend a Short Rest telling it to say up to six phrases, none of which can be more than six words long, and set a condition under which the doll speaks each phrase. You can also replace old phrases with new ones. Whatever the condition, it must occur within 5 feet of the doll to make it speak. For example, whenever someone picks up the doll, it might say, “I want a piece of candy.” The doll’s phrases are lost when your Attunement to the doll ends."
};
MagicItemsList["tankard of sobriety"] = {
	name: "Tankard of Sobriety",
	source: [["DMG2024", 315]],
	magicItemTable: "?",
	type: "wondrous item",
	rarity: "common",
	description: "This tankard has a stern face sculpted into one side. You can drink ale, wine, or any other nonmagical alcoholic beverage poured into it without becoming inebriated. The tankard has no effect on magical liquids or harmful substances such as poison.",
	descriptionFull: "This tankard has a stern face sculpted into one side. You can drink ale, wine, or any other nonmagical alcoholic beverage poured into it without becoming inebriated. The tankard has no effect on magical liquids or harmful substances such as poison.",
	weight: 1
};
MagicItemsList["tentacle rod"] = {
	name: "Tentacle Rod",
	source: [["DMG2024", 316]],
	type: "rod",
	rarity: "rare",
	magicItemTable: "?",
	description: "As a Magic action, all 3 tentacles of this rod attack with 15 ft reach, +9 to hit, dealing 1d6 Psychic damage. If a target is hit by all 3 it must make a DC 15 Dex save or be Restrained until you have the Incapacitated condition, released by Bonus Action, or until the target is no longer within 15 feet. While Restrained, the target takes 3d6 Psychic damage at the start of each of its turns. Repeat the save at the end of each of its turns.",
	descriptionFull: "This rod ends in three rubbery tentacles. While holding the rod, you can take a Magic action to direct the tentacles to stretch outward, each one attacking a creature you can see within 15 feet of yourself. For each tentacle, make a melee attack roll with a +9 bonus. A tentacle deals 1d6 Psychic damage on a hit. If you hit the same target with all three tentacles, the target must succeed on a DC 15 Dexterity saving throw or have the Restrained condition until you have the Incapacitated condition, until you take a Bonus Action to release the target, or until the target is no longer within 15 feet of you. While Restrained in this way, the target takes 3d6 Psychic damage at the start of each of its turns. At the end of each of its turns, the target repeats the save, ending the effect on itself on a success.",
	attunement: true,
	weight: 2,
	action: [["action", "Tentacles"], "bonus action", "Release"],
	weaponOptions: [{
		regExpSearch: /^(?=.*tentacle)(?=.*rod).*$/i,
		name: "Tentacle Rod",
		source: [["PHB2024", "-"]],
		ability: 2
		DC: 15,
		type: "Magic Item",
		damage: [1, 6, "psychic"],
		range: "Melee (15 ft)",
		description: "Magic Action: 3 attacks. All hit same: DC 15 Dex save or Restrained. Restrained: +3d6 psychic per turn",
		abilitytodamage: false,
		modifiers: [9, ""],
		weight: 2,
		isAlwaysProf: false,
		selectNow: true
	}]
};
MagicItemsList["thunderous greatclub"] = {
	name: "Thunderous Greatclub",
	source: [["DMG2024", 316]],
	type: "weapon (greatclub)",
	rarity: "very rare",
	magicItemTable: "?",
	description: "While attuned, my Str is 20 and the club deals an extra 1d8 Thunder to creatures. It deals an extra 3d8 Thunder to unattended objects. Magic action to create 30ft cone; all in area DC 15 Str save or Prone. Objects take 3d8 Thunder. Once per dawn Earthquake as Magic Action. See Notes.",
	descriptionLong: "While attuned, my Str is 20 and the club deals an extra 1d8 Thunder to creatures. It deals an extra 3d8 Thunder to unattended objects. Magic action to create 30ft cone; all in area DC 15 Str save or Prone. Objects take 3d8 Thunder. Once per dawn, Magic action for Earthquake. 50-ft radius structures on ground take 50 Bludgeoning and creatures make DC 20 Dex save or Prone. Concentrating creatures make DC 20 Con save or it's broken. I can also create a 30-ft deep 10-ft wide fissure. Creatures make DC 20 Dex save or fall inside and buildings collapse.",
	descriptionFull: "While you are attuned to this magic weapon, your Strength is 20 unless your Strength is already equal to or greater than that score. The weapon deals an extra 1d8 Thunder damage to any creature it hits and an extra 3d8 Thunder damage to objects it hits that aren’t being worn or carried.\n" +
		"The weapon has the following additional properties.\n" +
		toUni("Clap of Thunder") + ". As a Magic action, you can strike the weapon against a hard surface to create a loud clap of thunder audible out to 300 feet. You also create a 30-foot Cone of thunderous energy. Each creature in the Cone must succeed on a DC 15 Strength saving throw or have the Prone condition. Nonmagical objects in the Cone that aren’t being worn or carried take 3d8 Thunder damage.\n" +
		toUni("Earthquake") + " . As a Magic action, you can strike the weapon against the ground to create an intense seismic disturbance in a 50-foot-radius circle centered on the point of impact. Structures in contact with the ground in that area take 50 Bludgeoning damage, and each creature on the ground in that area must succeed on a DC 20 Dexterity saving throw or have the Prone condition. If that creature is also concentrating, it must succeed on a DC 20 Constitution saving throw or its Concentration is broken. In addition, you can cause a 30-foot-deep, 10-foot-wide fissure to open up on the ground anywhere in the area. Any creature on a spot where the fissure opens must succeed on a DC 20 Dexterity saving throw, falling into the fissure on a failed save or moving with the fissure’s edge on a successful one. Any structure on a spot where the fissure opens collapses into the fissure. Once you use this property, it can’t be used again until the next dawn.",
	attunement: true,
	weight: 10,
	scoresOverride: [20, 0, 0, 0, 0, 0],
	action: [["action", "Clap of Thunder"], ["action", "Earthquake"]],
	weaponAdd: "thunderous greatclub",
	weaponOptions: [{
		baseWeapon: "greatclub",
		regExpSearch: /^(?=.*thunderous)(?=.*greatclub).*$/i,
		name: "thunderous greatclub",
		source: [["DMG2024", "-"]],
		description: "Two-handed, Push; +1d8 Thunder v Crea; +3d8 v Obj;",
		isMagicWeapon: true,
		selectNow: true,
	}],
	extraLimitedFeatures: [{
		name: "Earthquake",
		usages: 1,
		recovery: "dawn",
		description: "As a Magic action you can strike the weapon against the ground to create a seismic disturbance in 50 ft radius center on point of impact. Structures take 50 bludgeoning dmg, each creature in area make DC 20 DEX save or fall Prone. If creature is concentrating, make DC 20 CON save or lose concentration. You open a 30ft deep, 10ft wide fissure on ground anywhere in the area. Any creature on a spot where the fissure opens must make a DC20 DEX save, falling into the fissure on failure or moving to the edge on sucess. Any structure on a fissure spot collapses into fissure. Once you used this property, it can't be used again until the next dawn."
	}],
	toNotesPage: [{
		name: "Thunderous Greatclub",
		note: [
			"While you are attuned to this magic weapon, your Strength is 20 unless your Strength is already equal to or greater than that score." +
			"The weapon deals an extra 1d8 Thunder damage to any creature it hits and an extra 3d8 Thunder damage to objects it hits that aren’t being worn or carried.\n" +
			"The weapon has the following additional properties:\n" +
			"\u2022 Clap of Thunder. As a Magic action, you can strike the weapon against a hard surface to create a loud clap of thunder audible out to 300 feet. You also create a 30-foot Cone of thunderous energy. Each creature in the Cone must succeed on a DC 15 Strength saving throw or have the Prone condition. Nonmagical objects in the Cone that aren’t being worn or carried take 3d8 Thunder damage.\n" +
			"\u2022 Earthquake. As a Magic action, you can strike the weapon against the ground to create an intense seismic disturbance in a 50-foot-radius circle centered on the point of impact. Structures in contact with the ground in that area take 50 Bludgeoning damage, and each creature on the ground in that area must succeed on a DC 20 Dexterity saving throw or have the Prone condition. If that creature is also concentrating, it must succeed on a DC 20 Constitution saving throw or its Concentration is broken. In addition, you can cause a 30-foot-deep, 10-foot-wide fissure to open up on the ground anywhere in the area. Any creature on a spot where the fissure opens must succeed on a DC 20 Dexterity saving throw, falling into the fissure on a failed save or moving with the fissure’s edge on a successful one. Any structure on a spot where the fissure opens collapses into the fissure. Once you use this property, it can’t be used again until the next dawn.",
		]
	}],
};
MagicItemsList["tome of clear thought"] = {
	name: "Tome of Clear Thought",
	source: [["DMG2024", 317]],
	type: "wondrous item",
	rarity: "very rare",
	magicItemTable: "?",
	description: "This book contains memory and logic exercises, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book’s contents and practicing its guidelines, your Intelligence increases by 2, to a maximum of 30. The manual then loses its magic but regains it in a century.",
	descriptionFull: "This book contains memory and logic exercises, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book's contents and practicing its guidelines, your Intelligence score increases by 2, to a maximum of 30. The manual then loses its magic but regains it in a century.",
	weight: 5,
	scoresMaximum: [0, 0, 0, 30, 0, 0],
	eval: function () {
		MagicItemsList["manual of bodily health"].applyStatBonus("Tome of Clear Thought", "Intelligence", 2);
	}
};
MagicItemsList["tome of leadership and influence"] = {
	name: "Tome of Leadership and Influence",
	source: [["DMG2024", 317]],
	type: "wondrous item",
	rarity: "very rare",
	magicItemTable: "?",
	description: "This book contains guidelines for influencing and charming others and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying its contents and practicing its guidelines, your Charisma score increases by 2, to a maximum of 30. The manual then loses its magic, but regains it in a century.",
	descriptionFull: "This book contains guidelines for influencing and charming others, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book's contents and practicing its guidelines, your Charisma score increases by 2, as does your maximum for that score. The manual then loses its magic, but regains it in a century.",
	weight: 5,
	scoresMaximum: [0, 0, 0, 0, 0, 30],
	eval: function () {
		MagicItemsList["manual of bodily health"].applyStatBonus("Tome of Leadership and Influence", "Charisma", 2);
	}
};
MagicItemsList["tome of the stilled tongue"] = {
	name: "Tome of the Stilled Tongue",
	source: [["DMG2024", 317]],
	type: "wondrous item",
	rarity: "legendary",
	magicItemTable: "?",
	description: "You can use this thick leather-bound tome as a spellbook and an arcane focus. Once per dawn while holding it, you can take a Bonus action to cast a spell you have written in it, without expending a spell slot or using any verbal or somatic components. Once used, this property can't be used again until the next dawn. Removing the tongue on the cover erases all spells within.",
	descriptionFull: "This book has a desiccated tongue pinned to its front cover. Five of these tomes exist, and it’s unknown which one is the original. The tongue on the first Tome of the Stilled Tongue belonged to a treacherous former servant of the lich Vecna. The tongues pinned to the covers of the four copies came from other spellcasters who crossed Vecna. The first few pages of each tome are filled with indecipherable scrawls. The remaining pages are blank.\n   While attuned to this item, you can use it as a Spellbook and an Arcane Focus. In addition, while holding the tome, you can take a Bonus Action to cast a spell you have written in this tome, without expending a spell slot or using any Verbal or Somatic components. Once used, this property of the tome can’t be used again until the next dawn.\n   Only you can remove the tongue from the book’s cover. If you do so, all spells written in the book are permanently erased.\n   Vecna watches anyone using this tome and can write cryptic messages in it. These messages typically fade away after they are read.",
	attunement: true,
	weight: 5,
	prerequisite: "Requires attunement by a wizard",
	prereqeval: function (v) { return classes.known.wizard ? true : false; },
	action: [["bonus action", ""]],
	usages: 1,
	recovery: "dawn"
};
MagicItemsList["tome of understanding"] = {
	name: "Tome of Understanding",
	source: [["DMG2024", 317]],
	type: "wondrous item",
	rarity: "very rare",
	magicItemTable: "?",
	description: "This book contains intuition and insight exercises, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying its contents and practicing its guidelines, your Wisdom score increases by 2, to a maximum of 30. The manual then loses its magic, but regains it in a century.",
	descriptionFull: "This book contains intuition and insight exercises, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book’s contents and practicing its guidelines, your Wisdom increases by 2, to a maximum of 30. The manual then loses its magic, but regains it in a century.",
	weight: 5,
	scoresMaximum: [0, 0, 0, 0, 30, 0],
	eval: function () {
		MagicItemsList["manual of bodily health"].applyStatBonus("Tome of Understanding", "Wisdom", 2);
	}
};
MagicItemsList["trident of fish command"] = {
	name: "Trident of Fish Command",
	source: [["DMG2024", 317]],
	type: "weapon (trident)",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "This magic weapon has 3 charges, regaining 1d3 at dawn. While you carry it, you can expend 1 charge to cast Dominate Beast (save DC 15) from it on a Beast that has a Swim Speed.",
	descriptionFull: "This magic weapon has 3 charges, and it regains 1d3 expended charges daily at dawn. While you carry it, you can expend 1 charge to cast Dominate Beast (save DC 15) from it on a Beast that has a Swim Speed.",
	attunement: true,
	weight: 4,
	usages: 3,
	recovery: "dawn",
	additional: "regains 1d3",
	weaponsAdd: ["Trident of Fish Command"],
	weaponOptions: {
		baseWeapon: "trident",
		regExpSearch: /^(?=.*trident)(?=.*fish)(?=.*command).*$/i,
		name: "Trident of Fish Command",
		source: [["PHB2024", "-"]],
	},
	fixedDC: 15,
	spellFirstColTitle: "Ch",
	spellcastingBonus: {
		name: "1 charge",
		spells: ["dominate beast"],
		selection: ["dominate beast"],
		firstCol: 1
	},
	spellChanges: {
		"dominate beast": {
			description: "1 beast with swim speed save or charmed, redo on dmg; follows telepathic commands; rea for rea ",
			changes: "Can only affect beasts with innate swim speed."
		}
	}
};
