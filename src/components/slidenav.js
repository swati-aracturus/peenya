"use client";

import cn from "classnames";
import { useState, useEffect, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

function Slide() {
  const notify = () => toast.success("Successfully Logged In!");

  const [isOpen, setIsOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const popupRef = useRef(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLoginClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      handleClosePopup();
    }
  };

  useEffect(() => {
    if (isPopupOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPopupOpen]);

  const handleUser = (e) => {
    setUser(e.target.value);
  };

  const handlePass = (e) => {
    setPass(e.target.value);
  };

  const validateForm = () => {
    if (!user.trim()) {
      toast.error("Username / Mobile No./ User ID is required");
    } else if (!pass.trim()) {
      toast.error("Password is required");
    } else {
      registerEvent();
    }
  };

  const registerEvent = async () => {
    const data = {
      user: user,
      password: pass,
    };
    try {
      const res = await axios.post("https://shreevct.com/api/login", data);
      console.log(res);
      notify();
      handleClosePopup();
    } catch (error) {
      console.error(error);
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <>
      <div className="desktop">
        <header className="bg-[#080A52] text-white px-16">
          <div className="flex items-center justify-between lg:container mx-auto px-6">
            <div className="flex items-center">
              <nav className="hidden lg:flex space-x-8">
                <a href="/" className="hover:text-gray-300 active">
                  Home
                </a>
                <a href="/about" className="hover:text-gray-300">
                  About
                </a>
                <a href="/membership" className="hover:text-gray-300">
                  Membership
                </a>
                <a href="/contact" className="hover:text-gray-300">
                  Contact
                </a>
                <a href="/match" className="hover:text-gray-300">
                  Matches
                </a>
              </nav>
            </div>

            <div className="flex items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="placeholder-gray-200 py-2 px-6 rounded-full bg-[#4a5c85] focus:outline-none focus:ring focus:ring-[#809cdf] text-2xl md:text-base text-fuchsia-400"
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-200"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                  </svg>
                </span>
              </div>

              <button className="w-28 py-1 ml-4 rounded-full bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring focus:ring-pink-400 text-lg">
                <a href="/registration">Register</a>
              </button>
              <button
                className="w-28 py-1 rounded-full ml-2 bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring focus:ring-pink-400 text-lg"
                onClick={handleLoginClick}
              >
                Login
              </button>

              {isPopupOpen && (
                <div className="fixed mobile inset-0 flex items-center justify-center bg-black backdrop-blur bg-opacity-50 z-50">
                  <div
                    ref={popupRef}
                    className="bg-white rounded-lg p-6 max-w-lg w-full mx-4"
                  >
                    <div className="flex justify-center items-center">
                      <p className="text-2xl text-slate-800 font-bold">
                        LOG IN
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <img src="/tb.png" className="w-36" alt="pic" />
                    </div>
                    <form
                      onSubmit={(e) => e.preventDefault()}
                      className="px-6"
                    >
                      <div className="mb-4">
                        <label className="block text-gray-700 pb-2">
                          Mobile No. / User Id / Email Id
                        </label>
                        <input
                          required
                          onChange={handleUser}
                          type="text"
                          className="w-full px-3 py-2 text-gray-600 border border-gray-400 rounded"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 pb-2">
                          Password
                        </label>
                        <input
                          required
                          onChange={handlePass}
                          type="password"
                          className="w-full px-3 py-2 text-gray-600 border border-gray-400 rounded"
                        />
                        <div className="flex justify-between pt-6">
                          <div className="flex items-center">
                            <input
                              id="remember-me"
                              type="checkbox"
                              className="rounded h-4 w-4 border-pink-600 border-2 checked:bg-pink-600"
                            />
                            <label
                              htmlFor="remember-me"
                              className="ml-2 text-base text-slate-800"
                            >
                              Remember Me
                            </label>
                          </div>
                          <a href="/forgot-password" className="text-pink-600 text-base">
                            Forgot Password
                          </a>
                        </div>
                      </div>
                      <button
                        onClick={validateForm}
                        type="submit"
                        className="w-full py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 mt-4"
                      >
                        Login
                      </button>
                      <Toaster
                        position="top-center"
                        reverseOrder={false}
                        gutter={8}
                        containerClassName=""
                        containerStyle={{}}
                        toastOptions={{
                          className: "",
                          duration: 5000,
                          style: {
                            background: "#363636",
                            color: "#fff",
                          },
                          success: {
                            duration: 3000,
                            theme: {
                              primary: "green",
                              secondary: "black",
                            },
                          },
                        }}
                      />
                      <div className="flex justify-center items-center mt-4">
                        <p className="text-lg text-slate-800">
                          Don't have an account? &nbsp;
                        </p>
                        <button
                          className="py-1 px-4 text-white rounded bg-pink-600 hover:bg-pink-700"
                          onClick={() => window.location.href = "/registration"}
                        >
                          Register
                        </button>
                      </div>
                      <div className="flex justify-center items-center pt-4">
                        <svg
                          width="68"
                          height="45"
                          viewBox="0 0 68 45"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.212 40H1.064V30.564H2.394L5.418 35.338C6.118 36.444 6.664 37.438 7.112 38.404L7.14 38.39C7.028 37.13 7 35.982 7 34.512V30.564H8.148V40H6.916L3.892 35.21C3.192 34.104 2.646 33.11 2.198 32.144L2.17 32.158C2.282 33.418 2.31 34.566 2.31 36.036V40H2.212Z"
                            fill="#C82127"
                          />
                          <path
                            d="M13.6982 39.15H13.8602C15.0482 39.15 15.9122 38.062 15.9122 36.256C15.9122 34.634 15.0482 33.418 13.8362 33.418H12.3362V39.15H13.6982ZM12.3362 32.49H13.5122C14.7302 32.49 15.5342 31.406 15.5342 30.01C15.5342 28.616 14.7002 27.586 13.4462 27.586H12.3362V32.49ZM11.0402 40V27.122H13.9442C15.9782 27.122 17.0702 28.552 17.0702 30.002C17.0702 31.496 15.9542 32.59 14.7662 32.764V32.79C16.0382 32.924 16.8962 34.118 16.8962 35.984C16.8962 38.122 15.6362 39.664 13.9022 39.664H11.0402V40Z"
                            fill="#C82127"
                          />
                          <path
                            d="M21.0175 39.15H22.1715C23.3395 39.15 24.2035 38.062 24.2035 36.256C24.2035 34.634 23.3395 33.418 22.1275 33.418H20.6275V39.15H21.0175ZM20.6275 32.49H21.8035C23.0215 32.49 23.8255 31.406 23.8255 30.01C23.8255 28.616 22.9915 27.586 21.7375 27.586H20.6275V32.49ZM19.3315 40V27.122H22.2355C24.2695 27.122 25.3615 28.552 25.3615 30.002C25.3615 31.496 24.2455 32.59 23.0575 32.764V32.79C24.3295 32.924 25.1875 34.118 25.1875 35.984C25.1875 38.122 23.9275 39.664 22.1935 39.664H19.3315V40Z"
                            fill="#C82127"
                          />
                          <path
                            d="M28.6915 40V27.122H29.6395V39.07H32.3275V40H28.6915Z"
                            fill="#C82127"
                          />
                          <path
                            d="M35.3542 35.556V27.122H36.3022V35.516C36.3022 38.12 37.7142 39.358 39.5622 39.358C41.4382 39.358 42.7942 38.15 42.7942 35.56V27.122H43.7422V35.556C43.7422 38.65 42.0922 40 39.6342 40C37.1782 40 35.3542 38.654 35.3542 35.556Z"
                            fill="#C82127"
                          />
                          <path
                            d="M52.1435 36.538V32.83H49.0475V35.998C49.0475 37.244 49.9115 38.074 51.0875 38.074C52.0115 38.074 52.8215 37.682 52.9275 36.538H52.1435ZM49.0475 31.902H52.0475V29.284H49.0475V31.902ZM47.7515 29.23H52.7015V28.3H47.7515V29.23ZM47.7515 39.07V27.122H52.6475V27.658H48.6995V32.774H52.6475V33.282H48.6995V38.536H52.6475V39.07H47.7515Z"
                            fill="#C82127"
                          />
                          <path
                            d="M58.4732 40V27.658H55.6592V27.122H63.3692V27.658H60.5732V40H58.4732Z"
                            fill="#C82127"
                          />
                          <path
                            d="M66.1515 40V27.122H67.0995V39.07H69.7875V40H66.1515Z"
                            fill="#C82127"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.432 10.48C8.238 9.66 11.322 9.12 14.608 9.12C20.626 9.12 26.01 11.192 29.622 14.724L24.86 19.512L40.364 18.08L38.444 2.288L34.66 6.056C30.002 1.568 24.07 0 17.492 0C12.682 0 8.114 0.992 4.084 2.728C3.07 3.188 2.008 3.728 1.048 4.352C0.38 4.784 0 5.472 0 6.232V6.784C0 7.856 1.036 8.6 2.044 8.184L5.432 6.856V10.48ZM45.072 32.52C42.266 33.34 39.182 33.88 35.896 33.88C29.878 33.88 24.494 31.808 20.882 28.276L25.644 23.488L10.14 24.92L12.06 40.712L15.844 36.944C20.502 41.432 26.434 43 33.012 43C37.822 43 42.39 42.008 46.42 40.272C47.434 39.812 48.496 39.272 49.456 38.648C50.124 38.216 50.504 37.528 50.504 36.768V36.216C50.504 35.144 49.468 34.4 48.46 34.816L45.072 36.144V32.52Z"
                            fill="#C82127"
                          />
                        </svg>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default Slide;
