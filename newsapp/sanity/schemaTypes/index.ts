import { type SchemaTypeDefinition } from "sanity";

import { author } from "@/sanity/schemaTypes/author";
import { startup } from "@/sanity/schemaTypes/Startup";
import { playlist } from "@/sanity/schemaTypes/Playlist";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, startup, playlist],
};