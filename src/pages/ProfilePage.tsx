
import React from "react";
import Layout from "@/components/Layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Video } from "lucide-react";

const ProfilePage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Profile sidebar */}
          <div className="md:w-1/3">
            <Card className="sticky top-20">
              <CardHeader className="text-center">
                <Avatar className="h-24 w-24 mx-auto mb-4">
                  <AvatarImage src="" alt="User" />
                  <AvatarFallback className="text-2xl">JD</AvatarFallback>
                </Avatar>
                <CardTitle className="text-2xl">John Doe</CardTitle>
                <p className="text-gray-500">English Learner - Intermediate Level</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">Overall Progress</h3>
                    <Progress value={65} className="h-2" />
                    <div className="flex justify-between mt-2">
                      <span className="text-xs text-gray-500">Beginner</span>
                      <span className="text-xs text-gray-500">Advanced</span>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Skill Breakdown</h3>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Reading</span>
                          <span className="text-sm text-gray-500">Advanced</span>
                        </div>
                        <Progress value={80} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Writing</span>
                          <span className="text-sm text-gray-500">Intermediate</span>
                        </div>
                        <Progress value={60} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Speaking</span>
                          <span className="text-sm text-gray-500">Beginner</span>
                        </div>
                        <Progress value={40} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Listening</span>
                          <span className="text-sm text-gray-500">Intermediate</span>
                        </div>
                        <Progress value={65} className="h-2" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <h3 className="font-semibold mb-3">Learning Stats</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-primary">42</div>
                        <div className="text-xs text-gray-500">Days Streak</div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-secondary">18</div>
                        <div className="text-xs text-gray-500">Lessons Completed</div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-primary">5</div>
                        <div className="text-xs text-gray-500">Videos Uploaded</div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-secondary">32</div>
                        <div className="text-xs text-gray-500">Chat Messages</div>
                      </div>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full">Edit Profile</Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Main content */}
          <div className="md:w-2/3">
            <Tabs defaultValue="activity" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="activity">Recent Activity</TabsTrigger>
                <TabsTrigger value="content">My Content</TabsTrigger>
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
              </TabsList>
              
              <TabsContent value="activity" className="animate-fade-in">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {[
                        {
                          type: "lesson",
                          title: "Understanding Context Clues",
                          skill: "Reading",
                          time: "2 hours ago"
                        },
                        {
                          type: "video",
                          title: "Pronunciation Practice: Th Sound",
                          skill: "Speaking",
                          time: "Yesterday"
                        },
                        {
                          type: "exercise",
                          title: "Paragraph Development",
                          skill: "Writing",
                          time: "2 days ago"
                        },
                        {
                          type: "chat",
                          title: "Participated in Grammar Questions group",
                          skill: "Community",
                          time: "3 days ago"
                        },
                        {
                          type: "listening",
                          title: "Comprehension Questions Exercise",
                          skill: "Listening",
                          time: "5 days ago"
                        }
                      ].map((activity, index) => (
                        <div key={index} className="flex items-start gap-4 pb-4 border-b last:border-0">
                          <div className={`p-2 rounded-full ${
                            activity.skill === "Reading" ? "bg-primary/10 text-primary" : 
                            activity.skill === "Writing" ? "bg-secondary/10 text-secondary" : 
                            activity.skill === "Speaking" ? "bg-purple-100 text-purple-800" : 
                            activity.skill === "Listening" ? "bg-blue-100 text-blue-800" : 
                            "bg-gray-100 text-gray-800"
                          }`}>
                            {activity.type === "video" ? (
                              <Video className="h-5 w-5" />
                            ) : (
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                            )}
                          </div>
                          
                          <div className="flex-1">
                            <h3 className="font-medium">{activity.title}</h3>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                              <span className={`px-2 py-0.5 rounded text-xs ${
                                activity.skill === "Reading" ? "bg-primary/10 text-primary" : 
                                activity.skill === "Writing" ? "bg-secondary/10 text-secondary" : 
                                activity.skill === "Speaking" ? "bg-purple-100 text-purple-800" : 
                                activity.skill === "Listening" ? "bg-blue-100 text-blue-800" : 
                                "bg-gray-100 text-gray-800"
                              }`}>
                                {activity.skill}
                              </span>
                              <span>•</span>
                              <span>{activity.time}</span>
                            </div>
                          </div>
                          
                          <Button variant="ghost" size="sm">View</Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="content" className="animate-fade-in">
                <Card>
                  <CardHeader>
                    <CardTitle>My Content</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="videos">
                      <TabsList className="mb-6">
                        <TabsTrigger value="videos">Videos</TabsTrigger>
                        <TabsTrigger value="writing">Writing</TabsTrigger>
                        <TabsTrigger value="recordings">Audio Recordings</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="videos">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="bg-gray-100 rounded-lg p-4">
                              <div className="bg-gray-200 h-32 rounded flex items-center justify-center mb-3">
                                <Video className="h-10 w-10 text-gray-400" />
                              </div>
                              <h3 className="font-medium mb-1">Speaking Practice #{item}</h3>
                              <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                                <span>May {10 + item}, 2023</span>
                                <span>•</span>
                                <span>{item + 1}:30</span>
                              </div>
                              <Button size="sm" variant="outline" className="w-full">View Video</Button>
                            </div>
                          ))}
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="writing">
                        <div className="space-y-4">
                          {[
                            "My Favorite Book",
                            "A Journey to Remember", 
                            "The Importance of Learning Languages",
                          ].map((title, index) => (
                            <div key={index} className="border rounded-lg p-4">
                              <h3 className="font-medium mb-2">{title}</h3>
                              <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                                <span>Writing Exercise</span>
                                <span>•</span>
                                <span>Submitted May {15 - index}, 2023</span>
                              </div>
                              <Button size="sm" variant="outline">View Essay</Button>
                            </div>
                          ))}
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="recordings">
                        <div className="flex flex-col items-center justify-center py-8 text-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 mb-4"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
                          <h3 className="text-lg font-medium mb-2">No Audio Recordings Yet</h3>
                          <p className="text-gray-500 mb-4 max-w-sm">
                            Practice your pronunciation and listening skills by recording audio exercises.
                          </p>
                          <Button>Record New Audio</Button>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="achievements" className="animate-fade-in">
                <Card>
                  <CardHeader>
                    <CardTitle>Achievements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {[
                        { name: "First Step", icon: "🏆", description: "Completed your first lesson", unlocked: true },
                        { name: "Community Member", icon: "👥", description: "Sent 10+ messages in community chat", unlocked: true },
                        { name: "Video Star", icon: "🎬", description: "Uploaded 5 speaking practice videos", unlocked: true },
                        { name: "Reader", icon: "📚", description: "Completed all beginner reading modules", unlocked: true },
                        { name: "Writer", icon: "✍️", description: "Submitted 5 writing exercises", unlocked: false },
                        { name: "Speaker", icon: "🎤", description: "Completed all speaking exercises", unlocked: false },
                        { name: "Listener", icon: "👂", description: "Completed all listening modules", unlocked: false },
                        { name: "30-Day Streak", icon: "🔥", description: "Practiced 30 days in a row", unlocked: true },
                        { name: "Perfect Score", icon: "💯", description: "Got 100% on any assessment", unlocked: false }
                      ].map((achievement, index) => (
                        <div 
                          key={index} 
                          className={`border rounded-lg p-4 text-center ${achievement.unlocked ? "" : "opacity-50"}`}
                        >
                          <div className="text-4xl mb-2">{achievement.icon}</div>
                          <h3 className="font-medium mb-1">{achievement.name}</h3>
                          <p className="text-xs text-gray-500">{achievement.description}</p>
                          {achievement.unlocked && (
                            <div className="mt-2 inline-flex items-center text-xs text-green-600">
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                              Unlocked
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
