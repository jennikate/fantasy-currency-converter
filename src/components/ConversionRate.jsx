import React, { useContext } from 'react';
import { ConversionContext } from '../context/ConversionContext';

const ConversionRate = () => {
  const { conversionRate } = useContext(ConversionContext);
  return (
    <>
      <h3>Conversion Rate</h3>
      {conversionRate && <p>{`1 gold is equal to ${conversionRate} silver or ${conversionRate * conversionRate} copper`}</p>}
    </>
  );
}

export default ConversionRate;