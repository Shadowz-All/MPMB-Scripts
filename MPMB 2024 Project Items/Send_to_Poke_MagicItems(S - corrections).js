// Magic Items 'S' corrections

//Corrected atkCalc action to include weapon types "or | " 
MagicItemsList["giant slayer"] = {
	name: "Giant Slayer",
	source: [["DMG2024", 264]],
	type: "weapon (any)",
	rarity: "rare",
	magicItemTable: "?",
	description: "I have a +1 bonus to attack and damage rolls made with this magic weapon. When I hit a creature with the giant type with this weapon, it does 2d6 extra damage of the weapon's damage type and the giant has to make a DC 15 Strength save or be knocked prone.",
	descriptionFull: "You gain a +1 bonus to attack rolls and damage rolls made with this magic weapon.\n   When you hit a Giant with this weapon, the Giant takes an extra 2d6 damage of the weapon’s type and must succeed on a DC 15 Strength saving throw or have the Prone condition.",
	chooseGear: {
		type: "weapon",
		prefixOrSuffix: "brackets",
		descriptionChange: ["replace", "weapon"],
	},
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && (/^(?=.*giant)(?=.*slayer).*$/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + '+2d6 damage vs. giants; Giants DC 15 Str save or prone';
				}
			},
			'If I include the words "Giant Slayer" in a the name of a weapon, it will be treated as the magic weapon Giant Slayer. It has +1 to hit and damage and when hitting a creatures with the giant type, it does +2d6 damage and the target has to make a DC 15 Strength save or be knocked prone.'
		],
		atkCalc: [
			function (fields, v, output) {
				if (v.isMeleeWeapon | v.isRangedWeapon && (/^(?=.*giant)(?=.*slayer).*$/i).test(v.WeaponTextName)) {
					output.magic = v.thisWeapon[1] + 1;
				}
			}, ''
		]
	}
};

//added line break before "Regain Charges"
MagicItemsList["staff of flowers"] = {
	name: "Staff of Flowers",
	source: [["DMG2024", 308]],
	type: "staff",
	rarity: "common",
	description: "This staff has 10 charges, regaining 1d6+4 at dawn, 5% chance it is destroyed when its last charge is used. As a Magic action, I can use 1 charge to cause a flower of my choice to sprout from a patch of earth or soil within 5 ft or from the staff itself. The flower is nonmagical and grows or withers as a normal flower would.",
	descriptionFull: "This wooden staff has 10 charges. While holding it, you can take a Magic action to expend 1 charge from the staff and cause a flower to sprout from a patch of earth or soil within 5 feet of yourself, or from the staff itself. Unless you choose a specific kind of flower, the staff creates a mild-scented daisy. The flower is harmless and nonmagical, and it grows or withers as a normal flower would.\n" + toUni("Regaining Charges") + "The staff regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll 1d20. On a 1, the staff turns into flower petals and is lost forever.",
	weight: 4,
	usages: 10,
	recovery: "dawn",
	additional: "regains 1d6+4",
	action: [["action", ""]]
};	
// Corrected ability modifier and typo in description.
MagicItemsList["staff of the adder"] = {
	name: "Staff of the Adder",
	source: [["DMG2024", 309]],
	type: "staff",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "As a Bonus Action, you can animate the head of this staff turning it into a venomous snake for 1 minute or make it inanimate again. While animated, you can use it in melee using your Proficiency Bonus and Wisdom modifier on the attack roll (1d6 piercing and 3d6 poison), but it can be attacked and has AC 15 and 20 HP (full every time). It has Immunity to Poison and Psychic damage. If it reaches 0 HP, the staff is destroyed.",
	descriptionFull: "As a Bonus Action, you can turn the head of this staff into that of an animate, venomous snake for 1 minute or revert the staff to its inanimate form.\n  When you take the Attack action, you can make one of the attack rolls using the animated snake head, which has a reach of 5 feet. Apply your Proficiency Bonus and Wisdom modifier to the attack roll. On a hit, the target takes 1d6 Piercing damage and 3d6 Poison damage.\n  The snake head can be attacked while it is animate. It has AC 15, HP 20, and Immunity to Poison and Psychic damage. If the head drops to 0 Hit Points, the staff is destroyed. As long as it’s not destroyed, the staff regains all lost Hit Points when it reverts to its inanimate form.",
	attunement: true,
	weight: 4,
	action: [["bonus action", " (animate/end)"]],
	weaponOptions: [{
		regExpSearch: /staff of the adder/i,
		name: "Animated Snake Head from Staff of the Adder",
		source: [["PHP2024"]],
		list: "melee",
		ability: 5,
		type: "Natural",
		damage: [1, 6, "piercing"],
		range: "Melee",
		weight: 4,
		description: "1 attack roll only: +3d6 Poison",
		abilitytodamage: false,
		selectNow: true
	}]
};

