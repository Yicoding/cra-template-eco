declare module 'slash2';
declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';
declare module 'omit.js';
declare module '*.ts';
declare module 'store/plugins/defaults';
declare module 'store/plugins/expire';
declare module 'store/src/store-engine';
declare module 'store/storages/sessionStorage';
declare module 'store/storages/localStorage';
declare module 'store/storages/memoryStorage';

declare module '@wonder-ui/router' {
  export function useHistory(): any;
  export function useLocation(): any;
  export function withRouter(c: any): any;
}