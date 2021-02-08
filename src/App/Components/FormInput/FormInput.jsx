import React from 'react'

import { useField } from "formik";
import { FormControl } from '@material-ui/core';

import CustomInput from '../CustomInput/CustomInput'


const FormInput = ({ placeholder, ...props }) =>{

    const [field, meta] = useField(props);
    return(
        <FormControl style={{width: '100%'}}  error={meta.touched && !!meta.error}>
            <CustomInput {...field} {...props} placeholder={placeholder} />
            {meta.error && meta.touched ? (
                <label style={{color:'red', fontSize: 12}}>
                {meta.error}
                </label>
            ) : undefined}
        </FormControl>
    )
}
export default FormInput;