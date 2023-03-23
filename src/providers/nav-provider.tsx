import {
  createContext,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  useState,
  useContext,
} from 'react';

const NavContext = createContext({
  isNavOpen: false,
  setIsNavOpen: () => null,
} as {
  isNavOpen: boolean;
  setIsNavOpen: Dispatch<SetStateAction<boolean>>;
});

export const NavProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <NavContext.Provider value={{ isNavOpen, setIsNavOpen }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNavContext = () => useContext(NavContext);
