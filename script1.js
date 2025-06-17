// Ievieto aktuālo gadu kājenē
document.getElementById('year').textContent = new Date().getFullYear();

// Valodu tulkojumi
const translations = {
    lv: {
        welcome: "Sveiks/-a manā personīgajā lapā!",
        projects: "Projekti",
        blog: "Blogs",
        about: "Par mani",
        gallery: "Galerija",
        projects_title: "Skolas projekti",
        blog_title: "Blogs",
        bio_title: "Biogrāfija",
        gallery_title: "Galerija"
    },
    en: {
        welcome: "Welcome to my personal site!",
        projects: "Projects",
        blog: "Blog",
        about: "About Me",
        gallery: "Gallery",
        projects_title: "School Projects",
        blog_title: "Blog",
        bio_title: "Biography",
        gallery_title: "Gallery"
    },
    ru: {
        welcome: "Добро пожаловать на мой сайт!",
        projects: "Проекты",
        blog: "Блог",
        about: "Обо мне",
        gallery: "Галерея",
        projects_title: "Школьные проекты",
        blog_title: "Блог",
        bio_title: "Биография",
        gallery_title: "Галерея"
    }
};

// Mainīt valodu
document.getElementById('language').addEventListener('change', (e) => {
    const lang = e.target.value;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = translations[lang][key] || el.textContent;
    });
});

// Tēmas pārslēgšana
document.getElementById('theme').addEventListener('change', (e) => {
    if (e.target.value === 'dark') {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
});
