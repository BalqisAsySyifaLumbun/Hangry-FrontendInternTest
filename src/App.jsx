import {useEffect, useState} from "react";
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App (){
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const element = document.querySelector('.group-3');
      const element2 = document.querySelector('.group-2');
      const element3 = document.querySelector('.group');

      if (element && element2 && element3) {
        const elementPosition = element.offsetTop;
        setIsVisible(scrollPosition > elementPosition);
      
        const elementPosition2 = element2.offsetTop;
        setIsVisible(scrollPosition > elementPosition2);
      
        const elementPosition3 = element3.offsetTop;
        setIsVisible(scrollPosition > elementPosition3);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    const displayDummyElement = document.querySelector('.desktop-screen .display-dummy');
    const displayBanner1 = document.querySelector('.desktop-screen .text-wrapper-banner1');
    const displayBanner = document.querySelector('.desktop-screen .text-wrapper-banner');
    
    displayDummyElement.classList.add('fade-in');
    displayBanner.classList.add('fade-in');
    displayBanner1.classList.add('fade-in');

    return () => {
      displayDummyElement.classList.remove('fade-in');
      displayBanner.classList.remove('fade-in');
      displayBanner1.classList.remove('fade-in');
    };}, []);

  return (
    <div className="desktop-screen">
      <div className="div">
        <div className="navbar">
          <div className="navbar-2">
            <div className="text-wrapper">Tentang Kami</div>
            <div className="text-wrapper">Semua Outlet</div>
            <div className="text-wrapper">Promo</div>
            <div className="text-wrapper">Karier</div>
            <div className="text-wrapper-2">Download App</div>
          </div>
          <img className="logo" alt="Logo" src="https://res.cloudinary.com/hkrmsvw2o/image/upload/hangry-animated.gif" />
        </div>
        <div className="overlap">
          <div className='box'></div>
          <p className="text-wrapper-banner">Kamu laper atau haus?</p>
          <p className="text-wrapper-banner1">Tenang... ada Hangry! yang siap mengatasi</p>
          <img className="button-apps-store" alt="Button apps store" src="/assets/button-apps-store.png" />
          <img className="button-playstore" alt="Button playstore" src="/assets/button-play-store.png" />
          <img className="display-dummy" alt="Group" src="/assets/display2.png" />
        </div>
        <div className={`group ${isVisible ? 'visible' : ''}`}>
          <div className="text-wrapper-3">Nasi Ayam · Indonesia</div>
          <div className="overlap-group">
            <div className="text-wrapper-4">arrow-right</div>
            <div className="text-wrapper-5">Bude Sari</div>
            <img className="image" alt="Image" src="/assets/budesari.png" />
            <div className="image-wrapper">
              <img className="img" alt="Image" src="/assets/Ellipse.png" />
              <img className="img" alt="Image" src="/assets/bsicon.png" />
            </div>
          </div>
        </div>
        <div className={`group-2 ${isVisible ? 'visible' : ''}`}>
          <div className="text-wrapper-3">Beef Bowl · Jepang</div>
          <div className="overlap-group">
            <div className="text-wrapper-6">arrow-right</div>
            <div className="text-wrapper-5">San Gyu</div>
            <img className="image" alt="Image" src="/assets/sangyu.png" />
            <div className="image-wrapper">
              <img className="img" alt="Image" src="/assets/Ellipse.png" />
              <img className="img" alt="Image" src="/assets/sgicon.png" />
            </div>
          </div>
        </div>
        <div className={`group-3 ${isVisible ? 'visible' : ''}`}>
          <div className="text-wrapper-3">Ayam Geprek · Indonesia</div>
          <div className="overlap-group">
            <div className="text-wrapper-7">arrow-right</div>
            <div className="text-wrapper-8">Ayam Koplo</div>
            <img className="image" alt="Image" src="/assets/ayam_koplo.png" />
            <div className="image-wrapper">
            <img className="img" alt="Image" src="/assets/Ellipse.png" />
            <img className="img" alt="Image" src="/assets/akicon.png" />
            </div>
          </div>
        </div>
        <div className="group-4">
          <p className="p">Kami menyajikan beragam brand untuk menemani setiap waktu santapmu</p>
          <p className="text-wrapper-9">Hangry! adalah restoran dengan beragam brand</p>
        </div>
        <div className="bulk-order">
          <img className="image-4" alt="Image" src="/assets/bulk.png" />
          <div className="group-5">
            <div className="overlap-group-wrapper">
              <div className="div-wrapper">
                <div className="text-wrapper-10">Pesan Sekarang</div>
              </div>
            </div>
            <div className="group-6">
              <div className="group-7">
                <div className="syarat-ketentuan">*Syarat &amp; ketentuan berlaku</div>
                <div className="text-wrapper-11">Gratis biaya kirim</div>
              </div>
              <img className="check" alt="Image" src="/assets/check.png" />
            </div>
            <div className="group-8">
              <div className="text-wrapper-13">Semua menu diskon 20%</div>
              <img className="check" alt="Image" src="/assets/check.png" />
            </div>
            <div className="group-9">
              <div className="text-wrapper-13">Beragam pilihan menu</div>
              <img className="check" alt="Image" src="/assets/check.png" />
            </div>
            <p className="text-wrapper-14">
              Nikmati keuntungan dengan minimum pembelian 20 porsi menu apa aja. Cocok untuk hidangan segala acara!
            </p>
            <div className="text-wrapper-15">Makin rame, makin hemat!</div>
          </div>
        </div>
        <div className="find-us">
          <p className="text-wrapper-16">Hangry! dapat kamu temukan di</p>
          <div className="eats-wrapper">
            <img className="eats" alt="Eats" src="/assets/Eats.png" />
          </div>
          <div className="zomato-wrapper">
            <img className="zomato" alt="Zomato" src="/assets/zomato.png" />
          </div>
          <div className="grab-food-wrapper">
            <img className="grab-food" alt="Grab food" src="/assets/grab.png" />
          </div>
          <div className="go-food-wrapper">
            <img className="go-food" alt="Go food" src="/assets/gofood.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;