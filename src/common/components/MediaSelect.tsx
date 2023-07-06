import React from 'react';
import Select from 'react-select';
import { reactSelectDarkStyle } from '../lib/reactSelectDarkStyle';
import { FaImage, FaLanguage } from 'react-icons/fa';

interface IMediaSelect {
  onChange: (option: any) => void
}

const MediaSelect = (props: IMediaSelect) => {
  const { onChange } = props;

  const MEDIA_OPTIONS = [
    {
      label: <div className='flex items-center gap-2'>
        <FaLanguage className='text-xl' />
        <span>Text Translate</span>
      </div>,
      value: "text"
    },
    {
      label: <div className='flex items-center gap-2'>
        <FaImage className='text-xl' />
        <span>Image Translate</span>
      </div>,
      value: "image"
    },
  ]

  return (
    <label htmlFor="media_type">
      <Select name='media_type' placeholder="Text Translate" options={MEDIA_OPTIONS} styles={reactSelectDarkStyle} onChange={onChange} />
    </label>
  )
};

export default MediaSelect;