import { useEffect, useState } from 'react';

function App() {
  const [grid, setGrid] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    setGrid([[0]]);
  }, []);

  return (
    <main className="flex">
      <section className="h-screen p-2 w-64 overflow-y-scroll">
        <label htmlFor="insert-node">Node {1}</label>
        <input
          id="insert-node border-2"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Node Value"
        ></input>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Insert Node
        </button>
      </section>
      <section className="">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex}>
            {row.map((node, nodeIndex) => (
              <div
                key={nodeIndex}
                className="w-20 h-20 bg-blue-500 border-2 rounded-full"
              ></div>
            ))}
          </div>
        ))}
      </section>
    </main>
  );
}

export default App;
