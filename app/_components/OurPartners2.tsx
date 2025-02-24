import Image from "next/image";


const Brands: React.FC = () => {
  const logos = [
    { src: "/partners/orders/Hunger.png", alt: "Urpay",width:300,height:300 },
    { src: "/partners/orders/Jahez.png", alt: "Mada",width:300,height:300 },
    { src: "/partners/orders/Mrsool.png", alt: "Geidea",width:300,height:300 },
    { src: "/partners/orders/Ninja.png", alt: "Alrajhi",width:300,height:300 },
    { src: "/partners/orders/Chefz.png", alt: "STC Pay",width:300,height:300 },
    { src: "/partners/orders/To_You.png", alt: "Zatka",width:300,height:300 }
  ]

  return (
    <div className="relative wrapper lg:w-[60%] pt-10 pb-32">
      <div className="marquee">
        <div className="marquee__group">
         {[...logos].map((logo,index) => (
           <div key={index} className="marquee__item"> 
              <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.width}/>
           </div>
         ))}
        </div>
        <div className="marquee__group">
         {[...logos].map((logo,index) => (
           <div key={index} className="marquee__item"> 
              <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.width}/>
           </div>
         ))}
        </div>
        <div className="marquee__group">
         {[...logos].map((logo,index) => (
           <div key={index} className="marquee__item"> 
              <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.width}/>
           </div>
         ))}
        </div>
        <div className="marquee__group">
         {[...logos].map((logo,index) => (
           <div key={index} className="marquee__item"> 
              <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.width}/>
           </div>
         ))}
        </div>

        <div className="marquee__group">
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


