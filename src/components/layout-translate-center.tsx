/**
 * @email: aric.zheng@alo7.com
 * @description: A React page component.
 * @created_at: 2024-04-28 21:08:01
 */

export default () => {
  return (
    <>
      <div className="debug-red relative block size-80">
        <h1>Dialog center</h1>
        <div className="layout-translate-center absolute size-16 rounded-xl bg-green-400">
          center
        </div>
      </div>
      <div className="debug-red relative block size-80">
        <h1>Layout Translate Center</h1>
        <div className="layout-translate-center-xy absolute size-16 rounded-xl bg-amber-400">
          xy
        </div>
        <div className="layout-translate-center-y absolute size-16 rounded-full bg-blue-400">
          y
        </div>
        <div className="layout-translate-center-x absolute top-0 size-16 rounded-3xl bg-red-400">
          x
        </div>
      </div>
    </>
  );
};
