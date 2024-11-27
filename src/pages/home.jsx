import { useState, useEffect } from 'react'
import successStoryImage1 from '../assets/home/success-story-1.webp';
import successStoryImage2 from '../assets/home/success-story-2.webp';
import successStoryImage3 from '../assets/home/success-story-3.webp';
import successStoryImage4 from '../assets/home/success-story-4.webp';
import faculty from "../assets/home/faculty.svg"
import learningTools from "../assets/home/learning-tools.svg"
import mentorSupport from "../assets/home/mentor-support.svg"
import provenResults from "../assets/home/proven-results.svg"
import resultOut from '../assets/home/result-out.webp';
import heroMob from '../assets/home/hero-mob.webp'
import downloadOurAppMob from '../assets/home/download-our-app-now.webp'
import downloadOurAppDesk from '../assets/home/download-our-app-now-desktop.webp'
import whatsTrending1 from '../assets/home/whats-trending-1.webp'
import whatsTrending2 from '../assets/home/whats-trending-2.webp'
import whatsTrending3 from '../assets/home/whats-trending-3.webp'
import whatsTrending4 from '../assets/home/whats-trending-4.webp'
import whatsTrending5 from '../assets/home/whats-trending-5.webp'
import meetOurChampions from '../assets/home/meet-our-champions.webp'
import meetOurChampionsMob from '../assets/home/meet-our-champions-mob.webp'

import { Link } from 'react-router-dom';


export function Home() {
  return <>
    <Hero />
    <FourColCards />
    <WhatsTrending />
    <MeetOurChampions />

    <LastSection />
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
            <img src={resultOut} alt="result out" width={"1170"} className='desktop-only full-width-img' />
            <img className="mobile-only full-width" src={heroMob} width="28" height="28" loading="eager" draggable="false" />
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
      <img src={icon.src} alt={icon.alt} width={64} height={64} />
      <h3 className="card-subtitle">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  )

  const features = [
    {
      icon: { src: faculty, alt: "Kota Faculty" },
      title: "Kota Faculty",
      description: "Expert faculty, top-notch study material and teaching methods perfected in Kota over 35+ years",
    },
    {
      icon: { src: provenResults, alt: "Proven Results" },
      title: "Proven Results",
      description: "Stellar results delivered through Online Courses across JEE, NEET, Olympiads and 10th Board Exams",
    },
    {
      icon: { src: learningTools, alt: "Learning Tools" },
      title: "Learning Tools",
      description: "24x7 doubt resolution and customized study material to test, and improve continuously",
    },
    {
      icon: { src: mentorSupport, alt: "Mentor Support" },
      title: "Mentor Support",
      description: "Regular mentorship sessions with faculty, guidance on exam strategy and updates to parents",
    },
  ];

  return <section id='why-allen-online'>
    <div className="container">
      <h2 className="title">Why ALLEN Online</h2>
      <div className="card-wrap">
        {features.map((feature, index) => {
          return <FeatureCard key={index} {...feature} />
        })}
      </div>
      <div className="text-center mt-12">
        <a
          href="#"
          className="solid-btn"
        >
          Explore Online Courses
        </a>
      </div>
    </div>
  </section>
}

function WhatsTrending() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const imagesSlide = [
    { image: whatsTrending1, alt: 'Whats trending 1' },
    { image: whatsTrending2, alt: 'Whats trending 2' },
    { image: whatsTrending3, alt: 'Whats trending 3' },
    { image: whatsTrending4, alt: 'Whats trending 4' },
    { image: whatsTrending5, alt: 'Whats trending 4' }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % imagesSlide.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return <section className="whats-trending-section primary-bg standard-section-padding">
    <div className="container">
      <h2 class="title align-center">What's Trending</h2>
      <div className="slider-container max-width-full">
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
  </section>
}

function MeetOurChampions() {

  return <section className="meet-our-champions primary-bg standard-section-padding">
    <div className="container">
      <h2 class="title align-center">Meet Our Champions</h2>
      <img className='full-width-img desktop-only' src={meetOurChampions} alt="Download our app now" width={"300"} height={400} />
      <img className='full-width-img mobile-only' src={meetOurChampionsMob} alt="Download our app now" width={"300"} height={400} />
      <div class="flex flex-col md:flex-row justify-between w-full gap-4 md:gap-6">
        <button class="">
          <p class="long-accordion-btn">View JEE 2024 Results</p>
          <div class="">
            
          </div>
        </button>
        <button class="">
          <p class="long-accordion-btn">View NEET 2024 Results</p>
          <div class="">

          </div>
        </button>
      </div>
    </div>
  </section>
}




function LastSection() {

  return <section className="last-section primary-bg standard-section-padding">
    <div className="container">
      <img className='full-width-img desktop-only' src={downloadOurAppDesk} alt="Download our app now" width={"300"} height={400} />
      <img className='full-width-img mobile-only' src={downloadOurAppMob} alt="Download our app now" width={"300"} height={400} />
    </div>
  </section>
}