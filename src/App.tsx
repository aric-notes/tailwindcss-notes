import GridList from './components/grid-list';

function App() {
  return (
    <div className="mx-auto mt-20 flex w-1/2 flex-col bg-slate-200 p-10">
      <GridList>
        <div className="grid-item">item1</div>
        <div className="grid-item">item1</div>
        <div className="grid-item">item1</div>
        <div className="grid-item">item1</div>
        <div className="grid-item">item1</div>
      </GridList>
    </div>
  );
}

export default App;
