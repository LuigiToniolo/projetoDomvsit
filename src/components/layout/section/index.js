import React from 'react';

export const SiteSection = (props) => {
    const { className, children } = props
    const classes = className ? className.join(' ') : '';
    return(
        <section className={'site-section ' + classes}>
            {children}
        </section>
    )
}
