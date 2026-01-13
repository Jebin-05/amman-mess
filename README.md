# Amman Veg Restaurant

<p align="center">
  <img src="client/public/logo.jpg" alt="Amman Veg Restaurant Logo" width="150" height="150" style="border-radius: 50%;">
</p>

<p align="center">
  A modern, responsive food ordering web application for Amman Veg Restaurant, delivering an exceptional dining experience through technology.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18.x-61DAFB?style=flat&logo=react" alt="React">
  <img src="https://img.shields.io/badge/CSS3-Responsive-1572B6?style=flat&logo=css3" alt="CSS3">
  <img src="https://img.shields.io/badge/License-MIT-green.svg" alt="License">
</p>

---

## Overview

Amman Veg Restaurant is a full-featured food ordering application that provides customers with a seamless experience to browse menus, customize orders, and complete purchases. Built with modern web technologies and designed with a mobile-first approach.

## Features

### Customer Experience
- **Beautiful Landing Page** - Eye-catching homepage with stunning visuals
- **Interactive Menu** - Browse through categorized food items with elegant card layouts
- **Smart Search** - Instantly find dishes by name or description
- **Category Filtering** - Filter menu by Starters, Main Course, Beverages, Desserts, and more
- **Real-time Cart** - Add, remove, and modify quantities with live updates
- **Seamless Checkout** - Streamlined order placement process
- **Order Confirmation** - Detailed order summary with estimated delivery time

### Technical Highlights
- **Responsive Design** - Optimized for mobile, tablet, and desktop screens
- **Mobile-First CSS** - Built from the ground up for mobile devices
- **Smooth Animations** - Polished transitions and micro-interactions
- **Performance Optimized** - Fast loading with optimized assets
- **Clean Architecture** - Modular component-based structure

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React 18 | Frontend Framework |
| React Router | Client-side Routing |
| Context API | State Management |
| CSS3 | Styling & Animations |
| Create React App | Build Tooling |

## Getting Started

### Prerequisites

- Node.js v14.0.0 or higher
- npm v6.0.0 or higher (or yarn)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/amman-mess.git
   cd amman-mess
   ```

2. **Install dependencies**
   ```bash
   cd client
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
amman-mess/
├── client/
│   ├── public/
│   │   ├── index.html
│   │   ├── Homepage.png        # Landing page background
│   │   ├── BG.JPG              # Menu page background
│   │   ├── ocbg.JPG            # Order confirmation background
│   │   ├── logo.jpg            # Restaurant logo
│   │   └── manifest.json
│   └── src/
│       ├── components/
│       │   ├── Homepage/       # Landing page
│       │   ├── Menu/           # Menu browsing & filtering
│       │   ├── Cart/           # Shopping cart management
│       │   ├── Checkout/       # Order checkout flow
│       │   ├── Order/          # Order confirmation
│       │   ├── ThankYou/       # Thank you page
│       │   ├── Layout/         # Header & navigation
│       │   └── common/         # Shared components
│       ├── context/
│       │   └── CartContext.js  # Global cart state
│       ├── data/
│       │   └── menuData.js     # Menu items data
│       ├── App.js
│       ├── App.css
│       └── index.js
├── Images/                     # Source image assets
├── .gitignore
└── README.md
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Run development server |
| `npm test` | Run test suite |
| `npm run build` | Create production build |
| `npm run eject` | Eject from CRA (one-way) |

## Application Flow

```
Homepage → Menu → Add to Cart → Checkout → Order Confirmation → Thank You
```

1. **Homepage**: Welcoming landing page with "Start Ordering" CTA
2. **Menu**: Browse and search food items, filter by category
3. **Cart**: Review selected items, adjust quantities
4. **Checkout**: Confirm order details
5. **Confirmation**: View order summary and estimated time
6. **Thank You**: Order completion acknowledgment

## Customization

### Adding Menu Items

Edit `client/src/data/menuData.js`:

```javascript
{
  id: 1,
  name: 'Dish Name',
  description: 'Delicious description',
  price: 100,
  category: 'starters',
  image: '/images/dish.jpg',
  emoji: '🍽️'
}
```

### Modifying Styles

- Global styles: `client/src/index.css`
- Component styles: Located in respective component folders

## Deployment

### Build for Production

```bash
cd client
npm run build
```

### Deployment Options

- **Vercel**: Connect repository for automatic deployments
- **Netlify**: Drag and drop build folder or connect Git
- **GitHub Pages**: Deploy using gh-pages package
- **Firebase**: Use Firebase Hosting CLI

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome for Android)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Design inspired by authentic South Indian vegetarian cuisine
- Built with React and modern web standards

---

<p align="center">
  Made with ❤️ for Amman Veg Restaurant
</p>
