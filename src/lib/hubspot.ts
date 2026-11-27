// The Advent of Gemara reminder sign-up form (REV-1414): HubSpot's public embed IDs, safe to commit.
// Each can be overridden at build time; an empty one (e.g. HUBSPOT_FORM_ID= npm run build) leaves the
// sign-up block out of the build entirely, so a missing ID never ships a broken form.
const env = process.env;
export const hubspotForm = {
  portalId: env.HUBSPOT_PORTAL_ID ?? '243073831',
  formId: env.HUBSPOT_FORM_ID ?? '9857e5b3-f06f-461f-bea3-657c92e9162d',
  region: env.HUBSPOT_REGION ?? 'na2',
};
export const hubspotEnabled = Object.values(hubspotForm).every(Boolean);
