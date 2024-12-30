// Custom MPMB script for MCDM Illrigger class
var iFileName = "Illrigger_MCDM.js";
RequiredSheetVersion(13);

SourceList["IR"] = {
    name: "MCDM: The Illrigger",
    date: "2024/03/12",
    group: "MCDM",
    abbreviation: "IR",
    url: "https://shop.mcdmproductions.com/products/illrigger-class",
    defaultExcluded: false,
};

// Base Illrigger
ClassList["illrigger"] = {
    name : "Illrigger",
    regExpSearch: /illrigger/i,
    source : ["IR", 9],
    primaryAbility : "Strength or Dexterity or Charisma, and Constitution",
    prereqs: "Charisma 13, Strength or Dexterity 13",
    die: 10,
    improvements: [0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,5,5],
    saves: ["Con", "Cha"],
    skills: ["\n\n" + toUni("Illrigger") + ":Choose two from Arcana, Athletics, Deception, Insight, Intimidation, Investigation, Persuasion, Religion, and Stealth"],
    armorProfs: {
        primary: [true, true, false, true],
        secondary: [true, true, false, true]
    },
    weaponProfs: {
        primary: [true, true,],
        secondary: [true, true,]
    },
    equipment: "Illrigger starting equipment:\n \u2022 Chain shirt -or- leather armor, longbow, and 20 arrows;\n \u2022 A martial weapon and shield -or- two martial weapons;\n \u2022 A priest's pack -or- a dungeoneer's pack;\n \u2022 5 javelins",
    subclasses: ["Diabolic Contract", []],
    attacks: levels.map(function(n){return n < 5 ? 1 : 2;}),
    abilitySave: 6,
    features: {
        "baleful interdict": {
            name: "Baleful Interdict",
            source : ["IR", 11],
            minlevel: 1,
            description: desc([
                "On hit with a weapon attack(No Action), or as a Bonus Action on a creatue w/i 30 ft I place a seal on a creature, they are now interdicted. (See Notes)",
            ]),
            toNotesPage:[{
                name: "Baleful Interdict",
                note: desc([
                    "Seals placed on a creature last 1 min and are only visible to me",
                    "When an interdicted creature takes damage I can see w/i 30 feet, I can consume seal(s) to deal add'l fire or necrotic dmg per seal.",
                    "If a creature with seals dies, I can move them to another within 30 ft.",
                ]),
                page3notes: true,
            }],
            additional: ["1d6","1d6","1d6","1d6","2d6","2d6","2d6","2d6","2d6","2d6","3d6","3d6","3d6","3d6","3d6","3d6","3d6","3d6","3d6","4d6"],
            usages: levels.map(function (n) {
                return n < 3 ? 2 : n < 9 ? 3 : n < 13 ? 4 : n < 17 ? 5 : 6;
            }),
            recovery: "short rest",
            action: ["bonus action",""],
        },
        "forked tongue": {
            name: "Forked Tongue",
            source : ["IR", 11],
            minlevel: 1,
            languageProfs: ["Infernal", 2],
            additional: levels.map(function (n) {
                return n <9 ? 0 : 1;
            }),
            },
            description: desc([
                "I can instinctively speak,read, and write Infernal.",
                "I can speak an additional 2 languages of my choice, but not read or write them.",
                "I can replace one of those two languages per long rest.",
                "At 9th Level, I gain an additional Language.",
                "I also have advantage on Wisdom (Insight) checks made to ascertain the intentions or sincerity of creatures."
            ]),
        },
        "combat mastery": {
            name: "Combat Mastery",
            source : ["IR", 12],
            minlevel: 2,
            description: "\n  " + "Choose one of the following Illrigger Combat Masteries",
            choices: ["bravado","brutal","inexorable","lies","lissome","unfettered"],
            choicesNotInMenu: false,
            "bravado": {
                name: "Bravado",
                description: "\n  " + "While I am not wearing armor, my AC is 10 + my Dexterity mod + my Charisma mod + shield.",
                armorOptions:{
                    regExpSearch: /justToAddToDropDown/,
                    name: "Unarmored Defense (Cha)",
                    source : ["IR", 8],
                    ac: 10,
                    addMod: true
                },
            },
            "brutal": {
                name: "Brutal",
                description: desc([
                    "When I hit a creature no more than one size larger with a melee weapon I am wielding with two hands, I can move the target 5 feet horizontally and choose to spend movement to move into the space they left."
                ]),
            },
            "inexorable": {
                name: "Inexorable",
                description: desc([
                    "I gain a +1 bonus to saving throws for each hostile creature within 5 feet of me, to a maximum of +5."
                ]),
            },
            "lies": {
                name: "Lies",
                description: "\n  " + "I choose one type of melee weapon, I can add my Cha mod, instead of Str or Dex, to atk and dmg rolls. I can replace my weapon choice after a long rest.",
                calcChanges: {
                    atkAdd: [
                        function (fields, v) {
                            if (v.isMeleeWeapon && (What('Cha Mod') > What('Str Mod'))) {
                                fields.Mod = 6;
                            }
                        },
                        ""
                    ]
                },
            },
            "lissome": {
                name: "Lissome",
                description: desc([
                    "When I hit a creature with a melee weapon attack, I can spend my movement to move 5f away without provoking opportunity attacks."
                ]),
            },
            "unfettered": {
                name: "Unfettered",
                description: desc([
                    "When I place or burn seals, it's range is 60f. When I gain the Infernal Conduit Feat, it's range is 30f. Making a ranged attack while within 5 feet of a hostile creature does not impose disadvantage"
                ]),
            },
        },
        "interdiction": {
            name: "Interdiction",
            source : ["IR", 12],
            minlevel: 2,
            description: desc[(
                "I learn one Interdict Boon of my choice. I gain additional Interdict boons based on the Illrigger Table.",
                "Each boon must be of a level I can learn.",
                "When I gain an Illrigger Level, I can replace a boon I know with another."
                )],
            additional: levels.map(function (n) {
                return n < 1 ? "" : (n < 7 ? 1 : n < 13 ? 2 : n < 18 ? 3 : 4) + " Interdict Boon's known.";
            }),
            extraname: "Interdiction",
            extrachoices: ["abatingseal","bedevil","souleater","styxsapathy","swiftretribution","acheronschain","conflagrantchannel","eyesofthegate","shadowshroud","unleashhell","vengefulshot","dissonslaught","flashofbrimstone","hellishfrenzy","hellsight","impalingshot","irongaol","lastword","soulsdoom"],
            extratimes: levels.map(function (n) {
                return n < 1 ? 0 : n < 7 ? 1 : n < 13 ? 2 : n < 18 ? 3 : 4;
            }),
            choicesNotInMenu: false,
            "abatingseal": {
                name: "Abating Seal",
                minlevel: 2, 
                description: desc([
                    "When a creature I can see damages me or an ally within 30f of me, I can burn a seal as a reaction to reduce damage taken b an amount equal to 1d10 + half my illrigger level"
                ]),
                action: ["reaction",""]
            },
            "bedevil": {
                name: "Bedevil",
                description: desc([
                    "When I burn a seal on an interdicted creature, I can activate this boon. The target must subtract a number equal to my proficiency bonus from the result of the next saving throw made before the end of their next turn."
                ])
            },
            "souleater": {
                name: "Soul Eater",
                minlevel: 2,
                description: desc([
                    "When I burn a seal on an interdicted creature, I can activate this boon to gain temporary hit points equal to my Illrigger level."
                ])
            },
            "styxsapathy": {
                name: "Styx's Apathy",
                minlevel: 2,
                description: desc([
                    "When I burn a seal on an interdicted creature, I can use my reaction to prevent the target from using their reaction until the end of their next turn."
                ]),
                action: ["reaction",""]
            },
            "swiftretribution": {
                name: "Swift Retribution",
                minlevel: 2,
                description: desc([
                    "When an interdicted creature provokes an opportunity attack from me, I can make that attack without using my reaction. I cannot benifit from this boon again until the start of my next turn."
                ])
            },
            "acheronschain": {
                name: "Acheron's Chain",
                minlevel: 7,
                description: desc([
                    "When I use a bonus action to place or move a seal to a Large or smaller creature, the target takes a Strength Saving Throw (no action).",
                    "On a failed save, I can pull the target 10f towards me or cause them to be grappled until the end of my next turn.",
                    "Nothing happens on a successful save. The Save DC is my interdict Save DC."
                ])
            },
            "conflagrantchannel": {
                name: "Conflagrant Channel",
                minlevel: 7,
                description: desc([
                    "I can expend a seal as a bonus action to teleport up to 60ft to an unoccupied space I can see."
                ]),
                action: ["bonus action",""]
            },
            "eyesofthegate": {
                name: "Eyes Of The Gate",
                minlevel: 7,
                description: desc([
                    "I can use an action to expend one or more seals on a creature I can see within 60f to attempt to bind my awareness to it.",
                    "The creature must make a Wisdom Saving Throw; they can willingly fail this save",
                    "On a failed save, I am bound to the targets awareness for a number of hours equal to the amount of seals used.",
                    "For the duration, I can use an action to see and hear through their senses, gaining any special senses of the target, until I use my action to return.",
                    "I can place or burn seals, and use interdict boons as if I were in the creature's space. Doing so will make the creature aware of the bond.",
                    "Creatures aware of the bond can use their action to repeat the saving throw, ending the effects on a successful save.",
                    "I am deaf and blind through my own senses when I am looking through the target's senses",
                ]),
                action: ["action", ""]
            },
            "shadowshroud": {
                name: "Shadow Shroud",
                minlevel: 7,
                description: desc([
                    "I can expend a seal as a bonus action to increase my own, or a target I touch's AC by +2 for 1 minute.",
                ]),
                action: ["bonus action", ""]
            },
            "unleashhell": {
                name: "Unleash Hell",
                minlevel: 7,
                description: desc([
                    "When I burn one or more seals, I can use my reaction to trigger a Dexterity Saving throw on each creature I choose within 5 feet of the target.",
                    "On a failed save, a creature takes the same amount and type of damage as the seals dealt to the interdicted target.",
                    "The creature takes half as much damage on a successful save."
                ]),
                action: ["reaction",""]
            },
            "vengefulshot": {
                name: "Vengeful Shot",
                minlevel: 7,
                description: desc([
                    "I can expend a seal as a reaction when a creature makes a range attack against me, or an ally I can see within 30f.",
                    "I make a ranged weapon attack against the attacker. If it hits, I deal extra damage equal to half my Illrigger level rounded up."
                ]),
                action: ["reaction",""]
            },
            "dissonslaught": {
                name: "Dis's Onslaught",
                minlevel: 13,
                description: desc([
                    "When I use a bonus action to place or move a seal, I can make a weapon attack as part of the same bonus action."
                ])
            },
            "flashofbrimstone": {
                name: "Flash of Brimstone",
                minlevel: 13,
                description: desc([
                    "When I place or move a seal,I can magically teleport to an unoccupied space within 5 feet of the target.(No action required)."
                ])
            },
            "hellishfrenzy": {
                name: "Hellish Frenzy",
                minlevel: 13,
                description: desc([
                    "When I start my turn within 30f of an interdicted creature, I can expend a seal to become frenzied until the start of my next turn.",
                    "While frenzied, my movement speed is doubled, I have +2 bonus AC, and I can make an additional weapon attack when I take the attack action."
                ])
            },
            "hellsight": {
                name:"Hell Sight",
                minlevel: 13,
                description: desc([
                    "I can expend a seal as an action to gain 60f of truesight for 1 hour."
                ]),
                action: ["action",""]
            },
            "impalingshot": {
                name: "Impaling Shot",
                minlevel: 13,
                description: desc([
                    "When I hit an interdicted creature with a ranged weapon attack, I can expect a seal as a bonus action.",
                    "Until the end of my next turn, the target creature takes a penalty to AC equal to my proficiency bonus."
                ]),
                action: ["bonus action",""]
            },
            "irongaol": {
                name: "Iron Gaol",
                minlevel: 13,
                description: desc([
                    "As an action, I can touch a creature and spend 4 seals to attempt to send it to Hell.",
                    "The Target must save on a Charisma saving throw.",
                    "If the target is native to Hell, or their level or CR is <4,they remain there and must find their way out.",
                    "Otherwise, the target remains for 1 minute  before they reappear into the space they left or nearest unoccupied space.",
                    "The target can spend it's action each turn to repeat the saving throw, ending the effect early on a success."
                ]),
                action: ["action",""]
            },
            "lastword": {
                name: "Last Word",
                minlevel: 13,
                description: desc([
                    "If I have unplaced seals, and my health is reduced to 0, I may spend up to 3 seals to cause an explosion",
                    "I roll 3d6 per seal expended. Each creature I choose withing 30f must make a Dexterity Saving throw.",
                    "On a failed save, the creature takes fire damage equal to the total. Half if successful.",
                    "If the explosion damages at least one creature, I regain hitpoints equal to the total I rolled."
                ])
            },
            "soulsdoom": {
                name: "Soul's Doom",
                minlevel: 13,
                description: desc([
                    "When I use a bonus action to place a seal, I can scorch the seals into the target.",
                    "For one minute, whenever the target takes damage, they take extra damage equal to my proficiency bonus."
                ])
            },
        },
        "diaboliccontract": {
            name: "Diabolic Contract",
            source : ["IR", 13],
            minlevel: 3,
            description: "\n  " + "I sign a diabolic contract with my archdevil who welcomes me into the Order of Desolation. Choose either Architect of Ruin, Hellspeaker, Painkiller, Sanguine Knight, or Shadowmaster.",
        },
        "invokehell": {
            name: "Invoke Hell",
            source : ["IR", 13],
            minlevel: 3,
            description: "I can choose 2 Invoke Hell options, when I choose to Invoke Hell, I must finish a short rest before using it again.",
            usages: 1,
            recovery: "short rest",
        },
        "infernalconduit": {
            name: "Infernal Conduit",
            source : ["IR", 13],
            minlevel: 6,
            description: desc([
                "I have a pool of Infernal Conduit Dice, which are D10s.",
                "As an action, I can touch another creature and spend 1 or more Internal Conduit Dice.",
                "The target must make a Constituion Saving Throw against my Interdict DC. They can choose to fail this save.",
                "I can then choose to Invigorate or Devour the target."
            ]),
            choices: ["invigorate","devour"],
            choicesNotInMenu: false,
            "invigorate": {
                name: "Invigorate",
                source: ["IR",13],
                minlevel: 6,
                description: desc([
                    "On a failed Infernal Conduit Save, the target regains hit points equal to the total I rolled. Half as many on a success.",
                    "I take necrotic damage equal to the total damage dealt.",
                    "If I fall to 0 hit points, I fall unconscious and am stabilized."
                ]),
            },
            "devour": {
                name: "Devour",
                source: ["IR",14],
                minlevel: 6,
                description: desc([
                    "On a failed Infernal Conduit Save, the target takes necrotic damage equal to the total I rolled. Half as many on a success.",
                    "I regain hit points equal to the total roll regardless of save. The necrotic damage cannot be reduced in any way",
                    "At 11th level, the target also gains a level of exhaustion on a failed save. A creature cannot suffer more than three levels of exhaustion from this effect alone."
                ])
            },
            usages: [0,0,0,0,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10],
            action: ["action",""],
            recovery: "long rest",
        },
        "bloodprice": {
            name: "Blood Price",
            source: ["IR",14],
            minlevel: 10,
            description: desc([
                "Whenever I fail a saving throw, I can spend one hit dice and add it to the result of the failed save",
            ]),
        },
        "terrorizingforce": {
            name: "Terrorizing Force",
            source: ["IR",14],
            minlevel: 11,
            description: desc([
                "I choose a damage type: cold, fire, necrotic, or poison.",
                "When I hit with a weapon attack, I deal an extra 1d8 damage of the chosen type",
                "I can choose a different type when I finish a long rest",
            ]),
            choices: ["cold","fire","necrotic","poison"],
            calcChanges: {
                atkAdd: [
                    function (fields, v) {
                        if (v.isMeleeWeapon) {
                            output.extraDmg = '1d8';
                        }
                    }
                ]
            },
        },
        "superiorinterdict": {
            name: "Superior Interdict",
            source: ["IR",14],
            minlevel: 14,
            description: desc([
                "Damage from my seals ignores any resistances the target has.",
                "I can use a bonus action to regain a seal if I have none remaining."
            ]),
            usages: 1,
            recover: "long rest",
        },
        "infernalmajesty": {
            name: "Infernal Majesty",
            source: ["IR",14],
            minlevel: 17,
            description:([
                "I may spend a bonus action to gain the following effects for 10 minutes:",
                "Resistance to fire, cold, and necrotic damage.",
                "Wings, and the ability to fly with a speed of 60f.",
                "When I use Blood Price, I can cause an enemy I see within 10f to take damage equal to the number rolled.",
                "When I hit with a weapon attaack, my Terrorizing Force deals an extra 2d8 instead of 1d8.",
                "I may also choose to have my body dissapear, leaving my equipment behind and having my body reappear in Hell 1d6 days later."
            ]),
            usages: 1,
            recovery: "long rest",
        },
        "masterofhell": {
            name: "Master Of Hell",
            source : ["IR", 14],
            minlevel: 20,
            description: desc([
                "I can use an action to choose a point within 150f of me that I can see.",
                "When I do, I can choose Inferno, Pestilence, or Darkness to occur centered on that point with a 50f radius.",
            ]),
            choices: ["inferno","pestilence","darkness"],
            choicesNotInMenu: false,
            "inferno": {
                name: "Inferno",
                source: ["IR",14],
                minlevel: 20,
                description: desc([
                    "Each enemy in the area must make a dexterity saving throw.",
                    "On a failed save, a creature takes 5d10 fire damage plus 5d10 necrotic damage and they burn for 1 minute.",
                    "On a successful save, they take half as much damage, and do not burn.",
                    "A creature burning this way must repeat the save at the end of their turns., taking 1d10 fire and 1d10 nectrotic damage on a failed save or ending the effect early.",
                    "The fire cannot be extinguished by nonmagical means."
                ])
            },
            "pestilence": {
                name: "Pestilence",
                source: ["IR",15],
                minlevel: 20,
                description: desc([
                    "Each enemy in the area must make a constitution saving throw.",
                    "On a failed save, a creature takes 5d10 poison damage plus 5d10 nectrotic damage and is poisoned for 1 minute.",
                    "On a successful save, they take half as much damage, and are not poisoned."
                ])
            },
            "darkness": {
                name: "Darknesss",
                source: ["IR",15],
                minlevel: 20,
                description: desc([
                    "Each enemy in the area must make a constituion saving throw.",
                    "On a failed save, a creature taked 10d10 cold damage, and half as much on a successful save.",
                    "Each enemy within that area is blinded for 1 minute, or until they leave the area"
                ])
            },
            usages: 1,
            recovery: "long rest"
        }
    };
    
