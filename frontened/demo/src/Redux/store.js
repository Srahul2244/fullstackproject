import { legacy_createStore,applyMiddleware,compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as productReducer } from "./reducer";
import { reducer  as authReducer} from "./Auth/reducer";
import { adminReducer as admin } from './admin/admin.reducer';
const rootReducer=combineReducers({productReducer,authReducer, admin,})
const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE_ || compose;

const store = legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));


export { store };