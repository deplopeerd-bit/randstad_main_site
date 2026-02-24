import ApplicationForm from "./pages/FindJob/SubmitYourCv";
import Banking from "./pages/FindJob/Banking";
import BankingFinanceAndSalesJob  from "./pages/FindJob/BankingFinanceAndSalesJob";
import ContractRoles from "./pages/FindJob/ContractRoles";
import Education from "./pages/FindJob/Education";
import Engineering from "./pages/FindJob/Engineering";
import FinanceAccounting from "./pages/FindJob/Finance&Accounting";
import FinancialProductAndSaleJob from "./pages/FindJob/FinancialProduct&SaleJob";
import HrAdminSupport from "./pages/FindJob/HR";
import ItesGcc from "./pages/FindJob/ItesGcc";
import JoinOurTeam from "./pages/FindJob/JoinOurTeam";
import LegalAndCompilance from "./pages/FindJob/LegalAndCompilance";
import Manufacturing from "./pages/FindJob/Manufacturing";
import PermanentRoles from "./pages/FindJob/PermanentRoles";
import RandstadClone from "./pages/FindJob/CxoRoles";
import RandstadPage from "./pages/FindJob/CurrentJobOpening";
import SalesAndMarketing from "./pages/FindJob/SalesAndMarketing";
import SupplyChainLogistic from "./pages/FindJob/SupplyChainLogistics";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Footer } from "./components/Layout";
import { FallbackPage } from "./pages/FindJob/FallBackPage";
import { Healthcare } from "./pages/FindJob/HealthCare";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/submit-your-cv" element={<ApplicationForm />} />
            <Route path="/contract-roles" element={<ContractRoles />} />
            <Route path="/current-job-openings" element={<RandstadPage />} />
            <Route path="/cxo-roles" element={<RandstadClone />} />
            <Route path="/engineering" element={<Engineering />} />
            <Route path="/manufacturing" element={<Manufacturing />} />
            <Route path="/supply-chain-&-logistics" element={<SupplyChainLogistic />} />
            <Route path="/banking-sales" element={<Banking />} />
            <Route path="/finance-&-accounting" element={<FinanceAccounting />} />
            <Route path="/join-our-team" element={<JoinOurTeam />} />
            <Route path="/permanent-roles" element={<PermanentRoles />} />
            <Route path="/education" element={<Education />} />
            <Route path="/hr-&-admin-support" element={<HrAdminSupport />} />
            <Route path="/ites/gcc" element={<ItesGcc />} />
<Route path="/sales-&-marketing" element={<SalesAndMarketing />} />
<Route path="/legal-&-compliance" element={<LegalAndCompilance />} />
<Route path="/banking-finance-and-sales-jobs" element={<BankingFinanceAndSalesJob />} />
<Route path="/financial-product-sales-jobs" element={<FinancialProductAndSaleJob />} />
<Route path="/job-fairs" element={<ApplicationForm />} />

<Route path="/healthcare" element={<Healthcare />} />
<Route path="/my-randstad" element={<FallbackPage />} />
<Route path="/refer-a-friend" element={<FallbackPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}