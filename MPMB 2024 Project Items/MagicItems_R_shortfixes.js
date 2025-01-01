// Suggestions from Toskr 12/2/2024

//Toskr suggested moving Adv on sight-based Perception back into Vision instead of Saves block
MagicItemsList["robe of eyes"] = { // contains contributions by SoilentBrad
	name: "Robe of Eyes",
	source: [["DMG2024", 297]],
	type: "wondrous item",
	rarity: "rare",
	magicItemTable: "?",
	description: "This robe gives you the following benefits: Advantage on sight-based Perception checks; Darkvision and Truesight up to 120-ft. If Light is cast on it or Daylight within 5 ft of it, you're blinded for 1 min, Con save (DC 11-Light, 15-Daylight) at the end of my each of my turns until succussful.",
	descriptionFull: "This robe is adorned with eyelike patterns. While you wear the robe, you gain the following benefits:\n" + toUni("All-Around Vision") + ". The robe gives you Advantage on Wisdom (Perception) checks that rely on sight.\n" + toUni("Special Senses") + ". You have Darkvision and Truesight, both with a range of 120 feet.\n" + toUni("Drawbacks") + ". A Light spell cast on the robe or a Daylight spell cast within 5 feet of the robe gives you the Blinded condition for 1 minute. At the end of each of your turns, you make a Constitution saving throw (DC 11 for Light or DC 15 for Daylight), ending the condition on yourself on a success.",
	attunement: true,
	weight: 4,
	vision: [
		["Darkvision", "fixed 120"],
		["Truesight", "fixed 120"],
		["Adv on sight-based Perception"],
	],
};
// Typo on number of darts in spell changes; should be 7 
MagicItemsList["robe of stars"] = { // contains contributions by SoilentBrad
	name: "Robe of Stars",
	source: [["DMG2024", 297]],
	type: "wondrous item",
	rarity: "very rare",
	magicItemTable: "?",
	description: "This dark robe gives a +1 bonus to saving throws while worn. It has 6 large stars embroidered on it, that I can use to cast Magic Missile at 5th-level. 1d6 removed stars reappear at dusk. As a Magic action, I can enter the Astral Plane along with all I'm wearing and carrying. I can return by taking a Magic action, appearing in the spot I left or nearest unoccupied space.",
	descriptionFull: "This black or dark blue robe is embroidered with small white or silver stars. You gain a +1 bonus to saving throws while you wear it.\n   Six stars, located on the robe's upper front portion, are particularly large. While wearing this robe, you can use a Magic action to pull off one of the stars and use it to cast Magic Missile as a 5th-level spell. Daily at dusk, 1d6 removed stars reappear on the robe.\n   While you wear the robe, you can take a Magic action to enter the Astral Plane along with everything you are wearing and carrying. You remain there until you use a Magic action to return to the plane you were on. You reappear in the last space you occupied, or if that space is occupied, the nearest unoccupied space.",
	attunement: true,
	weight: 4,
	action: [["action", "Enter/Exit Astral"]],
	usages: 6,
	recovery: "Dusk",
	additional: "regains 1d6",
	addMod: [{ type: "save", field: "all", mod: 1, text: "While wearing the Robe of Stars, I gain a +1 bonus to all my saving throws." }],
	spellFirstColTitle: "Ch",
	spellcastingBonus: {
		name: "1 charge",
		spells: ["magic missile"],
		selection: ["magic missile"],
		firstCol: 1
	},
	spellChanges: {
		"magic missile": {
			description: "7 darts hit creature(s) I can see for 1d4+1 Force dmg per dart",
			changes: "Magic Missile cast from the Robe of Stars is always at 5th-level."
		}
	}
};

