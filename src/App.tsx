import ApplicationForm from "./pages/FindJob/SubmitYourCv";
import Banking from "./pages/FindJob/Banking";
import BankingFinanceAndSalesJob from "./pages/FindJob/BankingFinanceAndSalesJob";
import CareerTestsPage from "./pages/forTalent/CareerTest";
import ContractRoles from "./pages/FindJob/ContractRoles";
import Education from "./pages/FindJob/Education";
import Engineering from "./pages/FindJob/Engineering";
import EngineeringJobs from "./pages/forTalent/Engineering";
import FinanceAccounting from "./pages/FindJob/Finance&Accounting";
import FinancialProductAndSaleJob from "./pages/FindJob/FinancialProduct&SaleJob";
import ForTalentBankingFinanceAndSalesJob from "./pages/forTalent/BankingFincaceSales";
import ForTalentCareerTips from "./pages/forTalent/CareerTips";
import ForTalentCustomerExperience from "./pages/forTalent/CustomerExperience";
import ForTalentDataAndAnalytics from "./pages/forTalent/Data&Analytics";
import ForTalentFinanceAndAccounting from "./pages/forTalent/FinanceAndAccounting";
import ForTalentHrAndSupport from "./pages/forTalent/Hr&Support";
import ForTalentInterviewTips from "./pages/forTalent/InterviewTips";
import ForTalentItesGcc from "./pages/forTalent/Ites&Gcc";
import ForTalentJobProfiles from "./pages/forTalent/JobProfiles";
import ForTalentJobScamsPage from "./pages/forTalent/BewareofJobScam";
import ForTalentJobSearchAdvice from "./pages/forTalent/JobSearchAdvice";
import ForTalentJobSeekerToolkit from "./pages/forTalent/JobSeekerToolkit";
import ForTalentJoinOurCommunity from "./pages/forTalent/JoinOurTalentCommunity";
import ForTalentJoinTalentPool from "./pages/forTalent/JoinTalentPool";
import ForTalentLegalAndCompliance from "./pages/forTalent/Legal&Compliance";
import ForTalentPharmaHelath from "./pages/forTalent/PharmaHealthCare&LifeSciences";
import ForTalentSalesAndTradeMarketing from "./pages/forTalent/Sales&TradeMarketing";
import ForTalentfaqs from "./pages/forTalent/faqs";
import FortalentLatestJob from "./pages/forTalent/LatestJob";
import FortalentRegisterYourInstitute from "./pages/forTalent/RegisterYourInstitute";
import HrAdminSupport from "./pages/FindJob/HR";
import ItesGcc from "./pages/FindJob/ItesGcc";
import JoinOurTeam from "./pages/FindJob/JoinOurTeam";
import LandingPage from "./pages/forTalent/DigitalProduct&Engineering";
import LegalAndCompilance from "./pages/FindJob/LegalAndCompilance";
import Manufacturing from "./pages/FindJob/Manufacturing";
import PermanentRoles from "./pages/FindJob/PermanentRoles";
import RandstadClone from "./pages/FindJob/CxoRoles";
import RandstadPage from "./pages/FindJob/CurrentJobOpening";
import ResumePage from "./pages/forTalent/ResumeTips";
import SalesAndMarketing from "./pages/FindJob/SalesAndMarketing";
import SupplyChainAndLogistic from "./pages/forTalent/SupplyChain&Logistic";
import SupplyChainLogistic from "./pages/FindJob/SupplyChainLogistics";
import TalentManufacturing from "./pages/forTalent/Manufacturing";
import WholesaleRetailPage from "./pages/forTalent/WholeSale&Retail";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Footer } from "./components/Layout";
import { FallbackPage } from "./pages/FindJob/FallBackPage";
import { Healthcare } from "./pages/FindJob/HealthCare";

const findAJobUrl = "/findajob";
const forTalent = "/fortalent";

