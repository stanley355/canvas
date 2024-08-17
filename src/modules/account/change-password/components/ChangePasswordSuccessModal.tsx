import Button from '@/common/components/Button'
import Modal from '@/common/components/Modal'
import Cookies from 'js-cookie';

const ChangePasswordSuccessModal = () => {
  const handleLogout = () => {
    Cookies.remove("token");
    window.location.href = "/account/login";
  };

  return (
    <Modal className='flex items-center justify-center p-4'>
      <div className='p-4 mx-auto text-center bg-white rounded-lg'>
        <div className='text-lg font-bold'>Change password success</div>
        <div className='text-lg'>Please re-login to continue</div>
        <Button className='w-full my-4' onClick={handleLogout}>OK</Button>
      </div>
    </Modal>
  )
}

export default ChangePasswordSuccessModal