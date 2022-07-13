import React, { useContext, useEffect, useState } from 'react';
import { ConversionContext } from '../context/ConversionContext';

const ConversionRate = () => {
  const { goldInSilver, goldInCopper } = useContext(ConversionContext);
  return (
    <>
      <h3>Conversion Rate</h3>
      {goldInSilver && <p>{`1 gold is equal to ${goldInSilver} silver or ${goldInCopper} copper`}</p>}
    </>
  );
}

export default ConversionRate;