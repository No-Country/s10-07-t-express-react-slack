import { Request, Response } from "express";
import { IMessage } from "../../../../interface/IMessage";
import { MessageModel } from "../../models/Message";
import { io } from "../../index";

export const createMessage = async (req: Request, res: Response) => {


  // const { from, message } = req.body;
  const message = req.body as IMessage;

  try {


    const data = new MessageModel({
      nameWorkSpaceId: message.workSpaceId,
      message: message.message,
      userId: message.userId,
      channelsId: message.channelsId
      // from: message.from,

    });
    await data.save();
    // res.status(201).json(newMessage);

    if (data) {
      return res.status(201).json({
        message: "Se Creo con exito el mensaje",
        data: data
      })
    }
    io.emit('newMessage', data);
    // } catch (error) {
    //   res.status(500).json({ error: 'Error al guardar el mensaje' });
    // }
    // }

  } catch (error) {
    if (error instanceof Error)
      return res.status(400).json({ error: error.message })
  }
}

// Emitir el nuevo mensaje a los clientes conectados a través de Socket.io
//   const message = req.body as IMessage;

//   try {

//     // const validations = await validateChat(message)

//     const data = await MessageModel.create({
//       message: message.message,
//       from: message.from

//       // workSpaceId: message.workSpaceId,
//       // userId: message.userId
//     })

//     if (data) {
//       return res.status(201).json({
//         message: "Se Creo con exito el mensaje",
//         data: data
//       })
//     }

//   } catch (error) {
//     if (error instanceof Error)
//       return res.status(400).json({ error: error.message })
//   }
// }

// router.post('/', async (req: Request, res: Response) => {