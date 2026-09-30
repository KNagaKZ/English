export const weeks = [
  { week: 1, topic: "My Family", prompt: "Speak for approximately one minute about your family.", questions: ["Who is in your family?","What do you like doing together?","Who are you closest to?","Why?"] },
  { week: 2, topic: "My School Life", prompt: "Speak about your school life, subjects and routines.", questions: ["What subjects do you enjoy?","What is a normal school day like?","What is difficult?","What do you want to improve?"] },
  { week: 3, topic: "Technology in Our Lives", prompt: "Speak about how technology affects your daily life.", questions: ["What devices do you use?","How do they help you?","What problems can technology cause?","How can students use technology wisely?"] },
  { week: 4, topic: "Friendship", prompt: "Speak about friendship and what makes a good friend.", questions: ["What makes a good friend?","How do friends help each other?","What problems can friends have?","How can they solve them?"] },
  { week: 5, topic: "Social Media", prompt: "Speak about the advantages and disadvantages of social media.", questions: ["Why do teenagers use social media?","What are the benefits?","What are the risks?","What rules would you suggest?"] },
  { week: 6, topic: "My Future", prompt: "Speak about your future plans and goals.", questions: ["What job interests you?","What skills do you need?","Where would you like to study or work?","What will you do next?"] },
];

export const mockProgress = [
  { week: "W1", fluency: 55, grammar: 61, vocabulary: 58, task: 66, overall: 60 },
  { week: "W2", fluency: 60, grammar: 64, vocabulary: 63, task: 69, overall: 64 },
  { week: "W3", fluency: 66, grammar: 69, vocabulary: 68, task: 74, overall: 69 },
  { week: "W4", fluency: 70, grammar: 72, vocabulary: 73, task: 78, overall: 73 },
  { week: "W5", fluency: 74, grammar: 74, vocabulary: 77, task: 81, overall: 77 },
  { week: "W6", fluency: 78, grammar: 76, vocabulary: 81, task: 84, overall: 80 },
];

export const mockFeedback = {
  transcript: "My best friend is Arman. We know each other since five years. He is good and we often play football together.",
  scores: { fluency: 72, grammar: 65, vocabulary: 70, task: 80 },
  positives: ["You spoke clearly and stayed on topic.","You gave a personal example.","Your speech had a clear beginning and ending."],
  improvements: ["Use present perfect for an action that started in the past and continues now.","Try to reduce long pauses between ideas.","Add one more reason or example."],
  words: ["supportive","reliable","enjoyable","similar interests","spend time together"],
  correction: { bad: "We know each other since five years.", good: "We have known each other for five years." }
};
