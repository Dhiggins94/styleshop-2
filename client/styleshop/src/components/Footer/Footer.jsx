import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
          Our store offers a selection of fashionable and comfortable activewear that can enhance your wardrobe. We invite you to explore our collection and discover the perfect pieces to complement your active lifestyle. Whether you are seeking high-performance gear or stylish athleisure wear, we are confident that our selection will meet your needs. Upgrade your wardrobe today with our premium activewear collection.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
          If you have any questions or concerns about our activewear collection, we are always here to help. Please don't hesitate to contact us through our website or reach out to us via email at styleshop@gmail.com. We are committed to providing excellent customer service and ensuring that your shopping experience with us is a positive one. Thank you for choosing our store for your activewear needs.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Styleshop</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
