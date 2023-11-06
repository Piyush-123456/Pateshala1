import axios from "@/utils/axios";
import { addstudent, removeStudent, iserror, removeerror, addinternships, addjobs } from "../reducers/studentReducer"
import { toast } from "react-toastify";

export const asynccurrentstudent = () => async (dispatch, getState) => {
    try {
        const { data } = await axios.post("/student");
        dispatch(addstudent(data.student));
    }
    catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}
export const asyncsignupstudent = (student) => async (dispatch, getState) => {

    try {
        const { data } = await axios.post("/student/signup", student);
        asynccurrentstudent();
        console.log(data);
    }
    catch (error) {
        dispatch(iserror(error.response.data.message))
    }

}

export const asyncsigninstudent = (student) => async (dispatch, getState) => {

    try {
        const { data } = await axios.post("/student/signin", student);
        asynccurrentstudent();
    }
    catch (error) {
        dispatch(iserror(error.response.data.message))
    }

}

export const asyncsignoutstudent = (student) => async (dispatch, getState) => {

    try {
        const { data } = await axios.get("/student/signout", student);
        dispatch(removeStudent());
    }
    catch (error) {
        dispatch(iserror(error.response.data.message))
    }

}
export const asyncupdatestudent = (student) => async (dispatch, getState) => {

    try {
        const { _id } = getState().studentReducer.student;
        const { data } = await axios.post("/student/update/" + _id, student);
        dispatch(asynccurrentstudent());
    }
    catch (error) {
        dispatch(iserror(error.response.data.message))
    }

}
export const asyncavatarstudent = (avatar) => async (dispatch, getState) => {
    try {
        const { _id } = getState().studentReducer.student;
        const { data } = await axios.post("/student/avatar/" + _id, avatar);
        dispatch(asynccurrentstudent());
    }
    catch (error) {
        dispatch(iserror(error.response.data.message))
    }
}
export const asyncresetpasswordstudent = (password) => async (dispatch, getState) => {
    try {
        const { _id } = getState().studentReducer.student;
        const { data } = await axios.post("/student/reset-password/" + _id, password); // Pass the password as an object
        dispatch(asynccurrentstudent());
    }
    catch (error) {
        dispatch(iserror(error.response.data.message));
    }
}
export const asyncforgetpasswordstudent = (email) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post("/student/send-mail/", email); // Pass the password as an object
        dispatch(asynccurrentstudent());
    }
    catch (error) {
        dispatch(iserror(error.response.data.message));
    }
}
export const asyncotppasswordstudent = (pwd) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post("/student/forget-link/", pwd); // Pass the password as an object
        dispatch(asynccurrentstudent());
    }
    catch (error) {
        dispatch(iserror(error.response.data.message));
    }
}

export const asyncalljobs = () => async (dispatch, getState) => {
    try {
        const { data } = await axios.post("/student/alljobs/"); // Pass the password as an object
        dispatch(addjobs(data.jobs));
        // console.log(data);
    }
    catch (error) {
        dispatch(iserror(error.response.data.message));
    }
}

export const asyncallinternships = () => async (dispatch, getState) => {
    try {
        const { data } = await axios.post("/student/allinternships/"); // Pass the password as an object
        dispatch(addinternships(data.internships));
        // console.log(data)
    }
    catch (error) {
        dispatch(iserror(error.response.data.message));
    }
}



export const asyncapplyjobstudent = (id) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post("/student/apply/job/" + id); // Pass the password as an object
        dispatch(asynccurrentstudent());
        dispatch(asyncalljobs());
    }
    catch (error) {
        dispatch(iserror(error.response.data.message));
    }
}


export const asyncapplyinternshipstudent = (id) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post("/student/apply/internship/" + id); // Pass the password as an object
        dispatch(asynccurrentstudent());
        dispatch(asyncallinternships());
    }
    catch (error) {
        dispatch(iserror(error.response.data.message));
    }
}


export const asyncaddeducationstudent = (edu) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post("/resume/add-edu", edu); // Pass the password as an object
        dispatch(asynccurrentstudent());
    }
    catch (error) {
        dispatch(iserror(error.response.data.message));
    }
}

