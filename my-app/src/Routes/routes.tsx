import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from '../Components/Layout';
import Result from "../Pages/Result";





export default function AppRoutes() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/africa" />
                    <Route path="/america" />
                    <Route path="/asia" />
                    <Route path="/europe"/>
                    <Route path="/oceania"/>
                </Routes>
                <Result/>
            </Layout>
        </Router>
    )
}
