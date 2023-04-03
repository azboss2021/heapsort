import React from 'react';

const Controls = ({ play }) => {
  return (
    <section className="mt-auto">
      <div className="flex flex-wrap justify-center items-center gap-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={play}
        >
          Play
        </button>
        <button
          className="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={play}
        >
          Pause
        </button>
        <div className="flex flex-col">
          <label htmlFor="delete-node">Delete Node</label>
          <input
            id="delete-node"
            type="number"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-24"
            placeholder="Node Value"
            onChange={(e) => handleDeleteNode(e)}
          ></input>
        </div>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={play}
        >
          Delete Node
        </button>
      </div>
    </section>
  );
};

export default Controls;
