import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(
    rootReducer, composedEnhancer,
    
);

export default store;
