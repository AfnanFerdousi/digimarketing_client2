import React, { useState, useEffect, createElement } from 'react';
import Link from 'next/link';
import axios from 'axios';;
import { useParams } from 'next/navigation';
import {
    TbSeo,
    TbSocial,
    TbDeviceDesktopAnalytics
} from 'react-icons/tb';
import {RiAdvertisementLine} from 'react-icons/ri';
import {BiSolidBookContent} from 'react-icons/bi';
import {SiMarketo} from 'react-icons/si';
import {GrChannel} from 'react-icons/gr';
import {MdOutlineVideoSettings} from 'react-icons/md';

const iconComponent = {
    TbSeo,
    RiAdvertisementLine,
    TbSocial,
    BiSolidBookContent,
    SiMarketo,
    GrChannel,
    TbDeviceDesktopAnalytics,
    MdOutlineVideoSettings
}
const CategorizedServices = () => {
    const id = useParams()
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true)
    console.log(id)
    const getServicesByCategoryId = async () => {
        try {
            setLoading(true)
            const res = await axios.get('/services.json');
            const data = res.data.filter(service => service.id === id?.id); // Filter services by categoryId
            console.log(data)
            setServices(data[0]);
            setLoading(false)

        } catch (e) {
            console.log(e)
            setLoading(false)
        }
    }
    useEffect(() => {
        getServicesByCategoryId()
    }, [id])
    console.log(services)

    const mapService = !loading && services.sub_categories && services.sub_categories;
    console.log(mapService)

    const servicesPerRow = 3;


     return (
        <div className='max-w-[1400px] w-full mx-auto lg:md:px-4 px-4 lg:md:mt-10 mt-6'>
            <div data-aos="fade-right">
                <h3 className='text-[#FE6B01] font-bold font-montserrat lg:md:text-4xl text-3xl'>{services.category}</h3>
                <h4 className='pt-[1%] lg:md:text-3xl text-lg font-semibold text-[#514949]'>We are More than Just an Agency</h4>
            </div>
            {!loading && 
                <div data-aos="fade-up" data-aos-duration="2000" className="grid gap-y-4 mt-10">
                    {mapService.map((service, rowIndex) => (
                        <div key={service.id}>
                            <div className='grid lg:md:grid-cols-3 grid-cols-1 gap-4'>
                                {service.services.map((s, colIndex) => {
                                    const totalServicesDisplayed = rowIndex * servicesPerRow + colIndex;
                                    const displayIndex = rowIndex * servicesPerRow + colIndex - Math.floor(totalServicesDisplayed / servicesPerRow);
                                    const colSpan = displayIndex % servicesPerRow === servicesPerRow - 1 ? 3 : 1;
                                    return (
                                        <div key={s.id} className={`bg-[#fff] lg:md:p-4 p-2 text-center rounded-md cursor-pointer hover:scale-105 transform transition-transform ease-in-out duration-200 hover:animate-bounce flex flex-col space-between items-center col-span-${colSpan}`}>
                                            <div className='text-[#FE6B01] font-semibold lg:md:text-5xl text-3xl transform transition-transform ease-in-out p-2 text-center w-full flex justify-center'>
                                                {iconComponent[s.icon] ? createElement(iconComponent[s.icon]) : null}
                                            </div>
                                            <h2 className="text-[#030303] font-semibold lg:md:text-xl text-[18px] my-2">{s.name}</h2>
                                            <h3 className="text-[#FE6B01] font-bold text-[14px]">{service.name}</h3>
                                            <p className="font-normal lg:md:text-[18px] text-[14px] pb-4">{s.description}</p>
                                            <Link href={`/service_details/${service.id}`} className="text-[#FE6B01]">view details</Link>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            }
        </div>
    );
};

export default CategorizedServices;