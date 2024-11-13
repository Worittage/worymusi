import React, { Component } from 'react';
import Skeleton from 'react-loading-skeleton';
import './bar.css'; // Импортируем файл с кастомными стилями

export class Bar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      track: null,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false,
        track: {
          title: 'Ты та...',
          artist: 'Баста',
          album: 'Баста',
        },
      });
    }, 3000);
  }

  render() {
    const { isLoading, track } = this.state;

    return (
      <div className="bar">
        <div className="bar__content">
          <div className="bar__player-progress" />
          <div className="bar__player-block">
            <div className="bar__player player">
              <div className="player__controls">
                {/* Управление воспроизведением */}
              </div>
              <div className="player__track-play track-play">
                <div className="track-play__contain">
                  <div className="track-play__image">
                    {isLoading ? (
                      <Skeleton circle={true} height={50} width={50} className="skeleton-circle" />
                    ) : (
                      <svg className="track-play__svg" alt="music">
                        <use xlinkHref="img/icon/sprite.svg#icon-note" />
                      </svg>
                    )}
                  </div>
                  <div className="track-play__author">
                    {isLoading ? (
                      <Skeleton width={120} className="skeleton-bar" />
                    ) : (
                      <a className="track-play__author-link" href="http://">
                        {track.title}
                      </a>
                    )}
                  </div>
                  <div className="track-play__album">
                    {isLoading ? (
                      <Skeleton width={120} className="skeleton-bar" />
                    ) : (
                      <a className="track-play__album-link" href="http://">
                        {track.artist}
                      </a>
                    )}
                  </div>
                </div>
                <div className="track-play__like-dis">
                  <div className="track-play__like _btn-icon">
                    <Skeleton width={30} height={30} circle={true} />
                  </div>
                  <div className="track-play__dislike _btn-icon">
                    <Skeleton width={30} height={30} circle={true} />
                  </div>
                </div>
              </div>
            </div>
            <div className="bar__volume-block volume">
              <div className="volume__content">
                <div className="volume__image">
                  {isLoading ? (
                    <Skeleton circle={true} height={40} width={40} />
                  ) : (
                    <svg className="volume__svg" alt="volume">
                      <use xlinkHref="img/icon/sprite.svg#icon-volume" />
                    </svg>
                  )}
                </div>
                <div className="volume__progress _btn">
                  {isLoading ? (
                    <Skeleton height={10} width={200} className="skeleton-bar" />
                  ) : (
                    <input className="volume__progress-line _btn" type="range" name="range" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bar;
