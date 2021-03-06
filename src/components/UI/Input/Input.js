import React from 'react';
import classes from'./Input.module.sass'

const input = (props) => {
    let inputElement = null;

    const inputClasses = [classes.InputElement]
    // console.log(`Invalid: ${props.invalid}, shouldvalidate: ${props.shouldValidate}, touched: ${props.touched}`);
    if(props.invalid && props.shouldValidate && props.touched) {

        inputClasses.push(classes.Invalid);
    }

    switch(props.elementType) {
        case('input'):
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
            onChange={props.changed}/>
            break;
        case('select'):
            inputElement = (
                <select
                    className={inputClasses.join(' ')}
                    defaultValue={props.value}
                    onChange={props.changed}
                >
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>{option.displayValue}</option>
                    ))}
                </select>
            )
            break;
        case('textarea'):
            inputElement = <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}
            />
            break;
        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                defaultValue={props.value}
                onChange={props.changed}
            />
    }
    return(
        <div className={classes.Input}>
            <label className={classes.Label}>
                {props.label}
            </label>
            {inputElement}
        </div>
        )

};

export default input;