import React from "react"

export default function Button(props) { 

    function checkAnswers() { 
        props.setQuizOver(!props.quizOver)    
    }

    function reset() {
        props.setResetQuiz(!props.resetQuiz)
        props.setQuizOver(!props.quizOver)
        props.setStartQuiz(false)
    }
    
    return(
        <div>                   
            <div className="button-container">
                <button onClick = { props.quizOver ? reset : checkAnswers } className = "checkAnswers">
                    { props.quizOver ? "Play again" : "Check answers" }
                </button>   
            </div>              
        </div>
       
    )
}


  