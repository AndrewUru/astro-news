import { getCollection } from "astro:content";

// Se obtiene la colección de categorías definida en la carpeta de contenido
const categoriesCollection = await getCollection("categories");

export const categoriesHandler = {
  // Retorna todas las categorías de la colección
  allCategories: () => categoriesCollection,

  // Retorna una categoría específica basada en el 'categoryId'
  oneCategory: (categoryId: string) => {
    const category = categoriesCollection.find(
      (category) => category.id === categoryId
    );
    // Si no se encuentra la categoría, lanza un error
    if (!category) {
      throw new Error(`Category with id ${categoryId} not found`);
    }
    return category;
  },
};