// Architect of Ruin
AddSubClass("illrigger", "architect of ruin", {
    regExpSearch: /architect of ruin/i,
    subname: "Architect of Ruin",
    source : ["IR", 17],
    features: {
        "subclassfeature3": {
            name: "Asmodeaus's Blessing",
            source: ["IR",17],
            minlevel: 3,
            description: desc([
                "I gain proficiency in one of the following skills of my choice: Arcana, History, Nature, or Religion",
                "Forked Tongue allows me to read and write all known languages."
            ]),
            skills: ["\n\n" + toUni("Illrigger") + "Choose one from Arcana, History, Nature, or Religion"],
        },
        "subclassfeature3.1": {
            name: "Spellcasting",
            source: ["IR",17],
            minlevel: 3,
            description: desc([
                "I can cast Illrigger cantrips and prepared spells, using Charisma as my spellcasting ability",
            ]),
        },
        "subclassfeature3.2": {
            name: "Invoke Hell: Enervating Spell",
            source: ["IR",18],
            minlevel: 3,
            description: desc([
                "When I deal damage with an Illrigger spell, I can expend a seal (No Action).",
                "The target has vulnerability to that spell's damage, ignoring any resistance or immunity",
            ]),
        },
        "subclassfeature3.3": {
            name: "Invoke Hell: Spellblade",
            source: ["IR",19],
            minlevel: 3,
            description: desc([
                "I can use my action to make both a melee weapon attack, and cast an Illrigger spell I know that has a casting time of 1 action.",
            ]),
        },
        "subclassfeature7": {
            name: "Hellish Versatility",
            source: ["IR",19],
            minlevel: 7,
            description: desc([
                "I can cast an Illrigger cantrip in place of one of my attacks granted by 'Extra Attack'.",
            ]),
        },
        "subclassfeature7.1": {
            name: "Asmodeus's Interdiction",
            source: ["IR",19],
            minlevel: 7,
            description: desc([
                "I gain additional interdict boons based on my level. They do not count against the number of interdict boons I can know",
            ]),
            "axiomaticseals": {
                name: "Axiomatic Seals",
                source: ["IR",19],
                minlevel: 7,
                description: desc([
                    "When I burn a seal to deal damage to a creature, I can add my Charisma modifier to each seal's damage",
                ]),
            },
            "spellbreaker": {
                name: "Spellbreaker",
                source: ["IR",19],
                minlevel: 13,
                description: desc([
                    "When an interdicted creature within 60f I can see casts as spell, I can use my reaction to burn one or more seals on them.",
                    "When I do, burning the seal deals no damage, I can instead cast counterspell on them without expending a spell slot.",
                    "Counterspell's level increases by 1 for each seal I burn after the first.",
                ]),
                action: ["reaction", "Counterspell"],
                spellcastingBonus: [{
                    spells: ["counterspell"],
                    name: "Spellbreaker:Counterspell",
                    selection: ["counterspell"],
                }],
            },
            "hellmage": {
                name: "Hell Mage",
                source: ["IR",19],
                minlevel: 18,
                description: desc([
                    "When I or an ally within 30f succeed on a saving throw from an enemies spell or magical effect, I can place 1 or more seals on that enemy.",
                    "The number of seals I can place is equal to my proficiency bonus",
                ]),
            },
        },
        "subclassfeature11": {
            name: "Submit",
            source: ["IR",19],
            minlevel: 11,
            description: desc([
                "When I cast an Illrigger spell I know, I can burn two seals on an Interdicted target to impose disadvantage on their saving throw against the spell.",
            ]),
        },
        "subclassfeature15": {
            name: "Vile Transmogrification",
            source: ["IR",19],
            minlevel: 15,
            description: desc([
                "I can use my bonus action to regain seals, or regain spell slots.",
                "I can expend one spell slot to regain a number of seals equal to that slot's level.",
                "I may choose to instead expend any number of seals to regain a spell slot equal to one-third that number.",
            ]),
            action: "bonus action",
            recovery: "long rest",
        },
    },
    spellcastingFactor: 2,
    spellcastingTable: [
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [2,0,0,0,0,0,0,0,0],
        [3,0,0,0,0,0,0,0,0],
        [3,0,0,0,0,0,0,0,0],
        [3,0,0,0,0,0,0,0,0],
        [4,2,0,0,0,0,0,0,0],
        [4,2,0,0,0,0,0,0,0],
        [4,2,0,0,0,0,0,0,0],
        [4,3,0,0,0,0,0,0,0],
        [4,3,0,0,0,0,0,0,0],
        [4,3,0,0,0,0,0,0,0],
        [4,3,2,0,0,0,0,0,0],
        [4,3,2,0,0,0,0,0,0],
        [4,3,2,0,0,0,0,0,0],
        [4,3,3,0,0,0,0,0,0],
        [4,3,3,0,0,0,0,0,0],
        [4,3,3,0,0,0,0,0,0],
        [4,3,3,1,0,0,0,0,0],
        [4,3,3,1,0,0,0,0,0],
    ],
    spellcastingKnown: {
        cantrips: [0,0,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3],
        spells: "list",
        prepared: true
    },
    spellcastingList: {
        extraspells: [
        "chill touch", "dancing lights", "fire bolt", "message", "minor illusion", "ray of frost", "shocking grasp", "thaumaturgy", "vicious mockery",
        "bane", "burning hands", "charm person", "color spray", "command", "detect magic", "disguise self", "hellish rebuke", "shield", "shield of faith", "silent image",
        "arcanists magic aura", "augury", "blur", "darkness", "detect thoughts", "enthrall", "heat metal", "hold person", "invisibility", "lesser restoration", "mirror image", "ray of enfeeblement", "scorching ray", "silence", "suggestion",
        "bestow curse", "dispel magic", "fear", "fly", "haste", "major image", "phantom steed", "remove curse", "revivify", "slow",
        "banishment", "blight", "compulsion", "death ward", "dimension door", "dominate beast", "greater invisibility", "hallucinatory terrain", "locate creature", "phantasmal killer",
        ],
        class: ["illrigger"],
    },
});

