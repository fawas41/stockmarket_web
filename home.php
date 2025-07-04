<?php session_start();
if (!isset($_SESSION['user'])) {
    header("Location: login.php");
    exit;
} ?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Trackvest</title>
  <link rel="icon" type="image/png" href="images/icons/favicon.ico"/>
  <link rel="stylesheet" href="home.css"/>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>

  <header>
        <div class="container nav-container">
            <div class="logo">
                <div class="logo-icon">
                    <img src="Assets/Images/WhatsApp Image 2025-05-16 at 19.07.48_c81669d4.jpg" alt="TrackVest Logo">
                </div>
                <h1>TrackVest</h1>
            </div>
            
            <nav>
                <ul>
                    <li><a href="#" class="active">Home</a></li>
                    <li><a href="main.html">Market</a></li>
                    <li><a href="main.html">Analysis</a></li>
                    <li><a href="main.html">Portfolio</a></li>
                    <li><a href="main.html">About</a></li>
                    <!-- <li><a href="#">Contact</a></li> -->
                </ul>
            </nav>
            
            <div class="user-actions">
                <button class="icon-button"><a href="contact.html">
                    <i class="fas fa-envelope"></i>
                </a></button>
                <button class="icon-button">
                    <i class="fas fa-bell"></i>
                </button>
                <button class="theme-toggle" id="themeToggle">&#9788;</button>
                <button id="profileButton" class="profile-button">
                    <img src="Assets/Images/pexels-moose-photos-170195-1036623.jpg" alt="Profile">
                </button>
                <span style="color: white;" class="user-name">Sarah Wilhem</span>
            </div>
            <div id="profileDropdown" class="dropdown">
        <div class="dropdown-header">
            <div class="user-info">
                <img class="user-avatar" src="Assets/Images/pexels-moose-photos-170195-1036623.jpg" alt="Sarah Wilhem">
                <div>
                    <div class="user-name">Sarah Wilhem</div>
                    <div class="user-email">sarah.wilhem@gmail.com</div>
                </div>
            </div>
        </div>

        <div class="dropdown-section">
            <div class="section-title">Account</div>
            <div class="dropdown-item">
                <span class="icon icon-user"></span>
                <span>Edit profile</span>
            </div>
            <div class="dropdown-item">
                <span class="icon icon-shield"></span>
                <span>Security</span>
            </div>
            <!-- <div class="dropdown-item">
                <span class="icon icon-bell"></span>
                <span>Country</span>
            </div> -->


            <div class="dropdown-item has-submenu" data-submenu="country">
    <span class="icon icon-bell"></span>
    <span>Country</span>
    <i class="fas fa-chevron-right submenu-arrow"></i>
    <div class="submenu" id="countrySubmenu">
        <div class="submenu-item" data-country="US">
            <span class="country-flag"></span>
            <div class="item-details">
                <span>United States</span>
                <span class="item-code">US</span>
            </div>
        </div>
        <div class="submenu-item" data-country="DE">
            <span class="country-flag"></span>
            <div class="item-details">
                <span>Germany</span>
                <span class="item-code">DE</span>
            </div>
        </div>
        <div class="submenu-item" data-country="UK">
            <span class="country-flag"></span>
            <div class="item-details">
                <span>United Kingdom</span>
                <span class="item-code">UK</span>
            </div>
        </div>
        <div class="submenu-item" data-country="JP">
            <span class="country-flag"></span>
            <div class="item-details">
                <span>Japan</span>
                <span class="item-code">JP</span>
            </div>
        </div>
        <div class="submenu-item" data-country="CA">
            <span class="country-flag"></span>
            <div class="item-details">
                <span>Canada</span>
                <span class="item-code">CA</span>
            </div>
        </div>
        <div class="submenu-item" data-country="AUD">
            <span class="country-flag"></span>
            <div class="item-details">
                <span>Australia</span>
                <span class="item-code">AUD</span>
            </div>
        </div>
    </div>
