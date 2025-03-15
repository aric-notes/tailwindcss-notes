import { FC } from 'react';

const Anonymous: FC = () => {
  return (
    <div className="layout-flex-scrollable debug-red h-150 p-5">
      <header className="h-10 bg-slate-200">HEADER 123</header>
      <div className="content is-flex-scrollable-y">
        <p>
          <img
            src="https://pic.rmb.bdstatic.com/7f7a8d7b247d3aa430010f10a5765239.jpeg"
            className="h-20"
          />
        </p>
      </div>
      <footer className="h-5 bg-amber-50">
        Copyright © 2021 Start-Auto. All rights reserved.
      </footer>
    </div>
  );
};

export default Anonymous;
