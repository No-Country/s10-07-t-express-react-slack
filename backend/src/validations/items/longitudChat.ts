import { IMessage } from "../../../../interface/IMessage";
import { longitudMessage } from "../../helper/regex"

export const validateChat = (chatMessage: IMessage): IMessage => {

  if (!chatMessage.message || !chatMessage.from) {
    throw new Error("Mensaje no válido Todos los campos son requeridos");
  }

  // if (!longitudMessage.test(chatMessage.message)) {
  //   throw new Error("Mensaje válido");
  //   // } else {
  //   //   throw new Error("Mensaje no válido");
  // }
  return chatMessage;
}