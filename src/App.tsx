import Home from './components/Home';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex">
        <Sidebar />
        <main className="flex-1 ml-80">
          <Home />
        </main>
      </div>
    </div>
  );
}

export default App;
