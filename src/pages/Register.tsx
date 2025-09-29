import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, User, Mail, Lock, UserCheck, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

export default function Register() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState<'mentor' | 'mentee' | null>(null);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    bio: '',
    skills: '',
    interests: '',
    experience: 'beginner'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 3) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Handle registration logic here
      console.log('Registration data:', { ...formData, role: selectedRole });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const steps = [
    { number: 1, title: "Account Info", description: "Basic information" },
    { number: 2, title: "Role Selection", description: "Choose your path" },
    { number: 3, title: "Profile Setup", description: "Complete your profile" }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-2xl"
      >
        <Card className="glass-card">
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              className="w-16 h-16 bg-gradient-primary rounded-2xl mx-auto mb-4 flex items-center justify-center"
              whileHover={{ scale: 1.05, rotate: 5 }}
            >
              <UserCheck className="w-8 h-8 text-white" />
            </motion.div>
            <h1 className="text-3xl font-bold gradient-text mb-2">Join MentorAI</h1>
            <p className="text-muted-foreground">
              Start your mentorship journey today
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
                      currentStep >= step.number
                        ? 'bg-gradient-primary text-white'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {step.number}
                  </div>
                  <div className="ml-3 hidden md:block">
                    <div className="text-sm font-medium">{step.title}</div>
                    <div className="text-xs text-muted-foreground">{step.description}</div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="mx-4 h-0.5 w-8 md:w-16 bg-muted" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Step 1: Basic Info */}
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="pl-10 glass border-glass-border focus:border-primary"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="pl-10 glass border-glass-border focus:border-primary"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Create a strong password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="pl-10 pr-10 glass border-glass-border focus:border-primary"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 2: Role Selection */}
            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">Choose Your Path</h3>
                  <p className="text-muted-foreground">Select your primary role on the platform</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div
                    className={`p-6 rounded-2xl border-2 cursor-pointer transition-all ${
                      selectedRole === 'mentee'
                        ? 'border-primary bg-primary/5 scale-105'
                        : 'border-glass-border hover:border-primary/50'
                    }`}
                    onClick={() => setSelectedRole('mentee')}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <User className="w-12 h-12 text-primary mb-4" />
                    <h4 className="text-lg font-semibold mb-2">I'm a Mentee</h4>
                    <p className="text-muted-foreground text-sm">
                      Looking for guidance, advice, and support to achieve my goals and advance my career.
                    </p>
                  </motion.div>

                  <motion.div
                    className={`p-6 rounded-2xl border-2 cursor-pointer transition-all ${
                      selectedRole === 'mentor'
                        ? 'border-secondary bg-secondary/5 scale-105'
                        : 'border-glass-border hover:border-secondary/50'
                    }`}
                    onClick={() => setSelectedRole('mentor')}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Users className="w-12 h-12 text-secondary mb-4" />
                    <h4 className="text-lg font-semibold mb-2">I'm a Mentor</h4>
                    <p className="text-muted-foreground text-sm">
                      Ready to share my experience and help others grow in their personal and professional journey.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Profile Setup */}
            {currentStep === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    name="bio"
                    placeholder="Tell us about yourself and your goals..."
                    value={formData.bio}
                    onChange={handleInputChange}
                    className="glass border-glass-border focus:border-primary resize-none"
                    rows={4}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="skills">Skills</Label>
                    <Input
                      id="skills"
                      name="skills"
                      placeholder="e.g., JavaScript, Marketing, Design"
                      value={formData.skills}
                      onChange={handleInputChange}
                      className="glass border-glass-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interests">Interests</Label>
                    <Input
                      id="interests"
                      name="interests"
                      placeholder="e.g., Tech, Entrepreneurship, Art"
                      value={formData.interests}
                      onChange={handleInputChange}
                      className="glass border-glass-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Experience Level</Label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 rounded-lg glass border border-glass-border focus:border-primary bg-background text-foreground"
                  >
                    <option value="beginner">Beginner (0-2 years)</option>
                    <option value="intermediate">Intermediate (2-5 years)</option>
                    <option value="advanced">Advanced (5-10 years)</option>
                    <option value="expert">Expert (10+ years)</option>
                  </select>
                </div>
              </motion.div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6">
              {currentStep > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setCurrentStep(prev => prev - 1)}
                  className="btn-ghost"
                >
                  Back
                </Button>
              )}
              
              <motion.div 
                className="ml-auto"
                whileHover={{ scale: 1.02 }} 
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  type="submit" 
                  className={currentStep === 3 ? "btn-hero" : "btn-secondary"}
                  disabled={currentStep === 2 && !selectedRole}
                >
                  {currentStep === 3 ? 'Create Account' : 'Continue'}
                </Button>
              </motion.div>
            </div>
          </form>

          {/* Sign In Link */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Already have an account?{' '}
              <Link 
                to="/login" 
                className="text-primary hover:text-primary-bright font-medium transition-colors"
              >
                Sign in here
              </Link>
            </p>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}