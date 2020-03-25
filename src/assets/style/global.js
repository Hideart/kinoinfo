export default {
  m: (value) => ({ margin: value || 0 }),
  mr: (value) => ({ marginRight: value || 0 }),
  ml: (value) => ({ marginLeft: value || 0 }),
  mt: (value) => ({ marginTop: value || 0 }),
  mb: (value) => ({ marginBottom: value || 0 }),

  p: (value) => ({ padding: value || 0 }),
  pr: (value) => ({ paddingRight: value || 0 }),
  pl: (value) => ({ paddingLeft: value || 0 }),
  pt: (value) => ({ paddingTop: value || 0 }),
  pb: (value) => ({ paddingBottom: value || 0 }),

  invisible: { display: 'none' },

  w: (value) => ({ width: value || 0 }),
  flex: (value) => ({ flex: value || 1 }),
};
