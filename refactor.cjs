const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const componentsDir = path.join(srcDir, 'components');
const layoutDir = path.join(srcDir, 'layout');
const sectionsDir = path.join(srcDir, 'sections');

// Ensure directories exist
if (!fs.existsSync(layoutDir)) fs.mkdirSync(layoutDir);
if (!fs.existsSync(sectionsDir)) fs.mkdirSync(sectionsDir);

const layoutComponents = ['Navbar', 'Footer'];
const sectionComponents = [
    'Hero', 'HeroGlobe', 'Stats', 'Accordion', 'Testimonial',
    'Expertise', 'Research', 'GenAITabs', 'FlowDiagram',
    'PlatformSchema', 'Pillars', 'Datasets', 'Certifications', 'Blogs', 'Features'
];

function moveComponent(name, targetBaseDir) {
    const componentDir = path.join(targetBaseDir, name);
    if (!fs.existsSync(componentDir)) {
        fs.mkdirSync(componentDir);
    }

    const jsxFile = path.join(componentsDir, `${name}.jsx`);
    const cssFile = path.join(componentsDir, `${name}.css`);

    if (fs.existsSync(jsxFile)) {
        fs.renameSync(jsxFile, path.join(componentDir, `${name}.jsx`));
    }
    if (fs.existsSync(cssFile)) {
        fs.renameSync(cssFile, path.join(componentDir, `${name}.css`));
    }

    // Create index.js wrapper
    const indexFile = path.join(componentDir, 'index.js');
    if (!fs.existsSync(indexFile) && fs.existsSync(path.join(componentDir, `${name}.jsx`))) {
        fs.writeFileSync(indexFile, `export { default } from './${name}';\n`);
    }
}

// Move files
layoutComponents.forEach(c => moveComponent(c, layoutDir));
sectionComponents.forEach(c => moveComponent(c, sectionsDir));

// Update App.jsx imports
const appFile = path.join(srcDir, 'App.jsx');
let appContent = fs.readFileSync(appFile, 'utf8');

appContent = appContent.replace(
    /import\s+([A-Za-z0-9]+)\s+from\s+['"]\.\/components\/([A-Za-z0-9]+)['"];/g,
    (match, p1, p2) => {
        if (layoutComponents.includes(p2)) {
            return `import ${p1} from '../layout/${p2}';`; // going to update that wait, App.jsx is in src, so it's ./layout/...
        } else if (sectionComponents.includes(p2)) {
            return `import ${p1} from './sections/${p2}';`;
        }
        return match;
    }
);
// Fix the layout imports path
appContent = appContent.replace(/\.\.\/layout\//g, './layout/');

fs.writeFileSync(appFile, appContent);

console.log('Refactoring complete!');