// Hellspeaker
AddSubClass("illrigger", "hellspeaker", {
    regExpSearch: /hellspeaker/i,
    subname: "Hellspeaker",
    source : ["IR", 22],
    features: {
        "subclassfeature3": {
            name: "Moloch's Blessing",
            source: ["IR",22],
            minlevel: 3,
            description: desc([
                "I gain proficiency in one of the following skills of my choice: Pursuasion or Deception",
                "Forked Tongue allows me to read and write all languages granted by the feature, and gives advantage on Charisma checks for those languages.",
            ]),
            skills: ["\n\n" + toUni("Illrigger") + "Choose one from Persuasion, or Deception."],
        },
        "subclassfeature3.1": {
            name: "Charm Enemy",
            source: ["IR",22],
            minlevel: 3,
            description: desc([
                "When I use my bonus action to place a seal on a Humanoid, I can attempt to charm them",
                "The target must succeed on a Charisma saving throw or be charmed for 1 hr or until my companions or I do anything harmful to them.",
                "While charmed, the target regards me as a friendly acquantaince. When the charmed condition ends, the target knows they were charmed by me.",
                "When I use this bonus action, I can additionally burn one or more seeals on one or more other interdicted Humanoids within 30 ft, attempting to charm those targets as well.",
                "After taking damage from the burned seals, each of those targets must succeed on a Charisma saving throw or be under the same charmed effect."
            ]),
            usages: "Charisma modifier per",
            recovery: "short rest",
        },
        "subclassfeature3.2": {
            name: "Invoke Hell: Honey-Sweet Blades",
            source: ["IR", 22],
            minlevel: 3,
            description: desc([
                "When I make an attack against an interdicted creature, I gain advantage on that attack (no action required).",
                "If the attack hits, it becomes a critical hit.",
            ]),
        },
        "subclassfeature3.3": {
            name: "Invoke Hell: Turncoat",
            source: ["IR", 23],
            minlevel: 3,
            description: desc([
                "As an action, I wield my manipulative tongue against my enemies. I choose a number of enemy creatures up to my proficiency bonus withing 60 ft that can hear me.",
                "Each target must succeed on a Charisma saving throw or use their reaction to make a weapon attack against a single target of your choice. A creature affected by this feature cannot attack themself",
            ]),
        },
        "subclassfeature7": {
            name: "Moloch's Interdiction",
            source: ["IR",23],
            minlevel: 7,
            description: desc([
                "I learn additional interdict boons based on my illrigger level. They do not count against the number of interdict boons I know.",
            ]),

            "redcant": {
                name: "Red Cant",
                source: ["IR",23],
                minlevel: 7,
                description: desc([
                    "When I make a Charisma check, I can expend a seal to treat a d20 roll of 9 or lower as a 10.",
                ]),
            },

            "slipperyploy": {
                name: "Slippery Ploy",
                source: ["IR",23],
                minlevel: 13,
                description: desc([
                    "When a creature targets me with an attack, spell, or other magical effect, I can place a seal on them as a reaction and force them to make a Charisma saving throw.",
                    "On a failed save, the creature must choose a new target or lose the attack or effect",
                ]),
                action: "reaction",
            },

            "incontrovertible": {
                name: "Incontrovertible",
                source: ["IR",23],
                minlevel: 18,
                description: desc([
                    "Interdicted creatures have disadvantage on Wisdom and Charisma saving throws.",
                ]),
            },
        },
        "subclassfeature11": {
            name: "Intransigent",
            source: ["IR",23],
            minlevel: 11,
            description: desc([
                "Me and each creature I choose withing 10 ft of me are immune to the charmed condition while I am concious.",
            ]),
        },
        "subclassfeature11.1": {
            name: "Let's Make a Deal",
            source: ["IR",23],
            minlevel: 11,
            description: desc([
                "I choose one willing creature within 60 feet who can hear me. Once during the duration, the creature can choose to gain advantage on one attack roll or saving throw they make and add a bonus equal to my proficiency bonus to the same roll.",
                "If the attack hits, or the saving roll succeeds, the creature gains temporary hitpoints equal to my Illrigger level. Otherwise, they have disadvantage on the attack or saving throw roll that they make.",
                "The disdvantage can't be cancelled out in any way. A creature can only make one deal with me at a time.",
            ]),
            usages: "Proficiency bonus per",
            recovery: "long rest",
            action: "bonus action"
        },
        "subclassfeature15": {
            name: "Quid Pro Quo",
            source: ["IR",23],
            minlevel: 15,
            description: desc([
                "As an action, I can attemptto banish a creature I can see within 30 ft. The target must save on a Charisma saving throw.",
                "On a failed save, the target is banished to Hell for 1 min, after which they return to an unoccupied space nearest to the one they left",
                "A target banished this way can repeat the saving throw at the end of each of their turns, ending the effect early on a success. Any creature effected by Quid Pro Quo is immune for 24 hours after.",
                "When the target is banished in this way, a devil jurist or horned devil appears in their place. They act as an ally to you and follow your command until the effect ends.",
                "Once you successfully banish a creature in this way, you can't use this feature again until you finish as long rest.",
            ]),
            usages: 1,
            recovery: "long rest",
            action: "action",
        },
    },
});

