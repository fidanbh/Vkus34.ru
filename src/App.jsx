import { useState, createContext } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/UI/Navbar/Navbar";
import TopNav from "./Components/UI/TopNav/TopNav";
import Menu from "./Components/UI/Menu/Menu";
import CompanyInfo from "./Components/UI/CompanyInfo/CompanyInfo";
import Feedbacks from "./Components/UI/Feedbacks/Feedbacks";
import Whywe from "./Components/UI/WhyWe/Whywe";
import TrustUs from "./Components/UI/TrustUs/TrustUs";
import Ourservice from "./Components/UI/Ourservice/Ourservice";
import WorkWithUs from "./Components/UI/WorkWithUs/WorkWithUs";
import WhatWeService from "./Components/UI/WhatWeService/WhatWeService";
import EightReason from "./Components/UI/EightReason/EightReason";
import GetOffer from "./Components/UI/GetOffer/GetOffer";
import Footer from "./Components/UI/Footer/Footer";
import ToCustomers from "./Components/Pages/ToCustomers/ToCustomers";
import Reviews from "./Components/Pages/Reviews/Reviews";
import Dostavka from "./Components/UI/Dostavka/Dostavka";
import OrganizationKitchen from "./Components/UI/OrganizationKitchen/OrganizationKitchen";
import Slide from "./Components/UI/Slide/Slide";
import PartsOfCompany from "./Components/UI/PartsOfCompany/PartsOfCompany";
import ClickMenu from "./Components/UI/ClickMenu/ClickMenu";
import MobileButton from "./Components/UI/MobileButton/MobileButton";
import MailButton from "./Components/UI/MailButton/MailButton";
import NewPage from "./Components/UI/NewPage/NewPage";
import ImageOfKitchen from "./Components/UI/ImageOfKitchen/ImageOfKitchen";
import ImageOfProduction from "./Components/UI/ImageOfProduction/ImageOfProduction";
import Contact from "./Components/Pages/Contact/Contact";
import About from "./Components/Pages/About/About";
import MainMenu from "./Components/UI/MainMenu/MainMenu";
import OpeningKitchen from "./Components/UI/OpeningKitchen/OpeningKitchen";
import OrganizationFood from "./Components/UI/OrganizationFood/OrganizationFood";
import Test from "./Components/UI/Testing/Test";
import Test1 from "./Components/UI/Testing/Test1";
import Slayd from "./Components/UI/Slayd/Slayd";
import Slaydi from "./Components/UI/Slaydi/Slaydi";
import Containerler from "./Components/UI/Container/Containerler";
import ScrollToTop from "./Components/UI/ScrollToTop/ScrollToTop";

export const ThemeContext = createContext(undefined);

function App() {
  const [open, setOpen] = useState(false);
  const clickClose = () => {
    setOpen((prev) => !prev);
  };

  const openPage = () => {
    setOpen((prev) => !prev);
  };

  const searchObj = {
    open,
    setOpen,
    clickClose,
    openPage,
  };
  return (
    <>
      {/* <TopNav/> */}
      <ThemeContext.Provider value={searchObj}>
        <BrowserRouter>
          <ScrollToTop />
          <TopNav />

          <Routes>
            <Route path="/" element={<MainMenu />}></Route>
            <Route path="/photoKitchen" element={<ImageOfKitchen />}></Route>
            <Route
              path="/photoProduction"
              element={<ImageOfProduction />}
            ></Route>
            <Route path="/mobileButton" element={<MobileButton />}></Route>
            <Route path="/mailButton" element={<MailButton />}></Route>
            <Route path="/newPage" element={<NewPage />}></Route>
            {/* <Route path="/service" element={<NewPage />}></Route> */}
            <Route path="/contacts" element={<Contact />}></Route>
            <Route path="/aboutCompany" element={<About />}></Route>
            <Route path="/reviews" element={<Reviews />}></Route>
            <Route path="/customers" element={<ToCustomers />}></Route>
            <Route path="/privacy-policy" element={<NewPage />}></Route>
            <Route
              path="/otkritiye-stolovoy"
              element={<OpeningKitchen />}
            ></Route>
            <Route path="/dostavka-pitaniya" element={<Dostavka />}></Route>
            <Route
              path="/organizachiya-pitaniya-na-predpriyatiya"
              element={<OrganizationKitchen />}
            ></Route>
            <Route
              path="/organizachiya-pitaniya-na-sotrudnikov-rabotnikov"
              element={<OrganizationFood />}
            ></Route>
          </Routes>

          <Footer />
          {/* <Slayd /> */}
        </BrowserRouter>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
