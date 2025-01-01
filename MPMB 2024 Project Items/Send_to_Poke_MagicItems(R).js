MagicItemsList["ring of animal influence"] = {
	name: "Ring of Animal Influence",
	source: [["DMG2024", 292]],
	type: "ring",
	rarity: "rare",
	description: "This ring has 3 charges, and regains 1d3 expended charges daily at dawn. While wearing the ring, you can expend 1 charge to cast Animal Friendship, Fear (affect Beasts only), Speak with Animals using a DC13 spell save.",
	descriptionFull: "This ring has 3 charges, and regains 1d3 expended charges daily at dawn. While wearing the ring, you can expend 1 charge to cast Animal Friendship, Fear (affect Beasts only), Speak with Animals using a DC13 spell save.",
	usages: 3,
	recovery: "dawn",
	additional: "regains 1d3",
	fixedDC: 13,
	spellFirstColTitle: "Ch",
	spellcastingBonus: {
		name: "1 charge",
		spells: ["animal friendship", "fear", "speak with animals"],
		selection: ["animal friendship", "fear", "speak with animals"],
		firstCol: 1,
		times: 3
	},
	spellChanges: {
		"fear": {
			description: "All Beasts in a 30-foot Cone Wisdom save or drop held items and Frightened; Dash away; extra Wisdom save at end of turn if no line of sight",
			changes: "affects Beasts only",
		},
	},
};
MagicItemsList["ring of djinni summoning"] = {
	name: "Ring of Djinni Summoning",
	source: [["DMG2024", 292]],
	type: "ring",
	rarity: "legendary",
	magicItemTable: "?",
	description: "As a Magic action, you can summon a Djinni within 120 ft, remaining while I Concentrate, up to 1 hour. After that time, I can't summon it for 24 hours. It is friendly to me and my allies, obeys my commands, but takes no actions if not commanded to. The ring loses its magic If the Djinni dies.",
	descriptionFull: "While wearing this ring, you can take a Magic action to summon a particular Djinni from the Elemental Plane of Air. The Djinni appears in an unoccupied space you choose within 120 feet of yourself. It remains as long as you maintain Concentration, to a maximum of 1 hour, or until it drops to 0 Hit Points.\n While summoned, the Djinni is Friendly to you and your allies, and it obeys your commands. If you fail to command it, the Djinni defends itself against attackers but takes no other actions.\n After the Djinni departs, it can’t be summoned again for 24 hours, and the ring becomes nonmagical if the Djinni dies.\n Rings of Djinni Summoning are often created by the Djinn they summon and given to mortals as gifts of friendship or tokens of esteem.",
	attunement: true,
	usages: 1,
	recovery: "24 hours"
};
MagicItemsList["ring of elemental command"] = {
	name: "Ring of Elemental Command",
	source: [["DMG2024", "-"]],
	type: "ring",
	rarity: "legendary",
	magicItemTable: "?",
	description: "Select one of the four types of this ring, with each type being linked to one of the four Elemental Planes. Each Ring has Advantage on attack rolls against Elementals and they have Disadvatage on attack rolls against you, you can take a Magic action to try to compel an Elemental within 60 ft/ DC 18 WIS save; Charmed on fail.",
	descriptionFull: "This ring is linked to one of the four Elemental Planes. The GM chooses or randomly determines the linked plane.\n While wearing this ring, you have advantage on attack rolls against Elementals, and they have disadvantage on attack rolls against you. You can take a Magic action to try to compel an Elemental you see within 60-feet. The Elemental must make a DC18 WIS save or it has the Charmed condition until the start of your next turn. You determine its move and action on its next turn.\n In addition, you have access to properties based on the linked plane. The ring has 5 charges. It regains 1d4 + 1 expended charges daily at dawn. Spells cast from the ring have a save DC of 18.",
	attunement: true,
	allowDuplicates: true,
	action: ["action", "Compel Elemental"],
	usages: 5,
	recovery: "dawn",
	additional: "regains 1d4+1",
	choices: ["air", "earth", "fire", "water"],
	"air": {
		name: "Ring of Elemental Command (Air)",
		sortname: "Ring of Elemental Command, Air",
		description: "This ring has 5 charges and regains 1d4+1 daily at dawn. It grants you Advantage on attacks vs. Elementals and they have Disadvantage vs. you. You can cast Feather Fall, Wind Wall (1 Charge), Gust of Wind (2 Charges), and Chain Lighting (3 Charges). You have Resistance to Lightning damage. My Fly Speed equals my walking Speed and I can hover. I also know Auran.",
		descriptionFull: "This ring has 5 charges and regains 1d4+1 daily at dawn. It grants you Advantage on attacks vs. Elementals and they have Disadvantage vs. you. You can cast Feather Fall, Wind Wall (1 Charge), Gust of Wind (2 Charges), and Chain Lighting (3 Charges). You have Resistance to Lightning damage. My Fly Speed equals my walking Speed and I can hover. I also know Auran.",
		languageProfs: ["auran"],
		dmgres: ["lightning"],
		speed: { fly: { spd: "walk", enc: "walk" } },
		fixedDC: 18,
		spellFirstColTitle: "Ch",
		spellcastingBonus: [{
			name: "0 charges",
			spells: ["feather fall"],
			selection: ["feather fall"],
			firstCol: 0,
		}, {
			name: "1 charge",
			spells: ["wind wall"],
			selection: ["wind wall"],
			firstCol: 1,
		}, {
			name: "2 charges",
			spells: ["gust of wind"],
			selection: ["gust of wind"],
			firstCol: 2,
		}, {
			name: "3 charges",
			spells: ["chain lightning"],
			selection: ["chain lightning"],
			firstCol: 3,
		}],
		toNotesPage: [
			"Each Ring of Elemental Command is linked to one of the four Elemental Planes. The DM chooses or randomly determines the linked plane. For example, a Ring of Elemental Command (air) is linked to the Elemental Plane of Air.\n" +
			"Every Ring of Elemental Command has the following two properties:\n" +
			toUni("Elemental Bane") + ". While wearing the ring, you have Advantage on attack rolls against Elementals and they have Disadvantage on attack rolls against you.\n" +
			toUni("Elemental Compulsion") + ". While wearing the ring, you can take a Magic action to try to compel an Elemental you see within 60 feet of yourself. The Elemental makes a DC 18 Wisdom saving throw. On a failed save, the Elemental has the Charmed condition until the start your next turn, and you determine what it does with its move and action on its next turn.\n" +
			toUni("Elemental Focus") + ". While wearing the ring, you benefit from additional properties corresponding to the ring's linked Elemental Plane:\n" +
			"\u2022" + toUni("Air") + ". You know Auran, you have Resistance to Lightning damage, and you have a Fly Speed equal to your Speed and can hover.",
		],
	},
	"earth": {
		name: "Ring of Elemental Command (Earth)",
		sortname: "Ring of Elemental Command, Earth",
		description: "This ring has 5 charges and regains 1d4+1 daily at dawn. It grants you Advantage on attacks vs. Elementals and they have Disadvantage vs. you. You can cast Stone Shape (2 Charges), Stone Skin & Wall of Stone (3 Charges), Earthquake (5 Charges). You have Resistance to Acid damage. You can move through solid earth, rock, rocks are not Difficult Terrain for you and without disturbing the areas I pass. I also know Terran.",
		descriptionFull: "This ring has 5 charges and regains 1d4+1 daily at dawn. It grants you Advantage on attacks vs. Elementals and they have Disadvantage vs. you. You can cast Stone Shape (2 Charges), Stone Skin & Wall of Stone (3 Charges), Earthquake (5 Charges). You have Resistance to Acid damage. You can move through solid earth, rock, rocks are not Difficult Terrain for you and without disturbing the areas I pass. I also know Terran.",
		languageProfs: ["terran"],
		dmgres: ["acid"],
		fixedDC: 18,
		spellFirstColTitle: "Ch",
		spellcastingBonus: [{
			name: "2 charges",
			spells: ["stone shape"],
			selection: ["stone shape"],
			firstCol: 2,
		}, {
			name: "3 charges",
			spells: ["stoneskin", "wall of stone"],
			selection: ["stoneskin", "wall of stone"],
			times: 2,
			firstCol: 3,
		}, {
			name: "5 charges",
			spells: ["earthquake"],
			selection: ["earthquake"],
			firstCol: 5,
		}],
		toNotesPage: [
			"Each Ring of Elemental Command is linked to one of the four Elemental Planes. The DM chooses or randomly determines the linked plane. For example, a Ring of Elemental Command (Air) is linked to the Elemental Plane of Air.\n" +
			"Every Ring of Elemental Command has the following two properties:\n" +
			toUni("Elemental Bane") + ". While wearing the ring, you have Advantage on attack rolls against Elementals and they have Disadvantage on attack rolls against you.\n" +
			toUni("Elemental Compulsion") + ". While wearing the ring, you can take a Magic action to try to compel an Elemental you see within 60 feet of yourself. The Elemental makes a DC 18 Wisdom saving throw. On a failed save, the Elemental has the Charmed condition until the start your next turn, and you determine what it does with its move and action on its next turn.\n" +
			toUni("Elemental Focus") + ". While wearing the ring, you benefit from additional properties corresponding to the ring's linked Elemental Plane:\n" +
			"\u2022" + toUni("Earth") + ". You know Terran, and you have Resistance to Acid damage. Terrain composed of rubble, rocks, or dirt isn’t Difficult Terrain for you. In addition, you can move through solid earth or rock as if those areas were Difficult Terrain without disturbing the matter through which you pass. If you end your turn in solid earth or rock, you are shunted out to the nearest unoccupied space you last occupied.",
		],
	},
	"fire": {
		name: "Ring of Elemental Command (Fire)",
		sortname: "Ring of Elemental Command, Fire",
		description: "This ring has 5 charges and regains 1d4+1 daily at dawn. It grants me adv. on attacks vs. elementals aand they have disadv. vs. me. I can cast Burning Hands (1 Charge), Fireball (2 Charges), Wall of Fire (3 Charges), and Fire Storm (4 Charges). I have immunity to Fire damage. I also know Ignan.",
		descriptionFull: "This ring has 5 charges and regains 1d4+1 daily at dawn. It grants me adv. on attacks vs. elementals aand they have disadv. vs. me. I can cast Burning Hands (1 Charge), Fireball (2 Charges), Wall of Fire (3 Charges), and Fire Storm (4 Charges). I have immunity to Fire damage. I also know Ignan.",
		languageProfs: ["ignan"],
		savetxt: { immune: ["fire"] },
		fixedDC: 18,
		spellFirstColTitle: "Ch",
		spellcastingBonus: [{
			name: "1 charge",
			spells: ["burning hands"],
			selection: ["burning hands"],
			firstCol: 1,
		}, {
			name: "2 charges",
			spells: ["fireball"],
			selection: ["fireball"],
			firstCol: 2,
		}, {
			name: "3 charges",
			spells: ["wall of fire"],
			selection: ["wall of fire"],
			firstCol: 3,
		}, {
			name: "4 charges",
			spells: ["fire storm"],
			selection: ["fire storm"],
			firstCol: 4,
		}],
		toNotesPage: [
			"Each Ring of Elemental Command is linked to one of the four Elemental Planes. The DM chooses or randomly determines the linked plane. For example, a Ring of Elemental Command (air) is linked to the Elemental Plane of Air.\n" +
			"Every Ring of Elemental Command has the following two properties:\n" +
			toUni("Elemental Bane") + ". While wearing the ring, you have Advantage on attack rolls against Elementals and they have Disadvantage on attack rolls against you.\n" +
			toUni("Elemental Compulsion") + ". While wearing the ring, you can take a Magic action to try to compel an Elemental you see within 60 feet of yourself. The Elemental makes a DC 18 Wisdom saving throw. On a failed save, the Elemental has the Charmed condition until the start your next turn, and you determine what it does with its move and action on its next turn.\n" +
			toUni("Elemental Focus") + ". While wearing the ring, you benefit from additional properties corresponding to the ring's linked Elemental Plane:\n" +
			"\u2022" + toUni("Fire") + ". You know Ignan, and you have Immunity to Fire damage.",
		],
	},
	"water": {
		name: "Ring of Elemental Command (Water)",
		sortname: "Ring of Elemental Command, Water",
		description: "This ring has 5 charges and regains 1d4+1 daily at dawn. It grants me adv. on attacks vs. elementals aand they have disadv. vs. me. I can cast Create or Destroy Water (1 Charge), Ice Storm & Water Walk (2 Charges), Wall of Ice (3 Charges), and Tsunami (5 Charges). I gain a Swim Speed of 60 feet and can breathe underwater. I also know Aquan.",
		descriptionFull: "This ring has 5 charges and regains 1d4+1 daily at dawn. It grants me adv. on attacks vs. elementals aand they have disadv. vs. me. I can cast Burning Hands (1 Charge), Fireball (2 Charges), Wall of Fire (3 Charges), and Fire Storm (4 Charges). I have immunity to Fire damage. I also know Ignan.",
		languageProfs: ["aquan"],
		savetxt: { text: 'I can breathe underwater' },
		speed: { swim: 60 },
		fixedDC: 18,
		spellFirstColTitle: "Ch",
		spellcastingBonus: [{
			name: "1 charge",
			spells: ["create or destroy water"],
			selection: ["create or destroy water"],
			firstCol: 1,
		}, {
			name: "2 charges",
			spells: ["icestorm", "water walk"],
			selection: ["icestorm", "water walk"],
			times: 2,
			firstCol: 2,
		}, {
			name: "3 charges",
			spells: ["wall of ice"],
			selection: ["wall of ice"],
			firstCol: 3,
		}, {
			name: "5 charges",
			spells: ["tsunami"],
			selection: ["tsunami"],
			firstCol: 5,
		}],
		toNotesPage: [
			"Each Ring of Elemental Command is linked to one of the four Elemental Planes. The DM chooses or randomly determines the linked plane. For example, a Ring of Elemental Command (air) is linked to the Elemental Plane of Air.\n" +
			"Every Ring of Elemental Command has the following two properties:\n" +
			toUni("Elemental Bane") + ". While wearing the ring, you have Advantage on attack rolls against Elementals and they have Disadvantage on attack rolls against you.\n" +
			toUni("Elemental Compulsion") + ". While wearing the ring, you can take a Magic action to try to compel an Elemental you see within 60 feet of yourself. The Elemental makes a DC 18 Wisdom saving throw. On a failed save, the Elemental has the Charmed condition until the start your next turn, and you determine what it does with its move and action on its next turn.\n" +
			toUni("Elemental Focus") + ". While wearing the ring, you benefit from additional properties corresponding to the ring's linked Elemental Plane:\n" +
			"\u2022" + toUni("Water") + ". You know Aquan, you gain a Swim Speed of 60 feet, and you can breathe underwater.",
		],
	},
};
MagicItemsList["ring of evasion"] = {
	name: "Ring of Evasion",
	source: [["DMG2024", 293]],
	type: "ring",
	rarity: "rare",
	magicItemTable: "?",
	description: "This ring has 3 charges, and it regains 1d3 expended charges daily at dawn. As you reaction when I fail a Dexterity saving throw while wearing it, you can expend 1 of its charges to succeed on that saving throw instead.",
	descriptionFull: "This ring has 3 charges, and it regains 1d3 expended charges daily at dawn. When you fail a Dexterity saving throw while wearing it, you can use your reaction to expend 1 of its charges to succeed on that saving throw instead.",
	attunement: true,
	usages: 3,
	recovery: "dawn",
	additional: "regains 1d3",
	action: [["reaction", ""]]
};
MagicItemsList["ring of feather falling"] = {
	name: "Ring of Feather Falling",
	source: [["DMG2024", 293]],
	type: "ring",
	rarity: "rare",
	magicItemTable: "?",
	description: "When you fall while wearing this ring, you descend 60 ft per round and take no damage from falling.",
	descriptionFull: "When you fall while wearing this ring, you descend 60 feet per round and take no damage from falling.",
	attunement: true
};
MagicItemsList["ring of free action"] = {
	name: "Ring of Free Action",
	source: [["DMG2024", 293]],
	type: "ring",
	rarity: "rare",
	magicItemTable: "?",
	description: "While you wear this ring, Difficult Terrain doesn’t cost you extra movement. In addition, magic can neither reduce any of your Speeds nor cause you to have the Paralyzed or Restrained condition.",
	descriptionFull: "While you wear this ring, Difficult Terrain doesn’t cost you extra movement. In addition, magic can neither reduce any of your Speeds nor cause you to have the Paralyzed or Restrained condition.",
	attunement: true,
	savetxt: { immune: ["paralyzed (by magic)", "restrained (by magic)"] }
};
MagicItemsList["ring of invisibility"] = {
	name: "Ring of Invisibility",
	source: [["DMG2024", 293]],
	type: "ring",
	rarity: "legendary",
	magicItemTable: "?",
	description: "While wearing this ring, you can take a Magic action to give yourself the Invisible condition. You remain Invisible until the ring is removed or until you take a Bonus Action to become visible again.",
	descriptionFull: "While wearing this ring, you can take a Magic action to give yourself the Invisible condition. You remain Invisible until the ring is removed or until you take a Bonus Action to become visible again.",
	attunement: true,
	action: [["action", " (start)"], ["Bonus action", " (stop)"]]
};
MagicItemsList["ring of jumping"] = {
	name: "Ring of Jumping",
	source: [["DMG2024", 293]],
	type: "ring",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "While wearing this ring, you can cast Jump from it, but can target only yourself when you do so. This causes my Jump distance to triple for 1 minute.",
	descriptionFull: "While wearing this ring, you can cast Jump from it, but can target only yourself when you do so.",
	attunement: true,
	spellcastingBonus: {
		name: "Self Only",
		spells: ["jump"],
		selection: ["jump"],
		firstCol: "atwill"
	},
	spellChanges: {
		"jump": {
			time: "1 bns",
			range: "Self",
			changes: "The casting time is only a Bonus action instead of an action and it can only affect the wearer."
		}
	}
};
MagicItemsList["ring of mind shielding"] = {
	name: "Ring of Mind Shielding",
	source: [["DMG2024", 293]],
	type: "ring",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "This ring makes you immune to magic that allows others to read my thoughts, determine if I'm lying, know my alignment or creature type. Telepathy only works if I allow it. As a Magic action, I can cause it to become imperceptible as long as I wear it and not die, or perceptible again. If I die while wearing it, my soul enters it.",
	descriptionFull: "While wearing this ring, you are immune to magic that allows other creatures to read your thoughts, determine whether you are lying, know your alignment, or know your creature type. Creatures can telepathically communicate with you only if you allow it.\n   You can use Magic action to cause the ring to become imperceptible until you use another action to make it perceptible, until you remove the ring, or until you die.\n   If you die while wearing the ring, your soul enters it, unless it already houses a soul. You can remain in the ring or depart for the afterlife. As long as your soul is in the ring, you can telepathically communicate with any creature wearing it. A wearer can't prevent this telepathic communication.",
	attunement: true,
	action: [["action", "(im)perceptible"]],
	savetxt: { immune: ["magic reading my thoughts, truthfullness, alignment, or type"] }
};
MagicItemsList["ring of protection"] = {
	name: "Ring of Protection",
	source: [["DMG2024", 294]],
	type: "ring",
	rarity: "rare",
	magicItemTable: "?",
	description: "You gain a +1 bonus to AC and saving throws while wearing this ring.",
	descriptionFull: "You gain a +1 bonus to AC and saving throws while wearing this ring.",
	attunement: true,
	extraAC: [{ name: "Ring of Protection", mod: 1, magic: true, text: "+1 bonus to AC." }],
	addMod: [{ type: "save", field: "all", mod: 1, text: "+1 to ALL saving throws." }]
};
MagicItemsList["ring of regeneration"] = {
	name: "Ring of Regeneration",
	source: [["DMG2024", 294]],
	type: "ring",
	rarity: "very rare",
	magicItemTable: "?",
	description: "While wearing this ring, you regain 1d6 Hit Points every 10 minutes if you have at least 1 Hit Point. If you lose a body part, the ring causes the missing part to regrow and return to full functionality after 1d6 + 1 days if you have at least 1 Hit Point the whole time.",
	descriptionFull: "While wearing this ring, you regain 1d6 Hit Points every 10 minutes if you have at least 1 Hit Point. If you lose a body part, the ring causes the missing part to regrow and return to full functionality after 1d6 + 1 days if you have at least 1 Hit Point the whole time.",
	attunement: true
};
MagicItemsList["ring of resistance"] = {
	name: "Ring of Resistance",
	source: [["DMG2024", 294]],
	type: "ring",
	rarity: "rare",
	magicItemTable: "?",
	description: "You have Resistance to one damage type while wearing this ring. The gem in the ring indicates the type of damage.",
	descriptionFull: "You have Resistance to one damage type while wearing this ring. The gem in the ring indicates the type, which the GM chooses or determines randomly.\n\n" + toUni("d10\tDamage Type\tGem") +
		"\n   1\tAcid\t\tPearl" +
		"\n   2\tCold\t\tTourmaline" +
		"\n   3\tFire\t\tGarnet" +
		"\n   4\tForce\t\tSapphire" +
		"\n   5\tLightning   \tCitrine" +
		"\n   6\tNecrotic\t\tJet" +
		"\n   7\tPoison\t\tAmethyst" +
		"\n   8\tPsychic\t\tJade" +
		"\n   9\tRadiant\t\tTopaz" +
		"\n 10\tThunder\t\tSpinel",
	attunement: false,
	choices: ["Acid", "Cold", "Fire", "Force", "Lightning", "Necrotic", "Poison", "Psychic", "Radiant", "Thunder"],
	choicesNotInMenu: true,
	"acid": {
		name: "Ring of Acid Resistance",
		description: "While wearing this ring set with a Pearl and attuned to it, you have resistance to acid damage.",
		dmgres: ["Acid"]
	},
	"cold": {
		name: "Ring of Cold Resistance",
		description: "While wearing this ring set with a Tourmaline and attuned to it, you have resistance to cold damage.",
		dmgres: ["Cold"]
	},
	"fire": {
		name: "Ring of Fire Resistance",
		description: "While wearing this ring set with a Garnet and attuned to it, you have resistance to fire damage.",
		dmgres: ["Fire"]
	},
	"force": {
		name: "Ring of Force Resistance",
		description: "While wearing this ring set with a Sapphire and attuned to it, you have resistance to force damage.",
		dmgres: ["Force"]
	},
	"lightning": {
		name: "Ring of Lightning Resistance",
		description: "While wearing this ring set with a Citrine and attuned to it, you have resistance to lightning damage.",
		dmgres: ["Lightning"]
	},
	"necrotic": {
		name: "Ring of Necrotic Resistance",
		description: "While wearing this ring set with Jet and attuned to it, you have resistance to necrotic damage.",
		dmgres: ["Necrotic"]
	},
	"poison": {
		name: "Ring of Poison Resistance",
		description: "While wearing this ring set with an Amethyst and attuned to it, you have resistance to poison damage.",
		dmgres: ["Poison"]
	},
	"psychic": {
		name: "Ring of Psychic Resistance",
		description: "While wearing this ring set with Jade and attuned to it, you have resistance to psychic damage.",
		dmgres: ["Psychic"]
	},
	"radiant": {
		name: "Ring of Radiant Resistance",
		description: "While wearing this ring set with a Topaz and attuned to it, you have resistance to radiant damage.",
		dmgres: ["Radiant"]
	},
	"thunder": {
		name: "Ring of Thunder Resistance",
		description: "While wearing this ring set with a Spinel and attuned to it, you have resistance to thunder damage.",
		dmgres: ["Thunder"]
	}
};
// add spells for ring of shooting stars that are not in the spell lists
SpellsList["lightning spheres"] = {
	name: "Lightning Spheres",
	level: "2",
	school: "Conj",
	time: "1 a",
	range: "120 ft",
	components: "M\u0192",
	compMaterial: "Spells cast by magic items don't require any components other than the magic item itself.",
	duration: "Conc, 1 min",
	save: "Dex",
	description: "1-4 spheres; bns a move all 30 ft; 1st crea in 5 ft save or Lightning dmg (1:4d12, 2:5d4, 3:2d6, 4:2d4)",
	descriptionFull: "You can expend 2 charges from the Ring of Shooting Stars as a Magic action to create one to four 3-foot-diameter spheres of lightning. The more spheres you create, the less powerful each sphere is individually.\n   Each sphere appears in an unoccupied space you can see within 120 feet of you. The spheres last as long as you concentrate (as if concentrating on a spell), up to 1 minute. Each sphere sheds dim light in a 30-foot radius.\n   As a Bonus action, you can move each sphere up to 30 feet, but no farther than 120 feet away from you. When a creature other than you comes within 5 feet of a sphere, the sphere discharges lightning at that creature and disappears. That creature must make a DC 15 Dexterity saving throw. On a failed save, the creature takes lightning damage based on the number of spheres you created (1 sphere = 4d12, 2 spheres = 5d4, 3 spheres = 2d6, 4 sphere = 2d4).",
};
SpellsList["shooting stars"] = {
	name: "Shooting Stars",
	level: "0",
	school: "Evoc",
	time: "1 a",
	range: "60 ft",
	components: "M\u0192",
	compMaterial: "Spells cast by magic items don't require any components other than the magic item itself.",
	duration: "Conc, 1 min",
	save: "Dex",
	duration: "Instantaneous",
	description: "15ft cube in range per expended charge; all crea in cube Dex save or 5d4 Radiant damage, save halves",
	descriptionFull: "You can expend 1 to 3 charges from the ring of shooting starts as an action. For every charge you expend, you launch a glowing mote of light from the ring at a point you can see within 60 feet of you. Each creature within a 15-foot cube originating from that point is showered in sparks and must make a DC 15 Dexterity saving throw, taking 5d4 fire damage on a failed save, or half as much damage on a successful one.",
};
MagicItemsList["ring of shooting stars"] = {
	name: "Ring of Shooting Stars",
	source: [["DMG2024", 294]],
	type: "ring",
	rarity: "very rare",
	magicItemTable: "?",
	description: "This ring has 6 charges and it regains 1d6 expended charges daily at dawn. You can cast Dancing Lights and Light at will. You can expend charges to cast Faerie Fire (1 Charge), Lightning Spheres (2 Charges / Magic action), or Shooting Stars (1-3 Charges / Magic Action). All spells DC 15.",
	descriptionFull: "You can cast Dancing Lights or Light from the ring.  ring has 6 charges and regains 1d6 expended charges daily at dawn.\n" +
		toUni("Faerie Fire") + ". You can expend 1 charge as an action to cast Faerie Fire from the ring.\n   " + toUni("Lightning Spheres") + ". You can expend 2 charges as a Magic action to create up to four 3-foot-diameter spheres of lightning.\n " + "Each sphere appears in an unoccupied space you can see within 120 feet of yourself. The spheres last as long as you maintain Concentration, up to 1 minute. Each sphere sheds Dim Light in a 30-foot radius.\n" +
		"As a Bonus Action, you can move each sphere up to 30 feet, but no farther than 120 feet away from yourself. The first time the sphere comes within 5 feet of a creature other than you that isn’t behind Total Cover, the sphere discharges lightning at that creature and disappears. That creature makes a DC 15 Dexterity saving throw. On a failed save, the creature takes Lightning damage based on the number of spheres you created, as shown in the following table. On a successful save, the creature takes half as much damage.\n" +
		"\tNumber of Spheres\tLightning Damage\n " +
		"\t1\t4d12\n " +
		"\t2\t5d4\n " +
		"\t3\t2d6\n " +
		"\t4\t2d4\n " +
		toUni("Shooting Stars") + ". You can expend 1 to 3 charges as a Magic action. For every charge you expend, you launch a glowing mote of light from the ring at a point you can see within 60 feet of yourself. Each creature in a 15-foot Cube originating from that point is showered in sparks and makes a DC 15 Dexterity saving throw, taking 5d4 Radiant damage on a failed save or half as much damage on a successful one.",
	attunement: true,
	toNotesPage: [{
		name: "Lightning Spheres",
		page3notes: true,
		additional: "2 charges",
		note: [
			"As a Magic action, I can create 1-4 spheres of lightning of 3-ft diameter within 120 ft",
			"These last while I concentrate, up to 1 min; As a Bonus action, I can move them 30 ft",
			"When a creature (not me) comes within 5 ft of a sphere, it discharges and disappears",
			"The target must make a DC 15 Dex save or take lightning damage",
			"A sphere sheds dim light in 30-ft radius, its damage depends on the number created:",
			" \u2022 1 sphere: 4d12;    \u2022 2 spheres: 5d4;    \u2022 3 spheres: 2d6;    \u2022 4 spheres: 2d4"
		]
	}, {
		name: "Shooting Stars",
		page3notes: true,
		additional: "1-3 charges",
		note: [
			"As a Magic action, I can launch one mote of light per expended charge to a point within 60 ft",
			"All creatures within a 15-ft cube originating from those points take 5d4 \Radiant\ damage",
			"The targets can make a DC 15 Dexterity saving throw to halve the damage"
		]
	}],
	usages: 6,
	recovery: "dawn",
	additional: "regains 1d6",
	fixedDC: 15,
	spellFirstColTitle: "Ch",
	spellcastingBonus: [{
		name: "At will",
		spells: ["dancing lights", "light"],
		selection: ["dancing lights", "light"],
		firstCol: "atwill",
		times: 2
	}, {
		name: "1 charge",
		spells: ["faerie fire"],
		selection: ["faerie fire"],
		firstCol: 1
	}, {
		name: "Lighting Spheres (2 chr)",
		spells: ["lightning spheres"],
		selection: ["lightning spheres"],
		firstCol: 2
	}, {
		name: "Shooting stars (1-3 chr)",
		spells: ["shooting stars"],
		selection: ["shooting stars"],
		firstCol: "1+"
	}]
};
MagicItemsList["ring of spell storing"] = { // contains contributions by Fourleafclov
	name: "Ring of Spell Storing",
	source: [["DMG2024", 295]],
	type: "ring",
	rarity: "rare",
	magicItemTable: "?",
	description: "This ring can hold up to 5 levels of spell slots. Any creature can cast a spell into the ring using a 1-5th level spell slot, which is then stored if there is space. You can cast stored spells from the ring, freeing up space, using the original caster's attack bonus, save DC, spellcasting ability score, and the initial spell slot level.",
	descriptionFull: "This ring stores spells cast into it, holding them until the attuned wearer uses them. The ring can store up to 5 levels worth of spells at a time. When found, it contains 1d6-1 levels of stored spells chosen by the DM.\n   Any creature can cast a spell of 1st through 5th level into the ring by touching the ring as the spell is cast. The spell has no effect, other than to be stored in the ring. If the ring can't hold the spell, the spell is expended without effect. The level of the slot used to cast the spell determines how much space it uses.\n   While wearing this ring, you can cast any spell stored in it. The spell uses the slot level, spell save DC, spell attack bonus, and spellcasting ability of the original caster, but is otherwise treated as if you cast the spell. The spell cast from the ring is no longer stored in it, freeing up space.",
	attunement: true,
	usages: "5 lvls",
	recovery: " Cast"
};
MagicItemsList["ring of spell turning"] = {
	name: "Ring of Spell Turning",
	source: [["DMG2024", 295]],
	type: "ring",
	rarity: "legendary",
	magicItemTable: "?",
	description: "While wearing this ring, you have Advantage on saving throws against spells. If I succeed on the save of a spell level 7 or lower, the spell has no effect on me. If you were the only target, and it didn't create an area of affect, I can take a Reaction to deflect the spell back to the caster; against their own spell save DC.",
	descriptionFull: "While wearing this ring, you have Advantage on saving throws against spells. If you succeed on the save for a spell of level 7 or lower, the spell has no effect on you. If that spell targeted only you and didn’t create an area of effect, you can take a Reaction to deflect the spell back at the spell’s caster; the caster must make a saving throw against the spell using their own spell save DC.",
	attunement: true,
	savetxt: { adv_vs: ["spells"] }
};
MagicItemsList["ring of swimming"] = {
	name: "Ring of Swimming",
	source: [["DMG2024", 295]],
	type: "ring",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "I have a swimming speed of 40 feet while wearing this ring.",
	descriptionFull: "You have a swimming speed of 40 feet while wearing this ring.",
	speed: { swim: { spd: "fixed 40", enc: "fixed 30" } }
};
MagicItemsList["ring of telekinesis"] = {
	name: "Ring of Telekinesis",
	source: [["DMG2024", 295]],
	type: "ring",
	rarity: "very rare",
	magicItemTable: "?",
	description: "While wearing this ring, you can cast Telekinesis from it. After casting the spell, and as a Magic action you can exert my will on one creature or object you can see within 60 ft.",
	descriptionFull: "hile wearing this ring, you can cast Telekinesis from it. After casting the spell, and as a Magic action you can exert you will on one creature or object you can see within 60 ft. You can affect the same target, or choose a new one. You can try to move a creature Huge or smaller, the target must make a Strength save or it moves 30 feet in any direction within range, and the target is Restrained. If lifted in the air, it is suspended and falls at the end of your next turn unless this option is used again. If the target is an object, Huge or smaller, and is not worn or carried, you automatically move it 30ft in any direction within the spells range.",
	attunement: true,
	spellcastingBonus: {
		name: "At will",
		spells: ["telekinesis"],
		selection: ["telekinesis"],
		firstCol: "atwill"
	},
};
MagicItemsList["ring of the ram"] = {
	name: "Ring of the Ram",
	source: [["DMG2024", 296]],
	type: "ring",
	rarity: "rare",
	magicItemTable: "?",
	description: "This ring has 3 charges, regaining 1d3 charges daily at dawn. As Magic action, you can use charges to make a ranged attack on a target you can see within 60 ft, with a +7 to hit, doing 2d10 force damage per charge and pushing it away from you 5 ft. If I target an unattended object, you can try to break it with a +5 bonus per charge on the Strength check.",
	descriptionFull: "This ring has 3 charges, and it regains 1d3 expended charges daily at dawn. While wearing the ring, you can use a Magic action to expend 1 to 3 of its charges to attack one creature you can see within 60 feet of you. The ring produces a spectral ram's head and makes its attack roll with a +7 bonus. On a hit, for each charge you spend, the target takes 2d10 force damage and is pushed 5 feet away from you.\n   Alternatively, you can expend 1 to 3 of the ring's charges as a Magic action to try to break an object you can see within 60 feet of you that isn't being worn or carried. The ring makes a Strength check with a +5 bonus for each charge you spend.",
	attunement: true,
	action: [["action", "(ranged attack)"], ["action", "(break object)"]],
	usages: 3,
	recovery: "dawn",
	additional: "regains 1d3",
	weaponsAdd: ["Ring of the Ram"],
	weaponOptions: {
		regExpSearch: /^(?=.*ring)(?=.*ram).*$/i,
		name: "Ring of the Ram",
		source: [["DMG2024", "-"]],
		ability: 0,
		type: "Magic Item",
		damage: [2, 10, "force"],
		range: "60 ft",
		description: "Damage is per charge used, also pushes 5 ft away",
		abilitytodamage: false,
		modifiers: [7, ""]
	}
};
MagicItemsList["ring of three wishes"] = {
	name: "Ring of Three Wishes",
	source: [["DMG2024", 296]],
	type: "ring",
	rarity: "legendary",
	magicItemTable: "?",
	description: "While wearing this ring, you can expend 1 of its 3 charges to cast Wish from it. The ring becomes nonmagical when you use the last charge.",
	descriptionFull: "While wearing this ring, you can expend 1 of its 3 charges to cast Wish from it. The ring becomes nonmagical when you use the last charge.",
	usages: 3,
	recovery: "Never",
	spellFirstColTitle: "Ch",
	spellcastingBonus: {
		name: "1 charge",
		spells: ["wish"],
		selection: ["wish"],
		firstCol: 1
	}
};
MagicItemsList["ring of warmth"] = {
	name: "Ring of Warmth",
	source: [["DMG2024", 296]],
	type: "ring",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "While wearing this ring, Cold damage you receive is reduced by 2d8. Yourself and anything you carry are unharmed by temperatures as low as -50 \u00B0F.",
	descriptionFull: "While wearing this ring, Cold damage I receive is reduced by 2d8. In addition, you and everything you wear and carry are unharmed by temperatures as low as -50 degrees Fahrenheit.",
	attunement: true,
};
MagicItemsList["ring of water walking"] = {
	name: "Ring of Water Walking",
	source: [["DMG2024", 296]],
	type: "ring",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "While wearing this ring, I can stand on and move across any liquid surface as if it were solid ground.",
	descriptionFull: "While wearing this ring, you can stand on and move across any liquid surface as if it were solid ground.",
	spellcastingBonus: [{
		name: "At will",
		spells: ["water walk"],
		selection: ["water walk"],
		firstCol: "atwill",
	}]
};
MagicItemsList["ring of x-ray vision"] = {
	name: "Ring of X-ray Vision",
	source: [["DMG2024", 296]],
	type: "ring",
	rarity: "rare",
	magicItemTable: "?",
	description: "As a Magic action, you gain X-ray vision and can see into and through solid matter as if it is transparent and light passes through for 1 minute within 30 ft (1 ft stone, 1 inch metal, 3 ft wood/dirt, not lead). When you use this again before a long rest, you must make a DC 15 Constitution save or gain 1 level of exhaustion.",
	descriptionFull: "While wearing this ring, you can take a Magic action to gain X-ray vision with a range of 30 feet for 1 minute. To you, solid objects within that radius appear transparent and don’t prevent light from passing through them. The vision can penetrate 1 foot of stone, 1 inch of common metal, or up to 3 feet of wood or dirt. Thicker substances or a thin sheet of lead block the vision.\n   Whenever you use the ring again before taking a Long Rest, you must succeed on a DC 15 Constitution saving throw or gain 1 Exhaustion level.",
	attunement: true,
	action: [["action", "x-ray vision"]],
	usages: 1,
	recovery: "long rest",
	additional: "more uses: DC 15 Con save or gain 1 Exhaustion level"
};
MagicItemsList["rival coin"] = {
	name: "Rival Coin",
	source: [["DMG2024", 296]],
	type: "wondrous item",
	rarity: "common",
	magicItemTable: "?",
	description: "This coin has 1 charge, and regains expended charges at dawn. You can take a Magic action to toss the coin. Roll any die to determine if it lands on heads (even number) or tails (odd number). See Notes.",
	descriptionFull: "This coin has 1 charge, and regains expended charges at dawn. You can take a Magic action to toss the coin. Roll any die to determine if it lands on heads (even number) or tails (odd number). The roll determines the effect gained:" +
		"\n" +
		"\u2022 >>Heads<<: You target once creature you can see within 60 ft. The target makes a DC 13 Wisdom saving throw or take 2d4 Psychic damage and has Disadvantage on its next attack roll. On a successful save, the target takes 1d4 Psychic damage." +
		"\n" +
		"\u2022 >>Tails<<: You take 1d4 Psychic damage.",
	action: [["action", "CoinFlip"]],
	usages: 1,
	recovery: "dawn",
};
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
	],
	savetxt: "Adv. on sight-based Perception",
};
MagicItemsList["robe of scintillating colors"] = { // contains contributions by SoilentBrad
	name: "Robe of Scintillating Colors",
	source: [["DMG2024", 297]],
	type: "wondrous item",
	rarity: "very rare",
	magicItemTable: "?",
	description: "This robe has 3 charges, regaining 1d3 at dawn. As a Magic action, you can use 1 charge to shed a 30-ft radius Bright Light and an additional 30 ft Dim Light until the end of my next turn, causing all that see me to have Disadvantage on attacks against you. All within 30 ft that can see me at activation make a DC 15 Wisdom save or Stunned until effect ends.",
	descriptionFull: "This robe has 3 charges, and it regains 1d3 expended charges daily at dawn. While you wear it, you can take a Magic action and expend 1 charge to cause the garment to display a shifting pattern of dazzling hues until the end of your next turn. During this time, the robe sheds Bright Light in a 30-foot radius and Dim Light for an additional 30 feet, and creatures that can see you have Disadvantage on attack rolls against you. Any creature in the Bright Light that can see you when the robe’s power is activated must succeed on a DC 15 Wisdom saving throw or have the Stunned condition until the effect ends.",
	attunement: true,
	weight: 4,
	usages: 3,
	recovery: "dawn",
	additional: "regains 1d3",
	action: [["action", ""]]
};
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
			description: "8 darts hit creature(s) I can see for 1d4+1 Force dmg per dart",
			changes: "Magic Missile cast from the Robe of Stars is always at 5th-level."
		}
	}
};
MagicItemsList["robe of the archmagi"] = { // contains contributions by SoilentBrad
	name: "Robe of the Archmagi",
	source: [["DMG2024", 298]],
	type: "wondrous item",
	rarity: "legendary",
	magicItemTable: "?",
	description: "You gain these benefits while wearing the robe: if unarmored, AC is 15 + Dex mod; you have Advantage on saves against spells and magical effects; your spell save DC and spell attack bonus increase by 2.",
	descriptionFull: "This elegant garment is made from exquisite cloth and adorned with runes.\n You gain these benefits while wearing the robe:\n" + toUni("Armor") + ". If you aren't wearing armor, your base Armor Class is 15 + your Dexterity modifier.\n" + toUni("Magic Resistance") + ". You have Advantage on saving throws against spells and other magical effects.\n" + toUni("War Mage") + ". Your spell save DC and spell attack bonus each increase by 2.",
	attunement: true,
	prerequisite: "Requires attunement by a Sorcerer, Warlock, or Wizard",
	prereqeval: function (v) { return (classes.known.sorcerer || classes.known.warlock || classes.known.wizard) },
	weight: 4,
	savetxt: { adv_vs: ["spells", "magical effects"] },
	calcChanges: {
		spellCalc: [
			function (type, spellcasters, ability) {
				if (type != "prepare") return 2;
			},
			"While wearing the Robe of the Archmagi my spell save DC and spell attack bonus each increase by 2."
		]
	},
	addArmor: "Robe of the Archmagi",
	armorOptions: {
		regExpSearch: /^(?=.*robe)(?=.*(archmage|archmagi)).*$/i,
		name: "Robe of the Archmagi",
		source: [["DMG2024", "-"]],
		ac: 15 + What('Dex Mod'),
		weight: 4,
	},
};
MagicItemsList["robe of useful items"] = {
	name: "Robe of Useful Items",
	source: [["DMG2024", 298]],
	type: "wondrous item",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "You can take a Magic action to detach one of the many patches, causing it to become the object or creature it represents. It has two patches each of a Bullseye Lantern (filled and lit), Dagger, Mirror, Pole, Rope (coiled), Sack. In addition, it has 4d4 patches that are determined by the DM.",
	descriptionFull: "This robe has cloth patches of various shapes and colors covering it. While wearing the robe. you can take a Magic action to detach one of the patches, causing it to become the object or creature it represents. Once the last patch is removed, the robe becomes an ordinary garment.\n\nThe robe has two of each of the following patches:\n \u2022 Bullseye lantern (filled and lit)\n \u2022 Dagger\n \u2022 Mirror\n \u2022 Pole\n \u2022 Rope (coiled)\n \u2022 Sack\n\nIn addition, the robe has 4d4 other patches. The DM chooses the patches or determines them randomly.\n\n" + toUni("d100\tPatch") + "\n01-08\tBag of 100 gp\n09-15\tSilver coffer (1 foot long, 6 inches wide and deep) worth 500 gp\n16-22\tIron door (up to 10 feet wide and 10 feet high, barred on one side of your choice), which you can place in an opening you can reach; it conforms to fit the opening, attaching and hinging itself\n23-30\t10 gems worth 100 gp each\n31-44\tWooden ladder (24 feet long)\n45-51\tRiding Horse with Riding Saddle\n52-59\tOpen pit (a 10-foot cube), which you can place on the ground within 10 feet of you\n60-68\t4 Potions of Healing\n69-75\tRowboat (12 feet long)\n76-83\tSpell Scroll containing one spell of level 1,2, or 3 (your choice)\n84-90\t2 Mastiffs\n91-96\tWindow (2 feet by 4 feet, up to 2 feet deep), which you can place on a vertical surface you can reach\n97-00\tPortable Ram",
	weight: 4,
	action: ["action", ""]
};
MagicItemsList["rod of absorption"] = {
	name: "Rod of Absorption",
	source: [["DMG2024", 299]],
	type: "rod",
	rarity: "very rare",
	magicItemTable: "?",
	description: "While holding this rod, you can take a Reaction to absorb a spell that is targeting only you and doesn’t create an area of effect. It has no effect and its spell slot level is stored in the rod. You can expend these levels as if they are spell slots to power your own spells up to 5th-level. Once the rod has absorbed 50 levels, it can absorb no more.",
	descriptionLong: "As a reaction while holding this rod, I can use it to absorb a spell targeting only me and without an area of effect. The spell has no effect and its energy is stored in the rod. This energy has the same level as the spell when it was cast. Once the rod has absorbed 50 levels, it can absorb no more. I can expend these levels as if they are spell slots to power my own spells up to 5th-level and only for spell slot levels I have access to otherwise. For example, I can expend 3 levels to cast one of my spells using a 3rd-level spell slot. When the rod can't absorb any more levels and has no energy left, it becomes nonmagical.",
	descriptionFull: "While holding this rod, you can take a Reaction to absorb a spell that is targeting only you and doesn’t create an area of effect. The absorbed spell’s effect is canceled, and the spell’s energy—not the spell itself—is stored in the rod. The energy has the same level as the spell when it was cast. A canceled spell dissipates with no effect, and any resources used to cast it are wasted. The rod can absorb and store up to 50 levels of energy over the course of its existence. Once the rod absorbs 50 levels of energy, it can’t absorb more. If you are targeted by a spell that the rod can’t store, the rod has no effect on that spell.\n When you become attuned to the rod, you know how many levels of energy the rod has absorbed over the course of its existence and how many levels of spell energy it currently has stored.\n  If you are a spellcaster holding the rod, you can convert energy stored in it into spell slots to cast spells you have prepared or know. You can create spell slots only of a level equal to or lower than your own spell slots, up to a maximum of level 5. You use the stored levels in place of your slots but otherwise cast the spell as normal. For example, you can use 3 levels stored in the rod as a level 3 spell slot.\n   A newly found rod has 1d10 levels of spell energy stored in it already. A rod that can no longer absorb spell energy and has no energy remaining becomes nonmagical.",
	attunement: true,
	weight: 2,
	action: [["reaction", ""]],
	extraLimitedFeatures: [{
		name: "Rod of Absorption [Total Levels Absorbed]",
		usages: 50,
		recovery: "Never"
	}, {
		name: "Rod of Absorption [Stored Levels]",
		usages: "1d10",
		recovery: "Never"
	}],
};
MagicItemsList["rod of alertness"] = { // contains contributions by SoilentBrad
	name: "Rod of Alertness",
	source: [["DMG2024", 299]],
	type: "rod",
	rarity: "very rare",
	magicItemTable: "?",
	description: "While holding this rod, I have Advantage on Initiative and Wisdom (Perception) checks and can cast certain spells. As an Magic action once per dawn, I can plant it in the ground, making it shed 60-ft radius Bright Light, and Dim Light for another 60 ft for 10 min. In Bright Light, my allies and I gain +1 to AC and saveing throws, and can sense any Invisible creatures within the Bright Light.",
	descriptionFull: "This rod has the following properties.\n   " + toUni("Alertness") + ". While holding the rod, you have Advantage on Wisdom (Perception) checks and Initiative rolls.\n   " + toUni("Spells") + ". While holding the rod, you can cast one of the following spells from it: Detect Evil and Good, Detect Magic, Detect Poison and Disease, or See Invisibility.\n   " + toUni("Protective Aura") + ". As a Magic action, you can plant the haft end of the rod in the ground, whereupon the rod's head sheds Bright Light in a 60-foot radius and Dim Light for an additional 60 feet. While in that Bright Light, you and your allies gain a +1 bonus to AC and saving throws and can sense the location of any Invisible creature that is also in the Bright Light.\n   The rod's head stops glowing and the effect ends after 10 minutes or when a creature uses a Magic action to pull the rod from the ground. Once used, this property can't be used again until the next dawn.",
	attunement: true,
	weight: 2,
	usages: 1,
	recovery: "dawn",
	limfeaname: "Rod of Alertness (Plant in Ground)",
	advantages: [["Initiative", true], ["Perception", true]],
	vision: [["Bright Light: Sense Invisible", 0]],
	action: [["action", ""]],
	spellcastingBonus: [{
		name: "Robe of Alertness",
		spells: ["detect evil and good", "detect magic", "detect poison and disease", "see invisibility"],
		selection: ["detect evil and good", "detect magic", "detect poison and disease", "see invisibility"],
		times: 4
	}]
};
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
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/^(?=.*lordly)(?=.*might).*$/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + '+2d6 fire damage';
				}
			},
			'If I include the words "Lordly Might" in a the name of a sword, it will be treated as the magic weapon Flame Tongue. It adds +2d6 fire damage on a hit and shines light.'
		]
	}
};
MagicItemsList["rod of resurrection"] = {
	name: "Rod of Resurrection",
	source: [["DMG2024", 301]],
	type: "rod",
	rarity: "legendary",
	magicItemTable: "?",
	description: "This rod has 5 charges and regains 1 expended charge daily at dawn. While I hold it, I can expend 1 charge and cast Heal from it, or expend 5 charges and cast Resurrection from it. If the rod is reduced to 0 charges, roll a d20. On a 1, the rod disappears in a harmless burst of radiance.",
	descriptionFull: "The rod has 5 charges. While you hold it, you can expend charges to cast one of the following spells from it: Heal (expends 1 charge) or Resurrection (expends 5 charges).\n   The rod regains 1 expended charge daily at dawn. If the rod is reduced to 0 charges, roll a d20. On a 1, the rod disappears in a harmless burst of radiance.",
	attunement: true,
	weight: 2,
	usages: 5,
	recovery: "dawn",
	additional: "regains 1",
	spellFirstColTitle: "Ch",
	spellcastingBonus: [{
		name: "1 charge",
		spells: ["heal"],
		selection: ["heal"],
		firstCol: 1
	}, {
		name: "5 charges",
		spells: ["resurrection"],
		selection: ["resurrection"],
		firstCol: 5
	}],
};
MagicItemsList["rod of rulership"] = {
	name: "Rod of Rulership",
	source: [["DMG2024", 301]],
	type: "rod",
	rarity: "rare",
	magicItemTable: "?",
	description: "As a Magic action once per dawn, you can use this rod to have chosen creatures you can see within 120 ft make a DC 15 Wisdom saving throw or be Charmed by me for 8 hours. While charmed in this way, a target regards you as its trusted leader. It stops being charmed if my allies or I harm it or it is commanded to go against its nature.",
	descriptionFull: "You can use a Magic action to present the rod and command obedience from each creature of your choice that you can see within 120 feet of you. Each target must succeed on a DC 15 Wisdom saving throw or be charmed by you for 8 hours. While charmed in this way, the creature regards you as its trusted leader. If harmed by you or your companions, or commanded to do something contrary to its nature, a target ceases to be charmed in this way. The rod can't be used again until the next dawn.",
	attunement: true,
	weight: 2,
	action: [["action", ""]],
	usages: 1,
	recovery: "dawn"
};
MagicItemsList["rod of security"] = {
	name: "Rod of Security",
	source: [["DMG2024", 301]],
	type: "rod",
	rarity: "very rare",
	magicItemTable: "?",
	description: "As a Magic action once per 10 days, I can transport myself and up to 199 willing others I can see to a demiplane for 200 days divided by the number of creatures or until I end it as a Magic action. Creatures within the demiplane don't age, have enough to eat and drink, and regain HP every hour as if having spent 1 HD.",
	descriptionFull: "While holding this rod, you can take a Magic action to activate it. The rod then instantly transports you and up to 199 other willing creatures you can see to a demiplane. You choose the form the demiplane takes. It could be a tranquil garden, a cheery tavern, an immense palace, a tropical island, a fantastic carnival, or whatever else you can imagine. Regardless of its nature, the demiplane contains enough water and food to sustain its visitors, and the demiplane’s environment can’t harm its occupants. Everything else that can be interacted with there can exist only there. For example, a flower picked from a garden there disappears if it is taken outside the demiplane.\n   For each hour spent in the demiplane, a visitor regains Hit Points as if it had spent 1 Hit Point Die. Also, creatures don’t age while there, although time passes normally. Visitors can remain there for up to 200 days divided by the number of creatures present (round down).\n   When the time runs out or you take a Magic action to end the effect, all visitors reappear in the location they occupied when you activated the rod or an unoccupied space nearest that location. Once used, this property can’t be used again until 10 days have passed..",
	weight: 2,
	usages: 1,
	recovery: "10 days",
	action: [["action", "(de)activate"]]
};
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
	limfeaname: "Rod of the Pact Keeper (Warlock spell slot)",
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
MagicItemsList["rope of climbing"] = {
	name: "Rope of Climbing",
	source: [["DMG2024", 301]],
	type: "wondrous item",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "This 60-ft rope can hold 3000 lb. As a Magic action, you can hold one end of the rope and command its other end to: start/stop moving (10 ft per turn), (un)fasten itself, coil itself, or (un)knot itself (50 ft length, adv. to climb it). It has AC 20, 20 HP, heals 1 HP/5 min.",
	descriptionFull: "This 60-foot length of rope can hold up to 3,000 pounds. While holding one end of the rope, you can take a Magic action to command the other end of the rope to animate and move toward a destination you choose, up to the rope’s length away from you. That end moves 10 feet on your turn when you first command it and 10 feet at the start of each of your subsequent turns until reaching its destination or until you tell it to stop. You can also tell the rope to fasten itself securely to an object or to unfasten itself, to knot or unknot itself, or to coil itself for carrying.\n   If you tell the rope to knot, large knots appear at 1-foot intervals along the rope. While knotted, the rope shortens to a 50-foot length and grants Advantage on ability checks made to climb using the rope.\n   The rope has AC 20, HP 20, and Immunity to Poison and Psychic damage. It regains 1 Hit Point every 5 minutes as long as it has at least 1 Hit Point. If the rope drops to 0 Hit Points, it is destroyed.",
	weight: 3,
	action: [["action", " (animate)"]]
};
MagicItemsList["rope of entanglement"] = {
	name: "Rope of Entanglement",
	source: [["DMG2024", 301]],
	type: "wondrous item",
	rarity: "rare",
	magicItemTable: "?",
	description: "As a Magic action while you hold one end of this 30 ft rope and command the other end to cause a creature you can see within 20 ft to make a DC 15 Dex save or be Restrained by the rope. You can release it as a Bonus action or by letting your end of the rope go. The creature can, as an action, escape with a DC 15 Dex(Acrobatics)/Str(Athletics) check. The rope has AC 20, 20 HP, heals 1 HP/5 min.",
	descriptionFull: "This rope is 30 feet long. While holding one end of the rope, you can take a Magic action to command the other end to dart forward and entangle one creature you can see within 20 feet of yourself. The target must succeed on a DC 15 Dexterity saving throw or have the Restrained condition. You can release the target by letting go of your end of the rope (causing the rope to coil up in the target’s space) or by using a Bonus action to repeat the command (causing the rope to coil up in your hand).\n   A target Restrained by the rope can take an action to make its choice of a DC 15 Strength (Athletics) or Dexterity (Acrobatics) check. On a successful check, the target is no longer Restrained by the rope. If you’re still holding onto the rope when a target escapes from it, you can take a Reaction to command the rope to coil up in your hand; otherwise, the rope coils up in the target’s space.\n   The rope has AC 20, HP 20, and Immunity to Poison and Psychic damage. It regains 1 Hit Point every 5 minutes as long as it has at least 1 Hit Point. If the rope drops to 0 Hit Points, it is destroyed.",
	weight: 3,
	action: [["action", " (entangle)"], ["Bonus action", " (release)"]],
	weaponOptions: [{
		regExpSearch: /^(?=.*rope)(?=.*entanglement).*$/i,
		name: "Rope of Entanglement",
		source: [["DMG2024", 301]],
		ability: 0,
		type: "Magic Item",
		damage: ["Dex save", "", "Restrained"],
		range: "20 ft",
		description: "Dexterity saving throw or restrained; DC 15 Strength or Dexterity check to escape",
		abilitytodamage: false,
		weight: 3,
		modifiers: [7, 0],
		dc: true,
		isNotWeapon: true,
		isAlwaysProf: false,
	}]
};
MagicItemsList["rope of mending"] = {
	name: "Rope of Mending",
	source: [["DMG2024", 302]],
	magicItemTable: "?",
	type: "wondrous item",
	rarity: "common",
	description: "You can cut this 50-foot coil of rope into any number of smaller pieces, and then use a Magic action to cause the pieces to knit back together. The pieces must be in contact with each other and not otherwise in use. A rope of mending is forever shortened if a section of it is lost.",
	descriptionFull: "You can cut this 50-foot coil of rope into any number of smaller pieces, and then use a Magic action to cause the pieces to knit back together. The pieces must be in contact with each other and not otherwise in use. A rope of mending is forever shortened if a section of it is lost or destroyed.",
	action: [["action", ""]],
	weight: 10
};
MagicItemsList["ruby of the war mage"] = {
	name: "Ruby of the War Mage",
	source: [["DMG2024", 302]],
	magicItemTable: "?",
	type: "wondrous item",
	rarity: "common",
	description: "By pressing this 1-inch-diameter ruby etched with eldritch runes to a simple or martial weapon for 10 minutes, it attaches itself to the weapon. You can then use that weapon as a spellcasting focus. Once attached, it can't be removed unless my attunement ends, you detach it as a Magic action, or the weapon is destroyed.",
	descriptionFull: "Etched with eldritch runes, this 1-inch-diameter ruby allows you to use a simple or martial weapon as a spellcasting focus for your spells. For this property to work, you must attach the ruby to the weapon by pressing the ruby against it for at least 10 minutes. Thereafter, the ruby can't be removed unless you detach it as a Magic action or the weapon is destroyed. The ruby does fall off the weapon if your attunement to the ruby ends.",
	attunement: true,
	prerequisite: "Requires attunement by a spellcaster",
	prereqeval: function (v) { return v.isSpellcaster; }
};