// Painkiller
AddSubClass("illrigger", "painkiller", {
    regExpSearch: /painkiller/i,
    subname: "Painkiller",
    source : ["IR", 23],
    features: {
        "subclassfeature3": {
            name: "Dispater's Blessing",
            source : ["IR", 24],
            minlevel: 3,
            description: desc([
                "I gain proficiency with heavy armor."
            ]),
            armorProfs : [true,true,true,true]
        },
        "subclassfeature3.1": {
            name: "Devestator",
            source: ["IR",24],
            minlevel: 3,
            description: desc([
                "I make a weapon attack and choose a number of willing creatures up to my proficiency bonus who I can see withing 30 ft.",
                "Each creature I choose can use a reaction to make a weapon attack or cast a damage-dealing cantrip with a casting time of 1 action.",
            ]),
            action: "action",
            recovery: "short rest",
        },
        "subclassfeature3.2": {
            name: "Invoke Hell: Grand Strategy",
            source: ["IR",24],
            minlevel: 3,
            description: desc([
                "I can choose one or more creatures within 60 ft of me who can hear me, up to a number equal to my proficiency bonus.",
                "Each target can immediately move up to half their speed without provoking opportunity attacks.",
            ]),
        },
        "subclassfeature3.3": {
            name: "Invoke Hell: Punishment",
            source: ["IR",24],
            minlevel: 3,
            description: desc([
                "When I am damaged by an attack, force the attacker to make a Wisdom saving throw.",
                "On a failed save, the attack takes necrotic damage equal to the damage they dealt you with the triggering attack. Half as much on a successful save.",
            ]),
            action: "reaction",
        },
        "subclassfeature7": {
            name: "Dispater's Interdiction",
            source: ["IR",24],
            minlevel: 7,
            description: ([
                "I gain additional interdict boons based on my level. They do not count against the number of interdict boons I can know.",
            ]),
            "telekeneticseal": {
                name: "Telekenetic Seal",
                source: ["IR",224],
                minlevel: 7,
                description: desc([
                    "When a creature I can see within 5 ft moves, I can place a seal on them.",
                    "When I do, they must succeed on a Wisdom saving throw or be restrained until the end of their next turn.",
                ]),
            },
            "bythethroat": {
                name: "By the Throat",
                source: ["IR",24],
                minlevel: 13,
                description: desc([
                    "When I use a bonus action to move or place a seal on a creature who is no more than one size larger than me, they must succeed on a Wisdom saving throw or be restrained until the end of their next turn.",
                ]),
            },
            "dispaterssupremacy": {
                name: "Dispater's Supremacy",
                source: ["IR",24],
                minlevel: 17,
                description: desc([
                    "Your attacks against interdicted creatures score a critical hit on an 18 through 20."
                ]),
            },
        },
        "subclassfeature11": {
            name: "You die on my command!",
            source: ["IR",24],
            minlevel: 11,
            description: desc([
                "When an ally within 30 feet of me drops to 0 hp without being killed, I may use my reaction to cause them to drop to 1 hp instead."
            ]),
            action: "reaction",
            recovery: "short rest",
        },
        "subclassfeature15": {
            name: "Deathstrike",
            source: ["IR",25],
            minlevel: 15,
            description: desc([
                "When I make a melee attack on an interdicted creature, I may burn one seal on the creature to make it a critical hit.",
                "When I do so, I also double the damage for the burned seal."
            ]),
            action: "reaction",
            usages: "Proficiency bonus per",
            recovery: "long rest",
        },
    },
});

