const fetch = require('node-fetch');

const  cryptoValues = async () => {

    const url = 'https://api.coincap.io/v2/assets';

    const moedas = await fetch(url)
    .then((response) => response.json())
    .then((data) => (data.data))
    .catch ((error) => error.toString());
    return moedas;
}


const listarMoedas = async () => {
const moedas =  await cryptoValues();
const listaDeMoedas = document.getElementById('crypto-container');
moedas.filter((itemFilter) => itemFilter.rank <= 10).forEach((item) => {
    const itemMoeda = document.createElement('li');
    itemMoeda.innerText = `${moedas.name} (${moedas.symbol}): ${moedas.priceUsd} `;
    listaDeMoedas.appendChild(itemMoeda);
})
}

listarMoedas();



