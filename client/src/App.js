import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';

import Material from './screens/Material';
import Sem1 from './screens/Branch/IT/Sem1.jsx';
import Sem2 from './screens/Branch/IT/Sem2.jsx';
import Sem3 from './screens/Branch/IT/Sem3.jsx';
import Sem4 from './screens/Branch/IT/Sem4.jsx';
import Sem5 from './screens/Branch/IT/Sem5.jsx';
import Sem6 from './screens/Branch/IT/Sem6.jsx';
import Sem7 from './screens/Branch/IT/Sem7.jsx';
import Sem8 from './screens/Branch/IT/Sem8.jsx';

import SEM1 from './screens/Branch/CE/SEM1.jsx';
import SEM2 from './screens/Branch/CE/SEM2.jsx';
import SEM3 from './screens/Branch/CE/SEM3.jsx';
import SEM4 from './screens/Branch/CE/SEM4.jsx';
import SEM5 from './screens/Branch/CE/SEM5.jsx';
import SEM6 from './screens/Branch/CE/SEM6.jsx';
import SEM7 from './screens/Branch/CE/SEM7.jsx';
import SEM8 from './screens/Branch/CE/SEM8.jsx';


import SEM11 from './screens/Branch/ME/SEM11.jsx';
import SEM22 from './screens/Branch/ME/SEM22.jsx';
import SEM33 from './screens/Branch/ME/SEM33.jsx';
import SEM44 from './screens/Branch/ME/SEM44.jsx';
import SEM55 from './screens/Branch/ME/SEM55.jsx';
import SEM66 from './screens/Branch/ME/SEM66.jsx';
import SEM77 from './screens/Branch/ME/SEM77.jsx';
import SEM88 from './screens/Branch/ME/SEM88.jsx';

import Cl1 from './screens/Branch/CL/Cl1.jsx';
import Cl2 from './screens/Branch/CL/Cl2.jsx';
import Cl3 from './screens/Branch/CL/Cl3.jsx';
import Cl4 from './screens/Branch/CL/Cl4.jsx';
import Cl5 from './screens/Branch/CL/Cl5.jsx';
import Cl6 from './screens/Branch/CL/Cl6.jsx';
import Cl7 from './screens/Branch/CL/Cl7.jsx';
import Cl8 from './screens/Branch/CL/Cl8.jsx';

const App = () => {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            
            <Route exact path="/material" element={<Material />} />
            <Route path="/branch/:branch/semester/:semester/sem1" element={<Sem1 />} />
            <Route path="/branch/:branch/semester/:semester/sem2" element={<Sem2 />} />
            <Route path="/branch/:branch/semester/:semester/sem3" element={<Sem3 />} />
            <Route path="/branch/:branch/semester/:semester/sem4" element={<Sem4 />} />
            <Route path="/branch/:branch/semester/:semester/sem5" element={<Sem5 />} />
            <Route path="/branch/:branch/semester/:semester/sem6" element={<Sem6 />} />
            <Route path="/branch/:branch/semester/:semester/sem7" element={<Sem7 />} />
            <Route path="/branch/:branch/semester/:semester/sem8" element={<Sem8 />} />
           
            {/* Add a new Route for Computer Science Sem1 */}
            <Route path="/branch/:branch/semester/:semester/SEM1" element={<SEM1 />} />
            {/* <Route path="/branch/Computer Science/semester/:semester/SEM2" element={<SEM1 />} /> */}
            <Route path="/branch/Computer Science/semester/:semester/SEM2" element={<SEM2 />} />
            <Route path="/branch/Computer Science/semester/:semester/SEM2" element={<SEM3 />} />
            <Route path="/branch/Computer Science/semester/:semester/SEM2" element={<SEM4 />} />
            <Route path="/branch/Computer Science/semester/:semester/SEM2" element={<SEM5 />} />
            <Route path="/branch/Computer Science/semester/:semester/SEM2" element={<SEM6 />} />
            <Route path="/branch/Computer Science/semester/:semester/SEM2" element={<SEM7 />} />
            <Route path="/branch/Computer Science/semester/:semester/SEM2" element={<SEM8/>} />


            {/* Add a new Route for Mechanical Engineering Sem1 */}
            <Route path="/branch/Mechanical Engineering/semester/:semester/Sem1" element={<SEM11 />} />
            <Route path="/branch/Mechanical Engineering/semester/:semester/Sem2" element={<SEM22/>} />
            <Route path="/branch/Mechanical Engineering/semester/:semester/Sem3" element={<SEM33/>} />
            <Route path="/branch/Mechanical Engineering/semester/:semester/Sem4" element={<SEM44/>} />
            <Route path="/branch/Mechanical Engineering/semester/:semester/Sem5" element={<SEM55/>} />
            <Route path="/branch/Mechanical Engineering/semester/:semester/Sem6" element={<SEM66/>} />
            <Route path="/branch/Mechanical Engineering/semester/:semester/Sem7" element={<SEM77/>} />
            <Route path="/branch/Mechanical Engineering/semester/:semester/Sem8" element={<SEM88/>} />

            {/* Add more Routes for other branches and semesters */}
            <Route path="/branch/Civil Engineering/semester/:semester/cl1" element={<Cl1 />} />
            <Route path="/branch/Civil Engineering/semester/:semester/cl2" element={<Cl2/>} />
            <Route path="/branch/Civil Engineering/semester/:semester/cl3" element={<Cl3/>} />
            <Route path="/branch/Civil Engineering/semester/:semester/cl4" element={<Cl4/>} />
            <Route path="/branch/Civil Engineering/semester/:semester/cl5" element={<Cl5/>} />
            <Route path="/branch/Civil Engineering/semester/:semester/cl6" element={<Cl6/>} />
            <Route path="/branch/Civil Engineering/semester/:semester/cl7" element={<Cl7/>} />
            <Route path="/branch/Civil Engineering/semester/:semester/cl8" element={<Cl8/>} />

          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
