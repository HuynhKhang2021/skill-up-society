
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { BookOpen, Search, Info } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface ContextExample {
  id: string;
  text: string;
  source: string;
  targetWord: string;
  definition: string;
}

interface ReadingText {
  id: string;
  title: string;
  category: string;
  level: string;
  excerpt: string;
  wordCount: number;
  highlightedWords: string[];
}

// Mock data
const contextExamples: ContextExample[] = [
  {
    id: '1',
    text: "The professor's **erudite** explanation of quantum mechanics left the students in awe of his knowledge.",
    source: "Academic Lecture Transcript",
    targetWord: "erudite",
    definition: "having or showing great knowledge or learning"
  },
  {
    id: '2',
    text: "Despite the **cacophony** of voices in the crowded restaurant, she could still hear her friend's voice clearly.",
    source: "Modern Novel",
    targetWord: "cacophony",
    definition: "a harsh, discordant mixture of sounds"
  },
  {
    id: '3',
    text: "The government's **austere** economic policies were necessary but caused hardship for many citizens.",
    source: "News Article",
    targetWord: "austere",
    definition: "severe or strict in manner or attitude; stern; harsh or ascetic"
  },
  {
    id: '4',
    text: "Her **perspicacious** analysis of the market trends helped the company make a profitable investment decision.",
    source: "Business Report",
    targetWord: "perspicacious",
    definition: "having keen mental perception and understanding; discerning"
  }
];

const readingTexts: ReadingText[] = [
  {
    id: '1',
    title: "The Digital Revolution",
    category: "Technology",
    level: "Intermediate",
    excerpt: "The digital revolution, also known as the Third Industrial Revolution, is the shift from mechanical and analog electronic technology to digital electronics which began in the latter half of the 20th century, with the adoption and proliferation of digital computers and digital record-keeping, that continues to the present day...",
    wordCount: 354,
    highlightedWords: ["proliferation", "analog", "revolution"]
  },
  {
    id: '2',
    title: "The Economics of Climate Change",
    category: "Environment",
    level: "Advanced",
    excerpt: "Climate change presents one of the most complex economic challenges of our time. The economic impacts of climate change are manifold, ranging from direct effects such as damage from extreme weather events, to indirect consequences like changes in agricultural productivity...",
    wordCount: 412,
    highlightedWords: ["manifold", "consequences", "productivity"]
  },
  {
    id: '3',
    title: "Modern Art Movements",
    category: "Arts",
    level: "Intermediate",
    excerpt: "The 20th century witnessed an explosion of artistic movements, each with its own distinctive style and philosophy. From the abstract expressionism of Jackson Pollock to the pop art of Andy Warhol, modern art has continually pushed boundaries...",
    wordCount: 287,
    highlightedWords: ["distinctive", "expressionism", "boundaries"]
  }
];

const ContextLearning = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  
  // Filter reading texts based on search term
  const filteredTexts = readingTexts.filter(
    text => 
      text.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      text.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-2">Learning Words in Context</h2>
        <p className="text-gray-600">
          Understand how words are used in real sentences and texts to improve retention and usage.
        </p>
      </div>
      
      <Tabs defaultValue="examples" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="examples">Example Sentences</TabsTrigger>
          <TabsTrigger value="texts">Reading Materials</TabsTrigger>
        </TabsList>
        
        <TabsContent value="examples" className="pt-6">
          <div className="space-y-6">
            {contextExamples.map(example => {
              const parts = example.text.split(`**${example.targetWord}**`);
              
              return (
                <Card key={example.id}>
                  <CardContent className="pt-6">
                    <p className="text-lg mb-3">
                      {parts[0]}
                      <Popover>
                        <PopoverTrigger asChild>
                          <span className="bg-yellow-100 px-1 py-0.5 rounded cursor-pointer font-medium">
                            {example.targetWord}
                          </span>
                        </PopoverTrigger>
                        <PopoverContent className="w-80">
                          <div className="space-y-2">
                            <h3 className="font-medium">{example.targetWord}</h3>
                            <p className="text-gray-600">{example.definition}</p>
                          </div>
                        </PopoverContent>
                      </Popover>
                      {parts[1]}
                    </p>
                    
                    <div className="text-sm text-gray-500 italic">
                      Source: {example.source}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>
        
        <TabsContent value="texts" className="pt-6">
          <div className="mb-6 flex items-center gap-2">
            <Search className="w-5 h-5 text-gray-400" />
            <Input 
              placeholder="Search reading materials..." 
              value={searchTerm}
              onChange={handleSearchChange}
              className="flex-grow"
            />
          </div>
          
          <div className="space-y-6">
            {filteredTexts.length > 0 ? (
              filteredTexts.map(text => (
                <Card key={text.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex justify-between">
                      <span>{text.title}</span>
                      <span className="text-sm px-2 py-1 bg-gray-100 rounded text-gray-600">
                        {text.level}
                      </span>
                    </CardTitle>
                    <CardDescription>
                      {text.category} • {text.wordCount} words
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      {text.excerpt}
                    </p>
                    <div className="flex items-center gap-2">
                      <Info className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-500">
                        Contains vocabulary: {text.highlightedWords.join(", ")}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="text-center py-12">
                <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium mb-1">No reading materials found</h3>
                <p className="text-gray-500">
                  Try a different search term
                </p>
              </div>
            )}
          </div>
          
          <div className="flex justify-center mt-8">
            <Button variant="outline">
              Browse All Reading Materials
            </Button>
          </div>
        </TabsContent>
      </Tabs>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Word Groups and Relationships</CardTitle>
          <CardDescription>
            Learn vocabulary in related semantic groups to strengthen understanding and retention
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-medium mb-3">Synonyms for "Happy"</h3>
              <div className="flex flex-wrap gap-2">
                {["joyful", "pleased", "delighted", "content", "cheerful", "glad", "elated"].map((word, index) => (
                  <div key={index} className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm">
                    {word}
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-3">Business Vocabulary</h3>
              <div className="flex flex-wrap gap-2">
                {["revenue", "profit", "assets", "liability", "investment", "dividend", "stakeholder"].map((word, index) => (
                  <div key={index} className="px-3 py-1.5 bg-green-50 text-green-700 rounded-full text-sm">
                    {word}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContextLearning;
