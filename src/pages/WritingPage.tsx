
import React from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

const WritingPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <div className="sticky top-20">
              <h1 className="text-3xl font-bold mb-6">Writing Skills</h1>
              <p className="text-gray-700 mb-8">
                Develop your writing abilities through structured exercises, feedback, and practice. 
                Learn to write clearly and effectively for different purposes and audiences.
              </p>

              <div className="bg-secondary/10 p-6 rounded-lg mb-6">
                <h3 className="font-semibold mb-2">Your Progress</h3>
                <div className="w-full h-3 bg-gray-200 rounded-full">
                  <div className="h-3 bg-secondary rounded-full w-[45%]"></div>
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-sm text-gray-600">Beginner</span>
                  <span className="text-sm text-gray-600">Advanced</span>
                </div>
              </div>

              <Button className="w-full mb-4">Submit Your Writing</Button>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <Tabs defaultValue="exercises" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="exercises">Exercises</TabsTrigger>
                <TabsTrigger value="practice">Practice</TabsTrigger>
                <TabsTrigger value="feedback">Feedback</TabsTrigger>
              </TabsList>
              
              <TabsContent value="exercises" className="animate-fade-in">
                <div className="grid gap-6">
                  {[
                    {
                      title: "Basic Sentence Structure",
                      level: "Beginner",
                      description: "Learn to write clear, grammatically correct sentences."
                    },
                    {
                      title: "Paragraph Development",
                      level: "Intermediate",
                      description: "Practice organizing your ideas into coherent paragraphs."
                    },
                    {
                      title: "Essay Writing",
                      level: "Advanced",
                      description: "Develop skills to write structured academic essays."
                    }
                  ].map((exercise, index) => (
                    <Card key={index}>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-center">
                          <CardTitle>{exercise.title}</CardTitle>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            exercise.level === "Beginner" 
                              ? "bg-green-100 text-green-800" 
                              : exercise.level === "Intermediate"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-purple-100 text-purple-800"
                          }`}>
                            {exercise.level}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4">{exercise.description}</p>
                        <Button>Start Exercise</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="practice" className="animate-fade-in">
                <Card>
                  <CardHeader>
                    <CardTitle>Weekly Writing Prompt</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      <strong>This week's topic:</strong> Describe a memorable journey you have taken. What made it special? 
                      Include details about the places, people, and experiences that stood out to you.
                    </p>
                    
                    <Textarea 
                      placeholder="Start writing your response here..."
                      className="min-h-[200px] mb-4" 
                    />
                    
                    <div className="flex justify-between">
                      <Button variant="outline">Save Draft</Button>
                      <Button>Submit for Feedback</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="feedback" className="animate-fade-in">
                <div className="grid gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Feedback</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h4 className="font-semibold text-primary">My Summer Vacation</h4>
                          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                            <span>Submitted: May 15, 2023</span>
                            <span>•</span>
                            <span>Feedback by: Teacher Sarah</span>
                          </div>
                          <p className="text-gray-600 mb-4 border-b pb-4">
                            Your essay had good descriptions and vocabulary usage. 
                            Work on paragraph transitions and sentence variety to improve flow.
                          </p>
                          <div className="flex justify-end">
                            <Button variant="outline" size="sm">View Full Feedback</Button>
                          </div>
                        </div>
                        
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h4 className="font-semibold text-primary">My Favorite Book</h4>
                          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                            <span>Submitted: April 27, 2023</span>
                            <span>•</span>
                            <span>Feedback by: Teacher John</span>
                          </div>
                          <p className="text-gray-600 mb-4 border-b pb-4">
                            Great job explaining why you enjoyed the book. 
                            Consider adding more specific examples to support your opinions.
                          </p>
                          <div className="flex justify-end">
                            <Button variant="outline" size="sm">View Full Feedback</Button>
                          </div>
                        </div>
                      </div>
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

export default WritingPage;
