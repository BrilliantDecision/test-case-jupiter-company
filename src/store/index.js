import {createStore} from "redux";
import cardReducer from "./cardsReducer";

export const store = createStore(cardReducer);
