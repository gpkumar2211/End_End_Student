"use client"
import React, { useState } from 'react'
import styles from './register.module.css'
import configration from './configuration.json'
import Link from 'next/link'
import { Input } from '@/inputControls/Input'
import { Select } from '@/inputControls/Select'
import { Textarea } from '@/inputControls/Textarea'
import { appStore } from '@/store/appStore'
import { toast } from 'react-toastify'
import { hanldeFiledValidation, handleFormValidation, formReset } from '@/validations/appValidations'
import { Api } from '@/common/Api'
const Register = () => {
    const [inputControls, setInutControls] = useState(configration)

    const fnChange = (eve) => {
        setInutControls(hanldeFiledValidation(eve, inputControls))
    }
    const handleRegister = async () => {
        try {
            const [isFormInvalid, clonedInputControls, dataObj] = handleFormValidation(inputControls)
            if (isFormInvalid) {
                setInutControls(clonedInputControls)
                return;
            }
            appStore.dispatch({ type: "LOADER", payload: true })
            const res = await Api.fnSendPostReq("std/reg-std", { data: dataObj })
            const { acknowledged, insertedId } = res?.data
            if (acknowledged && insertedId) {
                toast.success("Successfully Inserted")
                setInutControls(formReset(inputControls))
            } else {
                toast.error("Not Inserted, try again");
            }

        } catch (ex) {
            console.error("register", ex)
            toast.error("Somthing went wrong");
        } finally {
            appStore.dispatch({ type: "LOADER", payload: false })
        }
    }
    const prepareInputControls = (tag, obj) => {
        switch (tag) {
            case 'input':
                return <Input {...obj} handleChange={fnChange} />
            case 'select':
                return <Select {...obj} handleChange={fnChange} />
            default:
                return <Textarea  {...obj} handleChange={fnChange} />
        }
    }
    return (
        <div className='container-fluid'>
            <h2 className='text-center my-3'>Register</h2>
            {
                inputControls?.map((obj, index) => {
                    const { lbl, errorMessage, tag } = obj;

                    return <div key={`div_${index}`} className='row mb-3'>
                        <div className='col-sm-5 text-end'>
                            <b>{lbl}:</b>
                        </div>
                        <div className='col-sm-3'>
                            {prepareInputControls(tag, obj)}
                        </div>
                        <div className='col-sm-4'>
                            <b className='text-danger'>{errorMessage}</b>
                        </div>
                    </div>
                })
            }




            <div className='row'>
                <div className='offset-sm-5 col-sm-7'>
                    <button onClick={handleRegister} className='btn btn-primary me-3'>Register</button>
                    <Link href="/" >To Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Register
