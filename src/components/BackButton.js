import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const BackButton = () => {
  const router = useRouter();

  return (
    <div className="relative">
      <div className="absolute bottom-2 mr-4">
      <button onClick={() => router.push('/')}>
          <FontAwesomeIcon icon={faArrowLeft} size="lg" />
        </button>
      </div>
      {/* rest of the page content */}
    </div>
  );
}

export default BackButton;