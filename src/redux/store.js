import React from 'react';
import {combineReducers, createStore, applyMiddleware  } from 'redux';
import clientReducer from './clientReducer.js';
import authReducer from './authReducer.js';
<<<<<<< HEAD
import profileReducer from './ProfileReducer.js';
=======
>>>>>>> 2c1173b9aa6a4ae08dd3abfc90e2e8fb577702e0
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

let redusers=combineReducers({
	clientsPage:clientReducer,
	auth:authReducer,
	form:formReducer,
<<<<<<< HEAD
	profile:profileReducer,
=======
>>>>>>> 2c1173b9aa6a4ae08dd3abfc90e2e8fb577702e0
});

let store=createStore(redusers,applyMiddleware(thunkMiddleware));

window.store=store;

export default store;