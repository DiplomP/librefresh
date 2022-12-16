import CssPage from "./Pages/CSS/CssPage"
import HomePage from "./Pages/Home/Home"
import HtmlPage from "./Pages/HTML/HtmlPage"
import Ide from "./Pages/IDE/Ide"
import JavaScriptPage from "./Pages/JS/JavaScriptPage"
import ReactPage from "./Pages/React/ReactPage"

export const items = [
    {
      value: 'Язык разметки',
      href: '/html',
      icon: 'html'
    },
    {
      value: 'Таблица стилей',
      href: '/css',
      icon: 'css'
    },
    {
      value: 'Язык сценариев',
      href: '/js',
      icon: 'javascript'
    },
    {
      value: 'Фреймворк React',
      href: '/react',
      icon: 'logo_dev'
    },
    {
      value: 'Редакторы кода',
      href: '/editors',
      icon: 'code'
    }
  ]

export const publicRoutes = [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/html',
    Component: HtmlPage
  },
  {
    path: '/react',
    Component: ReactPage
  },
  {
    path: '/js',
    Component: JavaScriptPage
  },
  {
    path: '/css',
    Component: CssPage
  },
  {
    path: '/editors',
    Component: Ide
  },
]

export const home = [
  {
    header: 'HTML',
    description: 'HTML - cтандартизированный язык гипертекстовой разметки документов для просмотра веб-страниц в браузере. Веб-браузеры получают HTML документ от сервера по протоколам HTTP/HTTPS или открывают с локального диска, далее интерпретируют код в интерфейс, который будет отображаться на экране монитора.',
    image: 'https://itea.asia/wp-content/uploads/2020/10/html-css-1.png',
    alt: 'html',
    to: '/html',
    width: 345,
    height: 140
  },
  {
    header: 'CSS',
    description: 'CSS — формальный язык описания внешнего вида документа, написанного с использованием языка разметки. Также может применяться к любым XML-документам, например, к SVG или XUL. При помощи CSS задаётся расположение элементов на странице и его стили. Это помогает странице не выглядеть блекло.',
    image: 'https://repository-images.githubusercontent.com/179574410/54cd7e80-6142-11e9-8f2e-c3774582a097',
    alt: 'css',
    to: '/css',
    width: 345,
    height: 140
  },
  {
    header: 'JavaScript',
    description: 'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.',
    image: 'https://d8285fmxt3duy.cloudfront.net/public/articulos/img/java-script1.jpg',
    alt: 'html',
    to: '/js',
    width: 345,
    height: 140
  },
  {
    header: 'React',
    description: 'React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций. React может использоваться для разработки одностраничных и мобильных приложений. ',
    image: 'https://ru.reactjs.org/logo-og.png',
    alt: 'react',
    to: '/react',
    width: 345,
    height: 140
  },
  {
    header: 'IDE',
    description: 'Интегриованная среда разработки, ИСP, также единая среда разработки, ЕСР — комплекс программных средств, используемый программистами для разработки программного обеспечения. Среда разработки включает в себя: текстовый редактор, Транслятор, средства автоматизации сборки, отладчик.',
    image: 'https://learn.g2.com/hubfs/G2CM_FI128_Learn_Article_Images-%5BIDE%5D_V1a.png',
    alt: 'ide',
    to: '/editors',
    width: 345,
    height: 140
  },
]

export const lessonsTypes = [
  {
    header: 'Лекции',
    description: 'HTML - cтандартизированный язык гипертекстовой разметки документов для просмотра веб-страниц в браузере. Веб-браузеры получают HTML документ от сервера по протоколам HTTP/HTTPS или открывают с локального диска, далее интерпретируют код в интерфейс, который будет отображаться на экране монитора.',
    image: 'https://turkmenportal.com/images/uploads/compositions/c00f41e4796d1017c1bdfb238b2c0627.png',
    alt: 'lections',
    to: '/html/lections',
    width: 1200,
    lessons: true,
    height: 280
  },
  {
    header: 'Видео-уроки',
    description: 'CSS — формальный язык описания внешнего вида документа, написанного с использованием языка разметки. Также может применяться к любым XML-документам, например, к SVG или XUL. При помощи CSS задаётся расположение элементов на странице и его стили. Это помогает странице не выглядеть блекло.',
    image: 'https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_YouTube.jpg',
    alt: 'videos',
    to: '/html/videos',
    width: 1200,
    lessons: true,
    height: 280
  },
  {
    header: 'Презентация',
    description: 'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.',
    image: 'https://la.by/sites/default/files/news/keynote-powerpoint-convert-home.jpg',
    alt: '/html/presentations',
    to: '/js',
    width: 1200,
    lessons: true,
    height: 280
  },
  {
    header: 'Практические задания',
    description: 'React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций. React может использоваться для разработки одностраничных и мобильных приложений. ',
    image: 'https://tabrizhospital.ir/valiasr/fa/wp-content/uploads/2021/10/fhfhvn.jpg',
    alt: 'practice',
    to: '/html/practice',
    width: 1200,
    lessons: true,
    height: 280
  },
  {
    header: 'Тестовые задания',
    image: 'https://res.infoq.com/articles/continuous-testing-best-practices/en/headerimage/unlocking-continuous-testing-logo-big-1564402385131.jpg',
    alt: 'tests',
    to: '/html/tests',
    width: 1200,
    lessons: true,
    height: 280
  },
]