// removed 'flame tongue' from calc code description
MagicItemsList["rod of lordly might"] = {
	name: "Rod of Lordly Might",
	source: [["DMG2024", 300]],
	type: "rod",
	rarity: "legendary",
	magicItemTable: "?",
	description: "This rod functions as a +3 mace. As a Bonus action, I can press one of the six buttons on the rod, changing it. The rod can also drain life, paralyze, and terrify, on a melee attack, each once per dawn. See Notes Page for Buttons/Controls.",
	descriptionFull: "This rod has a flanged head, and it functions as a magic mace that grants a +3 bonus to attack and damage rolls made with it. The rod has properties associated with six different buttons that are set in a row along the haft. It has three other properties as well, detailed below.\n   " + toUni("Buttons") + ". You can press one of the following buttons as a Bonus Action; a button's effect lasts until you push a different button or until you push the same button again, which causes the rod to revert to its normal form.\n " + toUni("Button 1") + ".  A fiery blade sprouts from the end opposite the rod’s flanged head. The flames shed Bright Light in a 40-foot radius and Dim Light for an additional 40 feet, and the blade functions as a magic Longsword or Shortsword (your choice) that deals an extra 2d6 Fire damage on a hit.\n " + toUni("Button 2") + ". The rod’s flanged head folds down and two crescent-shaped blades spring out, transforming the rod into a magic Battleaxe that grants a +3 bonus to attack rolls and damage rolls made with it.\n  " + toUni("Button 3") + ". The rod’s flanged head folds down, a spear point springs from the rod’s tip, and the rod’s handle lengthens into a 6-foot haft, transforming the rod into a magic Spear that grants a +3 bonus to attack rolls and damage rolls made with it.\n  " + toUni("Button 4") + ". The rod transforms into a climbing pole up to 50 feet long (you specify the length), though the rod’s buttons remain within your reach. In surfaces as hard as granite, a spike at the bottom and three hooks at the top anchor the pole. Horizontal bars 3 inches long fold out from the sides, 1 foot apart, forming a ladder. The pole can bear up to 4,000 pounds. More weight or lack of solid anchoring causes the rod to revert to its normal form.\n  " + toUni("Button 5") + ". The rod transforms into a handheld battering ram and grants its user a +10 bonus to Strength (Athletics) checks made to break through doors, barricades, and other barriers.\n  " + toUni("Button 6") + ". The rod assumes or remains in its normal form and indicates magnetic north. (Nothing happens if this function of the rod is used in a location that has no magnetic north.) The rod also gives you knowledge of your approximate depth beneath the ground or your height above it.\n   " + toUni("Drain Life") + ". When you hit a creature with a melee attack using the rod, you can force the target to make a DC 17 Constitution saving throw. On a failed save, the target rakes an extra 4d6 Necrotic damage, and you regain a number of Hit Points equal to half that necrotic damage. This property can't be used again until the next dawn.\n   " + toUni("Paralyze") + ". When you hit a creature with a melee attack using the rod, you can force the target to make a DC 17 Constitution saving throw. On a failed save, the target is Paralyzed for 1 minute. The target repeats the saving throw at the end of each of its turns, ending the effect on a success. This property can't be used again until the next dawn.\n   " + toUni("Terrify") + ". While holding the rod, you can take a Magic action to force each creature you can see within 30 feet of you to make a DC 17 Wisdom saving throw. On a failed save, a target has the Frightened condition for 1 minute. A Frightened target repeats the save at the end of each of its turns, ending the effect on itself on a success. This property can't be used again until the next dawn.",
	attunement: true,
	weight: 2,
	action: [["Bonus action", " (press button)"], ["action", " (Terrify)"]],
	extraLimitedFeatures: [{
		name: "Rod of Lordly Might (Drain Life)",
		usages: 1,
		recovery: "dawn"
	}, {
		name: "Rod of Lordly Might (Paralyze)",
		usages: 1,
		recovery: "dawn"
	}, {
		name: "Rod of Lordly Might (Terrify)",
		usages: 1,
		recovery: "dawn"
	}],
	weaponOptions: [{
		baseWeapon: "battleaxe",
		regExpSearch: /^(?=.*rod)(?=.*lordly)(?=.*might)(?=.*axe).*$/i,
		name: "Rod of Lordly Might (Axe)",
		source: [["PHB2024", "-"]],
		modifiers: [3, 3]
	}, {
		baseWeapon: "mace",
		regExpSearch: /^(?=.*rod)(?=.*lordly)(?=.*might)(?=.*mace).*$/i,
		name: "Rod of Lordly Might (Mace)",
		source: [["PHB2024", "-"]],
		modifiers: [3, 3]
	}, {
		baseWeapon: "spear",
		regExpSearch: /^(?=.*rod)(?=.*lordly)(?=.*might)(?=.*spear).*$/i,
		name: "Rod of Lordly Might (Spear)",
		source: [["PHB2024", "-"]],
		modifiers: [3, 3]
	}],
	toNotesPage: [{
		name: "Buttons and Other Functions",
		note: [
			"The rod of lordly might has a flanged head, and it functions as a magic Mace that grants a +3 bonus to attack and damage roll made with it.",
			"As a Bonus action, I can press one of the six different buttons that are set in a row along the haft of the rod. A button's effect lasts until a different button is pushed, or until the same button is pushed again, whereupon it reverts to its normal form.",
			"\u2022 Button 1.  A fiery blade sprouts from the end opposite the rod’s flanged head. The flames shed Bright Light in a 40-foot radius and Dim Light for an additional 40 feet, and the blade functions as a magic Longsword or Shortsword (your choice) that deals an extra 2d6 Fire damage on a hit.",
			"\u2022 Button 2.  The rod’s flanged head folds down and two crescent-shaped blades spring out, transforming the rod into a magic Battleaxe that grants a +3 bonus to attack rolls and damage rolls made with it.",
			"\u2022 Button 3.  The rod’s flanged head folds down, a spear point springs from the rod’s tip, and the rod’s handle lengthens into a 6-foot haft, transforming the rod into a magic Spear that grants a +3 bonus to attack rolls and damage rolls made with it.",
			"\u2022 Button 4.  The rod transforms into a climbing pole up to 50 feet long (you specify the length), though the rod’s buttons remain within your reach. In surfaces as hard as granite, a spike at the bottom and three hooks at the top anchor the pole. Horizontal bars 3 inches long fold out from the sides, 1 foot apart, forming a ladder. The pole can bear up to 4,000 pounds. More weight or lack of solid anchoring causes the rod to revert to its normal form.",
			"\u2022 Button 5.  The rod transforms into a handheld battering ram and grants its user a +10 bonus to Strength (Athletics) checks made to break through doors, barricades, and other barriers.",
			"\u2022 Button 6.  The rod assumes or remains in its normal form and indicates magnetic north. (Nothing happens if this function of the rod is used in a location that has no magnetic north.) The rod also gives you knowledge of your approximate depth beneath the ground or your height above it.",
			"The rod also has three functions that work independent of the buttons.",
			"\u2022 Drain Life. When you hit a creature with a melee attack using the rod, you can force the target to make a DC 17 Constitution saving throw. On a failed save, the target takes an extra 4d6 Necrotic damage, and you regain a number of Hit Points equal to half that Necrotic damage. Once used, this property can’t be used again until the next dawn.",
			"\u2022 Paralyze.   When you hit a creature with a melee attack using the rod, you can force the target to make a DC 17 Constitution saving throw. On a failed save, the target has the Paralyzed condition for 1 minute. The target repeats the save at the end of each of its turns, ending the effect on a success. Once used, this property can’t be used again until the next dawn.",
			"\u2022 Terrify.    While holding the rod, you can take a Magic action to force each creature you can see within 30 feet of yourself to make a DC 17 Wisdom saving throw. On a failed save, a target has the Frightened condition for 1 minute. A Frightened target repeats the save at the end of each of its turns, ending the effect on itself on a success. Once used, this property can’t be used again until the next dawn."
		]
	}],

	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/sword/i).test(v.baseWeaponName) && (/^(?=.*lordly)(?=.*might).*$/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + '+2d6 fire damage';
				}
			},
			'If I include the words "Lordly Might" in a the name of a long sword or short sword, it adds +2d6 fire damage on a hit and shines light.'
		]
	}
};

