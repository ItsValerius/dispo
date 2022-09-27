import React from "react";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {
  HiChevronDown,
  HiOutlineUserGroup,
  HiOutlineShoppingCart,
  HiOutlineMenu,
  HiOutlineX,
} from "react-icons/hi";
import Link from "next/link";
import Image from "next/future/image";
import img from "../public/logo.png";
const Nav = () => {
  const MenuItems = [
    {
      id: 1,
      name: "Screens",
      href: "/screens",
    },
    {
      id: 2,
      name: "Netze",
      href: "/netze",
    },
    { id: 3, name: "Aufträge", href: "/aufträge" },
  ];

  return (
    <Popover className="sticky top-0 z-50 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-6 xl:justify-start xl:space-x-10">
          <div className="flex justify-start xl:w-0 xl:flex-1">
            <Link href="/">
              <a>
                <span className="sr-only">RBL</span>
                <Image
                  className="h-auto w-full sm:h-12"
                  priority={true}
                  src={img}
                  alt=""
                />
              </a>
            </Link>
          </div>
          <div className="-my-2 -mr-2 lg:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
              <span className="sr-only">Open menu</span>
              <HiOutlineMenu className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 lg:flex">
            {MenuItems.map((item) => {
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  {item.name}
                </Link>
              );
            })}
          </Popover.Group>
        </div>
      </div>
      {/* Mobile Header */}
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition lg:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <Image
                    className="h-auto w-full sm:h-12"
                    priority={true}
                    src={img}
                    alt=""
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                    <span className="sr-only">Close menu</span>
                    <HiOutlineX className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                {MenuItems.map((item) => {
                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      className="text-base font-medium text-gray-500 hover:text-gray-900"
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Nav;
