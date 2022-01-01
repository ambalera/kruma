/*
if you are looking at this, you are sus
⠀⠀⠀⡯⡯⡾⠝⠘⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢊⠘⡮⣣⠪⠢⡑⡌
⠀⠀⠀⠟⠝⠈⠀⠀⠀⠡⠀⠠⢈⠠⢐⢠⢂⢔⣐⢄⡂⢔⠀⡁⢉⠸⢨⢑⠕⡌
⠀⠀⡀⠁⠀⠀⠀⡀⢂⠡⠈⡔⣕⢮⣳⢯⣿⣻⣟⣯⣯⢷⣫⣆⡂⠀⠀⢐⠑⡌
⢀⠠⠐⠈⠀⢀⢂⠢⡂⠕⡁⣝⢮⣳⢽⡽⣾⣻⣿⣯⡯⣟⣞⢾⢜⢆⠀⡀⠀⠪
⣬⠂⠀⠀⢀⢂⢪⠨⢂⠥⣺⡪⣗⢗⣽⢽⡯⣿⣽⣷⢿⡽⡾⡽⣝⢎⠀⠀⠀⢡
⣿⠀⠀⠀⢂⠢⢂⢥⢱⡹⣪⢞⡵⣻⡪⡯⡯⣟⡾⣿⣻⡽⣯⡻⣪⠧⠑⠀⠁⢐
⣿⠀⠀⠀⠢⢑⠠⠑⠕⡝⡎⡗⡝⡎⣞⢽⡹⣕⢯⢻⠹⡹⢚⠝⡷⡽⡨⠀⠀⢔
⣿⡯⠀⢈⠈⢄⠂⠂⠐⠀⠌⠠⢑⠱⡱⡱⡑⢔⠁⠀⡀⠐⠐⠐⡡⡹⣪⠀⠀⢘
⣿⣽⠀⡀⡊⠀⠐⠨⠈⡁⠂⢈⠠⡱⡽⣷⡑⠁⠠⠑⠀⢉⢇⣤⢘⣪⢽⠀⢌⢎
⣿⢾⠀⢌⠌⠀⡁⠢⠂⠐⡀⠀⢀⢳⢽⣽⡺⣨⢄⣑⢉⢃⢭⡲⣕⡭⣹⠠⢐⢗
⣿⡗⠀⠢⠡⡱⡸⣔⢵⢱⢸⠈⠀⡪⣳⣳⢹⢜⡵⣱⢱⡱⣳⡹⣵⣻⢔⢅⢬⡷
⣷⡇⡂⠡⡑⢕⢕⠕⡑⠡⢂⢊⢐⢕⡝⡮⡧⡳⣝⢴⡐⣁⠃⡫⡒⣕⢏⡮⣷⡟
⣷⣻⣅⠑⢌⠢⠁⢐⠠⠑⡐⠐⠌⡪⠮⡫⠪⡪⡪⣺⢸⠰⠡⠠⠐⢱⠨⡪⡪⡰
⣯⢷⣟⣇⡂⡂⡌⡀⠀⠁⡂⠅⠂⠀⡑⡄⢇⠇⢝⡨⡠⡁⢐⠠⢀⢪⡐⡜⡪⡊
⣿⢽⡾⢹⡄⠕⡅⢇⠂⠑⣴⡬⣬⣬⣆⢮⣦⣷⣵⣷⡗⢃⢮⠱⡸⢰⢱⢸⢨⢌
⣯⢯⣟⠸⣳⡅⠜⠔⡌⡐⠈⠻⠟⣿⢿⣿⣿⠿⡻⣃⠢⣱⡳⡱⡩⢢⠣⡃⠢⠁
⡯⣟⣞⡇⡿⣽⡪⡘⡰⠨⢐⢀⠢⢢⢄⢤⣰⠼⡾⢕⢕⡵⣝⠎⢌⢪⠪⡘⡌⠀
⡯⣳⠯⠚⢊⠡⡂⢂⠨⠊⠔⡑⠬⡸⣘⢬⢪⣪⡺⡼⣕⢯⢞⢕⢝⠎⢻⢼⣀⠀
⠁⡂⠔⡁⡢⠣⢀⠢⠀⠅⠱⡐⡱⡘⡔⡕⡕⣲⡹⣎⡮⡏⡑⢜⢼⡱⢩⣗⣯⣟
⢀⢂⢑⠀⡂⡃⠅⠊⢄⢑⠠⠑⢕⢕⢝⢮⢺⢕⢟⢮⢊⢢⢱⢄⠃⣇⣞⢞⣞⢾
⢀⠢⡑⡀⢂⢊⠠⠁⡂⡐⠀⠅⡈⠪⠪⠪⠣⠫⠑⡁⢔⠕⣜⣜⢦⡰⡎⡯⡾⡽
when the programmer is sus
*/
const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const settings = require('./settings.json');
const cookieParser = require('cookie-parser');
const rateLimit = require('express-rate-limit');
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const cors = require('cors')
const fetch = require('node-fetch')

