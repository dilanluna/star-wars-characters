/// <reference types="vite-plugin-pwa/client" />
import { useRef } from 'react';
import { useRegisterSW } from 'virtual:pwa-register/react';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogOverlay,
  Button,
} from '@chakra-ui/react';

export default function ReloadPrompt() {
  const cancelButton = useRef(null);
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW();

  const handleClose = () => setNeedRefresh(false);
  const handleReload = () => updateServiceWorker(true);

  if (!needRefresh) {
    return null;
  }

  return (
    <AlertDialog
      closeOnEsc={false}
      isOpen={needRefresh}
      onClose={handleClose}
      closeOnOverlayClick={false}
      leastDestructiveRef={cancelButton}>
      <AlertDialogOverlay>
        <AlertDialogContent bg="gray.700">
          <AlertDialogBody fontWeight="medium">
            New content available, click on reload button to update.
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button
              ref={cancelButton}
              onClick={handleClose}
              colorScheme="whiteAlpha">
              Cancel
            </Button>
            <Button
              ml={3}
              colorScheme="yellow"
              onClick={handleReload}>
              Reload
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}
