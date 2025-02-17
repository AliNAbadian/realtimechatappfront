"use client";
import Button from "@/components/Button";
import useCounterStore from "@/store/store";
import React from "react";

const page = () => {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  return (
    <div>
      <Button label="Hello" onClick={() => console.log("helloasda")} />
      {count}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default page;
