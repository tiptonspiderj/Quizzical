import React from "react"
import he from "he"
import { nanoid } from 'nanoid'
import StartPage from "./StartPage"
import Quiz from "./Quiz"

export default function App() {

    const [startQuiz, setStartQuiz] = React.useState(false)
    const [quizOver, setQuizOver] = React.useState(false)
    const [data, setData] = React.useState([])
    const [score, setScore] = React.useState(0)
    const [category, setCategory] = React.useState(9)
    const [level, setLevel] = React.useState("easy")

    let questions = [[], [], [], [], []] 
    let answersWithQuestions = [[], [], [], [], []] 
    const URL = `https://opentdb.com/api.php?amount=5&category=${category}&difficulty=${level}&type=multiple` 

        React.useEffect(()=>{ 
            if (startQuiz){
                fetch(URL)
                .then(res=>res.json() )
                .then(apidata => {               
                    //extract the questions and answers from the API request         
                    apidata.results.map( (question, index) => {
                        // "he" is used to decode html entities to their symbols rather than weird characters
                        questions[index].push(he.decode(question.question))                  
                        question.incorrect_answers.forEach( (element) => 
                            answersWithQuestions[index].push( {"wrong": he.decode(element) } ) 
                        )
                        answersWithQuestions[index].push( { "right": he.decode(question.correct_answer) } )                
                    } )
                    // randomly shuffle the answers for each question                
                    answersWithQuestions.forEach( answer => shuffleAnswers(answer) )
                    // add the questions to make a combined array of questions and answers
                    questions.map( (question, index) => {
                        answersWithQuestions[index].unshift({"question": question})
                        answersWithQuestions[index].unshift({"id": nanoid()})
                    } )
                    //put the data into the format usable for radio buttons
                    setData(formatData(answersWithQuestions))
                    
                } )
                .catch(error => {
                    console.error('Failed to retrieve questions:', error)
            } ) 
            }       
            
        }, [startQuiz] )     

    // function from the web that randomly shuffles an array
    function shuffleAnswers(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }   

    //this function is used to hide the right and wrong answers from the end user
    function formatData(data){
        let tempArray = [[],[],[],[],[]]
        data.forEach((element, index)=> {
            let correctNumber = ""
            if (element[2].right) correctNumber = "one"
            if (element[3].right) correctNumber = "two"
            if (element[4].right) correctNumber = "three"
            if (element[5].right) correctNumber = "four"
            tempArray[index].push({id: element[0].id}) 
            tempArray[index].push ({question: element[1].question} )  
            tempArray[index].push({one:   ( element[2].right || element[2].wrong )})  
            tempArray[index].push({two:   ( element[3].right || element[3].wrong )})    
            tempArray[index].push({three: ( element[4].right || element[4].wrong )})    
            tempArray[index].push({four:  ( element[5].right || element[5].wrong )})  
            tempArray[index].push({rightAnswer: correctNumber})         
        })
        return tempArray
    }

    function checkAnswers() { 
        setQuizOver(quizOver => !quizOver)    
    }

    function reset() {
        setQuizOver(quizOver => !quizOver)
        setStartQuiz(startQuiz => !startQuiz)
    }

    function loadQuiz(){
        setStartQuiz(startQuiz => !startQuiz)     
    }  

    return(        
        <main style = { {
            backgroundImage: startQuiz ? `url(/riddler.jpg)` : `url(/riddle.jpg)`,
            backgroundColor: '#F5F7FB'            
          } }>

            { !startQuiz &&  
                <StartPage  
                    loadQuiz = { loadQuiz } 
                    setCategory = {setCategory}
                    setLevel = {setLevel}
                    category = {category}
                /> 
            }     

            { startQuiz &&  
                <Quiz 
                    data = { data }
                    quizOver = { quizOver } 
                    setScore = { setScore }
                /> 
            }

            <div className="wrapper">
                { quizOver && <p>Your score is {score}/5.</p>}
                { startQuiz &&
                    (
                        <div>                   
                            <div className="button-container">
                                <button onClick = { quizOver ? reset : checkAnswers } className = "checkAnswers">
                                    { quizOver ? "Play again" : "Check answers" }
                                </button>   
                            </div>              
                        </div>                       
                    )
                }
            </div>
            
        </main>
    )
}