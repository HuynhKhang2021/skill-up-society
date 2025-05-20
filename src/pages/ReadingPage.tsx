
import React from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ReadingPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <div className="sticky top-20">
              <h1 className="text-3xl font-bold mb-6">Reading Skills</h1>
              <p className="text-gray-700 mb-8">
                Enhance your reading comprehension and vocabulary through articles,
                stories, and guided exercises designed to help you understand
                written English at all levels.
              </p>

              <div className="bg-primary/10 p-6 rounded-lg mb-6">
                <h3 className="font-semibold mb-2">Your Progress</h3>
                <div className="w-full h-3 bg-gray-200 rounded-full">
                  <div className="h-3 bg-primary rounded-full w-[30%]"></div>
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-sm text-gray-600">Beginner</span>
                  <span className="text-sm text-gray-600">Advanced</span>
                </div>
              </div>

              <Button className="w-full mb-4">Start Next Lesson</Button>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <Tabs defaultValue="lessons" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="lessons">Lessons</TabsTrigger>
                <TabsTrigger value="practice">Practice</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
              </TabsList>
              
              <TabsContent value="lessons" className="animate-fade-in">
                <div className="grid gap-6">
                  {[
                    {
                      title: "Basic Reading Comprehension",
                      level: "Beginner",
                      description: "Learn fundamental reading strategies and basic vocabulary.",
                      completed: true
                    },
                    {
                      title: "Scanning for Information",
                      level: "Beginner",
                      description: "Practice finding specific information quickly in texts.",
                      completed: true
                    },
                    {
                      title: "Understanding Context Clues",
                      level: "Intermediate",
                      description: "Learn to figure out meaning from surrounding text.",
                      completed: false
                    },
                    {
                      title: "Critical Reading",
                      level: "Advanced",
                      description: "Analyze texts for deeper meaning and author's intent.",
                      completed: false
                    }
                  ].map((lesson, index) => (
                    <Card key={index} className={`${lesson.completed ? 'border-primary/30' : ''}`}>
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
                        <div className="flex justify-between items-center">
                          <Button variant={lesson.completed ? "outline" : "default"}>
                            {lesson.completed ? "Review Lesson" : "Start Lesson"}
                          </Button>
                          {lesson.completed && (
                            <span className="text-primary">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                            </span>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="practice" className="animate-fade-in">
                <div className="grid gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Reading Comprehension Test</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        Test your understanding with various texts and questions to assess your reading comprehension level.
                      </p>
                      <Button>Start Practice Test</Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Vocabulary Building Exercises</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        Expand your vocabulary with interactive word exercises and quizzes.
                      </p>
                      <Button>Practice Vocabulary</Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="resources" className="animate-fade-in">
                <div className="grid gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Recommended Books</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2 text-gray-600">
                        <li>Graded Readers for English Learners</li>
                        <li>Short Stories for ESL Students</li>
                        <li>News Articles for Reading Practice</li>
                        <li>English Literature Classics (Simplified)</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Online Resources</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2 text-gray-600">
                        <li>Digital Libraries for English Learners</li>
                        <li>English News Websites</li>
                        <li>Reading Comprehension Websites</li>
                        <li>ESL Reading Materials</li>
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

export default ReadingPage;
