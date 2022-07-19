import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { ArrowBackIcon } from '@chakra-ui/icons';

export default function BackButton() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Button
      variant="link"
      colorScheme="yellow"
      onClick={handleGoBack}
      leftIcon={<ArrowBackIcon />}>
      Go back
    </Button>
  );
}
