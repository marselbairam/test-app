import React, { useState } from 'react';
import classNames from 'classnames';

import './FlatCard.scss';

import FavoriteIcon from '../../assets/img/favorite.svg';

const stockFlatPhoto = 'https://images.unsplash.com/photo-1529408632839-a54952c491e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80';

const FlatCard = ({ attributes, relationships }) => {
  const [favorite, setFavorite] = useState(false);

  const toggleFavorite = (e) => {
    e.preventDefault();
    setFavorite(!favorite);
  };

  return (
    <div className="FlatCard card">
      <div className="FlatCard__inner">
        <div className="card-image">
          <a
            className="FlatCard__img-link"
            href=""
          >
            <img
              className="FlatCard__img"
              src={stockFlatPhoto}
              alt=""
            />
          </a>
          <a
            className={classNames(
              'FlatCard__favorite btn-floating halfway-fab waves-effect waves-light red',
              {
                'active': favorite
              }
            )}
            href=""
            onClick={(e) => toggleFavorite(e)}
          >
            <FavoriteIcon />
          </a>
        </div>
        <div className="FlatCard__content card-content">
          <a
            className="FlatCard__title card-title"
            href=""
          >
            {attributes.title}
          </a>
          <ul className="collection">
            <li className="collection-item">
            <span>
              <b>Кол-во комнат:</b>
            </span>
              <span>{attributes.rooms}</span>
            </li>
            <li className="collection-item">
            <span>
              <b>Адрес:</b>
            </span>
              <span>{attributes.address.city}</span>
              <span>{attributes.address.street}</span>
              <span>{attributes.address.house}</span>
              <span>{attributes.address.room}</span>
            </li>
            <li className="collection-item">
            <span>
              <b>Площадь:</b>
            </span>
              <span>{attributes.area}</span>
              <span>{attributes.unit}</span>
            </li>
          </ul>
          <ul className="collection">
            <li className="collection-item">
              <span>{relationships.attributes.last_name}</span>
              <span>{relationships.attributes.first_name}</span>
              <span>{relationships.attributes.middle_name}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FlatCard;
