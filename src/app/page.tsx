import { Client } from "./client";
import { testRx } from "./rx";
import { Registry } from "@effect-rx/rx-react";
import { Hydration } from "@effect-rx/rx";
import * as ReactHydration from "@effect-rx/rx-react/ReactHydration";

export default async function App() {
  const registry = Registry.make();
  registry.mount(testRx);
  const state = Hydration.dehydrate(registry);
  console.dir(state, { depth: null });
  return (
    <div>
      <h1>SERVER!</h1>
      <ReactHydration.HydrationBoundary state={state}>
        <Client />
      </ReactHydration.HydrationBoundary>
    </div>
  );
}
