import { Result, Rx } from "@effect-rx/rx";
import { Effect, Schema } from "effect";

export const countRx = Rx.make(0).pipe(Rx.withLabel("countRx"));

export const testRx = Rx.make(
  Effect.gen(function* () {
    yield* Effect.log("starting test");
    yield* Effect.sleep("2 seconds");
    yield* Effect.log("done");
    return {
      test: Date.now(),
    };
  }),
).pipe(
  Rx.serializable({
    key: "testRx",
    schema: Result.Schema({
      success: Schema.Struct({
        test: Schema.Number,
      }),
    }),
  }),
  Rx.withLabel("testRx"),
);
