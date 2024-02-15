import React, { useState } from 'react';

const Services = () => {
    const initialDisplayCount = 6; // Initial number of services to display
    const [displayCount, setDisplayCount] = useState(initialDisplayCount);
    const services = [
        {
            title: "Search Engine Optimization (SEO)",
            description: "Our Search Engine Optimization (SEO) services are designed to boost your online visibility and drive organic traffic to your website. We offer comprehensive solutions including On-Page SEO, Off-Page SEO, Keyword Research, and SEO Audits. Leveraging industry-leading tools such as Semrush and Google Search Console, we ensure that your website ranks higher in search engine results, attracting more potential customers to your business.",
            category: "SEO"
        },
        {
            title: "Pay-Per-Click (PPC) Advertising",
            description: "Our Pay-Per-Click (PPC) Advertising services are aimed at maximizing your ROI through targeted ad campaigns. With Google Ads, we offer a variety of ad formats including Search Ads, Display Ads, Video Ads, and App Ads. Additionally, our Product Listing Ads (PLA) services cover Google Shopping Campaigns and Amazon Ads, including Sponsored Products, Sponsored Brands, and Sponsored Display ads.",
            category: "PPC Advertising"
        },
        {
            title: "Social Media Advertising",
            description: "Our Social Media Advertising services help you reach your target audience on platforms such as Facebook, Instagram, LinkedIn, Twitter, and Pinterest. From creating engaging ad campaigns to managing your ad budget effectively, we ensure that your brand gets maximum visibility and engagement across social media channels.",
            category: "Social Media Advertising"
        },
        {
            title: "Display Advertising",
            description: "Our Display Advertising services encompass a wide range of ad formats including Banner Ads, Retargeting/Remarketing Ads, and Programmatic Advertising. Whether you're looking to increase brand awareness or drive conversions, our display advertising solutions are tailored to meet your specific goals and objectives.",
            category: "Display Advertising"
        },
        {
            title: "Social Media Management",
            description: "Our Social Media Management services cover every aspect of your social media presence, from strategy development and content creation to community engagement and advertising. With our expertise, we help you build a strong brand presence on social media platforms and foster meaningful connections with your audience.",
            category: "Social Media Management"
        },
        {
            title: "Content Marketing",
            description: "Our Content Marketing services are designed to attract, engage, and convert your target audience through compelling content. From developing a comprehensive content strategy to creating blog posts, videos, infographics, and more, we help you deliver valuable content that resonates with your audience and drives results.",
            category: "Content Marketing"
        },
        {
            title: "Email Marketing",
            description: "Our Email Marketing services are geared towards helping you build and nurture relationships with your audience through personalized email campaigns. From campaign strategy and design to automation and analytics, we ensure that your email marketing efforts drive engagement, conversions, and ROI.",
            category: "Email Marketing"
        },
        {
            title: "Home website and Sales Channel Management",
            description: "Our Home Website and Sales Channel Management services encompass everything you need to effectively manage your online presence and sales channels. From e-commerce strategy and website development to sales channel integration and online store management, we help you optimize your digital storefront for maximum success.",
            category: "Website and Sales Channel Management"
        },
        {
            title: "Product Listing and SKU Management",
            description: "Our Product Listing and SKU Management services ensure that your products are effectively listed and optimized across all sales channels. From product data optimization and SKU organization to inventory management and SKU tracking, we help you streamline your product listings for maximum visibility and sales.",
            category: "Product Listing and SKU Management"
        },
        {
            title: "Amazon Seller Central Management",
            description: "Our Amazon Seller Central Management services cover every aspect of selling on the Amazon platform. From optimizing product listings and managing advertising campaigns to order fulfillment and performance monitoring, we help you maximize your presence and sales on Amazon while providing outstanding customer service.",
            category: "Amazon Seller Central Management"
        },
        {
            title: "eBay and Walmart Account Management",
            description: "Our eBay and Walmart Account Management services help you effectively manage your presence on these popular marketplaces. From store management and listing optimization to order processing and analytics, we ensure that your products stand out and drive sales on eBay and Walmart.",
            category: "eBay and Walmart Account Management"
        },
        {
            title: "Analytics and Reporting",
            description: "Our Analytics and Reporting services provide valuable insights into your digital marketing efforts and performance. From data analysis and performance tracking to custom analytics solutions and detailed reporting, we help you make informed decisions and optimize your strategies for maximum results.",
            category: "Analytics and Reporting"
        },
        {
            title: "Motion Graphics, Animation & Video Editing",
            description: "Our Motion Graphics, Animation & Video Editing services help you create engaging visual content that captivates your audience. From explainer videos and motion graphics design to animated infographics and video editing, we bring your brand to life and deliver compelling content that drives engagement and conversions.",
            category: "Motion Graphics, Animation & Video Editing"
        }
    ]

    const handleViewAllClick = () => {
        // Update the display count to show all services
        setDisplayCount(services.length);
    };
    return (
        <div className='max-w-[1320px] w-full mx-auto lg:md:px-4 px-4 lg:md:mt-20 mt-[15vh]'>
            <div
                data-aos="fade-right"
            >
                <h3 className='text-[#FE6B01] font-bold font-montserrat lg:md:text-4xl text-3xl'>Services we provide</h3>
                <h4 className='pt-[1%] lg:md:text-3xl text-xl font-semibold text-[#514949]'>We are More than Just an Agency</h4>
            </div>

            <div
                data-aos="fade-up"
                data-aos-duration="3000"
                className='grid lg:md:grid-cols-3 grid-cols-1 gap-4 mt-8'>
                {
                    services.slice(0, displayCount).map((service, index) => {
                        return (
                            <div key={index} className='bg-[#fff] lg:md:p-4 p-4 rounded-md border-[#fe6a0171] border-[2px] shadow-lg cursor-pointer hover:scale-105 delay-200 transition-all duration-300'>
                                <p className='text-[#fff] bg-[#FE6B01] px-2 rounded-badge inline-block text-[12px] mb-2'>{service.category}</p>
                                <h2 className='text-[#030303] font-bold font-montserrat lg:md:text-2xl text-xl mb-6'>{service.title}</h2>
                                <p className='text-[#333]'>{service.description}</p>
                            </div>
                        )
                    })
                }
            </div>
            {displayCount < services.length && (
                <button onClick={handleViewAllClick} className='text-[#FE6B01] font-inter font-medium lg:md:text-lg text-[14px] mt-8 w-full text-end hover:scale-105 delay-200 transition duration-300 inline-block '>View All</button>
            )}
        </div>
    );
};

export default Services;