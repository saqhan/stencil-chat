// export {ChatMessageDirectionEnum } from "../interface/common.interface";
// export {ChatMessage} from "../interface/common.interface";
// export {ChatMessageTypeEnum} from "../interface/common.interface";
// export {ChatCategoryInterface} from "../interface/common.interface";
// export {ChatContactInterface} from "../interface/common.interface";
// export {ChatDialogInterface} from "../interface/common.interface";


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
  id: string | number,
  img: string,
  name: string,
  mess: string,
  time: {
    created: Date,
  },
  category: string,
  online: boolean
}

export interface ChatDialogInterface {
  id : number;
  img : string;
  name : string;
  mess : string;
  time: {
    /** время создания */
    created: any;
    /** время доставки */
    delivery?: any;
    /** время прочтения */
    read?: any;
  };
  category : string;
  online : boolean;
}
