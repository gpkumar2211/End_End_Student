"use client"
import React, { Fragment } from 'react'

export const Input = ({ type, value, handleChange, model, options, values, isReadOnly }) => {

    switch (type) {
        case 'text':
        case 'password':
        case 'date':
            return (
                <Fragment>
                    <input disabled={isReadOnly} value={value} name={model} onChange={handleChange} className='form-control' type={type} />
                </Fragment>
            )
        case 'radio':
            return (
                <Fragment>
                    {
                        options.map((val, index) => {
                            return <><input checked={value == values[index]} value={values[index]} className="ms-3" name={model} onChange={handleChange} type={type} /> {val}</>
                        })
                    }
                </Fragment>
            )
        case 'checkbox':
            const checkedArr = value.split(',')
            return (
                <Fragment>
                    {
                        options.map((val, index) => {
                            return <><input checked={checkedArr.includes(values[index])} value={values[index]} className="ms-3" name={model} onChange={handleChange} type={type} /> {val}</>
                        })
                    }
                </Fragment>
            )
    }

}

