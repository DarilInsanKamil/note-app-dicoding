import { NotesApp } from './components';
import { NoteProvider } from './context/NoteContext';

function App() {
  return (
    <NoteProvider>
      <NotesApp />
    </NoteProvider>
  );
}

export default App;
