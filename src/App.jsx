import { useState } from 'react'
import Footer from '../compunds/Footer'
import Order, { menuItems } from '../compunds/Order';
import Navbar from '../compunds/Navbar';
import './App.css';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';

const homeMenuItems = [
  { id: 1, name: 'Espresso', description: 'Strong and bold espresso shots', price: 3.99 },
  { id: 2, name: 'Cappuccino', description: 'Smooth and creamy cappuccino', price: 4.99 },
  { id: 3, name: 'Latte', description: 'Velvety smooth latte with milk', price: 4.49 },
  { id: 4, name: 'Americano', description: 'Rich and full-bodied americano', price: 3.49 },
  { id: 5, name: 'Mocha', description: 'Delicious chocolate coffee blend', price: 5.49 },
  { id: 6, name: 'Macchiato', description: 'Perfect espresso and milk blend', price: 4.29 },
]

function Home() {
  return (
    <>
      <Navbar />
      <section className='Home h-screen text-white flex items-center justify-between px-10'>
        <div className="img w-1/2">
          <img src="/heroimg.png" alt="hero img" className='slide-in-left' />
        </div>
        <div className="w-1/2 text-center slide-in-right">
          <h1 className='text-4xl font-bold mb-4'>Coffie Time</h1>
          <h3 className='text-xl'>Relax your mind with our different flavour's</h3>
        </div>
      </section>
      <div className="bg-white w-full overflow-hidden whitespace-nowrap">
        <div className="flex justify-around moving-line">
          <p>Take Your coffie first Coofie Now 🍵</p>
          <p>Get 25% off on forst order 👜</p>
          <p>Abd get relife from headache 🤒</p>
        </div>
      </div>
      <section className="menu py-16 px-10 bg-amber-50">
        <h2 className='text-center text-4xl font-bold text-amber-900 mb-12'>Our Coffee Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {homeMenuItems.map((item) => (
            <div key={item.id} className='bg-gray-800 rounded-lg p-6 text-white hover:shadow-lg hover:scale-105 transition duration-300'>
              <h3 className='text-2xl font-bold mb-2'>{item.name}</h3>
              <p className='text-gray-300 mb-4'>{item.description}</p>
              <div className='flex justify-between items-center'>
                <span className='text-xl font-bold text-yellow-500'>${item.price.toFixed(2)}</span>
                <Link to="/Order" state={{ itemId: item.id }}>
                  <button className='bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded transition'>Add to Order</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  )
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/Order",
      element: <><Navbar /><Order /></>,
    },
  ])

  return <RouterProvider router={router} />
}

export default App
