const fs = require('fs');

let css = fs.readFileSync('src/index.css', 'utf8');

css = css.replace(/184\s*,\s*92\s*,\s*56/g, '217,119,6'); // Change old accent to #D97706
css = css.replace(/158\s*,\s*53\s*,\s*35/g, '249,115,22'); // Change old accent2 to #F97316

css = css.replace('top: 100%;', 'top: 68px;'); // 68px is exactly the height of the header
css = css.replace(/background:\s*var\(--bg\);\s*padding:\s*1\.5rem 2rem;/g, 'background: rgba(27,27,27,0.95); padding: 1.5rem 2rem; backdrop-filter: blur(10px);');

fs.writeFileSync('src/index.css', css);
console.log("Updated index.css");
