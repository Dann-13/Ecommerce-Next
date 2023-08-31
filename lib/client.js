import sanityClient from '@sanity/client';
//import { SanityClient, createClient } from '@sanity/client';
// import ImageUrlBuilder  from "next-sanity-image";
import imageUrlBuilder from '@sanity/image-url';
import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: '0fhvc7kz',
  dataset: 'production',
  apiVersion: '2022-03-10',
  useCdn: true,
  token: 'skZli6x07L1wArYDT6DrzVM3Lrit2fbFzUJ0tAMyAKBAicUX57Q5aCaNRG8czaMiwmaKY1WbT4GCg7C8vGSW7Kqdgznr0AO6Ndg9j0EEJO5yqai7S7ZRH1jLHX7jIlSF0CKRamzKbJRFfaDABgvf3AhKCAR18uChXwU5wwx7VidUzBZ2yPg5'
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);