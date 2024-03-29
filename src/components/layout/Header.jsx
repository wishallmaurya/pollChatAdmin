import { MdNotificationsNone } from "react-icons/md"
import { useNavigate } from 'react-router-dom'
const Header = () => {
    const navigate = useNavigate()
    return (
        <>
            {/* <!-- component --> */}
            <div className='shadow-xl'>
                <header className="header z-10 fixed w-[100%] top-0 bg-white shadow-md flex items-center justify-between px-8 pt-5 pb-2 max-[1100px]:pt-1 antialiased">
                    {/* <!-- logo --> */}
                    <h1 className="mx-2  cursor-pointer" onClick={() => navigate("/")}>
                        <img src="https://as1.ftcdn.net/v2/jpg/04/79/73/88/1000_F_479738870_pvvl7YSRxQfFz4Pj7dV58GYnRaN8kQ6r.jpg" alt="logo" className='w-20' />
                    </h1>

                    <div className="w-1/2 ml-20 ">
                        <input placeholder="Search" className="px-2 mx-10 border-2 border-gray-300 h-12 w-[70%] rounded-lg bg-gray-200" name="text" type="text" />
                    </div>
                    <div className=" w-[4%] ">
                        <MdNotificationsNone className="text-2xl" />
                    </div>
                    <div className="w-[15%] flex cursor-pointer" onClick={() => navigate("/profile")}>
                        <img src="https://img.freepik.com/free-photo/indoor-shot-attractive-young-woman-with-glasses-posing-against-white-wall_273609-20347.jpg?w=1060&t=st=1694505251~exp=1694505851~hmac=47d7701cbee598028524f78fb4d5e7648c1cc1c516ce4bcbb6e077e97d1517bc" alt="profile" className="w-10 h-10 rounded-full object-cover m-2 hover:scale-110" />
                        <p className="m-2 pt-2 font-semibold hover:scale-110" >Alice Perry</p>
                    </div>


                </header>
            </div>
        </>
    )
}

export default Header