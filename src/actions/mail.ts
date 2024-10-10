import { ActionError, defineAction } from "astro:actions";
import { z } from "astro:schema";
import { ConfigurationError } from "@libs/errors/ConfigurationError";
import { sendMail } from "@libs/mail";

export const mail = {
  send: defineAction({
    accept: "form",
    input: z.object({
      from: z.string().email(),
      message: z.string(),
      subject: z.string(),
    }),
    handler: async (input) => {
      try {
        const response = await sendMail(input);
        // TODO: log response
        return { code: 250, message: response.response };
      } catch (err) {
        if (err instanceof ConfigurationError) {
          throw new ActionError({
            code: "INTERNAL_SERVER_ERROR",
            message: "could not send the email",
          });
        }
        // TODO: log error
        throw err;
      }
    },
  }),
};
