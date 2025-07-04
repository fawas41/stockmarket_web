// Navigation functionality - Works with existing HTML structure
document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    
    // Get all page elements
    const portfolioPage = document.getElementById('portfolio-page');
    const stockPage = document.getElementById('stock-page');
    const marketPage = document.getElementById('market-page');
    const cryptoPage = document.getElementById('crypto-page');
    
    // Navigation event listeners
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all nav items
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // Add active class to clicked item
            item.classList.add('active');
            
            // Hide all pages first
            const allPages = [portfolioPage, stockPage, marketPage, cryptoPage];
            allPages.forEach(page => {
                if (page) page.classList.add('hidden');
            });
            
            // Show the selected page based on data-page attribute OR text content
            const dataPage = item.getAttribute('data-page');
            const textContent = item.querySelector('span') ? item.querySelector('span').textContent.trim() : '';
            
            // Handle pages with data-page attribute (Portfolio and Stock)
            if (dataPage === 'portfolio') {
                if (portfolioPage) portfolioPage.classList.remove('hidden');
            } else if (dataPage === 'stock') {
                if (stockPage) stockPage.classList.remove('hidden');
            }
            // Handle pages without data-page attribute (Market, Crypto, etc.)
            else if (textContent === 'Market') {
                if (marketPage) marketPage.classList.remove('hidden');
            } else if (textContent === 'Crypto') {
                if (cryptoPage) cryptoPage.classList.remove('hidden');
            }
        });
    });

    // Animate bars on hover
    const bars = document.querySelectorAll('.bar');
    bars.forEach(bar => {
        bar.addEventListener('mouseenter', () => {
            bar.style.transform = 'scaleY(1.1)';
            bar.style.transition = 'transform 0.2s ease';
        });
        
        bar.addEventListener('mouseleave', () => {
            bar.style.transform = 'scaleY(1)';
        });
    });

    // Add interactive effects to asset items
    const assetItems = document.querySelectorAll('.asset-item');
    assetItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.backgroundColor = '#f9fafb';
            item.style.cursor = 'pointer';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.backgroundColor = 'transparent';
        });
    });

    // Time selector functionality for market chart
    const timeBtns = document.querySelectorAll('.time-btn');
    timeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            timeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
    
    // Filter functionality for crypto page
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Simulate real-time updates for portfolio
    setInterval(() => {
        const portfolioAmount = document.querySelector('.portfolio-amount');
        if (portfolioAmount) {
            const currentValue = 2240560;
            const variation = Math.random() * 1000 - 500;
            const newValue = currentValue + variation;
            const percentage = ((variation / currentValue) * 100).toFixed(2);
            
            portfolioAmount.innerHTML = `
                € ${newValue.toLocaleString('en-EU', {minimumFractionDigits: 0, maximumFractionDigits: 0})}
                <span class="positive-change" style="color: ${variation > 0 ? '#10b981' : '#ef4444'}">
                    ${variation > 0 ? '+' : ''}${percentage}%
                </span>
            `;
        }
    }, 5000);
    
    // Simulate real-time updates for market data
    setInterval(() => {
        const stockChanges = document.querySelectorAll('.stock-change');
        stockChanges.forEach(change => {
            const currentValue = parseFloat(change.textContent.replace('%', ''));
            const variation = (Math.random() - 0.5) * 0.5;
            const newValue = (currentValue + variation).toFixed(2);
            
            change.textContent = (newValue >= 0 ? '+' : '') + newValue + '%';
            change.className = 'stock-change ' + (newValue >= 0 ? 'positive' : 'negative');
        });
    }, 10000);
    
    // Simulate crypto price updates
    setInterval(() => {
        const cryptoPrices = document.querySelectorAll('.crypto-col-price');
        cryptoPrices.forEach(price => {
            const currentPrice = parseFloat(price.textContent.replace('$', '').replace(',', ''));
            const variation = currentPrice * (Math.random() - 0.5) * 0.02;
            const newPrice = currentPrice + variation;
            
            if (newPrice > 1) {
                price.textContent = '$' + newPrice.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});
            } else {
                price.textContent = '$' + newPrice.toFixed(4);
            }
        });
    }, 15000);
});

