import { type SchemaTypeDefinition } from 'sanity'
import { Student } from './student'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Student],
}
