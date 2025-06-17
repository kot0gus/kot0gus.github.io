// Gads kājenē
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
        gallery_title: "Galerija",
        project_text: "Projekts 1 - apraksts",
        bio_text: "Es esmu Darja Rižkova, RTK audzeknis programmēšanā. Turpmāk iešu macīties par programmēšanas lingvistu. Uz doto momentu zinu angļu, krievu, latviešu valodu un mācu vācu valodu."
    },
    en: {
        welcome: "Welcome to my personal site!",
        projects: "Projects",
        about: "About Me",
        gallery: "Gallery",
        projects_title: "School Projects",
        blog_title: "Blog",
        bio_title: "Biography",
        gallery_title: "Gallery",
        project_text: "Project description",
        bio_text: "I'm Daria Ryzkhova, studying programming in RTK. In the future, I will study to programming linguist. At the moment, I know only three languages English, Russian and Latvian, but, also, I have been learning German for a half of year."

    },
    ru: {
        welcome: "Добро пожаловать на мой сайт!",
        projects: "Проекты",
        about: "Обо мне",
        gallery: "Галерея",
        projects_title: "Школьные проекты",
        blog_title: "Блог",
        bio_title: "Биография",
        gallery_title: "Галерея",
        project_text:"Описание проекта",
        bio_text:"Меня зовут Дарья Рыжкова, я учусь в РТК по специальности программиста. В будущем я буду учиться на лингвиста и по профессии лингвист по программированию. На данный момент я знаю английский, русский, латышский и изучаю немецкий."
    },
    de: {
      welcome: "Willkommen auf meiner Website!",
      projects: "Projekte",
      about: "Über mich",
      gallery: "Galerie",
      projects_title: "Schulprojekte",
      blog_title: "Blog",
      bio_title: "Biographie",
      gallery_title: "Galerie",
      project_text: "Beschreibung des Projekts",
      bio_text: "Mein Name ist Daria Ryzhkova, ich studiere am RTC und spezialisiere mich auf Programmierung. In Zukunft werde ich Linguistin studieren und von Beruf Linguistin für Programmierung sein. Im Moment ich spreche Englisch, Russisch, Lettisch und ein bisschen Deutsch."

    }
  };

// Valodas pārslēgšana
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

// Sadaļu pārslēgšana
document.querySelectorAll('nav a[data-section]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('data-section');
        document.querySelectorAll('section').forEach(sec => {
            if (sec.id === target) {
                sec.classList.add('active');
            } else {
                sec.classList.remove('active');
            }
        });
    });
});

// Noklusēti rādīt pirmo sadaļu
document.querySelector("section").classList.add("active");
