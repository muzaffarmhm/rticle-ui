import React from 'react'

export default function BlogTemplate(props) {
    return (
        <div>
            <article className=" flex flex-col shadow my-4  ">
            <a href="#" className="hover:opacity-75">
              <img src={"https://source.unsplash.com/1920x500/?" + props.category }/>
            </a>
            <div className=" bg-white flex flex-col justify-start p-6 hover:bg-gray-100">
              <a
                href="#"
                className="text-blue-700 text-sm font-bold uppercase pb-4"
              >
                {props.category}
              </a>
              <div>

              <a
                href="#"
                className="mb-8 text-3xl font-bold tracking-tighter text-left text-black lg:text-3xl title-font uppercase hover:text-blue"
                >
                {props.title}
              </a>
                  </div>
              <p href="#" className="text-sm py-3">
                By{" "}
                <a href="#" className="font-semibold hover:text-blue-800">
                  {props.author}
                </a>
                , Published on {props.date}
              </p>
              <a href="#" className="pb-6">
                {props.meta}
              </a>
              <div className="">
              <a href="#" className="uppercase text-gray-800 font-bold hover:text-white hover:bg-gray-400 rounded-full p-1">
              <reading>continue reading &gt;</reading>
              </a>
              </div>
            </div>
          </article>
        </div>
    )
}