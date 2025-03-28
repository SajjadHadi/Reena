import { Button } from 'primeng/button';

type ButtonSeverity = Button['severity'];

export interface SectionInputs {
  title: string;
  image: string;
  subTitle?: string;
  description?: string;
  class?: string;
  btnLabel?: string;
  imageAlt?: string;
  boxClass?: string;
  btnSeverity?: ButtonSeverity;
}
