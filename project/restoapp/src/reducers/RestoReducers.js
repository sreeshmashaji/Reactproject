import { RESTAURANT_LIST_FAIL,RESTAURANT_LIST_SUCCESS } from "../constants/Constatnts";

export const restaurantListReducer=(state={restaurants:[]},action)=>{
    switch(action.type){
        case RESTAURANT_LIST_SUCCESS:
            return {restaurants:action.payload}
        case RESTAURANT_LIST_FAIL:
            return {error:action.payload}

        default:
            return state
        
    }

}

