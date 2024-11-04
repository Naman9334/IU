import seo from '../../assets/home/seo1.png';
import web from '../../assets/home/web migration.png';
import corporate from '../../assets/home/corporate design.png';
import ui from '../../assets/home/ui ux.png';
import ecommerce from '../../assets/home/ecommerce.png';
import maintenance from '../../assets/home/web maintenance.png';

import seo1 from '../../assets/individualService/Image.png';
import seo2 from '../../assets/individualService/Image_2.png';

const data = [
    {
        id: 1,
        heading: 'SEO Service',
        content: 'Enhance your search visibility and drive organic traffic with our expert SEO solutions.',
        to: '/',
        icon: seo,
        contents: [
            {
                heading: 'Maximize Your Online Visibility',
                img: seo1,
                content: 'Unlock the full potential of your business by increasing your search engine rankings. Our tailored SEO solutions ensure your brand stands out in a competitive digital landscape, attracting high-quality organic traffic. Whether you’re looking to dominate local search or improve global visibility, we have the expertise to drive results.'
            },
            {
                heading: 'Drive Growth Through Targeted Strategies',
                img: seo2,
                content: 'Empower your business with data-driven SEO strategies that bring sustainable growth. We analyze market trends, optimize content, and improve technical aspects of your site to ensure you rank higher for relevant keywords, converting traffic into loyal customers. Let us help you build long-term authority and visibility on search engines.'
            },
        ]
    },
    {
        id: 2,
        heading: 'Web migration services',
        content: 'Seamlessly transfer your website to a new platform with minimal downtime and maximum efficiency.',
        to: '/',
        icon: web,
        contents: [
            {
                heading: 'Seamless Platform Migration',
                img: seo1,
                content: 'Ensure your website migrates smoothly to a new platform without sacrificing performance or user experience. Our migration process minimizes downtime while preserving your data, SEO rankings, and design elements. Whether you are moving to a new CMS, hosting provider, or upgrading your platform, we ensure the transition is stress-free.'
            },
            {
                heading: 'Optimize for Future Growth',
                img: seo2,
                content: 'Beyond just moving your website, we optimize it for better performance, scalability, and security during migration. By streamlining code, improving speed, and implementing best practices, your site will be ready for increased traffic and future expansion, ensuring a stronger digital presence post-migration.'
            },
        ]
    },
    {
        id: 3,
        heading: 'Corporate Web Design',
        content: 'Get a professional, tailored web design that aligns with your corporate identity and goals.',
        to: '/',
        icon: corporate,
        contents: [
            {
                heading: 'Tailored for Your Brand Identity',
                img: seo1,
                content: 'Our corporate web design services are crafted to showcase your brand’s unique identity while delivering a professional and polished online presence. From design to content structure, we ensure that every element aligns with your corporate goals and values, creating a lasting impact on your audience.'
            },
            {
                heading: 'Maximize User Engagement',
                img: seo2,
                content: 'We focus on creating intuitive, user-friendly designs that not only captivate but also engage visitors. With a focus on responsiveness, accessibility, and seamless navigation, our web designs are optimized to enhance user interaction, drive conversions, and deliver measurable results for your business.'
            },
        ]
    },
    {
        id: 4,
        heading: 'E-Commerce System',
        content: 'Build a scalable, secure online store that delivers a top-tier shopping experience.',
        to: '/',
        icon: ecommerce,
        contents: [
            {
                heading: 'Drive Sales with a Customized E-Commerce Solution',
                img: seo1,
                content: 'Our e-commerce systems are built to provide a smooth and secure shopping experience for your customers. From product catalog management to payment gateways, we ensure every feature is tailored to your business needs, maximizing your store’s potential for growth and revenue generation.'
            },
            {
                heading: 'Optimize for Speed and Scalability',
                img: seo2,
                content: 'We focus on building high-performance e-commerce platforms that are optimized for speed and scalability. Whether you’re a small business or an enterprise, our solutions ensure that your online store can handle high traffic and deliver fast load times, keeping your customers engaged and satisfied.'
            },
        ]
    },
    {
        id: 5,
        heading: 'Web Maintenance Service',
        content: 'Keep your site running smoothly with regular updates, security checks, and performance enhancements.',
        to: '/',
        icon: maintenance,
        contents: [
            {
                heading: 'Proactive Maintenance for Optimal Performance',
                img: seo1,
                content: 'Our web maintenance service focuses on regular updates and optimizations to keep your site running smoothly. We monitor for issues and apply fixes promptly, ensuring minimal downtime and enhancing user experience. This proactive approach allows you to focus on your business while we handle the technical details.'
            },
            {
                heading: 'Comprehensive Security Checks and Backups',
                img: seo2,
                content: 'We prioritize your website’s security by implementing robust measures to protect against threats and vulnerabilities. Our service includes regular security audits, backups, and recovery solutions to ensure your data is safe. With our expert team, you can rest assured that your online presence is secure and resilient.'
            },
        ]
    },
    {
        id: 6,
        heading: 'UI/UX Design',
        content: 'Create user-friendly and visually appealing interfaces to improve user engagement and satisfaction.',
        to: '/',
        icon: ui,
        contents: [
              {
            heading: 'Crafting Exceptional User Experiences',
            img: seo1,
            content: 'Our UI/UX design services focus on creating user-centric interfaces that are not only aesthetically pleasing but also intuitive to navigate. By understanding user behavior and preferences, we design experiences that resonate with your audience, fostering deeper engagement and satisfaction.'
        },
        {
            heading: 'Tailored Solutions for Maximum Impact',
            img: seo2,
            content: 'We believe in delivering customized design solutions that align with your brand identity and goals. Our team combines creativity with functionality, ensuring that every element serves a purpose. With our comprehensive approach to UI/UX design, we transform your vision into an engaging digital experience that captivates users.'
        },
        ]
    },
]

export default data;