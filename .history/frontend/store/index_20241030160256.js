import {configureStrore} from '@reduxjs/toolkit';
import authReducer from './modules/auth';

export default configureStrore({
    reducer: {
        auth:authReducer,
    },
});


 