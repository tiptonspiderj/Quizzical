import React from "react"

export  default function Quiz(props){

    const [rerender, setRerender] = React.useState(false)
    
    React.useEffect(()=> {
        if (props.quizOver){            
            setRerender(!rerender)
            const wrongAnswers = document.getElementsByClassName("radio-label wrong")
            props.setScore(5 - wrongAnswers.length)
        } 
             
    }, [props.quizOver])

    function createClassName(answerOption){        
        if ( answerOption === props.rightAnswer && props.quizOver ) {
            return "radio-label right"
        } else {            
            const numbersText = ["one", "two", "three", "four"]
            const answers = document.getElementsByName(props.one)
            
            for (var i = 0; i < answers.length; i++) {
                if ( numbersText[i] === answerOption && props.quizOver) {
                    if ( answers[i].checked ) {
                        return "radio-label wrong"
                    } else {
                        return "radio-label"
                    }                    
                }                      
            } 
            return "radio-label"           
        }        
    }

    return(        
        <div>
            <div className="question">
                {props.question}
            </div>
            <div className="answers">
                        
                <input type="radio" id={props.one} name={props.one} value={props.one} defaultChecked/>
                <label className={createClassName("one")} htmlFor={props.one}> {props.one}
                </label>

                <input type="radio" id={props.two} name={props.one} value={props.two} />
                <label className={createClassName("two")} htmlFor={props.two}> {props.two}
                </label>

                <input type="radio" id={props.three}  name={props.one} value={props.three} />
                <label className={createClassName("three")} htmlFor={props.three}> {props.three}
                </label>

                <input type="radio" id={props.four} name={props.one} value={props.four} />
                <label className={createClassName("four")} htmlFor={props.four}> {props.four}
                </label>
            </div>
            <hr className="line"></hr>
        </div>
    )
}  
