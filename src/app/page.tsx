'use client';

import { useState } from 'react';
import { Waves } from '@/components/waves';

export default function Home() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your backend
      console.log('Email submitted:', email);
      setIsSubmitted(true);
    }
  };

  return (
    <div className="relative min-h-screen bg-white">
      {/* Global Waves Animation Background - covers entire website */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Waves 
          lineColor="rgba(251, 146, 60, 0.25)"
          waveSpeedX={0.008}
          waveSpeedY={0.003}
          waveAmpX={24}
          waveAmpY={12}
          xGap={12}
          yGap={28}
          friction={0.93}
          tension={0.004}
          maxCursorMove={80}
        />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 min-h-screen flex items-center bg-white">
        {/* Hero Content */}
        <div className="relative z-20 flex flex-col items-center justify-center w-full px-4 sm:px-6 lg:px-8 text-center py-12 sm:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
            {/* Primary Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              AI Book Writing Software:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                Write Books 5x Faster
              </span>{' '}
              with Smart Editor
            </h1>

            {/* Sub-Headline */}
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
              The most advanced book writing software and AI editor for non-fiction authors. Handle research chaos, beat writer&apos;s block with AI assistance, and structure your ideas into a professional book—so you can focus on what you do best:{' '}
              <span className="font-semibold text-gray-800">sharing your knowledge with the world.</span>
            </p>

            {/* Inline CTA Form */}
            {!isSubmitted ? (
              <div className="space-y-4">
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 items-center justify-center max-w-lg mx-auto px-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none text-base sm:text-lg transition-colors w-full sm:w-auto text-gray-900 min-w-0"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold py-3 px-6 sm:px-8 rounded-xl hover:from-orange-600 hover:to-amber-600 transform hover:scale-105 transition-all duration-200 text-base sm:text-lg shadow-lg whitespace-nowrap w-full sm:w-auto"
                  >
                    Join the Waitlist
                  </button>
                </form>
                <p className="text-sm text-gray-500 px-2">
                  No spam, unsubscribe at any time
                </p>
              </div>
            ) : (
              <div className="text-center py-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">You&apos;re In!</h3>
                <p className="text-gray-600">
                  We&apos;ll notify you as soon as Bookify is ready.
                </p>
              </div>
            )}

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-gray-500 text-xs sm:text-sm px-2">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-orange-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="whitespace-nowrap">AI Book Editor</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="whitespace-nowrap">Professional Manuscript Editor</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-orange-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="whitespace-nowrap">Book Authoring Tools</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* All other sections with relative z-10 positioning */}
      <div className="relative z-10">

        {/* Problems Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Authors Need Professional Book Writing Software
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
                Even brilliant writers struggle without the right book authoring tools and manuscript editor
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              {/* Problem 1: Research Overwhelm */}
              <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-amber-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start space-x-3 sm:space-x-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-100 to-amber-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="text-xl sm:text-2xl animate-bounce">📚</div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                        Research Overwhelm
                      </h3>
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                        <div className="bg-gradient-to-r from-orange-500 to-amber-500 h-2 rounded-full animate-pulse" style={{width: '85%'}}></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    You have 47 browser tabs open, 12 different research documents, and still feel like you haven&apos;t found &ldquo;the perfect source&rdquo;
                  </p>
                </div>
              </div>

              {/* Problem 2: Writing Blocks */}
              <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-amber-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start space-x-3 sm:space-x-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-100 to-amber-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="text-xl sm:text-2xl">✍️</div>
                      <div className="absolute top-1 right-1 w-1 h-3 sm:h-4 bg-orange-500 animate-ping"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                        Writing Blocks
                      </h3>
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                        <div className="bg-gradient-to-r from-red-400 to-orange-400 h-2 rounded-full" style={{width: '15%'}}></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Staring at a blank page for hours. You know what you want to say, but somehow it never comes out right
                  </p>
                </div>
              </div>

              {/* Problem 3: Scattered Notes */}
              <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-amber-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start space-x-3 sm:space-x-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-100 to-amber-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative">
                      <div className="text-xl sm:text-2xl">📝</div>
                      <div className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full animate-bounce"></div>
                      <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                        Scattered Notes
                      </h3>
                      <div className="flex space-x-1 mb-3">
                        <div className="flex-1 bg-yellow-200 rounded-full h-2 animate-pulse"></div>
                        <div className="flex-1 bg-blue-200 rounded-full h-2 animate-pulse" style={{animationDelay: '0.2s'}}></div>
                        <div className="flex-1 bg-green-200 rounded-full h-2 animate-pulse" style={{animationDelay: '0.4s'}}></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Ideas spread across sticky notes, random documents, voice memos, and 3 different note-taking apps
                  </p>
                </div>
              </div>

              {/* Problem 4: Perfectionism Paralysis */}
              <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-amber-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start space-x-3 sm:space-x-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-100 to-amber-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="text-xl sm:text-2xl animate-spin" style={{animationDuration: '3s'}}>🔄</div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                        Perfectionism Paralysis
                      </h3>
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                        <div className="bg-gradient-to-r from-orange-500 to-amber-500 h-2 rounded-full animate-pulse" style={{width: '95%'}}></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Rewriting the same paragraph 47 times because &ldquo;it&apos;s not quite right yet&rdquo; and never moving forward
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* How It Works Section */}
      <div className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              How Our Book Writing Software Works
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              From research chaos to published book in four simple steps with our AI book editor
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Progress Line - Hidden on mobile */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-orange-200 via-amber-200 to-orange-300 transform -translate-y-1/2 rounded-full hidden lg:block"></div>
            
            {/* Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
              {/* Step 1 */}
              <div className="group relative">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 sm:p-6 border-2 border-orange-100 hover:border-orange-300">
                  {/* Step Number */}
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-lg">
                    1
                  </div>
                  
                  {/* Visual */}
                  <div className="h-24 sm:h-32 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden">
                    <div className="text-3xl sm:text-4xl mb-2">📁</div>
                    <div className="absolute top-2 left-2 w-4 sm:w-6 h-1 bg-orange-300 rounded animate-bounce"></div>
                    <div className="absolute top-3 sm:top-4 right-2 sm:right-3 w-3 sm:w-4 h-1 bg-orange-300 rounded animate-bounce" style={{animationDelay: '0.5s'}}></div>
                    <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 w-6 sm:w-8 h-1 bg-orange-300 rounded animate-bounce" style={{animationDelay: '1s'}}></div>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Dump Everything In</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3">
                    Import all your research—articles, videos, PDFs, notes. We organize it instantly.
                  </p>
                  <div className="text-xs sm:text-sm text-orange-600 font-semibold">
                    ⏱️ 5 minutes to set up your research library
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="group relative">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 sm:p-6 border-2 border-orange-100 hover:border-orange-300">
                  {/* Step Number */}
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-lg">
                    2
                  </div>
                  
                  {/* Visual */}
                  <div className="h-24 sm:h-32 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden">
                    <div className="text-3xl sm:text-4xl mb-2">🧠</div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 sm:w-16 h-12 sm:h-16 border-2 border-orange-300 rounded-full animate-pulse opacity-50"></div>
                      <div className="absolute w-8 sm:w-12 h-8 sm:h-12 border-2 border-amber-400 rounded-full animate-pulse opacity-75" style={{animationDelay: '0.5s'}}></div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">AI Maps Your Book</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3">
                    Tell us your book idea. Our AI creates a complete chapter outline tailored to your expertise.
                  </p>
                  <div className="text-xs sm:text-sm text-orange-600 font-semibold">
                    ⏱️ 10 minutes to get your entire book structure
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="group relative">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 sm:p-6 border-2 border-orange-100 hover:border-orange-300">
                  {/* Step Number */}
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-lg">
                    3
                  </div>
                  
                  {/* Visual */}
                  <div className="h-24 sm:h-32 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden">
                    <div className="text-3xl sm:text-4xl mb-2">✍️</div>
                    <div className="absolute top-2 left-3 sm:left-4 w-0.5 h-3 sm:h-4 bg-orange-400 animate-pulse"></div>
                    <div className="absolute top-4 sm:top-6 left-4 sm:left-6 w-6 sm:w-8 h-0.5 bg-orange-300 rounded"></div>
                    <div className="absolute top-6 sm:top-8 left-4 sm:left-6 w-4 sm:w-6 h-0.5 bg-orange-300 rounded"></div>
                    <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 text-xs text-orange-500 animate-pulse">AI suggests...</div>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Write With Super Powers</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3">
                    Write in our distraction-free editor. When you&apos;re stuck, AI gives you the perfect next paragraph.
                  </p>
                  <div className="text-xs sm:text-sm text-orange-600 font-semibold">
                    ⏱️ Write 3x faster with AI assistance
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="group relative">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 sm:p-6 border-2 border-orange-100 hover:border-orange-300">
                  {/* Step Number */}
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-lg">
                    4
                  </div>
                  
                  {/* Visual */}
                  <div className="h-24 sm:h-32 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden">
                    <div className="text-3xl sm:text-4xl mb-2 transform group-hover:scale-110 transition-transform duration-300">🚀</div>
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-400 rounded-full animate-ping"></div>
                    <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 w-2 h-2 sm:w-3 sm:h-3 bg-amber-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                    <div className="absolute top-4 sm:top-6 right-3 sm:right-4 w-1 h-1 bg-orange-500 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Export and Publish</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3">
                    One-click export to professional formats. Ready for Amazon, publishers, or sharing.
                  </p>
                  <div className="text-xs sm:text-sm text-orange-600 font-semibold">
                    ⏱️ From final draft to published in minutes
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 sm:mt-16">
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-6 sm:p-8 border-2 border-orange-200">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Writing Process?</h3>
              <p className="text-base sm:text-lg text-gray-600 mb-6 px-2">Join thousands of writers who&apos;ve already discovered the faster way to finish their books.</p>
              <button className="bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl hover:from-orange-600 hover:to-amber-600 transform hover:scale-105 transition-all duration-200 text-base sm:text-lg shadow-lg w-full sm:w-auto">
                Join the Waitlist 
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section - SEO Optimized */}
      <div className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Bookify as Your Book Writing Software?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Compare our AI book editor with traditional writing tools and manuscript software
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Benefit 1 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
              <div className="text-2xl sm:text-3xl mb-4">🤖</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">AI-Powered Writing Assistant</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Unlike basic word processors, our AI book editor provides intelligent suggestions, helps overcome writer&apos;s block, and maintains your unique voice throughout your manuscript.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
              <div className="text-2xl sm:text-3xl mb-4">📚</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Smart Research Management</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Organize sources, citations, and research notes automatically. Our book authoring software keeps everything connected to your writing, unlike scattered documents in traditional editors.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg sm:col-span-2 lg:col-span-1">
              <div className="text-2xl sm:text-3xl mb-4">📖</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Professional Book Formatting</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Export your finished manuscript in professional formats ready for publishers. No need for separate formatting software or complex layout tools.
              </p>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="mt-12 sm:mt-16">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-6 sm:mb-8">
              Bookify vs Traditional Writing Software
            </h3>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
                <div className="p-4 sm:p-6">
                  <h4 className="font-bold text-gray-900 mb-4">Traditional Word Processors</h4>
                  <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                    <li>❌ No AI assistance</li>
                    <li>❌ Manual research organization</li>
                    <li>❌ Basic formatting options</li>
                    <li>❌ No structure guidance</li>
                    <li>❌ Limited collaboration</li>
                  </ul>
                </div>
                <div className="p-4 sm:p-6 bg-orange-50">
                  <h4 className="font-bold text-orange-600 mb-4">Bookify Book Editor</h4>
                  <ul className="space-y-2 text-sm sm:text-base text-gray-700">
                    <li>✅ AI writing assistant</li>
                    <li>✅ Smart research management</li>
                    <li>✅ Professional book formatting</li>
                    <li>✅ Chapter structure templates</li>
                    <li>✅ Real-time collaboration</li>
                  </ul>
                </div>
                <div className="p-4 sm:p-6">
                  <h4 className="font-bold text-gray-900 mb-4">Other Writing Apps</h4>
                  <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                    <li>⚠️ Limited AI features</li>
                    <li>⚠️ Basic organization</li>
                    <li>⚠️ Generic templates</li>
                    <li>⚠️ Manual exports</li>
                    <li>⚠️ High learning curve</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions About Book Writing Software
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 px-2">
              Common questions about our AI-powered book editor and writing platform
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-3 sm:space-y-4">
            {/* Technical Questions */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">
              <details className="group">
                <summary className="flex items-center justify-between p-4 sm:p-6 cursor-pointer hover:bg-orange-50 transition-colors duration-200">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 pr-4">When will this book writing software be available?</h3>
                  <div className="ml-4 transform group-open:rotate-180 transition-transform duration-200 flex-shrink-0">
                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-sm sm:text-base text-gray-600 leading-relaxed">
                  We&apos;re launching our private beta in <span className="font-semibold text-orange-600">March 2025</span>. Beta users get <span className="font-semibold">3 months free</span> and help shape the product&apos;s future with direct input on features and improvements.
                </div>
              </details>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <details className="group">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-orange-50 transition-colors duration-200">
                  <h3 className="text-lg font-semibold text-gray-900">What file formats does Bookify support?</h3>
                  <div className="ml-4 transform group-open:rotate-180 transition-transform duration-200">
                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  Import from anywhere: <span className="font-semibold">web articles</span> (just paste the URL), <span className="font-semibold">PDFs</span>, <span className="font-semibold">Word docs</span>, <span className="font-semibold">YouTube videos</span> (we extract transcripts), <span className="font-semibold">images</span> (with text extraction), and direct note-taking. We automatically organize everything for you.
                </div>
              </details>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <details className="group">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-orange-50 transition-colors duration-200">
                  <h3 className="text-lg font-semibold text-gray-900">How does AI book writing software learn my writing style?</h3>
                  <div className="ml-4 transform group-open:rotate-180 transition-transform duration-200">
                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  Our AI learns from your existing content and adapts to your <span className="font-semibold">tone</span>, <span className="font-semibold">expertise level</span>, and <span className="font-semibold">preferred structure</span>. The more you write, the better it gets at helping you maintain consistency and flow throughout your book.
                </div>
              </details>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <details className="group">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-orange-50 transition-colors duration-200">
                  <h3 className="text-lg font-semibold text-gray-900">Can I export my book to different formats?</h3>
                  <div className="ml-4 transform group-open:rotate-180 transition-transform duration-200">
                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  Yes! Export to <span className="font-semibold">Word</span>, <span className="font-semibold">PDF</span>, <span className="font-semibold">EPUB</span>, or <span className="font-semibold">HTML</span>. We format everything professionally so you can upload directly to <span className="font-semibold text-orange-600">Amazon KDP</span>, send to publishers, or share digitally.
                </div>
              </details>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <details className="group">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-orange-50 transition-colors duration-200">
                  <h3 className="text-lg font-semibold text-gray-900">How is this different from other writing tools?</h3>
                  <div className="ml-4 transform group-open:rotate-180 transition-transform duration-200">
                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  Most tools focus on just writing or just research. Bookify is the <span className="font-semibold text-orange-600">only platform</span> that combines intelligent research management, AI writing assistance, and professional book structuring in one place. It&apos;s like having a research assistant, writing coach, and book designer all in one.
                </div>
              </details>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <details className="group">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-orange-50 transition-colors duration-200">
                  <h3 className="text-lg font-semibold text-gray-900">What happens to my content and research?</h3>
                  <div className="ml-4 transform group-open:rotate-180 transition-transform duration-200">
                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  <span className="font-semibold text-orange-600">Your content is yours, always.</span> We use bank-level security, never share your work, and you can export everything at any time. We&apos;re here to help you succeed, not own your ideas.
                </div>
              </details>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <details className="group">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-orange-50 transition-colors duration-200">
                  <h3 className="text-lg font-semibold text-gray-900">Do I need to be tech-savvy to use Bookify?</h3>
                  <div className="ml-4 transform group-open:rotate-180 transition-transform duration-200">
                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  Not at all. If you can use email, you can use Bookify. We&apos;ve designed every feature to be <span className="font-semibold">intuitive for writers</span>, not developers. Our interface is clean, simple, and focused on what matters: helping you write your book.
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="py-16 sm:py-20 bg-gradient-to-br from-orange-500 via-amber-500 to-orange-600 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-24 sm:w-32 h-24 sm:h-32 border border-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-16 sm:w-24 h-16 sm:h-24 border border-white rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-12 sm:w-16 h-12 sm:h-16 border border-white rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Header */}
          <div className="mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Ready to Write Your Book the Smart Way?
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto px-2">
              Join writers who are finishing books faster and with less stress
            </p>
          </div>

          {/* Signup Form */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 max-w-2xl mx-auto">
            <form className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-3 sm:px-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none text-base sm:text-lg text-gray-900 transition-colors"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-3 sm:px-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none text-base sm:text-lg text-gray-900 transition-colors"
                    required
                  />
                </div>
              </div>
              
              <div>
                <input
                  type="text"
                  placeholder="What's your book about? (optional)"
                  className="w-full px-3 sm:px-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none text-base sm:text-lg text-gray-900 transition-colors"
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="privacy"
                  className="mt-1 w-4 h-4 sm:w-5 sm:h-5 text-orange-500 border-2 border-gray-300 rounded focus:ring-orange-500 flex-shrink-0"
                  required
                />
                <label htmlFor="privacy" className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  I agree to receive updates about Bookify and understand I can unsubscribe at any time
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold py-4 sm:py-5 px-6 sm:px-8 rounded-xl hover:from-orange-600 hover:to-amber-600 transform hover:scale-105 transition-all duration-200 text-lg sm:text-xl shadow-lg"
              >
                Get Beta Access
              </button>
            </form>

            {/* Trust Elements */}
            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
              <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">Free for first 100 writers • No credit card • Cancel anytime</p>
              
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="text-base sm:text-lg">🔒</span>
                  <span className="whitespace-nowrap">Your ideas stay private</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="text-base sm:text-lg">✨</span>
                  <span className="whitespace-nowrap">3 months free beta access</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="text-base sm:text-lg">🚀</span>
                  <span className="whitespace-nowrap">Help shape the future of writing</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-8 sm:mt-12 text-center">
            <p className="text-orange-100 text-base sm:text-lg">
              Join <span className="font-bold text-white">500+ writers</span> already on the waitlist
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Logo and Tagline */}
            <div>
              <h3 className="text-2xl font-bold text-orange-400 mb-2">Bookify</h3>
              <p className="text-gray-400">Write Smarter, Publish Faster</p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#privacy" className="text-gray-400 hover:text-orange-400 transition-colors">Privacy Policy</a>
              <a href="#terms" className="text-gray-400 hover:text-orange-400 transition-colors">Terms of Service</a>
              <a href="#contact" className="text-gray-400 hover:text-orange-400 transition-colors">Contact</a>
            </div>

            {/* Contact and Social */}
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">hello@bookify.app</p>
              <div className="flex justify-center md:justify-end gap-4">
                <a href="#twitter" className="text-gray-400 hover:text-orange-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#linkedin" className="text-gray-400 hover:text-orange-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* SEO Content Column 1 */}
              <div>
                <h4 className="text-white font-semibold mb-4">Book Writing Software</h4>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>AI Book Editor</li>
                  <li>Manuscript Writing Tool</li>
                  <li>Book Authoring Platform</li>
                  <li>Digital Book Creator</li>
                </ul>
              </div>
              
              {/* SEO Content Column 2 */}
              <div>
                <h4 className="text-white font-semibold mb-4">Writing Tools</h4>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>Research Management</li>
                  <li>Chapter Structure Templates</li>
                  <li>Export to Publishers</li>
                  <li>Collaborative Writing</li>
                </ul>
              </div>
              
              {/* SEO Content Column 3 */}
              <div>
                <h4 className="text-white font-semibold mb-4">For Authors</h4>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>Non-Fiction Writers</li>
                  <li>Business Book Authors</li>
                  <li>Academic Writers</li>
                  <li>Self-Publishing Authors</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center border-t border-gray-800 pt-8">
              <p className="text-gray-500 text-sm mb-2">
                © 2025 Bookify - Professional Book Writing Software &amp; AI Editor. All rights reserved.
              </p>
              <p className="text-gray-600 text-xs">
                The best AI-powered book writing software for non-fiction authors. Write, edit, and publish your book faster.
              </p>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}
