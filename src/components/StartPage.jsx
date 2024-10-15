import React from "react"

export default function StartPage({loadQuiz, setCategory, setLevel, category}) {
    const [categories, setCategories] = React.useState([])

    React.useEffect( () => {
        fetch("https://opentdb.com/api_category.php")
        .then(res=> res.json())
        .then(categoryList => {
            setCategories((prev) => {
                let temp = categoryList.trivia_categories.map(category => [category.id, category.name])           
            return temp 
            })             
        })
    }, [])   
    
    const handleCategoryChange = (event) => {
        setCategory(event.target.value)
    }

    const handleLevelChange = (event) => {
        setLevel(event.target.value)
    }

    return(
        <div className="start-page">
            <h1>Quizzical</h1>
            <button onClick={loadQuiz}>Start Quiz</button>
            <div className="select-wrapper">
                <div className="select">
                    <select id="categoryList" 
                        className="category" 
                        value={category}
                        onChange={handleCategoryChange} 
                        size="1"
                        name="list of categories"
                    >
                        { categories.map( (element) => {
                            return  <option key={element[0]} value={element[0]}>
                                {element[1]}
                            </option>
                            }) 
                        }                        
                    </select>
                </div>
                <div className="select">
                    <select 
                        id="levelList" 
                        className="level"
                        onChange={handleLevelChange}
                        size = "1"
                        name="game level options"
                    >
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>                        
                    </select>
                </div>
            </div>
            
        </div>
    )
}