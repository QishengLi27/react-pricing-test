import React from 'react';
import PricingCard from './PricingCard.js'
import '../css/PricingContainer.css'

class PricingContainer extends React.Component {
  
    render() {
        const {pricings = {}} = this.props.pricingsData;

        let items = pricings.map((pricing,i)=>{
            return <PricingCard pricing={pricing} key={i} />
        })

        return (
            <section>
                <div className="container">
                    {items}
                </div>
            </section>
        );
    }
  }

export default PricingContainer;