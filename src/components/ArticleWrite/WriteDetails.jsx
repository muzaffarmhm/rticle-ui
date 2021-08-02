import React from 'react'
import Tags from './Tags'

export default function WriteDetails() {
    return (
        <div className="mb-10">
            <form action="" method="post">

                <div className="p-4">
                    <div className="pb-3">
                        <label for="title">Title of your Article:</label>
                    </div>
                    <input
                        name="title"
                        type="text"
                        className="block p-2 w-full border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent "
                        placeholder="Enter your Title name here   @Example: How to win a lottery"
                    />
                </div>

                <div className="p-4">
                    <div className="pb-3">
                        <label for="description">Description:</label>
                    </div>
                    <input
                        name="description"
                        type="text"
                        className="block p-2 w-full border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent "
                        placeholder="Enter the description/short-explanation of your article  @Example: How to win a lottery"
                    />
                </div>

                <div>
                    <Tags />
                </div>

                <div className="p-4">

                    <div className="pb-3">
                        <label for="Category">Category:</label>
                    </div>


                    <select className="block p-2 w-full border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent " name="Category" id="cars">
                        <option value="food">Food</option>
                        <option value="travel">Travel</option>
                        <option value="technology">Technology</option>
                        <option value="others">Others</option>
                    </select>
                </div>

                <div className="p-4">
                    <div className="pb-3">
                        <label>Article Cover Photo:</label>
                    </div>
                    <input
                        type="file"
                        accept="image/*"
                    >

                    </input>
                </div>


            </form>
        </div>
    )
}
