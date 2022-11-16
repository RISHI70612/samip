import { useEffect } from 'react';
import { useState ,useMemo} from 'react'
import './apps.css'
import Quizs from "./Quizs"
import Timer from './Timer';


function Apps() {
  const [questionNumber, setQuestionNumber] = useState(1)
  const [stop, setStop] = useState(false)
  const [scored, setScored]= useState ("0")
  const data = [
    {
      id: 1,
      question: 'Rolex is a company that specializes in what type of product?',
      answers: [
        {
          text: 'Phone',
          correct: false,
        },
        {
          text: 'Watches',
          correct: true,
        },
        {
          text: 'Food',
          correct: false,
        },
        {
          text: 'Cosmetic',
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: 'When did the website `Facebook` launch?',
      answers: [
        {
          text: '2004',
          correct: true,
        },
        {
          text: '2005',
          correct: false,
        },
        {
          text: '2006',
          correct: false,
        },
        {
          text: '2007',
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: 'Who played the character of harry potter in movie?',
      answers: [
        {
          text: 'Johnny Deep',
          correct: false,
        },
        {
          text: 'Leonardo Di Caprio',
          correct: false,
        },
        {
          text: 'Denzel Washington',
          correct: false,
        },
        {
          text: 'Daniel Red Cliff',
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: 'Who played the character of harry potter in movie?',
      answers: [
        {
          text: 'Johnny Deep',
          correct: false,
        },
        {
          text: 'Leonardo Di Caprio',
          correct: false,
        },
        {
          text: 'Denzel Washington',
          correct: false,
        },
        {
          text: 'Daniel Red Cliff',
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: 'Who played the character of harry potter in movie?',
      answers: [
        {
          text: 'Johnny Deep',
          correct: false,
        },
        {
          text: 'Leonardo Di Caprio',
          correct: false,
        },
        {
          text: 'Denzel Washington',
          correct: false,
        },
        {
          text: 'Daniel Red Cliff',
          correct: true,
        },
      ],
    },
    {
      id: 6,
      question: 'Who played the character of harry potter in movie?',
      answers: [
        {
          text: 'Johnny Deep',
          correct: false,
        },
        {
          text: 'Leonardo Di Caprio',
          correct: false,
        },
        {
          text: 'Denzel Washington',
          correct: false,
        },
        {
          text: 'Daniel Red Cliff',
          correct: true,
        },
      ],
    },
    {
      id: 7,
      question: 'Who played the character of harry potter in movie?',
      answers: [
        {
          text: 'Johnny Deep',
          correct: false,
        },
        {
          text: 'Leonardo Di Caprio',
          correct: false,
        },
        {
          text: 'Denzel Washington',
          correct: false,
        },
        {
          text: 'Daniel Red Cliff',
          correct: true,
        },
      ],
    },
    {
      id: 8,
      question: 'Who played the character of harry potter in movie?',
      answers: [
        {
          text: 'Johnny Deep',
          correct: false,
        },
        {
          text: 'Leonardo Di Caprio',
          correct: false,
        },
        {
          text: 'Denzel Washington',
          correct: false,
        },
        {
          text: 'Daniel Red Cliff',
          correct: true,
        },
      ],
    },
    {
      id: 9,
      question: 'Who played the character of harry potter in movie?',
      answers: [
        {
          text: 'Johnny Deep',
          correct: false,
        },
        {
          text: 'Leonardo Di Caprio',
          correct: false,
        },
        {
          text: 'Denzel Washington',
          correct: false,
        },
        {
          text: 'Daniel Red Cliff',
          correct: true,
        },
      ],
    },
    {
      id: 10,
      question: 'Who played the character of harry potter in movie?',
      answers: [
        {
          text: 'Johnny Deep',
          correct: false,
        },
        {
          text: 'Leonardo Di Caprio',
          correct: false,
        },
        {
          text: 'Denzel Washington',
          correct: false,
        },
        {
          text: 'Daniel Red Cliff',
          correct: true,
        },
      ],
    },
  ]

  const moneyPyramid = useMemo (()=>
    [
    { id: 1, point: '100' },
  { id: 2, point: '200' },
  { id: 3, point: '300' },
  { id: 4, point: '400' },
  { id: 5, point: '500' },
  { id: 6, point: '600' },
  { id: 7, point: '700' },
  { id: 8, point: '800' },
  { id: 9, point: '900' },
  { id: 10, point: '1000' },
].reverse(),
[])
   

  useEffect(()=>{
  questionNumber >1 && setScored(moneyPyramid.find((m)=>m.id === questionNumber-1).point)
  },[ questionNumber,moneyPyramid])

  

  return (
    <div className="app">
      <div className="main">
        {stop ? (
        <h1 className='endText'><div className='text'>you scored:{scored}</div></h1>
        ):(
        <>
        <div className="top">
        <div className="timer">
          <Timer setStop={setStop} questionNumber={questionNumber}/>
          </div>
      </div>
      <div className="buttom">
        <Quizs
          data={data
          }
          setStop={setStop}
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}
        />
      </div>
      </>
      )
      }
        
      </div>
      <div className="point">
        <ul className="moneyList">
        
        </ul>
      </div>
    </div>
  )
}
export default Apps
