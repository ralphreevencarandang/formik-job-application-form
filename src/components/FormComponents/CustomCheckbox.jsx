import { useField } from "formik";

const CustomCheckbox = ({...props})=>{

    const [field, meta] = useField(props);

    return(
        <div className="mb-2"> 
            <input  {...props} {...field} className="accent-pink-400"/>
            <span> I accept the terms of service</span>
            {meta.error && meta.touched ? <p className="text-xs text-red-300">{meta.error}</p> : ''}
        
        </div>
    );
}

export default CustomCheckbox