import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Globe,
  MapPin,
  Target,
  Award,
  TrendingUp,
  BookOpen,
  Code,
  Zap,
  Camera,
  Calendar,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import SEO from "@/components/SEO";

export default function Index() {
  // Hero slider images
  const heroBackgroundImages = [
    "https://res.cloudinary.com/dwzebmtzq/image/upload/v1758303221/stella-19_fwcz4q_rmfafm.jpg",
    "https://res.cloudinary.com/dwzebmtzq/image/upload/v1758303198/stella-43_oif8j6_fhcd2k.jpg",
    "https://res.cloudinary.com/dwzebmtzq/image/upload/v1758303196/stella-55_ijhhqs_hxwkq9.jpg",
    "https://res.cloudinary.com/dwzebmtzq/image/upload/v1758303195/stella-23_gdinja_h036hu.jpg",
    "https://res.cloudinary.com/dwzebmtzq/image/upload/v1758303193/1755027563788_zpnz3i_qc642u.jpg",
  ];

  const [api, setApi] = useState<CarouselApi | null>(null);
  const autoplayRef = useRef<number | null>(null);

  // Preload images to prevent flicker when slides change
  useEffect(() => {
    let loaded = 0;
    const handleDone = () => {
      loaded++;
    };
    heroBackgroundImages.forEach((src) => {
      const img = new Image();
      img.onload = handleDone;
      img.onerror = handleDone;
      img.src = src;
    });
  }, []);

  // Autoplay with pause/resume controls
  const startAutoplay = () => {
    if (autoplayRef.current) window.clearInterval(autoplayRef.current);
    if (!api) return;
    autoplayRef.current = window.setInterval(() => {
      api.scrollNext();
    }, 5000);
  };
  const stopAutoplay = () => {
    if (autoplayRef.current) {
      window.clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };

  useEffect(() => {
    if (!api) return;
    startAutoplay();
    return stopAutoplay;
  }, [api]);

  const achievements = [
    {
      icon: Users,
      number: "500+",
      label: "Individuals Onboarded",
      description: "Through comprehensive free training programs",
    },
    {
      icon: Globe,
      number: "Multiple",
      label: "Global Partnerships",
      description: "With leading blockchain networks worldwide",
    },
    {
      icon: TrendingUp,
      number: "Ongoing",
      label: "IRL Meetups",
      description: "Building strong community connections",
    },
  ];

  const features = [
    {
      icon: BookOpen,
      title: "Education First",
      description:
        "Comprehensive blockchain and Web3 training programs designed for beginners",
    },
    {
      icon: Code,
      title: "Hands-on Development",
      description:
        "Practical coding experience with real-world blockchain projects",
    },
    {
      icon: Users,
      title: "Community Building",
      description:
        "Foster inclusive communities of Web3 builders across Nigeria",
    },
    {
      icon: Target,
      title: "Sustainable Impact",
      description:
        "Create long-term contributors to global blockchain ecosystems",
    },
  ];

  // const eventPhotos = [
  //   {
  //     id: 1,
  //     title: "Base Batch Developers Workshop ",
  //     description: "50+ developers learning and deploying on base",
  //     image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop&crop=center",
  //     date: "August 2024"
  //   },
  //   {
  //     id: 2,
  //     title: "DeFi Training Session",
  //     description: "Hands-on DeFi development workshop",
  //     image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop&crop=center",
  //     date: "August 2025"
  //   },
  //   {
  //     id: 3,
  //     title: "Eth campus Tour Awka",
  //     description: "Building connections across Nigeria",
  //     image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&h=400&fit=crop&crop=center",
  //     date: "January 2024"
  //   },
  //   {
  //     id: 4,
  //     title: "Tech Impact:Campus Initiatives",
  //     description: "Intensive training and aweraeness on different career paths on chain",
  //     image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=400&fit=crop&crop=center",
  //     date: "December 2023"
  //   },
  //   {
  //     id: 5,
  //     title: "Women in Web3 Event",
  //     description: "Empowering female blockchain contibutors",
  //     image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop&crop=center",
  //     date: "November 2023"
  //   },
  //   {
  //     id: 6,
  //     title: " self-Hack Finals",
  //     description: "24-hour tech innovation challenge",
  //     image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop&crop=center",
  //     date: "October 2023"
  //   }
  // ];

  const eventPhotos = [
    {
      id: 1,
      title: "ETH@10yr Anniversary",
      description: "Hands-on Refi and smart contract development workshop",
      image:
        "https://res.cloudinary.com/dwzebmtzq/image/upload/v1754772075/1754771842832_tf8pob.jpg",
      date: "September 2025",
    },
    {
      id: 2,
      title: "Base Batch Developers Workshop",
      description: "50+ developers learning and deplpoying their on base",
      image:
        "https://res.cloudinary.com/dwzebmtzq/image/upload/v1754771459/fec8vt_yfqol0.jpg",
      date: "May 2024",
    },
    {
      id: 3,
      title: "ETH Campus Tour Awka",
      description: "creating awareness and onbording student onchain",
      image:
        "https://res.cloudinary.com/dwzebmtzq/image/upload/v1754771459/IMG-20240316-WA0044_kjd5wp.jpg",
      date: "November 2023",
    },
    {
      id: 4,
      title: "Tech Impact",
      description: "Intensive onboarding program",
      image:
        "https://res.cloudinary.com/dwzebmtzq/image/upload/v1754771459/IMG-20240324-WA0036_rowbsd.jpg",
      date: "December 2023",
    },
    {
      id: 5,
      title: " Tech Impact",
      description: "Empowering student Contributors",
      image:
        "https://res.cloudinary.com/dwzebmtzq/image/upload/v1754771459/IMG-20240324-WA0026_vwbj83.jpg",
      date: "December 2023",
    },
    {
      id: 6,
      title: "Self-Hackathon Finals",
      description: "24hour personal innovative challenge",
      image:
        "https://res.cloudinary.com/dwzebmtzq/image/upload/v1754771459/IMG-20240324-WA0033_v4t9cm.jpg",
      date: "November 2023",
    },
  ];

  const partners = [
    {
      name: "Unizik Blockchain Lab",
      logo: "https://res.cloudinary.com/dwzebmtzq/image/upload/v1754945210/UBL_LOGO_3_avk45u.png",
      type: "Web3 and Blockchain community",
    },
    {
      name: "Greenpill Nigeria",
      logo: "https://res.cloudinary.com/dwzebmtzq/image/upload/v1754945209/GP9ja_Logo_qbn1d8.png",
      type: "Public goods platform",
    },
    {
      name: "FiTech",
      logo: "https://res.cloudinary.com/dwzebmtzq/image/upload/v1754945433/FiTech_logo_ckco2x.png",
      type: "Web3 community",
    },
    {
      name: "NaWe School",
      logo: "https://res.cloudinary.com/dwzebmtzq/image/upload/v1754946856/IMG-20250811-WA0046_mij03h.jpg",
      type: "Coding School",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Empowering Africa's Web3 Future - HFUTUREHUB"
        description="HFUTUREHUB is a psycho-blocktech educational platform onboarding and guilding individuals into sustainable Web3 careers Path. Join 500+ graduates in blockchain education, Web3 development,Project mangement, Traders and community building."
        keywords="blockchain education Nigeria, Web3 training Africa, cryptocurrency courses, smart contract development, DeFi education, blockchain jobs Nigeria, Web3 careers Africa, HFUTUREHUB, blockchain community Nigeria"
        url="https://hfuturehub.com"
        image="https://res.cloudinary.com/dwzebmtzq/image/upload/v1755030251/1755027563788_zpnz3i.jpg"
      />
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg flex items-center justify-center">
                <img src="https://res.cloudinary.com/dwzebmtzq/image/upload/v1754947289/IMG-20250811-WA0047-removebg-preview_chrb8l.png" />
              </div>
              <Link to="/">
                <span className="text-xl font-bold bg-brand-gradient bg-clip-text text-transparent">
                  HFUTUREHUB
                </span>
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#mission"
                className="text-sm font-medium hover:text-brand-purple transition-colors"
              >
                Mission
              </a>
              <Link
                to="/programs"
                className="text-sm font-medium hover:text-brand-purple transition-colors"
              >
                Our programs
              </Link>
              <a
                href="#impact"
                className="text-sm font-medium hover:text-brand-purple transition-colors"
              >
                Impact
              </a>
              <Button className="bg-brand-gradient hover:brightness-95 text-white">
                Support Us
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Slider Background (no opacity effects) */}
        <Carousel
          className="absolute inset-0 h-full"
          opts={{ loop: true, align: "center", duration: 30 }}
          setApi={(c) => setApi(c)}
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
        >
          <CarouselContent className="h-full">
            {heroBackgroundImages.map((image, index) => (
              <CarouselItem
                key={index}
                className="h-[520px] sm:h-[560px] md:h-[600px] lg:h-[640px] p-0"
              >
                <img
                  src={image}
                  alt={`Hero background ${index + 1}`}
                  className="w-full h-full object-cover select-none"
                  draggable={false}
                  decoding="async"
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : "auto"}
                  style={{
                    transform: "translateZ(0)",
                    backfaceVisibility: "hidden",
                  }}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-900 border-none shadow" />
          <CarouselNext className="right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-900 border-none shadow" />
        </Carousel>

        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-black/70 via-black/40 to-transparent"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-6 leading-tight">
              Empowering Africa's{" "}
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Web3 Future One Block At a Time
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              HFUTUREHUB is an edutech platform simplifying blockchain and Web3
              complexities into sustainable Web3 career paths.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-brand-gradient hover:brightness-95 text-white text-lg px-8"
              >
                <Link to="/programs/blockchain-education">
                  Our Program
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-brand-purple text-brand-purple hover:bg-brand-purple/10 text-lg px-8"
              >
                <Link to="/events">Our events</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-brand-purple">Achievements</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Measurable impact in building Nigeria's blockchain ecosystem
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const backgroundImages = [
                "https://res.cloudinary.com/dwzebmtzq/image/upload/v1754943571/20250811_205737_j1m9cz.jpg",
                "https://res.cloudinary.com/dwzebmtzq/image/upload/v1754943570/20250811_204802_s5jd06.jpg",
                "https://res.cloudinary.com/dwzebmtzq/image/upload/v1754943570/20250811_204554_tgzhvv.jpg",
              ];

              return (
                <Card
                  key={index}
                  className="group text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  {/* Image Section - Takes 2/3 of card height */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={backgroundImages[index]}
                      alt={`${achievement.label} background`}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  </div>

                  {/* Text Section - Takes 1/3 of card height */}
                  <CardContent className="p-6">
                    <div className="text-2xl md:text-3xl font-bold text-brand-purple mb-2">
                      {achievement.number}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {achievement.label}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="text-brand-green">Mission</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                To onboard, create, design and develop models that train and
                incubate local Web3 builders from underrepresented regions to
                become sustainable contributors to blockchain ecosystems.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We believe in democratizing access to blockchain technology and
                creating pathways for African talent to participate meaningfully
                in the global Web3 economy.
              </p>
              <Button className="bg-brand-green hover:brightness-95 text-white">
                Read Our Full Story
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow"
                >
                  <feature.icon className="h-8 w-8 text-brand-purple mb-4" />
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* IRL Events Gallery Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-brand-purple">Community Events</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Bringing the Web3 community together through hands-on workshops,
              training sessions, and networking events across Nigeria
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {eventPhotos.map((event, index) => (
              <Card
                key={event.id}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-brand-purple border-0">
                      <Calendar className="w-3 h-3 mr-1" />
                      {event.date}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg mb-1">
                      {event.title}
                    </h3>
                    <p className="text-white/90 text-sm">{event.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button className="bg-brand-purple hover:bg-brand-purple-dark text-white">
              <Camera className="mr-2 h-4 w-4" />
              View All Event Photos
            </Button>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-brand-green">Global Partners</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Collaborating with leading blockchain networks and organizations
              to provide world-class education and opportunities
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="group flex justify-center items-center"
              >
                <div>
                  <Card className="p-3 w-32 h-32 flex items-center justify-center hover:shadow-lg transition-shadow border-2 hover:border-brand-green/20">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-20 h-20 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://via.placeholder.com/100x60/8B5CF6/FFFFFF?text=${partner.name.split(" ")[0]}`;
                      }}
                    />
                  </Card>
                  <p className="text-xs text-center mt-2 text-muted-foreground group-hover:text-brand-green transition-colors">
                    {partner.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Want to partner with us in building Africa's Web3 future?
            </p>
            <Button
              variant="outline"
              className="border-brand-green text-brand-green hover:bg-brand-green/5"
            >
              <Heart className="mr-2 h-4 w-4" />
              Become a Partner
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-16 lg:py-24 bg-brand-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Driving Sustainable Impact
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Through strategic partnerships, comprehensive education, and
              community building, we're creating a sustainable pipeline of
              African Web3 talent ready to contribute to the global blockchain
              ecosystem.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <Award className="h-12 w-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-lg font-semibold mb-2">Recognition</h3>
                <p className="opacity-80">
                  Building credibility through measurable outcomes
                </p>
              </div>
              <div className="text-center">
                <Globe className="h-12 w-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-lg font-semibold mb-2">Global Reach</h3>
                <p className="opacity-80">
                  Connecting local talent to international opportunities
                </p>
              </div>
              <div className="text-center">
                <TrendingUp className="h-12 w-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-lg font-semibold mb-2">Growth</h3>
                <p className="opacity-80">
                  Scaling impact across underrepresented regions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Support Our Mission?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join us in building a more inclusive and diverse Web3 ecosystem.
              Your support enables us to continue our impactful work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-brand-gradient hover:brightness-95 text-white"
              >
                Become a Partner
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-brand-purple text-brand-purple hover:bg-brand-purple/5"
              >
                Grant Opportunities
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded-lg flex items-center justify-center">
                  <img
                    src="https://res.cloudinary.com/dwzebmtzq/image/upload/v1754947289/IMG-20250811-WA0047-removebg-preview_chrb8l.png"
                    alt="hfuturehub logo"
                    className="h-8 w-8 object-contain"
                  />
                </div>
                <span className="text-xl font-bold bg-brand-gradient bg-clip-text text-transparent">
                  hfuturehub
                </span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Empowering underrepresented communities through blockchain
                education and sustainable Web3 career development.
              </p>
              <p className="text-sm text-muted-foreground">
                📍 Based in Nigeria, Impacting Globally
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Programs</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    to="/programs/blockchain-education"
                    className="hover:text-brand-purple transition-colors"
                  >
                    Blockchain Education
                  </Link>
                </li>
                <li>
                  <Link
                    to="/programs/web3-development"
                    className="hover:text-brand-purple transition-colors"
                  >
                    Web3 Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/programs/community-building"
                    className="hover:text-brand-purple transition-colors"
                  >
                    Community Building
                  </Link>
                </li>
                <li>
                  <Link
                    to="/programs/irl-meetups"
                    className="hover:text-brand-purple transition-colors"
                  >
                    IRL Meetups
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Partnership Inquiries</li>
                <li>Grant Applications</li>
                <li>Community Support</li>
                <li>Media Kit</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 hfuturehub. Building the future of Web3 in Africa.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
