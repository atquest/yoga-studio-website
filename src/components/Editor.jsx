import { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles

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
      <div className="editor-container">
        <div 
          className="content-display" 
          dangerouslySetInnerHTML={{ __html: editorValue }} 
        />
        {isAdmin && (
          <button
            onClick={() => setIsEditing(true)}
            className="mt-2 px-3 py-1 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-700"
          >
            Edit
          </button>
        )}
      </div>
    );
  }

  // Otherwise, render the editor
  return (
    <div className="editor-container border border-gray-300 rounded">
      <ReactQuill
        theme="snow"
        value={editorValue}
        onChange={handleChange}
        modules={modules}
        formats={formats}
        placeholder={placeholder}
        className="min-h-[150px]"
      />
      <div className="flex justify-end p-2 bg-gray-50 border-t">
        <button
          onClick={() => setIsEditing(false)}
          className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default Editor;

