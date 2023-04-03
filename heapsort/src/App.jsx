import { useEffect, useState } from 'react';
import Grid from './components/Grid';
import List from './components/List';
import Controls from './components/Controls';
import Lines from './components/Lines';

function App() {
  const [grid, setGrid] = useState([[0]]);
  const [list, setList] = useState([0]);
  const [width, setWidth] = useState(100);
  const [buildingTree, setBuildingTree] = useState(1);
  const [lines, setLines] = useState([]);

  useEffect(() => {
    updateTree();
  }, [list]);

  const updateTree = () => {
    let tempGrid = new Array(
      Math.floor(Math.log(list.length) / Math.log(2)) + 1
    );
    for (let i = 0; i < tempGrid.length; i++) {
      tempGrid[i] = new Array(2 ** i);
    }

    if (100 / tempGrid[tempGrid.length - 1].length > 10) setWidth(10);
    else setWidth(100 / tempGrid[tempGrid.length - 1].length);

    let i = 0;
    while (i < list.length) {
      const level = Math.floor(Math.log(i + 1) / Math.log(2));
      const valuesOnLevel = 2 ** level;
      for (let j = 0; j < valuesOnLevel; j++) {
        if (i >= list.length) {
          tempGrid[level][j] = null;
        }
        tempGrid[level][j] = list[i];
        i++;
      }
    }
    setGrid(tempGrid.slice().slice());
  };

  const addNode = () => {
    setList((curr) => [...curr, 0]);
    getNodeCoords();
  };

  const handleNodeChange = (e, index) => {
    let tempList = list.slice();
    tempList[index] = e.target.value;
    setList([...tempList]);
  };

  const submitTree = () => {
    setBuildingTree((curr) => !curr);
  };

  const getNodeCoords = () => {
    const nodes = document.querySelectorAll('.node');
    let tempLines = [];
    for (let i = 0; i < nodes.length; i++) {
      const rect = nodes[i].getBoundingClientRect();
      tempLines.push([rect.top, rect.left]);
    }
    setLines([...tempLines]);
  };

  return buildingTree == 1 ? (
    <main className="flex">
      <List
        list={list}
        addNode={addNode}
        handleNodeChange={handleNodeChange}
        submitTree={submitTree}
      />
      <Grid grid={grid} width={width} />
      <Lines lines={lines} />
    </main>
  ) : (
    <main className="flex flex-col h-screen p-8">
      <Grid grid={grid} width={width} />
      <Controls />
      <Lines lines={lines} />
    </main>
  );
}

export default App;
