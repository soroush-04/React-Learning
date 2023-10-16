import Student from "./Student"

function App() {
    return(
        <>
        <Student name="Juel" age={20} isStudent={true}/>
        <Student name="Sam" age={40} isStudent={false} />
        <Student/>
        <Student name="Jason" />
        </>
    );


}

export default App
