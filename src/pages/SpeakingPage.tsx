
import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Video, Upload } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const SpeakingPage = () => {
  const { toast } = useToast();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!selectedFile) {
      toast({
        title: "No file selected",
        description: "Please select a video file to upload.",
        variant: "destructive",
      });
      return;
    }

    setUploading(true);
    
    // Simulate upload delay
    setTimeout(() => {
      setUploading(false);
      setSelectedFile(null);
      toast({
        title: "Upload successful!",
        description: "Your video has been uploaded for feedback.",
      });
    }, 2000);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <div className="sticky top-20">
              <h1 className="text-3xl font-bold mb-6">Speaking Skills</h1>
              <p className="text-gray-700 mb-8">
                Build confidence in your spoken English through guided practice,
                video exercises, and pronunciation feedback. Learn to communicate
                clearly and naturally.
              </p>

              <div className="bg-primary/10 p-6 rounded-lg mb-6">
                <h3 className="font-semibold mb-2">Your Progress</h3>
                <div className="w-full h-3 bg-gray-200 rounded-full">
                  <div className="h-3 bg-primary rounded-full w-[25%]"></div>
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-sm text-gray-600">Beginner</span>
                  <span className="text-sm text-gray-600">Advanced</span>
                </div>
              </div>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-lg">Upload Speaking Practice</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
                    <Upload className="h-10 w-10 text-gray-400 mb-2" />
                    <p className="text-sm text-gray-600 mb-4 text-center">
                      Upload a video of you speaking for feedback
                    </p>
                    <input
                      type="file"
                      id="video-upload"
                      className="hidden"
                      accept="video/*"
                      onChange={handleFileChange}
                    />
                    <label htmlFor="video-upload">
                      <Button variant="outline" className="mb-2" asChild>
                        <span>Select Video</span>
                      </Button>
                    </label>
                    {selectedFile && (
                      <div className="mt-2 text-sm text-gray-600">
                        Selected: {selectedFile.name}
                      </div>
                    )}
                    {selectedFile && (
                      <Button 
                        className="mt-4 w-full" 
                        onClick={handleUpload}
                        disabled={uploading}
                      >
                        {uploading ? "Uploading..." : "Upload Video"}
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <Tabs defaultValue="lessons" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="lessons">Lessons</TabsTrigger>
                <TabsTrigger value="practice">Practice</TabsTrigger>
                <TabsTrigger value="videos">Your Videos</TabsTrigger>
              </TabsList>
              
              <TabsContent value="lessons" className="animate-fade-in">
                <div className="grid gap-6">
                  {[
                    {
                      title: "Basic Pronunciation",
                      level: "Beginner",
                      description: "Learn the sounds of English and practice basic pronunciation."
                    },
                    {
                      title: "Everyday Conversations",
                      level: "Beginner",
                      description: "Practice common phrases and expressions for daily interactions."
                    },
                    {
                      title: "Fluency Building",
                      level: "Intermediate",
                      description: "Develop smoother, more natural speaking patterns."
                    },
                    {
                      title: "Public Speaking",
                      level: "Advanced",
                      description: "Build confidence for presentations and formal speaking situations."
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
              
              <TabsContent value="practice" className="animate-fade-in">
                <div className="grid gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Speaking Prompts</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h3 className="font-semibold mb-2">Describe Your Hometown</h3>
                          <p className="text-gray-600 mb-4">
                            Talk about where you grew up. What makes it special? What are some 
                            interesting places to visit there?
                          </p>
                          <div className="flex justify-end">
                            <Button>Record Response</Button>
                          </div>
                        </div>
                        
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h3 className="font-semibold mb-2">Your Favorite Hobby</h3>
                          <p className="text-gray-600 mb-4">
                            Discuss a hobby or activity you enjoy. Why do you like it? How did you start?
                          </p>
                          <div className="flex justify-end">
                            <Button>Record Response</Button>
                          </div>
                        </div>
                        
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h3 className="font-semibold mb-2">A Recent Travel Experience</h3>
                          <p className="text-gray-600 mb-4">
                            Talk about a place you've visited recently. What did you do there? Would you recommend it to others?
                          </p>
                          <div className="flex justify-end">
                            <Button>Record Response</Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="videos" className="animate-fade-in">
                <div className="grid gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Your Uploaded Videos</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-start gap-4">
                            <div className="bg-gray-200 rounded-lg flex items-center justify-center w-24 h-16 flex-shrink-0">
                              <Video className="h-6 w-6 text-gray-500" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold">My Introduction</h3>
                              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                                <span>Uploaded: May 18, 2023</span>
                                <span>•</span>
                                <span>2:34</span>
                              </div>
                              <div className="flex gap-2">
                                <Button size="sm" variant="outline">View</Button>
                                <Button size="sm" variant="outline">Get Feedback</Button>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-start gap-4">
                            <div className="bg-gray-200 rounded-lg flex items-center justify-center w-24 h-16 flex-shrink-0">
                              <Video className="h-6 w-6 text-gray-500" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold">Pronunciation Practice</h3>
                              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                                <span>Uploaded: May 10, 2023</span>
                                <span>•</span>
                                <span>1:47</span>
                              </div>
                              <div className="flex gap-2">
                                <Button size="sm" variant="outline">View</Button>
                                <Button size="sm" variant="outline">Get Feedback</Button>
                              </div>
                            </div>
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

export default SpeakingPage;
