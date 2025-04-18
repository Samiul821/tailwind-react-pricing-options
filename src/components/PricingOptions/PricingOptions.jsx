import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DaisyPricing from '../DaisyPricing/DaisyPricing';

const PricingOptions = ({pricingPromise}) => {

    const pricingData = use(pricingPromise);

    return (
        <div className='w-[85%] mx-auto'>
            <h1 className='text-5xl mb-6'>Get Our Membership</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {/* {
                    pricingData.map(pricing => <PricingCard
                    key={pricing.id}     
                    pricing={pricing}></PricingCard>)
                } */}
                {
                    pricingData.map(pricing => <DaisyPricing 
                    key={pricing.id}    
                    pricing={pricing}
                    ></DaisyPricing>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;