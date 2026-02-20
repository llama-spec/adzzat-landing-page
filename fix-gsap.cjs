const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'sections');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

// We will do a generic replacement:
// If we find gsap.from(something, { ...opacity: 0... }) 
// Actually, since I know the files, let's just use simple regex or replace
function refactorFile(filePath) {
    if (!filePath.endsWith('.jsx')) return;
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Example in Blogs: 
    // gsap.from('.blog-card', {
    //             y: 40, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
    //             scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
    //         });

    // Replace gsap.from('.class', { y: 40, opacity: 0, ... }) with gsap.fromTo
    // This is hard to regex perfectly. Better approach: add a global CSS rule ensuring opacity is 1, and GSAP handles fromTo? No.

    // Let's replace gsap.from with gsap.fromTo for known combinations

    content = content.replace(/gsap\.from\(\s*('.*?'),\s*\{\s*y:\s*(\d+),\s*opacity:\s*0,/g,
        "gsap.fromTo($1, { y: $2, opacity: 0 }, { y: 0, opacity: 1, ");

    content = content.replace(/gsap\.from\(\s*('.*?'),\s*\{\s*x:\s*(-?\d+),\s*opacity:\s*0,/g,
        "gsap.fromTo($1, { x: $2, opacity: 0 }, { x: 0, opacity: 1, ");

    content = content.replace(/gsap\.from\(\s*('.*?'),\s*\{\s*opacity:\s*0,\s*duration:/g,
        "gsap.fromTo($1, { opacity: 0 }, { opacity: 1, duration:");

    content = content.replace(/gsap\.from\(\s*('.*?'),\s*\{\s*opacity:\s*0,\s*scale:\s*([\d.]+),/g,
        "gsap.fromTo($1, { opacity: 0, scale: $2 }, { opacity: 1, scale: 1, ");

    // Handle Hero specific replacements:
    content = content.replace(/gsap\.from\('.hero-badge',\s*\{\s*y:\s*30,\s*opacity:\s*0,\s*duration:\s*1,\s*ease:\s*'power3\.out'\s*\}\);/g,
        "gsap.fromTo('.hero-badge', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' });");

    content = content.replace(/gsap\.from\('.hero-title-line',\s*\{\s*n\s*y:\s*40,\s*opacity:\s*0,/g,
        "gsap.fromTo('.hero-title-line', { y: 40, opacity: 0 }, { y: 0, opacity: 1, ");

    // Fallback manual replacer for Hero:
    if (filePath.includes('Hero.jsx')) {
        content = content.replace(/gsap\.from\('.hero-title-line',\s*\{([\s\S]*?)y:\s*40,\s*opacity:\s*0,\s*duration:\s*1,\s*stagger:\s*0.15,\s*ease:\s*'power3\.out',\s*delay:\s*0.2\s*\}\);/g,
            "gsap.fromTo('.hero-title-line', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.2 });");
        content = content.replace(/gsap\.from\('.hero-cta',\s*\{\s*y:\s*20,\s*opacity:\s*0,\s*duration:\s*1,\s*ease:\s*'power3\.out',\s*delay:\s*0.6\s*\}\);/g,
            "gsap.fromTo('.hero-cta', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.6 });");
        content = content.replace(/gsap\.from\('.hero-trusted',\s*\{\s*opacity:\s*0,\s*duration:\s*1,\s*ease:\s*'power3\.out',\s*delay:\s*0.8\s*\}\);/g,
            "gsap.fromTo('.hero-trusted', { opacity: 0 }, { opacity: 1, duration: 1, ease: 'power3.out', delay: 0.8 });");
    }

    if (content !== original) {
        fs.writeFileSync(filePath, content);
        console.log(`Refactored: ${filePath}`);
    }
}

walkDir(srcDir, refactorFile);

// Also do Footer
refactorFile(path.join(__dirname, 'src', 'layout', 'Footer', 'Footer.jsx'));

console.log('GSAP refactor complete!');
