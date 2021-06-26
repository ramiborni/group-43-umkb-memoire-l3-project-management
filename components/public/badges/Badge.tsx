const Badge = ({text,color,outlined}:{text:string,color:string,outlined:boolean}) => {
    return (
        <div className={`${outlined? `text-${color}-500` : `bg-${color}-100 text-${color}-600`} select-none px-4 py-2 border rounded-lg  border-${color}-500`}>
            {text}
        </div>
    );
}

export default Badge;