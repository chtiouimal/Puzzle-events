import { useContext } from "react";
import { PuzzleContext } from "../../context/PuzzleContext";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function AuthPage() {
  const { puzzleData, setPuzzleData } = useContext(PuzzleContext);

  return (
    <div className="puzzle-auth-layout">
      {/* <div className="puzzle-auth-header">
        <div className="puzzle-auth-desc">
          <p>
            ost hanc adclinis Libano monti Phoenice, regio plena gratiarum et
            venustatis.
          </p>
        </div>
      </div> */}
      {puzzleData.hasAccount ? (
        <SignIn setPuzzleData={setPuzzleData} />
      ) : (
        <SignUp setPuzzleData={setPuzzleData} />
      )}
    </div>
  );
}

export default AuthPage;
