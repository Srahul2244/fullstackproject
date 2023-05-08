import axios from "axios";
import * as types from "./admin.types";
import { saveData } from "../../Utils/localStorageData";

export const Loginfunction = (payload) => (dispatch) => {
  console.log(payload)
  dispatch({ type: types.LOGIN_REQUEST });

  axios
    .post("https://relieved-earmuffs-colt.cyclic.app/admin/login", payload)
    .then((response) => {
      console.log(response);
      dispatch({ type: types.LOGIN_SUCCESS, payload: response.data });
    })
    .catch((e) => {
      console.log(e);
      dispatch({ type: types.LOGIN_FAILURE });
    });
};

export const SignUpFunction = (data) => (dispatch) => {
  dispatch({ type: types.CREATE_REQUEST });

  axios
    .post("https://relieved-earmuffs-colt.cyclic.app/admin/adminSign", data)
    .then((response) => {
      console.log(response);
      dispatch({ type: types.CREATE_SUCCESS, payload: response.data });
    })
    .catch((e) => {
      console.log(e);
      dispatch({ type: types.CREATE_FAILURE });
    });
};

export const GetProducts =
  (payload) =>
  (dispatch) => {
    dispatch({ type: types.GET_PRODUCT_REQUEST });
    return axios
      .get(`https://relieved-earmuffs-colt.cyclic.app/admin/admin/fetch/`,{payload},{headers:{authorization:payload.token}})
      .then((response) => {
        console.log(response.data.data);
        dispatch({
          type: types.GET_PRODUCT_SUCCESS,
          payload: response.data.data,
        });
      })
      .catch((e) => {
        console.log(e);
        dispatch({ type: types.GET_PRODUCT_ERROR });
      });
  };

export const GetAllProduct = () => (dispatch) => {
  dispatch({ type: types.GET_ALLPRODUCT_REQUEST });
  return axios
    .get("https://relieved-earmuffs-colt.cyclic.app/admin/admin/fetch")
    .then((response) => {
      console.log(response.data);
      dispatch({
        type: types.GET_ALLPRODUCT_SUCCESS,
        payload: response.data,
      });
    })
    .catch((e) => {
      console.log(e);
      dispatch({ type: types.GET_ALLPRODUCT_ERROR });
    });
};

export const GetSingleProduct = (id) => (dispatch) => {
  dispatch({ type: types.GET_SINGLEPRODUCT_REQUEST });
  return axios
    .get(`https://relieved-earmuffs-colt.cyclic.app/admin/single/${id}`)
    .then((response) => {
      console.log(response.data);
      saveData("singleProduct", response.data[0]);
      dispatch({
        type: types.GET_SINGLEPRODUCT_SUCCESS,
        payload: response.data,
      });
    })
    .catch((e) => {
      console.log(e);
      dispatch({ type: types.GET_SINGLEPRODUCT_ERROR });
    });
};

export const UpdateSingleProduct = (id, payload) => async (dispatch) => {
  dispatch({ type: types.UPDATE_PRODUCT_REQUEST });
  return axios
    .patch(`https://relieved-earmuffs-colt.cyclic.app/admin/updateproduct/${id}`, payload)
    .then((response) => {
      console.log(response.data);
      dispatch({
        type: types.UPDATE_PRODUCT_SUCCESS,
        payload: response.data,
      });
    })
    .catch((e) => {
      console.log(e);
      dispatch({ type: types.UPDATE_PRODUCT_ERROR });
    });
};

export const AddNewProduct = (payload) => (dispatch) => {
  dispatch({ type: types.ADD_PRODUCT_REQUEST });
  return axios
    .post(`https://relieved-earmuffs-colt.cyclic.app/admin/addproduct`, payload)
    .then((response) => {
      console.log(response.data);
      dispatch({
        type: types.ADD_PRODUCT_SUCCESS,
        payload: response.data,
      });
    })
    .catch((e) => {
      console.log(e);
      dispatch({ type: types.ADD_PRODUCT_ERROR });
    });
};

