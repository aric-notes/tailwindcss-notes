import FfDemo from './components/ff-demo.tsx';
import WithPropsDemo from './components/with-props-demo.tsx';
import FFVariantGroups from './components/ff-variant-groups.tsx';

function App() {
  return (
    <div className="bg-gray-200 p-10">
      <div className="debug-red y-2">
        <WithPropsDemo title="With Props Dem1o" />
        <WithPropsDemo
          title="With Props Dem2o"
          description="This is a description 12345"
        />
      </div>
      <FfDemo />
      <div className="my-5">
        <FFVariantGroups />
      </div>
    </div>
  );
}

export default App;
