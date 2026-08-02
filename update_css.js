const fs = require('fs');

let css = fs.readFileSync('src/index.css', 'utf8');

// The colors requested
// Background: Charcoal Black #1B1B1B -> var(--bg)
// Section: Dark Brown #2D241F -> var(--surface)
// Primary: Burnt Orange #D97706 -> var(--accent)
// Accent: Fire Orange #F97316 -> var(--accent2)
// Text: Cream #F5F5DC -> var(--text)
// Secondary Text: Light Gray #CFCFCF -> var(--text-muted)

// We replace occurrences of the old RGB values if they differ.
// But the hexes are already these!
// Old CSS:
// --bg: #1B1B1B;
// --surface: #2D241F;
// --surface2: #3a2f2a;
// --accent: #D97706;
// --accent2: #F97316;
// --gold: #D97706;
// --red: #F97316;
// --text: #F5F5DC;
// --text-muted: #CFCFCF;
// --border: rgba(217,119,6,0.18);

// The problem is that in Hero and other places, there are hardcoded rgb(184,92,56)
// which is #B85C38. And rgba(158,53,35) which is #9E3523.
css = css.replace(/184\s*,\s*92\s*,\s*56/g, '217,119,6'); // Change old accent to #D97706
css = css.replace(/158\s*,\s*53\s*,\s*35/g, '249,115,22'); // Change old accent2 to #F97316

// Update the mobile navbar nav gap
// nav { display: none; flex-direction: column; position: absolute; top: 100%; left: 0; right: 0; background: var(--bg); padding: 1.5rem 2rem; border-bottom: 1px solid var(--border); box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
// We can make header position relative? Wait, header is fixed. So nav is relative to header.
css = css.replace('top: 100%;', 'top: 68px;'); // 68px is exactly the height of the header
// To ensure it covers completely and merges nicely
css = css.replace(/background:\s*var\(--bg\);\s*padding:\s*1\.5rem 2rem;/g, 'background: rgba(27,27,27,0.95); padding: 1.5rem 2rem; backdrop-filter: blur(10px);');

// Change the font for the brand or add some polish?
// The user asked for typography to be "konsisten serta rapi"
// Font families: Playfair Display and Lato.
// Maybe just ensure the checkout button in navbar is refined.

fs.writeFileSync('src/index.css', css);
console.log("Updated index.css");
