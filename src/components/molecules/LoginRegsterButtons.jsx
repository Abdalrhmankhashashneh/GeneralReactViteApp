import { LogIn , UserPlus } from "lucide-react";
import ButtonAtom from "../atoms/ButtonAtom";
import IconAtom from "../atoms/IconAtom";
import TextAtom from "../atoms/TextAtom";
import FlexAtom from "../atoms/FlexAtom";

const LoginRegsterButtons = () => {
  return (
    <FlexAtom className="gap-2 items-center">
      <ButtonAtom variant="primary">
        <FlexAtom className="gap-2 items-center">
          <IconAtom icon={LogIn} variant="white" size="20px" />
          <TextAtom>
            <span className="hidden lg:block">Login</span>
          </TextAtom>
        </FlexAtom>
      </ButtonAtom>
      <ButtonAtom variant="primary">
        <FlexAtom className="gap-2 items-center">
          <IconAtom icon={UserPlus} variant="white" size="20px" />
          <TextAtom>
            <span className="hidden lg:block">Register</span>
          </TextAtom>
        </FlexAtom>
      </ButtonAtom>
    </FlexAtom>
  );
};

export default LoginRegsterButtons;
