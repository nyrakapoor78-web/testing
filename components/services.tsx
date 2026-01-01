"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { OrderDialog } from "./order-dialog"

const services = [
  {
    id: 1,
    title: "Gamosa Printing All Size",
    description: "Traditional Assamese gamosa printing in all sizes",
    image: "https://www.aienterpriseasm.in/uploads/1766374163-1000307147.png",
  },
  {
    id: 2,
    title: "RIBBON PRINT",
    description: "Multicolor lanyard and ribbon printing",
    image: "https://www.aienterpriseasm.in/uploads/1766162118-multicolor-lanyard.jpg",
  },
  {
    id: 3,
    title: "Sublimation Mug 12 OZ",
    description: "Print Size 20cm X 8.5cm",
    image: "https://www.aienterpriseasm.in/uploads/1765694299-Untitled-1%20copy.jpg",
  },
  {
    id: 4,
    title: "Print Digital Stamp",
    description: "Pre Ink Stamp",
    image: "https://www.aienterpriseasm.in/uploads/1765522223-Untitled-6%20copy.jpg",
  },
  {
    id: 5,
    title: "STAR BACKLIT FLEX",
    description: "Glow Sign Board Backlit",
    image: "https://www.aienterpriseasm.in/uploads/1765472176-Untitled-2.jpg",
  },
  {
    id: 6,
    title: "One Way Vision",
    description: "Glass Sticker",
    image: "https://www.aienterpriseasm.in/uploads/1765387833-images%20(1).jpg",
  },
  {
    id: 7,
    title: "Vinyl",
    description: "Sticker",
    image: "https://www.aienterpriseasm.in/uploads/1765387619-images.jpg",
  },
  {
    id: 8,
    title: "Cloth Banner",
    description: "Only 3 Feet Available",
    image: "https://www.aienterpriseasm.in/uploads/1765387382-product-jpeg-1000x1000.jpg",
  },
  {
    id: 9,
    title: "Star Flex (white)",
    description: "300gsm to 480gsm",
    image: "https://www.aienterpriseasm.in/uploads/1765374103-Untitled-1%20copy.jpg",
  },
  {
    id: 10,
    title: "Normal Black Back",
    description: "220gsm to 260gsm",
    image: "https://www.aienterpriseasm.in/uploads/1765373736-Untitled-1%20copy.jpg",
  },
  {
    id: 11,
    title: "Normal Flex",
    description: "200gsm to 240gsm",
    image: "https://www.aienterpriseasm.in/uploads/1765263609-Untitled-2%20copy.jpg222.jpg",
  },
]

export function Services() {
  const [orderDialogOpen, setOrderDialogOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<{
    title: string
    description: string
    image: string
  } | null>(null)

  const handleOrderClick = (service: { title: string; description: string; image: string }) => {
    setSelectedProduct(service)
    setOrderDialogOpen(true)
  }

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Complete Printing Solutions</h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            From traditional gamosa printing to modern sublimation - we offer comprehensive printing services for all
            your business and personal needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card
              key={service.id}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-blue-200"
            >
              <CardHeader className="p-0">
                <div className="relative w-full bg-muted overflow-hidden" style={{ aspectRatio: "16/9" }}>
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-lg mb-2 text-balance group-hover:text-blue-600 transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-balance">{service.description}</CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button
                  onClick={() => handleOrderClick(service)}
                  variant="outline"
                  className="w-full group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-blue-700 group-hover:text-white group-hover:border-transparent transition-all shadow-sm group-hover:shadow-lg bg-transparent"
                >
                  Order Now
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 p-8 bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-2xl border border-blue-200">
          <p className="text-lg text-gray-700 mb-4 font-medium">Need help choosing the right service?</p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl"
          >
            Contact Our Experts
          </Button>
        </div>
      </div>
      {selectedProduct && (
        <OrderDialog open={orderDialogOpen} onOpenChange={setOrderDialogOpen} product={selectedProduct} />
      )}
    </section>
  )
}
