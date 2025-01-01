var iFileName = "pub_20241112_DMG.js";
RequiredSheetVersion("13.2.1");
SourceList.D24 = {
	name: "2024 Dungeon Master's Guide",
	abbreviation: "D24",
	abbreviationSpellsheet: "D4",
	group: "Core Sources",
	url: "https://marketplace.dndbeyond.com/category/3710000?pid=DB3710000",
	date: "2024/11/12",
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
		regExpSearch: /^(?=.*lute)(?=.*thunderous)(?=.*thumping).*$/i,
		name: "Lute of Thunderous Thumping",
		source: [["D24", 275]],
		description: "Light, Slow; +2d8 Thunder",
	},
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (classes.known.bard) {
					fields.Description += (fields.Description ? '; ' : '') + 'Cha Mod for attacks';
				}
			},
		],
		atkCalc: [
			function (fields, v, output) {
				if (classes.known.bard && (/lute of thunderous thumping/i).test(v.WeaponTextName)) {
					output.mod += What('Cha Mod')
				}
			},
			"I can wield this reinforced lute as a magic Club that deals an extra 2d8 Thunder damage on a hit. As a bard, I can also use Charisma instead of Strength for its attacks.",
		],
	},
	toNotesPage: [{
		name: "Sing and Swing",
		note: "If you’re a Bard, you can use your Charisma modifier instead of your Strength modifier when making a melee attack roll with the lute, provided you sing or hum while making the attack.",
	}],
};
MagicItemsList["wand of binding"] = {
	name: "Wand of Binding",
	source: [["D24", 318]],
	type: "wand",
	rarity: "rare",
	magicItemTable: "arcana",
	description: "This wand has 7 charges, regaining 1d6+1 at dawn. While holding the wand, you can cast one of the following spells, expending the charges: Hold Monster (5) or Hold Person (2).",
	descriptionFull: "This wand has 7 charges.\n   " + toUni("Spells") + ". While holding the wand, you can cast one of the spells (save DC 17): Hold Monster (5 charges) or Hold Person (2 charges).\n" +
		toUni("Regaining Charges") + ". The wand regains 1d6+1 expended charges daily at dawn. If you expend the wands last charge, roll 1d20. On a 1, the wand crumbles into ashes an is destroyed.",
	attunement: true,
	weight: 1,
	usages: 7,
	recovery: "dawn",
	additional: "regains 1d6+1",
	spellFirstColTitle: "Ch",
	fixedDC: 17,
	spellcastingBonus: [{
		name: "2 charges",
		spells: ["hold person"],
		selection: ["hold person"],
		firstCol: 2
	}, {
		name: "5 charges",
		spells: ["hold monster"],
		selection: ["hold monster"],
		firstCol: 5
	}]
};
MagicItemsList["wand of conducting"] = {
	name: "Wand of Conducting",
	source: [["D24", 319]],
	magicItemTable: "?",
	type: "wand",
	rarity: "common",
	description: "This wand has 3 charges, regaining all daily at dawn. As a Magic action, you can wave it around and expend 1 charge to create orchestral music that can be heard out to a range of 120 ft and ends when you stop waving the wand. After last charge, roll a d20. On a 1, a sad tuba sound plays as the wand crumbles to dust.",
	descriptionFull: "This wand has 3 charges. While holding it, you can take a Magic action to expend 1 charge and create orchestral music by waving it around. The music can be heard out to a range of 120 feet and ends when you stop waving the wand.\n " +
		toUni("Regaining Charges") + ". The wand regains all expended charges daily at dawn.If you expend the wand's last charge, roll a d20. On a 1, a sad tuba sound plays as the wand crumbles to dust and is destroyed.",
	weight: 1,
	action: [["action", ""]],
	usages: 3,
	recovery: "dawn"
};
MagicItemsList["wand of enemy detection"] = {
	name: "Wand of Enemy Detection",
	source: [["D24", 319]],
	type: "wand",
	rarity: "rare",
	magicItemTable: "?",
	description: "This wand has 7 charges, regaining 1d6+1 at dawn. While holding it, you can expend 1 charge. For 1 minute, you know the direction of the nearest creature Hostile to you (not distance) within 60 ft, regardless of it being Invisible, ethereal, disguised, or hidden.",
	descriptionFull: "This wand has 7 charges. While holding it, you can take a Magic action to expend 1 charge. For 1 minute, you know the direction of the nearest creature Hostile to you within 60 feet, but not its distance from you. The wand can sense the presence of Hostile creatures that are Invisible, ethereal, disguised, or hidden, as well as those in plain sight. The effect ends if you stop holding the wand.\n" +
		toUni("Regaining Charges") + ". The wand regains 1d6 + 1 expended charges daily at dawn.If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.",
	attunement: false,
	weight: 1,
	usages: 7,
	recovery: "dawn",
	additional: "regains 1d6+1",
	action: [["action", ""]]
};
MagicItemsList["wand of fear"] = {
	name: "Wand of Fear",
	source: ["D24", 319],
	type: "wand",
	rarity: "rare",
	magicItemTable: "?",
	description: "This wand has 7 charges, regaining 1d6+1 at dawn, which can be used to cast Command (1 charge) or Fear (3 charges) while holding the wand.",
	descriptionFull: "This wand has 7 charges.  While holding the wand, you can cast one of the spells (save DC 15) on the following table from it. The table indicates how many charges you must expend to cast the spell.\n   " + toUni("Command") + ". While holding the wand, you can take a Magic action to expend 1 charge and Command another creature to flee or grovel, as with the Command spell (save DC 15).\n   " + toUni("Fear") + ". While holding the wand, you can take a Magic action to expend 3 charges, causing the wand's tip to emit a 60-foot Cone of amber light. Each creature in the cone must succeed on a DC 15 Wisdom saving throw or become Frightened of you for 1 minute.\n" +
		toUni("Regaining Charges") + ". The wand regains 1d6 + 1 expended charges daily at dawn.If you expend the wand's last charge, roll 1d20. On a 1, the wand crumbles into ashes and is destroyed.",
	attunement: true,
	weight: 1,
	usages: 7,
	recovery: "dawn",
	additional: "regains 1d6+1",
	spellFirstColTitle: "Ch",
	fixedDC: 15,
	spellcastingBonus: [{
		name: "1 charge",
		spells: ["command"],
		selection: ["command"],
		firstCol: 1,
	}, {
		name: "3 charges",
		spells: ["fear"],
		selection: ["fear"],
		firstCol: 3,
	}],
	spellChanges: [{
		"command": {
			description: '1 creature save or has to follow an one-word command on its next turn, either "flee" or "grovel"',
			changes: 'When casting from the Wand of Fear, I can only use the "flee" or "grovel" command.'
		},
		"fear": {
			description: 'All creatures within 60-foot Cone Wisdom save or drop what it is holding and become Frightened',
			range: "60-ft Cone",
			changes: 'When casting from the Wand of Fear, the distance changes from 30-foot cone to 60-foot cone.'
		}
	}],
};
MagicItemsList["wand of fireballs"] = {
	name: "Wand of Fireballs",
	source: [["D24", 319]],
	type: "wand",
	rarity: "rare",
	magicItemTable: "?",
	description: "This wand has 7 charges, regaining 1d6+1 at dawn. You can expend 1 to 3 charges to cast Fireball (save DC 15) from it as a 3rd level spell. The spell level increases by one for each charge expended. When the last charge is used, roll 1d20. On a 1, the wand crumbles into ashes.",
	descriptionFull: "This wand has 7 charges. While holding it, you can expend no more than 3 charges to cast Fireball (save DC 15) from it. For 1 charge, you cast the level 3 version of the spell. You can increase the spell’s level by 1 for each additional charge you expend.\n" +
		toUni("Regaining Charges") + ". The wand regains 1d6 + 1 expended charges daily at dawn.If you expend the wand's last charge, roll 1d20. On a 1, the wand crumbles into ashes and is destroyed.",
	attunement: true,
	weight: 1,
	prerequisite: "Requires attunement by a spellcaster",
	prereqeval: function (v) { return v.isSpellcaster; },
	usages: 7,
	recovery: "dawn",
	additional: "regains 1d6+1",
	spellFirstColTitle: "Ch",
	fixedDC: 15,
	spellcastingBonus: {
		name: "1-3 charges",
		spells: ["fireball"],
		selection: ["fireball"],
		firstCol: "1-3"
	},
	spellChanges: {
		"fireball": {
			description: "20-ft radius Sphere, all crea 8d6+1d6/extra charge Fire dmg; save halves; unattended flammable objects ignite",
			changes: "For 1 charge, it is cast as the 3rd-level version of the spell. Each additional charge adds +1 spell level (max 5th)."
		}
	}
};
MagicItemsList["wand of lightning bolts"] = {
	name: "Wand of Lightning Bolts",
	source: [["D24", 320]],
	type: "wand",
	rarity: "rare",
	magicItemTable: "?",
	description: "This wand has 7 charges, You can expend up to three of its charges to cast Lightning Bolt (save DC 15) from it as a 3rd level spell. The spell level increases by one for each charge expended after the first.",
	descriptionFull: "This wand has 7 charges. While holding it, you can expend 1 to 3 its charges to cast the Lightning Bolt spell (save DC 15) from it. For 1 charge, you cast the 3rd-level version of the spell. You can increase the spell level by one for each additional charge you expend.\n " +
		toUni("Regaining Charges") + ". The wand regains 1d6 + 1 expended charges daily at dawn.If you expend the wand's last charge, roll 1d20. On a 1, the wand crumbles into ashes and is destroyed.",
	attunement: true,
	weight: 1,
	prerequisite: "Requires attunement by a spellcaster",
	prereqeval: function (v) { return v.isSpellcaster; },
	usages: 7,
	recovery: "dawn",
	additional: "regains 1d6+1",
	spellFirstColTitle: "Ch",
	fixedDC: 15,
	spellcastingBonus: {
		name: "1-3 charges",
		spells: ["lightning bolt"],
		selection: ["lightning bolt"],
		firstCol: "1-3"
	},
	spellChanges: {
		"lightning bolt": {
			description: "100-ft long 5-ft wide Line; each crea in Line Dex save; 8d6+1d6/extra charge Lightn. dmg; save halves",
			changes: "For 1 charge, it is cast as the 3rd-level version of the spell. Each additional charge adds +1 spell level (max 5th)."
		}
	}
};
MagicItemsList["wand of magic detection"] = {
	name: "Wand of Magic Detection",
	source: [["D24", 320]],
	type: "wand",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "This wand has 3 charges. While holding it, you can expend 1 charge to cast Detect Magic from it. The wand regains 1d3 expended charges daily at dawn.",
	descriptionFull: "This wand has 3 charges. While holding it, you can expend 1 charge to cast the Detect Magic spell from it.\n " +
		toUni("Regaining Charges") + ". The wand regains 1d3 expended charges daily at dawn.",
	weight: 1,
	spellcastingBonus: {
		name: "1 charge",
		spells: ["detect magic"],
		selection: ["detect magic"],
		firstCol: 1
	},
	usages: 3,
	recovery: "dawn",
	additional: "regains 1d3",
	spellFirstColTitle: "Ch"
};
MagicItemsList["wand of magic missiles"] = {
	name: "Wand of Magic Missiles",
	source: [["D24", 320]],
	type: "wand",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "This wand has 7 charges, regaining 1d6+1 at dawn. While holding it, you can expend 1 to 3 of its charges to cast Magic Missile from it as a 1st level spell. The spell level increases by one for each charge expended after the first. When the last charge is used, roll 1d20. On a 1, the wand crumbles into ashes.",
	descriptionFull: "This wand has 7 charges. While holding it, you can expend 1 to 3 its charges to cast the Magic Missile spell from it. For 1 charge, you cast the 1st-level version of the spell. You can increase the spell level by one for each additional charge you expend.\n" +
		toUni("Regaining Charges") + ". The wand regains 1d6 + 1 expended charges daily at dawn.If you expend the wand's last charge, roll 1d20. On a 1, the wand crumbles into ashes and is destroyed.",
	weight: 1,
	usages: 7,
	recovery: "dawn",
	additional: "regains 1d6+1",
	spellFirstColTitle: "Ch",
	spellcastingBonus: {
		name: "1-3 charges",
		spells: ["magic missile"],
		selection: ["magic missile"],
		firstCol: "1-3"
	},
	spellChanges: {
		"magic missile": {
			description: "3+1/extra charge darts hit creature(s) I can see for 1d4+1 Force dmg per dart",
			changes: "For 1 charge, it is cast as the 1st-level version of the spell, but I can increase the spell slot level by one for each additional charge expended."
		}
	}
};
MagicItemsList["wand of paralysis"] = {
	name: "Wand of Paralysis",
	source: [["D24", 321]],
	type: "wand",
	rarity: "rare",
	magicItemTable: "?",
	description: "This wand has 7 charges, regaining 1d6+1 at dawn. While holding the wand, you can take a Magic action to expend 1 charge to have a creature within 60 ft make a DC 15 Constitution saving throw or be Paralyzed for 1 minute. It can repeat this save at the end of each of its turns. When the last charge is used, roll 1d20. On a 1, the wand crumbles into ashes and is destroyed.",
	descriptionFull: "This wand has 7 charges. While holding it, you can take a Magic action to expend 1 of its charges to cause a thin blue ray to streak from the tip toward a creature you can see within 60 feet of you. The target must succeed on a DC 15 Constitution saving throw or have the Paralyzed condition for 1 minute. At the end of each of the target's turns, it repeats the save, ending the effect on itself on a success.\n" +
		toUni("Regaining Charges") + ". The wand regains 1d6 + 1 expended charges daily at dawn.If you expend the wand's last charge, roll 1d20. On a 1, the wand crumbles into ashes and is destroyed.",
	attunement: true,
	weight: 1,
	prerequisite: "Requires attunement by a spellcaster",
	prereqeval: function (v) { return v.isSpellcaster; },
	usages: 7,
	recovery: "dawn",
	additional: "regains 1d6+1",
	fixedDC: 15,
	action: [["action", ""]]
};
MagicItemsList["wand of polymorph"] = {
	name: "Wand of Polymorph",
	source: [["D24", 321]],
	type: "wand",
	rarity: "very rare",
	magicItemTable: "?",
	description: "This wand has 7 charges and regains 1d6+1 expended charges daily at dawn. While holding it, you can expend 1 charge to cast Polymorph (save DC 15) from it. If you expend the wand's last charge, roll 1d20. On a 1, the wand crumbles into ashes and is destroyed.",
	descriptionFull: "This wand has 7 charges. While holding it, you can expend 1 charge to cast the Polymorph  (save DC 15) from it.\n" +
		toUni("Regaining Charges") + ". The wand regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll 1d20. On a 1, the wand crumbles into ashes and is destroyed.",
	attunement: true,
	weight: 1,
	prerequisite: "Requires attunement by a spellcaster",
	prereqeval: function (v) { return v.isSpellcaster; },
	usages: 7,
	recovery: "dawn",
	additional: "regains 1d6+1",
	spellFirstColTitle: "Ch",
	fixedDC: 15,
	spellcastingBonus: {
		name: "1 charge",
		spells: ["polymorph"],
		selection: ["polymorph"],
		firstCol: 1
	}
};
MagicItemsList["wand of pyrotechnics"] = {
	name: "Wand of Pyrotechnics",
	source: [["D24", 321]],
	magicItemTable: "?",
	type: "wand",
	rarity: "common",
	description: "This wand has 7 charges, regaining 1d6+1 at dawn. While holding it, you can take a Magic action to expend 1 charge to create a harmless burst of multicolored light at a point you can see up to 120 ft away, with the noise travelling 300 ft. The light is as bright as a torch flame but lasts only a second.",
	descriptionFull: "This wand has 7 charges. While holding it, you can take a Magic action to expend 1 charge and create a harmless burst of multicolored light at a point you can see up to 120 feet away. The burst of light is accompanied by a crackling noise that can be heard up to 300 feet away. The light is as bright as a torch flame but lasts only a second.\n" +
		toUni("Regaining Charges") + ". The wand regains 1d6 + 1 expended charges daily at dawn.If you expend the wand's last charge, roll 1d20. On a 1, the wand erupts in a harmless pyrotechnic display and is destroyed.",
	weight: 1,
	action: [["action", ""]],
	usages: 7,
	recovery: "dawn",
	additional: "regains 1d6+1"
};
MagicItemsList["wand of secrets"] = {
	name: "Wand of Secrets",
	source: [["D24", 322]],
	type: "wand",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "The wand has 3 charges. While holding it, you can take a Magic action to expend 1 charge, and if a secret door or trap is within 60 feet of you, the wand pulses and points at the one nearest to you. The wand regains 1d3 expended charges daily at dawn.",
	descriptionFull: "This wand has 3 charges and regains 1d3 expended charges daily at dawn. While holding it, you can take a Magic action to expend 1 charge, and if a secret door or trap is within 60 feet of you, the wand pulses and points at the one nearest to you.",
	weight: 1,
	usages: 3,
	recovery: "dawn",
	additional: "regains 1d3",
	action: [["action", ""]]
};
MagicItemsList["wand of the war mage, +1, +2, or +3"] = {
	name: "Wand of the War Mage, +1, +2, or +3",
	nameTest: /^(?=.*war mage)(?=.*(arcane focus|rod|wand|staff)).*$/i,
	source: [["D24", 322]],
	type: "wand",
	description: "While holding this wand, you gain a bonus to spell attack rolls determined by the wand's rarity: uncommon (+1), rare (+2), or very rare (+3). In addition, you ignore Half Cover when making a spell attack roll.",
	descriptionFull: "While holding this wand, you gain a bonus to spell attack rolls determined by the wand's rarity: uncommon (+1), rare (+2), or very rare (+3). In addition, you ignore Half Cover when making a spell attack roll.",
	attunement: true,
	weight: 1,
	prerequisite: "Requires attunement by a spellcaster",
	prereqeval: function (v) { return v.isSpellcaster; },
	choices: ["+1 to spell attacks (uncommon)", "+2 to spell attacks (rare)", "+3 to spell attacks (very rare)"],
	"+1 to spell attacks (uncommon)": {
		name: "Wand of the War Mage +1",
		nameTest: /^(?=.*war mage)(?=.*(arcane focus|rod|wand|staff))(?=.*\+1)(?!.*\+2)(?!.*\+3).*$/i,
		rarity: "uncommon",
		magicItemTable: "?",
		description: "While holding this wand, you gain a +1 bonus and ignore Half Cover when making a spell attack roll.",
		calcChanges: {
			spellCalc: [
				function (type, spellcasters, ability) {
					if (type == "attack") return 1;
				},
				"You gain a +1 bonus to spell attack rolls."
			]
		}
	},
	"+2 to spell attacks (rare)": {
		name: "Wand of the War Mage +2",
		nameTest: /^(?=.*war mage)(?=.*(arcane focus|rod|wand|staff))(?!.*\+1)(?=.*\+2)(?!.*\+3).*$/i,
		rarity: "rare",
		magicItemTable: "?",
		description: "While holding this wand, you gain a +2 bonus and ignore Half Cover when making a spell attack roll.",
		calcChanges: {
			spellCalc: [
				function (type, spellcasters, ability) {
					if (type == "attack") return 2;
				},
				"You gain a +2 bonus to spell attack rolls."
			]
		}
	},
	"+3 to spell attacks (very rare)": {
		name: "Wand of the War Mage +3",
		nameTest: /^(?=.*war mage)(?=.*(arcane focus|rod|wand|staff))(?!.*\+1)(?!.*\+2)(?=.*\+3).*$/i,
		rarity: "very rare",
		magicItemTable: "?",
		description: "While holding this wand, you gain a +3 bonus and ignore Half Cover when making a spell attack roll.",
		calcChanges: {
			spellCalc: [
				function (type, spellcasters, ability) {
					if (type == "attack") return 3;
				},
				"You gain a +3 bonus to spell attack rolls."
			]
		}
	}
};
MagicItemsList["wand of web"] = {
	name: "Wand of Web",
	source: [["D24", 322]],
	type: "wand",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "This wand has 7 charges and regains 1d6+1 expended charges daily at dawn. While holding it, you can expend 1 of its charges to cast Web (save DC 13) from it. If I expend the wand's last charge, roll 1d20. On a 1, the wand crumbles into ashes and is destroyed.",
	descriptionFull: "This wand has 7 charges. While holding it, you can expend 1 of its charges to cast the Web spell (save DC 13) from it.\n" +
		toUni("Regaining Charges") + ". The wand regains 1d6 + 1 expended charges daily at dawn.If you expend the wand's last charge, roll 1d20. On a 1, the wand crumbles into ashes and is destroyed.",
	attunement: true,
	weight: 1,
	prerequisite: "Requires attunement by a spellcaster",
	prereqeval: function (v) { return v.isSpellcaster; },
	usages: 7,
	recovery: "dawn",
	additional: "regains 1d6+1",
	spellFirstColTitle: "Ch",
	fixedDC: 13,
	spellcastingBonus: {
		name: "1 charge",
		spells: ["web"],
		selection: ["web"],
		firstCol: 1
	}
};
MagicItemsList["wand of web"] = {
	name: "Wand of Web",
	source: [["D24", 322]],
	type: "wand",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "This wand has 7 charges and regains 1d6+1 expended charges daily at dawn. While holding it, you can expend 1 of its charges to cast Web (save DC 13) from it. If I expend the wand's last charge, roll 1d20. On a 1, the wand crumbles into ashes and is destroyed.",
	descriptionFull: "This wand has 7 charges. While holding it, you can expend 1 of its charges to cast the Web spell (save DC 13) from it.\n" +
		toUni("Regaining Charges") + ". The wand regains 1d6 + 1 expended charges daily at dawn.If you expend the wand's last charge, roll 1d20. On a 1, the wand crumbles into ashes and is destroyed.",
	attunement: true,
	weight: 1,
	prerequisite: "Requires attunement by a spellcaster",
	prereqeval: function (v) { return v.isSpellcaster; },
	usages: 7,
	recovery: "dawn",
	additional: "regains 1d6+1",
	spellFirstColTitle: "Ch",
	fixedDC: 15,
	spellcastingBonus: {
		name: "1 charge",
		spells: ["web"],
		selection: ["web"],
		firstCol: 1
	}
};
MagicItemsList["wand of wonder"] = {
	name: "Wand of Wonder",
	source: [["D24", 322]],
	type: "wand",
	rarity: "rare",
	magicItemTable: "?",
	description: "This wand has 7 charges and regains 1d6+1 expended charges daily at dawn. If you expend its last charge, roll 1d20. On a 1, the wand crumbles into dust and is destroyed. While holding it, you can expend 1 charge, choose a point within 120 ft, and roll 1d100 to see what happens, SEE NOTES.",
	descriptionFull: "This wand has 7 charges. While holding it, you can take a Magic action to expend 1 charge while choosing a point within 120 feet of yourself. That location becomes the point of origin of a spell or other magical effect determined by rolling on the Wand of Wonder Effects table.\n" +
		"Spells cast from the wand have a save DC of 15. If a spell’s maximum range is normally less than 120 feet, it becomes 120 feet when cast from the wand. If an effect has multiple possible subjects, the DM determines randomly which among them are affected.\n " +
		toUni("Regaining Charges") + ". The wand regains 1d6+1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into dust and is destroyed.\n" + [
			toUni("1d100\t\tEffect"),
			"01-20\tRoll a 1d10:",
			"- 1d10\t1-2\tYou cast Darkness",
			"- 1d10\t3-4\tYou cast Faerie Fire.",
			"- 1d10\t5-6\tYou cast Fireball.",
			"- 1d10\t7-8\tYou cast Slow.",
			"- 1d10\t9-10\tYou cast Stinking Cloud.",
			" 21-25\t\tYou are Stunned until the start of your next turn, believing something awesome just happened.",
			" 26-30\t\tYou cast Gust of Wind. The Line created by the spell extends from you to the chosen point of origin.",
			" 31-35\t\tNothing happens at the chosen point. You take 1d6 Psychic damage.",
			" 36-40\t\tHeavy rain falls for 1 minute in a 120-ft high, 60-ft radius Cylinder centered on the chosen point of origin. The area is lightly obscured for the duration.",
			" 41-45\t\tA cloud of 600 oversized butterflies fills a 30-foot radius centered on the target. The area becomes heavily obscured. The butterflies remain for 10 minutes.",
			" 46-50\t\tYou cast Lightning Bolt.",
			" 51-55\t\tYou shrink yourself as if you had cast Enlarge/Reduce on yourself.",
			" 56-60\t\tA magically formed creature appears in an unoccupied space as close to the chosen point as possible. It disappears after 1 hour or 0 hit points. Roll 1d4: 1: Rhinoceros, 2: Elephant, 3-4: Rat.",
			" 61-64\t\tGrass grows on the ground in a 60-foot radius centered on the target. If grass is already there, it grows to ten times its normal size and remains overgrown for 1 minute.",
			" 65-68\t\tAn object of the DM's choice disappears into the Ethereal Plane. The object must be neither worn nor carried, within 120 feet of the target, and no larger than 10 feet in any dimension.",
			" 69-72\t\tYou shrink yourself as if you had cast Enlarge/Reduce on yourself.",
			" 73-77\t\tLeaves grow from the target. If you chose a point in space as the target, leaves sprout from the creature nearest to that point. Unless they are picked off, the leaves turn brown and fall off after 24 hours.",
			" 78-82\t\tA burst of colorful shimmering light extends from you in a 30-foot radius. You and each creature in the area that can see must succeed on a DC 15 Constitution saving throw or become blinded for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
			" 83-87\t\tYou cast Invisibility on yourself.",
			" 88-92\t\tA stream of 1d4 \xD7 10 gems, each worth 1 gp, shoots from the wand's tip in a line 30 feet long and 5 feet wide. Each gem deals 1 Bludgeoning damage, and the total damage of the gems is divided equally among all creatures in the line.",
			" 93-97\t\tYou cast Polymorph, targeting creature closest to origin. Roll 1d4. 1: Black Bear; 2: Giant Wasp; 3-4: Frog.",
			" 98-00\t\tIf you targeted a creature, it must make a DC 15 Constitution saving throw. If you didn't target a creature, you become the target and must make the saving throw. If the saving throw fails by 5 or more, the target is instantly Petrified. On any other failed save, the target is Restrained and begins to turn to stone. While Restrained in this way, the target must repeat the saving throw at the end of its next turn, becoming Petrified on a failure or ending the effect on a success. The petrification lasts until the target is freed by the Greater Restoration spell or similar magic."
		],
	attunement: true,
	weight: 1,
	prerequisite: "Requires attunement by a spellcaster",
	prereqeval: function (v) { return v.isSpellcaster; },
	usages: 7,
	recovery: "dawn",
	additional: "regains 1d6+1",
	toNotesPage: [{
		name: "Table of Effects",
		note: [
			"As an action I can expend 1 of the wand's 7 charges and choose a target within 120 ft of me. The target can be a creature, an object, or a point in space. Roll a d100 and consult the effect below to discover what happens.",
			"If the effect causes me to cast a spell from the wand, the spell's save DC is 15. If the spell normally has a range expressed in feet, its range becomes 120 ft if it isn't already.",
			"If an effect covers an area, I must center the spell on and include the target. If an effect has multiple possible subjects, the DM randomly determines which ones are affected.",
			"\nd100 RESULT AND EFFECTS",
			"01-20: Roll a 1d10:",
			"   1-2: You cast Darkness",
			"   3-4: You cast Faerie Fire.",
			"   5-6: You cast Fire Ball.",
			"   7-8: You cast Slow.",
			"   9-10: You cast Stinking Cloud.",
			"21-25: You are Stunned until the start of your next turn, believing something awesome just happened.",
			"26-30: You cast Gust of Wind. The Line created by the spell extends fro you to the chosen point of origin.",
			"31-35: Nothing happens at the chosen point of origin. You take 1d6 Psychic damage.",
			"36-40: Heavy rain falls for 1 minute in a 120-foot-high, 60-foot-radius Cylinder centered on the chosen point of origin. During that time, the area of effect is Lightly Obscured.",
			"41-45: A cloud of 600 oversized butterflies fills a 60-foot-high, 30-foot-radius Cylinder centered on the chosen point of origin. The butterflies remain for 10 minutes, during which time the area of effect is Heavily Obscured.",
			"46-50: You cast Lightning Bolt. The Line created by the spell extends from you to the chosen point of origin.",
			"51-55: The creature closest to the chosen point of origin is enlarged as if you had cast Enlarge/Reduce on it. If the target isn’t you and can’t be affected by that spell, you become the target instead.",
			"56-60: A magically formed creature appears in an unoccupied space as close to the chosen point as possible. The creature isn't under your control, acts as it normally would, and disappears after 1 hour or when it drops to 0 Hit Points. Roll 1d4: 1: Rhinoceros, 2: Elephant, 3-4: Rat.",
			"61-64: Grass grows on the ground in a 60-foot radius centered on the target. If grass is already there, it grows to ten times its normal size and remains overgrown for 1 minute.",
			"65-68: An object of the DM's choice disappears into the Ethereal Plane. The object must be neither worn nor carried, within 120 feet of the target, and no larger than 10 feet in any dimension.",
			"69-72: You shrink as if you had cast Enlarge/Reduce on yourself. The effect remains for 1 minute.",
			"73-77: Leaves grow from the creature nearest to the chosen point of origin. Unless they are picked off, the leaves turn brown and fall off after 24 hours.",
			"78-82: A burst of colorful shimmering light extends from you in a 30-foot Emanation. Each creature in the area must succeed on a DC 15 Constitution saving throw or have the Blinded condition for 1 minute. A creature repeats the save at the end of each of its turns, ending the effect on itself on a success.",
			"83-87: You cast Invisibility on yourself.",
			"88-92: A stream of 1d4 \xD7 10 gems, each worth 1 gp, shoots from the wand's tip in a Line 30 feet long and 5 feet wide. Each gem deals 1 Bludgeoning damage, and the total damage of the gems is divided equally among all creatures in the line.",
			"93-97: You cast Polymorph, targeting creature closest to origin. Roll 1d4. 1: Black Bear; 2: Giant Wasp; 3-4: Frog.",
			"98-00: The creature closest to the chosen point of origin makes a DC 15 Constitution saving throw. On a failed save, the creature has the Restrained condition and begins to turn to stone. While Restrained in this way, the creature repeats the save at the end of its next turn. ",
			"		On a successful save, the effect ends.On a failed save, the creature has the Petrified condition instead of the Restrained condition.The petrification lasts until the creature is freed by the Greater Restoration spell or similar magic.",
		]
	}],
	fixedDC: 15,
	spellcastingBonus: {
		name: "Random option",
		spells: ["slow", "faerie fire", "gust of wind", "stinking cloud", "lightning bolt", "enlarge/reduce", "darkness", "fireball", "invisibility", "polymorph"],
		selection: ["slow", "faerie fire", "gust of wind", "stinking cloud", "lightning bolt", "enlarge/reduce", "darkness", "fireball", "invisibility", "polyorph"],
		times: 10
	},
	spellChanges: {
		"darkness": { range: "120 ft", changes: "All Wand of Wonder spells have a range of 120 ft." },
		"enlarge/reduce": { range: "120 ft", changes: "All Wand of Wonder spells have a range of 120 ft." },
		"faerie fire": { range: "120 ft", changes: "All Wand of Wonder spells have a range of 120 ft." },
		"stinking cloud": { range: "120 ft", changes: "All Wand of Wonder spells have a range of 120 ft." },
		"polymorch": { range: "120 ft", changes: "All Wand of Wonder spells have a range of 120 ft." },
	}
};
var DMG_waveFullDescription = [
	"Held in the dungeon of White Plume Mountain, Wave is engraved with images of waves, shells, and sea creatures.",
	"You gain a +3 bonus to attack rolls and damage rolls made with this magic weapon. When you roll a 20 on the d20 for an attack roll with this weapon, the target takes an extra 21 Necrotic damage.",
	"While holding Wave, you gain the following benefits:",
	"\u2022Combat Ready. You have Advantage on Initiative rolls.",
	"\u2022Underwater Adaptation. A bubble of air forms around your head while you are underwater, allowing you to breathe normally in that environment.",
	"\u2022Aquatic Command. Wave has 3 charges and regains 1d3 expended charges daily at dawn. While you carry it, you can expend 1 charge to cast Dominate Beast (save DC 20) from it on a Beast that has a Swim Speed.",
	"\u2022Globe of Invulnerability. While holding Wave, you can cast the level 9 version of Globe of Invulnerability from it. Once used, this property can’t be used again until the next dawn.",
	"\u2022Sentience. Wave is a sentient weapon of Neutral alignment, with an Intelligence of 14, a Wisdom of 10, and a Charisma of 18. It has hearing and Darkvision out to 120 feet.",
	"The weapon communicates telepathically with its wielder and speaks Aquan.",
	"\u2022Personality. Wave zealously encourages mortals to worship sea gods and has a habit of humming sea chanteys. Conflict arises if the wielder fails to further the weapon’s objectives in the world.",
	"\u2022Destroying Wave. Wave can be destroyed only on the island of Thunderforge, where it was forged. The weapon must be melted down by a storm giant or someone imbued with a storm giant’s strength. Destroying Wave angers a god of the sea, who sends powerful agents to attack the island and punish the destroyers.",
];
MagicItemsList["wave"] = {
	name: "Wave",
	source: [["D24", 323]],
	type: "weapon (trident)",
	rarity: "artifact",
	description: "This sentient trident adds +3 to hit and damage and if you score a critical hit with it, the target takes an extra 21 Necrotic damage. While holding Wave, you gain several benefits.\n SEE NOTES PAGE.",
	descriptionFull: DMG_waveFullDescription.join("\n   ").replace(/>>(.*?)<</g, function (a, match) { return toUni(match); }),
	attunement: true,
	weight: 4,
	weaponOptions: [{
		baseWeapon: "trident",
		regExpSearch: /wave/i,
		name: "Wave",
		source: [["D24", 323]],
		description: "Thrown, Versatile (1d10), Topple; On crit: +21 Necrotic Damage",
		modifiers: [3, 3],
		selectNow: true
	}],
	toNotesPage: [{
		name: "Features",
		note: desc(DMG_waveFullDescription).replace(/>>(.*?)<</g, function (a, match) { return match.toUpperCase(); }) + "\n\n" + sentientItemConflictTxt,
	}],
	//Combat Ready - Advantage on Initiative
	advantages: [["Initiative", true]],
	//Underwater Adaptation
	savetxt: { text: 'I can breathe normally underwater' },
	extraLimitedFeatures: [{
		name: "Wave [Aquatic Command] (regains 1d3)",
		usages: 3,
		recovery: "dawn"
	}, {
		name: "Wave [Globe of Invulnerability]",
		usages: 1,
		recovery: "dawn"
	},],
	fixedDC: 20,
	spellFirstColTitle: "Ch",
	spellcastingBonus: [{
		name: "1 charge",
		spells: ["dominate beast"],
		selection: ["dominate beast"],
		firstCol: 1,
	}, {
		name: "Globe of Invulnerability",
		spells: ["globe of invulnerability"],
		selection: ["globe of invulnerability"],
		firstCol: "oncelr",
	}],
	spellChanges: {
		"dominate beast": {
			description: "1 beast with swim speed, save or charmed, follows telepathic commands, 1 a for complete control",
			changes: "Can only affect beasts with innate swim speed."
		},
		//Spell Level Header cannot be changed from here per MPMB 
		"globe of invulnerability": {
			description: "Level 9: Any spell of level 9 or lower cast from outside the barrier can’t affect anything within it.",
			changes: "Change from level 6 to level 9"
		},
	},
};
MagicItemsList["weapon of warning"] = {
	name: "Weapon of Warning",
	nameTest: "of Warning",
	source: [["D24", 324]],
	type: "weapon (any simple or martial)",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "While this weapon is within your reach, and you are attuned to it, you and your allies within 30 ft magically awaken when combat begin, unless a magically induced sleep. You also have Advantage on Inititative rolls.",
	descriptionFull: "As long as this weapon is within your reach and you are attuned to it, you and allies within 30 feet of you gain the following benefits.\n\n" +
		"\u2022Alarm. The weapon magically awakens each subject who is sleeping naturally when combat begins. This benefit doesn’t wake a subject from magically induced sleep.\n" +
		"\u2022Supernatural Readiness. Each subject has Advantage on its Initiative rolls.",
	attunement: true,
	chooseGear: {
		type: "weapon",
		prefixOrSuffix: "prefix",
		descriptionChange: ["replace", "weapon"]
	},
	advantages: [["Initiative", true]],
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && !v.isSpell && (/of warning/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
				}
			},
			'If you include the word "Warning" in the name of a weapon, it will be treated as the magic weapon Weapon of Warning.'
		]
	},
};
MagicItemsList["well of many worlds"] = {
	name: "Well of Many Worlds",
	source: [["D24", 324]],
	type: "wondrous item",
	rarity: "legendary",
	magicItemTable: "?",
	description: "You can take a Magic action to unfold this black cloth, 6-ft in diameter, and place it on a solid surface, whereupon it creates a two-way 6-ft diameter circular portal to another world or plane, chosend by the DM. You can use a Magic action to grab it from the edges and fold it, closing the portal. Once used in this way, it can't do so again for 1d8 hours.",
	descriptionFull: "This fine black cloth, soft as silk, is folded up to the dimensions of a handkerchief. It unfolds into a circular sheet 6 feet in diameter.\n   You can use a Magic action to unfold and place the well of many worlds on a solid surface, whereupon it creates a two-way portal to another world or plane of existence. Each time the item opens a portal, the DM decides where it leads.\n You can take a Magic action to close an open portal by taking hold of the edges of the cloth and folding it up. Once well of many worlds has opened a portal, it can't do so again for 1d8 hours.",
	action: [["action", " (place/fold)"]],
	usages: 1,
	recovery: "1d8 h"
};
MagicItemsList["wind fan"] = {
	name: "Wind Fan",
	source: [["D24", 325]],
	type: "wondrous item",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "While holding this fan, you can cast Gust of Wind (save DC 13) from it. Each subsequent time the fan is used before the next dawn, it has a cumulative 20 percent chance of not working; if the fan fails to work, it tears into useless, nonmagical tatters.",
	descriptionFull: "While holding this fan, you can cast Gust of Wind (save DC 13) from it. Each subsequent time the fan is used before the next dawn, it has a cumulative 20 percent chance of not working; if the fan fails to work, it tears into useless, nonmagical tatters.",
	usages: 1,
	recovery: "dawn",
	additional: "more uses +20% to destroy",
	fixedDC: 13,
	spellcastingBonus: {
		name: "Once per dawn",
		spells: ["gust of wind"],
		selection: ["gust of wind"],
		firstCol: "oncelr"
	}
};
MagicItemsList["winged boots"] = {
	name: "Winged Boots",
	source: [["D24", 325]],
	type: "wondrous item",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "These boots have 4 charges and regain 1d4 expended charges at dawn. While wearing these boots, you can take a Magic action to expend 1 charge to gain a Fly Speed of 30 feet for 1 hour. If you are flying when the duration expires, descend 30 ft per round until you land.",
	descriptionFull: "These boots have 4 charges and regain 1d4 expended charges daily at dawn. While wearing the boots, you can take a Magic action to expend 1 charge, gaining a Fly Speed of 30 feet for 1 hour. If you are flying when the duration expires, you descend at a rate of 30 feet per round until you land.",
	attunement: true,
	usages: "4",
	recovery: "dawn",
	additional: "regains 1d4"
};
MagicItemsList["wings of flying"] = {
	name: "Wings of Flying",
	source: [["D24", 325]],
	type: "wondrous item",
	rarity: "rare",
	magicItemTable: "?",
	description: "While wearing this cloak, you can take a Magic action to turn the cloak into a pair of wings on your back. The wings last for 1 hour or until you end the affect early as a Magic action. The wings give a flying speed of 60 ft. When they disappear, you can't use them again for 1d12 hours.",
	descriptionFull: "While wearing this cloak, you can take a Magic action to turn the cloak into a pair of wings on your back. The wings lasts for 1 hour or until you end the effect early as a Magic action. The wings give you a Fly Speed of 60 feet. If you are aloft when the wings disappear, you fall. When the wings disappear, you can’t use them again for 1d12 hours.",
	attunement: true,
	action: [["action", " (start/stop)"]],
	usages: 1,
	recovery: "1d12 h"
};
MagicItemsList["wraps of unarmed power"] = {
	name: "Wraps of Unarmed Power, +1, +2, or +3",
	nameTest: "Wraps of Unarmed Power",
	source: [["D24", 325]],
	magicItemTable: "?",
	type: "wondrous item",
	description: "While wearing these wraps, you have a bonus to attack rolls and damage rolls made with your Unarmed Strikes. The bonus is determined by the wraps’ rarity, and those strikes deal your choice of Force damage or their normal damage type. The bonus is determined by rarity: uncommon (+1), rare (+2), or very rare (+3).",
	descriptionFull: "While wearing these wraps, you have a bonus to attack rolls and damage rolls made with your Unarmed Strikes. The bonus is determined by the wraps’ rarity, and those strikes deal your choice of Force damage or their normal damage type. Rarity/Bonus: uncommon (+1), rare (+2), or very rare (+3).",
	choices: ["+1 Wraps of Unarmed Power (uncommon)", "+2 Wraps of Unarmed Power (rare)", "+3 Wraps of Unarmed Power (very rare)"],
	"+1 wraps of unarmed power (uncommon)": {
		name: "Wraps of Unarmed Power +1",
		nameTest: "+1 Wraps of Unarmed Power",
		rarity: "uncommon",
		description: "While wearing these wraps, you gain a +1 bonus to the attack and damage rolls of your Unarmed Strikes. Your Unarmed Strikes can deal your choice of Force or their normal damage.",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					if (v.baseWeaponName == "unarmed strike") {
						fields.Description += (fields.Description ? '; ' : '') + 'Choice of Force or normal dmg';

					}
				},
				"Your Unarmed Strikes get a +1 bonus to attack / damage rolls and you can choose between Force damage or normal damage.",
				700
			],
			atkCalc: [
				function (fields, v, output) {
					if (v.baseWeaponName == "unarmed strike") {
						output.magic += 1;
					}
				}, ''
			]
		}
	},
	"+2 wraps of unarmed power (rare)": {
		name: "Wraps of Unarmed Power +2",
		nameTest: "+2 Wraps of Unarmed Power",
		rarity: "rare",
		description: "While wearing these wraps, you gain a +2 bonus to the attack and damage rolls of your Unarmed Strikes. Your Unarmed Strikes can deal your choice of Force or their normal damage.",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					if (v.baseWeaponName == "unarmed strike") {
						fields.Description += (fields.Description ? '; ' : '') + 'Choice of Force or normal damage';
					}
				},
				"Your Unarmed Strikes get a +2 bonus to attack / damage rolls and you can choose between Force damage or normal damage.",
				700
			],
			atkCalc: [
				function (fields, v, output) {
					if (v.baseWeaponName == "unarmed strike") {
						output.magic += 2;
					}
				}, ''
			]
		}
	},
	"+3 wraps of unarmed power (very rare)": {
		name: "Wraps of Unarmed Power +3",
		nameTest: "+3 Wraps of Unarmed Power",
		rarity: "very rare",
		description: "While wearing these wraps, you gain a +3 bonus to the attack and damage rolls of your Unarmed Strikes. You Unarmed Strikes can deal your choice of Force or their normal damage.",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					if (v.baseWeaponName == "unarmed strike") {
						fields.Description += (fields.Description ? '; ' : '') + 'Choice of Force or normal damage';
					}
				},
				"Your Unarmed Strikes get a +3 bonus to attack / damage rolls and you can choose between Force damage or normal damage.",
				700
			],
			atkCalc: [
				function (fields, v, output) {
					if (v.baseWeaponName == "unarmed strike") {
						output.magic += 3;
					}
				}, ''
			]
		}
	}
};
