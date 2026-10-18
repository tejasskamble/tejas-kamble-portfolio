# Tejas Kamble | Portfolio

A static portfolio site (HTML, CSS, JavaScript). No build step, no dependencies. Content comes only from the resume.

## Structure
```
index.html
css/style.css
js/main.js
assets/Tejas_Kamble_Resume.pdf   <- Download Resume button
assets/favicon.svg
```

## Preview locally
```
python3 -m http.server 8000
```
Open http://localhost:8000

## Deploy to GitHub Pages
1. Create a new public repository on GitHub. Name it `tejasskamble.github.io` to get the URL `https://tejasskamble.github.io`, or any other name (e.g. `portfolio`) to get `https://tejasskamble.github.io/portfolio/`.
2. Upload the contents of this folder so `index.html` sits at the repository root. With Git:
   ```
   git init
   git add .
   git commit -m "Add portfolio"
   git branch -M main
   git remote add origin https://github.com/tejasskamble/<repo-name>.git
   git push -u origin main
   ```
3. In the repository, open **Settings > Pages**.
4. Under **Build and deployment**, set **Source** to **Deploy from a branch**, choose branch `main` and folder `/ (root)`, then **Save**.
5. Wait one to two minutes, then open the URL shown at the top of the Pages screen.

## Update later
- **Resume:** replace `assets/Tejas_Kamble_Resume.pdf` with the new file, keeping the same name.
- **Certifications:** none are in the resume, so there is no section. To add one, copy a `<section>` in `index.html`, add a nav link, and fill in your real details.
- **Contact form:** it opens the visitor's email app (static sites have no server). Email, phone, LinkedIn and GitHub links work directly.
