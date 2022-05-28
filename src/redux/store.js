import React from 'react';
import {combineReducers, createStore, applyMiddleware  } from 'redux';
import clientReducer from './clientReducer.js';
import authReducer from './authReducer.js';

import profileReducer from './ProfileReducer.js';

import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

let redusers=combineReducers({
	clientsPage:clientReducer,
	auth:authReducer,
	form:formReducer,

	profile:profileReducer,

});

let store=createStore(redusers,applyMiddleware(thunkMiddleware));

window.store=store;

export default store;