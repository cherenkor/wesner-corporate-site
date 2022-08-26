import { SvgIcon, SvgIconProps } from '@mui/material';
import Map from '/public/icons/map-pin.svg';
import Mail from '/public/icons/mail.svg';
import Phone from '/public/icons/phone.svg';
import Facebook from '/public/icons/facebook.svg';
import Twitter from '/public/icons/twitter.svg';
import LinkedIn from '/public/icons/linkedin.svg';
import Check from '/public/icons/check.svg';

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

export const CheckIcon = (props: SvgIconProps): JSX.Element => {
  return (
    <SvgIcon
      component={Check}
      inheritViewBox
      {...props}
      sx={{ color: 'rgba(0,0,0,0)', ...props.sx }}
    />
  );
};

export const CloseIcon = (props: SvgIconProps): JSX.Element => {
  return (
    <SvgIcon {...props} viewBox="0 0 22 22">
      <path
        d="M15.0637 7.29358C15.0637 7.19045 14.9794 7.10608 14.8762 7.10608L13.3294 7.11311L10.9997 9.89046L8.67233 7.11545L7.12311 7.10842C7.01998 7.10842 6.93561 7.19045 6.93561 7.29592C6.93561 7.34045 6.95201 7.38264 6.98014 7.4178L10.0294 11.0506L6.98014 14.6811C6.95182 14.7154 6.9361 14.7584 6.93561 14.803C6.93561 14.9061 7.01998 14.9905 7.12311 14.9905L8.67233 14.9834L10.9997 12.2061L13.327 14.9811L14.8739 14.9881C14.977 14.9881 15.0614 14.9061 15.0614 14.8006C15.0614 14.7561 15.045 14.7139 15.0169 14.6787L11.9723 11.0483L15.0215 7.41545C15.0497 7.38264 15.0637 7.33811 15.0637 7.29358Z"
        fill="currentColor"
      />
      <path
        d="M11 0.5C5.20156 0.5 0.5 5.20156 0.5 11C0.5 16.7984 5.20156 21.5 11 21.5C16.7984 21.5 21.5 16.7984 21.5 11C21.5 5.20156 16.7984 0.5 11 0.5ZM11 19.7188C6.18594 19.7188 2.28125 15.8141 2.28125 11C2.28125 6.18594 6.18594 2.28125 11 2.28125C15.8141 2.28125 19.7188 6.18594 19.7188 11C19.7188 15.8141 15.8141 19.7188 11 19.7188Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};

export const MenuIcon = (props: SvgIconProps): JSX.Element => {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path
        d="M3 12H21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 6H21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 18H21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
};

export const ClockIcon = (props: SvgIconProps): JSX.Element => {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <g fill="none">
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 6V12L16 14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </SvgIcon>
  );
};

export const BriefIcon = (props: SvgIconProps): JSX.Element => {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <g fill="none">
        <path
          d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </SvgIcon>
  );
};

export const LocationIcon = (props: SvgIconProps): JSX.Element => {
  return (
    <SvgIcon {...props} viewBox="0 0 16 16">
      <g fill="none" clipPath="url(#clip0_722_12151)">
        <path
          d="M13.5 6.66571C13.5 8.79807 12.1171 10.8428 10.637 12.4052C9.90719 13.1755 9.17567 13.8057 8.62604 14.2433C8.37117 14.4463 8.1563 14.6071 8 14.7207C7.84371 14.6071 7.62883 14.4463 7.37396 14.2433C6.82433 13.8057 6.09281 13.1755 5.36298 12.4052C3.88287 10.8428 2.5 8.79807 2.5 6.66571C2.5 5.20702 3.07946 3.80807 4.11091 2.77662C5.14236 1.74517 6.54131 1.16571 8 1.16571C9.45869 1.16571 10.8576 1.74517 11.8891 2.77662C12.9205 3.80807 13.5 5.20702 13.5 6.66571Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 6.66571C9.5 7.49414 8.82843 8.16571 8 8.16571C7.17157 8.16571 6.5 7.49414 6.5 6.66571C6.5 5.83728 7.17157 5.16571 8 5.16571C8.82843 5.16571 9.5 5.83728 9.5 6.66571Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_722_12151">
          <rect
            width="16"
            height="16"
            fill="none"
            transform="translate(0 -0.000976562)"
          />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

export const ArrowLeftIcon = (props: SvgIconProps): JSX.Element => {
  return (
    <SvgIcon {...props} viewBox="0 0 25 16">
      <path
        d="M0.292893 7.29289C-0.0976314 7.68342 -0.0976315 8.31658 0.292892 8.7071L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34314C8.46159 1.95262 8.46159 1.31946 8.07107 0.928931C7.68054 0.538406 7.04738 0.538406 6.65686 0.928931L0.292893 7.29289ZM25 7L1 7L1 9L25 9L25 7Z"
        fill="currentColor"
      />
    </SvgIcon>
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
