import { h, FunctionComponent, Fragment } from 'preact';

interface LinkInfoProps {
  link: string;
  text: string;
}
const LinkInfo: FunctionComponent<LinkInfoProps> = ({ link, text }) => {
  return (
    <Fragment>
      <span class="styled_text container">{text}:</span>
      <p>
        <a href={link} target="_blank">
          {link}
        </a>
      </p>
    </Fragment>
  );
};

export default LinkInfo;
