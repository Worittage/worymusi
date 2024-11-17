import React, { useEffect, useState } from "react";
import './centerblock.css'

function Centerblock() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

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
        <div className="filter__button button-author _btn-text">
          исполнителю
        </div>
        <div className="filter__button button-year _btn-text">
          году выпуска
        </div>
        <div className="filter__button button-genre _btn-text">жанру</div>
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
                  <svg className="track__title-svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="http://">
                    <span className="track__title-span"></span></a>
                  
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="http://"></a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="http://"></a>
              </div>
              <div className="track__time">
                <svg className="track__time-svg" alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className="track__time-text"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    )
}

export default Centerblock;