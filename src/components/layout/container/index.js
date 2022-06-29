import React from "react";

export const Container = (props) => {
    const classes = props.className ? props.className.join(' ') : ' ';
    return (
        <div className={`container -${props.type} ${classes}`} id={props.id}>
            {props.children}
        </div>
    )
}
