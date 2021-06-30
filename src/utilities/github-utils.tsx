export const fetchGitHubUser = async (username: string): Promise<any> => {
  const user = await fetch(`https://api.github.com/users/${username}`)
  if(user.status === 200){
    const userJson = await user.json()
    return userJson
  }
  return null
}