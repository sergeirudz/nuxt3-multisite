import contactsData from './contactsData'

export const useFetchContacts = (route: string) => {
  if (route) return contactsData.filter((contact) => contact.slug === route)
  else return contactsData
}
