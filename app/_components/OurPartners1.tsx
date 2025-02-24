import Image from "next/image";


const Brands: React.FC = () => {
  const logos = [
    { src: "/partners/devices/Geidea.png", alt: "Urpay",width:300,height:300 },
    { src: "/partners/devices/Intersoft.png", alt: "Mada",width:300,height:300 },
    { src: "/partners/devices/Nearpay.png", alt: "Geidea",width:300,height:300 },
    { src: "/partners/devices/Paymob.png", alt: "Alrajhi",width:300,height:300 },
    { src: "/partners/devices/STC.png", alt: "STC Pay",width:300,height:300 },
  ]

  return (
    <div className="relative wrapper lg:w-[60%] pt-10 ">
      <div className="marquee">
        <div className="marquee__group__reverse">
         {[...logos].map((logo,index) => (
           <div key={index} className="marquee__item"> 
              <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.width}/>
           </div>
         ))}
        </div>
        <div className="marquee__group__reverse">
         {[...logos].map((logo,index) => (
           <div key={index} className="marquee__item"> 
              <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.width}/>
           </div>
         ))}
        </div>
        <div className="marquee__group__reverse">
         {[...logos].map((logo,index) => (
           <div key={index} className="marquee__item"> 
              <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.width}/>
           </div>
         ))}
        </div>
        <div className="marquee__group__reverse">
         {[...logos].map((logo,index) => (
           <div key={index} className="marquee__item"> 
              <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.width}/>
           </div>
         ))}
        </div>
        <div className="marquee__group__reverse">
         {[...logos].map((logo,index) => (
           <div key={index} className="marquee__item"> 
              <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.width}/>
           </div>
         ))}
        </div>

      </div>
    </div>
  );
};

export default Brands;


