var iFileName = "VOTD_Races.js";
RequiredSheetVersion("13.1.1");

SourceList["VOTD"]={
    name : "VoTD Races",
    abbreviation : "VoTD_R",
	group: "VoTD:Crew",
    date : "2023/07/10",
}; 

RaceList["relic halo"] = {
	regExpSearch : /^(?=.*relic)(?=.*halo).*$/i,
	name : "Relic Halo",
	sortname : "Halo, Relic",
	source : [["VoTD:R", 1]],
	size : 5,
	speed : {
		walk : { spd : 0, enc : 0 }
	},
	languageProfs : ["Common", "Any of Bearer"],
	savetxt : {immune: ["poison", "disease"]},
	dmgres : ["Radiant"],
	vision : [["Darkvision", 60]],
	scorestxt : "+2 and +1 or +1 in three",
	scores : [0, 0, 0, 0, 0, 0],
	toNotesPage: [
      {
        name: "Features",
        page3notes: true,
        note: [
          "Constructed Resistance: I have resistance to Radiant damage and am partially made of light. I am immune to poison and disease. I do not require food, water, air.",
          "Mystic Resonance: I have the AC of my bearer. I count as a holy symbol and can be used as a divine focus or for divine channel.",
		  "Body of Light: I can choose to manifest a spiritual form of myself within 5’ of my bearer without using an action. I cannot manifest and dismiss this form in the same round. I cannot leave my bearer during this, and will always maintain 5' distance. I am made of light during this form and my location has a bright light of 5' and can cast an additional 5' of dim light. I can interact with the environment and take damage when using this form.",
		  "Shared Proficiencies: My bearer can choose to use my modifiers when making skill checks, if it is higher. I know Common and any languages my bearer knows; and communicate telepathically with anyone that knows at least one language within 60'.",
	    ],
	  },
	],
    trait : ""+
		"\n \u2022 Type: My creature type is Construct."+
		"\n \u2022 I can be a source of light. At will I or my bearer can cast the Light cantrip at will, using myself as a centerpoint.",
	spellcastingBonus : {
		name : "Light (level 0)",
		spells : ["light"],
		selection : ["light"],
		firstCol : 'atwill'
	}
};