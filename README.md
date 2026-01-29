# Musical Engine - SADOK Refresh Drinks

A modern, interactive web application showcasing **SADOK**, a Ukrainian-inspired organic beverage brand. This project features a stunning visual experience with drink showcases, brand storytelling, and smooth animations.

🌐 **Live Demo**: [https://reliable-elf-179197.netlify.app](https://reliable-elf-179197.netlify.app)

## 🌿 Brand Vision

**SADOK** (Ukrainian for "garden") is an organic beverage brand that celebrates Ukrainian culture, hospitality, and natural ingredients. The brand brings together:

- **Heritage**: Inspired by Ukrainian traditions and natural ingredients
- **Freshness**: Garden-fresh, organic ingredients pressed to perfection
- **Resilience**: Named after national symbols like the sunflower, representing hope and sunshine
- **Modern Tradition**: Bridging village nostalgia with contemporary refreshment

### Design Philosophy

The brand employs a distinctive visual identity with:
- **Color Palette**: Oat Milk (#F9F7F2), Deep Forest (#1E420F), Sunshine Orange (#FFBC59), Hedgehog Earth (#8D6E52)
- **Typography**: Serif fonts (Recoleta, Cooper Black) for brand personality, Space Mono for data/modern feel
- **Visual Style**: Glassmorphism effects, smooth transitions, and organic shapes

## 📁 Project Layout

```
musical-engine/
├── trunk/                      # Main production branch
│   ├── src/                    # Source files
│   │   ├── index.jsx           # Compiled React application
│   │   ├── index.css           # Main styles
│   │   ├── DrinkTransitions.css  # Drink showcase animations
│   │   ├── hoverButton.css     # Button hover effects
│   │   ├── hoverCircle.css     # Circular hover animations
│   │   ├── logo.png            # SADOK brand logo
│   │   ├── classic/            # Classic drink collection images
│   │   │   ├── 0.jpg
│   │   │   ├── 1.png
│   │   │   ├── 2.jpg
│   │   │   └── 3.jpg
│   │   └── staple/             # Staple drinks collection images
│   │       ├── 0.png
│   │       ├── 1.png
│   │       ├── 2.png
│   │       └── 3.png
│   ├── public/                 # Public assets
│   │   └── index.html          # HTML template
│   ├── build/                  # Production build output
│   ├── index.tsx               # Root TypeScript component
│   ├── package.json            # Project dependencies
│   ├── tsconfig.json           # TypeScript configuration
│   └── .gitignore              # Git ignore rules
└── README.md                   # This file
```

## 📦 Contents

### Drink Collections

The trunk branch features two main drink collections:

#### Classic Collection (Ukrainian-Inspired)
1. **Kyiv Cooler** - Garden Classic with cucumber, lemon, elderflower, and mint
2. **Sunflower Fizz** - Solar-powered summer edit with chamomile, citrus, and raw honey
3. **Black Sea Breeze** - Bold coastal refresher with blackcurrant, wild mint, lemon, and fizz
4. **Kyiv Kvass Lite** - Modern tradition with toasted bread, honey, lemon, and mint

#### Staple Collection
1. **Coca-Cola** - The timeless original
2. **Sprite** - Crisp lemon-lime refreshment
3. **Dr. Pepper** - Bold 23-flavor spiced blend
4. **Fanta** - Bright and fruity orange fizz

### Key Features
- Interactive drink showcase with smooth transitions
- Responsive design with glassmorphism effects
- Scroll-based timeline for exploring drinks
- Hover animations and visual effects
- Mobile-friendly navigation

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/HoithOF/musical-engine.git
   cd musical-engine
   ```

2. **Switch to the trunk branch**
   ```bash
   git checkout trunk
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

## 🏃 Running the Project Locally

### Development Mode

Start the development server with hot-reload:

```bash
npm start
```

The application will open automatically in your default browser at [http://localhost:3000](http://localhost:3000).

### Production Build

Create an optimized production build:

```bash
npm run build
```

The build output will be in the `build/` directory, ready for deployment.

### Testing

Run the test suite:

```bash
npm test
```

## 🛠 Technology Stack

- **React 19.2.4** - UI framework
- **TypeScript** - Type-safe JavaScript
- **React Scripts 5.0.1** - Build tooling
- **CSS3** - Styling with custom animations
- **Netlify** - Deployment platform

## 🌐 Deployment

The trunk branch is automatically deployed to Netlify:

**Live URL**: [https://reliable-elf-179197.netlify.app](https://reliable-elf-179197.netlify.app)

## 🤝 Contributing

This is a collaboration repository - contributions are welcome! Feel free to explore, experiment, and contribute to the project.

## 📄 License

ISC License

---

**Built with 🌻 by the SADOK team**
