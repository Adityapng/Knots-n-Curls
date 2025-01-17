"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };

    setUpProviders();
  }, []);

  return (
    <>
      <div className=" z-50 fixed w-screen px-4 pt-4 pb-2 lg:pt-6 lg:pb-2.5 2xl:pt-6 2xl:pb-5   lg:px-10 text-base lg:text-[20px] leading-5 font-medium text-white flex justify-between  font-dmsans">
        <Link className="flex items-center " href="/">
          KNOTS & CURLS
        </Link>

        {/* {alert(providers)} */}

        {/* Desktop navigation */}
        <div className="hidden gap-8 lg:flex lg:gap-14 2xl:gap-20">
          {session?.user ? (
            <>
              <Link className="flex items-center " href="/book-appointment">
                Book appointment
              </Link>

              <Link className="flex items-center " href="/about">
                About
              </Link>

              <div>
                <Image
                  src={session?.user.image}
                  width={40}
                  height={40}
                  className="object-contain border-2 border-white rounded-full cursor-pointer "
                  onClick={() => setToggleDropdown((prev) => !prev)}
                  alt="Profile Image"
                />
                {toggleDropdown && (
                  <div className=" dropdown">
                    <Link
                      href="/profile"
                      className="dropdown_link "
                      onClick={() => setToggleDropdown(false)}
                    >
                      My Profile
                    </Link>
                    <Link
                      href="/book-appointment"
                      className="dropdown_link "
                      onClick={() => setToggleDropdown(false)}
                    >
                      Book an appointment
                    </Link>
                    <button
                      onClick={() => {
                        setToggleDropdown(false);
                        signOut();
                      }}
                      className="w-full h-10 mt-1 text-sm text-white bg-black rounded-full "
                    >
                      Log out
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    className="cursor-pointer "
                    type="button"
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                  >
                    Sign In
                  </button>
                ))}
            </>
          )}
        </div>

        {/* Mobile navigation */}
        <div className="flex gap-8 lg:hidden">
          {session?.user ? (
            <div>
              <Image
                src={session?.user.image}
                width={40}
                height={40}
                className="object-contain border-2 border-white rounded-full cursor-pointer"
                onClick={() => setToggleDropdown((prev) => !prev)}
                alt="Profile Image"
              />
              {toggleDropdown && (
                <div className=" dropdown">
                  <Link
                    href="/profile"
                    className="dropdown_link "
                    onClick={() => setToggleDropdown(false)}
                  >
                    My Profile
                  </Link>
                  <Link
                    href="/book-appointment"
                    className="dropdown_link "
                    onClick={() => setToggleDropdown(false)}
                  >
                    Book an appointment
                  </Link>
                  <Link
                    href="/about"
                    className="dropdown_link "
                    onClick={() => setToggleDropdown(false)}
                  >
                    About
                  </Link>

                  <button
                    onClick={() => {
                      setToggleDropdown(false);
                      signOut();
                    }}
                    className="w-full h-10 mt-1 text-sm text-white bg-black rounded-full "
                  >
                    Log out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    type="button"
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                  >
                    Sign In
                  </button>
                ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Nav;
