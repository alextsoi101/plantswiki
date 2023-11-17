import { FC } from "react";
import MyAccountLayout from "../layouts/MyAccountLayout";
import { AccountMenuContent, AccountInformation } from "../features/user/index";

const MyInformation: FC = () => {

  return (
    <div>
      <section>
        <MyAccountLayout
          menuContent={AccountMenuContent.info}
        >
          <AccountInformation />
        </MyAccountLayout>
      </section>
    </div>
  )
}

export default MyInformation;