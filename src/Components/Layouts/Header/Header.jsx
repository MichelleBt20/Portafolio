import { Navbar } from "@C/Layouts/NavBar/NavBar.jsx";
import { ItemNavBar } from '@C/UI/ItemNavBar/ItemNavBar.jsx';
import { useState } from "react";

export const Header = () => {
  const ItemStyles = "block py-0 sm:py-4 text-white hover:text-blue-700 font-medium";

  return (
    <header className="bg-[#111827] w-full p-4 text-center flex items-center justify-between gap-8 flex-col sm:flex-row sm:justify-center">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-2xl font-semibold text-white leading-6">Michelle Betancurt</h1>
      </div>
      <Navbar
        styles={{
          nav: "justify-center items-center sm:flex",
          ul: "flex justify-center items-center gap-6",
        }}
      >
        <ItemNavBar styles={ItemStyles} url="/">Inicio</ItemNavBar>
        <ItemNavBar styles={ItemStyles} url="/Skills">Habilidades</ItemNavBar>
        <ItemNavBar styles={ItemStyles} url="/Experience">Experiencia</ItemNavBar>
      </Navbar>
    </header>
  );
};