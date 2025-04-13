import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { ErrorMessage } from "../../utils/messages/error-message";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../utils/validations";
import { login } from "../../redux/auth/actions";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { isLoading } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    getValues,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      matric_number: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => login(data, navigate);

  return (
    <section className="relative w-full h-screen">
      <div className="absolute inset-0 bg-[#f7b4b2cc] opacity-85 z-0"></div>
      <img
        src="/assets/loginimage.jpg"
        alt="Login Image"
        className="w-full h-full object-cover"
      />
      <div className="max-w-[90%] sm:max-w-[70%] mx-auto w-[85%] sm:w-[60%] lg:w-[43%] z-20 absolute left-1/2 transform -translate-x-1/2 top-40">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-[#434b51] p-10 rounded-lg"
        >
          <div className="flex flex-col gap-5">
            <input
              type="text"
              id="matric_number"
              placeholder="Matric Number"
              className="p-2 bg-[#eef1f1] rounded-md focus:outline-none focus:ring-1 focus:ring-slate-300 focus:border-transparent border-none w-full placeholder:text-[#504e4e] text-[#000]"
              {...register("matric_number")}
            />
            {errors.matric_number?.message && (
              <ErrorMessage message={errors.matric_number.message} />
            )}
            <div className="relative flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Password"
                className="p-2 bg-[#eef1f1] rounded-md focus:outline-none focus:ring-1 focus:ring-slate-300 focus:border-transparent border-none w-full pr-10 placeholder:text-[#504e4e] text-[#000]"
                {...register("password")}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 mr-3"
              >
                {showPassword ? (
                  <faEye className="text-slate-300" />
                ) : (
                  <faEyeSlash className="text-slate-300" />
                )}
              </button>
            </div>
            {errors.password?.message && (
              <ErrorMessage message={errors.password.message} />
            )}
            <button
              type="submit"
              disabled={isLoading}
              className="bg-[#117031] w-full p-2 rounded-md text-white font-semibold hover:opacity-80"
            >
              {isSubmitting ? (
                <div className="flex justify-center items-center">
                  <svg
                    className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>{" "}
                  Processing...
                </div>
              ) : (
                "Sign In"
              )}
            </button>
            <div className="flex justify-between items-center w-full mt-3 text-slate-400">
              <div className="font-telex text-sm sm:text-base text-center font-medium">
                <Link
                  href={`/forgot-password`}
                  className="hover:opacity-60 cursor-pointer"
                >
                  Forgot Password
                </Link>
              </div>
              <div className="font-telex text-sm sm:text-base text-center font-medium">
                Don&apos;t an account?{" "}
                <Link
                  href={`/signup`}
                  className="hover:opacity-60 text-[#4dd379]"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