// Sanguine Knight
AddSubClass("illrigger", "sanguineknight", {
    regExpSearch: /sanguine knight/i,
    subname: "Sanguine Knight",
    source: ["IR",25],
    features: {
        "subclassfeature3": {
            name: "Exsanguinate",
            source: ["IR", 24],
            minlevel: 3,
            description: desc([
                "When I burn seals on a creature who is not a Construct or Undead, choose an ally w/i 30 ft of me.",
                "That ally gains temporary hit points equal to the damage dealt by the seals to the interdicted creature.",
            ]),
        },
        "subclassfeature3.1": {
            name: "Sutekh's Blessing",
            source: ["IR",26],
            minlevel: 3,
            description: desc([
                "Until the end of my next turn, I can sense creatures who have blood w/i 120 ft of me w/o having to see them.",
                "This ability is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt.",
            ]),
            action: "action",
            recovery: "long rest",
            usages: "Proficiency bonus per",
        },
        "subclassfeature3.2": {
            name: "Invoke Hell: Embolden Allies",
            source: ["IR",26],
            minlevel: 3,
            description: desc([
                "Restore hit points equal to 5 x Illrigger Level, spread amongst myself and any other creatures w/i 30 ft I choose."
            ]),
            action: "bonus action",
        },
        "subclassfeature3.3": {
            name: "Invoke Hell: Vitilize",
            source: ["IR",26],
            minlevel: 3,
            description: desc([
                "For 1 min, each crewature of my choice w/i 30 feet of me gains a bonus to ability checks equal to my proficiency bonus",
            ]),
            action: "free action",
        },
        "subclassfeature7": {
            name: "Sutekh's Interdiction",
            source: ["IR",26],
            minlevel: 7,
            description: ([
                "I gain additional interdict boons based on my level. They do not count against the number of interdict boons I can know.",
            ]),
            "foulinterchange": {
                name: "Foul Interchange",
                source: ["IR",26],
                minlevel: 7,
                description: desc([
                    "Choose a creature w/i 30 ft I can see and expend a seal to end one of the following conditions afflicting them:",
                    "Blinded, Charmed, Dazed, Deafened, Frightened, Paralyzed, or Poisoned.",
                    "Another creature I can see w/i 60 ft of me must succeed on a Cha Save or suffer that same condition until the end of my next turn.",
                    "If that creature is immune to that condition, they don't suffer the condition, but the condition ends for the original creature.",
                ]),
                action: "action",
            },
            "sanguinegift": {
                name: "Sanguine Gift",
                source: ["IR",26],
                minlevel: 13,
                description: desc([
                    "When a creature I can see w/i 30 ft regains hit points, I can expend a seal and the creature gains additional hit points equal to my Illrigger level",
                ]),
            },
            "bloodforblood": {
                name: "Blood for Blood",
                source: ["IR",26],
                minlevel: 17,
                description: desc([
                    "Whenever an ally takes damage from an interdicted creature, that creature takes necrotic damage equal to my Proficiency Bonus",
                ]),
            },
        },
        "subclassfeature11": {
            name: "Bloodstroke",
            source: ["IR",26],
            minlevel: 11,
            description: ([
                "When an ally who has temp hp from Exsanguinate is hit by a melee attack, the attacker takes cold, fire, or necrotic damage (my choice) equal to your Illrigger level.",
            ]),
        },
        "subclassfeature15": {
            name: "Haemal Exchange",
            source: ["IR",26],
            minlevel: 15,
            description: ([
                "When an interdicted creature w/i 60ft of me makes an attack roll or saving throw, I can use my reaction to burn one of the seals on them.",
                "The target must roll a d8 and subtract the number rolled from the triggering attack roll or saving throw.",
                "I then empower an ally w/i 30ft of me. The next time they make an attack roll or saving throw, they roll a d8 and add the number to the roll",
            ]),
            action: "reaction"
        },
    },
});

