import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-4 py-3 flex items-center justify-between">
      <div className="flex items-center space-x-4 ">
        <a href="/" className="text-white hover:text-gray-400">
          <svg
            height="32"
            aria-hidden="true"
            viewBox="0 0 16 16"
            data-view-component="true"
            className="w-8 fill-current"
          >
            <path
              fill-rule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
            ></path>
          </svg>
        </a>
        <div className="relative">
          <input
            type="text"
            className="rounded bg-gray-700 placeholder-white w-72 px-3 py-1"
            placeholder="Search or Jump to..."
          />
          <div className="absolute top-0 right-0 flex items-center h-full">
            <div className="border border-gray-600 rounded text-xs text-gray-400 px-2 mr-2">
              /
            </div>
          </div>
        </div>
        <ul className="flex items-center font-semibold space-x-4">
          <li>
            <a href="#" className="hover:text-gray-400">
              Pull Requests
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Issues
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Marketplace
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Explore
            </a>
          </li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-white">
        <a href="#" className="relative hover:text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
            />
          </svg>
          <div className="bg-blue-600 rounded-full w-2 h-2 absolute top-0 right-0"></div>
        </a>
        <a href="#" className="flex items-center hover:text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6v12m6-6H6"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-3 h-3 ml-1 "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </a>
        <a href="#" className="relative flex items-center hover:text-gray-400">
          <img
            src="https://avatars.githubusercontent.com/u/15327665?s=40&amp;v=4"
            alt="@cyrillekuete"
            size="20"
            className="rounded-full w-6 h-6"
            data-view-component="true"
            class="avatar avatar-small circle"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-3 h-3 ml-1 "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </a>
      </div>
    </nav>
    
  );
};

export default Navbar;