/* -------------------- */
/*  TITLE CONTROLLER    */
/* -------------------- */

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    if (path === "/") {
      document.title = "Home | Randstad";
      return;
    }

    // Remove /findajob/
    let cleaned = path.replace(`${findAJobUrl}/`, "");

    // Convert URL format to readable title
    cleaned = cleaned
      .replace(/-/g, " ")
      .replace(/&/g, "and")
      .replace(/\//g, " ");

    // Capitalize first letter
    const formatted =
      cleaned.charAt(0).toUpperCase() + cleaned.slice(1);

    document.title = formatted
      ? `${formatted} | Randstad`
      : "Randstad";
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path={`${findAJobUrl}/submit-your-cv`} element={<ApplicationForm />} />
          <Route path={`${findAJobUrl}/contract-roles`} element={<ContractRoles />} />
          <Route path={`${findAJobUrl}/current-job-openings`} element={<RandstadPage />} />
          <Route path={`${findAJobUrl}/cxo-roles`} element={<RandstadClone />} />
          <Route path={`${findAJobUrl}/engineering`} element={<Engineering />} />
          <Route path={`${findAJobUrl}/manufacturing`} element={<Manufacturing />} />
          <Route path={`${findAJobUrl}/supply-chain-&-logistics`} element={<SupplyChainLogistic />} />
          <Route path={`${findAJobUrl}/banking-sales`} element={<Banking />} />
          <Route path={`${findAJobUrl}/finance-&-accounting`} element={<FinanceAccounting />} />
          <Route path={`${findAJobUrl}/join-our-team`} element={<JoinOurTeam />} />
          <Route path={`${findAJobUrl}/permanent-roles`} element={<PermanentRoles />} />
          <Route path={`${findAJobUrl}/education`} element={<Education />} />
          <Route path={`${findAJobUrl}/hr-&-admin-support`} element={<HrAdminSupport />} />
          <Route path={`${findAJobUrl}/ites/gcc`} element={<ItesGcc />} />
          <Route path={`${findAJobUrl}/sales-&-marketing`} element={<SalesAndMarketing />} />
          <Route path={`${findAJobUrl}/legal-&-compliance`} element={<LegalAndCompilance />} />
          <Route path={`${findAJobUrl}/banking-finance-and-sales-jobs`} element={<BankingFinanceAndSalesJob />} />
          <Route path={`${findAJobUrl}/financial-product-sales-jobs`} element={<FinancialProductAndSaleJob />} />
          <Route path={`${findAJobUrl}/job-fairs`} element={<ApplicationForm />} />
          <Route path={`${findAJobUrl}/healthcare`} element={<Healthcare />} />
          <Route path={`${findAJobUrl}/my-randstad`} element={<FallbackPage />} />
          <Route path={`${findAJobUrl}/refer-a-friend`} element={<FallbackPage />} />

<Route path={`${forTalent}/engineering`} element={<EngineeringJobs />} />
<Route path={`${forTalent}/manufacturing`} element={<TalentManufacturing />} />
 <Route path={`${forTalent}/supply-chain-&-logistics`} element={<SupplyChainAndLogistic />} />
 <Route path={`${forTalent}/banking-finance-sales`} element={< ForTalentBankingFinanceAndSalesJob/>} />
<Route path={`${forTalent}/finance-&-accounting`} element={<ForTalentFinanceAndAccounting />} />
<Route path={`${forTalent}/hr-&-support`} element={<ForTalentHrAndSupport />} />
<Route path={`${forTalent}/ites/gcc`} element={<ForTalentItesGcc />} />
<Route path={`${forTalent}/legal-&-compliance`} element={<ForTalentLegalAndCompliance />} />
<Route path={`${forTalent}/pharma,-healthcare-&-lifesciences`} element={< ForTalentPharmaHelath/>} />
<Route path={`${forTalent}/sales-&-trade-marketing`} element={<ForTalentSalesAndTradeMarketing />} />
<Route path={`${forTalent}/wholesale-&-retail`} element={< WholesaleRetailPage/>} />

<Route path={`${forTalent}/faqs`} element={<ForTalentfaqs />} />
<Route path={`${forTalent}/join-talent-pool`} element={<ForTalentJoinTalentPool />} />

<Route path={`${forTalent}/latest-jobs`} element={<FortalentLatestJob />} />
<Route path={`${forTalent}/customer-experience`} element={<ForTalentCustomerExperience />} />
<Route path={`${forTalent}/data-&-analytics`} element={<ForTalentDataAndAnalytics />} />
<Route path={`${forTalent}/digital-product-&-engineering`} element={< LandingPage/>} />
<Route path={`${forTalent}/beware-of-job-scams`} element={<ForTalentJobScamsPage />} />
<Route path={`${forTalent}/career-tests`} element={<CareerTestsPage />} />
<Route path={`${forTalent}/career-tips`} element={<ForTalentCareerTips />} />
<Route path={`${forTalent}/interview-tips`} element={<ForTalentInterviewTips />} />

<Route path={`${forTalent}/job-profiles`} element={<ForTalentJobProfiles />} />

<Route path={`${forTalent}/job-search-advice`} element={<ForTalentJobSearchAdvice />} />
<Route path={`${forTalent}/job-seeker-toolkit`} element={<ForTalentJobSeekerToolkit />} />
<Route path={`${forTalent}/resume-tips`} element={<ResumePage />} />
<Route path={`${forTalent}/join-our-talent-community`} element={< ForTalentJoinOurCommunity/>} />
<Route path={`${forTalent}/register-your-institute`} element={< FortalentRegisterYourInstitute/>} />

        </Routes>
      </main>

      <Footer />
    </div>
  );
}

/* -------------------- */
/*  MAIN EXPORT         */
/* -------------------- */

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}