"use client";
import { useRx, useRxValue } from "@effect-rx/rx-react";
import { countRx, testRx } from "./rx";

export function Client() {
  const [count, setCount] = useRx(countRx);
  const test = useRxValue(testRx);

  return (
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <pre>{JSON.stringify(test, null, 2)}</pre>
    </div>
  );
}
