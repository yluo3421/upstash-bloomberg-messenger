import Pusher from "pusher";
import ClientPusher from "pusher-js";

export const serverPusher = new Pusher({
    appId: "1522335",
    key: "cedb37f9924f2c6d1a7f",
    secret: "8eb2a3ae7efebacc7cf8",
    cluster: "us2",
    useTLS: true
})

export const clientPusher = new ClientPusher('cedb37f9924f2c6d1a7f', {
    cluster: 'us2',
})