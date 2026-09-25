const translations = {
  en: {
    navWork:"Work", navApps:"Apps", navAbout:"About", navContact:"Contact", letsTalk:"Let’s talk ↗",
    heroEyebrow:"UI/UX DESIGNER · iOS DEVELOPER", heroTitle:"Designing meaningful<br>mobile experiences.",
    heroLead:"I’m a UI/UX designer with a background in iOS development. I turn complex ideas into clear, thoughtful and engaging digital products.",
    viewWork:"Explore my work ↘", emailMe:"Email me ↗", statApps:"Apps on App Store", statCase:"UI/UX case study", statDev:"iOS development",
    noteDesign:"Design<br>with purpose", noteBuild:"From idea<br>to product", heroLocation:"UI/UX · iOS",
    featuredEyebrow:"SELECTED WORK", featuredTitle:"Designing for real connections.",
    nomoDesc:"A social app concept that helps people discover local events, meet people with shared interests and make plans together.",
    viewCase:"View case study ↗", openFigma:"Open in Figma ↗", conceptProject:"Concept project ↗",
    appsEyebrow:"BUILT & PUBLISHED", appsTitle:"Apps on the App Store.",
    appsIntro:"I’ve independently developed and released three apps. Here are two projects with public App Store pages.",
    crystalDesc:"A match-3 puzzle game with levels, boosters and a fantasy-inspired visual world.",
    wordoutDesc:"A word game for friends and groups, designed for playful rounds and shared moments.",
    appStore:"View on App Store ↗", appsFootnote:"3 apps published · Only two are featured here for now.",
    aboutEyebrow:"A LITTLE ABOUT ME", aboutTitle:"Design meets development.", photoCaption:"Curious by nature.",
    aboutP1:"<strong>UI/UX designer with experience developing mobile apps in Swift.</strong> Before moving into design, I independently built and released apps on the App Store, so I understand the full mobile product cycle — from idea and architecture to implementation and release.",
    aboutP2:"I’ve worked with Swift, UIKit and SpriteKit, including architecture, interfaces, third-party SDKs, localization, optimization and bug fixing. I have experience working independently and in a small team.",
    aboutP3:"Now I’m growing in UI/UX design: creating mobile interfaces, user flows, design systems and interactive prototypes in Figma.",
    aboutP4:"<strong>My strength is the combination of design and technical experience:</strong> I understand not only how an interface should look, but also how it can be implemented in a real product.",
    contactEyebrow:"HAVE A PROJECT IN MIND?", contactTitle:"Let’s make something<br>meaningful.", contactText:"I’m open to junior UI/UX opportunities and interesting collaborations.",
    footerText:"Designed & built with care · 2026", backTop:"Back to top ↑"
  },
  ru: {
    navWork:"Проекты", navApps:"Приложения", navAbout:"Обо мне", navContact:"Контакты", letsTalk:"Связаться ↗",
    heroEyebrow:"UI/UX-ДИЗАЙНЕР · iOS-РАЗРАБОТЧИК", heroTitle:"Создаю продуманные<br>мобильные интерфейсы.",
    heroLead:"Я UI/UX-дизайнер с опытом iOS-разработки. Превращаю сложные идеи в понятные, продуманные и удобные цифровые продукты.",
    viewWork:"Мои проекты ↘", emailMe:"Написать мне ↗", statApps:"Приложения в App Store", statCase:"UI/UX-кейс", statDev:"iOS-разработка",
    noteDesign:"Дизайн<br>со смыслом", noteBuild:"От идеи<br>до продукта", heroLocation:"UI/UX · iOS",
    featuredEyebrow:"ИЗБРАННЫЕ ПРОЕКТЫ", featuredTitle:"Дизайн для настоящих знакомств.",
    nomoDesc:"Концепт социального приложения, которое помогает находить события рядом, знакомиться с людьми по интересам и вместе планировать активности.",
    viewCase:"Смотреть кейс ↗", openFigma:"Открыть в Figma ↗", conceptProject:"Концепт-проект ↗",
    appsEyebrow:"РАЗРАБОТАНО И ОПУБЛИКОВАНО", appsTitle:"Приложения в App Store.",
    appsIntro:"Я самостоятельно разработал и выпустил три приложения. Здесь представлены два проекта с открытыми страницами в App Store.",
    crystalDesc:"Головоломка «три в ряд» с уровнями, усилителями и фэнтезийным визуальным стилем.",
    wordoutDesc:"Словесная игра для друзей и компаний — для весёлых раундов и совместного времяпрепровождения.",
    appStore:"Открыть в App Store ↗", appsFootnote:"3 опубликованных приложения · Пока представлены два.",
    aboutEyebrow:"НЕМНОГО ОБО МНЕ", aboutTitle:"Дизайн на стыке с разработкой.", photoCaption:"Люблю разбираться в новом.",
    aboutP1:"<strong>UI/UX-дизайнер с опытом разработки мобильных приложений на Swift.</strong> До перехода в дизайн самостоятельно разрабатывал и выпускал приложения в App Store, поэтому понимаю полный цикл создания мобильного продукта — от идеи и архитектуры до реализации и публикации.",
    aboutP2:"Работал со Swift, UIKit и SpriteKit: проектировал архитектуру, создавал интерфейсы, интегрировал сторонние SDK, занимался локализацией, оптимизацией и исправлением ошибок. Есть опыт самостоятельной работы и работы в небольшой команде.",
    aboutP3:"Сейчас развиваюсь в UI/UX-дизайне: проектирую мобильные интерфейсы, пользовательские сценарии, дизайн-системы и интерактивные прототипы в Figma.",
    aboutP4:"<strong>Моя сильная сторона — сочетание дизайна и технического опыта:</strong> я понимаю не только то, как интерфейс должен выглядеть, но и как его реализовать в работающем продукте.",
    contactEyebrow:"ЕСТЬ ИДЕЯ ИЛИ ПРЕДЛОЖЕНИЕ?", contactTitle:"Давайте создадим<br>что-то классное.", contactText:"Открыт к предложениям на junior UI/UX-позиции и интересным проектам.",
    footerText:"Сделано с вниманием к деталям · 2026", backTop:"Наверх ↑"
  }
};
let currentLanguage = "en";
const langButton = document.getElementById("languageToggle");
function setLanguage(lang) {
  currentLanguage = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[lang][key]) element.innerHTML = translations[lang][key];
  });
  langButton.textContent = lang === "en" ? "RU" : "EN";
  langButton.setAttribute("aria-label", lang === "en" ? "Switch to Russian" : "Switch to English");
  try { localStorage.setItem("portfolio-language", lang); } catch (_) {}
}
langButton.addEventListener("click", () => setLanguage(currentLanguage === "en" ? "ru" : "en"));
try {
  const savedLanguage = localStorage.getItem("portfolio-language");
  if (savedLanguage === "ru") setLanguage("ru");
} catch (_) {}
