const fetchCryptoData = async (cryptos = []) => {
    try {
        const ids = cryptos.join(',');
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${ids}`);
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        renderCryptoData(data);
    } catch (error) {
        console.error("Error fetching crypto data:", error);
    }
};

const renderCryptoData = (data) => {
    const resultsContainer = document.getElementById('crypto-results');
    resultsContainer.innerHTML = '';
    data.forEach(crypto => {
        const card = document.createElement('div');
        card.className = 'crypto-card';
        card.innerHTML = `
            <div>
                <strong>${crypto.name} (${crypto.symbol.toUpperCase()})</strong><br>
                Price: $${crypto.current_price.toFixed(2)}
            </div>
            <div>
                24h Change: ${crypto.price_change_percentage_24h.toFixed(2)}%
            </div>
        `;
        resultsContainer.appendChild(card);
    });
};

setInterval(() => {
    fetchCryptoData(['bitcoin', 'ethereum', 'dogecoin']); // example list
}, 30000);
