import window from 'global/window';
import document from 'global/document';

export const getViewportWidth = (): number =>
  Math.max(document?.documentElement?.clientWidth || 0, window?.innerWidth || 0);
const isMobile = (): boolean => {
  const vw = getViewportWidth();
  return vw < 768;
};

export default isMobile;
