
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Heart, MessageSquare, Share2, Download, Search } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

// Mock data for community word lists
const communityLists = [
  {
    id: '1',
    title: 'IELTS Academic Word List',
    description: 'Essential vocabulary for the IELTS Academic exam',
    author: 'Emma T.',
    words: 120,
    likes: 842,
    comments: 56,
    isLiked: true,
    category: 'Academic'
  },
  {
    id: '2',
    title: 'Business English Essentials',
    description: 'Must-know vocabulary for business meetings and correspondence',
    author: 'Michael S.',
    words: 95,
    likes: 635,
    comments: 41,
    isLiked: false,
    category: 'Business'
  },
  {
    id: '3',
    title: 'Travel & Tourism Vocabulary',
    description: 'Useful words and phrases for travelers',
    author: 'Sophia R.',
    words: 78,
    likes: 427,
    comments: 29,
    isLiked: false,
    category: 'Travel'
  },
  {
    id: '4',
    title: 'Medical Terminology Basics',
    description: 'Common medical terms for healthcare communication',
    author: 'Dr. James L.',
    words: 150,
    likes: 521,
    comments: 37,
    isLiked: false,
    category: 'Medical'
  },
  {
    id: '5',
    title: 'Tech Industry Jargon',
    description: 'Modern vocabulary used in technology and computing',
    author: 'Alex K.',
    words: 112,
    likes: 756,
    comments: 63,
    isLiked: true,
    category: 'Technology'
  }
];

// Mock discussion threads
const discussionThreads = [
  {
    id: '1',
    title: 'What\'s the difference between "affect" and "effect"?',
    author: 'Hannah M.',
    responses: 14,
    lastActive: '2 hours ago',
    tags: ['grammar', 'common-confusions']
  },
  {
    id: '2',
    title: 'Looking for idioms related to business negotiations',
    author: 'Robert J.',
    responses: 8,
    lastActive: '1 day ago',
    tags: ['idioms', 'business-english']
  },
  {
    id: '3',
    title: 'Resources for learning academic vocabulary?',
    author: 'Sarah T.',
    responses: 21,
    lastActive: '4 hours ago',
    tags: ['academic', 'resources']
  }
];

const CommunityVocabulary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [likedLists, setLikedLists] = useState<string[]>(
    communityLists.filter(list => list.isLiked).map(list => list.id)
  );
  const { toast } = useToast();
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  
  const handleListLike = (listId: string) => {
    if (likedLists.includes(listId)) {
      setLikedLists(likedLists.filter(id => id !== listId));
    } else {
      setLikedLists([...likedLists, listId]);
      toast({
        title: "List liked!",
        description: "This word list has been added to your favorites."
      });
    }
  };
  
  const handleImport = (listId: string) => {
    toast({
      title: "Word list imported",
      description: "The list has been added to your personal vocabulary."
    });
  };
  
  // Filter lists based on search term
  const filteredLists = communityLists.filter(
    list => 
      list.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      list.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      list.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-2">Community Vocabulary</h2>
        <p className="text-gray-600">
          Learn together with our community of language enthusiasts. Share word lists, discuss vocabulary, and collaborate on learning resources.
        </p>
      </div>
      
      <Tabs defaultValue="lists" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="lists">Shared Word Lists</TabsTrigger>
          <TabsTrigger value="discussions">Discussions</TabsTrigger>
        </TabsList>
        
        <TabsContent value="lists" className="space-y-6 pt-6">
          <div className="flex items-center gap-2">
            <Search className="w-5 h-5 text-gray-400" />
            <Input 
              placeholder="Search community word lists..." 
              value={searchTerm}
              onChange={handleSearchChange}
              className="flex-grow"
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredLists.map(list => (
              <Card key={list.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{list.title}</CardTitle>
                      <CardDescription>{list.description}</CardDescription>
                    </div>
                    <span className="text-xs px-2 py-1 bg-gray-100 rounded text-gray-600">
                      {list.category}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm">
                    <div className="text-gray-600">
                      Created by <span className="font-medium">{list.author}</span>
                    </div>
                    <div>{list.words} words</div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex gap-4">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className={likedLists.includes(list.id) ? 'text-red-500' : ''}
                      onClick={() => handleListLike(list.id)}
                    >
                      <Heart className={`h-4 w-4 mr-1 ${likedLists.includes(list.id) ? 'fill-red-500' : ''}`} />
                      {list.likes}
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      {list.comments}
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Share2 className="h-4 w-4 mr-1" />
                      Share
                    </Button>
                  </div>
                  <Button size="sm" onClick={() => handleImport(list.id)}>
                    <Download className="h-4 w-4 mr-1" />
                    Import
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center mt-4">
            <Button variant="outline">
              <Users className="mr-2 h-4 w-4" />
              Create & Share Your List
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="discussions" className="space-y-6 pt-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Community Discussions</h3>
            <Button>Start New Discussion</Button>
          </div>
          
          <div className="space-y-4">
            {discussionThreads.map(thread => (
              <Card key={thread.id}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{thread.title}</CardTitle>
                  <CardDescription>
                    Started by {thread.author} • {thread.responses} responses • Last active {thread.lastActive}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2 mt-2">
                    {thread.tags.map(tag => (
                      <span key={tag} className="text-xs px-2 py-1 bg-gray-100 rounded text-gray-600">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="outline" size="sm">View Thread</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Learning Challenges</CardTitle>
              <CardDescription>
                Join community vocabulary challenges to boost your learning
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">30-Day Vocabulary Builder</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Learn 5 new words every day for 30 days
                      </p>
                    </div>
                    <span className="text-xs px-2 py-1 bg-green-100 rounded text-green-700">
                      Active
                    </span>
                  </div>
                  <div className="mt-3">
                    <div className="text-sm flex justify-between mb-1">
                      <span>Progress</span>
                      <span>12/30 days</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '40%' }}></div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <span className="text-xs text-gray-500">254 participants</span>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Academic Word Challenge</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Master the top 100 academic words in 2 weeks
                  </p>
                  <div className="mt-3">
                    <Button variant="outline" size="sm">Join Challenge</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CommunityVocabulary;
