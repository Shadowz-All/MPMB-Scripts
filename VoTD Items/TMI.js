var iFileName = "Thorne's Magic Items.js";
RequiredSheetVersion("13.1.1");

SourceList["TMI"]={
    name : "Thorne's Magical Items",
    abbreviation : "TMI",
    group: "VoTD:Crew",
    date : "2024/09/02",
};

MagicItemsList["scimitars of storm"] = {
    name: "Scimitars of Storm",
    source: [["TMI", 1]],
    type: "weapon (scimitar)",
    rarity: "rare",
    attunement: true,
    description:
        "These dual scimitars add +1 to hit and damage. Additionally, I do 1d6 Lightning Damage (left) and 1d6 Thunder Damage (right).",
    descriptionFull:
        "These dark metal blades each have a stone in the pommel. The left, crackles with lightning and the right, emits deep rumbles of thunder. You gain a +1 bonus to attack and damage rolls made with this magic weapon. When you hit with an attack using this weapon, you also deal +1d8 Lightning Damage and +1d8 Thunder damage.",
    allowDuplicates: false,
    weaponsAdd: ["Scimitars of Storm"],
    weaponOptions: {
        baseWeapon: "scimitar",
        ability: 2,
        regExpSearch: /scimitars of storm/i,
        name: "Scimitars of Storm",
        source: [["TMI", 1]],
        modifiers: [1, 1],
        range: "Melee",
        damage: [1, 6, "slashing"],
        description: "Finesse, light, +1d6 Thunder Damage and +1d6 Lightning Damage",
        isAlwaysProf: true,
    },
};
MagicItemsList["ring of estari"] = {
    name: "Ring of Estari",
    source: [["TMI", 1]],
    regExpSearch: /^(?=.*ring)(?=.*estari).*$/i,
    type: "ring",
    rarity: "rare",
    magicItemTable: "?",
    description: "While wearing this ring, I gain +2 bonus to AC and saving throws. I also gain \Estari Resistance\.",
    descriptionFull: "You gain a +2 bonus to AC and saving throws while wearing this ring. I also gain \Estari Resistance\.",
    attunement: true,
    extraAC: [{ name: "Ring of Estari", mod: 2, magic: true, text: "I gain a +2 bonus to AC while attuned." }],
    addMod: [{ type: "save", field: "all", mod: 2, text: "While I wear the Ring of Estari, I gain a +2 bonus to all my saving throws." }],
    choiceName: "Estari Resistance",
    choices: ["Acid", "Cold", "Fire", "Force", "Lightning", "Necrotic", "Poison", "Psychic", "Radiant", "Thunder"],
    "acid": {
        description: "+2 Bonus to AC and saving throws. I also become resistant to \Acid\.",
        dmgres: ["Acid"],
    },
    "cold": {
        description: "+2 Bonus to AC and saving throws. I also become resistant to \Cold\.",
        dmgres: ["Cold"],
    },
    "fire": {
        description: "+2 Bonus to AC and saving throws. I also become resistant to \Fire\.",
        dmgres: ["Fire"],
    },
    "force": {
        description: "+2 Bonus to AC and saving throws. I also become resistant to \Force\.",
        dmgres: ["Force"],
    },
    "lightning": {
        description: "+2 Bonus to AC and saving throws. I also become resistant to \Lighting\.",
        dmgres: ["Lightning"],
    },
    "necrotic": {
        description: "+2 Bonus to AC and saving throws. I also become resistant to \Necrotic\.",
        dmgres: ["Necrotic"],
    },
    "poison": {
        description: "+2 Bonus to AC and saving throws. I also become resistant to \Poison\.",
        dmgres: ["Poison"],
    },
    "psychic": {
        description: "+2 Bonus to AC and saving throws. I also become resistant to \Psychic\.",
        dmgres: ["Psychic"],
    },
    "radiant": {
        description: "+2 Bonus to AC and saving throws. I also become resistant to \Radiant\.",
        dmgres: ["Radiant"],
    },
    "thunder": {
        description: "+2 Bonus to AC and saving throws. I also become resistant to \Thunder\.",
        dmgres: ["Thunder"],
    },
};
