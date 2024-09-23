
import { Button, Title } from '@mantine/core'
import { useRouter } from 'next/router'
import React from 'react'
import { ContextModalProps } from '@mantine/modals';

const WelcomeModal = ({
  context,
  id,
  innerProps,
}: ContextModalProps) => {
  const router = useRouter();

  return (

    <div
      className='text-white flex flex-col gap-4 justify-center items-center'
    >
      <Title size='sm' align='center'>
        Thank you for coming to Recipes App!
        Let's go to see Japanese cuisine!
      </Title>
      <Button onClick={() => {
        router.push('/cuisine/Japanese');
        context.closeModal(id);
      }}>
        GO!
      </Button>

    </div>

  )
}

export default WelcomeModal
