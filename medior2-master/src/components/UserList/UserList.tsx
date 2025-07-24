import { JSX } from 'react';
import Link from 'next/link';
import ClientAuthorName from '@/components/UserList/ClientAuthorName';
import { UserType } from '@/types/user';

export default async function UserList(): Promise<JSX.Element> {
  const usersUrl: string = process.env.USERS_URL!;
  const mapyKey: string = process.env.MAPYCZ_API_KEY!; //insert your api key

  const res = await fetch(usersUrl);
  const users: UserType[] = await res.json();

  async function getMapLink(city: string): Promise<string | null> {
    const query = encodeURIComponent(city);
    const mapyUrl = `https://api.mapy.cz/v1/geocode?query=${query}&apikey=${mapyKey}`;
    try {
      const response = await fetch(mapyUrl);
      const data = await response.json();

      if (data?.items?.length > 0) {
        const { lat, lon } = data.items[0].position;
        return `https://mapy.cz/turisticka?source=coor&id=${lon}%2C${lat}&x=${lon}&y=${lat}&z=16`;
      }
    } catch (err) {
      console.error('Mapy.cz error:', err);
    }
    return null;
  }

  const mapLinks = await Promise.all(users.map((u) => getMapLink(u.address.city)));

  return (
    <div className="p-4">
      <h1 className="text-xxl font-bold mb-4">Users</h1>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(21rem,1fr))] gap-6 justify-items-center">
        {users.map((user, index) => (
          <div key={user.id} className="mb-2 rounded-xl px-5 pb-5 w-[21rem] shadow-sm hover:shadow-[0_4px_5px_rgba(59,130,246,0.15)]">
            <h2 className="text-lg mb-0">
              <ClientAuthorName userId={+user.id} fallbackName={user.name} />
            </h2>
            <div className="text-xs grid grid-cols-[6rem_1fr] gap-y-1">
              <span className="mb-3 text-gray">Username:</span><span className="text-gray-dark-1">{user.username}</span>
              <span className="text-gray">Email:</span><span className="text-gray-dark-1">{user.email}</span>
              <span className="text-gray">Phone:</span><span className="text-gray-dark-1">{user.phone}</span>
              <span className="text-gray">Website:</span><span className="text-gray-dark-1">{user.website}</span>
            </div>
            <div className="flex items-center gap-[8rem]">
              <h2 className="text-md mt-4 mb-1">Address</h2>
              {mapLinks[index] ? (
                <Link
                  href={mapLinks[index]!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline hover:no-underline focus:no-underline text-blue visited:text-blue"
                >
                  Show on map
                </Link>
              ) : (
                <Link
                  href={'https://mapy.com/en/turisticka?source=firm&id=13122283&x=16.6089262&y=49.1969262&z=18'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline hover:no-underline focus:no-underline text-blue visited:text-blue"
                >
                  Show on map
                </Link>
              )}
            </div>
            <div className="text-xs grid grid-cols-[6rem_1fr] gap-y-1">
              <span className="text-gray">Street:</span><span className="text-gray-dark-1">{user.address.street}</span>
              <span className="text-gray">Suite:</span><span className="text-gray-dark-1">{user.address.suite}</span>
              <span className="text-gray">City:</span><span className="text-gray-dark-1">{user.address.city}</span>
              <span className="text-gray">Zipcode:</span><span className="text-gray-dark-1">{user.address.zipcode}</span>
            </div>
            <h2 className="text-md mt-4 mb-1">Company</h2>
            <div className="text-xs grid grid-cols-[6rem_1fr] gap-y-1">
              <span className="text-gray">Name:</span><span className="text-gray-dark-1">{user.company.name}</span>
              <span className="text-gray">Catch phrase:</span><span className="text-gray-dark-1">{user.company.catchPhrase}</span>
              <span className="text-gray">BS:</span><span className="text-gray-dark-1">{user.company.bs}</span>
            </div>
            <Link
              href={`/articles/${user.id}`}
              className="mt-7 inline-block rounded-md border border-blue px-[6.7rem] py-2 text-blue text-sm focus:outline-none no-underline hover:no-underline focus:no-underline text-blue visited:text-blue"
            >
              Read articles
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
