import React, { useState, useEffect, useRef } from "react";
import "./MainMenuGlobalComponent.scss";
import cog from "../.././assets/images/cog.svg";
import {
   IoMenuOutline,
   IoCloseOutline,
   IoDownloadOutline,
   IoGameControllerOutline,
   IoBicycleOutline,
   IoBarChartOutline,
   IoWalletOutline,
   IoTvOutline,
   IoStarOutline,
   IoEllipsisHorizontalSharp,
   IoFlameOutline,
   IoChevronDownOutline,
   IoChevronUpOutline,
 } from "react-icons/io5";


export const MainMenuGlobalComponent: React.FC = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open)
}
//prevent scrolling when mobile menu is opened
open?document.body.style.overflowY = 'hidden':document.body.style.overflowY = 'auto';

const [toggleState, setToggle] = useState(0);
//Initializing variable needed for every button with own index
const initTab = (index: number) => {
  setToggle(index);
};
//Click outside of the target handler listener
useEffect(() => {
  document.addEventListener("click", handleClickOutside, true);
}, []);

const refTwo = useRef<HTMLDivElement>(null); //ref for menu

//Click outside of the target handler with statemants needed
const handleClickOutside = () => {
  if (refTwo.current != null) {
    setToggle(0);
  }
};
return (
  <>
      {/*Wrapper visible only on mobile devices and tablets it's copy of the desktop one to keep harmony in design*/}
    <div className={open ? "mobile-navigation-wrapper active-mobile" : "mobile-navigation-wrapper"}>
    <div className="logo-cont">
          {open? <IoCloseOutline style={{zIndex:999,}} onClick={toggleMenu}/> : <IoMenuOutline style={{zIndex:999,}} onClick={toggleMenu}/>}

          <a href="#" target="_blank" rel="noreferrer">
            <h1 className="logo-typo">reddit</h1>
          </a>
        </div>
    <div className="mobile-menu-container">
     {/*Container needed to order icon and text of the btn like in the desing file*/}
            <div className="feed-container">
              <h6>Feed</h6>
                 {/*Container needed to order icon and text of the btn like in the desing file*/}
              <div className="btn">
                <button>
             
                  <div className="left-info">
                    <IoFlameOutline />
                    Popular
                  </div>
                </button>
              </div>
            </div>
             {/*Main dropdown-menu with all of the dropdown buttons wit indexed sections of every one of them (const refTwo)*/}
            <div className="menu-content" ref={refTwo}>
              <h6>Topics</h6>
              {/*Dropdown button with indexed initializator*/}
              <div onClick={() => initTab(1)} className="dropdown-btn">
                <button>
                  <div className="left-info">{/*Container needed to order icon and text of the btn like in the desing file*/}
                    <IoGameControllerOutline />
                    Gaming
                  </div>
                  {/*If the state is the same like in initTab the chevron change to the proper one open/close */}
                  {toggleState == 1 ? (
                    <IoChevronUpOutline />
                  ) : (
                    <IoChevronDownOutline />
                  )}
                </button>
              </div>
              {/*Dropdown button section container in this one the're nothing in it */}
              <div
                className={
                  toggleState === 1
                    ? "dropdown-container active"
                    : "dropdown-container"
                }
              >
                 {/*Content of the section */}
                <a href="#">Nothing here</a>
              </div>

              <div onClick={() => initTab(2)} className="dropdown-btn">
                <button>
                  <div className="left-info">
                    <IoBicycleOutline />
                    Sports
                  </div>
                  {toggleState == 2 ? (
                    <IoChevronUpOutline />
                  ) : (
                    <IoChevronDownOutline />
                  )}
                </button>
              </div>
              <div
                className={
                  toggleState === 2
                    ? "dropdown-container active"
                    : "dropdown-container"
                }
              >
                <a href="#">Nothing here</a>
              </div>

              <div onClick={() => initTab(3)} className="dropdown-btn">
                <button>
                  <div className="left-info">
                    <IoBarChartOutline />
                    Bussiness, Economics
                  </div>
                  {toggleState == 3 ? (
                    <IoChevronUpOutline />
                  ) : (
                    <IoChevronDownOutline />
                  )}
                </button>
              </div>
              <div
                className={
                  toggleState === 3
                    ? "dropdown-container active"
                    : "dropdown-container"
                }
              >
                <a href="#">Nothing here</a>
              </div>

              <div onClick={() => initTab(4)} className="dropdown-btn">
                <button>
                  <div className="left-info">
                    <IoWalletOutline />
                    Crypto
                  </div>
                  {toggleState == 4 ? (
                    <IoChevronUpOutline />
                  ) : (
                    <IoChevronDownOutline />
                  )}
                </button>
              </div>
              <div
                className={
                  toggleState === 4
                    ? "dropdown-container active"
                    : "dropdown-container"
                }
              >
                <a href="#">AskReddit</a>
                <a href="#">NoStupidQuestions</a>
                <a href="#">DestinyTheGame</a>
                <a href="#">Explainlikeimfive</a>
                <a href="#">AskMen</a>
                <a href="#">Leaqueoflegends</a>
                <a href="#">Minecraft</a>
              </div>
              <div onClick={() => initTab(5)} className="dropdown-btn">
                <button>
                  <div className="left-info">
                    <IoTvOutline />
                    Television
                  </div>
                  {toggleState == 5 ? (
                    <IoChevronUpOutline />
                  ) : (
                    <IoChevronDownOutline />
                  )}
                </button>
              </div>
              <div
                className={
                  toggleState === 5
                    ? "dropdown-container active"
                    : "dropdown-container"
                }
              >
                <a href="#">Nothing here</a>
              </div>

              <div onClick={() => initTab(6)} className="dropdown-btn">
                <button>
                  <div className="left-info">
                    <IoStarOutline />
                    Celebrity
                  </div>
                  {toggleState == 6 ? (
                    <IoChevronUpOutline />
                  ) : (
                    <IoChevronDownOutline />
                  )}
                </button>
              </div>
              <div
                className={
                  toggleState === 6
                    ? "dropdown-container active"
                    : "dropdown-container"
                }
              >
                <a href="#">Nothing here</a>
              </div>

              <div onClick={() => initTab(7)} className="dropdown-btn">
                <button>
                  <div className="left-info">
                    <IoEllipsisHorizontalSharp />
                    More topics
                  </div>
                  {toggleState == 7 ? (
                    <IoChevronUpOutline />
                  ) : (
                    <IoChevronDownOutline />
                  )}
                </button>
              </div>
              <div
                className={
                  toggleState === 7
                    ? "dropdown-container active"
                    : "dropdown-container"
                }
              >
                <a href="#">Nothing here</a>
              </div>
            </div>
            {/*Bottom two buttons of the menu */}
            <div className="bottom-butons">
              <button className="dropdown-btn">
                <div className="left-info">
                  <img src={cog} />
                  Settings
                </div>
                <IoChevronDownOutline />
              </button>
              <button className="dropdown-btn">
                <div className="left-info">
                  <IoDownloadOutline />
                  Get app
                </div>
              </button>
            </div>
          </div>
    </div>
        {/*Dekstop wrapper for top navigation */}
  <div className="nav-wrapper">
    <div className="nav-container">
      {/*Left container with logo and buttons */}
      <div className="left-cont">
        <div className="logo-cont">
          {open? <IoCloseOutline style={{zIndex:999,}} onClick={toggleMenu}/> : <IoMenuOutline style={{zIndex:999,}} onClick={toggleMenu}/>}

          <a href="#" target="_blank" rel="noreferrer">
            <h1 className="logo-typo">reddit</h1>
          </a>
        </div>
        {/*Search bar container */}
        <div className="search-cont">
          <input type="text" placeholder="Search.." />
        </div>
      </div>
      {/*Login and register buttons */}
      <div className="right-cont">
        <div className="buttons-cont">
          <button id="login">Log in</button>
          <button id="register">Register</button>
        </div>
      </div>
    </div>
  </div>


    </>
    );
};
