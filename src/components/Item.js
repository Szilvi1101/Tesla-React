import React from 'react'
import './Item.css'

function Item({heading, link, bgImage}) {
  return (
    <div className="item" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="container">

            <div class="item-text">
                <h1>{heading}</h1>
                <a href="/">{link}</a>
            </div>

            <div className="item-buttons">
                <button>Egyedi megrendelés</button>
                <button>Készleten lévő autók</button>
            </div>


        </div>
    </div>
  )
}

export default Item