const sio = require('socket.io')(server, {
    cors: {
        origin: "*"
    }
});
const saltRounds = 10;
const sql = require('better-sqlite3')('database.sqlite', {
    verbose: console.log
});
/*app.use(cors({
    origin: true
}));*/
app.use(express.static(__dirname + "/../frontend"))
app.use(cookieParser())
app.use(express.urlencoded({
    extended: false
}))
app.use(express.json())

const sha512 = (str) => crypto.createHash('sha512').update(str).digest('hex');
const base64_encode = (str) => Buffer.from(str, 'utf-8').toString('base64');
const base64_decode = (str) => Buffer.from(str, 'base64').toString('utf-8');


app.use('/rooms*', rateLimit({
    windowMs: 10 * 1000,
    max: 5,
    message: "Too many requests are being sent! Please try again later.",
}));
app.get('/', (req, res) => {
    res.sendStatus(200)
})

function randomID(length = 16) {
    var text = "";
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
        text += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return text;
}
let users = [];

function verifyUser(nickname, roomID, key) {
    const findUser = users.filter(function (user) {
        return ((nickname != null) ? user.nickname == nickname : true) && user.roomID == roomID
    });
    if (!findUser.length) return 0;
    if (!findUser.filter(x => x.key == key).length) return -1;
    return findUser.filter(x => x.key == key)[0];
}

const nicknameLimit = 15;

function getRoomData(roomID, password) {
    return new Promise((resolve, reject) => {
        const roomData = sql.prepare('SELECT roomName, roomPass, roomID, ownerKey, ownerIP FROM rooms WHERE roomID = ?').get(roomID);
        if (!roomData) return resolve({
            error: "Room not found.",
            statusCode: 404
        })
        bcrypt.compare(password, roomData.roomPass, async function (err, verifiedPass) {
            if (err) return reject("Error while comparing password!")
            if (!verifiedPass) return resolve({
                error: "Incorrect Password.",
                statusCode: 403
            });
            const queuedPlaylist = sql.prepare('SELECT URL, requestedBy, name FROM roomPlaylist WHERE roomID = ? ORDER BY ID ASC').all(roomID);
            resolve({
                ...roomData,
                playlist: queuedPlaylist
            })
        })
    })
}


