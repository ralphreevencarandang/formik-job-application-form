const Button = ({label, ...props})=>{

    return(
        <button {...props} className={`w-full border-1 px-2 py-1 rounded border-slate-200 bg-pink-400 text-white ${props.disabled ? 'opacity-50' : ''}`}>{label}</button>
    );
}

export default Button