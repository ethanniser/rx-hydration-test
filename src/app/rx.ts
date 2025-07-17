import { Rx } from "@effect-rx/rx-react";
import { Effect, Schema } from "effect";

export const countRx = Rx.make(0);

export const testRx = Rx.make(
  Effect.gen(function* () {
    yield* Effect.log("starting test");
    yield* Effect.sleep("2 seconds");
    yield* Effect.log("done");
    return {
      test: Date.now(),
    };
  })
).pipe(Rx.serializable(Schema.Number));
