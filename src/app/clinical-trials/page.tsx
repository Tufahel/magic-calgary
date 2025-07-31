import Link from 'next/link';
import Image from 'next/image';

export default function ClinicalTrialsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 overflow-hidden flex items-center justify-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-40 h-40 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-60 right-20 w-24 h-24 bg-blue-400 rounded-full animate-bounce"></div>
          <div className="absolute bottom-40 left-1/4 w-32 h-32 bg-indigo-300 rounded-full"></div>
          <div className="absolute bottom-20 right-1/3 w-16 h-16 bg-purple-300 rounded-full animate-pulse"></div>
        </div>
        
        <div className="relative container mx-auto px-6 text-center">
          <div className="max-w-6xl mx-auto space-y-8">
            <h1 className="text-5xl font-bold text-white leading-tight md:text-6xl lg:text-7xl">
              Clinical Trials Unit
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed md:text-2xl lg:text-2xl max-w-4xl mx-auto">
              At the M.A.G.I.C Clinic, our Clinical Trials Unit is committed to
              advancing research for rare metabolic and genetic diseases. We strive
              to provide patients with access to innovative therapies that can
              transform their lives.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-8 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
            <h3 className="text-2xl leading-[1.2] font-bold text-gray-900 md:text-3xl lg:text-4xl">
              Unlocking New Possibilities: The Vital Role of Clinical Trials in Healthcare
            </h3>
            <p className="text-gray-600 leading-relaxed md:text-lg">
              Clinical trials are essential for advancing treatments for rare
              metabolic and genetic diseases. They provide patients with access to
              innovative therapies that may not be available elsewhere. By
              participating in these trials, patients contribute to groundbreaking
              research that can change lives and improve health outcomes.
            </p>
          </div>
          <div className="w-full bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Clinical Research Innovation</h3>
            <p className="text-gray-600">Advancing medical knowledge through rigorous scientific research</p>
          </div>
        </div>
      </section>

      {/* Current Trials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
            <div>
              <p className="mb-3 font-semibold text-blue-600 md:mb-4">Innovate</p>
              <h1 className="mb-5 text-5xl font-bold text-gray-900 md:mb-6 md:text-6xl lg:text-7xl">
                Explore Our Current Clinical Trials
              </h1>
              <p className="mb-6 text-xl text-gray-600 leading-relaxed md:mb-8">
                Our clinical trials focus on groundbreaking therapies for rare
                metabolic and genetic disorders. Join us in advancing medical research
                and improving patient outcomes.
              </p>
              <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
                <div>
                  <div className="mb-3 md:mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <h6 className="mb-3 text-lg leading-[1.4] font-bold text-gray-900 md:mb-4 md:text-xl">
                    Trial Objectives
                  </h6>
                  <p className="text-gray-600">
                    Each trial aims to discover innovative treatments tailored to
                    individual genetic profiles.
                  </p>
                </div>
                <div>
                  <div className="mb-3 md:mb-4">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                      </svg>
                    </div>
                  </div>
                  <h6 className="mb-3 text-lg leading-[1.4] font-bold text-gray-900 md:mb-4 md:text-xl">
                    Get Involved
                  </h6>
                  <p className="text-gray-600">
                    Participate in our trials to contribute to vital research and
                    potential breakthroughs.
                  </p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Link
                  href="/pegvalaise-clinical-trials"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Learn More
                </Link>
                <Link
                  href="/request-an-appointment"
                  className="text-blue-600 hover:text-blue-700 font-semibold transition-colors flex items-center"
                >
                  Sign Up
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white bg-opacity-10 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-white">15+</div>
                      <div className="text-sm text-white opacity-90">Active Trials</div>
                    </div>
                    <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-white">500+</div>
                      <div className="text-sm text-white opacity-90">Participants</div>
                    </div>
                  </div>
                  <div className="text-center text-white">
                    <h3 className="text-xl font-bold mb-2">Leading Research</h3>
                    <p className="text-sm opacity-90">Pioneering treatments for genetic conditions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unlock New Possibilities Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 md:text-4xl lg:text-5xl">
                Unlock New Possibilities: Join Our Clinical Trials for Rare Diseases
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8 md:text-lg">
                Participating in our clinical trials gives you access to cutting-edge 
                therapies. Help advance research while receiving expert care tailored to 
                your needs.
              </p>
              
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Join</h3>
                  <p className="text-gray-600">
                    Be part of groundbreaking medical research today.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Explore</h3>
                  <p className="text-gray-600">
                    Discover innovative treatments for rare genetic conditions.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-500 to-teal-600 rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="DNA Research" 
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-teal-600/20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Join Our Research?
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Take the next step in your health journey by participating in groundbreaking clinical trials.
              Our team is here to guide you through the process and answer any questions you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/request-an-appointment"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Express Interest
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </Link>
              <Link
                href="/pegvalaise-clinical-trials"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Learn About Pegvalaise
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
