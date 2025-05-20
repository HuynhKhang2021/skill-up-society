
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus } from "lucide-react";

interface WordList {
  id: string;
  name: string;
  description: string;
  wordCount: number;
  lastModified: string;
}

interface WordListCollectionProps {
  wordLists: WordList[];
}

const WordListCollection: React.FC<WordListCollectionProps> = ({ wordLists }) => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Your Word Lists</h3>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Create List
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {wordLists.map(list => (
          <Card key={list.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{list.name}</CardTitle>
              <CardDescription>{list.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between text-sm">
                <span>{list.wordCount} words</span>
                <span className="text-gray-500">Updated {list.lastModified}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">View List</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WordListCollection;
