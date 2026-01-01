"use client"

import { Button } from "@/components/ui/button"
import { Phone, ArrowRight, Check } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800" />
      <div className="absolute inset-0 opacity-20">
        <Image
          src="https://www.aienterpriseasm.in/uploads/1764665338-Siding%20Image%20copy.jpg"
          alt="AI Enterprise ASM Background"
          fill
          className="object-cover"
          priority
          quality={75}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/50 to-transparent" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4 py-20 mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
              <span className="text-sm font-medium text-blue-100">Professional Printing Services Since 2020</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-center mb-6 text-balance">
            <span className="text-white">AI Enterprise</span>
            <br />
            <span className="bg-gradient-to-r from-blue-200 via-blue-100 to-white bg-clip-text text-transparent">
              ASM Printing
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 text-center max-w-3xl mx-auto mb-8 text-balance leading-relaxed">
            All Types of Sublimation & Professional Printing Solutions for Your Business
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10 text-white">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <Check className="w-5 h-5 text-blue-300" />
              <span className="text-sm font-medium">Custom Sizes & Finishing</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <Check className="w-5 h-5 text-blue-300" />
              <span className="text-sm font-medium">Eco-Friendly Inks</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <Check className="w-5 h-5 text-blue-300" />
              <span className="text-sm font-medium">Design Support Available</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              asChild
              className="text-lg px-8 h-14 bg-white text-blue-900 hover:bg-blue-50 shadow-2xl hover:shadow-blue-500/50 transition-all group"
            >
              <a href="#services">
                View Our Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-lg px-8 h-14 bg-transparent border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
            >
              <a href="tel:+919101426903">
                <Phone className="mr-2 h-5 w-5" />
                Call: 9101426903
              </a>
            </Button>
          </div>

          <div className="text-center mt-10">
            <p className="text-blue-200 text-sm">Contact: Mr. Babidul Islam (For ID Active)</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
