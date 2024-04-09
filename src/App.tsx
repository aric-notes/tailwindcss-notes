import GridList from './components/grid-list';
import VarComp from './components/var-comp';

function App() {
  return (
    <div className="mx-auto mt-20 flex w-1/2 flex-col bg-gray-200 p-10">
      <GridList>
        <div className="grid-item">item1</div>
        <div className="grid-item">item1</div>
        <div className="grid-item">item1</div>
        <div className="grid-item">item1</div>
        <div className="grid-item">item1</div>
      </GridList>
      <div className="my-2 flex flex-col gap-1">
        <VarComp level="1" />
        <VarComp level="2" />
        <VarComp level="3" />
      </div>
    </div>
  );
}

export default App;
