import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { createUseStyles } from '@wonder-ui/styles';
import useStore from 'src/hooks/useStore';
import { useHistory } from '@wonder-ui/router';
import services from "src/services";

const useStyles = createUseStyles({
  root: {
  },
});

export default observer(function HomePage(): JSX.Element {
  const {
    store: { home }
  } = useStore();

  console.log('home', home)
  const history = useHistory();

  const s = useStyles();

  useEffect(() => {
    console.log('services', services);
    services.getGoodList({
      data: { name: 1 }
    }).then((res: any) => {
      console.log('getGoodList', res);
    });
  }, []);

  return (
    <div className={s.root}>
      home
      <button onClick={() => history.push('/order')}>history</button>
    </div>
  );
});
