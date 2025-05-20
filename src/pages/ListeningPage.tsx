
import React from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageCircle } from "lucide-react";
import { Slider } from "@/components/ui/slider";

const ListeningPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <div className="sticky top-20">
              <h1 className="text-3xl font-bold mb-6">Listening Skills</h1>
              <p className="text-gray-700 mb-8">
                Improve your ability to understand spoken English through guided
                listening exercises, conversations, and audio materials at various
                difficulty levels.
              </p>

              <div className="bg-secondary/10 p-6 rounded-lg mb-6">
                <h3 className="font-semibold mb-2">Your Progress</h3>
                <div className="w-full h-3 bg-gray-200 rounded-full">
                  <div className="h-3 bg-secondary rounded-full w-[35%]"></div>
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-sm text-gray-600">Beginner</span>
                  <span className="text-sm text-gray-600">Advanced</span>
                </div>
              </div>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-lg">Featured Audio</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-100 rounded-lg p-4 mb-4">
                    <h3 className="font-semibold mb-2">English Conversation: At the Restaurant</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                      <span>3:45</span>
                      <span>•</span>
                      <span>Intermediate</span>
                    </div>
                    
                    <div className="mb-4 flex flex-col gap-2">
                      <div className="w-full flex items-center gap-2">
                        <button className="text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                        </button>
                        <Slider defaultValue={[0]} max={100} step={1} className="flex-1" />
                      </div>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>0:00</span>
                        <span>3:45</span>
                      </div>
                    </div>
                    
                    <Button className="w-full">Start Listening Exercise</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <Tabs defaultValue="lessons" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="lessons">Lessons</TabsTrigger>
                <TabsTrigger value="exercises">Exercises</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
              </TabsList>
              
              <TabsContent value="lessons" className="animate-fade-in">
                <div className="grid gap-6">
                  {[
                    {
                      title: "Basic Listening Comprehension",
                      level: "Beginner",
                      description: "Practice understanding common words and simple phrases."
                    },
                    {
                      title: "Everyday Conversations",
                      level: "Beginner",
                      description: "Listen to basic dialogues on everyday topics."
                    },
                    {
                      title: "Different Accents and Dialects",
                      level: "Intermediate",
                      description: "Learn to understand various English accents and speaking styles."
                    },
                    {
                      title: "Academic Listening",
                      level: "Advanced",
                      description: "Practice understanding lectures, presentations, and complex discussions."
                    }
                  ].map((lesson, index) => (
                    <Card key={index}>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-center">
                          <CardTitle>{lesson.title}</CardTitle>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            lesson.level === "Beginner" 
                              ? "bg-green-100 text-green-800" 
                              : lesson.level === "Intermediate"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-purple-100 text-purple-800"
                          }`}>
                            {lesson.level}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4">{lesson.description}</p>
                        <Button>Start Lesson</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="exercises" className="animate-fade-in">
                <div className="grid gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Listening Exercises</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h3 className="font-semibold mb-2">Dictation Practice</h3>
                          <p className="text-gray-600 mb-4">
                            Listen to short clips and write down what you hear to improve your listening accuracy.
                          </p>
                          <div className="flex justify-end">
                            <Button>Start Exercise</Button>
                          </div>
                        </div>
                        
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h3 className="font-semibold mb-2">Comprehension Questions</h3>
                          <p className="text-gray-600 mb-4">
                            Listen to conversations and answer questions to test your understanding.
                          </p>
                          <div className="flex justify-end">
                            <Button>Start Exercise</Button>
                          </div>
                        </div>
                        
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h3 className="font-semibold mb-2">Fill in the Blanks</h3>
                          <p className="text-gray-600 mb-4">
                            Complete transcripts by filling in missing words as you listen.
                          </p>
                          <div className="flex justify-end">
                            <Button>Start Exercise</Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="resources" className="animate-fade-in">
                <div className="grid gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Audio Resources</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-3 text-gray-600">
                        <li>
                          <strong>English Language Podcasts</strong>
                          <p>Regular podcasts designed for English learners at all levels.</p>
                        </li>
                        <li>
                          <strong>Audio Books for ESL Learners</strong>
                          <p>Narrated stories with adjustable playback speeds.</p>
                        </li>
                        <li>
                          <strong>News Broadcasts</strong>
                          <p>Short news segments with clear pronunciation.</p>
                        </li>
                        <li>
                          <strong>Conversation Samples</strong>
                          <p>Authentic conversations between native speakers.</p>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Listening Tips</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2 text-gray-600">
                        <li>Practice daily, even if just for a few minutes</li>
                        <li>Focus on understanding the main idea first, then details</li>
                        <li>Use context clues to guess unknown words</li>
                        <li>Listen to different accents to build flexibility</li>
                        <li>Take notes while listening to improve focus and retention</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ListeningPage;
