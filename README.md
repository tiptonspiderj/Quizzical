# Quizzical
This is general trivia game to be played with yourself or friends.

## Description

This project was made using Visual Code for the IDE along with React and Vite for compiling the code. This application reaches out to the Open Trivia Database API for the questions displayed in the application.
You can select the trivia category from list of categories available from the Trivia Database API.  You can also choose the level of difficulty for the questions.  Only five questions are displayed at a time.  The application will tell you how you did on the quiz when you select the "Check answers" button.

## Getting Started

![application images](https://github.com/tiptonspiderj/Quizzical/blob/main/public/readme.png)

### Dependencies

The dependencies are React and the Vite compiler.  I also used Visual Code to make the project from scratch.

### Installing for Windows

You can make an executable installer from my project using java's jpackage tool and the following commands:

 jlink --module-path "Your path to JavaFX-Mods-jars" --add-modules=ALL-MODULE-PATH --output runtime
 
jpackage -t exe --name Passman --description "Password manager Author: Jeremy Tipton" --app-version 1.0.0 --input input 
--dest output --main-jar Passman.jar --win-shortcut --runtime-image runtime --icon src\images\Passman1.ico

### Executing program

If you just want to run the program from the executable jar in the "input" folder you can use the command:

java -jar --module-path "YOUR PATH TO\javafxsdk17.0.0.1\lib" --add-modules=ALL-MODULE-PATH Passman.jar

## Authors

Contributors names and contact info

Jeremy Tipton  
[@tiptonspiderj1](https://tiptonspiderj1.com)

## Version History

* 1.0.0
    * Initial Release

## Feedback

If you have any feedback, please reach out to me at tiptonspiderj1@aol.com

## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white)
![JavaFX](https://img.shields.io/badge/javafx-%23FF0000.svg?style=for-the-badge&logo=javafx&logoColor=white)
![IntelliJ IDEA](https://img.shields.io/badge/IntelliJIDEA-000000.svg?style=for-the-badge&logo=intellij-idea&logoColor=white)
![Windows Terminal](https://img.shields.io/badge/Windows%20Terminal-%234D4D4D.svg?style=for-the-badge&logo=windows-terminal&logoColor=white)

## Acknowledgments

Inspiration, code snippets, etc.
* [awesome-readme](https://github.com/matiassingers/awesome-readme)
### React + Vite

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
