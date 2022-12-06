import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import Home from "../pages/Home";
import Dev from "../pages/Dev";

const Help = React.lazy(() => import("../pages/Help"));
const LinkPage = React.lazy(() => import("../pages/LinkPage"));
const LivePage = React.lazy(() => import("../pages/LivePage"));
const Packs = React.lazy(() => import("../pages/Packs"));
const Shop = React.lazy(() => import("../pages/Shop"));
const PushPage = React.lazy(() => import("../pages/PushPage"));

const Layout: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/live" element={<LivePage />} />
        <Route path="/push" element={<PushPage />} />

        <Route path="/link" element={<LinkPage />} />
        <Route path="/shop" element={<Shop />} />

        <Route path="/packs" element={<Packs />} />

        <Route path="/help" element={<Help />} />
        <Route path="/dev" element={<Dev />} />
      </Routes>
    </Suspense>
  );
};

export default Layout;
