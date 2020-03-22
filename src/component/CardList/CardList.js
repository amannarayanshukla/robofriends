import React from "react";
import Card from "../Card/Card";

function CardList({robots}) {
    return(
        <div className={'flex  flex-wrap mt5'} style={{"justifyContent":"center"}}>
            {
                robots.map(robot => {
                    return(
                        <Card robot = {robot} key={robot[`id`]}/>
                        )
                })
            }
        </div>
    )
}

export default CardList;
