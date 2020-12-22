import { h, FunctionComponent, Fragment } from 'preact';
import { Link } from '../../types';
import LinkInfo from './LinkInfo';

interface ConfirmationProps {
  link: Link;
}

const Confirmation: FunctionComponent<ConfirmationProps> = ({
  link: { URL, shortURL },
}) => {
  return (
    <Fragment>
      <LinkInfo link={window.location.href + shortURL} text="Wee Link" />
      <LinkInfo link={URL} text="Original URL/Destination" />
    </Fragment>
  );
};

export default Confirmation;
