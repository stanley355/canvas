import React from 'react';
import Select from 'react-select';
import Button from '@/common/components/Button';
import MobilePremiumForm from './Mobile';
import { useDesktopScreen } from '@/common/hooks/useDesktopScreen';

const PremiumForm = () => {
  const isDesktop = useDesktopScreen();
  return (
    <>
    {isDesktop ? <></>: <MobilePremiumForm />}
    </>
  )
};

export default PremiumForm;