fetch('/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        user: {
            id: document.getElementById('user[id]').innerText,
            pw: document.getElementById('user[pw]').innerText,
        }
    })
});