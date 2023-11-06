import axios from "@/utils/axios";
import { addemploye, removeemploye, iserror, removeerror , addinternships, addjobs } from "../reducers/employeReducer"
import { toast } from "react-toastify";

export const asynccurrentemploye = () => async (dispatch, getState) => {
    try {
        const { data } = await axios.post("/employe/current");
        dispatch(addemploye(data.employe));
    }
    catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}
export const asyncsignupemploye = (employe) => async (dispatch, getState) => {

    try {
        const { data } = await axios.post("/employe/signup", employe);
        asynccurrentemploye();
        console.log(data);
    }
    catch (error) {
        dispatch(iserror(error.response.data.message))
    }

}

export const asyncsigninemploye = (employe) => async (dispatch, getState) => {

    try {
        const { data } = await axios.post("/employe/signin", employe);
        asynccurrentemploye();
    }
    catch (error) {
        dispatch(iserror(error.response.data.message))
    }

}

export const asyncsignoutemploye = (employe) => async (dispatch, getState) => {

    try {
        const { data } = await axios.get("/employe/signout", employe);
        dispatch(removeemploye());
    }
    catch (error) {
        dispatch(iserror(error.response.data.message))
    }

}
export const asyncupdateemploye = (employe) => async (dispatch, getState) => {

    try {
        const { _id } = getState().employeReducer.employe;
        const { data } = await axios.post("/employe/update/" + _id, employe);
        dispatch(asynccurrentemploye());
    }
    catch (error) {
        dispatch(iserror(error.response.data.message))
    }

}
export const asyncavataremploye = (avatar) => async (dispatch, getState) => {
    try {
        const { _id } = getState().employeReducer.employe;
        const { data } = await axios.post("/employe/avatar/" + _id, avatar);
        dispatch(asynccurrentemploye());
    }
    catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}
export const asyncresetpasswordemploye = (password) => async (dispatch, getState) => {
    try {
        const { _id } = getState().employeReducer.employe;
        const { data } = await axios.post("/employe/reset-password/" + _id, password ); // Pass the password as an object
        dispatch(asynccurrentemploye());
    }
    catch (error) {
        dispatch(iserror(error.response.data.message));
    }
}
export const asyncforgetpasswordemploye = (email) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post("/employe/send-mail/",email ); // Pass the password as an object
        dispatch(asynccurrentemploye());
    }
    catch (error) {
        dispatch(iserror(error.response.data.message));
    }
}
export const asyncotppasswordemploye = (pwd) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post("/employe/forget-link/",pwd ); // Pass the password as an object
        dispatch(asynccurrentemploye());
    }
    catch (error) {
        dispatch(iserror(error.response.data.message));
    }
}

export const asyncalljobs = () => async (dispatch, getState) => {
    try {
        const { data } = await axios.post("employe/job/read"); // Pass the password as an object
        console.log(data);
        dispatch(addjobs(data.jobs));
    }
    catch (error) {
        dispatch(iserror(error.response.data.message));
    }
}

export const asyncallinternships = () => async (dispatch, getState) => {
    try {
        const { data } = await axios.post("employe/internship/read"); // Pass the password as an object
        dispatch(addinternships(data.internships));
        console.log(data)
    }
    catch (error) {
        dispatch(iserror(error.response.data.message));
    }
}



// export const asyncapplyjobemploye = (id) => async (dispatch, getState) => {
//     try {
//         const { data } = await axios.post("/employe/apply/job/"+id ); // Pass the password as an object
//         dispatch(asynccurrentemploye());
//         dispatch(asyncalljobs());
//     }
//     catch (error) {
//         dispatch(iserror(error.response.data.message));
//     }
// }

// export const asyncapplyinternshipemploye = (id) => async (dispatch, getState) => {
//     try {
//         const { data } = await axios.post("/employe/apply/internship/"+id ); // Pass the password as an object
//         dispatch(asynccurrentemploye());
//         dispatch(asyncallinternships());
//     }
//     catch (error) {
//         dispatch(iserror(error.response.data.message));
//     }
// }


export const asynccreatejobemploye = (job) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post("/employe/job/create/",job ); // Pass the password as an object
        dispatch(asynccurrentemploye());
    }
    catch (error) {
        dispatch(iserror(error.response.data.message));
    }
}

export const asynccreateinternshipemploye = (job) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post("/employe/internship/create/",job ); // Pass the password as an object
        dispatch(asynccurrentemploye());
    }
    catch (error) {
        dispatch(iserror(error.response.data.message));
    }
}