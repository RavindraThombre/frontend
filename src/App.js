
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import StoreList from './pages/ListStores';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AdminDashboard from './pages/AdminDashboard';
import StoreOwnerDashboard from './pages/StoreOwnerDashboard'
import UserDashboard from './pages/UserDashboard'
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/store-list" element={<StoreList />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/admin/add-user" element={<AdminDashboard />} />


          {/* Admin dashboard */}
          {/* <Route
            path="/admin-dashboard"
            element={
              <ProtectedRoute allowedRoles={['Admin']}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          /> */}




          {/* Store Owner dashboard */}
          <Route
            path="/owner-dashboard"
            element={
              <ProtectedRoute allowedRoles={['Store Owner']}>
                <StoreOwnerDashboard />
              </ProtectedRoute>
            }
          />

          {/* Normal User dashboard */}
          <Route
            path="/user-dashboard"
            element={
              <ProtectedRoute allowedRoles={['Normal User']}>
                <UserDashboard />
              </ProtectedRoute>
            }
          />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
