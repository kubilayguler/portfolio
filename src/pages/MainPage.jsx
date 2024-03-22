import React, { useState, useEffect } from 'react';
import './MainPage.css';
import ReactTypingEffect from 'react-typing-effect';

function MainPage() {
  const greetings = [" Kubilay", " Yazılımcıyım", " Girişimciyim", " Mühendisim"];

  return (
    <div className="MainPage">
      <nav className="navbar bg-kgold top-0 fixed w-screen h-12 flex justify-center items-center px-12 space-x-5">
        <a href="#home" className="text-kdark text-lg font-sans">Home</a>
        <span className="text-kdark text-lg font-sans">|</span>
        <a href="#about" className="text-kdark text-lg font-sans">About Me</a>
        <span className="text-kdark text-lg font-sans">|</span>
        <a href="#projects" className="text-kdark text-lg font-sans">Projects</a>
      </nav>
      <div className='full-bg'>
        <main className='h-screen '>

          <div id="home" className="h-full section bg-kdark flex flex-col justify-center items-center">
            <h1 className="text-kgold font-bold italic text-8xl mb-8">
              Merhaba
            </h1>
            <h1 className="text-kwhite text-6xl mb-8">
              <ReactTypingEffect text={greetings} staticText='Ben' typingDelay={500} eraseSpeed={50} eraseDelay={1000} speed={100} />
            </h1>
            <h1 className="text-2xl text-kwhite text-center mt-12 mb-8">"Hazırlamış olduğum bu portfolyoda kaydırıp beni tanımaya başlayabilirsiniz."</h1>
            <span className="text-kgold text-5xl">&#8595;</span>
          </div>

          <div id="about" className="h-full section bg-kwhite flex flex-col justify-center items-center">
            <h1 className="text-kdark font-bold italic text-8xl mb-12">Hakkımda</h1>
            <p className="text-kdark text-2xl text-center ">Öncelikle ben Kubilay Güler. 20 Yaşındayım. Manisa'nın Akhisar ilçesinde doğdum. 4 Yaşımdan beri bilgisayar kullanıyorum. Bilgisayar Mühendisliği öğrencisiyim. 2022 Yılından beri kendimi bu alanda geliştiriyorum. <a href="https://www.healaways.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Healaways</a> adında bir girişimcilikle uğraşıyorum. Dizi/Film izlemeyi ve oyun oynamayı seviyorum. Hedefim yazılım sektöründe tecrübe kazanıp yurtdışında kariyerimi devam ettirmek.Ayrıca başta tarihini araştırıp beğendiğim ülkeleri gezip yapılacaklar listemde üst sırada yer alan dünyayı gezme görevini tamamlamak. </p>
          </div>

          <div id="projects" className="h-full section bg-kdark flex flex-col justify-center items-center">
            <h1 className="text-kwhite font-bold italic text-8xl mb-8">
              Projelerim
            </h1>
            <h1 className="text-2xl text-kwhite text-center mb-8">
              <span className='text-kgold italic font-bold'>"</span>2022 Yılından itibaren paylaştığım
              <span className='text-kgold italic font-bold'> bazı</span> projeler.<span className='text-kgold italic font-bold'>"</span>
            </h1>
            <div className='w-full h-3/5 flex flex-wrap justify-center items-center overflow-auto'>
              
              <a href='https://kubilayguler.github.io/weather/' className='resim1 bg-cover bg-center w-64 h-64 m-2 relative overflow-hidden transition duration-300 transform brightness-75 rounded border-solid border-2 border-kgold hover:scale-105 hover:brightness-100'>
              </a>

              <div className='bg-cover bg-center w-64 h-64 m-2 relative overflow-hidden transition duration-300 transform brightness-50 rounded border border-kwhite '>
                <h1 className='text-6xl text-kwhite italic font-bold justify-center items-center flex h-full w-full'>EMPTY</h1>
              </div>

              <div className='bg-cover bg-center w-64 h-64 m-2 relative overflow-hidden transition duration-300 transform brightness-50 rounded border border-kwhite '>
                <h1 className='text-6xl text-kwhite italic font-bold justify-center items-center flex h-full w-full'>EMPTY</h1>
              </div>

              <div className='bg-cover bg-center w-64 h-64 m-2 relative overflow-hidden transition duration-300 transform brightness-50 rounded border border-kwhite '>
                <h1 className='text-6xl text-kwhite italic font-bold justify-center items-center flex h-full w-full'>EMPTY</h1>
              </div>
            </div>


          </div>


        </main>
      </div>
    </div>
  );
}

export default MainPage;
