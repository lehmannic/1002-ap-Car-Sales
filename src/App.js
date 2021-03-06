import React from 'react';

import { connect } from 'react-redux';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = (
  // addFeature,
  // removeFeature,
  // additionalPrice,
  // additionalFeatures,
  // car
  props
) => {
  // const state = {
  // additionalPrice: , 
  //   car: , 
  // additionalFeatures: , 
  // }

  return (
    <div className='boxes'>
      <div className='box'>
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className='box'>
        <AdditionalFeatures
          additionalFeatures={props.additionalFeatures}
        />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    additionalPrice: state.additionalPrice,
    additionalFeatures: state.additionalFeatures,
    car: state.car,
  };
}

export default connect(mapStateToProps, {})(App);
