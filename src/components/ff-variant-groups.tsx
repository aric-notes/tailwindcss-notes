/**
 * @Author: aric 1290657123@qq.com
 * @Date: 2024-10-10 16:46:04
 * @LastEditors: aric 1290657123@qq.com
 * @LastEditTime: 2024-11-02 08:59:01
 */
import { tgv } from '@jswork/tgv-transformer';

const FFVariantGroups = () => {
  // const tgvCls = tgv`absolute desktop:(lh-5.5 right-15 bottom-3) mobile:(lh-3 right-5.5 bottom-1)`;
  console.log(
    tgv`absolute desktop:(lh-5.5,right-15,bottom-3) mobile:(lh-3,right-5.5,bottom-1)`
  );
  return (
    <>
      <div className="flex sm:debug-red md:debug-blue sm:bg-red-200 md:bg-blue-200">
        <h1>ReportDetail1</h1>
        <h1>ReportDetail2</h1>
      </div>
      <hr />
      <div
        className={tgv`sm:(debug-red bg-red-200) md:(debug-blue bg-blue-200) flex`}>
        <h1>ReportDetail34</h1>
        <h1>ReportDetail56</h1>
      </div>
      <h1>Tgv error-1</h1>
      <div
        className={tgv`desktop:(lh-5.5,right-15,bottom-3) mobile:(lh-3,right-5.5,bottom-1) absolute`}>
        TgvError-with-comma
      </div>
      <hr />
    </>
  );
};

export default FFVariantGroups;
