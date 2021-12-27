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
const express      = require('express');
const http         = require('http');
const app          = express();
const server       = http.createServer(app);
const settings     = require('./settings.json');
const cookieParser = require('cookie-parser');
const rateLimit    = require('express-rate-limit').default;
const crypto       = require('crypto');
const bcrypt       = require('bcrypt');
const sio = require('socket.io')(server);
const saltRounds   = 10;
const sql          = require('better-sqlite3')('database.sqlite', {
                        verbose: console.log
                     });
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

function getRoomData(roomID, password) {
    return new Promise((resolve, reject) => {
        const roomData = sql.prepare('SELECT roomName, roomPass, roomID FROM rooms WHERE roomID = ?').get(roomID);
        if (!roomData) return resolve({error: "Room not found.", statusCode: 404})
        bcrypt.compare(password, roomData.roomPass, async function(err, verifiedPass) {
            if (err) return reject("Error while comparing password!")
            if (!verifiedPass) return resolve({ error: "Incorrect Password.", statusCode: 403 });
            const queuedPlaylist = sql.prepare('SELECT URL, requestedBy FROM roomPlaylist WHERE roomID = ? ORDER BY ID DESC').all(roomID);
            resolve({...roomData, playlist: queuedPlaylist})
        })
    })
}
const users = [];

app.all("/rooms*", (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    let methods = ["POST", "PATCH", "DELETE"]
    res.set("Allow", methods.join(", "));
    if (!methods.includes(req.method)) return res.sendStatus(405);
    const params = req.params[0].split("/").slice(1);
    switch (params[0]) {
        case "create": { // Creates a room.
            if (req.method != "POST") return res.sendStatus(405);
            const madeRoom = sql.prepare('SELECT count(*) FROM rooms WHERE ownerIP = ?').pluck().get(sha512(ip));
            if (madeRoom) return res.status(403).json({error: "You have already made a room!"});
            let { name, password } = req.body;
            if ([name, password].includes(undefined)) return res.status(406).json({error: "Please enter a name and password."});
            if (name.length > 120 || password.length > 120) res.status(406).json({error: "not sure if you're trying to cause a ddos attack but you cant have name or password be longer than 120"}); // ddos!?!?
            const ownerKey = crypto.randomBytes(32);
            bcrypt.hash(password, saltRounds, async function(err, hashedPass) {
                if (err) return res.status(500).json({
                    error: "Error while generating password!"
                })
                sql.prepare('INSERT INTO rooms (ownerKey, ownerIP, roomName, roomPass, roomID, timestamp) VALUES (?, ?, ?, ?, ?, ?)')
                   .run(ownerKey.toString('hex'), sha512(ip), base64_encode(name), hashedPass, randomID(), Date.now());
                res.sendStatus(200);
            });
            break;
        }
        default: { // assuming room IDs
            const { password, nickname } = req.body;
            if (!password) return res.status(406).json({error: "Please enter in a password."});
            return getRoomData(params[0], password).then(roomData => {
                if (roomData.error) {
                    if (roomData.statusCode == 404) return res.sendStatus(404);
                    res.status(roomData.statusCode).json({error: roomData.error})
                } else {
                    if (nickname) {
                        let findUser = users.find(user => user.nickname == nickname);
                        if (findUser) return res.status(403).send("Someone is already using that nickname!")
                    }
                    res.status(200).json({roomName: roomData.roomName, roomID: roomData.roomID});
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
        timestamp: Date.now()
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
    console.log("socket.io connection hahaa")
    const ipAddr = socket.request.connection.remoteAddress;
    socket.emit('reconnect', true);
    function sendMsg(cont) {
        socket.emit('message', message({
            userID: -1,
            nickname: systemName
        }, cont))
    }
    socket.on('join', async (callback) => {
        getRoomData(callback.roomID, callback.password).then(roomData => {
            if (roomData.error) {
                return socket.emit('error', {
                    error: roomData.error
                })
            } else {
                const nicknameExists = users.find(user => user.nickname == nickname);
                if (nickname) return socket.emit('error', {
                    error: "Someone is already using that nickname!"
                })
                const user = User({
                    roomID: callback.roomID,
                    nickname: callback.nickname,
                    socketID: socket.id,
                    ip: sha512(ipAddr)
                });
                const userExists = users.find(function (user) {
                    return user.ip == sha512(ipAddr) || user.socketID == userID;
                });
                users.push(user);
                return socket.emit('current_link', roomData.playlist[0])
            }
        }).catch(e => {
            console.error(e);
            return socket.emit('error', {
                error: e
            })
        });
    })
})

app.get('/stop', (req, res) => {
    console.log("death.") //hi
    res.status(404).send("death")
    process.exit(0);
})

server.listen(settings.port, async () => {
    console.log(`Server Listening on port @${settings.port}`)
})
