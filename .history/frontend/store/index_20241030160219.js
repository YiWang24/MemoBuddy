import {configureStrore} from '@reduxjs/toolkit';
import authReducer from './modules/auth';

export const store = configureStrore({
    reducer: {
        auth:authReducer,
    },
});


 