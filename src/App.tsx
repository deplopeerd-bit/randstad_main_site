import ApplicationForm from "./pages/FindJob/SubmitYourCv";
import Banking from "./pages/FindJob/Banking";
import ContractRoles from "./pages/FindJob/ContractRoles";
import Education from "./pages/FindJob/Education";
import Engineering from "./pages/FindJob/Engineering";
import FinanceAccounting from "./pages/FindJob/Finance&Accounting";
import HealthCare from "./pages/FindJob/HealthCare";
import HrAdminSupport from "./pages/FindJob/HR";
import ItesGcc from "./pages/FindJob/ItesGcc";
import JobBoard from "./pages/FindJob/PermanentRoles";
import JoinOurTeam from "./pages/FindJob/JoinOurTeam";
import LegalJobs from "./pages/FindJob/Legal&Compliance";
import Manufacturing from "./pages/FindJob/Manufacturing";
import PermanentRoles from "./pages/FindJob/PermanentRoles";
import RandstadClone from "./pages/FindJob/CxoRoles";
import RandstadPage from "./pages/FindJob/CurrentJobOpening";
import SupplyChainLogistic from "./pages/FindJob/SupplyChainLogistics";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Footer } from "./components/Layout";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Placeholder components for other routes
const JobsPage = () => (
  <div className="py-20 max-w-7xl mx-auto px-4">
    <h1 className="text-4xl font-light mb-8">explore all jobs</h1>
    <div className="bg-gray-50 p-12 rounded-lg text-center">
      <p className="text-gray-500">Job listings will appear here.</p>
    </div>
  </div>
);

const TalentPage = () => (
  <div className="py-20 max-w-7xl mx-auto px-4">
    <h1 className="text-4xl font-light mb-8">for talent</h1>
    <div className="bg-gray-50 p-12 rounded-lg text-center">
      <p className="text-gray-500">Talent solutions and advice.</p>
    </div>
  </div>
);

const EmployerPage = () => (
  <div className="py-20 max-w-7xl mx-auto px-4">
    <h1 className="text-4xl font-light mb-8">for employers</h1>
    <div className="bg-gray-50 p-12 rounded-lg text-center">
      <p className="text-gray-500">
        Employer services and recruitment solutions.
      </p>
    </div>
  </div>
);

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<JobsPage />} />
            <Route path="/talent" element={<TalentPage />} />
            <Route path="/employer" element={<EmployerPage />} />
            <Route path="/submit-your-cv" element={<ApplicationForm />} />
            <Route path="/contract-roles" element={<ContractRoles />} />
            <Route path="/current-job-openings" element={<RandstadPage />} />
            <Route path="/cxo-roles" element={<RandstadClone />} />
            <Route path="/job-fairs" element={<ApplicationForm />} />
            <Route path="/engineering" element={<Engineering />} />
            <Route path="/manufacturing" element={<Manufacturing />} />
            <Route path="/supply-chain-&-logistics" element={<SupplyChainLogistic />}/>
            <Route path="/banking-sales" element={<Banking />} />
            <Route path="/healthcare" element={<HealthCare />} />
            <Route path="/finance-&-accounting" element={<FinanceAccounting />}/>
            <Route path="/join-our-team" element={<JoinOurTeam />} />
            <Route path="/permanent-roles" element={<PermanentRoles />} />
            <Route path="/education" element={<Education />} />
<Route path="/hr-&-admin-support" element={<HrAdminSupport />} />
<Route path="/ites/gcc" element={<ItesGcc />} />
<Route path="/legal-&-compliance" element={<LegalJobs />} />

            
            
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
