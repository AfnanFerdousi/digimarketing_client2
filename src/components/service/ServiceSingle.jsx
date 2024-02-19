import { Player, Controls } from '@lottiefiles/react-lottie-player';
import axios from 'axios';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';

const ServiceSingle = () => {
    const { id } = useParams(); // Destructure id from useParams
    const [service, setService] = useState({});
    const [loading, setLoading] = useState(true);

    const getServicesByCategoryId = async () => {
        try {
            setLoading(true);
            const res = await axios.get('/services.json');
            if (id) {
                const data = res.data.map(category => {
                    const filterData = category.services.find(ser => 
                        // console.log(ser?.id)
                         ser.id === Number(id)// Check if ser.id is equal to id;
                    );
                    if (filterData !== undefined) {
                        setService(filterData);
                        console.log(filterData)
                        return filterData;
                    }
                });
            }
            setLoading(false);
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    };

    useEffect(() => {
        getServicesByCategoryId();
    }, [id]); // Trigger effect whenever id changes

console.log(service)
    return (
        <div className='max-w-[1400px] w-full mx-auto lg:md:px-4 px-4 lg:md:mt-10 mt-6'>
            <div>
                <div className='flex items-center justify-center'>
                 <Image src={service.lottie} alt={service.name} width={1000} height={500} />
                </div>

                <div className='text-justify mt-6'>
                    <h3 className='text-[#FE6B01] font-bold font-montserrat lg:md:text-2xl text-xxl'>{service.name}</h3>
                    <h4 className='pt-2 pb-6 lg:md:text-lg text-[16px] font-semibold text-[#514949]'>{service.subCat}</h4>
                    <p className='text-[#FE6B01] font-medium text-[18px]'>{service.description}</p>
                    <p className="mt-4 text-[##333] font-medium text-[18px]">{service.long_desc}</p>
                </div>

            </div>
        </div>
    );
};

export default ServiceSingle;
