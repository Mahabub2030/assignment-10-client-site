import { NavLink, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import VisaCard from "../components/VisaCard";
import PricingSection from "../components/PricingSection";
import Facilities from "../components/Facilities";


const HomeLayout = () => {
    const visas = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <h2 className="text-center my-5 font-bold text-4xl bg-gradient-to-r from-purple-700 to-blue-500 bg-clip-text text-transparent mb-10"> Latest visa section</h2>
            <div className=" w-10/12 mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-16">
                {
                    visas.slice(0,6).map(visa=><VisaCard key={visa._id} visa={visa}></VisaCard>)
                }
            </div>
            <NavLink to="/allvisas"><button className="btn mx-auto block bg-gradient-to-r from-purple-700 to-blue-500 text-white my-10">See all visas</button></NavLink>
            <PricingSection></PricingSection>
            <Facilities></Facilities>
        </div>
    );
};

export default HomeLayout;