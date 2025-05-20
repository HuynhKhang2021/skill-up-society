
import React from "react";
import Layout from "@/components/Layout";
import SkillCard from "@/components/SkillCard";
import { Button } from "@/components/ui/button";
import { MessageCircle, Users, Video, Upload } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brand-dark">
                Master English with <span className="text-primary">SkillUp Society</span>
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Improve your English skills through our interactive platform. Practice reading, writing, speaking, and listening with our community-driven approach.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link to="/skills/reading">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/chat">Join Community</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                alt="Students learning together"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Master These 4 Essential Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillCard
              title="Reading"
              description="Enhance your comprehension skills through articles, stories, and exercises."
              icon={Users}
              color="text-primary"
              link="/skills/reading"
            />
            
            <SkillCard
              title="Writing"
              description="Develop clear and effective writing through guided practice and feedback."
              icon={Upload}
              color="text-secondary"
              link="/skills/writing"
            />
            
            <SkillCard
              title="Speaking"
              description="Build confidence in your verbal communication through video practice."
              icon={Video}
              color="text-primary"
              link="/skills/speaking"
            />
            
            <SkillCard
              title="Listening"
              description="Train your ear to understand different accents and speech patterns."
              icon={MessageCircle}
              color="text-secondary"
              link="/skills/listening"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Interactive Learning Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Video className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Video Uploads</h3>
              <p className="text-gray-600">
                Practice your speaking skills by recording and uploading videos for feedback from peers and tutors.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-secondary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <MessageCircle className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community Chat</h3>
              <p className="text-gray-600">
                Connect with other learners through our community chat to practice writing and share resources.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Peer Learning</h3>
              <p className="text-gray-600">
                Learn from others through peer feedback, group discussions, and collaborative exercises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to improve your English?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join our community today and start mastering all four essential English skills through our interactive platform.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100" asChild>
            <Link to="/skills/reading">Start Learning Now</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
