export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields:[
        {
            name : 'image',
            title: 'Image',
            type: 'array',
            of:[{type: 'image'}],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90,
            }
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'details',
            title: 'Details',
            type: 'string',
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string', // Puedes usar 'string' para la categoría por simplicidad, o crear un esquema separado para las categorías
            options: {
                list: [ // Aquí podrías definir una lista de categorías predefinidas si lo deseas
                    { title: 'Maquillaje', value: 'maquillaje' },
                    { title: 'Ropa', value: 'ropa' },
                    // ...
                ]
            }
        }
    ]
}