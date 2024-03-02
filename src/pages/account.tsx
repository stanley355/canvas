import { GetServerSideProps } from 'next';
import { getAccountPageServerProps } from '@/modules/account/lib/getAccountPageServerProps';

const Account = () => {
  return (
    <div className='container mx-auto'>

    </div>
  )
}

export default Account;
export const getServerSideProps: GetServerSideProps = getAccountPageServerProps;