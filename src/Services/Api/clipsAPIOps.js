export const clipsAPIOps = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(process.env.REACT_APP_API_AUTH_USERNAME + ':' + process.env.REACT_APP_API_AUTH_PASSWORD),
    },
    body: JSON.stringify({
        "gameId": "509658",
        "first": "24"
    })
};