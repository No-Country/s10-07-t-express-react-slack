import { IChannels } from "../../../interface/IChannels";
import { IWorkSpace } from "../../../interface/IWorkSpace";
// import { validationEmail } from "./items/gmail";
import { validationName } from "./items/name";




export const validateChannel = async (channel: IChannels) => {

  if (!channel.channels) {
    throw new Error("Todos los campos son requeridos")
  }


  validationName(channel.channels)

  // validationEmail(workSpace.emailWorkSpace)



  return channel
}