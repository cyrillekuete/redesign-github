import React from "react";

const ReadMeContainer = () => {
  return (
    <div className="readme-container rounded-md border border-gray-600 px-4 py-4 mt-4">
      <h4>README.md</h4>
      <div>
        Alternatively, you can customize just your fill colors by editing
        theme.fill or theme.extend.fill in your tailwind.config.js file. Learn
        more about customizing the default theme in the theme customization
        documentation. ​ Arbitrary values If you need to use a one-off fill
        value that doesn’t make sense to include in your theme, use square
        brackets to generate a property on the fly using any arbitrary value.
      </div>
    </div>
  );
};

export default ReadMeContainer;
