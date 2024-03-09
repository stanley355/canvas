import TranslateLanguageOptionsDesktop from './TranslateLanguageOptionsDesktop';
import TranslateLanguageMenuDesktopBtn from './TranslateLanguageMenuDesktopBtn';
import { useState } from 'react';

const TranslateLanguageMenuDesktop = () => {

  const [showSourceOption, setShowSourceOption] = useState(false);
  const [showTargetOption, setShowTargetOption] = useState(false);

  return (
    <div className='relative '>
      <TranslateLanguageMenuDesktopBtn
      onBtnClick={() => {

          setShowTargetOption(false);
          setShowSourceOption(false);
      }}
        onShowSourceOptionClick={() => {
          setShowTargetOption(false);
          setShowSourceOption(true);
        }}
        onShowTargetOptionClick={() => {
          setShowSourceOption(false);
          setShowTargetOption(true);
        }}
      />
   { showSourceOption &&  <TranslateLanguageOptionsDesktop isSource searchPlaceholder='Translate From' onCloseClick={() => setShowSourceOption(false)} />}
   { showTargetOption &&  <TranslateLanguageOptionsDesktop isSource={false} searchPlaceholder='Translate To' onCloseClick={() => setShowTargetOption(false)} />}
    </div>
  )
}

export default TranslateLanguageMenuDesktop