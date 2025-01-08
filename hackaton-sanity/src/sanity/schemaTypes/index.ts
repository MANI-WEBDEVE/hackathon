import { type SchemaTypeDefinition } from 'sanity'
import product from './product'
import herosection from './herosection'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, herosection],
}
