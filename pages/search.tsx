import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

type Props = {}
const Search = (props: Props) => {
    return (
        <div className="h-screen flex flex-col ">
            <Navbar />
            <section className="font-kodchasan bg-[#D9D9D9] h-full">
                <div className="px-5 max-w-5xl mx-auto ">
                    <div className="flex justify-center">

                        <h1 className="font-semibold text-2xl bg-[#E5BD90] mt-16 w-fit px-6 py-4 rounded-lg  ">How Search works</h1>
                    </div>
                    <div className="px-6 py-12 mt-6 rounded-lg bg-white">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, perspiciatis nostrum iusto pariatur, nemo earum cumque reprehenderit id quam praesentium ipsam dolore ea odit qui cupiditate, voluptates quibusdam iure modi.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, perspiciatis nostrum iusto pariatur, nemo earum cumque reprehenderit id quam praesentium ipsam dolore ea odit qui cupiditate, voluptates quibusdam iure modi.</p>
                    </div>
                </div>

            </section>

            <div className=" mt-auto">
                <Footer />

            </div>
        </div>
    )
}
export default Search