const Grid = ({ grid, width }) => {
  let elementInd = 0;
  return (
    <section className="w-full flex flex-col max-h-screen justify-center gap-10">
      {grid.map((row, rowIndex) => {
        return (
          <div key={rowIndex} className="w-full flex justify-evenly gap-1">
            {row.map((node, nodeIndex) => {
              elementInd++;
              return node != null ? (
                <div
                  key={nodeIndex}
                  id={'node-' + elementInd}
                  style={{ width: width + '%' }}
                  className="node py-8 bg-blue-500 border-2 rounded-full text-white flex items-center justify-center font-bold text-lg"
                >
                  {node}
                </div>
              ) : (
                <div
                  key={nodeIndex}
                  style={{ width: width + '%' }}
                  className="py-8"
                ></div>
              );
            })}
          </div>
        );
      })}
    </section>
  );
};

export default Grid;
