import JoditEditor from "jodit-react";
import React, { useRef } from "react";

const TextEditor = ({ setBlogsDetails, blogsDetails }) => {
  const config = {};
  const editor = useRef(null);
  return (
    <div>
      <JoditEditor
        value={blogsDetails}
        ref={editor}
        onBlur={(content) => setBlogsDetails(content)}
        config={config}
      ></JoditEditor>
    </div>
  );
};

export default TextEditor;
