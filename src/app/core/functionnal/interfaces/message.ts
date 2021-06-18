import {Entity} from "./entity";

export interface Message extends Entity {
  text:string;
  author: {
    name: string;
  }
}
