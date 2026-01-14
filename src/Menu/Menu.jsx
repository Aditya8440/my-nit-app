"use client"
import React, { useEffect, useRef, useState } from 'react'
import styles from './Menu.module.css';
import menuItems from './configuration.json';
import Link from 'next/link';


function Menu() {
  const[isMobileView, setIsMobileView]  = useState(window.innerWidth < 700);
  const[left, setLeft] = useState(-120);
  const timeoutRef = useRef();
  useEffect(()=>{
  const resize = () => {
    clearTimeout(timeoutRef.current);
     timeoutRef.current = setTimeout(()=>{
      // setIsMobileView(document.body.offsetWidth < 700);
      setIsMobileView(window.innerWidth < 700);
    },100)
  }
  window.addEventListener('resize', resize);
  },[])

  const handleMenuBtnClick = () =>{
    setLeft(left === 0 ? -130 : 0)
  }
 const handleMenuItemClick=()=>{
  setLeft(-130)
 }
  return (
    <>
    {isMobileView && <button className={styles.mobileMenubtn} onClick={handleMenuBtnClick}><span></span> <span></span> <span></span> </button>}
    
   
    <div style={{left}} className={`${styles.menu} ${isMobileView ? styles.mobileMenu : styles.desktopMenu}`}>
      {isMobileView ? "mobileView" : "desktop view"}
      {
        menuItems?.map((items,index)=>{
          return <Link onClick={handleMenuItemClick} href={items.path} key={`mi_${index}`}>{items.item}</Link>
        })
      }
      {/* {
        menuItems?.map(({item,path},index)=>{
          return <a href={path} key={`mi_${index}`}>{item}</a>
        })
      } */}
    </div>
     </>
  )
}

export default Menu
// {
//         "item": "Home",
//         "path": "/home",
//         "id" : "home"  
//     }