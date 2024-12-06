import { useState, useEffect } from "react"
import { nanoid } from 'nanoid'

export default function Quiz({data, quizOver, setScore}){
    const [rerender, setRerender]               = useState(false)
    const [selectedOption1, setSelectedOption1] = useState("one")
    const [selectedOption2, setSelectedOption2] = useState("one")
    const [selectedOption3, setSelectedOption3] = useState("one")
    const [selectedOption4, setSelectedOption4] = useState("one")
    const [selectedOption5, setSelectedOption5] = useState("one")
   let correctAnswers = []
    
    useEffect(()=> {
        if (quizOver){            
            setRerender(!rerender)
            const wrongAnswers = document.getElementsByClassName("radio-label wrong")
            setScore(5 - wrongAnswers.length)
        }              
    }, [quizOver])

    const handleChange1 = (event) => {
        setSelectedOption1(event.target.value)
    }
    const handleChange2 = (event) => {
        setSelectedOption2(event.target.value)
    }
    const handleChange3 = (event) => {
        setSelectedOption3(event.target.value)
    }
    const handleChange4 = (event) => {
        setSelectedOption4(event.target.value)
    }
    const handleChange5 = (event) => {
        setSelectedOption5(event.target.value)
    }

    //this function determines how the answer options will be displayed with different colors
    //"radio-label" is the classname for every choice before the quiz is over and graded
    function createClassName(answerOption, indexOfQuestion){
        if (!quizOver){
            return "radio-label"   
        } else {
            const numbersText = ["one", "two", "three", "four"]
            const answers = document.getElementsByName(indexOfQuestion)
            for (var i = 0; i < answers.length; i++){
                if (numbersText[i] === answerOption){
                    if ( answerOption === correctAnswers[indexOfQuestion] ) {                       
                        return "radio-label right"
                    } else if (answers[i].checked) {                        
                        return "radio-label wrong"
                    } else {
                        return "radio-label"
                    }     
                }
            }
        }     
    }       

    const questionElements = data.map((element, index)=>{
            const id = element[0].id
            const question = element[1].question 
            const one = element[2].one
            const two = element[3].two
            const three = element[4].three
            const four = element[5].four
            const rightAnswer = element[6].rightAnswer 
            correctAnswers.push(rightAnswer)
            let checkedValue = null
            let changeFunction = null
            if (index === 0){
                checkedValue = selectedOption1.valueOf()
                changeFunction = handleChange1
            } else if (index === 1){
                checkedValue = selectedOption2.valueOf()
                changeFunction = handleChange2
            } else if (index === 2){
                checkedValue = selectedOption3.valueOf()
                changeFunction = handleChange3
            } else if (index === 3){
                checkedValue = selectedOption4.valueOf()
                changeFunction = handleChange4
            } else if (index === 4){
                checkedValue = selectedOption5.valueOf()
                changeFunction = handleChange5
            } 
                return(
                    <div key={nanoid()}>
                        <div className="question">
                            {question}
                        </div>
                        <div className="answers">
                                    
                            <input type="radio" id={one} name={index} value="one" checked={checkedValue == "one".valueOf()}
                                onChange={changeFunction} />
                            <label className={createClassName("one", index)} htmlFor={one}> {one}
                            </label>                
                
                            <input type="radio" id={two} name={index} value={"two"} checked={checkedValue == "two".valueOf()}
                                onChange={changeFunction} />
                            <label className={createClassName("two", index)} htmlFor={two}> {two}
                            </label>
    
                            <input type="radio" id={three}  name={index} value={"three"} checked={checkedValue == "three".valueOf()}
                                onChange={changeFunction} />
                            <label className={createClassName("three", index)} htmlFor={three}> {three}
                            </label>
    
                            <input type="radio" id={four} name={index} value={"four"} checked={checkedValue == "four".valueOf()}
                                onChange={changeFunction} />
                            <label className={createClassName("four", index)} htmlFor={four}> {four}
                            </label>
                            </div>
                            <hr className="line"></hr>
                        </div>
                )            
        })

    return(        
        <div>
            {questionElements}
        </div>
    )
}  
