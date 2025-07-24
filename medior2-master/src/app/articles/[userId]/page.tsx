import { JSX } from 'react';
import { ArticleType } from '@/types/article';
import { UserType } from '@/types/user';
import ClientAuthorName from '../../../components/UserList/ClientAuthorName';

type Props = {
  params: {
    userId: string;
  };
};

export default async function ArticlePage({ params }: Props): Promise<JSX.Element> {
  const userId = params.userId;

  const articlesUrl = process.env.ARTICLES_URL!;
  const userUrl = process.env.USER_URL!;

  const articlesRes = await fetch(articlesUrl.replace('{useId}', userId));
  const articles: ArticleType[] = await articlesRes.json();

  const userRes = await fetch(userUrl.replace('{useId}', userId));
  const user: UserType = await userRes.json();

  return (
    <div className="pt-10">
      <h1 className="text-xxl font-bold mb-2">Articles</h1>
      <div className="flex items-baseline text-xs text-gray gap-7">
        <p>Author</p>
        <span className="ml-2 text-gray">
          <ClientAuthorName userId={+userId} fallbackName={user.name} />
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {articles.map((article) => (
          <div key={article.id} className="rounded-xl shadow-sm px-5">
            <h2 className="text-xl font-bold mb-2"> {article.title.charAt(0).toUpperCase() + article.title.slice(1)}</h2>
            <p className="text-sm text-gray"> {article.body.charAt(0).toUpperCase() + article.body.slice(1)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
