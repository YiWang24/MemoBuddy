import {configureStrore} from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

export const store = configureStrore({
    reducer: rootReducer,
});


