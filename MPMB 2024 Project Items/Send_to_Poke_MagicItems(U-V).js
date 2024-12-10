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
// Coded By: ThePokésimmer with contributions from Reading Toskr and TrackAtNite
//Functions
MagicItemsList["universal solvent"] = {
	name: "Universal Solvent",
	source: [["DMG2024", 318]],
	type: "wondrous item",
	rarity: "legendary",
	magicItemTable: "?",
	description: "This tube holds milky liquid with a strong alcohol smell, when found it contains 1d6+1 ounces. You can take a Utilize action, to pour 1 or more ounces from the tube onto a surface within reach. The liquid instantly dissolves up to 1 square foot of adhesive it touches, including Sovereign Glue.",
	descriptionFull: "This tube holds milky liquid with a strong alcohol smell. When found, a tube contains 1d6 + 1 ounces. You can take a Utilize action to pour 1 or more ounces of solvent from the tube onto a surface within reach. Each ounce instantly dissolves up to 1 square foot of adhesive it touches, including Sovereign Glue.",
	action: [["action", ""]],
};
MagicItemsList["veterans cane"] = {
	name: "Veteran's Cane",
	source: [["DMG2024", 318]],
	magicItemTable: "?",
	type: "wondrous item",
	rarity: "common",
	description: "While holding this item, you can take a Bonus Action, you can transform this walking cane into an ordinary Longsword or change the Longsword back into a walking cane.",
	descriptionFull: "As a Bonus Action, you can transform this walking cane into an ordinary Longsword or change the Longsword back into a walking cane. In either case, you must be holding the item.",
	weight: 4,
	action: [["bonus action", "(transform)"]],
	weaponOptions: [{
		baseWeapon: "longsword",
		regExpSearch: /^(?=.*veteran)(?=.*cane)(?=.*long)(?=.*sword).*$/i,
		name: "Veterans Cane (Longsword)",
		source: ["DMG2024", "-"],
		selectNow: true,
	}],
};
MagicItemsList["vicious weapon"] = {
	name: "Vicious Weapon",
	nameTest: "Vicious",
	source: [["DMG2024", 318]],
	type: "weapon (simple or martial)",
	rarity: "rare",
	magicItemTable: "?",
	description: "When you hit a creature, the target takes an extra 2d6 damage of the weapon's damage type.",
	descriptionFull: "This magic weapon deals an extra 2d6 damage to any creature it hits. This extra damage is of the same type as the weapon’s normal damage.",
	chooseGear: {
		type: "weapon",
		prefixOrSuffix: "suffix",
		descriptionChange: ["replace", "weapon"]
	},
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (!v.isSpell && !v.theWea.isMagicWeapon && (/vicious/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'target takes +2d6 ' + (fields.Damage_Type);
				}
			},
			'If you include the word "Vicious" in a the name of a weapon, it will be treated as the magic weapon Vicious Weapon. On a successful hit, target takes an extra 2d6 of the same damage type.'
		]
	}
};
MagicItemsList["vorpal sword"] = {
	name: "Vorpal Sword",
	nameTest: "Vorpal",
	source: [["DMG2024", 318]],
	type: "weapon (Glaive, Greatsword, Longsword, Scimitar)",
	rarity: "legendary",
	magicItemTable: "?",
	attunement: true,
	description: "You have a +3 bonus to attack and damage rolls with this magic weapon. It ignores slashing damage resistance. On a roll of 20 to hit, it cuts off one head" + (typePF ? "" : ", possibly killing it instantly") + ". If the target has no head, is immune to slashing damage, or its neck is too wide, it takes +30 slashing damage instead. If the target has Legendary Resistance, it can expend one daily use to take +30 Slashing damage instead.",
	descriptionFull: "You gain a +3 bonus to attack and damage rolls made with this magic weapon. In addition, the weapon ignores Resistance to Slashing damage.\n   When you use this weapon to attack a creature that has at least one head and roll a 20 on the d20 for the attack roll, you cut off one of the creature’s heads. The creature dies if it can’t survive without the lost head. A creature is immune to this effect if it has Immunity to Slashing damage, if it doesn’t have or need a head, or if the DM decides that the creature is too big for its head to be cut off with this weapon. Such a creature instead takes an extra 30 Slashing damage from the hit. If the creature has Legendary Resistance, it can expend one daily use of that trait to avoid losing its head, taking the extra damage instead.",
	chooseGear: {
		type: "weapon",
		prefixOrSuffix: "suffix",
		descriptionChange: ["replace", "weapon"],
		excludeCheck: function (inObjKey, inObj) {
			var testRegex = /glaive|greatsword|longsword|scimitar/i;
			return (!(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon))) || (inObj.baseWeapon && !inObj.damage ? WeaponsList[inObj.baseWeapon].damage : inObj.damage)[2] !== "slashing";
		}
	},
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/glaive|greatsword|longsword|scimitar/i).test(v.baseWeaponName) && (/vorpal/i).test(v.WeaponTextName) && v.theWea.damage[2] == "slashing") {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'Ignores slashing resistance; On 20 to hit: cut off head';
				}
			},
			'If I include the word "Vorpal" in a the name of a weapon that deals slashing damage, it will be treated as the magic weapon Vorpal Sword. It has +3 to hit and damage and on a roll of 20 on the attack roll, it cuts off a head of the target.'
		],
		atkCalc: [
			function (fields, v, output) {
				if (v.isMeleeWeapon && (/glaive|greatsword|longsword|scimitar/i).test(v.baseWeaponName) && (/vorpal/i).test(v.WeaponTextName) && v.theWea.damage[2] == "slashing") {
					output.magic = v.thisWeapon[1] + 3;
				}
			}, ''
		]
	}
};

