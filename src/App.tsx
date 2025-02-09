import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Heart,
  Calendar,
  MapPin,
  Clock,
  Mail,
  Phone,
  Send,
  Music,
  Gift,
} from 'lucide-react'
import Countdown from 'react-countdown'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// Create a new file to handle all image imports
import slider1 from '../public/images/slider1.png'
import slider2 from '../public/images/slider2.png'
import slider3 from '../public/images/slider3.jpeg'
import slider4 from '../public/images/slider4.jpeg'
import slider5 from '../public/images/slider5.jpeg'
import slider6 from '../public/images/slider6.jpeg'
import slider7 from '../public/images/slider7.jpeg'
import slider18 from '../public/images/slider18.jpeg'
import slider16 from '../public/images/slider16.jpeg'

function App() {
  const [rsvpForm, setRsvpForm] = useState({
    name: '',
    email: '',
    attending: 'yes',
    guests: '1',
    message: '',
  })

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const slideIn = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  }

  const floatingHeart = {
    animate: {
      y: [0, -10, 0],
      scale: [1, 1.1, 1],
      rotate: [0, 10, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  const weddingDate = new Date('2025-03-06T14:00:00')

  const galleryImages = [
    slider1,
    slider2,
    slider3,
    slider4,
    slider5,
    slider6,
    slider7,
    slider16,
    slider18,
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', rsvpForm)
    alert('Thank you for your RSVP!')
  }

  const CountdownRenderer = ({ days, hours, minutes, seconds }: any) => (
    <div className='grid grid-cols-4 gap-6 max-w-2xl mx-auto'>
      {[
        { value: days, label: 'Days' },
        { value: hours, label: 'Hours' },
        { value: minutes, label: 'Minutes' },
        { value: seconds, label: 'Seconds' },
      ].map(({ value, label }) => (
        <motion.div
          key={label}
          className='text-center countdown-item'
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <div className='bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6'>
            <div className='text-4xl font-script gradient-text'>{value}</div>
            <div className='text-sm font-medium text-gray-600 mt-2'>
              {label}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )

  return (
    <div className='bg-[#fdf9f3] overflow-hidden'>
      {/* Floating Hearts Background */}
      <div className='fixed inset-0 pointer-events-none z-0'>
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              scale: Math.random() * 0.5 + 0.5,
            }}
            variants={floatingHeart}
            animate='animate'
          >
            <Heart className='text-rose-200/50 w-12 h-12' />
          </motion.div>
        ))}
      </div>

      {/* Hero Section */}
      <section
        className='min-h-screen relative flex items-center justify-center bg-cover bg-center bg-fixed overflow-hidden'
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className='absolute inset-0 hero-overlay'></div>
        <motion.div
          initial='hidden'
          animate='visible'
          variants={fadeIn}
          transition={{ duration: 1 }}
          className='text-center text-white relative z-10 px-4'
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className='text-2xl mb-4 font-light tracking-wide'
          >
            We're Getting Married
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className='relative inline-block'
          >
            <h1 className='text-7xl md:text-8xl font-script mb-6 text-rose-100'>
              Debashis &amp; Papiya
            </h1>
            <motion.div
              className='absolute -right-12 -top-12 text-rose-300/50'
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <Heart className='w-16 h-16' />
            </motion.div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className='text-2xl font-serif tracking-widest'
          >
            March 6, 2025
          </motion.p>
        </motion.div>
        <motion.div
          className='absolute bottom-10 left-1/1.5 -translate-x-1/2'
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className='text-white text-sm tracking-wider text-center'>
            Scroll Down
          </div>
          <div className='w-px h-8 bg-white/50 mx-auto mt-2'></div>
        </motion.div>
      </section>
      {/* Countdown Section */}
      <section className='py-24 bg-gradient-to-b from-rose-50/50 to-white'>
        <motion.div
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeIn}
          className='container mx-auto px-4'
        >
          <h2 className='text-5xl font-script text-center mb-16 gradient-text'>
            Counting Down to Our Special Day
          </h2>
          <Countdown date={weddingDate} renderer={CountdownRenderer} />
        </motion.div>
      </section>

      {/* Couple Section */}
      <section ref={ref} className='py-24 px-4 bg-white'>
        <div className='max-w-6xl mx-auto'>
          <motion.div
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className='text-center mb-20'
          >
            <Heart className='w-12 h-12 text-rose-400 mx-auto mb-6' />
            <h2 className='text-5xl font-script gradient-text mb-4'>
              The Happy Couple
            </h2>
          </motion.div>

          <div className='grid md:grid-cols-2 gap-16'>
            {/* Groom */}
            <motion.div
              initial='hidden'
              animate={inView ? 'visible' : 'hidden'}
              variants={slideIn}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='text-center'
              whileHover={{ scale: 1.02 }}
            >
              <div className='image-frame rounded-full overflow-hidden w-72 h-72 mx-auto mb-8 shadow-xl'>
                <img
                  src='../images/dr.jpg'
                  alt='Groom'
                  className='w-full h-full object-cover transform transition-transform duration-700 hover:scale-110'
                />
              </div>
              <h3 className='text-3xl font-script gradient-text mb-3'>
                Debashis Roy
              </h3>
              <p className='text-gray-600 italic'>The Groom</p>
            </motion.div>

            {/* Bride */}
            <motion.div
              initial='hidden'
              animate={inView ? 'visible' : 'hidden'}
              variants={slideIn}
              transition={{ duration: 0.6, delay: 0.4 }}
              className='text-center'
              whileHover={{ scale: 1.02 }}
            >
              <div className='image-frame rounded-full overflow-hidden w-72 h-72 mx-auto mb-8 shadow-xl'>
                <img
                  src='../images/Details.jpeg'
                  alt='Bride'
                  className='w-full h-full object-cover transform transition-transform duration-700 hover:scale-110'
                />
              </div>
              <h3 className='text-3xl font-script gradient-text mb-3'>
                Papiya Das
              </h3>
              <p className='text-gray-600 italic'>The Bride</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className='py-24 bg-gradient-to-b from-white to-rose-50/50'>
        <div className='container mx-auto px-4'>
          <motion.h2
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeIn}
            className='text-5xl font-script text-center mb-16 gradient-text'
          >
            Our Story in Pictures
          </motion.h2>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{
              dynamicBullets: true,
            }}
            navigation={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className='max-w-5xl'
          >
            {galleryImages.map((image, index) => (
              <SwiperSlide key={index} className='w-80'>
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className='w-full rounded-xl shadow-xl'
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Event Details */}
      <section className='py-24 px-4 bg-white'>
        <div className='max-w-4xl mx-auto'>
          <motion.div
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className='text-center mb-16'
          >
            <Calendar className='w-12 h-12 text-rose-400 mx-auto mb-6' />
            <h2 className='text-5xl font-script gradient-text mb-8'>
              Wedding Details
            </h2>

            <div className='grid md:grid-cols-3 gap-8'>
              <motion.div
                className='text-center p-8 rounded-xl bg-rose-50/50 backdrop-blur-sm'
                whileHover={{
                  scale: 1.05,
                  backgroundColor: 'rgba(255, 228, 230, 0.7)',
                }}
              >
                <Calendar className='w-10 h-10 text-rose-400 mx-auto mb-4' />
                <h3 className='text-2xl font-script gradient-text mb-2'>
                  The Date
                </h3>
                <p className='text-gray-600'>March 6, 2025</p>
              </motion.div>

              <motion.div
                className='text-center p-8 rounded-xl bg-rose-50/50 backdrop-blur-sm'
                whileHover={{
                  scale: 1.05,
                  backgroundColor: 'rgba(255, 228, 230, 0.7)',
                }}
              >
                <Clock className='w-10 h-10 text-rose-400 mx-auto mb-4' />
                <h3 className='text-2xl font-script gradient-text mb-2'>
                  The Time
                </h3>
                <p className='text-gray-600'>2:00 PM - 10:00 PM</p>
              </motion.div>

              <motion.div
                className='text-center p-8 rounded-xl bg-rose-50/50 backdrop-blur-sm'
                whileHover={{
                  scale: 1.05,
                  backgroundColor: 'rgba(255, 228, 230, 0.7)',
                }}
              >
                <MapPin className='w-10 h-10 text-rose-400 mx-auto mb-4' />
                <h3 className='text-2xl font-script gradient-text mb-2'>
                  The Venue
                </h3>
                <p className='text-gray-600'>
                  Mathsheali
                  <br />
                  Muidipur, Jamalpur
                  <br />
                  Purba Bardhaman, West Bengal , India, 712410
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* RSVP Section */}
      <section className='py-24 px-4 bg-gradient-to-b from-rose-50/50 to-white'>
        <motion.div
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className='max-w-xl mx-auto'
        >
          <div className='text-center mb-12'>
            <h2 className='text-5xl font-script gradient-text mb-4'>
              Join Our Celebration
            </h2>
            <p className='text-gray-600'>
              We would be honored to have you join us on our special day.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className='space-y-6 bg-white p-8 rounded-xl shadow-xl'
          >
            <div>
              <label
                htmlFor='name'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                Your Name
              </label>
              <input
                type='text'
                id='name'
                value={rsvpForm.name}
                onChange={(e) =>
                  setRsvpForm({ ...rsvpForm, name: e.target.value })
                }
                className='w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all duration-300'
                required
              />
            </div>

            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                Email Address
              </label>
              <input
                type='email'
                id='email'
                value={rsvpForm.email}
                onChange={(e) =>
                  setRsvpForm({ ...rsvpForm, email: e.target.value })
                }
                className='w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all duration-300'
                required
              />
            </div>

            <div>
              <label
                htmlFor='attending'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                Will you attend?
              </label>
              <select
                id='attending'
                value={rsvpForm.attending}
                onChange={(e) =>
                  setRsvpForm({ ...rsvpForm, attending: e.target.value })
                }
                className='w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all duration-300'
              >
                <option value='yes'>Joyfully Accepts</option>
                <option value='no'>Regretfully Declines</option>
              </select>
            </div>

            <div>
              <label
                htmlFor='guests'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                Number of Guests
              </label>
              <select
                id='guests'
                value={rsvpForm.guests}
                onChange={(e) =>
                  setRsvpForm({ ...rsvpForm, guests: e.target.value })
                }
                className='w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all duration-300'
              >
                {[1, 2, 3, 4].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor='message'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                Message for the Couple
              </label>
              <textarea
                id='message'
                value={rsvpForm.message}
                onChange={(e) =>
                  setRsvpForm({ ...rsvpForm, message: e.target.value })
                }
                rows={4}
                className='w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all duration-300'
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type='submit'
              className='w-full bg-gradient-to-r from-rose-400 to-rose-500 text-white px-8 py-3 rounded-lg hover:from-rose-500 hover:to-rose-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg'
            >
              <Send className='w-4 h-4' />
              Send RSVP
            </motion.button>
          </form>
        </motion.div>
      </section>
    </div>
  )
}

export default App
