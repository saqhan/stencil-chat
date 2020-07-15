import dayjs from "dayjs";

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
