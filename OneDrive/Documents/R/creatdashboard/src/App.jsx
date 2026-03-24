import React from "react";  {/*Tu importes React pour pouvoir créer des composants.*/ }
import Sidebar from "./components/Layout/Sidebar"; {/*Tu importes ton composant Sidebar (menu gauche)*/ }
import  Header from "./components/Layout/Header"; {/*Tu importes ton Header (barre en haut)*/ }

function App() {{/*C’est ton composant principal (le cœur de ton app)*/ }
{/* return: ce que React va afficher à l’écran*/ }
  return <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500" >
    <div className="flex h-screen overflow-hidden">
      <Sidebar/>
      <div className=" flex flex-1 flex-col overflow-hidden">
        <Header />
      </div>
    </div>
  </div> ;
}
export default App ; 