// Stock data - FIXED AND EXPANDED
const stockData = {
    'AAPL': {
        symbol: 'AAPL',
        name: 'Apple Inc.',
        price: '€302.81',
        change: '+2.84%',
        changeColor: '#10b981',
        chartValue: '$682.5',
        iconColor: '#000',
        basePrice: 190,
        history: [
            { date: 'WED 08 Apr 2025', action: 'Buy order closed' },
            { date: 'TUE 04 Apr 2025', action: 'Buy order closed' },
            { date: 'MON 03 Apr 2025', action: 'Buy order closed' }
        ]
    },
    'NFLX': {
        symbol: 'NFLX',
        name: 'Netflix Inc.',
        price: '€190,74',
        change: '-1.23%',
        changeColor: '#ef4444',
        chartValue: '$423.2',
        iconColor: '#dc2626',
        basePrice: 425,
        history: [
            { date: 'WED 08 Apr 2025', action: 'Sell order executed' },
            { date: 'TUE 07 Apr 2025', action: 'Buy order closed' },
            { date: 'MON 06 Apr 2025', action: 'Buy order closed' }
        ]
    },
    'THY': {
        symbol: 'THY',
        name: 'Turkish Airlines',
        price: '€390,24',
        change: '+4.56%',
        changeColor: '#10b981',
        chartValue: '$512.8',
        iconColor: '#f59e0b',
        basePrice: 12,
        history: [
            { date: 'WED 08 Apr 2025', action: 'Buy order closed' },
            { date: 'TUE 07 Apr 2025', action: 'Dividend received' },
            { date: 'MON 06 Apr 2025', action: 'Buy order closed' }
        ]
    }
};

// Store current stock symbol globally
let currentStock = 'AAPL';

// FIXED FUNCTION NAME - This is the function called from HTML
function showstockPage(symbol) {
    const stock = stockData[symbol];
    if (!stock) return;

    // Store current stock for chart updates
    currentStock = symbol;

    // Update stock page content using class selectors since IDs don't exist
    const stockIcon = document.querySelector('.stock-icon');
    const stockPrice = document.querySelector('.stock-price');
    const chartValue = document.querySelector('.chart-value');
    const historyContent = document.querySelector('.history-card');

    if (stockIcon) {
        stockIcon.textContent = stock.symbol;
        stockIcon.style.background = stock.iconColor;
    }

    // Update stock info in header
    const stockInfoH2 = document.querySelector('.stock-info h2');
    if (stockInfoH2) {
        stockInfoH2.textContent = stock.symbol;
    }

    if (stockPrice) {
        stockPrice.textContent = stock.price;
    }

    if (chartValue) {
        chartValue.innerHTML = `${stock.chartValue} <span style="color: ${stock.changeColor}; font-size: 14px;">${stock.change}</span>`;
    }

    // Update history
    if (historyContent) {
        const existingHistory = historyContent.querySelectorAll('.history-item');
        existingHistory.forEach((item, index) => {
            if (stock.history[index]) {
                const dateEl = item.querySelector('.history-date');
                const actionEl = item.querySelector('.history-action');
                if (dateEl) dateEl.textContent = stock.history[index].date;
                if (actionEl) actionEl.textContent = stock.history[index].action;
            }
        });
    }

    // Update the live chart for the selected stock
    if (window.currentStockChart) {
        window.currentStockChart.destroy();
    }
    initializeStockChart(symbol);

    // Show stock page, hide portfolio page
    const portfolioPage = document.getElementById('portfolio-page');
    const stockPage = document.getElementById('stock-page');
    
    if (portfolioPage) portfolioPage.classList.add('hidden');
    if (stockPage) stockPage.classList.remove('hidden');
}

function showPortfolioPage() {
    const stockPage = document.getElementById('stock-page');
    const portfolioPage = document.getElementById('portfolio-page');
    
    if (stockPage) stockPage.classList.add('hidden');
    if (portfolioPage) portfolioPage.classList.remove('hidden');
}

