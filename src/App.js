import './App.css';
import React from 'react';
import PricingSectionContainer from './components/PricingSectionContainer.js'

const pricingsData = {

  'pricings':[
    {
      title: "Seller Starter Bundle",
      price: 279,
      buttonText: "Choose Start Bundle",
      promo: 'Save over 40%!',
      isPopular: true,
      valuedTitle: 'Valued at $572',
      descriptions: [1, 2, 3]
    },
    {
      title: "Standard Web App",
      price: 159,
      buttonText: "Choose Web App",
      promo: 'Save over 50%',
      valuedTitle: 'Valued at $375',
      descriptions: [1, 2, 3]
    },
    {
      title: "Pro Chrome Extension",
      price: 187,
      buttonText: "Choose Pro Extension",
      promo: 'Lifetime purchase!',
      valuedTitle: 'Valued at $365',
      descriptions: [1, 2, 3]
    }
  ]
}

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <PricingSectionContainer pricingsData={pricingsData}></PricingSectionContainer>
      </div>
    );
  }
}
export default App;
