import Link from 'next/link';
import Image from 'next/image';

export default function OurServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-green-600 via-blue-700 to-purple-800 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-20 h-20 bg-green-400 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-blue-300 rounded-full"></div>
          <div className="absolute bottom-40 right-1/3 w-16 h-16 bg-purple-300 rounded-full animate-pulse"></div>
        </div>
        
        <div className="relative container mx-auto px-6 pt-20 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="w-full">
              <p className="mb-3 font-semibold text-green-200 md:mb-4">Innovative</p>
              <h1 className="mb-5 text-3xl font-bold text-white md:mb-6 md:text-4xl lg:text-5xl">
                Comprehensive Genetic Services
              </h1>
              <p className="text-lg text-green-100 leading-relaxed">
                Explore cutting-edge solutions for rare diseases through advanced
                genetic and metabolic testing at M.A.G.I.C Clinic.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                <Link
                  href="/request-an-appointment"
                  className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Learn More
                </Link>
                <Link
                  href="/request-an-appointment"
                  className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
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
                    <h3 className="text-2xl font-bold mb-2">Our Services</h3>
                    <p className="text-sm opacity-90">Advanced genetic testing solutions</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <div className="text-white">
                        <h4 className="font-semibold">Exome Sequencing</h4>
                        <p className="text-sm opacity-90">Comprehensive DNA analysis</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      </div>
                      <div className="text-white">
                        <h4 className="font-semibold">Genetic Testing</h4>
                        <p className="text-sm opacity-90">Rare disease diagnostics</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <div className="text-white">
                        <h4 className="font-semibold">Personalized Care</h4>
                        <p className="text-sm opacity-90">Tailored treatment plans</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating stats */}
                <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-2xl p-4 border border-gray-100 transform rotate-6 hover:rotate-0 transition-transform duration-300">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">99%</div>
                    <div className="text-xs text-gray-600">Accuracy</div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-2xl p-4 border border-gray-100 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">24/7</div>
                    <div className="text-xs text-gray-600">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exome Sequencing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
            <div>
              <p className="mb-3 font-semibold text-blue-600 md:mb-4">Discover</p>
              <h1 className="mb-5 text-2xl font-bold text-gray-900 md:mb-6 md:text-3xl lg:text-4xl">
                Unlock Your Genetic Potential with Exome Sequencing
              </h1>
              <p className="mb-6 text-gray-600 leading-relaxed md:mb-8">
                Whole Exome Sequencing provides a comprehensive analysis of your DNA.
                This technology helps identify genetic variations linked to health
                conditions.
              </p>
              <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
                <div>
                  <h6 className="mb-3 text-lg leading-[1.4] font-bold text-gray-900">
                    Comprehensive Insights
                  </h6>
                  <p className="text-gray-600">
                    Gain valuable information about your genetic makeup and potential
                    health risks.
                  </p>
                </div>
                <div>
                  <h6 className="mb-3 text-lg leading-[1.4] font-bold text-gray-900">
                    Personalized Solutions
                  </h6>
                  <p className="text-gray-600">
                    Tailor your healthcare approach based on your unique genetic
                    profile.
                  </p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Link
                  href="/request-an-appointment"
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
              <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <div className="text-2xl font-bold text-gray-900">99.9%</div>
                    <div className="text-sm text-gray-600">Accuracy</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <div className="text-2xl font-bold text-gray-900">2-3 weeks</div>
                    <div className="text-sm text-gray-600">Results</div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced Sequencing</h3>
                  <p className="text-sm text-gray-600">State-of-the-art technology for precise genetic analysis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unlocking the Secrets of Your DNA with Whole Genome Sequencing */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Unlocking the Secrets of Your DNA with Whole Genome Sequencing
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Whole Genome Sequencing provides comprehensive insights into your
                genetic makeup. This advanced technology can help identify rare diseases
                and tailor personalized treatment plans.
              </p>
              
              <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
                <div>
                  <h6 className="mb-3 text-lg leading-[1.4] font-bold text-gray-900">
                    Comprehensive Insights
                  </h6>
                  <p className="text-gray-600">
                    Gain a deeper understanding of genetic conditions and their implications for
                    your health.
                  </p>
                </div>
                <div>
                  <h6 className="mb-3 text-lg leading-[1.4] font-bold text-gray-900">
                    Personalized Care
                  </h6>
                  <p className="text-gray-600">
                    Receive tailored treatment options based on your unique genetic profile
                    and needs.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                className="w-full rounded-2xl object-cover shadow-2xl"
                alt="Medical team with DNA sequencing technology"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Medium length section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                Tagline
              </div>
              
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Medium length section heading goes here
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                varius enim in eros elementum tristique. Duis cursus, mi quis viverra
                ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                Suspendisse mattis enim in eros elementum tristique. Duis cursus, mi quis
                viverra ornare, eros dolor interdum nulla.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/request-an-appointment"
                  className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                >
                  Button
                </Link>
                <Link
                  href="/request-an-appointment"
                  className="text-gray-900 hover:text-gray-700 font-semibold transition-colors flex items-center"
                >
                  Button
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                className="w-full rounded-2xl object-cover shadow-2xl"
                alt="DNA sequencing technology"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Understanding the Process of Our Advanced Sequencing Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 text-center">
              Understanding the Process of Our Advanced Sequencing Services
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Process 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                How We Conduct Whole Exome and Genome Sequencing
              </h3>
              <p className="text-gray-600 mb-6">
                Our sequencing services begin with a thorough consultation to assess your needs.
              </p>
              <Link
                href="/request-an-appointment"
                className="text-blue-600 hover:text-blue-700 font-semibold transition-colors flex items-center justify-center"
              >
                Learn More
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Process 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                The Steps Involved in Mitochondrial Genome Sequencing
              </h3>
              <p className="text-gray-600 mb-6">
                We utilize cutting-edge technology to analyze mitochondrial DNA for precise results.
              </p>
              <Link
                href="/request-an-appointment"
                className="text-blue-600 hover:text-blue-700 font-semibold transition-colors flex items-center justify-center"
              >
                Sign Up
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Process 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Ensuring Accuracy and Reliability in Our Sequencing Process
              </h3>
              <p className="text-gray-600 mb-6">
                Our team of experts meticulously reviews each sequence to ensure accuracy.
              </p>
              <Link
                href="/request-an-appointment"
                className="text-blue-600 hover:text-blue-700 font-semibold transition-colors flex items-center justify-center"
              >
                Get Started
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">
              Ready to Unlock Your Genetic Potential?
            </h2>
            <p className="text-lg text-blue-100 mb-10 leading-relaxed">
              Take the first step towards personalized medicine with our comprehensive genetic testing services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/request-an-appointment"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/clinical-trials"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