export const DeleteProduct = (id) => (dispatch) => {
  dispatch({ type: types.DELETE_PRODUCT_REQUEST });
  return axios
    .delete(`https://relieved-earmuffs-colt.cyclic.app/admin/deleteproduct/${id}`)
    .then((response) => {
      console.log(response.data);
      dispatch({
        type: types.DELETE_PRODUCT_SUCCESS,
      });
    })
    .catch((e) => {
      console.log(e);
      dispatch({ type: types.DELETE_PRODUCT_ERROR });
    });
};

export const GetAllCustomer = () => (dispatch) => {
  dispatch({ type: types.GET_ALLCUSTOMER_REQUEST });
  return axios
    .get("https://relieved-earmuffs-colt.cyclic.app/admin/allcustomer")
    .then((response) => {
      console.log(response.data);
      dispatch({
        type: types.GET_ALLCUSTOMER_SUCCESS,
        payload: response.data,
      });
    })
    .catch((e) => {
      console.log(e);
      dispatch({ type: types.GET_ALLCUSTOMER_ERROR });
    });
};

export const GetSingleCustomer = (id) => (dispatch) => {
  dispatch({ type: types.GET_SINGLEPRODUCT_REQUEST });
  return axios
    .get(`https://relieved-earmuffs-colt.cyclic.app/admin/singlecustomer/${id}`)
    .then((response) => {
      console.log(response.data);
      saveData("singleUser", response.data[0]);
      dispatch({
        type: types.GET_SINGLEPRODUCT_SUCCESS,
        payload: response.data,
      });
    })
    .catch((e) => {
      console.log(e);
      dispatch({ type: types.GET_SINGLEPRODUCT_ERROR });
    });
};

export const DeleteSingleCustomer = (id) => (dispatch) => {
  dispatch({ type: types.GET_SINGLEPRODUCT_REQUEST });
  return axios
    .delete(`https://relieved-earmuffs-colt.cyclic.app/admin/deletecustomer/${id}`)
    .then((response) => {
      console.log(response.data);
      dispatch({
        type: types.GET_SINGLEPRODUCT_SUCCESS,
        payload: response.data,
      });
    })
    .catch((e) => {
      console.log(e);
      dispatch({ type: types.GET_SINGLEPRODUCT_ERROR });
    });
};

export const GetAllAdmins = () => (dispatch) => {
  dispatch({ type: types.GET_ALLADMINS_REQUEST });
  return axios
    .get("https://relieved-earmuffs-colt.cyclic.app/admin/alladmins")
    .then((response) => {
      console.log(response.data);
      dispatch({
        type: types.GET_ALLADMINS_SUCCESS,
        payload: response.data,
      });
    })
    .catch((e) => {
      console.log(e);
      dispatch({ type: types.GET_ALLADMINS_ERROR });
    });
};

export const GetSingleAdmin = (id) => (dispatch) => {
  dispatch({ type: types.GET_SINGLEPRODUCT_REQUEST });
  return axios
    .get(`https://relieved-earmuffs-colt.cyclic.app/admin/singleadmin/${id}`)
    .then((response) => {
      console.log(response.data);
      saveData("singleUser", response.data[0]);
      dispatch({
        type: types.GET_SINGLEPRODUCT_SUCCESS,
        payload: response.data,
      });
    })
    .catch((e) => {
      console.log(e);
      dispatch({ type: types.GET_SINGLEPRODUCT_ERROR });
    });
};

export const DeleteSingleAdmin = (id) => (dispatch) => {
  dispatch({ type: types.GET_SINGLEPRODUCT_REQUEST });
  return axios
    .delete(`https://relieved-earmuffs-colt.cyclic.app/admin/deleteadmin/${id}`)
    .then((response) => {
      console.log(response.data);
      dispatch({
        type: types.GET_SINGLEPRODUCT_SUCCESS,
        payload: response.data,
      });
    })
    .catch((e) => {
      console.log(e);
      dispatch({ type: types.GET_SINGLEPRODUCT_ERROR });
    });
};
