var url = 'https://api-dot-valued-etching-380113.ew.r.appspot.com/';

function generateNumbers() {
    for (var i = 0; i < 10000; i++) {
        fetch(api_url + 'generate-numbers', {
            method: 'GET',
            mode: 'no-cors',
        })
            .then((response) => {})
            .catch((error) => {});
    }
}
