import { createStore } from 'redux';
import storeSynchronize from 'redux-localstore';
import Reducers from './reducers';

const Store = createStore(Reducers);

export default Store;

storeSynchronize(Store);
