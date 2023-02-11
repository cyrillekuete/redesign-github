import React from "react";

const CommitsContainer = () => {
  return (
    <div className="commits-container text-gray-100 bg-[#161b22] rounded-md rounded-b-none border border-[#30363d] border-b-0 flex items-center justify-between px-4 py-4 mt-5">
      <div className="flex items-center space-x-2">
        <img
          src="https://avatars.githubusercontent.com/u/15327665?s=40&amp;v=4"
          alt="@cyrillekuete"
          size="20"
          data-view-component="true"
          class="rounded-full "
        />
        <a href="#" className="font-semibold hover:underline">
          cyrillekuete
        </a>
        <a href="#" className="hover:underline hover:text-blue-600">
          1.5.0
        </a>
      </div>
      <div className="flex items-end">
        <a href="#" className="">
          <svg
            aria-label="32 / 32 checks OK"
            role="img"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            class="fill-[#238636]"
          >
            <path
              fill-rule="evenodd"
              d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
            ></path>
          </svg>
        </a>
        <a
          href="#"
          className="font-mono text-xs text-gray-200 hover:underline hover:text-blue-500 ml-2"
        >
          da070bd
        </a>
        <a
          href="#"
          className=" text-gray-200 hover:underline hover:text-blue-500 ml-2"
        >
          6 days ago
        </a>
        <a
          href=""
          className="flex items-center ml-3 group-hover:text-[#58a6ff]"
        >
          <svg
            text="gray"
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            class="w-4 text-green-500 fill-current"
          >
            <path
              fill-rule="evenodd"
              d="M1.643 3.143L.427 1.927A.25.25 0 000 2.104V5.75c0 .138.112.25.25.25h3.646a.25.25 0 00.177-.427L2.715 4.215a6.5 6.5 0 11-1.18 4.458.75.75 0 10-1.493.154 8.001 8.001 0 101.6-5.684zM7.75 4a.75.75 0 01.75.75v2.992l2.028.812a.75.75 0 01-.557 1.392l-2.5-1A.75.75 0 017 8.25v-3.5A.75.75 0 017.75 4z"
            ></path>
          </svg>
          <span className="hover:text-[#58a6ff] ml-1">commits</span>
        </a>
      </div>
    </div>
  );
};

export default CommitsContainer;
