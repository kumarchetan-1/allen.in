import { useState, useEffect } from 'react'
import successStoryImage1 from '../assets/home/success-story-1.webp';
import successStoryImage2 from '../assets/home/success-story-2.webp';
import successStoryImage3 from '../assets/home/success-story-3.webp';
import successStoryImage4 from '../assets/home/success-story-4.webp';
import resultOut from '../assets/home/result-out.webp';
import { Link } from 'react-router-dom';


export function Home() {
  return <>
    <Hero />
    <FourColCards />
  </>
}


function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const imagesSlide = [
    { image: successStoryImage1, alt: 'Student success story 1' },
    { image: successStoryImage2, alt: 'Student success story 2' },
    { image: successStoryImage3, alt: 'Student success story 3' },
    { image: successStoryImage4, alt: 'Student success story 4' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % imagesSlide.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero">
      <div className="container">
        <div className="alert-container">
          <a href="http://" target="_blank" rel="noopener noreferrer" aria-label={'Notification Banner'}>
            <img src={resultOut} alt="result out" width={"1170"} />
          </a>
        </div>
        <div className="hero">
          <div className="hero-content">
            <h1 className="hero-title">Online coaching that delivers results</h1>
            <h2 className="hero-subtitle">Explore our online courses</h2>
            <div className="course-buttons">
              <Link to="/Neet" className="outline-btn">NEET</Link>
              <Link to="/Neet" className="outline-btn">JEE</Link>
              <Link to="" className="outline-btn">Grade 6-10</Link>
            </div>
          </div>
          <div className="slider-container">
            <div className="slider">
              <div
                className="flex slider-transition"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {imagesSlide.map((slide, index) => (
                  <div key={index} className="min-w-full">
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      width={500}
                      height={300}
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="dots-container dots">
              {imagesSlide.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${currentSlide === index ? 'bg-white' : 'bg-white/50'}`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



function FourColCards() {
  const FeatureCard = ({ icon, title, description }) => (
     <div className="card">
      <img src={icon.src} alt={icon.alt} width={64} height={64}/>
      <h3 className="card-subtitle">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  )

  const features = [
    {
      icon: { src: "", alt: "" },
      title: "Kota Faculty",
      description: "Expert faculty, top-notch study material and teaching methods perfected in Kota over 35+ years",
    },
    {
      icon: { src: "", alt: "" },
      title: "Proven Results",
      description: "Stellar results delivered through Online Courses across JEE, NEET, Olympiads and 10th Board Exams",
    },
    {
      icon: { src: "", alt: "" },
      title: "Learning Tools",
      description: "24x7 doubt resolution and customized study material to test, and improve continuously",
    },
    {
      icon: { src: "", alt: "" },
      title: "Mentor Support",
      description: "Regular mentorship sessions with faculty, guidance on exam strategy and updates to parents",
    },
  ];

  return <section id='why-allen-online'>
    <div className="container">
      <h2 className="title">Why ALLEN Online</h2>
      <div className="card-wrap">
        { features.map((feature, index) => {
         return <FeatureCard key={index} {...feature} />
        }) }
      </div>
      <div className="text-center mt-12">
        <a
          href="#"
          className="inline-block px-8 py-4 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition-colors"
        >
          Explore Online Courses
        </a>
      </div>
    </div>
  </section>
}