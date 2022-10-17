import imageUrlBuilder from '@sanity/image-url'

const sanityClient = require('@sanity/client')

const client = sanityClient({
    projectId: 'qwoxusny',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2021-10-21',
});

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source);

export default client;
