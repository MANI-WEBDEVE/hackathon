import React from 'react'
import Image from 'next/image'

const styleCategories = [
    {
        id: 1,
        title: "Casual",
        image: "https://s3-alpha-sig.figma.com/img/e1b7/74ab/a32d9a769caba77c08e107a9198dcd6d?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b4UeQp6fHRkIf0Na1LSdQRwREaBDn7fYbF1pelXrqWrYzoBnMjJ78wrMnfh1CmpkuFoMTp6gea0yM-OE5ls6dxNJYnnthd8OoUbS1dreO0JUIeFcqPxvnd63B8W4wnvQD-I5E3uhI9Nig2hgtrExS5pTCDC~3YK3jdP8dzyHw4ccQCdiwTqrm-gN8Ihn1H~tCBKZCkhftX5bS2OK-LTNv9BfHNdDgd36QNzZJaESJmzE5tTF7K91v8XYJSPafBBn0yOjs0rwAVRmHnCFvtiTW5gfbIfFLB1K57n7FpVB9CygShI22VO92CHM11yL7Pn-9yfb0QU7zLSd6ybMyC6eRw__"
    },
    {
        id: 2,
        title: "Formal",
        image: "https://s3-alpha-sig.figma.com/img/e46e/d6ac/8bdbe2c750dcc6e834bf1d98a4a73b29?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E0BTEQXiaQnIbdTIMC8pMOuxyZu6ez7zZJUe5-ObrsnYJp0W1iYiYiEa6yOOupXsGmadMu~qHlcBOgMh5~CbkumqIdjJGRdxCaXlH~Ik8R4vcNOqRsgLtxeHKxSncZNpCo2N~KK6h3NJoyytNlu28FoNKTDot86ut-sC4WW~LCV2XGBTio2m9vCkCH~gdfOnAJtlrS0Rs1F1jLVAUQOrHHO8jXTmWtmB6i1X4udHhnYSAipquNdY6aOLBYnMzWw5H7v3FFrVHprTrVmkCrBjdSnwqzyiTPjRxSuJCGnB3UoBW8DXIrwAGUtZ8Cwe1hUwrlsEsLSaxYzSp9q9PBJbCQ__"
    },
    {
        id: 3,
        title: "Party",
        image: "https://s3-alpha-sig.figma.com/img/aa19/c69e/82cd85a823c989c1c8631bd976e2cbfb?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YHUTE2zwTZ2le4VdTjCwLgRmtU9VACD07l6okkWOcr-ti~FgxflSh61rYbN6uE5nCWJkg67p~gAGWg8DeS4jHV-NaEGK1Fu4iYuEX4DbnK6B4eV4JRoLPTJ3fT5NKg~5SOypu5Fip6TtQHJVFxJhdrgKlg3ENtVe4qUfXFNAOC8fskU5QG6txaEpsMEArDLYTkZpspE8Qtcdw9c8IM11HKrzMLEl8MSeBOs2ZojEMggcDB5CxZdbw6~ODAKNBk1nhcVZs4-ASPeAskObHp7K5yzUChbTz~hqLb5vsTvJv3GBZug20jlbFSHvyttVBQGzvcD3JX4l55Px-e3v6Tnr2w__"
    },
    {
        id: 4,
        title: "Gym",
        image: "https://s3-alpha-sig.figma.com/img/fce6/58e0/c17a220fe8bfb1126626f3ab58a761ec?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mdCRDq-iZ2glV~ZfoXmKJ1FZyy~SkXSkAjzKCXE6c12nFxBrgOWlB-LT7v43WgKPMk94rL523OUry9q9oTptEZ0biiiTfvj~TmfHcxhnSwM44s7brRuOarJfQpq~X4NkneAdbXHZizrmszvl9eUpjzOdKGBp530QOw8xwXtGy4dU4HZj~5fYyNhnL8XML0mu4p8ammx06ygfGe0cHa8n1J4YQVyWqANYnAKESV2flnPSEevcX55zR5CS22J7KomXsgctb-vCYYmzs9ybHMmZZrMuvPw0tSiBYXi0w5EyMwi9q0Q1ivjlJohtp4LXzXAfdKv4ng7mCAehZWyq4At7FA__"
    }
]

const BrowseStyle = () => {
    return (
        <section className='mx-auto  w-[90%] rounded-t-[40px] overflow-hidden mx-auto md:m-0 px-14 sm:px-8 md:px-16 lg:px-28 py-10 sm:py-16 lg:py-20 bg-gray-100 '>
            <h2 className='text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center mb-6 sm:mb-8 lg:mb-10'>BROWSE BY DRESS STYLE</h2>
            
            {/* Mobile: Single column, Tablet/Desktop: Two columns */}
            <div className='flex flex-col gap-4 sm:gap-6'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
                    {styleCategories.slice(0, 2).map((style) => (
                        <div key={style.id} className='relative group cursor-pointer overflow-hidden rounded-xl 
                        
                        '>
                            <Image
                                src={style.image}
                                alt={style.title}
                                width={600}
                                height={300}
                                className='w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover transition-transform duration-300 group-hover:scale-110'
                            />
                            <div className='absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors'></div>
                            <h3 className='absolute top-4 sm:top-6 left-4 sm:left-6 text-xl sm:text-2xl font-bold text-white drop-shadow-lg'>
                                {style.title}
                            </h3>
                        </div>
                    ))}
                </div>
                
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
                    {styleCategories.slice(2).map((style) => (
                        <div key={style.id} className='relative group cursor-pointer overflow-hidden rounded-xl'>
                            <Image
                                src={style.image}
                                alt={style.title}
                                width={600}
                                height={300}
                                className='w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover transition-transform duration-300 group-hover:scale-110'
                            />
                            <div className='absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors'></div>
                            <h3 className='absolute top-4 sm:top-6 left-4 sm:left-6 text-xl sm:text-2xl font-bold text-white drop-shadow-lg'>
                                {style.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BrowseStyle
