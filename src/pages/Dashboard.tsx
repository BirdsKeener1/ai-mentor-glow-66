import { motion } from 'framer-motion';
import { 
  Users, 
  MessageSquare, 
  Target, 
  Star, 
  Calendar, 
  TrendingUp, 
  Award,
  BookOpen,
  Plus,
  ArrowRight,
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export default function Dashboard() {
  const userStats = [
    {
      title: "Active Mentees",
      value: "8",
      change: "+2 this month",
      icon: Users,
      color: "primary"
    },
    {
      title: "Completed Sessions",
      value: "42",
      change: "+6 this week",
      icon: Calendar,
      color: "secondary"
    },
    {
      title: "Average Rating",
      value: "4.9",
      change: "+0.2 this month",
      icon: Star,
      color: "success"
    },
    {
      title: "Hours Mentored",
      value: "156",
      change: "+12 this week",
      icon: Clock,
      color: "primary"
    }
  ];

  const recentMatches = [
    {
      name: "Sarah Chen",
      role: "Frontend Developer",
      compatibility: 95,
      skills: ["React", "TypeScript", "UI/UX"],
      avatar: "SC",
      status: "new"
    },
    {
      name: "Marcus Johnson",
      role: "Product Manager",
      compatibility: 88,
      skills: ["Strategy", "Analytics", "Leadership"],
      avatar: "MJ",
      status: "pending"
    },
    {
      name: "Elena Rodriguez",
      role: "Data Scientist",
      compatibility: 92,
      skills: ["Python", "ML", "Statistics"],
      avatar: "ER",
      status: "active"
    }
  ];

  const upcomingSessions = [
    {
      mentee: "Sarah Chen",
      time: "Today, 2:00 PM",
      duration: "1 hour",
      type: "Career Guidance",
      avatar: "SC"
    },
    {
      mentee: "Alex Kumar",
      time: "Tomorrow, 10:00 AM",
      duration: "45 min",
      type: "Technical Review",
      avatar: "AK"
    },
    {
      mentee: "Maya Patel",
      time: "Friday, 3:30 PM",
      duration: "1 hour",
      type: "Goal Setting",
      avatar: "MP"
    }
  ];

  const goals = [
    {
      title: "Help 5 mentees land their dream jobs",
      progress: 60,
      deadline: "Q1 2024",
      status: "on-track"
    },
    {
      title: "Complete Advanced Leadership Course",
      progress: 30,
      deadline: "Feb 2024",
      status: "behind"
    },
    {
      title: "Achieve 50+ mentoring hours",
      progress: 80,
      deadline: "Dec 2023",
      status: "ahead"
    }
  ];

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold gradient-text mb-2">
                Welcome back, Alex! 👋
              </h1>
              <p className="text-muted-foreground">
                Here's what's happening with your mentorship journey today.
              </p>
            </div>
            <div className="flex items-center space-x-3 mt-4 md:mt-0">
              <Button variant="outline" className="btn-ghost">
                <BookOpen className="w-4 h-4 mr-2" />
                View Resources
              </Button>
              <Button className="btn-hero">
                <Plus className="w-4 h-4 mr-2" />
                Find Mentees
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {userStats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="glass-card">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-${stat.color}`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <TrendingUp className="w-4 h-4 text-success" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold gradient-text mb-1">{stat.value}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                  <p className="text-xs text-success">{stat.change}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Recent Matches */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="glass-card">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold">Recent Matches</h2>
                  <Button variant="ghost" className="text-primary">
                    View All <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
                <div className="space-y-4">
                  {recentMatches.map((match, index) => (
                    <motion.div
                      key={match.name}
                      className="flex items-center justify-between p-4 rounded-xl glass hover:bg-glass-border/50 transition-all cursor-pointer"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-semibold">
                          {match.avatar}
                        </div>
                        <div>
                          <h3 className="font-semibold">{match.name}</h3>
                          <p className="text-sm text-muted-foreground">{match.role}</p>
                          <div className="flex space-x-2 mt-1">
                            {match.skills.slice(0, 2).map((skill) => (
                              <span
                                key={skill}
                                className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-success">
                          {match.compatibility}% match
                        </div>
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${
                            match.status === 'new'
                              ? 'bg-success/10 text-success'
                              : match.status === 'pending'
                              ? 'bg-yellow-500/10 text-yellow-500'
                              : 'bg-primary/10 text-primary'
                          }`}
                        >
                          {match.status}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Goals Progress */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="glass-card">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold">Your Goals</h2>
                  <Button variant="ghost" className="text-primary">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Goal
                  </Button>
                </div>
                <div className="space-y-6">
                  {goals.map((goal, index) => (
                    <motion.div
                      key={goal.title}
                      className="space-y-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">{goal.title}</h3>
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${
                            goal.status === 'on-track'
                              ? 'bg-success/10 text-success'
                              : goal.status === 'behind'
                              ? 'bg-destructive/10 text-destructive'
                              : 'bg-primary/10 text-primary'
                          }`}
                        >
                          {goal.status}
                        </span>
                      </div>
                      <Progress value={goal.progress} className="h-2" />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>{goal.progress}% complete</span>
                        <span>Due {goal.deadline}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Upcoming Sessions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="glass-card">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold">Upcoming Sessions</h2>
                  <Button variant="ghost" className="text-primary">
                    <Calendar className="w-4 h-4" />
                  </Button>
                </div>
                <div className="space-y-4">
                  {upcomingSessions.map((session, index) => (
                    <motion.div
                      key={session.mentee}
                      className="p-4 rounded-xl glass border border-glass-border"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-secondary flex items-center justify-center text-white font-semibold text-sm">
                          {session.avatar}
                        </div>
                        <div>
                          <h3 className="font-medium">{session.mentee}</h3>
                          <p className="text-sm text-muted-foreground">{session.type}</p>
                        </div>
                      </div>
                      <div className="text-sm space-y-1">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Time:</span>
                          <span>{session.time}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Duration:</span>
                          <span>{session.duration}</span>
                        </div>
                      </div>
                      <Button size="sm" className="w-full mt-3 btn-hero">
                        Join Session
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card className="glass-card">
                <h2 className="text-xl font-semibold mb-6">Quick Actions</h2>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full btn-ghost justify-start">
                    <MessageSquare className="w-4 h-4 mr-3" />
                    Check Messages
                  </Button>
                  <Button variant="outline" className="w-full btn-ghost justify-start">
                    <Target className="w-4 h-4 mr-3" />
                    Update Goals
                  </Button>
                  <Button variant="outline" className="w-full btn-ghost justify-start">
                    <Award className="w-4 h-4 mr-3" />
                    View Achievements
                  </Button>
                  <Button variant="outline" className="w-full btn-ghost justify-start">
                    <Star className="w-4 h-4 mr-3" />
                    Leave Review
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}