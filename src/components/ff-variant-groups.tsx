/**
 * @Author: aric 1290657123@qq.com
 * @Date: 2024-10-10 16:46:04
 * @LastEditors: aric 1290657123@qq.com
 * @LastEditTime: 2024-10-10 17:41:49
 */
import createTransformer from 'tailwind-group-variant';

const tgv = createTransformer();

const FFVariantGroups = () => {
  return (
    <>
      <div className="flex sm:debug-red md:debug-blue sm:bg-red-200 md:bg-blue-200">
        <h1>ReportDetail1</h1>
        <h1>ReportDetail2</h1>
      </div>
      <hr />
      <div
        className={tgv(
          'sm:(debug-red,bg-red-200) md:(debug-blue,bg-blue-200) flex'
        )}>
        <h1>ReportDetail34</h1>
        <h1>ReportDetail56</h1>
      </div>
    </>
  );
};

export default FFVariantGroups;
