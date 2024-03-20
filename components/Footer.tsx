type Props = {}
const Footer = (props: Props) => {
    return (
        <div className="bg-[#E5BD90]">
            <div className="flex items-center justify-between py-5 px-5 max-w-5xl mx-auto">
                <ul className="flex space-x-5 items-center font-kodchasan">
                    <li>Privacy</li>
                    <li>Terms</li>
                </ul>
                <p className="font-kodchasan">designed by: Joy Kara</p>
            </div>
        </div>
    )
}
export default Footer