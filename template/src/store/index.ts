import { types } from 'mobx-state-tree';
import { HomeStore } from './homeStore';

const Stores = types
  .model('Stores', {
    home: types.optional(HomeStore, {})
  })
  .views(() => {
    return {
    };
  });

export default Stores;
