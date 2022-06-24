import { Bot, BotOptions, createBot } from "mineflayer";

export class Instance {
  public client: Bot;

  constructor(options: BotOptions) {
    this.client = createBot(options);
  }
}
