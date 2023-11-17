import { FC } from "react";
import MyAccountLayout from "../layouts/MyAccountLayout";
import { AccountMenuContent, AccountGeneral } from "../features/user/index";

const MyAccount: FC = () => {

  return (
    <div>
      <section>
        <MyAccountLayout
          menuContent={AccountMenuContent.general}
        >
          <AccountGeneral />
        </MyAccountLayout>
      </section>
    </div>
  )
}

export default MyAccount;