document.getElementById('year').textContent = new Date().getFullYear();

const translations = {
    lv: {
        welcome: "Sveiks/-a manā personīgajā lapā!",
        blog: "Blogs",
        about: "Par mani",
        gallery: "Galerija",
        blog_title: "Blogs",
        bio_title: "Biogrāfija",
        gallery_title: "Galerija",
        bio_text: "Es esmu Darja Rižkova, RTK audzeknis programmēšanā. Turpmāk iešu macīties par programmēšanas lingvistu. Uz doto momentu zinu angļu, krievu, latviešu valodu un mācu vācu valodu. Man patīk ceļot un uz doto momentu biju apmeklējusi 22 valsti (mēs ar vēcakiem ceļojām ar mašinu ). Ka arī man ir suns viņu sauc Terra un viņai ir seši gadi. ",
        contacts: "Kontakti",
    },
    en: {
        welcome: "Welcome to my personal site!",
        about: "About Me",
        gallery: "Gallery",
        blog_title: "Blog",
        bio_title: "Biography",
        gallery_title: "Gallery",
        bio_text: "I'm Daria Ryzkhova, studying programming in RTK. In the future, I will study to programming linguist. At the moment, I know only three languages English, Russian and Latvian, but, also, I have been learning German for a half of year. I really enjoy traveling so I have visited 22 countries already(me with parents love traveling by car). Also, I have a dog her name is Terra and she is six years old.",
        contacts: "Contacts",
    },
    ru: {
        welcome: "Добро пожаловать на мой сайт!",
        about: "Обо мне",
        gallery: "Галерея",
        blog_title: "Блог",
        bio_title: "Биография",
        gallery_title: "Галерея",
        bio_text:"Меня зовут Дарья Рыжкова, я учусь в РТК по специальности программиста. В будущем я буду учиться на лингвиста и по профессии лингвист по программированию. На данный момент я знаю английский, русский, латышский и изучаю немецкий. Мне нравится путешествовать и на данный момент я посетила 22 страны(мы с родителями путешествуем на машине). Также, у меня есть собака её зовут Терра и ей шесть лет. ",
        contacts: "Контакты",
    },
    de: {
      welcome: "Willkommen auf meiner Website!",
      about: "Über mich",
      gallery: "Galerie",
      blog_title: "Blog",
      bio_title: "Biographie",
      gallery_title: "Galerie",
      bio_text: "Mein Name ist Daria Ryzhkova, ich studiere am RTC und spezialisiere mich auf Programmierung. In Zukunft werde ich Linguistin studieren und von Beruf Linguistin für Programmierung sein. Im Moment ich spreche Englisch, Russisch, Lettisch und ein bisschen Deutsch.  Ich reise gerne und habe bisher 22 Länder besucht (meine Eltern und ich sind mit dem Auto unterwegs). So ich habe hund sie Name ist Terra und sie ist sechs Jāhre alt",
      contacts: "Kontakte",
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

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const status = document.getElementById('form-status');

    if (name && email && message) {
        status.textContent = "Paldies! Ziņa nosūtīta (simulēti)";
        status.style.color = "green";
        this.reset();
    } else {
        status.textContent = "Lūdzu aizpildi visus laukus.";
        status.style.color = "red";
    }
});
