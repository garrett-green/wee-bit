import { h, FunctionComponent, Fragment } from 'preact';

interface Link {
  shortURL: string;
  URL: string;
}

interface PreviewURLProps {
  link: Link;
}

const PreviewURL: FunctionComponent<PreviewURLProps> = ({
  link: { URL, shortURL },
}) => {
  return (
    <Fragment>
      <Fragment>
        <p class="styled_text">Wee URL Slug:</p> <p>{shortURL}</p>
      </Fragment>
      <Fragment>
        <p class="styled_text">Original URL:</p> <p>{URL}</p>
      </Fragment>
    </Fragment>
  );
};

export default PreviewURL;
