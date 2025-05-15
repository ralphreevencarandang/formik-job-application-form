import { useField } from "formik";

const CustomTextarea = ({label, ...props})=>{

    const [field, meta] = useField(props);

    return(
        <div>
            <label className="font-bold font-mono ">{label}</label>
            <textarea {...props} {...field} rows="10" className={`border-1 w-full ${meta.error && meta.touched ? 'border-red-200' : 'border-slate-200'}`}></textarea>
            {meta.error && meta.touched ? <p className="text-xs text-red-300">{meta.error}</p>: ''}

        </div>
    );

}

export default CustomTextarea