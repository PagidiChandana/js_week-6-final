import { useCounterStore } from "../stores/useCounterStore";

function Home() {
  // Extract state and actions from the Zustand store
  const counter = useCounterStore((state) => state.newCounter);
  const increment = useCounterStore((state) => state.incrementCounter);
  const decrement = useCounterStore((state) => state.decrementCounter);
  const reset = useCounterStore((state) => state.resetCounter);

  console.log("Home rendered");

  return (
    <div className="p-10 space-y-6 text-slate-100">
      {[1, 2, 3, 4].map((_, index) => (
        <div key={index} className="bg-slate-800 p-6 shadow-2xl shadow-slate-900 rounded-3xl border border-slate-700">
          <h2 className="text-2xl font-semibold">Counter {index + 1}: {counter}</h2>

          <div className="flex flex-wrap gap-4 mt-5">
            <button onClick={increment} className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-3 rounded-xl font-medium transition">
              +
            </button>
            <button onClick={decrement} className="bg-rose-500 hover:bg-rose-600 text-white px-5 py-3 rounded-xl font-medium transition">
              -
            </button>
            <button onClick={reset} className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-5 py-3 rounded-xl font-medium transition">
              reset
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;