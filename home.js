// Mobile menu toggle
        const hamburger = document.getElementById('hamburger');
        const mobileMenu = document.getElementById('mobile-menu');
        
        hamburger.addEventListener('click', () => {
            mobileMenu.classList.toggle('show');
            
            // Toggle hamburger icon between bars and X
            const icon = hamburger.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // // Simulate live price updates
        // function updatePrices() {
        //     const stockPrices = document.querySelectorAll('.stock-price');
            
        //     stockPrices.forEach(price => {
        //         // Get current price as number
        //         let currentPrice = parseFloat(price.textContent.replace('$', ''));
                
        //         // Add random small variation (+/- 0.5%)
        //         const variation = currentPrice * (Math.random() * 0.01 - 0.005);
        //         const newPrice = (currentPrice + variation).toFixed(2);
                
        //         // Update the displayed price
        //         price.textContent = '$' + newPrice;
                
        //         // Add animation to show change
        //         price.style.transition = 'color 0.5s ease';
        //         if (variation > 0) {
        //             price.style.color = '#4dff4d';
        //         } else {
        //             price.style.color = '#ff4d4d';
        //         }
                
        //         // Reset color after animation
        //         setTimeout(() => {
        //             price.style.color = '';
        //         }, 500);
        //     });
        // }
        
        // // Update prices periodically
        // setInterval(updatePrices, 5000);

const apiKey = '25c50186c33243f0aede26703b3c924f';

// Get all stock cards
const stockCards = document.querySelectorAll('.stock-card');

async function fetchAndUpdatePrices() {
  // Collect unique symbols from page
  const symbolsSet = new Set();
  stockCards.forEach(card => {
    const symbol = card.querySelector('.stock-symbol').textContent.trim();
    symbolsSet.add(symbol);
  });

  // Fetch price for each unique symbol
  const prices = {}; // { symbol: price }

  await Promise.all(
    [...symbolsSet].map(async (symbol) => {
      try {
        const res = await fetch(`https://api.twelvedata.com/price?symbol=${symbol}&apikey=${apiKey}`);
        const data = await res.json();
        if (data.price) {
          prices[symbol] = parseFloat(data.price).toFixed(2);
        }
      } catch (error) {
        console.error(`Failed to fetch price for ${symbol}:`, error);
      }
    })
  );

  // Update all cards with fetched prices
  stockCards.forEach(card => {
    const symbol = card.querySelector('.stock-symbol').textContent.trim();
    const priceElement = card.querySelector('.stock-price');

    if (prices[symbol] && priceElement) {
      const oldText = priceElement.textContent.replace('$', '').replace(',', '');
      const oldPrice = parseFloat(oldText);
      const newPrice = parseFloat(prices[symbol]);

      priceElement.textContent = `$${prices[symbol]}`;

      // Highlight price change if oldPrice valid
      if (!isNaN(oldPrice)) {
        priceElement.style.transition = 'color 0.5s ease';
        if (newPrice > oldPrice) {
          priceElement.style.color = '#4dff4d';
        } else if (newPrice < oldPrice) {
          priceElement.style.color = '#ff4d4d';
        }
        setTimeout(() => {
          priceElement.style.color = '';
        }, 500);
      }
    }
  });
}

// Initial fetch & update
fetchAndUpdatePrices();

// Refresh every 5 seconds
setInterval(fetchAndUpdatePrices, 5000);


        
        // Portfolio value animation
        function animateValue(element, start, end, duration) {
            let startTime = null;
            const step = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / duration, 1);
                const value = Math.floor(progress * (end - start) + start);
                element.textContent = '€ ' + value.toLocaleString() + ' ';
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }
        
        // Run value animation on page load
        window.addEventListener('load', () => {
            const valueElement = document.querySelector('.value-amount');
            const valueText = valueElement.textContent.trim().replace(/[^\d]/g, '');
            const targetValue = parseInt(valueText, 10);
            animateValue(valueElement, targetValue - 10000, targetValue, 1500);
        });
        
        // Refresh button functionality
        const refreshButton = document.querySelector('.refresh-button');
        refreshButton.addEventListener('click', () => {
            // Add spinning animation to refresh icon
            const refreshIcon = refreshButton.querySelector('i');
            refreshIcon.classList.add('fa-spin');
            
            // Simulate data refreshing
            setTimeout(() => {
                refreshIcon.classList.remove('fa-spin');
                
                // Update trending stocks with slight variations
                const trendingPrices = document.querySelectorAll('.item-price');
                trendingPrices.forEach(price => {
                    const currentPrice = parseFloat(price.textContent);
                    const variation = currentPrice * (Math.random() * 0.02 - 0.01);
                    const newPrice = (currentPrice + variation).toFixed(2);
                    price.textContent = newPrice + ' $';
                    
                    // Briefly highlight the change
                    price.style.transition = 'background-color 1s ease';
                    price.style.backgroundColor = '#f0f8ff';
                    setTimeout(() => {
                        price.style.backgroundColor = 'transparent';
                    }, 1000);
                });
            }, 1000);
        });

 // Theme toggle functionality
        const themeToggle = document.getElementById('themeToggle');
        
        // Check for user preference from system
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.classList.add('dark-theme');
        }
        
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
        });

   // Country to Currency Mapping
