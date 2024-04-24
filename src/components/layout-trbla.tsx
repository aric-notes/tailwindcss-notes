/**
 * @email: aric.zheng@alo7.com
 * @description: A React page component.
 * @created_at: 2024-04-24 09:46:53
 */

const Demo = () => {
  return (
    <div className="debug-red y-2">
      <h1> layout: sa </h1>
      <div className="layout-trbla-sa *:p-2">
        <div className="bg-red-200">LEFT</div>
        <div className="bg-green-500">RIGHT</div>
      </div>
      <div className="layout-trbla-sae *:p-4">
        <div className="bg-red-200">LEFT</div>
        <div className="bg-green-500">MIDDLE</div>
        <div className="bg-blue-200">RIGHT</div>
      </div>
    </div>
  );
};

export default Demo;
