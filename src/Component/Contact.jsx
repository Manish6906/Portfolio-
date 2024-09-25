

// icon import
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";



// img import
import Line from "./../assets/Line5.png";


function Contact() {
  return (
    <>
    <div className="p-3 mt-10 sm:mt-0">
        <div className='bg-gray-400 rounded-lg p-5 lg:p-10 lg:flex lg:gap-4'>
        <div className='' data-aos="fade-in">
        <div className=" ">
                      <h1 className="font-semibold text-[1.5rem] text-center sm:text-left">
                      Contact
                      </h1>
                      <img src={Line} className="text-[1px]" />
                  </div>
        


        <div className='mt-6 lg:flex lg:gap-2'>
            <div className='bg-red-200 rounded-lg p-5 shadow-md shadow-black '>
                <div className='flex items-center gap-2 just'>
                <IoMdCall className='text-red-700' />
                <p className='font-semibold'>Phone:</p>
                </div>
                    <div className='text-gray-800 mt-2  '>

                          <address>+91 7807895370</address> 
                          <address>+91 7807895370</address>
                    </div>
            </div>


            <div className='bg-red-200 rounded-lg p-5  mt-5 sm:mt-5  lg:mt-0 shadow-md shadow-black '>
                <div className='flex items-center gap-2 '>
                <MdEmail  className='text-red-700' />
                <p className='font-semibold'>Email-Id:</p>
                </div>
                    <div className='text-gray-800 mt-2'>

                          <address>manishsharma6906@gmail.com</address>
                    </div>
            </div>


        </div>
        <p className='mt-5 text-gray-800'  data-aos="fade-in">I am always open to discussing <b>new projects, opportunities in tech world,
        partnerships </b>and more so <b>mentorship</b>. </p>


        
        </div>
        <form action="https://api.web3forms.com/submit" method="POST"  data-aos="fade-in">
        <div className='mt-3 '>

        <input type="hidden" name="access_key" value="2e6b420c-849f-464e-aa8c-246b07844aaa" />


        <label htmlFor="Name" className='font-semibold'>Name:</label>
          <input type='text' name="Name" required className=' outline-0 border-b-2 mb-3 border-black bg-gray-400 w-full rounded-md p-2'/>
          <label htmlFor="Email" className='font-semibold '>Email:</label>
          <input type='email' name="Email" required className=' outline-0 border-b-2 mb-3 border-black bg-gray-400 w-full rounded-md p-2' />
          <label htmlFor="Message" className='font-semibold '>Message:</label>
          <input type='text' name="Message" required className=' outline-0 border-b-2 border-black bg-gray-400 w-full rounded-md p-2' />
          <button className='border-2 border-yellow-300 rounded-full p-2 mt-5 font-bold'>Submit</button>

         
        </div>
        </form>
</div>


    </div>
      
    </>
  )
}

export default Contact
