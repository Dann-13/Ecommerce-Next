export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2022-03-10'

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const useCdn = true
export const token = process.env.NEXT_PUBLIC_SANITY_TOKEN;