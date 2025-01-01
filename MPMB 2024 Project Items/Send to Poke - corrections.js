MagicItemsList["lantern of revealing"] = {
	name: "Lantern of Revealing",
	source: [["DMG2024", 275]],
	type: "wondrous item",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "This lantern burns for 6 hours on 1 pint of oil. It shines Bright Light in a 30-ft radius and Dim Light for an additional 30 ft. Invisible objects and creatures are visible in the lantern's Bright Light. As a Utilize action, I can lower the hood, making it only Dim Light in a 5-ft radius.",
	descriptionFull: "While lit, this hooded lantern burns for 6 hours on 1 pint of oil, shedding Bright Light in a 30-foot radius and Dim Light for an additional 30 feet. Invisible creatures and objects are visible as long as they are in the lantern’s Bright Light. You can take a Utilize action to lower the hood, reducing the lantern’s light to Dim Light in a 5-foot radius.",
	action: [["action", " (hood up/down)"]]
};
MagicItemsList["lock of trickery"] = {
	name: "Lock of Trickery",
	source: [["DMG2024", 275]],
	magicItemTable: "?",
	type: "wondrous item",
	rarity: "common",
	description: "This lock appears to be an ordinary Lock and comes with a single key. The tumblers in this lock magically adjust to thwart burglars. Dexterity checks made to pick the lock have Disadvantage.",
	descriptionFull: "This lock appears to be an ordinary Lock (of the type described in chapter 6 of the Player’s Handbook) and comes with a single key. The tumblers in this lock magically adjust to thwart burglars. Dexterity checks made to pick the lock have Disadvantage.",
	weight: 1
};
MagicItemsList["luck blade"] = {
	name: "Luck Blade",
	source: [["DMG2024", 275]],
	type: "weapon (glaive, greatsword, longsword, rapier, scimitar, sickle, or shortsword)",
	rarity: "legendary",
	magicItemTable: "?",
	attunement: true,
	description: "This magic weapon has a +1 bonus to attack and damage rolls made with it, and grants me +1 to all saves. Once per dawn, I can use its luck to reroll one failed D20 Test, but I must use the second result. While holding it, I can expend one of its 1d3 charges to cast Wish from it, once per dawn. Charges can't be regained.",
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
	source: [["DMG2024", 275]],
	type: "weapon (club)",
	rarity: "very rare",
	magicItemTable: "?",
	description: "This reinforced lute can be wielded as a magic Club that deals an extra 2d8 Thunder damage on a hit.",
	descriptionLong: "This reinforced lute can be wielded as a magic Club that deals an extra 2d8 Thunder damage on a hit.\n \u2022 Sing and Swing. If you're a bard, you can use your Charisma modifier instead of your Strength Modifier when making a melee attack roll provided you sing or hum while making the attack.",
	descriptionFull: "This reinforced lute can be wielded as a magic Club that deals an extra 2d8 Thunder damage on a hit.\n\n" +
		toUni("Sing and Swing") + "If you're a Bard, you can use your Charisma Modifier instead of your Strength modifier when making a melee attack roll with the lute, provided you sing or hum while making the attack.",
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
			"You can use your Charisma modifier instead of your Strength modifier when making a melee attack roll with the lute, provided you sing or hum while making the attack"
		]
	}],
	selfChoosing: function () {
		return classes.known.bard ? "lute of thunderous thumping (bard)" : "lute of thunderous thumping (not bard)";
	},
	"lute of thunderous thumping (bard)": {
		name: "Lute of Thunderous Thumping",
		source: [["DMG2024", 275]],
		description: "This reinforced lute can be wielded as a magic Club that deals an extra 2d8 Thunder damage on a hit.\n\n" + toUni("Sing and Swing") + "You can use your Charisma Modifier instead of your Strength modifier when making a melee attack roll with the lute, provided you sing or hum while making the attack.",
		weaponsAdd: "Lute of Thunderous Thumping",
		weaponOptions: {
			baseWeapon: "club",
			regExpSearch: /lute of thunderous thumping/i,
			name: "Lute of Thunderous Thumping",
			source: [["DMG2024", 275]],
			description: "light, slow, +2d8 thunder",
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
		source: [["DMG2024", 275]],
		description: "\n\n" + toUni("Sing and Swing") + "You can use your Charisma Modifier instead of your Strength modifier when making a melee attack roll with the lute, provided you sing or hum while making the attack.",
		weaponsAdd: "Lute of Thunderous Thumping",
		weaponOptions: {
			baseWeapon: "club",
			regExpSearch: /lute of thunderous thumping/i,
			name: "Lute of Thunderous Thumping",
			source: [["DMG2024", 275]],
			description: "light, slow, +2d8 thunder",
		}
	},
};
MagicItemsList["mace of disruption"] = {
	name: "Mace of Disruption",
	source: [["DMG2024", 276]],
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
		source: [["SRD", 229], ["D", 179]],
		description: "Fiend/undead +2d6 radiant damage, and if HP<26, DC 15 Wis save or destroyed, on success: frightened until my next turn ends,"
	}
};
MagicItemsList["mace of smiting"] = {
	name: "Mace of Smiting",
	source: [["DMG2024", 276]],
	type: "weapon (mace)",
	rarity: "rare",
	magicItemTable: "?",
	description: "I gain a +1 bonus (+3 vs. constructs) to attack and damage rolls made with it. When I roll a 20 on an attack roll, the target takes an extra 7 bludgeoning damage, or 14 bludgeoning damage if it's a Construct. If a Construct has 25 or fewer HP after taking this damage, it is destroyed.",
	descriptionFull: "You gain a +1 bonus to attack and damage rolls made with this magic weapon. The bonus increases to +3 when you use the mace to attack a Construct.\n   When you roll a 20 on an attack roll made with this weapon, the target takes an extra 7 bludgeoning damage, or 14 bludgeoning damage if it's a Construct. If a Construct has 25 hit points or fewer after taking this damage, it is destroyed.",
	weight: 4,
	weaponsAdd: ["Mace of Smiting"],
	weaponOptions: {
		baseWeapon: "mace",
		regExpSearch: /^(?=.*mace)(?=.*smiting).*$/i,
		name: "Mace of Smiting",
		source: [["PHB2024", "-"]],
		description: "+1 to hit/damage (+3 vs. Constructs); On 20 to hit: +7 damage (+14 vs. Constructs); Constructs HP<= 25 destroyed; Sap",
		modifiers: [1, 1],
	}
};
MagicItemsList["mace of terror"] = {
	name: "Mace of Terror",
	source: [["DMG2024", 276]],
	type: "weapon (mace)",
	rarity: "rare",
	magicItemTable: "?",
	description: "While holding this weapon, as a Magic action, I can expend 1 charge to release a wave of terror. Each creature of my choice within 30 ft must succeed on a DC 15 Wis save or be Frightened of me for 1 min, repeating the save at the end of its turns. While frightened, it takes only the Dash action to move away (or action to free itself), no reactions, and can't move within 30 ft of me.",
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
		source: [["PHB2024", "-"]],
	}
};
MagicItemsList["mantle of spell resistance"] = {
	name: "Mantle of Spell Resistance",
	source: [["DMG2024", 276]],
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
	source: [["DMG2024", 277]],
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
	source: [["DMG2024", 277]],
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
	source: [["DMG2024", 277]],
	type: "wondrous item",
	rarity: "very rare",
	magicItemTable: "?",
	description: "This tome can only be used by a spellcaster with two 5th-level spell slots. Others reading it take 6d6 psychic damage.",
	descriptionFull: "This tome contains information and incantations necessary to make a particular type of golem. The DM chooses the type or determines it randomly by rolling on the accompanying table. To decipher and use the manual, you must be a spellcaster with at least two level 5 spell slots. A creature that can’t use a Manual of Golems and attempts to read it takes 6d6 Psychic damage.\n"+" To create a golem, you must spend the time shown on the table, working without interruption with the manual at hand and resting no more than 8 hours per day. You must also pay the specified cost to purchase supplies.\n"+" Once you finish creating the golem, the book is consumed in eldritch flames. The golem becomes animate when the ashes of the manual are sprinkled on it. See the Monster Manual for the golem’s stat block. The golem is under your control, and it understands and obeys your commands.",
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
	source: [["DMG2024", 278]],
	type: "wondrous item",
	rarity: "very rare",
	magicItemTable: "?",
	description: "This book contains coordination and balance exercises, and its words are charged with magic. If I spend 48 hours over a period of 6 days or fewer studying the book's contents and practicing its guidelines, my Dexterity score increases by 2, to a maximum of 30. The manual then loses its magic, but regains it in a century.",
	descriptionFull: "This book contains coordination and balance exercises, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book's contents and practicing its guidelines, your Dexterity score increases by 2, to a maximum of 30. The manual then loses its magic, but regains it in a century.",
	weight: 5,
	eval: function () {
		MagicItemsList["manual of bodily health"].applyStatBonus("Manual of Quickness of Action", "Dexterity", 2);
	}
};
MagicItemsList["mariner's armor"] = {
	name: "Mariner's Armor",
	nameTest: "Mariner's Armor",
	source: [["DMG2024", 278]],
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
	source: [["DMG2024", 278]],
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
	source: [["DMG2024", 278]],
	type: "wondrous item",
	rarity: "very rare",
	magicItemTable: "?",
	description: "As an action when I'm within 5 ft of this mirror, I can speak its command word and activate it and it remains activated until I do so again. Creatures other than me who look in the activated mirror must make a DC 15 Charisma save or become trapped in one of its twelve extradimensional cells. See Notes page for info.",
	descriptionFull: "When this 4-foot-tall, 2 foot wide mirror is viewed indirectly, its surface shows faint images of creatures. The mirror weighs 50 pounds, and it has AC 11, 10 HP, Immunity to Poison and Psychic damage, and Vulnerability to Bludgeoning damage. It shatters and is destroyed when reduced to 0 Hit Points.\n   If the mirror is hanging on a vertical surface and you am within 5 feet of it, you can use take a Magic action and repeat the command word to deactivate it.\n   Any creature other than you that sees its reflection in the activated mirror while within 30 feet of it must succeed on a DC 15 Charisma saving throw or be trapped, along with anything it is wearing or carrying, in one of the mirror's twelve extradimensional cells. A creature that knows the mirror’s nature makes the save with Advantage, and Constructs succeed on the save automatically.\n   An extradimensional cell is an infinite expanse filled with thick fog that reduces visibility to 10 feet. Creatures trapped in the mirror's cells don't age, and they don't need to eat, drink, or sleep. A creature trapped within a cell can escape using magic that permits planar travel. Otherwise, the creature is confined to the cell until freed.\n   If the mirror traps a creature but its twelve extradimensional cells are already occupied, the mirror frees one trapped creature at random to accommodate the new prisoner. A freed creature appears in an unoccupied space within sight of the mirror but facing away from it. If the mirror is shattered, all creatures it contains are freed and appear in unoccupied spaces near it.\n   While within 5 feet of the mirror, you can take a Magic action to name one creature trapped in it or call out a particular cell by number. The creature named or contained in the named cell appears as an image on the mirror's surface. You and the creature can them communicate.\n In a similar way, you can take a Magic action and use a second command word and free one creature trapped in the mirror. The freed creature appears, along with its possessions, in the unoccupied space nearest to the mirror and facing away from it.\n Placing the mirror inside an extradimensional space created by a Bag of Holding, Portable Hole, or similar item instantly destroys both items and opens a gate to the Astral Plane. The gate originates where the one item was placed inside the other. Any creature within 10 feet of the gate and not behind Total Cover is sucked through it to a random location on the Astral Plane. The gate then closes. The gate is one-way only and can’t be reopened.",
	weight: 50,
	action: [["action", "activate/deactivate"],["action", "name/free trapped"]],
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
	source: [["DMG2024", 279]],
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
	source: [["DMG2024", 280]],
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
	source: [["DMG2024", 280]],
	magicItemTable: "?",
	type: "wondrous item",
	rarity: "common",
	description: "A question mark is worked into the head of this key. The key has a 5% chance of unlocking any lock into which it's inserted. Once it unlocks something, the key disappears.",
	descriptionFull: "A question mark is worked into the head of this key. The key has a 5% chance of unlocking any lock into which it's inserted. Once it unlocks something, the key disappears."
};
MagicItemsList["nature's mantle"] = {
	name: "Nature's Mantle",
	source: [["DMG2024", 280]],
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
	source: [["DMG2024", 280]],
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
	source: [["DMG2024", 280]],
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
	source: [["DMG2024", 281]],
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
	source: [["DMG2024", 281]],
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
	source: [["DMG2024", 281]],
	type: "wondrous item",
	rarity: "very rare",
	magicItemTable: "?",
	description: "This wooden box contains 1d4 pots of pigments and a brush. I can use the brush and 1 pot of pigment to paint any number of 3d objects and terrain features - confined to a 20-ft cube. It takes 10 minutes, regardless of the number of elements, and I must maintain Concentration or all the elements vanish. Nothing created can have a value over 25 gp.",
	descriptionFull: "This fine wooden box contains 1d4 pots of pigment and a brush (weighing 1 pound in total).\n Using the brush and expending 1 pot of pigment, you can paint any number of three-dimensional objects and terrain features (such as walls, doors, trees, flowers, weapons, webs, and pits), provided these elements are all confined to a 20-foot Cube. The effort takes 10 minutes (regardless of the number of elements you create), during which time you must remain in the Cube, and requires Concentration. If your Concentration is broken or you leave the Cube before the work is done, all the painted elements vanish, and the pot of pigment is wasted.\n When the work is done, all the painted objects and terrain features become real. Thus, painting a door on a wall creates an actual door, which can be opened to whatever is beyond. Painting a pit creates a real pit, the entire depth of which must lie within the 20-foot Cube.\n No object created by a pot of pigment can have a value greater than 25 GP, and the total value of all objects created by a pot of pigment can’t exceed 500 GP. If you paint objects of greater value (such as a large pile of gold), they look authentic, but close inspection reveals they’re made from paste, cookies, or some other worthless material.\n If you paint a form of energy such as fire or lightning, the energy dissipates as soon as you complete the painting, doing no harm.",
	weight: 1
};
MagicItemsList["oathbow"] = {
	name: "Oathbow",
	source: [["DMG2024", 282]],
	type: "weapon (shortbow, longbow)",
	rarity: "very rare",
	magicItemTable: "?",
	attunement: true,
	choices: ["shortbow", "longbow"],
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
	source: [["DMG2024", 282]],
	type: "potion",
	rarity: "rare",
	magicItemTable: "?",
	description: "This cloudy gray oil can be used once to cover a Medium or smaller creature, along with the equipment it's wearing and carrying (one additional vial is required for each size category above Medium). Applying the oil takes 10 minutes. The affected target then gains the effect of the Etherealness spell for 1 hour.",
	descriptionFull: "One vial of this oil can cover one Medium or smaller creature, along with the equipment it’s wearing and carrying (one additional vial is required for each size category above Medium). Applying the oil takes 10 minutes. The affected creature then gains the effect of the Etherealness spell for 1 hour.\n Beads of this cloudy, gray oil form on the outside of its container and quickly evaporate.",
	weight: 0.5
};
MagicItemsList["oil of sharpness"] = { // contributed by AelarTheElfRogue
	name: "Oil of Sharpness",
	source: [["DMG2024", 282]],
	type: "potion",
	rarity: "very rare",
	magicItemTable: "?",
	description: "This clear, gelatinous oil sparkles with tiny, ultrathin silver shards. One vial of this oil can coat one Melee weapon or twenty pieces of ammunition, but only ammunition and Melee weapons that are nonmagical and deal Slashing or Piercing damage are affected. Applying the oil takes 1 minute, after which the oil magically seeps into whatever it coats, turning the coated weapon into a +3 Weapon or the coated ammunition into +3 Ammunition.",
	descriptionFull: "This clear, gelatinous oil sparkles with tiny, ultrathin silver shards. One vial of this oil can coat one Melee weapon or twenty pieces of ammunition, but only ammunition and Melee weapons that are nonmagical and deal Slashing or Piercing damage are affected. Applying the oil takes 1 minute, after which the oil magically seeps into whatever it coats, turning the coated weapon into a +3 Weapon or the coated ammunition into +3 Ammunition.",
	weight: 0.5
};
MagicItemsList["oil of slipperiness"] = { // contains contributions by AelarTheElfRogue
	name: "Oil of Slipperiness",
	source: [["DMG2024", 283]],
	type: "potion",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "This sticky black unguent can be used once to cover a Medium or smaller creature and its equipment, granting it the effects of  Freedom of Movement for 8 hours. Applying it takes 10 minutes. Alternatively, it can be poured out as an action, duplicating the effects of the Grease spell in a 10-ft square for 8 hours.",
	descriptionFull: "One vial of this oil can cover one Medium or smaller creature, along with the equipment it’s wearing and carrying (one additional vial is required for each size category above Medium). Applying the oil takes 10 minutes. The affected creature then gains the effect of the Freedom of Movement spell for 8 hours.\n Alternatively, the oil can be poured on the ground as a Magic action, where it covers a 10-foot square, duplicating the effect of the Grease spell in that area for 8 hours.\n This sticky, black unguent is thick and heavy, but it flows quickly when poured.",
	weight: 0.5
};
MagicItemsList["orb of direction"] = {
	name: "Orb of Direction",
	source: [["DMG2024", 283]],
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
	source: [["DMG2024", 284]],
	magicItemTable: "?",
	type: "wondrous item",
	rarity: "common",
	description: "This orb can be used as an Arcane Focus. As a Magic action, while holding this orb, I can determine whether it is morning, afternoon, evening, or nighttime outside. This property functions only on the Material Plane.",
	descriptionFull: "This orb can be used as an Arcane Focus.\n While holding the orb, you can take a Magic action to determine whether it is morning, afternoon, evening, or nighttime. This property functions only on the Material Plane.",
	weight: 3,
	action: [["action", "Detect Time"]]
};
MagicItemsList["pearl of power"] = { // contains contributions by AelarTheElfRogue
	name: "Pearl of Power",
	source: [["DMG2024", 284]],
	type: "wondrous item",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "While this pearl is on your person, I can take a Magic action to regain one expended spell slot of level 3 or lower. Once I have used the pearl, it can't be used again until the next dawn.",
	descriptionFull: "While this pearl is on your person, you can take a Magic action to regain one expended spell slot of level 3 or lower. Once you have used the pearl, it can't be used again until the next dawn.",
	attunement: true,
	prerequisite: "Requires attunement by a spellcaster",
	prereqeval: function (v) { return v.isSpellcaster; },
	usages: 1,
	recovery: "dawn",
	action: [["action", ""]]
};
MagicItemsList["perfume of bewitching"] = {
	name: "Perfume of Bewitching",
	source: [["DMG2024", 284]],
	magicItemTable: "?",
	type: "wondrous item",
	rarity: "common",
	usages: 1,
	description: "Once as a Magic action, I can apply the perfume in this tiny vial to myself and its effect lasts 1 hour. For the duration, I have Advantage on all Charisma checks (Deception/Persuasion) made to influence a creature within 5 feet of myself.",
	descriptionFull: "This tiny vial contains magic perfume, enough for one use. As a Magic action, I can apply the perfume in this tiny vial to myself and its effect lasts 1 hour. For the duration, I have Advantage on all Charisma checks (Deception/Persuasion) made to influence a creature within 5 feet of myself."
};
MagicItemsList["periapt of health"] = { // contributed by AelarTheElfRogue
	name: "Periapt of Health",
	source: [["DMG2024", 284]],
	type: "wondrous item",
	rarity: "uncommon",
	magicItemTable: "?",
	attunement: true,
	description: "While wearing this pendant, I can take a Magic action to regain 2d4+2 HP. Once used, this property can't be used again until the next dawn. In addition, I have Advantage on saving throws to avoid or end the Poisoned condition while wearing this pendant.",
	descriptionFull: "While wearing this pendant, you can take a Magic action to regain 2d4 + 2 Hit Points. Once used, this property can’t be used again until the next dawn. In addition, you have Advantage on saving throws to avoid or end the Poisoned condition while you wear this pendant.",
	weight: 1,
	savetxt: { adv_vs: ["poisoned"] },
	recovery: "dawn",
};
MagicItemsList["periapt of proof against poison"] = { // contributed by AelarTheElfRogue
	name: "Periapt of Proof Against Poison",
	source: [["DMG2024", 284]],
	type: "wondrous item",
	rarity: "rare",
	magicItemTable: "?",
	attunement: true,
	description: "This delicate silver chain has a brilliant-cut black gem pendant. While I wear it, I am immune to the Poisoned condition and have immunity to poison damage.",
	descriptionFull: "This delicate silver chain has a brilliant-cut black gem pendant. While you wear it, you have Immunity to the Poisoned condition and Poison damage.",
	weight: 1,
	savetxt: { immune: ["poison"] }
};
MagicItemsList["periapt of wound closure"] = { // contributed by AelarTheElfRogue
	name: "Periapt of Wound Closure",
	source: [["DMG2024", 284]],
	type: "wondrous item",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "Whenever you make a Death Saving Throw, you can change a roll of 9 or lower to a 10, turning a failed save into a successful one. Whenever I roll a Hit Point die to regain Hit Points, double the number of Hit Points it restores.",
	descriptionFull: "While wearing this pendant, you gain the following benefits.\n" + toUni("Life Preservation") + " Whenever you make a Death Saving Throw, you can change a roll of 9 or lower to a 10, turning a failed save into a successful one.\n" + toUni("Natural Healing Boost") +"Whenever you roll a Hit Point Die to regain Hit Points, double the number of Hit Points it restores.",
	attunement: true,
	weight: 1
};
MagicItemsList["philter of love"] = {
	name: "Philter of Love",
	source: [["DMG2024", 285]],
	type: "potion",
	rarity: "uncommon",
	magicItemTable: "?",
	notLegalAL: true,
	description: "The next time I see a creature within 10 minutes after drinking this philter, I am charmed by that creature and have the Charmed condition for 1 hour.",
	descriptionFull: "The next time you see a creature within 10 minutes after drinking this philter, you are charmed by that creature and have the Charmed condition for 1 hour.\n This rose-hued, effervescent liquid contains one easy-to-miss bubble shaped like a heart.",
	weight: 0.5
};
MagicItemsList["pipe of smoke monsters"] = {
	name: "Pipe of Smoke Monsters",
	source: [["DMG2024", 285]],
	magicItemTable: "?",
	type: "wondrous item",
	rarity: "common",
	description: "While smoking this pipe, you can take a Magic action to exhale a puff of smoke that takes the form of a creature, such as a dragon, a flumph, or a slaad. The form must be small enough to fit in a 1-foot cube and loses its shape after a few seconds, becoming an ordinary puff of smoke.",
	descriptionFull: "While smoking this pipe, you can take a Magic action to exhale a puff of smoke that takes the form of a creature, such as a dragon, a flumph, or a slaad. The form must be small enough to fit in a 1-foot cube and loses its shape after a few seconds, becoming an ordinary puff of smoke."
};
MagicItemsList["pipes of haunting"] = { // contains contributions by Soilentbrad
	name: "Pipes of Haunting",
	source: [["DMG2024", 285]],
	type: "wondrous item (instrument)",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "These pipes have 3 charges and regain 1d3 expended charges daily at dawn. As a Magic action, I can use 1 charge to play them and have each creature in 30 ft that can hear them make a DC 15 Wisdome saving throw or be frightened of me for 1 minute. A target can repeat the save at the end of each of their turns.",
	descriptionFull: "These pipes have 3 charges and regain 1d3 expended charges daily at dawn. You can take a Magic action to play them and expend 1 charge to create an eerie, spellbinding tune. Each creature of your choice within 30 feet of you must succeed on a DC 15 Wisdom saving throw or have the Frightened condition for 1 minute. A creature that fails the save repeats it at the end of each of its turns, ending the effect on itself on a success. A creature that succeeds on its save is immune to the effect of these pipes for 24 hours.",
	weight: 2,
	action: [["action", ""]],
	usages: 3,
	recovery: "dawn",
	additional: "regains 1d3",
};
MagicItemsList["pipes of the sewers"] = { // contains contributions by Soilentbrad
	name: "Pipes of the Sewers",
	source: [["DMG2024", 285]],
	type: "wondrous item (instrument)",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "The pipes have 3 charges, regain 1d3 at dawn, and cause rats to be indifferent toward me unless threatened. As a Magic action, I can play them, then use a Bonus action to summon rats in 0.5 miles to form 1 swarm per charge spend. While playing, rat swarms in 30 ft make a Wis Save vs. my Charisma check or obey my commands.",
	descriptionFull: "While these pipes are on your person, ordinary rats and giant rats are Indifferent toward you and won’t attack you unless you threaten or harm them.\n The pipes have 3 charges and regain 1d3 expended charges daily at dawn. If you play the pipes as a Magic action, you can take a Bonus Action to expend 1 to 3 charges, calling forth one Swarm of Rats with each expended charge if enough rats are within half a mile of you to be called in this fashion (as determined by the DM). If there aren’t enough rats to form a swarm, the charge is wasted. Called swarms move toward the music by the shortest available route but aren’t under your control otherwise.\n Whenever a Swarm of Rats that isn’t under another creature’s control comes within 30 feet of you while you are playing the pipes, the swarm makes a DC 15 Wisdom saving throw. On a successful save, the swarm behaves as it normally would and can’t be swayed by the pipes’ music for the next 24 hours. On a failed save, the swarm is swayed by the pipes’ music and becomes Friendly to you and your allies for as long as you continue to play the pipes each round as a Magic action. A Friendly swarm obeys your commands. If you issue no commands to a Friendly swarm, it defends itself but otherwise takes no actions. If a Friendly swarm starts its turn more than 30 feet away from you, your control over that swarm ends, and the swarm behaves as it normally would and can’t be swayed by the pipes’ music for the next 24 hours.",
	attunement: true,
	weight: 2,
	action: [["action", "Play Pipes"],["bonus action","Call Swarm"]],
	usages: 3,
	recovery: "dawn",
	additional: "regains 1d3",
};
