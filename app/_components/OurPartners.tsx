import Image from "next/image";
import { TripleHeadings } from "./TripleHeadings";
import { useTranslations } from "next-intl";

const Brands = () => {
  const t = useTranslations("partners");

  const logos = [
    { src: "/partners/banks/Alrajhi.png", alt: "Urpay", width: 300, height: 100 },
    { src: "/partners/banks/commerce.png", alt: "Mada", width: 300, height: 100 },
    { src: "/partners/banks/Monsha_at.png", alt: "Geidea", width: 300, height: 100 },
    { src: "/partners/banks/SIB.png", alt: "Alrajhi", width: 300, height: 100 },
    { src: "/partners/banks/SNB.png", alt: "STC Pay", width: 300, height: 100 },
    { src: "/partners/banks/Zakat.png", alt: "Zatka", width: 300, height: 100 }
  ]

  return (
    <div className="relative wrapper lg:w-[60%] pt-8 ">
      <TripleHeadings title={t("our_partners")} />

       <div className="marquee">
        <div className="marquee__group">
         {[...logos].map((logo,index) => (
           <div key={index} className="marquee__item"> 
              <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height}/>
           </div>
         ))}
        </div>
        <div className="marquee__group">
         {[...logos].map((logo,index) => (
           <div key={index} className="marquee__item"> 
              <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height}/>
           </div>
         ))}
        </div>
        <div className="marquee__group">
         {[...logos].map((logo,index) => (
           <div key={index} className="marquee__item"> 
              <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height}/>
           </div>
         ))}
        </div>
        <div className="marquee__group">
         {[...logos].map((logo,index) => (
           <div key={index} className="marquee__item"> 
              <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height}/>
           </div>
         ))}
        </div>
        <div className="marquee__group">
         {[...logos].map((logo,index) => (
           <div key={index} className="marquee__item"> 
              <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height}/>
           </div>
         ))}
        </div>

      </div> 
      {/* <Slider
        width="250px"
        duration={40}
        pauseOnHover={true}
        blurBorders={false}
        blurBorderColor={'#fff'}
      >
        <Slider.Slide>
          {[...logos].map((logo, index) => (
              <Image key={index} src={logo.src} alt={logo.alt} width={logo.width} height={logo.width} />
          ))}            
        </Slider.Slide>
      </Slider> */}


    </div>
  );
};

export default Brands;


