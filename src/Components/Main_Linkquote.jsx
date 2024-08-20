import React from 'react';
import { Link } from 'react-router-dom';

const Main_Linkquote = () => {
  return (
    <div className='flex flex-col items-center justify-center py-10 '>
      <div className='text-4xl font-bold text-center text-white mb-4'>
        Elevate your images effortlessly: Denoise, and Focus with a single click.
      </div>
      <Link to='/focus_stacking'>
      <button
    class="relative border-2 border-yellow-600 rounded px-4 py-2 mt-8 inline cursor-pointer text-xl font-bold before:bg-yellow-600 hover:rounded-b-none before:absolute before:-bottom-0 before:-left-0  before:block before:h-[4px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100 text-white">
    TRY NOW
</button>
</Link>
    </div>
  );
};

export default Main_Linkquote;
