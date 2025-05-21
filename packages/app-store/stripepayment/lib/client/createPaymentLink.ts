import { WEBSITE_URL } from "@calcom/lib/constants";

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

export type Maybe<T> = T | undefined | null;

export function createPaymentLink(opts: {
  paymentUid: string;
  name?: Maybe<string>;
  date?: Maybe<string>;
  email?: Maybe<string>;
  absolute?: boolean;
}): string {
  const { paymentUid, name, email, date, absolute = true } = opts;
  let link = "";
  if (absolute) link = WEBSITE_URL;
  const query = stringify({ date, name, email });
  return `${link}/payment/${paymentUid}?${query}`;
}
