import React from 'react';
import '../Styles/FAQ.css';

function FAQs() {

    const cardItems = [
        {
            title: 'Who will I be fighting against?',
            title6: 'You will contest against other NFTs who have enrolled in the competition.',
        },
        {
            title: 'When does each fight start?',
            title6: 'Details of each match are found on the homepage of our website, ',
            click: 'Click here',
            contd: 'for details of the next match.',
        },
        {
            title: 'What do I need to play?',
            title6: 'To participate, you must have a device with internet access and a digital wallet.',
        },
        {
            title: 'How can I increase my chances of winning?',
            title6: 'By equipping your NFT with greater qualities, you can boost your chances of victory.',
        },
        {
            title: 'How long does the tournament last?',
            title6: 'Each day the event lasts for 5 hours; more details are available ',
            click: 'here.',
        },
        {
            title: 'How many NFTs will be fighting?',
            title6: 'The number of NFTs that can engage in combat is limitless. The fight is open to as many registered NFT participants as possible.',
        },

    ];

    const questions = cardItems.map((item, index) => (
        <div key={index} className="faq-col">
            <h4 className="faq-fw-32">{item.title}</h4>
            <h6 className="faq-h6-text">{item.title6} <a href="#" className="click-here">{item.click}</a> {item.contd}</h6>
        </div>
    ));

    return (
        <>
            <div className="faq-container">
                <div className="faq-header faq-text-center faq-px-5">
                    <h3 className="faq-h1-text">FAQs</h3>
                    <h6 className="faq-h6-text">Need something cleared up? Here are our most frequently asked questions.</h6>
                </div>
                <div className="faq-row">
                    {questions}

                </div>
                <div className="faq-footer faq-footer-px faq-footer-py">
                    <div className="faq-col-lg faq-footer-content faq-footer-bg">
                        <div className="text-section faq-footer-bg">
                            <h4 className="faq-fw-32 faq-footer-bg">Still have questions?</h4>
                            <h6 className="faq-h6-text faq-footer-bg">Can’t find the answer you’re looking for? Please chat to our friendly team.</h6>
                        </div>
                        <button className="faq-btn">Get in touch</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FAQs;