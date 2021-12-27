const db = require('better-sqlite3')('database.sqlite', {
    verbose: console.log
})
/*
db.prepare(`CREATE TABLE "rooms" (
	"ID"	INTEGER NOT NULL DEFAULT 1,
	"ownerKey"	TEXT NOT NULL DEFAULT '00ff00',
	"ownerIP"	TEXT NOT NULL DEFAULT 'hash',
	"roomName"	TEXT NOT NULL DEFAULT 'room',
	"roomPass"	TEXT NOT NULL DEFAULT '00ff00',
	"roomID"	TEXT NOT NULL DEFAULT '9mbX6VCDNaWYni9G',
    "timestamp"	INTEGER NOT NULL DEFAULT -1,
    
	PRIMARY KEY("ID")
);`).run()

db.prepare(`CREATE TABLE "roomPlaylist" (
	"ID"	INTEGER NOT NULL DEFAULT 1,
	"roomID"	TEXT,
	"URL"	TEXT,
	"requestedBy"	TEXT,
	PRIMARY KEY("ID")
);`).run()*/

db.prepare('DELETE FROM rooms').run()

// STOP PLS