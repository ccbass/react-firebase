import { fetchGitHubUser } from "./github-utils"

describe('github fetch tests', () => {
  it('correctly fetches a user from github', async () => {
    const userJson = await fetchGitHubUser('ccbass')

    expect(userJson).toMatchObject(
      {
        "login": "ccbass",
        "id": 65682501,
        "node_id": "MDQ6VXNlcjY1NjgyNTAx",
        "type": "User",
      }
    )
  })

  it('returns null on invalid github user', async () => {
    const userJson = await fetchGitHubUser('azzzzafrsgrgser')

    expect(userJson).toEqual(null)
  })
})