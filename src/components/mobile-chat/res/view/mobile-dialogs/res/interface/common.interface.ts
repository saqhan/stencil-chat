
/**
 * Interface for array dialogs
 * */
export interface dialogs  {
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

/**
 * Interface for categories dialogs
 * */
export interface categories {
  name : string;
  id : string;
}
