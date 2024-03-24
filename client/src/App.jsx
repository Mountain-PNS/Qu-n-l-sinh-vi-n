import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Page from "./layout/Page";
import ListSudent from "./components/students/ListSudent";
import UpdateStudent from "./components/students/UpdateStudent";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import List from "./components/lecturers/List";
import Update from "./components/lecturers/Update";
import Create from "./components/lecturers/Create";
import ListScores from "./components/scores/List";
import UpdateScores from "./components/scores/Update";
import ListClass from "./components/class/ListClass";
import UpdateClass from "./components/class/UpdateClass";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Page />}>
          <Route path="/students" element={<ListSudent />} />
          <Route path="/students/:id" element={<UpdateStudent />} />
          <Route path="/lecturers" element={<List />} />
          <Route path="/lecturers/:id" element={<Update />} />
          <Route path="/lecturers/add" element={<Create />} />
          <Route path="/scores" element={<ListScores />} />
          <Route path="/scores/:id" element={<UpdateScores />} />
          <Route path="/classroom" element={<ListClass />} />
          <Route path="/classroom/:id" element={<UpdateClass />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
