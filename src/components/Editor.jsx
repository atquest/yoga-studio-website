import { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
// No need to import Quill styles here as they're already imported in index.css

const Editor = ({ value, onChange, placeholder = 'Enter content here...', isAdmin = true }) => {
  const [editorValue, setEditorValue] = useState(value || '');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setEditorValue(value || '');
  }, [value]);

  const handleChange = (content) => {
    setEditorValue(content);
    if (onChange) {
      onChange(content);
    }
  };

  // Toolbar configuration
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['link', 'image'],
      ['clean']
    ],
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet',
    'link', 'image'
  ];

  // If not in admin mode or not editing, just render the content
  if (!isAdmin || !isEditing) {
    return (
      <div className="editor-container prose prose-indigo max-w-none">
        <div 
          className="content-display py-2" 
          dangerouslySetInnerHTML={{ __html: editorValue }} 
        />
        {isAdmin && (
          <button
            onClick={() => setIsEditing(true)}
            className="btn mt-2 text-sm py-1 px-3 transition duration-150 ease-in-out"
          >
            Edit
          </button>
        )}
      </div>
    );
  }

  // Otherwise, render the editor
  return (
    <div className="editor-container border border-gray-300 rounded-md shadow-sm bg-white overflow-hidden">
      <ReactQuill
        theme="snow"
        value={editorValue}
        onChange={handleChange}
        modules={modules}
        formats={formats}
        placeholder={placeholder}
      />
      <div className="flex justify-end p-2 bg-gray-50 border-t">
        <button
          onClick={() => setIsEditing(false)}
          className="btn bg-green-600 hover:bg-green-700 focus:ring-green-500 text-sm py-1 px-3 transition duration-150 ease-in-out"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default Editor;

