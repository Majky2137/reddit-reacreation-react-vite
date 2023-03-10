import React, { useState, useEffect, useRef } from "react";
import "./HomePage.scss";

import { NewsData, NewPosts, CountriesBase } from "../.././stores/database.js";
import cog from "../../../.././assets/images/cog.svg";
import {
  IoDownloadOutline,
  IoGameControllerOutline,
  IoBicycleOutline,
  IoBarChartOutline,
  IoWalletOutline,
  IoTvOutline,
  IoStarOutline,
  IoEllipsisHorizontalSharp,
  IoFlameOutline,
  IoCheckmarkCircleOutline,
  IoChevronUpCircleOutline,
  IoChevronDownOutline,
  IoChevronUpOutline,
  IoChevronDownCircleOutline,
  IoShareOutline,
  IoBookmarksOutline,
  IoChatboxEllipsesOutline,
} from "react-icons/io5";

export const HomePage: React.FC = () => {
  //Variables needed for open and close dropdown buttons in main manu on left and right side
  const [toggleState, setToggle] = useState(0);
  //Variables needed for open and close select
  const [toggleSelect, setSelect] = useState(0);

  //Initializing variable needed for every button with own index
  const initTab = (index: number) => {
    setToggle(index);
  };
  //Initializing variable needed for every select with own index
  const initSelect = (index: number) => {
    setSelect(index);
  };
  //Click outside of the target handler listener
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);

  const refOne = useRef<HTMLDivElement>(null); //ref for Menu on the left and right
  const refTwo = useRef<HTMLDivElement>(null); //ref for select menu

  //Click outside of the target handler with statemants needed
  const handleClickOutside = () => {
    if (refOne.current != null) {
      setSelect(0);
    }
    if (refTwo.current != null) {
      setToggle(0);
    }
  };

  return (
    <>
         {/*main wrapper for all of the homepage
     it's needed to proper display the containers */}
      <div className="root-wrapper"> 
        {/*Wrapping and holding all of the containers for left menu
             it's needed to hold the proper containers ordering*/}
        <div className="sidebar-wrapper">
                  {/*Feed section of the sidebar*/}
          <div className="sidebar-container">
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
        {/*Main wrapper of the mid content holding the order of the posts containers and the right side menu*/}
        <div className="main-wrapper">
          {/*News section wrapper*/}
          <div className="news-wrapper">
             {/*Section header*/}
            <div className="section-header">
              <h1>Trending today</h1>
            </div>
             {/*News section container with mapped data from database.js /stores/database.js*/}
            <div className="news-container">
              {NewsData.map((item) => {
                return (
                  <div
                    className="news-card"
                    style={{ backgroundImage: `url(${item.thumbnail})` }}
                    key={item.id}
                  >
                    <div className="news-card-overlay"></div>
                    <div className="data-wrapper">
                      <div className="user-posted-cont">
                        <div
                          className="user-posted-image"
                          style={{
                            backgroundImage: `url(${item.username_pic})`,
                          }}
                        ></div>
                        <p>{item.username}</p>
                      </div>

                      <div className="card-data-container">
                        <h1>{item.title}</h1>
                        <span>{item.description}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/*Section header*/}
          <div className="header">
            <h1>Popular post</h1>
          </div>
          {/*Mid content wrapper */}
          <div className="content-wrapper">
            {/*Middle posts and filters wrapper with all needed containers to order it */}
            <div className="popular-posts-container">
                {/*Top filters and selection menu*/}
              <div className="top-filters-wrapper">
                {/*Top filters container for mobiles and tablet */}
                <div className="filters-container-mobile">

                    {/*Section header*/}
                  <h1>Popular</h1>
                    {/*Container wrapping and ordering pills with and elipsis for mobile */}
                  <div className="filters-pills">
                    <div className="left">
                      <div className="pill-container">
                        <IoFlameOutline />
                        <span>Popular</span>
                        <IoChevronDownOutline />
                      </div>
                    </div>
                    <div className="right">
                      <IoEllipsisHorizontalSharp />
                      <IoChevronDownOutline />
                    </div>
                  </div>
                </div>


                  {/*Container wrapping and ordering pills with and elipsis for desktop */}
                <div className="filters-container">
                  <div className="filters-pills">
                    <div className="pill-container">
                      <IoFlameOutline />
                      <span>Popular</span>
                    </div>
                      {/*Mapped pill with select from database stores/database.js*/}
                    <div
                      className="pill-container"
                      onClick={() => initSelect(1)}
                    >
                      <span>Poland</span>
                      <IoChevronDownOutline style={{ fontSize: 16 }} />
                      <div
                        ref={refOne}
                        className={
                          toggleSelect == 1
                            ? "select-dropdown-container active"
                            : "select-dropdown-container"
                        }
                      >
                        <a href="#">Everywhere</a>
                        {CountriesBase.map((country) => {
                          return (
                            <a href="#" key={country.id}>
                              {country.country}
                            </a>
                          );
                        })}
                      </div>
                    </div>
                    <div className="pill-container">
                      <IoCheckmarkCircleOutline />
                      <span>New</span>
                    </div>
                    <div className="pill-container">
                      <IoChevronUpCircleOutline />
                      <span>Top</span>
                    </div>
                  </div>
                    {/*elipsis container*/}
                  <div className="more-options">
                    <IoEllipsisHorizontalSharp />
                  </div>
                </div>
              </div>
                {/*map of the post with detection if there is picture or not if not the size is matched to the non picture one (based on design but more practical) */}
              {NewPosts.map((post) => {
                return post.picture_addon ? (
                  <div className="post-wrapper" key={post.id}>
                    <div className="left-stat">
                      <div className="voting-container">
                        <div className="voting-button">
                          <button>
                            <IoChevronUpCircleOutline />
                          </button>
                        </div>
                        <span>{post.number}</span>
                        <div className="voting-button">
                          <button>
                            <IoChevronDownCircleOutline />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="post-content-container">
                      <div className="post-header">
                        <div className="user-data">
                          <div
                            className="user-data-image"
                            style={{
                              backgroundImage: `url(${post.username_pic})`,
                            }}
                          ></div>
                          <p>{post.username}</p>
                        </div>
                        <div className="time-data">
                          <p>{post.when_posted}</p>
                        </div>
                      </div>
                      <div className="post-title">
                        <h1>{post.post_title}</h1>
                      </div>
                      <div className="post-img-wrapper">
                        <img src={post.picture_addon} />
                      </div>
                      <div className="post-footer">
                        <div className="user-functions">
                          <div className="btn-cont">
                            <div className="img-cont">
                              <IoChatboxEllipsesOutline />
                            </div>
                            <button>{post.comments_count} Comments</button>
                          </div>

                          <div className="btn-cont">
                            <div className="img-cont">
                              <IoShareOutline />
                            </div>
                            <button> Share</button>
                          </div>

                          <div className="btn-cont">
                            <div className="img-cont">
                              <IoBookmarksOutline />
                            </div>
                            <button> Saves</button>
                          </div>
                        </div>

                        <div className="more-options">
                          <IoEllipsisHorizontalSharp />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : ( //here are the statement check for post (if in base the img not exists for post then show container without it )
                  <div className="post-wrapper" key={post.id}>
                    <div className="left-stat">
                      <div className="voting-container">
                        <div className="voting-button">
                          <button>
                            <IoChevronUpCircleOutline />
                          </button>
                        </div>
                        <span>{post.number}</span>
                        <div className="voting-button">
                          <button>
                            <IoChevronDownCircleOutline
                              style={{ fontWeight: "lighter" }}
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="post-content-container">
                      <div className="post-header">
                        <div className="user-data">
                          <div
                            className="user-data-image"
                            style={{
                              backgroundImage: `url(${post.username_pic})`,
                            }}
                          ></div>
                          <p>{post.username}</p>
                        </div>
                        <div className="time-data">
                          <p>{post.when_posted}</p>
                        </div>
                      </div>
                      <div className="post-title">
                        <h1>{post.post_title}</h1>
                      </div>

                      <div className="post-footer">
                        <div className="user-functions">
                          <div className="btn-cont">
                            <div className="img-cont">
                              <IoChatboxEllipsesOutline />
                            </div>
                            <button>{post.comments_count} Comments</button>
                          </div>

                          <div className="btn-cont">
                            <div className="img-cont">
                              <IoShareOutline />
                            </div>
                            <button> Share</button>
                          </div>

                          <div className="btn-cont">
                            <div className="img-cont">
                              <IoBookmarksOutline />
                            </div>
                            <button> Saves</button>
                          </div>
                        </div>

                        <div className="more-options">
                          <IoEllipsisHorizontalSharp />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
                {/*Container with mobile next data load button */}
              <div className="nav-footer-mobile">
                <div className="load-next-btn-container">
                  <button id="next-load">Next</button>
                </div>
              </div>
            </div>

              {/*Right menu for desktops with initializator and indexing like the left one */}
            <div className="right-menu-wrapper">
              <div className="sidemenu-container">
                <div onClick={() => initTab(9)} className="dropdown-btn">
                  <button>
                    Popular Communities
                    {toggleState == 9 ? (
                      <IoChevronUpOutline />
                    ) : (
                      <IoChevronDownOutline />
                    )}
                  </button>
                </div>
                <div
                  className={
                    toggleState === 9
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
                  <a href="#" style={{ color: "#3179CC", fontWeight: 500 }}>
                    See more
                  </a>
                </div>

                <div onClick={() => initTab(10)} className="dropdown-btn">
                  <button>
                    Gaming
                    {toggleState == 10 ? (
                      <IoChevronUpOutline />
                    ) : (
                      <IoChevronDownOutline />
                    )}
                  </button>
                </div>
                <div
                  className={
                    toggleState === 10
                      ? "dropdown-container active"
                      : "dropdown-container"
                  }
                >
                  <a href="#">Nothing here</a>
                </div>

                <div onClick={() => initTab(11)} className="dropdown-btn">
                  <button>
                    Sports
                    {toggleState == 11 ? (
                      <IoChevronUpOutline />
                    ) : (
                      <IoChevronDownOutline />
                    )}
                  </button>
                </div>
                <div
                  className={
                    toggleState === 11
                      ? "dropdown-container active"
                      : "dropdown-container"
                  }
                >
                  <a href="#">Nothing here</a>
                </div>

                <div onClick={() => initTab(12)} className="dropdown-btn">
                  <button>
                    TV
                    {toggleState == 12 ? (
                      <IoChevronUpOutline />
                    ) : (
                      <IoChevronDownOutline />
                    )}
                  </button>
                </div>
                <div
                  className={
                    toggleState === 12
                      ? "dropdown-container active"
                      : "dropdown-container"
                  }
                >
                  <a href="#">Nothing here</a>
                </div>

                <div onClick={() => initTab(13)} className="dropdown-btn">
                  <button>
                    Travel
                    {toggleState == 13 ? (
                      <IoChevronUpOutline />
                    ) : (
                      <IoChevronDownOutline />
                    )}
                  </button>
                </div>
                <div
                  className={
                    toggleState === 13
                      ? "dropdown-container active"
                      : "dropdown-container"
                  }
                >
                  <a href="#">Nothing here</a>
                </div>

                <div onClick={() => initTab(14)} className="dropdown-btn">
                  <button>
                    Health & Fitness
                    {toggleState == 14 ? (
                      <IoChevronUpOutline />
                    ) : (
                      <IoChevronDownOutline />
                    )}
                  </button>
                </div>
                <div
                  className={
                    toggleState === 14
                      ? "dropdown-container active"
                      : "dropdown-container"
                  }
                >
                  <a href="#">Nothing here</a>
                </div>

                <div onClick={() => initTab(15)} className="dropdown-btn">
                  <button>
                    Fashion
                    {toggleState == 15 ? (
                      <IoChevronUpOutline />
                    ) : (
                      <IoChevronDownOutline />
                    )}
                  </button>
                </div>
                <div
                  className={
                    toggleState === 15
                      ? "dropdown-container active"
                      : "dropdown-container"
                  }
                >
                  <a href="#">Nothing here</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
