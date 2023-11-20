import { FC } from 'react';
import { UserAccountHeader } from '../features/user';
import { ArticleList } from '../features/blog';

const UserAccount: FC = () => {
  return (
    <div>
      <section>
        <UserAccountHeader />
      </section>
      <section>
        <div className="bg-white pb-[50px]
          xs:px-[20px] xs:pt-[20px]
          md:px-[50px] xs:pt-[30px]
          lg:px-[100px] xs:pt-[50px]"
        >
          <div>
            <h1 className="text-[30px] text-dark font-light 
              underline decoration-blue decoration-4 underline-offset-4"
            >
              User articles:
            </h1>
          </div>
          <div className="mt-[30px]">
            <ArticleList />
            {/* <div className="text-2xl text-dark font-light">
              <span>Alex Tsoi</span> have no articles.
            </div> */}
          </div>
        </div>
      </section>
    </div>
  )
}

export default UserAccount;