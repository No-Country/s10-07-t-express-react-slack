import { IChannels } from "../../../interface/IChannels";
import { validationName } from "./items/name";


export const validateChannel = async (channel: IChannels) => {

  if (!channel.name) {
    throw new Error("Todos los campos son requeridos")
  }

  validationName(channel.name)

  return channel
}