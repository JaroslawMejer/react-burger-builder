import React from "react";
import classes from './BuildControl.module.sass'



const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <button
            className={classes.Less}
            onClick={props.removed}
            disabled={props.disabled}>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.3222 13.6775H22.1555C22.8937 13.6775 23.478 14.2721 23.478 15C23.478 15.7279 22.8834 16.3225 22.1555 16.3225H16.3222H7.84397C7.11609 16.3225 6.52148 15.7279 6.52148 15C6.52148 14.2721 7.11609 13.6775 7.84397 13.6775H16.3222Z" fill="white"/>
            </svg>
        </button>
        <div className={classes.Label}>{props.label}</div>
        <button
            className={classes.More}
            onClick={props.added}>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.1558 13.6775H16.3225V7.84421C16.3225 7.11633 15.7279 6.52173 15 6.52173C14.2721 6.52173 13.6775 7.11633 13.6775 7.84421V13.6775H7.84421C7.11633 13.6775 6.52173 14.2721 6.52173 15C6.52173 15.7279 7.11633 16.3225 7.84421 16.3225H13.6775V22.1558C13.6775 22.8836 14.2721 23.4783 15 23.4783C15.7279 23.4783 16.3225 22.8836 16.3225 22.1558V16.3225H22.1558C22.8836 16.3225 23.4783 15.7279 23.4783 15C23.4783 14.2721 22.8939 13.6775 22.1558 13.6775Z" fill="white"/>
            </svg>
        </button>
    </div>
);

export default buildControl;