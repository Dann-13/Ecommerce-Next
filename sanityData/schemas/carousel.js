export default {
    name: 'carousel',
    title: 'Carousel',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        description: 'Titulo para el carrusel (opcional)',
      },
      {
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [{ type: 'image', options: { hotspot: true } }],
        validation: Rule => Rule.required().min(2).max(5),
        description: 'Selecciona de 2 a maximo 5 imagenes para tu carrusel',
      },
    ],
  };
  