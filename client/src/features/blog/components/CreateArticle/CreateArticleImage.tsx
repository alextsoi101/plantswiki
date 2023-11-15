import { FC } from 'react';

interface CreateArticleImageProps {
  image: any;
  onChangeImage: (e: any) => void;
}

const CreateArticleImage: FC<CreateArticleImageProps> = ({image, onChangeImage}) => {

  return (
    <div className="w-full h-full">
      <div 
        className="text-gray duration-[150ms] hover:text-blue
        xs:h-[250px] md:h-[350px]"
        
      >
        <label 
          className="cursor-pointer"
          htmlFor='file-input'
        >
          <div className="w-full h-full bg-gray-light overflow-hidden">
            {image &&
              <img 
                src={URL.createObjectURL(image)} 
                alt="article-main-image"
                className="object-cover w-full h-full"
              />
            }            
            <div className="flex flex-col justify-center items-center gap-[10px] w-full h-full">
              <div className="text-3xl">
                Add main image
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
              </svg>
            </div>
          </div>
        </label>
        <input 
            id="file-input"
            type='file'
            accept='image/jpeg, image/jpg, image/png'
            onChange={(e) => onChangeImage(e)}
            className="hidden"
          />
      </div>
    </div>
  )
}

export default CreateArticleImage;