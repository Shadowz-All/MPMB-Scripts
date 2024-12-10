var iFileName = "VOTD_Classes.js";
RequiredSheetVersion("13.1.1");

SourceList["VOTD"] = {
	name: "VoTD Classes and Subclasses",
	abbreviation: "VoTD_CS",
	group: "VoTD:Crew",
	date: "2023/05/18",
};

AddSubClass("rogue", "Wild Card", {
	regExpSearch: /^(?=.*wild card).*$/i,
	subname: "Wild Card",
	source: ["VOTD", 15],
	features: {
		"subclassfeature3": {
			name: "Tricks Up the Sleeve",
			source: ["LRDToB", 0],
			minlevel: 3,
			description: desc([
				"I know Guidance; at 9th level I can cast it as a bonus action with a range of 30 ft"
			]),
			spellcastingBonus: {
				name: "Tricks Up the Sleeve",
				spells: ["guidance"],
				selection: ["guidance"],
				firstCol: "atwill",
			},
		},
		"subclassfeature3.1": {
			name: "Wild Card's Gambit",
			source: ["LRDToB", 0],
			minlevel: 3,
			description: desc([
				"Choose a gaming with the \"Choose Feature\" button, which grants a Wild Card's Gambit",
				"I can change my Gambit choice whenever I gain a level in this class"
			]),
			choices: ["Dice Set (Loaded Dice Gambit)", "Dragonchess Set (Dragonchess Gambit)", "Playing Card Set (Playing Cards Gambit)"],
			"dice set (loaded dice gambit)": {
				name: "Wild Card's Gambit: Loaded Dice",
				description: desc([
					"I am proficient with dice; See third page notes section",
					"I can change my Gambit choice whenever I gain a level in this class"
				]),
				additional: levels.map(function (n) {
					return Math.ceil(n / 2) + "d6";
				}),
				toolProfs: [["Dice set"]],
				eval: function () {
					processActions(true, "Wild Card's Gambit: Loaded Dice", [["reaction", " (when attacked)"]], "Loaded Dice");
				},
				removeeval: function () {
					processActions(false, "Wild Card's Gambit: Loaded Dice", [["reaction", " (when attacked)"]], "Loaded Dice");
				},
				toNotesPage: [{
					name: "Wild Card's Gambit: Loaded Dice",
					page3notes: true,
					popupName: "Wild Card's Gambit: Loaded Dice",
					note: desc([
						"I have a pool of d6s equal to the number of d6s for Sneak Attack",
						"When I am attacked, I can spend/roll a d6 to subtract from the attack",
						"I can choose to do this after the roll, but before the outcome is determined",
						"At 9th level I can spend up to 2 and a 17th level I can spend up to 3"
					]),
				}],
			},
			"dragonchess set (dragonchess gambit)": {
				name: "Wild Card's Gambit: Dragonchess",
				description: desc([
					"I am proficient with dragonchess; See third page notes section",
					"I can change my Gambit choice whenever I gain a level in this class"
				]),
				toolProfs: [["Dragonchess set"]],
				usages: "Cha" + (typePF ? "risma" : "") + " modifier per ",
				usagescalc: "event.value = Math.max(1, What('Cha Mod'));",
				recovery: "long rest",
				eval: function () {
					processActions(true, "Wild Card's Gambit: Dragonchess", [["bonus action", ""]], "Dragon/Griffon/Sylph");
				},
				removeeval: function () {
					processActions(false, "Wild Card's Gambit: Dragonchess", [["bonus action", ""]], "Dragon/Griffon/Sylph");
				},
				toNotesPage: [{
					name: "Wild Card's Gambit: Dragonchess",
					page3notes: true,
					popupName: "Wild Card's Gambit: Dragonchess",
					note: desc([
						"As a bonus action I can employ one of the following dragonchess maneuvers:",
						"\u2022 Dragon: I choose a creature in sight/30 ft; its first hit adds my rogue level extra damage",
						"\u2022 Griffon: My movement increases by 10 ft and does not provoke opportunity attacks",
						"\u2022 Sylph: Me and my allies within 5 ft have advantage on Dexterity saving throws",
						"The effects of these maneuvers last until the start of my next turn"
					]),
				}],
			},
			"playing card set (playing cards gambit)": {
				name: "Wild Card's Gambit: Playing Cards",
				description: desc([
					"I am proficient with playing cards; I have the Playing Cards Gambit",
					"I can change my Gambit choice whenever I gain a level in this class"
				]),
				toolProfs: [["Playing card set"]],
				usages: "Cha" + (typePF ? "risma" : "") + " modifier per ",
				usagescalc: "event.value = Math.max(1, What('Cha Mod'));",
				recovery: "long rest",
				weaponOptions: {
					regExpSearch: /razor card/i,
					name: "Razor Card",
					source: ["LRDToB", 0],
					ability: 2,
					list: "ranged",
					type: "Simple",
					isAlwaysProf: true,
					damage: [1, 4, "slashing"],
					range: "30 ft",
					abilitytodamage: true,
					description: "See Playing Cards Gambit",
				},
				weaponsAdd: ["Razor Card"],
				calcChanges: {
					atkAdd: [
						function (fields, v) {
							if (classes.known.rogue && classes.known.rogue.level && (/razor card/i).test(v.WeaponName)) {
								fields.Description = fields.Description.replace(/(; )?sneak attack [0-9]*?d6/i, "");
							}
						}
					],
				},
				eval: function () {
					processActions(true, "Wild Card's Gambit: Playing Cards", [["action", " (before Sneak Attack)"]], "Razor Card");
				},
				removeeval: function () {
					processActions(false, "Wild Card's Gambit: Playing Cards", [["action", " (before Sneak Attack)"]], "Razor Card");
				},
				toNotesPage: [{
					name: "Wild Card's Gambit: Playing Cards",
					page3notes: true,
					popupName: "Wild Card's Gambit: Playing Cards",
					note: desc([
						"If I haven't used Sneak Attack this turn, I can use an action to throw a card at a creature",
						"When I roll damage, look at number rolled and the add effect based on the table below",
						"d4  Effect",
						"1 (Blade) Roll Sneak Attack damage and add it to the Razor Card's damage; At the start of its next turn, the target takes additional damage equal to half the Sneak Attack damage rolled",
						"2 (Shackle) Until the start of my next turn, the target’s speed is halved; It can’t make more than one attack on its turn while its speed is reduced in this way",
						"3 (Heart) Roll Sneak Attack damage and add it to the Razor Card’s damage; I regain a number of HP equal to the half the damage dealt; Excess HP regained become temporary HP",
						"4 (Wild Ace) Choose Blade, Shackle, or Heart and add the effect to the Razor Card"
					]),
				}],
			},
		},
		"subclassfeature9": {
			name: "Shifting the Odds",
			source: ["LRDToB", 0],
			minlevel: 9,
			description: desc([
				"As a bonus action I can teleport to an unoccupied space with 120 ft that I can see",
				"Creatures within 10 ft of the starting space make a Dex save (DC 8 + Cha mod + Prof)",
				"A creature takes 4d10 force damage on a failure, or half as much damage on a success"
			]),
			action: ["bonus action", " (teleport)"],
			usages: 1,
			recovery: "short rest",
		},
		"subclassfeature13": {
			name: "Twist of Fate",
			source: ["LRDToB", 0],
			minlevel: 13,
			description: desc([
				"I can swap initiative order after rolling initiative, but before the first turn",
				"I can swap with one creature I see; if its an ally they must agree to swap"
			]),
		},
		"subclassfeature17": {
			name: "Joker Wild",
			source: ["LRDToB", 0],
			minlevel: 17,
			description: desc([
				"As a bonus action I can assume an incorporeal form, granting the following benefits:",
				" \u2022 I regain all spent uses/dice of my Wild Card's Gambit feature",
				" \u2022 My movement speed is doubled and I am resistant to all damage",
				" \u2022 I am immune to the grappled, paralyzed, stunned, and restrained conditions",
				" \u2022 I can move through objects as if they were difficult terrain",
				"If I end my turn in a creature, it takes 1d0 force damage and is moved 5 ft",
				"This form lasts for 1 min or until I am incapacitated"
			]),
			usages: 1,
			recovery: "long rest",
			action: ["bonus action", ""],
		},
	},
});