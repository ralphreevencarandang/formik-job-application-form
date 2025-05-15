const CustomInput = ({label, ...props})=>{
    return(
        <div className="mb-2">
            <label>{label}</label>
            <input {...props} className="border-1" />
        </div>
    );
}

export default CustomInput