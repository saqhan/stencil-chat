import {ChatMessage, ChatMessageDirectionEnum, ChatMessageTypeEnum} from "../index";


export const DictionaryMock = {
  module: {
    appName: "Модульный чат"
  },
  shared: {

  },
  comp: {},
}
export const DictionaryMockEng = {
  module: {
    appName: "Module chat"
  },
  shared: {

  },
  comp: {},
}

export const dialogs = [
  {
    id: 1,
    img: 'https://via.placeholder.com/300x300?text=User',
    name: 'Даниил Копылов',
    mess: 'Конфликтный гештальт',
    time: {
      created: new Date(),
    },
    newMessage: 4,
    category: 'work',
    online: true,
  },
  {
    id: 2,
    img: 'https://via.placeholder.com/300x300?text=User',
    name: 'Ярослав Кириллов',
    mess: 'Реакция, по определению, доступна.',
    time: {
      created: new Date(),
    },
    newMessage: 0,
    category: 'family',
    online: true,
  },
  {
    id: 3,
    img: 'https://via.placeholder.com/300x300?text=User',
    name: 'Марина Коновалова',
    mess: 'Чем больше люди узнают друг друга, тем больше воспитание',
    time: {
      created: new Date(),
    },
    newMessage: 3,
    category: 'friends',
    online: false,
  },
  {
    id: 4,
    img: 'https://via.placeholder.com/300x300?text=User',
    name: 'Алина Брагина',
    mess: 'Предсознательное стабильно. Рефлексия вызывает стимул. ',
    time: {
      created: new Date(),
    },
    newMessage: 0,
    category: 'friends',
    online: true,
  },
  {
    id: 5,
    img: 'https://via.placeholder.com/300x300?text=User',
    name: 'Иван Степанович',
    mess: 'Эскапизм осознаёт импульс.',
    time: {
      created: new Date(),
    },
    newMessage: 1,
    category: 'work',
    online: false,
  },
  {
    id: 6,
    img: 'https://via.placeholder.com/300x300?text=User',
    name: 'Элеонора Тимофеевна',
    mess: 'Психе выбирает закон. Психоз изменяем.',
    time: {
      created: new Date(),
    },
    newMessage: 2,
    category: 'work',
    online: true,
  },
  {
    id: 7,
    img: 'https://via.placeholder.com/300x300?text=User',
    name: 'Александра Дмитриевна',
    mess: 'Конформизм понимает психоз.',
    time: {
      created: new Date(),
    },
    newMessage: 1,
    category: 'work',
    online: false,
  },
  {
    id: 8,
    img: 'https://via.placeholder.com/300x300?text=User',
    name: 'Вадим Тимофеевич',
    mess: 'Как было показано выше, психоз притягивает',
    time: {
      created: new Date(),
    },
    newMessage: 0,
    category: 'family',
    online: true,
  },
  {
    id: 9,
    img: 'https://via.placeholder.com/300x300?text=User',
    name: 'Яков Даниилович',
    mess: 'Придерживаясь жестких принципов социального Дарвинизма',
    time: {
      created: new Date(),
    },
    newMessage: 1,
    category: 'interesting',
    online: false,
  },
  {
    id: 10,
    img: 'https://via.placeholder.com/300x300?text=User',
    name: 'Виктория Ильина',
    mess: 'Предсознательное вызывает позитивистский генезис.',
    time: {
      created: new Date(),
    },
    newMessage: 0,
    category: 'study',
    online: false,
  },
];

export const categories = [
  {
    name: 'Все',
    id: 'all',
  },
  {
    name: 'Работа',
    id: 'work',
  },
  {
    name: 'Семья',
    id: 'family',
  },
  {
    name: 'Друзья',
    id: 'friends',
  },
  {
    name: 'Учеба',
    id: 'study',
  },
  {
    name: 'Интересное',
    id: 'interesting',
  },
  {
    name: 'Личное',
    id: 'self',
  },
  {
    name: 'Машины',
    id: 'auto',
  },
  ,
  {
    name: 'Игры',
    id: 'games',
  },
];

