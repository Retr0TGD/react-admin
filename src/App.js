import { ColorModeContext, useMode } from "./Theme";
import { ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Telas/global/topbar";
import Sidebar from "./Telas/global/leftbar";
import Dashboard from "./Telas/Dashboard/index"
// import Team from "/Telas/global/team";
// import Invoice from "/Telas/global/invoice";
// import Contacts from "/Telas/global/contacts";
// import Bar from "/Telas/global/bar";
// import Form from "/Telas/global/form";
// import Line from "/Telas/global/line";
// import Pie from "/Telas/global/pie";
// import FAQ from "/Telas/global/faq";
// import Geography from "/Telas/global/geography";
// import Calendar from "/Telas/global/calendar";

function App() {
  const [theme, colorMode] = useMode();

  return (
  <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <div className="app">
      <Sidebar />
        <main className="content">
          <Navbar />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            {/* <Route path='/team' element={<Team />} /> */}
            {/* <Route path='/invoice' element={<Invoice />} /> */}
            {/* <Route path='/contacts' element={<Contacts />} /> */}
            {/* <Route path='/bar' element={<Bar />} /> */}
            {/* <Route path='/form' element={<Form />} /> */}
            {/* <Route path='/line' element={<Line />} /> */}
            {/* <Route path='/pie' element={<Pie />} /> */}
            {/* <Route path='/faq' element={<FAQ />} /> */}
            {/* <Route path='/geography' element={<Geography />} /> */}
            {/* <Route path='/calendar' element={<Calendar />} /> */}
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  </ColorModeContext.Provider>
  )
}

export default App;
