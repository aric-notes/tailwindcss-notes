import GridList from './components/grid-list';

function App() {
  return (
    <div className="mx-auto mt-20 flex w-1/2 flex-col bg-slate-200 p-10">
      <GridList>
        <div className="border border-solid border-slate-500 bg-gray-200 p-2">
          item1
        </div>
        <div className="border border-solid border-slate-500 bg-gray-200 p-2">
          item1
        </div>
        <div className="border border-solid border-slate-500 bg-gray-200 p-2">
          item1
        </div>
        <div className="border border-solid border-slate-500 bg-gray-200 p-2">
          item1
        </div>
        <div className="border border-solid border-slate-500 bg-gray-200 p-2">
          item1
        </div>
      </GridList>
    </div>
  );
}

export default App;
