import React from 'react';
import Balance from './balance';
import Features from './features';
import MessageBoard from './msg-board';
import TopHeaderBar from './top-header';
import AppContainer from '../../../components/AppContainer';

export default () => {
  return (
    <AppContainer scrollAble={true} isDashboard={true} padding="0">
      <TopHeaderBar />
      <Balance />
      <MessageBoard />
      <Features />
    </AppContainer>
  );
};
