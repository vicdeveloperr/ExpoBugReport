import { z } from "zod";

export const schema = z.object({
  body: z.object({
    video: z.object({}),
    movement: z.literal("allen iverson cross"),
  }),
});
