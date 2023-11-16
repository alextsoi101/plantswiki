import { FC, useState } from 'react';
import CreateArticleHeader from '../features/blog/components/CreateArticle/CreateArticleHeader';
import CreateArticleImage from '../features/blog/components/CreateArticle/CreateArticleImage';
import CreateArticleBody from '../features/blog/components/CreateArticle/CreateArticleBody';
import ArticleBody from '../features/blog/components/Articles/ArticleBody';

const ArticleCreate: FC = () => {

  const [editorValue, setEditorValue] = useState<any>('');
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [image, setImage] = useState<any>(null);

  const onChangeTitle = (e: any) => {
    setTitle(e.target.value)
  }

  const onChangeDescription = (e: any) => {
    setDescription(e.target.value)
  }

  const onChangeImage = (e: any) => {
    if (e.target.files.length === 0) return
    setImage(e.target.files[0])
  }

  const author = 'alex tsoi'
  const authorAvatarUrl = "https://images.unsplash.com/photo-1526800544336-d04f0cbfd700?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"

  console.log(editorValue)

  return (
    <div>
      <section className="bg-white">
        <div>
          <div>
            <CreateArticleHeader
              onChangeTitle={onChangeTitle}
              onChangeDescription={onChangeDescription}
              author={author}
              authorAvatarUrl={authorAvatarUrl}
            />
          </div>
          <div>
            <CreateArticleImage 
              image={image}
              onChangeImage={onChangeImage}
            />
          </div>
          <div className="flex justify-center
            xs:px-[20px] xs:pt-[20px] xs:pb-[40px]
            md:px-[50px] md:pt-[20px] md:pb-[40px]
            lg:px-[100px] lg:pt-[30px] lg:pb-[50px]"
          >
            <div className="max-w-[970px] w-full">
              <CreateArticleBody 
                editorValue={editorValue}
                onChange={setEditorValue}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center
           xs:px-[20px] xs:pb-[30px]
           md:px-[50px] md:pb-[40px]
           lg:px-[100px] lg:pb-[50px]"
        >
          <button className="bg-blue text-white font-medium 
            rounded-full duration-200 hover:bg-navy
            xs:py-[10px] xs:px-[37px]
            md:py-[15px] md:px-[45px]"
          >
            Save
          </button>
        </div>
      </section>
    </div>
  )
}

export default ArticleCreate;