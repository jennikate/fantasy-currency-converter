import React from 'react';
import Converter from './components/Converter';
import Header from './components/Header'
import Layout from './components/Layout';

const App = () => {

  return (
    <Layout>
      <Header />
      <Converter />
    </Layout>
  )
};

export default App;