app.all("/rooms*", (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    let methods = ["POST", "PATCH", "DELETE"]
    res.set("Allow", methods.join(", "));
    if (!methods.includes(req.method)) return res.sendStatus(405);
    const params = req.params[0].split("/").slice(1);
    switch (params[0]) {
        case "create": { // Creates a room.
            if (req.method != "POST") return res.sendStatus(405);
            const madeRoom = sql.prepare('SELECT roomID FROM rooms WHERE ownerIP = ?').get(sha512(ip));
            if (madeRoom) return res.status(403).json({
                error: `You have already made a room! Room ID: ${madeRoom.roomID}`
            });
            let {
                name,
                password
            } = req.body;
            if ([name, password].includes(undefined)) return res.status(406).json({
                error: "Please enter a name and password."
            });
            if (name.length > 120 || password.length > 120) res.status(406).json({
                error: "not sure if you're trying to cause a ddos attack but you cant have name or password be longer than 120"
            }); // ddos!?!?
            const ownerKey = crypto.randomBytes(32);
            bcrypt.hash(password, saltRounds, async function (err, hashedPass) {
                if (err) return res.status(500).json({
                    error: "Error while generating password!"
                })
                const timestamp = Date.now()
                const roomID = randomID()
                sql.prepare('INSERT INTO rooms (ownerKey, ownerIP, roomName, roomPass, roomID, timestamp) VALUES (?, ?, ?, ?, ?, ?)')
                    .run(ownerKey.toString('hex'), sha512(ip), base64_encode(name), hashedPass, roomID, timestamp);
                res.status(200).json({
                    key: ownerKey.toString("hex"),
                    timestamp,
                    roomName: name,
                    roomID
                });
            });
            break;
        }
        default: { // assuming room IDs
            const {
                password,
                nickname,
                chat
            } = req.body;
            if (!password) return res.status(406).json({
                error: "Please enter in a password."
            });
            return getRoomData(params[0], password).then(roomData => {
                if (roomData.error) {
                    res.status(roomData.statusCode).json({
                        error: roomData.error
                    })
                } else {
                    switch (req.method) {
                        case "POST": {
                            if (nickname && !chat) {
                                let findUser = users.find(user => user.nickname == nickname && user.roomID == roomData.roomID);
                                if (findUser) return res.status(403).send("Someone is already using that nickname!")
                            }
                            return res.status(201).json({
                                roomName: base64_decode(roomData.roomName),
                                roomID: roomData.roomID,
                                owner: (req.body.ownerKey && (roomData.ownerKey == req.body.ownerKey))
                            });
                        }
                        case "PATCH": { // editing
                            const ownerKey = req.body.ownerKey
                            if (roomData.ownerKey != ownerKey) return res.sendStatus(403);
                            if (roomData.ownerIP != sha512(ip)) return res.sendStatus(403);
                            const {
                                field,
                                value
                            } = req.body;
                            switch (field) {
                                case "name":
                                    if (value.length > 120) return res.status(406).send("The max limit for room names is 120!")
                                    sql.prepare('UPDATE rooms SET roomName = ? WHERE roomID = ?').run(base64_encode(value), params[0]);
                                    return res.sendStatus(200);
                                case "password":
                                    if (value.length > 120) return res.status(406).send("The max limit for passwords is 120!")
                                    return bcrypt.hash(value, saltRounds, async function (err, hashedPass) {
                                        if (err) return res.status(500).json({
                                            error: "Error while generating password!"
                                        })
                                        sql.prepare('UPDATE rooms SET roomPass = ? WHERE roomID = ?').run(hashedPass, params[0]);
                                        res.sendStatus(200);
                                    });
                                /*case "nickname":
                                    const {
                                        key
                                    } = req.body
                                    const findUser = verifyUser(null, params[0], key)
                                    if (findUser == 0) return res.status(404).send("You aren't in a room!")
                                    if (findUser == -1) return res.sendStatus(403);
                                    if (value.length > nicknameLimit) return res.status(406).send("The max limit for nicknames is " + nicknameLimit + "!")
                                    if (value == "SERVER") return res.status(406).send("you cant be server lol")
                                    findUser.nickname = value;
                                    return res.sendStatus(200);*/
                                default:
                                    return res.status(406).send("Invalid Field.")
                            }
                        }
                        case "DELETE": { // deleting room
                            const ownerKey = req.body.ownerKey
                            if (roomData.ownerKey != ownerKey) return res.sendStatus(403);
                            if (roomData.ownerIP != sha512(ip)) return res.sendStatus(403);
                            users = users.filter(user => user.roomID != params[0])
                            sql.prepare('DELETE FROM rooms WHERE roomID = ?').run(params[0]);
                            return res.sendStatus(204);
                        }
                    }
                }
            }).catch(e => {
                console.error(e);
                return res.status(500).json({
                    error: e
                })
            })
        }
    }
});

