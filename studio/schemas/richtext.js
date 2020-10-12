export default {
  name: "richtext",
  type: "array",
  tittle: "Inhhold",
  of: [
    { type: "block" },
    { type: "image", icon: () => "🖼" },
    { type: "calltoaction" },
  ],
};
