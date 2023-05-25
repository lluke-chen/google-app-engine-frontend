var url = 'https://api-dot-valued-etching-380113.ew.r.appspot.com/';

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function generateNumbers() {
    for (var i = 0; i < 10; i++) {
        // Generate 1000 numbers
        console.log('Generating...');
        for (var i = 0; i < 1000; i++) {
            fetch(url + 'generate-numbers', {
                method: 'GET',
                mode: 'no-cors',
            })
                .then((response) => {})
                .catch((error) => {});
        }

        for (let i = 0; i < 25; i++) {
            console.log(`Waiting ${i} seconds...`);
            await sleep(i * 1000);
        }

        console.log('Done.');

        // Sleep function
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
