"use client";

import React from 'react';
import { Header } from './Header';
import { HeroHome } from './common';

const HomeItems = ({ filename }) => {

  return (
    <div>

      <Header />
      <HeroHome
        contributors={filename}
      />
    </div>
  );
};

export default HomeItems;