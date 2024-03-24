import React, { useContext } from "react";
import Header from "./Header";
import Aside from "./Aside";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

import AddSudent from "../components/students/AddSudent";
import UpdateStudent from "../components/students/UpdateStudent";
import Login from "../components/pages/Login";
import { CreateContext } from "../context/ContentProvider";
const Page = () => {
  const { hidden } = useContext(CreateContext);
  return (
    <>
    <div className="relative">
      <nav className="bg-white border-b border-gray-200 fixed z-30 w-full">
        <Header />
      </nav>
      <div className="flex overflow-hidden bg-white pt-16">
        <Aside />
        <div
          className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10"
          id="sidebarBackdrop"
        />
        <div
          id="main-content"
          className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64"
        >
          <main>
            <div className="pt-6 px-4 ">
              <Outlet />
              {hidden && (
                <div className="fixed z-50 inset-0 backdrop-sepia-0">
                  <AddSudent />
                </div>
              )}
             
            </div>
          </main>
          <footer className="bg-white md:flex md:items-center md:justify-between shadow rounded-lg p-4 md:p-6 xl:p-8 my-6 mx-4">
            <Footer />
          </footer>
          <p className="text-center text-sm text-gray-500 my-10">
            © 2019-2021{" "}
            <a href="#" className="hover:underline" target="_blank">
              Themesberg
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Page;
