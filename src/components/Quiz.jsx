import React from "react"
import { nanoid } from 'nanoid'

export default function Quiz({data, quizOver, setScore}){
    const [rerender, setRerender] = React.useState(false)
    const [selectedOption1, setSelectedOption1] = React.useState("one")
    const [selectedOption2, setSelectedOption2] = React.useState("one")
    const [selectedOption3, setSelectedOption3] = React.useState("one")
    const [selectedOption4, setSelectedOption4] = React.useState("one")
    const [selectedOption5, setSelectedOption5] = React.useState("one")
   let correctAnswers = []
    
    React.useEffect(()=> {
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
    function createClassName(answerOption){
        if (!quizOver){
            return "radio-label"   
        } else {
            const numbersText = ["one", "two", "three", "four"]
            const answers0 = document.getElementsByName(0)
            for (var i = 0; i < answers0.length; i++){
                if (numbersText[i] === answerOption){
                    if ( answers0[i].checked && (answerOption === correctAnswers[0])) {                       
                        return "radio-label right"
                    } else if (answers0[i].checked) {                        
                        return "radio-label wrong"
                    } else {
                        return "radio-label"
                    }     
                }
            }
        }     
    }

    function createClassName1(answerOption){
        if (!quizOver){
            return "radio-label"   
        } else {
            const numbersText = ["one", "two", "three", "four"]           
            const answers1 = document.getElementsByName(1)           
            for (var i = 0; i < answers1.length; i++){
                if (numbersText[i] === answerOption){
                    if ( answers1[i].checked && (answerOption === correctAnswers[1])) {
                        console.log("right here")
                        return "radio-label right"
                    } else if (answers1[i].checked) {
                        console.log("wrong here")
                        return "radio-label wrong"
                    } else {
                        return "radio-label"
                    }     
                }
            }
        }     
    }

    function createClassName2(answerOption){
        if (!quizOver){
            return "radio-label"   
        } else {
            const numbersText = ["one", "two", "three", "four"]           
            const answers2 = document.getElementsByName(2)           
            for (var i = 0; i < answers2.length; i++){
                if (numbersText[i] === answerOption){
                    if ( answers2[i].checked && (answerOption === correctAnswers[2])) {
                        console.log("right here")
                        return "radio-label right"
                    } else if (answers2[i].checked) {
                        console.log("wrong here")
                        return "radio-label wrong"
                    } else {
                        return "radio-label"
                    }     
                }
            }
        }     
    }

    function createClassName3(answerOption){
        if (!quizOver){
            return "radio-label"   
        } else {
            const numbersText = ["one", "two", "three", "four"]            
            const answers3 = document.getElementsByName(3)           
            for (var i = 0; i < answers3.length; i++){
                if (numbersText[i] === answerOption){
                    if ( answers3[i].checked && (answerOption === correctAnswers[3])) {
                        console.log("right here")
                        return "radio-label right"
                    } else if (answers3[i].checked) {
                        console.log("wrong here")
                        return "radio-label wrong"
                    } else {
                        return "radio-label"
                    }     
                }
            }
        }     
    }

    function createClassName4(answerOption){
        if (!quizOver){
            return "radio-label"   
        } else {
            const numbersText = ["one", "two", "three", "four"]            
            const answers4 = document.getElementsByName(4)
            for (var i = 0; i < answers4.length; i++){
                if (numbersText[i] === answerOption){
                    if ( answers4[i].checked && (answerOption === correctAnswers[4])) {
                        console.log("right here")
                        return "radio-label right"
                    } else if (answers4[i].checked) {
                        console.log("wrong here")
                        return "radio-label wrong"
                    } else {
                        return "radio-label"
                    }     
                }
            }
        }     
    }

    const questionElements = data.map((element, index)=>{
            let id = element[0].id
            let question = element[1].question 
            let one = element[2].one
            let two = element[3].two
            let three = element[4].three
            let four = element[5].four
            let rightAnswer = element[6].rightAnswer 
            correctAnswers.push(rightAnswer)
            if (index === 0){
                return(
                    <div key={nanoid()}>
                        <div className="question">
                            {question}
                        </div>
                        <div className="answers">
                                    
                            <input type="radio" id={one} name={index} value="one" checked={selectedOption1.valueOf() == "one".valueOf()}
                                onChange={handleChange1} />
                            <label className={createClassName("one")} htmlFor={one}> {one}
                            </label>                
                
                            <input type="radio" id={two} name={index} value={"two"} checked={selectedOption1.valueOf() == "two".valueOf()}
                                onChange={handleChange1} />
                            <label className={createClassName("two")} htmlFor={two}> {two}
                            </label>
    
                            <input type="radio" id={three}  name={index} value={"three"} checked={selectedOption1.valueOf() == "three".valueOf()}
                                onChange={handleChange1} />
                            <label className={createClassName("three")} htmlFor={three}> {three}
                            </label>
    
                            <input type="radio" id={four} name={index} value={"four"} checked={selectedOption1.valueOf() == "four".valueOf()}
                                onChange={handleChange1} />
                            <label className={createClassName("four")} htmlFor={four}> {four}
                            </label>
                            </div>
                            <hr className="line"></hr>
                        </div>
                )
            } else if (index === 1){
                return(
                    <div key={nanoid()}>
                        <div className="question">
                            {question}
                        </div>
                        <div className="answers">
                                    
                            <input type="radio" id={one} name={index} value="one" checked={selectedOption2.valueOf() == "one".valueOf()}
                                onChange={handleChange2} />
                            <label className={createClassName1("one")} htmlFor={one}> {one}
                            </label>                
                
                            <input type="radio" id={two} name={index} value={"two"} checked={selectedOption2.valueOf() == "two".valueOf()}
                                onChange={handleChange2} />
                            <label className={createClassName1("two")} htmlFor={two}> {two}
                            </label>
    
                            <input type="radio" id={three}  name={index} value={"three"} checked={selectedOption2.valueOf() == "three".valueOf()}
                                onChange={handleChange2} />
                            <label className={createClassName1("three")} htmlFor={three}> {three}
                            </label>
    
                            <input type="radio" id={four} name={index} value={"four"} checked={selectedOption2.valueOf() == "four".valueOf()}
                                onChange={handleChange2} />
                            <label className={createClassName1("four")} htmlFor={four}> {four}
                            </label>
                            </div>
                            <hr className="line"></hr>
                        </div>
                )
            }else if (index === 2){
                return(
                    <div key={nanoid()}>
                        <div className="question">
                            {question}
                        </div>
                        <div className="answers">
                                    
                            <input type="radio" id={one} name={index} value="one" checked={selectedOption3.valueOf() == "one".valueOf()}
                                onChange={handleChange3} />
                            <label className={createClassName2("one")} htmlFor={one}> {one}
                            </label>                
                
                            <input type="radio" id={two} name={index} value={"two"} checked={selectedOption3.valueOf() == "two".valueOf()}
                                onChange={handleChange3} />
                            <label className={createClassName2("two")} htmlFor={two}> {two}
                            </label>
    
                            <input type="radio" id={three}  name={index} value={"three"} checked={selectedOption3.valueOf() == "three".valueOf()}
                                onChange={handleChange3} />
                            <label className={createClassName2("three")} htmlFor={three}> {three}
                            </label>
    
                            <input type="radio" id={four} name={index} value={"four"} checked={selectedOption3.valueOf() == "four".valueOf()}
                                onChange={handleChange3} />
                            <label className={createClassName2("four")} htmlFor={four}> {four}
                            </label>
                            </div>
                            <hr className="line"></hr>
                        </div>
                )
            }else if (index === 3){
                return(
                    <div key={nanoid()}>
                        <div className="question">
                            {question}
                        </div>
                        <div className="answers">
                                    
                            <input type="radio" id={one} name={index} value="one" checked={selectedOption4.valueOf() == "one".valueOf()}
                                onChange={handleChange4} />
                            <label className={createClassName3("one")} htmlFor={one}> {one}
                            </label>                
                
                            <input type="radio" id={two} name={index} value={"two"} checked={selectedOption4.valueOf() == "two".valueOf()}
                                onChange={handleChange4} />
                            <label className={createClassName3("two")} htmlFor={two}> {two}
                            </label>
    
                            <input type="radio" id={three}  name={index} value={"three"} checked={selectedOption4.valueOf() == "three".valueOf()}
                                onChange={handleChange4} />
                            <label className={createClassName3("three")} htmlFor={three}> {three}
                            </label>
    
                            <input type="radio" id={four} name={index} value={"four"} checked={selectedOption4.valueOf() == "four".valueOf()}
                                onChange={handleChange4} />
                            <label className={createClassName3("four")} htmlFor={four}> {four}
                            </label>
                            </div>
                            <hr className="line"></hr>
                        </div>
                )
            }else {
                return(
                    <div key={nanoid()}>
                        <div className="question">
                            {question}
                        </div>
                        <div className="answers">
                                    
                            <input type="radio" id={one} name={index} value="one" checked={selectedOption5.valueOf() == "one".valueOf()}
                                onChange={handleChange5} />
                            <label className={createClassName4("one")} htmlFor={one}> {one}
                            </label>                
                
                            <input type="radio" id={two} name={index} value={"two"} checked={selectedOption5.valueOf() == "two".valueOf()}
                                onChange={handleChange5} />
                            <label className={createClassName4("two")} htmlFor={two}> {two}
                            </label>
    
                            <input type="radio" id={three}  name={index} value={"three"} checked={selectedOption5.valueOf() == "three".valueOf()}
                                onChange={handleChange5} />
                            <label className={createClassName4("three")} htmlFor={three}> {three}
                            </label>
    
                            <input type="radio" id={four} name={index} value={"four"} checked={selectedOption5.valueOf() == "four".valueOf()}
                                onChange={handleChange5} />
                            <label className={createClassName4("four")} htmlFor={four}> {four}
                            </label>
                            </div>
                            <hr className="line"></hr>
                        </div>
                )
            }
            
        })


    return(        
        <div>
            {questionElements}
        </div>
    )
}  
