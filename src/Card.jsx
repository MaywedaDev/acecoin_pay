import CardSlip from "./CardSlip";
import Input from "./Input";
import pencil from './assets/pencil-simple-fill-svgrepo-com.svg'
import ms from './assets/kisspng-mastercard-credit-card-visa-payment-service-mastercard-5ac3fae719d0c6.8261643015227931911058.png'
import tick from './assets/pngegg(3).png'
import grid from './assets/grid-1526-svgrepo-com.svg'


const Card = () => {
    return ( <div className="bg-white text-primary gap-10 my-6 flex md:flex-row flex-col items-center relative p-12 w-[85%] max-w-[1000px]">
        <div className="w-full space-y-7 mt-4">
            <div className="sm:flex  justify-between mb-10">
                <p className=" text-2xl font-bold">AceCoin<span className="font-light">Pay</span></p>
                <div className="sm:flex inline-block mt-2 sm:mt-0 gap-1 before:absolute before:content-[':'] before:font-extrabold before:text-black before:left-[calc(50%-3px)] before:top-[calc((100%-24px)/2)] relative text-white">
                    <span className="p-2 bg-primary rounded-[4px]">0</span>
                    <span className="p-2 bg-primary rounded-[4px]">1</span>
                    <span className="ml-3 p-2 bg-primary rounded-[4px]">1</span>
                    <span className="p-2 bg-primary rounded-[4px]">9</span>
                </div>
            </div>
            <div>
                <div className="flex justify-between mb-4">
                    <div>
                        <p className="text-xl font-bold">Card Number</p>
                        <span className="text-sm text-gray-500">Enter the 16 digits card number on the card</span>
                    </div>
                    <div className="flex items-center">
                        <img width={24} height={24} src={pencil} alt="" />
                        <p className="text-blue ml-2 font-semibold">Edit</p>
                    </div>
                </div>
                <div className="flex relative">
                    <img width={30} height={30} src={ms} alt="" className="absolute left-2 top-[14px]"/>
                    <input type="tel" pattern="\d*" placeholder="2142 - 7512 - 3412 - 3456" inputmode="numeric" maxLength={16} className="focus:border-blue focus:text-blue focus:border-2 outline-none w-full border border-slate-200 py-4 px-16  rounded-lg" />
                    <img width={30} height={30} src={tick} className="absolute right-2 top-[14px]" alt="" />
                </div>
                
            </div>
            <Input title="CVV Number" subtitle="Enter the 3 or 4 digit number on the card">
                <div className="relative">
                    <img width={30} height={30} src={grid} alt="" className="absolute right-2 top-[14px]"/> 
                    <input type="text" maxLength={4} placeholder="327" className="focus:border-blue focus:text-blue focus:border-2 outline-none w-full border border-slate-200 p-4 pr-16 rounded-lg" />
                </div>
                
            </Input>
            <Input title='Expiry Date' subtitle='Enter expiration date of the card'>
                <div className="flex gap-2 items-center">
                    <input placeholder="9" max={31} type="number" className="focus:border-blue focus:text-blue focus:border-2 outline-none w-full border border-slate-200 p-4 rounded-lg" />
                        <p className="font-bold">/</p>
                    <input placeholder="24" maxLength={2} type="number" className="focus:border-blue focus:text-blue focus:border-2 outline-none w-full border border-slate-200 p-4 rounded-lg" />
                </div>
            </Input>
            <Input title='Password' subtitle='Enter your Dynamic password'>
                <div className="relative">
                        <img width={30} height={30} src={grid} alt="" className="absolute right-2 top-[14px]"/> 
                        <input type="password" placeholder="············" className="focus:border-blue focus:text-blue focus:border-2 outline-none w-full border border-slate-200 p-4 pr-16 rounded-lg" />
                </div>
            </Input>
            <button className="focus:border-blue focus:text-blue focus:border-2 outline-none bg-blue p-4 w-full font-medium rounded-lg text-white">Pay now</button>
        </div>
        <CardSlip />
    </div> );
}
 
export default Card;