// Fixed typo. Adjusted Lightning description. Adjusted item-cast time. Added bullet for Regain Charges
MagicItemsList["staff of the magi"] = { // contains contributions by Pengsloth
	name: "Staff of the Magi",
	source: [["DMG2024", 310]],
	type: "staff",
	rarity: "legendary",
	magicItemTable: "?",
	description: "This staff has 50 charges and can be wielded as a magic Quarterstaff that grants a +2 bonus to attack rolls and damage rolls made with it and gives Advantage on saving throws against spells. As a Reaction, you can absorb a spell targeting only you, converting its spell level to charges and cancelling its effect. If this brings it over 50 charges or you break it is as an action, it explodes.",
	descriptionFull: "This staff has 50 charges and can be wielded as a magic Quarterstaff that grants a +2 bonus to attack rolls and damage rolls made with it. While you hold it, you gain a +2 bonus to spell attack rolls.\n" + toUni("Spell Absorption") + ". While holding the staff, you have Advantage on saving throws against spells. In addition, you can take a Reaction when another creature casts a spell that targets only you. If you do, the staff absorbs the magic of the spell, canceling its effect and gaining a number of charges equal to the absorbed spell’s level. However, if doing so brings the staff’s total number of charges above 50, the staff explodes as if you activated its Retributive Strike (see below).\n   " + toUni("Spells") + ". While holding the staff, you can cast one of the spells on the following table from it, using your spell save DC. The table indicates how many charges you must expend to cast the spell: Arcane Lock (0 charges), Conjure Elemental (7 charges), Detect Magic (0 charges), Dispel Magic (3 charges), Enlarge/Reduce (0 charges), Fireball (7th-level version, 7 charges), Flaming Sphere (2 charges), Ice Storm (4 charges), Invisibility (2 charges), Knock (2 charges), Light (0 charges), Lightning Bolt (7th-level version, 7 charges), Mage Hand (0 charges), Passwall (5 charges), Plane Shift (7 charges), Protection from Evil and Good (0 charges), Telekinesis (5 charges), Wall of Fire (4 charges), or Web (2 charges).\n " + toUni("Retributive Strike") + ". You can take a Magic action to break the staff over your knee or against a solid surface. The staff is destroyed and releases its magic in an explosion that fills a 30-foot Emanation originating from itself. You have a 50 percent chance to instantly travel to a random plane of existence, avoiding the explosion. If you fail to avoid the effect, you take Force damage equal to 16 \xD7 the number of charges in the staff. Each other creature in the area makes a DC 17 Dexterity saving throw. On a failed save, a creature takes Force damage equal to 6 \xD7 the number of charges in the staff. On a successful save, a creature takes half as much damage.\n\n" + toUni("Regain Charges")+". The staff regains 4d6 + 2 expended charges daily at dawn. If you expend the last charge, roll 1d20. On a 20, the staff regains 1d12 + 1 charges.",
	attunement: true,
	weight: 4,
	prerequisite: "Requires attunement by a sorcerer, warlock, or wizard",
	prereqeval: function (v) {
		return classes.known.sorcerer || classes.known.warlock || classes.known.wizard ? true : false;
	},
	weaponsAdd: ["Staff of the Magi"],
	weaponOptions: {
		baseWeapon: "quarterstaff",
		regExpSearch: /^(?=.*staff)(?=.*magi).*$/i,
		name: "Staff of the Magi",
		source: [["PHB2024", "-"]],
		modifiers: [2, 2]
	},
	calcChanges: {
		spellCalc: [
			function (type, spellcasters, ability) {
				if (type == "attack") return 2;
			},
			"While holding the Staff of the Magi I have a +2 bonus to spell attack rolls."
		]
	},
	usages: 50,
	recovery: "dawn",
	additional: "regains 4d6+2",
	savetxt: { adv_vs: ["spells"] },
	action: [
		["reaction", " (Spell Absorption)"],
		["action", " (Retributive Strike)"]
	],
	spellcastingAbility: "class",
	spellFirstColTitle: "Ch",
	spellcastingBonus: [{
		name: "7 charges",
		spells: ["conjure elemental", "plane shift"],
		selection: ["conjure elemental", "plane shift"],
		firstCol: 7,
		times: 2
	}, {
		name: "7 charges; 7th level",
		spells: ["fireball", "lightning bolt"],
		selection: ["fireball", "lightning bolt"],
		firstCol: 7,
		times: 2
	}, {
		name: "5 charges",
		spells: ["passwall", "telekinesis"],
		selection: ["passwall", "telekinesis"],
		firstCol: 5,
		times: 2
	}, {
		name: "4 charges",
		spells: ["ice storm", "wall of fire"],
		selection: ["ice storm", "wall of fire"],
		firstCol: 4,
		times: 2
	}, {
		name: "3 charges",
		spells: ["dispel magic"],
		selection: ["dispel magic"],
		firstCol: 3
	}, {
		name: "2 charges",
		spells: ["flaming sphere", "invisibility", "knock", "web"],
		selection: ["flaming sphere", "invisibility", "knock", "web"],
		firstCol: 2,
		times: 4
	}, {
		name: "0 charges",
		spells: ["arcane lock", "detect magic", "enlarge/reduce", "light", "mage hand", "protection from evil and good"],
		selection: ["arcane lock", "detect magic", "enlarge/reduce", "light", "mage hand", "protection from evil and good"],
		firstCol: "atwill",
		times: 6
	}],
	spellChanges: {
		"fireball": {
			nameShort: "Fireball (7th level)",
			description: "20-ft rad all crea 12d6 Fire dmg; save halves; unattended flammable objects ignite",
			changes: "Cast as if using a 7th-level spell slot."
		},
		"lightning bolt": {
			nameShort: "Lightning Bolt (7th level)",
			description: "100-ft long 5-ft wide all 12d6 Lightning dmg; save halves",
			changes: "Cast as if using a 7th-level spell slot."
		},
		"conjure elemental": {
			time: "instant",
			changes: "Casting time removed due to item cast"
		}
	}
};
//add bullet to Regain Charges in full description. Adjusted cast time for Awaken.
MagicItemsList["staff of the woodlands"] = {
	name: "Staff of the Woodlands",
	source: [["DMG2024", 311]],
	type: "staff",
	rarity: "rare",
	magicItemTable: "?",
	description: "This +2 quarterstaff gives me a +2 bonus on spell attacks, as well as allowes me to cast multiple spells from it. It has 6 charges, regaining 1d6 at dawn, 5% chance of losing its magic when its last charge is used. As a Magic action, I can plant it into the ground and expend 1 charge to have it grow into a 60 ft tree, which it remains until I use another Magic action to revert it back.",
	descriptionFull: "This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While holding it, you have a +2 bonus to spell attack rolls.\n   The staff has 6 charges for the following properties. It regains 1d6 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff loses its properties and becomes a nonmagical quarterstaff.\n   " + toUni("Spells") + ". You can use an action to expend 1 or more of the staff's charges to cast one of the following spells from it, using your spell save DC: Animal Friendship (1 charge), Awaken (5 charges), Barkskin (2 charges), Locate Animals or Plants (2 charges), Pass Without Trace (2 charges), Speak with Animals (1 charge), Speak with Plants (3 charges), or Wall of Thorns (6 charges).\n   You can also use an action to cast the Pass Without Trace spell from the staff without using any charges.\n   " + toUni("Tree Form") + ". You can use an action to plant one end of the staff in fertile earth and expend 1 charge to transform the staff into a healthy tree. The tree is 60 feet tall and has a 5-foot-diameter trunk, and its branches at the top spread out in a 20-foot radius. The tree appears ordinary but radiates a faint aura of transmutation magic if targeted by Detect Magic. While touching the tree and using another action to speak its command word, you return the staff to its normal form. Any creature in the tree falls when it reverts to a staff.\n" + toUni("Regain Charges") +". The staff regains 1d6 expended charges daily at dawn. If you expend the last charge, roll 1d20. On a 1, the staff loses its properties and becomes a nonmagical Quarterstaff.",
	attunement: true,
	weight: 4,
	prerequisite: "Requires attunement by a druid",
	prereqeval: function (v) { return classes.known.druid ? true : false; },
	action: [["action", ""]],
	usages: 6,
	recovery: "dawn",
	additional: "regains 1d6",
	weaponsAdd: ["Staff of the Woodlands"],
	weaponOptions: {
		baseWeapon: "quarterstaff",
		regExpSearch: /^(?=.*staff)(?=.*woodlands).*$/i,
		name: "Staff of the Woodlands",
		source: [["PHB2024",]],
		modifiers: [2, 2]
	},
	calcChanges: {
		spellCalc: [
			function (type, spellcasters, ability) {
				if (type == "attack") return 2;
			},
			"While holding the Staff of the Woodlands, I have a +2 bonus to spell attack rolls."
		]
	},
	spellcastingAbility: "class",
	spellFirstColTitle: "Ch",
	spellcastingBonus: [{
		name: "1 charge",
		spells: ["animal friendship", "speak with animals"],
		selection: ["animal friendship", "speak with animals"],
		firstCol: 1,
		times: 2
	}, {
		name: "2 charges",
		spells: ["barkskin", "locate animals or plants", "pass without trace"],
		selection: ["barkskin", "locate animals or plants", "pass without trace"],
		firstCol: 2,
		times: 2
	}, {
		name: "3 charges",
		spells: ["speak with plants"],
		selection: ["speak with plants"],
		firstCol: 3
	}, {
		name: "5 charges",
		spells: ["awaken"],
		selection: ["awaken"],
		firstCol: 5
	}, {
		name: "6 charges",
		spells: ["wall of thorns"],
		selection: ["wall of thorns"],
		firstCol: 6
	}],
	spellChanges: {
		"awaken": {
			time: "instant",
			changes: "Casting time removed due to item cast."
		}
	}
};
// Shortened wording for Bonus Action. Added item name for bonus action. Added Long Description.
MagicItemsList["staff of thunder and lightning"] = {
	name: "Staff of Thunder and Lightning",
	source: [["DMG2024", 311]],
	type: "staff",
	rarity: "very rare",
	magicItemTable: "?",
	description: "This +2 Quarterstaff has 5 special abilities that each can be used once per dawn. Both 'Lightning' and 'Thunder' can be used when I hit a melee attack with it; while 'Lightning Strike'and 'Thunderclap' require a Magic action to use. See the Notes page for what all of these abilities entail.",
	descriptionLong: "This +2 Quarterstaff has 5 special abilities, each 1/dawn. On hit: 'Lightning'- +2d6 Lightning; 'Thunder'- DC 17 Con or Stunned 1 rnd; 'Thunder & Lightning' - bonus action for both. Magic action: 'Lightning Strike'- 5\xD7120ft line, DC 17 Dex, 9d6 Lightning or 1/2. 'Thunderclap'- all in 60ft, 2d6 Thunder & Deaf (1 min), DC 17 Con for 1/2 dmg.",
	descriptionFull: "This staff can be wielded as a magic Quarterstaff that grants a +2 bonus to attack rolls and damage rolls made with it. It also has the following additional properties. Once one of these properties is used, it can’t be used again until the next dawn.\n   " +
		toUni("Lightning") + ". When you hit with a melee attack using the staff, you can cause the target to take an extra 2d6 Lightning damage (no action required).\n   " +
		toUni("Thunder") + ". When you hit with a melee attack using the staff, you can cause the staff to emit a crack of thunder, audible out to 300 feet (no action required). The target you hit must succeed on a DC 17 Constitution saving throw or have the Stunned condition until the end of your next turn.\n" +
		toUni("Lightning Strike") + ". You can take a Magic action to cause a bolt of lightning to leap from the staff's tip in a Line that is 5 feet wide and 120 feet long. Each creature in that Line must make a DC 17 Dexterity saving throw, taking 9d6 Lightning damage on a failed save, or half as much damage on a successful one.\n" +
		toUni("Thunderclap") + ". You can take a Magic action to cause the staff to produce a thunderclap audible out to 600 feet. Every creature a within 60-foot Emanation origination from you must make a DC 17 Constitution saving throw. On a failed save, a creature takes 2d6 Thunder damage and has the Deafened condition for 1 minute. On a successful save, a creature takes half damage and isn't deafened.\n " +
		toUni("Thunder and Lightning") + ". Thunder and Lightning. Immediately after you hit with a melee attack using the staff, you can take a Bonus Action to use the Lightning and Thunder properties (see above) at the same time. Doing so doesn’t expend the daily use of those properties, only the use of this one.",
	attunement: true,
	weight: 4,
	action: [["action", "Staff of T\u0026L Lightning Strike, Thunderclap"], ["bonus action", "Staff of T\u0026L, Thunder \u0026 Lighting"]],
	weaponsAdd: ["Staff of Thunder and Lightning"],
	weaponOptions: {
		baseWeapon: "quarterstaff",
		regExpSearch: /staff of thunder and lighting/i,
		name: "Staff of Thunder and Lightning",
		source: ["PHB2024", "-"],
		description: "Versatile (1d8), Topple; Lightning: 1\xD7 per dawn, +2d6 lightning damage; Thunder: 1\xD7 per dawn DC 17 Con save or 1 round stunned",
		modifiers: [2, 2]
	},
	extraLimitedFeatures: [{
		name: "Staff of T\u0026L [Lightning]",
		usages: 1,
		recovery: "dawn"
	}, {
		name: "Staff of T\u0026L [Thunder]",
		usages: 1,
		recovery: "dawn"
	}, {
		name: "Staff of T\u0026L [Lightning Strike]",
		usages: 1,
		recovery: "dawn"
	}, {
		name: "Staff of T\u0026L [Thunderclap]",
		usages: 1,
		recovery: "dawn"
	}, {
		name: "Staff of T\u0026L [Thunder and Lightning]",
		usages: 1,
		recovery: "dawn"
	}],
	toNotesPage: [{
		name: "Special Properties",
		note: [
			"\n   This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. It also has the following additional properties. When one of these properties is used, it can't be used again until the next dawn.",
			" \u2022 Lightning. When you hit with a melee attack using the staff, you can cause the target to take an extra 2d6 Lightning damage (no action required).",
			" \u2022 Thunder. When you hit with a melee attack using the staff, you can cause the staff to emit a crack of thunder audible out to 300 feet (no action required). The target you hit must succeed on a DC 17 Constitution saving throw or have the Stunned condition until the end of your next turn.",
			" \u2022 Lightning Strike. You can take a Magic action to cause a bolt of lightning to leap from the staff’s tip in a Line that is 5 feet wide and 120 feet long. Each creature in that Line makes a DC 17 Dexterity saving throw, taking 9d6 Lightning damage on a failed save or half as much damage on a successful one.",
			" \u2022 Thunderclap. You can take a Magic action to cause the staff to produce a thunderclap audible out to 600 feet. Every creature within a 60-foot Emanation originating from you makes a DC 17 Constitution saving throw. On a failed save, a creature takes 2d6 Thunder damage and has the Deafened condition for 1 minute. On a successful save, a creature takes half as much damage only.",
			" \u2022 Thunder and Lightning. Immediately after you hit with a melee attack using the staff, you can take a Bonus Action to use the Lightning and Thunder properties (see above) at the same time. Doing so doesn’t expend the daily use of those properties, only the use of this one.",
		].join("\n")
	}]
};
//added numerical value of DC Con save
MagicItemsList["staff of withering"] = {
	name: "Staff of Withering",
	source: [["DMG2024", 312]],
	type: "staff",
	rarity: "rare",
	magicItemTable: "?",
	description: "This staff has 3 charges, regaining 1d3 at dawn and functions as a magic Quarterstaff. On a hit with it, I can expend 1 charge to deal an extra 2d10 Necrotic damage to the target, which must then make a DC 15 Con save or have Disadvantage on any ability check or save that uses Strength or Constitution for 1 hour.",
	descriptionFull: "This staff has 3 charges and regains 1d3 expended charges daily at dawn.\n   The staff can be wielded as a magic Quarterstaff. On a hit, it deals damage as a normal Quarterstaff, and you can expend 1 charge to deal an extra 2d10 Necrotic damage to the target and force it to make a DC 15 Constitution saving throw. On a failed save, the target has Disadvantage for 1 hour on any ability check or saving throw that uses Strength or Constitution.",
	attunement: true,
	weight: 4,
	usages: 3,
	recovery: "dawn",
	additional: "regains 1d3",
	weaponsAdd: ["Staff of Withering"],
	weaponOptions: {
		baseWeapon: "quarterstaff",
		regExpSearch: /^(?=.*staff)(?=.*withering).*$/i,
		name: "Staff of Withering",
		source: [["PHB2024", "-"]],
		description: "Versatile (1d8), Topple; 1 charge / +2d10 Necrotic and DC 15 Con Save or DisAdv 1 hr (Str or Con)"
	}
};
//removed spell bonus, added to action/bonus action
MagicItemsList["stone of controlling earth elementals"] = {
	name: "Stone of Controlling Earth Elementals",
	source: [["DMG2024", 312]],
	type: "wondrous item",
	rarity: "rare",
	magicItemTable: "?",
	description: "While touching this 5-pound stone to the ground, you can take a Magic action to summon an Earth Elemental. It appears in an unoccupied space you choose within 30-ft of yourself, obeys your commands, and its turn is immediately after yours. It disappears after 1 hour, when it dies, or when dismissed as a Bonus Action. The stone can't be used this way again until the next dawn.",
	descriptionFull: "While touching this 5-pound stone to the ground, you can take a Magic action to summon an Earth Elemental. The elemental appears in an unoccupied space you choose within 30 feet of yourself, obeys your commands, and takes its turn immediately after you on your Initiative count. The elemental disappears after 1 hour, when it dies, or when you dismiss it as a Bonus Action. The stone can’t be used this way again until the next dawn.",
	weight: 5,
	action: [["action", " (Summon)"], ["bonus action", " (Dismiss)"]],
	usages: 1,
	recovery: "dawn",
};

