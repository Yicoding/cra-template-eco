import React from 'react';
import { inject, observer } from 'mobx-react';
import { createUseStyles } from '@wonder-ui/styles';
import useStore from 'src/hooks/useStore';

import { Button, InputItem, Card, WingBlank, WhiteSpace } from 'antd-mobile';
import { Flex, Page, Empty } from '@wonder-ui/core';

const useStyles = createUseStyles({
  root: {
    textAlign: 'center'
  },
  header: {
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white'
  },
  link: {
    color: '#61dafb'
  }
});

const HomePage = (): JSX.Element => {

  const { store } = useStore();
  console.log('store', store.home)
  const { home } = store;

  const classes = useStyles();
  
  return (
    <Page>
      <div className={classes.root}>
        order
        <Empty />
      </div>
    </Page>
  );
};

export default inject('store')(observer(HomePage));