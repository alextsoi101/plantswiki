import { FC } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import capitalize from '../../../utils/capitalizeFirstLetter';

interface BreadcrumbsProps {
  lastItem?: string;
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({lastItem}) => {

  const navigate = useNavigate();
  const location = useLocation();

  const path = location.pathname;

  const createPathArray = () => {
    let pathArray: any[] = [];
    pathArray = path.split('/').filter(Boolean);
    pathArray.unshift('home');

    const newPathArray = pathArray.map((pathItem, index) => 
      pathItem = {
        item: capitalize(pathItem),
        link: index > 0 
          ? '/' + pathArray.filter((_, itemIndex) => itemIndex > 0 && itemIndex <= index).join('/')
          : '/'
      }
    );

    if (lastItem) {
      newPathArray[newPathArray.length - 1].item = lastItem;
    }

    return newPathArray;
  };

  const breadcrumbsArray = createPathArray();

  return (
    <div className="w-full h-full bg-gray-light
      xs:px-[32px] xs:py-[10px]
      md:px-[50px] md:py-[10px]
      lg:px-[100px] lg:py-[18px]"
    >
      <ul className="flex flex-wrap items-center gap-[10px] text-sm text-black font-light
        xs:justify-center xs:text-[13px] 
        md:justify-normal md:text-sm"
      >
        {
          breadcrumbsArray.map((breadcrumb, index) => 
            index < breadcrumbsArray.length - 1
              ?
                <li 
                  onClick={() => navigate(breadcrumb.link)}
                  className="flex items-center gap-[10px] cursor-pointer 
                    hover:underline underline-offset-4"
                >
                  <div>
                    {breadcrumb.item}
                  </div>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.3} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </div>
                </li>
              :
                <li className="flex items-center gap-[10px] font-bold">
                  <div>
                    {capitalize(breadcrumb.item)}
                  </div>
                </li>
          )
        }
      </ul>
    </div>
  )
}

export default Breadcrumbs;