import { h, FunctionComponent, Fragment } from 'preact';
import { useCreateWeeLink } from '../../../hooks';
import InputURLForm from '../../InputURLForm';
import PreviewURL from '../../Preview';
interface Link {
  shortURL: string;
  URL: string;
}
const Main: FunctionComponent = () => {
  const [{ data, loading, error }, createWeeLink] = useCreateWeeLink();

  if (error) {
    console.log('error', error);
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      {data ? (
        <PreviewURL link={data as Link} />
      ) : (
        <Fragment>
          <InputURLForm createLink={createWeeLink} />
          <p class="styled_text">Let's make a link a wee bit smaller...</p>
        </Fragment>
      )}
    </main>
  );
};

export default Main;
