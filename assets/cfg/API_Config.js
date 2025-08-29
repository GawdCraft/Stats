/* GawsStats API Config */

// Stats Database API
var API_URL_DB_STATS = "https://gawdscape.x10.mx/api/stats";

// Banned Players API
var API_URL_DB_BANS = "https://gawdscape.x10.mx/api/bans";

// Player Avatar URL
var API_URL_PLAYER_IMG = "https://gawdscape.x10.mx/api/avatar%PLAYER%/%SIZE%

// Player ID URL
var API_URL_PLAYER_ID = "https://gawdscape.x10.mx/api/player/%PLAYER$";


// Servers to Display
var API_SERVERS = [
//  Server_Name: [
//    "World_Name",
  //  ],
  Survival: [
    "world",
    "world_nether",
    "World_the_end"
  ],
  Factions: [
    "world",
    "world_nether",
    "World_the_end
  ]
];


// true=only show listed / false=show all but listed
var API_STATS_MODE = false;

// Stats to Display
var API_STATS = [
  "Stat_ID",
];


// true=only show listed / false=show all but listed
var API_ADVANCEMENTS_MODE = false;

// Stats to Display
var API_ADVANCEMENTS = [
  "ADVANCEMENT_ID",
];
