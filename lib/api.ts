import { Experience, Project, StrapiResponse } from "@/types";

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

async function fetchAPI<T>(
  path: string,
  options?: RequestInit
): Promise<T | null> {
  // Check if Strapi URL is configured
  if (!STRAPI_URL) {
    console.warn("STRAPI_URL is not configured");
    return null;
  }

  try {
    const url = `${STRAPI_URL}/api${path}`;

    const response = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
    });

    if (!response.ok) {
      console.warn(
        `Strapi API returned ${response.status}, using fallback data`
      );
      return null;
    }

    // Check if response is JSON
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      console.warn(
        "Strapi API returned non-JSON response, using fallback data"
      );
      return null;
    }

    return response.json();
  } catch (error) {
    console.warn("Strapi API request failed, using fallback data:", error);
    return null;
  }
}

export async function getExperiences(): Promise<Experience[]> {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const response = await fetchAPI<StrapiResponse<any[]>>(
      "/experiences?sort=startDate:desc",
      {
        next: { revalidate: 60 }, // Revalidate every minute
      }
    );

    if (!response || !response.data) {
      return [];
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return response.data.map((item: any) => ({
      id: item.id,
      ...item.attributes,
    }));
  } catch {
    console.warn("Using fallback experience data");
    return [];
  }
}

export async function getProjects(): Promise<Project[]> {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const response = await fetchAPI<StrapiResponse<any[]>>(
      "/projects?populate=*&sort=featured:desc",
      {
        next: { revalidate: 60 },
      }
    );

    if (!response || !response.data) {
      return [];
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return response.data.map((item: any) => ({
      id: item.id,
      ...item.attributes,
      image: item.attributes.image?.data?.attributes?.url,
    }));
  } catch {
    console.warn("Using fallback project data");
    return [];
  }
}

export async function submitContactForm(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): Promise<boolean> {
  try {
    await fetchAPI("/contact-messages", {
      method: "POST",
      body: JSON.stringify({ data }),
    });
    return true;
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return false;
  }
}