// Shadowmaster
AddSubClass("illrigger", "shadowmaster", {
    regExpSearch: /shadowmaster/i,
    subname: "Shadowmaster",
    source : ["IR", 12],
    features: {
        "subclassfeature3": {
            name: "Strike From The Dark",
            source: ["IR",27],
            minlevel: 3,
            description: ([
                "Once per turn, when I hit an interdicted creature with a melee weapon attack and I have advantage on the attack roll, I can roll a number of d4s equal to my proficiency bonus and deal extra damage equal to the total I rolled",
                "The damage increased by 1d4 if the target is in dim light or darkness.",
            ]),
        },
        "subclassfeature3.1": {
            name: "Invoke Hell:Master of Disguise",
            source: ["IR",27],
            minlevel: 3,
            description: ([
                "As an action, I can cast the 'diguise self' spell without expending a spell slot"
            ]),
            action: "action"
        },
        "subclassfeature3.2": {
            name: "Invoke Hell:No Escape",
            source: ["IR", 27],
            minlevel: 3,
            description: ([
                "I can call on shadows to entrap a creature I can see w/i 30ft of me. The target must make a Cha. Saving Throw, with disadvantag if they are in dim light or darkness.",
                "On a failed save, the target's speed is halved and they can't willingly move more than 30ft away from me",
                "This effect ends for the target if I am incapacitated or die or if the target is more than 30 feet away from me"
            ]),
            action: "bonus action",
        },
        "subclassfeature7": {
            name: "Belial's Interdiction",
            source: ["IR", 27],
            minlevel: 7,
            description: ([
                "I gain additional interdict boons based on my level. They do not count against the number of interdict boons I can know."
            ]),
            "veiloflies": {
                name: "Veil of Lies",
                source: ["IR",27],
                minlevel: 7,
                description: [(
                    "Expend seal for invisibility (10 min, ends on attack/spell)"
                )],
                action: "bonus action"
            },
            "hellsassassin": {
                name: "Hell's Assassin",
                source: ["IR",27],
                minlevel: 13,
                description: [(
                    "On 1-2 on roll for seal/weapon dmg vs. Int. Tgt.: reroll, use new roll"
                )]
            },
            "darkmalediction": {
                name: "Dark Malediction",
                source: ["IR", 28],
                minlevel: 18,
                description: ([
                    "Int. Tgt. radiate darkness 10' rad. Nonmagical light doesn't illuminate, darkvision sees through. If overlaps magical/psionic light, overlap illuminated."
                ])
            },
        },
        "subclassfeature11": {
            name: "Umbral Killer",
            source: ["IR", 28],
            minlevel: 11,
            description: ([
                "DV 60 ft. (+60 ft. if have), Speed +10 ft., Adv. Dex(Stealth), Dex 1/2 dmg save: pass 0 dmg, fail 1/2 dmg"
            ]),
            speed: { allModes : "+10" },
            vision: [[
                "Darkvision", "60"
            ]],
            savetxt : { text : ["Dex save vs. area effects: fail \u2015 half dmg, success \u2015 no dmg"] },
        },
        "subclassfeature15": {
            name: "Doomed to the Shadows",
            source: ["IR", 28],
            minlevel: 15,
            description: ([
                "On SftD dmg, Reaction: burn seal, blind 1 min, no seal dmg."
            ])

        }
    }
});


