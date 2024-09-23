import { Container } from "@mantine/core";
import { openContextModal } from '@mantine/modals';
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    openCartModal();
  }, []);

  const openCartModal = () => {
    openContextModal({
      modal: 'welcomeModal',
      size: 'xl',
      innerProps: {
      },
      styles: {
        header: {
          background: 'linear-gradient(to right, #36a2cd, #dfd892)'
        },
        body: {
          background: 'linear-gradient(to right, #36a2cd, #dfd892)'
        },
      }
    })
  };

  return (
    <div >
      <Container p='md'>
        <div>
          Choose a cuisine
        </div>
      </Container>
    </div>
  )
}

