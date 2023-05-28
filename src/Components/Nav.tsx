'use client';
import Image from "next/image";

import logoImg from '../assets/logo.svg';
import Link from "next/link";

import { FiDownload, FiMenu } from 'react-icons/fi';
import { useEffect, useState } from "react";

interface MenuType {
  menu: number
}

export function Nav(props: MenuType) {
  const menu = props.menu;
  const [menuMobileActive, setMenuMobileActive] = useState(false);

  function handleActiveMenu(){
    if(menuMobileActive){
      setMenuMobileActive(false)
    } else {
      setMenuMobileActive(true)
    }
  }
  useEffect(() => {
    setMenuMobileActive(false)
  },[])

  return (
    <header className="flex items-center justify-between py-3 navzada">
      <Link href="/" className="nav-logo">
        <Image src={logoImg} alt="Logo Gutemberg.dev" />
      </Link>
      <nav className="flex-1 flex items-center justify-around">
        <Link href="/" className={menu === 1 ? "item-menu item-menu-active" : "item-menu"}>Inicio</Link>
        <Link href="/about" className={menu === 2 ? "item-menu item-menu-active" : "item-menu"}>Sobre mim</Link>
        <Link href="/cases" className={menu === 3 ? "item-menu item-menu-active" : "item-menu"}>Cases</Link>
        <button className="item-menu" onClick={() => window.scrollTo(0, document.body.scrollHeight)}>Contato</button>
        <Link href="https://drive.google.com/file/d/1EM9rV_RSB9qq0COhONkNTXJ5aAfHOgrZ/view?usp=share_link" target="_blank" rel="noopener noreferrer" className="item-menu-on bg-blue-150 hover:bg-blue-50 px-5 flex text-white-100 py-2 rounded-lg gap-3 items-center justify-center">Download CV <FiDownload /> </Link>
        <button className="item-menu-off" onClick={() => handleActiveMenu()}>
          <FiMenu />
        </button>
      </nav>
      <div className={menuMobileActive ? "menu-mobile menu-mobile-actived" : "menu-mobile"}>
        <button className="bg-dk-50" onClick={() => handleActiveMenu()}>Fechar menu</button>
        <Link href="/" className={menu === 1 ? "item-menu-active" : ""}>Inicio</Link>
        <Link href="/about" className={menu === 2 ? "item-menu-active" : ""}>Sobre mim</Link>
        <Link href="/cases" className={menu === 3 ? "item-menu-active" : ""}>Cases</Link>
        <button className="" onClick={() => { handleActiveMenu(); window.scrollTo(0, document.body.scrollHeight)}}>Contato</button>
        <Link href="https://drive.google.com/file/d/1EM9rV_RSB9qq0COhONkNTXJ5aAfHOgrZ/view?usp=share_link" target="_blank" rel="noopener noreferrer" className="bg-red-150 hover:bg-red-50 px-5 flex text-white-100 py-2 rounded-lg gap-3 items-center justify-center">Download CV <FiDownload /> </Link>
      </div>
    </header>
  )
}