// Initialize stock chart for different symbols
function initializeStockChart(symbol) {
    const stock = stockData[symbol];
    if (!stock) return;

    window.currentStockChart = Highcharts.chart('apple-stock-chart', {
        chart: {
            type: 'spline',
            backgroundColor: '#ffffff',
            events: {
                load: function () {
                    const series = this.series[0];
                    setInterval(function () {
                        const x = (new Date()).getTime();
                        const y = getSimulatedStockPrice(symbol);
                        series.addPoint([x, y], true, series.data.length > 50);
                    }, 5000);
                }
            }
        },
        title: {
            text: `Live ${symbol} Stock Price`
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 100
        },
        yAxis: {
            title: {
                text: 'Price in USD'
            },
            gridLineColor: '#f0f0f0'
        },
        tooltip: {
            backgroundColor: '#f9f9f9',
            borderColor: stock.changeColor,
            borderRadius: 8,
            shadow: true,
            formatter: function () {
                return `<b>${this.series.name}</b><br/>` +
                       `${Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x)}<br/>` +
                       `<span style="color:${stock.changeColor}">$${Highcharts.numberFormat(this.y, 2)}</span>`;
            }
        },
        series: [{
            name: symbol,
            color: stock.changeColor,
            lineWidth: 3,
            data: (function () {
                const data = [], time = (new Date()).getTime();
                for (let i = -29; i <= 0; i++) {
                    data.push([time + i * 1000, stock.basePrice + Math.random() * 2]);
                }
                return data;
            })()
        }],
        credits: {
            enabled: false
        }
    });
}

// Get simulated price based on stock symbol
function getSimulatedStockPrice(symbol) {
    const stock = stockData[symbol];
    if (!stock || !window.currentStockChart) return stock.basePrice;
    
    const lastPrice = window.currentStockChart.series[0].data.slice(-1)[0].y;
    const change = (Math.random() - 0.5) * 0.4;
    return lastPrice + change;
}

// Highcharts live Sensex chart
let chart;

document.addEventListener('DOMContentLoaded', function () {
    chart = Highcharts.chart('sensex-chart', {
        chart: {
            type: 'line',
            events: {
                load: function () {
                    const series = this.series[0];
                    setInterval(function () {
                        const x = (new Date()).getTime();
                        const y = getLiveSensexData();
                        series.addPoint([x, y], true, series.data.length > 30);
                    }, 5000);
                }
            }
        },
        title: {
            text: 'Market Sensex Live Data'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150
        },
        yAxis: {
            title: {
                text: 'Sensex Value'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            formatter: function () {
                return `<b>${this.series.name}</b><br/>${Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x)}<br/>${Highcharts.numberFormat(this.y, 2)}`;
            }
        },
        series: [{
            name: 'Sensex',
            data: (function () {
                const data = [], time = (new Date()).getTime();
                for (let i = -29; i <= 0; i++) {
                    data.push([time + i * 1000, 65000 + Math.random() * 100]);
                }
                return data;
            })()
        }]
    });

    // Initialize default AAPL chart
    initializeStockChart('AAPL');
});

// Simulated live data generator
function getLiveSensexData() {
    return 65000 + Math.random() * 200;
}

// Chart.js charts
const line = document.getElementById('lineChart').getContext('2d');

const lineChart = new Chart(line, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Portfolio Value (€)',
            data: [20000, 79000, 110000, 42000, 140000, 115000],
            borderColor: '#4D96FF',
            backgroundColor: 'rgba(77, 150, 255, 0.2)',
            fill: true,
            tension: 0.3,
            pointRadius: 4,
            pointBackgroundColor: '#4D96FF'
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top'
            }
        },
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});

const pie = document.getElementById('portfolioChart').getContext('2d');

const portfolioChart = new Chart(pie, {
    type: 'pie',
    data: {
        labels: ['Stocks', 'Crypto', 'Gold', 'Cash'],
        datasets: [{
            label: 'Portfolio Distribution',
            data: [40, 15, 15, 30],
            backgroundColor: [
                '#4D96FF',
                '#FF6384',
                '#FFD93D',
                '#52B788'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom'
            }
        }
    }
});

//stock price

const apiKey = '25c50186c33243f0aede26703b3c924f';

// Get all stock cards
const stockItem = document.querySelectorAll('.stock-item');

async function fetchAndUpdatePrices() {
  // Collect unique symbols from page
  const symbolsSet = new Set();
  stockItem.forEach(item => {
    const symbol = item.querySelector('.stock-symbol').textContent.trim();
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
  stockItem.forEach(item => {
    const symbol = item.querySelector('.stock-symbol').textContent.trim();
    const priceElement = item.querySelector('.stock-price');

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