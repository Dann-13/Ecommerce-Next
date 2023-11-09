import React from 'react';

export function ProductHeader ({title}){
    return (
        <div className='py-5'>
          <div className='flex justify-center items-center flex-col md:flex-row'>
            <img className='w-44 md:w-64' src='/separador.svg' />
            <h2 className='font-Lobster p-4 text-4xl'>{title}</h2>
            <img className='w-44 md:w-64' src='/separador.svg' />
          </div>
        </div>
      );
};
export default ProductHeader;
