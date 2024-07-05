import {React, useState} from 'react'
import Home from "./src/screens/home";
import AddNote from "./src/screens/addNote";
import EditNote from "./src/screens/editNote";
import {SafeAreaView, StyleSheet} from "react-native";

const CurrentPageWidget = ({currentPage, noteList, setCurrentPage, addNote}) => {
    switch (currentPage) {
        case 'home':
            return (<Home
                    noteList={noteList}
                    setCurrentPage={setCurrentPage}
                />)
        case 'add':
            return <AddNote setCurrentPage={setCurrentPage} addNote={addNote}/>
        case 'edit':
            return <EditNote/>
        default:
            return <Home/>
    }
}

const App = () => {
    const [currentPage, setCurrentPage] = useState('home')
    const [noteList, setNoteList] = useState([{
        id: 1, title: 'Note pertama', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },])

    const addNote = (title, desc) => {
        const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1

        setNoteList([...noteList, {
            id, title: title, desc: desc,
        },])
    }

    return (<SafeAreaView style={styles.container}>
            <CurrentPageWidget
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                noteList={noteList}
                addNote={addNote}
            />
        </SafeAreaView>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default App