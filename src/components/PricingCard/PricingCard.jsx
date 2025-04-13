import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
    const {name,price,info,features} = pricing;
    return (
        <div className='border p-4 bg-white rounded-2xl'>
            {/* card header */}
            <div className='text-black mb-6'>
                <h1 className="text-5xl mb-3">{name}</h1>
                <h4 className="text-2xl">{price}</h4>
            </div>
            {/* card body */}
            <div className='text-black bg-gray-200 p-4 rounded-2xl'>
               <p className='mb-2 font-medium'>{info}</p>
               {
                 features.map((feature,index) => <PricingFeature 
                 key={index}
                 feature={feature}></PricingFeature>)
               } 
            </div>
        </div>
    );
};

export default PricingCard;