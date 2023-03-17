import React from 'react';
import {FaSearch} from 'react-icons/fa';

const ScholarSearchBox = () => {
    return(
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-row w-full mt-4 lg:mt-8 lg:w-2/3 mx-auto">
            <input type="text" name='scholarSearch' id='scholarSearch' className='w-full bg-black text-white border-white border pl-2 rounded-sm'/>
            <button type="submit" className='w-auto p-2 bg-white rounded-sm'>
                <FaSearch className='text-2xl text-black'/>
            </button>
        </form>
    )
};

export default ScholarSearchBox;