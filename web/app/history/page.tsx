'use client';

import { Card, Title } from '@tremor/react';
import Search from './search';


interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export default async function IndexPage({
                                          searchParams
                                        }: {
  searchParams: { q: string };
}) {
  const search = searchParams.q ?? '';
  // const result = await sql`g
  //   SELECT id, name, username, email
  //   FROM manhole_web
  //   WHERE name ILIKE ${'%' + search + '%'};
  // `;
  // const users = result.rows as User[];

  return (
      <main className="p-4 md:p-10 mx-auto max-w-7xl">
        <Title>已识别井盖</Title>
        <Search />
        <Card className="mt-6">
          {/*<UsersTable users={users} />*/}
        </Card>
      </main>
  )
    ;
}
