// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import post from "./post";
import kebab from "./kebab";
import author from "./author";
import activities from "./activities";
import rating from "./rating";
import richtext from "./richtext";
import calltoaction from "./calltoaction";
import aboutus from "./aboutus";
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    post,
    kebab,
    activities,
    author,
    rating,
    richtext,
    calltoaction,
    aboutus,
  ]),
});
