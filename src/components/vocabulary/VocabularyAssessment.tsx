
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Check } from "lucide-react";

interface Question {
  id: string;
  type: 'multiple-choice' | 'fill-blank' | 'matching' | 'true-false';
  text: string;
  options?: string[];
  correctAnswer: string | string[];
  userAnswer?: string | string[];
  explanation?: string;
}

// Mock assessment data
const mockQuestions: Question[] = [
  {
    id: '1',
    type: 'multiple-choice',
    text: 'What does "ubiquitous" mean?',
    options: [
      'Rare and unusual',
      'Present everywhere',
      'Completely transparent',
      'Extremely heavy'
    ],
    correctAnswer: 'Present everywhere',
    explanation: 'Ubiquitous means existing or being everywhere at the same time; constantly encountered; widespread.'
  },
  {
    id: '2',
    type: 'multiple-choice',
    text: 'Choose the best synonym for "arduous".',
    options: [
      'Easy',
      'Difficult',
      'Interesting',
      'Colorful'
    ],
    correctAnswer: 'Difficult',
    explanation: 'Arduous means requiring great exertion; laborious; difficult.'
  },
  {
    id: '3',
    type: 'fill-blank',
    text: 'His argument was so __________ that nobody could find any flaws in it.',
    options: [
      'cogent',
      'congenial',
      'convivial',
      'convoluted'
    ],
    correctAnswer: 'cogent',
    explanation: 'Cogent means clear, logical, and convincing.'
  },
  {
    id: '4',
    type: 'multiple-choice',
    text: 'What is the meaning of "ephemeral"?',
    options: [
      'Lasting forever',
      'Extremely beautiful',
      'Short-lived',
      'Dangerous'
    ],
    correctAnswer: 'Short-lived',
    explanation: 'Ephemeral means lasting for a very short time.'
  },
  {
    id: '5',
    type: 'true-false',
    text: '"Benevolent" and "malevolent" are antonyms.',
    options: ['True', 'False'],
    correctAnswer: 'True',
    explanation: 'Benevolent means kind and charitable, while malevolent means having or showing a wish to do evil to others.'
  }
];

// Mock level assessments
const levelAssessments = [
  {
    level: 'Beginner',
    description: 'Tests vocabulary for everyday situations and basic communication',
    questions: 20,
    estimatedTime: '15 minutes'
  },
  {
    level: 'Intermediate',
    description: 'Tests vocabulary for complex situations and topics',
    questions: 30,
    estimatedTime: '25 minutes'
  },
  {
    level: 'Advanced',
    description: 'Tests vocabulary for academic and professional contexts',
    questions: 40,
    estimatedTime: '35 minutes'
  }
];

