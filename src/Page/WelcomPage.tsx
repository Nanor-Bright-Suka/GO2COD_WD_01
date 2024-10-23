import React, { useState } from 'react'
import  Welcome_Logo  from "/img/Todo Welcom Logo.jpg"
import Button_WP from '../Components/Button_WP'
import InputField from '../Components/InputField'
import { UserProps } from '../Types'
import { useNavigate } from 'react-router-dom'



const WelcomPage: React.FC = () => {
  const [userProfileResults, setUserProfileResults] = useState<UserProps | null>(null)
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  //Getting Started
  const handleGetStarted = () => {
    if (userProfileResults) {
      setLoading(true); 
      setTimeout(() => {
        setLoading(false);
        navigate('/homepage', { state: { User: userProfileResults } }); // Pass user data to homepage
      }, 2000); // 2 seconds delay before switching pages
    } else {
      alert('Please enter your name first!');
    }
  };

  return (
    <div className='flex flex-col justify-center items-center gap-10 max-md:gap-16  max-lg:max-w-2xl max-lg:mx-auto max-lg:gap-10 max-lg:border-2 max-lg:mt-28 lg:max-w-lg lg:mx-auto lg:gap-10 lg:border-2'>
      
          <h1 className='max-lg:text-5xl text-4xl max-md:text-[3rem] lg:text-[3rem]'>Welcome !</h1>
          <img src={Welcome_Logo} alt="Welcome Logo" className='max-sm:w-[20.04%] max-sm:h-[18.14%] rounded-md max-md:w-[17%] max-md:h-[9%] m-6 max-lg:w-[15%] max-lg:mt-0 lg:w-[15%] lg:mt-0' />
          
          <Button_WP label="Get Started" className='max-sm:w-[80%] max-md:w-[90%] max-md:text-2xl max-md:p-4 max-lg:w-[80%] max-lg:p-4 max-lg:text-3xl lg:w-[80%] lg:p-4 lg:text-3xl' />
        
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className='max-sm:w-[100%] max-sm:h-[60px] svg-animate max-md:w-[50%] max-md:h-[70px] max-lg:w-[30%] max-lg:h-[50px] lg:w-[30%] lg:h-[50px]'><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><path d="M12 3l0 17.5" /><path d="M12 21l7 -7M12 21l-7 -7" /></g>
          </svg>

      {loading ?  (<h2 className="text-2xl fade-in-scale">Getting Started .....</h2>) :
            <>  
            <InputField placeholder='What Should We Call You ?' required setUserProfileResults={setUserProfileResults} className='max-md:w-[80%] p-4 max-md:placeholder:text-2xl max-lg:w-[80%] max-md:text-2xl max-lg:text-3xl'/> 
          
          <Button_WP label="Start" className='max-sm:w-[50%] max-md:w-[50%] max-md:text-4xl max-md:mt-10 mb-10 max-lg:w-[60%] max-lg:text-3xl max-lg:mt-10 lg:w-[60%]' onClick={handleGetStarted} disabled={loading} />
          </>
         }
        
    </div>
  )
} 

export default  WelcomPage
