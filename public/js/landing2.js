function createRoom() {
    const roomName = document.getElementById('roomName').value.trim();
    
    if(roomName) {
        const newURL = window.location.href + "join/" + encodeURIComponent(roomName.replace(' ', '_'));
        window.location.href = newURL;
    } else {
        alert("Please enter a valid room name!");
    }
}