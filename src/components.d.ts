/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { categories, dialogs, } from "./components/mobile-chat/res/view/mobile-dialogs/res/interface/common.interface";
import { Message, } from "./components/mobile-chat/res/view/mobile-personal/res/interface/common.interface";
export namespace Components {
    interface DialogCard {
        /**
          * карточка диалога
         */
        "mess": any;
    }
    interface MessFromMe {
        /**
          * Принимаем сообщения для пользователя
         */
        "message": any;
    }
    interface MessToMe {
        /**
          * Принимаем сообщения от пользователя
         */
        "message": any;
    }
    interface MobileChat {
    }
    interface MobileDialogs {
        /**
          * массив категорий диалогов
         */
        "categories": categories[];
        /**
          * массив сообщений
         */
        "dialogs": dialogs[];
    }
    interface MobilePersonal {
        /**
          * array data personal messages
         */
        "messageMock": Message[];
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface PersonalFooter {
    }
}
declare global {
    interface HTMLDialogCardElement extends Components.DialogCard, HTMLStencilElement {
    }
    var HTMLDialogCardElement: {
        prototype: HTMLDialogCardElement;
        new (): HTMLDialogCardElement;
    };
    interface HTMLMessFromMeElement extends Components.MessFromMe, HTMLStencilElement {
    }
    var HTMLMessFromMeElement: {
        prototype: HTMLMessFromMeElement;
        new (): HTMLMessFromMeElement;
    };
    interface HTMLMessToMeElement extends Components.MessToMe, HTMLStencilElement {
    }
    var HTMLMessToMeElement: {
        prototype: HTMLMessToMeElement;
        new (): HTMLMessToMeElement;
    };
    interface HTMLMobileChatElement extends Components.MobileChat, HTMLStencilElement {
    }
    var HTMLMobileChatElement: {
        prototype: HTMLMobileChatElement;
        new (): HTMLMobileChatElement;
    };
    interface HTMLMobileDialogsElement extends Components.MobileDialogs, HTMLStencilElement {
    }
    var HTMLMobileDialogsElement: {
        prototype: HTMLMobileDialogsElement;
        new (): HTMLMobileDialogsElement;
    };
    interface HTMLMobilePersonalElement extends Components.MobilePersonal, HTMLStencilElement {
    }
    var HTMLMobilePersonalElement: {
        prototype: HTMLMobilePersonalElement;
        new (): HTMLMobilePersonalElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLPersonalFooterElement extends Components.PersonalFooter, HTMLStencilElement {
    }
    var HTMLPersonalFooterElement: {
        prototype: HTMLPersonalFooterElement;
        new (): HTMLPersonalFooterElement;
    };
    interface HTMLElementTagNameMap {
        "dialog-card": HTMLDialogCardElement;
        "mess-from-me": HTMLMessFromMeElement;
        "mess-to-me": HTMLMessToMeElement;
        "mobile-chat": HTMLMobileChatElement;
        "mobile-dialogs": HTMLMobileDialogsElement;
        "mobile-personal": HTMLMobilePersonalElement;
        "my-component": HTMLMyComponentElement;
        "personal-footer": HTMLPersonalFooterElement;
    }
}
declare namespace LocalJSX {
    interface DialogCard {
        /**
          * карточка диалога
         */
        "mess"?: any;
        /**
          * clock on navigate
         */
        "onSelectDialog"?: (event: CustomEvent<any>) => void;
    }
    interface MessFromMe {
        /**
          * Принимаем сообщения для пользователя
         */
        "message"?: any;
    }
    interface MessToMe {
        /**
          * Принимаем сообщения от пользователя
         */
        "message"?: any;
    }
    interface MobileChat {
    }
    interface MobileDialogs {
        /**
          * массив категорий диалогов
         */
        "categories"?: categories[];
        /**
          * массив сообщений
         */
        "dialogs"?: dialogs[];
        /**
          * clock on Category
         */
        "onClickCategory"?: (event: CustomEvent<any>) => void;
        /**
          * clock on navigate
         */
        "onSelectDialog"?: (event: CustomEvent<any>) => void;
    }
    interface MobilePersonal {
        /**
          * array data personal messages
         */
        "messageMock"?: Message[];
        /**
          * clock on navigate
         */
        "onSelectDialog"?: (event: CustomEvent<any>) => void;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface PersonalFooter {
    }
    interface IntrinsicElements {
        "dialog-card": DialogCard;
        "mess-from-me": MessFromMe;
        "mess-to-me": MessToMe;
        "mobile-chat": MobileChat;
        "mobile-dialogs": MobileDialogs;
        "mobile-personal": MobilePersonal;
        "my-component": MyComponent;
        "personal-footer": PersonalFooter;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "dialog-card": LocalJSX.DialogCard & JSXBase.HTMLAttributes<HTMLDialogCardElement>;
            "mess-from-me": LocalJSX.MessFromMe & JSXBase.HTMLAttributes<HTMLMessFromMeElement>;
            "mess-to-me": LocalJSX.MessToMe & JSXBase.HTMLAttributes<HTMLMessToMeElement>;
            "mobile-chat": LocalJSX.MobileChat & JSXBase.HTMLAttributes<HTMLMobileChatElement>;
            "mobile-dialogs": LocalJSX.MobileDialogs & JSXBase.HTMLAttributes<HTMLMobileDialogsElement>;
            "mobile-personal": LocalJSX.MobilePersonal & JSXBase.HTMLAttributes<HTMLMobilePersonalElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "personal-footer": LocalJSX.PersonalFooter & JSXBase.HTMLAttributes<HTMLPersonalFooterElement>;
        }
    }
}
