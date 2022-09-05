import React, { useContext } from 'react';
import { ConversionContext } from '../context/ConversionContext';

const ConversionRate = () => {
  const { conversionRate } = useContext(ConversionContext);
  return (
    <div className="full">
      <h2>Conversion Rate</h2>
      {conversionRate && <p>{`1 gold is equal to ${conversionRate} silver or ${conversionRate * conversionRate} copper`}</p>}
    </div>
  );
}

export default ConversionRate;