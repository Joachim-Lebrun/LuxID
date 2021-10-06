import React, { FC, useContext, useMemo } from 'react';
import { Container } from '../di/container';
import { buildDemoContainer } from '../di/demo-container';

export const ContainerContext = React.createContext<Container>(undefined as unknown as Container);

export const ContainerProvider: FC = ({children}) => {
  const container = useMemo(() => buildDemoContainer(), []);

  return <ContainerContext.Provider value={container}>
    {children}
  </ContainerContext.Provider>
}

export const useContainer = () => useContext(ContainerContext);
