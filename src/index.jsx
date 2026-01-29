"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const client_1 = require("react-dom/client");
// Ensure these CSS files exist or the styles below will handle most visual lifting
require("./hoverButton.css");
require("./hoverCircle.css");
require("./DrinkTransitions.css");
require("./index.css");
// --- DESIGN TOKENS ---
const THEME = {
    oatMilk: "#F9F7F2",
    deepForest: "#1E420F",
    sunshineOrange: "#FFBC59",
    hedgehogEarth: "#8D6E52",
    glass: "rgba(255, 255, 255, 0.4)",
    glassBorder: "rgba(30, 66, 15, 0.1)"
};
const FONTS = {
    serif: "'Recoleta', 'Cooper Black', serif",
    mono: "'Space Mono', 'Courier New', monospace",
    sans: "'Inter', sans-serif"
};
// Placeholder images for the new aesthetic (Replace with your requires later)
const PLACEHOLDER_IMG = "https://placehold.co/600x800/1E420F/F9F7F2?text=SADOK+REFRESH";
const drinkImages = [
    require('./classic/0.jpg'),
    require('./classic/1.png'),
    require('./classic/2.jpg'),
    require('./classic/3.jpg'),
];
const stapleImages = [
    require('./staple/0.png'),
    require('./staple/1.png'),
    require('./staple/2.png'),
    require('./staple/3.png'),
];
let toChooseFrom = [
    {
        company: "Kyiv Cooler",
        date: "EST. 2026",
        tagline: "GARDEN CLASSIC",
        ingredients: ["Cucumber", "Lemon", "Elderflower", "Mint"],
        description: "A tribute to the simplicity of Ukrainian hospitality. Freshness and comfort hand in hand."
    },
    {
        company: "Sunflower Fizz",
        date: "SUMMER EDIT",
        tagline: "SOLAR POWERED",
        ingredients: ["Chamomile", "Citrus", "Raw Honey"],
        description: "Captures the spirit of resilience. Named after the national flower, a symbol of hope and sunshine."
    },
    {
        company: "Black Sea Breeze",
        date: "COASTAL SERIES",
        tagline: "BOLD REFRESHER",
        ingredients: ["Blackcurrant", "Wild Mint", "Lemon", "Fizz"],
        description: "A nod to the seaside towns of Ukraine. Full of culture, color, and a cooling burst of berry flavor."
    },
    {
        company: "Kyiv Kvass Lite",
        date: "NON-FERM",
        tagline: "MODERN TRADITION",
        ingredients: ["Toasted Bread", "Honey", "Lemon", "Mint"],
        description: "Bringing the nostalgic taste of village life to a modern stand. Preserving culture with a fresh twist."
    }
];
let stapleDrinks = [
    { company: "Coca-Cola", date: "CLASSIC", tagline: "ORIGINAL", ingredients: ["Caramel", "Bubbles"], description: "The timeless original." },
    { company: "Sprite", date: "LEMON-LIME", tagline: "CRISP", ingredients: ["Lemon", "Lime"], description: "Light refreshment with a clean finish." },
    { company: "Dr. Pepper", date: "23 FLAVORS", tagline: "SPICED", ingredients: ["Spice Blend", "Cherry"], description: "A bold, unique blend for those who dare." },
    { company: "Fanta", date: "ORANGE", tagline: "FRUITY", ingredients: ["Orange", "Fizz"], description: "Bright, fruity, and bursting with flavor." }
];
// --- COMPONENTS ---
class Title extends react_1.Component {
    render() {
        return (<header style={{
                position: "fixed",
                top: "20px",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 1000,
                width: "90%",
                maxWidth: "700px" // Slightly wider to accommodate logo
            }}>
                <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "8px 20px",
                background: THEME.glass,
                backdropFilter: "blur(12px)",
                borderRadius: "50px",
                border: `1px solid ${THEME.glassBorder}`,
                boxShadow: "0 4px 20px rgba(0,0,0,0.05)"
            }}>
                    {/* --- LEFT: LOGO & BRAND NAME --- */}
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <img src={require('./logo.png')} alt="Sadok Logo" style={{
                height: "45px",
                width: "45px",
                borderRadius: "50%",
                objectFit: "cover",
                border: `2px solid ${THEME.deepForest}`
            }}/>
                        <div style={{
                fontWeight: "900",
                color: THEME.deepForest,
                fontFamily: FONTS.serif,
                fontSize: "24px",
                letterSpacing: "-0.5px"
            }}>
                            SADOK
                        </div>
                    </div>

