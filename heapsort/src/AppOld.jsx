import { useEffect, useState } from 'react';

function App() {
  const [grid, setGrid] = useState([[0]]);
  const [list, setList] = useState([0]);
  const [listLength, setListLength] = useState(1);

  useEffect(() => {
    if (listLength <= 1) return;
    createGridStructure();
  }, [listLength]);

  const createGridStructure = () => {
    let tempGrid = new Array(
      Math.floor(Math.log(list.length) / Math.log(2)) + 1
    );
    for (let i = 0; i < tempGrid.length; i++) {
      tempGrid[i] = new Array(
        2 ** (Math.floor(Math.log(list.length) / Math.log(2)) + 1) - 1
      );
    }
    for (let i = 0; i < tempGrid.length; i++) {
      for (let j = 0; j < tempGrid[0].length; j++) {
        tempGrid[i][j] = null;
      }
    }
    // console.log(tempGrid);
    updateGrid(tempGrid);
  };

  const getGridInterval = (level) => {
    let gridCols = grid[0].length;
    for (let i = 0; i < level; i++) {
      gridCols /= 2;
    }
    return Math.ceil(gridCols);
  };

  const updateGrid = (G) => {
    // console.log('G:' + G.length);
    // if (G.length <= 1) return;
    let curr = 0;
    for (let i = 0; i < G.length; i++) {
      const valuesOnLevel = 2 ** i;
      const interval = getGridInterval(i);
      // console.log('values: ' + valuesOnLevel + ' interval: ' + interval);
      for (let j = 1; j <= valuesOnLevel; j++) {
        // tempGrid[i][interval * (j + 1) - 1] = list[curr];
        G[i][interval * j] = list[curr];
        curr++;
      }
    }
    setGrid([...[...G]]);
    console.log(grid);
  };

  const addNode = () => {
    // if ((Math.log(list.length + 1) / Math.log(2)) % 1 == 0) {
    //   setListLength((curr) => curr + 1);
    //   setList((curr) => [...curr, 0]);
    //   return;
    // }
    setListLength((curr) => curr + 1);
    setList((curr) => [...curr, 0]);
  };

  const handleNodeValue = (value, index) => {
    const tempList = [...list];
    tempList[index] = value;
    setList([...tempList]);
    const tempGrid = [...[...grid]];
    updateGrid(tempGrid);
  };

  return (
    <main className="flex">
      <section className="h-screen p-2 w-64 overflow-y-scroll flex flex-col gap-4">
        {list.map((node, index) => (
          <div key={index} className="">
            <label htmlFor={'insert-node-' + index}>Node {index + 1}</label>
            <input
              id={'insert-node-' + index}
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Node Value"
              onChange={(e) => handleNodeValue(e.target.value, index)}
            ></input>
          </div>
        ))}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={addNode}
        >
          Insert Node
        </button>
      </section>
      <section className="">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="flex">
            {row.map((node, nodeIndex) =>
              node != null ? (
                <div
                  key={nodeIndex}
                  className=" bg-blue-500 border-2 rounded-full text-white flex items-center justify-center font-bold"
                >
                  {node}
                </div>
              ) : (
                <div key={nodeIndex} className=""></div>
              )
            )}
          </div>
        ))}
      </section>
    </main>
  );
}

export default App;