// totally not copying from khajiit



let ratelimits = {
    chat: [],
    settings: []
}

// totally not copied and pasted from khajiit
function handleRatelimit(ratelimit, user_id, max, per) {
    if (!ratelimits[ratelimit]) return {
        id: user_id,
        count: max,
        timeout: 0
    };

    const userExists = ratelimits[ratelimit].find(user => user.id == user_id)
    if (!userExists) {
        ratelimits[ratelimit].push({
            id: user_id,
            count: 1,
            timeout: false,
            canTypeUntil: -1
        });
        setTimeout(function () {
            const userExistsNow = ratelimits[ratelimit].find(user => user.id == user_id)
            if (!userExistsNow) return;
            if (userExistsNow.timeout) return;
            ratelimits[ratelimit].splice(ratelimits[ratelimit].indexOf(userExistsNow), 1);
        }, per * 1000)
        return true;
    } else {
        if (userExists.count >= max) {
            if (userExists.timeout) return userExists;
            userExists.timeout = true;
            userExists.canTypeUntil = Date.now() + per * 1000;
            setTimeout(function () {
                ratelimits[ratelimit].splice(ratelimits[ratelimit].indexOf(userExists), 1);
            }, per * 1000)
            return userExists;
        } else {
            userExists.count++;
            return true;
        }
    }
}

const prefix = ">"
const systemName = "SERVER"

function logMessage(msgData) {
    console.log(`[MSG] <${msgData.nickname}> ${msgData.content}`)
}

function User(data) {
    return {
        userID: randomID(8),
        nickname: data.nickname,
        roomID: data.roomID,
        socketID: data.socketID,
        ip: data.ip,
        key: crypto.randomBytes(32).toString('hex'),
        timestamp: Date.now(),
        owner: data.owner,
        disconnected: false
    }
}

function message(userData, content) {
    return {
        userID: (userData.userID),
        nickname: (userData.nickname),
        content,
        createdAt: Date.now(),
    }
}