//fixed typo in description. Added spaces in bonus action.
MagicItemsList["sun blade"] = {
	name: "Sun Blade",
	source: [["DMG2024", 312]],
	type: "weapon (longsword)",
	rarity: "rare",
	magicItemTable: "?",
	attunement: true,
	description: "As a Bonus Action, you can have this hilt create a blade of radiance. While the blade exists, it acts like a magic Longsword that does +2 to attack and damage rolls, Radiant damage instead of Slashing (+1d8 to undead), has Finesse, emits Bright Light in a 15-ft radius and Dim Light in another 15 ft. You can take a Magic action, I can change the light's radius by 5 ft for each (Bright/Dim) to a maximum of 30 ft each or min of 10ft.",
	descriptionFull: "This item appears to be a longsword hilt.\n" + toUni("Blade of Radiance") + ". While grasping the hilt, you can take a Bonus Action to cause a blade of pure radiance to spring into existence or make the blade disappear. While the blade exists, this magic weapon functions as a Longsword with the Finesse property. If you are proficient with Longswords or Shortswords, you are proficient with the Sun Blade.\n   You gain a +2 bonus to attack rolls and damage rolls made with this weapon, which deals Radiant damage instead of Slashing damage. When you hit an Undead with it, that target takes an extra 1d8 Radiant damage.\n" + toUni("Sunlight") + ". The sword’s luminous blade emits Bright Light in a 15-foot radius and Dim Light for an additional 15 feet. The light is sunlight. While the blade persists, you can take a Magic action to expand or reduce its radius of Bright Light and Dim Light by 5 feet each, to a maximum of 30 feet each or a minimum of 10 feet each.",
	weight: 3,
	action: [["bonus action", "(Blade of Radiance"], ["action", " (change light)"]],
	weaponsAdd: ["Sun Blade"],
	weaponOptions: {
		baseWeapon: "longsword",
		regExpSearch: /^(?=.*sun)(?=.*blade).*$/i,
		name: "Sun Blade",
		source: [["PHN2024", "-"]],
		damage: [1, 8, "radiant"],
		description: "Finesse, Versatile (1d10), Sap; +1d8 (Radiant) to undead",
		modifiers: [2, 2]
	},
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (v.theWea.name == "Sun Blade" && !fields.Proficiency) {
					fields.Proficiency = CurrentProfs.weapon.otherWea && CurrentProfs.weapon.otherWea.finalProfs.indexOf("shortsword") !== -1;
				}
			}, 'If you are proficient with Longsword or Shortswords, you are proficient with the Sun Blade.'
		]
	}
};
//fixed typo in weapon description.
MagicItemsList["sword of answering"] = {
	name: "Sword of Answering",
	source: [["DMG2024", 313]],
	type: "weapon (longsword)",
	rarity: "legendary",
	magicItemTable: "?",
	description: "You gain a +3 bonus to attack and damage rolls made with this sword. You can take a Reaction againt any creature within your reach damages me, and you can make one melee attack with this sword with Advantage. This attack ignores damage Immunities and Resistances of the target.",
	descriptionFull: "You gain a +3 bonus to attack and damage rolls made with this sword. In addition, while you hold the sword, you can take a Reaction to make one melee attack with it against any creature in your reach that deals damage to you. You have Advantage on the attack roll, and any damage dealt with this special attack ignores any damage Immunity or Resistance the target has to that damage.",
	attunement: true,
	weight: 3,
	action: [["reaction", ""]],
	weaponOptions: [{
		baseWeapon: "longsword",
		regExpSearch: /^(?=.*sword)(?=.*answering).*$/i,
		name: "Sword of Answering",
		source: [["PHB2024", "-"]],
		modifiers: [3, 3],
		selectNow: true,
		description: "Versatile (1d10), Sap; Adv on Reaction attack; ignore Immune/Resist."
	}],
};
//fixed typo. Adjusted Calc Changes description.
MagicItemsList["sword of life stealing"] = {
	name: "Sword of Life Stealing",
	nameTest: "of Life Stealing",
	source: [["DMG2024", 314]],
	type: "weapon (glaive, greatsword, longsword, rapier, scimitar, or shortsword)",
	rarity: "rare",
	magicItemTable: "?",
	attunement: true,
	description: "When you attack a creature with this magic weapon and roll a 20 on the attack roll, that target takes an extra 15 Necrotic damage if it isn't a Construct or an Undead. Gain Temporary HP equal to amount of Necrotic damage taken.",
	descriptionFull: "When you attack a creature with this magic weapon and roll a 20 on the d20 for the attack roll, that target takes an extra 15 Necrotic damage if it isn’t a Construct or an Undead, and you gain Temporary Hit Points equal to the amount of Necrotic damage taken.",
	chooseGear: {
		type: "weapon",
		prefixOrSuffix: "prefix",
		descriptionChange: ["replace", "weapon"],
		excludeCheck: function (inObjKey, inObj) {
			var testRegex = /glaive|greatsword|longsword|rapier|scimitar|shortsword/i;
			return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
		}
	},
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/glaive|greatsword|longsword|rapier|scimitar|shortsword/i).test(v.baseWeaponName) && (/^(?=.*life)(?=.*stealing).*$/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'On 20 to hit: +15 Necrotic dmg, +15 temp HP;' + 'Does not work against Constructs or Undead';
				}
			},
			'If you include the words "Life Stealing" in a the name of a sword, it will be treated as the magic weapon Sword of Life Stealing. It does +15 necrotic damage when you roll a 20 on the attack roll and then gives you 15 temporary hit points. It doesn\'t work against Constructs or Undead.'
		]
	}
};
//moved max weapon dice to front of description and capitilized E in Exhaustion. Added '+1 Exhaustion' in calcChanges
MagicItemsList["sword of sharpness"] = {
	name: "Sword of Sharpness",
	nameTest: "of Sharpness",
	source: [["DMG2024", 314]],
	type: "weapon (glaive, greatsword, longsword, or scimitar)",
	rarity: "very rare",
	magicItemTable: "?",
	attunement: true,
	description: "When you attack an object, maximize your weapon dice against the target object. When you roll a 20 to hit with this magic weapon vs. a creature, it takes +14 Slashing damage and gaines 1 Exhaustion level. It does maximum damage vs. objects.",
	descriptionFull: "When you attack an object with this magic weapon and hit, maximize your weapon damage dice against the target.\n   When you attack a creature with this weapon and roll a 20 on the d20 for the attack roll, that target takes an extra 14 Slashing damage and gains 1 Exhaustion level.",
	chooseGear: {
		type: "weapon",
		prefixOrSuffix: "prefix",
		descriptionChange: ["replace", "weapon"],
		excludeCheck: function (inObjKey, inObj) {
			var testRegex = /glaive|greatsword|longsword|scimitar/i;
			return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
		}
	},
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/glaive|greatsword|longsword|scimitar/i).test(v.baseWeaponName) && (/of sharpness/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'On 20 to hit: +14 dmg + 1 Exhaustion; Max dmg vs. objects';
				}
			},
			'If you include the words "of Sharpness" in the name of a weapon, it will be treated as the magic weapon Sword of Sharpness. It deals maximum damage against objects. On a roll of 20 to hit against creatures it deals +14 slashing damage.'
		]
	}
};

