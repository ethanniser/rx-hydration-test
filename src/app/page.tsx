import { Client } from "./client";
import { testRx } from "./rx";
import { HydrationBoundary } from "@effect-rx/rx-react";
import { Registry } from "@effect-rx/rx";

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
