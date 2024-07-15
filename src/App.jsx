
import { useEffect, useState } from 'react'
import './App.css'
import products from './ProductsData'




function App() {
  const [data,setData] = useState(products)

  const handleButton = (furniture)=>{
    //filter Functions
    const filterData = products.filter((productsData)=>{
      return productsData.category == furniture
    })
    setData(filterData)
  }
 
  // animation 
  useEffect(()=>{
     const single_card = document.querySelectorAll('.single_card')
     
      single_card.forEach((items)=>{
        items.classList.remove('animations')
        void items.offsetWidth;
        items.classList.add('animations')  // add animation class
      })
  },[data])


  return (
    <>
     <nav className="bg-gray-800 p-5">
        <div className="flex justify-center gap-3">
          <button onClick={()=>setData(products)} className="text-white px-3 py-3 rounded-lg hover:bg-gray-700">All</button>
          <button onClick={()=> handleButton ("Sofa")} className="text-white px-3 py-3 rounded-lg hover:bg-gray-700">Sofa</button>
          <button onClick={()=> handleButton ("Bed")} className="text-white px-3 py-3 rounded-lg hover:bg-gray-700">Bed</button>
          <button onClick={()=> handleButton ("Table")} className="text-white px-3 py-3 rounded-lg hover:bg-gray-700">Table</button>
          <button onClick={()=> handleButton ("Chair")} className="text-white px-3 py-3 rounded-lg hover:bg-gray-700">Chair</button>
        </div>
     </nav>
    
     <div className="main flex flex-wrap gap-4 justify-center mb-6">
        {
            data.map((items,i )=>(
              <div key={i} className="single_card bg-white shadow-lg rounded-lg p-4" style={{ width: '400px' }}>
              <img src={items.img} alt={name} className="w-full h-48 rounded-md object-cover" />
              <div className="mt-4">
                <h2 className="text-2xl font-semibold text-gray-800">{items.name}</h2>
                <p className="text-gray-500">Category : {items.category} </p>
                <p className="text-gray-600 mt-2">Material : {items.material} </p>
                <p className="text-gray-600">Dimensions : {items.dimensions} </p>
                <p className="text-gray-600">Color : {items.color} </p>
                <p className="text-green-500 mt-2">{items.in_stock ? "In Stock" : "Out of Stock"}</p>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-lg font-bold text-red-500">{items.discount_price? items.discount_price : items.price}</span>
                <span className="text-sm line-through text-gray-500 ml-2">{items.discount_price&& items.price}</span>
              </div>
        </div>

            ))
          }
     </div>
    </>
  )
}

export default App
