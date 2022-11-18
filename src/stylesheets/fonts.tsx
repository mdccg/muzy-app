import { createGlobalStyle } from 'styled-components';
import Wallpoet from './../assets/fonts/Wallpoet/Wallpoet-Regular.ttf';
import LatoThin from './../assets/fonts/Lato/Lato-Thin.ttf';
import LatoLight from './../assets/fonts/Lato/Lato-Light.ttf';
import LatoRegular from './../assets/fonts/Lato/Lato-Regular.ttf';
import LatoBold from './../assets/fonts/Lato/Lato-Bold.ttf';
import LatoBlack from './../assets/fonts/Lato/Lato-Black.ttf';
import LatoThinItalic from './../assets/fonts/Lato/Lato-ThinItalic.ttf';
import LatoLightItalic from './../assets/fonts/Lato/Lato-LightItalic.ttf';
import LatoItalic from './../assets/fonts/Lato/Lato-Italic.ttf';
import LatoBoldItalic from './../assets/fonts/Lato/Lato-BoldItalic.ttf';
import LatoBlackItalic from './../assets/fonts/Lato/Lato-BlackItalic.ttf';

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'Wallpoet';
    src: url(${Wallpoet});
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Lato';
    src: url(${LatoThin});
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: 'Lato';
    src: url(${LatoLight});
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Lato';
    src: url(${LatoRegular});
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Lato';
    src: url(${LatoBold});
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Lato';
    src: url(${LatoBlack});
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
  font-family: 'Lato';
  src: url(${LatoThinItalic});
  font-weight: 100;
  font-style: italic;
  }

  @font-face {
    font-family: 'Lato';
    src: url(${LatoLightItalic});
    font-weight: 300;
    font-style: italic;
  }

  @font-face {
    font-family: 'Lato';
    src: url(${LatoItalic});
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: 'Lato';
    src: url(${LatoBoldItalic});
    font-weight: 700;
    font-style: italic;
  }

  @font-face {
    font-family: 'Lato';
    src: url(${LatoBlackItalic});
    font-weight: 900;
    font-style: italic;
  }
`;

export default FontStyles;