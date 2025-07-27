import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { RoughNotation } from "react-rough-notation";
import Image from "next/image";

import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Example certificate images (replace with real paths)
const certificates = [
  "/certificates/c1.jpg", "/certificates/c2.jpg", "/certificates/c3.jpg", "/certificates/c4.jpg",
  "/certificates/c5.jpg", "/certificates/c6.jpg", "/certificates/c7.jpg", "/certificates/c8.png",
  "/certificates/c9.jpg", "/certificates/c10.jpg", "/certificates/c11.jpg", "/certificates/c12.jpg",
  "/certificates/c13.jpg", "/certificates/c14.jpg", "/certificates/c15.jpeg", "/certificates/c16.jpg",
  "/certificates/c17.jpg", "/certificates/c18.jpg", "/certificates/c19.jpg", "/certificates/c20.jpg",
  "/certificates/c21.jpeg", "/certificates/ci1.jpeg", "/certificates/ci2.jpeg", "/certificates/ci3.jpeg",
  "/certificates/ci4.jpeg", "/certificates/ci6.jpeg"
];


const CertificateSection: React.FC = () => {
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLDivElement>(null);
  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  const certificateSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();

  useEffect(() => {
    certificateSection && onSectionChange!("certificates");
  }, [certificateSection]);

  return (
    <div className="bg-[#F5F5F5] dark:bg-[#1B2731]">
      <section ref={sectionRef} id="certificates" className="section md:px-10">
        <div className="text-center">
          <RoughNotation
            type="underline"
            color={theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"}
            strokeWidth={2}
            order={1}
            show={isOnScreen}
          >
            <h2 className="section-heading">Certificates</h2>
          </RoughNotation>
        </div>
        <div className="text-center mb-8" ref={elementRef}>
          Usually i don't track what i've done and what i'm doing.
        <br/>
          But these certificates does.
        </div>
        <Swiper
          modules={[Navigation, Pagination]}
          pagination={{ dynamicBullets: true }}
          wrapperTag="ul"
          navigation
          className="swiper-padding-mobile xs:swiper-padding"
          breakpoints={{
            100: {
              slidesPerView: "auto",
              spaceBetween: 50,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
              centeredSlides: true,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
              centeredSlides: false,
            },
          }}
        >
          {certificates.map((src, index) => (
            <SwiperSlide key={index} tag="li">
              <div className="rounded-xl overflow-hidden shadow-lg bg-white dark:bg-[#23343f] p-4">
                <Image
                  src={src}
                  alt={`Certificate ${index + 1}`}
                  width={500}
                  height={300}
                  layout="responsive"
                  objectFit="contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default CertificateSection;
