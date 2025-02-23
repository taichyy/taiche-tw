const JobBlock = ({duration, title, corporation, jd}) => {
    return (
    <div className="pl-5">
        <h3 className=" text-slate-500">
            {duration[0]} - {duration[1]}
        </h3>
        <h3 className="font-bold text-lg pt-1 text-slate-950">
            {title}
        </h3>
        <h4 className="text-sm text-slate-500">
            {corporation}
        </h4>
        <p className="pt-3 text-sm whitespace-pre-line">
            {jd}
        </p>
    </div>
    );
}
 
export default JobBlock;