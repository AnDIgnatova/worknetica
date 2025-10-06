English version
HR Assistant — Landing / Early Access (React)

Short description
HR Assistant is a responsive React landing site for an HR agency. The UI is in Russian and the app showcases job categories, a guided search flow, FAQ, an early-access signup form and a documents page. Built with Create React App and React Router.

Key features
Landing (home) page composed from modular components:
Hero / CTA (Early access)
Professions / Job cards (sample job types with relevance)
SearchFlow (step-by-step description of candidate search flows)
FAQ section
Early access sign-up form with consent checkbox
Footer / Header
Documents page with downloadable/visit-able document cards
Client-side only — no backend/integration detected (forms are UI-only)
Responsive layout with images and inline styles
Tech stack
React (package.json: react ^19.x)
React Router (react-router-dom)
Create React App (react-scripts)
No backend dependencies included (static client app)
Testing libraries present in dependencies (testing-library)

Project structure (important files)
/src
  /components
    Header.js
    HeroSection.js
    ProfessionsSection.js
    SearchFlowSection.js
    FAQSection.js
    EarlyAccessForm.js
    Footer.js
    MainLayout.js
  /pages
    documents.js
  App.js
  index.js
/public or assets inside src: many PNG/SVG images used by components
package.json
README.md (default Create React App)

Routes
/ — MainLayout (landing)
/documents — Documents page

How to run (local)
# clone
git clone <repo-url>
cd <repo-folder>

# install
npm install

# start dev server
npm start

# build for production
npm run build


HR Assistant — Лендинг / Форма раннего доступа (React)

Краткое описание
HR Assistant — адаптивный лендинг для HR-агентства, реализованный на React. Интерфейс на русском. Содержит карточки профессий, блок с описанием этапов поиска кандидатов, FAQ, форму раннего доступа и страницу с документами.

Основные возможности
Лэндинг, собранный из компонентов:
Hero / CTA (получить ранний доступ)
Блок профессий / карточки вакансий
Поэтапный Search Flow (показ сценариев поиска)
Раздел FAQ
Форма «Ранний доступ» с согласием на обработку данных
Шапка / подвал
Страница документов (/documents)
Интерактивность реализована на клиенте — нет подключённого бэкенда
Адаптивная вёрстка, много изображений и inline-стилей
Технологии
React (в package.json указан react ^19)
React Router (react-router-dom)
Create React App (react-scripts)
Тестовые библиотеки включены в зависимости (testing-library), но тесты, возможно, не реализованы

Структура проекта (основное)
/src
  /components
    Header.js
    HeroSection.js
    ProfessionsSection.js
    SearchFlowSection.js
    FAQSection.js
    EarlyAccessForm.js
    Footer.js
    MainLayout.js
  /pages
    documents.js
  App.js
  index.js
/assets (PNG/SVG изображения)
package.json
README.md (стандартный от CRA)

Маршруты

/ — Главная (MainLayout)
/documents — Страница документов


