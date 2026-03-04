'use client'

import Link from 'next/link'
import Image from 'next/image'
import Header from './Header'
import HeroSection from './HeroSection'
import StatsSection from './StatsSection'
import CTASection from './CTASection'
import ErrorBoundary from './ErrorBoundary'
import { DrupalHomepage } from '@/lib/types'
import { Palette, Image as ImageIcon, Music, BookOpen, Users, Award, MapPin, Phone, Mail, Clock } from 'lucide-react'

interface HomepageRendererProps {
  homepageContent: DrupalHomepage | null | undefined
}

const communityLife = [
  { icon: Palette, title: 'Visual Arts', description: 'Explore painting, sculpture, and mixed media through curated exhibitions and open studios' },
  { icon: ImageIcon, title: 'Photography', description: 'Capturing moments and perspectives through our photography programs and gallery shows' },
  { icon: Music, title: 'Performing Arts', description: 'Live performances, concerts, and theatrical productions that move and inspire' },
  { icon: BookOpen, title: 'Literary Arts', description: 'Poetry readings, writing workshops, and author events celebrating the written word' },
  { icon: Users, title: 'Artist Residency', description: 'Supporting artists with dedicated space, time, and resources to create new works' },
  { icon: Award, title: 'Grants & Awards', description: 'Funding and recognition programs for emerging and established artists alike' },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80&fit=crop', alt: 'Art gallery exhibition' },
  { src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80&fit=crop', alt: 'Sculpture installation' },
  { src: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&q=80&fit=crop', alt: 'Art workshop in progress' },
  { src: 'https://images.unsplash.com/photo-1574182245530-967d9b3831af?w=600&q=80&fit=crop', alt: 'Contemporary art display' },
]

export default function HomepageRenderer({ homepageContent }: HomepageRendererProps) {
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <Header />

      <ErrorBoundary>
        <HeroSection homepageContent={homepageContent} />
      </ErrorBoundary>

      <ErrorBoundary>
        <StatsSection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* Featured Content Preview */}
      <section className="py-16 md:py-20 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-gray-900 mb-4">
              Current Exhibitions
            </h2>
            <div className="w-16 h-0.5 bg-accent-500 mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Discover our latest exhibitions showcasing the finest contemporary and classical works
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Impressions of Light', desc: 'A stunning collection of impressionist works exploring the interplay of light and shadow across landscapes and intimate scenes.' },
              { title: 'Modern Perspectives', desc: 'Contemporary artists challenge conventions through bold mixed-media installations and thought-provoking visual narratives.' },
              { title: 'The Human Form', desc: 'Classical and contemporary approaches to figurative art, celebrating the beauty and complexity of the human body.' },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border-l-4 border-primary-600 p-8 hover:shadow-md transition-all duration-300"
              >
                <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.desc}</p>
                <Link href="/exhibitions" className="text-primary-700 font-medium text-sm hover:text-primary-800 transition-colors">
                  View Exhibition &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Life / Icon Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-gray-900 mb-4">
              Our Programs
            </h2>
            <div className="w-16 h-0.5 bg-accent-500 mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Fostering creativity and artistic expression across every medium
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {communityLife.map((item) => {
              const IconComponent = item.icon
              return (
                <div
                  key={item.title}
                  className="bg-[#faf8f5] border-l-4 border-primary-400 p-8 group hover:shadow-md transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 mb-5 group-hover:bg-primary-200 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary-700" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 md:py-20 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-gray-900 mb-4">
              Life at Ashwood
            </h2>
            <div className="w-16 h-0.5 bg-accent-500 mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A glimpse into our galleries, studios, and creative community
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="relative aspect-square overflow-hidden group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Info Section */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-2">Visit the Foundation</h2>
            <div className="w-16 h-0.5 bg-accent-400 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
            <div>
              <Clock className="w-8 h-8 text-accent-400 mx-auto mb-3" />
              <h3 className="font-serif text-lg font-semibold mb-1">Gallery Hours</h3>
              <p className="text-primary-200 text-sm">Tues-Sun: 10am - 6pm</p>
              <p className="text-primary-200 text-sm">Thursday: 10am - 9pm</p>
            </div>
            <div>
              <BookOpen className="w-8 h-8 text-accent-400 mx-auto mb-3" />
              <h3 className="font-serif text-lg font-semibold mb-1">Workshops</h3>
              <p className="text-primary-200 text-sm">Saturdays at 2pm</p>
            </div>
            <div>
              <Music className="w-8 h-8 text-accent-400 mx-auto mb-3" />
              <h3 className="font-serif text-lg font-semibold mb-1">Live Performances</h3>
              <p className="text-primary-200 text-sm">First Friday of each month</p>
            </div>
          </div>
        </div>
      </section>

      <ErrorBoundary>
        <CTASection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* Rich Footer */}
      <footer className="bg-[#f5f0eb] border-t border-primary-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-serif font-semibold text-primary-900 mb-4">The Ashwood Arts Foundation</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Nurturing artistic excellence and making the arts accessible to everyone through exhibitions, residencies, and education.
              </p>
              <div className="flex items-center space-x-2 text-gray-500">
                <MapPin className="w-4 h-4 text-primary-600" />
                <span className="text-sm">215 Gallery Row, Portland, OR 97204</span>
              </div>
            </div>

            {/* Explore Column */}
            <div>
              <h4 className="font-serif text-lg font-semibold text-primary-900 mb-6">Explore</h4>
              <ul className="space-y-3">
                <li><Link href="/exhibitions" className="text-gray-600 hover:text-primary-700 transition-colors text-sm">Exhibitions</Link></li>
                <li><Link href="/artists" className="text-gray-600 hover:text-primary-700 transition-colors text-sm">Artists</Link></li>
                <li><Link href="/events" className="text-gray-600 hover:text-primary-700 transition-colors text-sm">Events</Link></li>
                <li><Link href="/news" className="text-gray-600 hover:text-primary-700 transition-colors text-sm">News</Link></li>
                <li><Link href="/about" className="text-gray-600 hover:text-primary-700 transition-colors text-sm">About Us</Link></li>
              </ul>
            </div>

            {/* Get Involved Column */}
            <div>
              <h4 className="font-serif text-lg font-semibold text-primary-900 mb-6">Get Involved</h4>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li>Become a Member</li>
                <li>Artist Residency</li>
                <li>Volunteer</li>
                <li>Donate</li>
                <li>Corporate Partnerships</li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="font-serif text-lg font-semibold text-primary-900 mb-6">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-primary-600 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">(503) 555-0234</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-primary-600 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">info@ashwoodarts.org</span>
                </li>
                <li className="flex items-start space-x-2 mt-4">
                  <Clock className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
                  <div className="text-gray-600 text-sm">
                    <p>Tues-Sun: 10am - 6pm</p>
                    <p>Thursday: 10am - 9pm</p>
                    <p>Closed Mondays</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-200 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} The Ashwood Arts Foundation. All rights reserved.
            </p>
            <p className="text-gray-400 text-xs mt-2 md:mt-0">
              Where creativity comes alive
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
