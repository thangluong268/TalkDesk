import React from "react";
import DisplayStaff from "./pages/Admin/DisplayStaff";
import DisplayDeletedStaff from "./pages/Admin/DisplayDeletedStaff";
import AddStaff from "./pages/Admin/AddStaff";
import AddAgent from "./pages/Admin/AddAgent";
import AddCall from "./pages/Admin/AddCall";

import { useParams, Routes, Route } from "react-router-dom";
import RemoveSpecialCharacters from "./utils/RemoveSpecialCharacters";
import Header from "./component/Header";

function AppAdmin() {
  const dict = {
    AddStaff: { src: <AddStaff /> },
    EditStaff: { src: <AddStaff /> },
    AddAgent: { src: <AddAgent /> },
    AddCall: { src: <AddCall /> },
    DisplayDeletedStaff: { src: <DisplayDeletedStaff /> },
  };
  const Element = () => {
    let params = useParams();
    if (params.slug == undefined) return;
    params = RemoveSpecialCharacters(params.slug);
    return dict[params].src;
  };
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/admin" element={<DisplayStaff />} />
        <Route path="/admin/:slug" element={<Element />} />
      </Routes>
    </div>
  );
}

export default AppAdmin;
