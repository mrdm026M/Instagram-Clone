import { createGlobalStyle } from "styled-components";
import MontserratBold from "../assets/fonts/Montserrat-Bold.ttf";
import MontserratMedium from "../assets/fonts/Montserrat-Medium.ttf";
import MontserratRegular from "../assets/fonts/Montserrat-Regular.ttf";
import MontserratSemiBold from "../assets/fonts/Montserrat-SemiBold.ttf";
import RobotoBold from "../assets/fonts/Roboto-Bold.ttf";
import RobotoMedium from "../assets/fonts/Roboto-Medium.ttf";
import RobotoRegular from "../assets/fonts/Roboto-Regular.ttf";

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'MB';
    src: url(${MontserratBold});
    font-style: normal;
  }
  @font-face {
    font-family: 'MSB';
    src: url(${MontserratSemiBold});
    font-style: normal;
  }
  @font-face {
    font-family: 'MM';
    src: url(${MontserratMedium});
    font-style: normal;
  }
  @font-face {
    font-family: 'MR';
    src: url(${MontserratRegular});
    font-style: normal;
  }
  @font-face {
    font-family: 'PB';
    src: url(${RobotoBold});
    font-style: normal;
  }
  @font-face {
    font-family: 'PM';
    src: url(${RobotoMedium});
    font-style: normal;
  }
  @font-face {
    font-family: 'PR';
    src: url(${RobotoRegular});
    font-style: normal;
  }
`;

export default Typography;
