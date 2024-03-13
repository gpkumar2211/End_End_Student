"use client"
import React, { Fragment } from 'react'

export const Select = ({ value, handleChange, model, options, values }) => {
    return (
        <Fragment>
            <select value={value} name={model} onChange={handleChange} className='form-control'>
                <option value="">---Please select---</option>
                {
                    options.map((val, ind) => {
                        return <option value={values[ind]} key={`option_${ind}`}>{val}</option>
                    })
                }
            </select>
        </Fragment>
    )

}

