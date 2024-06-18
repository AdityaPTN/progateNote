import React, {useState} from "react";
import Home from '../../screens/home';
import AddNote from "../../screens/addNote";
import EditNote from "../../screens/editNote";



const CurrentPageWidget = ({
  currentPage, 
  noteList, 
  setCurrentPage, 
  addNote,
  deleteNote,
  editNote,
  selectedNoteId,
}) => {
  const selectedNote = noteList.find(note => note.id === selectedNoteId);
    switch (currentPage) {
            case 'home':
                return <Home 
                  noteList={noteList} 
                  setCurrentPage={setCurrentPage} 
                  deleteNote={deleteNote}
                />
            case 'add':
                return <AddNote 
                setCurrentPage={setCurrentPage}
                addNote={addNote}
                />
            case 'edit':
                return <EditNote 
                setCurrentPage={setCurrentPage}
                editNote={editNote}
                noteId={selectedNoteId}
                initialTitle={selectedNote?.title}
                initialDesc={selectedNote?.desc}
                />
            default:
                return <Home />
    }
}



const App = () => {
    const [currentPage, setCurrentPage]  = useState('home')
    const [noteList, setNoteList] = useState([
        {
            id: 1,
            title: "Note pertama",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        },
    ])
    const [selectedNoteId, setSelectedNoteId] = useState(null);

    const navigateToPage = (page, noteId = null) => {
      setCurrentPage(page);
      setSelectedNoteId(noteId);
  };

    const addNote = (title, desc) => {
      const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1
    
      setNoteList([
         ...noteList,
          {
              id,
              title: title,
              desc: desc,
          }
      ])
    }

    const editNote = (id, title, desc) => {
      const updatedNoteList = noteList.map(note => {
          if (note.id === id) {
              return { ...note, title, desc };
          }
          return note;
      });
      setNoteList(updatedNoteList);
  }

    const deleteNote = (id) => {
      const updatedNoteList = noteList.filter(note => note.id !== id);
      setNoteList(updatedNoteList);
    }

    return (
        <CurrentPageWidget 
            currentPage={currentPage} 
            noteList={noteList} 
            setCurrentPage={navigateToPage}
            addNote={addNote}
            deleteNote={deleteNote}
            editNote={editNote}
            selectedNoteId={selectedNoteId}
        />
    )
}

export default App;