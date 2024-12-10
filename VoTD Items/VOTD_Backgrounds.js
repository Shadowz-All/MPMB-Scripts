var iFileName = "VOTD_Backgrounds.js";
RequiredSheetVersion("13.1.1");

SourceList["VOTD"]={
    name : "VoTD Backgrounds",
    abbreviation : "VoTD:B",
	group: "VoTD:Crew",
    date : "2024/01/21",
}; 

BackgroundList["shattered noble"] = {
	regExpSearch : /^(?=.*shattered)(?=.*noble).*$/i,
	name : "Shattered Noble",
	source : [["VoTD:B", 1]],
	skills : ["History", "Persuasion"],
	gold : 25,
	equipleft : [
		["Scroll of pedigree", "", ""],
		["Bag of Holding", "", 1]
	],
	equipright : [
		["Fine clothes", "", 6],
		["Signet ring", "", ""]
	],
	feature : "Shattered Personality",
	trait : [
		"My eloquent flattery makes everyone I talk to feel like the most wonderful and important person in the world.",
		"The common folk love me for my kindness and generosity.",
		"No one could doubt by looking at my regal bearing that I am a cut above the unwashed masses.",
		"I behave like an extreme opposite of my persona.",
		"I sleep just as much as I need to and on an unusual schedule.",
		"Despite my noble birth, I do not place myself above other folk. We all have the same blood.",
		"My favor, once lost, is lost forever.",
		"If you do me an injury, I will crush you, ruin your name, and salt your fields."
	],
	ideal : [
		["Justice",
			"Justice. Place in society shouldn't determine one's access to what is right. (Good)"
		],
		["Security",
			"Security. Doing what must be done can't bring the innocent to harm. (Lawful)"
		],
		["Confusion",
			"Confusion. Deception is a weapon. Strike from where your foes won't expect. (Chaotic)"
		],
		["Infamy",
			"Infamy. My name will be a malediction, a curse that fulfills my will. (Evil)"
		],
		["Incorruptibility",
			"Incorruptibility. Be a symbol, and leave your flawed being behind. (Any)"
		],
		["Anonymity",
			"Anonymity. It's my deeds that should be remembered, not their instrument. (Any)"
		]
	],
	bond : [
		"I do everything for my family. My first thought is keeping them safe.",
		"What I do, I do for the world. The people don't realize how much they need me.",
		"I've seen too many in need. I must not fail them as everyone else has.",
		"I stand in opposition, lest the wicked go unopposed.",
		"I am exceptional. I do this because no one else can, and no one can stop me.",
		"I do everything for those who were taken from me."
	],
	flaw : [
		"I am callous about death. It comes to us all eventually.",
		"I never make eye contact or hold it unflinchingly.",
		"I have no sense of humor. Laughing is uncomfortable and embarrassing.",
		"I overexert myself, sometimes needing to recuperate for a day or more.",
		"I think far ahead, a detachedness often mistaken for daydreaming.",
		"I see morality entirely in black and white."
	],
	extra : [
		"Select a Split Personality",
		"Earthbound representation of a deity or faith",
		"Impersonation of another hero",
		"Embodiment of a school of magic",
		"Warrior with distinctive armor",
		"I sometimes get lost in my thoughts"
	],
	languageProfs : [1],
};
BackgroundFeatureList["shattered personality"] = {
	description : "The world and circumstances have pushed me to a breaking point. I can sometimes change to a separate personality, uncontrollably inheriting the persona of an alternate individual.",
	source : [["VoTD:B", 1]]
};