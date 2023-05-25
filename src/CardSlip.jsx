import MCard from "./MCard";
import apple from './assets/apple-svgrepo-com.svg'
import slip from './assets/invoice-heguishuipiao-line-svgrepo-com.svg'

const CardSlip = () => {
    return ( <div className="mt-12 md:mt-0 flex relative min-h-[600px]">
                <MCard />
                <div className="relative before:z-10 before:h-8 before:w-4 before:rounded-e-full before:absolute before:bg-white before:bottom-[75px] after:z-10 after:h-8 after:w-4 after:rounded-s-full after:absolute after:bg-white after:right-0 after:bottom-[75px] mt-auto h-[82%] min-h-[490px] sm:w-[250px] w-[220px] bg-gradient-to-b from-gradient-1 to-gradient-2 rounded-2xl">
                    <div className="absolute w-full border-t border-dashed border-slate-500 bottom-[91px]"></div>
                    <div className="absolute top-[45%] space-y-4 text-sm w-[calc(100%-70px)] left-[35px]">
                        <div className="flex justify-between">
                            <span>Company</span>
                            <div className="flex items-center">
                                <div className="bg-primary p-1 mr-1 rounded-full"><img width={12} src={apple} alt="" /></div>
                                <p className="font-bold">Apple</p>
                            </div>
                            
                        </div>
                        <div className="flex justify-between">
                            <span>Order Number</span>
                            <p className="font-bold">1266201</p>
                        </div>
                        <div className="flex justify-between">
                            <span>Product</span>
                            <p className="font-bold">Macbook Air</p>
                        </div>
                        <div className="flex justify-between">
                            <span>VAT(20%)</span>
                            <p className="font-bold">$100.00</p>
                        </div>
                    </div>

                    <div className="absolute flex items-center justify-between bottom-5 w-[calc(100%-70px)] left-[35px]">
                        <div>
                            <span className="sm:text-sm text-[10px] ">You have to Pay</span>
                            <h2 className="text-2xl font-bold">549.<span className="text-lg font-medium">99</span><span className="text-lg font-light">USD</span></h2>
                        </div>
                        <div>
                            <img src={slip} width={40} height={40} alt="" />
                        </div>
                    </div>
                </div>
        </div> );
}
 
export default CardSlip;