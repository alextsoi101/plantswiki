import { FC } from 'react';
import Editor from '../../../../lib/quill/Editor';

interface CreateArticleBodyProps{
  editorValue: any;
  onChange: any;
}

const CreateArticleBody: FC<CreateArticleBodyProps> = ({editorValue, onChange}) => {

  return (
    <div className="w-full h-full">
      <Editor 
        value={editorValue}
        onChange={onChange}
      />
    </div>
  )
}

export default CreateArticleBody;