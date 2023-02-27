import { event } from "../utils";

export default event("ready", ({ client }) => {
    console.log(`${client.user!.tag} is now online! :D`)
})