//Spells
SpellsList["aura of desecration"] = {
    name: "Aura of Desecration",
    regExpSearch: /aura of desecration/i,
    source : ["IR", 32],
    classes: ["illrigger", "cleric", "paladin"],
    level: 4,
    school: "Abjur",
    time: "1 a",
    range: "S:30-ft rad",
    components: "V",
    duration: "Conc, 10 min",
    description: "Any creatures chosen that enters or starts turn inside 30-ft aura from self makes con save, 4d6 and no healing until their next turn on fail, half damage on save.",
    descriptionFull:  desc([
        "Life-defiling energy radiates from you in an aura with a 30-foot radius. Until the spell ends, the aura moves with you, centered on you. When any creatures of my choice enters the area or starts its turn there, it must make a constitution saving throw.",
        "On a failed save, a creature takes 4d6 necrotic damage, and can't regain hit points until the start of their next turn.",
        "On a successful save, a creature takes half as much damage and sufferes no effects.",
    ]),
    ritual: false,
    psionic: false,
};

SpellsList["hells lash"] = {
    name: "Hell's Lash",
    regExpSearch: /hells lash/i,
    source : ["IR", 32],
    classes: ["illrigger", "sorcerer", "warlock", "wizard"],
    level: 1,
    school: "Evoc",
    time: "1 a",
    range: "30 ft",
    components: "V,S,M",
    compMaterial: "The forked tongue of a serpent",
    duration: "Conc, 1 min",
    description: "Ranged atk, con save. 4d4+2d4/SL fire damage on fail and tethered. Tethered takes 2d4+1d4/SL at the beggining of each turn. Can save at the end of each turn. Interdicted Tethered Creatures allow reaction to burn and cause save disadvantage",
    descriptionFull: desc ([
        "You produce a whip of crimson energy that lashes out at a creature within range, creating a conduit between you and the target.",
        "The target must succeed on a Constitution saving throw or take 4d4 + 2d4/SL fire damage and be tethered.",
        "A tethered creature takes 2d4 + 1d4/SL damage at the begginning of each of their turns, and can attempt to repeat the saving throw at the end of each of their turns, ending the effect.",
        "For the duration, if the target is an interdicted creature, you can use your reaction to burn one of your seals on the creature. When you do, the creature makes the next saving throw to end this spell with disadvantage.",
    ]),
    ritual: false,
    psionic: false,
};

SpellsList['hellfire'] = {
    name: "Hellfire",
    regExpSearch: /hellfire/i,
    source: ["IR",33],
    classes: ["illrigger", "sorcerer", "warlock", "wizard"],
    level: 0,
    school: "Evoc",
    time: "1 a",
    range: "120 ft",
    components: "V,S",
    duration: "Instantaneous",
    description: "Choose target you can see within range. Charisma Saving Throw or 1d4 fire plus 1d4 Necro. damage.",
    descriptionFull: desc([
        "You create an eruption of smoldering hellfire around a creature you can see within range. The target must succeed on a Charisma saving throw or take 1d4 fire damage plus 1d4 necrotic damage",
        "Both of the spell's damage types increate by 1d4 when you reach 5th level, 11th level,and 17th level.",
    ]),
};

