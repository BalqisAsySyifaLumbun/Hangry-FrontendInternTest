//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

import React from "react";

function App (){
  return (
    <div className="bg-[#ffffff] flex flex-row justify-center w-full">
      <div className="bg-[#ffffff] overflow-hidden w-[1440px] h-[2325px] relative">
        <div className="absolute w-[1440px] h-[96px] top-0 left-0 bg-white shadow-[0px_0px_1px_#0000000a,0px_4px_8px_#0000000a,0px_16px_24px_#0000000a]">
          <div className="inline-flex items-center gap-[48px] absolute top-[36px] left-[663px]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#303030] text-[16px] text-right tracking-[0] leading-[24px] whitespace-nowrap">
              Tentang Kami
            </div>
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#303030] text-[16px] text-right tracking-[0] leading-[24px] whitespace-nowrap">
              Semua Outlet
            </div>
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#303030] text-[16px] text-right tracking-[0] leading-[24px] whitespace-nowrap">
              Promo
            </div>
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#303030] text-[16px] text-right tracking-[0] leading-[24px] whitespace-nowrap">
              Karier
            </div>
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#a30926] text-[16px] text-right tracking-[0] leading-[24px] whitespace-nowrap">
              Download App
            </div>
          </div>
          <img className="absolute w-[139px] h-[48px] top-[24px] left-[165px]" alt="Logo" src="logo.svg" />
        </div>
        <div className="absolute w-[1440px] h-[500px] top-[96px] left-0 bg-[url(mask-group.png)] bg-[100%_100%]">
          <img
            className="absolute w-[216px] h-[64px] top-[330px] left-[405px]"
            alt="Button apps store"
            src="button-apps-store.png"
          />
          <img
            className="absolute w-[216px] h-[64px] top-[330px] left-[165px]"
            alt="Button playstore"
            src="button-playstore.png"
          />
        </div>
        <div className="absolute w-[356px] h-[450px] top-[788px] left-[925px]">
          <div className="absolute top-[421px] left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-black-2nd text-[24px] tracking-[0] leading-[normal]">
            Nasi Ayam · Indonesia
          </div>
          <div className="absolute w-[414px] h-[421px] top-[-8px] left-[-32px]">
            <div className="absolute top-[390px] left-[198px] [font-family:'Font_Awesome_5_Pro-Solid',Helvetica] font-normal text-sauce text-[24px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
              arrow-right
            </div>
            <div className="absolute top-[382px] left-[32px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#303030] text-[32px] tracking-[0] leading-[normal]">
              Bude Sari
            </div>
            <img className="absolute w-[414px] h-[414px] top-0 left-0 object-cover" alt="Image" src="image.png" />
            <div className="absolute w-[80px] h-[80px] top-[32px] left-[56px] bg-milk rounded-[40px]">
              <img
                className="w-[52px] h-[52px] top-[14px] left-[14px] absolute object-cover"
                alt="Image"
                src="image-2.png"
              />
            </div>
          </div>
        </div>
        <div className="absolute w-[356px] h-[450px] top-[788px] left-[545px]">
          <div className="absolute top-[421px] left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-black-2nd text-[24px] tracking-[0] leading-[normal]">
            Beef Bowl · Jepang
          </div>
          <div className="absolute w-[414px] h-[421px] top-[-8px] left-[-32px]">
            <div className="left-[178px] absolute top-[390px] [font-family:'Font_Awesome_5_Pro-Solid',Helvetica] font-normal text-sauce text-[24px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
              arrow-right
            </div>
            <div className="absolute top-[382px] left-[32px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#303030] text-[32px] tracking-[0] leading-[normal]">
              San Gyu
            </div>
            <img className="absolute w-[414px] h-[414px] top-0 left-0 object-cover" alt="Image" src="image-3.png" />
            <div className="absolute w-[80px] h-[80px] top-[32px] left-[56px] bg-milk rounded-[40px]">
              <img
                className="w-[56px] h-[52px] top-[14px] left-[12px] absolute object-cover"
                alt="Image"
                src="image-4.png"
              />
            </div>
          </div>
        </div>
        <div className="absolute w-[356px] h-[450px] top-[788px] left-[165px]">
          <div className="absolute top-[421px] left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-black-2nd text-[24px] tracking-[0] leading-[normal]">
            Ayam Geprek · Indonesia
          </div>
          <div className="absolute w-[414px] h-[421px] top-[-8px] left-[-32px]">
            <div className="left-[233px] absolute top-[390px] [font-family:'Font_Awesome_5_Pro-Solid',Helvetica] font-normal text-sauce text-[24px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
              arrow-right
            </div>
            <div className="absolute top-[382px] left-[32px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#303030] text-[32px] text-center tracking-[0] leading-[normal]">
              Ayam Koplo
            </div>
            <img className="absolute w-[414px] h-[414px] top-0 left-0 object-cover" alt="Image" src="image-5.png" />
            <div className="absolute w-[80px] h-[80px] top-[32px] left-[56px] bg-milk rounded-[40px]">
              <img
                className="w-[51px] h-[52px] top-[14px] left-[15px] absolute object-cover"
                alt="Image"
                src="image-6.png"
              />
            </div>
          </div>
        </div>
        <div className="absolute w-[1114px] h-[104px] top-[652px] left-[165px]">
          <p className="absolute w-[1110px] top-[68px] left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-black-secondary text-[24px] tracking-[0] leading-[36px]">
            Kami menyajikan beragam brand untuk menemani setiap waktu santapmu
          </p>
          <p className="absolute w-[1110px] top-0 left-0 [font-family:'Inter-Bold',Helvetica] font-bold text-[#303030] text-[40px] tracking-[0] leading-[60px]">
            Hangry! adalah restoran dengan beragam brand
          </p>
        </div>
        <div className="absolute w-[1110px] h-[534px] top-[1662px] left-[165px]">
          <img
            className="w-[540px] h-[400px] top-[67px] left-[570px] absolute object-cover"
            alt="Image"
            src="image-7.png"
          />
          <div className="absolute w-[544px] h-[534px] top-0 left-0">
            <div className="absolute w-[257px] h-[80px] top-[454px] left-0">
              <div className="relative w-[255px] h-[80px] bg-[#a30926] rounded-[10px]">
                <div className="absolute w-[190px] h-[40px] top-[20px] left-[33px] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[24px] text-center tracking-[0] leading-[36px] whitespace-nowrap">
                  Pesan Sekarang
                </div>
              </div>
            </div>
            <div className="absolute w-[263px] h-[66px] top-[340px] left-0">
              <div className="absolute w-[217px] h-[64px] top-[2px] left-[48px]">
                <div className="absolute top-[40px] left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-black-2nd text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
                  *Syarat &amp; ketentuan berlaku
                </div>
                <div className="absolute h-[36px] top-0 left-0 [font-family:'Inter-Bold',Helvetica] font-bold text-[#303030] text-[24px] tracking-[0] leading-[36px] whitespace-nowrap">
                  Gratis biaya kirim
                </div>
              </div>
              <div className="absolute w-[40px] h-[40px] top-0 left-0 [font-family:'Font_Awesome_5_Pro-Solid',Helvetica] font-normal text-sauce text-[24px] text-center tracking-[0] leading-[normal]">
                check
              </div>
            </div>
            <div className="absolute w-[347px] h-[40px] top-[276px] left-0">
              <div className="absolute h-[36px] top-[2px] left-[48px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#303030] text-[24px] tracking-[0] leading-[36px] whitespace-nowrap">
                Semua menu diskon 20%
              </div>
              <div className="absolute w-[40px] h-[40px] top-0 left-0 [font-family:'Font_Awesome_5_Pro-Solid',Helvetica] font-normal text-sauce text-[24px] text-center tracking-[0] leading-[normal]">
                check
              </div>
            </div>
            <div className="absolute w-[313px] h-[40px] top-[212px] left-0">
              <div className="absolute h-[36px] top-[2px] left-[48px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#303030] text-[24px] tracking-[0] leading-[36px] whitespace-nowrap">
                Beragam pilihan menu
              </div>
              <div className="absolute w-[40px] h-[40px] top-0 left-0 [font-family:'Font_Awesome_5_Pro-Solid',Helvetica] font-normal text-sauce text-[24px] text-center tracking-[0] leading-[normal]">
                check
              </div>
            </div>
            <p className="absolute w-[540px] top-[68px] left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-black-2nd text-[24px] tracking-[0] leading-[36px]">
              Nikmati keuntungan dengan minimum pembelian 20 porsi menu apa aja. Cocok untuk hidangan segala acara!
            </p>
            <div className="absolute w-[540px] top-0 left-0 [font-family:'Inter-Bold',Helvetica] font-bold text-black text-[40px] tracking-[0] leading-[60px]">
              Makin rame, makin hemat!
            </div>
          </div>
        </div>
        <div className="absolute w-[1442px] h-[184px] top-[1358px] left-0">
          <p className="absolute top-0 left-[569px] [font-family:'Inter-Regular',Helvetica] font-normal text-black-2nd text-[20px] text-center tracking-[0] leading-[36px] whitespace-nowrap">
            Hangry! dapat kamu temukan di
          </p>
          <div className="absolute w-[240px] h-[64px] top-[78px] left-[1035px]">
            <img className="absolute w-[210px] h-[56px] top-[4px] left-[15px]" alt="Eats" src="eats.png" />
          </div>
          <div className="absolute w-[240px] h-[64px] top-[78px] left-[745px]">
            <img className="absolute w-[181px] h-[38px] top-[13px] left-[29px]" alt="Zomato" src="zomato.png" />
          </div>
          <div className="absolute w-[240px] h-[64px] top-[78px] left-[455px]">
            <img className="absolute w-[191px] h-[40px] top-[12px] left-[25px]" alt="Grab food" src="grab-food.png" />
          </div>
          <div className="absolute w-[240px] h-[64px] top-[78px] left-[165px]">
            <img className="absolute w-[183px] h-[44px] top-[12px] left-[29px]" alt="Go food" src="go-food.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;