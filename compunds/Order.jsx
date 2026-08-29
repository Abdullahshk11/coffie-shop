import { useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { FaArrowRight, FaMinus, FaPlus, FaShoppingBag } from 'react-icons/fa'

export const menuItems = [
    { id: 1, name: 'Espresso', description: 'Strong and bold espresso shots', price: 3.99, category: 'Classics', tone: 'from-[#765046] to-[#241716]' },
    { id: 2, name: 'Cappuccino', description: 'Smooth and creamy cappuccino', price: 4.99, category: 'Classics', tone: 'from-[#d8a06d] to-[#7b422b]' },
    { id: 3, name: 'Latte', description: 'Velvety smooth latte with milk', price: 4.49, category: 'Classics', tone: 'from-[#e7c28f] to-[#98623b]' },
    { id: 4, name: 'Americano', description: 'Rich and full-bodied americano', price: 3.49, category: 'Classics', tone: 'from-[#abbca8] to-[#4e6c66]' },
    { id: 5, name: 'Mocha', description: 'Delicious chocolate coffee blend', price: 5.49, category: 'Signature', tone: 'from-[#765046] to-[#241716]' },
    { id: 6, name: 'Macchiato', description: 'Perfect espresso and milk blend', price: 4.29, category: 'Signature', tone: 'from-[#e6ae62] to-[#a4502d]' },
]

const Order = () => {
    const location = useLocation()
    const [category, setCategory] = useState('All')
    const [cart, setCart] = useState(() => {
        const selectedItemId = location.state?.itemId
        return selectedItemId ? { [selectedItemId]: 1 } : {}
    })

    const categories = ['All', 'Signature', 'Classics', 'Cold']
    const visibleItems = category === 'All' ? menuItems : menuItems.filter((item) => item.category === category)
    const cartItems = menuItems.filter((item) => cart[item.id])
    const itemCount = Object.values(cart).reduce((total, quantity) => total + quantity, 0)
    const subtotal = useMemo(() => cartItems.reduce((total, item) => total + item.price * cart[item.id], 0), [cartItems, cart])
    const serviceFee = subtotal ? 1.5 : 0

    const updateCart = (id, change) => {
        setCart((currentCart) => {
            const quantity = (currentCart[id] || 0) + change
            if (quantity <= 0) {
                const nextCart = { ...currentCart }
                delete nextCart[id]
                return nextCart
            }
            return { ...currentCart, [id]: quantity }
        })
    }

    return (
        <main className="min-h-screen bg-[#f4eee4] px-5 pb-16 pt-28 text-[#2a211d] md:px-10">
            <div className="mx-auto max-w-7xl">
                <header className="mb-12 flex flex-col justify-between gap-8 border-b border-[#2a211d]/15 pb-10 md:flex-row md:items-end">
                    <div className="max-w-2xl">
                        <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#b06b3c]">The daily ritual / 01</p>
                        <h1 className="font-serif text-5xl leading-none tracking-tight md:text-7xl">Choose your<br /><span className="text-[#b06b3c]">perfect pour.</span></h1>
                        <p className="mt-6 max-w-md text-sm leading-6 text-[#62554c]">Small-batch coffee, considered ingredients, and a little calm in every cup.</p>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-[#62554c]">
                        <span className="h-2 w-2 rounded-full bg-[#75936a]" /> Brewing now · Pickup in 15–20 min
                    </div>
                </header>

                <div className="grid gap-12 lg:grid-cols-[1fr_350px]">
                    <section>
                        <div className="mb-8 flex flex-wrap items-center gap-2">
                            {categories.map((itemCategory) => (
                                <button key={itemCategory} onClick={() => setCategory(itemCategory)} className={`rounded-full border px-5 py-2 text-xs font-bold uppercase tracking-widest transition ${category === itemCategory ? 'border-[#2a211d] bg-[#2a211d] text-[#f4eee4]' : 'border-[#2a211d]/20 text-[#62554c] hover:border-[#2a211d]'}`}>
                                    {itemCategory}
                                </button>
                            ))}
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2">
                            {visibleItems.map((item) => (
                                <article key={item.id} className="group overflow-hidden rounded-2xl border border-[#2a211d]/10 bg-[#faf7f1] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                                    <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${item.tone}`}>
                                        <div className="absolute -bottom-12 -right-5 h-48 w-48 rounded-full border-[18px] border-white/20" />
                                        <div className="absolute bottom-5 left-6 text-6xl opacity-90 transition duration-500 group-hover:scale-110">☕</div>
                                        <span className="absolute right-5 top-5 rounded-full bg-white/80 px-3 py-1 text-[10px] font-bold uppercase tracking-widest">{item.category}</span>
                                    </div>
                                    <div className="p-5">
                                        <div className="flex items-start justify-between gap-3">
                                            <div><h2 className="font-serif text-2xl">{item.name}</h2><p className="mt-2 text-xs leading-5 text-[#75685f]">{item.description}</p></div>
                                            <span className="font-serif text-lg">${item.price.toFixed(2)}</span>
                                        </div>
                                        <div className="mt-5 flex items-center justify-between border-t border-[#2a211d]/10 pt-4">
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-[#998c82]">{itemCount > 0 && cart[item.id] ? `${cart[item.id]} in bag` : 'Made to order'}</span>
                                            <button onClick={() => updateCart(item.id, 1)} className="flex items-center gap-2 rounded-full bg-[#b06b3c] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#8f512c]" aria-label={`Add ${item.name} to order`}>
                                                Add <FaPlus size={10} />
                                            </button>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>

                    <aside className="h-fit rounded-2xl bg-[#2a211d] p-7 text-[#f4eee4] shadow-2xl lg:sticky lg:top-28">
                        <div className="mb-8 flex items-center justify-between border-b border-white/15 pb-6">
                            <div><p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#d39a6d]">Your order</p><h2 className="mt-2 font-serif text-3xl">A little luxury</h2></div>
                            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#b06b3c]"><FaShoppingBag /></div>
                        </div>
                        <div className="min-h-32 space-y-5">
                            {cartItems.length === 0 ? <p className="py-6 text-sm leading-6 text-[#c5b9ae]">Your bag is waiting. Add a pour from the menu to begin.</p> : cartItems.map((item) => (
                                <div key={item.id} className="flex items-center justify-between gap-3">
                                    <div><p className="font-serif text-lg">{item.name}</p><p className="text-xs text-[#b8aaa0]">${item.price.toFixed(2)} each</p></div>
                                    <div className="flex items-center gap-3 rounded-full border border-white/20 px-2 py-1"><button onClick={() => updateCart(item.id, -1)} aria-label={`Remove one ${item.name}`}><FaMinus size={10} /></button><span className="w-4 text-center text-sm">{cart[item.id]}</span><button onClick={() => updateCart(item.id, 1)} aria-label={`Add one ${item.name}`}><FaPlus size={10} /></button></div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 space-y-3 border-t border-white/15 pt-6 text-sm"><div className="flex justify-between text-[#c5b9ae]"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div><div className="flex justify-between text-[#c5b9ae]"><span>Service fee</span><span>${serviceFee.toFixed(2)}</span></div><div className="mt-4 flex justify-between font-serif text-2xl"><span>Total</span><span>${(subtotal + serviceFee).toFixed(2)}</span></div></div>
                        <button onClick={()=>{alert("order is conformed")}} disabled={!itemCount} className="mt-7 flex w-full items-center justify-center gap-3 rounded-full bg-[#d39a6d] py-4 text-xs font-bold uppercase tracking-widest text-[#2a211d] transition hover:bg-[#e2b184] disabled:cursor-not-allowed disabled:opacity-40">Continue to checkout <FaArrowRight /></button>
                        <p className="mt-5 text-center text-[10px] uppercase tracking-widest text-[#8f8177]">Free pickup · Crafted with care</p>
                    </aside>
                </div>
            </div>
        </main>
    )
}

export default Order
