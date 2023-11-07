import { FC } from "react";

export enum PlantsPaginationVariant {
  desktop = 'desktop',
  mobile = 'mobile'
}

interface PlantsPaginationProps {
  page: number;
  total: number;
  variant: PlantsPaginationVariant;
}

const PlantsPagination: FC<PlantsPaginationProps> = ({page, total, variant}) => {

  const lastPage = total > 35 ? Math.ceil(total / 35) : 1;

  const generatePageArray = () => {
    let pageArray: number[] = [];

    if (page < 7 ) {
      for (let i = 1; i <= 7; i++) {
        pageArray.push(i)
      }
    }

    if (page >= lastPage - 7) {
      for (let i = lastPage - 6; i <= lastPage; i++) {
        pageArray.push(i)
      }
    }

    if (page > 7 && page < lastPage - 7) {
      for (let i = page; i <= page + 2; i++) {
        pageArray.push(i)
      }
    }

    return pageArray;
  }

  const pages = generatePageArray();

  return (
    <>
      { variant === 'desktop' && 
        <div className="flex items-center bg-white cursor-pointer xs:h-[30px] md:h-[37px]">
          <div className={page > 7
              ? "flex items-center justify-center h-full border border-silver xs:w-[30px] md:w-[37px] duration-100 hover:text-blue"
              : "flex items-center justify-center h-full border border-silver xs:w-[30px] md:w-[37px] text-gray"
            }
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="flex items-center h-full">
            { page > 7 && page < lastPage - 7 &&
              <div className="flex border-t border-b border-silver h-full font-light">
                <div className="flex justify-center items-center px-[5px] h-full xs:min-w-[30px] md:min-w-[37px] duration-100 hover:text-blue">
                  1
                </div>
                <div className="flex justify-center items-center border-r border-l border-silver h-full cursor-default xs:w-[30px] md:w-[37px]">
                  ...
                </div>
            </div>
            }
            <div className="flex h-full divide-x divide-silver border-t border-b border-silver">
              {
                pages.map(page => 
                  <div 
                    className="flex items-center justify-center px-[5px] h-full font-light xs:min-w-[30px] md:min-w-[37px] duration-100 hover:text-blue"
                  >
                    {page}
                  </div>
                )
              }
            </div>
            { page > 7 && page < lastPage - 7 &&
              <div className="flex border-t border-b border-silver h-full font-light">
                <div className="flex justify-center items-center border-r border-l border-silver h-full cursor-default xs:w-[30px] md:w-[37px]">
                  ...
                </div>
                <div className="flex justify-center items-center px-[5px] h-full xs:min-w-[30px] md:min-w-[37px] duration-100 hover:text-blue">
                  {lastPage}
                </div>
              </div>
            }
          </div>
          <div className={page < lastPage - 7
              ? "flex items-center justify-center h-full border border-silver xs:w-[30px] md:w-[37px] duration-100 hover:text-blue"
              : "flex items-center justify-center h-full border border-silver xs:w-[30px] md:w-[37px] text-gray"
            }
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      }
      { variant === 'mobile' &&
        <div className="flex items-center gap-[10px] h-[37px]">
          <div className="flex items-center justify-center h-full border border-silver w-[37px]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="flex items-center justify-center h-full border border-silver w-[37px]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      }
    </>
  )
}

export default PlantsPagination;