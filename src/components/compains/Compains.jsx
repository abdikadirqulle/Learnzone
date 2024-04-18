import { LocalBrands } from '../../assets/LocalBrands'

const members = [
    {
        rate : "25k",
        name : "CLASSES",
    },
    {
        rate : "600K+",
        name : "MEMBERS",
    },
    {
        rate : "300+",
        name : "Institutions",
    },
    {
        rate : "8k",
        name : "TEACHERS",
    },
]

const Compains = () => {
  return (
    <div className='flex flex-col gap-10 bg-tertiary p-4 rounded-md'>
        <div className='flex flex-col space-y-4 md:space-y-3 pb-10'>
            <h1 className='text-md font-medium text-center md:text-md z-10'>We collaborate with leading education providers and organisations</h1>
            <div className='flex gap-4 flex-wrap items-center justify-center xl:justify-start'>
                {LocalBrands.map((brands)=> (
                    <>
                    <div className='' key={brands.id}>
                        <img src={brands.image} alt="photo" className='w-[5rem] h-[5rem] md:w-[8rem] md:h-[8rem] xl:w-[7.5rem] object-contain'/>
                    </div>
                    </>
                ))}
            </div>
            
        </div>
        {/* <LocalBrand /> */}
    </div>
  )
}

export default Compains;



export const LocalBrand = () => {
    return (
        <div className=' mt-10 flex flex-wrap items-center justify-center md:justify-between gap-4'>
            {members.map((member) =>(
                <>
                <div className='rounded-md px-10 py-5 flex flex-col items-center justify-center bg-primaryBlue '>
                    <h1 className='text-3xl font-extrabold text-white'>{member.rate}</h1>
                    <h1 className='text-2xl font-bold text-blue-100'>{member.name}</h1>
                </div>
                </>
            ))}
        </div>
    )
}