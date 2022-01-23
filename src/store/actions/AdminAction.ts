import {AdminType} from "../types/AdminType";
import {Dispatch} from 'redux'

export interface IAdminAction {
    type: AdminType,
    data?: any
}

export const doLogin = (dispatch: Dispatch, admin: any) => {
    dispatch({type: AdminType.LOGIN, data: {admin, loading: false}})
}