//adjusted calcChange 'no regain HP 1 hr'. fixed typo in description.
MagicItemsList["sword of wounding"] = {
	name: "Sword of Wounding",
	nameTest: "of Wounding",
	source: [["DMG2024", 314]],
	type: "weapon (glaive, greatsword, longsword, rapier, scimitar, or shortsword)",
	rarity: "rare",
	magicItemTable: "?",
	attunement: true,
	description: "When you hit a creature with an attack using this magic weapon, the target takes an extra 2d6 Necrotic damage and must succeed on a DC 15 Constitution saving throw or be unable to regain Hit Points for 1 hour. The target repeats the save at the end of each of its turns, ending the effect on itself on a success.",
	descriptionFull: "When you hit a creature with an attack using this magic weapon, the target takes an extra 2d6 Necrotic damage and must succeed on a DC 15 Constitution saving throw or be unable to regain Hit Points for 1 hour. The target repeats the save at the end of each of its turns, ending the effect on itself on a success.",
	chooseGear: {
		type: "weapon",
		prefixOrSuffix: "prefix",
		descriptionChange: ["replace", "weapon"],
		excludeCheck: function (inObjKey, inObj) {
			var testRegex = /Glaive|Greatsword|Longsword|Rapier|Scimitar|Shortsword/i;
			return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
		}
	},
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/Glaive|Greatsword|Longsword|Rapier|Scimitar|Shortsword/i).test(v.baseWeaponName) && (/of wounding/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'target: +2d6 Necrotic dmg; DC 15 CON Save or no regain HP 1 hour';
				}
			},
			'If you include the words "of Wounding" in a the name of a weapon, it will be treated as the magic weapon Sword of Wounding.'
		]
	}
};
//removed spellcasting bonus
MagicItemsList["sylvan talon"] = {
	name: "Sylvan Talon",
	source: [["DMG2024", 314]],
	type: "weapon (dagger, rapier, scimitar, shortsword, sickle, or spear)",
	rarity: "common",
	magicItemTable: "?",
	attunement: true,
	description: "You understand nonwritten communication of all Fey, and they understand yours. You can use this weapon to cast Message as a Magic action once per day.",
	descriptionFull: "While this weapon is on your person, you understand the nonwritten communication of all Fey, and they understand yours.\n\n" +
		toUni("Secret Message") + "\n\n  As a Magic action, you can use the weapon to cast Message. Once this property is used, it can't be used again until the next dawn.",
	usages: 1,
	recovery: "dawn",
	action: [["action", "Talon (Secret Msg)"]],
	languageProfs: ["Fey - nonwritten"],
		chooseGear: {
		type: "weapon",
		prefixOrSuffix: "brackets",
		descriptionChange: ["replace", "weapon"],
		excludeCheck: function (inObjKey, inObj) {
			var testRegex = /Dagger|Rapier|Scimitar|Shortsword|Sickle|Spear/i;
			return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon)) && ((/^(?=.*sylvan)(?=.*talon).*$/i)).test(v.WeaponTextName)
		}
	},
};
