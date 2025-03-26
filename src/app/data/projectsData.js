export const ProjectsData = [
  {
    id: 1,
    name: 'Snoop mini',
    description:
      'Snoop mini — мобильное приложение компаньон, предназначенное для работы с устройством обнаружения утечек сигналов Arcom Digital Snoop Mini. Приложение позволяет конфигурировать и управлять процессом обнаружения утечек сигналов в кабельной сети. Взаимодействие между устройвами происходит по Bluetooth протоколу BLE. С помощью приложения можно отправлять отчеты о работе в отдел контроля качества.',
    link: {
      href: 'https://drive.google.com/drive/folders/1Gr3VRhrHNm57GsXdrV4UORxo9RsdN00y',
      text: 'Видео применения',
    },
    imgUrls: [
      'assets/images/projects/snoop-mini/sm1.jpg',
      'assets/images/projects/snoop-mini/sm2.jpg',
      'assets/images/projects/snoop-mini/sm3.jpg',
      'assets/images/projects/snoop-mini/sm4.jpg',
      'assets/images/projects/snoop-mini/sm5.jpg',
      'assets/images/projects/snoop-mini/sm6.jpg',
      'assets/images/projects/snoop-mini/sm7.jpg',
    ],
    tags: [
      'Flutter',
      'Dart',
      'FFI',
      'Geocoding',
      'Bluetooth',
      'BLE',
      'Android',
      'iOS',
    ],
    googlePlay:
      'https://play.google.com/store/apps/details?id=com.arcomdigital.snoop_bt',
    appStore: 'https://apps.apple.com/app/snoop-mini/id6742740860',
  },
  {
    id: 2,
    name: 'Quiver QC',
    description:
      'Quiver QC — мобильное приложение, которое позволяет реализовать метрику контроля качества (QC) при использовании полевого измерителя Arcom Digital Quiver. Приложение предоставляет простой способ загрузки сохраненных снимков экрана Quiver, документирующих условия до и после ремонта для различных неисправностей. Приложение обращается к камере мобильного телефона, сканирует QR-код, отображаемый на экране Quiver, представляющий снимок экрана Quiver, преобразует захваченный QR-код обратно в снимок экрана, а затем загружает снимки экрана на сервер Cloud QC вместе с координатами и метаданными для анализа и использования менеджерами. При отсутствии связи отправку результатов можно отложить.',
    link: {
      href: 'https://drive.google.com/drive/folders/11lUQA3akNYfsfZAaTqjrCzaXKGcXMkry',
      text: 'Тестовый доступ',
    },
    imgUrls: [
      'assets/images/projects/quiver-qc/qq1.jpg',
      'assets/images/projects/quiver-qc/qq2.jpg',
      'assets/images/projects/quiver-qc/qq3.jpg',
      'assets/images/projects/quiver-qc/qq4.jpg',
      'assets/images/projects/quiver-qc/qq5.jpg',
      'assets/images/projects/quiver-qc/qq6.jpg',
      'assets/images/projects/quiver-qc/qq7.jpg',
      'assets/images/projects/quiver-qc/qq8.jpg',
      'assets/images/projects/quiver-qc/qq9.jpg',
      'assets/images/projects/quiver-qc/qq10.jpg',
      'assets/images/projects/quiver-qc/qq11.jpg',
      'assets/images/projects/quiver-qc/qq12.jpg',
      'assets/images/projects/quiver-qc/qq13.jpg',
      'assets/images/projects/quiver-qc/qq14.jpg',
    ],
    tags: [
      'Flutter',
      'Dart',
      'FFI',
      'Geocoding',
      'Camera',
      'QR scanning',
      'Android',
      'iOS',
    ],
    googlePlay:
      'https://play.google.com/store/apps/details?id=com.arcomdigital.qr_code_scan',
    appStore: 'https://apps.apple.com/app/quiver-qc/id6648794270',
  },
  {
    id: 3,
    name: 'Blackbird',
    description:
      'Продукт представляющий собой плату Blackbird и Raspberry Pi, соединенные между собою. На плате имеется микроконтроллер (MCU) и ПЛИС (FPGA). MCU взаимодействует с Raspberry Pi через протокол SPI и GPIO. На Raspberry Pi развернуто Full Stack SPA приложение. Решение позволяет обнаруживать утечки сигнала в разных частотных диапазонах (Aero, High) при разных типах модуляции/режимах (OFDM, Pilot/QAM, OFDM Upstream Data Profile (OUDP), Full duplex (FDX)). Решение также позволяет анализировать спектры. С помощью WEB приложения можно обновлять прошивки для MCU, FPGA.',
    link: {
      href: 'https://drive.google.com/file/d/1CYzwp5c-qjPH1gME3VPmjfwBthW9X0g6/view',
      text: 'Демо видео',
    },
    imgUrls: [
      'assets/images/projects/blackbird/bb1.png',
      'assets/images/projects/blackbird/bb2.png',
      'assets/images/projects/blackbird/bb3.png',
      'assets/images/projects/blackbird/bb4.png',
      'assets/images/projects/blackbird/bb5.png',
      'assets/images/projects/blackbird/bb6.png',
      'assets/images/projects/blackbird/bb7.png',
      'assets/images/projects/blackbird/bb8.png',
      'assets/images/projects/blackbird/bb9.png',
      'assets/images/projects/blackbird/bb10.png',
    ],
    tags: [
      'React',
      'Redux',
      'Plotly',
      'Node.js',
      'Express.js',
      'ESLint',
      'CSS',
      'Raspberry Pi',
      'SPI',
      'GPIO',
    ],
  },
  {
    id: 4,
    name: 'Gains vs Spending',
    description:
      'Демо Full Stack SPA приложение учета доходов и расходов на стеке MERN. Имеется авторизация, набор банковских счетов для большинства платежных систем, связанная с ними таблица доходов и таблица трат. Раздел аналитики доходов и расходов с графиками и статистикой.',
    imgUrls: [
      'assets/images/projects/gains-vs-spending/gs1.png',
      'assets/images/projects/gains-vs-spending/gs2.png',
      'assets/images/projects/gains-vs-spending/gs3.png',
      'assets/images/projects/gains-vs-spending/gs4.png',
      'assets/images/projects/gains-vs-spending/gs5.png',
    ],
    tags: [
      'React',
      'Redux',
      'Node.js',
      'Express.js',
      'MongoDB',
      'ESLint',
      'Docker',
      'Bootstrap',
      'CSS',
    ],
    repository: 'https://github.com/Alex-g-h/gains-vs-spending',
    url: 'http://5.53.124.22/gains-vs-spending',
  },
  {
    id: 5,
    name: 'Fast Company',
    description:
      'Демо Full Stack SPA приложение знакомств на стеке MERN. Имеется авторизация, личная страница с характеристиками. Зарегистрированные пользователи могут увидеть анкеты всех прочих пользователей, зарегистрировавшихся ранее, а также оставить комментарии на страницах других пользователей. Поддерживается функционал редактирования созданных учётных данных. Страница с пользователями поддерживает сортировку по имеющимся полям (столбцам) и фильтрацию по профессиям (отдельное меню слева).',
    imgUrls: [
      'assets/images/projects/fast-company/fc1.png',
      'assets/images/projects/fast-company/fc2.png',
      'assets/images/projects/fast-company/fc3.png',
      'assets/images/projects/fast-company/fc4.png',
      'assets/images/projects/fast-company/fc5.png',
      'assets/images/projects/fast-company/fc6.png',
    ],
    tags: [
      'React',
      'Redux',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Firebase',
      'ESLint',
      'Docker',
      'Bootstrap',
      'CSS',
    ],
    repository: 'https://github.com/Alex-g-h/fast-company',
    url: 'https://alex-g-h.github.io/fast-company/',
  },
  {
    id: 6,
    name: 'Metal Company',
    description: 'Landing page компании металлопроката.',
    imgUrls: [
      'assets/images/projects/alex-metal/am1.png',
      'assets/images/projects/alex-metal/am2.png',
      'assets/images/projects/alex-metal/am3.png',
      'assets/images/projects/alex-metal/am4.png',
      'assets/images/projects/alex-metal/am5.png',
      'assets/images/projects/alex-metal/am6.png',
    ],
    tags: ['React', 'CSS'],
    repository: 'https://github.com/Alex-g-h/alex-metal',
    url: 'https://steelvrn.ru',
  },
]
