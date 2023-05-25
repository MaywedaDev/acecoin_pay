import icon from './assets/pngegg.png'
import emv from './assets/pngegg(1).png'
import ms from './assets/pngegg(2).png'


const MCard = () => {
    return ( <div className="w-[180px] h-[300px] drop-shadow-2xl flex flex-col justify-between p-4 bg-card rounded-2xl absolute z-10 left-[calc((100%-180px)/2)] border border-slate-50">
        <div className='mt-4 flex justify-between'>
            <img width={50} src={emv} alt="" />
            <img src={icon} width={50} className='-rotate-90' alt="" />
        </div>
        <div className='space-y-2'>
            <p className='text-sm font-medium'>Jonathan Micheal</p>
            <p className='font-semibold text-lg'><span className='font-extrabold mr-2 tracking-widest'>····</span> 3456</p>
            <div className='flex justify-between'>
                <p className='text-md font-semibold'>9/22</p>
                <img className='object-contain w-20' width={100} src={ms} alt="" />
            </div>
        </div>
    </div> );
}
 
export default MCard;