import {IAdminState} from "../states/AdminState";
import {IAdminAction} from "../actions/AdminAction";
import {AdminType} from "../types/AdminType";

const initAdminState: IAdminState = {
    loading: true,
    admin: {
        name: ''
    }
}
const admin = (state: IAdminState = initAdminState, action: IAdminAction): IAdminState => {
    switch (action.type) {
        case AdminType.LOADING:
            return {...state, ...action.data};
        case AdminType.LOGIN:
            return {...state, ...action.data}
        default:
            return state;
    }
}
export default admin
