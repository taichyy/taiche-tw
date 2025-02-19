import HomeBtn from "@/components/home-btn";
import Hamburger from "@/components/hamburger/hamburger";

const OthersLayout = ({ children }) => {

    return (
        <>
            <nav className="fixed top-0 left-0 gap-10 px-[1.5rem] pt-[2rem] z-50">
                <HomeBtn />
            </nav>
            {/* Hamburger is fixed itself */}
            <Hamburger />
            {children}
        </>
    );
}

export default OthersLayout;