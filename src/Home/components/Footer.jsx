

const Footer = () => {
  return (
    <div className='w-full md:h-80 bg-zinc-600 border-t text-white md:flex-row flex-col flex justify-between items-center'>
      <div className='leading-10 p-2'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae dolor accusantium magni aliquid! Consequuntur, placeat blanditiis. Impedit nemo corrupti voluptas, molestiae velit consequuntur doloremque adipisci ab et hic quam alias.
      </div>
      <div className='leading-10 p-2'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae dolor accusantium magni aliquid! Consequuntur, placeat blanditiis. Impedit nemo corrupti voluptas, molestiae velit consequuntur doloremque adipisci ab et hic quam alias.
        <div className='w-full p-2 border rounded-full text-white flex'>
            <input type="text" placeholder='Subscribe....' className='w-full p-2 outline-none bg-transparent ' />
            <button className='bg-red-400 text-white rounded-full px-2 py-1'>subScribe</button>
        </div>
      </div>
      <div className='leading-10 p-2'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae dolor accusantium magni aliquid! Consequuntur, placeat blanditiis. Impedit nemo corrupti voluptas, molestiae velit consequuntur doloremque adipisci ab et hic quam alias.
      </div>
    </div>
  )
}

export default Footer
