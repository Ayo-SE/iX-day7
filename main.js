const url = 'https://animechan.vercel.app/api/random';

// async function fetchAnimeQuote() {
//     try {
//         const res = await fetch(url, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application.json'
//             }
//         });

//         const data = await res.json();
//         console.log(data.message);
//     } catch (err) {
//         console.log(err);
//     }
// }
let quotes = [];
fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then(quote => quotes[0] = quote)
    //.then(document.getElementById('newBody').innerHTML = "OK")
    
    //document.getElementById('newBody').innerHTML = quotes[0].anime;

setTimeout(() => {
    document.getElementById('anime').innerHTML = 'Anime: ' + quotes[0].anime;
    document.getElementById('character').innerHTML = 'Character: ' + quotes[0].character;
    document.getElementById('quote').innerHTML = 'Quote: ' + quotes[0].quote;
}, 500);
