import React, { useContext, useEffect, useState } from 'react';
import { ConversionContext } from '../context/ConversionContext';

const ConversionRate = () => {
  const { conversionGoldInSilver, conversionGoldInCopper } = useContext(ConversionContext);
  return (
    <>
      <h3>Conversion Rate</h3>
      {conversionGoldInSilver && <p>{`1 gold is equal to ${conversionGoldInSilver} silver or ${conversionGoldInCopper} copper`}</p>}
    </>
  );
}

export default ConversionRate;