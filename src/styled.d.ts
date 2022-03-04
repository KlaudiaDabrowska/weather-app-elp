import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      alertColor: string;
      blackColor: string;
      headerColor: string;
      labelColor: string;
      backgroundButtonColor: string;
      backgroundButtonHoverColor: string;
    };
    fontSize: {
      xxxl: string;
      xxl: string;
      xl: string;
      l: string;
      m: string;
      s: string;
      xs: string;
      xxs: string;
    };
    spacing: {
      xxxl: string;
      xxl: string;
      xl: string;
      l: string;
      m: string;
      s: string;
      xs: string;
      xxs: string;
    };
  }
}
