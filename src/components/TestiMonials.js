import React, { useEffect, useState } from 'react';
import TestiMonialsDetails from './TestiMonialsDetails'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import userPic from './Images/crcc.jpg';
import './css/TestiMonials.css';
import Emilia from './Images/emilia.jpg';
import Elon from './Images/elon.jpg';
import Bill from './Images/bill.jpg';
import KimK from './Images/kimk.webp';
import KimJ from './Images/kimj.jpg';
import Rowan from "./Images/rowanA.jpg";
import Aladeen from "./Images/Aladeen.jpg";
import TomS from "./Images/Tom.webp";



const TestiMonials = () => {
  
    const testiMonials = [
        {
            name: 'Elon Musk',
            description: '"Revolutionary Stuff!"',
            address: 'CEO - Tesla',
            img: Elon
        },
        {
            name: 'Bill Gates',
            description: '"Lorem Ipsum"',
            address: 'CEO - Microsoft',
            img: Bill
        },
        {
            name: 'Emilia Clarke',
            description: '" Amazing!"',
            address: 'British Actress',
            img: Emilia
        },
        {
            name: 'Kim Kardashian',
            description: '"They are so amazing like omg."',
            address: 'Famous Person',
            img: KimK
        },
        {
            name: 'Kim Jong Un',
            description: '"그들은 좋다."',
            address: 'Supreme Leader',
            img: KimJ
        },
        {
            name: 'Rowan Atkinson',
            description: '"Jolly good show"',
            address: 'Comedian/Actor',
            img: Rowan
        },
        {
            name: 'Aladeen Efawadh',
            description: '"They have made an Aladeen impact on society."',
            address: 'Dictator',
            img: Aladeen
        },
        {
            name: 'Thomas Michael Shelby',
            description: '"They are fooking great"',
            address: 'British Parliament Member',
            img: TomS
        }
    ]
    //Owl Carousel Settings
    const options = {
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 3000,
        smartSpeed: 450,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    };
    return (
        <section id="testimonial" className="testimonials pt-70 pb-70">
            <div className="container mt-5">
                <h2 className="miniTitle text-center">TESTIMONIALS</h2>
                <div className="text-center ">
                    <h3 className="sectionTitle">Know what Our Clients are Saying!</h3>
                </div>
                
                <div className="row">
                    <div className="col-md-12">
                        <OwlCarousel id="customer-testimonoals" className="owl-carousel owl-theme" {...options}>
                            {
                                testiMonials.length === 0 ?
                                    <div class="item">
                                        <div class="shadow-effect">
                                            <img class="img-circle" src={userPic} />

                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                        </div>
                                        <div class="testimonial-name">
                                            <h5>Rajon Rony</h5>
                                            <small>ITALY</small>
                                        </div>
                                    </div> :
                                    testiMonials.map(testiMonialDetail => {
                                        return (
                                            <TestiMonialsDetails testiMonialDetail={testiMonialDetail} key={testiMonialDetail._key} />

                                        )
                                    })
                            }
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestiMonials;