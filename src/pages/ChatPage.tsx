
import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageCircle, Users, Upload } from "lucide-react";

// Mock data for chat messages
const initialMessages = [
  {
    id: 1,
    user: "Sarah Kim",
    avatar: "SK",
    message: "Hey everyone! I'm having trouble with the difference between 'affect' and 'effect'. Can someone explain?",
    time: "10:32 AM",
  },
  {
    id: 2,
    user: "David Chen",
    avatar: "DC",
    message: "Sure! 'Affect' is usually a verb (to impact something), while 'effect' is usually a noun (the result of something).",
    time: "10:34 AM",
  },
  {
    id: 3,
    user: "Maria Lopez",
    avatar: "ML",
    message: "For example: 'The cold weather affected my health' vs 'The effect of the cold weather was that I got sick.'",
    time: "10:36 AM",
  },
  {
    id: 4,
    user: "You",
    avatar: "ME",
    message: "That's really helpful! Thanks for the clear examples.",
    time: "10:39 AM",
  },
];

// Mock data for chat groups
const chatGroups = [
  { id: 1, name: "General English", members: 245, active: true },
  { id: 2, name: "Pronunciation Help", members: 128, active: false },
  { id: 3, name: "Grammar Questions", members: 187, active: false },
  { id: 4, name: "TOEFL Study Group", members: 92, active: false },
  { id: 5, name: "Business English", members: 76, active: false },
];

const ChatPage = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState("");
  const [activeGroup, setActiveGroup] = useState(chatGroups[0]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const message = {
      id: messages.length + 1,
      user: "You",
      avatar: "ME",
      message: newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages([...messages, message]);
    setNewMessage("");
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  <span>Community Chat</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="groups">
                  <TabsList className="grid grid-cols-2 mb-4">
                    <TabsTrigger value="groups">Groups</TabsTrigger>
                    <TabsTrigger value="direct">Direct</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="groups" className="space-y-4">
                    <Input 
                      placeholder="Search groups..."
                      className="mb-4"
                    />
                    
                    <div className="space-y-2">
                      {chatGroups.map((group) => (
                        <div
                          key={group.id}
                          className={`flex justify-between items-center p-3 rounded-lg cursor-pointer hover:bg-gray-100 ${
                            group.active ? "bg-primary/10 border border-primary/30" : ""
                          }`}
                          onClick={() => setActiveGroup(group)}
                        >
                          <div className="flex items-center gap-2">
                            <div className="bg-primary/20 p-2 rounded-full">
                              <Users className="h-4 w-4 text-primary" />
                            </div>
                            <div>
                              <p className="font-medium">{group.name}</p>
                              <p className="text-xs text-gray-500">{group.members} members</p>
                            </div>
                          </div>
                          {group.id === 1 && (
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                              New
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                    
                    <Button variant="outline" className="w-full mt-4">
                      Create New Group
                    </Button>
                  </TabsContent>
                  
                  <TabsContent value="direct">
                    <div className="flex flex-col items-center justify-center py-8">
                      <MessageCircle className="h-10 w-10 text-gray-400 mb-2" />
                      <h3 className="text-lg font-medium mb-1">Direct Messages</h3>
                      <p className="text-sm text-gray-500 text-center mb-4">
                        Connect directly with tutors and other learners.
                      </p>
                      <Button>Start a Conversation</Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
          
          {/* Main chat area */}
          <div className="lg:col-span-3">
            <Card className="h-full">
              <CardHeader className="border-b">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="bg-primary/20 p-2 rounded-full">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle>{activeGroup.name}</CardTitle>
                      <p className="text-sm text-gray-500">{activeGroup.members} members</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Upload className="h-4 w-4 mr-2" /> Share Resource
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                {/* Chat messages */}
                <div className="space-y-4 mb-4 h-[500px] overflow-y-auto">
                  {messages.map((message) => (
                    <div 
                      key={message.id} 
                      className={`flex gap-3 ${message.user === "You" ? "justify-end" : ""}`}
                    >
                      {message.user !== "You" && (
                        <Avatar>
                          <AvatarImage src="" alt={message.user} />
                          <AvatarFallback>{message.avatar}</AvatarFallback>
                        </Avatar>
                      )}
                      <div className={`max-w-[70%] ${message.user === "You" ? "bg-primary text-white" : "bg-gray-100"} rounded-lg p-3`}>
                        <div className="flex justify-between items-center mb-1">
                          <span className={`font-medium ${message.user === "You" ? "text-white" : "text-gray-900"}`}>
                            {message.user}
                          </span>
                          <span className={`text-xs ${message.user === "You" ? "text-white/80" : "text-gray-500"}`}>
                            {message.time}
                          </span>
                        </div>
                        <p className={message.user === "You" ? "text-white" : "text-gray-700"}>
                          {message.message}
                        </p>
                      </div>
                      {message.user === "You" && (
                        <Avatar>
                          <AvatarImage src="" alt="You" />
                          <AvatarFallback>ME</AvatarFallback>
                        </Avatar>
                      )}
                    </div>
                  ))}
                </div>
                
                {/* Message input */}
                <form onSubmit={handleSendMessage} className="flex gap-2">
                  <Input 
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="flex-1"
                  />
                  <Button type="submit" disabled={!newMessage.trim()}>
                    Send
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ChatPage;
