import React from 'react'
import SearchBarCss from './styles.module.scss'

const SuggestionList = () => {
    return (
        <div className={SearchBarCss.wrapper}>
        <div className={SearchBarCss.ListContainer}>
            <div className={SearchBarCss.ListItem}>
            <div className={'poi-address'}>Nike shoes great</div>
            <div className={SearchBarCss.separator}></div>
            <div className={'poi-address'}>Nike shoes great</div>
            <div className={SearchBarCss.separator}></div>
            <div className={'poi-address'}>Nike shoes great</div>
            </div>
        </div>

    </div>
    )
}

export default SuggestionList;