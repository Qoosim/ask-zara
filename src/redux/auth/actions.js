import Cookies from 'js-cookie';
import { store } from '../store';


export const signUp = async (data, navigate, reset) => {
    const dispatch = store.dispatch;
    dispatch(setIsLoading(true));
    const userData = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
      description: data.description,
      phone: data.phone,
      gender: data.gender,
      role: data.role
    };
    try {
      const response = await API.post("/auth/register", userData);
      const jsonData = response?.data;
  
      if (jsonData?.success) {
        dispatch(setIsLoading(false));
        reset();
        alertNotification("Account created successfully.", "success");
        localStorage.setItem("email", userData.email);
        navigate("/login");
      } else {
        dispatch(setIsLoading(false));
        alertNotification("Registration failed. Please try again.", "error");
      }
    } catch (error) {
        dispatch(setIsLoading(false))
        if (error?.response?.data?.message) {
            alertNotification(error?.response?.data.message, "error");
        }
    }
  };

export const login = async (data, navigate) => {
    const dispatch = store.dispatch;
    dispatch(setIsLoading(true));
    try {
      const response = await API.post("/auth/login", data);
      if (response?.data?.success) {
        const userData = response.data.user;
          dispatch(setUser(userData));
          dispatch(setIsLoading(false));
          alertNotification("Logged in successfully.", "success");
          navigate('/dashboard')
      } else {
        dispatch(setUserError("Login failed. Please try again."));
        dispatch(setIsLoading(false));
        alertNotification("Login failed. Please try again.", "error");
      }
    } catch (error) {
      dispatch(setUserError("An error occurred, please try again later"));
      dispatch(setIsLoading(false));
      alertNotification(error?.response?.data?.message, "error");
    }
  };


export const saveCookie = (name, value) => {
  if (typeof value !== "string") {
    const newVale = JSON.stringify(value);
    Cookies.set(name, newVale);
  } else {
      Cookies.set(name, value);
  }
};
  
export const getCookie = (name) => {
  let value;
  const jsonString = Cookies.get(name);
  try {
    if (typeof jsonString === "string") {
      const jsonObject = JSON.parse(jsonString);
      value = jsonObject;
    }
  } catch (error) {
    value = jsonString;
  }
  return value;
};

export const signOut = () => {
  return async (dispatch) => {
    dispatch({ type: "RESET" });
    Cookies.remove("userData");
  };
};