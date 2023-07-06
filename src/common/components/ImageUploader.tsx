import React from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import Select from 'react-select';
import { reactSelectDarkStyle } from '../lib/reactSelectDarkStyle';

interface IImageUploader {
  onChange: (e: any) => void;
}

const ImageUploader = (props: IImageUploader) => {
  const { onChange } = props;

  return (
    <div >
      <div className='text-black font-semibold mb-2 px-1'>* For better result, put the Language of the text in Image (automatic as English)</div>
      <Select placeholder="Select Image Language" styles={reactSelectDarkStyle} className='mb-1' />
      <div className="bg-black rounded ">
        <label htmlFor="image_input" className="text-white cursor-pointer w-full h-60 lg:h-64 flex flex-col items-center justify-center">
          <input type="file" name="image_input" id="image_input" hidden size={60} accept="image/png, image/jpeg, image/jpg" onChange={onChange} />
          <FaCloudUploadAlt className="text-5xl" />
          <div className="font-semibold text-xl">Upload your Image</div>
          <div className="font-semibold text-lg">(.png, .jpeg, .jpg)</div>
        </label>
      </div>
    </div>
  );
};

export default ImageUploader;