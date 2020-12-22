import { h, FunctionComponent, Fragment } from 'preact';
import { Link } from '../../types';

interface ConfirmationProps {
  link: Link;
}

const Confirmation: FunctionComponent<ConfirmationProps> = ({
  link: { URL, shortURL },
}) => {
  return (
    <Fragment>
      <Fragment>
        <p class="styled_text">Wee Link:</p>{' '}
        <p>
          <a href={window.location.href + shortURL} target="_blank">
            {window.location.href + shortURL}
          </a>
        </p>
      </Fragment>
      <Fragment>
        <p class="styled_text">Original URL/Destination:</p> <p>{URL}</p>
      </Fragment>
    </Fragment>
  );
};

export default Confirmation;
