import React from "react";

const FileExplorer = () => {
  return (
    <div className="file-explorer rounded-md rounded-t-none border border-gray-600 text-gray-200 divide-y divide-gray-600">
      <div className="flex justify-between px-4 py-2 hover:bg-gray-700">
        <div className="w-4/12 flex items-center">
          <a href="" className="hover:bg-gray-700 flex items-center">
            <svg
              aria-label="Directory"
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              class="fill-current"
            >
              <path d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3H7.5a.25.25 0 01-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75z"></path>
            </svg>
            <span className="flex ml-2">.github</span>
          </a>
        </div>
        <div className="w-6/12">
          swap to stable engines when preparing the release
        </div>
        <div className="w-2/12 text-right">2 days ago</div>
      </div>
      <div className="flex justify-between px-4 py-2  hover:bg-gray-700">
        <div className="w-4/12 flex items-center">
          <a href="" className=" flex items-center">
            <svg
              aria-label="Directory"
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              class="fill-current"
            >
              <path d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3H7.5a.25.25 0 01-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75z"></path>
            </svg>
            <span className="flex ml-2">integrations</span>
          </a>
        </div>
        <div className="w-6/12">Update vite to version 4.1.1</div>
        <div className="w-2/12 text-right">yesterday</div>
      </div>
      <div className="flex justify-between px-4 py-2  hover:bg-gray-700">
        <div className="w-4/12 flex items-center">
          <a href="" className="flex items-center">
            <svg
              aria-label="Directory"
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              class="fill-current"
            >
              <path d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3H7.5a.25.25 0 01-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75z"></path>
            </svg>
            <span className="flex ml-2">jest</span>
          </a>
        </div>
        <div className="w-6/12">
          Improve CSS output in tests to better reflect reality (#10454)
        </div>
        <div className="w-2/12 text-right">last year</div>
      </div>
      <div className="flex justify-between px-4 py-2  hover:bg-gray-700">
        <div className="w-4/12 flex items-center">
          <a href="" className="flex items-center">
            <svg
              aria-label="Directory"
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              class="fill-current"
            >
              <path d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3H7.5a.25.25 0 01-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75z"></path>
            </svg>
            <span className="flex ml-2">nesting</span>
          </a>
        </div>
        <div className="w-6/12">
          Ensure to transpile the PostCSS Nesting plugin (tailwindcss/nesting)
        </div>
        <div className="w-2/12 text-right">3 weeks ago</div>
      </div>
      <div className="flex justify-between px-4 py-2  hover:bg-gray-700">
        <div className="w-4/12 flex items-center">
          <a href="" className=" flex items-center">
            <svg
              aria-label="Directory"
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              class="fill-current"
            >
              <path d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3H7.5a.25.25 0 01-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75z"></path>
            </svg>
            <span className="flex ml-2">oxide</span>
          </a>
        </div>
        <div className="w-6/12">Always sort candidates (#10382)</div>
        <div className="w-2/12 text-right">2 weeks ago</div>
      </div>
      <div className="flex justify-between px-4 py-2  hover:bg-gray-700">
        <div className="w-4/12 flex items-center">
          <a href="" className="flex items-center">
            <svg
              aria-label="Directory"
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              class="fill-current"
            >
              <path d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3H7.5a.25.25 0 01-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75z"></path>
            </svg>
            <span className="flex ml-2">scripts</span>
          </a>
        </div>
        <div className="w-6/12">
          Performance improvements + memory leak fix (#3032)
        </div>
        <div className="w-2/12 text-right">3 days ago</div>
      </div>
    </div>
  );
};

export default FileExplorer;
