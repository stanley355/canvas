import { GetServerSideProps } from 'next';
import { getAccountPageServerProps } from '@/modules/account/lib/getAccountPageServerProps';
import AccountDetail from '@/modules/account/components/AccountDetail';

import { IUser } from '@/common/lib/api/users/userInterfaces';

interface IAccountProps {
  user: IUser
}

const Account = (props: IAccountProps) => {
  const { user } = props;
  return (
    <div className='container px-6 mx-auto mt-16 lg:mt-4 lg:px-12'>
      <AccountDetail user={user} />
    </div>
  )
}

export default Account;
export const getServerSideProps: GetServerSideProps = getAccountPageServerProps;