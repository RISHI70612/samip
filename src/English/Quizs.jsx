import { useEffect, useState } from "react";







//import useSound from "use-sound";
//import play from "../sounds/play.mp3";
//import correct from "../sounds/correct.mp3";
//import wrong from "../sounds/wrong.mp3";

export default function Quizs({
  data,
  questionNumber,
  setQuestionNumber,
  setStop,
}) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  //const [letsPlay] = useSound(play);
  //const [correctAnswer] = useSound(correct);
  //const [wrongAnswer] = useSound(wrong);

  //useEffect(() => {
    //letsPlay();
  //}, [letsPlay]);

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (a) => {
    setSelectedAnswer(a);
    setClassName("answer active");
    delay(1000, () =>
      setClassName(a.correct ? "answer correct" : "answer wrong")
  );
    
      delay(4000, () => {
      if (a.correct) {
        
          setQuestionNumber((prev) => prev + 1);
          setSelectedAnswer(null);
        }
       
       else  {
      
          setStop(true);
     
       }
      }
      )
       

       if 
         ( questionNumber > 7)
   {
    setStop(true);
   }

       
  }

  
  
  

        
      
  
  return (
    <div className="quiz">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((a) => (
          <div
            className={selectedAnswer === a ? className : "answer"}
            onClick={() => !selectedAnswer && handleClick(a)}
          >
            {a.text}
          </div>
        ))}
      </div>
    </div>
  )
        };