</div>
            <!-- <div class="dropdown-item">
                <span class="icon icon-lock"></span>
                <span>Currency</span>
            </div> -->
            <div class="dropdown-item has-submenu" data-submenu="currency">
    <span class="icon icon-lock"></span>
    <span>Currency</span>
    <i class="fas fa-chevron-right submenu-arrow"></i>
    <div class="submenu" id="currencySubmenu">
        <div class="submenu-item" data-currency="USD">
            <span class="currency-symbol">$</span>
            <div class="item-details">
                <span>US Dollar</span>
                <span class="item-code">USD $</span>
            </div>
        </div>
        <div class="submenu-item" data-currency="EUR">
            <span class="currency-symbol">€</span>
            <div class="item-details">
                <span>Euro</span>
                <span class="item-code">EUR €</span>
            </div>
        </div>
        <div class="submenu-item" data-currency="GBP">
            <span class="currency-symbol">£</span>
            <div class="item-details">
                <span>British Pound</span>
                <span class="item-code">GBP £</span>
            </div>
        </div>
        <div class="submenu-item" data-currency="JPY">
            <span class="currency-symbol">¥</span>
            <div class="item-details">
                <span>Japanese Yen</span>
                <span class="item-code">JPY ¥</span>
            </div>
        </div>
        <div class="submenu-item" data-currency="CAD">
            <span class="currency-symbol">C$</span>
            <div class="item-details">
                <span>Canadian Dollar</span>
                <span class="item-code">CAD C$</span>
            </div>
        </div>
        <div class="submenu-item" data-currency="AUD">
            <span class="currency-symbol">A$</span>
            <div class="item-details">
                <span>Australian Dollar</span>
                <span class="item-code">AUD A$</span>
            </div>
        </div>
    </div>
