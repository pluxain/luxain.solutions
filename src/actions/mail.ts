import { defineAction } from "astro:actions";
import { z } from "astro:schema";

export const mail = {
  send: defineAction({
    accept: "form",
    input: z.object({
      from: z.string().email(),
      message: z.string(),
      subject: z.string(),
    }),
    handler: async ({ from, message, subject }) => {
      return { from, message, subject };
    },
  }),
};
