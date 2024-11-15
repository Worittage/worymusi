import React, { useState, useEffect } from "react";
import './sidebar.css'

function Sidebar() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="main__sidebar sidebar">
        <div className="sidebar__personal">
            <p className="sidebar__personal-name">Bezerdic.Eugen</p>
            <div className="sidebar__icon">
            <svg alt="logout">
                <use xlinkHref="img/icon/sprite.svg#logout"></use>
            </svg>
            </div>
        </div>
        <div className="sidebar__block">
            <div className="sidebar__list">
            <div className="sidebar__item">
                <a className="sidebar__link" href="#">
                {loading ? (
                    <div className="sidebar__img-skeleton" style={{ backgroundColor: '#313131',
                       width: 250, height: 150 }}>
                       </div>
                ) : (
                    <img
                    className="sidebar__img"
                    src="img/playlist01.png"
                    alt="day's playlist"
                />
                )}
                </a>
            </div>
            <div className="sidebar__item">
                <a className="sidebar__link" href="#">
                    {loading ? (
                        <div className="sidebar__img-skeleton" style={{ backgroundColor: '#313131',
                    width: 250, height: 150 }}>
                    </div>
                    ) : (
                        <img
                    className="sidebar__img"
                    src="img/playlist02.png"
                    alt="day's playlist"
                />
                    )}
                
                </a>
            </div>
            <div className="sidebar__item">
                <a className="sidebar__link" href="#">
                {loading ? (
                        <div className="sidebar__img-skeleton" style={{ backgroundColor: '#313131',
                    width: 250, height: 150 }}>
                    </div>
                    ) : (
                <img
                    className="sidebar__img"
                    src="img/playlist03.png"
                    alt="day's playlist"
                />
                )}
                </a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Sidebar;