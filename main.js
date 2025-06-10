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
            // For other pages that don't exist yet, you can add:
            // else if (textContent === 'Schedules') {
            //     // Show schedules page when you create it
            // }
            // else if (textContent === 'Payouts') {
            //     // Show payouts page when you create it
            // }
            // else if (textContent === 'Settings') {
            //     // Show settings page when you create it
            // }
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