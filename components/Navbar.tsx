import Link from "next/link"

const Navbar = () => {
    return (
        <div className="bg-[#E5BD90]">
            <div className="flex items-center justify-between py-5 px-5 max-w-5xl mx-auto">
                <div>
                    <Link href={'/'} className="font-kaushan text-5xl">DishDive</Link>
                </div>
                <ul className="flex items-center font-kodchasan space-x-5 text-xl">
                    <li><Link href='/about'>About</Link></li>
                    <li>  <Link href='/search'>How search works</Link>  </li>
                </ul>
            </div>


        </div>
    )
}
export default Navbar