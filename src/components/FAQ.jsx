import React, {useState} from "react";
import {FaChevronDown} from "react-icons/fa6";

const questionsAndAnswers = [
  {
    question: "Can education flashcards be used for all age groups?",
    answer:
      "Yes, education flashcards can be tailored for different age groups, covering various subjects and topics suitable for learners of all ages.",
  },
  {
    question: "How do education flashcards work?",
    answer:
      "Education flashcards typically present a question or problem on one side and the corresponding answer or solution on the other. Learners can use them for self-testing and reinforcement of key concepts.",
  },
  {
    question: "Can education flashcards be used for test preparation?",
    answer:
      "Absolutely! Education flashcards are an effective tool for test preparation. They help in reviewing and reinforcing important information, making it easier for learners to recall during exams.",
  },
];

const FAQ = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleQuestionClick = (index) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  return (
    <div className="lg:m-16 lg:ml-32 md:m-10 lg:w-7/12 md:w-3/4">
      <span className="text-gradient font-bold text-5xl">FAQ</span>
      <div className="flex flex-col">
        {questionsAndAnswers.map((qa, index) => (
          <div className="flex relative flex-col " key={index}>
            <div
              className="cursor-pointer font-bold h-14 p-3  rounded-2xl border-2 mt-8 border-[#217EEC] w-full"
              onClick={() => handleQuestionClick(index)}
            >
              <span className="lg:ml-4">{qa.question}</span>
              <div className="absolute right-4 top-12">
                <FaChevronDown cursor="pointer" />
              </div>
            </div>
            {selectedQuestion === index && (
              <div className="p-4 mt-4 bg-gray-100 rounded-md">
                <span>{qa.answer}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
