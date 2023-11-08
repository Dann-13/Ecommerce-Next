export default {
    name: 'carousel',
    title: 'Carousel',
    type: 'document',
    fields: [
      {
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [
          {
            type: 'image',
            options: {
              hotspot: true, // Activa el hotspot para ajustar el recorte de la imagen
            },
          },
        ],
        validation: Rule => Rule.max(5).error('Maximum of 5 images allowed'), // Limita a un máximo de 5 imágenes
      },
    ],
  };
  