import Image from "next/image";

const Contact = () => {
    const data = {
        contact_mail: "taichedev@gmail.com",
        contact_line: "taichenyen"
    }
    
    return (
        <div className="h-screen w-full flex flex-col-reverse md:flex-row items-center justify-center md:ml-5">
            <div className="text-center">
                <h3 className="text-2xl font-bold uppercase">
                    contact me
                    <br />
                    聯絡我
                </h3>
                <h4 className="mt-5">
                    <span className="icon-gmail mr-2"></span>
                    {data.contact_mail}
                </h4>
                <h4>
                    <span className="icon-line mr-2"></span>
                    {data.contact_line}
                </h4>
            </div>
            <Image
                width={280}
                height={200}
                alt="personal logo"
                src="/images/contact/logo.png"
                className="ml w-48 mb-10 md:ml-5 md:w-72 md:mb-0"
            />
        </div>
    );
}

export default Contact;