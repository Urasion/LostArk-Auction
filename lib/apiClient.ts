const API_KEY = process.env.LOSTARK_API_KEY;
const BASE_URL = process.env.API_BASE_URL;

interface ApiOptions extends RequestInit {
  next?: { revalidate?: number; tags?: string[] };
}

export const apiClient = async (path: string, options: ApiOptions = {}) => {
  const defaultHeaders: HeadersInit = {
    Authorization: `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  };
  const defaultCache: RequestCache = 'no-store';
  const mergedOptions: ApiOptions = {
    // 기본값
    cache: defaultCache,
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };

  const response = await fetch(`${BASE_URL}${path}`, mergedOptions);

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    console.error('API Error:', response.status, errorBody);
    throw new Error(`API request failed with status ${response.status}`);
  }
  return response.json();
};
