import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer dark">
      <div className="footer__logo">Grasslands</div>
      <div className="footer__middle-divs">
        <div className="footer__middle-divs__inner-div">
          <span className="footer__middle-divs__title h5-medium">Shopping</span>
          <div className="footer__middle-divs__links">
            <span className="footer__middle-divs__link h6-regular">
              Top Deals
            </span>
            <span className="footer__middle-divs__link h6-regular">
              Browse Products
            </span>
            <span className="footer__middle-divs__link h6-regular">
              Delivery and Pickup
            </span>
          </div>
        </div>
        <div className="footer__middle-divs__inner-div">
          <span className="footer__middle-divs__title h5-medium">About</span>
          <div className="footer__middle-divs__links">
            <span className="footer__middle-divs__link h6-regular">
              About Grasslands
            </span>
            <span className="footer__middle-divs__link h6-regular">
              Quality Standards
            </span>
            <span className="footer__middle-divs__link h6-regular">
              Potential Suppliers
            </span>
          </div>
        </div>
        <div className="footer__middle-divs__inner-div">
          <span className="footer__middle-divs__title h5-medium">More</span>
          <div className="footer__middle-divs__links">
            <span className="footer__middle-divs__link h6-regular">Foods</span>
            <span className="footer__middle-divs__link h6-regular">
              Special Diets
            </span>
            <span className="footer__middle-divs__link h6-regular">
              Tips and Ideas
            </span>
            <span className="footer__middle-divs__link h6-regular">
              Recipes
            </span>
          </div>
        </div>
      </div>
      <div className="footer__last-div">
        <span className="footer__middle-divs__title h5-medium">Need Help?</span>
        <div className="h6-regular footer__customer-care-link">
          <span>Visit customer care</span>
          <i> </i>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
