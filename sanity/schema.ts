import { type SchemaTypeDefinition } from "sanity";
import { projectType } from "./schemaTypes/portfolioType";
import { blockContentType } from "./schemaTypes/blockContent";
import { experienceType } from "./schemaTypes/experienceType";
import { heroType } from "./schemaTypes/heroType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType, experienceType, blockContentType, heroType],
};
