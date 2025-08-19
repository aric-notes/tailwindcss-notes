import LayoutFlexPage from './components/layout-flex-page.tsx';
import { tgv } from '@jswork/tgv-transformer';
import cx from 'classnames';

function App() {
  return (
    <div className="wkit-scrollbar-w-1 debug-blue h-screen overflow-x-auto border-2">
      <div className="mx-auto max-w-50 text-center lc-2">
        清晨醒来，打开窗帘，一抹慵懒的阳光照进来，暖暖的，柔柔的，时光瞬间变得温婉静美，打开音乐，沏一杯花茶，躺在床上，暖阳淼淼，茶香淡淡，音乐袅袅，闭上眼睛，嘴角轻轻上扬，算是对着光阴的镜子，和自己撒个娇。
      </div>
      <figure className="layout-aspect-view-[50] debug my-5">
        <img className="is-aspect-content" src="https://dummyimage.com/1200x400" />
      </figure>
      <figure className="layout-aspect-img-[10,1] debug my-5">
        <img src="https://dummyimage.com/1200x400" />
      </figure>
      <div className="test-padding debug text-base padding-[1,7]">
        <p>道可道，非常道；名可名，非常名。 无名，天地之始，有名，万物之母。</p>
        <p>故常无欲，以观其妙，常有欲，以观其徼。</p>
        <p>此两者，同出而异名，同谓之玄，玄之又玄，众妙之门。</p>
      </div>
      <fieldset className="layout-fieldset-divider border-gray-300 text-center">
        <legend className="px-4">OR</legend>
      </fieldset>
      <div>
        <h3 className="sm:text-2xl md:text-3xl lg:text-4xl">Just test responsive text size</h3>
        <div
          className={cx(
            'debug flex flex-wrap gap-4 *:size-20 *:bg-gray-200',
            tgv`sm:(text-xs, grid-cols-1) md:(text-2xl, grid-cols-2) lg:(text-3xl, grid-cols-3)`
          )}>
          <div className="item">item1</div>
          <div className="item2">item2</div>
          <div className="item3">item3</div>
          <div className="item4">item4</div>
          <div className="item5">item5</div>
          <div className="item6">item7</div>
          <div className="item7">item8</div>
          <div className="item8">item9</div>
        </div>
        <div className="blank-y-4"></div>
        <div className="layout-flex-list-[3,5,4] lg:layout-flex-list-[4,3,4] xl:layout-flex-list-[5,3,3] *:size-20 *:bg-gray-200">
          <div className="item">item1</div>
          <div className="item2">item2</div>
          <div className="item3">item3</div>
          <div className="item4">item4</div>
          <div className="item5">item5</div>
          <div className="item6">item7</div>
          <div className="item7">item8</div>
          <div className="item8">item9</div>
          <div className="item9">item10</div>
        </div>
        <div className="bg-gray-100 blank-y-4"></div>
        <div className="layout-float-list-[3,5,4] mx-auto w-200 *:h-20 *:bg-slate-200">
          <div className="item">item1</div>
          <div className="item2">item2</div>
          <div className="item3">item3</div>
          <div className="item4">item4</div>
          <div className="item5">item5</div>
          <div className="item6">item7</div>
          <div className="item7">item8</div>
          <div className="item8">item9</div>
          <div className="item9">item10</div>
        </div>
        <div className="bg-gray-100 blank-y-4"></div>
        <div className="list1 *:size-20 *:bg-gray-200">
          <div className="item">item1</div>
          <div className="item2">item2</div>
          <div className="item3">item3</div>
          <div className="item4">item4</div>
          <div className="item5">item5</div>
          <div className="item6">item7</div>
          <div className="item7">item8</div>
          <div className="item8">item9</div>
          <div className="item9">item10</div>
        </div>
      </div>
      <LayoutFlexPage />
    </div>
  );
}

export default App;
