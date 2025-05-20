
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Volume2, Plus, BookOpen } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface WordDetail {
  term: string;
  phonetic: string;
  partOfSpeech: string;
  definitions: {
    definition: string;
    example?: string;
  }[];
  synonyms: string[];
  antonyms: string[];
  etymology?: string;
  collocations?: string[];
}

// Mock word lookup data
const mockWordDetail: WordDetail = {
  term: "diligent",
  phonetic: "/ˈdɪlɪdʒənt/",
  partOfSpeech: "adjective",
  definitions: [
    {
      definition: "Having or showing care and conscientiousness in one's work or duties.",
      example: "She's a diligent worker who never misses deadlines."
    },
    {
      definition: "Showing careful and persistent work or effort.",
      example: "They made a diligent search for the missing documents."
    }
  ],
  synonyms: ["industrious", "hardworking", "assiduous", "sedulous", "meticulous", "thorough", "attentive", "conscientious"],
  antonyms: ["lazy", "negligent", "idle", "careless", "indifferent"],
  etymology: "From Latin 'diligens', meaning 'attentive, assiduous', present participle of 'diligere', to value or esteem highly.",
  collocations: ["diligent worker", "diligent effort", "diligent student", "diligent research", "diligent search"]
};

const AdvancedLookup = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<WordDetail | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>(["articulate", "profound", "innovation"]);
  const { toast } = useToast();
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchTerm.trim()) return;
    
    // In a real app, this would be an API call
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      setSearchResults(mockWordDetail);
      
      // Add to recent searches if not already there
      if (!recentSearches.includes(searchTerm.toLowerCase())) {
        setRecentSearches([searchTerm.toLowerCase(), ...recentSearches].slice(0, 5));
      }
    }, 800);
  };
  
  const handleAddToVocabulary = () => {
    toast({
      title: "Added to vocabulary",
      description: `"${searchResults?.term}" has been added to your vocabulary list.`
    });
  };
  
  const handlePlayPronunciation = () => {
    toast({
      title: "Playing pronunciation",
      description: "Audio playback would start here in a real app."
    });
  };
  
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-2">Advanced Word Lookup</h2>
        <p className="text-gray-600">
          Look up detailed information about any English word, including definitions, examples, synonyms, and more.
        </p>
      </div>
      
      <Card className="overflow-hidden">
        <CardHeader className="pb-0">
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="Enter a word to look up..." 
                value={searchTerm}
                onChange={handleSearchChange}
                className="pl-9"
              />
            </div>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Searching..." : "Search"}
            </Button>
          </form>
        </CardHeader>
        <CardContent className="pt-4">
          {!searchResults && !isLoading && (
            <div>
              <h3 className="text-sm font-medium mb-2">Recent searches:</h3>
              <div className="flex flex-wrap gap-2">
                {recentSearches.map((term, index) => (
                  <Button 
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => setSearchTerm(term)}
                    className="text-sm"
                  >
                    {term}
                  </Button>
                ))}
              </div>
            </div>
          )}
          
          {isLoading && (
            <div className="text-center py-12">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-primary border-r-transparent"></div>
              <p className="mt-2 text-gray-600">Searching...</p>
            </div>
          )}
          
          {searchResults && (
            <div className="py-4">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-3xl font-bold">{searchResults.term}</h2>
                  <div className="flex items-center gap-2 mt-1 text-gray-600">
                    <span>{searchResults.phonetic}</span>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="h-6 w-6 p-0 rounded-full"
                      onClick={handlePlayPronunciation}
                    >
                      <Volume2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <span className="text-sm text-gray-500 italic">{searchResults.partOfSpeech}</span>
                </div>
                <Button onClick={handleAddToVocabulary}>
                  <Plus className="mr-2 h-4 w-4" />
                  Add to Vocabulary
                </Button>
              </div>
              
              <Tabs defaultValue="definitions" className="mt-6">
                <TabsList>
                  <TabsTrigger value="definitions">Definitions</TabsTrigger>
                  <TabsTrigger value="synonyms">Synonyms & Antonyms</TabsTrigger>
                  <TabsTrigger value="usage">Usage</TabsTrigger>
                  <TabsTrigger value="etymology">Etymology</TabsTrigger>
                </TabsList>
                
                <TabsContent value="definitions" className="pt-4 space-y-4">
                  {searchResults.definitions.map((def, index) => (
                    <div key={index} className="border-b pb-4 last:border-0">
                      <p className="font-medium mb-1">Definition {index + 1}:</p>
                      <p className="text-gray-600">{def.definition}</p>
                      {def.example && (
                        <p className="text-gray-500 italic mt-2">"{def.example}"</p>
                      )}
                    </div>
                  ))}
                </TabsContent>
                
                <TabsContent value="synonyms" className="pt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {searchResults.synonyms && searchResults.synonyms.length > 0 && (
                      <div>
                        <h3 className="font-medium mb-3">Synonyms:</h3>
                        <div className="flex flex-wrap gap-2">
                          {searchResults.synonyms.map((syn, index) => (
                            <div key={index} className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm">
                              {syn}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {searchResults.antonyms && searchResults.antonyms.length > 0 && (
                      <div>
                        <h3 className="font-medium mb-3">Antonyms:</h3>
                        <div className="flex flex-wrap gap-2">
                          {searchResults.antonyms.map((ant, index) => (
                            <div key={index} className="px-3 py-1.5 bg-orange-50 text-orange-700 rounded-full text-sm">
                              {ant}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </TabsContent>
                
                <TabsContent value="usage" className="pt-4">
                  {searchResults.collocations ? (
                    <div>
                      <h3 className="font-medium mb-3">Common Collocations:</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                        {searchResults.collocations.map((collocation, index) => (
                          <div 
                            key={index} 
                            className="p-3 border rounded-md text-sm hover:bg-gray-50"
                          >
                            {collocation}
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-medium mb-2">Usage Tips:</h4>
                        <p className="text-sm text-gray-600">
                          This word is commonly used in formal and academic contexts. 
                          It's often used to describe students, workers, or researchers.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      No usage information available for this word.
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="etymology" className="pt-4">
                  {searchResults.etymology ? (
                    <div>
                      <h3 className="font-medium mb-3">Word Origin:</h3>
                      <p className="text-gray-600">{searchResults.etymology}</p>
                      
                      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-medium mb-2">Historical Usage:</h4>
                        <p className="text-sm text-gray-600">
                          This word has been in use since the 15th century and has maintained its core meaning throughout history,
                          though its usage contexts have expanded over time.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      No etymology information available for this word.
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </div>
          )}
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Dictionary Resources</CardTitle>
          <CardDescription>
            Access advanced dictionary tools to enhance your vocabulary learning
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-4">
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Visual Dictionary</h3>
                <p className="text-sm text-gray-600">
                  Look up words with visual representations to enhance understanding and retention
                </p>
                <Button variant="outline" size="sm" className="mt-3">
                  Open Visual Dictionary
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border rounded-lg p-4">
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <Search className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Contextual Dictionary</h3>
                <p className="text-sm text-gray-600">
                  See how words are used in different contexts with real-world examples
                </p>
                <Button variant="outline" size="sm" className="mt-3">
                  Open Contextual Dictionary
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdvancedLookup;
