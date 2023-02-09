export default {
  title: 'User',
  name: 'user',
  type: 'document',
  fields: [
    {
      name: 'first_name',
      type: 'string',
      title: 'First Name'
    },
    {
      name: 'last_name',
      type: 'string',
      title: 'Last Name'
    },
    {
      title: 'Position',
      name: 'position',
      type: 'reference',
      to: [{ type: 'position' }],
    }
  ]
}