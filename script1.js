document.getElementById('year').textContent = new Date().getFullYear();

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
        project_text: "Projekts apraksts: Praktiskajas macības laikā man vajadzēja uztaisīt cenu kalkulatoru mājaslapu izstrādes uzņēmumam. Galvenie nosācijumi bija izmantot 3 programmēšanas valodas HTML, CSS, JavaScript, arī vajadzēja izmantot checkbox.Vēl bija nepieciešams parbaudīt ka strada izveidota saite divas online programmas.Lai saite izskatījas labāk, mans uzdevums bija uztaisīt tabulas, kur atrodas visa nepieciešama informācija, lai varētu viegli izpētit, bez grutībam izmantot.",
        bio_text: "Es esmu Darja Rižkova, RTK audzeknis programmēšanā. Turpmāk iešu macīties par programmēšanas lingvistu. Uz doto momentu zinu angļu, krievu, latviešu valodu un mācu vācu valodu. Man patīk ceļot un uz doto momentu biju apmeklējusi 22 valsti (mēs ar vēcakiem ceļojām ar mašinu ). Ka arī man ir suns viņu sauc Terra un viņai ir seši gadi. "
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
        project_text: "Project description:",
        bio_text: "I'm Daria Ryzkhova, studying programming in RTK. In the future, I will study to programming linguist. At the moment, I know only three languages English, Russian and Latvian, but, also, I have been learning German for a half of year. I really enjoy traveling so I have visited 22 countries already(me with parents love traveling by car). Also, I have a dog her name is Terra and she is six years old."

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
        project_text:"Описание проекта: Во время практики в колледже, мне надо было создать калькулятор цен для компании по разработке сайтов. Главные критерии были использовать три языка программирования HTML, CSS, JavaScript, и использовать checkbox.Также было необходимо проверить как работает сайт через две онлайн программы. ПО мимо этого, я создала таблицы, чтобы было легче ориентироваться по сайту и, чтобы все необходимую информацию было легко найти.",
        bio_text:"Меня зовут Дарья Рыжкова, я учусь в РТК по специальности программиста. В будущем я буду учиться на лингвиста и по профессии лингвист по программированию. На данный момент я знаю английский, русский, латышский и изучаю немецкий. Мне нравится путешествовать и на данный момент я посетила 22 страны(мы с родителями путешествуем на машине). Также, у меня есть собака её зовут Терра и ей шесть лет. "
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
      bio_text: "Mein Name ist Daria Ryzhkova, ich studiere am RTC und spezialisiere mich auf Programmierung. In Zukunft werde ich Linguistin studieren und von Beruf Linguistin für Programmierung sein. Im Moment ich spreche Englisch, Russisch, Lettisch und ein bisschen Deutsch.  Ich reise gerne und habe bisher 22 Länder besucht (meine Eltern und ich sind mit dem Auto unterwegs). So ich habe hund sie Name ist Terra und sie ist sechs Jāhre alt"

    }
  };

document.getElementById('language').addEventListener('change', (e) => {
    const lang = e.target.value;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = translations[lang][key] || el.textContent;
    });
});

document.getElementById('theme').addEventListener('change', (e) => {
    if (e.target.value === 'dark') {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
});

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

document.querySelector("section").classList.add("active");
