# Prerak Patel — Portfolio Website

A personal portfolio website built with pure **HTML + CSS + JS** (no frameworks, no build tools).  
Inspired by the [Figma Portfolio Presentation Template](https://www.figma.com/community/file/1597821544420498783).  
Self-hosted on a Raspberry Pi via Nginx.

## 🚀 Features

- Dark tech-noir design with orange accent (`#ff4d00`)
- Animated code-rain hero background
- Typewriter effect cycling through roles
- Custom cursor with hover ring
- Scroll-reveal animations
- Sticky nav with active section highlighting
- Filterable projects grid
- Count-up metrics on scroll
- Mobile-responsive with hamburger menu
- Raspberry Pi ready (zero dependencies)

## 📁 Structure

```
portfolio/
├── index.html    ← All sections (Hero, About, Timeline, Projects, Contact)
├── style.css     ← Full design system + animations
└── script.js     ← Cursor, typewriter, filters, scroll effects
```

## 🍓 Raspberry Pi Deployment

### 1. Clone on your Pi
```bash
git clone https://github.com/YOUR_USERNAME/portfolio.git /var/www/html/portfolio
```

### 2. Install Nginx
```bash
sudo apt update && sudo apt install nginx -y
```

### 3. Nginx config (`/etc/nginx/sites-available/portfolio`)
```nginx
server {
    listen 80;
    server_name _;

    root /var/www/html/portfolio;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

```bash
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl restart nginx
```

### 4. Update your site anytime
```bash
# On your Mac — push changes
git add . && git commit -m "update content" && git push

# On your Pi — pull latest
cd /var/www/html/portfolio && git pull
```

## 📬 Contact

- **Email:** prerak09ap@gmail.com  
- **LinkedIn:** [linkedin.com/in/prerak-patel-](https://www.linkedin.com/in/prerak-patel-)  
- **Location:** Tampa, FL
  
# Updated
