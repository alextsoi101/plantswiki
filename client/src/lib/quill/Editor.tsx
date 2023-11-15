import { FC } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './editor.css';

interface EditorProps {
  value: any;
  onChange: any;
}

const CustomSizeStyle = `
  .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="14px"]::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="14px"]::before {
    content: '14px';
  }
  .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="16px"]::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="16px"]::before {
    content: '16px';
  }
  .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="18px"]::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="18px"]::before {
    content: '18px';
  }
  .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="20px"]::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="20px"]::before {
    content: '20px';
  }
  .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="30px"]::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="30px"]::before {
    content: '30px';
  }
`;

const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = CustomSizeStyle;
document.head.appendChild(styleSheet);

const Size = ReactQuill.Quill.import('attributors/style/size');
Size.whitelist = ['14px', '16px', '18px', '20px', '30px'];
ReactQuill.Quill.register(Size, true);


const Editor: FC<EditorProps> = ({value, onChange}) => {

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      [{ 'size': ['14px', '16px', '18px', '20px', '30px'] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
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