const countryCurrencyMap = {
    'US': 'USD',
    'DE': 'EUR',
    'UK': 'GBP',
    'JP': 'JPY',
    'CA': 'CAD',
    'AU': 'AUD'
};

const currencyDetails = {
    'USD': { symbol: '$', name: 'US Dollar' },
    'EUR': { symbol: '€', name: 'Euro' },
    'GBP': { symbol: '£', name: 'British Pound' },
    'JPY': { symbol: '¥', name: 'Japanese Yen' },
    'CAD': { symbol: 'C$', name: 'Canadian Dollar' },
    'AUD': { symbol: 'A$', name: 'Australian Dollar' }
};

// Setup system
document.addEventListener('DOMContentLoaded', () => {
    setupCountryCurrencySystem();
    setupFlags();
});

function setupCountryCurrencySystem() {
    document.querySelectorAll('#countrySubmenu .submenu-item').forEach(item => {
        item.addEventListener('click', () => {
            const selectedCountry = item.getAttribute('data-country');
            const newCurrency = countryCurrencyMap[selectedCountry];
            if (newCurrency) updateCurrencySelection(newCurrency);
        });
    });
}

function setupFlags() {
    const countryCodeMap = {
        uk: 'gb',
        usd: 'us',
        eur: 'eu',
        jpy: 'jp',
        cad: 'ca',
        aud: 'au'
    };

    // Country Flags
    document.querySelectorAll(".submenu-item[data-country]").forEach(item => {
        let countryCode = item.getAttribute("data-country").toLowerCase();
        if (countryCodeMap[countryCode]) countryCode = countryCodeMap[countryCode];
        const flagSpan = item.querySelector(".country-flag");
        flagSpan.style.backgroundImage = `url(https://flagcdn.com/w40/${countryCode}.png)`;
        flagSpan.style.width = "20px";
        flagSpan.style.height = "16px";
        flagSpan.style.backgroundSize = "contain";
        flagSpan.style.backgroundRepeat = "no-repeat";
        flagSpan.style.backgroundPosition = "center";
    });

    // Currency Flags
    const currencyToCountry = {
        usd: "us",
        eur: "eu",
        gbp: "gb",
        jpy: "jp",
        cad: "ca",
        aud: "au"
    };

    document.querySelectorAll(".submenu-item[data-currency]").forEach(item => {
        const currencyCode = item.getAttribute("data-currency").toLowerCase();
        const countryCode = currencyToCountry[currencyCode] || currencyCode;

        const flagSpan = document.createElement("span");
        flagSpan.classList.add("currency-flag");
        flagSpan.style.display = "inline-block";
        flagSpan.style.width = "20px";
        flagSpan.style.height = "16px";
        flagSpan.style.backgroundSize = "contain";
        flagSpan.style.backgroundRepeat = "no-repeat";
        flagSpan.style.backgroundPosition = "center";
        flagSpan.style.marginRight = "8px";
        flagSpan.style.verticalAlign = "middle";
        flagSpan.style.backgroundImage = `url(https://flagcdn.com/w40/${countryCode}.png)`;

        const symbolSpan = item.querySelector(".currency-symbol");
        symbolSpan.parentNode.insertBefore(flagSpan, symbolSpan);
        symbolSpan.style.display = "none"; // Hide letter beside flag
    });
}

function updateCurrencySelection(currencyCode) {
    document.querySelectorAll('#currencySubmenu .submenu-item').forEach(item => {
        item.classList.remove('selected');
        if (item.getAttribute('data-currency') === currencyCode) {
            item.classList.add('selected');
            const currencySymbol = item.querySelector('.currency-symbol');
            const currencyName = item.querySelector('.item-details span');
            onCurrencyChanged(currencyCode, currencySymbol?.textContent, currencyName?.textContent);
        }
    });
}

function onCurrencyChanged(currencyCode, symbol, name) {
    console.log(`Currency changed to: ${currencyCode} (${symbol} ${name})`);
    document.dispatchEvent(new CustomEvent('currencyChanged', {
        detail: { currency: currencyCode, symbol, name }
    }));
}    