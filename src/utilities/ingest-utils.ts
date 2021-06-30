export const formatDate = (date: string): string => {
  const formDate = new Date(date)
  
  const month = (formDate.getMonth() + 1).toString()
  const day = formDate.getDate().toString()
  const year = formDate.getFullYear()

  return `${month.length > 1 ? month : '0' + month}-${day.length > 1 ? day : '0' + day}-${year}`
}