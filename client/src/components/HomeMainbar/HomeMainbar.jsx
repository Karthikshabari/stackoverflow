import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./HomeMainbar.css";
import Questions from "./Questions";
import QuestionList from "./QuestionList";

const HomeMainbar = () => {
  const location = useLocation();
  const user = 1;
  const navigate = useNavigate();

  const questionsList = useSelector((state) => state.questionsReducer);
  //console.log(questionsList);

  // var questionsList = [
  //   {
  //     _id: 1,
  //     upVotes: 3,
  //     downVotes: 2,
  //     noOfAnswers: 2,
  //     questionTitle: "What is a function?",
  //     questionBody: "It meant to be",
  //     questionTags: ["java", "node js", "reactjs", "mongoDB"],
  //     userPosted: "usha",
  //     userId: 1,
  //     askedOn: "nov 19",
  //     answer: [{
  //       answerBody: "Answer",
  //       userAnswered: 'kumar',
  //       answeredOn: "nov20",
  //       userId: 2,
  //     }]
  //   },
  //   {
  //     _id: 2,
  //     upvotes: 3,
  //     downvotes: 2,
  //     noOfAnswers: 0,
  //     questionTitle: "What is a function?",
  //     questionBody: "It meant to be",
  //     questionTags: ["java", "node js" , "html"],
  //     userPosted: "usha",
  //     userId: 1,
  //     askedOn: "nov 19",
  //     answer: [{
  //       answerBody: "Answer",
  //       userAnswered: 'kumar',
  //       answeredOn: "nov20",
  //       userId: 2,
  //     }]
  //   }
  // ]

  const checkAuth = () => {
    if (user === null) {
      alert("login or signup to ask a question");
      navigate("/Auth");
    } else {
      navigate("/AskQuestion");
    }
  };

  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}
        <button onClick={checkAuth} className="ask-btn">
          Ask Question
        </button>
      </div>
      <div>
        {questionsList.data === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{questionsList.data.length} Questions</p>
            <>
              {questionsList.data.map((question) => (
                <Questions question={question} key={question._id} />
              ))}
            </>
          </>
        )}
      </div>
    </div>
  );
};

export default HomeMainbar;