export const MessageMock: ChatMessage[] = [
  {
    content: "Привет, как дела?",
    sender: {
      uid: "test-id-1",
      icon: "https://via.placeholder.com/60x60?text=User",
      name: "Сайхан",
      phone: "79291234567",
    },
    type: ChatMessageTypeEnum.text,
    direction: ChatMessageDirectionEnum.toMe,
    time: {
      created: new Date(),
    },
  },
  {
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    sender: {
      uid: "test-id-1",
      icon: "https://via.placeholder.com/60x60?text=User",
      name: "Сайхан",
      phone: "79291234567",
    },
    type: ChatMessageTypeEnum.text,
    direction: ChatMessageDirectionEnum.toMe,
    time: {
      created: new Date(),
    },
  },
  {
    content: "Олег подключился к чату",
    sender: {
      uid: "",
      icon: "",
      name: "",
      phone: "",
    },
    type: ChatMessageTypeEnum.text,
    direction: ChatMessageDirectionEnum.center,
    time: {
      created: new Date(),
    },
  },
  {
    content: "https://via.placeholder.com/500",
    sender: {
      uid: "test-id-2",
      icon: "https://via.placeholder.com/60x60?text=User",
      name: "Сайхан",
      phone: "79291234567",
    },
    type: ChatMessageTypeEnum.image,
    direction: ChatMessageDirectionEnum.toMe,
    time: {
      created: new Date(),
      delivery: new Date(),
      read: new Date(),
    },
  },
  {
    content: 1593606947701,
    sender: {
      uid: "",
      icon: "",
      name: "",
      phone: "",
    },
    type: ChatMessageTypeEnum.date,
    direction: ChatMessageDirectionEnum.center,
    time: {
      created: new Date(),
    },
  },
  {
    content: "Все гуд!",
    sender: {
      uid: "test-id-2",
      icon: "https://via.placeholder.com/60x60?text=User",
      name: "Адам",
      phone: "79291234567",
    },
    type: ChatMessageTypeEnum.text,
    direction: ChatMessageDirectionEnum.fromMe,
    time: {
      created: new Date(),
      delivery: new Date(),
      read: new Date(),
    },
  },
  {
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit df sss",
    sender: {
      uid: "test-id-2",
      icon: "https://via.placeholder.com/60x60?text=User",
      name: "Адам",
      phone: "79291234567",
    },
    type: ChatMessageTypeEnum.text,
    direction: ChatMessageDirectionEnum.fromMe,
    time: {
      created: new Date(),
      read: new Date(),
    },
  },
  {
    content: "https://via.placeholder.com/500",
    sender: {
      uid: "test-id-2",
      icon: "https://via.placeholder.com/60x60?text=User",
      name: "Адам",
      phone: "79291234567",
    },
    type: ChatMessageTypeEnum.image,
    direction: ChatMessageDirectionEnum.fromMe,
    time: {
      created: new Date(),
    },
  },
  {
    content: "Где ты?",
    sender: {
      uid: "test-id-1",
      icon: "https://via.placeholder.com/60x60?text=User",
      name: "Сайхан",
      phone: "79291234567",
    },
    type: ChatMessageTypeEnum.text,
    direction: ChatMessageDirectionEnum.toMe,
    time: {
      created: new Date(),
    },
  },
  {
    content: "Чат пилю",
    sender: {
      uid: "test-id-2",
      icon: "https://via.placeholder.com/60x60?text=User",
      name: "Адам",
      phone: "79291234567",
    },
    type: ChatMessageTypeEnum.text,
    direction: ChatMessageDirectionEnum.fromMe,
    time: {
      created: new Date(),
    },
  },
  {
    content: "Прикинь, я тоже",
    sender: {
      uid: "test-id-1",
      icon: "https://via.placeholder.com/60x60?text=User",
      name: "Сайхан",
      phone: "79291234567",
    },
    type: ChatMessageTypeEnum.text,
    direction: ChatMessageDirectionEnum.toMe,
    time: {
      created: new Date(),
    },
  }
];

export const logo = {
  id: "logo",
  logo: "https://via.placeholder.com/100x100?text=Text",
};

// export const titleModule = {
//   id: 'modal',
//   title: 'Модульный чат'
// }

// export const navItems = [
//   {
//     id: 1,
//     icon: "c-chat c-chat-comment-alt",
//   },
//   {
//     id: 2,
//     icon: "c-chat c-chat-shopping-bag",
//   },
//   {
//     id: 3,
//     icon: "c-chat c-chat-cart-arrow-down",
//   },
//   {
//     id: 4,
//     icon: "c-chat c-chat-calendar-alt",
//   },
//   {
//     id: 5,
//     icon: "c-chat c-chat-cog",
//   },
// ];

