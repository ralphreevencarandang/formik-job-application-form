import { useField } from "formik";
import { useState } from "react";
const CustomTextarea = ({label, ...props})=>{

    const [field, meta] = useField(props);
    return(
        <div>
            <label className="font-bold font-mono ">{label}</label>
            <textarea {...props} {...field}  rows="10" className={`border-1 w-full ${meta.error && meta.touched ? 'border-red-200' : 'border-slate-200'}`}></textarea>
            <span className="text-xs "><span className={field.value.length < 100 ? 'text-red-400' : 'text-black'}>{field.value.length}</span>/100</span>
            {meta.error && meta.touched ? <p className="text-xs text-red-300">{meta.error}</p>: ''}


        </div>
    );

}

export default CustomTextarea