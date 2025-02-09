"use client"; //client-side rendering
import { useAtom } from "jotai"; //import atom from jotai library. like importing useState
import { counterAtom } from "../store/counterAtom"; //import counter atom that i just made in store folder

//create function called counter that uses atom to store a number that we can increse or decrease by pressing a button
export default function Counter() {
  const [count, setCount] = useAtom(counterAtom);

  return (
    <div className="flex gap-4 items-center">
      <button
        className="btn btn-primary"
        onClick={() => setCount((c) => c - 1)}
      >
        -
      </button>{" "}
      {/*create decrement button*/}
      <span className="text-2xl">{count}</span>{" "}
      {/*displays the value of the counter*/}
      <button
        className="btn btn-primary"
        onClick={() => setCount((c) => c + 1)}
      >
        +
      </button>{" "}
      {/*create increment button*/}
    </div>
  );
}
