# LUXEHAVEN | Premium Stays & Real Estate

A luxury real estate and premium accommodation website with modern design, property browsing, filtering, and interactive features.

## 🚀 Project Overview

This is a fully responsive frontend web application for browsing luxury properties, vacation rentals, and real estate listings. Features include property search, advanced filtering, interactive property modals, dark mode, and mobile optimized design.

## ✨ Features

### 🔍 Property Browsing
- **Featured Properties Carousel** - Hand-picked premium listings
- **All Properties Grid** - Complete property catalog
- **Advanced Filtering**:
  - Filter by property type (Villa, Apartment, Condo)
  - Filter by minimum bedrooms
  - Filter by price range

### 🎨 User Experience
- **Dark/Light Mode** - Persistent theme preference using localStorage
- **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **Mobile Navigation Menu** - Hamburger menu for small screens
- **Smooth Scroll Navigation** - Seamless section transitions
- **Interactive Property Modals** - Detailed property views with booking forms

### 🗺️ Location & Discovery
- **Interactive Google Maps Integration** - Explore property locations
- **Search Functionality** - Search by location, property type, and price

### 📝 Additional Sections
- **Guest Testimonials** - Verified reviews from previous guests
- **Real Estate Blog** - Guides, insights and neighborhood information
- **Newsletter Subscription** - Get exclusive listings and offers
- **Saved Properties** - Favorites functionality (demo)

## 🛠️ Technology Stack

| Component | Technologies Used |
|-----------|-------------------|
| **Frontend** | Pure HTML5, CSS3, Vanilla JavaScript |
| **Styling** | Custom CSS with CSS Variables for theming |
| **Icons** | Font Awesome 6 |
| **Fonts** | Google Fonts (Montserrat + Cormorant Garamond) |
| **Maps** | Google Maps Embed API |
| **Images** | Unsplash CDN for high quality property photos |

## 📂 Project Structure

```
Real Estate Site/
├── airbnb_realestate.html    # Main application HTML
├── CSS/
│   └── style.css             # Global styles, themes, responsive design
├── JS/
│   └── script.js             # All interactive functionality
├── IMG/
│   └── LuxeHaven Logo.png    # Site branding
└── README.md                 # This documentation file
```

## ⚙️ Core Functionality Explained

### Dark Mode Toggle
- Persists user theme preference in localStorage
- Auto-detects saved theme on page load
- Smooth theme transition between light/dark modes

### Property Data System
- Local JavaScript property database
- Dynamic rendering of property cards
- Filter engine with multi-criteria filtering
- Modals for detailed property views

### Responsive Layout
- Mobile-first design approach
- Flexbox and Grid layouts
- Breakpoints optimized for all screen sizes
- Touch friendly interactive elements

## 🚀 How to Run

This is a static website with no build process required:

1.  **Clone or download the project**
2.  **Open directly in browser**:
    - Double click `airbnb_realestate.html`
    - Or serve with any web server

Optionally run a local web server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Then open http://localhost:8000/airbnb_realestate.html
```

## 🎯 Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ All modern mobile browsers

## 🔮 Future Enhancements

- [ ] User authentication system
- [ ] Real backend API integration
- [ ] Property booking calendar
- [ ] Image galleries with lightbox
- [ ] Advanced map markers and clustering
- [ ] Proper user favorites system
- [ ] Contact form backend integration
- [ ] Pagination for property listings

## 📄 License

© 2026 LUXEHAVEN — Luxury Real Estate & Stays