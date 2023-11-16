import { FC } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './editor.css';

interface EditorProps {
  value: any;
  onChange: any;
}

const Editor: FC<EditorProps> = ({value, onChange}) => {

  const modules = {
    toolbar: [
      [{ 'header': [1, false] }],
      [{ 'size': ['Base'] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['image'],
      [{ 'align': ['justify', 'center', 'right'] }],
      ['clean']
    ],
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'image', 'align'
  ];

  return (
    <div className="w-full h-full">
      <ReactQuill 
        theme="snow" 
        value={value} 
        onChange={onChange} 
        placeholder='Write you article...'
        modules={modules}
        formats={formats}
      />
    </div>
  )
}

export default Editor;