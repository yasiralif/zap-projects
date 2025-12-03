import React from 'react';
import useAuth from '../Hooks/useAuth';
import useRole from '../Hooks/useRole';
import Spiner from '../Comeponents/Spiner/Spiner';
import { useNavigate } from 'react-router';

const RiderRoute = ({children}) => {
     const {user,loading}= useAuth();
    const {role, roleLoading}= useRole();
    const navigate = useNavigate();
      if (loading || roleLoading) return <Spiner></Spiner>
      if (role.role !== 'rider'){
        return navigate('/')
      }
    return children;
};

export default RiderRoute;