const fetchClips = async () => {
    setClipsLoading(true);

    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            "gameId": "509658",
            "first": "21"
        })
    };

    await fetch('http://localhost:8080/clips', requestOptions)
        .then(r => r.json())
        .then(r => setClips(r.data))
        .catch(e => {
            console.log('error');
            console.log(e);
        }).finally(r => {
            setClipsLoading(false);
        });
};