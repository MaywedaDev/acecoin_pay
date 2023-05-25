const Input = ({title, subtitle, children}) => {
    return ( <div className="flex flex-col lg:flex-row gap-10">
        <div className="w-full">
            <p className="text-xl font-bold">{title}</p>
            <span className="text-sm text-gray-500">{subtitle}</span>
        </div>
        <div className="w-full">
            {children}
        </div>
    </div> );
}
 
export default Input;