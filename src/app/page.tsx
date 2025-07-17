import { Client } from "./client";
import { testRx } from "./rx";
import { HydrationBoundary } from "@effect-rx/rx-react";
import { Registry, Hydration } from "@effect-rx/rx";

export default async function App() {
  const registry = Registry.make();
  await new Promise((resolve) => {
    registry.mount(testRx);
    registry.subscribe(testRx, (value) => {
      console.log("value", value);
      resolve(value);
    });
  });

  const state = Hydration.dehydrate(registry);
  console.dir(state, { depth: null });
  return (
    <div>
      <h1>SERVER!</h1>
      <HydrationBoundary state={state}>
        <Client />
      </HydrationBoundary>
    </div>
  );
}
