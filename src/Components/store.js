import CssPage from "./Pages/CSS/CssPage"
import PresentationCSS from "./Pages/CSS/presentation/PresentationCSS"
import QuizCSS from "./Pages/CSS/quiz/QuizCSS"
import VideosCSS from "./Pages/CSS/videos/VideosCSS"
import HomePage from "./Pages/Home/Home"
import HtmlPage from "./Pages/HTML/HtmlPage"
import Lections from "./Pages/HTML/lections/Lections"
import PresentationHTML from "./Pages/HTML/presentation/Presentation"
import QuizHTML from "./Pages/HTML/quiz/QuizHTML"
import VideosHTML from "./Pages/HTML/videos/VideosHTML"
import Ide from "./Pages/IDE/Ide"
import JavaScriptPage from "./Pages/JS/JavaScriptPage"
import PresentationJS from "./Pages/JS/presentation/PresentationJS"
import QuizJS from "./Pages/JS/quiz/QuizJS"
import VideosJS from "./Pages/JS/videos/VideosJS"
import PresentationReact from "./Pages/React/presentation/PresentationReact"
import QuizReact from "./Pages/React/quiz/QuizReact"
import ReactPage from "./Pages/React/ReactPage"
import VideosReact from "./Pages/React/videos/VideosReact"
import htmlFirstLection from './Shared/UI/Files/1.pdf'
import htmlSecondLection from './Shared/UI/Files/2.pdf'
import htmlThirdLection from './Shared/UI/Files/3.pdf'
import htmlFourthLection from './Shared/UI/Files/4.pdf'
import htmlFifthLection from './Shared/UI/Files/5.pdf'
import htmlSixthLection from './Shared/UI/Files/6.pdf'
import htmlSeventhLection from './Shared/UI/Files/7.pdf'
import htmlEighthLection from './Shared/UI/Files/8.pdf'
import cssFirstLection from './Shared/UI/Files/1css.pdf'
import cssSecondLection from './Shared/UI/Files/2css.pdf'
import cssThirdLection from './Shared/UI/Files/3css.pdf'
import cssFourthLection from './Shared/UI/Files/4css.pdf'
import cssFifthLection from './Shared/UI/Files/5css.pdf'
import cssSixthLection from './Shared/UI/Files/6css.pdf'
import cssSeventhLection from './Shared/UI/Files/7css.pdf'
import LectionsCSS from "./Pages/CSS/lections/Lections"
import jsFirstLection from './Shared/UI/Files/1js.pdf'
import jsSecondLection from './Shared/UI/Files/2js.pdf'
import jsThirdLection from './Shared/UI/Files/3js.pdf'
import jsFourthLection from './Shared/UI/Files/4js.pdf'
import jsFifthLection from './Shared/UI/Files/5js.pdf'
import LectionsJS from "./Pages/JS/lections/LectionsJS"
import reactFirstLection from './Shared/UI/Files/1react.pdf'
import reactSecondLection from './Shared/UI/Files/2react.pdf'
import reactThirdLection from './Shared/UI/Files/3react.pdf'
import reactFourthLection from './Shared/UI/Files/4react.pdf'
import reactFifthLection from './Shared/UI/Files/5react.pdf'
import reactSixthLection from './Shared/UI/Files/6react.pdf'
import reactSeventhLection from './Shared/UI/Files/7react.pdf'
import reactEighthLection from './Shared/UI/Files/8react.pdf'
import LectionsReact from "./Pages/React/lections/LectionsReact"

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
    },
    
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
  {
    path: '/html/videos',
    Component: VideosHTML
  },
  {
    path: '/css/videos',
    Component: VideosCSS
  },
  {
    path: '/js/videos',
    Component: VideosJS
  },
  {
    path: '/react/videos',
    Component: VideosReact
  },
  {
    path: '/html/presentations',
    Component: PresentationHTML
  },
  {
    path: '/css/presentations',
    Component: PresentationCSS
  },
  {
    path: '/js/presentations',
    Component: PresentationJS
  },
  {
    path: '/react/presentations',
    Component: PresentationReact
  },
  {
    path: '/html/tests',
    Component: QuizHTML
  },
  {
    path: '/js/tests',
    Component: QuizJS
  },
  {
    path: '/css/tests',
    Component: QuizCSS
  },
  {
    path: '/react/tests',
    Component: QuizReact
  },
  {
    path: '/html/lections',
    Component: Lections
  },
  {
    path: '/css/lections',
    Component: LectionsCSS
  },
  {
    path: '/js/lections',
    Component: LectionsJS
  },
  {
    path: '/react/lections',
    Component: LectionsReact
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









// lessons -----------------------------------------------------------------------------------------------------------










export const lessonsTypes = [
  {
    header: 'Лекции',
    image: 'https://turkmenportal.com/images/uploads/compositions/c00f41e4796d1017c1bdfb238b2c0627.png',
    alt: 'lections',
    to: '/html/lections',
    width: 1200,
    lessons: true,
    height: 280
  },
  {
    header: 'Видео-уроки',
    image: 'https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_YouTube.jpg',
    alt: 'videos',
    to: '/html/videos',
    width: 1200,
    lessons: true,
    height: 280
  },
  {
    header: 'Презентация',
    image: 'https://la.by/sites/default/files/news/keynote-powerpoint-convert-home.jpg',
    alt: 'presentations',
    to: '/html/presentations',
    width: 1200,
    lessons: true,
    height: 280
  },
  {
    header: 'Практические задания',
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

export const lessonsTypesCSS = [
  {
    header: 'Лекции',
    image: 'https://turkmenportal.com/images/uploads/compositions/c00f41e4796d1017c1bdfb238b2c0627.png',
    alt: 'lections',
    to: '/css/lections',
    width: 1200,
    lessons: true,
    height: 280
  },
  {
    header: 'Видео-уроки',
    image: 'https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_YouTube.jpg',
    alt: 'videos',
    to: '/css/videos',
    width: 1200,
    lessons: true,
    height: 280
  },
  {
    header: 'Презентация',
    image: 'https://la.by/sites/default/files/news/keynote-powerpoint-convert-home.jpg',
    alt: '/html/presentations',
    to: '/css/presentations',
    width: 1200,
    lessons: true,
    height: 280
  },
  {
    header: 'Практические задания',
    image: 'https://tabrizhospital.ir/valiasr/fa/wp-content/uploads/2021/10/fhfhvn.jpg',
    alt: 'practice',
    to: '/css/practice',
    width: 1200,
    lessons: true,
    height: 280
  },
  {
    header: 'Тестовые задания',
    image: 'https://res.infoq.com/articles/continuous-testing-best-practices/en/headerimage/unlocking-continuous-testing-logo-big-1564402385131.jpg',
    alt: 'tests',
    to: '/css/tests',
    width: 1200,
    lessons: true,
    height: 280
  },
]

export const lessonsTypesJS = [
  {
    header: 'Лекции',
    image: 'https://turkmenportal.com/images/uploads/compositions/c00f41e4796d1017c1bdfb238b2c0627.png',
    alt: 'lections',
    to: '/js/lections',
    width: 1200,
    lessons: true,
    height: 280
  },
  {
    header: 'Видео-уроки',
    image: 'https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_YouTube.jpg',
    alt: 'videos',
    to: '/js/videos',
    width: 1200,
    lessons: true,
    height: 280
  },
  {
    header: 'Презентация',
    image: 'https://la.by/sites/default/files/news/keynote-powerpoint-convert-home.jpg',
    alt: '/html/presentations',
    to: '/js/presentations',
    width: 1200,
    lessons: true,
    height: 280
  },
  {
    header: 'Практические задания',
    image: 'https://tabrizhospital.ir/valiasr/fa/wp-content/uploads/2021/10/fhfhvn.jpg',
    alt: 'practice',
    to: '/js/practice',
    width: 1200,
    lessons: true,
    height: 280
  },
  {
    header: 'Тестовые задания',
    image: 'https://res.infoq.com/articles/continuous-testing-best-practices/en/headerimage/unlocking-continuous-testing-logo-big-1564402385131.jpg',
    alt: 'tests',
    to: '/js/tests',
    width: 1200,
    lessons: true,
    height: 280
  },
]

export const lessonsTypesReact = [
  {
    header: 'Лекции',
    image: 'https://turkmenportal.com/images/uploads/compositions/c00f41e4796d1017c1bdfb238b2c0627.png',
    alt: 'lections',
    to: '/react/lections',
    width: 1200,
    lessons: true,
    height: 280
  },
  {
    header: 'Видео-уроки',
    image: 'https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_YouTube.jpg',
    alt: 'videos',
    to: '/react/videos',
    width: 1200,
    lessons: true,
    height: 280
  },
  {
    header: 'Презентация',
    image: 'https://la.by/sites/default/files/news/keynote-powerpoint-convert-home.jpg',
    alt: '/html/presentations',
    to: '/react/presentations',
    width: 1200,
    lessons: true,
    height: 280
  },
  {
    header: 'Практические задания',
    image: 'https://tabrizhospital.ir/valiasr/fa/wp-content/uploads/2021/10/fhfhvn.jpg',
    alt: 'practice',
    to: '/react/practice',
    width: 1200,
    lessons: true,
    height: 280
  },
  {
    header: 'Тестовые задания',
    image: 'https://res.infoq.com/articles/continuous-testing-best-practices/en/headerimage/unlocking-continuous-testing-logo-big-1564402385131.jpg',
    alt: 'tests',
    to: '/react/tests',
    width: 1200,
    lessons: true,
    height: 280
  },
]



// videos ----------------------------------------------------------------------------------------------------------------------------------------------

export const videosHTML = [
  {
    id: 1,
    value: 'Урок №1',
    link: 'https://www.youtube.com/watch?v=8mK5aY5YOCc&list=PLY4rE9dstrJyeZlPWoKJr1xKVVnG4w-Hc' 
  },
  {
    id: 2,
    value: 'Урок №2',
    link: 'https://www.youtube.com/watch?v=oBKaXB9CMMo'
  },
  {
    id: 3,
    value: 'Урок №3',
    link: 'https://www.youtube.com/watch?v=fgeANjiWwKg'
  },
  {
    id: 4,
    value: 'Урок №4',
    link: 'https://www.youtube.com/watch?v=fgeANjiWwKg'
  },
  {
    id: 5,
    value: 'Урок №5',
    link: 'https://www.youtube.com/watch?v=nF0X9PRVOsA'
    },
    {
    id: 6,
    value: 'Урок №6',
    link: 'https://www.youtube.com/watch?v=nxtV-PwYkjU'
    },
    {
    id: 7,
    value: 'Урок №7',
    link: 'https://www.youtube.com/watch?v=jZR8m9djWXs'
    },
    {
    id: 8,
    value: 'Урок №8',
    link: 'https://www.youtube.com/watch?v=8mK5aY5YOCc&list=PLY4rE9dstrJyeZlPWoKJr1xKVVnG4w-Hchttps://www.youtube.com/watch?v=abWbB4RYFYM'
    },
    {
    id: 9,
    value: 'Урок №9',
    link: 'https://www.youtube.com/watch?v=x55mwoVJ_IE'
    },
    {
    id: 10,
    value: 'Урок №10',
    link: 'https://www.youtube.com/watch?v=LOphfrzuxtc'
    },
  ];

  export const videosCSS = [
    {
      id: 1,
      value: 'Урок №1',
      link: 'https://youtu.be/Fw679JPOo0w' 
    },
    {
      id: 2,
      value: 'Урок №2',
      link: 'https://youtu.be/THkRKsJL4Ac'
    },
    {
      id: 3,
      value: 'Урок №3',
      link: 'https://youtu.be/Dy3xNaSvacE'
    },
    {
      id: 4,
      value: 'Урок №4',
      link: 'https://youtu.be/VlWE8eCz5dE'
    },
    {
      id: 5,
      value: 'Урок №5',
      link: 'https://youtu.be/ziJwJdJXNtU'
      },
      {
      id: 6,
      value: 'Урок №6',
      link: 'https://youtu.be/XhtbLygCpcs'
      },
      {
      id: 7,
      value: 'Урок №7',
      link: 'https://youtu.be/ois3wNS7ZdQ'
      },
      {
      id: 8,
      value: 'Урок №8',
      link: 'https://youtu.be/4dOZkj4VwSM'
      },
      {
      id: 9,
      value: 'Урок №9',
      link: 'https://youtu.be/J38NyKcuyXo'
      },
      {
      id: 10,
      value: 'Урок №10',
      link: 'https://youtu.be/mFO1mEZn4dw'
      },
      {
      id: 11,
      value: 'Урок №11',
      link: 'https://youtu.be/1OU7iL8mFE0'
      },
      {
      id: 12,
      value: 'Урок №12',
      link: 'https://youtu.be/jfJ4Dn37Q6k'
      },
      {
      id: 13,
      value: 'Урок №13',
      link: 'https://youtu.be/U-dtG9yNxuo'
      },
      {
      id: 14,
      value: 'Урок №14',
      link: 'https://youtu.be/C7u291bannE'
      },
      {
      id: 15,
      value: 'Урок №15',
      link: 'https://youtu.be/7SKEvxh9e2k'
      },
    ];

    export const videosJS = [
      {
        id: 1,
        value: 'Урок №1',
        link: 'https://youtu.be/aQkgUUmUJy4' 
      },
      {
        id: 2,
        value: 'Урок №2',
        link: 'https://youtu.be/UGapN-hrekw'
      },
      {
        id: 3,
        value: 'Урок №3',
        link: 'https://youtu.be/pahO5XjnfLA'
      },
      {
        id: 4,
        value: 'Урок №4',
        link: 'https://youtu.be/vIZs5tH-HGQ'
      },
      {
        id: 5,
        value: 'Урок №5',
        link: 'https://youtu.be/1idOY3C1gYU'
        },
        {
        id: 6,
        value: 'Урок №6',
        link: 'https://youtu.be/cS6nTVNzOPw'
        },
        {
        id: 7,
        value: 'Урок №7',
        link: 'https://youtu.be/uLY9GXGMXaA'
        },
        {
        id: 8,
        value: 'Урок №8',
        link: 'https://youtu.be/SHiUyM_fFME'
        },
        {
        id: 9,
        value: 'Урок №9',
        link: 'https://youtu.be/np08WdS9OXg'
        },
        {
        id: 10,
        value: 'Урок №10',
        link: 'https://youtu.be/mSbyhHfxs04'
        },
        {
        id: 11,
        value: 'Урок №11',
        link: 'https://youtu.be/7wtbNNiOh30'
        },
        {
        id: 12,
        value: 'Урок №12',
        link: 'https://youtu.be/nEabP9CYCAQ'
        },
        {
        id: 13,
        value: 'Урок №13',
        link: 'https://youtu.be/mbcP3Oc0PjU'
        },
        {
        id: 14,
        value: 'Урок №14',
        link: 'https://youtu.be/eKCD9djJQKc'
        },
        {
        id: 15,
        value: 'Урок №15',
        link: 'https://youtu.be/SGeQ-U0G7dE'
        },
        {
        id: 16,
        value: 'Урок №16',
        link: 'https://youtu.be/wWYokY0Pt2M'
        },
        {
        id: 17,
        value: 'Урок №17',
        link: 'https://youtu.be/3-bZ7gLVSzo'
        },
      ];

export const videosReact = [
    {
      id: 1,
      value: 'Урок №1',
      link: 'https://youtu.be/ftrn50AJa2w' 
    },
    {
      id: 2,
      value: 'Урок №2',
      link: 'https://youtu.be/d8xnYqiP3ZM'
    },
    {
      id: 3,
      value: 'Урок №3',
      link: 'https://youtu.be/yUL4fW4mpS8'
    },
    {
      id: 4,
      value: 'Урок №4',
      link: 'https://youtu.be/vwsG0VhDfcM'
    },
    {
      id: 5,
      value: 'Урок №5',
      link: 'https://youtu.be/QuI_iLJ7gNs'
      },
      {
      id: 6,
      value: 'Урок №6',
      link: 'https://youtu.be/9sMBba8BcGA'
      },
      {
      id: 7,
      value: 'Урок №7',
      link: 'https://youtu.be/sbCgQJQNZKs'
      },
      {
      id: 8,
      value: 'Урок №8',
      link: 'https://youtu.be/F0f3iov79q4'
      },
      {
      id: 9,
      value: 'Урок №9',
      link: 'https://youtu.be/A152d1_CpRE'
      },
      {
      id: 10,
      value: 'Урок №10',
      link: 'https://youtu.be/dsOPKYHTarM'
      },
      {
      id: 11,
      value: 'Урок №11',
      link: 'https://youtu.be/MVNrPpRBUdg'
      },
      {
      id: 12,
      value: 'Урок №12',
      link: 'https://youtu.be/Lvd3wQ4hyvI'
      },
      {
      id: 13,
      value: 'Урок №13',
      link: 'https://youtu.be/G6dsNP39znI'
      },
      {
      id: 14,
      value: 'Урок №14',
      link: 'https://youtu.be/nsTyd-Z_Tlw'
      },
    ];

// tests -------------------------------------------------------------------------------------------------------------------------------------------------

export const questionsHTML = [
  {
    questionText: 'SessionStorage – это клиентское решение в HTML 5, которое позволяет:',
    answerOptions: [
      { answerText: 'Извлекать и использовать данные только текущей сессии', isCorrect: true },
      { answerText: 'Извлекать и использовать данные предыдущих сессий при условии того, что не были очищены cash и cookie', isCorrect: false },
      { answerText: 'Создавать базу данных решений пользователей в памяти браузера', isCorrect: false },
    ],
  },
  {
    questionText: 'Напишите код HTML, который бы создавал кнопку отправки заполненной формы. Имя кнопки – ОК.',
    answerOptions: [
      { answerText: '<input type="submit" value="ОК"/>', isCorrect: true },
      { answerText: '<input type="ОК" value="Submit"/>', isCorrect: false },
      { answerText: '<p> input type="submit" value="OK"< /p>', isCorrect: false },
    ],
  },
  {
    questionText: 'Перечислите основные модули контента, существующие в HTML 5.',
    answerOptions: [
      { answerText: 'Metadata, Embedded, Interactive, Heading, Phrasing, Flow, Sectioning', isCorrect: true },
      { answerText: 'Image, Media, Metadata, Link, Heading, Color, Input Value', isCorrect: false },
      { answerText: 'Flow, Static, Link, Header, Body, Footer, Processing, Chase', isCorrect: false },
    ],
  },
  {
    questionText: 'Какой тэг при создании страницы добавляет имя страницы, которое будет отображаться в строке заголовка в браузере пользователя?',
    answerOptions: [
      { answerText: '<title> … </title>', isCorrect: true },
      { answerText: '<body> … </body>', isCorrect: false },
      { answerText: '<header> … </header>', isCorrect: false },
    ],
  },
  {
    questionText: 'Какие тэги делают шрифт текста жирным?',
    answerOptions: [
      { answerText: '<ins> и <del>', isCorrect: false },
      { answerText: '<b> и <strong>', isCorrect: true },
      { answerText: '<li> и <ul>', isCorrect: false },
    ],
  },
  {
    questionText: 'Что содержит в себе атрибут href?',
    answerOptions: [
      { answerText: 'Имя страницы, на которую произойдет перенаправление', isCorrect: false },
      { answerText: 'URL страницы, на которую произойдет перенаправление', isCorrect: true },
      { answerText: 'Указание на то, где будет открываться новая страница: в том же или новом окне', isCorrect: false },
    ],
  },
  {
    questionText: 'Укажите, какой элемент HTML 5 отвечает за воспроизведение видео:',
    answerOptions: [
      { answerText: '<movie>', isCorrect: false },
      { answerText: '<video>', isCorrect: true },
      { answerText: '<media>', isCorrect: false },
    ],
  },
  {
    questionText: 'О чем говорит тэг <p align="right"> … </p>?',
    answerOptions: [
      { answerText: 'Текст, заключенный в тэг, будет расположен по левому краю страницы', isCorrect: false },
      { answerText: 'Текст, заключенный в тэг, будет расположен по центру страницы', isCorrect: true },
      { answerText: 'Текст, заключенный в тэг, будет расположен по правому краю страницы', isCorrect: false },
    ],
  },
  {
    questionText: 'Какой тэг содержит навигацию?',
    answerOptions: [
      { answerText: '<metanav>', isCorrect: false },
      { answerText: '<nav>', isCorrect: true },
      { answerText: '<geo>', isCorrect: false },
    ],
  },
  {
    questionText: 'Использование тэга … позволяет добавлять одну строку текста без начала нового абзаца.',
    answerOptions: [
      { answerText: '<line/>', isCorrect: false },
      { answerText: '<br/>', isCorrect: true },
      { answerText: '<td/>', isCorrect: false },
    ],
  },
  {
    questionText: 'Неотображаемые комментарии в HTML задаются следующим образом:',
    answerOptions: [
      { answerText: '<!p> Your comment </!p>', isCorrect: false },
      { answerText: '<! - - Your comment - -!>', isCorrect: true },
      { answerText: '<! - Your comment -!>', isCorrect: false },
    ],
  },
  {
    questionText: 'Элемент <canvas> используется для:',
    answerOptions: [
      { answerText: 'Управления данными в базе данных', isCorrect: false },
      { answerText: 'Прорисовки графики', isCorrect: true },
      { answerText: 'Прикрепления таблиц Excel', isCorrect: false },
    ],
  },
  {
    questionText: 'Какие единицы измерения могут использоваться для атрибута ширины?',
    answerOptions: [
      { answerText: 'Пиксели и %', isCorrect: true },
      { answerText: 'Пиксели и миллиметры', isCorrect: false },
      { answerText: 'Миллиметры и сантиметры', isCorrect: false },
    ],
  },
  {
    questionText: 'Какое значение следует задать атрибуту type, чтобы оно превращало входной тэг в форму отправки?',
    answerOptions: [
      { answerText: 'Submit', isCorrect: true },
      { answerText: 'Checkbox', isCorrect: false },
      { answerText: 'Radiobutton', isCorrect: false },
    ],
  },
  {
    questionText: 'Какие из перечисленных тэгов относятся к созданию таблицы?',
    answerOptions: [
      { answerText: '<table> <tr> <td>', isCorrect: true },
      { answerText: '<header> <body> <footer>', isCorrect: false },
      { answerText: '<ul> <li> <tr> <td>', isCorrect: false },
    ],
  },
  {
    questionText: 'О чем говорит следующая запись: <form action="url" method="POST">?',
    answerOptions: [
      { answerText: 'Создается форма, при заполнении которой вводимые данные не будут отображаться', isCorrect: true },
      { answerText: 'Создается форма, при заполнении которой вводимые данные будут отображаться', isCorrect: false },
      { answerText: 'Создается форма, которая будет служить для внесения информации, представленной в виде ссылки (URL)', isCorrect: false },
    ],
  },
  {
    questionText: 'Для задания размеров тэгу <frameset> требуются следующие атрибуты:',
    answerOptions: [
      { answerText: 'Строки и столбцы', isCorrect: true },
      { answerText: 'Высока и ширина', isCorrect: false },
      { answerText: 'Площадь и толщина границ', isCorrect: false },
    ],
  },
  {
    questionText: 'Выберите верное утверждение.',
    answerOptions: [
      { answerText: 'В HTML цвета задаются комбинацией значений шестнадцатеричной системы исчисления: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, A, B, C, D, E, F', isCorrect: true },
      { answerText: 'В HTML цвета задаются комбинацией значений восьмеричной системы исчисления: 0, 1, 2, 3, 4, 5, 6, 7', isCorrect: false },
      { answerText: 'В HTML цвета задаются комбинацией значений двоичной системы исчисления: 0 или 1', isCorrect: false },
    ],
  },
  {
    questionText: 'Какие тэги используются для определения заголовков?',
    answerOptions: [
      { answerText: 'h1-h6', isCorrect: true },
      { answerText: 'Heading', isCorrect: false },
      { answerText: 'Header', isCorrect: false },
    ],
  },
  {
    questionText: 'Укажите тэг, который соответствует элементу списка:',
    answerOptions: [
      { answerText: '<li>', isCorrect: true },
      { answerText: '<ul>', isCorrect: false },
      { answerText: '<ol>', isCorrect: false },
    ],
  },
  {
    questionText: 'Заполните поля, чтобы отобразить картинку “flower.jpg” с высотой 300 пикселей и шириной 750 пикселей:',
    answerOptions: [
      { answerText: '<img src=”flower.jpg” height=”300 px” alt=”” width=”750 px”/>', isCorrect: true },
      { answerText: '<src img=”flower.jpg” height=”300%” width=”750%”/>', isCorrect: false },
      { answerText: '<img ref=”flower” format=.jpg high=300 px width=750 px />', isCorrect: false },
    ],
  },
];

export const questionsCSS = [
  {
    questionText: 'С помощью какого элемента можно сослаться на внешнюю таблицу стилей?',
    answerOptions: [
      { answerText: '<LINK>', isCorrect: true },
      { answerText: '<TABLE>', isCorrect: false },
      { answerText: '<UL>', isCorrect: false },
      { answerText: '<LI>', isCorrect: false },
    ],
  },
  {
    questionText: 'С помощью какого элемента можно поместить в документ таблицу стилей?',
    answerOptions: [
      { answerText: '<TABLE>', isCorrect: true },
      { answerText: '<STYLE>', isCorrect: false },
      { answerText: '<A>', isCorrect: false },
      { answerText: '<LINK>', isCorrect: false },
    ],
  },
  {
    questionText: 'Каким свойствам шрифта присваивает новые значения данная декларация:H1 { font: bold 12pt/14pt Helvetica }',
    answerOptions: [
      { answerText: 'font-family', isCorrect: true },
      { answerText: 'font-style', isCorrect: false },
      { answerText: 'padding', isCorrect: false },
      { answerText: 'margin', isCorrect: false },
    ],
  },
  {
    questionText: 'Что является селектором в примере P { font-size:10pt }?',
    answerOptions: [
      { answerText: '{ font-size:10pt }', isCorrect: true },
      { answerText: 'font-size', isCorrect: false },
      { answerText: 'P', isCorrect: false },
      { answerText: '10pt', isCorrect: false },
    ],
  },
  {
    questionText: 'Что является селектором в примере H2 { font-weight: bold }?',
    answerOptions: [
      { answerText: 'H2', isCorrect: true },
      { answerText: '{ font-weight: bold }', isCorrect: false },
      { answerText: 'H2 { font-weight: bold }', isCorrect: false },
      { answerText: 'bold', isCorrect: false },
    ],
  },
  {
    questionText: 'Что является объявлением в правиле "H1 { color: brown }"?',
    answerOptions: [
      { answerText: 'color: brown', isCorrect: true },
      { answerText: 'H1', isCorrect: false },
      { answerText: 'color', isCorrect: false },
    ],
  },
  {
    questionText: 'Укажите пример корректного подключения внешней таблицы стилей:',
    answerOptions: [
      { answerText: '<BODY> <LINK rel="stylesheet" href="table.css" type="text/css"> </BODY>', isCorrect: false },
      { answerText: '<STYLE> <LINK rel="stylesheet" href="table.css" type="text/css"> </STYLE>', isCorrect: false },
      { answerText: '<HEAD> <LINK rel="stylesheet" href="table.css" type="text/css"> </HEAD>', isCorrect: true },
    ],
  },
  {
    questionText: 'Укажите пример корректного подключения внешней таблицы стилей:',
    answerOptions: [
      { answerText: '<LINK rel="stylesheet" type="text/css">', isCorrect: false },
      { answerText: '<LINK rel="stylesheet" href="one.css" type="text/css">', isCorrect: true },
      { answerText: '<LINK href="first.css" type="text/css">', isCorrect: false },
    ],
  },
  {
    questionText: 'Неверными примерами использования ключевых слов являются:',
    answerOptions: [
      { answerText: 'font-style: italic', isCorrect: false },
      { answerText: 'background: yellow', isCorrect: false },
      { answerText: 'color: "brown"', isCorrect: true },
    ],
  },
  {
    questionText: 'Блок начинается символом:',
    answerOptions: [
      { answerText: '"', isCorrect: false },
      { answerText: '( )', isCorrect: false },
      { answerText: '{', isCorrect: true },
    ],
  },
  {
    questionText: 'Следующие правила:H1 { font-weight: bold }H1 { font-size: 12pt }H1 { line-height: 14pt } эквивалентны:',
    answerOptions: [
      { answerText: 'H2 { font-weight: bold; font-size: 12pt; line-height: 14pt; }', isCorrect: false },
      { answerText: 'H1, H2, H3 { font-weight: bold; font-size: 12pt; line-height: 14pt; }', isCorrect: false },
      { answerText: 'H1 { font-weight: bold; font-size: 12pt; line-height: 14pt; }', isCorrect: true },
    ],
  },
  {
    questionText: 'Комментарии в CSS находятся между символов:',
    answerOptions: [
      { answerText: '"*...*"', isCorrect: false },
      { answerText: '"/.../"', isCorrect: false },
      { answerText: '"/*...*/"', isCorrect: true },
    ],
  },
  {
    questionText: 'Если в таблице стилей указано: H1 { color: red; rotation: 70minutes },    то браузер будет рассматривать это как:',
    answerOptions: [
      { answerText: 'H1 { rotation: 70minutes}', isCorrect: false },
      { answerText: 'H1 { color: red; rotation}', isCorrect: false },
      { answerText: 'H1 { color: red }', isCorrect: true },
    ],
  },
  {
    questionText: 'Следующие правила: IMG { float: left }IMG { float: left here }  IMG { background: "red" } IMG { border-width: 3 }будут рассмотрены разборщиком CSS так, как если бы таблица была такой:',
    answerOptions: [
      { answerText: 'IMG { } IMG { float: left here } IMG { background: "red" } IMG { border-width: 3 }', isCorrect: false },
      { answerText: 'IMG { float: left } IMG { } IMG { } IMG { }', isCorrect: true },
      { answerText: 'IMG { float: left } IMG { } IMG { } IMG { border-width: 3 }', isCorrect: false },
    ],
  },
  {
    questionText: 'Процентное значение корректно описано:',
    answerOptions: [
      { answerText: 'P { font-size: 10pt }', isCorrect: false },
      { answerText: 'P { line-height: 120% }', isCorrect: true },
      { answerText: 'P { line-height: 120px }', isCorrect: false },
    ],
  },
  {
    questionText: 'Какой псевдоэлемент можно использовать для "начальных заглавных" и "зависающих заглавных", которые являются распространенными типографскими эффектами?',
    answerOptions: [
      { answerText: ':first-child', isCorrect: false },
      { answerText: ':first-letter', isCorrect: true },
      { answerText: ':first-line', isCorrect: false },
    ],
  },
  {
    questionText: 'В каком примере первая форматированная строка будет синего цвета?',
    answerOptions: [
      { answerText: 'P:first-letter { color: blue; font-size: 200% }', isCorrect: false },
      { answerText: 'P:first-line { color: blue }', isCorrect: true },
      { answerText: 'P { color: blue; font-size: 12pt }', isCorrect: false },
    ],
  },
  {
    questionText: 'В каком примере будет создана начальная заглавная зависающая буква, захватывающая две строки:',
    answerOptions: [
      { answerText: '<STYLE type="text/css"> P { font-size: 12pt; line-height: 12pt } SPAN { text-transform: uppercase } </STYLE>', isCorrect: false },
      { answerText: '<STYLE type="text/css"> P:first-letter { font-size: 200%; font-style: italic; font-weight: bold; float: left } SPAN { text-transform: uppercase } </STYLE>', isCorrect: false },
      { answerText: '<STYLE type="text/css"> P { font-size: 12pt; line-height: 12pt } P:first-letter { font-size: 200%; font-style: italic; font-weight: bold; float: left } SPAN { text-transform: uppercase } </STYLE>', isCorrect: true },
    ],
  },
  {
    questionText: `В каком примере первые буквы каждого элемента P будут зелеными и размером '24pt'? Остаток первой форматированной строки будет синий, а остаток параграфа - красный.`,
    answerOptions: [
      { answerText: 'P { color: red; font-size: 12pt } P:first-letter { color: green; font-size: 200% }', isCorrect: false },
      { answerText: 'P { color: green; font-size: 12pt } P:first-letter { color: red; font-size: 200% } P:first-line { color: blue }', isCorrect: false },
      { answerText: 'P { color: red; font-size: 12pt } P:first-letter { color: green; font-size: 200% } P:first-line { color: blue }', isCorrect: true },
    ],
  },
  {
    questionText: 'Какое значение указывает, что для данного элемента свойство принимает то же самое вычисленное значение, что и свойство элемента-предка?',
    answerOptions: [
      { answerText: '@import', isCorrect: false },
      { answerText: 'interhit', isCorrect: false },
      { answerText: '!important', isCorrect: true },
    ],
  },
]
  export const questionsJS = [
    {
      questionText: 'Какое ключевое слово позволяет создавать объекты общего вида:',
      answerOptions: [
        { answerText: 'object', isCorrect: true },
        { answerText: 'prototype', isCorrect: false },
        { answerText: 'this', isCorrect: false },
      ],
    },
    {
      questionText: 'Какая функция позволяет очищать конечную анимацию:',
      answerOptions: [
        { answerText: 'clearTimeout', isCorrect: true },
        { answerText: 'setInterval', isCorrect: false },
        { answerText: 'setTimeout', isCorrect: false },
      ],
    },
    {
      questionText: 'Что, из ниже перечисленного, относится к событию:',
      answerOptions: [
        { answerText: 'завершение загрузки web-страницы', isCorrect: true },
        { answerText: 'начало загрузки web-страницы', isCorrect: false },
        { answerText: 'сохранение кодировки пользователем', isCorrect: false },
      ],
    },
    {
      questionText: 'Что, из ниже перечисленного, относится к событию:',
      answerOptions: [
        { answerText: 'изменение кодировки пользователем', isCorrect: true },
        { answerText: 'сохранение кодировки пользователем', isCorrect: false },
        { answerText: 'начало загрузки web-страницы', isCorrect: false },
      ],
    },
    {
      questionText: 'Какой оператор служит для создания нового экземпляра из класса однотипных объектов:',
      answerOptions: [
        { answerText: 'new', isCorrect: true },
        { answerText: 'this', isCorrect: false },
        { answerText: 'prototype', isCorrect: false },
      ],
    },
    {
      questionText: 'В какой строке создастся новый объект Array:',
      answerOptions: [
        { answerText: 'var pattern = [a,b,c];', isCorrect: true },
        { answerText: 'var pattern = /s&/;', isCorrect: false },
        { answerText: 'var pattern = new Array[a,b,c];', isCorrect: false },
      ],
    },
    {
      questionText: ' Какой метод позволяет изменять порядок элементов массива на противоположный:',
      answerOptions: [
        { answerText: 'join()', isCorrect: false },
        { answerText: 'sort()', isCorrect: false },
        { answerText: 'reverse()', isCorrect: true },
      ],
    },
    {
      questionText: 'Объекты, отвечающие за то, что содержится на Web-странице в окне браузера, называются:',
      answerOptions: [
        { answerText: 'пользовательскими', isCorrect: false },
        { answerText: 'клиентскими', isCorrect: true },
        { answerText: 'встроенными', isCorrect: false },
      ],
    },
    {
      questionText: 'Какой AJAX-транспорт позволит отправить файл на сервер без перезагрузки страницы:',
      answerOptions: [
        { answerText: 'невозможно ввиду ограничений безопасности javascript', isCorrect: false },
        { answerText: 'XmlHttpRequest справится!', isCorrect: false },
        { answerText: 'только использование фреймов(IFrame)', isCorrect: true },
      ],
    },
    {
      questionText: 'Что нельзя сделать с помощью XmlHttpRequest:',
      answerOptions: [
        { answerText: 'произвести запрос так, чтобы ответ был готов до следующей строки скрипта', isCorrect: false },
        { answerText: 'передать запрос другого типа кроме GET и POST', isCorrect: false },
        { answerText: 'сделать запрос с http://yandex.ru на http://google.com', isCorrect: true },
      ],
    },
    {
      questionText: 'Что такое ECMAScript:',
      answerOptions: [
        { answerText: 'переработанная реализация Javascript', isCorrect: false },
        { answerText: 'новый язык программирования', isCorrect: false },
        { answerText: 'спецификация языка Javascript', isCorrect: true },
      ],
    },
    {
      questionText: ' Можно ли в скрипте перевести посетителя на другую страницу сайта:',
      answerOptions: [
        { answerText: 'да, но только в рамках текущего сайта', isCorrect: false },
        { answerText: 'нет, нельзя', isCorrect: false },
        { answerText: 'да, куда угодно', isCorrect: true },
      ],
    },
    {
      questionText: 'Можно ли использовать один объект XmlHttpRequest для множества разных запросов:',
      answerOptions: [
        { answerText: 'нет, только один запрос на один объект', isCorrect: false },
        { answerText: 'да, но перед каждым новым запросом надо вызывать abort()', isCorrect: false },
        { answerText: 'можно', isCorrect: true },
      ],
    },
    {
      questionText: 'Сколько параметров можно передать функции:',
      answerOptions: [
        { answerText: 'сколько указано в определении функции или меньше', isCorrect: false },
        { answerText: 'любое количество', isCorrect: true },
        { answerText: 'ровно столько, сколько указано в определении функции', isCorrect: false },
      ],
    },
    {
      questionText: 'Какая арифметическая операция приводит к ошибке в javascript:',
      answerOptions: [
        { answerText: 'корень из отрицательного числа', isCorrect: false },
        { answerText: 'нет верного ответа', isCorrect: true },
        { answerText: 'деление на ноль', isCorrect: false },
      ],
    },
    {
      questionText: 'Какие конструкции для циклов есть в javascript:',
      answerOptions: [
        { answerText: 'только одна: for', isCorrect: false },
        { answerText: 'три: for, while и do…while', isCorrect: true },
        { answerText: 'только две: for и while.', isCorrect: false },
      ],
    },
];
export const questionsReact = [
  {
    questionText: 'Какую часть шаблона проектирования MVC реализует React.js?',
    answerOptions: [
      { answerText: 'React предназначен для работы с "view" частью', isCorrect: true },
      { answerText: 'React - это полноценный MVC-фреймворк', isCorrect: false },
      { answerText: 'React является «контроллером» с точки зрения MVC', isCorrect: false },
    ],
  },
  {
    questionText: 'Какой шаблонизатор можно использовать в React?',
    answerOptions: [
      { answerText: 'В React вы не должны использовать какой-либо шаблонизатор. Для рендеринга HTML используется JSX (расширение синтаксиса JS).', isCorrect: true },
      { answerText: 'EJS', isCorrect: false },
      { answerText: 'XML', isCorrect: false },
    ],
  },
  {
    questionText: 'Какой из этих методов жизненного цикла компонента существуют в React.js?',
    answerOptions: [
      { answerText: 'upgrade', isCorrect: true },
      { answerText: 'mounted', isCorrect: false },
      { answerText: 'destroyed', isCorrect: false },
    ],
  },
  {
    questionText: 'Перерисовывает ли React всё view когда изминелись props или состояние?',
    answerOptions: [
      { answerText: 'Нет. React только повторно рендерит только измененный компонент.', isCorrect: true },
      { answerText: 'Да. React.js распространяет событие на все дерево компонентов, и они вызывают метод render.', isCorrect: false },
    ],
  },
  {
    questionText: 'Какой метод компонента следует использовать для кастомной логики для реагирования на изменения?',
    answerOptions: [
      { answerText: 'shouldComponentUpdate', isCorrect: true },
      { answerText: 'getSnapshotBeforeUpdate', isCorrect: false },
      { answerText: 'componentWillMount', isCorrect: false },
    ],
  },
  {
    questionText: 'Что можно передать как второй аргумент в метод setState?',
    answerOptions: [
      { answerText: 'функцую обратного вызова для получения нового состояния', isCorrect: true },
      { answerText: 'предыдущее состояние', isCorrect: false },
      { answerText: 'свойства, которые должны быть обновлены', isCorrect: false },
    ],
  },
  {
    questionText: 'Какой атрибут обязателен при рендеринге компонентов списка?',
    answerOptions: [
      { answerText: 'key', isCorrect: false },
      { answerText: 'index', isCorrect: false },
      { answerText: 'data-index', isCorrect: true },
    ],
  },
  {
    questionText: 'Будет ли следующий код обработки события клика работать в React?<button onclick="deleteUser()">Delete user</button>',
    answerOptions: [
      { answerText: 'Да. Это правильный синтаксис React.js для обработки событий кликов.', isCorrect: false },
      { answerText: 'Нет. React использует немного другой синтаксис.: onClick={activateLasers}', isCorrect: true },
    ],
  },
  {
    questionText: 'Какое из этих утверждений относительно props истины?',
    answerOptions: [
      { answerText: 'Вы не можете передать объект в props', isCorrect: false },
      { answerText: 'React автоматически проверяет переданны ли необходимые props', isCorrect: false },
      { answerText: 'props только для чтения', isCorrect: true },
    ],
  },
  {
    questionText: 'Что такое React.PureComponent?',
    answerOptions: [
      { answerText: 'React.PureComponent - это компонент, у которого нет метода render.', isCorrect: false },
      { answerText: 'это базовый класс всех компонентов React', isCorrect: false },
      { answerText: 'React.PureComponent почти такой же, как React.Component. Основное отличие состоит в том, что первый не реализует метод shouldComponentUpdate ()', isCorrect: true },
    ],
  },
  {
    questionText: ' Какой метод любого React компонента вызывается первым?',
    answerOptions: [
      { answerText: 'componentWillMount', isCorrect: false },
      { answerText: 'componentDidMount', isCorrect: false },
      { answerText: 'constructor', isCorrect: true },
    ],
  },
  {
    questionText: 'Что такое подъем состояния вверх?',
    answerOptions: [
      { answerText: 'Обновление props родительского элемента .', isCorrect: false },
      { answerText: 'Обновление состояния дочерних компонентов', isCorrect: false },
      { answerText: 'Процесс подъема состояния изменившегося компонента до ближайшего общего предка, чтобы обновить необходимые компоненты.', isCorrect: true },
    ],
  },
  {
    questionText: 'Как создать компонент React без наследования класса React.Component?',
    answerOptions: [
      { answerText: 'Это невозможно. Все компоненты React должны наследовать React.Component', isCorrect: false },
      { answerText: 'Используюя метод React.createElement', isCorrect: false },
      { answerText: 'Используюя метод ReactDOM.render', isCorrect: true },
    ],
  },
  {
    questionText: ' Что такое props.children?',
    answerOptions: [
      { answerText: 'Это хранилище ключ-значение всех props, переданных дочерним компонентам.', isCorrect: false },
      { answerText: 'Это переменная, которая содержит содержимое между открывающим и закрывающим тегами компонента.', isCorrect: true },
      { answerText: 'Это переменная, которая содержит ссылки на дочерние компоненты.', isCorrect: false },
    ],
  },
  {
    questionText: 'Какие факты о Flux истины?',
    answerOptions: [
      { answerText: 'Flux является частью React', isCorrect: false },
      { answerText: 'Flux - это архитектура приложений, которая дополняет React и концепцию однонаправленного потока данных', isCorrect: true },
      { answerText: 'React приложение нельзя писать без Flux', isCorrect: false },
    ],
  },
];


// lections ---------------------------------------------------------------------------------------------------------------------------------------------


export const lectionsHTML = [
  {
    id: 1,
    value: 'Урок №1',
    file: htmlFirstLection 
  },
  {
    id: 2,
    value: 'Урок №2',
    file: htmlSecondLection
  },
  {
    id: 3,
    value: 'Урок №3',
    file: htmlThirdLection
  },
  {
    id: 4,
    value: 'Урок №4',
    file: htmlFourthLection
  },
  {
    id: 5,
    value: 'Урок №5',
    file: htmlFifthLection
    },
    {
    id: 6,
    value: 'Урок №6',
    file: htmlSixthLection
    },
    {
    id: 7,
    value: 'Урок №7',
    file: htmlSeventhLection
    },
    {
    id: 8,
    value: 'Урок №8',
    file: htmlEighthLection
    },
  ];

  export const lectionsCSS = [
    {
      id: 1,
      value: 'Урок №1',
      file: cssFirstLection 
    },
    {
      id: 2,
      value: 'Урок №2',
      file: cssSecondLection
    },
    {
      id: 3,
      value: 'Урок №3',
      file: cssThirdLection
    },
    {
      id: 4,
      value: 'Урок №4',
      file: cssFourthLection
    },
    {
      id: 5,
      value: 'Урок №5',
      file: cssFifthLection
      },
      {
      id: 6,
      value: 'Урок №6',
      file: cssSixthLection
      },
      {
      id: 7,
      value: 'Урок №7',
      file: cssSeventhLection
      },
    ];

    export const lectionsJS = [
      {
        id: 1,
        value: 'Урок №1',
        file: jsFirstLection 
      },
      {
        id: 2,
        value: 'Урок №2',
        file: jsSecondLection
      },
      {
        id: 3,
        value: 'Урок №3',
        file: jsThirdLection
      },
      {
        id: 4,
        value: 'Урок №4',
        file: jsFourthLection
      },
      {
        id: 5,
        value: 'Урок №5',
        file: jsFifthLection
        },
      ];
      export const lectionsReact = [
        {
          id: 1,
          value: 'Урок №1',
          file: reactFirstLection 
        },
        {
          id: 2,
          value: 'Урок №2',
          file: reactSecondLection
        },
        {
          id: 3,
          value: 'Урок №3',
          file: reactThirdLection
        },
        {
          id: 4,
          value: 'Урок №4',
          file: reactFourthLection
        },
        {
          id: 5,
          value: 'Урок №5',
          file: reactFifthLection
          },
          {
          id: 6,
          value: 'Урок №6',
          file: reactSixthLection
          },
          {
          id: 7,
          value: 'Урок №7',
          file: reactSeventhLection
          },
          {
          id: 8,
          value: 'Урок №8',
          file: reactEighthLection
          },
        ];