sio.on('connection', socket => {
    let currentUsers = [];
    const ipAddr = socket.request.connection.remoteAddress;
    socket.emit('reconnect', true);

    function broadcast(roomID, content) {
        console.log("Broadcast Message")
        const messageObj = message({
            userID: -1,
            nickname: systemName
        }, content)
        sio.to(roomID).emit('message', messageObj);
    }

    function sendMsg(cont) {
        socket.emit('message', message({
            userID: -1,
            nickname: systemName
        }, cont))
    }

    function sendStatus(roomID, nickname) {
        broadcast(roomID, `${nickname} has joined the room!`)
        sendMsg(`there are currently ${currentUsers.length} users online: ${currentUsers.map(user => user.nickname).join(", ")} - Type ${prefix}help for commands`) // ez
    }
    sendMsg("Connecting...")
    socket.on('join', async (callback) => {
        console.log("EMIT")
        getRoomData(callback.roomID, callback.password).then(roomData => {
            if (roomData.error) {
                return socket.emit('error', {
                    error: roomData.error
                })
            } else {
                const nicknameExists = users.find(user => user.nickname == callback.nickname && user.ip != sha512(ipAddr) && user.roomID == callback.roomID);
                if (nicknameExists) return socket.emit('error', {
                    error: "Someone is already using that nickname!"
                })
                if (callback.nickname.length > nicknameLimit) return socket.emit('error', {
                    error: "That nickname is too long! Use a nickname shorter than 15!"
                })
                if (callback.nickname == "SERVER") return socket.emit('error', {
                    error: "you cant be server lol"
                })
                const user = User({
                    roomID: callback.roomID,
                    nickname: callback.nickname,
                    socketID: socket.id,
                    ip: sha512(ipAddr),
                    owner: (callback.key && callback.key == roomData.ownerKey)
                });
                let userExists = users.find(function (user) {
                    return (user.ip == sha512(ipAddr) || user.socketID == socket.id) && (user.nickname == callback.nickname) && user.roomID == callback.roomID;
                });
                if (userExists) {
                    /*if (userExists && userExists.socketID != null) return socket.emit('error', {
                        error: "User ID is in use!"
                    })*/
                    sendStatus(callback.roomID, callback.nickname);
                    userExists.disconnected = false;
                    //userExists = user;
                    userExists.socketID = user.socketID;
                    userExists.owner = user.owner;

                    socket.join(callback.roomID);
                    socket.emit('key', userExists.key)
                    socket.emit('current_queue', roomData.playlist)
                    currentUsers.push(users.filter(user => user.roomID == callback.roomID))
                    return socket.emit('update_video', roomData.playlist[0])
                } else {
                    users.push(user);
                    currentUsers.push(users.filter(user => user.roomID == callback.roomID))
                    socket.join(callback.roomID);
                    socket.emit('key', user.key)
                    sendStatus(callback.roomID, callback.nickname);
                    socket.emit('current_queue', roomData.playlist)
                    return socket.emit('update_video', roomData.playlist[0])
                }
            }
        }).catch(e => {
            console.error(e);
            return socket.emit('error', {
                error: e
            })
        });
    })
    async function commandHandler(user, content) { // definitely not a copy from my bots
        const isOwner = user.owner
        const args = content.slice(prefix.length).trim().split(" ");
        const command = args.shift().toLowerCase();
        if (command == "ping") {
            sendMsg("pong lol")
        }
        if (command == "help") {
            if (isOwner) {
                sendMsg(`Commands: ${prefix}kick, ${prefix}ping, ${prefix}skip`)
            } else {
                sendMsg(`Commands: ${prefix}ping, ${prefix}skip`)
            }
        }
        if (command == "kick") {
            let nickname = args.join(" ");
            if (!nickname.length) return sendMsg("Please enter in a nickname!");
            let findUser = currentUsers.find(Duser => Duser.nickname == nickname && Duser.roomID == user.roomID)
            if (!findUser) return sendMsg("User not found.");
            sio.to(findUser.socketID).emit('message', message({
                userID: -1,
                nickname: systemName
            }, "You have been kicked."))
            sio.to(findUser.socketID).emit('forceDisconnect', true)
            sio.to(findUser.socketID).disconnect();
            broadcast(user.roomID, `${nickname} has been kicked.`)
        }
        if (command == "skip") {
            broadcast(user.roomID, `${user.nickname} has skipped the video!`);
            sio.to(user.roomID).emit('ytg_status', {
                name: "STOP"
            });
            let queuedPlaylist = sql.prepare('SELECT ID, URL, requestedBy, name FROM roomPlaylist WHERE roomID = ? ORDER BY ID ASC').all(user.roomID);
            if (!queuedPlaylist.length) return;
            await sql.prepare('DELETE FROM roomPlaylist WHERE ID = ? AND roomID = ?').run(queuedPlaylist[0].ID, user.roomID);
            queuedPlaylist = sql.prepare('SELECT ID, URL, requestedBy, name FROM roomPlaylist WHERE roomID = ? ORDER BY ID ASC').all(user.roomID);
            socket.emit('current_queue', queuedPlaylist)
            return socket.emit('update_video', queuedPlaylist[0])
        }

    }

    function sendUserMsg(user, messageObj) {
        const to = user.roomID
        sio.to(to).emit('message', messageObj);
    }
    socket.on('user_message', async (callback) => {
        const user = verifyUser(callback.nickname, callback.roomID, callback.key);
        if (user == 0) return socket.emit('error', {
            error: "You aren't in a valid room!"
        })
        if (user == -1) return socket.emit('error', {
            error: "Something went wrong when verifying session key!"
        })
        let userRatelimit = handleRatelimit("chat", socket, settings.ratelimit.chat.max, settings.ratelimit.chat.per)
        if (userRatelimit != true) {
            let amount = (userRatelimit.canTypeUntil - Date.now()) / 1000;
            sendMsg(settings.ratelimit.chat.othermsg.replace("%seconds%", amount))
            return socket.emit('ratelimit', {
                error: "You are ratelimited!"
            })
        }
        callback.message = callback.message.trim();
        if (callback.message.length > 256) return socket.emit('error', {
            error: "Message too long!"
        })
        callback.message = callback.message.replaceAll("/shrug", "¯\\_(ツ)_/¯")
        callback.message = callback.message.replaceAll("#shrug", "¯\\_(ツ)_/¯")
        const messageObj = message(user, callback.message)
        logMessage(messageObj)
        if (!callback.message.startsWith(prefix)) {
            return sendUserMsg(user, messageObj)
        }
        commandHandler(user, callback.message);
    })
    socket.on('send_queue', async (callback) => {
        if (!callback) return socket.emit('error', {
            error: "provide stuff kthx"
        })
        const user = verifyUser(null, callback.roomID, callback.key);
        if (user == 0) return socket.emit('error', {
            error: "You aren't in a valid room!"
        })
        if (user == -1) return socket.emit('error', {
            error: "Something went wrong when verifying session key!"
        })
        let userRatelimit = handleRatelimit("chat", socket, settings.ratelimit.chat.max, settings.ratelimit.chat.per)
        if (userRatelimit != true) {
            let amount = (userRatelimit.canTypeUntil - Date.now()) / 1000;
            sendMsg(settings.ratelimit.chat.othermsg.replace("%seconds%", amount))
            return socket.emit('ratelimit', {
                error: "You are ratelimited!"
            })
        }
        const regexTest = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/g
        if (!regexTest.test(callback.link)) return;
        /*

        */
        const response = await fetch('https://noembed.com/embed?url=' + callback.link);
        const body = await response.text();
        if (body) {
            try {
                let bodyJSON = JSON.parse(body);
                console.log(bodyJSON)
                sql.prepare('INSERT INTO roomPlaylist (roomID, URL, requestedBy, name) VALUES (?, ?, ?, ?)')
                    .run(user.roomID, callback.link, user.nickname, bodyJSON.title);
                broadcast(user.roomID, `${user.nickname} has added ${bodyJSON.title} to the queue.`)
                let queuedPlaylist = sql.prepare('SELECT URL, requestedBy, name FROM roomPlaylist WHERE roomID = ? ORDER BY ID ASC').all(user.roomID);
                if (queuedPlaylist.length == 1) {
                    socket.emit('update_video', queuedPlaylist[0])
                }
                return socket.emit('current_queue', queuedPlaylist)        
            } catch (e) {
                console.error(e)
            }
        }
        /*sio.to(user.roomID).emit('ytg_status', {
            name: "PLAY",
            value: callback.value
        });*/
    })
    socket.on('yt_play', async (callback) => {
        if (!callback) return socket.emit('error', {
            error: "provide stuff kthx"
        })
        const user = verifyUser(null, callback.roomID, callback.key);
        if (user == 0) return socket.emit('error', {
            error: "You aren't in a valid room!"
        })
        if (user == -1) return socket.emit('error', {
            error: "Something went wrong when verifying session key!"
        })
        sio.to(user.roomID).emit('ytg_status', {
            name: "PLAY"
        });
    })
    socket.on('update_nickname', async (callback) => {
        if (!callback) return socket.emit('error', {
            error: "provide stuff kthx"
        })
        const user = verifyUser(null, callback.roomID, callback.key);
        if (user == 0) return socket.emit('error', {
            error: "You aren't in a valid room!"
        })
        if (user == -1) return socket.emit('error', {
            error: "Something went wrong when verifying session key!"
        })
        let nicknameExists = currentUsers.find(user => user.nickname == callback.nickname);
        if (nicknameExists) return sendMsg("Someone with that nickname already exists!")
        if (callback.nickname.length > nicknameLimit) return sendMsg("That nickname is too long! Use a nickname shorter than 15!");
        if (callback.nickname == "SERVER") return sendMsg("you cant be server lol");
        broadcast(user.roomID, `${user.nickname} has set their nickname to ${callback.nickname}!`)
        user.nickname = callback.nickname
    })
    socket.on('yt_pause', async (callback) => {
        if (!callback) return socket.emit('error', {
            error: "provide stuff kthx"
        })
        const user = verifyUser(null, callback.roomID, callback.key);
        if (user == 0) return socket.emit('error', {
            error: "You aren't in a valid room!"
        })
        if (user == -1) return socket.emit('error', {
            error: "Something went wrong when verifying session key!"
        })
        sio.to(user.roomID).emit('ytg_status', {
            name: "PAUSE",
            value: callback.value
        });
    })
    socket.on('yt_stop', async (callback) => {
        if (!callback) return socket.emit('error', {
            error: "provide stuff kthx"
        })
        const user = verifyUser(null, callback.roomID, callback.key);
        if (user == 0) return socket.emit('error', {
            error: "You aren't in a valid room!"
        })
        if (user == -1) return socket.emit('error', {
            error: "Something went wrong when verifying session key!"
        })
        if (!user.owner) return socket.emit('error', {
            error: "You don't have permissions to end the video!"
        })
        sio.to(user.roomID).emit('ytg_status', {
            name: "STOP"
        });
        let queuedPlaylist = sql.prepare('SELECT ID, URL, requestedBy, name FROM roomPlaylist WHERE roomID = ? ORDER BY ID ASC').all(user.roomID);
        if (!queuedPlaylist.length) return;
        await sql.prepare('DELETE FROM roomPlaylist WHERE ID = ? AND roomID = ?').run(queuedPlaylist[0].ID, user.roomID);
        queuedPlaylist = sql.prepare('SELECT ID, URL, requestedBy, name FROM roomPlaylist WHERE roomID = ? ORDER BY ID ASC').all(user.roomID);
        socket.emit('current_queue', queuedPlaylist)
        return socket.emit('update_video', queuedPlaylist[0])
    })
    socket.on('disconnect', () => {
        const userExists = users.find(function (user) {
            return user.socketID == socket.id;
        });
        if (!userExists) return socket.emit('error', {
            error: "User ID isn't connected!"
        })
        if (userExists.owner) {
            userExists.disconnected = true;
            broadcast(userExists.roomID, `${userExists.nickname} has left. - Room will close in 3 minutes if the owner doesn't come back.`)
            setTimeout(function () {
                const getUser = users.find(function (user) {
                    return user.owner == true && user.roomID == userExists.roomID;
                });
                if (!getUser || getUser.disconnected) {
                    broadcast("Deleting the room.")
                    sql.prepare('DELETE FROM rooms WHERE roomID = ?').run(userExists.roomID);
                    sql.prepare('DELETE FROM roomPlaylist WHERE roomID = ?').run(userExists.roomID);
                    sio.to(userExists.roomID).emit('forceDisconnect', true)
                    users = users.filter(user => user.roomID != userExists.roomID)
                }
            }, 3 * (60 * 1000))
        } else {
            users.splice(users.indexOf(userExists), 1)
            broadcast(userExists.roomID, `${userExists.nickname} has left.`)
        }

    })
})

app.get('/stop', (req, res) => {
    console.log("death.") //hi
    res.status(404).send("death")
    process.exit(0);
})
setInterval(() => {
    http.get(`http://project-kruma.glitch.me/`);
}, 280000);

server.listen(settings.port, async () => {
    sql.prepare('DELETE FROM rooms').run();
    sql.prepare('DELETE FROM roomPlaylist').run();
  
    console.log(`Server Listening on port @${settings.port}`)
})