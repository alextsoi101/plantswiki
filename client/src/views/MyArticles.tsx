import { FC } from "react";
import MyAccountLayout from "../layouts/MyAccountLayout";
import { AccountMenuContent, AccountArticles } from "../features/user/index";

const MyArticles: FC = () => {

  return (
    <div>
      <section>
        <MyAccountLayout
          menuContent={AccountMenuContent.articles}
        >
          <AccountArticles />
        </MyAccountLayout>
      </section>
    </div>
  )
}

export default MyArticles;