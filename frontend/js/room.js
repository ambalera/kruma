//temp
function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
            tmp = item.split("=");
            if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}
let socket = null;
const randomColor = () => {
    let color = '#';
    for (let i = 0; i < 6; i++) {
        const random = Math.random();
        const bit = (random * 16) | 0;
        color += (bit).toString(16);
    };
    return color;
};

function youtube_parser(url) { // https://stackoverflow.com/questions/3452546/how-do-i-get-the-youtube-video-id-from-a-url
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match && match[7].length == 11) ? match[7] : false;
}

function loadMessage(nickname, content) {
    const messages = document.getElementById('messages')
    const div = document.createElement('div');
    //<div class="message"><b><span class="message-name">Khajiit: </span>this is a test</b></div>
    div.classList.add('message');
    const bold = document.createElement('b');
    const span1 = document.createElement('span');
    span1.classList.add('message-name');
    if (nickname == "SERVER") {
        span1.style.color = "#FF0000"
    } else {
        span1.style.color = randomColor()
    }

    span1.innerText = `${nickname}: `
    const span2 = document.createElement('span');
    span2.innerText = content
    bold.appendChild(span1);
    bold.appendChild(span2);
    div.appendChild(bold)
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
}

var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('video-window', {
        width: '1260',
        height: '708.75',
        //videoId: '0Ii3IWPEaz0',
        playerVars: {
            'playsinline': 1,
            'autoplay': 1,
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}


function onPlayerReady(event) {
    init(event.target)
    //event.target.playVideo();
}

function onPlayerStateChange(event) {
    if (socket == null) return;
    if (!player.socketData) return;
    console.debug(`[YT] Player State has changed to ${event.data}`)
    switch (event.data) {
        case YT.PlayerState.PLAYING:
            socket.emit('yt_play', {
                value: player.getCurrentTime(),
                ...player.socketData
            });
            break;
        case YT.PlayerState.PAUSED:
            //case YT.PlayerState.BUFFERING:
            socket.emit('yt_pause', player.socketData);
            break;
        case YT.PlayerState.ENDED:
            //case YT.PlayerState.BUFFERING:
            socket.emit('yt_stop', player.socketData);
            break;

    }
}


function redirectHome() {
    //window.location.href = "index.html"
    window.location.href = "/"
}
async function init(player) {
    let nickname = localStorage.getItem("nickname");
    const pathSlashes = window.location.pathname.split('/');
    const roomID = pathSlashes[2]
    if (nickname == null) {
        redirectHome()
        return;
    }
    let roomPass = localStorage.getItem("tempData");
    try {
        const ownerKey = localStorage.getItem("spkey");
        const response = await axios.post(`${URL}/rooms/${roomID}`, {
            password: roomPass,
            nickname,
            chat: true,
            ownerKey: ownerKey
        })
        document.getElementById('roomTitle').innerText = response.data.roomName
        document.getElementById('roomID').innerText = `room id: ${roomID}`

        const requests = document.getElementById('requests');

        let key = localStorage.getItem("key");
        console.log(response.data)
        const isOwner = response.data.owner
        //ownerOnly
        //localStorage.removeItem('tempData');
        socket = io.connect(URL, {
            reconnection: true,
            reconnectionDelay: 1000,
            reconnectionDelayMax: 5000,
            reconnectionAttempts: Infinity
        });
        let joinCoolDown = false;
        if (!isOwner) {
            document.getElementById('ownerOnly').style.display = 'none';
        } else {
            document.getElementById('roomName').value = response.data.roomName
            document.getElementById('roomPass').innerText = `room password: ${roomPass}`
        }

        function joinRoom() {
            if (joinCoolDown) return;
            console.debug("Joining...")
            socket.emit('join', {
                roomID,
                nickname: nickname,
                key: ownerKey,
                password: roomPass
            })
            joinCoolDown = true;
            setTimeout(function () {
                joinCoolDown = false;
            }, 2000)
        }
        joinRoom()
        socket.on('reconnect', () => {
            joinRoom()
        })
        socket.on('error', (content) => {
            console.debug("Full error", JSON.stringify(content))
            const errorMsg = content.error;
            console.error(`[ERROR] ${errorMsg}`)
        })
        socket.on('disconnect', () => {
            loadMessage("SERVER", "Lost connection! Reconnecting...")
        })
        socket.on('forceDisconnect', () => {
            loadMessage("SERVER", "You have been disconnected.");
            setTimeout(function () {
                redirectHome();
            }, 2000)
        })
        socket.on('message', (content) => {
            console.debug(content)
            loadMessage(content.nickname, content.content)
        })
        socket.on('key', (callback) => {
            console.debug("Set Key to" + callback + "!")
            localStorage.setItem("key", callback)
            key = callback;
            if (player) {
                player.socketData = {
                    key: key,
                    roomID
                }
            }
        })
        socket.on('update_video', (callback) => {
            if (!player) return console.log("Not playing link because player isn't available.");
            if (callback == null || typeof callback != "object") return;
            //let urlArray = callback.URL.split("/")
            if (player) {
                console.log(youtube_parser(callback.URL))
                player.loadVideoById({
                    videoId: youtube_parser(callback.URL), //urlArray[urlArray.length - 1],
                    startSeconds: 0,
                    endSeconds: 0
                })
                player.playVideo()
            }
        })
        socket.on('current_queue', (callback) => {
            let opposite = false;
            requests.innerHTML = ""
            if (!player) return console.log("Not playing link because player isn't available.");
            if (callback == null || typeof callback != "object") return;
            if (!callback.length) return;
            callback.forEach(queue => {
                const newDiv = document.createElement('div');
                newDiv.classList.add('playlist-item');
                if (opposite) {
                    newDiv.style.backgroundColor = "silver"
                }
                const b = document.createElement('b')
                b.innerText = `${callback.indexOf(queue) + 1}. ${queue.name} - (requested by ${queue.requestedBy})`;
                newDiv.appendChild(b);
                requests.appendChild(newDiv);
                opposite = !opposite;
            })
        })
        socket.on('ytg_status', (callback) => {
            if (!player) return console.log("Not playing link because player isn't available.");
            switch (callback.name) {
                case "PLAY":
                    player.seekTo(callback.value);
                    player.playVideo();
                    break;
                case "PAUSE":
                    player.pauseVideo();
                    break;
                case "TIME":
                    player.seekTo(callback.value);
                    break;
                case "STOP":
                    player.stopVideo();
                    break;
            }
        })

        /** youtube stuff */
        if (player) {
            player.socketData = {
                key: key,
                roomID
            }
        }
        /** youtube stuff */

        const nickForm = document.getElementById('nick');
        if (nickForm) {
            nickForm.addEventListener('submit', async event => {
                event.preventDefault();
                let newNickname = document.getElementById('newNick').value;
                if (!newNickname) return loadMessage("SERVER", "Please enter in a nickname!")
                if (newNickname.length > 15) return loadMessage("SERVER", "Nicknames can't be 15 letters long!");
                localStorage.setItem("nickname", newNickname)
                nickname = newNickname;
                socket.emit('update_nickname', {
                    key: key,
                    nickname: newNickname,
                    roomID
                })
                document.getElementById('newNick').value = '';
            })
        }

        const roomForm = document.getElementById('roomForm');
        if (roomForm) {
            roomForm.addEventListener('submit', async event => {
                event.preventDefault();
                let roomName = document.getElementById('roomName').value;
                if (!roomName) return loadMessage("SERVER", "Don't leave the room name blank!")
                if (roomName == response.data.roomName) return loadMessage("SERVER", "You can't set the room name to be the same!")
                try {
                    const resp = await axios.patch(`${URL}/rooms/${roomID}`, {
                        password: roomPass,
                        nickname,
                        ownerKey,
                        field: "name",
                        value: roomName
                    })
                    loadMessage("SERVER", "Successfully updated the room name! Anyone who reloads the page will see the new name.")
                } catch (r) {
                    console.error(r)
                    loadMessage("SERVER", "[ERROR] " + r.response.data.error)
                }
            })
        }

        const requestForm = document.getElementById('requestForm');
        if (requestForm) {
            requestForm.addEventListener('submit', async event => {
                event.preventDefault();
                let content = document.getElementById('requestInput').value;
                if (!content.length) return;
                const regexTest = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/g
                if (!regexTest.test(content)) return loadMessage("SERVER", "Please enter in a valid URL!");
                if (content.length > 256) return loadMessage("SERVER", "URLs aren't 256 characters long.");
                content = content.trim();
                socket.emit('send_queue', {
                    key: key,
                    link: content,
                    roomID
                })
                document.getElementById('requestInput').value = ''
            })
        }
        const chatForm = document.getElementById('message-form');
        if (chatForm) {
            chatForm.addEventListener('submit', async event => {
                event.preventDefault();
                let content = document.getElementById('message-input').value;
                if (!content.length) return;
                if (content.length > 256) return;
                //if (content.startsWith(" ")) return;
                content = content.trim();
                socket.emit('user_message', {
                    nickname,
                    key: key,
                    message: content,
                    roomID
                })
                document.getElementById('message-input').value = ''
            })
        }

    } catch (e) {
        console.error(e)
    }

}
//if (document.addEventListener) {
//document.addEventListener("DOMContentLoaded", init, false);
//}