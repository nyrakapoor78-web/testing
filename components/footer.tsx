import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">AI Enterprise ASM</h3>
            <p className="text-muted-foreground text-balance">
              Your trusted partner for all types of sublimation and printing services in Barpeta, Assam.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="tel:+918011908914" className="hover:text-primary transition-colors">
                  Call Now
                </a>
              </li>
              <li>
                <a href="mailto:ippbpt@gmail.com" className="hover:text-primary transition-colors">
                  Email Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Information</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-1 shrink-0" />
                <div>
                  <div>+91 8011908914</div>
                  <div>+91 9101426903</div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-1 shrink-0" />
                <a href="mailto:ippbpt@gmail.com" className="hover:text-primary transition-colors break-all">
                  ippbpt@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 shrink-0" />
                <address className="not-italic text-balance">
                  Dr. B.K. Road, Muslimpatty, Barpeta Town (Assam) - 781301
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AI Enterprise ASM. All rights reserved.</p>
          <p className="mt-2">Professional Printing Services | Barpeta, Assam</p>
        </div>
      </div>
    </footer>
  )
}