export const contacts = [
  {
    id: 1,
    img: "https://via.placeholder.com/300x300?text=User",
    name: "Randolph Newman",
    mess: "rebuild finished",
    time: {
      created: new Date(),
    },
    category: "work",
    online: true,
  },
  {
    id: 2,
    img: "https://via.placeholder.com/300x300?text=User",
    name: "Harry Sutton",
    mess: "rebuild finished",
    time: {
      created: new Date(),
    },
    category: "work",
    online: true,
  },
  {
    id: 3,
    img: "https://via.placeholder.com/300x300?text=User",
    name: "Matthew Jake Sanchez",
    mess: "rebuild finished",
    time: {
      created: new Date(),
    },
    category: "work",
    online: true,
  },
  {
    id: 4,
    img: "https://via.placeholder.com/300x300?text=User",
    name: "Isaac Jack King",
    mess: "rebuild finished",
    time: {
      created: new Date(),
    },
    category: "work",
    online: true,
  },
  {
    id: 5,
    img: "https://via.placeholder.com/300x300?text=User",
    name: "Joseph Samuel Johnson",
    mess: "rebuild finished",
    time: {
      created: new Date(),
    },
    category: "work",
    online: true,
  },
  {
    id: 6,
    img: "https://via.placeholder.com/300x300?text=User",
    name: "Mike Vazovski",
    mess: "rebuild finished",
    time: {
      created: new Date(),
    },
    category: "work",
    online: true,
  },
  {
    id: 7,
    img: "https://via.placeholder.com/300x300?text=User",
    name: "Dominic Mason",
    mess: "rebuild finished",
    time: {
      created: new Date(),
    },
    category: "work",
    online: true,
  },
  {
    id: 8,
    img: "https://via.placeholder.com/300x300?text=User",
    name: "Blake David",
    mess: "rebuild finished",
    time: {
      created: new Date(),
    },
    category: "work",
    online: true,
  },
  {
    id: 9,
    img: "https://via.placeholder.com/300x300?text=User",
    name: "Joseph Samuel Johnson",
    mess: "rebuild finished",
    time: {
      created: new Date(),
    },
    category: "work",
    online: true,
  },
  {
    id: 10,
    img: "https://via.placeholder.com/300x300?text=User",
    name: "Alejandro Kyle Jenkins",
    mess: "rebuild finished",
    time: {
      created: new Date(),
    },
    category: "work",
    online: true,
  },
  {
    id: 11,
    img: "https://via.placeholder.com/300x300?text=User",
    name: "Hunter Joshua Coleman",
    mess: "rebuild finished",
    time: {
      created: new Date(),
    },
    category: "work",
    online: true,
  },
  {
    id: 12,
    img: "https://via.placeholder.com/300x300?text=User",
    name: "Jordan Isaiah Martinez",
    mess: "rebuild finished",
    time: {
      created: new Date(),
    },
    category: "work",
    online: true,
  },
];

export const disableInnerSearchDialogs:boolean = false;
export const disableInnerSearchMessages:boolean = false;

/**
 * module
 * */

export const messages = [
  {
    id: 1,
    name: "Константин Михалков",
    message: "Я ответственно заявляю, что в верстке есть большие",
    img: "https://via.placeholder.com/500x500?text=User",
    date: "24 Апр 15:20",
    position: "",
  },
  {
    id: 2,
    name: "Зинедин Зидан",
    message: "Конфликтный гештальт: бессознательное или восприятие?",
    img: "https://via.placeholder.com/500x500?text=User",
    date: "24 Апр 15:20",
    position: "Тренер",
  },
  {
    id: 3,
    name: "Владимир Путин",
    message:
      "Предсознательное стабильно. Рефлексия вызывает стимул. Эскапизм осознаёт импульс. ",
    img: "https://via.placeholder.com/500x500?text=User",
    date: "30 Окт 15:20",
    position: "Президент",
  },
  {
    id: 4,
    name: "Психоз изменяем",
    message: "Мышление, например, однородно иллюстрирует стимул.",
    img: "https://via.placeholder.com/500x500?text=User",
    date: "24 Апр 15:20",
    position: "",
  },
  {
    id: 5,
    name: "Батька",
    message: "Конфликтный гештальт: бессознательное или восприятие?",
    img: "https://via.placeholder.com/500x500?text=User",
    date: "24 Апр 15:20",
    position: "Президент",
  },
  {
    id: 6,
    name: "Маргарита",
    message: "Психоз изменяем. Конформизм понимает психоз.",
    img: "https://via.placeholder.com/500x500?text=User",
    date: "24 Апр 15:20",
    position: "",
  },
  {
    id: 7,
    name: "Никита фролков",
    message: "Спасибо, оплатили!",
    img: "https://via.placeholder.com/500x500?text=User",
    date: "24 Апр 15:20",
    position: "",
  },
  {
    id: 8,
    name: "Михаэль Шумахер",
    message: "Мышление, например, однородно иллюстрирует стимул.",
    img: "https://via.placeholder.com/500x500?text=User",
    date: "24 Апр 15:20",
    position: "Водитель",
  },
  {
    id: 9,
    name: "Филипп Лам",
    message: "Конфликтный гештальт: бессознательное или восприятие?",
    img: "https://via.placeholder.com/500x500?text=User",
    date: "24 Апр 15:20",
    position: "Футболист",
  },
  {
    id: 10,
    name: "Френсис",
    message: "Конфликтный гештальт: бессознательное или восприятие?",
    img: "https://via.placeholder.com/500x500?text=User",
    date: "24 Апр 15:20",
    position: "",
  },
  {
    id: 11,
    name: "Френсис",
    message: "Конфликтный гештальт: бессознательное или восприятие?",
    img: "https://via.placeholder.com/500x500?text=User",
    date: "24 Апр 15:20",
    position: "",
  },
  {
    id: 12,
    name: "Филипп Лам",
    message: "Конфликтный гештальт: бессознательное или восприятие?",
    img: "https://via.placeholder.com/500x500?text=User",
    date: "24 Апр 15:20",
    position: "Футболист",
  },
  {
    id: 13,
    name: "Маргарита",
    message: "Психоз изменяем. Конформизм понимает психоз.",
    img: "https://via.placeholder.com/500x500?text=User",
    date: "24 Апр 15:20",
    position: "",
  },
  {
    id: 14,
    name: "Никита фролков",
    message: "Спасибо, оплатили!",
    img: "https://via.placeholder.com/500x500?text=User",
    date: "24 Апр 15:20",
    position: "",
  },
];
