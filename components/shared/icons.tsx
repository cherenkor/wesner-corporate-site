import { SvgIcon, SvgIconProps } from '@mui/material';
import Map from '/public/icons/map-pin.svg';
import Mail from '/public/icons/mail.svg';
import Phone from '/public/icons/phone.svg';
import Facebook from '/public/icons/facebook.svg';
import Twitter from '/public/icons/twitter.svg';
import LinkedIn from '/public/icons/linkedin.svg';

export const MapIcon = (props: SvgIconProps): JSX.Element => {
  return (
    <SvgIcon
      component={Map}
      inheritViewBox
      {...props}
      sx={{ color: 'rgba(0,0,0,0)', ...props.sx }}
    />
  );
};

export const MailIcon = (props: SvgIconProps): JSX.Element => {
  return (
    <SvgIcon
      component={Mail}
      inheritViewBox
      {...props}
      sx={{ color: 'rgba(0,0,0,0)', ...props.sx }}
    />
  );
};

export const PhoneIcon = (props: SvgIconProps): JSX.Element => {
  return (
    <SvgIcon
      component={Phone}
      inheritViewBox
      {...props}
      sx={{ color: 'rgba(0,0,0,0)', ...props.sx }}
    />
  );
};

// SOCIAL

export const FacebookIcon = (props: SvgIconProps): JSX.Element => {
    return (
      <SvgIcon
        component={Facebook}
        inheritViewBox
        {...props}
        sx={{ color: 'rgba(0,0,0,0)', ...props.sx }}
      />
    );
  };
  export const TwitterIcon = (props: SvgIconProps): JSX.Element => {
    return (
      <SvgIcon
        component={Twitter}
        inheritViewBox
        {...props}
        sx={{ color: 'rgba(0,0,0,0)', ...props.sx }}
      />
    );
  };
  export const LinkedInIcon = (props: SvgIconProps): JSX.Element => {
    return (
      <SvgIcon
        component={LinkedIn}
        inheritViewBox
        {...props}
        sx={{ color: 'rgba(0,0,0,0)', ...props.sx }}
      />
    );
  };
