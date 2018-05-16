// game object

var lotrRPG = {
    characters: {
        frodo: {
            name: "Frodo",
            imageSource: "assets/imageSources/frodo.png",
            gameDescription: "Starting with a low initial health pool and attack power, but high armor thanks to Bilbo's gift of Mythril, Frodo is a fragile yet resilient hobbit that can use his special ability 'The One Ring' to disappear and evade all damage for a turn.",
            loreDescription: "Thanks to his famous uncle Bilbo, Frodo is an atypical Hobbit who had dreams of one day leaving the Shire and seeing the wonders of Middle Earth. These dreams were realized, sometimes to Frodo's dismay, when he did what none of the other esteemed members of The Council of Elrond could: he accepted the burden of The Ring.",
            hp: 75,
            baseAttack: 5,
            baseArmor: 75,
            specialAbility: {},
        },
        sam: {
            name: "Samwise",
            imageSource: "assets/imageSources/sam.png",
            gameDescription: "Sam is a steadfast hobbit. He has a decent initial health pool and attack power, as well as his 'Steadfast' special ability that ensures his survival through the next enemy attack in addition to a counter-attack of equal damage.",
            loreDescription: "An exceptionally loyal hobbit, Samwise Gamgee found himself as part of the fellowship after eavesdropping on Gandalf and Frodo while doing his job as Frodo's gardener.",
            hp: 125,
            baseAttack: 7,
            baseArmor: 25,
            specialAbility: {},
        },
        aragorn: {
            name: "Aragorn",
            imageSource: "assets/imageSources/aragorn.png",
            gameDescription: "Sam is a steadfast hobbit. He has a decent initial health pool and attack power, as well as his 'Steadfast' special ability that ensures his survival through the next enemy attack in addition to a counter-attack of equal damage.",
            loreDescription: "An exceptionally loyal hobbit, Samwise Gamgee found himself as part of the fellowship after eavesdropping on Gandalf and Frodo while doing his job as Frodo's gardener.",
            hp: 200,
            baseAttack: 10,
            baseArmor: 0,
            specialAbility: {},
        },
        gimli: {
            name: "Gimli",
            imageSource: "assets/imageSources/gimli.png",
            gameDescription: "A dwarf warrior of royal blood, Gimli is a strong, heavy-hitting character that can use his 'Chop' ability to deal devastating damage to enemies.",
            loreDescription: "Son of Gloin, Nephew of Balin, Gimli is a proud dwarf of royal blood. His devotion to his family is only outdone by his devotion to the people of Middle Earth, which is why he so willingly accepted the call to Elrond's council as well as the task of accompanying humans, wizards, hobbits, and dwarves on the journey to rid Middle Earth of Sauron and his ring.",
            hp: 225,
            baseAttack: 12,
            baseArmor: 50,
            specialAbility: {},
        },
        legolas: {
            name: "Legolas",
            imageSource: "assets/imageSources/legolas.png",
            gameDescription: "Legolas has low initial health and armor, but his high damage combined with his passive ability to randomly dodge attacks allows him to be a true threat to any allies of Sauron.",
            loreDescription: "Legolas is a skilled archer of the woodland realm. Few are able to match his accuracy with a bow, and fewer have the strength to see through the trials that he did while part of the fellowship.",
            hp: 100,
            baseAttack: 13,
            baseArmor: 25,
            specialAbility: {},
        },
        gandalf: {
            name: "Gandalf",
            imageSource: "assets/imageSources/gandalf.png",
            gameDescription: "Low health and no armor, but Gandalf's magic gives him the highest attack of any character, making him a worthy opponent of any evil Middle Earth may face him with.",
            loreDescription: "",
            hp: 100,
            baseAttack: 15,
            baseArmor: 0,
            specialAbility: {},
        },
        // fill in the rest of the fellowship later on
        // Boromir: {},
        // Pippin: {},
        // Merry: {},
    },
    enemies: {},
    areas: {},
    loot: {},
    functions: {},
}


$(document).ready(function() {


}) // end of doc.ready