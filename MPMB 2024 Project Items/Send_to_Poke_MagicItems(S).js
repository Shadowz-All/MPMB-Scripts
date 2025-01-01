// Magic Items 'S'
MagicItemsList["saddle of the cavalier"] = {
	name: "Saddle of the Cavalier",
	source: [["DMG2024", 302]],
	type: "wondrous item",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "While you are seated in it and astride a mount, Attack rolls against the mount have Disadvantage and you can't be dismounted against your will, unless you are Incapacitated.",
	descriptionFull: "This saddle confers the following benefits while you are seated in it and astride a mount.\n" + toUni("Protected Mount") + ". Attack rolls against the mount have Disadvantage.\n" + toUni("Secure Rider") + ". You can't be dismounted against your will. This property is suppressed whil you have the Incapacitated condition.",
	weight: 25
};
MagicItemsList["scarab of protection"] = {
	name: "Scarab of Protection",
	source: [["DMG2024", 302]],
	type: "wondrous item",
	rarity: "legendary",
	magicItemTable: "?",
	description: "This beetle-shaped medallion gives you a +1 bonus to AC, Advantage on saving throws against spells. Additionally, if you fail a save against a Necromancy spell or an effect from an Undead, you can take a Reaction to expend 1 charge and succeed on the save instead. The scarab has 12 charges and crumbles into powder when the last is used.",
	descriptionFull: "This beetle-shaped medallion provides three benefits while it is on your person:\n \u2022 Defense: You gain +1 AC.\n \u2022 Spell Resistance: You have advantage on saving throws against spells.\n \u2022 Preservation: The scarab has 12 charges. If you fail a saving throw against a Necromancy spell or a harmful effect originating from an Undead, you can take a reaction to expend 1 charge and turn the failed save into a successful one. The scarab crumbles into powder and is destroyed when its last charge is expended.",
	attunement: true,
	savetxt: { adv_vs: ["spells"] },
	extraAC: [{ mod: 1, magic: true }],
	usages: 12,
	recovery: "Never",
	action: [["reaction", ""]]
};
MagicItemsList["scimitar of speed"] = {
	name: "Scimitar of Speed",
	source: [["DMG2024", 302]],
	type: "weapon (scimitar)",
	rarity: "very rare",
	magicItemTable: "?",
	description: "You gain a +2 bonus to attack and damage rolls made with this magic weapon. In addition, you can make one attack with it as a Bonus Action on each of your turns.",
	descriptionFull: "You gain a +2 bonus to attack and damage rolls made with this magic weapon. In addition, you can make one attack with it as a Bonus Action on each of your turns.",
	attunement: true,
	weight: 3,
	action: [["bonus action", "extra attack"]],
	weaponsAdd: ["Scimitar of Speed"],
	weaponOptions: {
		baseWeapon: "scimitar",
		regExpSearch: /^(?=.*scimitar)(?=.*speed).*$/i,
		name: "Scimitar of Speed",
		source: [["DMG2024", "-"]],
		description: "Finesse, Light, Nick; Extra attack as Bonus Action",
		modifiers: [2, 2]
	}
};
MagicItemsList["scroll of protection"] = {
	name: "Scroll of Protection",
	source: [["DMG2024", 302]],
	type: "scroll",
	rarity: "rare",
	magicItemTable: "?",
	actions: [["action", ""]],
	description: "Using a Magic action to read the scroll creates a 5-ft Emanation originating from you. For 5 min, creatures of the specified type can't enter or affecting anything within. As a Magic action, a creature within 5 ft of the Emanation can make a DC 15 Cha save to stop being affected.",
	descriptionFull: "Each scroll of protection works against a specific type of creature chosen by the DM or determined randomly by rolling on the following table.\n\n" + [
		toUni("d100\tCreature Type\td100\tCreature Type"),
		"01-10\tAberrations\t51-60\tFey",
		"11-15\tBeasts\t\t61-70\tFiends",
		"16-20\tCelestials   \t71-75\tGiants",
		"21-25\tConstructs   \t76-80\tMonstrosities",
		"26-35\tDragons\t81-85\tOozes",
		"36-45\tElementals\t86-90\tPlants",
		"46-50\tHumonoids\t91-00\tUndead",
	].join("\n") + "\n Using a Magic action to read the scroll creates a 5-foot Emanation originating from you. For 5 minutes, creatures of the specified type can’t enter or affect anything in the area. However, if you move in such a way that a creature of the specified type would be inside the area, the effect ends.\n As a Magic action, a creature within 5 feet of the Emanation can attempt to overcome it, which forces the creature to make a DC 15 Charisma saving throw. On a successful save, the creature ceases to be affected by the Emanation.\n",
	choices: ["Aberrations", "Beasts", "Celestials", "Constructs", "Dragons", "Elementals", "Humanoids", "Fey", "Fiends", "Giants", "Monstrosities", "Oozes", "Plants", "Undead"],
	"aberrations": {
		name: "Scroll of Protection from Aberrations",
		description: "Using a Magic action to read the scroll creates a 5-foot Emanation originating from you. For 5 minutes, Aberrations can’t enter or affect anything in the area. However, if you move in such a way that a creature of the specified type would be inside the area, the effect ends."
	},
	"beasts": {
		name: "Scroll of Protection from Beasts",
		description: "Using a Magic action to read the scroll creates a 5-foot Emanation originating from you. For 5 minutes, Beasts can’t enter or affect anything in the area. However, if you move in such a way that a creature of the specified type would be inside the area, the effect ends."
	},
	"celestials": {
		name: "Scroll of Protection from Celestials",
		description: "Using a Magic action to read the scroll creates a 5-foot Emanation originating from you. For 5 minutes, Celestials can’t enter or affect anything in the area. However, if you move in such a way that a creature of the specified type would be inside the area, the effect ends."
	},
	"constructs": {
		name: "Scroll of Protection from Constructs",
		description: "Using a Magic action to read the scroll creates a 5-foot Emanation originating from you. For 5 minutes, Constructs can’t enter or affect anything in the area. However, if you move in such a way that a creature of the specified type would be inside the area, the effect ends."
	},
	"dragons": {
		name: "Scroll of Protection from Dragons",
		description: "Using a Magic action to read the scroll creates a 5-foot Emanation originating from you. For 5 minutes, Dragons can’t enter or affect anything in the area. However, if you move in such a way that a creature of the specified type would be inside the area, the effect ends."
	},
	"elementals": {
		name: "Scroll of Protection from Elementals",
		description: "Using a Magic action to read the scroll creates a 5-foot Emanation originating from you. For 5 minutes, Elementals can’t enter or affect anything in the area. However, if you move in such a way that a creature of the specified type would be inside the area, the effect ends."
	},
	"humanoids": {
		name: "Scroll of Protection from Humanoids",
		description: "Using a Magic action to read the scroll creates a 5-foot Emanation originating from you. For 5 minutes, Humanoids can’t enter or affect anything in the area. However, if you move in such a way that a creature of the specified type would be inside the area, the effect ends."
	},
	"fey": {
		name: "Scroll of Protection from Fey",
		description: "Using a Magic action to read the scroll creates a 5-foot Emanation originating from you. For 5 minutes, Fey can’t enter or affect anything in the area. However, if you move in such a way that a creature of the specified type would be inside the area, the effect ends."
	},
	"fiends": {
		name: "Scroll of Protection from Fiends",
		description: "Using a Magic action to read the scroll creates a 5-foot Emanation originating from you. For 5 minutes, Fiends can’t enter or affect anything in the area. However, if you move in such a way that a creature of the specified type would be inside the area, the effect ends."
	},
	"giants": {
		name: "Scroll of Protection from Giants",
		description: "Using a Magic action to read the scroll creates a 5-foot Emanation originating from you. For 5 minutes, Giants can’t enter or affect anything in the area. However, if you move in such a way that a creature of the specified type would be inside the area, the effect ends."
	},
	"monstrosities": {
		name: "Scroll of Protection from Monstrosities",
		description: "Using a Magic action to read the scroll creates a 5-foot Emanation originating from you. For 5 minutes, Monstrosities can’t enter or affect anything in the area. However, if you move in such a way that a creature of the specified type would be inside the area, the effect ends."
	},
	"oozes": {
		name: "Scroll of Protection from Oozes",
		description: "Using a Magic action to read the scroll creates a 5-foot Emanation originating from you. For 5 minutes, Oozes can’t enter or affect anything in the area. However, if you move in such a way that a creature of the specified type would be inside the area, the effect ends."
	},
	"plants": {
		name: "Scroll of Protection from Plants",
		description: "Using a Magic action to read the scroll creates a 5-foot Emanation originating from you. For 5 minutes, Plants can’t enter or affect anything in the area. However, if you move in such a way that a creature of the specified type would be inside the area, the effect ends."
	},
	"undead": {
		name: "Scroll of Protection from Undead",
		description: "Using a Magic action to read the scroll creates a 5-foot Emanation originating from you. For 5 minutes, Undead can’t enter or affect anything in the area. However, if you move in such a way that a creature of the specified type would be inside the area, the effect ends."
	}
};
MagicItemsList["scroll of titan summoning"] = {
	name: "Scroll of Titan Summoning",
	source: [["DMG2024", 303]],
	type: "scroll",
	rarity: "legendary",
	magicItemTable: "?",
	description: "When you take a Magic action to read this scroll, a particular titan named in the scroll appears in an unoccupied space on the ground or in water that you can see within 1 mile of yourself. The titan is hostile towards all others and disappears when it drops to 0 HP. The space summoned must be large enough to contain it, or it fails.",
	descriptionFull: "When you take a Magic action to read this scroll, a particular titan named in the scroll appears in an unoccupied space on the ground or in water that you can see within 1 mile of yourself. The DM picks a suitable titan or determines it randomly by rolling on the table below (see the Monster Manual for the creature’s stat block).\n\n" + [
		toUni("d100\tTitan Type\td100\tTitan Type"),
		"01-15\tAnimal Lord\t61-75\tEmpyrean",
		"16-30\tBlob of Annihilation\t76-90\tKraken",
		"31-45\tColossus\t\t91-00\tTarrasque",
		"46-60\tElemental Cataclysm\t",
	].join("\n") + "\nUsing an Magic action to read the scroll a particular titan named on the scroll appears in an unoccupied space on the ground or in water that you can see within 1 mile of yourself.\n   The titan is hostile toward all other creatures and disappears when it drops to 0 HP.\n   If the titan is summoned into a space that isn't large enough to contain it, the summoning fails, and the scroll is wasted.",
	choices: ["Animal Lord", "Blob of Annihilation", "Colossus", "Elemental Cataclysm", "Empyrean", "Kraken", "Tarrasque"],
	"animal lord": {
		name: "Scroll of Animal Lord Summoning",
		description: "Once, as a Magic action, I can use this to summon an Animal Lord in an unoccupied space on the ground or in water that I can see within 1 mile of myself. The titan is hostile towards all other creatures and disappears when it drops to 0 HP. If summoned into a space that isn't large enough to contain it, it fails and is wasted."
	},
	"blob of annihilation": {
		name: "Scroll of Blob of Annihilation Summoning",
		description: "Once, as a Magic action, I can use this to summon a Blob of Annihilation in an unoccupied space on the ground or in water that I can see within 1 mile of myself. The titan is hostile towards all other creatures and disappears when it drops to 0 HP. If summoned into a space that isn't large enough to contain it, it fails and is wasted."
	},
	"colossus": {
		name: "Scroll of Colossus Summoning",
		description: "Once, as a Magic action, I can use this to summon a Colossus in an unoccupied space on the ground or in water that I can see within 1 mile of myself. The titan is hostile towards all other creatures and disappears when it drops to 0 HP. If summoned into a space that isn't large enough to contain it, it fails and is wasted."
	},
	"empyrean": {
		name: "Scroll of Empyrean Summoning",
		description: "Once, as a Magic action, I can use this to summon an Empyrean in an unoccupied space on the ground or in water that I can see within 1 mile of myself. The titan is hostile towards all other creatures and disappears when it drops to 0 HP. If summoned into a space that isn't large enough to contain it, it fails and is wasted."
	},
	"Kraken": {
		name: "Scroll of Kraken Summoning",
		description: "Once, as a Magic action, I can use this to summon a Kraken in an unoccupied space on the ground or in water that I can see within 1 mile of myself. The titan is hostile towards all other creatures and disappears when it drops to 0 HP. If summoned into a space that isn't large enough to contain it, it fails and is wasted."
	},
	"tarrasque": {
		name: "Scroll of Tarrasque Summoning",
		description: "Once, as a Magic action, I can use this to summon a Tarrasque in an unoccupied space on the ground or in water that I can see within 1 mile of myself. The titan is hostile towards all other creatures and disappears when it drops to 0 HP. If summoned into a space that isn't large enough to contain it, it fails and is wasted."
	},
};
MagicItemsList["sending stones"] = {
	name: "Sending Stones",
	source: [["DMG2024", 303]],
	type: "wondrous item",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "While you touch one of this pair of stones, you can cast Sending from it, targeting the bearer of the other stone. If no creature has the other stone, the spell won't cast. Once it is cast, neither stone can be used again until the next dawn. Sending allows each bearer to communicate up to 25 words to a creature you have met or described to you by someone who has met it.",
	descriptionFull: "Sending Stones come in pairs, with each stone carved to match the other so the pairing is easily recognized. While you touch one stone, you can cast Sending from it. The target is the bearer of the other stone. If no creature bears the other stone, you know that fact as soon as you use the stone, and you don’t cast the spell.\n   Once Sending is cast using either stone, the stones can’t be used again until the next dawn. If one of the stones in a pair is destroyed, the other one becomes nonmagical.",
	spellcastingBonus: [{
		name: "To other stone bearer only",
		spells: ["sending"],
		selection: ["sending"],
		firstCol: "-"
	}],
	usages: 1,
	recovery: "dawn",
	spellChanges: {
		"sending": {
			description: "Send a 25 word message to the bearer of the other Sending Stone, who can respond with 25 words",
			changes: "Using one stone of a pair of Sending Stones, the spell can only target the bearer of the other stone of the pair."
		}
	}
};
MagicItemsList["sentinel shield"] = {
	name: "Sentinel Shield",
	source: [["DMG2024", 303]],
	type: "shield",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "While holding this shield, you have Advantage on Initiative rolls and Wisdom (Perception) checks.",
	descriptionFull: "While holding this shield, you have Advantage on Initiative rolls and Wisdom (Perception) checks. The Shield is emblazoned with a symbol of an eye.",
	weight: 6,
	shieldAdd: "Sentinel Shield",
	advantages: [["Initiative", true], ["Perception", true]],
	vision: [["Adv. on Perception checks", 0]]
};
MagicItemsList["shield, +1, +2, or +3"] = {
	name: "Shield, +1, +2, or +3",
	source: [["DMG2024", 303]],
	type: "shield",
	description: "While holding this Shield, you have a bonus to AC determined by the Shield's rarity, in addition to the Shield's normal bonus to AC.",
	descriptionFull: "While holding this Shield, you have a bonus to Armor Class determined by the Shield’s rarity, in addition to the Shield’s normal bonus to AC.",
	allowDuplicates: true,
	choices: ["+1 Shield (Uncommon)", "+2 Shield (Rare)", "+3 Shield (Very Rare)"],
	"+1 shield (uncommon)": {
		name: "Shield +1",
		nameTest: "+1 Shield",
		rarity: "uncommon",
		magicItemTable: "?",
		description: "While holding this Shield, you have a +1 bonus to AC. This bonus is in addition to the Shield's normal bonus to AC.",
		allowDuplicates: true,
		shieldAdd: "+1 Shield"
	},
	"+2 shield (rare)": {
		name: "Shield +2",
		nameTest: "+2 Shield",
		rarity: "rare",
		magicItemTable: "?",
		description: "While holding this Shield, I have a +2 bonus to AC. This bonus is in addition to the Shield's normal bonus to AC.",
		allowDuplicates: true,
		shieldAdd: "+2 Shield"
	},
	"+3 shield (very rare)": {
		name: "Shield +3",
		nameTest: "+3 Shield",
		rarity: "very rare",
		magicItemTable: "?",
		description: "While holding this Shield, I have a +3 bonus to AC. This bonus is in addition to the Shield's normal bonus to AC.",
		allowDuplicates: true,
		shieldAdd: "+3 Shield"
	}
};
MagicItemsList["shield of expression"] = {
	name: "Shield of Expression",
	source: [["DMG2024", 303]],
	magicItemTable: "?",
	type: "shield",
	rarity: "common",
	description: "The front of this Shield is shaped in the likeness of a face. While bearing the Shield, you can take a Bonus Action to alter the face’s expression.",
	descriptionFull: "The front of this Shield is shaped in the likeness of a face. While bearing the Shield, you can take a Bonus Action to alter the face’s expression.",
	weight: 6,
	shieldAdd: "Shield of Expression",
	action: [["bonus action", ""]]
};
MagicItemsList["shield of missile attraction"] = {
	name: "Shield of Missile Attraction",
	source: [["DMG2024", 304]],
	type: "shield",
	rarity: "rare",
	magicItemTable: "?",
	description: "While holding this shield, you have Resistance to damage from Ranged weapon. Once attuned, you am cursed until you are targeted by a Remove Curse spell or similar magic. Whenever a Ranged weapon attack is made against a target within 10 ft of me, the curse causes me to become the target instead.",
	descriptionFull: "While holding this Shield, you have Resistance to damage from Ranged weapons.\n   " + toUni("Curse") + ". This Shield is cursed. Attuning to it curses you until you are targeted by the Remove Curse spell or similar magic. Removing the Shield fails to end the curse on you. Whenever an attack with a Ranged weapon targets a creature within 10 feet of you, the curse causes you to become the target instead.",
	attunement: true,
	weight: 6,
	shieldAdd: "Shield of Missile Attraction",
	cursed: true,
	dmgres: ["Ranged weapons"]
};
MagicItemsList["shield of the cavalier"] = {
	name: "Shield of the Cavalier",
	source: [["DMG2024", 304]],
	type: "shield",
	rarity: "very rare",
	magicItemTable: "?",
	description: "While holding this Shield, you have a +2 bonus to AC. This bonus is in addition to the Shield's normal bonus to AC.",
	descriptionFull: "While holding this Shield, you have a +2 bonus to AC. This bonus is in addition to the Shields normal bonus to AC. The Shield has additional properties that you can use while holding it." +
		"\n   " + toUni("Forceful Bash") + ". When you take the Attack action, you can make one of the attack rolls using the Shield against a target within 5 feet of yourself. Apply your Proficiency Bonus and Strength modifier to the attack roll. On a hit, the Shield deals Force damage to the target equal to 2d6 + 2 + your Strength modifier, and if the target is a creature, you can push it up to 10 feet directly away from yourself. If the creature is your size or smaller, you can also knock it down, giving it the Prone condition.'" +
		"\n   " + toUni("Protective Field") + ". As a Reaction, when you or an ally you can see within 5 feet of you is targeted by an attack or makes a saving throw against an area of effect, you can use the Shield to create an immobile 5-foot Emanation originating from you. When the Emanation appears, any creatures or objects not fully contained within it are pushed into the nearest unoccupied spaces outside it. The attack or area of effect that triggered the Reaction has no effect on creatures and objects inside the Emanation, which lasts as long as you maintain Concentration, up to 1 minute. Nothing can pass into or out of the Emanation. A creature or object inside the Emanation can’t be damaged by attacks or effects originating from outside, nor can a creature inside the Emanation damage anything outside it. Once this property is used, it can’t be used again until the next dawn.",
	attunement: true,
	weight: 6,
	shieldAdd: "Shield of the Cavalier",
	action: ["reaction", " Protective Field"],
	usages: 1,
	recovery: "dawn",
	additional: "Protective Field",
	weaponOptions: [{
		regExpSearch: /^(?=.*cavalier)(?=.*shield).*$/i,
		name: "Shield of the Cavalier Bash",
		source: [["DMG2024", 304]],
		ability: 1,
		type: 'AlwaysProf',
		damage: ['2d6 + 2' + What('Str Mod'), '', 'force'],
		range: "Melee",
		description: "if target = crea push 10ft; if crea => your size, knock prone; substitute one attack roll on attack action.",
		isNotWeapon: true,
		modifiers: [What('Str Mod') + Number(How('Proficiency Bonus')),],
		selectNow: true
	}],
	toNotesPage: [{
		name: "Shield of the Cavalier",
		note: [
			"While holding this Shield, you have a +2 bonus to AC. This bonus is in addition to the Shield's normal bonus to AC. The Shield has additional properties that you can use while holding it.\n" +
			"\n \u2022 Forceful Bash: When you take the Attack action on your turn, you can replace one of your attacks using the Shield, targeting one creature you can see within 5 feet of yourself. On a hit, the Shield deals 2d6 + 2 + Strength Modifier Force damage, and if the target is a creature, you push it up to 10-ft directly away from yourself. If the creature is your size or smaller, you can knock it Prone.\n" +
			"\n \u2022 Protective Field: As a Reaction, when you or an ally you can see within 5-ft of you is targeted by an attack or makes a saving throw against an area of effect, you can use the Shield to create an immobile 5-ft Emanation originating from you. Any creatures or objects not fully contained are pushed into the nearest unoccupied space outside it. The triggering attack or effect has no effect on creatures and objects inside the Emanation, which lasts as long as you maintain Concentration - up to 1 minute. Nothing can pass in or out of the Emanation. A creature or object inside the Emanation can't be damaged by attacks or effects originating from outside, nor can a creature inside the Emanation damage anthing outside of it. Once this property is used, it can't be used again until the next dawn.",
		]
	}],
};
MagicItemsList["silvered weapon"] = {
	name: "Silvered Weapon",
	source: [["DMG2024", 304]],
	type: "Weapon (simple or martial weapon)",
	rarity: "common",
	magicItemTable: "?",
	description: "When you score a Critical Hit against a creature that is shape-shifted, you deal one additional die of damage.",
	descriptionFull: "An alchemical process has bonded silver to this magic weapon. When you score a Critical Hit with it against a creature that is shape-shifted, the weapon deals one additional die of damage.",
	chooseGear: {
		type: "weapon",
		prefixOrSuffix: "brackets",
		descriptionChange: ["replace", "weapon"],
	},
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && !v.isSpell && (/silvered/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + '+1 dmg die vs. shape-shifted';
				}
			},
			'If I include the words "Silvered" in the name of a weapon, damage rolls with that weapon add 1 extra damage die to creatures that are shape-shifted.'
		]
	}
};
MagicItemsList["slippers of spider climbing"] = {
	name: "Slippers of Spider Climbing",
	source: [["DMG2024", 304]],
	type: "wondrous item",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "While you wear these light shoes, you can move up, down, and across vertical surfaces and upside down along ceilings, while leaving my hands free. You have a climbing speed equal to my walking speed. However, the slippers don't allow me to move this way on a slippery surface, such as one covered by ice or oil.",
	descriptionFull: "While you wear these light shoes, you can move up, down, and across vertical surfaces and upside down along ceilings, while leaving your hands free. You have a climbing speed equal to your walking speed. However, the slippers don't allow you to move this way on a slippery surface, such as one covered by ice or oil.",
	attunement: true,
	speed: { climb: { spd: "walk", enc: "walk" } }
};
MagicItemsList["smoldering armor"] = {
	name: "Smoldering Armor",
	nameTest: "Smoldering",
	source: [["DMG2024", 305]],
	magicItemTable: "?",
	type: "armor (light, medium, or heavy)",
	rarity: "common",
	description: "Wisps of harmless, odorless smoke rise from this armor while it is worn.",
	descriptionFull: "Wisps of harmless, odorless smoke rise from this armor while it is worn.",
	chooseGear: {
		type: "armor",
		prefixOrSuffix: "suffix",
		descriptionChange: ["prefix", "armor"]
	}
};
MagicItemsList["sovereign glue"] = {
	name: "Sovereign Glue",
	source: [["DMG2024", 305]],
	type: "wondrous item",
	rarity: "legendary",
	magicItemTable: "?",
	action: [["action", " "]],
	description: "This viscous, milky-white substance is stored in a jar or flask, coated on the inside with Oil of Slipperiness. One ounce of the glue can cover a 1-ft square surface, taking 1 minute to set, and requires a Utilize action to use. Once it sets, the bond it creates can be broken only by Universal Solvent, Oil of Etherealness, or with a Wish spell.",
	descriptionFull: "This viscous, milky-white substance can form a permanent adhesive bond between any two objects. It must be stored in a jar or flask that has been coated inside with Oil of Slipperiness. When found, a container contains 1d6 + 1 ounces.\n   One ounce of the glue can cover a 1-foot square surface. The glue takes 1 minute to set. Once it has done so, the bond it creates can be broken only by the application of universal solvent or oil of etherealness, or with a Wish spell.",
	usages: "1d6+1",
	recovery: "Never"
};
MagicItemsList["spellguard shield"] = {
	name: "Spellguard Shield",
	source: [["DMG2024", 305]],
	type: "shield",
	rarity: "very rare",
	magicItemTable: "?",
	description: "While holding this Shield, you have Advantage on saving throws against spells and other magical effects, and spell attacks have Disadvantage against you.",
	descriptionFull: "While holding this Shield, you have Advantage on saving throws against spells and other magical effects, and spell attacks have Disadvantage against you.",
	attunement: true,
	weight: 6,
	shieldAdd: "Spellguard Shield",
	savetxt: { adv_vs: ["spells", "magical effects"] },
	vision: ["spell attack rolls Disadvantage against me"]
};
MagicItemsList["spell scroll"] = {
	name: "Spell Scroll",
	source: [["DMG2024", 305]],
	type: "scroll",
	description: "If the spell on this scroll is on your spell list, you can cast it without its Material components using its normal casting time. If the spell is of a higher level than you can cast, you can make an ability check using my spellcasting ability (DC = 10 + spell level). The spell level on the scroll determins saving throw DC, attack bonus, and rarity.",
	descriptionFull: "A Spell Scroll bears the words of a single spell, written in a mystical cipher. If the spell is on your spell list, you can read the scroll and cast its spell without Material components. Otherwise, the scroll is unintelligible. Casting the spell by reading the scroll requires the spell’s normal casting time. Once the spell is cast, the scroll crumbles to dust. If the casting is interrupted, the scroll isn’t lost.\n   If the spell is on your spell list but of a higher level than you can normally cast, you make an ability check using your spellcasting ability to determine whether you cast the spell. The DC equals 10 plus the spell’s level. On a failed check, the spell disappears from the scroll with no other effect.\n   The level of the spell on the scroll determines the spell’s saving throw DC and attack bonus, as well as the scroll’s rarity, as shown in the following table.\n\n" + toUni("Spell Level\tRarity\t\tSave DC\tAttack Bonus") + [
		"\nCantrip\tCommon  \t13\t+5",
		"1  \tCommon  \t13\t+5",
		"2  \tUncommon\t13\t+5",
		"3  \tUncommon\t15\t+7",
		"4  \tRare\t\t15\t+7",
		"5  \tRare\t\t17\t+9",
		"6  \tVery rare    \t17\t+9",
		"7  \tVery rare    \t18\t+10",
		"8  \tVery rare    \t18\t+10",
		"9  \tLegendary  \t19\t+11"
	].join("\n") + "\n\nA Wizard spell on a Spell Scroll can be copied just as spells in spellbooks can be copied. When a spell is copied from a spell scroll, the copier must succeed on an Intelligence (Arcana) check with a DC equal to 10 + the spell's level. If the check succeeds, the spell is successfully copied. Whether the check succeeds or fails, the Spell Scroll is destroyed.",
	allowDuplicates: true,
	calcChanges: {
		spellAdd: [
			function (spellKey, spellObj, spName) {
				if ((/^spell scroll/i).test(spName)) {
					if (!spellObj.components) spellObj.components = "";
					spellObj.components = (spellObj.components.replace(/,?[RM][\u0192\u2020]?/ig, '') + ",M\u0192").replace(/^,+/, '');
					spellObj.compMaterial = "Spells cast from a spell scroll don't require any Material components.";
					spellObj.ritual = false;
					["description", "descriptionMetric", "descriptionShorter", "descriptionShorterMetric"].forEach(function (attr) {
						if (!spellObj[attr]) return;
						spellObj[attr] = spellObj[attr].replace(/ \(\d+k? ?gp( cons\.?)?\)/i, '');
					});
					return true;
				}
			},
			"When casting a spell using a Spell Scroll, no Material components are needed other than the Spell Scroll itself."
		]
	},
	choices: ["Cantrip", "1st-level", "2nd-level", "3rd-level", "4th-level", "5th-level", "6th-level", "7th-level", "8th-level", "9th-level", "mixed levels"],
	"cantrip": {
		name: "Spell Scroll (cantrip)",
		sortname: "Spell Scroll  (cantrip)",
		rarity: "common",
		magicItemTable: "?",
		description: "If the cantrip on this scroll is on your spell list, you can cast it, having the scroll crumble to dust afterwards. If you can't cast any cantrips, you need to make a DC 10 check with my spellcasting ability to use this scroll or it is destroyed if you fail. The cantrip is cast with DC 13 and a +5 attack modifier.",
		descriptionFull: "A Spell Scroll bears the words of a single spell, written as a mystical cipher. If the spell is on your spell list, you can read the scroll and cast its spell without providing any Material components. Otherwise, the scroll is unintelligible. Casting the spell by reading the scroll requires the spell's normal casting time. Once the spell is cast, the words on the scroll fade, and it crumbles to dust. If the casting is interrupted, the scroll is not lost.\n   If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC equals 10. On a failed check, the spell disappears from the scroll with no other effect.\n   Once the spell is cast, the words on the scroll fade, and the scroll itself crumbles to dust.\n   A spell cast from this scroll has a save DC of 13 and an attack bonus of +5.",
		fixedDC: 13,
		spellFirstColTitle: "Us", // used
		spellcastingBonus: {
			level: [0, 0],
			psionic: false,
			times: 20,
			firstCol: "checkbox",
			magicItemComponents: false
		}
	},
	"1st-level": {
		rarity: "common",
		magicItemTable: "?",
		description: "If the 1st-level spell on this scroll is on your spell list, you can cast it, having the scroll crumble to dust afterwards. If the spell is of a level that you can't yet cast, you need to make a DC 11 check with your spellcasting ability to use this scroll or it is destroyed if you fail. The spell is cast with DC 13 and a +5 attack modifier.",
		descriptionFull: "A spell scroll bears the words of a single spell, written as a mystical cipher. If the spell is on your class's spell list, you can read the scroll and cast its spell without providing any material components. Otherwise, the scroll is unintelligible. Casting the spell by reading the scroll requires the spell's normal casting time. Once the spell is cast, the words on the scroll fade, and it crumbles to dust. If the casting is interrupted, the scroll is not lost.\n   If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC is 11. On a failed check, the spell disappears from the scroll with no other effect.\n   Once the spell is cast, the words on the scroll fade, and the scroll itself crumbles to dust.\n   A spell cast from this scroll has a save DC of 13 and an attack bonus of +5.\n   A wizard spell on a spell scroll can be copied just as spells in spellbooks can be copied. When a spell is copied from a spell scroll, the copier must succeed on a DC 11 Intelligence (Arcana) check. If the check succeeds, the spell is successfully copied. Whether the check succeeds or fails, the spell scroll is destroyed.",
		fixedDC: 13,
		spellFirstColTitle: "Us", // used
		spellcastingBonus: {
			level: [1, 1],
			psionic: false,
			times: 20,
			firstCol: "checkbox",
			magicItemComponents: false
		}
	},
	"2nd-level": {
		rarity: "uncommon",
		magicItemTable: "?",
		description: "If the 2nd-level spell on this scroll is on your spell list, you can cast it, having the scroll crumble to dust afterwards. If the spell is of a level that you can't yet cast, you need to make a DC 12 check with your spellcasting ability to use this scroll or destroy it if you fail. The spell is cast with DC 13 and a +5 attack modifier.",
		descriptionFull: "A spell scroll bears the words of a single spell, written as a mystical cipher. If the spell is on your class's spell list, you can read the scroll and cast its spell without providing any material components. Otherwise, the scroll is unintelligible. Casting the spell by reading the scroll requires the spell's normal casting time. Once the spell is cast, the words on the scroll fade, and it crumbles to dust. If the casting is interrupted, the scroll is not lost.\n   If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC is 12. On a failed check, the spell disappears from the scroll with no other effect.\n   Once the spell is cast, the words on the scroll fade, and the scroll itself crumbles to dust.\n   A spell cast from this scroll has a save DC of 13 and an attack bonus of +5.\n   A wizard spell on a spell scroll can be copied just as spells in spellbooks can be copied. When a spell is copied from a spell scroll, the copier must succeed on a DC 12 Intelligence (Arcana) check. If the check succeeds, the spell is successfully copied. Whether the check succeeds or fails, the spell scroll is destroyed.",
		fixedDC: 13,
		spellFirstColTitle: "Us", // used
		spellcastingBonus: {
			level: [2, 2],
			psionic: false,
			times: 20,
			firstCol: "checkbox",
			magicItemComponents: false
		}
	},
	"3rd-level": {
		rarity: "uncommon",
		magicItemTable: "?",
		description: "If the 3rd-level spell on this scroll is on your spell list, you can cast it, having the scroll crumble to dust afterwards. If the spell is of a level that you can't yet cast, you need to make a DC 13 check with your spellcasting ability to use this scroll or it is destroyed if you fail. The spell is cast with DC 15 and a +7 attack modifier.",
		descriptionFull: "A spell scroll bears the words of a single spell, written as a mystical cipher. If the spell is on your class's spell list, you can read the scroll and cast its spell without providing any material components. Otherwise, the scroll is unintelligible. Casting the spell by reading the scroll requires the spell's normal casting time. Once the spell is cast, the words on the scroll fade, and it crumbles to dust. If the casting is interrupted, the scroll is not lost.\n   If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC is 13. On a failed check, the spell disappears from the scroll with no other effect.\n   Once the spell is cast, the words on the scroll fade, and the scroll itself crumbles to dust.\n   A spell cast from this scroll has a save DC of 15 and an attack bonus of +7.\n   A wizard spell on a spell scroll can be copied just as spells in spellbooks can be copied. When a spell is copied from a spell scroll, the copier must succeed on a DC 13 Intelligence (Arcana) check. If the check succeeds, the spell is successfully copied. Whether the check succeeds or fails, the spell scroll is destroyed.",
		fixedDC: 15,
		spellFirstColTitle: "Us", // used
		spellcastingBonus: {
			level: [3, 3],
			psionic: false,
			times: 20,
			firstCol: "checkbox",
			magicItemComponents: false
		}
	},
	"4th-level": {
		rarity: "rare",
		magicItemTable: "?",
		description: "If the 4th-level spell on this scroll is on your spell list, you can cast it, having the scroll crumble to dust afterwards. If the spell is of a level that you can't yet cast, you need to make a DC 14 check with your spellcasting ability to use this scroll or it is destroyed if you fail. The spell is cast with DC 15 and a +7 attack modifier.",
		descriptionFull: "A spell scroll bears the words of a single spell, written as a mystical cipher. If the spell is on your class's spell list, you can read the scroll and cast its spell without providing any material components. Otherwise, the scroll is unintelligible. Casting the spell by reading the scroll requires the spell's normal casting time. Once the spell is cast, the words on the scroll fade, and it crumbles to dust. If the casting is interrupted, the scroll is not lost.\n   If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC is 14. On a failed check, the spell disappears from the scroll with no other effect.\n   Once the spell is cast, the words on the scroll fade, and the scroll itself crumbles to dust.\n   A spell cast from this scroll has a save DC of 15 and an attack bonus of +7.\n   A wizard spell on a spell scroll can be copied just as spells in spellbooks can be copied. When a spell is copied from a spell scroll, the copier must succeed on a DC 14 Intelligence (Arcana) check. If the check succeeds, the spell is successfully copied. Whether the check succeeds or fails, the spell scroll is destroyed.",
		fixedDC: 15,
		spellFirstColTitle: "Us", // used
		spellcastingBonus: {
			level: [4, 4],
			psionic: false,
			times: 20,
			firstCol: "checkbox",
			magicItemComponents: false
		}
	},
	"5th-level": {
		rarity: "rare",
		magicItemTable: "?",
		description: "If the 5th-level spell on this scroll is on your spell list, you can cast it, having the scroll crumble to dust afterwards. If the spell is of a level that you can't yet cast, you need to make a DC 15 check with your spellcasting ability to use this scroll or it is destroyed if you fail. The spell is cast with DC 17 and a +9 attack modifier.",
		descriptionFull: "A spell scroll bears the words of a single spell, written as a mystical cipher. If the spell is on your class's spell list, you can read the scroll and cast its spell without providing any material components. Otherwise, the scroll is unintelligible. Casting the spell by reading the scroll requires the spell's normal casting time. Once the spell is cast, the words on the scroll fade, and it crumbles to dust. If the casting is interrupted, the scroll is not lost.\n   If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC is 15. On a failed check, the spell disappears from the scroll with no other effect.\n   Once the spell is cast, the words on the scroll fade, and the scroll itself crumbles to dust.\n   A spell cast from this scroll has a save DC of 17 and an attack bonus of +9.\n   A wizard spell on a spell scroll can be copied just as spells in spellbooks can be copied. When a spell is copied from a spell scroll, the copier must succeed on a DC 15 Intelligence (Arcana) check. If the check succeeds, the spell is successfully copied. Whether the check succeeds or fails, the spell scroll is destroyed.",
		fixedDC: 17,
		spellFirstColTitle: "Us", // used
		spellcastingBonus: {
			level: [5, 5],
			psionic: false,
			times: 20,
			firstCol: "checkbox",
			magicItemComponents: false
		}
	},
	"6th-level": {
		rarity: "very rare",
		magicItemTable: "?",
		description: "If the 6th-level spell on this scroll is on your spell list, you can cast it, having the scroll crumble to dust afterwards. If the spell is of a level that you can't yet cast, you need to make a DC 16 check with your spellcasting ability to use this scroll or it is destroyed if you fail. The spell is cast with DC 17 and a +9 attack modifier.",
		descriptionFull: "A spell scroll bears the words of a single spell, written as a mystical cipher. If the spell is on your class's spell list, you can read the scroll and cast its spell without providing any material components. Otherwise, the scroll is unintelligible. Casting the spell by reading the scroll requires the spell's normal casting time. Once the spell is cast, the words on the scroll fade, and it crumbles to dust. If the casting is interrupted, the scroll is not lost.\n   If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC is 16. On a failed check, the spell disappears from the scroll with no other effect.\n   Once the spell is cast, the words on the scroll fade, and the scroll itself crumbles to dust.\n   A spell cast from this scroll has a save DC of 17 and an attack bonus of +9.\n   A wizard spell on a spell scroll can be copied just as spells in spellbooks can be copied. When a spell is copied from a spell scroll, the copier must succeed on a DC 16 Intelligence (Arcana) check. If the check succeeds, the spell is successfully copied. Whether the check succeeds or fails, the spell scroll is destroyed.",
		fixedDC: 17,
		spellFirstColTitle: "Us", // used
		spellcastingBonus: {
			level: [6, 6],
			psionic: false,
			times: 20,
			firstCol: "checkbox",
			magicItemComponents: false
		}
	},
	"7th-level": {
		rarity: "very rare",
		magicItemTable: "?",
		description: "If the 7th-level spell on this scroll is on your spell list, you can cast it, having the scroll crumble to dust afterwards. If the spell is of a level that you can't yet cast, you need to make a DC 17 check with your spellcasting ability to use this scroll or it is destroyed if you fail. The spell is cast with DC 18 and a +10 attack modifier.",
		descriptionFull: "A spell scroll bears the words of a single spell, written as a mystical cipher. If the spell is on your class's spell list, you can read the scroll and cast its spell without providing any material components. Otherwise, the scroll is unintelligible. Casting the spell by reading the scroll requires the spell's normal casting time. Once the spell is cast, the words on the scroll fade, and it crumbles to dust. If the casting is interrupted, the scroll is not lost.\n   If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC is 17. On a failed check, the spell disappears from the scroll with no other effect.\n   Once the spell is cast, the words on the scroll fade, and the scroll itself crumbles to dust.\n   A spell cast from this scroll has a save DC of 18 and an attack bonus of +10.\n   A wizard spell on a spell scroll can be copied just as spells in spellbooks can be copied. When a spell is copied from a spell scroll, the copier must succeed on a DC 17 Intelligence (Arcana) check. If the check succeeds, the spell is successfully copied. Whether the check succeeds or fails, the spell scroll is destroyed.",
		fixedDC: 18,
		spellFirstColTitle: "Us", // used
		spellcastingBonus: {
			level: [7, 7],
			psionic: false,
			times: 20,
			firstCol: "checkbox",
			magicItemComponents: false
		}
	},
	"8th-level": {
		rarity: "very rare",
		magicItemTable: ["D", "?"],
		description: "If the 8th-level spell on this scroll is on your spell list, you can cast it, having the scroll crumble to dust afterwards. If the spell is of a level that you can't yet cast, you need to make a DC 18 check with your spellcasting ability to use this scroll or it is destroyed if you fail. The spell is cast with DC 18 and a +10 attack modifier.",
		descriptionFull: "A spell scroll bears the words of a single spell, written as a mystical cipher. If the spell is on your class's spell list, you can read the scroll and cast its spell without providing any material components. Otherwise, the scroll is unintelligible. Casting the spell by reading the scroll requires the spell's normal casting time. Once the spell is cast, the words on the scroll fade, and it crumbles to dust. If the casting is interrupted, the scroll is not lost.\n   If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC is 18. On a failed check, the spell disappears from the scroll with no other effect.\n   Once the spell is cast, the words on the scroll fade, and the scroll itself crumbles to dust.\n   A spell cast from this scroll has a save DC of 18 and an attack bonus of +10.\n   A wizard spell on a spell scroll can be copied just as spells in spellbooks can be copied. When a spell is copied from a spell scroll, the copier must succeed on a DC 18 Intelligence (Arcana) check. If the check succeeds, the spell is successfully copied. Whether the check succeeds or fails, the spell scroll is destroyed.",
		fixedDC: 18,
		spellFirstColTitle: "Us", // used
		spellcastingBonus: {
			level: [8, 8],
			psionic: false,
			times: 20,
			firstCol: "checkbox",
			magicItemComponents: false
		}
	},
	"9th-level": {
		rarity: "legendary",
		magicItemTable: "?",
		description: "If the 9th-level spell on this scroll is on your spell list, you can cast it, having the scroll crumble to dust afterwards. If the spell is of a level that you can't yet cast, you need to make a DC 19 check with your spellcasting ability to use this scroll or it is destroyed if you fail. The spell is cast with DC 19 and a +11 attack modifier.",
		descriptionFull: "A spell scroll bears the words of a single spell, written as a mystical cipher. If the spell is on your class's spell list, you can read the scroll and cast its spell without providing any material components. Otherwise, the scroll is unintelligible. Casting the spell by reading the scroll requires the spell's normal casting time. Once the spell is cast, the words on the scroll fade, and it crumbles to dust. If the casting is interrupted, the scroll is not lost.\n   If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC is 19. On a failed check, the spell disappears from the scroll with no other effect.\n   Once the spell is cast, the words on the scroll fade, and the scroll itself crumbles to dust.\n   A spell cast from this scroll has a save DC of 19 and an attack bonus of +11.\n   A wizard spell on a spell scroll can be copied just as spells in spellbooks can be copied. When a spell is copied from a spell scroll, the copier must succeed on a DC 19 Intelligence (Arcana) check. If the check succeeds, the spell is successfully copied. Whether the check succeeds or fails, the spell scroll is destroyed.",
		fixedDC: 19,
		spellFirstColTitle: "Us", // used
		spellcastingBonus: {
			level: [9, 9],
			psionic: false,
			times: 20,
			firstCol: "checkbox",
			magicItemComponents: false
		}
	},
	"mixed levels": {
		description: "If the spell on this scroll is on your spell list, you can cast it, having the scroll crumble to dust afterwards. If the spell's level is higher than you can cast, you need to make a DC 10 + spell level check with my spellcasting ability, destroying it if you fail. The DC will be listed on the spell sheet's first column (spell attack = DC - 8).",
		spellFirstColTitle: "DC",
		spellcastingBonus: {
			level: [0, 9],
			psionic: false,
			times: 20,
			magicItemComponents: false
		},
		calcChanges: {
			spellAdd: [
				function (spellKey, spellObj, spName) {
					if ((/mixed levels/).test(spName)) {
						spellObj.firstCol = spellObj.level < 3 ? 13 : spellObj.level < 5 ? 15 : spellObj.level < 7 ? 17 : spellObj.level < 9 ? 18 : 19;
						return true;
					}
				}, ""
			]
		}
	}
};
MagicItemsList["sphere of annihilation"] = {
	name: "Sphere of Annihilation",
	source: [["DMG2024", 306]],
	type: "wondrous item",
	rarity: "legendary",
	magicItemTable: "?",
	description: "This 2-ft radius black sphere obliterates all matter it comes into contact with, except artifacts. Anything not wholly engulfed by it and destroyed takes 8d10 force damage. If within 60-ft of it, you can control it as a Magic action with a DC 25 Intelligence (Arcana) check, moving it 5 ft \xD7 your Intelligence modifier, or 10 ft towards you if you fail. See notes page for more details.",
	descriptionFull: "This 2-foot-diameter black sphere is a hole in the multiverse, hovering in space and stabilized by a magical field surrounding it.\n   The sphere obliterates all matter it passes through and all matter that passes through it. Artifacts are the exception. Unless an artifact is susceptible to damage from a sphere of annihilation, it passes through the sphere unscathed. Anything else that touches the sphere but isn't wholly engulfed and obliterated by it takes 8d10 force damage.\n   The sphere is stationary until someone controls it. If you are within 60 feet of an uncontrolled sphere, you can use a Magic action to make a DC 25 Intelligence (Arcana) check. On a success, the sphere levitates in one direction of your choice, up to a number of feet equal to 5 \xD7 your Intelligence modifier (minimum 5 feet). On a failure, the sphere moves 10 feet toward you. A creature whose space the sphere enters must succeed on a DC 19 Dexterity saving throw or be touched by it, taking 8d10 force damage.\n   If you attempt to control a sphere that is under another creature's control, you make an Intelligence (Arcana) check contested by the other creature's Intelligence (Arcana) check. The winner of the contest gains control of the sphere and can levitate it as normal.\n   If the sphere comes into contact with a planar portal, such as that created by the Gate spell, or an extradimensional space, such as that within a portable hole, the DM determines randomly what happens, using the following table.\n\n" + toUni("d100\tResult") + "\n01-50\tThe sphere is destroyed.\n51-85\tThe sphere moves through the portal or into the extradimensional space.\n86-00\tA spatial rift sends each creature and object within 180 feet of the sphere, including the sphere, to a random plane of existence.",
	action: [["action", ""]],
	toNotesPage: [{
		name: "Special Properties",
		note: [
			"This 2-ft-diameter black sphere is a hole in the multiverse, hovering in space and stabilized by a magical field surrounding it. It obliterates all matter it passes through and all matter that passes through it. Artifacts are the exception. Unless an artifact is susceptible to damage from a sphere of annihilation, it passes through the sphere unscathed. Anything else that touches the sphere but isn't wholly engulfed and obliterated by it takes 8d10 force damage.",
			"The sphere is stationary until someone controls it. If you are within 60 ft of an uncontrolled sphere, you can take a Magic action to make a DC 25 Intelligence (Arcana) check. On a success, the sphere levitates in one direction of your choice, up to 5 ft \xD7 your Intelligence modifier (minimum 5 ft). On a failure, the sphere moves 10 ft toward you. A creature whose space the sphere enters must succeed on a DC 19 Dexterity saving throw or be touched by it, taking 8d10 force damage.",
			"If you attempt to control a sphere that is under another creature's control, make an Intelligence (Arcana) check contested by the other creature's Intelligence (Arcana) check. The winner of the contest gains control of the sphere and can levitate it as normal.",
			"If the sphere comes into contact with a planar portal, such as that created by the Gate spell, or an extradimensional space, such as that within a portable hole, the DM determines randomly what happens, by rolling a d100.",
			" \u2022 01-50 The sphere is destroyed.",
			" \u2022 51-85 The sphere moves through the portal or into the extradimensional space.",
			" \u2022 86-00 A spatial rift sends each creature and object within 180 ft of the sphere, including the sphere, to a random plane of existence."
		]
	}]
};
MagicItemsList["spirit board"] = {
	name: "Spirit Board",
	source: [["DMG2024", 306]],
	type: "wondrous item",
	rarity: "very rare",
	magicItemTable: "?",
	description: "This board has 3 charges and regains 1 expended charge daily at dawn. While touching the planchette, you can take 1 minute to cast Augury (1 charge) or Commune (3 charges).",
	descriptionFull: "This board has 3 charges and regains 1 expended charge daily at dawn. While touching the planchette, you can take 1 minute to cast one of the spells on the table below. The table indicates how many charges you must expend to cast the spell. As you cast the spell, you call on the spirits of the dead to guide the planchette across the board’s surface, answering your questions by pointing to the letters or words on the board.\n" +
					"\t Spell \t Charge\n \t Augury \t 1\n \t Commune \t 3 ",
	usages: "3",
	recovery: "dawn",
	additional: "regain 1",
	spellFirstColTitle: "Ch",
	spellcastingBonus: [{
		name: "1 charge",
		spells: ["augury"],
		selection: ["augury"],
		firstCol: 1
	}, {
		name: "3 charges",
		spells: ["commune"],
		selection: ["commune"],
		firstCol: 3,
	}]
};
MagicItemsList["staff of adornment"] = {
	name: "Staff of Adornment",
	source: [["DMG2024", 306]],
	magicItemTable: "?",
	type: "staff",
	rarity: "common",
	description: "If you place a tiny object up to 1 lb above the tip of the staff while holding it, the object floats 1 inch from its tip and remains there until it is removed or until you no longer possess the staff. It can have up to three objects floating over its tip at any given time and you can make one or more objects slowly spin or turn in place.",
	descriptionFull: "If you place a tiny object weighing no more than 1 pound (such as a shard of crystal, an egg, or a stone) above the tip of the staff while holding it, the object floats an inch from the staff's tip and remains there until it is removed or until the staff is no longer in your possession. The staff can have up to three such objects floating over its tip at any given time. While holding the staff, you can make one or more of the objects slowly spin or turn in place.",
	weight: 4
};
MagicItemsList["staff of birdcalls"] = {
	name: "Staff of Birdcalls",
	source: [["DMG2024", 307]],
	magicItemTable: "?",
	type: "staff",
	rarity: "common",
	description: "This staff has 10 charges, regaining 1d6+4 at dawn. You can take a Magic action to expend 1 charge to create a sound out to a range of 120 ft: a finch's chirp, raven's caw, duck's quack, chicken's cluck, goose's honk, loon's call, turkey's gobble, seagull's cry, owl's hoot, or an eagle's shriek.",
	descriptionFull: "This wooden staff is decorated with bird carvings. It has 10 charges. While holding it, you can take a Magic action to expend 1 charge from the staff and cause it to create one of the following sounds, which can be heard out to 120 feet: a finch’s chirp, a raven’s caw, a duck’s quack, a chicken’s cluck, a goose’s honk, a loon’s call, a turkey’s gobble, a seagull’s cry, an owl’s hoot, or an eagle’s shriek.\n   The staff regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff explodes in a harmless cloud of bird feathers and is lost forever.",
	weight: 4,
	usages: 10,
	recovery: "dawn",
	additional: "regains 1d6+4",
	action: [["action", ""]]
};
MagicItemsList["staff of charming"] = {
	name: "Staff of Charming",
	source: [["DMG2024", 307]],
	type: "staff",
	rarity: "rare",
	magicItemTable: "?",
	description: "This staff has 10 charges, regaining 1d8+2 at dawn. If an enchantment spell is cast only on you, you can use the staff to, once per dawn, turn a failed save into a success and as a reaction if you make the save, you can expend 1 charge to turn the spell back on its caster. You can expend 1 charge to cast Charm Person, Command, or Comprehend Languages using your spell save DC.",
	descriptionFull: "This staff has 10 charges. While holding the staff, you can use any of its properties:\n" +
		toUni("Cast Spell") + ". You can expend 1 of the staff’s charges to cast Charm Person, Command, or Comprehend Languages from it using your spell save DC.\n"+
		toUni("Reflect Enchantment") + ". If you succeed on a saving throw against an Enchantment spell that targets only you, you can take a Reaction to expend 1 charge from the staff and turn the spell back on its caster as if you had cast the spell.\n" +
		toUni("Resist Enchantment") + ". If you fail a saving throw against an Enchantment spell that targets only you, you can turn your failed save into a successful one. You can’t use this property of the staff again until the next dawn.\n" +
		toUni("Regain Charges") + ". The staff regains 1d8 + 2 expended charges daily at dawn. If you expend the last charge, roll 1d20. On a 1, the staff crumbles to dust and is destroyed.",
	weight: 4,
	attunement: true,
	prerequisite: "Requires attunement by a bard, cleric, druid, sorcerer, warlock, or wizard",
	prereqeval: function (v) { return classes.known.bard || classes.known.cleric || classes.known.druid || classes.known.sorcerer || classes.known.warlock || classes.known.wizard ? true : false; },
	extraLimitedFeatures: [{
		name: "Resist Enchantment",
		usages: 1,
		recovery: "dawn"
	}],
	usages: 10,
	recovery: "dawn",
	additional: "charges, regains 1d8+2",
	spellcastingAbility: "class",
	spellFirstColTitle: "Ch",
	spellcastingBonus: {
		name: "1 charge",
		spells: ["charm person", "command", "comprehend languages"],
		selection: ["charm person", "command", "comprehend languages"],
		firstCol: 1,
		times: 3
	},
	action: [["reaction", "reflect enchantment (1 charge)"]],
};
MagicItemsList["staff of fire"] = {
	name: "Staff of Fire",
	source: [["DMG2024", 307]],
	type: "staff",
	rarity: "very rare",
	magicItemTable: "?",
	description: "You have resistance to fire while holding this staff. It has 10 charges, regaining 1d6+4 expended charges at dawn. If you use its last charge, roll a d20. On a 1, it is destroyed. You can use its charges to cast Burning Hands (1 charge), Fireball (3 charges), and Wall of Fire (4 charges), using your spellcasting ability.",
	descriptionFull: "You have resistance to fire damage while you hold this staff.\n   The staff has 10 charges. While holding the staff, you can cast one of the spells on the following table from it, using your spell save DC. The table indicates how many charges you must expend to cast the spell: Burning Hands (1 charge), Fireball (3 charges), or Wall of Fire (4 charges).\n   The staff regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff blackens, crumbles into cinders, and is destroyed.",
	attunement: true,
	weight: 4,
	prerequisite: "Requires attunement by a druid, sorcerer, warlock, or wizard",
	prereqeval: function (v) { return classes.known.druid || classes.known.sorcerer || classes.known.warlock || classes.known.wizard ? true : false; },
	usages: 10,
	recovery: "dawn",
	additional: "regains 1d6+4",
	dmgres: ["Fire"],
	spellcastingAbility: "class",
	spellFirstColTitle: "Ch",
	spellcastingBonus: [{
		name: "1 charge",
		spells: ["burning hands"],
		selection: ["burning hands"],
		firstCol: 1
	}, {
		name: "3 charges",
		spells: ["fireball"],
		selection: ["fireball"],
		firstCol: 3
	}, {
		name: "4 charges",
		spells: ["wall of fire"],
		selection: ["wall of fire"],
		firstCol: 4
	}]
};
MagicItemsList["staff of flowers"] = {
	name: "Staff of Flowers",
	source: [["DMG2024", 308]],
	type: "staff",
	rarity: "common",
	description: "This staff has 10 charges, regaining 1d6+4 at dawn. As a Magic action, you can use 1 charge to cause a flower of my choice to sprout from a patch of earth or soil within 5 ft of yourself or from the staff itself. The flower is nonmagical and grows or withers as a normal flower would.",
	descriptionFull: "This wooden staff has 10 charges. While holding it, you can take a Magic action to expend 1 charge from the staff and cause a flower to sprout from a patch of earth or soil within 5 feet of yourself, or from the staff itself. Unless you choose a specific kind of flower, the staff creates a mild-scented daisy. The flower is harmless and nonmagical, and it grows or withers as a normal flower would." + toUni("Regaining Charges") + "The staff regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll 1d20. On a 1, the staff turns into flower petals and is lost forever.",
	weight: 4,
	usages: 10,
	recovery: "dawn",
	additional: "regains 1d6+4",
	action: [["action", ""]]
};
MagicItemsList["staff of frost"] = {
	name: "Staff of Frost",
	source: [["DMG2024", 308]],
	type: "staff",
	rarity: "very rare",
	magicItemTable: "?",
	description: "You have Resistance to Cold damage while you hold this staff. It has 10 charges, regaining 1d6+4 at dawn. You can use its charges to cast Cone of Cold (5 charges), Fog Cloud (1 charge), Ice Storm (4 charges), and Wall of Ice (4 charges) using your spellcasting ability.",
	descriptionFull: "You have Resistance to Cold damage while you hold this staff.\n   The staff has 10 charges. While holding the staff, you can cast one of the spells on the following table from it, using your spell save DC. The table indicates how many charges you must expend to cast the spell: Cone of Cold (5 charges), Fog Cloud (1 charge), Ice Storm (4 charges), or Wall of Ice (4 charges).\n   The staff regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1. the staff turns to water and is destroyed.",
	attunement: true,
	weight: 4,
	prerequisite: "Requires attunement by a druid, sorcerer, warlock, or wizard",
	prereqeval: function (v) { return classes.known.druid || classes.known.sorcerer || classes.known.warlock || classes.known.wizard ? true : false; },
	usages: 10,
	recovery: "dawn",
	additional: "regains 1d6+4",
	dmgres: ["Cold"],
	spellcastingAbility: "class",
	spellFirstColTitle: "Ch",
	spellcastingBonus: [{
		name: "1 charge",
		spells: ["fog cloud"],
		selection: ["fog cloud"],
		firstCol: 1
	}, {
		name: "4 charges",
		spells: ["ice storm", "wall of ice"],
		selection: ["ice storm", "wall of ice"],
		firstCol: 4,
		times: 2
	}, {
		name: "5 charges",
		spells: ["cone of cold"],
		selection: ["cone of cold"],
		firstCol: 5
	}]
};
MagicItemsList["staff of healing"] = {
	name: "Staff of Healing",
	source: [["DMG2024", 308]],
	type: "staff",
	rarity: "rare",
	magicItemTable: "?",
	description: "This staff has 10 charges, regaining 1d6+4 expended charges at dawn. You can use its charges to cast Cure Wounds (1 charge per spell level, up to 4th), Lesser Restoration (2 charges), and Mass Cure Wounds (5 charges) using your spellcasting ability.",
	descriptionFull: "This staff has 10 charges. While holding the staff, you can cast one of the spells on the following table from it, using your spellcasting ability modifier. The table indicates how many charges you must expend to cast the spell: Cure Wounds (1 charge per spell level, up to 4th), Lesser Restoration (2 charges), or Mass Cure Wounds (5 charges).\n" +
		"\n The staff regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff vanishes in a flash of light, lost forever.",
	attunement: true,
	weight: 4,
	prerequisite: "Requires attunement by a bard, cleric, or druid",
	prereqeval: function (v) { return classes.known.bard || classes.known.cleric || classes.known.druid ? true : false; },
	usages: 10,
	recovery: "dawn",
	additional: "regains 1d6+4",
	spellcastingAbility: "class",
	spellFirstColTitle: "Ch",
	spellcastingBonus: [{
		name: "1+ charges",
		spells: ["cure wounds"],
		selection: ["cure wounds"],
		firstCol: "1+"
	}, {
		name: "2 charges",
		spells: ["lesser restoration"],
		selection: ["lesser restoration"],
		firstCol: 2
	}, {
		name: "5 charges",
		spells: ["mass cure wounds"],
		selection: ["mass cure wounds"],
		firstCol: 5
	}],
	spellChanges: {
		"cure wounds": {
			noSpellUpcasting: false,
			description: "1 living creature heals 1d8+1d8/SL+spell mod HP; +1 SL/extra charge",
			changes: "The spell level Cure Wounds is cast at depends on the amount of charges spend, 1 charge per spell slot level."
		}
	}
};
MagicItemsList["staff of power"] = {
	name: "Staff of Power",
	source: [["DMG2024", 308]],
	type: "staff",
	rarity: "very rare",
	magicItemTable: "?",
	description: "While holding this quarterstaff, you gain a +2 bonus on saves, AC, and spell attacks. The staff has 20 charges, regaining 2d8+4 at dawn. As a Magic action you can break it, causing a 30-ft Emanation originating from itself. You have a 50 percent to travel to a random plane. If you fail to avoid the effect, you take 16 times the number of remaing charges in the staff in Force damage.",
	descriptionFull: "This staff has 20 charges and can be wielded as a magic Quarterstaff that grants a +2 bonus to attack rolls and damage rolls made with it. While holding it, you gain a +2 bonus to Armor Class, saving throws, and spell attack rolls.\n " + toUni("Spells") + ". While holding the staff, you can cast one of the spells on the following table from it, using your spell save DC. The table indicates how many charges you must expend to cast the spell: Cone of Cold (5 charges), Fireball (5th-level version, 5 charges), Globe of Invulnerability (6 charges), Hold Monster (5 charges), Levitate (2 charges). Lightning Bolt (5th-level version, 5 charges), Magic Missile (1 charge), Ray of Enfeeblement (1 charge), or Wall of Force (5 charges).\n   " + toUni("Retributive Strike") + ". You can take a Magic action to break the staff over your knee or against a solid surface. The staff is destroyed and releases its magic in an explosion that fills a 30-foot Emanation originating from itself. You have a 50 percent chance to instantly travel to a random plane of existence, avoiding the explosion. If you fail to avoid the effect, you take Force damage equal to 16 times the number of charges in the staff. Each other creature in the area makes a DC 17 Dexterity saving throw. On a failed save, a creature takes Force damage equal to 4 times the number of charges in the staff. On a successful save, a creature takes half as much damage.",
	attunement: true,
	weight: 4,
	prerequisite: "Requires attunement by a sorcerer, warlock, or wizard",
	prereqeval: function (v) { return classes.known.sorcerer || classes.known.warlock || classes.known.wizard ? true : false; },
	usages: 20,
	recovery: "dawn",
	additional: "regains 2d8+4",
	weaponsAdd: ["Staff of Power"],
	weaponOptions: {
		baseWeapon: "quarterstaff",
		regExpSearch: /^(?=.*staff)(?=.*power).*$/i,
		name: "Staff of Power",
		source: [["PHB2024", "-"]],
		description: "Versatile (1d8), Topple",
		modifiers: [2, 2]
	},
	calcChanges: {
		spellCalc: [
			function (type, spellcasters, ability) {
				if (type == "attack") return 2;
			},
			"While holding the Staff of Power, I have a +2 bonus to spell attack rolls."
		]
	},
	addMod: [{ type: "save", field: "all", mod: 2, text: "While holding the Staff of Power, I gain a +2 bonus to all my saving throws." }],
	extraAC: [{ name: "Staff of Power", mod: 2, magic: true, text: "I gain a +2 bonus to AC while attuned." }],
	action: [["action", " (Retributive Strike)"]],
	spellcastingAbility: "class",
	spellFirstColTitle: "Ch",
	spellcastingBonus: [{
		name: "5 charges; 5th level",
		spells: ["fireball", "lightning bolt"],
		selection: ["fireball", "lightning bolt"],
		firstCol: 5,
		times: 2
	}, {
		name: "6 charges",
		spells: ["globe of invulnerability"],
		selection: ["globe of invulnerability"],
		firstCol: 6
	}, {
		name: "5 charges",
		spells: ["cone of cold", "hold monster", "wall of force"],
		selection: ["cone of cold", "hold monster", "wall of force"],
		firstCol: 5,
		times: 3
	}, {
		name: "2 charges",
		spells: ["levitate"],
		selection: ["levitate"],
		firstCol: 2
	}, {
		name: "1 charge",
		spells: ["magic missile", "ray of enfeeblement"],
		selection: ["magic missile", "ray of enfeeblement"],
		firstCol: 1,
		times: 2
	}],
	spellChanges: {
		"fireball": {
			nameShort: "Fireball (5th level)",
			description: "20-ft rad all crea 10d6 Fire dmg; save halves; unattended flammable objects ignite",
			changes: "Cast as if using a 5th-level spell slot."
		},
		"lightning bolt": {
			nameShort: "Lightning Bolt (5th level)",
			description: "100-ft long 5-ft wide all 10d6 Lightning dmg; save halves; unattended flammable obj ignite",
			changes: "Cast as if using a 5th-level spell slot."
		}
	}
};
MagicItemsList["staff of striking"] = {
	name: "Staff of Striking",
	source: [["DMG2024", 309]],
	type: "staff",
	rarity: "very rare",
	magicItemTable: "?",
	description: "This staff can be wielded as a magic Quarterstaff that grants a +3 bonus to attack and damage rolls and has 10 charges, regaining 1d6+4 at dawn. When you hit with a melee attack using it, you can expend up to 3 of its charges. For each charge you expend, the target takes an extra 1d6 force damage.",
	descriptionFull: "This staff can be wielded as a magic Quarterstaff that grants a +3 bonus to attack and damage rolls made with it.\n   The staff has 10 charges. When you hit with a melee attack using it, you can expend up to 3 of its charges. For each charge you expend, the target takes an extra 1d6 force damage. The staff regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff becomes a nonmagical quarterstaff.",
	attunement: true,
	weight: 4,
	usages: 10,
	recovery: "dawn",
	additional: "regains 1d6+4",
	weaponsAdd: ["Staff of Striking"],
	weaponOptions: {
		baseWeapon: "quarterstaff",
		regExpSearch: /^(?=.*staff)(?=.*striking).*$/i,
		name: "Staff of Striking",
		source: [["PHB2024", "-"]],
		modifiers: [3, 3],
		description: "Versatile (1d8), Topple; +1d6 force damage per charge expended."
	}
};
MagicItemsList["staff of swarming insects"] = {
	name: "Staff of Swarming Insects",
	source: [["DMG2024", 309]],
	type: "staff",
	rarity: "rare",
	magicItemTable: "?",
	description: "This staff has 10 charges, regaining 1d6+4 at dawn (On a 1, a swarm of insects consumes and destroys the staff, then disperses). While holding the staff, you can take a Magic action to expend 1 charge to create a swarm of flying insects to fill a 30-ft Emanation that originates from you for 10 minutes that moves with me, making the area Heavily Obscured for anybody but you. A 10+ mph wind disperses it.",
	descriptionFull: "This staff has 10 charges.\n " + + toUni("Insect Cloud") + ". While holding the staff, you can use a Magic action and expend 1 charge to cause a swarm of harmless flying insects to spread out in a 30-foot radius from you. The insects remain for 10 minutes, making the area heavily obscured for creatures other than you. The swarm moves with you, remaining centered on you. A wind of at least 10 miles per hour disperses the swarm and ends the effect\n" + toUni("Spells") + ". While holding the staff, you can cast one of the spells on the following table from it, using your spell save DC and spell attack modifier. The table indicates how many charges you must expend to cast the spell: Giant Insect (4 charges) or Insect Plague (5 charges).\n",
	attunement: true,
	weight: 4,
	prerequisite: "Requires attunement by a bard, cleric, druid, sorcerer, warlock, or wizard",
	prereqeval: function (v) { return classes.known.bard || classes.known.cleric || classes.known.druid || classes.known.sorcerer || classes.known.warlock || classes.known.wizard ? true : false; },
	usages: 10,
	recovery: "dawn",
	additional: "regains 1d6+4",
	action: [["action", ""]],
	spellcastingAbility: "class",
	spellFirstColTitle: "Ch",
	spellcastingBonus: [{
		name: "4 charges",
		spells: ["giant insect"],
		selection: ["giant insect"],
		firstCol: 4
	}, {
		name: "5 charges",
		spells: ["insect plague"],
		selection: ["insect plague"],
		firstCol: 5
	}]
};
MagicItemsList["staff of the adder"] = {
	name: "Staff of the Adder",
	source: [["DMG2024", 309]],
	type: "staff",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "As a bonus action, you can animate the head of this staff turning it into a vernomous snake for 1 minute or make it inanimate again. While animated, you can use it in melee using your Proficiency Bonus and Wisdom modifier on the attack roll (1d6 piercing + DC 15 Con save or 3d6 poison), but it can be attacked and has AC 15 and 20 HP (full every time). It has Immunity to Poison and Psychic damage. If it reaches 0 HP, the staff is destroyed.",
	descriptionFull: "As a Bonus Action, you can turn the head of this staff into that of an animate, venomous snake for 1 minute or revert the staff to its inanimate form.\n  When you take the Attack action, you can make one of the attack rolls using the animated snake head, which has a reach of 5 feet. Apply your Proficiency Bonus and Wisdom modifier to the attack roll. On a hit, the target takes 1d6 Piercing damage and 3d6 Poison damage.\n  The snake head can be attacked while it is animate. It has AC 15, HP 20, and Immunity to Poison and Psychic damage. If the head drops to 0 Hit Points, the staff is destroyed. As long as it’s not destroyed, the staff regains all lost Hit Points when it reverts to its inanimate form.",
	attunement: true,
	weight: 4,
	action: [["bonus action", " (animate/end)"]],
	weaponOptions: [{
		regExpSearch: /staff of the adder/i,
		name: "Animated Snake Head from Staff of the Adder",
		source: [["PHP2024", "?"]],
		list: "melee",
		ability: 1,
		type: "Natural",
		damage: [1, 6, "piercing"],
		range: "Melee",
		weight: 4,
		description: "+3d6 Poison",
		abilitytodamage: false,
		selectNow: true
	}]
};
MagicItemsList["staff of the magi"] = { // contains contributions by Pengsloth
	name: "Staff of the Magi",
	source: [["DMG2024", 310]],
	type: "staff",
	rarity: "legendary",
	magicItemTable: "?",
	description: "This staff has 50 charges and can be wielded as a magic Quarterstaff that grants a +2 bonus to attack rolls and damage rolls made with it and gives Advantage on saving throws against spells. As a Reaction, you can absorb a spell targeting only you, converting its spell level to charges and cancelling its effect. If this brings it over 50 charges or you break it is as an action, it explodes.",
	descriptionFull: "This staff has 50 charges and can be wielded as a magic Quarterstaff that grants a +2 bonus to attack rolls and damage rolls made with it. While you hold it, you gain a +2 bonus to spell attack rolls.\n" + toUni("Spell Absorption") + ". While holding the staff, you have Advantage on saving throws against spells. In addition, you can take a Reaction when another creature casts a spell that targets only you. If you do, the staff absorbs the magic of the spell, canceling its effect and gaining a number of charges equal to the absorbed spell’s level. However, if doing so brings the staff’s total number of charges above 50, the staff explodes as if you activated its Retributive Strike (see below)..\n   " + toUni("Spells") + ". While holding the staff, you can cast one of the spells on the following table from it, using your spell save DC. The table indicates how many charges you must expend to cast the spell: Arcane Lock (0 charges), Conjure Elemental (7 charges), Detect Magic (0 charges), Dispel Magic (3 charges), Enlarge/Reduce (0 charges), Fireball (7th-level version, 7 charges), Flaming Sphere (2 charges), Ice Storm (4 charges), Invisibility (2 charges), Knock (2 charges), Light (0 charges), Lightning Bolt (7th-level version, 7 charges), Mage Hand (0 charges), Passwall (5 charges), Plane Shift (7 charges), Protection from Evil and Good (0 charges), Telekinesis (5 charges), Wall of Fire (4 charges), or Web (2 charges).\n " + toUni("Retributive Strike") + ". You can take a Magic action to break the staff over your knee or against a solid surface. The staff is destroyed and releases its magic in an explosion that fills a 30-foot Emanation originating from itself. You have a 50 percent chance to instantly travel to a random plane of existence, avoiding the explosion. If you fail to avoid the effect, you take Force damage equal to 16 \xD7 the number of charges in the staff. Each other creature in the area makes a DC 17 Dexterity saving throw. On a failed save, a creature takes Force damage equal to 6 \xD7 the number of charges in the staff. On a successful save, a creature takes half as much damage.\n\n" + "The staff regains 4d6 + 2 expended charges daily at dawn. If you expend the last charge, roll 1d20. On a 20, the staff regains 1d12 + 1 charges.",
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
			description: "100-ft long 5-ft wide all 12d6 Lightning dmg; save halves; unattended flammable obj ignite",
			changes: "Cast as if using a 7th-level spell slot."
		},
		"conjure elemental": {
			time: "1 a",
			changes: "Casting time is only 1 action instead of 1 minute."
		}
	}
};
MagicItemsList["staff of the python"] = {
	name: "Staff of the Python",
	source: [["DMG2024", 311]],
	type: "staff",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "As a Magic action, you can throw this staff to an unoccupied space within 10 feet, transforming it to a Giant Constrictor Snake. It shares your Initiative and takes its turn immediately after you. You can command it mentally on your turn if within 60 ft. As a bonus action, you can command it to revert back to a staff. If the snake reaches 0 HP, the staff is destroyed.",
	descriptionFull: "As a Magic action, you can throw this staff so that it lands in an unoccupied space within 10 feet of you, causing the staff to become a Giant Constrictor Snake in that space. The snake is under your control and shares your Initiative count, taking its turn immediately after yours.\n   On your turn, you can mentally command the snake (no action required) if it is within 60 feet of you and you don’t have the Incapacitated condition. You decide what action the snake takes and where it moves during its turn, or you can issue it a general command, such as to attack your enemies or guard a location. Absent commands from you, the snake defends itself.\n   As a Bonus Action, you can command the snake to revert to staff form in its current space, and you can’t use the staff’s property again for 1 hour. If the snake is reduced to 0 Hit Points, it dies and reverts to its staff form; the staff then shatters and is destroyed. If the snake reverts to staff form before losing all its Hit Points, it regains all of them.",
	attunement: true,
	weight: 4,
	action: [["action", " (animate)"], ["bonus action", " (end)"]]
};
MagicItemsList["staff of the woodlands"] = {
	name: "Staff of the Woodlands",
	source: [["DMG2024", 311]],
	type: "staff",
	rarity: "rare",
	magicItemTable: "?",
	description: "This magic Quarterstaff gives me a +2 bonus on spell attacks, attack and damage rolls, as well as allowes me to cast multiple spells from it. It has 6 charges, regaining 1d6 at dawn. As a Magic action, I can plant it into the ground and expend 1 charge to have it grow into a 60 ft tree, which it remains until I use another Magic action to revert it back.",
	descriptionFull: "This staff has 6 charges and can be wielded as a magic Quarterstaff that grants a +2 bonus to attack rolls and damage rolls made with it. While holding it, you have a +2 bonus to spell attack rolls.\n   It regains 1d6 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff loses its properties and becomes a nonmagical quarterstaff.\n   " + toUni("Spells") + ". Using your spell save DC, you can to expend 1 or more of the staff's charges to cast one of the following spells from it: Animal Friendship (1 charge), Awaken (5 charges), Barkskin (2 charges), Locate Animals or Plants (2 charges), Pass Without Trace (2 charges), Speak with Animals (1 charge), Speak with Plants (3 charges), or Wall of Thorns (6 charges).\n " + toUni("Tree Form") + ". You can take a Magic action to plant one end of the staff in earth in an unoccupied space and expend 1 charge to transform the staff into a healthy tree. The tree is 60 feet tall and has a 5-foot-diameter trunk, and its branches at the top spread out in a 20-foot radius. The tree appears ordinary but radiates a faint aura of Transmutation magic that can be discerned with the Detect Magic spell. While touching the tree and using a Magic action, you return the staff to its normal form. Any creature in the tree falls when the tree reverts to a staff.",
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
			time: "1 a",
			changes: "Casting time is only 1 action instead of 8 hours."
		}
	}
};
MagicItemsList["staff of thunder and lightning"] = {
	name: "Staff of Thunder and Lightning",
	source: [["DMG2024", 311]],
	type: "staff",
	rarity: "very rare",
	magicItemTable: "?",
	description: "This +2 Quarterstaff has 5 special abilities that each can be used once per dawn. Both 'Lightning' and 'Thunder' can be used when I hit a melee attack with it; while 'Lightning Strike'and 'Thunderclap' require a Magic action to use. See the Notes page for what all of these abilities entail.",
	descriptionFull: "This staff can be wielded as a magic Quarterstaff that grants a +2 bonus to attack rolls and damage rolls made with it. It also has the following additional properties. Once one of these properties is used, it can’t be used again until the next dawn.\n   " +
		toUni("Lightning") + ". When you hit with a melee attack using the staff, you can cause the target to take an extra 2d6 Lightning damage (no action required).\n   " +
		toUni("Thunder") + ". When you hit with a melee attack using the staff, you can cause the staff to emit a crack of thunder, audible out to 300 feet (no action required). The target you hit must succeed on a DC 17 Constitution saving throw or have the Stunned condition until the end of your next turn.\n" +
		toUni("Lightning Strike") + ". You can take a Magic action to cause a bolt of lightning to leap from the staff's tip in a Line that is 5 feet wide and 120 feet long. Each creature in that Line must make a DC 17 Dexterity saving throw, taking 9d6 Lightning damage on a failed save, or half as much damage on a successful one.\n" +
		toUni("Thunderclap") + ". You can take a Magic action to cause the staff to produce a thunderclap audible out to 600 feet. Every creature a within 60-foot Emanation origination from you must make a DC 17 Constitution saving throw. On a failed save, a creature takes 2d6 Thunder damage and has the Deafened condition for 1 minute. On a successful save, a creature takes half damage and isn't deafened.\n " +
		toUni("Thunder and Lightning") + ". Thunder and Lightning. Immediately after you hit with a melee attack using the staff, you can take a Bonus Action to use the Lightning and Thunder properties (see above) at the same time. Doing so doesn’t expend the daily use of those properties, only the use of this one.",
	attunement: true,
	weight: 4,
	action: [["action", "Staff of T\u0026L Lightning Strike, Thunderclap"], ["bonus action", "Thunder and Lighting"]],
	weaponsAdd: ["Staff of Thunder and Lightning"],
	weaponOptions: {
		baseWeapon: "quarterstaff",
		regExpSearch: /staff of thunder and lighting/i,
		name: "Staff of Thunder and Lightning",
		source: [["SRD", 245], ["D", 204]],
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
		description: "Versatile (1d8), Topple; 1 charge / +2d10 Necrotic and DC Con Save or DisAdv 1 hr (Str or Con)"
	}
};
MagicItemsList["stone of controlling earth elementals"] = {
	name: "Stone of Controlling Earth Elementals",
	source: [["DMG2024", 312]],
	type: "wondrous item",
	rarity: "rare",
	magicItemTable: "?",
	description: "While touching this 5-pound stone to the ground, you can take a Magic action to summon an Earth Elemental. It appears in an unoccupied space you choose within 30-ft of yourself, obeys your commands, and its turn is immediately after yours. It disappears after 1 hour, when it dies, or when dismissed as a Bonus Action. The stone can't be used this way again until the next dawn.",
	descriptionFull: "While touching this 5-pound stone to the ground, you can take a Magic action to summon an Earth Elemental. The elemental appears in an unoccupied space you choose within 30 feet of yourself, obeys your commands, and takes its turn immediately after you on your Initiative count. The elemental disappears after 1 hour, when it dies, or when you dismiss it as a Bonus Action. The stone can’t be used this way again until the next dawn.",
	weight: 5,
	spellcastingBonus: {
		name: "Earth Elemental only",
		spells: ["conjure elemental"],
		selection: ["conjure elemental"],
		firstCol: "oncelr"
	},
	usages: 1,
	recovery: "dawn",
	spellChanges: {
		"conjure elemental": {
			time: "1 a",
			components: "V,M\u0192",
			compMaterial: "The Stone of Controlling Earth Elementals needs to touch the ground to cast this spell.",
			description: "CR 5 earth elemental that obeys my verbal commands; on broken conc. elemental breaks free",
			changes: "Using the Stone of Controlling Earth Elementals, the spell only takes 1 action instead of 1 minute to cast, but can only summon an Earth Elemental."
		}
	}
};
MagicItemsList["stone of good luck"] = {
	name: "Stone of Good Luck",
	source: [["DMG2024", 312]],
	type: "wondrous item",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "While this polished agate is on my person, you gain a +1 bonus to ability checks and saving throws.",
	descriptionFull: "While this polished agate is on your person, you gain a +1 bonus to ability checks and saving throws.",
	attunement: true,
	addMod: [
		{ type: "save", field: "all", mod: 1, text: "I gain a +1 bonus on all my saving throws." },
		{ type: "skill", field: "all", mod: 1, text: "I gain a +1 bonus on all my ability checks." },
		{ type: "skill", field: "Init", mod: 1, text: "I gain a +1 bonus on all my ability checks." }
	]
};
MagicItemsList["sun blade"] = {
	name: "Sun Blade",
	source: [["DMG2024", 312]],
	type: "weapon (longsword)",
	rarity: "rare",
	magicItemTable: "?",
	attunement: true,
	description: "As a Bonus Action, you can have this hilt create a blade of radiance. While the blade exists, it acts like a magic Longsword that does +2 to attack and damage rolls, Radiant damage instead of Slashing (+1d8 to undead), has Finesse, emits Bright Light in a 15-ft radius and Dim Light in another 15 ft. You can take a Magic action, I can change the light's radius by 5 ft for each (Bright/Dim) to a maximum of 30 ft each or min of 10ft.",
	descriptionFull: "This item appears to be a longsword hilt.\n" + toUni("Blade of Radiance") + ". While grasping the hilt, you can take a Bonus Action to cause a blade of pure radiance to spring into existence or make the blade disappear. While the blade exists, this magic weapon functions as a Longsword with the Finesse property. If you are proficient with Longswords or Shortswords, you are proficient with the Sun Blade..\n   You gain a +2 bonus to attack rolls and damage rolls made with this weapon, which deals Radiant damage instead of Slashing damage. When you hit an Undead with it, that target takes an extra 1d8 Radiant damage.\n" + toUni("Sunlight") + ". The sword’s luminous blade emits Bright Light in a 15-foot radius and Dim Light for an additional 15 feet. The light is sunlight. While the blade persists, you can take a Magic action to expand or reduce its radius of Bright Light and Dim Light by 5 feet each, to a maximum of 30 feet each or a minimum of 10 feet each.",
	weight: 3,
	action: [["bonus action", "(BladeofRadiance"], ["action", " (change light)"]],
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
		description: "Verstaile (1d10), Sap; Adv on Reaction attack & Ignore Immune/Resist."
	}],
};
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
					fields.Description += (fields.Description ? '; ' : '') + 'On 20 to hit: +15 Necrotic dmg, +15 temp HP';
				}
			},
			'If you include the words "Life Stealing" in a the name of a sword, it will be treated as the magic weapon Sword of Life Stealing. It does +15 necrotic damage when you roll a 20 on the attack roll and then gives you 15 temporary hit points. It doesn\'t work against Constructs or Undead.'
		]
	}
};
MagicItemsList["sword of sharpness"] = {
	name: "Sword of Sharpness",
	nameTest: "of Sharpness",
	source: [["DMG2024", 314]],
	type: "weapon (glaive, greatsword, longsword, or scimitar)",
	rarity: "very rare",
	magicItemTable: "?",
	attunement: true,
	description: "When I roll a 20 to hit with this magic weapon vs. a creature, it takes +14 slashing damage and gaines 1 exhaustion level. It does maximum damage vs. objects.",
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
					fields.Description += (fields.Description ? '; ' : '') + 'On 20 to hit: +14 dmg; Max dmg vs. objects';
				}
			},
			'If you include the words "of Sharpness" in the name of a weapon, it will be treated as the magic weapon Sword of Sharpness. It deals maximum damage against objects. On a roll of 20 to hit against creatures it deals +14 slashing damage.'
		]
	}
};
MagicItemsList["sword of vengeance"] = {
	name: "Sword of Vengeance",
	nameTest: "of Vengeance",
	source: [["DMG2024", 314]],
	type: "weapon (glaive, greatsword, longsword, rapier, scimitar, or shortsword)",
	rarity: "uncommon",
	magicItemTable: "?",
	attunement: true,
	description: "You gain +1 to attack rolls and damage rolls. This weapon is cursed, you can't part with it and have Disadvantage on attacks with other weapons. If you take damage in combat, you must make a DC 15 Wis save or you will attack the attacker until it drops to 0 HP or can't attack it in melee anymore.",
	descriptionFull: "You gain a +1 bonus to attack and damage rolls made with this magic weapon.\n   " + toUni("Curse") + ". This weapon is cursed and possessed by a vengeful spirit. Becoming attuned to it extends the curse to you. As long as you remain cursed, you are unwilling to part with the weapon, keeping it on your person at all times. While attuned to this weapon, you have Disadvantage on attack rolls made with weapons other than this one.\n   In addition, while the weapon is on your person, you must succeed on a DC 15 Wisdom saving throw whenever you take damage from another creature in combat. On a failed save, you must attack the creature that damaged you until you drop to 0 hit points or it does, or until you can't reach the creature to make a melee attack against it.\n   You can break the curse in the usual ways. Alternatively, casting Banishment on the weapon forces the vengeful spirit to leave it. The sword then becomes a +1 Weapon with no other properties.",
	chooseGear: {
		type: "weapon",
		prefixOrSuffix: "prefix",
		descriptionChange: ["prefix", "sword"],
		excludeCheck: function (inObjKey, inObj) {
			var testRegex = /glaive|greatsword|longsword|rapier|scimitar|shortsword/i;
			return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
		}
	},
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/glaive|greatsword|longsword|rapier|scimitar|swordsword/i).test(v.baseWeaponName) && (/of vengeance/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'Cursed';
				}
			},
			'If I include the words "of Vengeance" in the name of a weapon, it will be treated as the magic weapon Sword of Vengeance. It has +1 to hit and damage, but also bears a curse.'
		],
		atkCalc: [
			function (fields, v, output) {
				if (v.isMeleeWeapon && (/glaive|greatsword|longsword|rapier|scimitar|swordsword/i).test(v.baseWeaponName) && (/of vengeance/i).test(v.WeaponTextName)) {
					output.magic = v.thisWeapon[1] + 1;
				}
			}, ''
		]
	}
};
MagicItemsList["sword of wounding"] = {
	name: "Sword of Wounding",
	nameTest: "of Wounding",
	source: [["DMG2024", 314]],
	type: "weapon (glaive, greatsword, longsword, rapier, scimitar, or shortsword)",
	rarity: "rare",
	magicItemTable: "?",
	attunement: true,
	description: "When you hit a creature with an attack using this magic weapon, the target takes an extra 2d6 Necrotic damage and must succeed on a DC 15 Constitution saving throw or be unable to regain Hit Points for 1 hour. The target repeats the save at the end of each of its turns, ending the effect on itself on a success..",
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
					fields.Description += (fields.Description ? '; ' : '') + 'target: +2d6 Necrotic dmg; DC 15 CON Save or no HP 1 hour';
				}
			},
			'If you include the words "of Wounding" in a the name of a weapon, it will be treated as the magic weapon Sword of Wounding.'
		]
	}
};
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
	spellcastingBonus: [{
		name: "Secret Msg",
		spells: ["message"],
		selection: ["message"],
		firstCol: "oncelr"
	}],
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
