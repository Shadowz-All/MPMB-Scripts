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
			"Every Ring of Elemental Command has the following two properties:\n"+
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
	speed: { swim: { spd: "fixed 40", enc: "fixed 30" }}
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
MagicItemsList["saddle of the cavalier"] = {
	name: "Saddle of the Cavalier",
	source: [["DMG2024", 302]],
	type: "wondrous item",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "While in this saddle on a mount, I can't be dismounted against my will if I am conscious, and attack rolls against the mount have disadvantage.",
	descriptionFull: "While in this saddle on a mount, you can't be dismounted against your will if you're conscious, and attack rolls against the mount have disadvantage.",
	weight: 25
};
MagicItemsList["scarab of protection"] = {
	name: "Scarab of Protection",
	source: [["DMG2024", 302]],
	type: "wondrous item",
	rarity: "legendary",
	magicItemTable: "?",
	description: "This beetle-shaped medallion gives me advantage on saves against spells. If I fail a save against a necromancy spell or an effect from an undead creature, I can use my reaction to expend 1 charge and succeed on the save instead. The scarab has 12 charges and crumbles into powder when the last is used.",
	descriptionFull: "This beetle-shaped medallion provides three benefits while it is on your person:\n \u2022 Defense: You gain +1 AC.\n \u2022 Spell Resistance: You have advantage on saving throws against spells.\n \u2022 Preservation: The scarab has 12 charges. If you fail a saving throw against a necromancy spell or a harmful effect originating from an undead creature, you can use your reaction to expend 1 charge and turn the failed save into a successful one. The scarab crumbles into powder and is destroyed when its last charge is expended.",
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
	description: "I gain a +2 bonus to attack and damage rolls made with this magic weapon. In addition, I can make one attack with it as a Bonus action on each of my turns.",
	descriptionFull: "You gain a +2 bonus to attack and damage rolls made with this magic weapon. In addition, you can make one attack with it as a Bonus action on each of your turns.",
	attunement: true,
	weight: 3,
	action: [["Bonus action", ""]],
	weaponsAdd: ["Scimitar of Speed"],
	weaponOptions: {
		baseWeapon: "scimitar",
		regExpSearch: /^(?=.*scimitar)(?=.*speed).*$/i,
		name: "Scimitar of Speed",
		source: [["DMG2024", "-"]],
		description: "Finesse, light; Extra attack as Bonus action",
		modifiers: [2, 2]
	}
};
MagicItemsList["scroll of protection"] = {
	name: "Scroll of Protection",
	source: [["DMG2024", 302]],
	type: "scroll",
	rarity: "rare",
	magicItemTable: "?",
	description: "Once as an action, I can use this to make a 5-ft radius, 10-ft high invisible barrier around myself for 5 min that moves with me and stops a creature type from entering or affecting anything within. As an action, a creature can make a DC 15 Cha check to stop being affected.",
	descriptionFull: "Each scroll of protection works against a specific type of creature chosen by the DM or determined randomly by rolling on the following table.\n\n" + [
		toUni("d100\tCreature Type\td100\tCreature Type"),
		"01-10\tAberrations\t51-60\tFey",
		"11-15\tBeasts\t\t61-70\tFiends",
		"16-20\tCelestials   \t71-75\tGiants",
		"21-25\tConstructs   \t76-80\tMonstrosities",
		"26-35\tDragons\t81-85\tOozes",
		"36-45\tElementals\t86-90\tPlants",
		"46-50\tHumonoids\t91-00\tUndead",
	].join("\n") + "\nUsing an action to read the scroll encloses you in an invisible barrier that extends from you to form a 5-foot-radius, 10-foot-high cylinder. For 5 minutes, this barrier prevents creatures of the specified type from entering or affecting anything within the cylinder.\n   The cylinder moves with you and remains centered on you. However, if you move in such a way that an aberration would be inside the cylinder, the effect ends.\n   A creature can attempt to overcome the barrier by using an action to make a DC 15 Charisma check. On a success, the creature ceases to be affected by the barrier.",
	choices: ["Aberrations", "Beasts", "Constructs", "Celestials", "Dragons", "Elementals", "Humanoids", "Fey", "Fiends", "Giants", "Monstrosities", "Oozes", "Plants", "Undead"],
	"aberrations": {
		name: "Scroll of Protection from Aberrations",
		description: "Once as an action, I can use this to make a 5-ft radius, 10-ft high invisible barrier around myself for 5 min that moves with me and stops aberrations from entering or affecting anything within. As an action, a creature can make a DC 15 Cha check to stop being affected. If I move so that the barrier includes an aberration, it ends."
	},
	"beasts": {
		name: "Scroll of Protection from Beasts",
		description: "Once as an action, I can use this to make a 5-ft radius, 10-ft high invisible barrier around myself for 5 minutes that moves with me and stops beasts from entering or affecting anything within. As an action, a creature can make a DC 15 Charisma check to stop being affected. If I move so that the barrier includes a beast, it ends."
	},
	"celestials": {
		name: "Scroll of Protection from Celestials",
		description: "Once as an action, I can use this to make a 5-ft radius, 10-ft high invisible barrier around myself for 5 min that moves with me and stops celestials from entering or affecting anything within. As an action, a creature can make a DC 15 Cha check to stop being affected. If I move so that the barrier includes a celestial, it ends."
	},
	"constructs": {
		name: "Scroll of Protection from Constructs",
		description: "Once as an action, I can use this to make a 5-ft radius, 10-ft high invisible barrier around myself for 5 min that moves with me and stops constructs from entering or affecting anything within. As an action, a creature can make a DC 15 Cha check to stop being affected. If I move so that the barrier includes a construct, it ends."
	},
	"dragons": {
		name: "Scroll of Protection from Dragons",
		description: "Once as an action, I can use this to make a 5-ft radius, 10-ft high invisible barrier around myself for 5 min that moves with me and stops dragons from entering or affecting anything within. As an action, a creature can make a DC 15 Cha check to stop being affected. If I move so that the barrier includes a dragon, it ends."
	},
	"elementals": {
		name: "Scroll of Protection from Elementals",
		description: "Once as an action, I can use this to make a 5-ft radius, 10-ft high invisible barrier around myself for 5 min that moves with me and stops elementals from entering or affecting anything within. As an action, a creature can make a DC 15 Cha check to stop being affected. If I move so that the barrier includes an elemental, it ends."
	},
	"humanoids": {
		name: "Scroll of Protection from Humanoids",
		description: "Once as an action, I can use this to make a 5-ft radius, 10-ft high invisible barrier around myself for 5 min that moves with me and stops humanoids from entering or affecting anything within. As an action, a creature can make a DC 15 Cha check to stop being affected. If I move so that the barrier includes a humanoid, it ends."
	},
	"fey": {
		name: "Scroll of Protection from Fey",
		description: "Once as an action, I can use this to make a 5-ft radius, 10-ft high invisible barrier around myself for 5 minutes that moves with me and stops fey from entering or affecting anything within. As an action, a creature can make a DC 15 Charisma check to stop being affected. If I move so that the barrier includes a fey, it ends."
	},
	"fiends": {
		name: "Scroll of Protection from Fiends",
		description: "Once as an action, I can use this to make a 5-ft radius, 10-ft high invisible barrier around myself for 5 minutes that moves with me and stops fiends from entering or affecting anything within. As an action, a creature can make a DC 15 Charisma check to stop being affected. If I move so that the barrier includes a fiend, it ends."
	},
	"giants": {
		name: "Scroll of Protection from Giants",
		description: "Once as an action, I can use this to make a 5-ft radius, 10-ft high invisible barrier around myself for 5 min that moves with me and stops giants from entering or affecting anything within. As an action, a creature can make a DC 15 Cha check to stop being affected. If I move so that the barrier includes a giant, it ends."
	},
	"monstrosities": {
		name: "Scroll of Protection from Monstrosities",
		description: "Once as an action, I can use this to make a 5-ft radius, 10-ft high invisible barrier around myself for 5 min that moves with me and stops monstrosities from entering or affecting anything within. As an action, a creature can make a DC 15 Cha check to stop being affected. If I move so that the barrier includes a monstrosity, it ends."
	},
	"oozes": {
		name: "Scroll of Protection from Oozes",
		description: "Once as an action, I can use this to make a 5-ft radius, 10-ft high invisible barrier around myself for 5 min that moves with me and stops oozes from entering or affecting anything within. As an action, a creature can make a DC 15 Cha check to stop being affected. If I move so that the barrier includes an ooze, it ends."
	},
	"plants": {
		name: "Scroll of Protection from Plants",
		description: "Once as an action, I can use this to make a 5-ft radius, 10-ft high invisible barrier around myself for 5 minutes that moves with me and stops plants from entering or affecting anything within. As an action, a creature can make a DC 15 Charisma check to stop being affected. If I move so that the barrier includes a plant, it ends."
	},
	"undead": {
		name: "Scroll of Protection from Undead",
		description: "Once as an action, I can use this to make a 5-ft radius, 10-ft high invisible barrier around myself for 5 minutes that moves with me and stops undead from entering or affecting anything within. As an action, a creature can make a DC 15 Cha check to stop being affected. If I move so that the barrier includes a undead, it ends."
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
	description: "While I touch one of this pair of stones, I can use an action to cast Sending, targeting the bearer of the other stone. If no creature has the other stone, the spell won't cast. Once it is cast, neither stone can be used again until the next dawn. Sending allows each bearer to communicate up to 25 words to a creature you have met.",
	descriptionFull: "Sending stones come in pairs, with each smooth stone carved to match the other so the pairing is easily recognized. While you touch one stone, you can use an action to cast the Sending spell from it. The target is the bearer of the other stone. If no creature bears the other stone, you know that fact as soon as you use the stone and don't cast the spell.\n   Once Sending is cast through the stones, they can't be used again until the next dawn. If one of the stones in a pair is destroyed, the other one becomes nonmagical.",
	spellcastingBonus: [{
		name: "To other stone bearer only",
		spells: ["sending"],
		selection: ["sending"],
		firstCol: "oncelr"
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
	description: "While holding this shield, I have advantage on initiative rolls and Wisdom (Perception) checks. The shield is emblazoned with a symbol of an eye.",
	descriptionFull: "While holding this shield, you have advantage on initiative rolls and Wisdom (Perception) checks. The shield is emblazoned with a symbol of an eye.",
	weight: 6,
	shieldAdd: "Sentinel Shield",
	advantages: [["Initiative", true], ["Perception", true]],
	vision: [["Adv. on Perception checks", 0]]
};
MagicItemsList["shield, +1, +2, or +3"] = {
	name: "Shield, +1, +2, or +3",
	source: [["DMG2024", 303]],
	type: "shield",
	description: "While holding this shield, I have a bonus to AC. This bonus is in addition to the shield's normal bonus to AC. The bonus is determined by the rarity of the shield: uncommon (+1), rare (+2), or very rare (+3).",
	descriptionFull: "While holding this shield, you have a bonus to AC. This bonus is in addition to the shield's normal bonus to AC. The bonus is determined by the rarity of the shield: uncommon (+1), rare (+2), or very rare (+3).",
	allowDuplicates: true,
	choices: ["+1 Shield (uncommon)", "+2 Shield (rare)", "+3 Shield (very rare)"],
	"+1 shield (uncommon)": {
		name: "Shield +1",
		nameTest: "+1 Shield",
		rarity: "uncommon",
		magicItemTable: "?",
		description: "While holding this shield, I have a +1 bonus to AC. This bonus is in addition to the shield's normal bonus to AC.",
		allowDuplicates: true,
		shieldAdd: "+1 Shield"
	},
	"+2 shield (rare)": {
		name: "Shield +2",
		nameTest: "+2 Shield",
		rarity: "rare",
		magicItemTable: "?",
		description: "While holding this shield, I have a +2 bonus to AC. This bonus is in addition to the shield's normal bonus to AC.",
		allowDuplicates: true,
		shieldAdd: "+2 Shield"
	},
	"+3 shield (very rare)": {
		name: "Shield +3",
		nameTest: "+3 Shield",
		rarity: "very rare",
		magicItemTable: "?",
		description: "While holding this shield, I have a +3 bonus to AC. This bonus is in addition to the shield's normal bonus to AC.",
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
	description: "The front of this shield is shaped in the likeness of a face. As a Bonus action while bearing the shield, I can have the shield alter the expression of the face.",
	descriptionFull: "The front of this shield is shaped in the likeness of a face. While bearing the shield, you can use a Bonus action to alter the face's expression.",
	weight: 6,
	shieldAdd: "Shield of Expression",
	action: [["Bonus action", ""]]
};
MagicItemsList["shield of missile attraction"] = {
	name: "Shield of Missile Attraction",
	source: [["DMG2024", 304]],
	type: "shield",
	rarity: "rare",
	magicItemTable: "?",
	description: "While holding this shield, I have resistance to damage from ranged weapon attacks. Once attuned to it, I am cursed until I am the target of Remove Curse or similar magic. Whenever a ranged weapon attack is made against a target within 10 ft of me, the curse causes me to become the target instead.",
	descriptionFull: "While holding this shield, you have resistance to damage from ranged weapon attacks.\n   " + toUni("Curse") + ". This shield is cursed. Attuning to it curses you until you are targeted by the Remove Curse spell or similar magic. Removing the shield fails to end the curse on you. Whenever a ranged weapon attack is made against a target within 10 feet of you, the curse causes you to become the target instead.",
	attunement: true,
	weight: 6,
	shieldAdd: "Shield of Missile Attraction",
	cursed: true,
	dmgres: ["Ranged Weapons"]
};
MagicItemsList["shield of the cavalier"] = {
	name: "Shield of the Cavalier",
	source: [["DMG2024", "-"]],
	type: "shield",
	rarity: "very rare",
	magicItemTable: "?",
	description: "While holding this shield, I have a +2 bonus to AC. This bonus is in addition to the shield's normal bonus to AC.",
	descriptionFull: "While holding this shield, you have a +2 bonus to AC. This bonus is in addition to the shields normal bonus to AC. The Shield has additional properties that you can use while holding it." +
		"\n   " + toUni("Forceful Bash") + ". When you take the Attack action on your turn, you can replace one of your attacks using the Shielf, targeting one creature you can see within 5 feet of yourself. On a hit, the Shield deals 2d6 + 2 + Strength Modifier Force damage, and if the target is a creature, you push it up to 10-ft directly away from yourself. If the creature is your size or smaller, you can knock it Prone." +
		"\n   " + toUni("Protective Field") + ". As a Reaction, when you or an ally you can see within 5-ft of you is targeted by an attack or makes a saving throw against an area of effect, you can use the Shield to create an immobile 5-ft Emanation originating from you. Any creatures or objects not fully contained are pushed into the nearest unoccupied space outside it. The triggering attack or effect has no effect on creatures and objects inside the Emanation, which lasts as long as you maintain Concentration - up to 1 minute. Nothing can pass in or out of the Emanation. A creature or object inside the Emanation can't be damaged by attacks or effects originating from outside, nor can a creature inside the Emanation damage anthing outside of it. Once this property is used, it can't be used again until the next dawn.",
	attunement: true,
	weight: 6,
	shieldAdd: "Shield of the Cavalier +2",
	action: ["reaction", " Protective Field"],
	usages: 1,
	recovery: "dawn",
	additional: "Protective Field",
	weaponOptions: [{
		regExpSearch: /^(?=.*cavalier)(?=.*shield).*$/i,
		name: "Shield of the Cavalier Bash",
		source: [["DMG2024", "-"]],
		ability: 1,
		type: 'AlwaysProf',
		damage: ['2d6 + 2' + What('Str Mod'), '', 'force'],
		range: "Melee",
		description: "if target = crea push 10ft; if crea = your size or >, knock prone; substitute one attack roll on attack action.",
		isNotWeapon: true,
		modifiers: [What('Str Mod') + Number(How('Proficiency Bonus')),],
		selectNow: true
	}],
	toNotesPage: [{
		name: "Shield of the Cavelier",
		note: [
			"While holding this shield, you have a +2 bonus to AC. This bonus is in addition to the shields normal bonus to AC. The Shield has additional properties that you can use while holding it.\n" +
			"\n \u2022 Forceful Bash: When you take the Attack action on your turn, you can replace one of your attacks using the Shielf, targeting one creature you can see within 5 feet of yourself. On a hit, the Shield deals 2d6 + 2 + Strength Modifier Force damage, and if the target is a creature, you push it up to 10-ft directly away from yourself. If the creature is your size or smaller, you can knock it Prone.\n" +
			"\n \u2022 Protective Field: As a Reaction, when you or an ally you can see within 5-ft of you is targeted by an attack or makes a saving throw against an area of effect, you can use the Shield to create an immobile 5-ft Emanation originating from you. Any creatures or objects not fully contained are pushed into the nearest unoccupied space outside it. The triggering attack or effect has no effect on creatures and objects inside the Emanation, which lasts as long as you maintain Concentration - up to 1 minute. Nothing can pass in or out of the Emanation. A creature or object inside the Emanation can't be damaged by attacks or effects originating from outside, nor can a creature inside the Emanation damage anthing outside of it. Once this property is used, it can't be used again until the next dawn.",
		]
	}],
};
MagicItemsList["silvered weapon"] = {
	name: "Silvered Weapon",
	source: [["DMG2024", "-"]],
	type: "Weapon (simple or martial weapon)",
	rarity: "common",
	magicItemTable: "?",
	description: "When I score a Critical Hit against a creature that is shape-shifted, I deal one additional die of damage.",
	descriptionFull: "An alchemical process has bonded silver to this magic weapon. When you score a Critical Hit with it against a creature that is shape-shifted, the weapon deals one additional die of damage.",
	chooseGear: {
		type: "weapon",
		prefixOrSuffix: "brackets",
		descriptionChange: ["replace", "weapon"],
	},
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && !v.isSpell && (/silvered weapon/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + '+1 dmg die vs. shape-shifted';
				}
			},
			'If I include the words "Silvered Weapon" in a the name of a weapon, damage rolls with that weapon add 1 extra damage die to creature that are shape-shifted.'
		]
	}
};
MagicItemsList["slippers of spider climbing"] = {
	name: "Slippers of Spider Climbing",
	source: [["DMG2024", 304]],
	type: "wondrous item",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "While I wear these light shoes, I can move up, down, and across vertical surfaces and upside down along ceilings, while leaving my hands free. I have a climbing speed equal to my walking speed. However, the slippers don't allow me to move this way on a slippery surface, such as one covered by ice or oil.",
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
	description: "This viscous, milky-white substance is stored in a jar or flask, coated on the inside with oil of slipperiness. One ounce of the glue can cover a 1-ft square surface, taking 1 minute to set, and requires a Utilize action to use. Once it sets, the bond it creates can be broken only by universal solvent, oil of etherealness, or with a Wish spell.",
	descriptionFull: "This viscous, milky-white substance can form a permanent adhesive bond between any two objects. It must be stored in a jar or flask that has been coated inside with oil of slipperiness. When found, a container contains 1d6+1 ounces.\n   One ounce of the glue can cover a 1-foot square surface. The glue takes 1 minute to set. Once it has done so, the bond it creates can be broken only by the application of universal solvent or oil of etherealness, or with a Wish spell.",
	usages: "1d6+1",
	recovery: "Never"
};
MagicItemsList["spellguard shield"] = {
	name: "Spellguard Shield",
	source: [["DMG2024", 305]],
	type: "shield",
	rarity: "very rare",
	magicItemTable: "?",
	description: "While holding this shield, I have advantage on saving throws against spells and other magical effects, and spell attacks have disadvantage against me.",
	descriptionFull: "While holding this shield, you have advantage on saving throws against spells and other magical effects, and spell attacks have disadvantage against you.",
	attunement: true,
	weight: 6,
	shieldAdd: "Spellguard Shield",
	savetxt: { adv_vs: ["spells", "magical effects"] }
};
MagicItemsList["spell scroll"] = {
	name: "Spell Scroll",
	source: [["DMG2024", 305]],
	type: "scroll",
	description: "If the spell on this scroll is on my class' spell list(s), I can cast it with its normal casting time, but have the scroll crumble to dust. If the spell is of a higher level than I can cast, I need to make an ability check using my spellcasting ability. The DC for this, the spell save, and its attack modifier depend on its level.",
	descriptionFull: "A spell scroll bears the words of a single spell, written as a mystical cipher. If the spell is on your class's spell list, you can read the scroll and cast its spell without providing any material components. Otherwise, the scroll is unintelligible. Casting the spell by reading the scroll requires the spell's normal casting time. Once the spell is cast, the words on the scroll fade, and it crumbles to dust. If the casting is interrupted, the scroll is not lost.\n   If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC equals 10 + the spell's level. On a failed check, the spell disappears from the scroll with no other effect.\n   The level of the spell on the scroll determines the spell's saving throw DC and attack bonus, as well as the scroll's rarity, as shown below.\n\n" + toUni("Level\tRarity\t\tDC\tTo hit") + [
		"\nCantrip\tCommon  \t13\t+5",
		"1st  \tCommon  \t13\t+5",
		"2nd  \tUncommon\t13\t+5",
		"3rd  \tUncommon\t15\t+7",
		"4th  \tRare\t\t15\t+7",
		"5th  \tRare\t\t17\t+9",
		"6th  \tVery rare    \t17\t+9",
		"7th  \tVery rare    \t18\t+10",
		"8th  \tVery rare    \t18\t+10",
		"9th  \tLegendary  \t19\t+11"
	].join("\n") + "\n\nA wizard spell on a spell scroll can be copied just as spells in spellbooks can be copied. When a spell is copied from a spell scroll, the copier must succeed on an Intelligence (Arcana) check with a DC equal to 10 + the spell's level. If the check succeeds, the spell is successfully copied. Whether the check succeeds or fails, the spell scroll is destroyed.",
	allowDuplicates: true,
	calcChanges: {
		spellAdd: [
			function (spellKey, spellObj, spName) {
				if ((/^spell scroll/i).test(spName)) {
					if (!spellObj.components) spellObj.components = "";
					spellObj.components = (spellObj.components.replace(/,?[RM][\u0192\u2020]?/ig, '') + ",M\u0192").replace(/^,+/, '');
					spellObj.compMaterial = "Spells cast from a spell scroll don't require any material components other than the spell scroll itself.";
					spellObj.ritual = false;
					["description", "descriptionMetric", "descriptionShorter", "descriptionShorterMetric"].forEach(function (attr) {
						if (!spellObj[attr]) return;
						spellObj[attr] = spellObj[attr].replace(/ \(\d+k? ?gp( cons\.?)?\)/i, '');
					});
					return true;
				}
			},
			"When casting a spell using a Spell Scroll, no material components are needed other than the spell scroll itself. They also can't be cast as a ritual."
		]
	},
	choices: ["Cantrip", "1st-level", "2nd-level", "3rd-level", "4th-level", "5th-level", "6th-level", "7th-level", "8th-level", "9th-level", "mixed levels"],
	"cantrip": {
		name: "Spell Scroll (cantrip)",
		sortname: "Spell Scroll  (cantrip)",
		rarity: "common",
		magicItemTable: "?",
		description: "If the cantrip on this scroll is on my class' spell list(s), I can cast it, having the scroll crumble to dust afterwards. If I can't cast any cantrips, I need to make a DC 10 check with my spellcasting ability to use this scroll or it is destroyed if I fail. The cantrips is cast with DC 13 and a +5 attack modifier.",
		descriptionFull: "A spell scroll bears the words of a single spell, written as a mystical cipher. If the spell is on your class's spell list, you can read the scroll and cast its spell without providing any material components. Otherwise, the scroll is unintelligible. Casting the spell by reading the scroll requires the spell's normal casting time. Once the spell is cast, the words on the scroll fade, and it crumbles to dust. If the casting is interrupted, the scroll is not lost.\n   If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC equals 10. On a failed check, the spell disappears from the scroll with no other effect.\n   Once the spell is cast, the words on the scroll fade, and the scroll itself crumbles to dust.\n   A spell cast from this scroll has a save DC of 13 and an attack bonus of +5.",
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
		description: "If the 1st-level spell on this scroll is on my class' spell list(s), I can cast it, having the scroll crumble to dust afterwards. If the spell is of a level that I can't yet cast, I need to make a DC 11 check with my spellcasting ability to use this scroll or it is destroyed if I fail. The spell is cast with DC 13 and a +5 attack modifier.",
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
		description: "If the 2nd-level spell on this scroll is on my class' spell list(s), I can cast it, having the scroll crumble to dust afterwards. If the spell is of a level that I can't yet cast, I need to make a DC 12 check with my spellcasting ability to use this scroll or destroy it if I fail. The spell is cast with DC 13 and a +5 attack modifier.",
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
		description: "If the 3rd-level spell on this scroll is on my class' spell list(s), I can cast it, having the scroll crumble to dust afterwards. If the spell is of a level that I can't yet cast, I need to make a DC 13 check with my spellcasting ability to use this scroll or it is destroyed if I fail. The spell is cast with DC 15 and a +7 attack modifier.",
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
		description: "If the 4th-level spell on this scroll is on my class' spell list(s), I can cast it, having the scroll crumble to dust afterwards. If the spell is of a level that I can't yet cast, I need to make a DC 14 check with my spellcasting ability to use this scroll or it is destroyed if I fail. The spell is cast with DC 15 and a +7 attack modifier.",
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
		description: "If the 5th-level spell on this scroll is on my class' spell list(s), I can cast it, having the scroll crumble to dust afterwards. If the spell is of a level that I can't yet cast, I need to make a DC 15 check with my spellcasting ability to use this scroll or it is destroyed if I fail. The spell is cast with DC 17 and a +9 attack modifier.",
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
		description: "If the 6th-level spell on this scroll is on my class' spell list(s), I can cast it, having the scroll crumble to dust afterwards. If the spell is of a level that I can't yet cast, I need to make a DC 16 check with my spellcasting ability to use this scroll or it is destroyed if I fail. The spell is cast with DC 17 and a +9 attack modifier.",
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
		description: "If the 7th-level spell on this scroll is on my class' spell list(s), I can cast it, having the scroll crumble to dust afterwards. If the spell is of a level that I can't yet cast, I need to make a DC 17 check with my spellcasting ability to use this scroll or it is destroyed if I fail. The spell is cast with DC 18 and a +10 attack modifier.",
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
		description: "If the 8th-level spell on this scroll is on my class' spell list(s), I can cast it, having the scroll crumble to dust afterwards. If the spell is of a level that I can't yet cast, I need to make a DC 18 check with my spellcasting ability to use this scroll or it is destroyed if I fail. The spell is cast with DC 18 and a +10 attack modifier.",
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
		description: "If the 9th-level spell on this scroll is on my class' spell list(s), I can cast it, having the scroll crumble to dust afterwards. If the spell is of a level that I can't yet cast, I need to make a DC 19 check with my spellcasting ability to use this scroll or it is destroyed if I fail. The spell is cast with DC 19 and a +11 attack modifier.",
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
		description: "If the spell on this scroll is on my class' spell list, I can cast it, having the scroll crumble to dust afterwards. If the spell's level is higher than I can cast, I need to make a DC 10 + spell level check with my spellcasting ability, destroying it if I fail. The DC will be listed on the spell sheet's first column (spell attack = DC - 8).",
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
	description: "This 2-ft radius black sphere obliterates all matter it comes into contact with, except artifacts. Anything not wholly engulfed by it and destroyed takes 8d10 force damage. If I am within 60-ft of it, I can control it as an action with a DC 25 Arcana check, moving it 5 ft per my Int mod, or 10 ft towards me if I fail. See notes page for more details.",
	descriptionFull: "This 2-foot-diameter black sphere is a hole in the multiverse, hovering in space and stabilized by a magical field surrounding it.\n   The sphere obliterates all matter it passes through and all matter that passes through it. Artifacts are the exception. Unless an artifact is susceptible to damage from a sphere of annihilation, it passes through the sphere unscathed. Anything else that touches the sphere but isn't wholly engulfed and obliterated by it takes 8d10 force damage.\n   The sphere is stationary until someone controls it. If you are within 60 feet of an uncontrolled sphere, you can use a Magic action to make a DC 25 Intelligence (Arcana) check. On a success, the sphere levitates in one direction of your choice, up to a number of feet equal to 5 \xD7 your Intelligence modifier (minimum 5 feet). On a failure, the sphere moves 10 feet toward you. A creature whose space the sphere enters must succeed on a DC 19 Dexterity saving throw or be touched by it, taking 8d10 force damage.\n   If you attempt to control a sphere that is under another creature's control, you make an Intelligence (Arcana) check contested by the other creature's Intelligence (Arcana) check. The winner of the contest gains control of the sphere and can levitate it as normal.\n   If the sphere comes into contact with a planar portal, such as that created by the Gate spell, or an extradimensional space, such as that within a portable hole, the DM determines randomly what happens, using the following table.\n\n" + toUni("d100\tResult") + "\n01-50\tThe sphere is destroyed.\n51-85\tThe sphere moves through the portal or into the extradimensional space.\n86-00\tA spatial rift sends each creature and object within 180 feet of the sphere, including the sphere, to a random plane of existence.",
	action: [["action", ""]],
	toNotesPage: [{
		name: "Special Properties",
		note: [
			"This 2-ft-diameter black sphere is a hole in the multiverse, hovering in space and stabilized by a magical field surrounding it. It obliterates all matter it passes through and all matter that passes through it. Artifacts are the exception. Unless an artifact is susceptible to damage from a sphere of annihilation, it passes through the sphere unscathed. Anything else that touches the sphere but isn't wholly engulfed and obliterated by it takes 8d10 force damage.",
			"The sphere is stationary until someone controls it. If I am within 60 ft of an uncontrolled sphere, I can use an action to make a DC 25 Intelligence (Arcana) check. On a success, the sphere levitates in one direction of my choice, up to 5 ft \xD7 my Intelligence modifier (minimum 5 ft). On a failure, the sphere moves 10 ft toward me. A creature whose space the sphere enters must succeed on a DC 19 Dexterity saving throw or be touched by it, taking 8d10 force damage.",
			"If I attempt to control a sphere that is under another creature's control, I make an Intelligence (Arcana) check contested by the other creature's Intelligence (Arcana) check. The winner of the contest gains control of the sphere and can levitate it as normal.",
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
	description: "This board has 3 charges and regains 1 expended charge daily at dawn. While touching the planchette, you can take 1 minute to cast one of the spells on the table below.",
	descriptionFull: "This board has 3 charges and regains 1 expended charge daily at dawn. While touching the planchette, you can take 1 minute to cast one of the spells on the table below. The table indicates how many charges you must expend to cast the spell. As you cast the spell, you call on the spirits of the dead to guide the planchette across the board’s surface, answering your questions by pointing to the letters or words on the board.",
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
	description: "If I place a tiny object up to 1 lb above the tip of the staff while holding it, the object floats 1 inch from its tip and remains there until it is removed or until I no longer possess the staff. It can have up to three objects floating over its tip at any given time and I can make one or more objects slowly spin or turn in place.",
	descriptionFull: "If you place a tiny object weighing no more than 1 pound (such as a shard of crystal, an egg, or a stone) above the tip of the staff while holding it, the object floats an inch from the staff's tip and remains there until it is removed or until the staff is no longer in your possession. The staff can have up to three such objects floating over its tip at any given time. While holding the staff, you can make one or more of the objects slowly spin or turn in place.",
	weight: 4
};
MagicItemsList["staff of birdcalls"] = {
	name: "Staff of Birdcalls",
	source: [["DMG2024", 307]],
	magicItemTable: "?",
	type: "staff",
	rarity: "common",
	description: "This staff has 10 charges, regaining 1d6+4 at dawn, 5% chance it is destroyed when its last charge is used. As a Magic action, I can use 1 charge to create a sound out to a range of 60 ft: a finch's chirp, raven's caw, duck's quack, chicken's cluck, goose's honk, loon's call, turkey's gobble, seagull's cry, owl's hoot, or an eagle's shriek.",
	descriptionFull: "This wooden staff is decorated with bird carvings. It has 10 charges. While holding it, you can use an action to expend 1 charge from the staff and cause it to create one of the following sounds out to a range of 60 feet: a finch's chirp, a raven's caw, a duck's quack, a chicken's cluck, a goose's honk, a loon's call, a turkey's gobble, a seagull's cry, an owl's hoot, or an eagle's shriek.\n   The staff regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff explodes in a harmless cloud of bird feathers and is lost forever.",
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
	description: "This staff has 10 charges, regaining 1d8+2 at dawn. If an enchantment spell is cast only on me, I can use the staff to, once per dawn, turn a failed save into a success and as a reaction if I make the save, I can expend 1 charge to turn the spell back on its caster. I can expend 1 charge to cast Charm Person, Command, or Comprehend Languages using my spell save DC.",
	descriptionFull: "While holding this staff, you can use an action to expend 1 of its 10 charges to cast Charm Person, Command, or Comprehend Languages from it using your spell save DC. The staff can also be used as a magic quarterstaff.\n" +
		toUni("Resist Enchantment") + "\n If you are holding the staff and fail a saving throw against an enchantment spell that targets only you, you can turn your failed save into a successful one.You can't use this property of the staff again until the next dawn.\n" +
		toUni("Reflect Enchantment") + "\n If you succeed on a save against an enchantment spell that targets only you, with or without the staff's intervention, you can use your reaction to expend 1 charge from the staff and turn the spell back on its caster as if you had cast the spell.\n" +
		toUni("Regain Charges") + "\n The staff regains 1d8 + 2 expended charges daily at dawn.If you expend the last charge, roll a d20. On a 1, the staff becomes a nonmagical quarterstaff.",
	attunement: true,
	weight: 4,
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
	action: [["reaction", "reflect enchantment"]],
};
MagicItemsList["staff of fire"] = {
	name: "Staff of Fire",
	source: [["DMG2024", 307]],
	type: "staff",
	rarity: "very rare",
	magicItemTable: "?",
	description: "I have resistance to fire while I'm holding this staff. It has 10 charges, regaining 1d6+4 expended charges at dawn. If I use its last charge, roll a d20. On a 1, it is destroyed. I can use its charges to cast Burning Hands (1 charge), Fireball (3 charges), and Wall of Fire (4 charges), using my spellcasting ability.",
	descriptionFull: "You have resistance to fire damage while you hold this staff.\n   The staff has 10 charges. While holding it, you can use an action to expend 1 or more of its charges to cast one of the following spells from it, using your spell save DC: Burning Hands (1 charge), Fireball (3 charges), or Wall of Fire (4 charges).\n   The staff regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff blackens, crumbles into cinders, and is destroyed.",
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
	description: "This staff has 10 charges, regaining 1d6+4 at dawn, 5% chance it is destroyed when its last charge is used. As a Magic action, I can use 1 charge to cause a flower of my choice to sprout from a patch of earth or soil within 5 ft or from the staff itself. The flower is nonmagical and grows or withers as a normal flower would.",
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
	description: "I have resistance to cold while I'm holding this staff. It has 10 charges, regaining 1d6+4 at dawn. If I use its last charge, roll a d20. On a 1, it is destroyed. I can use its charges to cast Cone of Cold (5 charges), Fog Cloud (1 charge), Ice Storm (4 charges), and Wall of Ice (4 charges) using my spellcasting ability.",
	descriptionFull: "You have resistance to cold damage while you hold this staff.\n   The staff has 10 charges. While holding it, you can use an action to expend 1 or more of its charges to cast one of the following spells from it, using your spell save DC: Cone of Cold (5 charges), Fog Cloud (1 charge), Ice Storm (4 charges), or Wall of Ice (4 charges).\n   The staff regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1. the staff turns to water and is destroyed.",
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
	description: "This staff has 10 charges, regaining 1d6+4 expended charges at dawn. If I use its last charge, roll a d20. On a 1, it vanishes in a flash of light. I can use its charges to cast Cure Wounds (1 charge per spell level, up to 4th), Lesser Restoration (2 charges), and Mass Cure Wounds (5 charges) using my spellcasting ability.",
	descriptionFull: "This staff has 10 charges. While holding it, you can use an action to expend 1 or more of its charges to cast one of the following spells from it, using your spell save DC and spellcasting ability modifier: Cure Wounds (1 charge per spell level, up to 4th), Lesser Restoration (2 charges), or Mass Cure Wounds (5 charges).\n" +
		"\n The staff regains 1d6 + 4 expended charges daily at dawn.If you expend the last charge, roll a d20.On a 1. the staff vanishes in a flash of light, lost forever.",
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
	description: "While holding this +2 quarterstaff, I gain a +2 bonus on saves, AC, and spell attacks. The staff has 20 charges, regaining 2d8+4 at dawn. As a Magic action I can break it, causing a 30-ft radius explosion.",
	descriptionLong: "While holding this staff, I gain a +2 bonus on saves, AC, and spell attacks. The staff has 20 charges, regaining 2d8+4 at dawn. If I use the last charge, roll a d20. On a 1, it converts to a +2 quarterstaff without other abilities. On a 20, it regains 1d8+2 charges. As an action, I can break it so it explodes. When it explodes, there is a 50% chance I teleport to a random plane, otherwise I take 16\xD7 the charges left in force damage. All within 10 ft take 8\xD7, 20 ft 6\xD7, and 30 ft 4\xD7; DC 17 Dex save halves.",
	descriptionFull: "This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While holding it, you gain a +2 bonus to Armor Class, saving throws, and spell attack rolls.\n   The staff has 20 charges for the following properties. The staff regains 2d8+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff retains its +2 bonus to attack and damage roll but loses all other properties. On a 20, the staff regain 1d8+2 charges.\n   " + toUni("Spells") + ". While holding this staff, you can use an action to expend 1 or more of its charges to cast one of the following spells from it, using your spell save DC and spell attack bonus: Cone of Cold (5 charges), Fireball (5th-level version, 5 charges), Globe of Invulnerability (6 charges), Hold Monster (5 charges), Levitate (2 charges). Lightning Bolt (5th-level version, 5 charges), Magic Missile (1 charge), Ray of Enfeeblement (1 charge), or Wall of Force (5 charges).\n   " + toUni("Retributive Strike") + ". You can use an action to break the staff over your knee or against a solid surface, performing a retributive strike. The staff is destroyed and releases its remaining magic in an explosion that expands to fill a 30-foot-radius sphere centered on it.\n   You have a 50% chance to instantly travel to a random plane of existence, avoiding the explosion. If you fail to avoid the effect, you take force damage equal to 16 \xD7 the number of charges in the staff. Every other creature in the area must make a DC 17 Dexterity saving throw. On a failed save, a creature takes an amount of damage based on how far away it is from the point of origin, as shown in the following table. On a successful save, a creature takes half as much damage.\n\n" + toUni("Distance from Origin\tEffect") + "\n10 ft. away or closer\t8 \xD7 the number of charges in the staff\n11 to 20 ft. away\t6 \xD7 the number of charges in the staff\n21 to 30 ft. away\t4 \xD7 the number of charges in the staff",
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
		description: "Versatile (1d8); On hit, 1 charge for +1d6 force damage",
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
	description: "This staff function as a +3 quarterstaff and has 10 charges, regaining 1d6+4 at dawn. There is a 5% chance that expending the last charge makes it nonmagical. When I hit with a melee attack using it, I can expend up to 3 of its charges. For each charge I expend, the target takes an extra 1d6 force damage.",
	descriptionFull: "This staff can be wielded as a magic quarterstaff that grants a +3 bonus to attack and damage rolls made with it.\n   The staff has 10 charges. When you hit with a melee attack using it, you can expend up to 3 of its charges. For each charge you expend, the target takes an extra 1d6 force damage. The staff regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff becomes a nonmagical quarterstaff.",
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
		description: "Versatile (1d8); On hit, 1-3 charges for +1d6 force damage per charge"
	}
};
MagicItemsList["staff of swarming insects"] = {
	name: "Staff of Swarming Insects",
	source: [["DMG2024", 309]],
	type: "staff",
	rarity: "rare",
	magicItemTable: "?",
	description: "This staff has 10 charges, regaining 1d6+4 at dawn, 5% chance it is destroyed when its last charge is used. As a Magic action, I can expend 1 charge to create a 30-ft radius swarm of flying insects for 10 minutes that moves with me, making the area heavily obscured for anybody but me. A 10+ mph wind disperses it.",
	descriptionFull: "This staff has 10 charges and regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, a swarm of insects consumes and destroys the staff, then disperses.\n   " + toUni("Spells") + ". While holding the staff, you can use an action to expend some of its charges to cast one of the following spells from it, using your spell save DC: Giant Insect (4 charges) or Insect Plague (5 charges).\n   " + toUni("Insect Cloud") + ". While holding the staff, you can use a Magic action and expend 1 charge to cause a swarm of harmless flying insects to spread out in a 30-foot radius from you. The insects remain for 10 minutes, making the area heavily obscured for creatures other than you. The swarm moves with you, remaining centered on you. A wind of at least 10 miles per hour disperses the swarm and ends the effect.",
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
	description: "As a Bonus action, I can animate its snake head for 1 minute or make it inanimate again. While animated, I can use it in melee (1d6 piercing + DC 15 Con save or 3d6 poison), but it can be attacked and has AC 15 and 20 HP (full every time). If it reaches 0 HP, the staff is destroyed.",
	descriptionFull: "You can use a Bonus action to speak this staff's command word and make the head of the staff become that of an animate poisonous snake for 1 minute. By using another Bonus action to speak the command word again, you return the staff to its normal inanimate form.\n   You can make a melee attack using the snake head, which has a reach of 5 feet. Your proficiency bonus applies to the attack roll. On a hit, the target takes 1d6 piercing damage and must succeed on a DC 15 Constitution saving throw or take 3d6 poison damage.\n   The snake head can be attacked while it is animate. It has an Armor Class of 15 and 20 hit points. If the head drops to 0 hit points, the staff is destroyed. As long as it's not destroyed, the staff regains all lost hit points when it reverts to its inanimate form.",
	attunement: true,
	weight: 4,
	action: [["Bonus action", " (animate/end)"]],
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
		description: "DC 15 Con save or 3d6 poison damage",
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
	description: "While holding this +2 quarterstaff, I have adv. on saves vs. spells and +2 on spell attacks. The staff has 50 charges to cast spells, regaining 4d6+2 at dawn. As a reaction, I can absorb a spell targeting only me, converting its spell level to charges. If this brings it over 50 charges or I break it is as an action, it explodes.",
	descriptionLong: "While holding this staff I have a +2 to spell attacks, adv. on saving throws vs. spells, and can be used as a +2 quarterstaff. The staff has 50 charges (4d6+2 at dawn) to cast spells. When the last charge is used, it has a 5% chance to regain 1d12+1 charges. I can use a reaction to absorb a spell targeting only me, converting its spell level to charges. If that brings the staff over 50 charges or I use an action to break it, it explodes. If it explodes, there is a 50% chance I teleport to a random plane, otherwise I take 16\xD7 the charges left in force damage. All within 10 ft take 8\xD7, 20 ft 6\xD7, and 30 ft 4\xD7; DC 17 Dex save halves.",
	descriptionFull: "This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While you hold it, you gain a +2 bonus to spell attack rolls.\n   The staff has 50 charges for the following properties. It regains 4d6+2 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 20, the staff regains 1d12+1 charges.\n   " + toUni("Spell Absorption") + ". While holding the staff, you have advantage on saving throws against spells. In addition, you can use your reaction when another creature casts a spell that targets only you. If you do, the staff absorbs the magic of the spell, canceling its effect and gaining a number of charges equal to the absorbed spell's level. However, if doing so brings the staff's total number of charges above 50, the staff explodes as if you activated its retributive strike (see below).\n   " + toUni("Spells") + ". While holding the staff, you can use an action to expend some of its charges to cast one of the following spells from it, using your spell save DC and spellcasting ability: Conjure Elemental (7 charges), Dispel Magic (3 charges), Fireball (7th-level version, 7 charges), Flaming Sphere (2 charges), Ice Storm (4 charges), Invisibility (2 charges), Knock (2 charges), Lightning Bolt (7th-level version, 7 charges), Passwall (5 charges), Plane Shift (7 charges), Telekinesis (5 charges), Wall of Fire (4 charges), or Web (2 charges).\n   You can also use an action to cast one of the following spells from the staff without using any charges: Arcane Lock, Detect Magic, Enlarge/Reduce, Light, Mage Hand, or Protection from Evil and Good.\n   " + toUni("Retributive Strike") + ". You can use a Magic action to break the staff over your knee or against a solid surface, performing a retributive strike. The staff is destroyed and releases its remaining magic in an explosion that expands to fill a 30-foot-radius sphere centered on it.\n   You have a 50% chance to instantly travel to a random plane of existence, avoiding the explosion. If you fail to avoid the effect, you take force damage equal to 16 \xD7 the number of charges in the staff. Every other creature in the area must make a DC 17 Dexterity saving throw. On a failed save, a creature takes an amount of damage based on how far away it is from the point of origin, as shown in the following table. On a successful save, a creature takes half as much damage.\n\n" + toUni("Distance from Origin\tDamage") + "\n10 ft. away or closer\t8 \xD7 the number of charges in the staff\n11 to 20 ft. away\t\t6 \xD7 the number of charges in the staff\n21 to 30 ft. away\t\t4 \xD7 the number of charges in the staff",
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
		spells: ["light", "mage hand", "arcane lock", "detect magic", "enlarge/reduce", "protection from evil and good"],
		selection: ["light", "mage hand", "arcane lock", "detect magic", "enlarge/reduce", "protection from evil and good"],
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
	description: "As a Magic action, I can throw this staff to an unoccupied space within 10 feet, transforming it to a Giant Constrictor Snake. It shares my initiative and takes its turn immediately after me. I can command it mentally on my turn if within 60 ft. As a Bonus action, I can command it to revert back to a staff. If the snake reaches 0 HP, the staff is destroyed.",
	descriptionLong: "As a Magic action, I can throw the staff to an unoccupied space within 10 ft where it becomes a giant constrictor snake. It shares my initiative and takes its turn immediately after me. As a Bonus action, I can have it revert to its staff form. On my turn, I can mentally command the snake if it is within 60 ft of me and I'm not incapacitated, deciding what it does on its next turn or a more general command. If the snake is reduced to 0 HP, it dies, reverts to its staff form, and the staff then shatters and is destroyed. Otherwise, the snake always starts out with full HP.",
	descriptionFull: "You can use a Magic action to throw the staff to an unoccupied space within 10 feet. The staff becomes a giant constrictor snake under your control, shares your initiative and takes its turn immediately after you. You can use a Bonus action to return the staff to its normal form in a space formerly occupied by the snake.\n   On your turn, you can mentally command the snake if it is within 60 feet of you and you aren't incapacitated. You decide what action the snake takes and where it moves during its next turn, or you can issue it a general command, such as to attack your enemies or guard a location.\n   If the snake is reduced to 0 hit points, it dies and reverts to its staff form. The staff then shatters and is destroyed. If the snake reverts to staff form before losing all its hit points, it regains all of them.",
	attunement: true,
	weight: 4,
	action: [["action", " (animate)"], ["Bonus action", " (end)"]]
};
MagicItemsList["staff of the woodlands"] = {
	name: "Staff of the Woodlands",
	source: [["DMG2024", 311]],
	type: "staff",
	rarity: "rare",
	magicItemTable: "?",
	description: "This +2 quarterstaff gives me a +2 bonus on spell attacks, as well as allowes me to cast multiple spells from it. It has 6 charges, regaining 1d6 at dawn, 5% chance of losing its magic when its last charge is used. As a Magic action, I can plant it into the ground and expend 1 charge to have it grow into a 60 ft tree, which it remains until I use another Magic action to revert it back.",
	descriptionFull: "This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While holding it, you have a +2 bonus to spell attack rolls.\n   The staff has 6 charges for the following properties. It regains 1d6 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff loses its properties and becomes a nonmagical quarterstaff.\n   " + toUni("Spells") + ". You can use an action to expend 1 or more of the staff's charges to cast one of the following spells from it, using your spell save DC: Animal Friendship (1 charge), Awaken (5 charges), Barkskin (2 charges), Locate Animals or Plants (2 charges), Pass Without Trace (2 charges), Speak with Animals (1 charge), Speak with Plants (3 charges), or Wall of Thorns (6 charges).\n   You can also use an action to cast the Pass Without Trace spell from the staff without using any charges.\n   " + toUni("Tree Form") + ". You can use an action to plant one end of the staff in fertile earth and expend 1 charge to transform the staff into a healthy tree. The tree is 60 feet tall and has a 5-foot-diameter trunk, and its branches at the top spread out in a 20-foot radius. The tree appears ordinary but radiates a faint aura of transmutation magic if targeted by Detect Magic. While touching the tree and using another action to speak its command word, you return the staff to its normal form. Any creature in the tree falls when it reverts to a staff.",
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
	description: "This +2 quarterstaff has 5 special abilities that each can be used once per dawn. Both 'Lightning' and 'Thunder' can be used when I hit a melee attack with it; while 'Lightning Strike'and 'Thunder and Lightning' require an action to use; 'Thunderclap requires a Bonus action'. See the Notes page for what all of these abilities entail.",
	descriptionFull: "This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. It also has the following additional properties. When one of these properties is used, it can't be used again until the next dawn.\n   " + toUni("Lightning") + ". When you hit with a melee attack using the staff, you can cause the target to take an extra 2d6 lightning damage.\n   " + toUni("Thunder") + ". When you hit with a melee attack using the staff, you can cause the staff to emit a crack of thunder, audible out to 300 feet. The target you hit must succeed on a DC 17 Constitution saving throw or become stunned until the end of your next turn.\n   " + toUni("Lightning Strike") + ". You can take a Magic action to cause a bolt of lightning to leap from the staff's tip in a line that is 5 feet wide and 120 feet long. Each creature in that line must make a DC 17 Dexterity saving throw, taking 9d6 lightning damage on a failed save, or half as much damage on a successful one.\n   " + toUni("Thunderclap") + ". You can take a Magic action to cause the staff to issue a deafening thunderclap, audible out to 600 feet. Each creature a within 60 feet emanation origination from you (not including you) must make a DC 17 Constitution saving throw. On a failed save, a creature takes 2d6 thunder damage and becomes deafened for 1 minute. On a successful save, a creature takes half damage and isn't deafened.\n   " + toUni("Thunder and Lightning") + ". You can take a Bonus action to use the Lightning Strike and Thunderclap properties at the same time. Doing so doesn't expend the daily use of those properties, only the use of this one.",
	attunement: true,
	weight: 4,
	action: [["action", "Staff of T\u0026L (Lightning Strike, Thunderclap, both)"]],
	weaponsAdd: ["Staff of Thunder and Lightning"],
	weaponOptions: {
		baseWeapon: "quarterstaff",
		regExpSearch: /staff of thunder and lighting/i,
		name: "Staff of Thunder and Lightning",
		source: [["SRD", 245], ["D", 204]],
		description: "Versatile (1d8); Lightning: 1\xD7 per dawn, +2d6 lightning damage; Thunder: 1\xD7 per dawn DC 17 Con save or 1 round stunned",
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
			" \u2022 Lightning. When I hit with a melee attack using the staff, I can cause the target to take an extra 2d6 lightning damage.",
			" \u2022 Thunder. When I hit with a melee attack using the staff, I can cause the staff to emit a crack of thunder, audible out to 300 ft. The target must succeed on a DC 17 Constitution saving throw or become stunned until the end of my next turn.",
			" \u2022 Lightning Strike. As a Magic action, I can cause a bolt of lightning to leap from the staff's tip in a line that is 5 ft wide and 120 ft long. Each creature in that line must make a DC 17 Dexterity saving throw, taking 9d6 lightning damage on a failed save, or half as much damage on a successful one.",
			" \u2022 Thunderclap. As a Magic action, I can cause the staff to issue a deafening thunderclap, audible out to 600 ft. Each creature within 60 ft of me, excluding myself, must make a DC 17 Constitution saving throw or take 2d6 thunder damage and becomes deafened for 1 minute. On a successful save, a creature takes half damage and isn't deafened.",
			" \u2022 Thunder and Lightning. As a Bonus action, immediately after I hit with a melee attack, I can use the Lightning Strike and Thunderclap properties at the same time. Doing so doesn't expend the daily use of those properties, only the use of this one.",
		].join("\n")
	}]
};
MagicItemsList["staff of withering"] = {
	name: "Staff of Withering",
	source: [["DMG2024", 312]],
	type: "staff",
	rarity: "rare",
	magicItemTable: "?",
	description: "This staff has 3 charges, regaining 1d3 at dawn and functions as a magic quarterstaff. On a hit with it, I can expend 1 charge to deal an extra 2d10 necrotic damage to the target, which must then make a DC 15 Con save or have disadvantage on any ability check or save that uses Strength or Constitution for 1 hour.",
	descriptionFull: "This staff has 3 charges and regains 1d3 expended charges daily at dawn.\n   The staff can be wielded as a magic quarterstaff. On a hit, it deals damage as a normal quarterstaff, and you can expend 1 charge to deal an extra 2d10 necrotic damage to the target. In addition, the target must succeed on a DC 15 Constitution saving throw or have disadvantage for 1 hour on any ability check or saving throw that uses Strength or Constitution.",
	attunement: true,
	weight: 4,
	usages: 3,
	recovery: "dawn",
	additional: "regains 1d3",
	weaponsAdd: ["Staff of Withering"],
	weaponOptions: {
		baseWeapon: "quarterstaff",
		regExpSearch: /staff of withering/i,
		name: "Staff of Withering",
		source: [["PHB2024", "-"]],
		description: "Versatile (1d8); On hit, 1 charge for +2d10 necrotic damage and save, see magic item"
	}
};
MagicItemsList["stone of controlling earth elementals"] = {
	name: "Stone of Controlling Earth Elementals",
	source: [["DMG2024", 312]],
	type: "wondrous item",
	rarity: "rare",
	magicItemTable: "?",
	description: "While the stone is touching the ground, I can use a Magic action to summon an Earth Elemental, as if I had cast the Conjure Elemental spell. The stone can't be used this way again until the next dawn.",
	descriptionFull: "If the stone is touching the ground, you can use a Magic action to summon an earth elemental, as if you had cast the Conjure Elemental spell. The elemental appears in an unoccupied space with 30 ft, obeys your commands, and takes its turn immediately after yours. It disappears after 1 hour, when it dies, or when dismissed as a Bonus action.The stone can't be used this way again until the next dawn. The stone weighs 5 pounds.",
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
			changes: "Using the Stone of Controlling Earth Elementals, the spell only takes 1 action instead of 1 minute to cast, but can only bring forth an earth elemental."
		}
	}
};
MagicItemsList["stone of good luck"] = {
	name: "Stone of Good Luck",
	source: [["DMG2024", 312]],
	type: "wondrous item",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "While this polished agate is on my person, I gain a +1 bonus to ability checks and saving throws.",
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
	description: "As a Bonus action, I can have this hilt create a blade of radiance. While the blade exists, it acts like a longsword that does +2 to attack and damage rolls, radiant damage (+1d8 to undead), has finesse, emits bright sunlight in a 15-ft radius and dim light in another 15 ft. As an action, I can change the light's radius by 5 ft.",
	descriptionLong: "As a Bonus action, I can have this longsword hilt create or dismiss a blade of pure radiance. While the blade exists, it acts like a longsword that grants a +2 bonus to attack and damage rolls, does radiant damage and has the finesse property. It also deals +1d8 radiant damage to undead and emits sunlight, bright light in a 15-ft radius and dim light in an additional 15-ft radius. As a Magic action, I can expand or reduce both the bright and dim light's radius by 5 ft each, to a maximum of 30 feet each or a minimum of 10 feet each. I am proficient with this weapon if I'm proficient with either longswords or shortswords.",
	descriptionFull: "This item appears to be a longsword hilt. While grasping the hilt, you can use a Bonus action to cause a blade of pure radiance to spring into existence, or make the blade disappear. While the blade exists, this magic longsword has the finesse property. If you are proficient with shortswords or longswords, you are proficient with the sun blade.\n   You gain a +2 bonus to attack and damage rolls made with this weapon, which deals radiant damage instead of slashing damage. When you hit an undead with it, that target takes an extra 1d8 radiant damage.\n   The sword's luminous blade emits bright light in a 15-foot radius and dim light for an additional 15 feet. The light is sunlight. While the blade persists, you can use a Magic action to expand or reduce its radius of bright and dim light by 5 feet each, to a maximum of 30 feet each or a minimum of 10 feet each.",
	weight: 3,
	action: [["Bonus action", " (start/stop)"], ["action", " (change light)"]],
	weaponsAdd: ["Sun Blade"],
	weaponOptions: {
		baseWeapon: "longsword",
		regExpSearch: /sun blade/i,
		name: "Sun Blade",
		source: [["PHN2024", "-"]],
		damage: [1, 8, "radiant"],
		description: "Finesse, versatile (1d10); +1d8 damage to undead",
		modifiers: [2, 2]
	},
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (v.theWea.name == "Sun Blade" && !fields.Proficiency) {
					fields.Proficiency = CurrentProfs.weapon.otherWea && CurrentProfs.weapon.otherWea.finalProfs.indexOf("shortsword") !== -1;
				}
			}, ''
		]
	}
};
MagicItemsList["sword of answering"] = {
	name: "Sword of Answering",
	source: [["DMG2024", 313]],
	type: "weapon (longsword)",
	rarity: "legendary",
	magicItemTable: "?",
	description: "I gain a +3 bonus to attack and damage rolls made with this magical longsword that has a gem set in its pommel. As a reaction, when a creature within my reach damages me, I can make one melee attack with this sword with advantage. This attack ignores damage immunities and resistances of the target.",
	descriptionFull: "You gain a +3 bonus to attack and damage rolls made with this sword. In addition, while you hold the sword, you can use your reaction to make one melee attack with it against any creature in your reach that deals damage to you. You have advantage on the attack roll, and any damage dealt with this special attack ignores any damage immunity or resistance the target has.",
	attunement: true,
	weight: 3,
	action: [["reaction", ""]],
	weaponOptions: [{
		baseWeapon: "longsword",
		regExpSearch: /sword of answering/i,
		name: "Sword of Answering",
		source: [["PHB2024", "-"]],
		modifiers: [3, 3],
		selectNow: true
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
	description: "When I attack a creature with this magic sword and roll a 20 on the attack roll, that target takes an extra 15 necrotic damage if it isn't a construct or an undead. I then also gain 15 temp hp.",
	descriptionFull: "When you attack a creature with this magic weapon and roll a 20 on the attack roll, that target takes an extra 15 necrotic damage if it isn't a construct or an undead. You gain 15 temp hp.",
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
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/glaive|greatsword|longsword|rapier|scimitar|shortsword/i).test(v.baseWeaponName) && (/sword of life stealing/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'On 20 to hit: +15 Necrotic dmg, 15 temp HP';
				}
			},
			'If I include the words "Life Stealing" in a the name of a sword, it will be treated as the magic weapon Sword of Life Stealing. It does +15 necrotic damage when I roll a 20 on the attack roll and then gives me 15 temporary hit points. It doesn\'t work against Constructs or Undead.'
		]
	}
};
MagicItemsList["sword of sharpness"] = {
	name: "Sword of Sharpness",
	nameTest: "of Sharpness",
	source: [["DMG2024", 314]],
	type: "weapon (glaive, greatsword, longsword, or scimitar)",
	rarity: "rare",
	magicItemTable: "?",
	attunement: true,
	description: "When I roll a 20 to hit with this magic sword vs. a creature, it takes +14 slashing damage and gaines 1 exhaustion level. It does maximum damage vs. objects.",
	descriptionLong: "When I attack a creature with this magic sword and roll a 20 on the attack roll, that target takes an extra 14 slashing damage and gaines 1 exhaustion level. When used against an object, the damage dice are maximized.",
	descriptionFull: "When you attack an object with this magic sword and hit, maximize your weapon damage dice against the target.\n   When you attack a creature with this weapon and roll a 20 on the attack roll, that target takes an extra 14 slashing damage and gains 1 exhaustion level.",
	chooseGear: {
		type: "weapon",
		prefixOrSuffix: "prefix",
		descriptionChange: ["replace", "weapon"],
		excludeCheck: function (inObjKey, inObj) {
			var testRegex = /glaive|greatsword|longsword|rapier|scimitar/i;
			return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
		}
	},
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/glaive|greatsword|longsword|rapier|scimitar|swordsword/i).test(v.baseWeaponName) && (/of sharpness/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'On 20 to hit: +14 damage; Max damage vs. objects';
				}
			},
			'If I include the words "of Sharpness" in a the name of a sword that deals slashing damage, it will be treated as the magic weapon Sword of Sharpness. It deals maximum damage against objects. On a roll of 20 to hit against creatures, it deals +14 slashing damage and has a 5% chance to lob off one limb.'
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
	description: "This sword gives +1 to hit and damage and is cursed. I can't part with this sword and have disadv. on attacks with other weapons. If I take damage in combat, I must make a DC 15 Wis save or I will attack the attacker until it drops to 0 HP or I can't attack it in melee anymore.",
	descriptionFull: "You gain a +1 bonus to attack and damage rolls made with this magic weapon.\n   " + toUni("Curse") + ". This sword is cursed and possessed by a vengeful spirit. Becoming attuned to it extends the curse to you. As long as you remain cursed, you are unwilling to part with the sword, keeping it on your person at all times. While attuned to this weapon, you have disadvantage on attack rolls made with weapons other than this one.\n   In addition, while the sword is on your person, you must succeed on a DC 15 Wisdom saving throw whenever you take damage in combat. On a failed save you must attack the creature that damaged you until you drop to 0 hit points or it does, or until you can't reach the creature to make a melee attack against it.\n   You can break the curse in the usual ways. Alternatively, casting banishment on the sword forces the vengeful spirit to leave it. The sword then becomes a +1 weapon with no other properties.",
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
			'If I include the words "of Vengeance" in the name of a sword, it will be treated as the magic weapon Sword of Vengeance. It has +1 to hit and damage, but also bears a curse.'
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
	type: "weapon (glaive, gteatsword, longsword, rapier, scimitar, or shortsword)",
	rarity: "rare",
	magicItemTable: "?",
	attunement: true,
	description: "When I hit a creature with an attack using this magic weapon, the target takes an extra 2d6 Necrotic damage and must succeed on a DC 15 Constitution saving throw or be unable to regain Hit Points for 1 hour. The target repeats the save at the end of each of its turns, ending the effect on itself on a success..",
	descriptionLong: "When you hit a creature with an attack using this magic weapon, the target takes an extra 2d6 Necrotic damage and must succeed on a DC 15 Constitution saving throw or be unable to regain Hit Points for 1 hour. The target repeats the save at the end of each of its turns, ending the effect on itself on a success.",
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
					fields.Description += (fields.Description ? '; ' : '') + 'target: +2d6 Necrotic damage; DC 15 CON Save or no HP 1 hour';
				}
			},
			'If I include the words "of Wounding" in a the name of a sword, it will be treated as the magic weapon Sword of Wounding. Damage by the sword can only be regained with a short or long rest. Once per turn when I hit with the sword, I can inflict a lingering wound on a target, causing it pain every turn thereafter.'
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
	description: "I understand nonwritten communication of all Fey, and they understand mine. I can use this weapon to cast Message as a Magic action once per day.",
	descriptionFull: "While this weapon is on your person, you understand the nonwritten communication of all Fey, and they understand yours.\n\n" +
		toUni("Secret Message") + "\n\n  As a Magic action, you can use the weapon to cast Message. Once this property is used, it can't be used again until the next dawn.",
	usages: 1,
	recovery: "dawn",
	action: [["action", "Secret Msg"]],
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
			return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
		}
	},
};
MagicItemsList["talisman of pure good"] = {
	name: "Talisman of Pure Good",
	source: [["DMG2024", 314]],
	type: "wondrous item",
	rarity: "legendary",
	magicItemTable: "?",
	description: "I can use this talisman as a holy symbol, and it gives a +2 bonus on my spell attacks while I wear or hold it. Any Fiend or Undead that touches the talistman takes 8d6 radiant, and again each time it ends its turn holding or carrying the talisman. As a Magic action, I can use 1 of its 7 charges to have one creature within 120 ft make a DC 20 Dex save or be destroyed, if the target is a Fiend or Undead, it has DisAdv on the roll. On succussful save, target takes 4d6 Psychic. On last charge, the talisman is destroyed.",
	descriptionLong: "I can use this talisman as a holy symbol, and it gives a +2 bonus on my spell attacks while I wear or hold it. As a Magic action, I can use 1 of its 7 charges to have one creature within 120 ft make a DC 20 Dex save or be destroyed, if the target is a Fiend or Undead, it has DisAdv on the roll. On succussful save, target takes 4d6 Psychic. On last charge, the talisman is destroyed.",
	descriptionFull: "I can use this talisman as a holy symbol, and it gives a +2 bonus on my spell attacks while I wear or hold it.\n" +
		toUni("Pure Rebuke") + "\n As a Magic action, I can use 1 of its 7 charges to have one creature within 120 ft make a DC 20 Dex save or be destroyed, if the target is a Fiend or Undead, it has DisAdv on the roll.On succussful save, target takes 4d6 Psychic.On last charge, the talisman is destroyed.",
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
	description: "I can use this talisman as a holy symbol, and it gives a +2 bonus on my spell attacks while I wear or hold it. Any Fiend or Undead that touches the talistman takes 8d6 radiant, and again each time it ends its turn holding or carrying the talisman. As a Magic action, I can use 1 of its 7 charges to have one creature within 120 ft make a DC 20 Dex save or be destroyed, if the target is a Fiend or Undead, it has DisAdv on the roll. On succussful save, target takes 4d6 Psychic. On last charge, the talisman is destroyed.",
	descriptionFull: "While I'm holding this talisman, I have Advantage on any Intelligence (Arcana) check to control a sphere of annihilation. In addition, when I start my turn with control over a sphere of annihilation, I can take a Magic action to move it 10 ft plus 10 ft \xd7 my Intelligence modifier. This movement  doesn't have to be in a straight line.",
	attunement: true,
	weight: 1,
	vision: [["Adv. on Int (Arcana) to control Sphere of Annihil.", 1]],
};
MagicItemsList["talisman of ultimate evil"] = {
	name: "Talisman of Ultimate Evil",
	source: [["DMG2024", 315]],
	type: "wondrous item",
	rarity: "legendary",
	magicItemTable: "?",
	description: "I can use this talisman as a holy symbol, it gives a +2 bonus on my spell attacks. As a Magic action, I can use 1 of its 6 charges to target one creature within 120 ft make a DC 20 Dex save or be destroyed; Celestial beings have DisAdv on save. On successful save, the target takes 4d6 Psychic damage.  Creatures that are not a fiend or undead that touch it take 8d6 necrotic damage each time it ends its turn holding or carrying the talisman.",
	descriptionLong: "If I'm an evil cleric or paladin, I can use this talisman as a holy symbol and it grants me a +2 bonus on my spell attack rolls. As an action, I can use 1 of its 6 charges to target one creature on the ground that I can see within 120 ft of me. If it is good, a flaming fissure opens under it and it must succeed on a DC 20 Dexterity save or fall into the fissure and be destroyed, leaving no remains of it or the fissure. The talisman is destroyed when the last of its charges is used. Non-evil creatures touching it take necrotic damage, 8d6 if good or 6d6 if neutral. This damage repeats at the end of each turn carrying the talisman.",
	descriptionFull: "This item symbolizes unrepentant evil. A creature that isn’t a Fiend or an Undead that touches the talisman takes 8d6 Necrotic damage and takes the damage again each time it ends its turn holding or carrying the talisman.\n" + toUni("Holy Symbol") + "If you are an evil cleric or paladin, you can use the talisman as a holy symbol, and you gain a +2 bonus to spell attack rolls while you wear or hold it.\n" + toUni("Ultimate End") + "\n The talisman has 6 charges. If you are wearing or holding it, you can use an action to expend 1 charge from the talisman and choose one creature you can see on the ground within 120 feet of you. If the target is of good alignment, a flaming fissure opens under it. The target must succeed on a DC 20 Dexterity saving throw or fall into the fissure and be destroyed, leaving no remains.If the target is Celestial, it has DisAdv on the save. The fissure then closes, leaving no trace of its existence. When you expend the last charge, the talisman dissolves into foul-smelling slime and is destroyed.",
	attunement: true,
	weight: 1,
	usages: 6,
	recovery: "never",
	action: [["action", "Ultimate End"]],
	calcChanges: {
		spellCalc: [
			function (type, spellcasters, ability) {
				if (type == "attack" && (classes.known.paladin || classes.known.cleric)) return 2;
			},
			"If I'm a cleric or paladin, I gain a +2 bonus on my spell attack rolls while wearing or holding the Talisman of Ultimate Evil."
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
	description: "During a short rest with this doll within 5 ft of me, I can tell it to say up to 6 phrases of up to 6 words each, and set a condition under which the doll speaks each phrase. Conditions must happen within 5 ft of the doll. The doll can remember only 6 phrases that are lost when my attunement to it ends.",
	descriptionFull: "While this stuffed doll is within 5 feet of you, you can spend a short rest telling it to say up to six phrases, none of which can be more than six words long, and set an observable condition under which the doll speaks each phrase. You can also replace old phrases with new ones. Whatever the condition, it must occur within 5 feet of the doll to make it speak. For example, whenever someone picks up the doll, it might say, \"I want a piece of candy.\" The doll's phrases are lost when your attunement to the doll ends."
};
MagicItemsList["tankard of sobriety"] = {
	name: "Tankard of Sobriety",
	source: [["DMG2024", 315]],
	magicItemTable: "?",
	type: "wondrous item",
	rarity: "common",
	description: "This tankard has a stern face sculpted into one side. I can drink ale, wine, or any other nonmagical alcoholic beverage poured into it without becoming inebriated. The tankard has no effect on magical liquids or harmful substances such as poison.",
	descriptionFull: "This tankard has a stern face sculpted into one side. You can drink ale, wine, or any other nonmagical alcoholic beverage poured into it without becoming inebriated. The tankard has no effect on magical liquids or harmful substances such as poison.",
	weight: 1
};
MagicItemsList["tentacle rod"] = {
	name: "Tentacle Rod",
	source: [["DMG2024", 316]],
	type: "rod",
	rarity: "rare",
	magicItemTable: "?",
	description: "As a Magic action, all 3 tentacles of this rod attack with 15 ft reach, +9 to hit, dealing 1d6 Psychic damage. If a target is hit by all 3 it must make a DC 15 Dex save or be Restrained until I'm incapacitated or I have taken a Bonus action to release the target or until the target is no longer within 15 feet of me. While restrained, the target takes 3d6 psychic damage at the start of each of its turns. It can repeat the save at the end of each of its turns.",
	descriptionLong: "As a Magic action while holding the rod, I can direct each of its three tentacles to attack a creature I can see within 15 ft. Each tentacle makes a melee attack roll, +9 to hit, dealing 1d6 Psychic damage. If a target is hit by all three tentacles, it must make a DC 15 Dex saving throw. On a failure, it becomes Restrained until I'm incapacitated or I have taken a Bonus action to release the target or until the target is no longer within 15 feet of me. While restrained, it takes 3d6 at the start of each of its turns. At the end of each of its turns, it can repeat the saving throw, ending the effect on itself on a success.",
	descriptionFull: "As a Magic while holding the rod, I can direct each of its three tentacles to attack a creature I can see within 15 ft. Each tentacle makes a melee attack roll, +9 to hit, dealing 1d6 Psychic damage. If a target is hit by all three tentacles, it must make a DC 15 Dex saving throw. On a failure, it becomes Restrained until I'm incapacitated or I have taken a Bonus action to release the target or until the target is no longer within 15 feet of me. While restrained, it takes 3d6 at the start of each of its turns. At the end of each of its turns, it can repeat the saving throw, ending the effect on itself on a success.",
	attunement: true,
	weight: 2,
	action: [["action", ""]],
	weaponOptions: [{
		regExpSearch: /tentacle rod/i,
		name: "Tentacle Rod",
		source: [["DMG2024", "-"]],
		ability: 0,
		type: "Magic Item",
		damage: [1, 6, "psychic"],
		range: "Melee (15 ft)",
		description: "Action to use, 3 attacks; If all 3 hit same target, it DC 15 Dex save or restrained, see magic item",
		abilitytodamage: false,
		modifiers: [9, ""],
		weight: 2,
		isAlwaysProf: false,
		selectNow: true
	}]
};
MagicItemsList["*thunderous greatclub*"] = {
	name: "Thunderous Greatclub",
	source: [["DMG2024", 316]],
	type: "weapon (Greatclub)",
	rarity: "Very Rare",
	magicItemTable: "?",
	attunement: true,
	description: "",
	descriptionFull: "While you are attuned to this magic weapon, your Strength is 20 unless your Strength is already equal to or greater than that score. The weapon deals an extra 1d8 Thunder damage to any creature it hits and an extra 3d8 Thunder damage to objects it hits that aren’t being worn or carried.\n   The weapon has the following additional properties.\n   " + toUni("Clap of Thunder") + "As a Magic action, you can strike the weapon against a hard surface to create a loud clap of thunder audible out to 300 feet. You also create a 30-foot Cone of thunderous energy. Each creature in the Cone must succeed on a DC 15 Strength saving throw or have the Prone condition. Nonmagical objects in the Cone that aren’t being worn or carried take 3d8 Thunder damage.\n   " + toUni("Earthquake") + "As a Magic action, you can strike the weapon against the ground to create an intense seismic disturbance in a 50-foot-radius circle centered on the point of impact. Structures in contact with the ground in that area take 50 Bludgeoning damage, and each creature on the ground in that area must succeed on a DC 20 Dexterity saving throw or have the Prone condition. If that creature is also concentrating, it must succeed on a DC 20 Constitution saving throw or its Concentration is broken. In addition, you can cause a 30-foot-deep, 10-foot-wide fissure to open up on the ground anywhere in the area. Any creature on a spot where the fissure opens must succeed on a DC 20 Dexterity saving throw, falling into the fissure on a failed save or moving with the fissure’s edge on a successful one. Any structure on a spot where the fissure opens collapses into the fissure. Once you use this property, it can’t be used again until the next dawn.",
	weaponOptions: [{
		baseWeapon: "greatclub",
		regExpSearch: /thunderous greatclub/i,
		name: "Thunderous Greatclub",
		source: [["DMG2024", 316]],
		description: "+1d8 Thunder to Crea. Hit, +3d8 Thunder to Obj. Hit; Two-Handed; Push",
		selectNow: true
	}],
	action: [["action", " (Clap of Thunder"], ["action", " (Earthquake)"]],
};
MagicItemsList["tome of clear thought"] = {
	name: "Tome of Clear Thought",
	source: [["DMG2024", 317]],
	type: "wondrous item",
	rarity: "very rare",
	magicItemTable: "?",
	description: "This book contains memory and logic exercises, and its words are charged with magic. If I spend 48 hours within a period of 6 days to study its contents and practicing its guidelines, my Intelligence score increases by 2, as does my maximum for that score. The tome then loses its magic, but regains it in a century.",
	descriptionFull: "This book contains memory and logic exercises, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book's contents and practicing its guidelines, your Intelligence score increases by 2, as does your maximum for that score. The manual then loses its magic, but regains it in a century.",
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
	description: "This book contains guidelines for influencing and charming others and its words are charged with magic. If I spend 48 hours within 6 days studying its contents and practicing its guidelines, my Charisma score increases by 2, as does my maximum for that score. The tome then loses its magic, but regains it in a century.",
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
	description: "I can use this thick leather-bound tome as a spellbook and an arcane focus. Once per dawn while holding it, I can use a Bonus action to cast a spell I have written in it, without expending a spell slot or using any verbal or somatic components. Removing the tongue on the cover erases all spells within.",
	descriptionLong: "The first few pages of this thick leather-bound tome are filled with indecipherable scrawls. The remaining pages are blank and pristine. I can use it as a spellbook and an arcane focus. Once per dawn while holding it, I can use a Bonus action to cast a spell I have written in the tome, without expending a spell slot or using any verbal or somatic components. While attuned to the book, I can remove the tongue from the book's cover, permanently erasing all spells within. Vecna watches the user or this tome and sometimes has cryptic messages appear in it at midnight and fade away after they are read.",
	descriptionFull: "This thick leather-bound volume has a desiccated tongue pinned to the front cover. Five of these tomes exist, and it's unknown which one is the original. The grisly cover decoration on the first tome of the stilled tongue once belonged to a treacherous former servant of the lich-god Vecna, keeper of secrets. The tongues pinned to the covers of the four copies came from other spellcasters who crossed Vecna. The first few pages of each tome are filled with indecipherable scrawls. The remaining pages are blank and pristine.\n   If you can attune to this item, you can use it as a spellbook and an arcane focus. In addition, while holding the tome, you can use a Bonus action to cast a spell you have written in this tome, without expending a spell slot or using any verbal or somatic components. Once used, this property of the tome can't be used again until the next dawn.\n   While attuned to the book, you can remove the tongue from the book's cover. If you do so, all spells written in the book are permanently erased.\n   Vecna watches anyone using this tome. He can also write cryptic messages in the book. These messages appear at midnight and fade away after they are read.",
	attunement: true,
	weight: 5,
	prerequisite: "Requires attunement by a wizard",
	prereqeval: function (v) { return classes.known.wizard ? true : false; },
	action: [["Bonus action", ""]],
	usages: 1,
	recovery: "dawn"
};
MagicItemsList["tome of understanding"] = {
	name: "Tome of Understanding",
	source: [["DMG2024", 317]],
	type: "wondrous item",
	rarity: "very rare",
	magicItemTable: "?",
	description: "This book contains intuition and insight exercises, and its words are charged with magic. If I spend 48 hours within a period of 6 days studying its contents and practicing its guidelines, my Wisdom score increases by 2, as does my maximum for that score. The tome then loses its magic, but regains it in a century.",
	descriptionFull: "This book contains intuition and insight exercises, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book's contents and practicing its guidelines, your Wisdom score increases by 2, as does your maximum for that score. The manual then loses its magic, but regains it in a century.",
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
	description: "This magic trident has 3 charges. While I carry it, I can use an action and expend 1 charge to cast Dominate Beast (save DC 15) from it on a beast that has a swim speed. The trident regains 1d3 expended charges daily at dawn.",
	descriptionFull: "This trident is a magic weapon. It has 3 charges. While you carry it, you can use an action and expend 1 charge to cast Dominate Beast (save DC 15) from it on a beast that has an innate swimming speed. The trident regains 1d3 expended charges daily at dawn.",
	attunement: true,
	weight: 4,
	usages: 3,
	recovery: "dawn",
	additional: "regains 1d3",
	weaponsAdd: ["Trident of Fish Command"],
	weaponOptions: {
		baseWeapon: "trident",
		regExpSearch: /trident of fish command/i,
		name: "Trident of Fish Command",
		source: [["PHB2024", "-"]]
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
			description: "1 beast with swim speed save or charmed, follows telepathic commands, 1 a for complete control",
			changes: "Can only affect 1 beast with swim speed."
		}
	}
};
MagicItemsList["universal solvent"] = {
	name: "Universal Solvent",
	source: [["DMG2024", 318]],
	type: "wondrous item",
	rarity: "legendary",
	magicItemTable: "?",
	description: "This tube holds milky liquid with a strong alcohol smell. When found, the tube contains 1d6+1 ounces. Once as an action, I can pour 1+ ounces onto a surface within reach. Each ounce instantly dissolves up to 1 square foot of adhesive it touches, including sovereign glue.",
	descriptionFull: "This tube holds milky liquid with a strong alcohol smell. When found, the tube contains 1d6+1 ounces. Once as an action, I can pour 1+ ounces onto a surface within reach. Each ounce instantly dissolves up to 1 square foot of adhesive it touches, including sovereign glue.",
	usages: "1d6+ 1",
	recovery: "never",
};
MagicItemsList["veteran's cane"] = {
	name: "Veteran's Cane",
	source: [["DMG2024", 318]],
	magicItemTable: "?",
	type: "wondrous item",
	rarity: "common",
	description: "As a Bonus action, I can transform this cane an ordinary longsword, or revert it back into a walking cane.",
	descriptionFull: "As a Bonus action, I can transform this cane an ordinary longsword, or revert it back into a walking cane.",
	weight: 4,
	action: [["Bonus action", ""]]
};
MagicItemsList["vicious weapon"] = {
	name: "Vicious Weapon",
	nameTest: "Vicious",
	source: [["DMG2024", 318]],
	type: "weapon (simple or martial)",
	rarity: "rare",
	magicItemTable: "?",
	description: "When I successfully hit with this weapon, the target takes an extra 2d6 damage of the weapon's type.",
	descriptionFull: "When I successfully hit with this weapon, the target takes an extra 2d6 damage of the weapon's type.",
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
					fields.Description += (fields.Description ? '; ' : '') + 'target takes +2d6';
				}
			},
			'If I include the word "Vicious" in a the name of a weapon, it will be treated as the magic weapon Vicious Weapon. On a successful hit, target takes an extra 2d6 of the same damage type.'
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
	description: "I have a +3 bonus to attack and damage rolls with this magic sword. It ignores slashing damage resistance. On a roll of 20 to hit, it cuts off one head" + (typePF ? "" : ", possibly killing it instantly") + ". If the target has no head, is immune to slashing damage, has legendary actions, or its neck is too wide, it takes an extra 30 slashing damage instead.",
	descriptionFull: "You gain a +3 bonus to attack and damage rolls made with this magic weapon. In addition, the weapon ignores resistance to slashing damage.\n   When you attack a creature that has at least one head with this weapon and roll a 20 on the attack roll, you cut off one of the creature's heads. The creature dies if it can't survive without the lost head. A creature is immune to this effect if it is immune to slashing damage, doesn't have or need a head, has legendary actions, or the DM decides that the creature is too big for its head to be cut off with this weapon. Such a creature instead takes an extra 30 slashing damage.",
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
			'If I include the word "Vorpal" in a the name of a sword that deals slashing damage, it will be treated as the magic weapon Vorpal Sword. It has +3 to hit and damage and on a roll of 20 on the attack roll, it cuts off a head of the target.'
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
MagicItemsList["walloping ammunition"] = {
	name: "Walloping Ammunition",
	nameTest: "Walloping",
	source: [["DMG2024", 318]],
	magicItemTable: "armaments",
	type: "weapon (any ammunition)",
	rarity: "common",
	description: "This magic ammunition packs a wallop. A creature hit by the ammunition must succeed on a DC 10 Strength saving throw or be knocked prone.",
	descriptionFull: "This ammunition packs a wallop. A creature hit by the ammunition must succeed on a DC 10 Strength saving throw or be knocked prone.",
	allowDuplicates: true,
	chooseGear: {
		type: "ammo",
		prefixOrSuffix: "suffix",
		descriptionChange: ["replace", "ammunition"],
		excludeCheck: function (inObjKey, inObj) {
			return /vials|flasks/i.test(inObj.icon);
		}
	}
};
MagicItemsList["wand of binding"] = {
	name: "Wand of Binding",
	source: [["DMG2024", 318]],
	type: "wand",
	rarity: "rare",
	magicItemTable: "arcana",
	description: "This wand has 7 charges, regaining 1d6+1 at dawn, which I can use to cast its spells.When the last charge is used there is a 5% chance the wand is destroyed.",
	descriptionLong: "This wand has 7 charges, regaining 1d6+1 at dawn. I can expend charges to cast (save DC 17) Hold Monster (5 charges) or Hold Person (2 charges). If I expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.",
	descriptionFull: "This wand has 7 charges for the following properties. It regains 1d6+1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.\n   " + toUni("Spells") + ". While holding the wand, you can use an action to expend some of its charges to cast one of the following spells (save DC 17): Hold Monster (5 charges) or Hold Person (2 charges).",
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
	source: [["DMG2024", 319]],
	magicItemTable: "?",
	type: "wand",
	rarity: "common",
	description: "This wand has 3 charges, regaining all at dawn. As a Magic action, I can wave it around and expend 1 charge to create orchestral music that can be heard out to a range of 120 ft and ends when I stop waving the wand. If I use its last charge, roll a d20. On a 1, a sad tuba sound plays as the wand crumbles to dust.",
	descriptionFull: "This wand has 3 charges. While holding it, you can use an action to expend 1 of its charges and create orchestral music by waving it around. The music can be heard out to a range of 120 feet and ends when you stop waving the wand.\n   The wand regains all expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, a sad tuba sound plays as the wand crumbles to dust and is destroyed.",
	weight: 1,
	action: [["action", ""]],
	usages: 3,
	recovery: "dawn"
};
MagicItemsList["wand of enemy detection"] = {
	name: "Wand of Enemy Detection",
	source: [["DMG2024", 319]],
	type: "wand",
	rarity: "rare",
	magicItemTable: "?",
	description: "This wand has 7 charges, regaining 1d6+1 at dawn. I can take a Magic action to expend once charge and for 1 minute, I know the direction of the nearest creature hostile to me in 60 ft, regardless of it being ethereal, invisible, disguised, hidden or plain sight.",
	descriptionFull: "This wand has 7 charges. While holding it, you can take a Magic action to expend 1 charge and for the next minute, you know the direction of the nearest creature hostile to you within 60 feet, but not its distance from you. The wand can sense the presence of hostile creatures that are ethereal, invisible, disguised, or hidden, as well as those in plain sight. The effect ends if you stop holding the wand.\n   The wand regains 1d6+1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.",
	attunement: true,
	weight: 1,
	usages: 7,
	recovery: "dawn",
	additional: "regains 1d6+1",
	action: [["action", ""]]
};
MagicItemsList["wand of fear"] = {
	name: "Wand of Fear",
	source: [["DMG2024", 319]],
	type: "wand",
	rarity: "rare",
	magicItemTable: "?",
	description: "This wand has 7 charges, regaining 1d6+1 at dawn, which I can use to cast Command (1 charge), or as an action have all in a 60-ft cone (3 charges) make a DC 15 Wis save or be frightened and move away from me for 1 min (save end of each turn).",
	descriptionLong: "This wand has 7 charges, regaining 1d6+1 charges at dawn. While holding the wand, I can expend 1 charge to cast Command, but only to use \"flee\" or \"grovel\". I can expend 3 charges, causing the wand's tip to emit a 60-ft cone of amber light. All within the cone must make a DC 15 Wis save or be frightened of me for 1 minute. While frightened, a target moves away from me as fast as possible, can only use the Dash action, and is unwilling to move within 30 ft of me, but can repeat the save at the end of each of its turn. When the last charge is used, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.",
	descriptionFull: "This wand has 7 charges for the following properties. It regains 1d6+1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.\n   " + toUni("Command") + ". While holding the wand, you can expend 1 charge and command another creature to flee or grovel, as with the Command spell (save DC 15).\n   " + toUni("Cone of Fear") + ". While holding the wand, you can expend 3 charges, causing the wand's tip to emit a 60-foot cone of amber light. Each creature in the cone must succeed on a DC 15 Wisdom saving throw or become frightened of you for 1 minute. While it is frightened in this way, a creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevent it from moving. If it has nowhere it can move, the creature can use the Dodge action. At the end of each of its turns, a creature can repeat the saving throw, ending the effect on itself on a success.",
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
		firstCol: 1
	}, {
		name: "3 charges",
		spells: ["fear"],
		selection: ["fear"],
		firstCol: 1
	}],
	spellChanges: {
		"command": {
			description: '1 creature save or has to follow an one-word command on its next turn, either "flee" or "grovel"',
			changes: 'When casting from the Wand of Fear, I can only use the "flee" or "grovel" command.'
		},
		"fear": {
			description: 'All creatures within 60-foot cone save or drop what it is holding and become frightened',
			changes: 'When casting from the Wand of Fear, the distance changes from 30-foot cone to 60-foot cone.'
		}
	},
};
MagicItemsList["wand of fireballs"] = {
	name: "Wand of Fireballs",
	source: [["DMG2024", 319]],
	type: "wand",
	rarity: "rare",
	magicItemTable: "?",
	description: "This wand has 7 charges, regaining 1d6+1 at dawn. While holding it, I can expend 1 or more of its charges (no more than 3) to cast Fireball (save DC 15) from it as a 3rd level spell. The spell level increases by 1 for each additional charge expended. When the last charge is used, roll a d20. On a 1, the wand crumbles into ashes.",
	descriptionFull: "This wand has 7 charges. While holding it, you can use an action to expend 1 or more of its charges (no more than 3) to cast the Fireball spell (save DC 15) from it. For 1 charge, you cast the 3rd-level version of the spell. You can increase the spell slot level by one for each additional charge you expend.\n   The wand regains 1d6+1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.",
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
		name: "1+ charges",
		spells: ["fireball"],
		selection: ["fireball"],
		firstCol: "1+"
	},
	spellChanges: {
		"fireball": {
			description: "20-ft rad all crea 8d6+1d6/extra charge Fire dmg; save halves; unattended flammable objects ignite",
			changes: "For 1 charge, it is cast as the 3rd-level version of the spell, but I can increase the spell slot level by one for each additional charge expended."
		}
	}
};
MagicItemsList["wand of lightning bolts"] = {
	name: "Wand of Lightning Bolts",
	source: [["DMG2024", 320]],
	type: "wand",
	rarity: "rare",
	magicItemTable: "?",
	description: "This wand has 7 charges, regaining 1d6+1 at dawn. While holding it, I can expend 1 to 3 charges at a time to cast Lightning Bolt (save DC 15) from it as a 3rd level spell. The spell level increases by 1 for each additional charge. When the last charge is used, roll a d20. On a 1, the wand crumbles into ashes.",
	descriptionFull: "This wand has 7 charges. While holding it, you can expend 1 to 3 of its charges (at a time) to cast the Lightning Bolt spell (save DC 15) from it. For 1 charge, you cast the 3rd-level version of the spell. You can increase the spell level by one for each charge you expend.\n   The wand regains 1d6+1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.",
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
		name: "1+ charges",
		spells: ["lightning bolt"],
		selection: ["lightning bolt"],
		firstCol: "1+"
	},
	spellChanges: {
		"lightning bolt": {
			description: "100-ft long 5-ft wide all 8d6+1d6/extra charge Lightn. dmg; save halves",
			changes: "For 1 charge, it is cast as the 3rd-level version of the spell, but I can increase the spell slot level by one for each additional charge expended."
		}
	}
};
MagicItemsList["wand of magic detection"] = {
	name: "Wand of Magic Detection",
	source: [["DMG2024", 320]],
	type: "wand",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "This wand has 3 charges. While holding it, I can expend 1 charge as an action to cast Detect Magic from it. The wand regains 1d3 expended charges daily at dawn.",
	descriptionFull: "This wand has 3 charges. While holding it, you can expend 1 charge as an action to cast the Detect Magic spell from it. The wand regains 1d3 expended charges daily at dawn.",
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
	source: [["DMG2024", 320]],
	type: "wand",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "This wand has 7 charges, regaining 1d6+1 at dawn. While holding it, I can expend 1 to 3 of its charges to cast Magic Missile from it as a 1st level spell. The spell slot level increases by 1 for each additional charge expended. When the last charge is used, roll a d20. On a 1, the wand crumbles into ashes.",
	descriptionFull: "This wand has 7 charges. While holding it, you can use an action to expend 1 to 3 of its charges to cast the Magic Missile spell from it. For 1 charge, you cast the 1st-level version of the spell. You can increase the spell slot level by one for each additional charge you expend, up to 3.\n   The wand regains 1d6+1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.",
	weight: 1,
	usages: 7,
	recovery: "dawn",
	additional: "regains 1d6+1",
	spellFirstColTitle: "Ch",
	spellcastingBonus: {
		name: "1+ charges",
		spells: ["magic missile"],
		selection: ["magic missile"],
		firstCol: "1+"
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
	source: [["DMG2024", 321]],
	type: "wand",
	rarity: "rare",
	magicItemTable: "?",
	description: "This wand has 7 charges, regaining 1d6+1 at dawn. While holding it, as a Magic action, I can expend 1 charge to have a creature within 60 ft make a DC 15 Constitution saving throw or be paralyzed for 1 minute. It can repeat this save at the end of each of its turns. When the last charge is used, roll a d20. On a 1, the wand crumbles into ashes.",
	descriptionFull: "This wand has 7 charges. While holding it, you can use a Magic action to expend 1 of its charges to cause a thin blue ray to streak from the tip toward a creature you can see within 60 feet of you. The target must succeed on a DC 15 Constitution saving throw or be paralyzed for 1 minute. At the end of each of the target's turns, it can repeat the saving throw, ending the effect on itself on a success.\n   The wand regains 1d6+1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.",
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
	source: [["DMG2024", 321]],
	type: "wand",
	rarity: "very rare",
	magicItemTable: "?",
	description: "This wand has 7 charges and regains 1d6+1 expended charges daily at dawn. While holding it, I can expend 1 of its charges to cast Polymorph (save DC 15) from it. If I expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.",
	descriptionFull: "This wand has 7 charges. While holding it, you can expend 1 of its charges to cast the Polymorph spell (save DC 15) from it.\n   The wand regains 1d6+1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.",
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
	source: [["DMG2024", 321]],
	magicItemTable: "?",
	type: "wand",
	rarity: "common",
	description: "This wand has 7 charges, regaining 1d6+1 at dawn. While holding it, as a Magic action, I can expend 1 charge to create a harmless burst of light at a point I can see up to 120 ft away, with a crackling noise travelling 300 ft. The light is as bright as a torch flame but lasts only a second.",
	descriptionFull: "This wand has 7 charges. While holding it, you can use a Magic action to expend 1 of its charges and create a harmless burst of multicolored light at a point you can see up to 120 feet away. The burst of light is accompanied by a crackling noise that can be heard up to 300 feet away. The light is as bright as a torch flame but lasts only a second.\n   The wand regains 1d6+1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand erupts in a harmless pyrotechnic display and is destroyed.",
	weight: 1,
	action: [["action", ""]],
	usages: 3,
	recovery: "dawn",
	additional: "regains 1d6+1"
};
MagicItemsList["wand of secrets"] = {
	name: "Wand of Secrets",
	source: [["DMG2024", 322]],
	type: "wand",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "The wand has 3 charges. While holding it, I can use a Magic action to expend 1 of its charges, and if a secret door or trap is within 60 feet of me, the wand pulses and points at the one nearest to me. The wand regains 1d3 expended charges daily at dawn.",
	descriptionFull: "The wand has 3 charges. While holding it. you can use an action to expend 1 of its charges, and if a secret door or trap is within 60 feet of you, the wand pulses and points at the one nearest to you. The wand regains 1d3 expended charges daily at dawn.",
	weight: 1,
	usages: 3,
	recovery: "dawn",
	additional: "regains 1d3",
	action: [["action", ""]]
};
MagicItemsList["wand of the war mage, +1, +2, or +3"] = {
	name: "Wand of the War Mage, +1, +2, or +3",
	nameTest: /^(?=.*war mage)(?=.*(arcane focus|rod|wand|staff)).*$/i,
	source: [["DMG2024", 322]],
	type: "wand",
	description: "While I am holding this wand, I gain a bonus to spell attack rolls determined by the wand's rarity: uncommon (+1), rare (+2), or very rare (+3). In addition, I ignore half cover when making a spell attack.",
	descriptionFull: "While you are holding this wand, you gain a bonus to spell attack rolls determined by the wand's rarity: uncommon (+1), rare (+2), or very rare (+3). In addition, you ignore half cover when making a spell attack.",
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
		description: "While I am holding this arcane focus, I gain a +1 bonus to spell attack rolls and I ignore half cover when making a spell attack.",
		calcChanges: {
			spellCalc: [
				function (type, spellcasters, ability) {
					if (type == "attack") return 1;
				},
				"I gain a +1 bonus to spell attack rolls."
			]
		}
	},
	"+2 to spell attacks (rare)": {
		name: "Wand of the War Mage +2",
		nameTest: /^(?=.*war mage)(?=.*(arcane focus|rod|wand|staff))(?!.*\+1)(?=.*\+2)(?!.*\+3).*$/i,
		rarity: "rare",
		magicItemTable: "?",
		description: "While I am holding this arcane focus, I gain a +2 bonus to spell attack rolls and I ignore half cover when making a spell attack.",
		calcChanges: {
			spellCalc: [
				function (type, spellcasters, ability) {
					if (type == "attack") return 2;
				},
				"I gain a +2 bonus to spell attack rolls."
			]
		}
	},
	"+3 to spell attacks (very rare)": {
		name: "Wand of the War Mage +3",
		nameTest: /^(?=.*war mage)(?=.*(arcane focus|rod|wand|staff))(?!.*\+1)(?!.*\+2)(?=.*\+3).*$/i,
		rarity: "very rare",
		magicItemTable: "?",
		description: "While I am holding this arcane focus, I gain a +3 bonus to spell attack rolls and I ignore half cover when making a spell attack.",
		calcChanges: {
			spellCalc: [
				function (type, spellcasters, ability) {
					if (type == "attack") return 3;
				},
				"I gain a +3 bonus to spell attack rolls."
			]
		}
	}
};
MagicItemsList["wand of web"] = {
	name: "Wand of Web",
	source: [["DMG2024", 322]],
	type: "wand",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "This wand has 7 charges and regains 1d6+1 expended charges daily at dawn. While holding it, I can expend 1 of its charges to cast Web (save DC 13) from it. If I expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.",
	descriptionFull: "This wand has 7 charges. While holding it, you can use an action to expend 1 of its charges to cast the Web spell (save DC 13) from it.\n   The wand regains 1d6+1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.",
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
	source: [["DMG2024", 322]],
	type: "wand",
	rarity: "rare",
	magicItemTable: "?",
	description: "This wand has 7 charges and regains 1d6+1 expended charges daily at dawn. If I expend its last charge, roll a d20. On a 1, the wand crumbles into dust and is destroyed. As an action while holding it, I can expend 1 charge, choose a target within 120 ft, and roll a 1d100 to see what happens, see the Notes page.",
	descriptionFull: "This wand has 7 charges. While holding it, you can use an action to expend 1 of its charges and choose a target within 120 feet of you. The target can be a creature, an object, or a point in space. Roll d100 and consult the following table to discover what happens." + desc([
		"If the effect causes you to cast a spell from the wand, the spell's save DC is 15. If the spell normally has a range expressed in feet, its range becomes 120 feet if it isn't already.",
		"If an effect covers an area, you must center the spell on and include the target. If an effect has multiple possible subjects, the DM randomly determines which ones are affected.",
		"The wand regains 1d6+1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into dust and is destroyed.\n",
		toUni("d100 and effects"),
		toUni("01-20") + "Roll a 1d10:",
		toUni("- 1d10") + "1-2: You cast Darkness",
		toUni("-") + "3-4: You cast Faerie Fire.",
		toUni("-") + "5-6: You cast Fire Ball.",
		toUni("-") + "7-8: You cast Slow.",
		toUni("-") + "9-10: You cast Stinking Cloud.",
		toUni("21-25") + ". You are stunned until the start of your next turn, believing something awesome just happened.",
		toUni("26-30") + ". You cast Gust of Wind.",
		toUni("31-35") + ". Nothing happens at the chosen point. You take 1d6 psychic damage.",
		toUni("36-40") + ". Heavy rain falls in a 60-foot radius centered on the target. The area becomes lightly obscured. The rain falls until the start of your next turn.",
		toUni("41-45") + ". A cloud of 600 oversized butterflies fills a 30-foot radius centered on the target. The area becomes heavily obscured. The butterflies remain for 10 minutes.",
		toUni("46-50") + ". You cast Lightning Bolt.",
		toUni("51-55") + ". You shrink yourself as if you had cast Enlarge/Reduce on yourself.",
		toUni("56-60") + ". A magically formed creature appears in an unoccupied space as close to the chosen point as possible. It disappears after 1 hour or 0 hit points. Roll 1d4: 1: Rhinoceros, 2: Elephant, 3-4: Rat.",
		toUni("61-64") + ". Grass grows on the ground in a 60-foot radius centered on the target. If grass is already there, it grows to ten times its normal size and remains overgrown for 1 minute.",
		toUni("65-68") + ". An object of the DM's choice disappears into the Ethereal Plane. The object must be neither worn nor carried, within 120 feet of the target, and no larger than 10 feet in any dimension.",
		toUni("69-72") + ". You shrink yourself as if you had cast Enlarge/Reduce on yourself.",
		toUni("73-77") + ".  Leaves grow from the target. If you chose a point in space as the target, leaves sprout from the creature nearest to that point. Unless they are picked off, the leaves turn brown and fall off after 24 hours.",
		toUni("78-82") + ". A burst of colorful shimmering light extends from you in a 30-foot radius. You and each creature in the area that can see must succeed on a DC 15 Constitution saving throw or become blinded for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
		toUni("83-87") + ". You cast Invisibility on yourself.",
		toUni("88-92") + ". A stream of 1d4 \xD7 10 gems, each worth 1 gp, shoots from the wand's tip in a line 30 feet long and 5 feet wide. Each gem deals 1 bludgeoning damage, and the total damage of the gems is divided equally among all creatures in the line.",
		toUni("93-97") + ". You cast Polymorph, targeting creature closest to origin. Roll 1d4. 1: Black Bear; 2: Giant Wasp; 3-4: Frog.",
		toUni("98-00") + ". If you targeted a creature, it must make a DC 15 Constitution saving throw. If you didn't target a creature, you become the target and must make the saving throw. If the saving throw fails by 5 or more, the target is instantly petrified. On any other failed save, the target is restrained and begins to turn to stone. While restrained in this way, the target must repeat the saving throw at the end of its next turn, becoming petrified on a failure or ending the effect on a success. The petrification lasts until the target is freed by the Greater Restoration spell or similar magic."
	]),
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
			"21-25: You are stunned until the start of your next turn, believing something awesome just happened.",
			"26-30: You cast Gust of Wind.",
			"31-35: Nothing happens at the chosen point. You take 1d6 psychic damage.",
			"36-40: Heavy rain falls in a 60-foot radius centered on the target. The area becomes lightly obscured. The rain falls until the start of your next turn.",
			"41-45: A cloud of 600 oversized butterflies fills a 30-foot radius centered on the target. The area becomes heavily obscured. The butterflies remain for 10 minutes.",
			"46-50: You cast Lightning Bolt.",
			"51-55: You shrink yourself as if you had cast Enlarge/Reduce on yourself.",
			"56-60: A magically formed creature appears in an unoccupied space as close to the chosen point as possible. It disappears after 1 hour or 0 hit points. Roll 1d4: 1: Rhinoceros, 2: Elephant, 3-4: Rat.",
			"61-64: Grass grows on the ground in a 60-foot radius centered on the target. If grass is already there, it grows to ten times its normal size and remains overgrown for 1 minute.",
			"65-68: An object of the DM's choice disappears into the Ethereal Plane. The object must be neither worn nor carried, within 120 feet of the target, and no larger than 10 feet in any dimension.",
			"69-72: You shrink yourself as if you had cast Enlarge/Reduce on yourself.",
			"73-77: Leaves grow from the target. If you chose a point in space as the target, leaves sprout from the creature nearest to that point. Unless they are picked off, the leaves turn brown and fall off after 24 hours.",
			"78-82: A burst of colorful shimmering light extends from you in a 30-foot radius. You and each creature in the area that can see must succeed on a DC 15 Constitution saving throw or become blinded for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
			"83-87: You cast Invisibility on yourself.",
			"88-92: A stream of 1d4 \xD7 10 gems, each worth 1 gp, shoots from the wand's tip in a line 30 feet long and 5 feet wide. Each gem deals 1 bludgeoning damage, and the total damage of the gems is divided equally among all creatures in the line.",
			"93-97: You cast Polymorph, targeting creature closest to origin. Roll 1d4. 1: Black Bear; 2: Giant Wasp; 3-4: Frog.",
			"98-00: If you targeted a creature, it must make a DC 15 Constitution saving throw. If you didn't target a creature, you become the target and must make the saving throw. If the saving throw fails by 5 or more, the target is instantly petrified. On any other failed save, the target is restrained and begins to turn to stone. While restrained in this way, the target must repeat the saving throw at the end of its next turn, becoming petrified on a failure or ending the effect on a success. The petrification lasts until the target is freed by the Greater Restoration spell or similar magic."
		]
	}],
	fixedDC: 15,
	spellcastingBonus: {
		name: "Random option",
		spells: ["slow", "faerie fire", "gust of wind", "detect thoughts", "stinking cloud", "lightning bolt", "enlarge/reduce", "darkness", "fireball", "invisibility"],
		selection: ["slow", "faerie fire", "gust of wind", "detect thoughts", "stinking cloud", "lightning bolt", "enlarge/reduce", "darkness", "fireball", "invisibility"],
		times: 10
	},
	spellChanges: {
		"darkness": { range: "120 ft", changes: "All Wand of Wonder spells have a range of 120 ft." },
		"enlarge/reduce": { range: "120 ft", changes: "All Wand of Wonder spells have a range of 120 ft." },
		"faerie fire": { range: "120 ft", changes: "All Wand of Wonder spells have a range of 120 ft." },
		"stinking cloud": { range: "120 ft", changes: "All Wand of Wonder spells have a range of 120 ft." }
	}
};
var DMG_waveFullDescription = [
	"Held in the dungeon of White Plume Mountain, Wave is engraved with images of waves, shells, and sea creatures.",
	"You gain a +3 bonus to attack rolls and damage rolls made with this magic weapon. When you roll a 20 on the d20 for an attack roll with this weapon, the target takes an extra 21 Necrotic damage.",
	"While holding >>Wave<<, you gain the following benefits.",
	toUni("Combat Ready") + ". You have Advantage on Initiative rolls.",
	toUni("Underwater Adaptation") + ". A bubble of air forms around your head while you are underwater, allowing you to breathe normally in that environment.",
	toUni("Aquatic Command") + ". >>Wave<< has 3 charges and regains 1d3 expended charges daily at dawn. While you carry it, you can expend 1 charge to cast Dominate Beast (save DC 20) from it on a Beast that has a Swim Speed.",
	toUni("Globe of Invulnerability") + ". While holding >>Wave<<, you can cast the level 9 version of Globe of Invulnerability from it. Once used, this property can’t be used again until the next dawn.",
	toUni("Sentience") + ". >>Wave<< is a sentient weapon of Neutral alignment, with an Intelligence of 14, a Wisdom of 10, and a Charisma of 18. It has hearing and Darkvision out to 120 feet.",
	"The weapon communicates telepathically with its wielder and speaks Aquan.",
	toUni("Personality") + ". >>Wave<< zealously encourages mortals to worship sea gods and has a habit of humming sea chanteys. Conflict arises if the wielder fails to further the weapon’s objectives in the world.",
	toUni("Destroying Wave") + ". >>Wave<< can be destroyed only on the island of Thunderforge, where it was forged. The weapon must be melted down by a storm giant or someone imbued with a storm giant’s strength. Destroying >>Wave<< angers a god of the sea, who sends powerful agents to attack the island and punish the destroyers.",
];
MagicItemsList["wave"] = {
	name: "Wave",
	source: [["DMG2024", 323]],
	type: "weapon (trident)",
	rarity: "artifact",
	description: "This sentient trident adds +3 to hit and damage and if I score a critical hit with it, the target takes an extra 21 necrotic damage. While holding Wave, I gain several benefits. SEE NOTES PAGE.",
	descriptionFull: DMG_waveFullDescription.join("\n   ").replace(/>>(.*?)<</g, function (a, match) { return toUni(match); }),
	attunement: true,
	weight: 4,
	weaponOptions: [{
		baseWeapon: "trident",
		regExpSearch: /wave/i,
		name: "Wave",
		source: [["DMG2024", 323]],
		description: "Thrown, versatile (1d10); On crit: +21 Necrotic Damage; Topple",
		modifiers: [3, 3],
		selectNow: true
	}],
	toNotesPage: [{
		name: "Features",
		note: desc(DMG_waveFullDescription).replace(/>>(.*?)<</g, function (a, match) { return match.toUpperCase(); }).replace(/you/ig, "I") + "\n\n" + sentientItemConflictTxt,
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
			description: "1 beast with swim speed save or charmed, follows telepathic commands, 1 a for complete control",
			changes: "Can only affect beasts with innate swim speed."
		},
		//Not sure how to change the level in the header to level 9; it shows level 6
		"globe of invulnerability": {
			description: "Any spell of level 9 or lower cast from outside the barrier can’t affect anything within it.",
			changes: "Change from level 6 to level 9"
		},
	},
};
MagicItemsList["weapon, +1, +2, or +3"] = {
	name: "Weapon, +1, +2, or +3",
	source: [["DMG2024", 324]],
	type: "weapon (simple or martial)",
	description: "I have a bonus to attack and damage rolls made with this magic weapon. The bonus is determined by the rarity of the magic item: uncommon (+1), rare (+2), or very rare (+3). Select the bonus using the little square button in this magic item line.",
	descriptionFull: "You have a bonus to attack and damage rolls made with this magic weapon. The bonus is determined by the weapon's rarity: uncommon (+1), rare (+2), or very rare (+3).",
	allowDuplicates: true,
	chooseGear: {
		type: "weapon",
		prefixOrSuffix: "brackets",
		descriptionChange: ["replace", "weapon"]
	},
	choices: ["+1 Weapon (uncommon)", "+2 Weapon (rare)", "+3 Weapon (very rare)"],
	"+1 weapon (uncommon)": {
		name: "Weapon +1",
		nameTest: "+1 Weapon",
		rarity: "uncommon",
		magicItemTable: "?",
		description: "I have a +1 bonus to attack and damage rolls made with this magic weapon.",
		allowDuplicates: true
	},
	"+2 weapon (rare)": {
		name: "Weapon +2",
		nameTest: "+2 Weapon",
		rarity: "rare",
		magicItemTable: "?",
		description: "I have a +2 bonus to attack and damage rolls made with this magic weapon.",
		allowDuplicates: true
	},
	"+3 weapon (very rare)": {
		name: "Weapon +3",
		nameTest: "+3 Weapon",
		rarity: "very rare",
		magicItemTable: "?",
		description: "I have a +3 bonus to attack and damage rolls made with this magic weapon.",
		allowDuplicates: true
	}
};
MagicItemsList["weapon of warning"] = {
	name: "Weapon of Warning",
	nameTest: "of Warning",
	source: [["DMG2024", 324]],
	type: "weapon (any)",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "While this magic weapon is on my person, I have advantage on initiative rolls. In addition, both me and my allies within 30 ft of me can't be surprised and the weapon magically awakens us when combat starts, except those incapacitated by something other than nonmagical sleep.",
	descriptionFull: "This magic weapon warns you of danger. While the weapon is on your person, you have advantage on initiative rolls. In addition, you and any of your companions within 30 feet of you can't be surprised, except when incapacitated by something other than nonmagical sleep. The weapon magically awakens you and your companions within range if any of you are sleeping naturally when combat begins.",
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
				if (!v.theWea.isMagicWeapon && !v.isSpell && (/warning/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
				}
			},
			'If I include the word "Warning" in the name of a weapon, it will be treated as the magic weapon Weapon of Warning.'
		]
	},
	savetxt: { immune: ["surprised"] }
};
MagicItemsList["well of many worlds"] = {
	name: "Well of Many Worlds",
	source: [["DMG2024", 324]],
	type: "wondrous item",
	rarity: "legendary",
	magicItemTable: "?",
	description: "As a Magic action, I can unfold this black cloth, 6 ft in diameter, and place it on a solid surface, whereupon it creates a two-way portal to another world or plane, a random one each time. I can use a Magic action to grab it from the edges and fold it, closing the portal. Once used in this way, it can't do so again for 1d8 hours.",
	descriptionFull: "This fine black cloth, soft as silk, is folded up to the dimensions of a handkerchief. It unfolds into a circular sheet 6 feet in diameter.\n   You can use a Magic action to unfold and place the well of many worlds on a solid surface, whereupon it creates a two-way portal to another world or plane of existence. Each time the item opens a portal, the DM decides where it leads. You can take a Magic action to close an open portal by taking hold of the edges of the cloth and folding it up. Once well of many worlds has opened a portal, it can't do so again for 1d8 hours.",
	action: [["action", " (place/fold)"]],
	usages: 1,
	recovery: "1d8 h"
};
var DMG_whelmFullDescription = [
	">>Whelm<< is a powerful weapon forged by dwarves and lost in the dungeon of White Plume Mountain.",
	"You gain a +3 bonus to attack rolls and damage rolls made with this magic weapon.",
	toUni("Hurl") + ". >>Whelm<< has the Thrown property with a normal range of 60 feet and a long range of 180 feet. When you hit with a ranged attack roll using Whelm, the target takes an extra 1d8 Force damage, or an extra 4d8 Force damage if the target is a Construct, an Elemental, or a Giant. Immediately after hitting or missing, the weapon flies back to your hand.",
	toUni("Shock Wave") + ". You can take a Magic action to strike the ground with >>Whelm<< and send a shock wave out from the point of impact. Each creature of your choice on the ground within 60 feet of that point must succeed on a DC 20 Constitution saving throw or have the Stunned condition for 1 minute. A creature repeats the save at the end of each of its turns, ending the effect on itself on a success. Once used, this property can’t be used again until the next dawn.",
	toUni("Supernatural Awareness") + ". While you are holding the weapon, it alerts you to the location of any secret or concealed doors within 30 feet of you. In addition, you can cast Detect Evil and Good or Locate Object from the weapon. Once you cast either spell, you can’t cast it from the weapon again until the next dawn.",
	toUni("Sentience") + ". >>Whelm<< is a sentient, Lawful Neutral weapon with an Intelligence of 15, a Wisdom of 12, and a Charisma of 15. It has hearing and Darkvision out to 120 feet.",
	"The weapon communicates telepathically with its wielder and speaks Dwarvish, Giant, and Goblin.",
	toUni("Personality") + ". >>Whelm<< has ties to the dwarf clan that created it, called the Dankil or the Mightyhammer clan. It longs to be returned to that clan. Whelm’s purpose is to protect dwarves. Conflict arises if the wielder doesn’t share this goal.",
	toUni("Destroying Whelm") + ". >>Whelm<< can be dissolved in the acidic bile of a recently slain ancient black dragon. It can also be melted down in the forges of the Mightyhammer dwarf clan, but only by the rightful leader of that clan."
];
MagicItemsList["whelm"] = {
	name: "Whelm",
	source: [["DMG2024", 324]],
	type: "weapon (warhammer)",
	rarity: "legendary",
	notLegalAL: true,
	description: "This sentient warhammer adds +3 to hit and damage, has the thrown property, deals extra damage when thrown, and returns to my hand when thrown. I can use it to create a shock wave. See Notes page.",
	descriptionFull: DMG_whelmFullDescription.join("\n   ").replace(/>>(.*?)<</g, function (a, match) { return toUni(match); }),
	attunement: true,
	prerequisite: "Requires Attunement by a Dwarf or a Creature Attuned to a Belt of Dwarvenkind",
	prereqeval: function (v) {
		if (CurrentRace.known.indexOf("dwarf") !== -1) return true;
		for (var i = 0; i < CurrentMagicItems.known.length; i++) {
			// if it's not null, attunement is checked, and if it's the belt of dwarven kind.
			if (tDoc.getField(ReturnMagicItemFieldsArray(i + 1)[4]) !== null && tDoc.getField(ReturnMagicItemFieldsArray(i + 1)[4]).isBoxChecked(0) !== 0 && CurrentMagicItems.known[i].indexOf("belt of dwarvenkind") !== -1) {
				return true;
			}
		}
		return false;
	},
	weight: 2,
	weaponOptions: [{
		baseWeapon: "warhammer",
		regExpSearch: /whelm/i,
		name: "Whelm",
		source: [["DMG2024", 324]],
		range: "Melee, 60/180 ft",
		description: "Versatile (1d10), thrown, returning; +1d8 Force damage when thrown (or +4d8 Force vs. constructs, elementals, or giants); Push",
		modifiers: [3, 3],
		selectNow: true
	}],
	toNotesPage: [{
		name: "Features",
		note: desc(DMG_whelmFullDescription).replace(/>>(.*?)<</g, function (a, match) { return match.toUpperCase(); }).replace(/your/g, "my").replace(/you are /ig, "I am ").replace(/(of|on|causes|alerts) you/ig, "$1 me").replace(/you /ig, "I ") + "\n\n" + sentientItemConflictTxt
	}],
	action: [["action", " (Shock Wave)"]],
	extraLimitedFeatures: [{
		name: "Whelm [Shock Wave]",
		usages: 1,
		recovery: "dawn"
	}, {
		name: "Whelm [Detect Evil and Good]",
		usages: 1,
		recovery: "dawn"
	}, {
		name: "Whelm [Locate Object]",
		usages: 1,
		recovery: "dawn"
	}],
	vision: [["Know location of secret doors", 30]],
	spellcastingBonus: [{
		name: "Once per dawn",
		spells: ["detect evil and good", "locate object"],
		selection: ["detect evil and good", "locate object"],
		firstCol: "oncelr"
	}]
};
MagicItemsList["wind fan"] = {
	name: "Wind Fan",
	source: [["DMG2024", 325]],
	type: "wondrous item",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "While holding this fan, I can cast Gust of Wind (save DC 13) from it. Once used, the fan shouldn't be used again until the next dawn. Each time it is used again before then, it has a cumulative 20% chance of not working and tearing into useless, nonmagical tatters.",
	descriptionFull: "While holding this fan, you can cast the Gust of Wind spell (save DC 13) from it. Once used, the fan shouldn't be used again until the next dawn. Each time it is used again before then, it has a cumulative 20% chance of not working and tearing into useless, nonmagical tatters.",
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
	source: [["DMG2024", 325]],
	type: "wondrous item",
	rarity: "uncommon",
	magicItemTable: "?",
	description: "These boots have 4 charges and regain 1d4 expended charges at dawn. While wearing these boots, I can take a Magic action to expend 1 charge to gain a Fly Speed of 30 feet for 1 hour. If I'm flying when the duration expires, I descend 30 ft per round until I land.",
	descriptionFull: "These boots have 4 charges and regain 1d4 expended charges at dawn. While wearing these boots, I can take a Magic action to expend 1 charge to gain a Fly Speed of 30 feet for 1 hour. If I'm flying when the duration expires, I descend 30 ft per round until I land.",
	attunement: true,
	usages: "4",
	recovery: "dawn",
	additional: "regains 1d4"
};
MagicItemsList["wings of flying"] = {
	name: "Wings of Flying",
	source: [["DMG2024", 325]],
	type: "wondrous item",
	rarity: "rare",
	magicItemTable: "?",
	description: "While wearing this cloak, I can take a Magic action to turn the cloak into a pair of wings on my back. The wings last for 1 hour or until I end the affect early as a Magic action. The wings give me a flying speed of 60 ft. When they disappear, I can't use them again for 1d12 hours.",
	descriptionFull: "While wearing this cloak, I can take a Magic action to turn the cloak into a pair of wings on my back. The wings last for 1 hour or until I end the affect early as a Magic action. The wings give you a flying speed of 60 feet. When they disappear, you can't use them again for 1d12 hours.",
	attunement: true,
	action: [["action", " (start/stop)"]],
	usages: 1,
	recovery: "1d12 h"
};
MagicItemsList["wraps of unarmed power"] = {
	name: "Wraps of Unarmed Power, +1, +2, or +3",
	nameTest: "Wraps of Unarmed Power",
	source: [["DMG2024", 325]],
	magicItemTable: "?",
	type: "wondrous item",
	description: "While wearing these wraps, my unarmed strikes are considered magical and deal either Force damage or their normal damage, and I gain a bonus to their attack and damage rolls. The bonus is determined by rarity: uncommon (+1), rare (+2), or very rare (+3).",
	descriptionFull: "While you're wearing these wraps, your unarmed strikes are considered magical and deal either Force damage or their normal damage, and you gain a bonus to the attack and damage rolls of your unarmed strikes. The bonus is determined by the wraps' rarity: uncommon (+1), rare (+2), or very rare (+3).",
	choices: ["+1 Wraps of Unarmed Power (uncommon)", "+2 Wraps of Unarmed Power (rare)", "+3 Wraps of Unarmed Power (very rare)"],
	"+1 wraps of unarmed power (uncommon)": {
		name: "Wraps of Unarmed Power +1",
		nameTest: "+1 Wraps of Unarmed Power",
		rarity: "uncommon",
		description: "While I'm wearing these wraps, I gain a +1 bonus to the attack and damage rolls of my unarmed strikes. My unarmed strikes are considered magical and those strikes can deal my choice of Force or their normal damage.",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					if (v.baseWeaponName == "unarmed strike" && !/counts as( a)? magical/i.test(fields.Description)) {
						fields.Description += (fields.Description ? '; ' : '') + 'Counts as magical; choice of force or normal dmg';

					}
				},
				"My unarmed strikes get a +1 bonus to To Hit and Damage and choice of force damage or normal damage",
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
		description: "While I'm wearing these wraps, I gain a +2 bonus to the attack and damage rolls of my unarmed strikes. My unarmed strikes are considered magical and I have the choice of Force damage or their normal damage.",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					if (v.baseWeaponName == "unarmed strike" && !/counts as( a)? magical/i.test(fields.Description)) {
						fields.Description += (fields.Description ? '; ' : '') + 'Counts as magical; choice of Force or normal damage';
					}
				},
				"My unarmed strikes get a +2 bonus to To Hit and Damage and the choice of Force damage or normal damage.",
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
		description: "While I'm wearing these wraps, I gain a +3 bonus to the attack and damage rolls of my unarmed strikes. My unarmed strikes are considered magical and I can choose between Force or normal damage.",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					if (v.baseWeaponName == "unarmed strike" && !/counts as( a)? magical/i.test(fields.Description)) {
						fields.Description += (fields.Description ? '; ' : '') + 'Counts as magical; choice of Force or normal damage';
					}
				},
				"My unarmed strikes get a +3 bonus to To Hit and Damage and I can choose between force damage or normal damage.",
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
