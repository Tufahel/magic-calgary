import Link from 'next/link';

export default function RequestAppointmentPage() {
  return (
    <>
      {/* Hero Section - Make a Referral */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-20 h-20 bg-blue-400 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-indigo-300 rounded-full"></div>
          <div className="absolute bottom-40 right-1/3 w-16 h-16 bg-purple-300 rounded-full animate-pulse"></div>
        </div>
        
        <div className="relative container mx-auto px-6 pt-20 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="w-full">
              <p className="mb-3 font-semibold text-blue-200 md:mb-4">Referrals</p>
              <h1 className="mb-5 text-3xl font-bold text-white md:mb-6 md:text-4xl lg:text-5xl">
                Make a Referral
              </h1>
              <p className="text-lg text-blue-100 leading-relaxed">
                Easily refer patients to M.A.G.I.C Clinic for specialized care in metabolic and genetic conditions.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                <Link
                  href="#contact-form"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Learn More
                </Link>
                <Link
                  href="#contact-form"
                  className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            </div>
            
            {/* Right side visual elements */}
            <div className="relative hidden lg:block">
              <div className="relative">
                {/* Main card */}
                <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                  <div className="text-center text-white mb-8">
                    <h3 className="text-2xl font-bold mb-2">Referral System</h3>
                    <p className="text-sm opacity-90">Streamlined patient referrals</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div className="text-white">
                        <h4 className="font-semibold">Easy Documentation</h4>
                        <p className="text-sm opacity-90">Simple referral process</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="text-white">
                        <h4 className="font-semibold">Quick Response</h4>
                        <p className="text-sm opacity-90">Fast processing time</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div className="text-white">
                        <h4 className="font-semibold">Expert Care</h4>
                        <p className="text-sm opacity-90">Specialist consultation</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating stats */}
                <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-2xl p-4 border border-gray-100 transform rotate-6 hover:rotate-0 transition-transform duration-300">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">24h</div>
                    <div className="text-xs text-gray-600">Response</div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-2xl p-4 border border-gray-100 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">100%</div>
                    <div className="text-xs text-gray-600">Secure</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Refer Patients Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
            <div>
              <p className="mb-3 font-semibold text-blue-600 md:mb-4">Specialized Care</p>
              <h1 className="mb-5 text-2xl font-bold text-gray-900 md:mb-6 md:text-3xl lg:text-4xl">
                Refer Patients to Magic Clinic
              </h1>
              <p className="mb-6 text-gray-600 leading-relaxed md:mb-8">
                Easily refer patients via fax or the Alberta Referral Directory for specialized care.
                Our streamlined process ensures quick response times and comprehensive patient support.
              </p>
              <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
                <div>
                  <h6 className="mb-3 text-lg leading-[1.4] font-bold text-gray-900">
                    Fast Processing
                  </h6>
                  <p className="text-gray-600">
                    Quick turnaround times for urgent referrals and consultations.
                  </p>
                </div>
                <div>
                  <h6 className="mb-3 text-lg leading-[1.4] font-bold text-gray-900">
                    Expert Network
                  </h6>
                  <p className="text-gray-600">
                    Access to specialized genetic and metabolic disorder experts.
                  </p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Link
                  href="#contact-form"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Submit
                </Link>
                <Link
                  href="#contact-form"
                  className="text-blue-600 hover:text-blue-700 font-semibold transition-colors flex items-center"
                >
                  Learn More
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">DNA Research</h3>
                  <p className="text-sm text-gray-600">Advanced genetic analysis</p>
                </div>
                <div className="flex justify-center mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <div className="text-2xl font-bold text-gray-900">24/7</div>
                    <div className="text-sm text-gray-600">Support Available</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <div className="text-2xl font-bold text-gray-900">Expert</div>
                    <div className="text-sm text-gray-600">Medical Team</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Form */}
      <section className="py-20 bg-gray-50" id="contact-form">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
            <div>
              <p className="mb-3 font-semibold text-indigo-600 md:mb-4">Contact</p>
              <h1 className="mb-5 text-2xl font-bold text-gray-900 md:mb-6 md:text-3xl lg:text-4xl">
                Get in Touch
              </h1>
              <p className="mb-6 text-gray-600 leading-relaxed md:mb-8">
                We&apos;re here to assist you with your referral. Contact our team for any questions
                or to get started with the referral process.
              </p>
              
              <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
                <div>
                  <h6 className="mb-3 text-lg leading-[1.4] font-bold text-gray-900">
                    Quick Response
                  </h6>
                  <p className="text-gray-600">
                    We respond to all referral inquiries within 24 hours.
                  </p>
                </div>
                <div>
                  <h6 className="mb-3 text-lg leading-[1.4] font-bold text-gray-900">
                    Secure Process
                  </h6>
                  <p className="text-gray-600">
                    HIPAA-compliant and secure patient information handling.
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-gray-900 font-medium">info@magicclinic.ca</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-gray-900 font-medium">+1 (403) 955-2800</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-900 font-medium">4th Floor, ICE, NE Calgary AB T3N 1A4 CA</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 md:p-12">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white resize-none"
                      placeholder="Enter your message..."
                    ></textarea>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="terms"
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="terms" className="text-sm text-gray-600">
                      I agree to the Terms.
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
