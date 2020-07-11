/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ChatCategoryInterface, ChatContactInterface, ChatDialogInterface, ChatMessage, } from "./components/shared/public/public.interface";
import { logo, navItems, } from "./components/comp/s-adam-navigate/res/interface/common.interface";
export namespace Components {
    interface BtnWrapper {
        "showChat": any;
    }
    interface ChatUserCard {
        "user": any;
    }
    interface ContactCard {
        /**
          * Принимаем контакт
         */
        "contact": any;
    }
    interface ContactsList {
        "contacts": ChatContactInterface[];
    }
    interface ContactsListBody {
        "contacts": any;
    }
    interface ContactsListHeader {
    }
    interface DialogCard {
        /**
          * карточка диалога
         */
        "mess": ChatDialogInterface;
        /**
          * карточка диалога
         */
        "theme": "comp" | "mobile";
    }
    interface DialogCategories {
        "categories": ChatCategoryInterface[];
        "theme": "comp" | "module" | "mobile";
    }
    interface FooterAudio {
    }
    interface FooterText {
    }
    interface MChatDialogs {
        "dialogs": any;
    }
    interface MChatFooter {
    }
    interface MChatHeader {
        /**
          * массив категорий диалогов
         */
        "categories": ChatCategoryInterface[];
    }
    interface MessageFrom {
        /**
          * Принимаем сообщения для пользователя
         */
        "message": any;
    }
    interface MessageImg {
        /**
          * Проверка статуса доставки сообщения
         */
        "checkSendMess": any;
        /**
          * Принимаем сообщения для пользователя
         */
        "message": any;
    }
    interface MessageText {
        /**
          * Проверка статуса доставки сообщения
         */
        "checkSendMess": any;
        /**
          * Получаем время оттправки сообщения
         */
        "createSendTime": any;
        /**
          * Принимаем сообщения для пользователя
         */
        "message": any;
    }
    interface MobileChat {
    }
    interface MobileDialogs {
        /**
          * массив категорий диалогов
         */
        "categories": ChatCategoryInterface[];
        /**
          * массив сообщений
         */
        "dialogs": ChatDialogInterface[];
    }
    interface MobilePersonal {
        /**
          * array data personal messages
         */
        "messageMock": ChatMessage[];
    }
    interface ModuleChat {
    }
    interface ModuleHeader {
        "titleModule": any;
    }
    interface ModulePersonal {
        /**
          * array data personal messages
         */
        "messageMock": ChatMessage[];
    }
    interface MyComponent {
    }
    interface PersonalFooter {
        "theme": "comp" | "mobile";
    }
    interface PersonalHeader {
        /**
          * array data personal messages
         */
        "messageMock": any;
    }
    interface PersonalMessage {
        /**
          * array data personal messages
         */
        "messageMock": any;
        "theme": "mobile" | "module" | "comp";
    }
    interface SAdamChat {
    }
    interface SAdamContacts {
        /**
          * массив категорий диалогов
         */
        "categories": any;
        /**
          * Массив с элементами диалога
         */
        "dialogs": ChatDialogInterface[];
    }
    interface SAdamCopying {
    }
    interface SAdamDialogs {
        /**
          * Массив с элементами диалога
         */
        "dialog": any;
    }
    interface SAdamDirect {
        /**
          * Личный диалог
         */
        "message": ChatMessage[];
    }
    interface SAdamNavItem {
        /**
          * Иконки навигации
         */
        "navItems": any;
    }
    interface SAdamNavigate {
        /**
          * Логотип
         */
        "logo": logo;
        /**
          * Иконки навигации
         */
        "navItems": navItems[];
    }
    interface SAdamNoChat {
    }
    interface SAdamPersonalHeader {
        /**
          * Личный диалог
         */
        "message": ChatMessage[];
    }
    interface SAdamProfile {
        /**
          * Задаем стиль для мобильной/пк версии
         */
        "theme": "comp" | "mobile" | "module";
    }
    interface SAdamSearchContact {
    }
    interface SSaqhanChatAddQuestion {
    }
    interface SSaqhanChatFiles {
    }
    interface SSaqhanChatFilesWrapper {
    }
    interface SSaqhanChatFormSearch {
        "categories": any;
    }
    interface SSaqhanChatFormSearchFiles {
    }
    interface SSaqhanChatUser {
        /**
          * массив с диалогами
         */
        "messages": any;
    }
    interface SSaqhanChatUsers {
        /**
          * Массив данных с диалогами
         */
        "messages": any;
    }
    interface SSaqhanChatUsersWrapper {
        "categories": any;
        /**
          * Массив данных с диалогами
         */
        "messages": any;
        /**
          * Массив данных с личным чатом
         */
        "personalMessage": any;
    }
    interface SSaqhanChatWrapper {
        /**
          * array categories
         */
        "categories": ChatCategoryInterface[];
        /**
          * массив данных для диалогов
         */
        "dialogs": ChatDialogInterface[];
        /**
          * массив данных личных сообщений
         */
        "messageMock": ChatMessage[];
        /**
          * Метод поиска по чату
         */
        "searchMessage": ({ detail }: {
            detail: any;
        }) => Promise<void>;
        /**
          * Заголовок для чата
         */
        "titleModule": any;
    }
    interface UserProfile {
    }
}
declare global {
    interface HTMLBtnWrapperElement extends Components.BtnWrapper, HTMLStencilElement {
    }
    var HTMLBtnWrapperElement: {
        prototype: HTMLBtnWrapperElement;
        new (): HTMLBtnWrapperElement;
    };
    interface HTMLChatUserCardElement extends Components.ChatUserCard, HTMLStencilElement {
    }
    var HTMLChatUserCardElement: {
        prototype: HTMLChatUserCardElement;
        new (): HTMLChatUserCardElement;
    };
    interface HTMLContactCardElement extends Components.ContactCard, HTMLStencilElement {
    }
    var HTMLContactCardElement: {
        prototype: HTMLContactCardElement;
        new (): HTMLContactCardElement;
    };
    interface HTMLContactsListElement extends Components.ContactsList, HTMLStencilElement {
    }
    var HTMLContactsListElement: {
        prototype: HTMLContactsListElement;
        new (): HTMLContactsListElement;
    };
    interface HTMLContactsListBodyElement extends Components.ContactsListBody, HTMLStencilElement {
    }
    var HTMLContactsListBodyElement: {
        prototype: HTMLContactsListBodyElement;
        new (): HTMLContactsListBodyElement;
    };
    interface HTMLContactsListHeaderElement extends Components.ContactsListHeader, HTMLStencilElement {
    }
    var HTMLContactsListHeaderElement: {
        prototype: HTMLContactsListHeaderElement;
        new (): HTMLContactsListHeaderElement;
    };
    interface HTMLDialogCardElement extends Components.DialogCard, HTMLStencilElement {
    }
    var HTMLDialogCardElement: {
        prototype: HTMLDialogCardElement;
        new (): HTMLDialogCardElement;
    };
    interface HTMLDialogCategoriesElement extends Components.DialogCategories, HTMLStencilElement {
    }
    var HTMLDialogCategoriesElement: {
        prototype: HTMLDialogCategoriesElement;
        new (): HTMLDialogCategoriesElement;
    };
    interface HTMLFooterAudioElement extends Components.FooterAudio, HTMLStencilElement {
    }
    var HTMLFooterAudioElement: {
        prototype: HTMLFooterAudioElement;
        new (): HTMLFooterAudioElement;
    };
    interface HTMLFooterTextElement extends Components.FooterText, HTMLStencilElement {
    }
    var HTMLFooterTextElement: {
        prototype: HTMLFooterTextElement;
        new (): HTMLFooterTextElement;
    };
    interface HTMLMChatDialogsElement extends Components.MChatDialogs, HTMLStencilElement {
    }
    var HTMLMChatDialogsElement: {
        prototype: HTMLMChatDialogsElement;
        new (): HTMLMChatDialogsElement;
    };
    interface HTMLMChatFooterElement extends Components.MChatFooter, HTMLStencilElement {
    }
    var HTMLMChatFooterElement: {
        prototype: HTMLMChatFooterElement;
        new (): HTMLMChatFooterElement;
    };
    interface HTMLMChatHeaderElement extends Components.MChatHeader, HTMLStencilElement {
    }
    var HTMLMChatHeaderElement: {
        prototype: HTMLMChatHeaderElement;
        new (): HTMLMChatHeaderElement;
    };
    interface HTMLMessageFromElement extends Components.MessageFrom, HTMLStencilElement {
    }
    var HTMLMessageFromElement: {
        prototype: HTMLMessageFromElement;
        new (): HTMLMessageFromElement;
    };
    interface HTMLMessageImgElement extends Components.MessageImg, HTMLStencilElement {
    }
    var HTMLMessageImgElement: {
        prototype: HTMLMessageImgElement;
        new (): HTMLMessageImgElement;
    };
    interface HTMLMessageTextElement extends Components.MessageText, HTMLStencilElement {
    }
    var HTMLMessageTextElement: {
        prototype: HTMLMessageTextElement;
        new (): HTMLMessageTextElement;
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
    interface HTMLModuleChatElement extends Components.ModuleChat, HTMLStencilElement {
    }
    var HTMLModuleChatElement: {
        prototype: HTMLModuleChatElement;
        new (): HTMLModuleChatElement;
    };
    interface HTMLModuleHeaderElement extends Components.ModuleHeader, HTMLStencilElement {
    }
    var HTMLModuleHeaderElement: {
        prototype: HTMLModuleHeaderElement;
        new (): HTMLModuleHeaderElement;
    };
    interface HTMLModulePersonalElement extends Components.ModulePersonal, HTMLStencilElement {
    }
    var HTMLModulePersonalElement: {
        prototype: HTMLModulePersonalElement;
        new (): HTMLModulePersonalElement;
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
    interface HTMLPersonalHeaderElement extends Components.PersonalHeader, HTMLStencilElement {
    }
    var HTMLPersonalHeaderElement: {
        prototype: HTMLPersonalHeaderElement;
        new (): HTMLPersonalHeaderElement;
    };
    interface HTMLPersonalMessageElement extends Components.PersonalMessage, HTMLStencilElement {
    }
    var HTMLPersonalMessageElement: {
        prototype: HTMLPersonalMessageElement;
        new (): HTMLPersonalMessageElement;
    };
    interface HTMLSAdamChatElement extends Components.SAdamChat, HTMLStencilElement {
    }
    var HTMLSAdamChatElement: {
        prototype: HTMLSAdamChatElement;
        new (): HTMLSAdamChatElement;
    };
    interface HTMLSAdamContactsElement extends Components.SAdamContacts, HTMLStencilElement {
    }
    var HTMLSAdamContactsElement: {
        prototype: HTMLSAdamContactsElement;
        new (): HTMLSAdamContactsElement;
    };
    interface HTMLSAdamCopyingElement extends Components.SAdamCopying, HTMLStencilElement {
    }
    var HTMLSAdamCopyingElement: {
        prototype: HTMLSAdamCopyingElement;
        new (): HTMLSAdamCopyingElement;
    };
    interface HTMLSAdamDialogsElement extends Components.SAdamDialogs, HTMLStencilElement {
    }
    var HTMLSAdamDialogsElement: {
        prototype: HTMLSAdamDialogsElement;
        new (): HTMLSAdamDialogsElement;
    };
    interface HTMLSAdamDirectElement extends Components.SAdamDirect, HTMLStencilElement {
    }
    var HTMLSAdamDirectElement: {
        prototype: HTMLSAdamDirectElement;
        new (): HTMLSAdamDirectElement;
    };
    interface HTMLSAdamNavItemElement extends Components.SAdamNavItem, HTMLStencilElement {
    }
    var HTMLSAdamNavItemElement: {
        prototype: HTMLSAdamNavItemElement;
        new (): HTMLSAdamNavItemElement;
    };
    interface HTMLSAdamNavigateElement extends Components.SAdamNavigate, HTMLStencilElement {
    }
    var HTMLSAdamNavigateElement: {
        prototype: HTMLSAdamNavigateElement;
        new (): HTMLSAdamNavigateElement;
    };
    interface HTMLSAdamNoChatElement extends Components.SAdamNoChat, HTMLStencilElement {
    }
    var HTMLSAdamNoChatElement: {
        prototype: HTMLSAdamNoChatElement;
        new (): HTMLSAdamNoChatElement;
    };
    interface HTMLSAdamPersonalHeaderElement extends Components.SAdamPersonalHeader, HTMLStencilElement {
    }
    var HTMLSAdamPersonalHeaderElement: {
        prototype: HTMLSAdamPersonalHeaderElement;
        new (): HTMLSAdamPersonalHeaderElement;
    };
    interface HTMLSAdamProfileElement extends Components.SAdamProfile, HTMLStencilElement {
    }
    var HTMLSAdamProfileElement: {
        prototype: HTMLSAdamProfileElement;
        new (): HTMLSAdamProfileElement;
    };
    interface HTMLSAdamSearchContactElement extends Components.SAdamSearchContact, HTMLStencilElement {
    }
    var HTMLSAdamSearchContactElement: {
        prototype: HTMLSAdamSearchContactElement;
        new (): HTMLSAdamSearchContactElement;
    };
    interface HTMLSSaqhanChatAddQuestionElement extends Components.SSaqhanChatAddQuestion, HTMLStencilElement {
    }
    var HTMLSSaqhanChatAddQuestionElement: {
        prototype: HTMLSSaqhanChatAddQuestionElement;
        new (): HTMLSSaqhanChatAddQuestionElement;
    };
    interface HTMLSSaqhanChatFilesElement extends Components.SSaqhanChatFiles, HTMLStencilElement {
    }
    var HTMLSSaqhanChatFilesElement: {
        prototype: HTMLSSaqhanChatFilesElement;
        new (): HTMLSSaqhanChatFilesElement;
    };
    interface HTMLSSaqhanChatFilesWrapperElement extends Components.SSaqhanChatFilesWrapper, HTMLStencilElement {
    }
    var HTMLSSaqhanChatFilesWrapperElement: {
        prototype: HTMLSSaqhanChatFilesWrapperElement;
        new (): HTMLSSaqhanChatFilesWrapperElement;
    };
    interface HTMLSSaqhanChatFormSearchElement extends Components.SSaqhanChatFormSearch, HTMLStencilElement {
    }
    var HTMLSSaqhanChatFormSearchElement: {
        prototype: HTMLSSaqhanChatFormSearchElement;
        new (): HTMLSSaqhanChatFormSearchElement;
    };
    interface HTMLSSaqhanChatFormSearchFilesElement extends Components.SSaqhanChatFormSearchFiles, HTMLStencilElement {
    }
    var HTMLSSaqhanChatFormSearchFilesElement: {
        prototype: HTMLSSaqhanChatFormSearchFilesElement;
        new (): HTMLSSaqhanChatFormSearchFilesElement;
    };
    interface HTMLSSaqhanChatUserElement extends Components.SSaqhanChatUser, HTMLStencilElement {
    }
    var HTMLSSaqhanChatUserElement: {
        prototype: HTMLSSaqhanChatUserElement;
        new (): HTMLSSaqhanChatUserElement;
    };
    interface HTMLSSaqhanChatUsersElement extends Components.SSaqhanChatUsers, HTMLStencilElement {
    }
    var HTMLSSaqhanChatUsersElement: {
        prototype: HTMLSSaqhanChatUsersElement;
        new (): HTMLSSaqhanChatUsersElement;
    };
    interface HTMLSSaqhanChatUsersWrapperElement extends Components.SSaqhanChatUsersWrapper, HTMLStencilElement {
    }
    var HTMLSSaqhanChatUsersWrapperElement: {
        prototype: HTMLSSaqhanChatUsersWrapperElement;
        new (): HTMLSSaqhanChatUsersWrapperElement;
    };
    interface HTMLSSaqhanChatWrapperElement extends Components.SSaqhanChatWrapper, HTMLStencilElement {
    }
    var HTMLSSaqhanChatWrapperElement: {
        prototype: HTMLSSaqhanChatWrapperElement;
        new (): HTMLSSaqhanChatWrapperElement;
    };
    interface HTMLUserProfileElement extends Components.UserProfile, HTMLStencilElement {
    }
    var HTMLUserProfileElement: {
        prototype: HTMLUserProfileElement;
        new (): HTMLUserProfileElement;
    };
    interface HTMLElementTagNameMap {
        "btn-wrapper": HTMLBtnWrapperElement;
        "chat-user-card": HTMLChatUserCardElement;
        "contact-card": HTMLContactCardElement;
        "contacts-list": HTMLContactsListElement;
        "contacts-list-body": HTMLContactsListBodyElement;
        "contacts-list-header": HTMLContactsListHeaderElement;
        "dialog-card": HTMLDialogCardElement;
        "dialog-categories": HTMLDialogCategoriesElement;
        "footer-audio": HTMLFooterAudioElement;
        "footer-text": HTMLFooterTextElement;
        "m-chat-dialogs": HTMLMChatDialogsElement;
        "m-chat-footer": HTMLMChatFooterElement;
        "m-chat-header": HTMLMChatHeaderElement;
        "message-from": HTMLMessageFromElement;
        "message-img": HTMLMessageImgElement;
        "message-text": HTMLMessageTextElement;
        "mobile-chat": HTMLMobileChatElement;
        "mobile-dialogs": HTMLMobileDialogsElement;
        "mobile-personal": HTMLMobilePersonalElement;
        "module-chat": HTMLModuleChatElement;
        "module-header": HTMLModuleHeaderElement;
        "module-personal": HTMLModulePersonalElement;
        "my-component": HTMLMyComponentElement;
        "personal-footer": HTMLPersonalFooterElement;
        "personal-header": HTMLPersonalHeaderElement;
        "personal-message": HTMLPersonalMessageElement;
        "s-adam-chat": HTMLSAdamChatElement;
        "s-adam-contacts": HTMLSAdamContactsElement;
        "s-adam-copying": HTMLSAdamCopyingElement;
        "s-adam-dialogs": HTMLSAdamDialogsElement;
        "s-adam-direct": HTMLSAdamDirectElement;
        "s-adam-nav-item": HTMLSAdamNavItemElement;
        "s-adam-navigate": HTMLSAdamNavigateElement;
        "s-adam-no-chat": HTMLSAdamNoChatElement;
        "s-adam-personal-header": HTMLSAdamPersonalHeaderElement;
        "s-adam-profile": HTMLSAdamProfileElement;
        "s-adam-search-contact": HTMLSAdamSearchContactElement;
        "s-saqhan-chat-add-question": HTMLSSaqhanChatAddQuestionElement;
        "s-saqhan-chat-files": HTMLSSaqhanChatFilesElement;
        "s-saqhan-chat-files-wrapper": HTMLSSaqhanChatFilesWrapperElement;
        "s-saqhan-chat-form-search": HTMLSSaqhanChatFormSearchElement;
        "s-saqhan-chat-form-search-files": HTMLSSaqhanChatFormSearchFilesElement;
        "s-saqhan-chat-user": HTMLSSaqhanChatUserElement;
        "s-saqhan-chat-users": HTMLSSaqhanChatUsersElement;
        "s-saqhan-chat-users-wrapper": HTMLSSaqhanChatUsersWrapperElement;
        "s-saqhan-chat-wrapper": HTMLSSaqhanChatWrapperElement;
        "user-profile": HTMLUserProfileElement;
    }
}
declare namespace LocalJSX {
    interface BtnWrapper {
        /**
          * clock on clickToLink
         */
        "onClickToShowChat"?: (event: CustomEvent<any>) => void;
        "showChat"?: any;
    }
    interface ChatUserCard {
        "onSelectPersonal"?: (event: CustomEvent<any>) => void;
        "user"?: any;
    }
    interface ContactCard {
        /**
          * Принимаем контакт
         */
        "contact"?: any;
        /**
          * clock on navigate
         */
        "onClickToLink"?: (event: CustomEvent<ChatContactInterface>) => void;
    }
    interface ContactsList {
        "contacts"?: ChatContactInterface[];
        /**
          * clock on clickToLink
         */
        "onClickToLink"?: (event: CustomEvent<string>) => void;
        /**
          * search contact
         */
        "onSearchContact"?: (event: CustomEvent<ChatContactInterface>) => void;
    }
    interface ContactsListBody {
        "contacts"?: any;
        /**
          * clock on clickToLink
         */
        "onClickToLink"?: (event: CustomEvent<any>) => void;
    }
    interface ContactsListHeader {
        /**
          * clock on clickToLink
         */
        "onClickToLink"?: (event: CustomEvent<any>) => void;
        /**
          * search contact
         */
        "onSearchContact"?: (event: CustomEvent<any>) => void;
    }
    interface DialogCard {
        /**
          * карточка диалога
         */
        "mess"?: ChatDialogInterface;
        /**
          * clock on navigate
         */
        "onClickToLink"?: (event: CustomEvent<any>) => void;
        /**
          * карточка диалога
         */
        "theme"?: "comp" | "mobile";
    }
    interface DialogCategories {
        "categories"?: ChatCategoryInterface[];
        /**
          * clock on Category
         */
        "onClickToCategory"?: (event: CustomEvent<ChatCategoryInterface>) => void;
        "theme"?: "comp" | "module" | "mobile";
    }
    interface FooterAudio {
        "onRecordFinished"?: (event: CustomEvent<boolean>) => void;
    }
    interface FooterText {
        "onShowRecordAudioFooter"?: (event: CustomEvent<void>) => void;
        "onShowSendFileFooter"?: (event: CustomEvent<void>) => void;
    }
    interface MChatDialogs {
        "dialogs"?: any;
        "onClickToLink"?: (event: CustomEvent<any>) => void;
    }
    interface MChatFooter {
        /**
          * clock on clickToLink
         */
        "onClickToLink"?: (event: CustomEvent<any>) => void;
    }
    interface MChatHeader {
        /**
          * массив категорий диалогов
         */
        "categories"?: ChatCategoryInterface[];
        /**
          * clock on clickToLink
         */
        "onClickToLink"?: (event: CustomEvent<any>) => void;
        "onSearchContact"?: (event: CustomEvent<any>) => void;
    }
    interface MessageFrom {
        /**
          * Принимаем сообщения для пользователя
         */
        "message"?: any;
    }
    interface MessageImg {
        /**
          * Проверка статуса доставки сообщения
         */
        "checkSendMess"?: any;
        /**
          * Принимаем сообщения для пользователя
         */
        "message"?: any;
    }
    interface MessageText {
        /**
          * Проверка статуса доставки сообщения
         */
        "checkSendMess"?: any;
        /**
          * Получаем время оттправки сообщения
         */
        "createSendTime"?: any;
        /**
          * Принимаем сообщения для пользователя
         */
        "message"?: any;
    }
    interface MobileChat {
    }
    interface MobileDialogs {
        /**
          * массив категорий диалогов
         */
        "categories"?: ChatCategoryInterface[];
        /**
          * массив сообщений
         */
        "dialogs"?: ChatDialogInterface[];
        /**
          * clock on Category
         */
        "onClickToCategory"?: (event: CustomEvent<ChatCategoryInterface>) => void;
        /**
          * clock on clickToLink
         */
        "onClickToLink"?: (event: CustomEvent<string>) => void;
        /**
          * clock on Category
         */
        "onSearchContact"?: (event: CustomEvent<ChatCategoryInterface>) => void;
    }
    interface MobilePersonal {
        /**
          * array data personal messages
         */
        "messageMock"?: ChatMessage[];
        /**
          * clock on navigate
         */
        "onClickToLink"?: (event: CustomEvent<string>) => void;
        /**
          * Поиск среди контактов
         */
        "onSearchContact"?: (event: CustomEvent<string>) => void;
    }
    interface ModuleChat {
    }
    interface ModuleHeader {
        /**
          * close modal
         */
        "onClose"?: (event: CustomEvent<any>) => void;
        "titleModule"?: any;
    }
    interface ModulePersonal {
        /**
          * array data personal messages
         */
        "messageMock"?: ChatMessage[];
        /**
          * clock on navigate
         */
        "onClickToLink"?: (event: CustomEvent<any>) => void;
        "onSearchContact"?: (event: CustomEvent<any>) => void;
    }
    interface MyComponent {
    }
    interface PersonalFooter {
        /**
          * click on navigate
         */
        "onClickToLink"?: (event: CustomEvent<any>) => void;
        "theme"?: "comp" | "mobile";
    }
    interface PersonalHeader {
        /**
          * array data personal messages
         */
        "messageMock"?: any;
        /**
          * clock on navigate
         */
        "onClickToLink"?: (event: CustomEvent<any>) => void;
        "onSearchContact"?: (event: CustomEvent<any>) => void;
    }
    interface PersonalMessage {
        /**
          * array data personal messages
         */
        "messageMock"?: any;
        "theme"?: "mobile" | "module" | "comp";
    }
    interface SAdamChat {
    }
    interface SAdamContacts {
        /**
          * массив категорий диалогов
         */
        "categories"?: any;
        /**
          * Массив с элементами диалога
         */
        "dialogs"?: ChatDialogInterface[];
        /**
          * clock on Category
         */
        "onClickToCategory"?: (event: CustomEvent<any>) => void;
        /**
          * Событие для переключения пустой страницы на личный чат
         */
        "onClickToLink"?: (event: CustomEvent<any>) => void;
        /**
          * search contact
         */
        "onSearchContact"?: (event: CustomEvent<any>) => void;
    }
    interface SAdamCopying {
    }
    interface SAdamDialogs {
        /**
          * Массив с элементами диалога
         */
        "dialog"?: any;
        /**
          * Событие для переключения пустой страницы на личный чат
         */
        "onToggleChat"?: (event: CustomEvent<any>) => void;
    }
    interface SAdamDirect {
        /**
          * Личный диалог
         */
        "message"?: ChatMessage[];
        /**
          * Клик по иконке поиска
         */
        "onClickOnSearchMessage"?: (event: CustomEvent<any>) => void;
        /**
          * клик по имени юзера в личной переписке
         */
        "onClickOnUsername"?: (event: CustomEvent<any>) => void;
        /**
          * click on navigate
         */
        "onClickToLink"?: (event: CustomEvent<any>) => void;
    }
    interface SAdamNavItem {
        /**
          * Иконки навигации
         */
        "navItems"?: any;
    }
    interface SAdamNavigate {
        /**
          * Логотип
         */
        "logo"?: logo;
        /**
          * Иконки навигации
         */
        "navItems"?: navItems[];
    }
    interface SAdamNoChat {
    }
    interface SAdamPersonalHeader {
        /**
          * Личный диалог
         */
        "message"?: ChatMessage[];
        /**
          * Клик по иконке поиска
         */
        "onClickOnSearchMessage"?: (event: CustomEvent<any>) => void;
        /**
          * клик по имени юзера в личной переписке
         */
        "onClickOnUsername"?: (event: CustomEvent<any>) => void;
    }
    interface SAdamProfile {
        "onClickToLink"?: (event: CustomEvent<any>) => void;
        /**
          * Задаем стиль для мобильной/пк версии
         */
        "theme"?: "comp" | "mobile" | "module";
    }
    interface SAdamSearchContact {
        /**
          * Поиск по контактам
         */
        "onSearchContact"?: (event: CustomEvent<any>) => void;
    }
    interface SSaqhanChatAddQuestion {
    }
    interface SSaqhanChatFiles {
    }
    interface SSaqhanChatFilesWrapper {
        /**
          * click to link
         */
        "onClickToLink"?: (event: CustomEvent<any>) => void;
    }
    interface SSaqhanChatFormSearch {
        "categories"?: any;
        /**
          * Клик по кнопке files
         */
        "onClickToLink"?: (event: CustomEvent<any>) => void;
        /**
          * Клик по кнопке в чате
         */
        "onSearchDialog"?: (event: CustomEvent<any>) => void;
    }
    interface SSaqhanChatFormSearchFiles {
        "onClickToLink"?: (event: CustomEvent<any>) => void;
    }
    interface SSaqhanChatUser {
        /**
          * массив с диалогами
         */
        "messages"?: any;
    }
    interface SSaqhanChatUsers {
        /**
          * Массив данных с диалогами
         */
        "messages"?: any;
    }
    interface SSaqhanChatUsersWrapper {
        "categories"?: any;
        /**
          * Массив данных с диалогами
         */
        "messages"?: any;
        "onClickToCategory"?: (event: CustomEvent<any>) => void;
        "onClickToLink"?: (event: CustomEvent<any>) => void;
        "onSearchDialog"?: (event: CustomEvent<any>) => void;
        /**
          * Массив данных с личным чатом
         */
        "personalMessage"?: any;
    }
    interface SSaqhanChatWrapper {
        /**
          * array categories
         */
        "categories"?: ChatCategoryInterface[];
        /**
          * массив данных для диалогов
         */
        "dialogs"?: ChatDialogInterface[];
        /**
          * массив данных личных сообщений
         */
        "messageMock"?: ChatMessage[];
        /**
          * Заголовок для чата
         */
        "titleModule"?: any;
    }
    interface UserProfile {
        "onClickToLink"?: (event: CustomEvent<any>) => void;
    }
    interface IntrinsicElements {
        "btn-wrapper": BtnWrapper;
        "chat-user-card": ChatUserCard;
        "contact-card": ContactCard;
        "contacts-list": ContactsList;
        "contacts-list-body": ContactsListBody;
        "contacts-list-header": ContactsListHeader;
        "dialog-card": DialogCard;
        "dialog-categories": DialogCategories;
        "footer-audio": FooterAudio;
        "footer-text": FooterText;
        "m-chat-dialogs": MChatDialogs;
        "m-chat-footer": MChatFooter;
        "m-chat-header": MChatHeader;
        "message-from": MessageFrom;
        "message-img": MessageImg;
        "message-text": MessageText;
        "mobile-chat": MobileChat;
        "mobile-dialogs": MobileDialogs;
        "mobile-personal": MobilePersonal;
        "module-chat": ModuleChat;
        "module-header": ModuleHeader;
        "module-personal": ModulePersonal;
        "my-component": MyComponent;
        "personal-footer": PersonalFooter;
        "personal-header": PersonalHeader;
        "personal-message": PersonalMessage;
        "s-adam-chat": SAdamChat;
        "s-adam-contacts": SAdamContacts;
        "s-adam-copying": SAdamCopying;
        "s-adam-dialogs": SAdamDialogs;
        "s-adam-direct": SAdamDirect;
        "s-adam-nav-item": SAdamNavItem;
        "s-adam-navigate": SAdamNavigate;
        "s-adam-no-chat": SAdamNoChat;
        "s-adam-personal-header": SAdamPersonalHeader;
        "s-adam-profile": SAdamProfile;
        "s-adam-search-contact": SAdamSearchContact;
        "s-saqhan-chat-add-question": SSaqhanChatAddQuestion;
        "s-saqhan-chat-files": SSaqhanChatFiles;
        "s-saqhan-chat-files-wrapper": SSaqhanChatFilesWrapper;
        "s-saqhan-chat-form-search": SSaqhanChatFormSearch;
        "s-saqhan-chat-form-search-files": SSaqhanChatFormSearchFiles;
        "s-saqhan-chat-user": SSaqhanChatUser;
        "s-saqhan-chat-users": SSaqhanChatUsers;
        "s-saqhan-chat-users-wrapper": SSaqhanChatUsersWrapper;
        "s-saqhan-chat-wrapper": SSaqhanChatWrapper;
        "user-profile": UserProfile;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "btn-wrapper": LocalJSX.BtnWrapper & JSXBase.HTMLAttributes<HTMLBtnWrapperElement>;
            "chat-user-card": LocalJSX.ChatUserCard & JSXBase.HTMLAttributes<HTMLChatUserCardElement>;
            "contact-card": LocalJSX.ContactCard & JSXBase.HTMLAttributes<HTMLContactCardElement>;
            "contacts-list": LocalJSX.ContactsList & JSXBase.HTMLAttributes<HTMLContactsListElement>;
            "contacts-list-body": LocalJSX.ContactsListBody & JSXBase.HTMLAttributes<HTMLContactsListBodyElement>;
            "contacts-list-header": LocalJSX.ContactsListHeader & JSXBase.HTMLAttributes<HTMLContactsListHeaderElement>;
            "dialog-card": LocalJSX.DialogCard & JSXBase.HTMLAttributes<HTMLDialogCardElement>;
            "dialog-categories": LocalJSX.DialogCategories & JSXBase.HTMLAttributes<HTMLDialogCategoriesElement>;
            "footer-audio": LocalJSX.FooterAudio & JSXBase.HTMLAttributes<HTMLFooterAudioElement>;
            "footer-text": LocalJSX.FooterText & JSXBase.HTMLAttributes<HTMLFooterTextElement>;
            "m-chat-dialogs": LocalJSX.MChatDialogs & JSXBase.HTMLAttributes<HTMLMChatDialogsElement>;
            "m-chat-footer": LocalJSX.MChatFooter & JSXBase.HTMLAttributes<HTMLMChatFooterElement>;
            "m-chat-header": LocalJSX.MChatHeader & JSXBase.HTMLAttributes<HTMLMChatHeaderElement>;
            "message-from": LocalJSX.MessageFrom & JSXBase.HTMLAttributes<HTMLMessageFromElement>;
            "message-img": LocalJSX.MessageImg & JSXBase.HTMLAttributes<HTMLMessageImgElement>;
            "message-text": LocalJSX.MessageText & JSXBase.HTMLAttributes<HTMLMessageTextElement>;
            "mobile-chat": LocalJSX.MobileChat & JSXBase.HTMLAttributes<HTMLMobileChatElement>;
            "mobile-dialogs": LocalJSX.MobileDialogs & JSXBase.HTMLAttributes<HTMLMobileDialogsElement>;
            "mobile-personal": LocalJSX.MobilePersonal & JSXBase.HTMLAttributes<HTMLMobilePersonalElement>;
            "module-chat": LocalJSX.ModuleChat & JSXBase.HTMLAttributes<HTMLModuleChatElement>;
            "module-header": LocalJSX.ModuleHeader & JSXBase.HTMLAttributes<HTMLModuleHeaderElement>;
            "module-personal": LocalJSX.ModulePersonal & JSXBase.HTMLAttributes<HTMLModulePersonalElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "personal-footer": LocalJSX.PersonalFooter & JSXBase.HTMLAttributes<HTMLPersonalFooterElement>;
            "personal-header": LocalJSX.PersonalHeader & JSXBase.HTMLAttributes<HTMLPersonalHeaderElement>;
            "personal-message": LocalJSX.PersonalMessage & JSXBase.HTMLAttributes<HTMLPersonalMessageElement>;
            "s-adam-chat": LocalJSX.SAdamChat & JSXBase.HTMLAttributes<HTMLSAdamChatElement>;
            "s-adam-contacts": LocalJSX.SAdamContacts & JSXBase.HTMLAttributes<HTMLSAdamContactsElement>;
            "s-adam-copying": LocalJSX.SAdamCopying & JSXBase.HTMLAttributes<HTMLSAdamCopyingElement>;
            "s-adam-dialogs": LocalJSX.SAdamDialogs & JSXBase.HTMLAttributes<HTMLSAdamDialogsElement>;
            "s-adam-direct": LocalJSX.SAdamDirect & JSXBase.HTMLAttributes<HTMLSAdamDirectElement>;
            "s-adam-nav-item": LocalJSX.SAdamNavItem & JSXBase.HTMLAttributes<HTMLSAdamNavItemElement>;
            "s-adam-navigate": LocalJSX.SAdamNavigate & JSXBase.HTMLAttributes<HTMLSAdamNavigateElement>;
            "s-adam-no-chat": LocalJSX.SAdamNoChat & JSXBase.HTMLAttributes<HTMLSAdamNoChatElement>;
            "s-adam-personal-header": LocalJSX.SAdamPersonalHeader & JSXBase.HTMLAttributes<HTMLSAdamPersonalHeaderElement>;
            "s-adam-profile": LocalJSX.SAdamProfile & JSXBase.HTMLAttributes<HTMLSAdamProfileElement>;
            "s-adam-search-contact": LocalJSX.SAdamSearchContact & JSXBase.HTMLAttributes<HTMLSAdamSearchContactElement>;
            "s-saqhan-chat-add-question": LocalJSX.SSaqhanChatAddQuestion & JSXBase.HTMLAttributes<HTMLSSaqhanChatAddQuestionElement>;
            "s-saqhan-chat-files": LocalJSX.SSaqhanChatFiles & JSXBase.HTMLAttributes<HTMLSSaqhanChatFilesElement>;
            "s-saqhan-chat-files-wrapper": LocalJSX.SSaqhanChatFilesWrapper & JSXBase.HTMLAttributes<HTMLSSaqhanChatFilesWrapperElement>;
            "s-saqhan-chat-form-search": LocalJSX.SSaqhanChatFormSearch & JSXBase.HTMLAttributes<HTMLSSaqhanChatFormSearchElement>;
            "s-saqhan-chat-form-search-files": LocalJSX.SSaqhanChatFormSearchFiles & JSXBase.HTMLAttributes<HTMLSSaqhanChatFormSearchFilesElement>;
            "s-saqhan-chat-user": LocalJSX.SSaqhanChatUser & JSXBase.HTMLAttributes<HTMLSSaqhanChatUserElement>;
            "s-saqhan-chat-users": LocalJSX.SSaqhanChatUsers & JSXBase.HTMLAttributes<HTMLSSaqhanChatUsersElement>;
            "s-saqhan-chat-users-wrapper": LocalJSX.SSaqhanChatUsersWrapper & JSXBase.HTMLAttributes<HTMLSSaqhanChatUsersWrapperElement>;
            "s-saqhan-chat-wrapper": LocalJSX.SSaqhanChatWrapper & JSXBase.HTMLAttributes<HTMLSSaqhanChatWrapperElement>;
            "user-profile": LocalJSX.UserProfile & JSXBase.HTMLAttributes<HTMLUserProfileElement>;
        }
    }
}
