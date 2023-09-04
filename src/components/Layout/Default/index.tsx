import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

interface DefaultType {
  children: React.ReactNode;
}

const Default = ({ children }: DefaultType) => {
  return (
    <>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  );
};

export default Default;
