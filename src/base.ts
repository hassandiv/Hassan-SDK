type Config = {
  apiKey: string;
  baseUrl?: string;
};

export abstract class Base {
  private apiKey: string;
  private baseUrl: string;

  constructor(config: Config) {
    this.apiKey = config.apiKey;
    this.baseUrl = config.baseUrl || "https://the-one-api.dev/v2/";
  }

  protected invoke<T>(endpoint: string): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.apiKey}`,
    };

    const config = {
      headers,
    };

    return fetch(url, config).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(res.statusText);
      }
    });
  }
}
