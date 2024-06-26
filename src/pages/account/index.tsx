import { GetServerSideProps } from "next";
import { getAccountPageServerProps } from "@/modules/account/lib/getAccountPageServerProps";

import AccountPageError from "@/modules/account/components/AccountPageError";
import AccountDetail from "@/modules/account/components/AccountDetail";
import AccountPlanDetail from "@/modules/account/components/AccountPlanDetail";
import NextHead from "@/common/components/NextHead";

import { IUser } from "@/common/lib/api/users/interfaces";
import { ISubscription } from "@/common/lib/api/subscriptions/interfaces";
import { ITopup } from "@/common/lib/api/topups/interfaces";
import { IStudent } from "@/common/lib/api/students/interfaces";
import { IDatoPagesSchema } from "@/common/lib/api/dato/interfaces";

interface IAccountProps {
  account: {
    user: IUser;
    active_student_discount: IStudent;
    active_subscription: ISubscription;
    topups: ITopup[];
  };
}

export const getServerSideProps: GetServerSideProps = getAccountPageServerProps;

const Account = (props: IAccountProps) => {
  const { account } = props;

  if (!account.user) {
    return <AccountPageError />;
  }

  const schema: IDatoPagesSchema = {
    _updatedAt: "",
    slug: "/account/",
    keywords: "",
    faq: [],
    seo: {
      title: `Languageai.id - ${account.user.email}`,
      description: "Account and Subscription",
      image: {
        alt: "Languageai.id",
        url: "/images/languageai/languageai_icon.png"
      }
    },
  }

  return (
    <div className="container px-6 mx-auto mt-16 lg:mt-4 lg:px-12">
      <NextHead pagesSchema={schema} />
      <div className="lg:grid lg:grid-cols-2">
        <AccountDetail user={account.user} />
        <AccountPlanDetail account={account} />
      </div>
    </div>
  );
};

export default Account;
