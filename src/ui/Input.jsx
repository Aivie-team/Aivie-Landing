const Input = ({className = "" , ...props}) => {
    return (
        <input 
            className={`px-2 ${className}`}
            {...props}
        />
    )
}

export default Input