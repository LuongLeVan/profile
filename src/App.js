import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import image from './images/image.jpg';
import avt from './images/avt.jpg';
import pj1 from './images/pj1.jpg';
import pj2 from './images/pj2.jpg';
import pj3 from './images/pj3.jpg';
import pj4 from './images/pj4.jpg';
import pj5 from './images/pj5.jpg';
import facebook from './images/facebook.png';
import instagram from './images/instagram.png';
import github from './images/github (1).png';
import arrow from './images/swirly-scribbled-arrow-svgrepo-com.svg'
import snow from './images/snow-crystal-2-svgrepo-com.svg'
import snowman from './images/snowman-9-svgrepo-com.svg'
import santa from './images/santa-and-reindeer-on-a-sleigh-svgrepo-com.svg'
import tree from './images/christmas-tree-svgrepo-com.svg'


import './App.css';

function App() {
  gsap.registerPlugin(ScrollTrigger);

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isShowMenu, setIsShowMenu] = useState(false);

  const handleSmooth = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div className={isDarkMode ? 'bg-black text-white' : ''}>
      {/* Menu Mobile */}
      <div className={isShowMenu ? 'bg-black-rgba fixed top-0 left-0 right-0 h-[400px] z-50 font-mono ' : 'bg-black-rgba fixed top-0 left-0 right-0 h-[400px] z-50 font-mono hidden'}>
        <div className='font-mono flex justify-end items-center text-white'>
          <span className='font-[600] text-[14px] block w-full ml-[46%]'>Menu</span>
          <button className='p-4 hover:opacity-70 text-[20px]' onClick={() => setIsShowMenu(false)}><i className="fa fa-close" aria-hidden="true"></i></button>
        </div>
        <h3 className='text-center font-bold text-white text-[24px] relative w-full'>
          <span className='border-b-4 border-[#f47e23]'>Luong</span>
        </h3>
        <ul className='text-center text-white font-medium text-[24px] mt-7'>
          <li className='inline-block'>
            <a href='/'>Home</a>
            <div className='scroll'></div>
          </li>
          <div>
            <li className='my-4 inline-block'>
              <a href='#about'>About Me</a>
              <div className='scroll'></div>
            </li>
          </div>
          <div>
            <li className='inline-block'>
              <a href='#projects'>Projects</a>
              <div className='scroll'></div>
            </li>
          </div>
          <div>
            <li className='my-4 inline-block'>
              <a href='#contact'>Contact Me</a>
              <div className='scroll'></div>
            </li>
          </div>
        </ul>
      </div>
      {/* Menu Mobile */}



      <button className='text-white bg-[#f47e23]  px-4 py-2 fixed bottom-4 right-4 hover:opacity-70' onClick={handleSmooth}>
        <span><i className="fa fa-arrow-up" aria-hidden="true"></i></span>
      </button>
      {/* Header */}
      <div className={isDarkMode ? 'flex items-center justify-between shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] fixed z-20 top-0 left-0 px-11 md:py-4 md:px-36 right-0 star py-4' : 'flex items-center justify-between py-4 px-11 md:px-36 shadow-2xl bg-[#dedede] fixed z-20 top-0 left-0 right-0'}>
        <div className="flex items-center">
          <span className="text-white rounded-[50%] px-4 py-2 bg-black">L</span>
          <p className={isDarkMode ? "font-[600] font-mono mx-2 text-white" : "font-[600] font-mono mx-2 text-black"}>Van Luong</p>
        </div>
        {/* MENU PC */}
        <div className={isDarkMode ? 'text-center text-white md:flex ml-[50%] items-center justify-end font-medium text-[20px] hidden' : 'text-center text-black md:flex ml-[50%] items-center justify-end font-medium text-[20px] hidden'}>
          <div className='item'>
            <a href='/'>Home</a>
            <div className='scroll'></div>
          </div>
          <div>
            <div className='mx-4 item'>
              <a href='#about'>About Me</a>
              <div className='scroll'></div>
            </div>
          </div>
          <div>
            <div className='item'>
              <a href='#projects'>Projects</a>
              <div className='scroll'></div>
            </div>
          </div>
          <div>
            <div className='mx-4 item'>
              <a href='#contact'>Contact Me</a>
              <div className='scroll'></div>
            </div>
          </div>
        </div>
        <div>
          <button className={isDarkMode ? 'text-yellow-300 hover:opacity-70 text-[24px] mr-2 md:mr-0' : 'hidden'} onClick={() => setIsDarkMode(!isDarkMode)}><i className="fa-solid fa-moon" aria-hidden="true"></i></button>
          <button className={isDarkMode ? 'hidden mr-2 md:mr-0' : 'hover:opacity-70 text-[24px] text-orange-300 mr-2 md:mr-0'} onClick={() => setIsDarkMode(!isDarkMode)}><i className="fa-solid fa-sun" aria-hidden="true"></i></button>
          <button className={isDarkMode ? "text-white mx-3 hover:opacity-70 text-[24px] md:hidden" : "text-black md:hidden mx-3 hover:opacity-70 text-[24px]"} onClick={() => setIsShowMenu(true)}><i className="fa fa-bars" aria-hidden="true"></i></button>
        </div>
      </div>
      {/* Header */}
      <div className={isDarkMode ? 'star md:flex  md:flex-row-reverse md:px-36  pt-[110px] pb-[15px]' : 'bg-[#dedede] md:flex  md:flex-row-reverse md:px-36  md:pt-[100px] pb-[15px] py-[110px]'}>
        <div className='md:w-[50%]'>
          <h2 className="text-center font-semibold font-mono text-[32px] mt-[-30px] md:mt-[70px] md:hidden">Van Luong</h2>
          <div className='flex justify-center'>
            <div className='text-[20px] absolute left-[6%] top-[20%] md:left-[56%]'>
              <a href='https://www.facebook.com/always.green.09' target='_blank' className='w-[40px] md:w-[40px] md:h-[40px] block hover:opacity-80 h-[40px] rounded-full text-center '>
                <img src={facebook} alt="facebook"/>
              </a>
              <a href='https://www.intagram.com/toilaeddie/' target='_blank' className='w-[40px] md:w-[40px] md:h-[40px] block hover:opacity-80 h-[40px] rounded-full text-center  my-2'>
              <img src={instagram} alt="instagram"/>
                
              </a>
              <a href='https://github.csom/LuongLeVan' target='_blank' className='w-[40px] md:w-[40px] md:h-[40px] block hover:opacity-80 h-[40px] rounded-full text-center '>
              <img src={github} alt="github"/>

              </a>
            </div>
            <img src={image} className='w-[220px] mt-4 mx-auto  relative z-10 md:w-[320px]' alt="image" />
            <img src={snow} className='w-[50px] snow md:hidden absolute mx-auto z-10 md:w-[20px]' alt="snow" />


            <div className={isDarkMode ? 'border-4 border-l-0 border-white w-[180px] right-[15%] top-[21%] h-[290px] absolute md:h-[420px]  md:right-[17%]' : 'border-4 border-l-0 border-black w-[180px] right-[15%] top-[21%] h-[290px] md:h-[420px]  md:right-[17%] absolute'}></div>
          </div>
        </div>
        <div className='md:w-[50%] relative'>
        <img src={arrow} className='w-[50px] arrow absolute mx-auto md:hidden z-10 md:w-[20px]' alt="arrow" />
        <img src={snowman} className='w-[50px] md:hidden snowman absolute mx-auto z-10 md:w-[20px]' alt="snowman" />
          <p className='text-center font-medium font-mono p-6'>
            <h2 className="text-center font-semibold font-mono text-[32px] mt-[70px] hidden md:block">Van Luong</h2>
            <p className='md:text-[22px] mt-4'><span className='font-[900] md:text-[22px] text-[16px] bg-[#f47e23] text-white'>Frontend Developer</span>, with knowledge in web development and design, I offer the best projects resulting in quality work.</p>
          </p>
        </div>
        
        {/* <img className='w-[100px] ml-[40%] md:hidden tree' src={tree} alt="tree"/>
        <img className='w-[100px] absolute right-0 md:hidden santa' src={santa} alt="santa"/> */}
      </div>
      {/* Start About me */}
      <div id='about' className={isDarkMode ? 'star min-h-[600px] test text-white pb-6 pt-[6%]' : 'pb-6 pt-[6%] bg-gray-600 min-h-[600px] text-white'}>
        <h2 className="text-center font-semibold font-mono text-[32px] pt-6 md:hidden">About Me</h2>
        <div className='md:flex md:items-center'>
          <img src={avt} className='w-[360px] m-12 md:h-[370px] md:w-[440px] border-8  mx-auto' alt="image" />
          <div className='px-6  font-mono md:w-[40%] md:mr-[10%]'>
            <h2 className="font-semibold font-mono text-[32px] hidden md:block md:text-[48px]">About Me</h2>

            <p className='md:text-[20px]'>
              <span className='pname relative'>Frontend</span> developer with a passion for building beautiful and functional <span className='font-[600] text-[#f47e23]'>Web Applications</span>. Solid foundation in HTML, CSS, and JavaScript, with experience in <span className='font-[600] text-[#f47e23]'>React, Angular</span>. Quick learner and team player, eager to take on new challenges.
            </p>
            <p className='mt-4 md:text-[20px]'>
              My Skills Are: HTML, CSS, JavaScript, React, Git & GitHub, Bootstrap, Ant Design, Figma.
            </p>
            <button className='p-4 mt-6 block w-full text-center bg-[#f47e23] hover:opacity-70 md:w-[40%]'>
              <span><i className="fa fa-paper-plane mr-3" aria-hidden="true"></i></span>
              <a href='#contact' className='text-[20px]'>Contact Me</a>
            </button>
          </div>
        </div>
      </div>
      {/* End About me */}

      {/* SKILL */}

      <div id='tech' className={isDarkMode ? 'min-h-[650px] star ' : 'min-h-[650px] bg-gray-300'}>
        <h2 className={isDarkMode ? "text-center  text-white font-semibold font-mono text-[32px] pt-6 md:text-[48px]" : "text-center  text-black font-semibold font-mono text-[32px] pt-6 md:text-[48px]"}>Technologies</h2>
        <div className='md:flex md:p-11'>
          <div className='border-4 fe w-full mx-auto mt-3 md:mr-11'>
            <h5 className={isDarkMode ? 'text-white text-center p-4 font-mono text-[24px]' : 'text-black text-center p-4 font-mono text-[24px]'}>
              <div className='scroll-left'></div>
              Front end
              <div className='scroll-right'></div>
            </h5>
            <div className={isDarkMode ? 'text-white py-4 px-8 grid grid-rows-4 grid-flow-col gap-4 font-mono text-[20px]' : 'text-black py-4 px-8 grid grid-rows-4 grid-flow-col gap-4 font-mono text-[20px]'}>
              <div className='item'><i className="fa fa-check mr-3" aria-hidden="true"></i>HTML
                <div className='scroll'></div>
              </div>
              <div className='item'><i className="fa fa-check mr-3" aria-hidden="true"></i>CSS
                <div className='scroll'></div>
              </div>
              <div className='item'><i className="fa fa-check mr-3" aria-hidden="true"></i>JS
                <div className='scroll'></div>
              </div>
              <div className='item'><i className="fa fa-check mr-3" aria-hidden="true"></i>TypeScript
                <div className='scroll'></div>
              </div>
              <div className='item'><i className="fa fa-check mr-3" aria-hidden="true"></i>Tailwind
                <div className='scroll'></div>
              </div>
              <div className='item'><i className="fa fa-check mr-3" aria-hidden="true"></i>ReactJs
                <div className='scroll'></div>
              </div>
              <div className='item'><i className="fa fa-check mr-3" aria-hidden="true"></i>Angular
                <div className='scroll'></div>
              </div>
              <div className='item'><i className="fa fa-check mr-3" aria-hidden="true"></i>Scss
                <div className='scroll'></div>
              </div>
            </div>
          </div>
          <div className='border-4 fe w-full mx-auto mt-3'>
            <h5 className={isDarkMode ? 'text-white text-center p-4 font-mono text-[24px]' : 'text-black text-center p-4 font-mono text-[24px]'}>
              <div className='scroll-left'></div>
              Back end
              <div className='scroll-right'></div>
            </h5>
            <div className={isDarkMode ? 'text-white py-4 px-8 grid grid-rows-2 grid-flow-col gap-4 font-mono text-[20px]' : 'text-black py-4 px-8 grid grid-rows-2 grid-flow-col gap-4 font-mono text-[20px]'}>
              <div className='item'><i className="fa fa-check mr-3" aria-hidden="true"></i>NodeJs
                <div className='scroll'></div>
              </div>
              <div className='item'><i className="fa fa-check mr-3" aria-hidden="true"></i>Express
                <div className='scroll'></div>
              </div>
              <div className='item'><i className="fa fa-check mr-3" aria-hidden="true"></i>MongoDB
                <div className='scroll'></div>
              </div>
            </div>
          </div>


        </div>
      </div>

      {/* SKILL */}
{/*       <div className='h-[5px] bg-black'></div>
 */}      <div className={isDarkMode ? 'star min-h[1200px] pb-8 md:flex md:pt-11 md:justify-center' : 'bg-gray-300 min-h[1200px] pb-8 md:flex md:pt-11 md:justify-center'}>
        <div className='md:w-[30%] md:px-6'>
          <h2 className="text-center font-semibold font-mono text-[32px] pt-6">
            <i className="fa fa-spotify mr-3 text-green-800" aria-hidden="true"></i>
            <span className={isDarkMode ? 'text-white md:text-[42px]' : 'text-black md:text-[42px]'}>Music</span></h2>
          <p className={isDarkMode ? "p-4 text-center font-mono text-[18px] text-white md:text-[20px]" : "p-4 text-center font-mono text-[18px] md:text-[20px] text-gray-600"}>
            I love listening to music, it helps me relax and focus on my work.
            Here are some of my favorite songs.
          </p>
        </div>
        <div className="px-4">
          <iframe className='md:w-[560px] md:h=[600px]' style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/playlist/0Wpd79Ded8jGDKhtQ7NW6c?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
      </div>

      {/*Start Project */}
      <div id='projects' className={isDarkMode ? 'star min-h-[600px]' : 'bg-[#d4d4d4] min-h-[600px]'}>
        <h2 className={isDarkMode ? "text-center font-semibold font-mono text-[32px] md:text-[48px] text-white pt-6" : "text-center md:text-[48px] font-semibold font-mono text-[32px] text-black pt-6"}>Projects</h2>
        <div className='md:grid md:grid-cols-3 md:text-[20px] '>
          <div className={isDarkMode ? 'pt-8 p-4 m-4' : 'pt-8 text-black  p-4 m-4'}>
            <a href="https://movie-app-demo-kappa.vercel.app/" target='_blank'><img className='w-[400px] h-[200px] hover:opacity-80 hover:cursor-pointer' src={pj5} alt='project 5' /></a>
            <div className={'font-mono'}>
              <span className='relative pl-4 pname md:hidden block'>Website</span>
              <span className='relative pl-4 line hidden md:block'>Website</span>
              <h3 className='my-4 text-[18px]'>Movie Website</h3>
              <p>Project is a website sales of watercolor paintings, oil paintings, acrylic paintings, and other types of paintings. Project have a lot of features like: Login, Register, Add to cart, Checkout, Payment, etc.</p>
              <a href='https://movie-app-demo-kappa.vercel.app/' target='_blank' className={isDarkMode ? 'p-4 mt-6 block w-[180px] bg-[#f47e23] hover:opacity-70' : 'p-4 mt-6 block w-[180px] bg-[#f47e23] hover:text-white hover:opacity-70'}>
                <span><i className="fa fa-tv mr-3" aria-hidden="true"></i></span>
                <span className='text-[20px]'>Live demo</span>
              </a>
            </div>
          </div>
          <div className={isDarkMode ? 'pt-8 p-4 m-4' : 'pt-8 xt-black  p-4 m-4'}>
            <a href="https://ecommerce-demo-mq4gleitw-luonglevan.vercel.app/" target="_blank"><img className='w-[400px] h-[200px] hover:opacity-80 hover:cursor-pointer' src={pj4} alt='project 4' /></a>
            <div className={'font-mono'}>
              <span className='relative pl-4 pname md:hidden block'>Website</span>
              <span className='relative pl-4 line hidden md:block'>Website</span>              <h3 className='my-4 text-[18px]'>Ecommerce Website</h3>
              <p>Project is a website sales of watercolor paintings, oil paintings, acrylic paintings, and other types of paintings. Project have a lot of features like: Login, Register, Add to cart, Checkout, Payment, etc.</p>
              <a href='https://ecommerce-demo-mq4gleitw-luonglevan.vercel.app/' target='_blank' className={isDarkMode ? 'p-4 mt-6 block w-[180px] bg-[#f47e23] hover:opacity-70' : 'p-4 mt-6 block w-[180px] bg-[#f47e23] hover:text-white hover:opacity-70'}>
                <span><i className="fa fa-tv mr-3" aria-hidden="true"></i></span>
                <span className='text-[20px]'>Live demo</span>
              </a>
            </div>
          </div>
          <div className={isDarkMode ? 'pt-8 p-4 m-4' : 'pt-8 text-black  p-4 m-4'}>
            <a href="https://weather-app-with-angular.vercel.app/" target='_blank'><img className='w-[400px] h-[200px] hover:opacity-80 hover:cursor-pointer' src={pj3} alt='project 3' /></a>
            <div className={'font-mono'}>
              <span className='relative pl-4 pname md:hidden block'>Website</span>
              <span className='relative pl-4 line hidden md:block'>Website</span>              <h3 className='my-4 text-[18px]'>Weather Website</h3>
              <p>Project is a website sales of watercolor paintings, oil paintings, acrylic paintings, and other types of paintings. Project have a lot of features like: Login, Register, Add to cart, Checkout, Payment, etc.</p>
              <a href="https://weather-app-with-angular.vercel.app/" target='_blank' className={isDarkMode ? 'p-4 mt-6 block w-[180px] bg-[#f47e23] hover:opacity-70' : 'p-4 mt-6 block w-[180px] bg-[#f47e23] hover:text-white hover:opacity-70'}>
                <span><i className="fa fa-tv mr-3" aria-hidden="true"></i></span>
                <span className='text-[20px]'>Live demo</span>
              </a>
            </div>
          </div>
          <div className={isDarkMode ? 'pt-8 p-4 m-4' : 'pt-8 text-black  p-4 m-4'}>
            <a href="https://rest-countries-api-with-angular.vercel.app/" target='_blank'><img className='w-[400px] h-[200px] hover:opacity-80 hover:cursor-pointer' src={pj1} alt='project 1' /></a>
            <div className={'font-mono'}>
              <span className='relative pl-4 pname md:hidden block'>Website</span>
              <span className='relative pl-4 line hidden md:block'>Website</span>              <h3 className='my-4 text-[18px]'>Flag Country Website</h3>
              <p>Project is a website sales of watercolor paintings, oil paintings, acrylic paintings, and other types of paintings. Project have a lot of features like: Login, Register, Add to cart, Checkout, Payment, etc.</p>
              <a href='https://rest-countries-api-with-angular.vercel.app/' target='_blank' className={isDarkMode ? 'p-4 mt-6 block w-[180px] bg-[#f47e23] hover:opacity-70' : 'p-4 mt-6 block w-[180px] bg-[#f47e23] hover:text-white hover:opacity-70'}>
                <span><i className="fa fa-tv mr-3" aria-hidden="true"></i></span>
                <span className='text-[20px]'>Live demo</span>
              </a>
            </div>
          </div>
          <div className={isDarkMode ? 'pt-8 p-4 m-4' : 'pt-8 text-black  p-4 m-4'}>
            <a href="https://profile-with-angular-av6nw4guq-luonglevan.vercel.app/" target='_blank'><img className='w-[400px] h-[200px] hover:opacity-80 hover:cursor-pointer' src={pj2} alt='project 2' /></a>
            <div className={'font-mono'}>
              <span className='relative pl-4 pname md:hidden block'>Website</span>
              <span className='relative pl-4 line hidden md:block'>Website</span>              <h3 className='my-4 text-[18px]'>Generator Password Website</h3>
              <p>Project is a website sales of watercolor paintings, oil paintings, acrylic paintings, and other types of paintings. Project have a lot of features like: Login, Register, Add to cart, Checkout, Payment, etc.</p>
              <a href='https://profile-with-angular-av6nw4guq-luonglevan.vercel.app/' target='_blank' className={isDarkMode ? 'p-4 mt-6 block w-[180px] bg-[#f47e23] hover:opacity-70' : 'p-4 mt-6 block w-[180px] bg-[#f47e23] hover:text-white hover:opacity-70'}>
                <span><i className="fa fa-tv mr-3" aria-hidden="true"></i></span>
                <span className='text-[20px]'>Live demo</span>
              </a>
            </div>
          </div>
        </div>
        <h4 className='p-8 text-center font-mono text-[22px] underline md:text-[28px]'>
          <span><i className="fa fa-github mr-3" aria-hidden="true"></i></span>
          <a className={isDarkMode ? 'text-white' : 'text-black'} href='https://github.com/LuongLeVan?tab=repositories' target='_blank'>See more on github</a>
        </h4>
      </div>

      {/*End Project */}

      {/* Contact */}
{/*       <div className={isDarkMode ? 'h-[3px] bg-white' : 'h-[5px] bg-black'}></div>
 */}
      <div id='contact' className={isDarkMode ? 'star p-6 min-h-[300px] md:flex md:px-36' : 'bg-black test p-6 min-h-[300px] md:flex md:px-36'}>
        <div className='md:w-[50%]'>
          <h2 className={isDarkMode ? "text-center font-semibold font-mono text-[32px] text-white pt-6 md:text-[48px]" : "text-center font-semibold font-mono text-[32px] text-white mb-4 md:text-[48px]"}>Contact Me</h2>
          <p className='text-white text-center font-mono text-[14px] mb-4 md:px-11 md:text-[20px]'>
            I will read all emails. Send me any message you want and I'll get back to you.

            I need your Email Address, and I'll get back to you in a few hours.
          </p>
        </div>
        <div className='md:w-[30%] md:ml-[20%]'>
          <h5 className='text-center text-white text-[23px] mb-4 font-mono font-[600] md:hidden'>Send Me A Message</h5>
          <form action="https://formsubmit.co/levanluongk15@gmail.com" method="POST">
            <input className='block w-full p-3 outline-none font-mono border-4 text-black border-gray-500 md:w-full]' placeholder='Your Email' type="email" name="email" required />
            <textarea className='block w-full mt-4 p-3 outline-none font-mono border-4 border-gray-500 text-black' type="text" name="name" placeholder='Write Here...' required> </textarea>
            <input className='my-4 p-4' type="checkbox" name="_captcha" value="false" /> <span className='font-mono text-white'>I'm not a robot</span>
            <input type="hidden" name="_subject" value="New submission!" />
            <input type="hidden" name="_blacklist" value="spammy pattern, banned term, phrase" />
            <input type="hidden" name="_next" value="https://vanluong.vercel.app" />
            <button className='block w-full p-2 text-white font-mono text-[20px] bg-[#f47e23]' type='submit'>
              <span><i className="fa fa-send mr-3" aria-hidden="true"></i></span>
              Send</button>
          </form>
        </div>

      </div>
      {/* Contact */}

      {/* Footer */}
      <div className={isDarkMode ? 'star text-white min-h-[150px] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] md:flex md:items-center md:flex-row-reverse	md:justify-between md:px-36' : 'bg-black text-white min-h-[150px] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] md:flex md:items-center md:flex-row-reverse	md:justify-between md:px-36' }>
        <ul className='flex items-center justify-center pt-12 md:pt-[24px] text-[18px] font-mono'>
          <li className='hover:opacity-70'><a href='#about'>About Me</a></li>
          <li className='mx-6 hover:opacity-70'><a href='#tech'>Technologies</a></li>
          <li className='hover:opacity-70'><a href='#projects'>Projects</a></li>
        </ul>
        <h3 className='text-center mt-6 font-mono'><span className='text-gray-500'>© All Rights Reserved By</span> Van Luong</h3>
      </div>
      {/* Footer */}
    </div>
  );
}

export default App;
