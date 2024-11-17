import React, { useEffect, useState } from "react";
import './centerblock.css';

function Centerblock() {
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleFilterClick = (filterName) => {
    setActiveFilter((prevFilter) => (prevFilter === filterName ? null : filterName));
  };

  return (
    <div className="main__centerblock centerblock">
      <div className="centerblock__search search">
        <svg className="search__svg">
          <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
        </svg>
        <input
          className="search__text"
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </div>
      <h2 className="centerblock__h2">Треки</h2>
      <div className="centerblock__filter filter">
        <div className="filter__title">Искать по:</div>
        <div
          className={`filter__button button-author _btn-text ${
            activeFilter === "author" ? "active" : ""
          }`}
          onClick={() => handleFilterClick("author")}
        >
          исполнителю
          {activeFilter === "author" && (
            <div className="filter__dropdown">
              <ul className="compositors-list">
                <li>Michael Jackson</li>
                <li>Frank Sinatra</li>
                <li>Calvin Harris</li>
                <li>Zhu</li>
                <li>Arctic Monkeys</li>
              </ul>
            </div>
          )}
        </div>
        <div
          className={`filter__button button-year _btn-text ${
            activeFilter === "year" ? "active" : ""
          }`}
          onClick={() => handleFilterClick("year")}
        >
          году выпуска
          {activeFilter === "year" && (
            <div className="filter__dropdown">
              <ul className="yars-list">
                <li>2023</li>
                <li>2022</li>
                <li>2021</li>
              </ul>
            </div>
          )}
        </div>
        <div
          className={`filter__button button-genre _btn-text ${
            activeFilter === "genre" ? "active" : ""
          }`}
          onClick={() => handleFilterClick("genre")}
        >
          жанру
          {activeFilter === "genre" && (
            <div className="filter__dropdown">
              <ul className="janr-list">
                <li>Поп</li>
                <li>Рок</li>
                <li>Джаз</li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="centerblock__content">
        <div className="content__title playlist-title">
          <div className="playlist-title__col col01">Трек</div>
          <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
          <div className="playlist-title__col col03">АЛЬБОМ</div>
          <div className="playlist-title__col col04">
            <svg className="playlist-title__svg" alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
            </svg>
          </div>
        </div>
        <div className="content__playlist playlist">
          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  {loading ? (
                    <div className="sidebar__img-skeleton" style={{ backgroundColor: '#313131',
                    width: 51, height: 51 }}>
                      </div>
                  ) : (
                    <svg className="track__title-svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                  )}
                  
                </div>
                <div className="track__title-text">
                  {loading ? (
                    <div className="sidebar__img-skeleton" style={{ backgroundColor: '#313131',
                    width: 150, height: 19 }}>
                      </div>
                  ) : (
                    <a className="track__title-link" href="http://"
                    >Guilt <span className="track__title-span"></span></a>
                  )}
                  
                  
                </div>
              </div>
              <div className="track__author">
                {loading ? (
                  <div className="sidebar__img-skeleton" style={{ backgroundColor: '#313131',
                  width: 150, height: 19 }}>
                    </div>
                ) : (
                  <a className="track__author-link" href="http://">Nero</a>
                )}
                
              </div>
              <div className="track__album">
                {loading ? (
                  <div className="sidebar__img-skeleton" style={{ backgroundColor: '#313131',
                  width: 100, height: 19 }}>
                    </div>
                ) : (
                  <a className="track__album-link" href="http://"
                  >Welcome Reality</a>
                )}
                
                
              </div>
              <div className="track__time">
                <svg className="track__time-svg" alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className="track__time-text">4:44</span>
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  {loading ? (
                    <div className="sidebar__img-skeleton" style={{ backgroundColor: '#313131',
                    width: 51, height: 51 }}>
                      </div>
                  ) : (
                    <svg className="track__title-svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                  )}
                  
                </div>
                <div className="track__title-text">
                  {loading ? (
                    <div className="sidebar__img-skeleton" style={{ backgroundColor: '#313131',
                    width: 150, height: 19 }}>
                      </div>
                  ) : (
                    <a className="track__title-link" href="http://"
                    >Elektro <span className="track__title-span"></span></a>
                  )}
                  
                  
                </div>
              </div>
              <div className="track__author">
                {loading ? (
                  <div className="sidebar__img-skeleton" style={{ backgroundColor: '#313131',
                  width: 150, height: 19 }}>
                    </div>
                ) : (
                  <a className="track__author-link" href="http://">Dynoro, Outwork, Mr. Gee</a>
                )}
                
              </div>
              <div className="track__album">
                {loading ? (
                  <div className="sidebar__img-skeleton" style={{ backgroundColor: '#313131',
                  width: 100, height: 19 }}>
                    </div>
                ) : (
                  <a className="track__album-link" href="http://"
                  >Elektro</a>
                )}
                
                
              </div>
              <div className="track__time">
                <svg className="track__time-svg" alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className="track__time-text">2:22</span>
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  {loading ? (
                    <div className="sidebar__img-skeleton" style={{ backgroundColor: '#313131',
                    width: 51, height: 51 }}>
                      </div>
                  ) : (
                    <svg className="track__title-svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                  )}
                  
                </div>
                <div className="track__title-text">
                  {loading ? (
                    <div className="sidebar__img-skeleton" style={{ backgroundColor: '#313131',
                    width: 150, height: 19 }}>
                      </div>
                  ) : (
                    <a className="track__title-link" href="http://"
                    >I’m Fire <span className="track__title-span"></span></a>
                  )}
                  
                  
                </div>
              </div>
              <div className="track__author">
                {loading ? (
                  <div className="sidebar__img-skeleton" style={{ backgroundColor: '#313131',
                  width: 150, height: 19 }}>
                    </div>
                ) : (
                  <a className="track__author-link" href="http://">Ali Bakgor</a>
                )}
                
              </div>
              <div className="track__album">
                {loading ? (
                  <div className="sidebar__img-skeleton" style={{ backgroundColor: '#313131',
                  width: 100, height: 19 }}>
                    </div>
                ) : (
                  <a className="track__album-link" href="http://"
                  >I’m Fire</a>
                )}
                
                
              </div>
              <div className="track__time">
                <svg className="track__time-svg" alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className="track__time-text">2:34</span>
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  {loading ? (
                    <div className="sidebar__img-skeleton" style={{ backgroundColor: '#313131',
                    width: 51, height: 51 }}>
                      </div>
                  ) : (
                    <svg className="track__title-svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                  )}
                  
                </div>
                <div className="track__title-text">
                  {loading ? (
                    <div className="sidebar__img-skeleton" style={{ backgroundColor: '#313131',
                    width: 150, height: 19 }}>
                      </div>
                  ) : (
                    <a className="track__title-link" href="http://"
                    >Non Stop <span className="track__title-span"></span></a>
                  )}
                  
                  
                </div>
              </div>
              <div className="track__author">
                {loading ? (
                  <div className="sidebar__img-skeleton" style={{ backgroundColor: '#313131',
                  width: 150, height: 19 }}>
                    </div>
                ) : (
                  <a className="track__author-link" href="http://">Стоункат, Psychopath</a>
                )}
                
              </div>
              <div className="track__album">
                {loading ? (
                  <div className="sidebar__img-skeleton" style={{ backgroundColor: '#313131',
                  width: 100, height: 19 }}>
                    </div>
                ) : (
                  <a className="track__album-link" href="http://"
                  >Non Stop</a>
                )}
                
                
              </div>
              <div className="track__time">
                <svg className="track__time-svg" alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className="track__time-text">4:12</span>
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  {loading ? (
                    <div className="sidebar__img-skeleton" style={{ backgroundColor: '#313131',
                    width: 51, height: 51 }}>
                      </div>
                  ) : (
                    <svg className="track__title-svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                  )}
                  
                </div>
                <div className="track__title-text">
                  {loading ? (
                    <div className="sidebar__img-skeleton" style={{ backgroundColor: '#313131',
                    width: 150, height: 19 }}>
                      </div>
                  ) : (
                    <a className="track__title-link" href="http://"
                    >Run Run <span className="track__title-span"></span></a>
                  )}
                  
                  
                </div>
              </div>
              <div className="track__author">
                {loading ? (
                  <div className="sidebar__img-skeleton" style={{ backgroundColor: '#313131',
                  width: 150, height: 19 }}>
                    </div>
                ) : (
                  <a className="track__author-link" href="http://">Jaded, Will Clarke, AR/CO</a>
                )}
                
              </div>
              <div className="track__album">
                {loading ? (
                  <div className="sidebar__img-skeleton" style={{ backgroundColor: '#313131',
                  width: 100, height: 19 }}>
                    </div>
                ) : (
                  <a className="track__album-link" href="http://"
                  >Run Run</a>
                )}
                
                
              </div>
              <div className="track__time">
                <svg className="track__time-svg" alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className="track__time-text">2:54</span>
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  {loading ? (
                    <div className="sidebar__img-skeleton" style={{ backgroundColor: '#313131',
                    width: 51, height: 51 }}>
                      </div>
                  ) : (
                    <svg className="track__title-svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                  )}
                  
                </div>
                <div className="track__title-text">
                  {loading ? (
                    <div className="sidebar__img-skeleton" style={{ backgroundColor: '#313131',
                    width: 150, height: 19 }}>
                      </div>
                  ) : (
                    <a className="track__title-link" href="http://"
                    >Eyes on Fire <span className="track__title-span"></span></a>
                  )}
                  
                  
                </div>
              </div>
              <div className="track__author">
                {loading ? (
                  <div className="sidebar__img-skeleton" style={{ backgroundColor: '#313131',
                  width: 150, height: 19 }}>
                    </div>
                ) : (
                  <a className="track__author-link" href="http://">Blue Foundation, Zeds Dead </a>
                )}
                
              </div>
              <div className="track__album">
                {loading ? (
                  <div className="sidebar__img-skeleton" style={{ backgroundColor: '#313131',
                  width: 100, height: 19 }}>
                    </div>
                ) : (
                  <a className="track__album-link" href="http://"
                  >Eyes on Fire</a>
                )}
                
                
              </div>
              <div className="track__time">
                <svg className="track__time-svg" alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className="track__time-text">5:20</span>
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  {loading ? (
                    <div className="sidebar__img-skeleton" style={{ backgroundColor: '#313131',
                    width: 51, height: 51 }}>
                      </div>
                  ) : (
                    <svg className="track__title-svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                  )}
                  
                </div>
                <div className="track__title-text">
                  {loading ? (
                    <div className="sidebar__img-skeleton" style={{ backgroundColor: '#313131',
                    width: 150, height: 19 }}>
                      </div>
                  ) : (
                    <a className="track__title-link" href="http://"
                    >Mucho Bien <span className="track__title-span"></span></a>
                  )}
                  
                  
                </div>
              </div>
              <div className="track__author">
                {loading ? (
                  <div className="sidebar__img-skeleton" style={{ backgroundColor: '#313131',
                  width: 150, height: 19 }}>
                    </div>
                ) : (
                  <a className="track__author-link" href="http://">HYBIT, Mr. Black, Offer Nissim, Hi Profile</a>
                )}
                
              </div>
              <div className="track__album">
                {loading ? (
                  <div className="sidebar__img-skeleton" style={{ backgroundColor: '#313131',
                  width: 100, height: 19 }}>
                    </div>
                ) : (
                  <a className="track__album-link" href="http://"
                  >Mucho Bien</a>
                )}
                
                
              </div>
              <div className="track__time">
                <svg className="track__time-svg" alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className="track__time-text">3:41</span>
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  {loading ? (
                    <div className="sidebar__img-skeleton" style={{ backgroundColor: '#313131',
                    width: 51, height: 51 }}>
                      </div>
                  ) : (
                    <svg className="track__title-svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                  )}
                  
                </div>
                <div className="track__title-text">
                  {loading ? (
                    <div className="sidebar__img-skeleton" style={{ backgroundColor: '#313131',
                    width: 150, height: 19 }}>
                      </div>
                  ) : (
                    <a className="track__title-link" href="http://"
                    >Knives n Cherries <span className="track__title-span"></span></a>
                  )}
                  
                  
                </div>
              </div>
              <div className="track__author">
                {loading ? (
                  <div className="sidebar__img-skeleton" style={{ backgroundColor: '#313131',
                  width: 150, height: 19 }}>
                    </div>
                ) : (
                  <a className="track__author-link" href="http://">minthaze</a>
                )}
                
              </div>
              <div className="track__album">
                {loading ? (
                  <div className="sidebar__img-skeleton" style={{ backgroundColor: '#313131',
                  width: 100, height: 19 }}>
                    </div>
                ) : (
                  <a className="track__album-link" href="http://"
                  >Captivating</a>
                )}
                
                
              </div>
              <div className="track__time">
                <svg className="track__time-svg" alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className="track__time-text">1:48</span>
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  {loading ? (
                    <div className="sidebar__img-skeleton" style={{ backgroundColor: '#313131',
                    width: 51, height: 51 }}>
                      </div>
                  ) : (
                    <svg className="track__title-svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                  )}
                  
                </div>
                <div className="track__title-text">
                  {loading ? (
                    <div className="sidebar__img-skeleton" style={{ backgroundColor: '#313131',
                    width: 150, height: 19 }}>
                      </div>
                  ) : (
                    <a className="track__title-link" href="http://"
                    >How Deep Is Your Love <span className="track__title-span"></span></a>
                  )}
                  
                  
                </div>
              </div>
              <div className="track__author">
                {loading ? (
                  <div className="sidebar__img-skeleton" style={{ backgroundColor: '#313131',
                  width: 150, height: 19 }}>
                    </div>
                ) : (
                  <a className="track__author-link" href="http://">Calvin Harris, Disciples</a>
                )}
                
              </div>
              <div className="track__album">
                {loading ? (
                  <div className="sidebar__img-skeleton" style={{ backgroundColor: '#313131',
                  width: 100, height: 19 }}>
                    </div>
                ) : (
                  <a className="track__album-link" href="http://"
                  >How Deep Is Your Love</a>
                )}
                
                
              </div>
              <div className="track__time">
                <svg className="track__time-svg" alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className="track__time-text">3:32</span>
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  {loading ? (
                    <div className="sidebar__img-skeleton" style={{ backgroundColor: '#313131',
                    width: 51, height: 51 }}>
                      </div>
                  ) : (
                    <svg className="track__title-svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                  )}
                  
                </div>
                <div className="track__title-text">
                  {loading ? (
                    <div className="sidebar__img-skeleton" style={{ backgroundColor: '#313131',
                    width: 150, height: 19 }}>
                      </div>
                  ) : (
                    <a className="track__title-link" href="http://"
                    >Morena <span className="track__title-span"></span></a>
                  )}
                  
                  
                </div>
              </div>
              <div className="track__author">
                {loading ? (
                  <div className="sidebar__img-skeleton" style={{ backgroundColor: '#313131',
                  width: 150, height: 19 }}>
                    </div>
                ) : (
                  <a className="track__author-link" href="http://">Tom Boxer</a>
                )}
                
              </div>
              <div className="track__album">
                {loading ? (
                  <div className="sidebar__img-skeleton" style={{ backgroundColor: '#313131',
                  width: 100, height: 19 }}>
                    </div>
                ) : (
                  <a className="track__album-link" href="http://"
                  >Soundz Made in Romania</a>
                )}
                
                
              </div>
              <div className="track__time">
                <svg className="track__time-svg" alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className="track__time-text">3:36</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}


export default Centerblock;