const VocabularyAssessment = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [showResults, setShowResults] = useState(false);
  const [assessmentStarted, setAssessmentStarted] = useState(false);
  
  const startAssessment = () => {
    setAssessmentStarted(true);
    setShowResults(false);
    setCurrentQuestionIndex(0);
    setAnswers({});
  };
  
  const handleAnswer = (answer: string) => {
    setAnswers({
      ...answers,
      [mockQuestions[currentQuestionIndex].id]: answer
    });
  };
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex < mockQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };
  
  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  const calculateScore = () => {
    let correct = 0;
    mockQuestions.forEach(question => {
      const userAnswer = answers[question.id];
      if (userAnswer && userAnswer === question.correctAnswer) {
        correct++;
      }
    });
    return {
      correct,
      total: mockQuestions.length,
      percentage: Math.round((correct / mockQuestions.length) * 100)
    };
  };

  const currentQuestion = mockQuestions[currentQuestionIndex];
  const isAnswered = answers[currentQuestion?.id] !== undefined;
  const score = calculateScore();

  if (!assessmentStarted) {
    return (
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Vocabulary Assessment</h2>
          <p className="text-gray-600 mb-6">
            Evaluate your vocabulary level with our assessment tests. Choose the level that best matches your current skills.
          </p>
          
          <div className="space-y-4">
            {levelAssessments.map((assessment, index) => (
              <Card key={index} className={`hover:border-primary cursor-pointer transition-colors ${index === 1 ? 'border-primary' : ''}`}>
                <CardHeader className="pb-2">
                  <CardTitle>{assessment.level} Assessment</CardTitle>
                  <CardDescription>{assessment.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{assessment.questions} questions</span>
                    <span>{assessment.estimatedTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 flex justify-center">
            <Button size="lg" onClick={startAssessment}>
              Start Sample Assessment
            </Button>
          </div>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Custom Vocabulary Tests</CardTitle>
            <CardDescription>
              Create tests from your own word lists to track your progress
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2">
              <Checkbox id="academic" />
              <label htmlFor="academic" className="text-sm">Academic Words</label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="business" />
              <label htmlFor="business" className="text-sm">Business Terms</label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="toefl" />
              <label htmlFor="toefl" className="text-sm">TOEFL Preparation</label>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">Generate Custom Test</Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  if (showResults) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Assessment Results</h2>
          <p className="text-gray-600">
            You scored {score.correct} out of {score.total} questions correctly.
          </p>
          
          <div className="mt-6 mb-8">
            <div className="flex justify-between mb-2 text-sm font-medium">
              <span>Score: {score.percentage}%</span>
              <span>
                {score.percentage >= 80 ? 'Excellent!' : 
                 score.percentage >= 60 ? 'Good' : 
                 score.percentage >= 40 ? 'Fair' : 'Needs Improvement'}
              </span>
            </div>
            <Progress 
              value={score.percentage} 
              className="h-3"
            />
          </div>
        </div>
        
        <div className="space-y-6 mt-8">
          <h3 className="text-xl font-semibold">Review Your Answers</h3>
          
          {mockQuestions.map((question, index) => {
            const userAnswer = answers[question.id];
            const isCorrect = userAnswer === question.correctAnswer;
            
            return (
              <Card key={question.id} className={`border-l-4 ${isCorrect ? 'border-l-green-400' : 'border-l-red-400'}`}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">
                    Question {index + 1}: {question.text}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 pb-2">
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <span className="font-medium">Your answer:</span>
                      <span className={isCorrect ? 'text-green-600' : 'text-red-600'}>
                        {userAnswer || 'No answer'}
                      </span>
                    </div>
                    
                    {!isCorrect && (
                      <div className="flex gap-2">
                        <span className="font-medium">Correct answer:</span>
                        <span className="text-green-600">{question.correctAnswer}</span>
                      </div>
                    )}
                    
                    {question.explanation && (
                      <div className="bg-gray-50 p-2 rounded text-sm">
                        <span className="font-medium">Explanation: </span>
                        {question.explanation}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
          
          <div className="flex justify-center mt-8">
            <Button onClick={() => setAssessmentStarted(false)}>
              Return to Assessment Selection
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">Sample Vocabulary Assessment</h2>
          <p className="text-gray-600">Test your vocabulary knowledge</p>
        </div>
        <div className="text-sm text-gray-500">
          Question {currentQuestionIndex + 1} of {mockQuestions.length}
        </div>
      </div>
      
      <Progress 
        value={((currentQuestionIndex) / mockQuestions.length) * 100} 
        className="mb-8 h-2"
      />
      
      <div className="space-y-6">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-medium mb-4">{currentQuestion.text}</h3>
            
            {currentQuestion.type === 'multiple-choice' && (
              <RadioGroup 
                value={answers[currentQuestion.id] as string || ""} 
                onValueChange={handleAnswer}
              >
                <div className="space-y-3">
                  {currentQuestion.options?.map((option, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <RadioGroupItem value={option} id={`option-${i}`} />
                      <Label htmlFor={`option-${i}`}>{option}</Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            )}

            {currentQuestion.type === 'fill-blank' && (
              <RadioGroup 
                value={answers[currentQuestion.id] as string || ""} 
                onValueChange={handleAnswer}
              >
                <div className="space-y-3">
                  {currentQuestion.options?.map((option, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <RadioGroupItem value={option} id={`option-${i}`} />
                      <Label htmlFor={`option-${i}`}>{option}</Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            )}

            {currentQuestion.type === 'true-false' && (
              <RadioGroup 
                value={answers[currentQuestion.id] as string || ""} 
                onValueChange={handleAnswer}
              >
                <div className="space-y-3">
                  {currentQuestion.options?.map((option, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <RadioGroupItem value={option} id={`option-${i}`} />
                      <Label htmlFor={`option-${i}`}>{option}</Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            )}
          </CardContent>
        </Card>
      </div>
      
      <div className="flex justify-between mt-8">
        <Button 
          variant="outline" 
          onClick={handlePrevQuestion}
          disabled={currentQuestionIndex === 0}
        >
          Previous
        </Button>
        
        <Button 
          onClick={handleNextQuestion}
          disabled={!isAnswered}
        >
          {currentQuestionIndex === mockQuestions.length - 1 ? 'Finish' : 'Next Question'}
        </Button>
      </div>
    </div>
  );
};

export default VocabularyAssessment;
