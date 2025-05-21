import type { AppOnboardingSteps } from "@calcom/lib/apps/appOnboardingSteps";

// Replace querystring with URLSearchParams for browser compatibility
function stringify(obj: Record<string, unknown>): string {
  const params = new URLSearchParams();
  Object.entries(obj).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      params.append(key, String(value));
    }
  });
  return params.toString();
}

export const getAppOnboardingUrl = ({
  slug,
  step,
  teamId,
}: {
  slug: string;
  step: AppOnboardingSteps;
  teamId?: number;
}) => {
  const params: { [key: string]: string | number | number[] } = { slug };
  if (!!teamId) {
    params.teamId = teamId;
  }
  const query = stringify(params);

  return `/apps/installation/${step}?${query}`;
};
