import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PricingFeature = ({feature}) => {
    console.log(feature);
    return (
        <p className='flex gap-x-2 mt-4'><CircleCheckBig className='text-blue-700'></CircleCheckBig> {feature}</p>
    );
};

export default PricingFeature;