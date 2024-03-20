import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

type Props = {}
const About = (props: Props) => {
    return (
        <div className="h-screen flex flex-col ">
            <Navbar />
            <section className="font-kodchasan bg-[#D9D9D9] h-full">
                <div className="px-5 max-w-5xl mx-auto ">
                    <div className="flex justify-center">

                        <h1 className="font-semibold text-2xl bg-[#E5BD90] mt-16 w-fit px-6 py-4 rounded-lg  ">About</h1>
                    </div>
                    <div className="px-6 py-12 mt-6 rounded-lg bg-white">
                        <p className="pb-4">The DishDive project addresses the challenge of providing a centralized and user-friendly platform for individuals passionate about culinary exploration. The problem it intends to solve is the fragmentation of recipe-related information across various sources, making it cumbersome for users to discover and organize diverse recipes tailored to their preferences.</p>
                        <p className="pb-4">The DishDive project addresses the challenge of providing a centralized and user-friendly platform for individuals passionate about culinary exploration. The problem it intends to solve is the fragmentation of recipe-related information across various sources, making it cumbersome for users to discover and organize diverse recipes tailored to their preferences.</p>
                        <p className="pb-4">Centralized Platform: DishDive aims to provide a single platform where users can access a wide range of recipes without having to visit multiple sources. This centralization simplifies the recipe discovery process and saves users time and effort.</p>
                        <p className="pb-4">User-Friendly Interface: The platform intends to offer a user-friendly interface that enhances the overall user experience. This includes intuitive navigation, easy search functionality, and seamless organization of recipes.</p>
                        <p className="pb-4">The DishDive project addresses the challenge of providing a centralized and user-friendly platform for individuals passionate about culinary exploration. The problem it intends to solve is the fragmentation of recipe-related information across various sources, making it cumbersome for users to discover and organize diverse recipes tailored to their preferences.</p>

                    </div>
                </div>

            </section>

            <div className=" mt-auto">
                <Footer />

            </div>
        </div>
    )
}
export default About