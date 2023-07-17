import React, { useState } from 'react';
import Button from './Button';
import { FaArrowDown, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import classNames from 'classnames';

interface IAccordion {
  key?: any;
  title: React.ReactNode,
  children: React.ReactNode
}

const Accordion = (props: IAccordion) => {
  const { title, children } = props;
  const [show, setShow] = useState(false);

  return (
    <div className='border border-gray-500 rounded mb-4'>
      <Button type='button' wrapperClassName={classNames('border border-gray-500 p-1 px-2 rounded', show ? "bg-black text-white" : "")} buttonClassName='w-full flex items-center justify-between' onClick={() => setShow(!show)}>
        {title}
        {show ? <FaChevronUp /> : <FaChevronDown />}
      </Button>
      <div className={classNames('p-2', show ? "block" : "hidden")}>
        {children}
      </div>
    </div>
  )
};

export default Accordion;