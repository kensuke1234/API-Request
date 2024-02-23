
// script.js
function sendApiRequest() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // APIエンドポイントへのPOSTリクエストを設定
    fetch('http://localhost/api/register', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            password: password
        })
    })
    .then(response => response.json())
    .then(data => {
        // APIからの応答を表示
        document.getElementById('response').textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
