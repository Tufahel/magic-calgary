import Link from 'next/link';

export default function AboutUsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 overflow-hidden geometric-bg animate-gradient-shift">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 medical-pattern opacity-15"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-40 h-40 bg-white rounded-full animate-float animation-delay-200"></div>
          <div className="absolute top-60 right-20 w-24 h-24 bg-blue-400 rounded-full animate-bounce-in animation-delay-400"></div>
          <div className="absolute bottom-40 left-1/4 w-32 h-32 bg-indigo-300 rounded-full animate-pulse-glow animation-delay-600"></div>
          <div className="absolute bottom-20 right-1/3 w-16 h-16 bg-purple-300 rounded-full animate-zoom-in animation-delay-800"></div>
          <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-white bg-opacity-5 rounded-full animate-rotate-in animation-delay-1000"></div>
        </div>
        
        <div className="relative container mx-auto px-6 pt-32 pb-20 text-center">
          <div className="max-w-4xl mx-auto animate-slide-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full text-sm font-medium text-white mb-8 animate-fade-in-up animation-delay-200">
              🏥 Excellence in Healthcare
            </div>
            
            <h1 className="text-3xl lg:text-5xl font-bold text-white mb-8 leading-tight animate-scale-in animation-delay-400">
              About Magic Calgary
            </h1>
            
            <p className="text-lg text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto animate-fade-in-up animation-delay-600">
              Pioneering medical research and clinical excellence in genetic disease treatment
              and innovative healthcare solutions for over a decade.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-up animation-delay-800">
              <Link
                href="/our-services"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Our Services
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/clinical-trials"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105"
              >
                Clinical Trials
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 medical-pattern-subtle">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium animate-fade-in-up">
                🎯 Our Purpose
              </div>
              
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 animate-scale-in animation-delay-200">
                Our Mission
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed animate-fade-in-up animation-delay-400">
                To advance medical research and provide exceptional clinical care through
                innovative treatments, cutting-edge research, and compassionate patient-centered
                healthcare services.
              </p>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-500 animate-slide-in-up animation-delay-600">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-700 mb-4">
                  To be a leading center of excellence in genetic disease research and treatment,
                  transforming lives through innovative medical solutions and compassionate care.
                </p>
                <div className="flex items-center space-x-2 text-blue-600 hover:scale-105 transition-transform duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-semibold">Excellence in Everything We Do</span>
                </div>
              </div>
            </div>
            
            <div className="relative animate-slide-in-right">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <div className="bg-white bg-opacity-10 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center hover:bg-opacity-30 transition-all duration-300">
                      <div className="text-2xl font-bold text-white">15+</div>
                      <div className="text-sm text-white opacity-90">Years Experience</div>
                    </div>
                    <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center hover:bg-opacity-30 transition-all duration-300">
                      <div className="text-2xl font-bold text-white">2000+</div>
                      <div className="text-sm text-white opacity-90">Patients Served</div>
                    </div>
                  </div>
                  <div className="text-center text-white">
                    <h4 className="text-xl font-bold mb-2">Trusted Healthcare</h4>
                    <p className="text-sm opacity-90">Committed to patient excellence</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Achievement Cards */}
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-2xl p-4 border border-gray-100 transform rotate-3 hover:rotate-0 transition-transform duration-300 animate-zoom-in animation-delay-1200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">ISO</div>
                  <div className="text-xs text-gray-600">Certified</div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-2xl p-4 border border-gray-100 transform -rotate-3 hover:rotate-0 transition-transform duration-300 animate-zoom-in animation-delay-1400">
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600">24/7</div>
                  <div className="text-xs text-gray-600">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-6">
              🧬 Core Competencies
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Areas of Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized knowledge and advanced capabilities across multiple medical domains
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Expertise Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced Research</h3>
              <p className="text-gray-600 mb-6">Cutting-edge research facilities and methodologies for breakthrough discoveries in genetic medicine and rare disorders.</p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                  State-of-the-art laboratories
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                  Clinical trial management
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                  Data analysis & insights
                </li>
              </ul>
            </div>

            {/* Expertise Card 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Clinical Trials</h3>
              <p className="text-gray-600 mb-6">Conducting cutting-edge clinical trials for novel treatments, with focus on genetic disorders and personalized medicine approaches.</p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></div>
                  Phase I-IV Trials
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></div>
                  Regulatory Compliance
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></div>
                  Patient Safety
                </li>
              </ul>
            </div>

            {/* Expertise Card 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Patient Care</h3>
              <p className="text-gray-600 mb-6">Comprehensive patient-centered care with multidisciplinary approach, focusing on quality of life and treatment outcomes.</p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                  Personalized Treatment Plans
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                  24/7 Support Services
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                  Family Counseling
                </li>
              </ul>
            </div>

            {/* Expertise Card 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Assurance</h3>
              <p className="text-gray-600 mb-6">Rigorous quality control and compliance standards ensuring the highest level of safety and efficacy in all our procedures.</p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  ISO 9001 Certified
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  Regular Audits
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  Continuous Improvement
                </li>
              </ul>
            </div>

            {/* Expertise Card 5 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Educational Programs</h3>
              <p className="text-gray-600 mb-6">Comprehensive educational initiatives for healthcare professionals, patients, and families to enhance understanding and management.</p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
                  Professional Training
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
                  Patient Education
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
                  Collaborative Research
                </li>
              </ul>
            </div>

            {/* Expertise Card 6 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation Lab</h3>
              <p className="text-gray-600 mb-6">State-of-the-art laboratory facilities for developing innovative treatment approaches and breakthrough medical technologies.</p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mr-2"></div>
                  Advanced Equipment
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mr-2"></div>
                  Technology Development
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mr-2"></div>
                  Patent Applications
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our commitment to excellence in medical research and patient care
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Compassion</h3>
              <p className="text-gray-600">Treating every patient with empathy, understanding, and genuine care for their wellbeing.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">Striving for the highest standards in all aspects of our research and clinical practice.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">Pioneering new approaches and technologies to advance medical science and patient outcomes.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Collaboration</h3>
              <p className="text-gray-600">Working together with patients, families, and colleagues to achieve the best outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Experience Excellence?
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Join thousands of patients who have trusted Magic Calgary for their medical care.
              Let us help you on your journey to better health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/request-an-appointment"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Schedule Appointment
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </Link>
              <Link
                href="/our-services"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Explore Services
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