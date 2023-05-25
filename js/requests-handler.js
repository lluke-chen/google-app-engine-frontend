var url = 'https://api-dot-valued-etching-380113.ew.r.appspot.com/';

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function generateNumbers() {
    for (var i = 0; i < 10; i++) {
        console.log('Generating...');
        for (var i = 0; i < 1000; i++) {
            fetch(url + 'generate-numbers', {
                method: 'GET',
                mode: 'no-cors',
            })
                .then((response) => {})
                .catch((error) => {});
        }

        console.log('Done.');
    }
}

// function getResults() {
//     fetch(url + 'get-results', {
//         method: 'GET',
//         mode: 'no-cors',
//     })
//         .then((response) => {})
//         .then((html) => {
//             html = response.text();
//             console.log(html);
//             var resultsElement = document.getElementById('results');
//             resultsElement.innerHTML = html;
//             console.log(response.text());
//         })
//         .catch((error) => {});
// }
