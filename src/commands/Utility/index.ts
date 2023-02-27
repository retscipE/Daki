import { CommandCategory } from "tscmdhandler";

import ping from './ping'

const Utility = new CommandCategory({
    name: "Utility",
    description: "Commands with utility functionality."
})

Utility
    .addCommand(ping)

export default Utility