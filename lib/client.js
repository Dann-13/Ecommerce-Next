import sanityClient from '@sanity/client';
import {projectId,dataset,apiVersion,useCdn,token} from './env'
//import { SanityClient, createClient } from '@sanity/client';
// import ImageUrlBuilder  from "next-sanity-image";

import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: useCdn,
  token: token
});

//export const urlFor = (source) => builder.image(source);

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}
