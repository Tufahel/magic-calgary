import Link from 'next/link';

export default function PegvalaiseClinicalTrialsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 overflow-hidden geometric-bg animate-gradient-shift">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 medical-pattern opacity-15"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full animate-float animation-delay-200"></div>
          <div className="absolute top-40 right-20 w-20 h-20 bg-blue-400 rounded-full animate-bounce-in animation-delay-400"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-indigo-300 rounded-full animate-pulse-glow animation-delay-600"></div>
          <div className="absolute bottom-40 right-1/3 w-16 h-16 bg-purple-300 rounded-full animate-zoom-in animation-delay-800"></div>
          <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-white bg-opacity-5 rounded-full animate-rotate-in animation-delay-1000"></div>
        </div>
        
        <div className="relative container mx-auto px-6 pt-20 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="w-full animate-slide-in-left">
              <p className="mb-3 font-semibold text-indigo-200 md:mb-4 animate-fade-in-up animation-delay-200">Advanced Research</p>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 transform transition-all duration-1000 translate-y-0 opacity-100 animate-slide-in-down bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent drop-shadow-2xl">
            Pegvalaise 
            <span className="block text-4xl md:text-6xl text-blue-200 animate-shimmer">Clinical Trials</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 opacity-90 animate-fade-in-slow animation-delay-600 leading-relaxed max-w-3xl">
            Advancing neurodevelopmental disorder treatment through innovative enzyme replacement therapy research.</p>
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8 animate-slide-in-up animation-delay-800">
                <Link
                  href="/request-an-appointment"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Learn More
                </Link>
                <Link
                  href="/request-an-appointment"
                  className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105"
                >
                  Sign Up
                </Link>
              </div>
            </div>
            
            {/* Right side visual elements */}
            <div className="relative hidden lg:block animate-slide-in-right">
              <div className="relative">
                {/* Main card */}
                <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:transform hover:scale-105 transition-all duration-500 animate-fade-in animation-delay-1000">
                  <div className="text-center text-white mb-8">
                    <h3 className="text-2xl font-bold mb-2">Clinical Trial</h3>
                    <p className="text-sm opacity-90">Advancing maternal and infant care</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 hover:transform hover:scale-105 transition-all duration-300">
                      <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center animate-pulse-glow">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <div className="text-white">
                        <h4 className="font-semibold">Maternal Safety</h4>
                        <p className="text-sm opacity-90">Comprehensive monitoring</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 hover:transform hover:scale-105 transition-all duration-300">
                      <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center animate-pulse-glow animation-delay-200">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="text-white">
                        <h4 className="font-semibold">Infant Outcomes</h4>
                        <p className="text-sm opacity-90">Long-term follow-up</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 hover:transform hover:scale-105 transition-all duration-300">
                      <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center animate-pulse-glow animation-delay-400">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div className="text-white">
                        <h4 className="font-semibold">Global Research</h4>
                        <p className="text-sm opacity-90">Multi-center study</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating stats */}
                <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-2xl p-4 border border-gray-100 transform rotate-6 hover:rotate-0 transition-transform duration-300 animate-zoom-in animation-delay-1200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">15+</div>
                    <div className="text-xs text-gray-600">Sites</div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-2xl p-4 border border-gray-100 transform -rotate-6 hover:rotate-0 transition-transform duration-300 animate-zoom-in animation-delay-1400">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-600">5</div>
                    <div className="text-xs text-gray-600">Years</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trial Details Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100 medical-pattern-subtle">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
            <div className="animate-slide-in-left">
              <p className="mb-3 font-semibold text-blue-600 md:mb-4 animate-fade-in-up">Research</p>
              <h1 className="mb-5 text-2xl font-bold text-gray-900 md:mb-6 md:text-3xl lg:text-4xl animate-scale-in animation-delay-200">
                Pegvalaise Clinical Trial
              </h1>
              <p className="mb-6 text-gray-600 leading-relaxed md:mb-8 animate-fade-in-up animation-delay-400">
                A global study examining the effects of Palynziq® during pregnancy
                and breastfeeding. This observational study aims to assess
                maternal, fetal, and infant outcomes.
              </p>
              <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2 animate-slide-in-up animation-delay-600">
                <div className="hover:transform hover:scale-105 transition-all duration-300">
                  <h6 className="mb-3 text-lg leading-[1.4] font-bold text-gray-900">
                    Global Research
                  </h6>
                  <p className="text-gray-600">
                    Multi-center study across 15+ international research sites.
                  </p>
                </div>
                <div className="hover:transform hover:scale-105 transition-all duration-300">
                  <h6 className="mb-3 text-lg leading-[1.4] font-bold text-gray-900">
                    Long-term Monitoring
                  </h6>
                  <p className="text-gray-600">
                    5-year follow-up to ensure comprehensive safety data.
                  </p>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2 md:mt-6 animate-fade-in-up animation-delay-800">
                <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors cursor-pointer">
                  Clinical Research
                </div>
                <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold bg-indigo-100 text-indigo-800 hover:bg-indigo-200 transition-colors cursor-pointer">
                  Maternal Health
                </div>
                <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold bg-purple-100 text-purple-800 hover:bg-purple-200 transition-colors cursor-pointer">
                  Infant Outcomes
                </div>
              </div>
            </div>
            
            <div className="relative animate-slide-in-right">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                    <div className="text-2xl font-bold text-gray-900">15+</div>
                    <div className="text-sm text-gray-600">Study Sites</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                    <div className="text-2xl font-bold text-gray-900">100+</div>
                    <div className="text-sm text-gray-600">Participants</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                    <div className="text-2xl font-bold text-gray-900">5</div>
                    <div className="text-sm text-gray-600">Years Duration</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                    <div className="text-2xl font-bold text-gray-900">Global</div>
                    <div className="text-sm text-gray-600">Research Scope</div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Study Overview</h3>
                  <p className="text-sm text-gray-600">Comprehensive maternal and infant health research</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Pegvalaise Trial Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-100">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-6 animate-fade-in-up">
                Understanding Pegvalaise Trial
              </h2>
              <p className="text-gray-700 text-base leading-relaxed mb-6 animate-fade-in-up animation-delay-200">
                The Pegvalaise trial is designed to gather crucial data on the effects of Palynziq®
                during pregnancy and breastfeeding. This observational study aims to assess
                maternal, fetal, and infant outcomes, ensuring that the safety and efficacy of the
                treatment are thoroughly evaluated in real-world scenarios.
              </p>
              <p className="text-gray-700 text-base leading-relaxed mb-6 animate-fade-in-up animation-delay-400">
                Participants in the trial will be closely monitored throughout their pregnancy and
                postpartum period. This includes regular check-ups and assessments to track any
                potential impacts on both the mother and child. The data collected will contribute
                significantly to our understanding of how Palynziq® interacts with maternal health
                and infant development.
              </p>
              <p className="text-gray-700 text-base leading-relaxed mb-6 animate-fade-in-up animation-delay-600">
                To qualify for the Pegvalaise trial, participants must meet specific criteria, including
                being pregnant or breastfeeding while undergoing treatment with Palynziq®. This
                ensures that the study focuses on the relevant population, providing insights that
                can lead to improved care for future patients.
              </p>
              <p className="text-gray-700 text-base leading-relaxed mb-6 animate-fade-in-up animation-delay-800">
                The trial is not only a vital step in advancing medical knowledge but also offers
                participants the opportunity to contribute to research that could benefit many
                others facing similar health challenges. By participating, individuals can play a
                crucial role in shaping the future of treatment options.
              </p>
              <p className="text-gray-700 text-base leading-relaxed animate-fade-in-up animation-delay-1000">
                We invite interested candidates to learn more about the Pegvalaise trial and the
                enrollment process. Your involvement could make a difference in the lives of many
                families navigating the complexities of rare genetic conditions.
              </p>
            </div>
            
            <div className="relative animate-slide-in-right">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:transform hover:scale-105">
                <div className="bg-white bg-opacity-10 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="text-center text-white mb-6">
                    <h3 className="text-2xl font-bold mb-2">Trial Highlights</h3>
                    <p className="text-sm opacity-90">Key aspects of the Pegvalaise study</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center text-white hover:transform hover:scale-105 transition-all duration-300">
                      <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3 animate-pulse-glow">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Maternal Safety Focus</span>
                    </div>
                    <div className="flex items-center text-white hover:transform hover:scale-105 transition-all duration-300">
                      <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3 animate-pulse-glow animation-delay-200">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Infant Health Monitoring</span>
                    </div>
                    <div className="flex items-center text-white hover:transform hover:scale-105 transition-all duration-300">
                      <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3 animate-pulse-glow animation-delay-400">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Long-term Follow-up</span>
                    </div>
                    <div className="flex items-center text-white hover:transform hover:scale-105 transition-all duration-300">
                      <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3 animate-pulse-glow animation-delay-600">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Global Research Network</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white medical-pattern-subtle">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
            <div className="animate-slide-in-left">
              <p className="mb-3 font-semibold text-indigo-600 md:mb-4 animate-fade-in-up">Discover</p>
              <h1 className="mb-5 text-3xl font-bold text-gray-900 md:mb-6 md:text-4xl lg:text-5xl animate-scale-in animation-delay-200">
                Explore the Benefits of Pegvalaise Participation
              </h1>
              <p className="mb-6 text-lg text-gray-600 leading-relaxed md:mb-8 animate-fade-in-up animation-delay-400">
                Participating in the Pegvalaise clinical trial offers unique insights
                into maternal and infant health. Your involvement can contribute to
                groundbreaking research that shapes future treatments.
              </p>
              <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2 animate-slide-in-up animation-delay-600">
                <div className="hover:transform hover:scale-105 transition-all duration-300">
                  <h6 className="mb-3 text-lg leading-[1.4] font-bold text-gray-900 md:mb-4 md:text-xl">
                    Health Insights
                  </h6>
                  <p className="text-gray-600">
                    Gain valuable information about health outcomes for mothers and
                    infants.
                  </p>
                </div>
                <div className="hover:transform hover:scale-105 transition-all duration-300">
                  <h6 className="mb-3 text-lg leading-[1.4] font-bold text-gray-900 md:mb-4 md:text-xl">
                    Expert Care
                  </h6>
                  <p className="text-gray-600">
                    Receive specialized monitoring and care from leading PKU experts.
                  </p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8 animate-fade-in-up animation-delay-800">
                <Link
                  href="/request-an-appointment"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105"
                >
                  Learn More
                </Link>
                <Link
                  href="/request-an-appointment"
                  className="text-blue-600 hover:text-blue-700 font-semibold transition-colors flex items-center hover:scale-105"
                >
                  Sign Up
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="relative animate-slide-in-right">
              <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                    <div className="text-2xl font-bold text-gray-900">24/7</div>
                    <div className="text-sm text-gray-600">Medical Support</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                    <div className="text-2xl font-bold text-gray-900">Free</div>
                    <div className="text-sm text-gray-600">Study Medication</div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Comprehensive Care</h3>
                  <p className="text-sm text-gray-600">Complete support throughout your pregnancy journey</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 medical-pattern animate-gradient-shift">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-lg mx-auto animate-fade-in-up">
            <h2 className="mb-5 text-2xl font-bold text-white md:mb-6 md:text-3xl lg:text-4xl animate-scale-in animation-delay-200">
              Join the Pegvalaise Trial Today
            </h2>
            <p className="text-xl text-white leading-relaxed mb-8 md:text-2xl animate-fade-in-up animation-delay-400">
              Discover how Pegvalaise can impact maternal and infant health. Sign up for
              updates now!
            </p>
            <div className="flex items-center justify-center gap-4 animate-slide-in-up animation-delay-600">
              <Link
                href="/request-an-appointment"
                className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                Learn More
              </Link>
              <Link
                href="/request-an-appointment"
                className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 hover:scale-105"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