SpellsList['infernal challenge'] = {
    name: "Infernal Challenge",
    regExpSearch: /infernal challenge/i,
    source: ["IR",33],
    classes: ["illrigger", "paladin"],
    level: "2",
    school: "Ench",
    time: "1 bns",
    range: "30 ft",
    components: "V",
    duration: "Conc, 1 min",
    description: "If no allies within 5ft, choose creature in range who can see/hear you. Cha Save or you get +2 AC, target has disadvantage on atk rolls on creatures not you, Cha Save on first time moving away or speed 0.",
    descriptionFull: desc([
        "You offer a creature a creature a compelling challenge. If you have no allies within 5 feet of you, choose one creeature withing range who can see and hear you.",
        "They must succeed on a Charisma saving throw or answer your challenge and fight you.",
        "For the duration, you gain a +2 bonus to AC, the target has disadvantage on attack rolls against creatures other than you, and the first time the target tries to move away from you on a turn, the must succeed on a Charismas saving throw or their speed becomes 0 until the start of their next turn",
        "This spell ends if you end your turn more than 30 feet away from the target",
    ]),
    ritual: false,
    psionic: false,
};

SpellsList['maligned weapon'] = {
    name: "Maligned Weapon",
    regExpSearch: /maligned weapon/i,
    source: ["IR",33],
    classes: ["illrigger", "paladin"],
    level: 4,
    school: "Evoc",
    time: "1 bns",
    range: "Touch",
    components: "V,S",
    duration: "Con, 1 h",
    description: "Imbue weapon. Extinguishes light in 30f radius. Add 2d6 Necro. on hit. Bns to end early and 30f burst, 4d6 Necro.+frightened on failed Wis Save or half no frightened. Can save at end of each turn.",
    descriptionFull: desc([
        "You imbue a weapon you touch with an infernal blessing. Until the spell ends, the weapon extinguishes any mundane sources of light in a 30-foot radius.",
        "In addition, attacks made with the weapon deal an extra 2d6 necrotic damage on a hit. If the weapon isn’t already a magic weapon, it becomes one for the duration.",
        "As a bonus action on your turn while holding this weapon, you can end the spell early and cause the weapon to emit a burst of dark energy.",
        "Each creature of your choice who you can see within 30 feet of you must make a Wisdom saving throw. On a failed save, a creature takes 4d6 necrotic damage and is frightened for 1 minute.",
        "On a successful save, a creature takes half as much damage and isn’t frightened. At the end of each of their turns, a frightened creature can make a Wisdom saving throw, ending the effect on themself on a success.",
    ]),
    ritual: false,
    psionic: false,
};

SpellsList["mote of hell"] = {
    name: "Mote of Hell",
    regExpSearch: /mote of hell/i,
    source : ["IR", 33],
    classes: ["illrigger", "sorcerer", "warlock", "wizard"],
    level: 3,
    school: "Conj",
    time: "1 a",
    range: "150 ft",
    components: "V,S,M",
    compMaterial: "A piece of sulfur",
    duration: "Conc, 1 min",
    description: "15-ft rad sphere of Hell: magic dark, diff terr, crea start inside 3d6 fire dmg; end turn 30-ft rad Wis save or 3d6 psychic dmg",
    descriptionFull: "You manifest a pocket of Hell. A 15-foot-radius sphere of darkness, brimstone, and blasting heat appears, centered on a point within range and lasting for the duration. The cloud of hellfire echoes with the cries of damned souls that can be heard by creatures within 30 feet of it. No light, even magical light, can illuminate the cloud, and any creatures fully within the area are blinded. The cloud warps the timescape, making the cloud's area difficult terrain. A creature that starts their turn in the area takes 3d6 fire damage. A creature that ends their turn in the area must succeed on a Wisdom saving throw or take 3d6 psychic damage as the voices of the damned crowd their mind.",
    ritual: false,
    psionic: false,
};

SpellsList["vengeful blade"] = {
    name: "Vengeful Blade",
    regExpSearch: /vengeful blade/i,
    source : ["IR", 34],
    classes: ["illrigger", "sorcerer", "warlock", "wizard"],
    level: 0,
    school: "Evpc",
    time: "1 a",
    range: "S:5-ft rad",
    components: "S,M",
    duration: "Instantaneous",
    description: "Melee wea atk with cast; hit: If CL5, +1d8 Necro dmg on melee at; if they attack or cast spell befkore next rnd +1d8 Necro. dmg: +1d8 to both at CL5, 11, 17.",
    descriptionFull: desc([
    "You brandish the weapon used in the spell’s casting and make a melee attack with it against one creature within 5 feet of you.",
    "On a hit, the target  suffers the weapon attack’s normal effects and then radiates a dark aura of energy until the start of your next turn.",
    "If the target makes an attack or casts a spell before then, the target takes 1d8 necrotic damage and the spell ends.",
    "This spell’s damage increases when you reach certain levels. At 5th level, the melee attack deals an extra 1d8 necrotic damage to the target on a hit, and the damage the target takes for making an attack or casting a spell increases to 2d8.",
    "Both damage rolls increase by 1d8 at 11th level (2d8 and 3d8) and again at 17th level (3d8 and 4d8).",
    ]),
    ritual: false,
    psionic: false,
};

SpellsList["wall of death"] = {
    name: "Wall of Death",
    regExpSearch: /wall of death/i,
    source : ["IR", 34],
    classes: ["illrigger", "druid", "sorcerer", "wizard"],
    level: 4,
    school: "Necro",
    time: "1 a",
    range: "120 ft",
    components: "V,S,M",
    compMaterial: "A chip of onyx",
    duration: "Conc, 1 min",
    description: "60x1x20ft (lxwxh) or 10ft rad 20 ft high opaque wall; at cast all in Con save or 4d8 Necro. dmg if fail; save halves; One chosen side of wall 4d8 Necro. to all w/i 10ft or inside or entering. Reaction to gain temp HP = dmg dealt.",
    descriptionFull: desc([
    "You create a wall of necrotic energy on a surface within range. You can make a wall up to 60 feet long, 20 feet high, and 1 foot thick, or can make a ringed wall up to 20 feet in diameter, 20 feet high, and 1 foot thick.",
    "The wall is opaque and lasts for the duration. When the wall appears, each creature in its area must make a Constitution saving throw. A creature takes 4d8 necrotic damage on a failed save, or half as much damage on a successful one.",
    "One side of the wall, selected by you when you cast this spell, deals 4d8 necrotic damage to each creature who ends their turn within 10 feet of that  side or inside the wall. A creature takes the same damage when they enter the wall for the first timeon a turn or end their turn there.",
    "The other side of the wall deals no damage. Whenever a creature takes damage from the wall, you can use your reaction to gain temporary hit points equal to the amount of damage dealt.",
    ]),
    ritual: false,
    psionic: false,
};

