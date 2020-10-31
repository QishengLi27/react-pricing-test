import React from 'react';
import badge from '../img/img_card-badge.png'
import '../css/PricingCard.css'

class PricingCard extends React.Component {

    render() {
        const {
            price = 0,
            title = '',
            buttonText = '',
            promo = '',
            isPopular = false,
            valuedTitle = '',
            descriptions = []
        } = this.props.pricing
        
        let listItems = descriptions.map((desc, i) =>
            <li className='description' key={i}>{desc}</li>
        );

        const renderBadge = () => {
            return isPopular ? <img className="badge" src={badge}></img> : '';
        }

        return (
            <div className={"pricingCard " + (isPopular ? 'popular' : '')}>
                {renderBadge()}
                <div className="title">
                    {title}
                </div>
        
                <div className="card">
                    <p className="valued-title">{valuedTitle}</p>
                    <h2 className="price">
                        <span className="price-currency">$</span>
                        <span className="price-dollar">{price}</span>
                    </h2>
        
                    <p className="price-desc">{promo}</p>
                    <ul>{listItems}</ul>
                </div>

                <a className={'bttn'} href=''>{buttonText}</a>
            </div>
        );
    }
  }

export default PricingCard;