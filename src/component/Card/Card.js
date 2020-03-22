import React from "react";
import './Card.css'

function Card({robot}) {
    const {id, name, email} = robot;
    return(
        <div className="ma2">
            <article className="pa2 br2 ba dark-gray b--black-10 center" style={{backgroundColor:`#9eebcf`}}>
                <img alt="kitten" src={`https://robohash.org/${id}?size=200x200`} className="db br2 br--top"/>
                    <div className="pa2 ph3-ns pb3-ns">
                        <div className="dt mt1">
                            <div className="dtc">
                                <h1 className="f5 f4-ns mv0">{name}</h1>
                            </div>
                        </div>
                        <p className="f6 lh-copy measure mt2 mid-gray">
                            {email}
                        </p>
                    </div>
            </article>
        </div>
    )
}

export default Card;
