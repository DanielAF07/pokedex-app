const nameList = [
  'Abomasnow',
  'Abra',
  'Absol',
  'Accelgor',
  'Aegislash',
  'Aerodactyl',
  'Aggron',
  'Aipom',
  'Alakazam',
  'Alomomola',
  'Altaria',
  'Amaura',
  'Ambipom',
  'Amoonguss',
  'Ampharos',
  'Anorith',
  'Arbok',
  'Arcanine',
  'Arceus',
  'Archen',
  'Archeops',
  'Ariados',
  'Armaldo',
  'Aromatisse',
  'Aron',
  'Articuno',
  'Audino',
  'Aurorus',
  'Avalugg',
  'Axew',
  'Azelf',
  'Azumarill',
  'Azurill',
  'Bagon',
  'Baltoy',
  'Banette',
  'Barbaracle',
  'Barboach',
  'Basculin',
  'Bastiodon',
  'Bayleef',
  'Beartic',
  'Beautifly',
  'Beedrill',
  'Beheeyem',
  'Beldum',
  'Bellossom',
  'Bellsprout',
  'Bergmite',
  'Bibarel',
  'Bidoof',
  'Binacle',
  'Bisharp',
  'Blastoise',
  'Blaziken',
  'Blissey',
  'Blitzle',
  'Boldore',
  'Bonsly',
  'Bouffalant',
  'Braixen',
  'Braviary',
  'Breloom',
  'Bronzong',
  'Bronzor',
  'Budew',
  'Buizel',
  'Bulbasaur',
  'Buneary',
  'Bunnelby',
  'Burmy',
  'Butterfree',
  'Cacnea',
  'Cacturne',
  'Camerupt',
  'Carbink',
  'Carnivine',
  'Carracosta',
  'Carvanha',
  'Cascoon',
  'Castform',
  'Caterpie',
  'Celebi',
  'Chandelure',
  'Chansey',
  'Charizard',
  'Charmander',
  'Charmeleon',
  'Chatot',
  'Cherrim',
  'Cherubi',
  'Chesnaught',
  'Chespin',
  'Chikorita',
  'Chimchar',
  'Chimecho',
  'Chinchou',
  'Chingling',
  'Cinccino',
  'Clamperl',
  'Clauncher',
  'Clawitzer',
  'Claydol',
  'Clefable',
  'Clefairy',
  'Cleffa',
  'Cloyster',
  'Cobalion',
  'Cofagrigus',
  'Combee',
  'Combusken',
  'Conkeldurr',
  'Corphish',
  'Corsola',
  'Cottonee',
  'Cradily',
  'Cranidos',
  'Crawdaunt',
  'Cresselia',
  'Croagunk',
  'Crobat',
  'Croconaw',
  'Crustle',
  'Cryogonal',
  'Cubchoo',
  'Cubone',
  'Cyndaquil',
  'Darkrai',
  'Darmanitan',
  'Darumaka',
  'Dedenne',
  'Deerling',
  'Deino',
  'Delcatty',
  'Delibird',
  'Delphox',
  'Deoxys',
  'Dewgong',
  'Dewott',
  'Dialga',
  'Diancie',
  'Diggersby',
  'Diglett',
  'Ditto',
  'Dodrio',
  'Doduo',
  'Donphan',
  'Doublade',
  'Dragalge',
  'Dragonair',
  'Dragonite',
  'Drapion',
  'Dratini',
  'Drifblim',
  'Drifloon',
  'Drilbur',
  'Drowzee',
  'Druddigon',
  'Ducklett',
  'Dugtrio',
  'Dunsparce',
  'Duosion',
  'Durant',
  'Dusclops',
  'Dusknoir',
  'Duskull',
  'Dustox',
  'Dwebble',
  'Eelektrik',
  'Eelektross',
  'Eevee',
  'Ekans',
  'Electabuzz',
  'Electivire',
  'Electrike',
  'Electrode',
  'Elekid',
  'Elgyem',
  'Emboar',
  'Emolga',
  'Empoleon',
  'Entei',
  'Escavalier',
  'Espeon',
  'Espurr',
  'Excadrill',
  'Exeggcute',
  'Exeggutor',
  'Exploud',
  "farfetch'd",
  'Fearow',
  'Feebas',
  'Fennekin',
  'Feraligatr',
  'Ferroseed',
  'Ferrothorn',
  'Finneon',
  'Flaaffy',
  'Flabébé',
  'Flareon',
  'Fletchinder',
  'Fletchling',
  'Floatzel',
  'Floette',
  'Florges',
  'Flygon',
  'Foongus',
  'Forretress',
  'Fraxure',
  'Frillish',
  'Froakie',
  'Frogadier',
  'Froslass',
  'Furfrou',
  'Furret',
  'Gabite',
  'Gallade',
  'Galvantula',
  'Garbodor',
  'Garchomp',
  'Gardevoir',
  'Gastly',
  'Gastrodon',
  'Genesect',
  'Gengar',
  'Geodude',
  'Gible',
  'Gigalith',
  'Girafarig',
  'Giratina',
  'Glaceon',
  'Glalie',
  'Glameow',
  'Gligar',
  'Gliscor',
  'Gloom',
  'Gogoat',
  'Golbat',
  'Goldeen',
  'Golduck',
  'Golem',
  'Golett',
  'Golurk',
  'Goodra',
  'Goomy',
  'Gorebyss',
  'Gothita',
  'Gothitelle',
  'Gothorita',
  'Gourgeist',
  'Granbull',
  'Graveler',
  'Greninja',
  'Grimer',
  'Grotle',
  'Groudon',
  'Grovyle',
  'Growlithe',
  'Grumpig',
  'Gulpin',
  'Gurdurr',
  'Gyarados',
  'Happiny',
  'Hariyama',
  'Haunter',
  'Hawlucha',
  'Haxorus',
  'Heatmor',
  'Heatran',
  'Heliolisk',
  'Helioptile',
  'Heracross',
  'Herdier',
  'Hippopotas',
  'Hippowdon',
  'Hitmonchan',
  'Hitmonlee',
  'Hitmontop',
  'Honchkrow',
  'Honedge',
  'Ho-oh',
  'Hoopa',
  'Hoothoot',
  'Hoppip',
  'Horsea',
  'Houndoom',
  'Houndour',
  'Huntail',
  'Hydreigon',
  'Hypno',
  'Igglybuff',
  'Illumise',
  'Infernape',
  'Inkay',
  'Ivysaur',
  'Jellicent',
  'Jigglypuff',
  'Jirachi',
  'Jolteon',
  'Joltik',
  'Jumpluff',
  'Jynx',
  'Kabuto',
  'Kabutops',
  'Kadabra',
  'Kakuna',
  'Kangaskhan',
  'Karrablast',
  'Kecleon',
  'Keldeo',
  'Kingdra',
  'Kingler',
  'Kirlia',
  'Klang',
  'Klefki',
  'Klink',
  'Klinklang',
  'Koffing',
  'Krabby',
  'Kricketot',
  'Kricketune',
  'Krokorok',
  'Krookodile',
  'Kyogre',
  'Kyurem',
  'Lairon',
  'Lampent',
  'Landorus',
  'Lanturn',
  'Lapras',
  'Larvesta',
  'Larvitar',
  'Latias',
  'Latios',
  'Leafeon',
  'Leavanny',
  'Ledian',
  'Ledyba',
  'Lickilicky',
  'Lickitung',
  'Liepard',
  'Lileep',
  'Lilligant',
  'Lillipup',
  'Linoone',
  'Litleo',
  'Litwick',
  'Lombre',
  'Lopunny',
  'Lotad',
  'Loudred',
  'Lucario',
  'Ludicolo',
  'Lugia',
  'Lumineon',
  'Lunatone',
  'Luvdisc',
  'Luxio',
  'Luxray',
  'Machamp',
  'Machoke',
  'Machop',
  'Magby',
  'Magcargo',
  'Magikarp',
  'Magmar',
  'Magmortar',
  'Magnemite',
  'Magneton',
  'Magnezone',
  'Makuhita',
  'Malamar',
  'Mamoswine',
  'Manaphy',
  'Mandibuzz',
  'Manectric',
  'Mankey',
  'Mantine',
  'Mantyke',
  'Maractus',
  'Mareep',
  'Marill',
  'Marowak',
  'Marshtomp',
  'Masquerain',
  'Mawile',
  'Medicham',
  'Meditite',
  'Meganium',
  'Meloetta',
  'Meowstic',
  'Meowth',
  'Mesprit',
  'Metagross',
  'Metang',
  'Metapod',
  'Mew',
  'Mewtwo',
  'Mienfoo',
  'Mienshao',
  'Mightyena',
  'Milotic',
  'Miltank',
  'Mime jr.'
  ,'minccino',
  'Minun',
  'Misdreavus',
  'Mismagius',
  'Moltres',
  'Monferno',
  'Mothim',
  'Mr. Mime',
  'Mudkip',
  'Muk',
  'Munchlax',
  'Munna',
  'Murkrow',
  'Musharna',
  'Natu',
  'Nidoking',
  'Nidoqueen',
  'Nidoran-f',
  'Nidoran-m',
  'Nidorina',
  'Nidorino',
  'Nincada',
  'Ninetales',
  'Ninjask',
  'Noctowl',
  'Noibat',
  'Noivern',
  'Nosepass',
  'Numel',
  'Nuzleaf',
  'Octillery',
  'Oddish',
  'Omanyte',
  'Omastar',
  'Onix',
  'Oshawott',
  'Pachirisu',
  'Palkia',
  'Palpitoad',
  'Pancham',
  'Pangoro',
  'Panpour',
  'Pansage',
  'Pansear',
  'Paras',
  'Parasect',
  'Patrat',
  'Pawniard',
  'Pelipper',
  'Persian',
  'Petilil',
  'Phanpy',
  'Phantump',
  'Phione',
  'Pichu',
  'Pidgeot',
  'Pidgeotto',
  'Pidgey',
  'Pidove',
  'Pignite',
  'Pikachu',
  'Piloswine',
  'Pineco',
  'Pinsir',
  'Piplup',
  'Plusle',
  'Politoed',
  'Poliwag',
  'Poliwhirl',
  'Poliwrath',
  'Ponyta',
  'Poochyena',
  'Porygon',
  'Porygon2',
  'Porygon-z',
  'Primeape',
  'Prinplup',
  'Probopass',
  'Psyduck',
  'Pumpkaboo',
  'Pupitar',
  'Purrloin',
  'Purugly',
  'Pyroar',
  'Quagsire',
  'Quilava',
  'Quilladin',
  'Qwilfish',
  'Raichu',
  'Raikou',
  'Ralts',
  'Rampardos',
  'Rapidash',
  'Raticate',
  'Rattata',
  'Rayquaza',
  'Regice',
  'Regigigas',
  'Regirock',
  'Registeel',
  'Relicanth',
  'Remoraid',
  'Reshiram',
  'Reuniclus',
  'Rhydon',
  'Rhyhorn',
  'Rhyperior',
  'Riolu',
  'Roggenrola',
  'Roselia',
  'Roserade',
  'Rotom',
  'Rufflet',
  'Sableye',
  'Salamence',
  'Samurott',
  'Sandile',
  'Sandshrew',
  'Sandslash',
  'Sawk',
  'Sawsbuck',
  'Scatterbug',
  'Sceptile',
  'Scizor',
  'Scolipede',
  'Scrafty',
  'Scraggy',
  'Scyther',
  'Seadra',
  'Seaking',
  'Sealeo',
  'Seedot',
  'Seel',
  'Seismitoad',
  'Sentret',
  'Serperior',
  'Servine',
  'Seviper',
  'Sewaddle',
  'Sharpedo',
  'Shaymin',
  'Shedinja',
  'Shelgon',
  'Shellder',
  'Shellos',
  'Shelmet',
  'Shieldon',
  'Shiftry',
  'Shinx',
  'Shroomish',
  'Shuckle',
  'Shuppet',
  'Sigilyph',
  'Silcoon',
  'Simipour',
  'Simisage',
  'Simisear',
  'Skarmory',
  'Skiddo',
  'Skiploom',
  'Skitty',
  'Skorupi',
  'Skrelp',
  'Skuntank',
  'Slaking',
  'Slakoth',
  'Sliggoo',
  'Slowbro',
  'Slowking',
  'Slowpoke',
  'Slugma',
  'Slurpuff',
  'Smeargle',
  'Smoochum',
  'Sneasel',
  'Snivy',
  'Snorlax',
  'Snorunt',
  'Snover',
  'Snubbull',
  'Solosis',
  'Solrock',
  'Spearow',
  'Spewpa',
  'Spheal',
  'Spinarak',
  'Spinda',
  'Spiritomb',
  'Spoink',
  'Spritzee',
  'Squirtle',
  'Stantler',
  'Staraptor',
  'Staravia',
  'Starly',
  'Starmie',
  'Staryu',
  'Steelix',
  'Stoutland',
  'Stunfisk',
  'Stunky',
  'Sudowoodo',
  'Suicune',
  'Sunflora',
  'Sunkern',
  'Surskit',
  'Swablu',
  'Swadloon',
  'Swalot',
  'Swampert',
  'Swanna',
  'Swellow',
  'Swinub',
  'Swirlix',
  'Swoobat',
  'Sylveon',
  'Taillow',
  'Talonflame',
  'Tangela',
  'Tangrowth',
  'Tauros',
  'Teddiursa',
  'Tentacool',
  'Tentacruel',
  'Tepig',
  'Terrakion',
  'Throh',
  'Thundurus',
  'Timburr',
  'Tirtouga',
  'Togekiss',
  'Togepi',
  'Togetic',
  'Torchic',
  'Torkoal',
  'Tornadus',
  'Torterra',
  'Totodile',
  'Toxicroak',
  'Tranquill',
  'Trapinch',
  'Treecko',
  'Trevenant',
  'Tropius',
  'Trubbish',
  'Turtwig',
  'Tympole',
  'Tynamo',
  'Typhlosion',
  'Tyranitar',
  'Tyrantrum',
  'Tyrogue',
  'Tyrunt',
  'Umbreon',
  'Unfezant',
  'Unown',
  'Ursaring',
  'Uxie',
  'Vanillish',
  'Vanillite',
  'Vanilluxe',
  'Vaporeon',
  'Venipede',
  'Venomoth',
  'Venonat',
  'Venusaur',
  'Vespiquen',
  'Vibrava',
  'Victini',
  'Victreebel',
  'Vigoroth',
  'Vileplume',
  'Virizion',
  'Vivillon',
  'Volbeat',
  'Volcanion',
  'Volcarona',
  'Voltorb',
  'Vullaby',
  'Vulpix',
  'Wailmer',
  'Wailord',
  'Walrein',
  'Wartortle',
  'Watchog',
  'Weavile',
  'Weedle',
  'Weepinbell',
  'Weezing',
  'Whimsicott',
  'Whirlipede',
  'Whiscash',
  'Whismur',
  'Wigglytuff',
  'Wingull',
  'Wobbuffet',
  'Woobat',
  'Wooper',
  'Wormadam',
  'Wurmple',
  'Wynaut',
  'Xatu',
  'Xerneas',
  'Yamask',
  'Yanma',
  'Yanmega',
  'Yveltal',
  'Zangoose',
  'Zapdos',
  'Zebstrika',
  'Zekrom',
  'Zigzagoon',
  'Zoroark',
  'Zorua',
  'Zubat',
  'Zweilous',
  'Zygarde',  
]

export default nameList