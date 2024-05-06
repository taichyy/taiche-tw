const JobBlock = ({duration, title, coporation, jd}) => {
    return (
    <div className="pl-5">
        <h3 className=" text-slate-500">
            {duration}
        </h3>
        <h3 className="font-bold text-lg pt-1 text-slate-950">
            {title}
        </h3>
        <h4 className="text-sm text-slate-500">
            {coporation}
        </h4>
        <p className="pt-3 text-sm">
            {jd.split('<br/>').map((item, index) => (
                <span key={index} className=" block">
                    {item}
                </span>
            ))}
        </p>
    </div>
    );
}
 
export default JobBlock;