import * as yup from "yup";

export const signupSchema = yup.object({
  fullname: yup.string().required("Full name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  description: yup.string().required("Please state your need"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[a-z]/, "Password must include at least one lowercase letter")
    .matches(/[A-Z]/, "Password must include at least one uppercase letter")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must include at least one symbol"
    )
    .required("Password is required"),
  gender: yup.string().required("Gender is required"),
  role: yup.string().required("Please select your role"),
  phone: yup
    .string()
    .min(11, "Phone number must be at least 10 characters")
    .matches(
      /^0\d{10}$/,
      "Phone number must start with '0' and be 11 digits long"
    )
    .required("Phone number is required"),
});

export const formValidationSchema = yup.object({
  firstName: yup
    .string()
    .required("First name is required"),
  lastName: yup
    .string()
    .required("Last name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  phoneNumber: yup
    .string()
    .min(11, "Phone number must be at least 10 characters")
    .matches(
      /^0\d{10}$/,
      "Phone number must start with '0' and be 11 digits long"
    )
    .required("Phone number is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[a-z]/, "Password must include at least one lowercase letter")
    .matches(/[A-Z]/, "Password must include at least one uppercase letter")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must include at least one symbol"
    )
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "Passwords must match")
    .required("Confirm Password is required"),
  age: yup
    .number()
    .typeError("Age must be a number")
    .min(18, "You must be at least 18 years old")
    .max(100, "You cannot be older than 100 years")
    .required("Age is required"),
  gender: yup
    .string()
    .required("Gender is required"),
  interests: yup
    .array()
    .of(yup.string())
    .min(1, "Select at least one interest")
    .required("Please, select at least an interest"),
  birthDate: yup
    .string()
    .required("Date of birth is required")
})

export const loginSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[a-z]/, "Password must include at least one lowercase letter")
    .matches(/[A-Z]/, "Password must include at least one uppercase letter")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must include at least one symbol"
    )
    .required("Password is required"),
});
