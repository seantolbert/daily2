import { useChangeAuth } from "../hooks/useChangeAuth";
import AuthStack from "./AuthStack";
import MainStack from "./MainStack";

export default function RootNavigation() {
  const { user } = useChangeAuth();

  return user ? <MainStack /> : <AuthStack />;
}
