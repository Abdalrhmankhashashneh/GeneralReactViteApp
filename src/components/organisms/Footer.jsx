import ContainerAtom from "../atoms/ContainerAtom";
import FlexAtom from "../atoms/FlexAtom";
import FooterAtom from "../atoms/FooterAtom";
import LinkAtom from "../atoms/LinkAtom";
import TextAtom from "../atoms/TextAtom";

const Footer = () => {
  return (
    <FooterAtom className="bg-gray-800 text-white py-4">
      <ContainerAtom className="mx-auto text-center">
        <TextAtom>
          <p>&copy; 2023 Your Company. All rights reserved.</p>
        </TextAtom>
        <FlexAtom className="flex-col justify-center space-x-4 mt-2">
          <LinkAtom to="/" > 
            <TextAtom>Privacy Policy</TextAtom>
          </LinkAtom>
          <LinkAtom to="/">
            <TextAtom>Terms of Service</TextAtom>
          </LinkAtom>
        </FlexAtom>
      </ContainerAtom>
    </FooterAtom>
  );
};

export default Footer;
