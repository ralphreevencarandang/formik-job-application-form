import { useField } from "formik";

const CustomSelect = ({label, ...props})=>{

    const [field, meta] = useField(props);

    // console.log('Field', field)
    // console.log('Meta', meta)
    return(
        <div className="mb-2">
            <label className="font-bold font-mono ">{label}</label> <br />
            <select {...props} {...field} className={`border-1 w-full rounded  px-2 py-1 font-mono ${meta.error && meta.touched ? 'border-red-200' : 'border-slate-200'}`}/>
            {meta.error && meta.touched ? <p className="text-xs text-red-300">{meta.error}</p> : ''}
        </div>
    );
}

export default CustomSelect