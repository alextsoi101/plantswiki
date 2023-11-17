import { FC } from "react";
import MyAccountLayout from "../layouts/MyAccountLayout";
import { AccountMenuContent, AccountReactions } from "../features/user/index";

const MyReactions: FC = () => {
  return (
    <div>
      <section>
        <MyAccountLayout
          menuContent={AccountMenuContent.reactions}
        >
          <AccountReactions />
        </MyAccountLayout>
      </section>
    </div>
  )
}

export default MyReactions;