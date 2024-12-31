const configure = {
  service: String(import.meta.env.VITE_SERVICE_ID),
  template: String(import.meta.env.VITE_TEMPLATE_ID),
  userid: String(import.meta.env.VITE_USER_ID),
};
export default configure;
