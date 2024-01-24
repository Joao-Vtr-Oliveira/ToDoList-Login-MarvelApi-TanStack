import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from '@tanstack/react-query';
import { RequestReturn } from '../types/RequestReturn';

const SessionCheckHOC = (WrappedComponent: React.ComponentType, delay: number = 0) => {
  return (props: React.ComponentProps<typeof WrappedComponent>) => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const queryKey = ['login']
    const cachedLoginData = queryClient.getQueryData(queryKey) as RequestReturn;

    useEffect(() => {
      const checkSession = () => {
        if (cachedLoginData?.sessionToken === undefined || cachedLoginData?.sessionToken === '') {
          console.log("Nenhum token de sessão encontrado, redirecionando...");
          setTimeout(() => {
            navigate("/");
          }, delay);
        } else {
          console.log("Token de sessão encontrado:",cachedLoginData?.sessionToken);
        }
      };
      checkSession();
    }, [props, navigate]);
    return <WrappedComponent {...props} />;
  };
};

export default SessionCheckHOC;