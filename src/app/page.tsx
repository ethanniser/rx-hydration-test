import { Client } from "./client";
import { testRx } from "./rx";
import { HydrationBoundary, Registry } from "@effect-rx/rx-react";

export default function App() {
  const registry = Registry.make();
  registry.get(testRx);

  return (
    <div>
      <h1>SERVER!</h1>
      <HydrationBoundary registry={registry}>
        <Client />
      </HydrationBoundary>
    </div>
  );
}
