import dayjs from "dayjs";
import {
  ChatCategoryInterface,
  ChatDialogInterface,
  ChatMessage
} from "../index";

export function format(first: string, middle: string, last: string): string {
  return (
    (first || '') +
    (middle ? ` ${middle}` : '') +
    (last ? ` ${last}` : '')
  );
}

export class Timer {
  /**
   * started time
   */
  private startedTime: Date;

  /**
   * Current work interval id
   */
  private intervalId;

  /**
   * Passed callback func
   */
  private callbackFunction: (time: string, startedTime: Date) => void;

  /**
   * Start timer
   */
  public start(cb: (time: string, startedTime: Date) => void) {
    this.startedTime = new Date();
    this.callbackFunction = cb;
    this.intervalId = setInterval(() => {
      const timeInMinutes = dayjs(
        Date.now() - this.startedTime.getTime()
      ).format("mm:ss");
      cb(timeInMinutes, this.startedTime);
    }, 0);
  }

  /**
   * Reset timer
   */
  public reset() {
    this.start(this.callbackFunction);
  }

  /**
   * delete timer
   */
  public delete() {
    clearInterval(this.intervalId);
  }
}

/**
 * filter dialogs by category id
 * */
export function filterDialogsByCategory (
  category: ChatCategoryInterface,
  dialogs:  ChatDialogInterface[]
): ChatDialogInterface[] {
  return category.id !== "all"
    ? dialogs.filter((dialog) => dialog.category === category.id)
    : dialogs;
}

/**
 * filter message by search value
 * */
export function filterMessageBySearchValue (
  value: string,
  message:  ChatMessage[]
): ChatMessage[] {
  return value //(value !== "" && value !== null)
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
  return value !== "" && value !== null
      ? dialogs.filter((item) => {
        return typeof item.name === "string"
          ? item.name.toLowerCase().includes(value.toLowerCase())
          : false;
      })
      : dialogs;
}
