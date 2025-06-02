import HomeBtn from "@/app/(routes)/(home)/(components)/home-btn";

const OthersLayout = ({ children }) => {

    return (
        <>
            <nav className="fixed top-0 left-0 gap-10 px-[1.5rem] pt-[2rem] z-50">
                <HomeBtn />
            </nav>
            {/* Hamburger will be imported separately in each layout. */}
            {children}
        </>
    );
}

export default OthersLayout;