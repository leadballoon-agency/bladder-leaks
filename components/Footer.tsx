export default function Footer() {
  return (
    <footer className="bg-mauve-500 text-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 sm:gap-10">
          <div>
            <img
              src="/images/clarity-Logo.png"
              alt="Clarity Cosmetics"
              className="h-12 mb-5 sm:mb-6"
            />
            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              CQC registered nurse-led aesthetic clinic in Bedford. Specialising in Morpheus8 RF microneedling and regenerative treatments.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-5 sm:mb-6 font-display text-base sm:text-lg">Contact</h3>
            <ul className="space-y-2.5 text-white/80 text-sm sm:text-base">
              <li>
                <a href="tel:+447414154007" className="hover:text-white transition-colors inline-block py-1 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  07414 154007
                </a>
              </li>
              <li>
                <a href="https://wa.me/447414154007" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-block py-1 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
              </li>
              <li className="pt-2">
                Conway Crescent<br />
                Bedford<br />
                MK41 7BW
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-5 sm:mb-6 font-display text-base sm:text-lg">Quick Links</h3>
            <ul className="space-y-2.5 text-white/80 text-sm sm:text-base">
              <li><a href="#about" className="hover:text-white transition-colors inline-block py-1">About Claire Emmerson</a></li>
              <li><a href="#treatments" className="hover:text-white transition-colors inline-block py-1">Morpheus8 Treatments</a></li>
              <li><a href="#results" className="hover:text-white transition-colors inline-block py-1">Results</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors inline-block py-1">FAQ</a></li>
              <li><a href="https://claritycosmetics.co.uk" className="hover:text-white transition-colors inline-block py-1" target="_blank" rel="noopener noreferrer">Main Website</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-10 sm:mt-12 pt-8 sm:pt-10 text-center text-white/80 text-sm sm:text-base">
          <p>&copy; {new Date().getFullYear()} Clarity Cosmetics. All rights reserved. | CQC Registered</p>
        </div>
      </div>
    </footer>
  )
}