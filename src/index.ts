import { Instance } from "./structures/instance";

const { client } = new Instance({
  username: "bot1",
  host: "localhost",
});

client.on("login", () => {
  client.chat("helo");
});

const pog = async () => {
  for (let i = 0; i < 50; i++) {
    const { client } = new Instance({
      username: `bot${i}`,
      host: "localhost",
    });

    client.on("login", () => {
      client.chat("helo-" + i);
    });

    await new Promise<void>((resolve) =>
      setTimeout(() => {
        resolve();
      }, 300)
    );
  }
};

pog();
