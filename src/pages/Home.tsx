import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Target, MessageSquare, Calendar, Star, BookOpen, Zap, Users, Brain, TrendingUp, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { FloatingShapes } from '@/components/animations/FloatingShapes';
import { Link } from 'react-router-dom';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    { number: "10K+", label: "Active Mentors", icon: Users },
    { number: "25K+", label: "Successful Matches", icon: Target },
    { number: "98%", label: "Success Rate", icon: TrendingUp },
    { number: "4.9", label: "Average Rating", icon: Star },
  ];

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Matching",
      description: "Our advanced AI analyzes personalities, goals, and expertise to create perfect mentor-mentee pairs.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: MessageSquare,
      title: "Real-time Chat",
      description: "Seamless communication with built-in video calls, file sharing, and progress tracking.",
      gradient: "from-pink-500 to-orange-500"
    },
    {
      icon: Target,
      title: "Goal Tracking",
      description: "Set, track, and achieve your goals with personalized roadmaps and milestone celebrations.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Calendar,
      title: "Session Scheduling",
      description: "Smart scheduling system that adapts to time zones and availability preferences.",
      gradient: "from-purple-500 to-blue-500"
    },
    {
      icon: Star,
      title: "Review System",
      description: "Transparent feedback system ensuring quality and continuous improvement.",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: BookOpen,
      title: "Resource Library",
      description: "Access curated learning materials, templates, and industry insights.",
      gradient: "from-blue-500 to-purple-500"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Engineer",
      avatar: "SC",
      content: "The AI matching was incredible. My mentor understood exactly what I needed to advance my career in tech.",
      rating: 5
    },
    {
      name: "Marcus Johnson",
      role: "Startup Founder",
      avatar: "MJ",
      content: "As a mentor, this platform helps me connect with passionate individuals and make a real impact.",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      role: "Marketing Manager",
      avatar: "ER",
      content: "The goal tracking feature kept me accountable. I achieved more in 6 months than I had in years.",
      rating: 5
    }
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <FloatingShapes mousePosition={mousePosition} />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border border-glass-border"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Powered by Advanced AI</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Where{' '}
              <span className="gradient-text">Mentors</span>
              {' '}&{' '}
              <span className="gradient-text-secondary">Mentees</span>
              <br />
              Connect Through AI
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Experience the future of mentorship with intelligent matching, 
              seamless communication, and measurable growth. Your journey to success starts here.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/register">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="btn-hero group">
                    Find Your Mentor
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </Link>
              
              <Link to="/register">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="btn-secondary">
                    Become a Mentor
                  </Button>
                </motion.div>
              </Link>
            </div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="glass-card text-center space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <stat.icon className="w-8 h-8 mx-auto text-primary mb-2" />
                  <div className="text-2xl font-bold gradient-text">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Powerful Features for{' '}
              <span className="gradient-text">Modern Mentorship</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our platform combines cutting-edge technology with human connection 
              to create the ultimate mentorship experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <Card className="glass-card card-hover h-full">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} p-3 mb-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get started in minutes with our simple, AI-powered process
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Create Your Profile",
                description: "Tell us about your goals, skills, and preferences. Our AI analyzes your profile to understand your unique needs.",
                icon: Users
              },
              {
                step: "02",
                title: "Get Matched",
                description: "Our advanced algorithm finds perfect mentor-mentee pairs based on compatibility, goals, and availability.",
                icon: Zap
              },
              {
                step: "03",
                title: "Start Growing",
                description: "Begin your mentorship journey with structured sessions, goal tracking, and continuous support.",
                icon: Award
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                className="text-center relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="glass-card">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto mb-6 flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary text-secondary-foreground text-sm font-bold flex items-center justify-center">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                
                {index < 2 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <div className="w-full h-0.5 bg-gradient-primary opacity-30"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our <span className="gradient-text">Community</span> Says
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real stories from mentors and mentees who've transformed their careers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="glass-card h-full">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your{' '}
              <span className="gradient-text">Career Journey?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who are already accelerating their growth 
              through AI-powered mentorship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="btn-hero">
                    Start Your Journey
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
              </Link>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="btn-ghost">
                  Watch Demo
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}