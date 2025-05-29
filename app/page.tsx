"use client"

import { useState, useEffect } from "react"
import { Phone, Mail, Facebook, Sun, Moon, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function SpiritualConsultantWebsite() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const divineImages = [
    {
      name: "Ganesh Ji",
      src: "/gg.jpg",
      title: "श्री गणेश जी | Lord Ganesha",
      description: "विघ्न हर्ता और मंगल मूर्ति",
      details:
        "Lord Ganesha is the remover of obstacles and the patron of arts and sciences. He is invoked at the beginning of any new venture or important work.",
      benefits:
        "• Removes obstacles from life\n• Brings wisdom and prosperity\n• Grants success in new beginnings\n• Protects from negative energies",
      mantra: "ॐ गं गणपतये नमः",
    },
    {
      name: "Shiv Ji",
      src: "/shiva.jpg",
      title: "भगवान शिव | Lord Shiva",
      description: "महादेव और संहारकर्ता",
      details:
        "Lord Shiva is the destroyer and transformer within the Trimurti. He is the supreme being who creates, protects and transforms the universe.",
      benefits:
        "• Destroys negativity and evil\n• Grants spiritual enlightenment\n• Provides protection and strength\n• Brings peace and meditation",
      mantra: "ॐ नमः शिवाय",
    },
    {
      name: "Hanuman Ji",
      src: "/hanuman.jpg",
      title: "हनुमान जी | Lord Hanuman",
      description: "बजरंगबली और राम भक्त",
      details:
        "Lord Hanuman is the symbol of strength, courage, and devotion. He is the greatest devotee of Lord Rama and protector of devotees.",
      benefits:
        "• Provides immense strength and courage\n• Protects from evil spirits\n• Grants unwavering devotion\n• Removes fear and anxiety",
      mantra: "ॐ हं हनुमते नमः",
    },
    {
      name: "Lakshmi Maa",
      src: "/lakshmimaa.jpg",
      title: "माता लक्ष्मी | Goddess Lakshmi",
      description: "धन और समृद्धि की देवी",
      details:
        "Goddess Lakshmi is the deity of wealth, fortune, prosperity, beauty and abundance. She is the consort of Lord Vishnu.",
      benefits:
        "• Brings wealth and prosperity\n• Grants material abundance\n• Provides financial stability\n• Blesses with good fortune",
      mantra: "ॐ श्रीं महालक्ष्म्यै नमः",
    },
    {
      name: "Navgraha",
      src: "/nav.jpg",
      title: "नवग्रह | Nine Planets",
      description: "नौ ग्रहों के देवता",
      details:
        "The Navgraha are the nine celestial bodies that influence human life according to Vedic astrology. They govern various aspects of life and destiny.",
      benefits:
        "• Balances planetary influences\n• Reduces malefic effects\n• Enhances positive planetary energy\n• Brings cosmic harmony",
      mantra: "ॐ नवग्रह देवताभ्यो नमः",
    },
  ]

  const services = [
    {
      title: "विवाह मिलान",
      subtitle: "Marriage Matching",
      description: "Kundli matching aur vivah yog ki jaanch",
    },
    {
      title: "ग्रह दोष निवारण",
      subtitle: "Graha Dosh Remedies",
      description: "Mangal, Shani aur anya grah dosh ka samadhan",
    },
    {
      title: "संतान बाधा समाधान",
      subtitle: "Childbirth Solutions",
      description: "Santaan prapti mein aane wali badhaaon ka nivaran",
    },
    {
      title: "वास्तु परामर्श",
      subtitle: "Vastu Consultation",
      description: "Ghar aur vyavasaya ke liye vastu sudhaar",
    },
    {
      title: "व्यापार वृद्धि हवन",
      subtitle: "Business Growth Rituals",
      description: "Vyavasaya mein unnati ke liye vishesh havan",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % divineImages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div
      className={`min-h-screen transition-all duration-1000 ${
        isDarkMode
          ? "bg-gradient-to-b from-indigo-900 via-purple-900 to-black text-white"
          : "bg-gradient-to-b from-orange-50 via-yellow-50 to-orange-100 text-gray-800"
      }`}
    >
      {/* Sacred Mantras Header */}
      <header className="relative overflow-hidden py-6">
        <div
          className={`absolute inset-0 ${
            isDarkMode
              ? "bg-gradient-to-r from-purple-800/20 to-indigo-800/20"
              : "bg-gradient-to-r from-orange-200/50 to-yellow-200/50"
          }`}
        />

        {/* Floating Diyas */}
        <div className="absolute top-4 left-4 animate-pulse">
          <div className={`text-3xl ${isDarkMode ? "text-yellow-400" : "text-orange-500"}`}>🪔</div>
        </div>
        <div className="absolute top-4 right-4 animate-pulse" style={{ animationDelay: "1s" }}>
          <div className={`text-3xl ${isDarkMode ? "text-yellow-400" : "text-orange-500"}`}>🪔</div>
        </div>
        <div className="absolute bottom-4 left-1/4 animate-pulse" style={{ animationDelay: "2s" }}>
          <div className={`text-2xl ${isDarkMode ? "text-yellow-400" : "text-orange-500"}`}>🪔</div>
        </div>
        <div className="absolute bottom-4 right-1/4 animate-pulse" style={{ animationDelay: "0.5s" }}>
          <div className={`text-2xl ${isDarkMode ? "text-yellow-400" : "text-orange-500"}`}>🪔</div>
        </div>

        <div className="relative z-10 text-center">
          <div className="animate-pulse">
            <h1
              className={`text-2xl md:text-4xl font-bold mb-2 ${isDarkMode ? "text-yellow-300" : "text-orange-700"}`}
              style={{ fontFamily: "serif" }}
            >
              ॐ गणेशाय नमः | श्री श्याम देवाय नमः | श्री हनुमते नमः
            </h1>
          </div>
          <div
            className={`h-1 w-32 mx-auto rounded-full ${
              isDarkMode
                ? "bg-gradient-to-r from-yellow-400 to-orange-400"
                : "bg-gradient-to-r from-orange-400 to-red-400"
            } animate-pulse`}
          />
        </div>

        {/* Theme Toggle */}
        <Button
          onClick={toggleTheme}
          className={`fixed top-4 right-4 z-50 rounded-full p-3 ${
            isDarkMode ? "bg-yellow-500 hover:bg-yellow-400 text-black" : "bg-orange-500 hover:bg-orange-400 text-white"
          } transition-all duration-500 transform hover:scale-110`}
        >
          {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </header>

      {/* Identity Section */}
      <section className="container mx-auto px-4 py-8">
        <Card
          className={`${
            isDarkMode ? "bg-purple-900/50 border-yellow-400/30" : "bg-white/80 border-orange-300"
          } backdrop-blur-sm shadow-2xl`}
        >
          <CardContent className="p-8 text-center">
            <div className="mb-6">
              <div className="relative group mb-4">
                {/* Rotating border for profile */}
                <div
                  className={`absolute inset-0 w-32 h-32 mx-auto rounded-full ${
                    isDarkMode
                      ? "bg-gradient-to-r from-yellow-400 to-orange-500"
                      : "bg-gradient-to-r from-orange-400 to-red-500"
                  } animate-spin`}
                  style={{ animationDuration: "6s" }}
                ></div>

                {/* Profile image container */}
                <div
                  className={`relative w-28 h-28 mx-auto m-2 rounded-full ${isDarkMode ? "bg-purple-900" : "bg-white"} flex items-center justify-center overflow-hidden group-hover:scale-110 transition-all duration-500`}
                >
                  <img
                    src="/pp.png"
                    alt="P. Mohan Kumar Bhardwaj"
                    className="w-full h-full object-cover rounded-full"
                  />

                  {/* Hover overlay */}
                  <div
                    className={`absolute inset-0 ${
                      isDarkMode ? "bg-purple-900/80" : "bg-orange-900/80"
                    } flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full`}
                  >
                    <div className="text-2xl text-yellow-300 animate-pulse">ॐ</div>
                  </div>
                </div>
              </div>
              <h2
                className={`text-3xl md:text-4xl font-bold mb-2 ${isDarkMode ? "text-yellow-300" : "text-orange-700"}`}
              >
                Pt. Mohan Kumar Sharma (Bhardwaj)
              </h2>
              <p className={`text-xl mb-4 ${isDarkMode ? "text-purple-200" : "text-orange-600"}`}>
                Vastu Ratan And Jyotish Bhushan | Hindu Spiritual Consultant
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <Phone className={`h-5 w-5 ${isDarkMode ? "text-yellow-400" : "text-orange-500"}`} />
                <span>9873675166</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className={`h-5 w-5 ${isDarkMode ? "text-yellow-400" : "text-orange-500"}`} />
                <span>mjpkendra@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Facebook className={`h-5 w-5 ${isDarkMode ? "text-yellow-400" : "text-orange-500"}`} />
                <span>mohankumar.sharma2</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Enhanced Profile Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h3
            className={`text-3xl md:text-4xl font-bold text-center mb-16 ${
              isDarkMode ? "text-yellow-300" : "text-orange-700"
            }`}
          >
            🙏 Meet Your Spiritual Guide 🙏
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image Section */}
            <div className="relative group">
              {/* Decorative Diyas around profile */}
              <div className="absolute -top-4 -left-4 animate-pulse">
                <div className={`text-2xl ${isDarkMode ? "text-yellow-400" : "text-orange-500"}`}>🪔</div>
              </div>
              <div className="absolute -top-4 -right-4 animate-pulse" style={{ animationDelay: "1s" }}>
                <div className={`text-2xl ${isDarkMode ? "text-yellow-400" : "text-orange-500"}`}>🪔</div>
              </div>
              <div className="absolute -bottom-4 -left-4 animate-pulse" style={{ animationDelay: "2s" }}>
                <div className={`text-2xl ${isDarkMode ? "text-yellow-400" : "text-orange-500"}`}>🪔</div>
              </div>
              <div className="absolute -bottom-4 -right-4 animate-pulse" style={{ animationDelay: "0.5s" }}>
                <div className={`text-2xl ${isDarkMode ? "text-yellow-400" : "text-orange-500"}`}>🪔</div>
              </div>

              {/* Main Profile Container */}
              <div className="relative">
                {/* Rotating Border */}
                <div
                  className={`absolute inset-0 rounded-full ${
                    isDarkMode
                      ? "bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500"
                      : "bg-gradient-to-r from-orange-400 via-red-500 to-pink-500"
                  } animate-spin`}
                  style={{ animationDuration: "8s" }}
                ></div>

                {/* Inner Border */}
                <div className={`absolute inset-2 rounded-full ${isDarkMode ? "bg-purple-900" : "bg-white"}`}></div>

                {/* Profile Image */}
                <div className="relative m-4">
                  <img
                    src="/profilepic.png"
                    alt="P. Mohan Kumar Bhardwaj"
                    className="w-full h-80 object-cover rounded-full transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl"
                  />

                  {/* Overlay with OM symbol on hover */}
                  <div
                    className={`absolute inset-0 rounded-full ${
                      isDarkMode ? "bg-purple-900/80" : "bg-orange-900/80"
                    } flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500`}
                  >
                    <div className="text-center text-white">
                      <div className="text-4xl mb-2 animate-pulse">🙏</div>
                      <h4 className="text-xl font-bold mb-2 text-yellow-300">
                        {divineImages[currentImageIndex].title}
                      </h4>
                      <p className="text-sm mb-3 text-yellow-200">{divineImages[currentImageIndex].description}</p>
                      <p className="text-xs leading-relaxed">{divineImages[currentImageIndex].details}</p>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-1/4 -right-8 animate-bounce" style={{ animationDelay: "0.5s" }}>
                  <div className={`text-3xl ${isDarkMode ? "text-yellow-400" : "text-orange-500"}`}>🕉️</div>
                </div>
                <div className="absolute bottom-1/4 -left-8 animate-bounce" style={{ animationDelay: "1.5s" }}>
                  <div className={`text-3xl ${isDarkMode ? "text-yellow-400" : "text-orange-500"}`}>🔱</div>
                </div>
              </div>
            </div>

            {/* Profile Information */}
            <div className="space-y-6">
              <Card
                className={`${
                  isDarkMode ? "bg-purple-900/50 border-yellow-400/30" : "bg-white/90 border-orange-300"
                } backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 group`}
              >
                <CardContent className="p-6">
                  <h4
                    className={`text-2xl font-bold mb-4 ${
                      isDarkMode ? "text-yellow-300" : "text-orange-700"
                    } group-hover:scale-105 transition-transform duration-300`}
                  >
                    🌟 Spiritual Credentials
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-2 h-2 rounded-full ${isDarkMode ? "bg-yellow-400" : "bg-orange-500"} animate-pulse`}
                      ></div>
                      <p className={`${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                        <strong>Experience:</strong> 25+ Years in Vedic Astrology
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-2 h-2 rounded-full ${isDarkMode ? "bg-yellow-400" : "bg-orange-500"} animate-pulse`}
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                      <p className={`${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                        <strong>Specialization:</strong> Kundli Analysis & Remedies
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-2 h-2 rounded-full ${isDarkMode ? "bg-yellow-400" : "bg-orange-500"} animate-pulse`}
                        style={{ animationDelay: "1s" }}
                      ></div>
                      <p className={`${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                        <strong>Clients Served:</strong> 10,000+ Satisfied Families
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-2 h-2 rounded-full ${isDarkMode ? "bg-yellow-400" : "bg-orange-500"} animate-pulse`}
                        style={{ animationDelay: "1.5s" }}
                      ></div>
                      <p className={`${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                        <strong>Recognition:</strong> Certified Jyotish Bhushan & Vastu Ratan
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card
                className={`${
                  isDarkMode ? "bg-purple-900/50 border-yellow-400/30" : "bg-white/90 border-orange-300"
                } backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 group`}
              >
                <CardContent className="p-6">
                  <h4
                    className={`text-2xl font-bold mb-4 ${
                      isDarkMode ? "text-yellow-300" : "text-orange-700"
                    } group-hover:scale-105 transition-transform duration-300`}
                  >
                    🎯 Mission & Vision
                  </h4>
                  <p className={`${isDarkMode ? "text-gray-200" : "text-gray-700"} leading-relaxed`}>
                    "To guide souls towards their destined path through the divine science of astrology, bringing peace,
                    prosperity, and spiritual awakening to every life I touch. My mission is to bridge the ancient
                    wisdom of our Vedas with modern life challenges."
                  </p>

                  {/* Interactive Quote */}
                  <div
                    className={`mt-4 p-4 rounded-lg ${isDarkMode ? "bg-purple-800/30" : "bg-orange-50"} border-l-4 ${isDarkMode ? "border-yellow-400" : "border-orange-500"}`}
                  >
                    <p className={`italic ${isDarkMode ? "text-yellow-200" : "text-orange-600"} text-center`}>
                      "जो व्यक्ति अपने कर्म और ग्रहों की स्थिति को समझता है, वही जीवन में सच्ची सफलता पाता है।"
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Interactive Stats */}
              <div className="grid grid-cols-2 gap-4">
                <Card
                  className={`${
                    isDarkMode ? "bg-purple-800/50 border-yellow-400/30" : "bg-white/90 border-orange-300"
                  } backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer group`}
                >
                  <CardContent className="p-4 text-center">
                    <div
                      className={`text-3xl font-bold ${isDarkMode ? "text-yellow-300" : "text-orange-700"} group-hover:animate-pulse`}
                    >
                      25+
                    </div>
                    <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>Years Experience</p>
                  </CardContent>
                </Card>

                <Card
                  className={`${
                    isDarkMode ? "bg-purple-800/50 border-yellow-400/30" : "bg-white/90 border-orange-300"
                  } backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer group`}
                >
                  <CardContent className="p-4 text-center">
                    <div
                      className={`text-3xl font-bold ${isDarkMode ? "text-yellow-300" : "text-orange-700"} group-hover:animate-pulse`}
                    >
                      10K+
                    </div>
                    <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>Happy Clients</p>
                  </CardContent>
                </Card>
              </div>

              {/* Call to Action */}
              <div className="text-center pt-4">
                <a href="https://wa.me/919873675166" target="_blank" rel="noopener noreferrer">
                  <Button
                    className={`${
                      isDarkMode
                        ? "bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black"
                        : "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-white"
                    } px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-2xl`}
                  >
                    🙏 Book Your Consultation 🙏
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-12">
        <h3
          className={`text-3xl md:text-4xl font-bold text-center mb-12 ${
            isDarkMode ? "text-yellow-300" : "text-orange-700"
          }`}
        >
          सेवाएं | Services
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`${
                isDarkMode
                  ? "bg-purple-800/50 border-yellow-400/30 hover:bg-purple-700/50"
                  : "bg-white/90 border-orange-300 hover:bg-orange-50"
              } backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer group`}
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`w-16 h-16 mx-auto rounded-full ${
                    isDarkMode
                      ? "bg-gradient-to-br from-yellow-400 to-orange-500"
                      : "bg-gradient-to-br from-orange-400 to-red-500"
                  } flex items-center justify-center text-white text-2xl font-bold mb-4 group-hover:animate-pulse`}
                >
                  ॐ
                </div>
                <h4 className={`text-xl font-bold mb-2 ${isDarkMode ? "text-yellow-300" : "text-orange-700"}`}>
                  {service.title}
                </h4>
                <p className={`text-lg mb-2 ${isDarkMode ? "text-purple-200" : "text-orange-600"}`}>
                  {service.subtitle}
                </p>
                <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Divine Gallery */}
      <section className="container mx-auto px-4 py-12">
        <h3
          className={`text-3xl md:text-4xl font-bold text-center mb-12 ${
            isDarkMode ? "text-yellow-300" : "text-orange-700"
          }`}
        >
          दिव्य गैलरी | Divine Gallery
        </h3>

        <div className="relative max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Image Section */}
            <div className="relative group">
              <div className="overflow-hidden rounded-lg shadow-2xl relative">
                <img
                  src={divineImages[currentImageIndex].src || "/placeholder.svg"}
                  alt={divineImages[currentImageIndex].name}
                  className="w-full h-80 object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Floating Diyas around image */}
                <div className="absolute -top-2 -left-2 animate-pulse">
                  <div className={`text-2xl ${isDarkMode ? "text-yellow-400" : "text-orange-500"}`}>🪔</div>
                </div>
                <div className="absolute -top-2 -right-2 animate-pulse" style={{ animationDelay: "1s" }}>
                  <div className={`text-2xl ${isDarkMode ? "text-yellow-400" : "text-orange-500"}`}>🪔</div>
                </div>
                <div className="absolute -bottom-2 -left-2 animate-pulse" style={{ animationDelay: "2s" }}>
                  <div className={`text-2xl ${isDarkMode ? "text-yellow-400" : "text-orange-500"}`}>🪔</div>
                </div>
                <div className="absolute -bottom-2 -right-2 animate-pulse" style={{ animationDelay: "0.5s" }}>
                  <div className={`text-2xl ${isDarkMode ? "text-yellow-400" : "text-orange-500"}`}>🪔</div>
                </div>

                {/* Hover Overlay with Information */}
                <div
                  className={`absolute inset-0 ${isDarkMode ? "bg-purple-900/95" : "bg-orange-900/95"} opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center p-4`}
                >
                  <div className="text-center text-white">
                    <div className="text-4xl mb-2 animate-pulse">🙏</div>
                    <h4 className="text-xl font-bold mb-2 text-yellow-300">{divineImages[currentImageIndex].title}</h4>
                    <p className="text-sm mb-3 text-yellow-200">{divineImages[currentImageIndex].description}</p>
                    <p className="text-xs leading-relaxed">{divineImages[currentImageIndex].details}</p>
                  </div>
                </div>
              </div>

              <p
                className={`text-center mt-4 text-xl font-semibold ${isDarkMode ? "text-yellow-300" : "text-orange-700"}`}
              >
                {divineImages[currentImageIndex].name}
              </p>
            </div>

            {/* Information Panel */}
            <div className="space-y-4">
              <Card
                className={`${isDarkMode ? "bg-purple-900/50 border-yellow-400/30" : "bg-white/90 border-orange-300"} backdrop-blur-sm shadow-xl transition-all duration-500`}
              >
                <CardContent className="p-6">
                  <h4 className={`text-2xl font-bold mb-3 ${isDarkMode ? "text-yellow-300" : "text-orange-700"}`}>
                    {divineImages[currentImageIndex].title}
                  </h4>
                  <p className={`text-lg mb-4 ${isDarkMode ? "text-purple-200" : "text-orange-600"}`}>
                    {divineImages[currentImageIndex].description}
                  </p>
                  <p className={`text-sm leading-relaxed mb-4 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                    {divineImages[currentImageIndex].details}
                  </p>

                  {/* Benefits Section */}
                  <div className={`p-4 rounded-lg ${isDarkMode ? "bg-purple-800/30" : "bg-orange-50"} mb-4`}>
                    <h5 className={`font-bold mb-2 ${isDarkMode ? "text-yellow-300" : "text-orange-700"}`}>
                      🌟 Benefits | लाभ:
                    </h5>
                    <div className="text-sm space-y-1">
                      {divineImages[currentImageIndex].benefits.split("\n").map((benefit, index) => (
                        <p key={index} className={`${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                          {benefit}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Mantra Section */}
                  <div className={`p-4 rounded-lg ${isDarkMode ? "bg-purple-800/50" : "bg-orange-100"} text-center`}>
                    <h5 className={`font-bold mb-2 ${isDarkMode ? "text-yellow-300" : "text-orange-700"}`}>
                      🕉️ Sacred Mantra | पवित्र मंत्र:
                    </h5>
                    <p
                      className={`text-lg font-semibold ${isDarkMode ? "text-yellow-200" : "text-orange-600"}`}
                      style={{ fontFamily: "serif" }}
                    >
                      {divineImages[currentImageIndex].mantra}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {divineImages.map((deity, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`group relative transition-all duration-300 ${
                  index === currentImageIndex ? "scale-125" : "hover:scale-110"
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? isDarkMode
                        ? "bg-yellow-400 shadow-lg"
                        : "bg-orange-500 shadow-lg"
                      : isDarkMode
                        ? "bg-purple-600 hover:bg-purple-500"
                        : "bg-orange-200 hover:bg-orange-300"
                  }`}
                />

                {/* Tooltip on hover */}
                <div
                  className={`absolute bottom-6 left-1/2 transform -translate-x-1/2 ${isDarkMode ? "bg-purple-800" : "bg-gray-800"} text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none`}
                >
                  {deity.name}
                </div>
              </button>
            ))}
          </div>

          {/* Interactive Thumbnails */}
          <div className="grid grid-cols-5 gap-4 mt-8">
            {divineImages.map((deity, index) => (
              <div
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`relative group cursor-pointer transition-all duration-300 ${
                  index === currentImageIndex ? "scale-105" : "hover:scale-110"
                }`}
              >
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={deity.src || "/placeholder.svg"}
                    alt={deity.name}
                    className="w-full h-20 object-cover transition-transform duration-300 group-hover:scale-110"
                  />

                  {/* Hover Information */}
                  <div
                    className={`absolute inset-0 ${isDarkMode ? "bg-purple-900/90" : "bg-orange-900/90"} opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center`}
                  >
                    <div className="text-center text-white p-2">
                      <div className="text-lg mb-1">🙏</div>
                      <p className="text-xs font-semibold text-yellow-300">{deity.name}</p>
                      <p className="text-xs text-yellow-200 mt-1">{deity.description}</p>
                    </div>
                  </div>
                </div>

                {/* Active indicator */}
                {index === currentImageIndex && (
                  <div
                    className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full ${isDarkMode ? "bg-yellow-400" : "bg-orange-500"} animate-pulse`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-12">
        <Card
          className={`${
            isDarkMode ? "bg-purple-900/50 border-yellow-400/30" : "bg-white/80 border-orange-300"
          } backdrop-blur-sm shadow-2xl`}
        >
          <CardContent className="p-8">
            <h3
              className={`text-3xl md:text-4xl font-bold text-center mb-8 ${
                isDarkMode ? "text-yellow-300" : "text-orange-700"
              }`}
            >
              Why Choose Pt. Mohan Kumar Sharma?
            </h3>
            <div className="text-center mb-8">
              <p className={`text-xl font-semibold mb-6 ${isDarkMode ? "text-yellow-200" : "text-orange-600"}`}>
                Because he is one of the most trusted and experienced astrologers in India.
              </p>
              <p className={`text-lg leading-relaxed mb-6 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                Get personalized astrological guidance rooted in Vedic wisdom. Let your life's journey be guided by
                divine insight and time-tested remedies offered by Pt. Mohan Kumar Sharma—a name that
                stands for accuracy, compassion, and spiritual integrity.
              </p>
              <p className={`text-lg leading-relaxed mb-6 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                With decades of experience, Pt. Mohan Kumar Bhardwaj believes that just as we care for our physical
                health, our spiritual well-being requires equal attention. According to him, the alignment of our
                thoughts, actions, and planetary positions can dramatically influence our destiny. Astrology, in his
                view, is not mere prediction—but a divine science for correcting life's course and achieving peace,
                prosperity, and purpose.
              </p>
              <p className={`text-lg leading-relaxed mb-8 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                His consultations blend traditional Vedic astrology, vastu shastra, numerology, and practical remedies
                like pujas, mantra siddhi, and tantras—customized to each person's unique chart and life situation.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <h4
                className={`text-2xl font-bold mb-6 text-center ${isDarkMode ? "text-yellow-300" : "text-orange-700"}`}
              >
                Clients across India and abroad trust him for:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className={`p-4 rounded-lg ${isDarkMode ? "bg-purple-800/30" : "bg-orange-50"}`}>
                  <p className={`${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                    • Honest, ethical, and compassionate guidance
                  </p>
                </div>
                <div className={`p-4 rounded-lg ${isDarkMode ? "bg-purple-800/30" : "bg-orange-50"}`}>
                  <p className={`${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                    • Simple yet effective spiritual solutions
                  </p>
                </div>
                <div className={`p-4 rounded-lg ${isDarkMode ? "bg-purple-800/30" : "bg-orange-50"} md:col-span-2`}>
                  <p className={`${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                    • Deep understanding of karmic influences on health, marriage, business, and family life
                  </p>
                </div>
              </div>
              <p
                className={`text-lg leading-relaxed text-center italic ${
                  isDarkMode ? "text-yellow-200" : "text-orange-600"
                }`}
              >
                If you are facing challenges in your career, relationships, finances, or health, allow Pt. Mohan Kumar
                Sharma to light your path with cosmic clarity and divine blessings.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Feature Highlight Section */}
      <section className="container mx-auto px-4 py-12">
        <h3
          className={`text-3xl md:text-4xl font-bold text-center mb-12 ${
            isDarkMode ? "text-yellow-300" : "text-orange-700"
          }`}
        >
          ✨ Here's what you can expect:
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center group">
            <div
              className={`w-20 h-20 mx-auto rounded-full ${
                isDarkMode
                  ? "bg-gradient-to-br from-yellow-400 to-orange-500"
                  : "bg-gradient-to-br from-orange-400 to-red-500"
              } flex items-center justify-center text-white text-3xl mb-4 group-hover:animate-pulse transition-all duration-300 group-hover:scale-110`}
            >
              🔱
            </div>
            <h4 className={`text-xl font-bold mb-2 ${isDarkMode ? "text-yellow-300" : "text-orange-700"}`}>
              Powerful Remedy
            </h4>
            <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              Time-tested spiritual solutions for life's challenges
            </p>
          </div>

          <div className="text-center group">
            <div
              className={`w-20 h-20 mx-auto rounded-full ${
                isDarkMode
                  ? "bg-gradient-to-br from-yellow-400 to-orange-500"
                  : "bg-gradient-to-br from-orange-400 to-red-500"
              } flex items-center justify-center text-white text-3xl mb-4 group-hover:animate-pulse transition-all duration-300 group-hover:scale-110`}
            >
              🪔
            </div>
            <h4 className={`text-xl font-bold mb-2 ${isDarkMode ? "text-yellow-300" : "text-orange-700"}`}>
              Personalised Guidance
            </h4>
            <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              Customized solutions based on your unique chart
            </p>
          </div>

          <div className="text-center group">
            <div
              className={`w-20 h-20 mx-auto rounded-full ${
                isDarkMode
                  ? "bg-gradient-to-br from-yellow-400 to-orange-500"
                  : "bg-gradient-to-br from-orange-400 to-red-500"
              } flex items-center justify-center text-white text-3xl mb-4 group-hover:animate-pulse transition-all duration-300 group-hover:scale-110`}
            >
              🛡️
            </div>
            <h4 className={`text-xl font-bold mb-2 ${isDarkMode ? "text-yellow-300" : "text-orange-700"}`}>
              Trusted & Reliable Solutions
            </h4>
            <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              Decades of experience with proven results
            </p>
          </div>
        </div>
      </section>

      {/* Specialities Section */}
      <section className="container mx-auto px-4 py-12">
        <h3
          className={`text-3xl md:text-4xl font-bold text-center mb-12 ${
            isDarkMode ? "text-yellow-300" : "text-orange-700"
          }`}
        >
          🌟 विशेषताएं | Specialities
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <Card
            className={`${
              isDarkMode
                ? "bg-purple-800/50 border-yellow-400/30 hover:bg-purple-700/50"
                : "bg-white/90 border-orange-300 hover:bg-orange-50"
            } backdrop-blur-sm transition-all duration-500 hover:scale-105 cursor-pointer group`}
          >
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-3 group-hover:animate-bounce">⭐</div>
              <h4 className={`font-bold ${isDarkMode ? "text-yellow-300" : "text-orange-700"}`}>Astrology</h4>
            </CardContent>
          </Card>

          <Card
            className={`${
              isDarkMode
                ? "bg-purple-800/50 border-yellow-400/30 hover:bg-purple-700/50"
                : "bg-white/90 border-orange-300 hover:bg-orange-50"
            } backdrop-blur-sm transition-all duration-500 hover:scale-105 cursor-pointer group`}
          >
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-3 group-hover:animate-bounce">🔢</div>
              <h4 className={`font-bold ${isDarkMode ? "text-yellow-300" : "text-orange-700"}`}>Numerology</h4>
            </CardContent>
          </Card>

          <Card
            className={`${
              isDarkMode
                ? "bg-purple-800/50 border-yellow-400/30 hover:bg-purple-700/50"
                : "bg-white/90 border-orange-300 hover:bg-orange-50"
            } backdrop-blur-sm transition-all duration-500 hover:scale-105 cursor-pointer group`}
          >
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-3 group-hover:animate-bounce">🏠</div>
              <h4 className={`font-bold ${isDarkMode ? "text-yellow-300" : "text-orange-700"}`}>Vastu Consultation</h4>
            </CardContent>
          </Card>

          <Card
            className={`${
              isDarkMode
                ? "bg-purple-800/50 border-yellow-400/30 hover:bg-purple-700/50"
                : "bg-white/90 border-orange-300 hover:bg-orange-50"
            } backdrop-blur-sm transition-all duration-500 hover:scale-105 cursor-pointer group`}
          >
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-3 group-hover:animate-bounce">✋</div>
              <h4 className={`font-bold ${isDarkMode ? "text-yellow-300" : "text-orange-700"}`}>Palmistry</h4>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-12">
        <h3
          className={`text-3xl md:text-4xl font-bold text-center mb-12 ${
            isDarkMode ? "text-yellow-300" : "text-orange-700"
          }`}
        >
          संपर्क करें | Contact Info
        </h3>

        <div className="grid grid-cols-1 max-w-2xl mx-auto">
          {/* Contact Information */}
          <Card
            className={`${
              isDarkMode ? "bg-purple-900/50 border-yellow-400/30" : "bg-white/80 border-orange-300"
            } backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-500 group`}
          >
            <CardContent className="p-8 relative overflow-hidden">
              {/* Floating Diyas in Contact Info */}
              <div className="absolute top-4 right-4 animate-pulse">
                <div className={`text-2xl ${isDarkMode ? "text-yellow-400" : "text-orange-500"}`}>🪔</div>
              </div>
              <div className="absolute bottom-4 left-4 animate-pulse" style={{ animationDelay: "1s" }}>
                <div className={`text-2xl ${isDarkMode ? "text-yellow-400" : "text-orange-500"}`}>🪔</div>
              </div>

              <h4
                className={`text-2xl font-bold mb-6 text-center ${isDarkMode ? "text-yellow-300" : "text-orange-700"} group-hover:scale-105 transition-transform duration-300`}
              >
                📞 Contact Information
              </h4>

              {/* Animated Diya Center */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className={`w-16 h-16 ${isDarkMode ? "text-yellow-400" : "text-orange-500"} animate-pulse`}>
                    🪔
                  </div>
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                    <div
                      className={`w-3 h-6 ${isDarkMode ? "bg-yellow-400" : "bg-orange-400"} rounded-full animate-bounce opacity-80`}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div
                  className={`flex items-center gap-4 p-4 rounded-lg ${isDarkMode ? "bg-purple-800/30 hover:bg-purple-700/30" : "bg-orange-50 hover:bg-orange-100"} transition-all duration-300 group/item hover:scale-105`}
                >
                  <div
                    className={`p-3 rounded-full ${isDarkMode ? "bg-yellow-400/20" : "bg-orange-500/20"} group-hover/item:animate-pulse`}
                  >
                    <Phone className={`h-6 w-6 ${isDarkMode ? "text-yellow-400" : "text-orange-500"}`} />
                  </div>
                  <div>
                    <p className={`font-semibold ${isDarkMode ? "text-yellow-300" : "text-orange-700"}`}>Call:</p>
                    <p className="text-lg font-medium">+91 9873675166</p>
                    <p className="text-sm opacity-75">Available 24/7 for consultations</p>
                  </div>
                </div>

                <div
                  className={`flex items-center gap-4 p-4 rounded-lg ${isDarkMode ? "bg-purple-800/30 hover:bg-purple-700/30" : "bg-orange-50 hover:bg-orange-100"} transition-all duration-300 group/item hover:scale-105`}
                >
                  <div
                    className={`p-3 rounded-full ${isDarkMode ? "bg-yellow-400/20" : "bg-orange-500/20"} group-hover/item:animate-pulse`}
                  >
                    <Mail className={`h-6 w-6 ${isDarkMode ? "text-yellow-400" : "text-orange-500"}`} />
                  </div>
                  <div>
                    <p className={`font-semibold ${isDarkMode ? "text-yellow-300" : "text-orange-700"}`}>Email:</p>
                    <p className="text-lg font-medium">mjpkendra@gmail.com</p>
                    <p className="text-sm opacity-75">Send your birth details for analysis</p>
                  </div>
                </div>

                <div
                  className={`flex items-center gap-4 p-4 rounded-lg ${isDarkMode ? "bg-purple-800/30 hover:bg-purple-700/30" : "bg-orange-50 hover:bg-orange-100"} transition-all duration-300 group/item hover:scale-105`}
                >
                  <div
                    className={`p-3 rounded-full ${isDarkMode ? "bg-yellow-400/20" : "bg-orange-500/20"} group-hover/item:animate-pulse`}
                  >
                    <div className={`h-6 w-6 ${isDarkMode ? "text-yellow-400" : "text-orange-500"} text-center`}>
                      📍
                    </div>
                  </div>
                  <div>
                    <p className={`font-semibold ${isDarkMode ? "text-yellow-300" : "text-orange-700"}`}>Location:</p>
                    <p className="text-lg font-medium">New Delhi, India</p>
                    <p className="text-sm opacity-75">Personal consultations available</p>
                  </div>
                </div>
              </div>

              {/* Social Links with enhanced design */}
              <div className="mt-8 pt-6 border-t border-gray-300">
                <h5
                  className={`text-xl font-bold mb-6 text-center ${isDarkMode ? "text-yellow-300" : "text-orange-700"}`}
                >
                  🌐 Connect With Us
                </h5>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href="https://wa.me/919873675166"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-3 px-6 py-4 rounded-lg ${
                      isDarkMode ? "bg-green-600 hover:bg-green-500" : "bg-green-500 hover:bg-green-400"
                    } text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg group/social`}
                  >
                    <MessageCircle className="h-5 w-5 group-hover/social:animate-bounce" />
                    <span className="font-semibold">WhatsApp Chat</span>
                    <div className="text-xs opacity-75">Instant Response</div>
                  </a>
                  <a
                    href="https://www.facebook.com/mohankumar.sharma2?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-3 px-6 py-4 rounded-lg ${
                      isDarkMode ? "bg-blue-600 hover:bg-blue-500" : "bg-blue-500 hover:bg-blue-400"
                    } text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg group/social`}
                  >
                    <Facebook className="h-5 w-5 group-hover/social:animate-bounce" />
                    <span className="font-semibold">Facebook Page</span>
                    <div className="text-xs opacity-75">Follow Updates</div>
                  </a>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className={`text-center p-3 rounded-lg ${isDarkMode ? "bg-purple-800/20" : "bg-orange-100/50"}`}>
                  <div className={`text-2xl font-bold ${isDarkMode ? "text-yellow-300" : "text-orange-700"}`}>24/7</div>
                  <div className="text-sm opacity-75">Available</div>
                </div>
                <div className={`text-center p-3 rounded-lg ${isDarkMode ? "bg-purple-800/20" : "bg-orange-100/50"}`}>
                  <div className={`text-2xl font-bold ${isDarkMode ? "text-yellow-300" : "text-orange-700"}`}>25+</div>
                  <div className="text-sm opacity-75">Years Exp.</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div
              className={`text-center p-6 rounded-lg ${isDarkMode ? "bg-purple-800/30" : "bg-orange-50"} hover:scale-105 transition-all duration-300`}
            >
              <div className="text-3xl mb-2">🔒</div>
              <h5 className={`font-bold ${isDarkMode ? "text-yellow-300" : "text-orange-700"}`}>Confidential</h5>
              <p className="text-sm opacity-75">100% Privacy Guaranteed</p>
            </div>
            <div
              className={`text-center p-6 rounded-lg ${isDarkMode ? "bg-purple-800/30" : "bg-orange-50"} hover:scale-105 transition-all duration-300`}
            >
              <div className="text-3xl mb-2">⚡</div>
              <h5 className={`font-bold ${isDarkMode ? "text-yellow-300" : "text-orange-700"}`}>Quick Response</h5>
              <p className="text-sm opacity-75">Reply within 2 hours</p>
            </div>
            <div
              className={`text-center p-6 rounded-lg ${isDarkMode ? "bg-purple-800/30" : "bg-orange-50"} hover:scale-105 transition-all duration-300`}
            >
              <div className="text-3xl mb-2">🎯</div>
              <h5 className={`font-bold ${isDarkMode ? "text-yellow-300" : "text-orange-700"}`}>Accurate</h5>
              <p className="text-sm opacity-75">Precise Predictions</p>
            </div>
            <div
              className={`text-center p-6 rounded-lg ${isDarkMode ? "bg-purple-800/30" : "bg-orange-50"} hover:scale-105 transition-all duration-300`}
            >
              <div className="text-3xl mb-2">💝</div>
              <h5 className={`font-bold ${isDarkMode ? "text-yellow-300" : "text-orange-700"}`}>Affordable</h5>
              <p className="text-sm opacity-75">Reasonable Pricing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919873675166"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
      >
        <Button className="bg-green-500 hover:bg-green-400 text-white rounded-full p-4 shadow-2xl animate-bounce hover:animate-pulse transition-all duration-300 group-hover:scale-110">
          <MessageCircle className="h-6 w-6" />
        </Button>
        {/* Tooltip */}
        <div className="absolute bottom-16 right-0 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Chat on WhatsApp
        </div>
      </a>
    </div>
  )
}
