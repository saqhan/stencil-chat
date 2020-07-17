export * from "./components";
/**
 *
 * */
export interface ChatMessage {
  /**
   * содержимое сообщения
   * */
  content: any | Date;

  /**
   * тип сообщения
   * */
  type: ChatMessageTypeEnum;

  /** время создание */
  time: {
    /** время создания */
    created: any;
    /** время доставки */
    delivery?: any;
    /** время прочтения */
    read?: any;
  };

  /**
   * направления сообщения
   * */
  direction: ChatMessageDirectionEnum;

  /**
   * отправитель
   * */
  sender: {
    uid: string;
    icon: string;
    name: string;
    phone: string;
  };
}

/**
 *
 * */
export enum ChatMessageDirectionEnum {
  /**
   * сообщения написал кто то другой, и получено мною
   * */
  toMe,
  /**
   * сообщения написал я
   * */
  fromMe,
  /**
   * сообщения которое будет отображаться в центре
   * */
  center,
}

/**
 *
 * */
export enum ChatMessageTypeEnum {
  /**
   * сообщения написал кто то другой, и получено мною
   * */
  text = "text",
  /**
   * аудио сообщения записанное самим пользователем
   * */
  liveAudio = "live-audio",
  /**
   * аудио сообщение любое которое не записано самим пользователем
   * */
  audio = "audio",
  /**
   * фотка сделанная на устройстве пользователя и отправленная сразу
   * */
  liveImage = "live-image",
  /**
   * фотка из устройства отправителя
   * */
  image = "image",
  /**
   * видео сделанная на устройстве пользователя и отправленная сразу
   * */
  liveVideo = "live-video",
  /**
   * видео из устройства отправителя
   * */
  video = "video",
  /**
   * файл из устройства отправителя
   * */
  file = "file",

  /**
   * timestamp
   * */
  date = "date",

  /**
   * Печатает сообщение
   */
  loading = "loading",
}

/**
 *
 * */
export interface ChatCategoryInterface {
  name: string;
  id: string;
}

export interface ChatContactInterface {
  id: string | number;
  img: string;
  name: string;
  mess: string;
  time: {
    created: Date;
  };
  category: string;
  online: boolean;
}

export interface ChatDialogInterface {
  id: number;
  img: string;
  name: string;
  mess: string;
  time: {
    /** время создания */
    created: any;
    /** время доставки */
    delivery?: any;
    /** время прочтения */
    read?: any;
  };
  newMessage?: number;
  category: string;
  online: boolean;
}

export interface ChatLogo {
  id: string;
  logo: string;
}

// export interface TitleModuleInterface {
//   id: string;
//   title: string;
// }

export interface ChatNavItems {
  id: number;
  icon: string;
}

export enum ChatLinkTypeEnum {
  showFile = "showFile",
  showDialogs = "showDialogs",
  showPersonalDialog = "showPersonalDialog",
  userNamePersonal = "user-name-personal",
  addDialog = '"add-dialog"',

  fromMobileContacts = '"contacts"',
  fromMobileMenuBar = "menu-bar",
}

/**
 * эмит при клике на диалог/контакт
 * */
export interface ChatClickToLinkEmit {
  place?: ChatLinkTypeEnum;
  data?: ChatDialogInterface;
}

export interface ChatWritingUserInterface {
  uid: string;
  icon: string;
  phone: string;
  name: string;
}

/**
 *
 * */
export function chatConvertWritingStatusToMessage(
  writing: ChatWritingUserInterface
): ChatMessage {
  return {
    /**
     * содержимое сообщения
     * */
    content: null,
    /**
     * тип сообщения
     * */
    type: ChatMessageTypeEnum.loading,
    /** время создание */
    time: {
      /** время создания */
      created: Date.now(),
    },
    /**
     * направления сообщения
     * */
    direction: ChatMessageDirectionEnum.toMe,

    /**
     * отправитель
     * */
    sender: {
      uid: writing.uid,
      icon: writing.icon,
      name: writing.name,
      phone: writing.phone,
    },
  };
}

// /**
//  * dialogue search
//  * */
//  export function ChatSearchDialog(value: string) {
//   if (!this.disableInnerSearchDialogs) {
//     this.dialogsState = filterDialogsBySearchValue(
//       value,
//       this.dialogs
//     );
//   }
// }

// /**
//  * search for private messages
//  * */
//  export function ChatSearchPersonalMessages(value: string ) {
//   if (!this.disableInnerSearchMessages) {
//     this.messageState = filterMessageBySearchValue(
//       value,
//       this.message
//     )
//   }
// }

/**
 * filter message by search value
 * */
export function filterMessageBySearchValue (
  value: string,
  message:  ChatMessage[]
): ChatMessage[] {
  return value
    ? message.filter((item) => {
      return typeof item.content === "string"
        ? item.content.toLowerCase().includes(value.toLowerCase())
        : false;
    })
    : message;
}

/**
 * filter dialogs by search value
 * */
export function filterDialogsBySearchValue (
  value: string,
  dialogs:  ChatDialogInterface[]
): ChatDialogInterface[] {
  return value
    ? dialogs.filter((item) => {
      return typeof item.name === "string"
        ? item.name.toLowerCase().includes(value.toLowerCase())
        : false;
    })
    : dialogs;
}

/**
 * filter contact by search value
 * */
export function filterContactBySearchValue (
  value: string,
  contacts:  ChatContactInterface[]
): ChatContactInterface[] {
  return value
    ? contacts.filter((item) => {
      return typeof item.name === "string"
        ? item.name.toLowerCase().includes(value.toLowerCase())
        : false;
    })
    : contacts;
}



/**
 * filter dialogs by category id
 * */
export function filterDialogsByCategory (
  category: ChatCategoryInterface,
  dialogs:  ChatDialogInterface[]
): ChatDialogInterface[] {
  return (category && category.id !== "all")
    ? dialogs.filter((dialog) => dialog.category === category.id)
    : dialogs;
}

export enum ChatViewToShowEnum {
  files = 'files',
  dialogs = 'dialogs',
  personal = 'personal',
  profile = 'profile',
  users = 'users',
  contacts = 'contacts',
  folders = 'folders',
}

export interface ShowFullChatOutputInterface {
  view: ChatViewToShowEnum
  data?: ChatDialogInterface
}
