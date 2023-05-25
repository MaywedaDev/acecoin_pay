import icon from './assets/pngegg.png'
import emv from './assets/pngegg(1).png'
import ms from './assets/kisspng-mastercard-credit-card-visa-payment-service-mastercard-5ac3fae719d0c6.8261643015227931911058.png'


const MCard = () => {
    return ( <div className="w-[180px] h-[300px] drop-shadow-2xl flex flex-col justify-between p-4 bg-card rounded-2xl absolute z-10 left-[calc((100%-180px)/2)] border border-slate-50">
        <div className='mt-4 flex justify-between'>
            <img width={50} src={emv} alt="" />
            <img src={icon} width={50} className='-rotate-90' alt="" />
        </div>
        <div className='space-y-2'>
            <p className='text-sm font-medium'>Jonathan Micheal</p>
            <p className='font-semibold text-lg'><span className='font-extrabold mr-2 tracking-widest'>····</span> 3456</p>
            <div className='flex justify-between items-center'>
                <p className='text-md font-semibold'>9/22</p>
                <div >
                    <img className='object-cover' width={40} height={40} src={ms} alt="" />
                    <p className='text-[7px] font-extrabold'>mastercard</p>
                </div>
                
            </div>
        </div>
    </div> );
}
 
export default MCard;