import GridList from './components/grid-list';
import VarComp from './components/var-comp';
import ChildVariant from './components/child-variant';
import TwSubChild from './components/tw-sub-child';
import FlexGap from './components/flex-gap';
import LayoutTrbla from './components/layout-flex.tsx';
import LayoutAbsCenter from './components/layout-abs-center.tsx';
import LayoutTranslateCenter from './components/layout-trans-center.tsx';
import ShortcutsCorner from './components/shortcuts-corner.tsx';
import LhComponents from './components/lh-components.tsx';
import Blanks from './components/blanks.tsx';
import FullSpacings from './components/full-spacings.tsx';
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
      <FFVariantGroups />
      <h1 className="text-2xl">Hello World</h1>
      <p className="z1">
        App<sup className="f8 z2">1.0.0</sup>
      </p>
      <GridList>
        <div className="grid-item">item1</div>
        <div className="grid-item">item1</div>
        <div className="grid-item">item1</div>
        <div className="grid-item">item1</div>
        <div className="grid-item">item1</div>
      </GridList>
      <div className="my-2 flex flex-col gap-1 border border-solid border-green-600 p-2">
        <VarComp level="1" />
        <VarComp level="2" />
        <VarComp level="3" />
      </div>
      <ChildVariant />
      <TwSubChild />

      <div className="mb_ border border-solid border-slate-500 *:mb-2">
        <button className="btn">Button</button>
        <button className="btn">Button</button>
        <button className="btn">Button</button>
        <button className="btn">Button</button>
      </div>
      <hr />
      <FlexGap />
      <hr />
      <LayoutTrbla />
      <hr />
      <LayoutAbsCenter />
      <hr />
      <LayoutTranslateCenter />
      <hr />
      <ShortcutsCorner />
      <hr />
      <LhComponents />
      <hr />
      <Blanks />
      <hr />
      <FullSpacings />
    </div>
  );
}

export default App;
