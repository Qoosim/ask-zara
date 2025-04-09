import React from "react";

export const FooterComponent = () => {
  return (
    <>
      <div className="bg-[#fcd8cd]">
        <div className="w-[90%] 2xl:w-[65%] mx-auto pt-[2rem] pb-[1rem]">
          <div className="flex justify-between">
            <div className="flex flex-col gap-[0.8rem]">
              <img src="/assets/askzaralogo.png" alt="" className="w-[6rem]" />
              <div className="flex flex-col text-[#000] text-[0.9rem]">
                <span>One conversation can make all the</span>
                <span>difference. Ask Zara Now!</span>
              </div>
              <div className="flex flex-col gap-[0.5rem]">
                <span>Follow Us on Social Media:</span>
                <div className="flex items-center gap-[0.5rem]">
                  <img
                    src="/assets/facebooklogo.png"
                    alt="Facebook logo"
                    className="w-[1.2rem] cursor-pointer"
                  />
                  <img
                    src="/assets/instalogo.png"
                    alt="Instagram logo"
                    className="w-[1.2rem] cursor-pointer"
                  />
                  <img
                    src="/assets/xtwitter.png"
                    alt="X logo"
                    className="w-[1.2rem] cursor-pointer"
                  />
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-[#000] text-[1.1rem] font-lato-bold mb-[0.4rem]">
                Quick Links
              </h3>
              <ul className="flex flex-col gap-[0.4rem] font-montserrat text-[0.9rem]">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">About Us</li>
                <li className="cursor-pointer">Resources</li>
                <li className="cursor-pointer">Therapist & Doctors</li>
                <li className="cursor-pointer">Support Group</li>
                <li className="flex items-center gap-[0.2rem]">
                  <span className="cursor-pointer">Sign Up /</span>
                  <span className="cursor-pointer">Login</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#000] text-[1.1rem] font-lato-bold mb-[0.4rem]">
                Help & Support
              </h3>
              <ul className="flex flex-col gap-[0.4rem] font-montserrat text-[0.9rem]">
                <li>FAQ</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
            <div>
              <div>
                <h3 className="text-[#000] text-[1.1rem] font-lato-bold mb-[0.4rem]">
                  Stay Connected
                </h3>
                <div className="flex flex-col text-[#000] text-[0.9rem] font-montserrat">
                  <span>Join our community and stay updated on new</span>
                  <span>
                    resources and features. Stay connected{" "}
                    <a href="" className="">
                      Now
                    </a>
                  </span>
                </div>
                <div className="mt-[1rem]">
                  <h3 className="text-[#555555] font-lato-bold text-[1.2rem]">
                    Subscribe to Our Newsletter
                  </h3>
                  <div className="flex flex-col font-montserrat text-[0.9rem] text-[#000]">
                    <span>
                      Receive articles, tips, and updates on student mental
                    </span>
                    <span>health directly in your inbox.</span>
                  </div>
                  <form
                    action=""
                    className="flex flex-col gap-[0.5rem] mt-[0.5rem]"
                  >
                    <input
                      type="text"
                      placeholder="Email address"
                      className="bg-[#fff] px-[0.7rem] py-[0.6rem] focus:outline-none rounded-[0.2rem]"
                    />
                    <button
                      className="bg-[#ff6e60] w-fit px-[0.7rem] py-[0.4rem] text-[#fff] font-lato-bold text-[1rem] rounded-[0.3rem] cursor-pointer"
                      role="button"
                    >
                      Subscribe Now
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <span className="flex justify-center mt-[3rem] text-[#000] text-[0.8rem]">
            &copy;{" "}
            <span className="mx-[0.4rem]">{new Date().getFullYear()}</span> Ask
            Zara. All rights reserved.
          </span>
        </div>
      </div>
    </>
  );
};