</div>
        </div>

        <div class="dropdown-section">
            <div class="section-title">Support & Pro Version</div>
            <div class="dropdown-item">
                <span class="icon icon-credit-card"></span>
                <span>Upgrade to Pro</span>
            </div>
            <div class="dropdown-item">
                <span class="icon icon-help"></span>
                <span>Help & Support</span>
            </div>
            <div class="dropdown-item">
                <span class="icon icon-file"></span>
                <span>Terms and Policies</span>
            </div>
        </div>

        <div class="dropdown-section">
            <div class="section-title">Cache & cellular</div>
            <div class="dropdown-item">
                <span class="icon icon-trash"></span>
                <span>Free up space</span>
            </div>
            <div class="dropdown-item">
                <span class="icon icon-save"></span>
                <span>Data Saver</span>
            </div>
            <div class="dropdown-item">
                <span class="icon icon-logout"></span>
                <span>Log out</span>
            </div>
        </div>
    </div>
            
            <button class="hamburger" id="hamburger">
                <i class="fas fa-bars"></i>
            </button>
        </div>
        
        <div class="mobile-menu" id="mobile-menu">
            <div class="container">
                <ul style="list-style: none;">
                    <li><a href="#" class="active">Home</a></li>
                    <li><a href="main.html">Markets</a></li>
                    <li><a href="main.html">Analysis</a></li>
                    <li><a href="main.html">Portfolio</a></li>
                    <li><a href="#">About</a></li>
                    <!-- <li><a href="#">Contact</a></li> -->
                </ul>
            </div>
        </div>
    </header>

    <main>
        <section class="hero">
            <div class="hero-background">
                <img style="width: 100%; height: fit-content;" src="Assets/Images/istockphoto-1369016721-612x612.jpg" alt="Investment background" class="hero-image">
            </div>
            <div class="container hero-content">
                <div class="hero-text">
                    <h1>Welcome to TrackVest!</h1>
                </div>
                <div class="hero-device">
                    <img src="Assets/Images/unsplash_sK-ziQvKGsk.png" alt="Investment stats on phone" class="device-image">
                </div>
            </div>
        </section>

        <div class="container">
            <div class="row">
                <div class="portfolio-section">
                    <div class="portfolio-card">
                        <div class="card-header">
                            <h2>Trending Stocks</h2>
                            <button class="refresh-button">
                                Refresh <i class="fas fa-sync"></i>
                            </button>
                        </div>
                        <ul class="trending-list">
                            <li class="trending-item">
                                <div class="item-info">
                                    <div class="item-icon gold-icon">
                                        <i class="fas fa-coins"></i>
                                    </div>
                                    <div class="item-details">
                                        <span class="item-name">GOLD</span>
                                        <span class="item-description">The most purchased in the last week</span>
                                    </div>
                                </div>
                                <span class="item-price">98.54 $</span>
                            </li>
                            <li class="trending-item">
                                <div class="item-info">
                                    <div class="item-icon amzn-icon">
                                        <i class="fab fa-amazon"></i>
                                    </div>
                                    <div class="item-details">
                                        <span class="item-name">AMZN</span>
                                        <span class="item-description">The most added to watchlists</span>
                                    </div>
                                </div>
                                <span class="item-price">183.52 $</span>
                            </li>
                            <li class="trending-item">
                                <div class="item-info">
                                    <div class="item-icon btc-icon">
                                        <i class="fab fa-bitcoin"></i>
                                    </div>
                                    <div class="item-details">
                                        <span class="item-name">BTC</span>
                                        <span class="item-description">Unprecedented trend analysis</span>
                                    </div>
                                </div>
                                <span class="item-price">104,502.26 $</span>
                            </li>
                        </ul>
                    </div>

                    <div class="portfolio-value">
                        <div class="value-label">Your total asset portfolio</div>
                        <div class="value-amount">
                            € 2,340,560 <i class="fas fa-arrow-up"></i>
                        </div>
                    </div>
                </div>
            </div>

            <section class="what-to-buy">
                <div class="section-header">
                    <h2 class="section-title">What's to buy</h2>
                    <a href="main.html" class="see-all">See All <i class="fas fa-chevron-right"></i></a>
                </div>
                <div class="stock-grid">
                    <div class="stock-card" style="background-color: #A6A6A6;">
                        <div class="stock-symbol">AAPL</div>
                        <div class="stock-price">$0.00</div>
                    </div>
                    <div class="stock-card" style="background-color: #000000;">
                        <div class="stock-symbol">TSLA</div>
                        <div class="stock-price">$0.00</div>
                    </div>
                    <div class="stock-card" style="background-color: #4267B2;">
                        <div class="stock-symbol">META</div>
                        <div class="stock-price">$0.00</div>
                    </div>
                    <div class="stock-card" style="background-color: #00ADEF;">
                        <div class="stock-symbol">MSFT</div>
                        <div class="stock-price">$0.00</div>
                    </div>
                    <div class="stock-card" style="background-color: #f44336;">
                        <div class="stock-symbol">NVDA</div>
                        <div class="stock-price">$0.00</div>
                    </div>
                    <div class="stock-card" style="background-color: #FF5700;">
                        <div class="stock-symbol">JD</div>
                        <div class="stock-price">$0.00</div>
                    </div>
                    <div class="stock-card" style="background-color: #E50914;">
                        <div class="stock-symbol">NFLX</div>
                        <div class="stock-price">$0.00</div>
                    </div>
                    <div class="stock-card" style="background-color: #00C853;">
                        <div class="stock-symbol">SHOP</div>
                        <div class="stock-price">$0.00</div>
                    </div>
                    <div class="stock-card" style="background-color: #0087DC;">
                        <div class="stock-symbol">ABT</div>
                        <div class="stock-price">$0.00</div>
                    </div>
                    <div class="stock-card" style="background-color: #ED1C24;">
                        <div class="stock-symbol">AMD</div>
                        <div class="stock-price">$0.00</div>
                    </div>
                </div>
            </section>

            <section class="news-section">
                <div class="news-header">
                    <i class="far fa-newspaper"></i>
                    <h2>Today's News</h2>
                </div>
                <div class="news-grid">
                    <div class="news-item">
                        <h3 class="news-title">
                            <i class="fas fa-arrow-up"></i>
                            US Markets Close Higher
                        </h3>
                        <p class="news-description">
                            Following a strong Q2 GDP release of 3.3%, which surprised to the 
                            upside, the S&P 500 gained 0.53% while Nasdaq rose by 1.04%.
                        </p>
                        <div class="news-time">2 hours ago</div>
                    </div>
                    <div class="news-item">
                        <h3 class="news-title">
                            <i class="fas fa-chart-line"></i>
                            European Markets Show Strength
                        </h3>
                        <p class="news-description">
                            European indices hit all-time highs, especially boosted by recent gains 
                            in the luxury goods sector.
                        </p>
                        <div class="news-time">5 hours ago</div>
                    </div>
                    <div class="news-item">
                        <h3 class="news-title">
                            <i class="fas fa-cloud-rain"></i>
                            Oil Demand Forecast Adjusted
                        </h3>
                        <p class="news-description">
                            The IEA reduced its 2024 oil demand growth forecast for the third consecutive month, 
                            now expecting an increase of only 1.1 million bpd, citing economic weakness.
                        </p>
                        <div class="news-time">8 hours ago</div>
                        <a href="https://www.cnbc.com/world/?region=world" class="read-more">See All</a>
                    </div>
                </div>
            </section>
        </div>
    </main>
    <script>
        // Get DOM elements
        const profileButton = document.getElementById('profileButton');
        const profileDropdown = document.getElementById('profileDropdown');

        // Toggle dropdown visibility
        profileButton.addEventListener('click', function() {
            profileDropdown.classList.toggle('show');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function(event) {
            if (!profileButton.contains(event.target) && !profileDropdown.contains(event.target)) {
                profileDropdown.classList.remove('show');
            }
        });

        // Prevent dropdown from closing when clicking inside it
        profileDropdown.addEventListener('click', function(event) {
            event.stopPropagation();
        });

        // Handle dropdown item clicks (for demonstration)
        const dropdownItems = document.querySelectorAll('.dropdown-item');
        dropdownItems.forEach(item => {
            item.addEventListener('click', function() {
                console.log('Clicked: ' + this.querySelector('span:last-child').textContent);
                // Add functionality for each menu item here
            });
        });
// cavsjnvckjn
        const submenuItems = document.querySelectorAll('.has-submenu');

submenuItems.forEach(item => {
    const submenu = item.querySelector('.submenu');
    const arrow = item.querySelector('.submenu-arrow');
    
    item.addEventListener('mouseenter', function() {
        // Close other submenus
        document.querySelectorAll('.submenu').forEach(otherSubmenu => {
            if (otherSubmenu !== submenu) {
                otherSubmenu.classList.remove('show');
            }
        });
        document.querySelectorAll('.submenu-arrow').forEach(otherArrow => {
            if (otherArrow !== arrow) {
                otherArrow.style.transform = 'rotate(0deg)';
            }
        });
        
        // Show current submenu
        submenu.classList.add('show');
        arrow.style.transform = 'rotate(90deg)';
    });
    
    item.addEventListener('mouseleave', function() {
        setTimeout(() => {
            if (!submenu.matches(':hover') && !item.matches(':hover')) {
                submenu.classList.remove('show');
                arrow.style.transform = 'rotate(0deg)';
            }
        }, 100);
    });
    
    submenu.addEventListener('mouseenter', function() {
        submenu.classList.add('show');
        arrow.style.transform = 'rotate(90deg)';
    });
    
    submenu.addEventListener('mouseleave', function() {
        submenu.classList.remove('show');
        arrow.style.transform = 'rotate(0deg)';
    });
});

// Handle submenu item clicks
document.querySelectorAll('.submenu-item').forEach(item => {
    item.addEventListener('click', function() {
        const countryCode = this.getAttribute('data-country');
        const currencyCode = this.getAttribute('data-currency');
        
        if (countryCode) {
            console.log('Selected country:', countryCode);
            // Add your country selection logic here
        }
        
        if (currencyCode) {
            console.log('Selected currency:', currencyCode);
            // Add your currency selection logic here
        }
        
        // Close dropdowns after selection
        document.getElementById('profileDropdown').classList.remove('show');
        document.querySelectorAll('.submenu').forEach(submenu => {
            submenu.classList.remove('show');
        });
    });
});
    </script>
  <script src="home.js"></script>

</body>
</html>

