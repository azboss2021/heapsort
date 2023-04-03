const List = ({ list, addNode, handleNodeChange, submitTree }) => {
  return (
    <section className="h-screen p-2 w-1/6 overflow-y-scroll flex flex-col gap-4">
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        onClick={submitTree}
      >
        Confirm Tree
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        onClick={addNode}
      >
        Insert Node
      </button>
      {list.map((node, index) => (
        <div key={index} className="">
          <label htmlFor={'insert-node-' + index}>Node {index + 1}</label>
          <input
            id={'insert-node-' + index}
            type="number"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Node Value"
            onChange={(e) => handleNodeChange(e, index)}
          ></input>
        </div>
      ))}
    </section>
  );
};

export default List;
