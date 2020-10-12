export default {
  name: "kebab",
  type: "document",
  title: "Kebab",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Restaurant",
    },
    {
      title: "Hjemmeside",
      name: "homepage",
      type: "url",
    },
    {
      name: "excerpt",
      type: "text",
      title: "Ingress",
    },
    {
      title: "Terningkast",
      name: "terningkast",
      type: "array",
      of: [
        { type: "string", value: "1, 2, 3, 4, 5", title: "Valgt terningkast" },
      ],
    },
    {
      title: "Prisnivå",
      name: "string",
      type: "string",
    },
    {
      name: "bacground",
      type: "text",
      title: "Om restauranten",
    },
    {
      name: "mainimage",
      type: "image",
      title: "Bilde",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alternativeText",
          type: "string",
          title: "Bildetekst",
          options: {
            isHighlighted: true, // <-- make this field easily accessible
          },
        },
      ],
    },
    {
      name: "menu",
      type: "string",
      title: "Bestilt fra menyen",
    },
    {
      name: "body",
      type: "text",
      title: "Anmeldelse",
    },
    {
      title: "Author",
      name: "authors",
      type: "array",
      of: [{ type: "reference", to: { type: "author" } }],
    },
  ],
};
