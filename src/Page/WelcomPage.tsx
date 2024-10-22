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
      <div className='flex flex-col justify-center items-center gap-10'>
      
          <h1 className='text-4xl'>Welcome !</h1>
          <img src={Welcome_Logo} alt="Welcome Logo" className='max-sm:w-[20.04%] max-sm:h-[18.14%] rounded-md' />
          
          <Button_WP label="Get Started" className='max-sm:w-[80%]' />
        
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className='max-sm:w-[100%] max-sm:h-[60px] svg-animate'><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><path d="M12 3l0 17.5" /><path d="M12 21l7 -7M12 21l-7 -7" /></g>
          </svg>

      {loading ?  (<h2 className="text-2xl fade-in-scale">Getting Started .....</h2>) :
            <>  
            <InputField placeholder='What Should We Call You ?' required setUserProfileResults={setUserProfileResults} /> 
          
          <Button_WP label="Start" className='max-sm:w-[50%]' onClick={handleGetStarted} disabled={loading} />
          </>
         }
        
    </div>
  )
} 

export default  WelcomPage
