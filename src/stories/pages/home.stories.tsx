import React from 'react';
import Home, { getServerSideProps, HomeType } from '../../../pages/home';

export default {
  title: "Pages/home",
  component: Home
};

const defaultProps: HomeType = {
  title: "Home title from the storybook",
  image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
};

export const HomePage = (args: any, { loaded: { name } }: any) => {
  return (
    <Home {...defaultProps} {...args} name={name} />
  );
};

HomePage.args = {
  title: 'Mi new title',
  image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
};

//mock for /api/hello --> see preview.ts
HomePage.loaders = [
  async () => {
    const data = await getServerSideProps();
    return data.props as HomeType;
  }
];
