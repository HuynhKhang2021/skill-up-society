
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Headphones, Mic, VolumeUp, MicOff, Check, X, RefreshCw } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

// Mock pronunciation challenges
const pronunciationChallenges = [
  {
    id: "1",
    word: "Enthusiasm",
    phonetic: "/ɪnˈθuːziæzəm/",
    difficulty: "Intermediate",
    tips: "Focus on the stress on the second syllable (ˈθuː). Make sure the 'th' sound is correct.",
    audioUrl: "#"
  },
  {
    id: "2",
    word: "Particularly",
    phonetic: "/pəˈtɪkjʊləli/",
    difficulty: "Intermediate",
    tips: "Pay attention to the stress on the second syllable (ˈtɪk). Don't rush through the middle part.",
    audioUrl: "#"
  },
  {
    id: "3",
    word: "Thoroughly",
    phonetic: "/ˈθʌrəli/",
    difficulty: "Intermediate",
    tips: "Make sure to pronounce the 'th' sound correctly at the beginning. The stress is on the first syllable.",
    audioUrl: "#"
  },
  {
    id: "4",
    word: "Sixth",
    phonetic: "/sɪksθ/",
    difficulty: "Advanced",
    tips: "This word has a difficult consonant cluster. Practice the 'ks' + 'th' combination.",
    audioUrl: "#"
  }
];

// Mock listening exercises
const listeningExercises = [
  {
    id: "1",
    title: "Business Meeting Vocabulary",
    description: "Listen to a business meeting and identify key vocabulary terms",
    level: "Intermediate",
    duration: "4 min",
    audioUrl: "#"
  },
  {
    id: "2",
    title: "Academic Lecture Terms",
    description: "Listen to parts of an academic lecture and identify specialized terms",
    level: "Advanced",
    duration: "7 min",
    audioUrl: "#"
  },
  {
    id: "3",
    title: "Everyday Conversation Idioms",
    description: "Listen to casual conversations and identify common idioms",
    level: "Beginner",
    duration: "5 min",
    audioUrl: "#"
  }
];

// Mock minimal pairs
const minimalPairs = [
  { pair: ["ship", "sheep"], phonetic: ["/ʃɪp/", "/ʃiːp/"] },
  { pair: ["hit", "heat"], phonetic: ["/hɪt/", "/hiːt/"] },
  { pair: ["live", "leave"], phonetic: ["/lɪv/", "/liːv/"] },
  { pair: ["sit", "seat"], phonetic: ["/sɪt/", "/siːt/"] }
];

