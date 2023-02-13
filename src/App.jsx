import "./App.css";

function App() {
  return (
    <div className="App">
      <div className=" text-gray-900 text-sm">
        <nav className="bg-gray-900 text-white px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <a href="#" className="text-white hover:text-gray-400">
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                data-view-component="true"
                class="w-8 fill-current"
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
                className="rounded bg-gray-700  placeholder-white w-72 px-3 py-1"
                placeholder="Search or jump to... "
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
          <div className="flex items-center text-white ">
            <a href="#" className="relative hover:text-gray-400">
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                data-view-component="true"
                class="relative w-5 fill-current"
              >
                <path d="M8 16a2 2 0 001.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 008 16z"></path>
                <path
                  fill-rule="evenodd"
                  d="M8 1.5A3.5 3.5 0 004.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.018.018 0 00-.003.01l.001.006c0 .002.002.004.004.006a.017.017 0 00.006.004l.007.001h10.964l.007-.001a.016.016 0 00.006-.004.016.016 0 00.004-.006l.001-.007a.017.017 0 00-.003-.01l-1.703-2.554a1.75 1.75 0 01-.294-.97V5A3.5 3.5 0 008 1.5zM3 5a5 5 0 0110 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.518 1.518 0 0113.482 13H2.518a1.518 1.518 0 01-1.263-2.36l1.703-2.554A.25.25 0 003 7.947V5z"
                ></path>
              </svg>
              <div className="bg-blue-600 rounded-full w-2 h-2 absolute top-0 right-0"></div>
            </a>
            <a href="#" className="ml-2 hover:text-gray-400 flex items-center">
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                class="fill-current w-4"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.75 2a.75.75 0 01.75.75V7h4.25a.75.75 0 110 1.5H8.5v4.25a.75.75 0 11-1.5 0V8.5H2.75a.75.75 0 010-1.5H7V2.75A.75.75 0 017.75 2z"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              className="ml-1 mr-2 hover:text-gray-400 flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4 fill-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </a>
            <a href="#" className="ml-1 hover:text-gray-400 flex items-center">
              <img
                src="https://avatars.githubusercontent.com/u/15327665?s=40&amp;v=4"
                alt="@cyrillekuete"
                size="20"
                data-view-component="true"
                class="rounded-full w-6 h-6"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4 fill-current"
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

        {/* REPO STATS  STARTS HERE*/}
        <div className="repo-stats flex items-center justify-between px-8 py-4">
          <div className="flex">
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              data-view-component="true"
              class="w-4 fill-current text-gray-600"
            >
              <path
                fill-rule="evenodd"
                d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
              ></path>
            </svg>
            <div className="flex items-center text-xl ml-2">
              <a href="#" className="text-blue-600 hover:underline">
                tailwind
              </a>
              <span className="space-x-1">/</span>
              <a
                href="#"
                className="text-blue-600 font-semibold hover:underline"
              >
                tailwind
              </a>
              <span className="ml-2 rounded-full border text-xs px-2 py-2">
                Public
              </span>
            </div>
          </div>
          <div className="flex space-x-2">
            <div className="flex text-xs">
              <button className="border border-gray-300 rounded rounded-r-none px-3 py-2 flex items-center space-x-1">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  data-view-component="true"
                  class="w-4 h-4 fill-current"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"
                  ></path>
                </svg>
                <span>Watch</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4 fill-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>

              <a
                href="#"
                className="border border-gray-300 rounded rounded-l-none border-l-0 px-3 py-2 "
              >
                <span className="bg-gray-200 font-semibold rounded-full border text-xs px-2">
                  430
                </span>
              </a>
            </div>
            <div className="flex text-xs">
              <button className="border border-gray-300 rounded rounded-r-none px-3 py-1 flex items-center space-x-1">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  data-view-component="true"
                  class="fill-current w-4 h-4 mr-2"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                  ></path>
                </svg>
                <span>Star</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4 fill-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>

              <a
                href="#"
                className="border border-gray-300 rounded rounded-l-none border-l-0 px-3 py-2 "
              >
                <span className="bg-gray-200 font-semibold rounded-full border text-xs px-2">
                  120
                </span>
              </a>
            </div>
            <div className="flex text-xs">
              <button className="border border-gray-300 rounded rounded-r-none px-3 py-1 flex items-center space-x-1">
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  class="w-4 h-4 fill-current"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  ></path>
                </svg>
                <span>Fork</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4 fill-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>

              <a
                href="#"
                className="border border-gray-400 rounded rounded-l-none border-l-0 px-3 py-2 "
              >
                <span className="bg-gray-200 font-semibold rounded-full border text-xs px-2">
                  120
                </span>
              </a>
            </div>
          </div>
        </div>
        {/* REPO STATS  ENDS HERE*/}

        {/* REPO NAV STARTS HERE*/}
        <ul className="repo nav border-b border-gray-300 flex items-center px-8 mt-4">
          <li className="font-semibold ">
            <a
              href="#"
              className="flex items-center border-b-2 border-red-500 px-4 pb-3 "
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                data-view-component="true"
                class="w-4 h-4 fill-current"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.72 3.22a.75.75 0 011.06 1.06L2.06 8l3.72 3.72a.75.75 0 11-1.06 1.06L.47 8.53a.75.75 0 010-1.06l4.25-4.25zm6.56 0a.75.75 0 10-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 101.06 1.06l4.25-4.25a.75.75 0 000-1.06l-4.25-4.25z"
                ></path>
              </svg>
              <span className="ml-2">Code</span>
            </a>
          </li>
          <li className="font-semibold ">
            <a
              href="#"
              className="flex items-center border-b-2 border-transparent hover:border-gray-300 transition ease-in-out duration-150 px-4 pb-3 "
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                data-view-component="true"
                class="w-4 h-4 fill-current"
              >
                <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                <path
                  fill-rule="evenodd"
                  d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"
                ></path>
              </svg>
              <span className="ml-2">Issues</span>
              <span className="ml-2 rounded-full bg-gray-200 px-2 ">3</span>
            </a>
          </li>
          <li className="font-semibold ">
            <a
              href="#"
              className="flex items-center border-b-2 border-transparent hover:border-gray-300 transition ease-in-out duration-150 px-4 pb-3"
            >
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                class="w-4 h-4 fill-current"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"
                ></path>
              </svg>
              <span className="ml-2">Pull Requests</span>
              <span className="ml-2 rounded-full bg-gray-200 px-2 ">7</span>
            </a>
          </li>
          <li className="font-semibold ">
            <a
              href="#"
              className="flex items-center border-b-2 border-transparent hover:border-gray-300 transition ease-in-out duration-150 px-4 pb-3"
            >
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                class="w-4 h-4 fill-current"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.5 2.75a.25.25 0 01.25-.25h8.5a.25.25 0 01.25.25v5.5a.25.25 0 01-.25.25h-3.5a.75.75 0 00-.53.22L3.5 11.44V9.25a.75.75 0 00-.75-.75h-1a.25.25 0 01-.25-.25v-5.5zM1.75 1A1.75 1.75 0 000 2.75v5.5C0 9.216.784 10 1.75 10H2v1.543a1.457 1.457 0 002.487 1.03L7.061 10h3.189A1.75 1.75 0 0012 8.25v-5.5A1.75 1.75 0 0010.25 1h-8.5zM14.5 4.75a.25.25 0 00-.25-.25h-.5a.75.75 0 110-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0114.25 12H14v1.543a1.457 1.457 0 01-2.487 1.03L9.22 12.28a.75.75 0 111.06-1.06l2.22 2.22v-2.19a.75.75 0 01.75-.75h1a.25.25 0 00.25-.25v-5.5z"
                ></path>
              </svg>
              <span className="ml-2">Discussion</span>
            </a>
          </li>
          <li className="font-semibold ">
            <a
              href="#"
              className="flex items-center border-b-2 border-transparent hover:border-gray-300 transition ease-in-out duration-150 px-4 pb-3 "
            >
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                class="w-4 h-4 fill-current"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM6.379 5.227A.25.25 0 006 5.442v5.117a.25.25 0 00.379.214l4.264-2.559a.25.25 0 000-.428L6.379 5.227z"
                ></path>
              </svg>
              <span className="ml-2">Actions</span>
            </a>
          </li>
          <li className="font-semibold ">
            <a
              href="#"
              className="flex items-center border-b-2 border-transparent hover:border-gray-300 transition ease-in-out duration-150 px-4 pb-3 "
            >
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                class="w-4 h-4 fill-current"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.467.133a1.75 1.75 0 011.066 0l5.25 1.68A1.75 1.75 0 0115 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.7 1.7 0 01-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 011.217-1.667l5.25-1.68zm.61 1.429a.25.25 0 00-.153 0l-5.25 1.68a.25.25 0 00-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.2.2 0 00.154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.25.25 0 00-.174-.237l-5.25-1.68zM9 10.5a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.75a.75.75 0 10-1.5 0v3a.75.75 0 001.5 0v-3z"
                ></path>
              </svg>
              <span className="ml-2">Security</span>
            </a>
          </li>
          <li className="font-semibold ">
            <a
              href="#"
              className="flex items-center border-b-2 border-transparent hover:border-gray-300 transition ease-in-out duration-150 px-4 pb-3"
            >
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                class="w-4 h-4 fill-current"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.5 1.75a.75.75 0 00-1.5 0v12.5c0 .414.336.75.75.75h14.5a.75.75 0 000-1.5H1.5V1.75zm14.28 2.53a.75.75 0 00-1.06-1.06L10 7.94 7.53 5.47a.75.75 0 00-1.06 0L3.22 8.72a.75.75 0 001.06 1.06L7 7.06l2.47 2.47a.75.75 0 001.06 0l5.25-5.25z"
                ></path>
              </svg>
              <span className="ml-2">Insights</span>
            </a>
          </li>
        </ul>
        {/* REPO NAV ENDS HERE*/}

        {/* REPO CONTENT STARTS HERE*/}
        <div className="container mx-auto my-8 px-4 flex ">
          <div className="file-explorer-container w-3/4 mr-8">
            {/* BRANCH NAVIGATION STARTS HERE */}
            <div className="branch-navigation flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <button className="border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-200 flex items-center space-x-2">
                  <svg
                    text="gray"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    data-view-component="true"
                    class="w-4 h-4 fill-current"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6A2.5 2.5 0 0110 8.5H6a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 016 7h4a1 1 0 001-1v-.628A2.25 2.25 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5zM3.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z"
                    ></path>
                  </svg>
                  <span className="font-semibold">Master</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4 fill-current"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>
                <a
                  href="#"
                  className="flex items-center space-x-2 px-2 py-1 group"
                >
                  <svg
                    text="gray"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    data-view-component="true"
                    class="w-4 h-4 fill-current text-gray-600 group-hover:text-blue-600"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6A2.5 2.5 0 0110 8.5H6a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 016 7h4a1 1 0 001-1v-.628A2.25 2.25 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5zM3.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z"
                    ></path>
                  </svg>
                  <span className="group-hover:text-blue-600">
                    <span className="font-semibold">25 </span>
                    <span className="font-medium">branches</span>
                  </span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-2 px-2 py-1 group"
                >
                  <svg
                    text="gray"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    data-view-component="true"
                    class="w-4 h-4 fill-current text-gray-600 group-hover:text-blue-600"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.5 7.775V2.75a.25.25 0 01.25-.25h5.025a.25.25 0 01.177.073l6.25 6.25a.25.25 0 010 .354l-5.025 5.025a.25.25 0 01-.354 0l-6.25-6.25a.25.25 0 01-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 010 2.474l-5.026 5.026a1.75 1.75 0 01-2.474 0l-6.25-6.25A1.75 1.75 0 011 7.775zM6 5a1 1 0 100 2 1 1 0 000-2z"
                    ></path>
                  </svg>
                  <span className="group-hover:text-blue-600">
                    <span className="font-semibold">79 </span>
                    <span className="font-medium">tags</span>
                  </span>
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <button className="border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-200 flex items-center space-x-2">
                  <span className="font-semibold">Got to file</span>
                </button>
                <button className="border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-200 flex items-center space-x-2">
                  <span className="font-semibold">Add file</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4 fill-current"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>
                <button className="border text-gray-100  rounded-md px-4 py-2 bg-green-500 hover:bg-green-600 flex items-center space-x-2">
                  <svg
                    aria-hidden="true"
                    height="16"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    data-view-component="true"
                    class="w-4 h-4 fill-current"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.72 3.22a.75.75 0 011.06 1.06L2.06 8l3.72 3.72a.75.75 0 11-1.06 1.06L.47 8.53a.75.75 0 010-1.06l4.25-4.25zm6.56 0a.75.75 0 10-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 101.06 1.06l4.25-4.25a.75.75 0 000-1.06l-4.25-4.25z"
                    ></path>
                  </svg>
                  <span className="font-semibold">Master</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4 fill-current"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {/* BRANCH NAVIGATION ENDS HERE */}

            {/* COMMITS CONTAINER STARTS HERE */}
            <div className="commits-container bg-blue-100 rounded-md rounded-b-none border border-blue-200 flex border-b-0 items-center justify-between py-4 px-4 mt-5">
              <div className="flex items-center space-x-2">
                <a href="#">
                  <img
                    data-test-selector="commits-avatar-stack-avatar-image"
                    src="https://avatars.githubusercontent.com/in/715?s=48&amp;v=4"
                    className="h-6 w-6 rounded-md"
                    alt="@depfu"
                  />
                </a>
                <a href="#" className=" font-semibold hover:underline">
                  adamwathan
                </a>
                <a href="#" className=" hover:text-blue-600 hover:underline">
                  1.5.1
                </a>
              </div>
              <div className="flex items-center">
                <a href="#">
                  <svg
                    aria-label="32 / 32 checks OK"
                    role="img"
                    viewBox="0 0 16 16"
                    data-view-component="true"
                    class="w-4  fill-current text-green-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                    ></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className=" font-mono text-xs text-gray-600 hover:underline hover:text-blue-500 ml-2"
                >
                  da070bd
                </a>

                <a
                  href="#"
                  className="text-gray-600 font-semibold  hover:text-blue-500 hover:underline ml-2"
                >
                  4 days ago
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-2 px-2 py-1 group"
                >
                  <svg
                    text="gray"
                    aria-hidden="true"
                    height="16"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    data-view-component="true"
                    class="w-4 fill-current text-gray-600 group-hover:text-blue-600"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.643 3.143L.427 1.927A.25.25 0 000 2.104V5.75c0 .138.112.25.25.25h3.646a.25.25 0 00.177-.427L2.715 4.215a6.5 6.5 0 11-1.18 4.458.75.75 0 10-1.493.154 8.001 8.001 0 101.6-5.684zM7.75 4a.75.75 0 01.75.75v2.992l2.028.812a.75.75 0 01-.557 1.392l-2.5-1A.75.75 0 017 8.25v-3.5A.75.75 0 017.75 4z"
                    ></path>
                  </svg>
                  <span className="group-hover:text-blue-600">
                    <span className="font-semibold">5,301 </span>
                    <span className="font-medium">Commits</span>
                  </span>
                </a>
              </div>
            </div>
            {/* COMMITS CONTAINER ENDS HERE */}

            {/* FILE EXPLORER STARTS HERE */}
            <div className="file-explorer  rounded-md rounded-t-none border border-gray-2300 text-gray-700 divide-y divide-gray-300">
              <div className="flex justify-between px-4 py-4">
                <div className=" flex items-center 4/12">
                  <svg
                    aria-label="Directory"
                    aria-hidden="true"
                    height="16"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    data-view-component="true"
                    class="fill-current text-gray-300"
                  >
                    <path d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3H7.5a.25.25 0 01-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75z"></path>
                  </svg>
                  <a
                    href="#"
                    className="flex ml-2 font-semibold hover:text-blue-600"
                  >
                    .github
                  </a>
                </div>
                <div className="6/12 flex items-center">
                  <a
                    href="#"
                    className="flex ml-2  hover:text-blue-600 hover:underline"
                  >
                    update issues template
                  </a>
                </div>

                <div className="2/12">
                  <a href="#" className="flex ml-2 ">
                    4 days ago
                  </a>
                </div>
              </div>
              <div className="flex justify-between px-4 py-4 hover>bg-gray-200">
                <div className=" flex items-center 4/12">
                  <svg
                    aria-label="Directory"
                    aria-hidden="true"
                    height="16"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    data-view-component="true"
                    class="fill-current text-gray-300"
                  >
                    <path d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3H7.5a.25.25 0 01-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75z"></path>
                  </svg>
                  <a
                    href="#"
                    className="flex ml-2 font-semibold hover:text-blue-600"
                  >
                    __tests__
                  </a>
                </div>
                <div className="6/12 flex items-center">
                  <a
                    href="#"
                    className="flex ml-2  hover:text-blue-600 hover:underline"
                  >
                    remove stale tests
                  </a>
                </div>

                <div className="2/12">
                  <a href="#" className="flex ml-2 ">
                    6 days ago
                  </a>
                </div>
              </div>
              <div className="flex justify-between px-4 py-4">
                <div className=" flex items-center 4/12">
                  <svg
                    aria-label="Directory"
                    aria-hidden="true"
                    height="16"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    data-view-component="true"
                    class="fill-current text-gray-300"
                  >
                    <path d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3H7.5a.25.25 0 01-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75z"></path>
                  </svg>
                  <a
                    href="#"
                    className="flex ml-2 font-semibold hover:text-blue-600"
                  >
                    dist
                  </a>
                </div>
                <div className="6/12 flex items-center">
                  <a
                    href="#"
                    className="flex ml-2  hover:text-blue-600 hover:underline"
                  >
                    add empty npm ignore so dist files are distributed with
                    releases
                  </a>
                </div>

                <div className="2/12">
                  <a href="#" className="flex ml-2 ">
                    5 weeks ago
                  </a>
                </div>
              </div>
              <div className="flex justify-between px-4 py-4">
                <div className=" flex items-center 4/12">
                  <svg
                    aria-label="Directory"
                    aria-hidden="true"
                    height="16"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    data-view-component="true"
                    class="fill-current text-gray-300"
                  >
                    <path d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3H7.5a.25.25 0 01-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75z"></path>
                  </svg>
                  <a
                    href="#"
                    className="flex ml-2 font-semibold hover:text-blue-600"
                  >
                    jest
                  </a>
                </div>
                <div className="6/12 flex">
                  <a
                    href="#"
                    className="flex ml-2  hover:text-blue-600 hover:underline"
                  >
                    Use `process.env.JEST_WORK_ID`
                  </a>
                </div>

                <div className="2/12">
                  <a href="#" className="flex ml-2 ">
                    1 day ago
                  </a>
                </div>
              </div>
              <div className="flex justify-between px-4 py-4">
                <div className=" flex 4/12">
                  <svg
                    aria-label="Directory"
                    aria-hidden="true"
                    height="16"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    data-view-component="true"
                    class="fill-current text-gray-300"
                  >
                    <path d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3H7.5a.25.25 0 01-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75z"></path>
                  </svg>
                  <a
                    href="#"
                    className="flex ml-2 font-semibold hover:text-blue-600"
                  >
                    scripts
                  </a>
                </div>
                <div className="6/12 flex">
                  <a
                    href="#"
                    className="flex ml-2  hover:text-blue-600 hover:underline"
                  >
                    Prevent source maps from being generated
                  </a>
                </div>

                <div className="2/12">
                  <a href="#" className="flex ml-2 ">
                    40 days ago
                  </a>
                </div>
              </div>
              <div className="flex justify-between px-4 py-4">
                <div className=" flex 4/12">
                  <svg
                    aria-label="Directory"
                    aria-hidden="true"
                    height="16"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    data-view-component="true"
                    class="fill-current text-gray-300"
                  >
                    <path d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3H7.5a.25.25 0 01-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75z"></path>
                  </svg>
                  <a
                    href="#"
                    className="flex ml-2 font-semibold hover:text-blue-600"
                  >
                    src
                  </a>
                </div>
                <div className="6/12 flex">
                  <a
                    href="#"
                    className="flex ml-2  hover:text-blue-600 hover:underline"
                  >
                    added the different resources need for the project
                  </a>
                </div>

                <div className="2/12">
                  <a href="#" className="flex ml-2 ">
                    40 days ago
                  </a>
                </div>
              </div>
              <div className="flex justify-between px-4 py-4">
                <div className=" flex 4/12">
                  <svg
                    aria-label="File"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    data-view-component="true"
                    class="fill-current w-4 text-gray-300"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3.75 1.5a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 00.25-.25V6h-2.75A1.75 1.75 0 019 4.25V1.5H3.75zm6.75.062V4.25c0 .138.112.25.25.25h2.688a.252.252 0 00-.011-.013l-2.914-2.914a.272.272 0 00-.013-.011zM2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0113.25 16h-9.5A1.75 1.75 0 012 14.25V1.75z"
                    ></path>
                  </svg>
                  <a
                    href="#"
                    className="flex ml-2 font-semibold hover:text-blue-600"
                  >
                    src
                  </a>
                </div>
                <div className="6/12 flex">
                  <a
                    href="#"
                    className="flex ml-2  hover:text-blue-600 hover:underline"
                  >
                    added the different resources need for the project
                  </a>
                </div>

                <div className="2/12">
                  <a href="#" className="flex ml-2 ">
                    40 days ago
                  </a>
                </div>
              </div>
              <div className="flex justify-between px-4 py-4">
                <div className=" flex 4/12">
                  <svg
                    aria-label="File"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    data-view-component="true"
                    class="fill-current w-4 text-gray-300"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3.75 1.5a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 00.25-.25V6h-2.75A1.75 1.75 0 019 4.25V1.5H3.75zm6.75.062V4.25c0 .138.112.25.25.25h2.688a.252.252 0 00-.011-.013l-2.914-2.914a.272.272 0 00-.013-.011zM2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0113.25 16h-9.5A1.75 1.75 0 012 14.25V1.75z"
                    ></path>
                  </svg>
                  <a
                    href="#"
                    className="flex ml-2 font-semibold hover:text-blue-600"
                  >
                    src
                  </a>
                </div>
                <div className="6/12 flex">
                  <a
                    href="#"
                    className="flex ml-2  hover:text-blue-600 hover:underline"
                  >
                    added the different resources need for the project
                  </a>
                </div>

                <div className="2/12">
                  <a href="#" className="flex ml-2 ">
                    40 days ago
                  </a>
                </div>
              </div>
              <div className="flex justify-between px-4 py-4">
                <div className=" flex 4/12">
                  <svg
                    aria-label="File"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    data-view-component="true"
                    class="fill-current w-4 text-gray-300"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3.75 1.5a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 00.25-.25V6h-2.75A1.75 1.75 0 019 4.25V1.5H3.75zm6.75.062V4.25c0 .138.112.25.25.25h2.688a.252.252 0 00-.011-.013l-2.914-2.914a.272.272 0 00-.013-.011zM2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0113.25 16h-9.5A1.75 1.75 0 012 14.25V1.75z"
                    ></path>
                  </svg>
                  <a
                    href="#"
                    className="flex ml-2 font-semibold hover:text-blue-600"
                  >
                    src
                  </a>
                </div>
                <div className="6/12 flex">
                  <a
                    href="#"
                    className="flex ml-2  hover:text-blue-600 hover:underline"
                  >
                    added the different resources need for the project
                  </a>
                </div>

                <div className="2/12">
                  <a href="#" className="flex ml-2 ">
                    40 days ago
                  </a>
                </div>
              </div>
              <div className="flex justify-between px-4 py-4">
                <div className=" flex 4/12">
                  <svg
                    aria-label="File"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    data-view-component="true"
                    class="fill-current w-4 text-gray-300"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3.75 1.5a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 00.25-.25V6h-2.75A1.75 1.75 0 019 4.25V1.5H3.75zm6.75.062V4.25c0 .138.112.25.25.25h2.688a.252.252 0 00-.011-.013l-2.914-2.914a.272.272 0 00-.013-.011zM2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0113.25 16h-9.5A1.75 1.75 0 012 14.25V1.75z"
                    ></path>
                  </svg>
                  <a
                    href="#"
                    className="flex ml-2 font-semibold hover:text-blue-600"
                  >
                    src
                  </a>
                </div>
                <div className="6/12 flex">
                  <a
                    href="#"
                    className="flex ml-2  hover:text-blue-600 hover:underline"
                  >
                    added the different resources need for the project
                  </a>
                </div>

                <div className="2/12">
                  <a href="#" className="flex ml-2 ">
                    40 days ago
                  </a>
                </div>
              </div>
              <div className="flex justify-between px-4 py-4">
                <div className=" flex 4/12">
                  <svg
                    aria-label="File"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    data-view-component="true"
                    class="fill-current w-4 text-gray-300"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3.75 1.5a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 00.25-.25V6h-2.75A1.75 1.75 0 019 4.25V1.5H3.75zm6.75.062V4.25c0 .138.112.25.25.25h2.688a.252.252 0 00-.011-.013l-2.914-2.914a.272.272 0 00-.013-.011zM2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0113.25 16h-9.5A1.75 1.75 0 012 14.25V1.75z"
                    ></path>
                  </svg>
                  <a
                    href="#"
                    className="flex ml-2 font-semibold hover:text-blue-600"
                  >
                    src
                  </a>
                </div>
                <div className="6/12 flex">
                  <a
                    href="#"
                    className="flex ml-2  hover:text-blue-600 hover:underline"
                  >
                    added the different resources need for the project
                  </a>
                </div>

                <div className="2/12">
                  <a href="#" className="flex ml-2 ">
                    40 days ago
                  </a>
                </div>
              </div>
              <div className="flex justify-between px-4 py-4">
                <div className=" flex 4/12">
                  <svg
                    aria-label="File"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    data-view-component="true"
                    class="fill-current w-4 text-gray-300"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3.75 1.5a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 00.25-.25V6h-2.75A1.75 1.75 0 019 4.25V1.5H3.75zm6.75.062V4.25c0 .138.112.25.25.25h2.688a.252.252 0 00-.011-.013l-2.914-2.914a.272.272 0 00-.013-.011zM2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0113.25 16h-9.5A1.75 1.75 0 012 14.25V1.75z"
                    ></path>
                  </svg>
                  <a
                    href="#"
                    className="flex ml-2 font-semibold hover:text-blue-600"
                  >
                    src
                  </a>
                </div>
                <div className="6/12 flex">
                  <a
                    href="#"
                    className="flex ml-2  hover:text-blue-600 hover:underline"
                  >
                    added the different resources need for the project
                  </a>
                </div>

                <div className="2/12">
                  <a href="#" className="flex ml-2 ">
                    40 days ago
                  </a>
                </div>
              </div>
            </div>
            {/* FILE EXPLORER ENDS HERE */}

            {/* README CONTAINER STARTS HERE */}
            <div className="readme-container rounded-md border border-gray-300 px-4 py-4 mt-4">
              <h4 className="font-semibold">README.md</h4>
              <div>
                sLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                in luctus metus, a semper enim. Quisque malesuada egestas quam,
                sit amet convallis velit posuere vel. Praesent sapien lorem,
                tristique sit amet lacus nec, sodales accumsan eros. Suspendisse
                a feugiat nisi, non feugiat metus. Sed vitae aliquet orci, at
                consectetur orci. Pellentesque habitant morbi tristique senectus
                et netus et malesuada fames ac turpis egestas. Mauris vel
                posuere nunc, id fermentum est. Nam sit amet interdum mauris.
                Curabitur tempus elit id interdum viverra. Duis fringilla tortor
                ut lacus convallis ultricies. Maecenas rutrum congue augue, ut
                placerat erat luctus ac. Nam in ligula nunc. Cras quis dui a leo
                elementum placerat vel vel augue. Fusce sit amet sapien dictum,
                maximus arcu a, ultrices tellus. Pellentesque urna ipsum,
                posuere eget mi quis, molestie vehicula diam. Proin auctor
                mauris dui, eu hendrerit ipsum ullamcorper vitae. Donec
                sollicitudin nibh commodo nisi malesuada ullamcorper. Nullam ac
                nisl venenatis, cursus lorem vel, commodo nunc. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Quisque mattis nisl
                sagittis nunc pulvinar, interdum posuere massa porttitor. Etiam
                leo ipsum, condimentum id turpis eu, laoreet auctor augue. Nulla
                ut consectetur dui. Sed efficitur libero egestas massa
                ullamcorper, vel ornare risus gravida.
              </div>
            </div>
            {/* README CONTAINER ENDS HERE */}
          </div>
          <div className="sidebar w-1/4">
            {/* ABOUT CONTENT STARTS HERE*/}
            <div className="">
              <h4 className="text-base font-semibold">About</h4>
              <p className="text-base mt-4">
                A utility-first CSS framework for rapid UI Development
              </p>
              <div className="flex items-center space-x-2 mt-4">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  data-view-component="true"
                  class="w-4 fill-current mr-2"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
                  ></path>
                </svg>
                <a
                  href="#"
                  className="text-blue-600 hover:underline font-semibod"
                >
                  tailwindcss.com/
                </a>
              </div>
              <div className="tags text-md font-semibold flex items-center flex-wrap mt-2">
                <a
                  href="#"
                  className="bg-blue-100 mr-2 hover:bg-blue-200 text-blue-600 rounded-full px-3 py-1 mt-2"
                >
                  responsive
                </a>
                <a
                  href="#"
                  className="bg-blue-100 mr-2 hover:bg-blue-200 text-blue-600 rounded-full px-3 py-1 mt-2"
                >
                  postcss
                </a>
                <a
                  href="#"
                  className="bg-blue-100 mr-2 hover:bg-blue-200 text-blue-600 rounded-full px-3 py-1 mt-2"
                >
                  utility-classes
                </a>
                <a
                  href="#"
                  className="bg-blue-100 mr-2 hover:bg-blue-200 text-blue-600 rounded-full px-3 py-1 mt-2"
                >
                  functional-css
                </a>
                <a
                  href="#"
                  className="bg-blue-100 mr-2 hover:bg-blue-200 text-blue-600 rounded-full px-3 py-1 mt-2"
                >
                  css-framework
                </a>
              </div>
              <a href="#" className="flex items-center space-x-2 mt-4 group">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  data-view-component="true"
                  class=" group-hover:text-blue-600 w-4 fill-current mr-2"
                >
                  <path
                    fill-rule="evenodd"
                    d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z"
                  ></path>
                </svg>
                <span className="text-gray-600 group-hover:text-blue-600 font-semibold">
                  Readme
                </span>
              </a>
              <a href="#" className="flex items-center space-x-2 mt-4 group">
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  class="group-hover:text-blue-600 w-4 fill-current mr-2"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.75.75a.75.75 0 00-1.5 0V2h-.984c-.305 0-.604.08-.869.23l-1.288.737A.25.25 0 013.984 3H1.75a.75.75 0 000 1.5h.428L.066 9.192a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.514 3.514 0 00.686.45A4.492 4.492 0 003 11c.88 0 1.556-.22 2.023-.454a3.515 3.515 0 00.686-.45l.045-.04.016-.015.006-.006.002-.002.001-.002L5.25 9.5l.53.53a.75.75 0 00.154-.838L3.822 4.5h.162c.305 0 .604-.08.869-.23l1.289-.737a.25.25 0 01.124-.033h.984V13h-2.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-2.5V3.5h.984a.25.25 0 01.124.033l1.29.736c.264.152.563.231.868.231h.162l-2.112 4.692a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.517 3.517 0 00.686.45A4.492 4.492 0 0013 11c.88 0 1.556-.22 2.023-.454a3.512 3.512 0 00.686-.45l.045-.04.01-.01.006-.005.006-.006.002-.002.001-.002-.529-.531.53.53a.75.75 0 00.154-.838L13.823 4.5h.427a.75.75 0 000-1.5h-2.234a.25.25 0 01-.124-.033l-1.29-.736A1.75 1.75 0 009.735 2H8.75V.75zM1.695 9.227c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327l-1.305 2.9zm10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327l-1.305 2.9z"
                  ></path>
                </svg>
                <span className="text-gray-600 group-hover:text-blue-600 font-semibold">
                  MIT License
                </span>
              </a>

              <a href="#" className="flex items-center space-x-2 mt-4 group">
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  class="text-gray-600 group-hover:text-blue-600 font-semibold"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.048 2.241c.964-.709 2.079-1.238 3.325-1.241a4.613 4.613 0 013.282 1.355c.41.408.757.86.996 1.428.238.568.348 1.206.347 1.968 0 2.193-1.505 4.254-3.081 5.862-1.496 1.526-3.213 2.796-4.249 3.563l-.22.163a.75.75 0 01-.895 0l-.221-.163c-1.036-.767-2.753-2.037-4.249-3.563C1.51 10.008.007 7.952.002 5.762a4.614 4.614 0 011.353-3.407C3.123.585 6.223.537 8.048 2.24zm-1.153.983c-.81.78-1.546 1.669-2.166 2.417-.184.222-.358.432-.52.623a.75.75 0 00.04 1.016c.35.35.697.697 1.043 1.047.866.875 2.292.914 3.185.032.264-.26.534-.528.802-.797.694-.694 1.8-.701 2.474-.03L12.92 8.7l.283.284c-.244.334-.515.666-.81.995l-1.384-1.28A.75.75 0 109.99 9.802l1.357 1.252c-.325.31-.656.606-.984.887l-1.48-1.366a.75.75 0 10-1.018 1.102L9.191 12.9c-.433.34-.838.643-1.191.905-1.04-.773-2.537-1.907-3.846-3.242C2.611 8.99 1.502 7.306 1.502 5.75a3.114 3.114 0 01.913-2.335c1.159-1.158 3.23-1.224 4.48-.191zm7.112 4.442c.313-.65.491-1.293.491-1.916v-.001c0-.614-.088-1.045-.23-1.385-.143-.339-.357-.633-.673-.949a3.113 3.113 0 00-2.218-.915c-1.092.003-2.165.627-3.226 1.602-.823.755-1.554 1.637-2.228 2.45l-.127.154.562.566a.756.756 0 001.066.02l.794-.79c1.258-1.258 3.312-1.31 4.594-.032.396.394.792.791 1.173 1.173l.022.023z"
                  ></path>
                </svg>
                <span className="text-gray-600 group-hover:text-blue-600 font-semibold">
                  Code of conduct
                </span>
              </a>

              <a href="#" className="flex items-center space-x-2 mt-4 group">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  data-view-component="true"
                  class="text-gray-600 w-4 group-hover:text-blue-600 font-semibold"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                  ></path>
                </svg>
                <span className="text-gray-600 group-hover:text-blue-600 font-semibold">
                  Stars
                </span>
              </a>

              <a href="#" className="flex items-center space-x-2 mt-4 group">
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  class="text-gray-600 group-hover:text-blue-600 font-semibold"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  ></path>
                </svg>
                <span className="text-gray-600 group-hover:text-blue-600 font-semibold">
                  Forks
                </span>
              </a>
            </div>
            {/* ABOUT CONTENT ENDS HERE*/}

            {/* RELEASES SECTION STARTS HERE*/}
            <div className="releases border-t border-gray-400 pt-6 mt-6 ">
              <h4 className="text-base font-semibold flex items-center">
                <span>Releases</span>
                <div className="text-xs rounded-lg bg-gray-300 px-2 ml-1">
                  89
                </div>
              </h4>
              <a href="#" class="flex mt-4 group">
                <span className="ml-2">
                  <span className="font-semibold group-hover:text-blue-600">
                    v1.5.1
                  </span>
                  <span className="ml-2 text-xs border border-green-500 text-green-600 rounded-full font-semibold inline-block px-2">
                    Latest
                  </span>
                  <span className="block text-xs group-hover:text-blue-600">
                    5 days ago
                  </span>
                </span>
              </a>
            </div>
            {/* RELEASES SECTION ENDS HERE*/}

            {/* USEDBY SECTION STARTS HERE*/}
            <div className="releases border-t border-gray-400 pt-6 mt-6 ">
              <h4 className="text-base font-semibold flex items-center">
                <span>Used By</span>
                <div className="text-xs rounded-lg bg-gray-300 px-2 ml-1">
                  5000 +
                </div>
              </h4>
              <div className="mt-4">
                <a href="#" className="flex items-center">
                  <img
                    class="w-8 border-2 border-white rounded-full"
                    src="https://avatars.githubusercontent.com/u/90881706?s=64&amp;v=4"
                    alt="@kiennecacbann"
                  />
                  <img
                    class="w-8 border-2 -ml-2 border-white rounded-full"
                    src="https://avatars.githubusercontent.com/u/114445932?s=64&amp;v=4"
                    alt="@offside-club"
                  />
                  <img
                    class="w-8 border-2 -ml-2 border-white rounded-full"
                    src="https://avatars.githubusercontent.com/u/90881706?s=64&amp;v=4"
                    alt="@kiennecacbann"
                  />
                  <img
                    class="w-8 border-2 -ml-2 border-white rounded-full"
                    src="https://avatars.githubusercontent.com/u/114445932?s=64&amp;v=4"
                    alt="@offside-club"
                  />
                  <span className="text-xs text-blue-600 font-semibold hover:underline">
                    + 58,000
                  </span>
                </a>
              </div>
            </div>
            {/* USEDBY SECTION ENDS HERE*/}

            {/* PACKAGES SECTION STARTS HERE*/}
            <div className="releases border-t border-gray-400 pt-6 mt-6 ">
              <h4 className="text-base font-semibold">
                <span>Used By</span>
                <div className="text-xs">No package available yet</div>
              </h4>
            </div>
            {/* PACKAGES SECTION ENDS HERE*/}

            {/* CONTRIBUTORS SECTION STARTS HERE*/}
            <div className="releases border-t border-gray-400 pt-6 mt-6 ">
              <h4 className="text-base font-semibold flex items-center">
                <span>Contributors</span>
                <div className="text-xs rounded-lg bg-gray-300 px-2 ml-1">
                  120+
                </div>
              </h4>
            </div>
            {/* CONTRIBUTORS SECTION ENDS HERE*/}
          </div>
        </div>
        {/* REPO CONTENT ENDS HERE*/}
      </div>

      {/* FOOTER STARTS HERE*/}
      <footer className="container mx-auto text-md border-t font-semibold border-gray-300 py-10 flex items-center justify-between">
        <ul className="flex items-center space-x-12">
          <li>&copy; 2023 Github, Inc.</li>
          <li>
            <a href="#" className="text-blue-600 hover:underline">
              Terms
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:underline">
              Privacy
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:underline">
              Security
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:underline">
              Status
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:underline">
              Help
            </a>
          </li>
        </ul>
        <div className="mx-8">
          <a href="#">
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              data-view-component="true"
              class="fill-current w-8 text-gray-400 hover:text-gray-600"
            >
              <path
                fill-rule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
              ></path>
            </svg>
          </a>
        </div>
        <ul className="flex items-center space-x-12">
          <li>
            <a href="#" className="text-blue-600 hover:underline">
              Contact Github
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:underline">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:underline">
              API
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:underline">
              Training
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:underline">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:underline">
              About
            </a>
          </li>
        </ul>
      </footer>
      {/* FOOTER ENDS HERE*/}
    </div>
  );
}

export default App;