                    {/* --- RIGHT: NAVIGATION --- */}
                    <nav className="hoverButton" style={{ display: "flex", gap: "20px", fontFamily: FONTS.mono, fontSize: "14px" }}>
                        <a href="#" style={{ textDecoration: "none", color: THEME.deepForest }}>SHOP</a>
                        <a href="#about" style={{ textDecoration: "none", color: THEME.deepForest }}>ABOUT</a>
                        <a href="#" style={{ textDecoration: "none", color: THEME.deepForest }}>CONTACT US</a>
                    </nav>
                </div>
            </header>);
    }
}
class Banner extends react_1.Component {
    render() {
        return (<div style={{
                position: "relative",
                height: "90vh",
                width: "100%",
                maxWidth: "1400px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                paddingTop: "80px" // clear navbar
            }}>
                <h1 style={{
                fontSize: "clamp(60px, 15vw, 180px)",
                lineHeight: "0.85",
                color: THEME.deepForest,
                fontFamily: FONTS.serif,
                margin: 0
            }}>
                    FRESH<br />
                    <span style={{ color: THEME.sunshineOrange }}>FROM THE</span><br />
                    GARDEN
                </h1>
                
                <p style={{
                fontFamily: FONTS.mono,
                marginTop: "40px",
                maxWidth: "400px",
                color: THEME.hedgehogEarth,
                letterSpacing: "1px"
            }}>
                    ORGANIC • RAW • PRESSED • SADOK
                </p>

                {/* Decorative Sun */}
                <div style={{
                position: "absolute",
                zIndex: -1,
                width: "60vw",
                height: "60vw",
                background: "#FFF4E0",
                borderRadius: "50%",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)"
            }}></div>
            </div>);
    }
}
class DrinkTransitions extends react_1.Component {
    constructor() {
        super(...arguments);
        this.NextClick = () => {
            const nextIndex = (this.props.currentIndex + 1) % 4;
            this.props.onIndexChange(nextIndex);
        };
        this.PrevClick = () => {
            const total = 4;
            let prevIndex = this.props.currentIndex - 1;
            if (prevIndex < 0)
                prevIndex = Math.abs(prevIndex) % total;
            this.props.onIndexChange(prevIndex);
        };
    }
    render() {
        // Use provided images or fallback to placeholder
        const imgSrc = (this.props.images && this.props.images[this.props.currentIndex])
            ? this.props.images[this.props.currentIndex]
            : PLACEHOLDER_IMG;
        return (<div style={{ position: "relative", height: "100%", minHeight: "500px", overflow: "hidden", borderRadius: "24px" }}>
                {/* Image Container with Hover Effect */}
                <img src={imgSrc} alt="Drink Visual" style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.5s ease"
            }} onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"} onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1.0)"}/>
                
                {/* Custom Navigation Controls Overlay */}
                <div style={{
                position: "absolute",
                bottom: "20px",
                right: "20px",
                display: "flex",
                gap: "10px"
            }}>
                    <button onClick={(e) => { e.preventDefault(); this.PrevClick(); }} style={navButtonStyle}>
                        ←
                    </button>
                    <button onClick={(e) => { e.preventDefault(); this.NextClick(); }} style={navButtonStyle}>
                        →
                    </button>
                </div>
            </div>);
    }
}
class ScrollTimeline extends react_1.Component {
    render() {
        var _a;
        // Safe fallback in case props are undefined
        const drink = ((_a = this.props.drinks) !== null && _a !== void 0 ? _a : toChooseFrom)[this.props.index];
        return (<div style={{
                height: "100%",
                minHeight: "500px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "40px",
                backgroundColor: THEME.deepForest,
                color: THEME.oatMilk,
                borderRadius: "24px",
                fontFamily: FONTS.mono,
                position: "relative"
            }}>
                {/* --- Top Section: Header & Description --- */}
                <div>
                    {/* Header Row */}
                    <div style={{
                borderBottom: `1px solid ${THEME.sunshineOrange}`,
                paddingBottom: "10px",
                marginBottom: "30px",
                display: "flex",
                justifyContent: "space-between"
            }}>
                        {/* Changed "//" to a standard pipe "|" for cleaner code syntax */}
                        <span>0{this.props.index + 1} | PRODUCT</span>
                        <span>{drink.date}</span>
                    </div>

                    {/* Title */}
                    <h2 style={{
                fontFamily: FONTS.serif,
                fontSize: "48px",
                margin: "0 0 20px 0",
                color: THEME.sunshineOrange
            }}>
                        {drink.company}
                    </h2>
                    
                    {/* Description */}
                    <p style={{
                fontSize: "18px",
                lineHeight: "1.6",
                opacity: 0.9,
                maxWidth: "90%"
            }}>
                        {drink.description}
                    </p>
                </div>

                {/* --- Bottom Section: Ingredients --- */}
                <div style={{ marginTop: "auto" }}>
                    <p style={{ opacity: 0.5, marginBottom: "10px" }}>CONTAINS:</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                        {drink.ingredients.map((ing, i) => (<span key={i} style={{
                    padding: "5px 12px",
                    border: `1px solid ${THEME.oatMilk}`,
                    borderRadius: "50px",
                    fontSize: "12px",
                    textTransform: "uppercase"
                }}>
                                {ing}
                            </span>))}
                    </div>
                </div>
            </div>);
    }
}
class SectionHeader extends react_1.Component {
    render() {
        return (<div style={{
                width: "100%",
                maxWidth: "1200px",
                margin: "100px 0 40px 0",
                padding: "0 20px"
            }}>
                <h2 style={{
                fontFamily: FONTS.serif,
                fontSize: "40px",
                color: THEME.deepForest
            }}>
                    {this.props.title}
                </h2>
                <div style={{
                height: "2px",
                width: "100%",
                background: THEME.deepForest,
                marginTop: "10px",
                position: "relative"
            }}>
                    <span style={{
                position: "absolute",
                right: 0,
                top: "10px",
                fontFamily: FONTS.mono,
                fontSize: "14px"
            }}>
                        {this.props.subtitle}
                    </span>
                </div>
            </div>);
    }
}
class About extends react_1.Component {
    render() {
        return (<footer style={{
                width: "100%",
                padding: "80px 20px",
                backgroundColor: THEME.deepForest,
                color: THEME.oatMilk,
                marginTop: "100px",
                textAlign: "center"
            }}>
                <h2 style={{ fontFamily: FONTS.serif, fontSize: "80px", margin: 0, opacity: 0.2 }}>SADOK</h2>
                <div style={{ fontFamily: FONTS.mono, marginTop: "40px", display: "grid", gap: "10px" }}>
                    <p>VISIT US: M-F 4PM – 9PM</p>
                    <p>VANCOUVER, WA</p>
                    <p>© 2026 REFRESKO INC</p>
                </div>
            </footer>);
    }
}
class DrinkShowcase extends react_1.Component {
    constructor(props) {
        super(props);
        this.handleIndexChange = (index) => {
            this.setState({ currentIndex: index });
        };
        this.state = { currentIndex: 0 };
    }
    render() {
        return (<div style={gridContainerStyle}>
                {/* We swap the order here visually: Text on Left (Timeline), Image on Right (Transitions)
               This creates a nice Bento Card effect.
            */}
                <div style={{ flex: "1 1 500px" }}>
                    <ScrollTimeline index={this.state.currentIndex}/>
                </div>
                <div style={{ flex: "1 1 500px" }}>
                    <DrinkTransitions currentIndex={this.state.currentIndex} onIndexChange={this.handleIndexChange} images={stapleImages}/>
                </div>
            </div>);
    }
}
class StapleDrinkShowcase extends react_1.Component {
    constructor(props) {
        super(props);
        this.handleIndexChange = (index) => {
            this.setState({ currentIndex: index });
        };
        this.state = { currentIndex: 0 };
    }
    render() {
        return (<div style={gridContainerStyle}>
                <div style={{ flex: "1 1 500px", order: 2 }}> {/* Image first for variation? Or keep consistent. Let's keep consistent layout but swap order prop if needed */}
                     <ScrollTimeline index={this.state.currentIndex} drinks={stapleDrinks}/>
                </div>
                <div style={{ flex: "1 1 500px", order: 1 }}>
                     <DrinkTransitions currentIndex={this.state.currentIndex} onIndexChange={this.handleIndexChange} images={drinkImages}/>
                </div>
            </div>);
    }
}
// --- STYLES OBJECTS ---
const gridContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "stretch",
    maxWidth: "1200px",
    width: "95%",
    margin: "0 auto",
    gap: "20px",
    flexWrap: "wrap",
    boxSizing: "border-box"
};
const navButtonStyle = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    border: "none",
    background: THEME.sunshineOrange,
    color: THEME.deepForest,
    fontSize: "20px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.2s"
};
const mainContainerStyle = {
    backgroundColor: THEME.oatMilk,
    color: THEME.deepForest,
    minHeight: "100vh",
    width: "100%",
    overflowX: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
};
// --- RENDER ---
const rootElem = document.getElementById('root');
if (rootElem == null) {
    alert('Root element missing');
}
const root = (0, client_1.createRoot)(rootElem);
root.render(<react_1.StrictMode>
        <div style={mainContainerStyle}>
            <Title />
            <Banner />

            <SectionHeader title="Signature Blends" subtitle="SEASONAL HARVEST"/>
            <DrinkShowcase />

            <SectionHeader title="The Classics" subtitle="ALWAYS IN STOCK"/>
            <StapleDrinkShowcase />

            <About />
        </div>
    </react_1.StrictMode>);
