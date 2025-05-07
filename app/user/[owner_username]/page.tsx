import UserPage from './userPage'

export default async function Home({ params }: { params: Promise<{ owner_username: string}> }) {
  const {owner_username} = await params;

  return <UserPage username={owner_username} />
}