// removed Warlock from the limfeaname, its all spell slots
MagicItemsList["rod of the pact keeper, +1, +2, or +3"] = {
	name: "Rod of the Pact Keeper, +1, +2, or +3",
	source: [["DMG2024", 301]],
	type: "rod",
	description: "While holding this rod, you gain a bonus to spell attack rolls and to the saving throw DCs of your warlock spells, determined by the rod's rarity: uncommon (+1), rare (+2), or very rare (+3). In addition, you can regain one spell slot as a Magic action while holding the rod. You can’t use this property again until you finish a Long Rest.",
	descriptionFull: "While holding this rod, you gain a bonus to spell attack rolls and to the saving throw DCs of your warlock spells. The bonus is determined by the rod's rarity: uncommon (+1), rare (+2), or very rare (+3).\n In addition, you can regain one spell slot as a Magic action while holding the rod. You can’t use this property again until you finish a Long Rest.",
	attunement: true,
	weight: 2,
	prerequisite: "Requires attunement by a warlock",
	prereqeval: function (v) { return classes.known.warlock; },
	usages: 1,
	recovery: "long rest",
	limfeaname: "Rod of the Pact Keeper (spell slot)",
	action: [["action", ""]],
	allowDuplicates: true,
	choices: ["+1 Rod (uncommon)", "+2 Rod (rare)", "+3 Rod (very rare)"],
	"+1 rod (uncommon)": {
		name: "Rod of the Pact Keeper +1",
		rarity: "uncommon",
		magicItemTable: "?",
		description: "While holding this rod, you gain a +1 bonus to spell attack rolls and to the saving throw DCs of you Warlock spells. As a Magic action once per long rest, you can regain one warlock spell slot while holding the rod.",
		calcChanges: {
			spellCalc: [
				function (type, spellcasters, ability) {
					if (type !== "prepare" && spellcasters.indexOf('warlock') !== -1) return 1;
				},
				"While holding the Rod of the Pact Keeper, you gain a +1 bonus to spell attack rolls and to the saving throw DCs of my warlock spells."
			]
		}
	},
	"+2 rod (rare)": {
		name: "Rod of the Pact Keeper +2",
		rarity: "rare",
		magicItemTable: "?",
		description: "While holding this rod, you gain a +2 bonus to spell attack rolls and to the saving throw DCs of your Warlock spells. As a Magic action once per long rest, you can regain one warlock spell slot while holding the rod.",
		calcChanges: {
			spellCalc: [
				function (type, spellcasters, ability) {
					if (type !== "prepare" && spellcasters.indexOf('warlock') !== -1) return 2;
				},
				"While holding the Rod of the Pact Keeper, you gain a +2 bonus to spell attack rolls and to the saving throw DCs of your Warlock spells."
			]
		}
	},
	"+3 rod (very rare)": {
		name: "Rod of the Pact Keeper +3",
		rarity: "very rare",
		magicItemTable: "?",
		description: "While holding this rod, you gain a +3 bonus to spell attack rolls and to the saving throw DCs of your Warlock spells. As a Magic action once per long rest, you can regain one Warlock spell slot while holding the rod.",
		calcChanges: {
			spellCalc: [
				function (type, spellcasters, ability) {
					if (type !== "prepare" && spellcasters.indexOf('warlock') !== -1) return 3;
				},
				"While holding the Rod of the Pact Keeper, you gain a +3 bonus to spell attack rolls and to the saving throw DCs of you Warlock spells."
			]
		}
	}
};