const PronunciationPractice = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingComplete, setRecordingComplete] = useState(false);
  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);
  const [activePracticeTab, setActivePracticeTab] = useState("challenges");
  const [feedback, setFeedback] = useState<null | { score: number; issues: string[] }>(null);
  const { toast } = useToast();

  const currentChallenge = pronunciationChallenges[currentChallengeIndex];

  const handleStartRecording = () => {
    // In a real app, this would use the Web Audio API and speech recognition
    setIsRecording(true);
    toast({
      title: "Recording started",
      description: "Speak clearly into your microphone",
    });
    
    // Simulate recording process
    setTimeout(() => {
      setIsRecording(false);
      setRecordingComplete(true);
      // Simulate feedback
      setFeedback({
        score: Math.floor(Math.random() * 40) + 60, // Random score between 60 and 100
        issues: [
          "Stress pattern could be improved",
          "Work on the 'th' sound"
        ]
      });
    }, 3000);
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    toast({
      title: "Recording stopped",
      description: "Try again when you're ready",
    });
  };

  const handlePlayAudio = () => {
    // In a real app, this would play the audio file
    console.log("Playing audio for:", currentChallenge.word);
    toast({
      title: "Playing audio",
      description: `Listen to the correct pronunciation of "${currentChallenge.word}"`,
    });
  };

  const handleNextChallenge = () => {
    if (currentChallengeIndex < pronunciationChallenges.length - 1) {
      setCurrentChallengeIndex(currentChallengeIndex + 1);
      setRecordingComplete(false);
      setFeedback(null);
    }
  };

  const handlePrevChallenge = () => {
    if (currentChallengeIndex > 0) {
      setCurrentChallengeIndex(currentChallengeIndex - 1);
      setRecordingComplete(false);
      setFeedback(null);
    }
  };

  const resetCurrentChallenge = () => {
    setRecordingComplete(false);
    setFeedback(null);
  };

  return (
    <div className="space-y-6">
      <Tabs value={activePracticeTab} onValueChange={setActivePracticeTab} className="w-full">
        <TabsList className="grid grid-cols-2 mb-8">
          <TabsTrigger value="challenges">
            <Mic className="mr-2 h-4 w-4" />
            Pronunciation
          </TabsTrigger>
          <TabsTrigger value="listening">
            <Headphones className="mr-2 h-4 w-4" />
            Listening
          </TabsTrigger>
        </TabsList>

        <TabsContent value="challenges" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>Pronunciation Challenge</span>
                <div className="text-sm font-normal text-gray-500">
                  {currentChallengeIndex + 1} of {pronunciationChallenges.length}
                </div>
              </CardTitle>
              <CardDescription>
                Practice pronouncing challenging words and get instant feedback
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center py-6">
                <h3 className="text-3xl font-bold mb-2">{currentChallenge.word}</h3>
                <p className="text-gray-600 mb-4">{currentChallenge.phonetic}</p>
                <Button variant="outline" onClick={handlePlayAudio} className="mb-6">
                  <VolumeUp className="mr-2 h-4 w-4" />
                  Listen
                </Button>
                
                <div className="max-w-md mx-auto bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Pronunciation Tips:</h4>
                  <p className="text-gray-600 text-sm">{currentChallenge.tips}</p>
                </div>
              </div>
              
              <div className="flex justify-center gap-4">
                <Button
                  variant={isRecording ? "destructive" : "default"}
                  onClick={isRecording ? handleStopRecording : handleStartRecording}
                  disabled={recordingComplete}
                  className="w-40"
                >
                  {isRecording ? (
                    <>
                      <MicOff className="mr-2 h-4 w-4" />
                      Stop Recording
                    </>
                  ) : (
                    <>
                      <Mic className="mr-2 h-4 w-4" />
                      Record Yourself
                    </>
                  )}
                </Button>
                
                {recordingComplete && (
                  <Button 
                    variant="outline" 
                    onClick={resetCurrentChallenge}
                    className="w-40"
                  >
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Try Again
                  </Button>
                )}
              </div>
              
              {feedback && (
                <div className="mt-8 border rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">Your Pronunciation Feedback</h3>
                  <div className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Accuracy Score</span>
                      <span className="text-sm font-medium">{feedback.score}%</span>
                    </div>
                    <Progress value={feedback.score} className="h-2" />
                  </div>
                  
                  {feedback.issues.length > 0 && (
                    <div>
                      <h4 className="text-sm font-medium mb-2">Areas to Improve:</h4>
                      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                        {feedback.issues.map((issue, index) => (
                          <li key={index}>{issue}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button 
                variant="outline" 
                onClick={handlePrevChallenge}
                disabled={currentChallengeIndex === 0}
              >
                Previous
              </Button>
              <Button 
                onClick={handleNextChallenge}
                disabled={currentChallengeIndex === pronunciationChallenges.length - 1}
              >
                Next Challenge
              </Button>
            </CardFooter>
          </Card>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Minimal Pairs Practice</h3>
            <p className="text-gray-600 mb-4">
              Minimal pairs are words that differ by only one sound. Practicing these pairs helps improve your pronunciation precision.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {minimalPairs.map((item, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">"{item.pair[0]}" vs. "{item.pair[1]}"</CardTitle>
                    <CardDescription>
                      {item.phonetic[0]} • {item.phonetic[1]}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-4 pt-0">
                    <div className="flex justify-around">
                      <Button variant="outline" size="sm">
                        <VolumeUp className="mr-1 h-3 w-3" />
                        {item.pair[0]}
                      </Button>
                      <Button variant="outline" size="sm">
                        <VolumeUp className="mr-1 h-3 w-3" />
                        {item.pair[1]}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="listening" className="mt-0 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Listening Comprehension</CardTitle>
              <CardDescription>
                Train your ear to recognize English vocabulary in context
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {listeningExercises.map((exercise) => (
                  <div key={exercise.id} className="flex flex-col md:flex-row gap-4 items-center border-b pb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Headphones className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-medium">{exercise.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">{exercise.description}</p>
                      <div className="flex gap-3">
                        <span className="text-xs px-2 py-1 bg-gray-100 rounded text-gray-600">
                          {exercise.level}
                        </span>
                        <span className="text-xs px-2 py-1 bg-gray-100 rounded text-gray-600">
                          {exercise.duration}
                        </span>
                      </div>
                    </div>
                    <Button className="shrink-0">
                      Start Exercise
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Dictation Exercise</CardTitle>
              <CardDescription>
                Listen to audio and type what you hear to improve both listening and spelling
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-center my-6">
                <Button>
                  <VolumeUp className="mr-2 h-4 w-4" />
                  Play Audio
                </Button>
              </div>
              
              <div>
                <label htmlFor="dictation" className="block text-sm font-medium mb-1">
                  Type what you hear:
                </label>
                <Input id="dictation" placeholder="Type the words you hear..." />
              </div>
              
              <div className="flex justify-center mt-2">
                <Button>Submit</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PronunciationPractice;
