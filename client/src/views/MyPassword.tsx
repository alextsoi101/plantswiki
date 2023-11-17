import { FC } from "react";
import MyAccountLayout from "../layouts/MyAccountLayout";
import { AccountMenuContent, AccountPassword } from "../features/user/index";

const MyPassword: FC = () => {

  return (
    <div>
      <section>
        <MyAccountLayout
          menuContent={AccountMenuContent.password}
        >
          <AccountPassword />
        </MyAccountLayout>
      </section>
    </div>
  )
}

export default MyPassword;