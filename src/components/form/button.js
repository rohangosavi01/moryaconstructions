import { Button } from 'theme-ui';

export default ({ disabled, children }) => {
  return (
    <Button type='submit' disabled={disabled} sx={styles}>
      {children}
    </Button>
  );
};
const styles = {
  cursor: 'pointer',
  borderRadius: '3px',
  padding: '0.7rem 2.5rem',
  border: 'none',
  webkitAppearance: ' none',
  webkitTouchCallout: 'none',
  webkitUserSelect: 'none',
  khtmlUserSelect: 'none',
  mozUserSelect: 'none',
  msUserSelect: 'none',
  userSelect: 'none',
  color: ' #fff',
  background: 'accent',

  '&:hover': {
    boxShadow: '#b39573 0px 12px 24px -10px',
  },
  '&:focus': {
    outline: 'none',
  },
};
