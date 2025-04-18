    import React from 'react'
    import { FaReact } from 'react-icons/fa'
    import { IoLogoNodejs } from 'react-icons/io'
    import { SiJavascript, SiMongodb } from 'react-icons/si'
    import { TbBrandNextjs } from 'react-icons/tb'

    const stackItems = [
    { id: 1, name: 'React', icon: FaReact , color :"#61DBFB"  },
    { id: 2, name: 'Node.js', icon: IoLogoNodejs ,color:"#8CC84B"  },
    { id: 3, name: 'JavaScript', icon: SiJavascript , color:"#F7DF1E" },
    { id: 4, name: 'MongoDB', icon: SiMongodb , color:"#47A248" },
    { id: 5, name: 'Next.js', icon: TbBrandNextjs, color:"#000000" },
    
    ]

    export default function Stack() {
    return (
        <section className="py-16 glass" id='stack'>
        <div className="max-w-[1200px] mx-auto px-4 text-center">
            <h2 className="text-5xl font-bold text-gray-200 mb-4">My Stack</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
            {stackItems.map((item) => (
                <div
                key={item.id}
                className="flex flex-col items-center justify-center p-4 rounded-xl"
                >
                <div className="mb-4 bg-white/10 p-6 rounded-xl">
                    {React.createElement(item.icon, {
                        className:'w-32 h-32' ,
                        style: { color: item.color },
                    } )}
                </div>
                <p className="font-semibold text-gray-400">{item.name}</p>
                </div>
            ))}
            </div>
        </div>
        </section>
    )
    }
