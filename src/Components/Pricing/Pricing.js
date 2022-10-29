import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const pricingOptions = [
        { id: 1, name: 'free', price: 0, features: [
            'Everything on free' , 'Extra Feature' , 'Unnecessary Feature', 
            'Will Never Use Feature', 'Awesome Feature', 'Ajaira Feature'
        ] 
    },
        { id: 2, name: 'medium', price: 9.99, features: [
            ' Everything on medium' , 'Extra Feature' , 'Unnecessary Feature', 
            'Will Never Use Feature', 'Awesome Feature', 'Ajaira Feature'
        ] 
    },
        { id: 3, name: 'premium', price: 19.99, features: [
            'Everything on premium' , 'Extra Feature' , 'Unnecessary Feature', 
            'Will Never Use Feature', 'Awesome Feature', 'Ajaira Feature'
        ] 
    }
    ]
    return (
        <div>
            <h2 className='text-5xl font-bold bg-indigo-300 p-12 text-white'>Best Deal of the Town</h2>
            <div className='grid md:grid-cols-3 gap-3 mt-4'>
                {
                    pricingOptions.map(option => <PriceOption
                        key={option.id}
                        option={option}
                    ></PriceOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;