import { useContext } from 'react';

import { GlobalContext } from './ReactContext';

export const useGlobalContext = () => useContext(GlobalContext);