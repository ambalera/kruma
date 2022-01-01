function init() {
    let Gnickname = localStorage.getItem("nickname")
    const nicknameForm = document.getElementById('setNickname');
    if (!nicknameForm) return console.error("Nickname Form not found!");
    const joinRoomForm = document.getElementById('joinRoom');
    if (!joinRoomForm) return console.error("Join Room Form not found!");
    const createRoomForm = document.getElementById('createRoom');
    if (!createRoomForm) return console.error("Create Room Form not found!");

    nicknameForm.addEventListener('submit', async event => {
        event.preventDefault();
        const status = document.getElementById('nickname-status')
        const nickname = document.getElementById('nickname').value;
        if (!nickname) {
            status.innerText = "you have to put something in there ok."
            return setTimeout(function () {
                status.innerText = ""
            }, 1500)
        }
        if (nickname.length > 15) {
            status.innerText = "Nickname must be less than 15 characters long!"
            return setTimeout(function () {
                status.innerText = ""
            }, 1500)
        }
        localStorage.setItem("nickname", nickname)
        Gnickname = nickname
        status.innerText = "Sucessfully set your nickname!"
        return setTimeout(function () {
            status.innerText = ""
        }, 1500)
    })

    joinRoomForm.addEventListener('submit', async event => {
        event.preventDefault();
        const roomID = document.getElementById('jroomID').value;
        const roomPass = document.getElementById('jroomPass').value;
        const status = document.getElementById('join-status')
        if (!roomID.length || !roomPass.length) {
            status.innerText = "you have to put something in there ok."
            return setTimeout(function () {
                status.innerText = ""
            }, 1500)
        }
        if (Gnickname == null) {
            status.innerText = "Please set your nickname."
            return setTimeout(function () {
                status.innerText = ""
            }, 1500)
        }
        localStorage.setItem('tempData', roomPass);
        try {
            const response = await axios.post(`${URL}/rooms/${roomID}`, {
                password: roomPass,
                nickname: Gnickname
            })
            status.innerText = "Joining room..."

            window.location.href = `${githubPage}/room/?ID=${roomID}`
        } catch (e) {
            localStorage.removeItem('tempData')
            console.error(e)
            status.innerText = e.response.data.error
        }
    })
    createRoomForm.addEventListener('submit', async event => {
        event.preventDefault();
        const roomName = document.getElementById('croomName').value;
        const roomPass = document.getElementById('croomPass').value;
        const roomConfirmPass = document.getElementById('croomConfirmPass').value;
        const status = document.getElementById('create-status')
        if (roomPass != roomConfirmPass) {
            status.innerText = "Both passwords must match!"
            return setTimeout(function () {
                status.innerText = ""
            }, 1500)
        }
        if (Gnickname == null) {
            status.innerText = "Please set your nickname."
            return setTimeout(function () {
                status.innerText = ""
            }, 1500)
        }
        try {
            const response = await axios.post(`${URL}/rooms/create`, {
                name: roomName,
                password: roomPass
            })
            status.innerText = "Creating room..."
            localStorage.setItem("spkey", response.data.key)
            localStorage.setItem('tempData', roomPass);
            window.location.href = `${githubPage}/room/?ID=${roomID}`
        } catch (e) {
            console.error(e)
            status.innerText = e.response.data.error
        }

        if (!roomName.length || !roomPass.length) {
            status.innerText = "you have to put something in there ok."
            return setTimeout(function () {
                status.innerText = ""
            }, 1500)
        }
    })
}
if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", init, false);
}
