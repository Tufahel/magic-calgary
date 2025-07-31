import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-40 h-40 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-60 right-20 w-24 h-24 bg-blue-400 rounded-full animate-bounce"></div>
          <div className="absolute bottom-40 left-1/4 w-32 h-32 bg-indigo-300 rounded-full"></div>
          <div className="absolute bottom-20 right-1/3 w-16 h-16 bg-purple-300 rounded-full animate-pulse"></div>
        </div>
        
        <div className="relative container mx-auto px-6 pt-32 pb-20 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full text-sm font-medium text-white mb-8">
              🧬 M.A.G.I.C Clinic Canada
            </div>
            
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-8 leading-tight">
              Welcome to M.A.G.I.C Clinic Canada
            </h1>
            
            <p className="text-lg text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
              At M.A.G.I.C Clinic, we specialize in metabolics and genetics, providing
              tailored care for patients with rare genetic disorders. Our dedicated team
              is committed to improving your health through innovative treatments and
              personalized support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/our-services"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Learn More
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/request-an-appointment"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Empowering Health Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col gap-5 md:flex-row md:gap-12 lg:gap-20">
            <div className="w-full max-w-lg">
              <p className="mb-3 font-semibold text-blue-600 md:mb-4">Hope</p>
              <h1 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
                Empowering Your Health
              </h1>
            </div>
            <div className="w-full max-w-lg">
              <p className="text-gray-600 leading-relaxed md:text-lg">
                At M.A.G.I.C Clinic, we are dedicated to transforming lives through
                advanced metabolic and genetic care. Our mission is to provide
                personalized treatment for patients with rare genetic conditions,
                ensuring they receive the support they need.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                <Link
                  href="/our-services"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-2xl leading-[1.2] font-bold text-gray-900 mb-8 md:text-3xl lg:text-4xl">
              Understanding the Diagnosis and Treatment of Rare Genetic Diseases
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Our Comprehensive Approach to Genetic Disease Management</h3>
              <p className="text-gray-600 mb-6">At M.A.G.I.C Clinic, we utilize advanced genetic testing to identify rare diseases.</p>
              <Link href="/our-services" className="text-blue-600 hover:text-blue-700 font-semibold">
                Learn More →
              </Link>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Tailored Treatment Plans for Genetic Conditions</h3>
              <p className="text-gray-600 mb-6">Our specialists create personalized treatment strategies based on individual genetic profiles.</p>
              <Link href="/request-an-appointment" className="text-green-600 hover:text-green-700 font-semibold">
                Sign Up →
              </Link>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Ongoing Support and Monitoring for Patients</h3>
              <p className="text-gray-600 mb-6">We provide continuous care to ensure optimal health outcomes for our patients.</p>
              <Link href="/request-an-appointment" className="text-purple-600 hover:text-purple-700 font-semibold">
                Contact →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Revolutionizing Genetic Testing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                🔬 Innovative
              </div>
              
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Revolutionizing Genetic Testing for Better Health
              </h2>
              
              <p className="text-gray-700 leading-relaxed">
                Our advanced genetic testing services empower patients with crucial
                insights into their health. Discover how your DNA can guide
                personalized treatment plans.
              </p>
              
              <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
                <div>
                  <h6 className="mb-3 text-lg leading-[1.4] font-bold text-gray-900">
                    Precision Care
                  </h6>
                  <p className="text-gray-600">Tailored solutions based on your unique genetic makeup.</p>
                </div>
                <div>
                  <h6 className="mb-3 text-lg leading-[1.4] font-bold text-gray-900">
                    Expert Insights
                  </h6>
                  <p className="text-gray-600">Access to leading specialists in genetics and metabolic health.</p>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/our-services"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Learn More
                </Link>
                <Link
                  href="/request-an-appointment"
                  className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                >
                  Sign Up →
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white bg-opacity-10 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-white">98%</div>
                      <div className="text-sm text-white opacity-90">Accuracy Rate</div>
                    </div>
                    <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-white">24h</div>
                      <div className="text-sm text-white opacity-90">Turnaround</div>
                    </div>
                  </div>
                  <div className="text-center text-white">
                    <h3 className="text-xl font-bold mb-2">State-of-the-Art Lab</h3>
                    <p className="text-sm opacity-90">Advanced sequencing technology for precise results</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center">
            <div className="w-full max-w-lg text-center mb-12">
              <p className="mb-3 font-semibold text-blue-600 md:mb-4">Innovative</p>
              <h2 className="text-2xl font-bold text-gray-900 mb-5 md:text-3xl lg:text-4xl">
                Discover Our Exceptional Medical Services
              </h2>
              <p className="text-gray-600 leading-relaxed">
                At M.A.G.I.C Clinic, we combine cutting-edge technology with expert
                care. Our state-of-the-art facilities ensure that every patient
                receives the highest standard of treatment.
              </p>
            </div>
            <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
              <div className="flex w-full flex-col items-center text-center">
                <div className="mb-5 md:mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-5 text-lg font-bold text-gray-900 md:mb-6">
                  Meet Our Team of Experts
                </h3>
                <p className="text-gray-600">Our dedicated professionals are leaders in their fields.</p>
              </div>
              <div className="flex w-full flex-col items-center text-center">
                <div className="mb-5 md:mb-6">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-5 text-lg font-bold text-gray-900 md:mb-6">
                  Comprehensive Support for Every Patient
                </h3>
                <p className="text-gray-600">We provide personalized care tailored to your needs.</p>
              </div>
              <div className="flex w-full flex-col items-center text-center">
                <div className="mb-5 md:mb-6">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-5 text-lg font-bold text-gray-900 md:mb-6">
                  State-of-the-Art Facilities for Optimal Care
                </h3>
                <p className="text-gray-600">Our clinic is equipped with the latest technology.</p>
              </div>
            </div>
            <div className="mt-10 flex items-center gap-4">
              <Link
                href="/our-services"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section - Advanced Genetic Testing */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                🔬 Innovative
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Revolutionizing Genetic Testing for Better Health
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Our advanced genetic testing services empower patients with crucial
                insights into their health. Discover how your DNA can guide
                personalized treatment plans.
              </p>
              
              <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
                <div>
                  <h6 className="mb-3 text-lg leading-[1.4] font-bold text-gray-900">
                    Precision Care
                  </h6>
                  <p className="text-gray-600">Tailored solutions based on your unique genetic makeup.</p>
                </div>
                <div>
                  <h6 className="mb-3 text-lg leading-[1.4] font-bold text-gray-900">
                    Expert Insights
                  </h6>
                  <p className="text-gray-600">Access to leading specialists in genetics and metabolic health.</p>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/our-services"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Learn More
                </Link>
                <Link
                  href="/request-an-appointment"
                  className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                >
                  Sign Up →
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white bg-opacity-10 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-white">98%</div>
                      <div className="text-sm text-white opacity-90">Accuracy Rate</div>
                    </div>
                    <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-white">24h</div>
                      <div className="text-sm text-white opacity-90">Turnaround</div>
                    </div>
                  </div>
                  <div className="text-center text-white">
                    <h3 className="text-xl font-bold mb-2">State-of-the-Art Lab</h3>
                    <p className="text-sm opacity-90">Advanced sequencing technology for precise results</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-2xl p-4 border border-gray-100 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">ISO</div>
                  <div className="text-xs text-gray-600">Certified</div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-2xl p-4 border border-gray-100 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">24/7</div>
                  <div className="text-xs text-gray-600">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personalized Treatment Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  className="w-full h-96 rounded-2xl object-cover shadow-2xl"
                  alt="Medical professional examining genetic data"
                  width={800}
                  height={384}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Tagline
              </div>
              
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Medium length section heading goes here
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                At M.A.G.I.C Clinic, we believe in personalized treatment plans that
                cater to your unique genetic makeup. Our dedicated team is here to
                support you every step of the way.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/our-services"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Button
                </Link>
                <Link
                  href="/request-an-appointment"
                  className="text-blue-600 hover:text-blue-700 font-semibold transition-colors flex items-center"
                >
                  Button
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discover Our Exceptional Medical Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium mb-6">
              Innovative
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Discover Our Exceptional Medical Services
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              At M.A.G.I.C Clinic, we combine cutting-edge technology with expert care. Our state-of-the-art
              facilities ensure that every patient receives the highest standard of treatment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Service 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Meet Our Team of Experts</h3>
              <p className="text-gray-600">Our dedicated professionals are leaders in their fields.</p>
            </div>

            {/* Service 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Comprehensive Support for Every Patient</h3>
              <p className="text-gray-600">We provide personalized care tailored to your needs.</p>
            </div>

            {/* Service 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">State-of-the-Art Facilities for Optimal Care</h3>
              <p className="text-gray-600">Our clinic is equipped with the latest technology.</p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/our-services"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Take the First Step Section */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-blue-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 w-full h-full">
            <svg viewBox="0 0 1000 300" className="w-full h-full">
              <polygon points="0,300 300,200 600,250 1000,150 1000,300" fill="currentColor" opacity="0.3"/>
              <polygon points="0,300 400,180 700,220 1000,120 1000,300" fill="currentColor" opacity="0.2"/>
            </svg>
          </div>
        </div>
        
        <div className="relative container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side content */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Take the First Step
              </h2>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                Contact us today to schedule your appointment or learn more about our specialized services.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/request-an-appointment"
                  className="bg-white text-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Inquire
                </Link>
                <Link
                  href="/request-an-appointment"
                  className="bg-transparent text-white px-6 py-3 rounded-lg font-semibold border-2 border-white hover:bg-white hover:text-teal-600 transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
            
            {/* Right side content */}
            <div className="hidden lg:block">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Call Us</h3>
                      <p className="text-blue-100 text-sm">(403) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.83 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Email Us</h3>
                      <p className="text-blue-100 text-sm">info@magicclinic.ca</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Visit Us</h3>
                      <p className="text-blue-100 text-sm">Calgary, Alberta</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section - Explore Our Latest Insights */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-sm font-semibold text-gray-500 mb-2">Blog</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Explore Our Latest Insights
              </h2>
              <p className="text-lg text-gray-600">
                Stay informed about metabolics and genetics advancements.
              </p>
            </div>
            <Link
              href="/blog"
              className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
            >
              View all
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Blog Card 1 */}
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 relative">
                <Image
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Understanding Genetic Disorders"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm font-medium text-green-600 mb-2">Metabolics</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Understanding Genetic Disorders
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Learn how genetics influence rare disease development and treatment options.
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">Dr. Smith</div>
                    <div className="text-xs text-gray-500">11 Jan 2022 • 5 min read</div>
                  </div>
                </div>
              </div>
            </article>

            {/* Blog Card 2 */}
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 relative">
                <Image
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="The Role of Metabolics in Health"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm font-medium text-blue-600 mb-2">Genetics</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  The Role of Metabolics in Health
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Discover how metabolics can impact your overall health and well-being.
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">Dr. Johnson</div>
                    <div className="text-xs text-gray-500">15 Feb 2022 • 7 min read</div>
                  </div>
                </div>
              </div>
            </article>

            {/* Blog Card 3 */}
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 relative">
                <Image
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Innovations in Rare Disease Treatment"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm font-medium text-purple-600 mb-2">Rare</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Innovations in Rare Disease Treatment
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Explore groundbreaking therapies that are changing lives for rare disease patients.
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">Dr. Lee</div>
                    <div className="text-xs text-gray-500">20 May 2022 • 6 min read</div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">
              Ready to Transform Your Health?
            </h2>
            <p className="text-lg text-blue-100 mb-10 leading-relaxed">
              Join thousands of patients who have trusted M.A.G.I.C Clinic for their genetic and metabolic care.
              Take the first step towards personalized medicine today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/request-an-appointment"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Schedule Consultation
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </Link>
              <Link
                href="/clinical-trials"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Explore Clinical Trials
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
