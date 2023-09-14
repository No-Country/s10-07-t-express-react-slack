"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMessage = void 0;
const Message_1 = require("../../models/Message");
const Channels_1 = require("../../models/Channels");
const createMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const { from, message } = req.body;
    const { message, workSpaceId, channelsId, userId } = req.body;
    try {
        const data = new Message_1.MessageModel({
            workSpaceId,
            message,
            userId,
            channelsId,
            // from: message.from,
        });
        yield data.save();
        console.log(data);
        const channel = yield Channels_1.ChannelsModel.findById({ _id: channelsId });
        if (channel === null || channel === void 0 ? void 0 : channel.messages) {
            console.log([...channel.messages, data._id]);
            yield Channels_1.ChannelsModel.updateOne({ _id: channelsId }, { messages: [...channel.messages, data._id] });
        }
        // res.status(201).json(newMessage);
        // io.on("connection", (socket) => {
        //   console.log("Connected with socket");
        //   socket.on(`${workSpaceId}/${channelsId}`, (data: any) => {
        //     socket.broadcast.emit(`${workSpaceId}/${channelsId}`, data)
        //   })
        // });
        if (data) {
            return res.status(201).json({
                message: 'Se Creo con exito el mensaje',
                data: data,
            });
        }
        // } catch (error) {
        //   res.status(500).json({ error: 'Error al guardar el mensaje' });
        // }
        // }
    }
    catch (error) {
        if (error instanceof Error)
            return res.status(400).json({ error: error.message });
    }
});
exports.createMessage = createMessage;
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
