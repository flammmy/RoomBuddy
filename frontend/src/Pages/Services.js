import React from "react";
import "./Services.css";
import { FaHotel, FaRegListAlt, FaUserFriends, FaSearchLocation, FaComments, FaMoneyCheckAlt } from 'react-icons/fa';

// Importing background images
import img1 from '../Images/hotel8.jpg';
import img2 from '../Images/hotel8.jpg';
import img3 from '../Images/hotel8.jpg';
import img4 from '../Images/hotel8.jpg';
import img5 from '../Images/hotel8.jpg';
import img6 from '../Images/hotel8.jpg';

const Services = () => {
    // Updated services data with background images
    const services = [
        {
            id: 1,
            title: "Hotel Listing",
            description: "List your hotel on Room Buddy and reach millions of travelers worldwide. Showcase your property with stunning images, detailed descriptions, and competitive pricing to attract more guests.",
            icon: <FaHotel />,
            backgroundImage: img1
        },
        {
            id: 2,
            title: "Easy Registration",
            description: "Signing up with Room Buddy is quick and hassle-free. Create your account, fill in your hotel details, and start listing your rooms in minutes. Our intuitive platform makes it easy to manage your listings.",
            icon: <FaRegListAlt />,
            backgroundImage: img2
        },
        {
            id: 3,
            title: "Community Engagement",
            description: "Join our vibrant community of hotel owners and travelers. Connect with fellow hosts, share experiences, and learn valuable tips to optimize your listings and enhance guest satisfaction.",
            icon: <FaUserFriends />,
            backgroundImage: img3
        },
        {
            id: 4,
            title: "Advanced Search",
            description: "Empower travelers to find the perfect accommodation with our advanced search features. Filter by location, price range, amenities, and more to discover the ideal hotel for every trip.",
            icon: <FaSearchLocation />,
            backgroundImage: img4
        },
        {
            id: 5,
            title: "Customer Reviews",
            description: "Boost your hotel's reputation with positive customer reviews. Guests can leave feedback and ratings, helping you build trust and credibility among potential guests.",
            icon: <FaComments />,
            backgroundImage: img5
        },
        {
            id: 6,
            title: "Secure Payments",
            description: "Ensure secure transactions with our trusted payment gateway. Guests can book with confidence knowing that their payment information is encrypted and protected.",
            icon: <FaMoneyCheckAlt />,
            backgroundImage: img6
        }
    ];

    return (
        <div className="container mt-5 mb-5">
            <h2 className="text-center mb-5"><strong>Our Services</strong></h2>
            <div className="row">
                {services.map((service) => (
                    <div key={service.id} className="col-md-4">
                        <div className="card-2" style={{ backgroundImage: `url(${service.backgroundImage})` }}>
                            <div className="card-body">
                                <div className="overlay"></div> {/* Add overlay */}
                                <div className="icon">{service.icon}</div>
                                <h5 className="card-title">{service.title}</h5>
                                <p className="card-text">{service.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
