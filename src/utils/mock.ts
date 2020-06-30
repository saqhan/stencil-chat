import {MessageDirectionEnum, MessageTypeEnum} from "../components/shared/interface/common.interface";


export const dialogs = [
  {
    id: 1,
    img: "https://via.placeholder.com/300x300?text=User",
    name: "Anna Dalonzo",
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
    name: "Anna Dalonzo",
    mess: "generate lazy started",
    time: {
      created: new Date(),
    },
    category: "family",
    online: true,
  },
  {
    id: 3,
    img: "https://via.placeholder.com/300x300?text=User",
    name: "Anna Dalonzo",
    mess: "generate lazy finished in 141 ms",
    time: {
      created: new Date(),
    },
    category: "friends",
    online: false,
  },
  {
    id: 4,
    img: "https://via.placeholder.com/300x300?text=User",
    name: "Anna Dalonzo",
    mess: "Hello everyone!!!",
    time: {
      created: new Date(),
    },
    category: "friends",
    online: true,
  },
  {
    id: 5,
    img: "https://via.placeholder.com/300x300?text=User",
    name: "Anna Dalonzo",
    mess: "transpile started",
    time: {
      created: new Date(),
    },
    category: "work",
    online: false,
  },
  {
    id: 6,
    img: "https://via.placeholder.com/300x300?text=User",
    name: "Anna Dalonzo",
    mess: "Hello everyone!!!",
    time: {
      created: new Date(),
    },
    category: "work",
    online: true,
  },
  {
    id: 7,
    img: "https://via.placeholder.com/300x300?text=User",
    name: "Anna Dalonzo",
    mess: "Hello everyone!!!",
    time: {
      created: new Date(),
    },
    category: "work",
    online: false,
  },
  {
    id: 8,
    img: "https://via.placeholder.com/300x300?text=User",
    name: "Saqhan Dalonzo",
    mess: "Hello everyone!!!",
    time: {
      created: new Date(),
    },
    category: "family",
    online: true,
  },
  {
    id: 9,
    img: "https://via.placeholder.com/300x300?text=User",
    name: "Saqhan Chrome",
    mess: "Hello everyone!!! category",
    time: {
      created: new Date(),
    },
    category: "friends",
    online: false,
  },
  {
    id: 10,
    img: "https://via.placeholder.com/300x300?text=User",
    name: "Saqhan Chrome",
    mess: "Generate lazy started",
    time: {
      created: new Date(),
    },
    category: "friends",
    online: false,
  },
];

export const categories = [
  {
    name: "All",
    id: "all",
  },
  {
    name: "Work",
    id: "work",
  },
  {
    name: "Family",
    id: "family",
  },
  {
    name: "Friends",
    id: "friends",
  },
];

export const MessageMock = [
  {
    content: "Привет, как дела?",
    sender: {
      uid: "test-id-1",
      icon: "https://via.placeholder.com/60x60?text=User",
      name: "Сайхан",
      phone: "79291234567",
    },
    type: MessageTypeEnum.text,
    direction: MessageDirectionEnum.toMe,
    time: {
      created: new Date(),
    },
  },
  {
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    sender: {
      uid: "test-id-1",
      icon: "https://via.placeholder.com/60x60?text=User",
      name: "Сайхан",
      phone: "79291234567",
    },
    type: MessageTypeEnum.text,
    direction: MessageDirectionEnum.toMe,
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
    type: MessageTypeEnum.image,
    direction: MessageDirectionEnum.toMe,
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
    type: MessageTypeEnum.text,
    direction: MessageDirectionEnum.fromMe,
    time: {
      created: new Date(),
    },
  },
  {
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit df sss",
    sender: {
      uid: "test-id-2",
      icon: "https://via.placeholder.com/60x60?text=User",
      name: "Адам",
      phone: "79291234567",
    },
    type: MessageTypeEnum.text,
    direction: MessageDirectionEnum.fromMe,
    time: {
      created: new Date(),
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
    type: MessageTypeEnum.image,
    direction: MessageDirectionEnum.fromMe,
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
    type: MessageTypeEnum.text,
    direction: MessageDirectionEnum.toMe,
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
    type: MessageTypeEnum.text,
    direction: MessageDirectionEnum.fromMe,
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
    type: MessageTypeEnum.text,
    direction: MessageDirectionEnum.toMe,
    time: {
      created: new Date(),
    },
  },
];

export const logo = {
  id: "logo",
  logo: "https://via.placeholder.com/100x100?text=Text",
};

export const navItems = [
  {
    id: 1,
    icon: "fas fa-comment-alt",
  },
  {
    id: 2,
    icon: "fas fa-shopping-bag",
  },
  {
    id: 3,
    icon: "fas fa-cart-arrow-down",
  },
  {
    id: 5,
    icon: "fas fa-calendar-alt",
  },
  {
    id: 6,
    icon: "fas fa-cog",
  },
];


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
