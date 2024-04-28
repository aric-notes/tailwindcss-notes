/**
 * @email: aric.zheng@alo7.com
 * @description: A React page component.
 * @created_at: 2024-04-28 20:23:27
 */

export default () => {
  return (
    <div className="debug-red block">
      <h1 className="bg-amber-300 p-4">Horizontal layout</h1>
      <h2>Layout: sa</h2>
      <div className="layout-trbla-sa x">
        <div className="left bg-amber-50 p-1">Left item</div>
        <div className="right bg-sky-100 p-1">Right item</div>
      </div>
      <h2>Layout: sae</h2>
      <div className="layout-trbla-sae x">
        <div className="left bg-amber-50 p-1">Left item</div>
        <div className="center bg-sky-100 p-1">Center item</div>
        <div className="right bg-amber-50 p-1">Right item</div>
      </div>
      <h2>Layout: ae</h2>

      <div className="layout-trbla-ae x">
        <div className="top bg-amber-50 p-1">left item</div>
        <div className="bottom bg-sky-100 p-1">right auto item</div>
      </div>

      <h1 className="bg-amber-300 p-4">Vertical layout</h1>
      <h2>Layout: sa</h2>
      <div className="layout-trbla-sa y h-80">
        <div className="top bg-amber-50 p-1">Top item</div>
        <div className="bottom bg-sky-100 p-1">Bottom item</div>
      </div>
      <h2>Layout: sae</h2>
      <div className="layout-trbla-sae y h-80">
        <div className="top bg-amber-50 p-1">Top item</div>
        <div className="center bg-sky-100 p-1">Center item</div>
        <div className="bottom bg-amber-50 p-1">Bottom item</div>
      </div>
      <h2>Layout: ae</h2>
      <div className="layout-trbla-ae y h-80">
        <div className="left bg-amber-50 p-1">Left item</div>
        <div className="right bg-sky-100 p-1">Right auto item</div>
      </div>
    </div>
  );
};