export const asyncaddjobstudent = (edu) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post("/resume/add-job", edu); // Pass the password as an object
        dispatch(asynccurrentstudent());
    }
    catch (error) {
        dispatch(iserror(error.response.data.message));
    }
}


export const asyncaddinternshipstudent = (it) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post("/resume/add-internship", it); // Pass the password as an object
        dispatch(asynccurrentstudent());
    }
    catch (error) {
        dispatch(iserror(error.response.data.message));
    }
}

export const asyncaddrespstudent = (it) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post("/resume/add-res", it); // Pass the password as an object
        dispatch(asynccurrentstudent());
    }
    catch (error) {
        dispatch(iserror(error.response.data.message));
    }
}
export const asyncaddprojectstudent = (it) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post("/resume/add-projects", it); // Pass the password as an object
        dispatch(asynccurrentstudent());
    }
    catch (error) {
        dispatch(iserror(error.response.data.message));
    }
}


export const asyncaddskill = (it) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post("/resume/add-skills", it); // Pass the password as an object
        dispatch(asynccurrentstudent());
    }
    catch (error) {
        dispatch(iserror(error.response.data.message));
    }
}

export const asyncdeleteedustudent = (id) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post("/resume/delete-edu/" + id); // Pass the password as an object
        dispatch(asynccurrentstudent());
    }
    catch (error) {
        dispatch(iserror(error.response.data.message));
    }
}


export const asynceditedustudent = (id, edu) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post("/resume/edit-edu/" + id, edu); // Pass the password as an object
        dispatch(asynccurrentstudent());
    }
    catch (error) {
        dispatch(iserror(error.response.data.message));
    }
}

export const asynceditprojectstudent = (id, job) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post("/resume/edit-projects/" + id, job); // Pass the password as an object
        dispatch(asynccurrentstudent());
    }
    catch (error) {
        dispatch(iserror(error.response.data.message));
    }
}

export const asynceditskillstudent = (id, job) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post("/resume/edit-skills/" + id, job); // Pass the password as an object
        dispatch(asynccurrentstudent());
    }
    catch (error) {
        dispatch(iserror(error.response.data.message));
    }
}
export const asynceditjobsstudent = (id, edu) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post("/resume/edit-jobs/" + id, edu); // Pass the password as an object
        dispatch(asynccurrentstudent());
    }
    catch (error) {
        dispatch(iserror(error.response.data.message));
    }
}

export const asynceditrespstudent = (id, edu) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post("/resume/edit-res/" + id, edu); // Pass the password as an object
        dispatch(asynccurrentstudent());
    }
    catch (error) {
        dispatch(iserror(error.response.data.message));
    }
}
export const asyncdeletejobstudent = (id) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post("/resume/delete-jobs/" + id); // Pass the password as an object
        dispatch(asynccurrentstudent());
    }
    catch (error) {
        dispatch(iserror(error.response.data.message));
    }
}


export const asyncdeleteinternstudent = (id) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post("/resume/delete-internship/" + id); // Pass the password as an object
        dispatch(asynccurrentstudent());
    }
    catch (error) {
        dispatch(iserror(error.response.data.message));
    }
}


export const asyncdeleteinternresp = (id) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post("/resume/delete-res/" + id); // Pass the password as an object
        dispatch(asynccurrentstudent());
    }
    catch (error) {
        dispatch(iserror(error.response.data.message));
    }
}


export const asyncdeleteinternpro = (id) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post("/resume/delete-projects/" + id); // Pass the password as an object
        dispatch(asynccurrentstudent());
    }
    catch (error) {
        dispatch(iserror(error.response.data.message));
    }
}

export const asyncdeleteinternskill = (id) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post("/resume/delete-skills/" + id); // Pass the password as an object
        dispatch(asynccurrentstudent());
    }
    catch (error) {
        dispatch(iserror(error.response.data.message));
    }
}

export const asynceditinternshipstudent = (id, intern) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post("/resume/edit-internship/" + id, intern); // Pass the password as an object
        dispatch(asynccurrentstudent());
    }
    catch (error) {
        dispatch(iserror(error.response.data.message));
    }
}